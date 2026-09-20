import admin from 'firebase-admin';
import { initializeApp, cert } from 'firebase-admin/app';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let serviceAccount;

if (process.env.FIREBASE_CREDENTIALS) {
  serviceAccount = JSON.parse(process.env.FIREBASE_CREDENTIALS);
} 
else {
  const keyPath = path.resolve(__dirname, '../serviceAccountKey.json');
  if (fs.existsSync(keyPath)) {
    serviceAccount = JSON.parse(fs.readFileSync(keyPath, 'utf8'));
  } else {
    throw new Error("Missing Firebase Credentials! Provide FIREBASE_CREDENTIALS in env or serviceAccountKey.json locally.");
  }
}

const app = initializeApp({
  credential: cert(serviceAccount),
});

export { app, admin };