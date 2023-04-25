import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './component/header/Header'
import Home from './pages/home/Home'
import Destination from './pages/destination/Destination'
import Crew from './pages/crew/Crew'
import Technology from './pages/technology/Technology'
import { useEffect, useState } from 'react'
import NotFound from './component/notFound/NotFound'

function App() {
  let [apiData, setapiData] = useState([])
  let [error, setError] = useState(false)
  let [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const fetchController = new AbortController()

    fetch('https://abdosadory.github.io/spaceWebsite/data/data.json', {
      signal: fetchController.signal,
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("couldn't fetch")
        }
        return res.json()
      })
      .then((data) => {
        setapiData(data)
        setIsLoading(false)
      })
      .catch((err) => {
        setError(true)
        setIsLoading(false)
        if (err.name === 'AbortError') {
          console.log('fetching is aborted')
        }
        console.log(err.message)
      })
    return () => fetchController.abort()
  }, [])
  return (
    <>
      <Header />
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/spaceWebsite" element={<Home />} />
            <Route
              path="/destination"
              element={
                <Destination
                  destinations={apiData && apiData['destinations']}
                  loading={isLoading}
                  error={error}
                />
              }
            />
            <Route
              path="/crew"
              element={
                <Crew
                  crew={apiData && apiData['crew']}
                  loading={isLoading}
                  error={error}
                />
              }
            />
            <Route
              path="/technology"
              element={
                <Technology
                  technology={apiData && apiData['technology']}
                  loading={isLoading}
                  error={error}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  )
}

export default App
