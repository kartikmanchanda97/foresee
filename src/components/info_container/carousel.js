import { useState, useEffect, createRef } from 'react';
import './infoContainer.css';

import axios from 'axios';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Slider({city}) {
  const [list, setList] = useState([]);

  const xyz = createRef();

  const [loading, setLoading] = useState(true);
    
  async function fetchData() {
    try {
      const {data} = await axios.get(
       `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_API_KEY}&cnt=7`
      )
      setList(data.list);
    } catch(err) {
       console.log(err);
    } finally {
      setLoading(false);
    }
  }


  useEffect(() => {
    fetchData();
  }, [city]);

  const responsive = {
    superLargeDesktop: {  
      breakpoint: { max: 3000, min: 1150 },
      items: 2
    },
    desktop: {
      breakpoint: { max: 1150, min: 770 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 770, min: 580 },
      items: 2
    },
    smallTablet: {
      breakpoint: { max: 580, min: 0 },
      items: 1
    },
  }

	return(
    <>
     <div ref={xyz}></div>

      <Carousel
         className="sliderContainer pl-5 py-4" 
         responsive={responsive}
        >

         {
          loading ? <h3>Loading</h3> : 
            list.map(({main, weather, dt_txt}, index) => (
              <div key={index} className="bg-light p-3" >
               <span className="h3 font-weight-bold" >{Math.round(main.temp - 273)}° C</span>
               <br />
               <span className="h4" >{weather[0].main}</span>
               <br />
               <span>
                date
               </span>
              </div>
            ))
         }
        
      </Carousel>
     </>        
	)
}