var element = document.getElementById('greetingText');

var typewriter = new Typewriter(element, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('Hello World!')
  .pauseFor(2500)
  .deleteAll()
  .typeString("I'm Sameer")
  .pauseFor(10000)
  .start();
