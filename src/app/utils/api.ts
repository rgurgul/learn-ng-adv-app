import { environment } from './../../environments/environment';

export class Api {
  private static DATA_BASE_END_POINT = 'https://api.debugger.pl/';
  private static AUTH_BASE_END_POINT = 'https://auth.debugger.pl/';

  static ITEMS_END_POINT = Api.DATA_BASE_END_POINT + 'items';
  static WORKERS_END_POINT = Api.DATA_BASE_END_POINT + 'workers';
  static UPLOAD_END_POINT = Api.DATA_BASE_END_POINT + 'utils/upload';
  static DOES_IT_EXIST = Api.DATA_BASE_END_POINT + 'utils/exists';
  static DATA_FORM_CONFIG =
    Api.DATA_BASE_END_POINT + 'utils/register-config-form';

  static LOGIN_END_POINT = Api.AUTH_BASE_END_POINT + 'login';
  static LOGOUT_END_POINT = Api.AUTH_BASE_END_POINT + 'logout';
  static LOGGED_END_POINT = Api.AUTH_BASE_END_POINT + 'is-logged';
  static REGISTER_END_POINT = Api.AUTH_BASE_END_POINT + 'register/ajax';

  // WebSocket Game end-points
  static GAME_PLAY = environment.gameWsUrl + 'play';
  static GAME_GET_USER = environment.gameUrl + 'get-user';
  static GAME_REGISTER_USER = environment.gameUrl + 'register-user';
}
