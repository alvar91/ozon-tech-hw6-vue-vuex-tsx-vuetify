<script lang="tsx">
import { VNode } from "vue";
import { Vue, Component, Prop } from "vue-property-decorator";

import {
  VListItem,
  VBtn,
  VSubheader,
  VDivider,
  VListItemContent,
  VListItemTitle,
  VImg,
  VListItemAvatar,
  VListItemSubtitle,
  VIcon,
} from "vuetify/lib";

import { LastMessage } from "@/types/chats";

import { formatDate } from "@/utils/formatDate/formatDate";

const defaultAvatar = require("@/assets/images/default-avatar.jpg");

@Component({
  name: "Chat",
})
export default class ChatsView extends Vue {
  @Prop({ required: true, default: "" }) readonly id!: string;
  @Prop({ required: true, default: "" }) readonly avatar!: string;
  @Prop({ required: true, default: {} }) readonly last_message!: LastMessage;
  @Prop({ required: true, default: "" }) readonly title!: string;
  @Prop({ required: true, default: 0 }) readonly unread_count!: number;

  render(): VNode {
    const { id, avatar = null, last_message, title, unread_count } = this;

    const firstName = last_message?.user?.first_name;
    const secondName = last_message?.user?.second_name;
    const content = last_message?.content;
    const time = formatDate(new Date(last_message?.time));

    function renderLastMessageJSX({
      firstName,
      secondName,
      content,
      time,
      avatar,
    }) {
      return (
        <VListItem>
          <VListItemAvatar>
            <VImg src={avatar !== null ? avatar : defaultAvatar}></VImg>
          </VListItemAvatar>
          <VListItemContent>
            <VListItemTitle>
              {firstName} {secondName}
            </VListItemTitle>
            <VListItemSubtitle>{content}</VListItemSubtitle>
            <VListItemSubtitle>{time}</VListItemSubtitle>
          </VListItemContent>
        </VListItem>
      );
    }

    return (
      <div key={id} class="pa-0">
        <VSubheader class="pa-0">
          <h2>{title}</h2>
          <span class="pl-2">
            <VIcon>mdi-message-outline</VIcon>
            {unread_count}
          </span>
        </VSubheader>
        {last_message !== null ? (
          renderLastMessageJSX({
            firstName,
            secondName,
            content,
            time,
            avatar,
          })
        ) : (
          <div class="pa-0">Сообщения отсутствуют</div>
        )}
        <VBtn class="ma-4 ml-0 success">Зайти в чат</VBtn>
        <VDivider />
      </div>
    );
  }
}
</script>
