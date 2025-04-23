import Header from "./Components/Layaut/Header";
import Planets from "./Components/Items/Planets";
import "./App.css";
import Cart from "./Components/Cart/Cart";


function App() {
  return (
    <>
      <Cart />
      <Header />
      <main>
        <Planets />
      </main>
    </>
  );
}

export default App;
