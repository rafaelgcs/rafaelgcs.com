import { fromCript, toCript } from '../utils/functions';

/**
 *  PANEL AUTH
 */

// CONSTS TO USE IN CODE
const TOKEN_KEY_PANEL = toCript(process.env.REACT_APP_PANEL_TOKEN_KEY);
const USER_KEY_PANEL = toCript(process.env.REACT_APP_PANEL_USER_KEY);
const EXPIRES_IN_KEY_PANEL = toCript(
  process.env.REACT_APP_PANEL_EXPIRES_IN_KEY
);
const LAST_LOGIN_KEY_PANEL = toCript(
  process.env.REACT_APP_PANEL_LAST_LOGIN_KEY
);
const REMEMBER_USER_KEY_PANEL = toCript(
  process.env.REACT_APP_PANEL_REMEMBER_USER_KEY
);

// COMMANDS TO EXPORT TO PANEL

const panelGetToken = () => {
  let token = fromCript(localStorage.getItem(TOKEN_KEY_PANEL));

  return token;
};

const panelUpdateLocalUser = (user) => {
  localStorage.removeItem(USER_KEY_PANEL);
  localStorage.setItem(USER_KEY_PANEL, toCript(JSON.stringify(user)));
};

const panelGetUser = () => {
  let userStr = localStorage.getItem(USER_KEY_PANEL);

  return JSON.parse(fromCript(userStr));
};

const panelGetRemember = () => {
  let remember = fromCript(localStorage.getItem(REMEMBER_USER_KEY_PANEL));
  if (remember === 'true') {
    return true;
  }
  return false;
};

const panelLocalLogin = async (user, token, expires_in, remember) => {
  try {
    await localStorage.setItem(TOKEN_KEY_PANEL, toCript(token));
    await localStorage.setItem(USER_KEY_PANEL, toCript(JSON.stringify(user)));
    await localStorage.setItem(REMEMBER_USER_KEY_PANEL, toCript(remember));
    await localStorage.setItem(EXPIRES_IN_KEY_PANEL, expires_in.toString());
    await localStorage.setItem(LAST_LOGIN_KEY_PANEL, new Date().toString());
    return true;
  } catch (error) {
    panelLogout();
    return false;
  }
};

const panelLogout = () => {
  localStorage.removeItem(TOKEN_KEY_PANEL);
  return true;
};

const panelIsAuthenticated = () => {
  let localToken = localStorage.getItem(TOKEN_KEY_PANEL);
  let token = fromCript(localToken);
  let user = fromCript(localStorage.getItem(USER_KEY_PANEL));
  let last_login = localStorage.getItem(LAST_LOGIN_KEY_PANEL);
  let expires_in = localStorage.getItem(EXPIRES_IN_KEY_PANEL);

  if (localToken != null && token != null && user != null) {
    let now = new Date();
    let past = new Date(last_login);
    let diff = Math.abs(now.getTime() - past.getTime());
    let seconds = Math.ceil(diff / 1000);
    if (seconds < parseInt(expires_in)) {
      return true;
    }
  }

  return false;
};

const panelExport = {
  panelGetToken,
  panelUpdateLocalUser,
  panelGetUser,
  panelGetRemember,
  panelLocalLogin,
  panelLogout,
  panelIsAuthenticated
};

/**
 *
 *  end PANEL AUTH
 */

export { panelExport as panel };
