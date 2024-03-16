/* eslint-disable no-undef */
export const youtubeApiConfig = {
  channel_id: `${process.env.YOUTUBE_CHANNEL_ID}`,
  url_channel_api: `${import.meta.env.VITE_YOUTUBE_CHANNEL_API}&id=${
    process.env.YOUTUBE_CHANNEL_ID
  }&key=${process.env.YOUTUBE_API_KEY}`,
  url_playlistItems_api: `${
    import.meta.env.VITE_YOUTUBE_PLAYLIST_ITEMS_API
  }?part=snippet&maxResults=10&key=${process.env.YOUTUBE_API_KEY}`,
};
