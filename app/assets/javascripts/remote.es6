var Remote = {};

Remote.cable = Cable.createConsumer("wss://localhost:3000/");

Remote.messaging = Remote.cable.subscriptions.create('MessagesChannel', {
  received: function(data) {
    $(this).trigger('received', data);
  },
  sendMessage: function(messageBody) {
    this.perform('send_message', { body: messageBody });
  }
});
