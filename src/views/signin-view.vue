<script lang="tsx">
import { VNode } from "vue";
import { Vue, Component } from "vue-property-decorator";

import { VSheet, VForm, VTextField, VBtn } from "vuetify/lib";

import { validationMixin } from "vuelidate";
import { validators, schema } from "../utils/validate";

import { ROUTES_TO } from "@/constants";

import { useModule } from "vuex-simple";
import { AuthModule } from "@/store/modules/auth/auth";

const { required } = validators;

import {
  getYandexUrl,
  VUE_APP_YANDEX_OAUTH2_REDIRECT,
} from "@/utils/yandexUrl/getYandexUrl";

@Component<SigninView>({
  name: "SigninView",
  mixins: [validationMixin],
  validations: {
    login: { required },
    password: { required },
  },
})
export default class SigninView extends Vue {
  authStore = useModule<AuthModule>(this.$store, ["auth"]);

  login = "";
  password = "";

  fromUrl = ROUTES_TO.chats;

  get errors() {
    return {
      login: schema.validateLogin(this.$v.login),
      password: schema.validatePassword(this.$v.password),
    };
  }

  async mounted() {
    const code = this.$route.query.code;
    if (code) {
      this.authStore?.logInYandex({
        code,
        redirect_uri: VUE_APP_YANDEX_OAUTH2_REDIRECT,
      });
    }
  }

  getFormValues() {
    const values = {
      login: this.login,
      password: this.password,
    };

    return values;
  }

  async sendLogInRequest(values) {
    try {
      await this.authStore?.logIn(values);
    } catch ({ message }) {
      const errorMessage =
        message !== undefined ? message : "Неизвестная ошибка";

      this.notifyError("Ошибка обращения к серверу", `${errorMessage}`);

      console.error(message);
    }
  }

  notifyError(title = "Ошибка", text = "") {
    this.$notify({
      group: "foo",
      type: "error",
      title,
      text,
      duration: 7000,
    });
  }

  submit() {
    this.$v.$touch();

    if (this.$v.$invalid) {
      this.notifyError(
        "Форма не может быть отправлена",
        "Пожалуйста, исправьте ошибки при заполнении формы"
      );

      return;
    }

    const values = this.getFormValues();

    this.sendLogInRequest(values);
  }

  getYandexUrl() {
    return getYandexUrl(this.fromUrl);
  }

  render(): VNode {
    return (
      <VSheet class="grey lighten-3">
        <div class="mx-auto text-center text-h4 pa-6 primary white--text">
          Ozon Messages
        </div>
        <VForm ref="form" lazy-validation class="ma-16 pa-16 white rounded-xl">
          <h2 class="text-center">Авторизация</h2>
          <VTextField
            label="Логин"
            prepend-icon="mdi-account"
            on={{ input: (value) => (this.login = value) }}
            error-messages={this.errors.login}
            required
          />

          <VTextField
            label="Пароль"
            prepend-icon="mdi-lock"
            type="password"
            on={{ input: (value) => (this.password = value) }}
            error-messages={this.errors.password}
            required
          />
          <div class="d-flex justify-center mt-10">
            <a href={this.getYandexUrl()} class="text-decoration-none">
              <VBtn color="warning">Войти через Яндекс</VBtn>
            </a>
          </div>
          <div class="d-flex justify-center mt-10">
            <router-link to={ROUTES_TO.signup} class="text-decoration-none">
              <VBtn class="mr-4">Зарегистрироваться</VBtn>
            </router-link>
            <VBtn color="primary" on={{ click: () => this.submit() }}>
              Войти
            </VBtn>
          </div>
        </VForm>
      </VSheet>
    );
  }
}
</script>
