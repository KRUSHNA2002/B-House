import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Veg = () => {
  const [value, setValue] = useState([]);
  const apiKey = '901a78a62228490c93e9cfb31708d4ea';

  const getData = async () => {
    try {
      const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}`);
      const data = await res.json();

      console.log(data);
      setValue(data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container ">
       <div className="row ">
       {
        value.map((val , i)=>{
            return(

                <div className="col-md-4 my-4 mx-auto d-flex justify-content-center align-items-center">
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={val.image} />
                        <Card.Body>
                            <Card.Title>Food </Card.Title>
                            <Card.Text>
                            {val.title}
                            </Card.Text>
                            <div className='text-center'>
                            <Link  to={`/order/${val.id}`}>
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
  );
};

export default Veg;
