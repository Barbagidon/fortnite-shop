import "./App.css";

import Header from "./components/header";
import Footer from "./components/footer";
import Shop from "./components/shop";
import { ContextProvider } from "./context/context";

function App() {
  return (
    <>
      <Header />
      <ContextProvider>
        <Shop />
      </ContextProvider>

      <Footer />
    </>
  );
}

export default App;
