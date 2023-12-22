
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC05n279Aep64jxafMY2pAlBKFIvRYpufM",
  authDomain: "residence-3e105.firebaseapp.com",
  projectId: "residence-3e105",
  storageBucket: "residence-3e105.appspot.com",
  messagingSenderId: "377384095002",
  appId: "1:377384095002:web:bb3257c4eb41a7959770a3",
  measurementId: "G-JDNHZTC3ZY"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)