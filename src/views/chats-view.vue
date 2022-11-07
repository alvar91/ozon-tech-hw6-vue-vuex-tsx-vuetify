<script lang="tsx">
import { VNode } from "vue";
import { Vue, Component } from "vue-property-decorator";

import { useModule } from "vuex-simple";
import { ChatsModule } from "@/store/modules/chats/chats";
import { AuthModule } from "@/store/modules/auth/auth";

import Chats from "@/components/chats.vue";

import { VSheet, VList, VBtn, VIcon, VTextField } from "vuetify/lib";

import { ROUTES_TO, FIRST_PAGE } from "@/constants";

import { Chat } from "@/types/chats";

import { Debounce } from "@/utils/debounce/debounce";

@Component({
  name: "ChatsView",
})
export default class ChatsView extends Vue {
  chatsStore = useModule<ChatsModule>(this.$store, ["chats"]);
  authStore = useModule<AuthModule>(this.$store, ["auth"]);

  get currentPage(): number {
    return this.chatsStore?.currentPage as number;
  }

  get chats(): Chat[] {
    return this.chatsStore?.chats as Chat[];
  }

  get filterTitle() {
    return this.chatsStore?.filterTitle;
  }

  created(): void {
    this.chatsStore?.fetchChatsAction();
  }

  async logout() {
    await this.authStore?.logOut();
    this.chatsStore?.resetChatsStore();
  }

  @Debounce(1000)
  searchChats(value) {
      this.chatsStore?.setFilterTitle(value);
      this.chatsStore?.fetchChatsAction();
  }

  render(): VNode {
    const { currentPage, chats, searchChats, filterTitle } = this;

    return (
      <VSheet class="grey lighten-3">
        <div class="mx-auto text-center text-h4 pa-6 primary white--text">
          Ozon Messages
        </div>

        <nav class="ma-10 text-center text-h4 d-flex justify-space-between">
          <router-link to={ROUTES_TO.createChat} class="text-decoration-none">
            <VBtn color="primary">Создать новый чат</VBtn>
          </router-link>

          <VBtn color="error" on={{ click: () => this.logout() }}>
            Выйти
          </VBtn>
        </nav>

        <div class="ma-10 pa-6 white rounded-xl">
          <div class="mb-4" style="width: 300px">
            <VTextField
              append-icon="mdi-magnify"
              label="Поиск чата по названию"
              single-line
              hide-details
              value={filterTitle}
              on={{ input: (e) => searchChats(e) }}
            ></VTextField>
          </div>

          <VList three-line>
            <Chats />
          </VList>
        </div>
      </VSheet>
    );
  }
}
</script>
