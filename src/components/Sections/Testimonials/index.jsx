import { useRef, useState } from "react";
import { useFontContext } from "../../../hooks/useFontContext";
import NavArrow from "../../Carousel/NavArrow";
import { testimonialSectionConfig } from "../../../config/sections/testimonials";
import VideoPresentation from "../../VideoPresentation";
import { Slider } from "@lifarl/react-scroll-snap-slider";
import { StarIcon } from "@heroicons/react/20/solid";

export default function TestimonialSection() {
  const { textSize } = useFontContext();
  const renderCustomArrow = ({ direction, ref, onClick }) => (
    <NavArrow
      ref={ref}
      direction={direction}
      onClick={() => onClick(direction)}
    />
  );

  const gallerySliderRef = useRef(null);
  const [slideIndex, setIndex] = useState(0);

  const changeGalleryIndex = (index) => {
    gallerySliderRef.current?.scrollToSlide(index);
    setIndex(index);
  };

  const onGallerySlidesVisibilityChange = (index) => {
    setIndex(index);
  };

  return (
    <>
      <section
        id={testimonialSectionConfig.id}
        className="bg-gray-100 w-full flex px-8 py-24 xs:px-12 sm:px-24 md:py-28 md:px-32 xl:px-48 2xl:px-60 3xl:px-0 justify-center items-start"
      >
        <div className="w-full h-full flex flex-col lg:grid gap-8 lg:gap-x-6 lg:gap-y-8 xl:gap-x-4 2xl:max-w-[1056px]">
          <div className="lg:max-w-sm xl:max-w-md 2xl:max-w-[30rem] text-pretty lg:row-span-1 lg:col-span-1">
            <h2 className="text-3xl font-bold text-boni-blue-100 sm:text-5xl xl:text-6xl">
              O que nossos pacientes dizem
            </h2>
          </div>
          <div className="w-full lg:row-start-2 lg:col-start-1">
            <VideoPresentation url={testimonialSectionConfig.video_url} />
          </div>

          <div className="w-full h-full object-contain overflow-hidden lg:row-start-2 lg:col-start-2 flex flex-col gap-4 relative xl:px-20 text-wrap">
            <Slider
              ref={gallerySliderRef}
              onSlidesVisibilityChange={onGallerySlidesVisibilityChange}
              renderCustomArrow={renderCustomArrow}
            >
              {testimonialSectionConfig.testimonials.map((item, index) => {
                return (
                  <article
                    key={index}
                    className="bg-white w-full text-boni-blue-300 py-8 px-14 sm:py-10 sm:px-16 flex flex-col gap-6"
                  >
                    <span className="flex">
                      <StarIcon className="h-5 w-5 fill-sky-600" />
                      <StarIcon className="h-5 w-5 fill-sky-600" />
                      <StarIcon className="h-5 w-5 fill-sky-600" />
                      <StarIcon className="h-5 w-5 fill-sky-600" />
                      <StarIcon className="h-5 w-5 fill-sky-600" />
                    </span>
                    <p className={`${textSize} text-wrap`}>
                      {item.testimonial}
                    </p>
                    <footer className={`${textSize} font-medium text-gray-700`}>
                      <span className="text-sky-500">&mdash;</span>{" "}
                      {item.author}
                    </footer>
                  </article>
                );
              })}
            </Slider>
            <div className="list-none mx-auto text-center z-10">
              {testimonialSectionConfig.testimonials.map((item, index) => {
                return (
                  <span
                    key={index}
                    onClick={() => changeGalleryIndex(index)}
                    className={`inline-block w-3 h-3 ${
                      slideIndex === index ? "bg-black" : "bg-[#b6b6b6]"
                    } cursor-pointer mx-2 rounded-xl transition-transform`}
                  ></span>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
