import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

// import { useContext } from 'react';

// import data from '../App';

const Home = (props) => {

  //  const apikey=useContext(data);

  const apiKey = '901a78a62228490c93e9cfb31708d4ea';
  const [five, setfirstfive] = useState([]);

  const getData = async () => {


    try {
      const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&number=5`;
      console.log('API URL:', apiUrl);
  
      const api = await fetch(apiUrl);
      const firstfive = await api.json();
  
      console.log('API Response:', firstfive);
  
      setfirstfive(firstfive.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }

  }

  useEffect(() => {
    getData();
  }, [])
  return (
    <>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block" height={'500px'} width={"100%"}
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/af/e2/a4/decouvrez-notre-carte.jpg?w=1200&h=-1&s=1"
            alt="First slide"
          />
          <Carousel.Caption className='text-white'>
            <h1 style={{fontSize:"50px"}}>REAL STATE REAL FOOD</h1>
            <h3>The passion for the perfect taste</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block" height={'500px'} width={"100%"}
            src="https://assets.architecturaldigest.in/photos/64f84cc61d4896b633fba77a/master/w_1600%2Cc_limit/The%2520art%2520deco%2520inspired%2520de%25CC%2581cor%2520of%2520CIRQA%25201960%2520.jpg"
            alt="Second slide"
          />
          <Carousel.Caption className='text-white'>
            <h1 style={{fontSize:"50px"}}>QUALITY FOOD</h1>
            <h3>Fine food  and Dining Since 1880</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block" height={'500px'} width={'100%'}
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/fe/db/b1/ministry-of-food.jpg?w=1200&h=-1&s=1"
            alt="Third slide"
          />
          <Carousel.Caption className='text-white'>
            <h1 style={{fontSize:"50px"}}>ART OF COOKING</h1>
            <h3>The Best Restarent In Town</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="container ">

        <div className="row ">
          <div className='text-muted text-center my-5'>
            <h1>Special Items</h1>
          </div>
          {
            five.map((val, i) => {
              return (

                <div className="col-md-4 my-4 mx-auto d-flex justify-content-center align-items-center">
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={val.image} />
                    <Card.Body>
                      <Card.Title>Food </Card.Title>
                      <Card.Text>
                        {val.title}
                      </Card.Text>
                      <div className='text-center'>
                        <Link to={`/order/${val.id}`}>
                          <Button variant="primary" >Order</Button>
                        </Link>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              );
            })
          }
        </div>
      </div>

      <div className="container-fluid">
          <div className="row bgcontact">

               <div className="col-md-12 text-center my-5">
               <h1 style={{fontFamily: 'Satisfy',color:'Yellow' , textShadow: '2px 2px 4px'}}>BOOK A TABLE</h1>
               <h3 style={{color:'black'}}>Reservation</h3>
               </div>
          </div>
      </div>
    </>
  )
}

export default Home
