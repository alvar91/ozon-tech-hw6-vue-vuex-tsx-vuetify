import { AxiosError } from "axios";
import router from "@/router";

interface Options<R> {
  errorMessage?: string;
  defaultValue?: R | undefined;
}

const showErrorNotification = (error: Error, message?: string) => {
  const text = message || error.message || "Что-то пошло не так!";

  alert(text);
};

const HandleErrorDecorator = <R>(
  handler: (error: AxiosError, message?: string) => void,
  defaultValue?: R | undefined,
  message?: string
) => {
  return <R>(target: unknown, key: string, descriptor: PropertyDescriptor) => {
    const original = descriptor.value;

    descriptor.value = async function (...args: unknown[]) {
      try {
        return await original.apply(this, args);
      } catch (error) {
        handler(error as AxiosError, message);
        return defaultValue;
      }
    };

    return descriptor;
  };
};

export const WithErrorNotification = <R>({
  errorMessage,
  defaultValue,
}: Options<R>) => {
  return HandleErrorDecorator<R>(
    (error, message?: string) => {
      if (error?.response?.status === 401) {
        localStorage.removeItem("isAuthenticated");
        router.push({ name: "SigninView" });
      }

      showErrorNotification(error, message);
    },
    defaultValue,
    errorMessage
  );
};
