import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDhI5Rkfnq8-ZzLau-paKzlDJYO92LK1c4",
    authDomain: "schedulo-d531d.firebaseapp.com",
    projectId: "schedulo-d531d",
    storageBucket: "schedulo-d531d.firebasestorage.app",
    messagingSenderId: "705520765278",
    appId: "1:705520765278:web:146f8f5dc90069d08627cf",
    measurementId: "G-6V2B3ZNSRW"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});