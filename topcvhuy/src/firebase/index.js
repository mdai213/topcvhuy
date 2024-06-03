//src/firebase/index.js

import { initializeApp } from "firebase/app";
import { getFirestore,  } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDydA3HG1L2bbDm10nhU5L3LfqUgsSVYsc",
    authDomain: "topcvhuy-69ae7.firebaseapp.com",
    projectId: "topcvhuy-69ae7",
    storageBucket: "topcvhuy-69ae7.appspot.com",
    messagingSenderId: "924649495073",
    appId: "1:924649495073:web:2c978083e268ef6af82160",
    measurementId: "G-4YLDYMB40G"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);


export default db;