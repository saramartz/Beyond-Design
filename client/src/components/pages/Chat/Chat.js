import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import BottomBar from './BottomBar';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chat: [],
      content: '',
      name: this.props.loggedUser.name,
    };
  }

  componentDidMount() {
    this.socket = io("http://localhost:4000", {
      withCredentials: true
    });

    // Load the last 10 messages in the window.
    this.socket.on('init', (msg) => {
      let msgReversed = msg.reverse();
      this.setState((state) => ({
        chat: [...state.chat, ...msgReversed],
      }), this.scrollToBottom);
    });

    // Update the chat if a new message is broadcasted.
    this.socket.on('push', (msg) => {
      this.setState((state) => ({
        chat: [...state.chat, msg],
      }), this.scrollToBottom);
    });
  }

  // Save the message the user is typing in the input field.
  handleContent(event) {
    this.setState({
      content: event.target.value,
    });
  }

  //
  handleName(event) {
    this.setState({
      name: event.target.value,
    });
  }

  handleSubmit(event) {
    // Prevent the form to reload the current page.
    event.preventDefault();

    // Send the new message to the server.
    this.socket.emit('message', {
      name: this.state.name,
      content: this.state.content,
    });

    this.setState((state) => {
      // Update the chat with the user's message and remove the current message.
      return {
        chat: [...state.chat, {
          name: state.name,
          content: state.content,
        }],
        content: '',
      };
    }, this.scrollToBottom);
  }

  // Always make sure the window is scrolled down to the last message.
  scrollToBottom() {
    const chat = document.getElementById('chat');
    chat.scrollTop = chat.scrollHeight;
  }

  render() {
    return (
      <div className="App">
        <Paper id="chat" elevation={3}>
          {this.state.chat.map((el, index) => {
            return (
              <div key={index}>
                <Typography variant="caption" className="name">
                  {el.name}
                </Typography>
                <Typography variant="body1" className="content">
                  {el.content}
                </Typography>
              </div>
            );
          })}
        </Paper>
        <BottomBar
          content={this.state.content}
          handleContent={this.handleContent.bind(this)}
          handleName={this.handleName.bind(this)}
          handleSubmit={this.handleSubmit.bind(this)}
          name={this.state.name}
        />
      </div>
    );
  }
};

export default App;











// function Chat() {
//   const [state, setState] = useState({ message: '', name: '' })
//   const [chat, setChat] = useState([])

//   useEffect(() => {
//     socket.on('message', ({ name, message }) => {
//       setChat([...chat, { name, message }])
//     })
//   })

//   const onTextChange = e => {
//     setState({ ...state, [e.target.name]: e.target.value })
//   }

//   const onMessageSubmit = e => {
//     e.preventDefault()
//     const { name, message } = state
//     socket.emit('message', { name, message })
//     setState({ message: '', name })
//   }

//   const renderChat = () => {
//     return chat.map(({ name, message }, index) => (
//       <div key={index}>
//         <h3 className="chat-h3">
//           {name}: <span className="chat-span">{message}</span>
//         </h3>
//       </div>
//     ))
//   }

//   return (
//     <div className="chat-card">
//       <form className="chat-form" onSubmit={onMessageSubmit}>
//         <h1>Messanger</h1>
//         <div className="chat-name-field">
//           <TextField
//             name="name"
//             onChange={e => onTextChange(e)}
//             value={state.name}
//             label="Name"
//           />
//         </div>
//         <div>
//           <TextField
//             name="message"
//             onChange={e => onTextChange(e)}
//             value={state.message}
//             id="outlined-multiline-static"
//             variant="outlined"
//             label="Message"
//           />
//         </div>
//         <button className="chat-button">Send Message</button>
//       </form>
//       <div className="render-chat">
//         {renderChat()}
//       </div>
//     </div>
//   )
// }

// export default Chat