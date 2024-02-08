// /app/api/send-notification.js
import webpush from 'web-push';

// Your VAPID keys
const vapidKeys = {
 publicKey: 'BOy88gPe6gMtsBKqHWpaELx5GJZxvomTKkjjJMdO_tkpAPb5EF_DsxW5MZiEOCT-Dz0pXu92eboKTbFvx-Cx-LI',
 privateKey: 'Gg5kSlg7QK7jtuiGrnbbFESDI8pDPkOnu95lG48yjyI',
};

webpush.setVapidDetails(
 'mailto:arbuckle.liam@gmail.com',
 vapidKeys.publicKey,
 vapidKeys.privateKey
);

export default async function handler(req, res) {
 if (req.method === 'POST') {
    const { message } = req.body;

    // Assuming you have a list of subscriptions stored somewhere
    // This could be in a database or in-memory for simplicity
    const subscriptions = [/* Your list of subscriptions */];

    let pushResults = await Promise.all(
      subscriptions.map((subscription) =>
        webpush.sendNotification(subscription, JSON.stringify({ message }))
      )
    );

    res.status(200).json({ message: 'Notification sent to all subscribers' });
 } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
 }
}
