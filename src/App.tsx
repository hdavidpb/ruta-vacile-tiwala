import FormPage from "./pages/FormPage";
import Aos from "aos";
import { useLayoutEffect } from "react";
import { ShowDialog } from "./components/Dialog";

function App() {
  useLayoutEffect(() => {
    Aos.init({
      duration: 700,
    });
  }, []);

  return (
    <>
      <ShowDialog />
      <FormPage />
    </>
  );
}

export default App;
