import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBFRN0Vo_glzMedI-HcjVOlb3esKo7EK-c",
  authDomain: "real-estate-app-fd524.firebaseapp.com",
  projectId: "real-estate-app-fd524",
  storageBucket: "real-estate-app-fd524.appspot.com",
  messagingSenderId: "590275476396",
  appId: "1:590275476396:web:a87b44021daedaa4f31809",
  measurementId: "G-P46HFD121K"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);