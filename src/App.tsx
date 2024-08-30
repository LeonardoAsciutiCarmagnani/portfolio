import Home from "./Pages/home";
import { ThemeProvider } from "./Contexts/darkthemecontext";

export default function App() {

  return <>
  <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
   { <Home/>}
  </ThemeProvider>
  </>
    
  
}


