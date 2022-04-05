import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "./firebase";


const createPerson = async () => {
    try {
        const docRef = await addDoc(collection(db, "PERSON"), {
            birth_date: Timestamp.fromDate(new Date("July 23, 1992")),
            email: "antman@mail.com",
            first_name: "Scott",
            gender: "male",
            language: "english",
            last_connection_date: "5 de marzo de 2022, 16:45:00 UTC-4",
            last_name: "Lang",
            password: "antman123",
            profile_photo: "/userMale.jpg",
            second_last_name: "Pym",
            second_name: ""
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export { createPerson }