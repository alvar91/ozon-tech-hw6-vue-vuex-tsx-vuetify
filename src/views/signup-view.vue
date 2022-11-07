<script lang="tsx">
import { VNode } from "vue";
import { Vue, Component } from "vue-property-decorator";

import { VSheet, VForm, VTextField, VBtn } from "vuetify/lib";

import { useModule } from "vuex-simple";
import { AuthModule } from "@/store/modules/auth/auth";

const { required, alphaRus, email, phoneLength } = validators;

import { validationMixin } from "vuelidate";
import { validators, schema } from "../utils/validate";

import { VueMaskDirective } from "v-mask";

import { ROUTES_TO } from "@/constants";

@Component<SignupView>({
  name: "SignupView",
  mixins: [validationMixin],
  validations: {
    firstName: { required, alphaRus },
    secondName: { required, alphaRus },
    login: { required },
    email: { required, email },
    password: { required },
    password2: { required },
    phone: { required, phoneLength },
  },
  directives: {
    mask: VueMaskDirective,
  },
})
export default class SignupView extends Vue {
  authStore = useModule<AuthModule>(this.$store, ["auth"]);

  firstName = "";
  secondName = "";
  login = "";
  email = "";
  password = "";
  password2 = "";
  phone = "";

  get errors() {
    return {
      firstName: schema.validateFirstName(this.$v.firstName),
      secondName: schema.validateSecondName(this.$v.secondName),
      login: schema.validateLogin(this.$v.login),
      email: schema.validateEmail(this.$v.email),
      phone: schema.validatePhone(this.$v.phone),
      password: schema.validatePassword(this.$v.password),
      password2: schema.validatePassword(this.$v.password2),
    };
  }

  getFormValues() {
    const values = {
      first_name: this.firstName,
      second_name: this.secondName,
      login: this.login,
      email: this.email,
      password: this.password,
      phone: this.phone,
    };

    return values;
  }

  async sendSignUpRequest(values) {
    try {
      await this.authStore?.createUser(values);
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

    if (this.password !== this.password2) {
      this.notifyError(
        "Форма не может быть отправлена",
        "Введенные пароли должны совпадать"
      );

      return;
    }

    const values = this.getFormValues();
    values.phone = values.phone.replace(/\D/g, "");

    this.sendSignUpRequest(values);
  }

  render(): VNode {
    return (
      <VSheet class="grey lighten-3">
        <div class="mx-auto text-center text-h4 pa-6 primary white--text">
          Ozon Messages
        </div>
        <VForm lazy-validation class="form ma-10 pa-16 white rounded-xl">
          <h2 class="text-center">Регистрация</h2>
          <VTextField
            label="Имя"
            prepend-icon="mdi-account"
            on={{ input: (value) => (this.firstName = value) }}
            error-messages={this.errors.firstName}
            required
          />
          <VTextField
            label="Фамилия"
            prepend-icon="mdi-account"
            on={{ input: (value) => (this.secondName = value) }}
            error-messages={this.errors.secondName}
            required
          />

          <VTextField
            label="Логин"
            prepend-icon="mdi-account"
            on={{ input: (value) => (this.login = value) }}
            error-messages={this.errors.login}
            required
          />

          <VTextField
            label="Email"
            prepend-icon="mdi-email"
            on={{ input: (value) => (this.email = value) }}
            error-messages={this.errors.email}
            required
          />

          <VTextField
            label="Номер телефона"
            prepend-icon="mdi-phone"
            on={{ input: (value) => (this.phone = value) }}
            error-messages={this.errors.phone}
            v-mask="+7(###)-###-##-##"
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

          <VTextField
            label="Повторите пароль"
            prepend-icon="mdi-lock"
            type="password"
            on={{ input: (value) => (this.password2 = value) }}
            error-messages={this.errors.password2}
            required
          />

          <div class="d-flex justify-center mt-10">
            <VBtn
              class="mr-4"
              color="primary"
              on={{ click: () => this.submit() }}
            >
              Зарегистрироваться
            </VBtn>

            <router-link to={ROUTES_TO.signin} class="text-decoration-none">
              <VBtn>Войти</VBtn>
            </router-link>
          </div>
        </VForm>
      </VSheet>
    );
  }
}
</script>
