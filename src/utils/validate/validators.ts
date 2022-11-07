import {
  required,
  requiredIf,
  alpha,
  email,
  numeric,
  helpers,
} from "vuelidate/lib/validators";

export const validators = {
  required,
  requiredIf,
  alpha,
  alphaRus: helpers.regex("alphaRus", /^[а-яё]*$/i),
  numeric,
  email,
  phoneLength: (value) => value.length === 17,
};

const errorMessages = {
  required: "Обязательное поле",
  alpha: "Только латинские буквы",
  alphaRus: "Только русские буквы",
  numeric: "Только цифры",
  email: "Неправильный формат электронной почты",
  phoneLength: "Заполните номер телефона",
};

export const getErrorMessages = (errors) => {
  return Object.entries(errors).reduce((acc: any, [key, value]) => {
    if (value) {
      const message =
        (errorMessages[key] as string) || "Неправильно заполнено поле";
      acc.push(message);
    }
    return acc;
  }, []);
};
