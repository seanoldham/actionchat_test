var Remote = {};

Remote.cable = Cable.createConsumer("<%= Rails.application.config.web_socket_server_url %>");

Remote.messaging = Remote.cable.subscriptions.create('MessagesChannel', {
  received: function(data) {
    $(this).trigger('received', data);
  },
  sendMessage: function(messageBody) {
    this.perform('send_message', { body: messageBody });
  }
});
