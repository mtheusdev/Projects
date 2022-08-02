import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalCtx } from './providers/Global';
import Routes from './routes';
import GlobalStyle from './styles/global';

const App = () => {
  const { theme } = GlobalCtx();

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes />
        <GlobalStyle />
      </Router>
    </ThemeProvider>
  );
};
export default App;
