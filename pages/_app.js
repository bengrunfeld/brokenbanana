import App from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../utils/theme";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <style global jsx>{`
          body {
            padding: 0;
            margin: 0;
          }

          @import url("https://fonts.googleapis.com/css?family=Raleway&display=swap");
          @import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");

          html {
            font-size: 10px;
          }
        `}</style>
      </ThemeProvider>
    );
  }
}
