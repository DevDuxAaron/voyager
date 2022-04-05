import { doc, getDocFromCache, getDoc } from "firebase/firestore";
import { PhotoClass } from "../components/Photo/Photo";
import { db } from "./firebase";

const photoConverter = {
    toFirestore: (photo) => {
        return {
            id_person: photo.id_person,
            no_likes: photo.no_likes,
            route: photo.route,
            id_comment: photo.id_comment
            };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new PhotoClass(data.id_person, data.no_likes, data.route, data.id_comment);
    }
};

// Get a document, forcing the SDK to fetch from the offline cache.
const getPhoto = async (id) => {
    const docRef = doc(db, "PHOTO", id).withConverter(photoConverter)
    // try {
    //     const doc = await getDocFromCache(docRef);
    //     // Document was found in the cache. If no cached document exists,
    //     // an error will be returned to the 'catch' block below.
    //     console.log("Cached document data:", doc.data());
    //     return doc.data()
    // } catch (e) {
    //     console.log("Error document data:", e);
    //     const docSnap = await getDoc(docRef);
    //     if (docSnap.exists()) {
    //         console.log("Document data:", docSnap.data());
    //         return docSnap.data();
    //     } else {
    //         // doc.data() will be undefined in this case
    //         console.log("No such document!");
    //         return null
    //     }
    // }
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        let photo = docSnap.data();
        return photo
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        return null
    }
}

export { getPhoto }
