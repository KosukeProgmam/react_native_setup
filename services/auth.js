// src/services/auth.js
import { auth } from './firebase';

export const signUp = async (email, password) => {
    try {
        await auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
        console.error("Sign up error", error);
    }
};

export const login = async (email, password) => {
    try {
        await auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
        console.error("Login error", error);
    }
};

export const logout = async () => {
    try {
        await auth().signOut();
    } catch (error) {
        console.error("Logout error", error);
    }
};
