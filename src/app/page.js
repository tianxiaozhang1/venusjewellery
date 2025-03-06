// "use client"
import Image from "next/image";
// import { useState } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
// import HomeFAQ from './components/HomeFAQ'
// import GoogleReview from './components/GoogleReview';
// import mapleLeaf from './images/maple-leaf.png'
// import search from './images/search.png'
// import weddingRing from './images/wedding-rings.png'
// import engagementRing from './images/engagement-ring.png'

import large1 from './images/large1.jpg'
import large2 from './images/large2.jpg'
import large9 from './images/large9.jpg'

import category1 from './images/category1.jpg'
import category2 from './images/category2.jpg'

import bracelets from './images/bracelets.jpg'
import earrings from './images/earrings.jpg'
import engagement from './images/engagement.jpg'
import necklaces from './images/necklaces.jpg'
import rings from './images/rings.jpg'
import mens from './images/mens.jpg'

import pearl from './images/pearl.jpg'
import sapphire from './images/sapphire.jpg'
import ruby from './images/ruby.jpg'
import emerald from './images/emerald.jpg'

import Free_Shipping from './images/Free_Shipping.svg'
import Returns from './images/Returns.svg'
import Diamond from './images/Diamond.svg'
import Service from './images/Service.svg'

const categoryClassName = `flex justify-center my-2 text-base md:text-xl text-center ${cinzel.className}`

import { cinzel, inter } from './fonts'

const ArrowIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
    )
}

export default function Home() {

    const ringData = [
        {
            id: 0, 
            name: "Forever",
            price: "767", 
            // image: "https://static.wixstatic.com/media/49a083_98d5453ca964470fb08d6ff02106b25c~mv2.jpg/v1/fill/w_2000,h_2000,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/49a083_98d5453ca964470fb08d6ff02106b25c~mv2.jpg",
            image: "https://prod-sfcc-api.michaelhill.com/dw/image/v2/AANC_PRD/on/demandware.static/-/Sites-MHJ_Master/default/dw715b06f8/images/P19288710/P19288710-23-21.jpg?sw=1000&sm=fit&q=90",
        },
        {
            id: 1, 
            name: "Forever More",
            price: "937", 
            // image: "https://static.wixstatic.com/media/49a083_02908c60e88a430398f1eafe15d440f2~mv2.jpg/v1/fill/w_2000,h_2000,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/49a083_02908c60e88a430398f1eafe15d440f2~mv2.jpg",
            
            image: "https://prod-sfcc-api.michaelhill.com/dw/image/v2/AANC_PRD/on/demandware.static/-/Sites-MHJ_Master/default/dwcdda4d82/images/P18984262/P18984262-23-21.jpg?sw=1000&sm=fit&q=90",
        },
        {
            id: 2, 
            name: "Galaxy",
            price: "846", 
            // image: "https://static.wixstatic.com/media/49a083_300c77120c584db9a90d99afff3aad69~mv2.jpg/v1/fill/w_2000,h_2000,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/49a083_300c77120c584db9a90d99afff3aad69~mv2.jpg",
            image: "https://prod-sfcc-api.michaelhill.com/dw/image/v2/AANC_PRD/on/demandware.static/-/Sites-MHJ_Master/default/dw6752f2cf/images/P18985481/P18985481-23-21.jpg?sw=1000&sm=fit&q=90",
        },
        {
            id: 3, 
            name: "Glistening",
            price: "984", 
            // image: "https://static.wixstatic.com/media/49a083_f41af7f0723443ea819f5648616b276d~mv2.jpg/v1/fill/w_2000,h_2000,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/49a083_f41af7f0723443ea819f5648616b276~mv2.jpg",
            image: "https://prod-sfcc-api.michaelhill.com/dw/image/v2/AANC_PRD/on/demandware.static/-/Sites-MHJ_Master/default/dw39e234af/images/P19288727/P19288727-23-21.jpg?sw=1000&sm=fit&q=90",
        },
        {
            id: 4, 
            name: "Glitter",
            price: "960", 
            // image: "https://static.wixstatic.com/media/49a083_f5640d7034f64f78aa29f795c60a1042~mv2.jpg/v1/fill/w_2000,h_2000,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/49a083_f5640d7034f64f78aa29f795c60a1042~mv2.jpg",
            image: "https://prod-sfcc-api.michaelhill.com/dw/image/v2/AANC_PRD/on/demandware.static/-/Sites-MHJ_Master/default/dw5070fcd6/images/P18841206/P18841206-18-21.jpg?sw=1000&sm=fit&q=90",
        },
        {
            id: 5, 
            name: "Pristine",
            price: "1,198", 
            // image: "https://static.wixstatic.com/media/49a083_707d072b3c004d848b11045c826f92b1~mv2.jpg/v1/fill/w_2000,h_2000,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/49a083_707d072b3c004d848b11045c826f92b1~mv2.jpg",
            image: "https://prod-sfcc-api.michaelhill.com/dw/image/v2/AANC_PRD/on/demandware.static/-/Sites-MHJ_Master/default/dw43b04b14/images/P18971736/P18971736-18-21.jpg?sw=1000&sm=fit&q=90",
        },
        {
            id: 6, 
            name: "Exquisite",
            price: "1,188", 
            // image: "https://static.wixstatic.com/media/49a083_f29552e715444a61b7dd4c33773730de~mv2.jpg/v1/fill/w_2000,h_2000,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/49a083_f29552e715444a61b7dd4c33773730de~mv2.jpg",
            image: "https://prod-sfcc-api.michaelhill.com/dw/image/v2/AANC_PRD/on/demandware.static/-/Sites-MHJ_Master/default/dw6f3b2752/images/P18510881/P18510881-18-21.jpg?sw=1000&sm=fit&q=90",
        },
        {
            id: 7, 
            name: "Grande Glitter",
            price: "2,140", 
            // image: "https://static.wixstatic.com/media/49a083_e5346ec9c955425db909f5b2c7bbafc2~mv2.jpg/v1/fill/w_2000,h_2000,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/49a083_e5346ec9c955425db909f5b2c7bbafc2~mv2.jpg",
            // image: "https://prod-sfcc-api.michaelhill.com/dw/image/v2/AANC_PRD/on/demandware.static/-/Sites-MHJ_Master/default/dw93a67814/images/P18391763/P18391763-18-21.jpg?sw=1000&sm=fit&q=90",
            
            image: "https://prod-sfcc-api.michaelhill.com/dw/image/v2/AANC_PRD/on/demandware.static/-/Sites-MHJ_Master/default/dw93a67814/images/P18984514/P18984514-18-21.jpg?sw=1000&sm=fit&q=90",

        },
        // {
        //     id: 8, 
        //     name: "Only You",
        //     price: "2,190", 
        //     // image: "https://static.wixstatic.com/media/49a083_d65d1084bfd04c25895ee4c375d52d5b~mv2.jpg/v1/fill/w_2000,h_2000,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/49a083_d65d1084bfd04c25895ee4c375d52d5b~mv2.jpg",
        //     image: "https://prod-sfcc-api.michaelhill.com/dw/image/v2/AANC_PRD/on/demandware.static/-/Sites-MHJ_Master/default/dw8050c053/images/P16121928/P16121928-18-21.jpg?sw=1000&sm=fit&q=90",
        // },
    ]

    const ringLabel = "bg-white h-6 lg:h-8 flex justify-center items-center"

    const RingList = () =>
        <div className={`grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto space-x-2 space-y-2 p-2 pt-0 pl-0 pb-2`}>
            {ringData.map(({id, name, price, image}) => 
            <div key={id} className={`relative flex flex-col justify-between h-full mb-2 border-stone-100 ${id===0 ? `mt-2 ml-2` :''} ${id<2 ? `md:mb-0` :''}`}>
                 {/* border-r-8 mb-2 md:mb-0  ${id===0 ? `` :'border-b-8 border-stone-100'}*/}
                <img
                    src={image}
                    sizes="100vw"
                    alt={name}
                    className={`z-2 mb-2 mr-2 md:mr-0 md:mb-4 lg:mb-2 ${id>0 ? `mb-4 md:mb-0` :''}`}
                    // border-8 border-stone-50 rounded-xl
                />
                {/* <div className=" h-96 bg-slate-200"></div> */}
                <div className={`z-3 -mt-16 flex justify-between mx-6 mb-6 font-serif font-semibold text-stone-500 text-xs xl:text-base cursor-default ${inter.className}`}>
                    <div className={`w-24 lg:w-36 mr-0.5 ${ringLabel}`}>${price}.00</div>
                    <div className={`w-60 uppercase ml-0.5 ${ringLabel}`}>{name} ring</div>
                </div>
            </div>)}
        </div>

    return (
        <div className="">
            <Header/>

            <div className="lg:flex w-full">
                <div className="lg:w-1/2 bg-[#fdfaf2] flex md:justify-end items-center px-10 md:px-16 py-12 lg:px-28">
                    <div>
                        <div className={`${cinzel.className} text-xl lg:text-3xl flex md:justify-end`}>Jewellery</div>
                        <div className={`${cinzel.className} text-base mt-4 mb-6 xl:pl-66 flex md:justify-end md:text-end`}>
                            <div>Shop our range of fine jewellery at Michael Hill. Explore rings, earrings, necklaces, bracelets and bangles, crafted with precious metals, diamonds and gemstones. </div>
                        </div>
                        <div className="w-full flex md:justify-end">
                            <div className="w-56 xl:w-64 flex justify-center p-2 md:p-4 border-2 text-stone-700 border-stone-400 uppercase ">Shop All Jewellery</div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <Image
                        src={large2}
                        alt="X"
                        className="w-full"
                    />
                </div>
            </div>

            <div className="lg:flex w-full">
                <div className="lg:w-1/2">
                    <Image
                        src={large1}
                        alt="X"
                        className="w-full"
                    />
                </div>
                <div className="lg:w-1/2 bg-gradient-to-br from-white to-stone-100 flex items-center px-10 md:px-16 py-12 lg:px-28">
                    <div>
                        <div className={`${cinzel.className} text-xl lg:text-3xl`}>Wedding Rings</div>
                        <div className={`${cinzel.className} text-base mt-4 mb-6 xl:pr-66`}>
                            <div>For the day you make your commitment, and forever after. </div>
                            <div>Explore wedding bands, diamond bands, and wedding day jewellery, crafted to treasure.</div>
                        </div>
                        <div className="w-56 xl:w-64 flex justify-center p-2 md:p-4 border-2 text-stone-700 border-stone-400 uppercase">Shop Wedding Rings</div>
                    </div>
                </div>
            </div>

            <div className="hidden my-6 md:my-12">
                <div className={`flex justify-center text-2xl md:text-4xl mb-10 ${cinzel.className}`}>Browse By Category</div>

                <div className="w-92 md:w-190 lg:w-252 xl:w-316 mx-auto grid grid-cols-2 gap-2 lg:grid lg:grid-cols-4 lg:gap-4 ">
                    <div>
                        <Image
                            src={category1}
                            alt="X"
                            className="w-full"
                        />
                        <div className={`${categoryClassName}`}>Women&apos;s Wedding Bands</div>
                    </div>
                    <div>
                        <Image
                            src={category2}
                            alt="X"
                            className="w-full"
                        />
                        <div className={`${categoryClassName}`}>Enhancers</div>
                    </div>
                    <div>
                        <Image
                            src={category1}
                            alt="X"
                            className="w-full"
                        />
                        <div className={`${categoryClassName}`}>Men&apos;s Wedding Bands</div>
                    </div>
                    <div>
                        <Image
                            src={category1}
                            alt="X"
                            className="w-full"
                        />
                        <div className={`${categoryClassName}`}>Unisex Wedding Bands</div>
                    </div>
                </div>
            </div>

            

            <div className="my-6 md:my-12">
                <div className={`flex justify-center text-center text-2xl md:text-4xl mb-10 ${cinzel.className}`}>Browse By Category</div>

                <div className="w-92 md:w-190 lg:w-252 xl:w-316 mx-auto grid grid-cols-2 gap-2 lg:grid lg:grid-cols-6 lg:gap-2">
                    <div>
                        <Image
                            src={rings}
                            alt="X"
                            className="w-full"
                        />
                        <div className={`${categoryClassName}`}>Rings</div>
                    </div>
                    <div>
                        <Image
                            src={bracelets}
                            alt="X"
                            className="w-full"
                        />
                        <div className={`${categoryClassName}`}>Bracelets</div>
                    </div>
                    <div>
                        <Image
                            src={earrings}
                            alt="X"
                            className="w-full"
                        />
                        <div className={`${categoryClassName}`}>Earrings</div>
                    </div>
                    <div>
                        <Image
                            src={engagement}
                            alt="X"
                            className="w-full"
                        />
                        <div className={`${categoryClassName}`}>Engagement</div>
                    </div>
                    <div>
                        <Image
                            src={necklaces}
                            alt="X"
                            className="w-full"
                        />
                        <div className={`${categoryClassName}`}>Necklaces</div>
                    </div>
                    
                    <div>
                        <Image
                            src={mens}
                            alt="X"
                            className="w-full"
                        />
                        <div className={`${categoryClassName}`}>Mens</div>
                    </div>
                </div>
            </div>

            <div className="bg-stone-700 text-stone-200 py-12 md:py-32 my-2 md:my-12 px-12">

                <div className={`flex justify-center text-lg md:text-2xl ${cinzel.className}`}>HOW TO CARE FOR YOUR FINE JEWELLERY</div>
                <div className={`flex justify-center text-base md:text-xl ${cinzel.className}`}>Discover our detailed guide to caring for your various types of fine jewellery. </div>
                <div className=""></div>
                <div className="w-full flex pt-12 justify-center">
                    <div className="w-52 md:w-56 xl:w-64 flex justify-center p-2 md:p-4 border-2  border-stone-400 uppercase ">Learn More</div>
                </div>
            </div>

            <div className="my-6 md:my-12 lg:flex max-w-7xl mx-auto">
                <div className="lg:w-1/2">
                    <div className={`flex justify-center items-center text-xl lg:text-3xl my-6 ${cinzel.className}`}>Shop Jewellery by Metal</div>
                    <div className="py-2 md:py-6 flex justify-center gap-6 md:gap-12 text-sm md:text-base">
                        <div className="w-42 md:w-60 h-18 flex px-4 justify-between items-center border-2 border-stone-300">
                            <div className="flex items-center"><div className="h-8 w-8 bg-[#eddf9f] rounded-full mr-2"></div>GOLD</div>
                            <div className=""><ArrowIcon/></div>
                        </div>
                        <div className="w-42 md:w-60 h-18 flex px-4 justify-between items-center border-2 border-stone-300">
                            <div className="flex items-center"><div className="h-8 w-8 bg-[#e5e6ec] rounded-full mr-2"></div>PLATINUM</div>
                            <div className=""><ArrowIcon/></div>
                        </div>
                    </div>
                    <div className="pb-2 md:pb-6 flex justify-center gap-6 md:gap-12 text-sm md:text-base">
                        <div className="w-42 md:w-60 h-18 flex px-4 justify-between items-center border-2 border-stone-300">
                            <div className="flex items-center"><div className="h-8 w-8 bg-[#fbd2b7] rounded-full mr-2"></div>ROSE GOLD</div>
                            
                            <div className=""><ArrowIcon/></div>
                        </div>
                        <div className="w-42 md:w-60 h-18 flex px-4 justify-between items-center border-2 border-stone-300">
                            <div className="flex items-center"><div className="h-8 w-8 bg-neutral-300 rounded-full mr-2"></div>STERLING SILVER</div>
                            <div className=""><ArrowIcon/></div>
                        </div>
                    </div>
                </div>

                <div className="lg:w-1/2">
                    <div className={`flex justify-center items-center text-xl lg:text-3xl my-6 ${cinzel.className}`}>Shop Jewellery by Metal</div>
                    <div className="py-2 md:py-6 flex justify-center gap-6 md:gap-12 text-sm md:text-base">
                        <div className="w-42 md:w-60 h-18 flex px-6 justify-between items-center border-2 border-stone-300">
                            <div>Under $150</div>
                            <div className=""><ArrowIcon/></div>
                        </div>
                        <div className="w-42 md:w-60 h-18 flex px-6 justify-between items-center border-2 border-stone-300">
                            <div>Under $350</div>
                            <div className=""><ArrowIcon/></div>
                        </div>
                    </div>
                    <div className="pb-2 md:pb-6 flex justify-center gap-6 md:gap-12 text-sm md:text-base">
                        <div className="w-42 md:w-60 h-18 flex px-6 justify-between items-center border-2 border-stone-300">
                            <div>Under $500</div>
                            <div className=""><ArrowIcon/></div>
                        </div>
                        <div className="w-42 md:w-60 h-18 flex px-6 justify-between items-center border-2 border-stone-300">
                            <div>Under $1000</div>
                            <div className=""><ArrowIcon/></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-6 md:my-12">
                <div className={`flex justify-center text-2xl lg:text-4xl mb-10 ${cinzel.className}`}>Browse By Gemstone</div>

                <div className="w-92 md:w-190 lg:w-252 xl:w-316 mx-auto grid grid-cols-2 gap-4 lg:grid lg:grid-cols-4 lg:gap-4">
                    <div>
                        <Image
                            src={ruby}
                            alt="X"
                            className="w-full"
                        />
                        <div className={`${categoryClassName}`}>Ruby</div>
                    </div>
                    <div>
                        <Image
                            src={emerald}
                            alt="X"
                            className="w-full"
                        />
                        <div className={`${categoryClassName}`}>Emerald</div>
                    </div>
                    <div>
                        <Image
                            src={pearl}
                            alt="X"
                            className="w-full"
                        />
                        <div className={`${categoryClassName}`}>Pearl</div>
                    </div>
                    
                    <div>
                        <Image
                            src={sapphire}
                            alt="X"
                            className="w-full"
                        />
                        <div className={`${categoryClassName}`}>Sapphire</div>
                    </div>
                </div>
            </div>

            <div className="lg:flex w-full">
                <div className="lg:w-1/2">
                    <Image
                        src={large9}
                        alt="X"
                        className="w-full"
                    />
                </div>
                <div className="lg:w-1/2 bg-lime-100 flex items-center px-10 md:px-16 py-12 lg:px-28">
                    <div>
                        <div className={`${cinzel.className} text-xl lg:text-3xl`}>PENDANT STYLING INSPIRATION</div>
                        <div className={`${cinzel.className} text-base mt-4 mb-6 xl:pr-66`}>
                            <div>Our Pendant Bar Collection invites you to design an individual expression of your story and style.</div>
                            <div>Discover our favourite styling ideas to inspire your journey.</div>
                        </div>
                        <div className="w-56 xl:w-64 flex justify-center p-2 md:p-4 border-2 text-stone-700 border-stone-400 uppercase">Learn More</div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto my-24 grid grid-cols-2 gap-y-16 md:gap-y-0 md:grid-cols-4 px-2 md:px-12 lg:px-32 text-xs uppercase text-center md:text-start">
                <div className="px-8 md:px-0">

                    <Image
                        src={Free_Shipping}
                        alt="X"
                        className="w-6 mb-2 mx-auto"
                    />
                    
                    <div className="text-center">Free Shipping Over $100</div>
                </div>

                <div className="px-8 md:px-0">
                    <Image
                        src={Returns}
                        alt="X"
                        className="w-6 mb-2 mx-auto"
                    />
                    
                    <div className="text-center">Extended Returns</div>
                </div>

                <div className="px-8 md:px-0">
                    <Image
                        src={Diamond}
                        alt="X"
                        className="w-6 mb-2 mx-auto"
                    />
                    
                    <div className="text-center">Lifetime Diamond Warranty</div>
                </div>

                <div className="px-8 md:px-0">
                    <Image
                        src={Service}
                        alt="X"
                        className="w-6 mb-2 mx-auto"
                    />
                    
                    <div className="text-center">Services</div>
                </div>
            </div>

            <div className="hidden max-w-sm md:max-w-md xl:max-w-7xl xl:text-lg mx-auto lg:space-x-4 mt-3 z-10">
                <div className="lg:w-1/2 shadow-stone-300 shadow pb-4 px-2 mb-4 ">
                    <img
                        src={'https://images.ctfassets.net/7m8i36sp5l90/4ryhuHXP9TmolRP9lAaUg6/00d1bc4ca1943022644bee707e01ea02/side-accent-VQL_2x.jpg?fit=scale&fm=webp&q=80&w=975'}
                        sizes="100vw"
                        alt={"Finger"}
                        className={``}
                    />
                    <div className="">
                        <div className={`text-3xl lg:text-4xl flex font-semibold justify-center text-center mt-4 mb-2 ${cinzel.className}`}>HAPPILY EVER AFTER</div>
                        <div className="px-6 lg:px-20 mb-3 lg:mb-2 flex text-center">Our Wedding Collection offers an exquisite array of timeless & enchanting pieces, designed to be cherished for a lifetime.</div>
                        <div className="flex justify-center">
                            <div className="py-2 px-6 border-2 border-stone-200">Discover</div>
                        </div>
                    </div>
                </div>

                <div className="lg:w-1/2 shadow-stone-300 shadow pb-4 px-2 lg:px-0">
                    <img
                        src={'https://images.ctfassets.net/7m8i36sp5l90/3DQpQ3DdEvJkDzelvtwuVR/f6f729121bd2328ba4cf0c24f38a10f4/975x975_02.jpg?fit=scale&fm=webp&q=80&w=975'}
                        sizes="100vw"
                        alt={"Finger"}
                        className={``}
                    />
                    <div className={`text-3xl lg:text-4xl flex font-semibold justify-center text-center mt-4 mb-2 ${cinzel.className}`}>PERSONALIZED JEWELLERY</div>
                    <div className="px-6 lg:px-20 mb-3 lg:mb-2 flex text-center">Embrace your inner designer with our custom jewellery services, meticulously handcrafted in-house to bring your unique visions to life.</div>
                    <div className="flex justify-center">
                        <div className="py-2 px-6 border-2 border-stone-200">Discover</div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    );
}
