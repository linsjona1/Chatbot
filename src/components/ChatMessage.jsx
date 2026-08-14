  import robotImage from '../assets/robot.png'
  import userImage from '../assets/user.jpg'
  import './ChatMessage.css'
  import dayjs from 'dayjs'


 const Time  = dayjs().format('HH:mm');
  export function ChatMessage({message, sender}){

        return(
          <>
          <div className='outer-message-div'>

        <div className = {
          sender === "robot" 
          ? "chat-message-robot" 
          : "chat-message-user"}>
          {sender === "robot" && (
            <img src={robotImage} className = "robot-message-profile"/>)}
          <div className="message-with-time">
            <div className="chat-message-text">
              {message}
            </div>
            <p className='time'>{Time}</p>
          </div>
          {sender === "user" && (
            <img src={userImage} className = "user-message-profile"/>)}
        </div>
        </div>
        </>
      )
  }