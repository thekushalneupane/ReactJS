import { ArrowUpRight } from "lucide-react";

const LeftContent = () => {
  return (
    <div
      className="h-full w-1/3  flex
     flex-col justify-between"
    >
      <div className="text-black p-4">
        <h3 className="text-7xl mb-8 font-bold">
          Prospective <span className=" italic text-gray-700">customer</span> Segmentation
        </h3>
        <p className="text-xl font-medium text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto facere
          quam delectus numquam, dolorum eius voluptatem, alias consequatur
          culpa eos eum dolor non? Veniam praesentium odio dolorem. Dolore,
          incidunt ad!
        </p>
      </div>
      <div>
        <ArrowUpRight size={80} />
      </div>
    </div>
  );
};

export default LeftContent;
