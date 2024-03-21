import { useEffect, useState } from "react";
import { useRequestData } from "../../../hooks/useRequestData";
import AlertError from "../../AlertError";
import LoadingCircle from "../../LoadingCircle";
import Carousel from "../../Carousel";
import InstagramPostCard from "./InstagramPostCard";
import { instagramSectionConfig } from "../../../config/sections/instagram";

export default function InstagramSection({ apiConfig }) {
  const [feedList, setFeedList] = useState([]);

  const [instagramApiInfo, isLoading, loaded, error] = useRequestData(
    apiConfig.url_instagram_api_test,
  );

  useEffect(() => {
    if (loaded && instagramApiInfo) {
      setFeedList(instagramApiInfo.data?.slice(0, 5));
    }
  }, [instagramApiInfo, loaded]);

  return (
    <section className="flex flex-col justify-center items-center px-8 py-24 xs:px-12 sm:px-24 md:py-28 md:px-32 xl:px-48 2xl:px-60 bg-slate-300/85">
      <div className="relative overflow-hidden w-full h-full object-contain flex justify-center max-w-[1056px]">
        <div className="flex flex-col gap-8 w-full h-full object-contain">
          <h3 className="text-xl text-sky-700 font-medium self-start uppercase flex items-center gap-2">
            <span className="w-24 h-0.5 bg-sky-700 inline-block"></span>{" "}
            {instagramSectionConfig.subtitle}
          </h3>
          <h2 className="text-2xl xs:text-4xl text-boni-blue-100 font-bold self-start uppercase -mt-6">
            {instagramSectionConfig.title}
            <a
              href={instagramSectionConfig.instagram_url}
              target="_blank"
            >
              <span className="text-sky-600">
                {instagramSectionConfig.title_highlight}
              </span>
            </a>
          </h2>
          {error ? (
            <AlertError title={instagramSectionConfig.alert_error_api.title}>
              <ul className="mt-1.5 list-disc list-inside">
                {instagramSectionConfig.alert_error_api.info_list.map(
                  (info, index) => {
                    return <li key={index}>{info}</li>;
                  },
                )}
              </ul>
            </AlertError>
          ) : isLoading ? (
            <LoadingCircle />
          ) : loaded && feedList && feedList.length === 0 ? (
            <AlertError
              title={instagramSectionConfig.alert_error_notFound.title}
            >
              <ul className="mt-1.5 list-disc list-inside">
                {instagramSectionConfig.alert_error_notFound.info_list.map(
                  (info, index) => {
                    return <li key={index}>{info}</li>;
                  },
                )}
              </ul>
            </AlertError>
          ) : loaded && feedList && feedList.length > 0 ? (
            <Carousel width={300}>
              {feedList.map((post) => {
                return (
                  <InstagramPostCard
                    key={post.id}
                    post={post}
                  />
                );
              })}
            </Carousel>
          ) : null}
        </div>
      </div>
    </section>
  );
}
