// theme.js
import { extendTheme } from '@chakra-ui/react';
// Global style overrides
import { styles } from './styles';
// Foundational style overrides
import { colors, fonts } from './foundations';
// Component style overrides

const overrides = {
  styles,
  colors,
  fonts,
  // Other foundational style overrides go here
};

export default extendTheme(overrides);
