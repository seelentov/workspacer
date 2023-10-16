import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// Оставлю свои токены для вашего теста
const firebaseConfig = {
  apiKey: "AIzaSyAtq9v2CZdnW5iqokN25bpF07W7uYY6in4",
  authDomain: "workspace-6a77e.firebaseapp.com",
  projectId: "workspace-6a77e",
  storageBucket: "workspace-6a77e.appspot.com",
  messagingSenderId: "23403331548",
  appId: "1:23403331548:web:4652f97eb70c3e052f5919"
};

export const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)