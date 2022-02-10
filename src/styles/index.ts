import colors from './colors';
import fonts from './fonts';
import { device } from './breakpoints';
import './main.css';

const theme = {
  colors,
  fonts,
};

export type ThemeInterface = typeof theme;

export { colors, fonts, theme, device };
