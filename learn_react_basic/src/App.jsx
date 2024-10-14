
import { useState } from "react";

function App() {

  let [counter, setcounter] = useState(15);

  return (
    <div>
      <h1>Jatin Mittal</h1>

      <p>Counter : {counter}</p>
      <button
        onClick={() => setcounter(counter + 1)}
      >Add {counter}</button>

      <br />

      <button
      onClick={() => setcounter(counter - 1)}
      >remove {counter}</button>
    </div>
  )
}

export default App
