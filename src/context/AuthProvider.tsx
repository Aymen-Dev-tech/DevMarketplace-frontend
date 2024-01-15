import React, {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

type ProfileResponse = {
  id?: number;
  name: string;
  phoneNumber: string;
  email: string;
  profilePicture: string;
  Seller?:
    | {
        id: number;
      }
    | undefined;
  Buyer?:
    | {
        id: number;
      }
    | undefined;
};

export interface AuthContextProps {
  auth: ProfileResponse;
  setAuth: Dispatch<SetStateAction<ProfileResponse>>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [auth, setAuth] = useState<ProfileResponse>({
    id: 0,
    name: "",
    phoneNumber: "",
    email: "",
    profilePicture: "",
  });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
