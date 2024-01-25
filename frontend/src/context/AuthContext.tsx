import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface AuthContextValue {
  token: string | null;
  setToken: (token: string) => void;
  removeToken: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setTokenState] = useState<string | null>(() =>
    localStorage.getItem("accessToken")
  );

  const setToken: AuthContextValue["setToken"] = (newToken) => {
    setTokenState(newToken);
    localStorage.setItem("accessToken", newToken);
  };

  const removeToken: AuthContextValue["removeToken"] = () => {
    setTokenState(null);
    localStorage.removeItem("accessToken");
  };

  useEffect(() => {
    const handleStorageChange = () => {
      setTokenState(localStorage.getItem("accessToken"));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const contextValue: AuthContextValue = {
    token,
    setToken,
    removeToken,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextValue => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
