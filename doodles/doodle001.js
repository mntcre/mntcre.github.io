let app;
window.onload = function() {
  app = new PIXI.Application({
    width: 400,
    height: 400,
    backgroundColor: 0xeeeeee
  });

  //adds app.viewer instance into div with ID: appview
  document.getElementById('doodle001').appendChild(app.view)
  let radius = 50;
  let radius_aim = 50;
  let satellite = false;
  let angle;
  const gr = new PIXI.Graphics();
  gr.beginFill(0x363636);
  gr.drawCircle(app.view.width / 2, app.view.height / 2, radius);
  //gr.endFill();
  gr.interactive = true;
  gr.buttonMode = true;
  gr.on('pointerover', doPointerOver);
  gr.on('pointerout', doPointerOut);


  app.stage.addChild(gr)

  app.ticker.add(() => {
    gr.clear()
    gr.beginFill(0x363636);
    //gr.drawCircle(app.view.width / 2, app.view.height / 2, radius);
    radius = growCircle(radius);
    let center = new PIXI.Point(app.view.width / 2, app.view.height / 2);
    let rad = new PIXI.Point(0, 150);
    angle += 0.05;
    rad.x = 0 * Math.cos(angle) - 150 * Math.sin(angle);
    rad.y = 0 * Math.sin(angle) + 150 * Math.cos(angle);
    let sat = center.add(rad)
    if (satellite == true) {
      gr.drawCircle(sat.x, sat.y, 25);
    }

  });

  function growCircle(new_radius){
    if (new_radius < radius_aim){
      new_radius = new_radius + 5;
      gr.drawCircle(app.view.width / 2, app.view.height / 2, new_radius);
      console.log(new_radius)
      console.log(radius_aim)
    } else{
      gr.drawCircle(app.view.width / 2, app.view.height / 2, new_radius);
    }

    return new_radius;
  }



  function doPointerOver() {
    angle = Math.random()*2*Math.PI;
    radius_aim = 100;
    satellite = true;
  }

  function doPointerOut() {
    radius = 50;
    radius_aim = 50;
    satellite = false;
  }
}
