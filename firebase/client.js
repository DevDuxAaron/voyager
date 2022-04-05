// import * as firebase from "firebase/app"
// import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";

// // import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//     apiKey: "AIzaSyAzFEV3LIw6vELxbZNrLK6DR9ffvun7-k4",
//     authDomain: "voyager-3a55f.firebaseapp.com",
//     projectId: "voyager-3a55f",
//     storageBucket: "voyager-3a55f.appspot.com",
//     messagingSenderId: "594191903493",
//     appId: "1:594191903493:web:77a6ce8e38b515d660656c",
//     measurementId: "G-8Y6M9MHTV8"
// };

// firebase.initializeApp(firebaseConfig)
// // const app = initializeApp(firebaseConfig);

// const mapUserFromFireBaseAuth = (result) => {
//     // This gives you a GitHub Access Token. You can use it to access the GitHub API.
//     // const credential = GithubAuthProvider.credentialFromResult(result);
//     // const token = credential.accessToken;
//     // The signed-in user info.
//     // const user = result.user;
//     const { displayName } = result
//     const { email } = result
//     const { phoneNumber } = result
//     const { photoURL } = result
//     return {
//         displayName: displayName,
//         email: email,
//         phoneNumber: phoneNumber,
//         photoURL: photoURL
//     }
// }

// export const onAuthStateChanged = (onChange) => {
//     return getAuth().onAuthStateChanged(result => {
//         console.log("result: ", result);
//         const normalizedUser = mapUserFromFireBaseAuth(result)
//         onChange(normalizedUser)
//     })
// }

// export const loginWithGitHub = () => {
//     const provider = new GithubAuthProvider();
//     // return firebase.auth().signInWithPopUp(provider)

//     // const provider = new GithubAuthProvider();
//     const auth = getAuth();
//     signInWithPopup(auth, provider)
//     .then(mapUserFromFireBaseAuth)
//     .catch((error) => {
//         // Handle Errors here.
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // The email of the user's account used.
//         const email = error.email;
//         // The AuthCredential type that was used.
//         const credential = GithubAuthProvider.credentialFromError(error);
//         // ...
//     });
// }

