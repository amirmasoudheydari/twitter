// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "twitter-v1.firebaseapp.com",
  projectId: "twitter-v1",
  storageBucket: "twitter-v1.appspot.com",
  messagingSenderId: "1073716373904",
  appId: "1:1073716373904:web:2dbfbe8ec3bd65f60b2b15"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export {app, db, storage}