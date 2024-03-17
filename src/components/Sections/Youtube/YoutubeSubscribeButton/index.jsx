import { useScript } from "../../../../hooks/useScript";

export default function YoutubeSubscribeButton({ channel_id }) {
  useScript("https://apis.google.com/js/platform.js", "g-ytsubscribe");
  return (
    <div
      id="g-ytsubscribe"
      className="g-ytsubscribe !flex !justify-end"
      data-channelid={channel_id}
      data-layout="default"
      data-count="default"
    ></div>
  );
}
