import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cart = () => {
  const { id } = useParams();
  const apiKey = '901a78a62228490c93e9cfb31708d4ea';
  const [cartData, setCartData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`);
        const data = await response.json();
        setCartData(data);
      } catch (error) {
        console.error('Error fetching cart data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCartData();
  }, [id]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>Cart Products</h1>
          <ul>
            {Array.isArray(cartData) && cartData.length > 0 ? (
              cartData.map((item) => (
                <li key={item.id}>
                  {item.title} - ${item.title}
                </li>
              ))
            ) : (
              <p>No cart items available.</p>
            )}
          </ul>
        </>
      )}
    </div>
  );
};

export default Cart;
