import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

const getPerson = async () => {
    const querySnapshot = await getDocs(collection(db, "PERSON"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
}

export { getPerson }