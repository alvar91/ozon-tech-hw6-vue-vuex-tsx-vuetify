import { Action } from "vuex-simple";

import { UserService } from "@/api/user-service";

import router from "@/router";
import { ROUTES_TO, FIRST_PAGE } from "@/constants/index";

export class AuthModule {
  @Action()
  async createUser(data) {
    const createUserResponse = await UserService.createUser(data);
    if (createUserResponse?.status === 200) {
      localStorage.isAuthenticated = true;
      router.push(`${ROUTES_TO.chats}`);
    }
  }

  @Action()
  async logIn(data) {
    const loginResponse = await UserService.logIn(data);
    if (loginResponse?.status === 200) {
      localStorage.isAuthenticated = true;
      router.push(`${ROUTES_TO.chats}`);
    }
  }

  @Action()
  async logOut() {
    const response = await UserService.logOut();

    if (response?.status === 200) {
      localStorage.removeItem("isAuthenticated");
      router.push({ name: "SigninView" });
    }
  }

  @Action()
  async logInYandex(data) {
    const response = await UserService.logInYandex(data);

    if (response?.status === 200) {
      localStorage.isAuthenticated = true;
      router.push(`${ROUTES_TO.chats}`);
    }
  }
}
