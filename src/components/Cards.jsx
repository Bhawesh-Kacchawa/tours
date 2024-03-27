import { useEffect, useState } from "react"

const Cards = ({ tour, removeCard }) => {
    const [readMore, setReadMore] = useState(false);
    const [smallPeragraph, setSmallPeragraph] = useState()

    const printHalfPeragraph = () => {
        setReadMore(true)
        const smallPera = tour.info.slice(0, 80)
        return setSmallPeragraph(smallPera);
    }

    useEffect(() => {
        const length = tour.info.length;
        if (length <= 50) {
            setSmallPeragraph(tour.info)
        }
        else {
            printHalfPeragraph()
        }
    }, [])

    return <div className="single-tour info">
        <h6 className="tour-price"> $ {tour.price}</h6>
        <img src={tour.image} className="img" alt="image" />
        <div style={{ margin: "5px 10px" }}>
            <h5 className="merriweather-light">{tour.name}</h5>
        </div>
        <div className="about">
            {readMore ? <p className="raleway-uniquifier">{smallPeragraph}...</p> : <p className="raleway-uniquifier">{tour.info}</p>}

            {readMore ? <href onClick={() => { setReadMore(!readMore) }} style={{ cursor: "pointer", color: "blue" }}> Read more  </href >
                : <href onClick={() => { setReadMore(!readMore) }} style={{ cursor: "pointer", color: "blue" }}> Read less</href >
            }
        </div>
        <button className="btn" style={{ margin: "10px 5px", width: "95%" }} onClick={() => { removeCard(tour) }}>Not intrested</button>
    </div>
}

export default Cards