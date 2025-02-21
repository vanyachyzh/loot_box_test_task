import Box from "../Box";

const BoxGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 max-w-6xl w-full max-h-[100vh] md:max-h-[80vh] overflow-scroll">
      {Array.from({ length: 20 }).map((_, index) => (
        <Box key={index} />
      ))}
    </div>
  );
};

export default BoxGrid;
