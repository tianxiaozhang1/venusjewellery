import React from 'react'
import Image from 'next/image';
import { cinzel } from '../fonts';

import { fblogo, iglogo, ttlogo, xlogo, igsvg } from '../icons/'

let textBox = "bg-white border border-stone-400 text-stone-600 sm:text-lg block w-full p-2";
    

function Footer() {
    return (
        <div className='pb-22 pt-12 bg-stone-100'>        
            <div className='lg:max-w-7xl mx-auto grid md:grid-cols-2 gap-2 '>
                <div className='px-8 lg:px-12 xl:pr-8'>
                    <div className={`text-xl font-semibold text-stone-500 flex xl:bg-stone-100`}>Become a <div className={`${cinzel.className} mt-0.25`}>&nbsp;Brilliance&nbsp;</div>  member</div>
                    <div className='my-6 w-full text-sm text-stone-600'>
                        Discover the range of premium benefits including Sign Up, Birthday and Anniversary Rewards, exclusive member discounts and more.
                    </div>
                    <div className='flex'>
                        <div>
                            <input type="email" name="email" id="email" className={textBox} placeholder="Email" required="" />
                        </div>
                        <button type="submit" value="Login" 
                                className=" text-stone-500 ml-1 uppercase bg-white font-medium shadow-sm border-2 border-stone-300 text-base px-3 w-32 py-1.5 text-center">
                            Sign Up
                        </button>
                    </div>

                    {/* <div className='flex justify-center mx-auto md:mx-0 md:justify-between space-x-12 md:space-x-4 w-1/3 mt-6 mb-6 md:mb-0'>
                        <Image
                            src={igsvg}
                            height={36}
                            width={36}
                            style={{objectFit:"contain"}}
                            className='cursor-pointer'
                            alt=""
                        />
                        <Image
                            src={fblogo}
                            height={28}
                            width={28}
                            style={{objectFit:"contain"}}
                            className='cursor-pointer'
                            alt=""
                        />
                        <Image
                            src={ttlogo}
                            height={30}
                            width={30}
                            style={{objectFit:"contain"}}
                            className='cursor-pointer'
                            alt=""
                        />
                        <Image
                            src={xlogo}
                            height={28}
                            width={28}
                            style={{objectFit:"contain"}}
                            className='cursor-pointer'
                            alt=""
                        />
                    </div> */}
                </div>

                <div className='px-8 flex justify-center md:grid md:grid-cols-2 lg:grid-cols-3 gap-2 text-xs md:text-xs cursor-pointer'>
                    <div className='space-y-3 text-center md:text-start'>
                        <div className={`${cinzel.className} text-base md:text-lg mt-2 md:mt-0`}>Venus</div>
                        <div>About Us</div>
                        <div>The Venus Foundation</div>
                        <div>Store Locator</div>
                        <div>Brilliance Royalty Program</div>
                        <div>Careers</div>
                        <div>Invester Centre</div>
                        <div>Sustainability</div>
                        <div>re:cycle</div>
                        <div>Education Centre</div>
                        <div>Gift Cards</div>
                    </div>
                    <div className='space-y-3 text-center md:text-start'>
                        <div className={`text-xs uppercase mt-1 md:mt-2.5 mb-4 text-stone-600`}>Customer Support</div>
                        <div>Need Help?</div>
                        <div>My Account</div>
                        <div>Book Appointment</div>
                        <div>FAQs</div>
                        <div>Delivery</div>
                        <div>Returns</div>
                        <div>Order Status</div>
                        <div>Watch Manual</div>
                        <div>Professional Care Plan</div>
                        <div>Finance Options</div>
                    </div>
                    <div className='space-y-3 text-center md:text-start'>
                        <div className={`text-xs uppercase mt-1 md:mt-2.5 mb-4 text-stone-600`}>Terms & Policies</div>
                        <div>Website Terms</div>
                        <div>General Terms</div>
                        <div>Click and Collect Terms</div>
                        <div>Gift Card Terms</div>
                        <div>Privacy</div>
                        <div>Return Policy</div>
                        <div>Product Disclaimers</div>
                        <div>Accessibility Policy</div>
                        <div>Legal and Privacy</div>
                    </div>
                </div>


            </div>
        </div>
        // <div className='h-6 mt-2 w-full'>
        //     {/* sticky bottom-0  */}
        //     <div className=' mx-auto'>
        //     {/* max-w-sm md:max-w-2xl lg:max-w-lg xl:max-w-7xl */}
        //         <div className='bg-stone-100'>


        //             <div className='flex justify-center'>
        //                 <div>
        //                     <div className={`lg:flex font-semibold text-xl lg:space-x-12 mt-6 ${cinzel.className}`}>
        //                         {/* <div className='flex justify-center'>SUPPORT</div> */}
        //                         <div className='flex justify-center'>Sizing</div>
        //                         <div className='flex justify-center'>Book an Appointment</div>
        //                         <div className='flex justify-center'>FAQ</div>
        //                     </div>

        //                     <div className='my-3 flex justify-center'>
        //                         <div className='lg:w-1/3'>
        //                             <div className='flex justify-between space-x-4'>
        //                                 <Image
        //                                     src={igsvg}
        //                                     height={36}
        //                                     width={36}
        //                                     style={{objectFit:"contain"}}
        //                                     className='cursor-pointer'
        //                                     alt=""
        //                                 />
        //                                 <Image
        //                                     src={fblogo}
        //                                     height={28}
        //                                     width={28}
        //                                     style={{objectFit:"contain"}}
        //                                     className='cursor-pointer'
        //                                     alt=""
        //                                 />
        //                                 <Image
        //                                     src={ttlogo}
        //                                     height={30}
        //                                     width={30}
        //                                     style={{objectFit:"contain"}}
        //                                     className='cursor-pointer'
        //                                     alt=""
        //                                 />
        //                                 <Image
        //                                     src={xlogo}
        //                                     height={28}
        //                                     width={28}
        //                                     style={{objectFit:"contain"}}
        //                                     className='cursor-pointer'
        //                                     alt=""
        //                                 />
        //                             </div>
        //                         </div>
        //                     </div>

        //                     <div className='h-0.5 rounded-lg w-full bg-stone-200 shadow-lg my-3'></div>

        //                     <div className='py-2 flex justify-center text-center items-center mb-4'>
        //                         <div>
        //                             <div className={`text-2xl font-bold ${cinzel.className}`}>BECOME A MEMBER</div>

        //                             <div className='flex'>
        //                                 <input className='bg-white w-full px-2 py-1 rounded-md border-2 border-stone-300 focus:border-stone-500' placeholder="Your Email" ></input>
        //                             </div>
        //                             <div className='flex items-center'>
        //                                 <input id="checked-checkbox" type="checkbox" value="" className="-ml-1 mr-2 w-4 h-4 text-stone-600 bg-gray-100 border-gray-500 rounded focus:ring-stone-500"></input>
        //                                 <div className='my-1'>I accept terms and conditions</div>
        //                             </div>
                                    
        //                             <button className={`bg-white px-5 py-1 rounded-md border-2 border-stone-300 font-semibold ${cinzel.className}`}>Join Now for Free</button>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>


        //             {/* <div className='md:flex space-x-4 max-w-7xl mx-auto'>
        //                 <div className='md:w-1/3 py-2 flex justify-center text-center items-center'>
        //                     <div>
        //                         <div className={`text-2xl font-bold ${cinzel.className}`}>BECOME A MEMBER</div>

        //                         <div className='flex'>
        //                             <input className='bg-white px-2 py-1 rounded-md border-2 border-stone-300 focus:border-stone-500' placeholder="Your Email" ></input>
        //                         </div>
        //                         <div className='flex items-center'>
        //                             <input id="checked-checkbox" type="checkbox" value="" className="-ml-1 mr-2 w-4 h-4 text-stone-600 bg-gray-100 border-gray-500 rounded focus:ring-stone-500"></input>
        //                             <div className='my-1'>I accept terms and conditions</div>
        //                         </div>
                                
        //                         <button className={`bg-white px-5 py-1 rounded-md border-2 border-stone-300 font-semibold ${cinzel.className}`}>Join Now for Free</button>
        //                     </div>
        //                 </div>
        //                 <div className='md:w-1/3 py-2 flex justify-center text-center items-center'>
        //                     <div>
        //                         <div>SUPPORT</div>
        //                         <div>Sizing</div>
        //                         <div>Book an Appointment</div>
        //                         <div>FAQ</div>
        //                         <div>Contact Us</div>
        //                         <div>Blog</div>
        //                     </div>
        //                 </div>
        //                 <div className='md:w-1/3 py-4 flex justify-center text-center items-center'>
        //                     <div>
        //                         <div className='font-bold'>Mandia Jewellery</div>
        //                         <div className='font-bold text-stone-500'>By appointment only</div>
        //                         <div>55 Queen St. E #506</div>
        //                         <div>Toronto, Ontario</div>
        //                         <div>M5C 1R6, Canada</div>
        //                         <div>Tel: 647-931-8859</div>
        //                     </div>
        //                 </div>
                        
        //             </div> */}
        //         </div>
        //         <div className='bg-stone-900'>
        //             <div className='md:max-w-lg lg:max-w-5xl mx-auto md:flex justify-center text-center uppercase text-xs lg:text-sm text-stone-300 font-semibold pt-3 pb-4 space-x-6'>
        //                 <div>© 2024 Mandia Jewellery</div>
        //                 <div>Privacy Policy</div>
        //                 <div>Prices are subject to change without notice</div>
        //                 <div>BN: 784554917</div>
        //             </div>
        //         </div>
        //     </div>
            
        // </div>
    )
}

export default Footer
