import BlogList from "./BlogList";
import useFetch from "./useEffect";

const Home = () => {
  const {
    data: events,
    isPending,
    error,
  } = useFetch("http://localhost:8000/events");
  return (
    <main className="w-screen">
      <div className=" max-w-[940px] min-h-[500px] w-full mx-auto my-4  px-8 py-4 flex flex-col gap-4  overflow-y-auto">
        {error && <p>{error}</p>}
        {isPending && <p>Loading...</p>}
        {events && <BlogList events={events} title="Latest events" />}
      </div>
    </main>
  );
};

export default Home;
