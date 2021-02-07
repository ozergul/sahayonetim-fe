import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

import { AppProps } from "next/app";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import React from "react";

library.add(fas);

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
