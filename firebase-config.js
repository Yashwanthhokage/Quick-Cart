// Firebase Configuration
// Your Firebase config is now properly set!

const firebaseConfig = {
  apiKey: "AIzaSyB_Gs32XD5c7yxcxwf0Hd6DZZJcZP6PL3Q",
  authDomain: "quick-cart-4b061.firebaseapp.com",
  projectId: "quick-cart-4b061",
  storageBucket: "quick-cart-4b061.firebasestorage.app",
  messagingSenderId: "978245527517",
  appId: "1:978245527517:web:4cd76628bb21e1e7f2b834"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize services
const auth = firebase.auth();
const db = firebase.firestore();

// Export for use in other files
window.auth = auth;
window.db = db;

console.log('Firebase initialized successfully!');
console.log('Project:', firebaseConfig.projectId);

