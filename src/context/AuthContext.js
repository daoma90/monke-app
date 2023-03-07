import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { collection, doc, getDocs, query, setDoc, updateDoc, where } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../../firebaseConfig";

export const AuthContext = createContext({});

export const useAuthContext = () => {
  return useContext(AuthContext);
};
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const unsubscribeFromAuthStateChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        getUser(user);
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
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log("response", user);
      if (user) {
        createUserDb(user.user, username);
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

  const getUser = async (authUser) => {
    const usersRef = collection(db, "users");
    const user = query(usersRef, where("id", "==", authUser.uid));

    const querySnapshot = await getDocs(user);
    querySnapshot.forEach((doc) => {
      setUser({ auth: authUser, db: doc.data() });
    });
  };

  const createUserDb = async (user, username) => {
    try {
      const response = await setDoc(doc(db, "users", user.uid), {
        username: username,
        email: user.email,
        id: user.uid,
      });
    } catch (e) {
      console.log("set username error", e);
    }
  };

  const editUsername = async (username) => {
    const userRef = doc(db, "users", user.auth.uid);

    try {
      const response = await updateDoc(userRef, {
        username: username,
      });
    } catch (e) {
      console.log("Edit username error", e);
    }
  };

  const editPassword = async (password) => {
    try {
      const response = await auth.currentUser.updatePassword(password);
    } catch (e) {
      console.log("Edit password error", e);
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
