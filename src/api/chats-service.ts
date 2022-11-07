import { Api, CreateChatRequest } from "./generated/generated-service";

import { WithErrorNotification } from "./response-handler";

const getOptions = ({ pageNumber = 1, title = "", step = 10 }) => {
  return {
    offset: step * pageNumber,
    limit: step,
    title,
  };
};

export class ChatsService {
  static chatsService = new Api().chats;

  @WithErrorNotification({
    errorMessage: "Не удалось получить список чатов!",
  })
  static async fetchChats(pageNumber: number, title: string, step?: number) {
    return await this.chatsService.chatsList(getOptions({ pageNumber, title, step }));
  }

  @WithErrorNotification({
    errorMessage: "Не удалось создать чат!",
  })
  static async createChat(data: CreateChatRequest) {
    return await this.chatsService.chatsCreate(data);
  }
}
