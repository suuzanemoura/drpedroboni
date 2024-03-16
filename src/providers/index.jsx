import { FontContextProvider } from "../contexts/FontContext";

export function Providers({ children }) {
  return <FontContextProvider>{children}</FontContextProvider>;
}
