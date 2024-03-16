export default function Button({ children, linkButton, navigate, fontSize }) {
  return (
    <a
      href={linkButton ? linkButton : null}
      target="_blank"
    >
      <button
        type="button"
        className={`w-fit rounded-full px-6 mx-1 py-2.5 font-bold leading-6 bg-white text-boni-blue-200 shadow-sm hover:bg-sky-600 hover:text-white active:bg-sky-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-boni-blue-200 uppercase flex justify-center items-center  gap-x-1.5 ${fontSize} text-center`}
        onClick={navigate ? navigate : null}
      >
        {children}
      </button>
    </a>
  );
}
