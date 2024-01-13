import { createContext, useState } from "react";
import { ReactNode } from "react";
type LayoutProps = {
  children: ReactNode;
};
type IAuthContext = {
  auth: boolean,
  setAuth: (newState: boolean) => void
};
const initValue = {
  auth: false,
  setAuth: () => {}
}
const AuthContext = createContext<IAuthContext>(initValue);

export const AuthProvider = ({ children }: LayoutProps) => {
  const [auth, setAuth] = useState(initValue.auth);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
