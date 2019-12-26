import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Arvo:400,700|Roboto+Slab:100,300,400|Roboto:300,400,500,700,900&display=swap');  
  /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  *{
    box-sizing: border-box;
  }

  body {
    background: #fff;
    line-height: 1;
    font-size: 100%;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  body {
    --borders: #E0E0E0;
    --texts: #3A3A3A;
    --profilelink: #3b2c59;
    --profileposition: #474747;
    --profiledescription: #474747
    --sociallinks: #3b2c59;
    --menu: #3b2c59;
    --posth1: #474747;
    --posttext: #474747;
    --postColor: #fff;
    --highlight: #59bac3;
    --recpage: #f1f1f1;
    --mediumBackground: #192734;
    --background:#fff;
    --sidebar: #FFDCC2;
    --white: #fff;
    --black: #222;
  }

  body.dark {
    --borders: #727272;
    --texts: #A0A0A0;
    --profilelink: #8F7BB7;
    --profileposition: #A0A0A0;
    --profiledescription: #E0E0E0
    --sociallinks: #8F7BB7;
    --menu: #8F7BB7;
    --posth1: #fff;
    --posttext: #A0A0A0;
    --postColor: #fff;
    --highlight: #59bac3;
    --recpage: #545454;
    --mediumBackground: #192734;
    --background:#3D3D3D;
    --sidebar: #2E2D2C;
    --white: #fff;
    --black: #222;
  }
`
export default GlobalStyles
