import { getErrorMessages } from "./validators";

const isFieldDirty = (field) => field?.$dirty;

const validate = (field, errors) => {
  return isFieldDirty(field) ? getErrorMessages(errors) : [];
};

const validateLogin = (field) =>
  validate(field, {
    required: !field.required,
  });

const validatePassword = (field) =>
  validate(field, {
    required: !field.required,
  });

const validateFirstName = (field) =>
  validate(field, {
    required: !field.required,
    alphaRus: !field.alphaRus,
  });

const validateSecondName = (field) =>
  validate(field, {
    required: !field.required,
    alphaRus: !field.alphaRus,
  });

const validateEmail = (field) =>
  validate(field, {
    required: !field.required,
    email: !field.email,
  });

const validatePhone = (field) =>
  validate(field, {
    required: !field.required,
    phoneLength: !field.phoneLength,
  });

const validateChatTitle = (field) =>
  validate(field, {
    required: !field.required,
  });

export const schema = {
  validateLogin,
  validatePassword,
  validateFirstName,
  validateSecondName,
  validateEmail,
  validatePhone,
  validateChatTitle,
};
