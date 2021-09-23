let app;
window.onload = function() {
  app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: 0xeeeeee
  });

  //adds app.viewer instance into div with ID: appview
  document.getElementById('home_interactive').appendChild(app.view)
  let radius = 50;
  let pointer_x = 0;
  let pointer_y = 0;
  let radius_aim = 50;
  let satellite = false;
  let angle;
  const gr = new PIXI.Graphics();
  gr.beginFill(0x373737);
  // gr.drawCircle(app.view.width / 2, app.view.height / 2, radius);
  let center = new PIXI.Point(app.view.width / 2, app.view.height / 2);
  var vertices = [];
  for(let i = 0; i < 40; i++){
    let rad = new PIXI.Point(0, 0);
    angle = 0 + 2*i*Math.PI/40;
    rad.x = 0 * Math.cos(angle) - app.view.width/15 * Math.sin(angle);
    rad.y = 0 * Math.sin(angle) + app.view.width/15 * Math.cos(angle);
    let sat = center.add(rad);
    vertices.push(new PIXI.Point(sat.x,sat.y));
  };
  gr.drawPolygon(vertices);
  gr.endFill();
  gr.interactive = true;
  gr.buttonMode = true;
  gr.on('pointerover', doPointerOver);
  gr.on('pointerout', doPointerOut);


  app.stage.addChild(gr);
  app.stage.interactive = true;
  app.stage.on("pointermove", movePoly);


  app.ticker.add(() => {
    gr.clear()
    gr.beginFill(0x373737);
    gr.drawPolygon(vertices);

  });

  function movePoly(e){
    if(e != null){
      pointer_x = e.data.global.x;
      pointer_y = e.data.global.y;
      for(let i = 0; i < 200; i++){

        let rad = new PIXI.Point(0, 0);
        angle = 0 + 2*i*Math.PI/200;
        let denom = 25;
        rad.x = app.view.width/denom * Math.cos(angle) - 0 * Math.sin(angle);
        rad.y = app.view.width/denom * Math.sin(angle) + 0 * Math.cos(angle);
        let sat = center.add(rad);
        let dist =  Math.sqrt( Math.pow((sat.x-pointer_x), 2) + Math.pow((sat.y-pointer_y), 2) );
        let dist_fac = dist/50 + 1;
        let skew_vec = new PIXI.Point(0, 0);
        skew_vec.x = pointer_x/dist_fac * Math.cos(angle) - pointer_y/dist_fac * Math.sin(angle);
        skew_vec.y = pointer_x/dist_fac * Math.sin(angle) + pointer_y/dist_fac * Math.cos(angle);
        let new_sat = sat.add(skew_vec);
        vertices[i] = (new PIXI.Point(new_sat.x,new_sat.y));
      };

    }
  };


  function make_polygon(rand) {
  }



  function doPointerOver() {
  }

  function doPointerOut() {

  }
}
