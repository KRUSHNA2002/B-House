// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const Order = () => {
//   const { id } = useParams();
//   const apiKey = '901a78a62228490c93e9cfb31708d4ea';
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const getData = async () => {
//     try {
//       const info = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`);
//       const responseData = await info.json();
//       setData(responseData);
//       console.log(responseData);
//     } catch (error) {
//       setError(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, [id]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

// //   if (error) {
// //     return <div>Error: {error.message}</div>;
// //   }

//   return (
//     <div className="container my-4" style={{ boxShadow: '0px 0px 10px 5px inset' }}>
//       <div className="row">
//         <div className="col-md-7 col-12 p-5">
//           {data && (
//             <img src={`https://spoonacular.com/recipeImages/${id}-312x231.jpg`} alt="" style={{ width: '100%', height: '400px' }} />
//           )}
//         </div>
//         <div className="col-md-5 col-12 p-5">
//           {data && (
//             <>
//               <h6>Name : {data.title}</h6>
//               {/* Additional information about the recipe */}
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Order;
