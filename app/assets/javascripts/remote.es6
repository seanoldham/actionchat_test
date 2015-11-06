var Remote = {};

Remote.cable = Cable.createConsumer("ws://calm-tor-2780.herokuapp.com/");

Remote.messaging = Remote.cable.subscriptions.create('MessagesChannel', {
  received: function(data) {
    $(this).trigger('received', data);
  },
  sendMessage: function(messageBody) {
    this.perform('send_message', { body: messageBody });
  }
});
