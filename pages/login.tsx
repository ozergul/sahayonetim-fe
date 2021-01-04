import * as React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  IfFirebaseAuthed,
  IfFirebaseAuthedAnd,
} from "@react-firebase/auth";
import { connect, ConnectedProps } from "react-redux";

import config from "../firebase.config";
import { NextPage } from "next";
import { bindActionCreators } from "redux";
import { login, logout } from "../store/auth/action";
import { RootState } from "../store/store";
import { Button } from "react-bootstrap";

const mapDispatch = (dispatch) => {
  return {
    login: bindActionCreators(login, dispatch),
    logout: bindActionCreators(logout, dispatch),
  };
};

const mapState = (state: RootState) => {
  return { user: state.auth.user };
};

const connector = connect(mapState, mapDispatch);
type PropWithRedux = ReturnType<typeof mapState> &
  ReturnType<typeof mapDispatch>;

const Login: NextPage = (props: PropWithRedux) => {
  return (
    <FirebaseAuthProvider {...config} firebase={firebase}>
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="col-3">
          {!props?.user?.name ? (
            <div className="card">
              <div className="card-body">
                <h4 className="card-title mb-4 mt-1">Saha Yönetim Giriş</h4>
                <form>
                  <div className="form-group">
                    <input
                      name=""
                      className="form-control"
                      placeholder="Email Adresiniz"
                      type="email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      placeholder="******"
                      type="password"
                    />
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block"
                        >
                          {" "}
                          Giriş
                        </button>
                      </div>
                    </div>
                    <div className="col-md-6 text-right">
                      <a className="small" href="#">
                        Şifremi unuttum?
                      </a>
                    </div>
                  </div>
                  <div>
                    <Button
                      variant="success"
                      onClick={() => {
                        const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
                        firebase
                          .auth()
                          .signInWithPopup(googleAuthProvider)
                          .then((res) =>
                            props.login(res.additionalUserInfo.profile)
                          );
                      }}
                    >
                      Google ile Giriş Yap
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          ) : (
            <Button
              variant="danger"
              onClick={() => {
                firebase.auth().signOut();
                props.logout();
              }}
            >
              Çıkış Yap
            </Button>
          )}
          <FirebaseAuthConsumer>
            {({ isSignedIn, user, providerId }) => {
              return <div></div>;
              return {
                /*
              <pre style={{height: 300, overflow: "auto"}}>
                  {JSON.stringify({isSignedIn, user, providerId}, null, 2)}
                </pre>*/
              };
            }}
          </FirebaseAuthConsumer>
          <div>
            <IfFirebaseAuthed>
              {() => {
                return <div>Giriş yapıldı</div>;
              }}
            </IfFirebaseAuthed>
          </div>
        </div>
      </div>
    </FirebaseAuthProvider>
  );
};

export default connector(Login);
