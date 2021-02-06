import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

import { AppProps } from "next/app";
import "firebase/auth";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { wrapper } from "../store/store";

library.add(fas);

/**
 * <FirebaseAuthProvider firebase={firebase} {...config}>

 </FirebaseAuthProvider>
 * @param Component
 * @param pageProps
 * @constructor
 */
function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(App);
