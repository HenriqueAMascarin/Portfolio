import ReactDOM from 'react-dom/client';
import App from './src/App';
import { GlobalStyle } from './src/styles/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
import './src/i18n/builderI18n';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
      <GlobalStyle />
      <App />
  </BrowserRouter>,
)
