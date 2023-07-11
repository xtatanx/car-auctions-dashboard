import { Firestore } from '@google-cloud/firestore';

const dbInstance = new Firestore({
  projectId: process.env.FIRESTORE_PROJECT_ID,
  credentials: {
    client_email: process.env.FIRESTORE_CLIENT_EMAIL,
    private_key: process.env.FIRESTORE_PRIVATE_KEY,
  },
});

export default dbInstance;
