import { Mutation, State, Action } from "vuex-simple";

import { ChatsService } from "@/api/chats-service";

import router from "@/router";

import { ROUTES_TO, FIRST_PAGE } from "@/constants/index";
export class ChatsModule {
  @State()
  chats = [];

  @State()
  currentPage = FIRST_PAGE;

  @State()
  totalPages = Infinity;

  @State()
  filterTitle = "";

  @Action()
  async createChatAction(data) {
    const createChatsResponse = await ChatsService.createChat(data);

    if (createChatsResponse?.status === 200) {
      router.push(`${ROUTES_TO.chats}`);
    }
  }

  @Mutation()
  setCurrentPage(newPage) {
    this.currentPage = newPage;
  }

  @Mutation()
  setTotalPages(newTotalPages) {
    this.totalPages = newTotalPages;
  }

  @Mutation()
  setFilterTitle(newTitle) {
    this.filterTitle = newTitle;
  }

  @Mutation()
  fetchChats(chats) {
    this.chats = chats;
  }

  @Mutation()
  appendFetchChats(chats) {
    this.chats = this.chats.concat(chats);
  }

  @Mutation()
  resetChatsStore() {
    this.chats = [];
    this.filterTitle = "";
    this.currentPage = FIRST_PAGE;
  }

  @Action()
  async fetchChatsAction() {
    const pageNumber = FIRST_PAGE;
    const title = this.filterTitle;
    const createChatsResponse = await ChatsService.fetchChats(
      pageNumber - 1,
      title
    );

    if (createChatsResponse?.status === 200) {
      this.fetchChats(createChatsResponse.data);
      this.setCurrentPage(pageNumber);
    }
  }

  @Action()
  async nextFetchChatsAction() {
    const pageNumber = this.currentPage + 1;
    const title = this.filterTitle;

    const createChatsResponse = await ChatsService.fetchChats(
      pageNumber - 1,
      title,
    );

    if (createChatsResponse?.status === 200) {
      const data = createChatsResponse.data;
      if (data.length === 0) {
        this.setTotalPages(pageNumber);
      }

      this.appendFetchChats(data);
      this.setCurrentPage(pageNumber);
    }
  }
}
