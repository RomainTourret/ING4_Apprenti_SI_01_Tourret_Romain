import React from 'react';
import {useState} from 'react';

const styles = {
    channels: {
        minWidth: '200px',
      },
};

 
    
const Channels = () => {
    const [channels, setChannel] = useState([{
        name :'Le Meilleur Chat au Monde. Seul. Tout seul.',
        id : 1,
      },{
        name :'No you will not get cookies in here',
        id : 2,
      },{
        name :'Jesus Sandra pick a ChatRoom already plz',
        id : 3  ,
      }]);

    return(
        <div css={styles.channels}>
            {channels.map( (channel) => (
                <li key={channel.id}>
                <p>
                    <span>{channel.name}</span>
                </p>
                </li>))}
        </div>
    )
}

export default Channels;