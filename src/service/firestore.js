import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { v4 as uuidv4 } from "uuid";

const firebaseConfig = {
  apiKey: "AIzaSyANPzpJcvtuhUmkYctmw0A272WwkOWz1X8",
  authDomain: "restaurant-food-2059b.firebaseapp.com",
  projectId: "restaurant-food-2059b",
  storageBucket: "restaurant-food-2059b.appspot.com",
  messagingSenderId: "120851142007",
  appId: "1:120851142007:web:9212c6383ea27532383d72"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getProductFood = async () => {
  const collectionProduct = collection(db, "food_product");
  const documentFood = await getDocs(collectionProduct);
  const foods = documentFood.docs.map((doc) => doc.data());
  return foods;
};