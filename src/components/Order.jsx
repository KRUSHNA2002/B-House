import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const Order = () => {
  const { id } = useParams();
  const apiKey = process.env.REACT_APP_API_KEY;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartitem, setcartItem] = useState("Order Now");
  const [buttonloading, setbuttonloading] = useState();
  const [count, setcount] = useState(1);
  
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const info = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`);
      const responseData = await info.json();
      setData(responseData);
      console.log(responseData);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [id , apiKey]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const decrement = () => {
    if (count > 0) {
      setcount(count - 1);
    }
  }

  const price = count * 200;
  const disc = (20 / 100) * price;
  const totalprice = price - disc;

  const addcart = () => {
    try {
      setbuttonloading(false);
      setcartItem("added to cart");
      // Use navigate to go to the cart route with the recipe id
      navigate(`/cart/${id}`);
    } catch (error) {
      console.log("Error");
    } finally {
      setbuttonloading(true);
    }
  }

  return (
    <div className="container my-4" style={{ boxShadow: '0px 0px 10px 5px inset' }}>
      <div className="row">
        <div className="col-md-7 col-12 p-5">
          {data && (
            <img src={`https://spoonacular.com/recipeImages/${id}-312x231.jpg`} alt="" style={{ width: '100%', height: '400px' }} />
          )}
        </div>
        <div className="col-md-5 col-sm-12 text-center" style={{ padding: '40px' }}>
          <div className="row">
            {data && (
              <>
                <div className="col-md-12">
                  <h4>{data.title}</h4>
                </div>
                <button className='btn border-success ' onClick={decrement}> - </button>
                <h6 className='mx-2 my-2'>Qty : {count}</h6>
                <button className='btn border-success ' onClick={() => setcount(count + 1)}>+</button>
                <h3 className='my-4'>Price : &#8377; {totalprice}</h3>
                <h6><span className='text-success'>Discount : 20%</span></h6>
                <div className="col-md-12">
                  {/* Link to the cart route with the recipe id */}
                  <Link to={`/cart/${id}`}>
                    <button className='btn btn-dark my-4 w-100' onClick={addcart} disabled={buttonloading}>{cartitem}</button>
                  </Link>
                </div>
                <div className="col-md-12">
                  <Link className='nav-link' to='/'>
                    <button className='w-100 btn btn-dark my-4 mx-2'>Menus</button>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
