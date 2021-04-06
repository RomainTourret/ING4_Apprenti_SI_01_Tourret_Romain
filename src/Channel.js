import React from 'react';
import Messages from './messages';
import MessageForm from './messagesForm';
import {useState} from 'react';


const styles = {
    channel: {
        height: '100%',
        flex: '1 1 auto',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      },
};

const channel =   { name: 'Le Meilleur Chat au Monde. Seul. Tout seul.'};

const Channel = () => {
    const [messages, setMessages] = useState([{
        author: 'sergei',
        creation: 1602831101929,
        content: `Gégé ne s'en sortira pas cette fois je crois`,
        id: 1,
      },{
        author: 'david',
        creation: 1602832138892,
        content: `Ah`,
        id: 2,
      },{
        author: 'sergei',
        creation: 1602840139202,
        content: `Ah ?`,
        id: 3,
      },{
        author: 'david',
        creation: 1602844139200,
        content: `Ah`,
        id: 4,
      }])

    const addMessage = (message) => {
        setMessages([
          ...messages,
          message
        ])
    }

    return(
        <div css={styles.channel}>
            <h1>Messages for {channel.name}</h1>
          <Messages messages={messages}/>
          <MessageForm addMessage={addMessage}/>
        </div>
    )
};

export default Channel