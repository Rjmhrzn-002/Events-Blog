const BlogList = ({ events, title }) => {
  const eventList = events.map((event) => (
    <section className=" rounded-lg shadow-xl shadow-gray-300 flex items-center overflow-hidden">
      <div className="w-1/4 bg-white h-48">
        <img
          src="src/Components/netflix-bg.png"
          alt="cannot load"
          className="object-cover aspect-square"
        />
      </div>
      <div className="flex justify-between items-center flex-1  px-4">
        <div>
          <h1 className="text-2xl font-bold uppercase tracking-wide text-gray-900">
            {event.title}
          </h1>
          <p className="text-lg font-semibold text-gray-800">
            Date:{event.date}
          </p>
          <p className="text-sm font-thin text-gray-700">Time:{event.time}</p>
          <p className="text-red-700 uppercase font-extrabold text-xl mt-4">
            price: Rs {event.price}
          </p>
        </div>

        <div className="flex flex-col items-start justify-evenly gap-3">
          <button className="event-btn">Show Details</button>
          <button className="event-btn">Hide for me</button>
        </div>
      </div>
    </section>
  ));
  return (
    <div className=" max-w-[940px] min-h-[500px] w-full mx-auto px-8 py-4 flex flex-col gap-4  overflow-y-auto">
      <h1 className="text-2xl text-fuchsia-700 font-extrabold uppercase underline underline-offset-4">
        {title}
      </h1>
      {eventList}
    </div>
  );
};

export default BlogList;
