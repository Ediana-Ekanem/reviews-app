import "./App.css";
import Reviews from "./components/Reviews";

function App() {
  return (
    <main>
      <div className="flex justify-center mt-20">
        <h2 className="pb-3 text-3xl font-bold relative mb-20">
          Our Reviews
          <span className="absolute bottom-0 left-8 right-8 h-[3px] bg-blue-500"></span>
        </h2>
      </div>
      <Reviews />
    </main>
  );
}

export default App;
