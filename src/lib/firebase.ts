import { initializeApp, getApps, cert } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Auth
export const auth = getAuth(app);

// Admin SDK (for server-side)
import admin from 'firebase-admin';

let adminApp: admin.app.App;

if (typeof window === 'undefined' && process.env.FIREBASE_PRIVATE_KEY) {
  const serviceAccount = {
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  };

  adminApp = getAdminApps().length === 0
    ? admin.initializeApp({
        credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
      })
    : getAdminApps()[0];
}

export function getAdminApp() {
  if (!adminApp) {
    throw new Error('Firebase Admin not initialized');
  }
  return adminApp;
}

function getAdminApps() {
  return admin.apps;
}
