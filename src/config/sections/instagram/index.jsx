export const instagramSectionConfig = {
  title: "Me siga no meu perfil ",
  title_highlight: "@drpedroboni!",
  subtitle: "Instagram",
  instagram_url: "https://www.instagram.com/drpedroboni/",
  token: import.meta.env.INSTAGRAM_TOKEN,
  url_instagram_api: `${import.meta.env.VITE_INSTAGRAM_API}${
    import.meta.env.INSTAGRAM_USER_ID
  }/media?fields=id,media_type,media_url,thumbnail_url,caption,permalink,username&access_token=${
    import.meta.env.INSTAGRAM_TOKEN
  }`,
  alert_error_api: {
    title:
      "Atenção! Informações do feed do Instagram do Dr. Pedro Boni não foram foram carregados:",
    info_list: [
      "Por favor, verifique sua conexão com a intenet.",
      "Depois recarregue a página e tente novamente.",
    ],
  },
  alert_error_notFound: {
    title: "Feed não encontrado:",
    info_list: [
      "Não foram encontrados publicações associados ao Instagram solicitado.",
      "Por favor, verifique sua conexão com a intenet.",
      "Depois recarregue a página e tente novamente.",
    ],
  },
};
