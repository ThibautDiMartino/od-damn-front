import { FirebaseError } from "firebase/app";
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  User,
  UserCredential,
} from "firebase/auth";
import { LocalStorageKeys } from "../models/localStorage";

export class FirebaseAuth {
  private readonly auth: Auth;

  constructor(firebaseAuthInstance: Auth) {
    this.auth = firebaseAuthInstance;
  }

  signup = async (email: string, password: string): Promise<User> => {
    const userCredentials: UserCredential =
      await createUserWithEmailAndPassword(this.auth, email, password).catch(
        (error: FirebaseError) => {
          throw error;
        }
      );
    return userCredentials.user;
  };

  signin = async (email: string, password: string): Promise<User> => {
    const userCredentials = await signInWithEmailAndPassword(
      this.auth,
      email,
      password
    ).catch((error: FirebaseError) => {
      throw error;
    });
    return userCredentials.user;
  };

  getAuthToken = async (): Promise<string> => {
    const token = this.auth.currentUser?.getIdToken();

    if (!token) throw FirebaseError;
    return token;
  };

  getUser = (): User => {
    const user = localStorage.getItem(
      LocalStorageKeys.FIREBASE_AUTH_USER_CREDENTIALS
    );

    if (!user) throw FirebaseError;
    return JSON.parse(user);
  };
}
