import { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";

import "./App.css";


function App() {

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting = { <h1> Bienvenidos a ImporTako</h1>} />
    </>
  )
}

export default App
