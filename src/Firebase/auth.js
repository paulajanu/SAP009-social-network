import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

//Criação de conta
const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    });

//Conectar um usuário com endereço de e-mail e senha
const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });

//Para desconectar um usuário, chame signOut:
const auth = getAuth();
signOut(auth).then(() => {
    // Sign-out successful.
}).catch((error) => {
    // An error happened.
});

//https://firebase.google.com/docs/auth/web/password-auth?hl=pt-br


//Login com o Google

import { GoogleAuthProvider, signInWithPopup, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

//Login com a janeja pop-up
const auth = getAuth();
signInWithPopup(auth, provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
    });

//Para redirecionar os usuários à página de login
const auth = getAuth();
signInWithRedirect(auth, provider);


// recuperar o token de OAuth do provedor do Google
const auth = getAuth();
getRedirectResult(auth)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
    });


  //https://firebase.google.com/docs/auth/web/google-signin?hl=pt-br#web-version-9