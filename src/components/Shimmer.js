const Shimmer = () => {
  return (
    <div className="flex flex-wrap shadow-xl border-black">
      {Array(49)
        .fill('')
        .map((e, index) => (
          <div className="h-60 w-60 m-4 p-4 shadow-lg rounded border-black">
            <div className="animate-pulse p-2 bg-slate-200 h-32 rounded"></div>
            <div className="p-2 mt-5">
              <p className="animate-pulse h-3 mb-2 bg-slate-200 rounded col-span-1"></p>
              <p className=" animate-pulse h-3 mb-2 bg-slate-200 rounded col-span-1"></p>
              <p className=" animate-pulse h-3 mb-2 bg-slate-200 rounded col-span-1"></p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
