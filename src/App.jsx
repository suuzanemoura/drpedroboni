import { Providers } from "./providers";
import { Router } from "./routes/Router";

export default function App() {
  return (
    <Providers>
      <Router />
    </Providers>
  );
}