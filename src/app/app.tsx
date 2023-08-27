// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import NxWelcome from './nx-welcome';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_API_KEY,
    projectId: import.meta.env.VITE_AUTH_DOMAIN,
    storageBucket: import.meta.env.VITE_PROJECT_ID,
    messagingSenderId: import.meta.env.VITE_STORAGE_BUCKET,
    appId: import.meta.env.VITE_MESSAGING_SENDER_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export function App() {
    console.log(app);
  return (
    <div>
      <NxWelcome title="ehfs-adresse-karte" />

    </div>
  );
}

export default App;
