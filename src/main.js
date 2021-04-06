import React from 'react';
import Channel from './Channel';
import Channels from './channels';

const styles = {
    main: {
        backgroundColor: '#373B44',
        flex: '1 1 auto',
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden',
      },
};

const Main = () => {
    return(
        <main className="App-main" css={styles.main}>
        <Channels/>
        <Channel/>
    </main>
    )
}

export default Main