import "./App.css";
import LayOut from "./features/shop/components/layOut/LayOut";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/Not_Found/Not_Found";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element></Route>
        <Route
          path="*"
          element={
            <LayOut>
              <NotFound />
            </LayOut>
          }
        ></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
    </>
  );
}

export default App;
