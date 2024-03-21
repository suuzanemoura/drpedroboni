/* eslint-disable no-undef */
export const instagramApiConfig = {
  token: import.meta.env.INSTAGRAM_TOKEN_TEST,
  url_instagram_api: `${import.meta.env.VITE_INSTAGRAM_API}${
    process.env.INSTAGRAM_USER_ID
  }/media?fields=id,media_type,media_url,thumbnail_url,caption,permalink,username&access_token=${
    process.env.INSTAGRAM_TOKEN
  }`,
  url_instagram_api_test: `${import.meta.env.VITE_INSTAGRAM_API}${
    process.env.INSTAGRAM_USER_ID_TEST
  }/media?fields=id,media_type,media_url,thumbnail_url,caption,permalink,username&access_token=${
    process.env.INSTAGRAM_TOKEN_TEST
  }`,
};
