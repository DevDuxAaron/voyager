import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

const getAllPhoto = async () => {
    const querySnapshot = await getDocs(collection(db, "PHOTO"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
}

export { getAllPhoto }