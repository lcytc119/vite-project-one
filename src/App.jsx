
import './App.css'
import InventoryContainer from './components/InventoryContainer'
import inventory from "./data/inventory.json"
import InventoryItem from './components/InventoryItem'
import {useState} from "react";
import Checkbox from './components/Checkbox_functional'
import ComplexState from './components/ComplexState';


export default function App(){
  const [isChecked, setIsChecked] = useState(false);
  const onClickHandler = () => setIsChecked(!isChecked);

  return (
    <>
      {/* <h1>Hello World in Checked Box</h1>
      <button onClick={(onClickHandler)}>Click me</button>
      <div>
        <Checkbox label={"I am a transformer"} isChecked={isChecked}/>
      </div> */}
      <ComplexState/>
    </>
  )
}
