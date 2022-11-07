import {
  Api,
  SignUpRequest,
  SignInRequest,
  OauthSignInRequest,
} from "./generated/generated-service";

import { WithErrorNotification } from "./response-handler";
export class UserService {
  static userService = new Api().auth;
  static userOauthService = new Api().oauth;

  @WithErrorNotification({
    errorMessage: "Не удалось создать пользователя!",
  })
  static async createUser(data: SignUpRequest) {
    return await this.userService.signupCreate(data);
  }

  @WithErrorNotification({
    errorMessage: "Не удалось войти!",
  })
  static async logIn(data: SignInRequest) {
    return await this.userService.signinCreate(data);
  }

  @WithErrorNotification({
    errorMessage: "Не удалось выйти!",
  })
  static async logOut() {
    return await this.userService.logoutCreate();
  }

  @WithErrorNotification({
    errorMessage: "Не удалось войти!",
  })
  static async logInYandex(data: OauthSignInRequest) {
    return await this.userOauthService.yandexCreate(data);
  }
}
