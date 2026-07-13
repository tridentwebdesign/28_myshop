// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  // ここに、コンソールでコピーした設定を貼り付ける
  apiKey: 'AIzaSyDub5zCyjCp9_oKvsdKazVxyhC4__FbuHQ',
  authDomain: 'react-ecsite-cbd08.firebaseapp.com',
  projectId: 'react-ecsite-cbd08',
  storageBucket: 'react-ecsite-cbd08.firebasestorage.app',
  messagingSenderId: '529610530087',
  appId: '1:529610530087:web:6eae6ee0212d3d131a9d02',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
