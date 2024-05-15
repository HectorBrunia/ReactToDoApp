import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
const storage = getStorage(app, "gs://react-todo-app-3e5dc.appspot.com");
export const login = ({ email, password }) =>
  signInWithEmailAndPassword(auth, email, password);

export const register = ({ email, password }) =>
  createUserWithEmailAndPassword(auth, email, password);

export const logOut = () => signOut(auth);

export const updateUser = (userName, userPhoto) =>
  updateProfile(auth.currentUser, {
    displayName: userName,
    photoURL: userPhoto,
  });
export const updateUserImg = (file, user) => {
  console.log(file);
  const storageRef = ref(storage, "userImage/" + user.uid + ".jpg");
  try {
    uploadBytes(storageRef, file).then((snapshot) => {
      console.log(snapshot);
    });
  } catch (error) {
    console.log(error);
  } finally {
    getDownloadURL(storageRef).then((url) => {
      updateUser(user.displayName, url);
    });
  }
};
