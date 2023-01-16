import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./component/header/Header";
import Home from "./pages/home/Home";
import Destination from "./pages/destination/Destination";
import Crew from "./pages/crew/Crew";
import Technology from "./pages/technology/Technology";
import { useEffect, useState } from "react";

function App() {
  let [apiData, setapiData] = useState([]);
  let [error, setError] = useState(false);
  let [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchController = new AbortController();
    fetch("http://localhost:3000/data/data.json", {
      signal: fetchController.signal,
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("couldn't fetch");
        }
        return res.json();
      })
      .then((data) => {
        setapiData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(true);
        setIsLoading(false);
        if (err.name === "AbortError") {
          console.log("fetching is aborted");
        }
        console.log(err.message);
      });
    return () => fetchController.abort();
  }, []);
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/destination"
            element={
              <Destination destinations={apiData && apiData["destinations"]} />
            }
          />
          <Route
            path="/crew"
            element={<Crew crew={apiData && apiData["crew"]} />}
          />
          <Route
            path="/technology"
            element={
              <Technology technology={apiData && apiData["technology"]} />
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
