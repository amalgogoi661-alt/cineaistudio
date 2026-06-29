import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCRw2vnz9i4ktCtQbVmwsbBhSzmuGNMm4w",
  authDomain: "cineai-studio-c63ca.firebaseapp.com",
  projectId: "cineai-studio-c63ca",
  storageBucket: "cineai-studio-c63ca.firebasestorage.app",
  messagingSenderId: "67305661468",
  appId: "1:67305661468:web:1523f56af6c8d5d7b7abd9"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
