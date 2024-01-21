import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import ShortInfo from './ShortInfo';
import { useInView } from 'react-intersection-observer';

// import { useContext } from 'react';

// import data from '../App';

const Home = (props) => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    quantity: '',
    date: '',
    time: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save form data to localStorage
    const reservations = JSON.parse(localStorage.getItem('reservations')) || [];
    reservations.push(formData);
    localStorage.setItem('reservations', JSON.stringify(reservations));

    // Optionally, you can clear the form fields after submission
    setFormData({
      name: '',
      email: '',
      mobile: '',
      quantity: '',
      date: '',
      time: '',
      msg: '',
    });
  };
  const [ref, inView] = useInView({
    triggerOnce: true, 
  });
  //  const apikey=useContext(data);

  const apiKey = '901a78a62228490c93e9cfb31708d4ea';
  const [five, setfirstfive] = useState([]);

  // const [count , setcount]=useState(0);

// const decrement=()=>{

//   if(count>0)
//   {
//     setcount(count-1);
//   }
// }

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
      <Carousel data-bs-theme="white">
        <Carousel.Item>
          <img
            className="d-block" height={'550px'} width={"100%"}
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
            className="d-block" height={'550px'} width={"100%"}
            src="https://assets.architecturaldigest.in/photos/64f84cc61d4896b633fba77a/master/w_1600%2Cc_limit/The%2520art%2520deco%2520inspired%2520de%25CC%2581cor%2520of%2520CIRQA%25201960%2520.jpg"
          />
          <Carousel.Caption className='text-white'>
            <h1 style={{fontSize:"50px"}}>QUALITY FOOD</h1>
            <h3>Fine food  and Dining Since 1880</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block" height={'550px'} width={'100%'}
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/fe/db/b1/ministry-of-food.jpg?w=1200&h=-1&s=1"
            alt="Third slide"
          />
          <Carousel.Caption className='text-white'>
            <h1 style={{fontSize:"50px"}}>ART OF COOKING</h1>
            <h3>The Best Restarent In Town</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    <div className='emptydiv'>
    </div>

      <div className="container-fluid bgimagecard ">

        <div className="row  ">
          <div className='text-white text-center my-5'>
            <h1>Special Items</h1>
          </div>
          {
            five.map((val, i) => {
              return (

                <div ref={ref} className={`cardhome col-md-4 my-4 mx-auto d-flex justify-content-center align-items-center container shortinfoanimation ${inView ? 'visible' : ''} `}>
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
<div className='emptydiv1'></div>
      <div className="container-fluid">
          <div className="row bgcontact">

            <form onSubmit={handleSubmit}>
            <div className="col-md-12 col-12 text-center " style={{marginTop:"150px"}}>
                        <h1 style={{fontFamily: 'Satisfy',color:'White' , textShadow: '2px 2px 4px black' ,fontSize:'30px'}}>BOOK A TABLE</h1>
                        <h3 style={{color:'White',fontSize:'60px' ,textShadow: '2px 2px 4px black'}}>Reservation</h3>

                      <div className="row d-flex justify-content-center align-items-center p-3 bginput">
                        <div className="col-md-5 my-3">
                          <input type="text" required className='form-control my-1 ' name='name' value={formData.name} onChange={handleInputChange} style={{height:"45px",border:'1px solid black inset' , boxShadow:'0px 0px 0px px inset'}}  placeholder='Enter your Name' />
                        </div>

                        <div className="col-md-5 my-3 ">
                          <input type="text" required className='form-control my-1 ' name='email' value={formData.email} onChange={handleInputChange} style={{height:"45px",border:'1px solid black inset' , boxShadow:'0px 0px 0px px inset'}}  placeholder='Enter your Email' />
                        </div>

                        <div className="col-md-5 my-2">
                          <input type="text" required className='form-control my-1 ' name='mobile' value={formData.mobile} onChange={handleInputChange} style={{height:"45px",border:'1px solid black inset' , boxShadow:'0px 0px 0px px inset'}} placeholder='Enter your Mobile' />
                        </div>

                        <div className="col-md-5 my-2 ">
                          <input type="text" required className='form-control my-1 ' name='menus' value={formData.menus} onChange={handleInputChange} style={{height:"45px",border:'1px solid black inset' , boxShadow:'0px 0px 0px px inset'}}  placeholder='Enter your orders / Menus' />
                        </div>


                        {/* <div className="col-md-5 my-2  d-flex justify-content-center align-items-center">
                          <button className='mx-2 btn btn-primary' onClick={()=>setcount(count+1)}>+ </button>
                          <h6> Select QTY : {count}</h6>
                          <button className='mx-2 btn btn-danger' onClick={decrement}> -</button>
                        </div> */}


                        <div className="col-md-5 my-2  d-flex justify-content-center align-items-center">
                           <input type='number' required name="quantity" id="quantity" className='form-control ' value={formData.quantity} onChange={handleInputChange} style={{height:"45px",border:'1px solid black inset' , boxShadow:'0px 0px 0px px inset' }} placeholder="Enter Your Quantity" />
                        </div>

                        <div className="col-md-5 my-2">
                           <div className="row">
                           <div className="col-md-6">
                         <input type="date" required className='form-control my-1 ' name='date' value={formData.date} onChange={handleInputChange} style={{height:"45px",border:'1px solid black inset' , boxShadow:'0px 0px 0px px inset'}}  placeholder='Choose Your Date' />
                         </div>
                         <div className="col-md-6">
                         <input type="time" required className='form-control my-1 'name='time' value={formData.time} onChange={handleInputChange} style={{height:"45px",border:'1px solid black inset' , boxShadow:'0px 0px 0px px inset'}}  placeholder='Choose Your Time' />
                         </div>
                           </div>
                        </div>

                        <div className="col-md-10 my-2" >
                          <textarea rows="4" required type="text" className='form-control my-1 ' name='msg' value={formData.msg} onChange={handleInputChange} style={{border:'1px solid black inset' , boxShadow:'0px 0px 0px px inset'}}  placeholder='Enter your Message'></textarea>
                        </div>

                        <div className="col-md-5 my-2  my-5">
                          <button type='submit' className='btn btn-primary'>Book Table</button>
                        </div>

                      </div>
                    </div>
            </form>
          </div>
      </div>

      <ShortInfo/>
    </>
  )
}

export default Home
