import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  //our component is going to display a welcome message
  //Then we update the message by capturing the
  // click vent of a button
const [message, setMessage] = useState("Welcome to the App");
//message is the variable and setMessage is the function
function updateMessage(){
  setMessage("New Message");
}


  return (
    <div className="App">
      <h1>Working with state</h1>
      {message}

      <div><button onClick={updateMessage}>Update message</button></div>

    </div>
  );
}

export default App;
