import { panelApi } from '../../services/api';
import { panel as panelAuth } from '../../services/auth';

const userLogin = async ({ email, password, remember }) => {
  let data = {
    email,
    password
  };
  let response = await panelApi.post('/auth/login/panel', data);

  if (response.status === 200 || response.status === 201) {
    let res = response.data;

    if (res.success) {
      let logged = panelAuth.panelLocalLogin(
        res.user,
        res.access_token,
        res.expires_in,
        remember ? 'true' : 'false'
      );

      return {
        success: logged,
        error: 'Login Succefully'
      };
    }

    return { success: false, error: "Don't found this user" };
  }

  return { success: false, error: 'Request failed' };
};

export { userLogin };
