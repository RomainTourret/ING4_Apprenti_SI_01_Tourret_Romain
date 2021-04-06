import React from 'react';
import Message from './message';

const styles = {
    messages: {
        flex: '1 1 auto',
        height: '100%',
        overflow: 'auto',
        '& ul': {
          'margin': 0,
          'padding': 0,
          'textIndent': 0,
          'listStyleType': 0,
        },
    },
};

const Messages = ({messages}) => { 
    return(
        <div css={styles.messages}>
            <ul>
              { messages.map( (message) => (
                <Message message={message}/>
              ))}
            </ul>
        </div>
    )
};

export default Messages