import RevealCover from "../ui/motion";

export const PhotoServiceCard = ({ service = {}, isOdd }) => {
  // Default values for service properties
  const imgURL = service?.imgURL || "/placeholder-image.jpg";
  const title = service?.title || "Service Title";
  const description = service?.description || "Service description goes here.";

  return (
    <div className="max-w-md relative mx-auto text-wrap w-full text-gray-50 border border-neutral-700 rounded-xl hover:shadow-lg hover:shadow-neutral-700/50 transition-all group shadow-md overflow-hidden md:max-w-2xl">
      <RevealCover />

      <div
        className={`md:flex md:items-stretch ${
          isOdd ? "md:flex-row-reverse" : ""
        }`}
      >
        <div className="md:shrink-0 md:w-72 flex-none">
          <img
            className="h-48 w-full object-cover md:h-full group-hover:scale-105 transition-all duration-500 ease-in-out"
            src={imgURL}
            alt={title} 
          />
        </div>
        <div className="p-4 sm:px-6 flex-grow">
          <h2 className="block mt-1 leading-tight text-4xl font-cinzel font-bold text-black">
            {title}
          </h2>
          <div className="my-3 w-24 border border-gray-400"></div>
          <p className="mt-2 text-black">{description}</p>
        </div>
      </div>
    </div>
  );
};
