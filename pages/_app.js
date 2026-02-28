import { ThemeProvider } from '../src/context/ThemeContext';
import '../src/styles/scss/style.scss';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
