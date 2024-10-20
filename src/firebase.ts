import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDXx46dxXosKGszRNQHb83N3LEwaIFQ1Ww",
  authDomain: "nwitter-reloaded-c0c58.firebaseapp.com",
  projectId: "nwitter-reloaded-c0c58",
  storageBucket: "nwitter-reloaded-c0c58.appspot.com",
  messagingSenderId: "844576136676",
  appId: "1:844576136676:web:170b728ce899113d693bf1"
};

const app = initializeApp(firebaseConfig);

export const auth =  getAuth(app);