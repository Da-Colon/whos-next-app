import { AccountState } from "./users.enums";

export interface UsersStore extends AccountStore, UserPreferencesStore {}

// account management types
export type SetCookie = (name: string, value: any, options?: any | undefined) => void;
export type RemoveCookie = (name: string, options?: any | undefined) => void;
export type AuthLogin = (removeCookie: any) => Promise<void>;
export type UserSignin = (values: AccountFormProps) => Promise<boolean>;
export type UserSignup = (values: AccountFormProps) => Promise<User>;
export type UserLogout = (cookieHandler: () => void) => Promise<void>;
export type ClearError = () => void;
export type UpdateAccountState = (state: AccountState) => void;

export interface AccountStore {
  user: User | null;
  isLoggedIn: boolean;
  error: string | null;
  loginState: AccountState;
  signupState: AccountState;
  cookies: {
    [name: string]: any;
  };
  isUserLoaded: boolean;
  setCookie: SetCookie;
  removeCookie: RemoveCookie;
  authLogin: AuthLogin;
  userSignin: UserSignin;
  userSignup: UserSignup;
  userLogout: UserLogout;
  clearError: ClearError;
  updateLoginState: UpdateAccountState;
  updateSignupState: UpdateAccountState;
}

export interface AccountFormProps {
  email: string;
  password: string;
}

export interface User {
  user: {
    email: string;
    id: string;
  };
  token: string;
}

// user preferences types
export type UpdateSelectedList = (listId: string) => Promise<void>;
export type LoadUserPreferences = () => Promise<void>;
interface IUserPreferences {
  selectedList: string;
  likedLists: string[];
  userId: string;
}

export interface UserPreferencesStore {
  userPreferences: IUserPreferences | null;
  loadUserPreferences: LoadUserPreferences;
  updateSelectedList: UpdateSelectedList;
}
