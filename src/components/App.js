import logo from '../logo.svg';
import { Box } from './Box';
import { GlobalStyle } from './GlobalStyle';
import { Counter } from 'components/Counter/Counter';
import { Toggle } from 'components/Toggle/Toggle';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { SignUpForm } from 'components/SignUpForm/SignUpForm';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Box bg="#282c34" height="100vh" color="white">
        <header>
          <h1>Hello world</h1>
          <img src={logo} alt="logo" width="100" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Box p={3}>
          <Counter step={5} initialValue={10} />
        </Box>
        <Box p={3}>
          <Toggle />
        </Box>
        <Box p={3}>
          <LoginForm onSubmit={values => console.log(values)} />
        </Box>
        <Box p={3}>
          <SignUpForm onSubmit={values => console.log(values)} />
        </Box>
      </Box>
    </>
  );
};
