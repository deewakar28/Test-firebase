importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyC99LAZs_YEuf7-WxmnCwbT7YRCviw3_O0",
  authDomain: "notifications-project-78d8c.firebaseapp.com",
  projectId: "notifications-project-78d8c",
  storageBucket: "notifications-project-78d8c.appspot.com",
  messagingSenderId: "877006131908",
  appId: "1:877006131908:web:c0d173367b46612a91af91",
  measurementId: "G-RN1G40N2SQ"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});