import './imageContainer.css';

export default function ImageContainer({city, setChange, submitHandler}) {
	return(
     <>
      <div className="left" >
        <img src="nature.jpg" alt="" />

        <div className="leftHeader px-5" >
          <p className="text-light h4" >ForeSee</p>
          <p className="badgeContainer px-3 text-light" >
            <span>Current Location</span>
            <br />
            <span className="font-weight-bold text-capitalize" >{city}</span>
          </p>
        </div>

        <div className="leftForm" align="center" >
          <h1 style={{color: '#fff'}} >Weather Forecast</h1>
          <p className="horizontalLine" ></p>
          <form onSubmit={e => submitHandler(e)} >
            <input type="text" placeholder="Enter location..." 
             onChange={e => setChange(e.target.value)}
            />
            <button className="btn btn-light ml-1" >Search</button>
          </form>
        </div>
      </div>
     </>
	)
}