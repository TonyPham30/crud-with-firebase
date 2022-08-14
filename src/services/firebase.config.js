import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// init app
firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
});
//  config auth with google
export const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
export const signinWithGoogle = () => {
  auth
    .signInWithPopup(googleProvider)
    .then((res) => {
      console.log(res.user);
      const accessToken = res.user.multiFactor.user.accessToken;
      localStorage.setItem("access_token", accessToken);
    })
    .catch((err) => {
      console.log(err);
    });
};
