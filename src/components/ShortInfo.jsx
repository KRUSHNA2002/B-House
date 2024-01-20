import React from 'react'

const ShortInfo = () => {
  return (
<>

         <div className="container ">
            <div className="row shortinfoanimation">
                <div className="col-md-12 text-center my-5">
                    <h1 className='' style={{fontFamily:'Satisfy' ,fontSize:'40px'}}>Short Info</h1>
                    <h4 className='' style={{fontFamily:'cursive',fontSize:'60px'}}>Get In Touch</h4>
                </div>
                
                <div className="row  d-flex justify-content-center align-items-center  ">
                    
                        <div className='col-md-6  ' style={{height:'400px'}}>
                            <div className="col-md-12">
                            <h1 className='text-center text-muted' style={{fontSize:'40px'}}>Contact us</h1>
                            </div>
                           <div className='p-5'>
                           <h6 className=' my-3 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus id atque nostrum. Earum, nam autem?</h6>
                            <h6><i className=' my-3 fa fa-phone'></i> 7020787143</h6>
                            <h6><i className=' my-3 fa fa-envelope'></i> waghumbarekrushna143@gmail.com</h6>
                            <h6><i className=' my-3 fa fa-address-card'> </i> Sinhagad Law College , Vadgaon Budruk , Pune</h6>
                           </div>
                        </div>

                        <div className='col-md-6  my-5 ' style={{height:'400px'}}>
                            <div className="col-md-12">
                             <h1 className='text-center text-muted ' style={{fontSize:'40px'}}>Opening Hours</h1>
                            </div>
                          <div className="row d-flex justify-content-center align-items-center">
                            <div className="col-md-12 font-bold">
                                 <div className="row p-4">
                                <div className="col-md-6 col-6 text-end">
                                        <h6 className='my-3 mx-5 text-bold'>MONDAY     </h6>
                                        <h6 className='my-3 mx-5 text-bold'>THUSDAY    </h6>
                                        <h6 className='my-3 mx-5 text-bold'>WEDNESDAY  </h6>
                                        <h6 className='my-3 mx-5 text-bold'>THURSDAY   </h6>
                                        <h6 className='my-3 mx-5 text-bold'>FRIDAY     </h6>
                                        <h6 className='my-3 mx-5 text-bold'>SATURDAY    </h6>
                                        <h6 className='my-3 mx-5 text-bold'>SUNDAY     </h6>
                                </div>
                                <div className="col-md-6 col-6 text-start">
                                        <h6 className='my-3 mx-5'>  9.00 - 5.00 </h6>
                                        <h6 className='my-3 mx-5'>  9.00 - 5.00 </h6>
                                        <h6 className='my-3 mx-5'>  9.00 - 5.00 </h6>
                                        <h6 className='my-3 mx-5'>  9.00 - 5.00 </h6>
                                        <h6 className='my-3 mx-5'>  9.00 - 5.00 </h6>
                                        <h6 className='my-3 mx-5'>  9.00 - 2.30 </h6>
                                        <h6 className='my-3 mx-5'>  CLOSED </h6>
                                </div>
                                 </div>
                            </div>
                          </div>
                        </div>               
                    
                </div>
            </div>
         </div>
</>
  )
}

export default ShortInfo;
