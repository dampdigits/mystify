// hobbies.js

var element = document.getElementById('page-title');

var typewriter = new Typewriter(element, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(1250)
  .typeString('My Hobbies')
  .pauseFor(10000)
  .start();
