const VUE_APP_YANDEX_OAUTH2_CLIENT_ID = "c98baded858640108b2a74710f9b9a20";
export const VUE_APP_YANDEX_OAUTH2_REDIRECT = "http://localhost:5000/";

export const getYandexUrl = (from) => {
  const rootUrl = `https://oauth.yandex.ru/authorize?`;

  const options: any = {
    redirect_uri: VUE_APP_YANDEX_OAUTH2_REDIRECT,
    client_id: VUE_APP_YANDEX_OAUTH2_CLIENT_ID,
    response_type: "code",
    force_confirm: true,
    state: from,
  };

  const qs = new URLSearchParams(options);

  return `${rootUrl}${qs.toString()}`;
};
