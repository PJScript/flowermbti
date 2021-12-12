import React from 'react';
import logo from './logo.svg';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { normalize } from 'styled-normalize';
import './App.css';
import { GlobalBody, Rootdiv } from './style/global-style'; 
import { myTheme } from './style/theme';

function App() {
  return (
    <>
      <GlobalBody />
      <ThemeProvider theme={myTheme}>
        <Rootdiv>
          <div>
            test
          <Button>Button</Button>
          </div>
        </Rootdiv>
      </ThemeProvider>

    </>
  );
}

export default App;


const Button = styled.button`
background-color: ${(props)=> props.theme.colors.secondary};
`
