var tl = gsap.timeline({repeat: 0, repeatDelay: 1});
tl.delay(0.5);

tl.from("#para09", {
  x: 1000,
  duration: 1
}, 0);
tl.from("#para08", {
  x: 1000,
  duration: 1.5
}, 0);

tl.from("#para07", {
  x: 1000,
  duration: 1.4
},0);
tl.from("#para06", {
  x: 1000,
  duration: 0.9
},0);
tl.from("#para05", {
  x: 1000,
  duration: 0.8
},0);
tl.from("#para04", {
  x: 1000,
  duration: 0.9
},0);
tl.from("#para01", {
  x: 1000,
  duration: 1.4
},0);

tl.from("#para03", {
  x: -500,
  duration: 0.6
},0);
tl.from("#para02", {
  x: -500,
  duration: 1.4
},0);



tl.from("#head1", {
  x: -500,
  opacity: 0,
  duration: 1.5
},0);

tl.delay(0.5);

tl.from("#head2", {
  opacity: 0,
  duration: 2
},1.2);
