import Footer from "./Component/Fragment/Footer";
import Header from "./Component/Fragment/Header";
import Main from "./Component/Fragment/Main";

function App() {
  return (
    <>
      <div className="bg-teal-50">
        <div className="w-full max-w-3xl min-h-screen m-auto font-mukta">
          <Header />
          <Main />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
