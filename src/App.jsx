import { useState } from "react";
import Header from "./Components/Layaut/Header";
import Planets from "./Components/Items/Planets";
import Cart from "./Components/Cart/Cart";
import Modal from "../src/Components/UI/Modal";
import CartContextProvider from "./Components/Store/CartContextProvider";


import "./App.css";

function App() {
  const [listIsVisible, setlistIsVisible] = useState(false);

  function showListHandler() {
    setlistIsVisible(true);
  }

  function hideListHandler() {
    setlistIsVisible(false);
  }

  return (
    <CartContextProvider>
      {listIsVisible && <Cart onHideList={hideListHandler} />}
      <Header onShownList={showListHandler} />
      <main>
        <Planets />
      </main>
    </CartContextProvider>
  );
}

export default App;
