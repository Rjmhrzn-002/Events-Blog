import Header from "./Components/Header";

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className=" max-w-[940px] min-h-[500px] w-full mx-auto mt-6 px-8 py-2">
        {children}
      </main>
    </div>
  );
};

export default Layout;
