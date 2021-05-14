import { Global } from '@emotion/react';

export const Fonts = () => (
  <Global
    styles={`
      /* montserrat-100 - latin */
      @font-face {
        font-family: 'Montserrat';
        font-style: thin;
        font-weight: 100;
        src: url('/static/fonts/montserrat-v15-latin-100.eot'); /* IE9 Compat Modes */
        src: local(''),
             url('/static/fonts/montserrat-v15-latin-100.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
             url('/static/fonts/montserrat-v15-latin-100.woff2') format('woff2'), /* Super Modern Browsers */
             url('/static/fonts/montserrat-v15-latin-100.woff') format('woff'), /* Modern Browsers */
             url('/static/fonts/montserrat-v15-latin-100.ttf') format('truetype'), /* Safari, Android, iOS */
             url('/static/fonts/montserrat-v15-latin-100.svg#Montserrat') format('svg'); /* Legacy iOS */
      }
      /* montserrat-200 - latin */
      @font-face {
        font-family: 'Montserrat';
        font-style: extra-light;
        font-weight: 200;
        src: url('/static/fonts/montserrat-v15-latin-200.eot'); /* IE9 Compat Modes */
        src: local(''),
             url('/static/fonts/montserrat-v15-latin-200.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
             url('/static/fonts/montserrat-v15-latin-200.woff2') format('woff2'), /* Super Modern Browsers */
             url('/static/fonts/montserrat-v15-latin-200.woff') format('woff'), /* Modern Browsers */
             url('/static/fonts/montserrat-v15-latin-200.ttf') format('truetype'), /* Safari, Android, iOS */
             url('/static/fonts/montserrat-v15-latin-200.svg#Montserrat') format('svg'); /* Legacy iOS */
      }
      /* montserrat-300 - latin */
      @font-face {
        font-family: 'Montserrat';
        font-style: light;
        font-weight: 300;
        src: url('/static/fonts/montserrat-v15-latin-300.eot'); /* IE9 Compat Modes */
        src: local(''),
             url('/static/fonts/montserrat-v15-latin-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
             url('/static/fonts/montserrat-v15-latin-300.woff2') format('woff2'), /* Super Modern Browsers */
             url('/static/fonts/montserrat-v15-latin-300.woff') format('woff'), /* Modern Browsers */
             url('/static/fonts/montserrat-v15-latin-300.ttf') format('truetype'), /* Safari, Android, iOS */
             url('/static/fonts/montserrat-v15-latin-300.svg#Montserrat') format('svg'); /* Legacy iOS */
      }
      /* montserrat-regular - latin */
      @font-face {
        font-family: 'Montserrat';
        font-style: regular;
        font-weight: 400;
        src: url('/static/fonts/montserrat-v15-latin-regular.eot'); /* IE9 Compat Modes */
        src: local(''),
             url('/static/fonts/montserrat-v15-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
             url('/static/fonts/montserrat-v15-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
             url('/static/fonts/montserrat-v15-latin-regular.woff') format('woff'), /* Modern Browsers */
             url('/static/fonts/montserrat-v15-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
             url('/static/fonts/montserrat-v15-latin-regular.svg#Montserrat') format('svg'); /* Legacy iOS */
      }
      /* montserrat-500 - latin */
      @font-face {
        font-family: 'Montserrat';
        font-style: medium;
        font-weight: 500;
        src: url('/static/fonts/montserrat-v15-latin-500.eot'); /* IE9 Compat Modes */
        src: local(''),
             url('/static/fonts/montserrat-v15-latin-500.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
             url('/static/fonts/montserrat-v15-latin-500.woff2') format('woff2'), /* Super Modern Browsers */
             url('/static/fonts/montserrat-v15-latin-500.woff') format('woff'), /* Modern Browsers */
             url('/static/fonts/montserrat-v15-latin-500.ttf') format('truetype'), /* Safari, Android, iOS */
             url('/static/fonts/montserrat-v15-latin-500.svg#Montserrat') format('svg'); /* Legacy iOS */
      }
      /* montserrat-600 - latin */
      @font-face {
        font-family: 'Montserrat';
        font-style: semi-bold;
        font-weight: 600;
        src: url('/static/fonts/montserrat-v15-latin-600.eot'); /* IE9 Compat Modes */
        src: local(''),
             url('/static/fonts/montserrat-v15-latin-600.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
             url('/static/fonts/montserrat-v15-latin-600.woff2') format('woff2'), /* Super Modern Browsers */
             url('/static/fonts/montserrat-v15-latin-600.woff') format('woff'), /* Modern Browsers */
             url('/static/fonts/montserrat-v15-latin-600.ttf') format('truetype'), /* Safari, Android, iOS */
             url('/static/fonts/montserrat-v15-latin-600.svg#Montserrat') format('svg'); /* Legacy iOS */
      }
      /* montserrat-700 - latin */
      @font-face {
        font-family: 'Montserrat';
        font-style: bold;
        font-weight: 700;
        src: url('/static/fonts/montserrat-v15-latin-700.eot'); /* IE9 Compat Modes */
        src: local(''),
             url('/static/fonts/montserrat-v15-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
             url('/static/fonts/montserrat-v15-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
             url('/static/fonts/montserrat-v15-latin-700.woff') format('woff'), /* Modern Browsers */
             url('/static/fonts/montserrat-v15-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
             url('/static/fonts/montserrat-v15-latin-700.svg#Montserrat') format('svg'); /* Legacy iOS */
      }
      /* montserrat-800 - latin */
      @font-face {
        font-family: 'Montserrat';
        font-style: extra-bold;
        font-weight: 800;
        src: url('/static/fonts/montserrat-v15-latin-800.eot'); /* IE9 Compat Modes */
        src: local(''),
             url('/static/fonts/montserrat-v15-latin-800.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
             url('/static/fonts/montserrat-v15-latin-800.woff2') format('woff2'), /* Super Modern Browsers */
             url('/static/fonts/montserrat-v15-latin-800.woff') format('woff'), /* Modern Browsers */
             url('/static/fonts/montserrat-v15-latin-800.ttf') format('truetype'), /* Safari, Android, iOS */
             url('/static/fonts/montserrat-v15-latin-800.svg#Montserrat') format('svg'); /* Legacy iOS */
      }
      /* montserrat-900 - latin */
      @font-face {
        font-family: 'Montserrat';
        font-style: black;
        font-weight: 900;
        src: url('/static/fonts/montserrat-v15-latin-900.eot'); /* IE9 Compat Modes */
        src: local(''),
             url('/static/fonts/montserrat-v15-latin-900.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
             url('/static/fonts/montserrat-v15-latin-900.woff2') format('woff2'), /* Super Modern Browsers */
             url('/static/fonts/montserrat-v15-latin-900.woff') format('woff'), /* Modern Browsers */
             url('/static/fonts/montserrat-v15-latin-900.ttf') format('truetype'), /* Safari, Android, iOS */
             url('/static/fonts/montserrat-v15-latin-900.svg#Montserrat') format('svg'); /* Legacy iOS */
      }
    `}
  />
);
