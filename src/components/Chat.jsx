import React from 'react'
import Messages from './Messages'

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>dinu</span>
        <div className="chatIcons">
          <img src="data:image/png;base64,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" alt="" />
          <img src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_5247852.jpg" alt="" />
          <img src="data:image/png;base64,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" alt="" />
        </div>
      </div>
      <Messages/>
    </div>
  )
}

export default Chat