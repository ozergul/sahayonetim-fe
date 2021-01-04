import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

import { AppProps } from "next/app";
import firebase from "firebase/app";
import "firebase/auth";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FirebaseAuthProvider } from "@react-firebase/auth";
import config from "../firebase.config";
import { wrapper } from "../store/store";

library.add(fas);

function App({ Component, pageProps }: AppProps) {
  return (
    <FirebaseAuthProvider firebase={firebase} {...config}>
      <Component {...pageProps} />
    </FirebaseAuthProvider>
  );
}

export default wrapper.withRedux(App);
