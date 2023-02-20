import './app.css';
import Pages from './pages';
import { ThemeProvider } from '@emotion/react';
import theme from './theme/Theme';

function App() {
  return (
    <div className='app'>
      <ThemeProvider theme={theme}>
        <Pages />
      </ThemeProvider>
    </div>
  );
}

export default App;
