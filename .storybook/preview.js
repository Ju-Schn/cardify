import GlobalStyles from "../src/GlobalStyles"
import {BrowserRouter} from 'react-router-dom'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  Story => 
    <>
    <GlobalStyles />
    <Story />
    </>,
    Story => <BrowserRouter>
    <Story />
    </BrowserRouter>
  
];
