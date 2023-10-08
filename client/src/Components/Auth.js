import { auth, provider } from "../firebase-config.js";
import { signInWithPopup } from "firebase/auth"

import { hash } from '../hash'

import Cookies from 'universal-cookie'
const cookies = new Cookies()

export const Auth = (props) => {
    const { setIsAuth } = props;

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            cookies.set("auth-token", hash(result.user.refreshToken));
            setIsAuth(true);
        } catch (err) {
            console.log(err);
        }
    };

    return (<div className="auth">
        <p> Sign in with Google </p>
        <button onClick={signInWithGoogle}> Sign In </button>
    </div>)
}