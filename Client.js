function run() {
  var yoko = new Participant("Yoko");
  var john = new Participant("John");
  var paul = new Participant("Paul");
  var ringo = new Participant("Ringo");

  var chatroom = new Chatroom();
  chatroom.register(yoko);
  chatroom.register(john);
  chatroom.register(paul);
  chatroom.register(ringo);

  yoko.send("All you need is love.");
  yoko.send("I love you John.");
  john.send("Hey, no need to broadcast", yoko);
  paul.send("Ha, I heard that!");
  ringo.send("Paul, what do you think?", paul);
}
