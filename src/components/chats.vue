<script lang="tsx">
import { VNode } from "vue";
import { Vue, Component } from "vue-property-decorator";
import { useModule } from "vuex-simple";
import { ChatsModule } from "@/store/modules/chats/chats";

import Chat from "@/components/chat.vue";

import VirtualScroll from "@/components/virtual-scroll.vue";

@Component({
  name: "Chats",
})
export default class Chats extends Vue {
  chatsStore = useModule<ChatsModule>(this.$store, ["chats"]);

  get chats() {
    return this.chatsStore?.chats as Chat[];
  }

  render(): VNode {
    const renderRow = ({
      id,
      avatar,
      last_message,
      title,
      unread_count = 0,
    }) => {
      return (
        <Chat
          id={id}
          last_message={last_message}
          title={title}
          unread_count={unread_count}
          avatar={avatar}
        />
      );
    };

    if (this.chats?.length === 0) {
      return <div>Чаты отсутствуют</div>;
    }

    return (
      <VirtualScroll
        totalHeight={564}
        rowHeight={141}
        maxRow={4}
        count={this.chats.length}
        items={this.chats}
        rowTemplate={renderRow}
      />
    );
  }
}
</script>
