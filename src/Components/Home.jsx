import BlogList from "./BlogList";
import useFetch from "./useEffect";

const Home = () => {
  const {
    data: events,
    isPending,
    error,
  } = useFetch("http://localhost:8000/events");
  return (
    <div>
      {error && <p>{error}</p>}
      {isPending && <p>Loading...</p>}
      {events && <BlogList events={events} title="Latest events" />}
    </div>
  );
};

export default Home;
