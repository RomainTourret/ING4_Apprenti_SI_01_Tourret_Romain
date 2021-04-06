import React, {Component} from 'react';

const styles = {
    header: {
        height: '60px',
        backgroundColor: 'rgba(255,255,255,.3)',
        flexShrink: 0,
      },
      headerLogIn: {
        backgroundColor: 'red',
      },
      headerLogOut: {
        backgroundColor: 'blue',
      },
};

const Header = () => {
    return(
        <header className="App-header" css={styles.header}>
            <h1>header (éh oui. Ni plus ni moins.)</h1>
        </header>
    )
}

export default Header