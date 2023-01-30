import React from 'react'
import { Carousel } from 'react-bootstrap';
import ar from './Array'

function Map() {
  return (
    <div>
      
                <Carousel>
                {ar.map((val)=>{
            console.log(val);
            return(
      <Carousel.Item>
       
     
     
        <img style={{height:"600px"}} className="img" src={val.img} alt="Second slide"/>
        <Carousel.Caption style={{color:"black"}}>
            <h1>{val.name}</h1>
        <h1>{val.age}</h1>
        <h1>{val.place}</h1>

        </Carousel.Caption>
        


      </Carousel.Item>
      
 
      )
        })}
    </Carousel>
        
    </div>
  )
}

export default Map