import React from 'react'

const Footer = () => {
    return (
        <>

            <div className="container">
                <div className="col-md-12">
                    
                        <div className="col-md-12">
                            <h1 className='text-center text-muted my-5' >About Shop </h1>
                        </div>
                        <div className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident autem vel recusandae earum sequi beatae fugit maiores quaerat adipisci 
                            iusto doloribus deserunt, debitis veniam tenetur natus magnam molestiae harum architecto. Ipsum magni nihil dolores libero enim deserunt optio nisi ipsam laborum recusandae 
                            ea doloremque vitae id vel corporis, unde blanditiis.</div>

                         <h3 className='text-center text-muted my-4'>Follow Along</h3>
                        <div className="row d-flex justify-content-center align-items-center my-2">

                           <span className='p-1 d-flex justify-content-center align-items-center mx-2' style={{height:'50px' , width:'50px', border:'2px solid black',borderRadius:'50%'}}><i class="fa-brands fa-instagram" style={{fontSize:'30px'}}></i></span>
                           <span className='p-1 d-flex justify-content-center align-items-center mx-2' style={{height:'50px' , width:'50px', border:'2px solid black',borderRadius:'50%'}}><i class="fa-brands fa-twitter" style={{fontSize:'30px'}}></i></span>
                           <span className='p-1 d-flex justify-content-center align-items-center mx-2' style={{height:'50px' , width:'50px', border:'2px solid black',borderRadius:'50%'}}><i class="fa-brands fa-linkedin" style={{fontSize:'30px'}}></i></span>
                            <span className='p-1 d-flex justify-content-center align-items-center mx-2' style={{height:'50px' , width:'50px', border:'2px solid black',borderRadius:'50%'}}><i class="fa-brands fa-hackerrank" style={{fontSize:'30px'}}></i></span>

                        </div>
                </div>
            </div>

                   <div className="container-fluid ">
                         <div className=' bg-secondary mt-4 p-0 ' >
                              <h6 style={{height:'50px'}} className='d-flex justify-content-center align-items-center'>Copyright &copy; 2024 Restaurant . All rights reserved by <span>Wghumbare Krushna</span></h6>
                        </div>
                    </div>

        </>
    )
}

export default Footer
