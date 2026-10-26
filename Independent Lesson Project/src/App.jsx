import { useState } from 'react'
import ProductDescription from "./ProductDescription";
import './App.css'
import QuantityCounter from './QuantityCounter';
import ContactForm from './ContactForm';
function App() {
  // function handleClick(e){
  //   alert("שלום")
  // }
  //   return (
  //   <div>
  //   <button onClick={handleClick}>לחץ עלי</button>
  //   </div>
  //   );
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);

    console.log("ערך מוקלד:", newValue);
  };
  return (
    <div>
      <button onClick={() => { alert("שלום " + inputValue) }}>לחץ עלי</button>


      <div style={{ padding: "20px" }}>
        {/* שדה input המחובר ל-State ולפונקציית ההדפסה */}
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder=" ...הקלד כאן את שמך "
        />
        <QuantityCounter />
        <ProductDescription/>
        <ContactForm/>
      </div>
    </div>
  )
}

export default App;