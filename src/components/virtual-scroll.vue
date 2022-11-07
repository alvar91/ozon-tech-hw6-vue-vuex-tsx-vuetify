<script lang="tsx">
import { VNode } from "vue";
import { Vue, Component, Prop, Ref } from "vue-property-decorator";

import { useModule } from "vuex-simple";
import { ChatsModule } from "@/store/modules/chats/chats";

@Component({
  name: "VirtualScroll",
})
export default class VirtualScroll extends Vue {
  @Ref() readonly wrapper?: HTMLElement;
  @Ref() readonly viewport?: HTMLElement;
  @Ref() readonly elements?: HTMLElement;

  @Prop({ required: true, default: "" }) readonly totalHeight!: number;
  @Prop({ required: true, default: "" }) readonly rowHeight!: number;
  @Prop({ required: true, default: "" }) readonly maxRow!: number;
  @Prop({ required: true, default: "" }) readonly count!: number;
  @Prop({ required: true, default: "" }) readonly items!: [];
  @Prop({ required: true, default: "" }) readonly rowTemplate!: Function;

  chatsStore = useModule<ChatsModule>(this.$store, ["chats"]);

  scrollTop = 0;
  heightDifference = 0;

  get isOutOfPages() {
    const currentPage = this.chatsStore?.currentPage as number;
    const totalPages = this.chatsStore?.totalPages as number;

    return currentPage >= totalPages;
  }

  get getItems() {
    return this.items;
  }

  mounted() {
    this.wrapper?.addEventListener("scroll", this.handleScroll);
    this.calculateDifferenceHeight();
  }

  destroyed() {
    this.wrapper?.removeEventListener("scroll", this.handleScroll);
  }

  // реальная высота области, которую скролим
  get viewportHeight() {
    return this.rowHeight * this.count + this.heightDifference;
  }

  get startIndex() {
    if (this.count <= this.maxRow) {
      return 0;
    }

    return Math.floor(this.scrollTop / this.rowHeight);
  }

  // список видимых элементов
  get visibleItems() {
    return (
      this.getItems.slice(this.startIndex, this.startIndex + this.maxRow) || []
    );
  }

  // отступ для области которую скролим
  get offsetY() {
    return this.startIndex * this.rowHeight;
  }

  get elementsStyle() {
    return `transform: translateY(${this.offsetY}px)`;
  }

  get viewportStyle() {
    return `overflow: hidden; position: relative; height: ${this.viewportHeight}px`;
  }

  get wrapperStyle() {
    const count = this.count > this.maxRow ? this.maxRow : this.count;

    return `height: calc(${count * this.rowHeight}px); overflow: auto`;
  }

  async nextFetchChats() {
    await this.chatsStore?.nextFetchChatsAction();
  }

  handleScroll() {
    const scrollTop = this.wrapper?.scrollTop || 0;
    const maxOffset =
      this.rowHeight * (this.count - this.maxRow) + this.heightDifference;

    this.scrollTop = scrollTop;

    this.calculateDifferenceHeight();

    if (scrollTop >= maxOffset) {
      if (!this.isOutOfPages) {
        this.nextFetchChats();
        this.wrapper?.scrollTo(0, this.scrollTop - this.rowHeight);
      } else {
        this.$notify({
          group: "foo",
          type: "success",
          title: "На данный момент все данные получены",
          duration: 7000,
        });
      }
    }
  }

  calculateDifferenceHeight() {
    const children = this.elements?.children || {};
    const currentHeight = Object.values<HTMLElement>(children).reduce<number>(
      (acc, cur) => acc + cur.offsetHeight,
      0
    );

    this.heightDifference =
      currentHeight - this.visibleItems.length * this.rowHeight;
  }

  render(): VNode {
    return (
      <div ref={"wrapper"} style={this.wrapperStyle}>
        <div ref={"viewport"} style={this.viewportStyle}>
          <div ref={"elements"} style={this.elementsStyle}>
            {this.visibleItems.map((item) => this.rowTemplate(item))}
          </div>
        </div>
      </div>
    );
  }
}
</script>
