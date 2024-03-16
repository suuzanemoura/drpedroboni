import { useEffect } from "react";

export const useScript = (url, id) => {
  useEffect(() => {
    const subscribeButton = document.getElementById(id);
    const script = document.createElement("script");
    script.src = url;
    script.async = true;
    const parentDiv = document.getElementById(id).parentNode;
    parentDiv.insertBefore(script, subscribeButton);
  }, [id, url]);
};
