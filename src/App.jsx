import { useState, useEffect } from "react";
import Loading from "./components/Loading"
import Cards from "./components/Cards"
const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [tours, setTours] = useState()
  const [loader, setLoader] = useState(true)
  // const [refresh, setRefresh] = useState(false)
  // const [pageReload, setPageReload] = useState(false)

  const refresh = tours && tours.length === 0


  const getPlaces = async () => {
    try {
      const tourSites = await fetch(url)
      const sites = await tourSites.json()
      setLoader(false)
      setTours(sites)
      // setPageReload(false)
      // console.log(sites);
    } catch (error) {
      alert("error in api");
    }
  }

  const removeCard = (tour) => {
    const filterCard = tours.filter((card) => card.id !== tour.id)
    setTours(filterCard)
  }

  const clearAlltours = () => {
    setTours([])
    // setRefresh(true)
  }

  useEffect(() => {
    getPlaces();
  }, [])


  return <div>
    
    <h1 className="title merriweather-sans" style={{ margin: "20px" }}>OurTours </h1>

      <div className="tours container" >
      {tours &&
        tours.map((tour) => {
          return <div key={tour.id}>
            <Cards tour={tour} removeCard={removeCard} />

          </div>
        })
      }
    </div>

    {loader ? <Loading /> : <>
      {refresh ?
        <button onClick={getPlaces} className="btn">Refresh</button>
        : <>
          {/* {setLoader(false)} */}
          <button className="btn" onClick={clearAlltours} style={{ width: "20%" }}>Clear All</button>
        </>
      }</>
    }



  </div >
};
export default App;
