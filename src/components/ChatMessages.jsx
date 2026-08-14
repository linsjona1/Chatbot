import { useEffect, useRef } from 'react'
import {ChatMessage} from './ChatMessage'
import './ChatMessages.css'

export function ChatMessages({CurrentData}){
    const messagesContainerRef =useRef(null);
   useEffect(()=>{
        const container = messagesContainerRef.current;
        container.scrollTop = container.scrollHeight;
    })

    return(

    <div
       className="chat-messages-container"
        ref={messagesContainerRef}>
          {CurrentData.length === 0 ? (
            <p className="no-messages">
              Welcome to my Chatbot project! Send a message using the textbox below.
            </p>
          ) : (
            CurrentData.map((chatMessage)=>{
              return(
                <ChatMessage 
                message ={chatMessage.message}
                sender={chatMessage.sender}
                key={chatMessage.id}
              />
          )
        })
          )}
   </div>
  )
  
   };