$(document).ready(function() {

  AFRAME.registerComponent('collider-check', {
    dependencies: ['raycaster'],
    init: function () {
      this.el.addEventListener('raycaster-intersected', function () {
        console.log('Player hit something!');
      });
    }
  });

//For slide1
  function showSlide1() {
    $(".logo").attr('visible', 'false');
    $(".slide1").attr('visible', 'true');
  }

  setTimeout(showSlide1, 4000);

//For slide2
  function showSlide2() {
    $(".slide1").attr('visible', 'false');
    $(".slide2").attr('visible', 'true');

  }

  setTimeout(showSlide2, 6000);

//For slide2
  function showSlide3() {
    $(".slide2").attr('visible', 'false');
    $(".slide3").attr('visible', 'true');
  }

  setTimeout(showSlide3, 10000);

//For slide4
  function showSlide4() {
    $(".slide3").attr('visible', 'false');
    $(".slide4").attr('visible', 'true');
  }

  setTimeout(showSlide4, 14000);

//For slide5
  function showSlide5() {
    $(".slide4").attr('visible', 'false');
    $(".slide5").attr('visible', 'true');
  }

  setTimeout(showSlide5, 17000);

  //For slide6
  function showSlide6() {
    $(".slide5").attr('visible', 'false');
    $(".slide6").attr('visible', 'true');
  }

  setTimeout(showSlide6, 20000);


  //For slide7
  function showSlide7() {
    $(".slide6").attr('visible', 'false');
    $(".slide7").attr('visible', 'true');
  }

  setTimeout(showSlide7, 25000);


  //For slide8
  function showSlide8() {
    $(".slide7").attr('visible', 'false');
    $(".slide8").attr('visible', 'true');
  }

  setTimeout(showSlide8, 30000);

  //For slide9
  function showSlide9() {
    $(".slide8").attr('visible', 'false');
    $(".slide9").attr('visible', 'true');
  }

  setTimeout(showSlide9, 35000);

  //For slide10
  function showSlide10() {
    $(".slide9").attr('visible', 'false');
    $(".slide10").attr('visible', 'true');
  }

  setTimeout(showSlide10, 40000);

  //Time to wake up

  function wakeUp() {
    $(".slide10").attr('visible', 'false');
    $(".white-plane").attr('visible', 'false');
    $(".instructions").attr('visible', 'true');

    var chains = document.querySelector('.chains-falling');
    chains.components.sound.playSound();
  }

  setTimeout(wakeUp, 47000);


  function doorOpen() {

    var door = document.querySelector('.door-open');
    door.components.sound.playSound();
    $(".cave-exit").attr('visible', 'true');
    var camera = document.querySelector('[camera]');
    //camera.setAttribute('wasd-controls-enabled');
    camera.removeAttribute('wasd-controls-enabled');

  }

  setTimeout(doorOpen, 48000)

});
