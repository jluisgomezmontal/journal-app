import { types } from "../types/types"
import { firebase, googleAuthProvider } from "../firebase/firebaseConfig"
import { finishLoading, startLoading } from "./ui"

export const startLoginEmailPassword = ( email, password) => {
    return ( dispatch ) =>{

        dispatch( startLoading() );
        


        firebase.auth().signInWithEmailAndPassword( email, password )
        .then(  ({ user }) => {
            dispatch(
            login( user.id, user.displayName) );
            dispatch( finishLoading() );
    })


        .catch(e => {
            console.log(e);
            dispatch( finishLoading() );
        })
    }
}

export const starRegister = ( email, password, name ) => {
    return ( dispatch ) =>{

        firebase.auth().createUserWithEmailAndPassword( email, password )
        .then( async ({ user }) => {
            await user.updateProfile( {displayName: name });
            dispatch(
            login( user.id, user.displayName)
        )})
        .catch(e => {
            console.log(e)
        })
    }
}

export const startGoogleLogin = () => {
    return  ( dispatch ) => [
        firebase.auth().signInWithPopup( googleAuthProvider )
        .then( ({ user }) => {
            dispatch(
                login( user.id, user.displayName)
            )
        })
    ]
}


export const login = ( uid, displayName ) => ({
        type: types.login,
        payload: {
            uid,
            displayName
        }
    })