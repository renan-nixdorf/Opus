import commons from './commons';

export default {
  light: {
    backgroundColor: `#fff`,
    textcolor: `#000`,
    ...commons,
  },
  dark: {
    backgroundColor: `#000`,
    textcolor: `#fff`,
    grayscale: 'grayscale(100);',
    ...commons,
  },
};
