import { ThemeProvider } from "./Contexts/darkthemecontext";
import { BrowserRouter } from "react-router-dom";
import _Routes from "./Route/Routes";

export default function App() {

  return <>
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <BrowserRouter>
      <_Routes/>
    </BrowserRouter>
  </ThemeProvider>
  </>
    
  
}


