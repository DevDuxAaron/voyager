import { collection, getDocs, where } from "firebase/firestore";
import { db } from "./firebase";

const getAllComment = async (idPhoto) => {
    const querySnapshot = await getDocs(collection(db, "COMMENT"), where("id_photo", "==", `/PHOTO/${idPhoto}`))
    let result = []
    querySnapshot.forEach((doc) => {
        // console.log(`${doc.id} => ${doc.data()}`);
        result.push(doc.data())
    });
    return result
}

export { getAllComment }