import consumer from "./consumer"

consumer.subscriptions.create("NotificationChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    if (Notification.permission === 'granted') {
      const title = 'Push Notification'
      const body = data
      const options = { body: body }
      new Notification(title, options)
    }
  }
});
