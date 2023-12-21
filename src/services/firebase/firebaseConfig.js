
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB9PCFCVoHBuRz3ios3ZwFxzoSez1iOIcU",
  authDomain: "e-commerce-residence.firebaseapp.com",
  projectId: "e-commerce-residence",
  storageBucket: "e-commerce-residence.appspot.com",
  messagingSenderId: "670093206830",
  appId: "1:670093206830:web:9c5695e395e34e593286bf"
};


const app = initializeApp(firebaseConfig);

export default db = getFirestore(app)