'use client'
import React, { useState, useEffect } from 'react'
import { cinzel } from '../fonts';
// import { useRouter } from 'next/navigation'
// import { useSession, signIn, signOut } from "next-auth/react";
// import { useSelector } from 'react-redux';
// import { selectItems } from '../redux/slices/basketSlice';

// import ShoppingCart from './ShoppingCart'
// import { useShoppingCart } from "use-shopping-cart";

// import AsyncStorage from '@react-native-async-storage/async-storage';

function Header() {
    // const router = useRouter();
    // const itemsTemp = useSelector(selectItems);
    // const [items, setItems] = useState(0);
    // // const { data: session } = useSession();

    // useEffect(() => {
    //     setItems(itemsTemp)
    // }, [itemsTemp])
    
    const firstNav = `text-xl font-semibold text-stone-500 hover:text-stone-800 ${cinzel.className}`
    const secondNav = `text-base text-stone-500 hover:text-stone-700 flex items-center p-2`
    const [hoverWedding, setHoverWedding] = useState(false);

    // const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
    // const { handleCartClick, cartCount } = useShoppingCart();

    return (
        // <Provider>
            <div className='sticky top-0 start-0 z-20 bg-white'>
                <div className={`bg-stone-200 py-2 hidden lg:flex justify-center 
                                text-stone-600 text-xs font-semibold md:text-sm ${cinzel.className}`}>
                    Lifetime Warranty + Free Shipping* within North America
                </div>

                <div className='shadow shadow-stone-200 px-6 lg:px-0 z-50'>
                    <div className='max-w-sm lg:max-w-6xl mx-auto justify-between flex mt-0'>
                        <div className={`md:w-1/4 flex justify-center items-center text-stone-800 md:py-4 mx-0 md:mx-6 lg:mx-0 cursor-default  ${cinzel.className}`}>
                            <div className='my-0.25 md:my-0'>
                                <a href="/">
                                    <div className={`text-2xl md:text-4xl font-semibold `}>VENUS</div>
                                    <div className='flex text-sm md:text-lg font-semibold text-center justify-center -mt-2 xl:-mt-3'>Jewellery</div>
                                </a>
                            </div>
                        </div>

                        <div className={`hidden w-1/2 lg:flex px-4 justify-between items-center text-stone-500 py-4 text-xl font-semibold ${cinzel.className} `}>

                            <div className='h-full w-1/4 flex items-center justify-center' onMouseEnter={e=>{setHoverWedding(true)}} onMouseLeave={e=>{setHoverWedding(false)}}>
                                <div className={`relative items-centers`}>
                                    <a className={`${firstNav} group transition duration-300 `}
                                        href="/wedding" >Wedding
                                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-stone-400"></span>
                                    </a>
                                    {/* 2nd level menu */}
                                    <ul 
                                        className={`${hoverWedding ? "" : "hidden"} origin-top-right absolute top-full left-1/2 -translate-x-1/2 min-w-[250px] mt-1 bg-white border border-slate-200 p-2 shadow-xl`}
                                    >
                                        <li>
                                            <a className={secondNav} href="/engagement">Engagement Rings</a>
                                        </li>
                                        <li>
                                            <a className={secondNav} href="women">Women&apos;s Wedding Rings</a>
                                        </li>
                                        <li>
                                            <a className={secondNav} href="men">Men&apos;s Wedding Rings</a>
                                        </li>
                                        <li>
                                            <a className={secondNav} href="weddingday">Wedding Day Jewellery</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className=" w-1/4 flex items-center justify-center ml-6 mr-4">
                                <a className={firstNav} href="/personalized">Personalized</a>
                            </div>
                            <div className="w-1/4 flex items-center justify-center">
                                <a className={firstNav} href="/about">About</a>
                            </div>
                            <div className="w-1/4 flex items-center justify-center">
                                <a className={firstNav} href="/contact">Contact</a>
                            </div>

                        </div>

                        <div className='md:w-1/4 flex justify-center items-center lg:mr-0 space-x-3 md:space-x-4 text-stone-600 -mt-0.5'> 
                            
                            <a href="/basket">
                                <div className='hidden'>
                                    {/*
                                    <button className="relative">
                                        <Image
                                            src="./cart.svg"
                                            width={40}
                                            height={40}
                                            alt="shopping cart icon"

                                        <div className="rounded-full flex justify-center items-center bg-emerald-500 text-xs text-white absolute w-6 h-5 bottom-6 -right-1">
                                         {cartCount} 0
                                        </div>
                                    </button>
                                    */}

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2 lg:1.5" stroke="currentColor" className="w-7 h-7 lg:w-8 lg:h-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" /> 
                                    </svg>
                                    {/* <ShoppingCart/> */}
                                    
                                    <div className='bg-stone-600 rounded-full h-5 w-5 text-white flex justify-center items-center text-xs font-semibold z-8 -ml-4'>0</div>
                                    {/* {items.length} */}
                                </div>
                            </a>

                            <div className='flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2 lg:1.5" stroke="currentColor" className="z-10 w-7 h-7 lg:w-8 lg:h-8 cursor-pointer" >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" /> 
                                </svg>
                                {/* onClick={() => handleCartClick()} */}
                                <div className='bg-stone-600 rounded-full h-5 w-5 text-white flex justify-center items-center text-xs font-semibold -ml-4 z-20'>0</div>
                                {/* {cartCount} */}
                            </div>
                            {/* <ShoppingCart/> */}

                            

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2 lg:1.5" stroke="currentColor" className="w-7 h-7 lg:w-8 lg:h-8 lg:-mr-0 cursor-pointer">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>

                            {/* MOBILE MENU */}
                            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 lg:hidden" 
                                onClick={e=>{setMobileMenuVisible(true)}}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg> */}

                            {/* <label className="relative z-40 cursor-pointer px-3 py-6" for="mobile-menu">
                                <input className="peer hidden" type="checkbox" id="mobile-menu" />
                                <div
                                    className="relative z-50 block h-[1px] w-7 bg-black bg-transparent content-[''] before:absolute before:top-[-0.35rem] before:z-50 before:block before:h-full before:w-full before:bg-black before:transition-all before:duration-200 before:ease-out before:content-[''] after:absolute after:right-0 after:bottom-[-0.35rem] after:block after:h-full after:w-full after:bg-black after:transition-all after:duration-200 after:ease-out after:content-[''] peer-checked:bg-transparent before:peer-checked:top-0 before:peer-checked:w-full before:peer-checked:rotate-45 before:peer-checked:transform after:peer-checked:bottom-0 after:peer-checked:w-full after:peer-checked:-rotate-45 after:peer-checked:transform"
                                >
                                </div>
                            </label> */}

                            {/* <label className="relative z-40 cursor-pointer" for="mobile-menu">
                                <input className="peer hidden" type="checkbox" id="mobile-menu" />
                                <div
                                    className="relative z-50 block h-[1.5px] w-6 bg-stone-500 bg-transparent content-['']
                                            before:absolute before:top-[-0.45rem] before:z-50 before:block before:h-full before:w-full before:bg-stone-500 before:transition-all before:duration-800 before:ease-out
                                            before:content-[''] after:absolute after:right-0 after:bottom-[-0.45rem] after:block after:h-full after:w-full after:bg-white after:transition-all after:duration-800
                                            after:ease-out after:content-[''] peer-checked:bg-transparent before:peer-checked:top-0 before:peer-checked:w-full before:peer-checked:rotate-45
                                            before:peer-checked:transform after:peer-checked:bottom-0 after:peer-checked:w-full after:peer-checked:-rotate-45 after:peer-checked:transform"
                                >
                                </div>
                                <div
                                    className="fixed inset-0 z-40 hidden h-full w-full bg-black/10 backdrop-blur-sm peer-checked:block"
                                >
                                    &nbsp;
                                </div>

                                <div
                                    className="fixed top-0 right-0 z-40 h-full w-full translate-x-full overflow-y-auto overscroll-y-none transition duration-500 peer-checked:translate-x-0"
                                >
                                    <div className="float-right min-h-full w-[85%] bg-stone-900 px-6 pt-12 shadow-2xl text-xl text-white">
                                        <menu>
                                            <li><a href="/">Home</a></li>
                                            <li><a href="/contact">Contact</a></li>
                                        </menu>
                                    </div>
                                </div>
                            </label> */}

                            <label className="relative z-40 cursor-pointer lg:hidden" htmlFor="mobile-menu">
                                <input className="peer hidden" type="checkbox" id="mobile-menu" />
                                <div
                                    className="relative z-50 block h-[2px] w-6  bg-transparent content-['']
                                                before:absolute before:top-[-0.25rem] before:z-50 before:block before:h-full before:w-full 
                                                before:bg-stone-500 before:transition-all before:duration-800 before:ease-out before:content-[''] 
                                                after:absolute after:right-0 after:bottom-[-0.35rem] after:block after:h-full after:w-full after:bg-stone-500 
                                                after:transition-all after:duration-800 after:ease-out after:content-[''] 
                                                peer-checked:bg-transparent before:peer-checked:top-0 before:peer-checked:w-full 
                                                before:peer-checked:rotate-45 before:peer-checked:transform after:peer-checked:bottom-0 after:peer-checked:w-full 
                                                after:peer-checked:-rotate-45 after:peer-checked:transform"
                                >
                                    {/* bg-stone-400 */}
                                </div>
                                <div
                                    className="fixed inset-0 z-40 hidden h-full w-full bg-white/80 backdrop-blur-sm peer-checked:block"
                                >
                                    &nbsp;
                                </div>
                                <div
                                    className="fixed top-0 right-0 z-40 h-full w-full translate-x-full overflow-y-auto overscroll-y-none transition duration-500 peer-checked:translate-x-0"
                                >
                                    <div className="float-top min-h-full w-[100%] bg-white">

                                        <div className='px-6 z-50'>
                                        {/* shadow shadow-stone-200 */}
                                            <div className='max-w-sm lg:max-w-6xl mx-auto justify-between flex mt-1 md:mt-2'>
                                                <div className={`md:w-1/4 flex justify-center items-center text-white md:py-4 md:mx-6 cursor-default ${cinzel.className}`}>
                                                    <div className='mb-1 md:mb-0'>
                                                        <div className={`text-2xl md:text-2xl font-semibold `}>VENUS</div>
                                                        <div className='flex text-sm md:text-lg font-semibold text-center justify-center -mt-2'>Jewellery</div>
                                                    </div>
                                                </div>

                                                <div className='md:w-1/4 flex justify-center items-center space-x-3 text-white -mt-1 mr-9'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2 lg:1.5" stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                                    </svg>

                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2 lg:1.5" stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>

                                        <menu className={`flex justify-start mx-6 mt-6 text-2xl  ${cinzel.className}`}>
                                            <div className='space-y-4 px-6'>
                                                <li><a href="/wedding">Wedding</a></li>
                                                <li className='text-xl'><a href="/engagement">Engagement Rings</a></li>
                                                <li className='text-xl'><a href="/women">Women&apos;s Wedding Rings</a></li>
                                                <li className='text-xl'><a href="/men">Men&apos;s Wedding Rings</a></li>
                                                <li className='text-xl'><a href="/weddingday">Wedding Day Jewellery</a></li>
                                                <li><a href="/personalized">Personalized</a></li>
                                                <li><a href="/about">About</a></li>
                                                <li><a href="/contact">Contact</a></li>
                                            </div>
                                        </menu>
                                    </div>
                                </div>
                            </label>

                        </div>
                    </div>
                </div>

                {/* <div className={` ${mobileMenuVisible ? "flex" : "hidden"} block bg-stone-900 h-screen w-full top-0 z-100 absolute `}>
                lg:hidden
                    <div className='flex justify-center items-center text-center'>
                        <div className={`text-white text-5xl ml-8 text-center active:-translate-y-1/2 duration-500`} >x</div>
                        onClick={e=>{setMobileMenuVisible(false)}}
                    </div>
                    
                </div> */}
                
                
                
            </div>
        // </Provider>
    )
}

export default Header
