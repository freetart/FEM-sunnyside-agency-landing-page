import { createGlobalStyle } from 'styled-components';

const Globals = createGlobalStyle`
  :root {
    /* colors */
    --black: #222;
    --white: #fff;
    /* primary */
    --softRed: hsl(7, 99%, 70%);
    --yellow:  hsl(51, 100%, 49%);
    --teal: hsla(200, 100%, 62%, 0.8);
    --darkDesaturatedCyan: hsl(167, 40%, 24%);
    --darkBlue: hsl(198, 62%, 26%);
    --darkModerateCyan: hsl(168, 34%, 61%);
    /* neutral */
    --darkDesaturatedBlue: hsl(212, 27%, 19%);
    --VeryDarkGrayishBlue: hsl(213, 9%, 39%);
    --DarkGrayishBlue:  hsl(232, 10%, 55%);
    --grayishBlue: hsl(210, 4%, 67%);
    /* radius */
    --mainRadius: 1rem;
    /* shadows */
    --mainShadow: 0.1rem 0.3rem 1rem rgba(0, 0, 0, .1);
    /* transitions */
    --mainTransition: all 0.3s ease-in-out;
    /* font sizes */
    --sizeXxl: 4.5rem;
    --sizeXl: 4rem;
    --sizeLg: 3.5rem;
    --sizeMd: 3rem;
    --sizeSm: 2.5rem;
    --sizeXs: 2rem;
    --sizeXxs: 1.5rem;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Barlow', sans-serif;
    overflow-x: hidden;
  }

  img {
    width: 100%;
    object-fit: cover;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  button {
    font-family: inherit;
    cursor: pointer;
  }

  input {
    font-family: inherit;
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-delay: -1ms !important;
      animation-duration: 1ms !important;
      animation-iteration-count: 1 !important;
      background-attachment: initial !important;
      scroll-behavior: auto !important;
      transition-duration: 0s !important;
      transition-delay: 0s !important;
    }
  }
`;

export default Globals;
