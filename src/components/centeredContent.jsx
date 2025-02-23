

const CenteredContent = ({ content }) => {
  const { heading, para1, para2, para3 } = content;

  return (
    <div className="w-full flex lg:px-20 sm:px-10 items-center justify-center ">
      <div className="text-center pb-10 p-8 bg-gray-800 bg-opacity-75 rounded-lg shadow-lg">
        <h1 className="text-4xl py-4 font-bold text-white mb-4">{heading}</h1>
        <p className="text-white text-base">
          {para1}
        </p>
        <p className="text-white text-base">
          {para2}
        </p>
        <p className="text-white text-base">
          {para3}
        </p>
      </div>
    </div>
  );
};

export default CenteredContent;
