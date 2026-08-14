import { useState } from 'react';
import './App.css'
import {ChatMessages} from './components/ChatMessages'
import {ChatInput} from './components/chatInput'


function App(){
    const [CurrentData, setcurrentData]= useState([

      // Default Messages 
      {
        message: "How are you?",
        sender : "user",
        id: "id1"
      },
      {
        message: "How can i help you?",
        sender: "robot",
        id: "id2"
      },
      {
        message: "what is today's date?",
        sender: "user",
        id: "id3"
      },
      {
        message: "Today's date is Monday, 24th April 2026?",
        sender: "robot",
        id: "id4"
      },
      {
        message: "Thank you!" ,
        sender: "user",
        id: "id5"

      },
      {
        message: "Welcome!" ,
        sender: "robot",
        id: "id6"
      },
      {
        message:"Bye",
        sender: "user",
        id: "id7"
      }
   ] 
    );    
    return(
      <div
        className="app-container">
        <ChatMessages 
        CurrentData = {CurrentData} />
        <ChatInput 
        CurrentData = {CurrentData} 
        setcurrentData = {setcurrentData} />
      </div>
  )
  }


  export default App;

