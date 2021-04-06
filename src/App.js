import {useState} from 'react';
import './App.css';
import Header from './header';
import Footer from './footer';
import Main from './main';
/** @jsx jsx */
import { jsx } from '@emotion/core'

const styles = {
  root: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#565E71',
    padding: '50px',
  },
  content: {
    flex: '1 1 auto',
    marginRight: '.5rem'
  },
  send: {
    backgroundColor: '#D6DDEC',
    padding: '.2rem .5rem',
    border: 'none',
    ':hover': {
      backgroundColor: '#2A4B99',
      cursor: 'pointer',
      color: '#fff',
    },
  }, 
} 

  const App = () => {
      return (
      <div className="App" css={styles.root}>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
  
export default App;
