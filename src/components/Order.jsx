import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Order = () => {
  const { id } = useParams();
  const apiKey = '901a78a62228490c93e9cfb31708d4ea';
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartitem , setcartItem]=useState("Order Now");
  const [buttonloading , setbuttonloading]=useState(true);

  const [count , setcount]=useState(1);

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
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const decrement=()=>{

    if(count>0)
    {
        setcount(count-1);
    }
  }

  const price=count*200;
  const disc=(20/100)*price;
  const totalprice=price-disc;
  
  

  const addcart=()=>{

    setcartItem("added to cart");
    setbuttonloading(true);

  }

  return (
    <div className="container my-4" style={{ boxShadow: '0px 0px 10px 5px inset' }}>
      <div className="row">
        <div className="col-md-7 col-12 p-5">
          {data && (
            <img src={`https://spoonacular.com/recipeImages/${id}-312x231.jpg`} alt="" style={{ width: '100%', height: '400px' }} />
          )}
        </div>
        <div className="col-md-5 col-12 " style={{padding:'70px'}}>
          {data && (
            <>
              <h4>{data.title}</h4>

              <div className='d-flex mx-2 my-4'>
               
               <button className='btn border-success ' onClick={decrement}> - </button>
                  
                  <h6 className='mx-2 my-2'>Qty : {count}</h6>

               <button className='btn border-success ' onClick={()=>setcount(count+1)}>+</button>

              </div>

              <h3 className='my-4'>Price : &#8377; {totalprice}</h3>
              <h6><span className='text-success'>Discount : 20%</span></h6>

              <div className="row">
                
              <button className='btn btn-dark my-4' onClick={addcart} disabled={buttonloading} >{cartitem} </button>
               <Link className='nav-link' to='/'>  <button className='btn btn-dark my-4 mx-2'>Menues</button></Link>  
              </div> 
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Order;
