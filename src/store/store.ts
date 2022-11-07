import { Module } from "vuex-simple";
import { AuthModule } from "./modules/auth/auth";
import { ChatsModule } from "./modules/chats/chats";

export class Store {
  @Module()
  public auth = new AuthModule();

  @Module()
  public chats = new ChatsModule();
}
