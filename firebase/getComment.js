import { doc, getDoc } from "firebase/firestore";
import { CommentClass } from "../components/Comment/Comment";
import { db } from "./firebase";

const commentConverter = {
    toFirestore: (comment) => {
        return {
            id_user: comment.id_user,
            content: comment.content,
            creation_date: comment.creation_date,
            id_comment: comment.id_comment,
            id_photo: comment.id_photo,
            last_activity_date: comment.last_activity_date,
            mentions: comment.mentions,
            no_likes: comment.no_likes,
            no_replies: comment.no_replies
        };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new CommentClass(
            data.id_user,
            data.content,
            data.creation_date,
            data.id_comment,
            data.id_photo,
            data.last_activity_date,
            data.mentions,
            data.no_likes,
            data.no_replies
        );
    }
};

// Get a document, forcing the SDK to fetch from the offline cache.
const getComment = async (id) => {
    const docRef = doc(db, "COMMENT", id).withConverter(commentConverter)
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        let comment = docSnap.data();
        return comment
    } else {
        console.log("No such document!");
        return null
    }
}

export { getComment, commentConverter }
