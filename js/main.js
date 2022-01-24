jQuery(document).ready(function($){

  $('.lazy').lazyload({
    effect: "fadeIn"
  });

  var parallax = [];
  ['baloon-1', 'baloon-2', 'baloon-3', 'cloud-1', 'cloud-2', 'cloud-2', 'hourglass', 'girl', 'book'].forEach((el, index) => { if(document.getElementById(el)) parallax['parallaxInstance' + index] = new Parallax(document.getElementById(el))})
  // var scene = document.getElementById('baloon-1');
  // var parallaxInstance1 = new Parallax(scene);

  // var scene_2 = document.getElementById('baloon-2');
  // var parallaxInstance2 = new Parallax(scene_2);

  // var scene_3 = document.getElementById('baloon-3');
  // var parallaxInstance3 = new Parallax(scene_3);

  // var cloud = document.getElementById('cloud-1');
  // var parallaxInstance4 = new Parallax(cloud);

  // var cloud_2 = document.getElementById('cloud-2');
  // var parallaxInstance5 = new Parallax(cloud_2);

  // var hourg_lass = document.getElementById('hourglass');
  // var parallaxInstance6 = new Parallax(hourg_lass);



  var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onLeave", duration: "50%"}});
  // build scenes
  new ScrollMagic.Scene({triggerElement: "#parallax"})
          .setTween("#parallax > .bg", {y: "-100px", ease: Linear.easeIn})
          // .addIndicators()
          .addTo(controller);
  

  var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       100,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
);
wow.init();
});