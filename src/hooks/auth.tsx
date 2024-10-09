import { useContext, ReactNode, createContext } from "react";

interface AuthProviderProps {
  children: ReactNode;
}

interface SignInCredentials {
  user: string;
  password: string;
}

interface AuthContextData {
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  async function signIn({ user, password }: SignInCredentials) {
    console.log({ user, password });
  }

  async function signOut() {
    try {
      console.log("signOut");
    } catch (err) {
      throw err;
    }
  }

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
