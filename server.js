const express = require('express');
const webpush = require('web-push');

const app = express();
const port = 3001;

// Configure web-push
const vapidKeys = webpush.generateVAPIDKeys();

webpush.setVapidDetails(
 'mailto:example@yourdomain.org',
 vapidKeys.publicKey,
 vapidKeys.privateKey
);

// Subscribe route
app.post('/subscribe', (req, res) => {
 const subscription = req.body;
 res.status(201).json({});
 // Here you would typically save the subscription to a database
});

// Send notification route
app.post('/send-notification', (req, res) => {
 const subscription = req.body;
 const payload = JSON.stringify({ title: 'Push Notification Title' });

 webpush.sendNotification(subscription, payload).catch(err => console.error(err));

 res.status(200).json({});
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
