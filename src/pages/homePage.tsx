import React, { useMemo } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { TypeCategory } from './types/category'
import { ProductType } from './types/product'

const HomePage = () => {

	const [category, setcategory] = useState<TypeCategory[]>([])
	const [products, setProducts] = useState<ProductType[]>([])
    
	useEffect(() => {
		const getCa = async () => {
			const { data: {products} } = await axios.get("http://localhost:8000/api/category")
			setcategory(products)
		}
		getCa()
	}, [products])
   
	useEffect(() => {
		const getPR = async () => {
			const { data } = await axios.get("http://localhost:8000/api/products")
			setProducts(data)
		}
		getPR()
	}, [])
    
	return (
		<div>
			{/* {category.map((category) => {
				return <div>
					<NavLink to={`category/${category._id}`}>{category.name}</NavLink>
				</div>
			})}

			{products.map((products) => {
				return <div className="grid grid-cols-3">
					<div className=" gap-4 lg:grid-cols-3 sm:grid-cols-2 ">
						<div className="w-full px-4 lg:px-0">
							<div className="p-3 bg-white rounded shadow-md">
								<div className="">
									<div className="relative w-full mb-3 h-62 lg:mb-0">
										<Link to={`/product/${products._id}`}><img src={/src/lib/products.image} alt="J/ust a flower"
											className="object-fill w-full h-full rounded" /></Link>
									</div>
									<div className="flex-auto p-2 justify-evenly">
										<div className="flex flex-wrap ">
											<div className="flex items-center justify-between w-full min-w-0 ">
												<h2 className="mr-auto text-lg cursor-pointer hover:text-gray-900 ">
													{products.name}
												</h2>
											</div>
										</div>
										<div className="mt-1 text-xl font-semibold">{products.price} </div>

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			})} */}
    <section className="banner spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-7 offset-lg-4">
                    <div className="banner__item">
                        <div className="banner__item__pic">
                            <img src="/src/lib/img/banner/banner-1.jpg" alt=""/>
                        </div>
                        <div className="banner__item__text">
                            <h2>Clothing Collections 2030</h2>
                            <a href="#">Shop now</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="banner__item banner__item--middle">
                        <div className="banner__item__pic">
                            <img src="/src/lib/img/banner/banner-2.jpg" alt=""/>
                        </div>
                        <div className="banner__item__text">
                            <h2>Accessories</h2>
                            <a href="#">Shop now</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="banner__item banner__item--last">
                        <div className="banner__item__pic">
                            <img src="/src/lib/img/banner/banner-3.jpg" alt=""/>
                        </div>
                        <div className="banner__item__text">
                            <h2>Shoes Spring 2030</h2>
                            <a href="#">Shop now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="product spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <ul className="filter__controls">
                        <li className="active" data-filter="*">Best Sellers</li>
                        <li data-filter=".new-arrivals">New Arrivals</li>
                        <li data-filter=".hot-sales">Hot Sales</li>
                    </ul>
                </div>
            </div>
            <div className="grid grid-cols-4 row product__filter">
                {products?.products?.map((products: any) =>{
                    return<div className="col-lg-3 col-md-6 col-sm-6 col-md-6 col-sm-6 mix new-arrivals">
                     <div className="grid-cols-4 product__item">
                            <div className="product__item__pic setbg"  style={{backgroundImage: `url(${products.image})`}}>
                            <span className="label">New</span>
                            <ul className="product__hover">
                                <li><a href="#"><img src="/src/lib/img/icon/heart.png" alt=""/></a></li>
                                <li><a href="#"><img src="/src/lib/img/icon/compare.png" alt=""/> <span>Compare</span></a></li>
                                <li><a href="#"><img src="/src/lib/img/icon/search.png" alt=""/></a></li>
                            </ul>
                        </div>
                         <div className="product__item__text">
                            <h6>{products.name}</h6>
                            <a href="#" className="add-cart">+ Add To Cart</a>
                            <div className="rating">
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                            </div>
                            <h5>{products.price}</h5>
                            <div className="product__color__select">
                                <label >
                                    <input type="radio" id="pc-1"/>
                                </label>
                                <label className="active black" >
                                    <input type="radio" id="pc-2"/>
                                </label>
                                <label className="grey" >
                                    <input type="radio" id="pc-3"/>
                                </label>
                            </div>
                        </div>
                    </div>
                
                </div>
                })} 
            </div>
        </div>
    </section>
    <section className="categories spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="categories__text">
                        <h2>Clothings Hot <br /> <span>Shoe Collection</span> <br /> Accessories</h2>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="categories__hot__deal">
                        <img src="/src/lib/img/product-sale.png" alt=""/>
                        <div className="hot__deal__sticker">
                            <span>Sale Of</span>
                            <h5>$29.99</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 offset-lg-1">
                    <div className="categories__deal__countdown">
                        <span>Deal Of The Week</span>
                        <h2>Multi-pocket Chest Bag Black</h2>
                        <div className="categories__deal__countdown__timer" id="countdown">
                            <div className="cd-item">
                                <span>3</span>
                                <p>Days</p>
                            </div>
                            <div className="cd-item">
                                <span>1</span>
                                <p>Hours</p>
                            </div>
                            <div className="cd-item">
                                <span>50</span>
                                <p>Minutes</p>
                            </div>
                            <div className="cd-item">
                                <span>18</span>
                                <p>Seconds</p>
                            </div>
                        </div>
                        <a href="#" className="primary-btn">Shop now</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="instagram spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="instagram__pic">
                        <img className="instagram__pic__item set-bg" src="/src/lib/img/instagram/instagram-1.jpg"/>
                        <img className="instagram__pic__item set-bg" src="/src/lib/img/instagram/instagram-2.jpg"/>
                        <img className="instagram__pic__item set-bg" src="/src/lib/img/instagram/instagram-3.jpg"/>
                        <img className="instagram__pic__item set-bg" src="/src/lib/img/instagram/instagram-4.jpg"/>
                        <img className="instagram__pic__item set-bg" src="/src/lib/img/instagram/instagram-5.jpg"/>
                        <img className="instagram__pic__item set-bg" src="/src/lib/img/instagram/instagram-6.jpg"/>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="instagram__text">
                        <h2>Instagram</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                        <h3>#Male_Fashion</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="latest spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <span>Latest News</span>
                        <h2>Fashion New Trends</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="blog__item">
                        <div className="blog__item__pic setbg"  style={{backgroundImage: `url(/src/lib/img/blog/blog-1.jpg`}}></div>
                        <div className="blog__item__text">
                            <span><img src="/src/lib/img/icon/calendar.png" alt=""/> 16 February 2020</span>
                            <h5>What Curling Irons Are The Best Ones</h5>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="blog__item">
                        <div className="blog__item__pic setbg"  style={{backgroundImage: `url(/src/lib/img/blog/blog-2.jpg`}}></div>
                        <div className="blog__item__text">
                            <span><img src="/src/lib/img/icon/calendar.png" alt=""/> 21 February 2020</span>
                            <h5>Eternity Bands Do Last Forever</h5>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="blog__item">
                        <div className="blog__item__pic setbg"  style={{backgroundImage: `url(/src/lib/img/blog/blog-3.jpg`}}></div>
                        <div className="blog__item__text">
                            <span><img src="/src/lib/img/icon/calendar.png" alt=""/> 28 February 2020</span>
                            <h5>The Health Benefits Of Sunglasses</h5>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

		</div>



	)
}

export default HomePage