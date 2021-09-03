import { call, put, spawn, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";
import { login, setToken, signOut } from "../auth/reducer";

import fetchAuth from "../../api/auth";

function* displayError(message) {
  yield call(toast.error, message);
}

function* onLogin(action) {
  const result = yield call(fetchAuth.login, action.payload);
  const { success, data, message } = result;
  if (success) {
    yield put(setToken(data.token));
    yield window.localStorage.setItem("el-token", data.token);
    yield call(Window.nav.push, "/dashboard");
  } else {
    yield call(displayError, message);
  }
}

function* onSignOut() {
  yield window.localStorage.removeItem("el-token");
  yield call(Window.nav.push, "/");
}

function* listenActions() {
  yield takeLatest(login, onLogin);
  yield takeLatest(signOut, onSignOut);
}

function* initSaga() {
  yield spawn(listenActions);
}

export default initSaga;
