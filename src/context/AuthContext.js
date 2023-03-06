import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../firebaseConfig";

export const AuthContext = createContext({});

export const useAuthContext = () => {
  return useContext(AuthContext);
};
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    console.log("user", user);
  }, [user]);

  useEffect(() => {
    // console.log("auth", auth);
    const unsubscribeFromAuthStateChanged = onAuthStateChanged(auth, (user) => {
      // console.log("response", user);
      if (user) {
        setUser(user);
      } else {
        setUser(undefined);
      }
    });

    return unsubscribeFromAuthStateChanged;
  }, []);

  const handleSignIn = async (email, password) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log("response", response);
      if (response) {
        return true;
      } else return false;
    } catch (e) {
      console.log("sign in error", e);
      return false;
    }
  };

  const handleSignOut = async () => {
    console.log("sign out");
    signOut(auth);
  };

  const handleRegister = async (email, username, password) => {
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log("response", response);
      if (response) {
        updateProfile(auth.currentUser, {
          displayName: username,
        });
        return true;
      } else return false;
    } catch (e) {
      console.log("register error", e);
      return false;
    }
  };

  const handleResetPassword = async (email) => {
    console.log("email", email);
    try {
      const response = await sendPasswordResetEmail(auth, email);
      console.log("response", response);
      if (response) {
        return true;
      } else return false;
    } catch (e) {
      console.log("reset password error", e);
      return false;
    }
  };

  const values = {
    user,
    handleSignIn,
    handleRegister,
    handleResetPassword,
    handleSignOut,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
