<script lang="tsx">
import { VNode } from "vue";
import { Vue, Component } from "vue-property-decorator";

import { useModule } from "vuex-simple";
import { ChatsModule } from "@/store/modules/chats/chats";
import { AuthModule } from "@/store/modules/auth/auth";

import { VSheet, VForm, VTextField, VBtn } from "vuetify/lib";

import { validationMixin } from "vuelidate";
import { validators, schema } from "../utils/validate";

import { ROUTES_TO } from "@/constants";

const { required } = validators;

@Component<ChatCreateView>({
  name: "ChatCreateView",
  mixins: [validationMixin],
  validations: {
    title: { required },
  },
})
export default class ChatCreateView extends Vue {
  chatsStore = useModule<ChatsModule>(this.$store, ["chats"]);
  authStore = useModule<AuthModule>(this.$store, ["auth"]);

  title = "";

  get errors() {
    return {
      title: schema.validateChatTitle(this.$v.title),
    };
  }

  getFormValues() {
    const values = {
      title: this.title,
    };

    return values;
  }

  submit() {
    this.$v.$touch();

    if (this.$v.$invalid) {
      this.$notify({
        group: "foo",
        type: "error",
        title: "Форма не может быть отправлена",
        text: "Пожалуйста, исправьте ошибки при заполнении формы",
        duration: 7000,
      });

      return;
    }

    const values = this.getFormValues();

    this.chatsStore?.createChatAction(values).then(() => {
      this.$notify({
        group: "foo",
        type: "success",
        title: "Чат успешно создан",
        duration: 7000,
      });
    });
  }

  render(): VNode {
    return (
      <VSheet class="grey lighten-3">
        <div class="mx-auto text-center text-h4 pa-6 primary">
          <router-link
            to={ROUTES_TO.chats}
            class="white--text text-decoration-none"
          >
            Ozon Messages
          </router-link>
        </div>
        <VForm ref="form" lazy-validation class="ma-16 pa-16 white rounded-xl">
          <h2 class="text-center">Создание чата</h2>
          <VTextField
            label="Заголовок чата"
            prepend-icon="mdi-pencil"
            on={{ input: (value) => (this.title = value) }}
            error-messages={this.errors?.title}
            required
          />

          <div class="d-flex justify-center mt-10">
            <VBtn class="primary mr-4" on={{ click: () => this.submit() }}>
              Создать
            </VBtn>

            <router-link to={ROUTES_TO.chats} class="text-decoration-none">
              <VBtn>Назад</VBtn>
            </router-link>
          </div>
        </VForm>
      </VSheet>
    );
  }
}
</script>
