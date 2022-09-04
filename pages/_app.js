import '../styles/globals.css'
import { NextUIProvider, createTheme } from '@nextui-org/react';

const theme = createTheme({
  type: "light",
  theme: {
    colors: {
      primaryLight: '#A8CDD2',
      primaryLightHover: '#A8CDD2', // commonly used on hover state
      primaryLightActive: '#7C9EA6', // commonly used on pressed state
      primaryLightContrast: '#334F5C', // commonly used for text inside the component
      primaryBorder: '#47626B',
      primaryBorderHover: '#233C4D',
      primarySolidHover: '#233C4D',
      primarySolidContrast: '#7C9EA6', // commonly used for text inside the component
      primaryShadow: '#47626B',
      primary: '#47626B',
      border: '#D3CBBF',
      secondary: '#CC896C',
      success: '#808267',
      warning: '#DEAC6D',
      error: '#B1533D',
      link: '#BE884F',
      text: '#47626B'
    },
  }
})

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp
