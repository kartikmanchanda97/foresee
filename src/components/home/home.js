import { useState } from 'react';
import './home.css';

import ImageContainer from '../image_container/imageContainer';
import InfoContainer from '../info_container/infoContainer';

export default function Home() {
	const [change, setChange] = useState('');
	const [city, setCity] = useState('delhi');

	function submitHandler(e) {
	   e.preventDefault();
       setCity(change);
       e.target.reset();
	}

	return(
	 <>
	  <div className="mainContainer my-5 " >
       <ImageContainer city={city} setChange={setChange} submitHandler={submitHandler} />
       <InfoContainer city={city} />
      </div>
	 </>
	)
}