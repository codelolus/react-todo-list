import "./App.css";
import Navbar from "./navbar";

function App() {
  return (
    <>
      <Navbar />
      <h1
        style={{
          textAlign: "center",
          marginTop: "15vh",
          color: "green",
        }}
      >
        Musisz się zalogowac aby mieć dostęp do listy
      </h1>
    </>
  );
}

export default App;
