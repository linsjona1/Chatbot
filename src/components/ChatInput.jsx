import { useState} from 'react'
import {chatbot} from 'supersimpledev'
import loadingSpinner from '../assets/loading-spinner.gif'
import './ChatInput.css'



export function ChatInput({CurrentData, setcurrentData}){
        const [InputText, setInputText] =useState("");

        function SavInputText(event){
          setInputText(event.target.value);
        }

        async function sendMessage(){
          const newChatMessages = [
        ...CurrentData,
        {
          message: InputText,
          sender: "user",
          id: crypto.randomUUID()
        },

      ]
       setcurrentData(newChatMessages);
       setInputText("");

       const loadingId = crypto.randomUUID();
       setcurrentData([
        ...newChatMessages,
        {
          message: <img className = "spinner" src={loadingSpinner} alt="Loading..." />,
          sender: "robot",
          id: loadingId
        }
      ]);

      if(InputText.trim() === ""){
        setcurrentData(CurrentData);
        return;
      }
      
      
      const response = await chatbot.getResponseAsync(InputText);
       setcurrentData([
        ...newChatMessages,
        {
          message: response,
          sender: "robot",
          id: crypto.randomUUID()
        },

      ]);
      

        }
        function EnterText(event){
          if(event.key === "Enter"){
            sendMessage();
          }else if(event.key === "Escape"){
            setInputText("")
          }
        }
        return(
          <div
          className="chat-input-container">

            <input 
            className="chat-input"
            onKeyDown={EnterText}
            onChange={SavInputText} 
            type="text" 
            placeholder="Send a message to chatbot."  
            size = "30"
            value={InputText}
          />
            <button 
            className ="send-button"
              onClick={sendMessage}>Send</button>
            
          </div>
        )
      };