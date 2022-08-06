import React, {useState,useEffect, useMemo} from 'react';
import { TypeCategory } from './types/category'
import { ProductType } from './types/product'
import axios from 'axios'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Pagination from '../components/Pagination';



type Props = {}

const Shop = (props: Props) => {
    const { search } = useLocation()
    const [category, setcategory] = useState<TypeCategory[]>([]);
	const [products, setProducts] = useState<ProductType[]>([]);
    const [page , setPage] = useState(1);
    const [limit, setLimit] = useState(6);
    const totalPages = useMemo(() => {
        if(!products?.count) return 0;
        return Math.ceil(products.count / limit)
    }, [products?.count, limit])
   

    useEffect(() => {
        const page = new URLSearchParams(search).get('page') || 'lol';
        setPage(Number(page))
        console.log(page);
    }, [search])
	useEffect(() => {
        const getCT = async () => {
            const {data} = await axios.get("http://localhost:8000/api/category")
			setcategory(data)
		}
		getCT()
	}, [])
	useEffect(() => {
        const getPR = async () => {
            const {data} = await axios.get(`http://localhost:8000/api/products/?limit=${limit}&page=${page}`)
            setProducts(data)
		}
		getPR()
	}, [page])
    
    
  return (
    <div>
        {/* {products?.products?.map(products => (
        <div key={products._id}>{products.name}</div>
    )) } */}
    <section className="breadcrumb-option">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="breadcrumb__text">
                        <h4>Shop</h4>
                        <div className="breadcrumb__links">
                            <a href="./index.html">Home</a>
                            <span>Shop</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="shop spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="shop__sidebar">
                        <div className="shop__sidebar__search">
                            <form action="#">
                                <input type="text" placeholder="Search..."/>
                                <button type="submit"><span className="icon_search"></span></button>
                            </form>
                        </div>
                        <div className="shop__sidebar__accordion">
                            <div className="accordion" id="accordionExample">
                                <div className="card">
                                    <div className="card-heading">
                                        <a data-toggle="collapse" data-target="#collapseOne">Categories</a>
                                    </div>
                                    <div id="collapseOne" className="collapse show" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <div className="shop__sidebar__categories">
                                                <ul className="nice-scroll">
                                                    <li><a href="#">Men (20)</a></li>
                                                    <li><a href="#">Women (20)</a></li>
                                                    <li><a href="#">Bags (20)</a></li>
                                                    <li><a href="#">Clothing (20)</a></li>
                                                    <li><a href="#">Shoes (20)</a></li>
                                                    <li><a href="#">Accessories (20)</a></li>
                                                    <li><a href="#">Kids (20)</a></li>
                                                    <li><a href="#">Kids (20)</a></li>
                                                    <li><a href="#">Kids (20)</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-heading">
                                        <a data-toggle="collapse" data-target="#collapseTwo">Branding</a>
                                    </div>
                                    <div id="collapseTwo" className="collapse show" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <div className="shop__sidebar__brand">
                                                {category.map((category) => (
                                                <ul key={category._id}>
                                                    <li><NavLink to={`category/${category._id}`}>{category.name}</NavLink></li>
                                                </ul>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-heading">
                                        <a data-toggle="collapse" data-target="#collapseThree">Filter Price</a>
                                    </div>
                                    <div id="collapseThree" className="collapse show" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <div className="shop__sidebar__price">
                                                <ul>
                                                    <li><a href="#">$0.00 - $50.00</a></li>
                                                    <li><a href="#">$50.00 - $100.00</a></li>
                                                    <li><a href="#">$100.00 - $150.00</a></li>
                                                    <li><a href="#">$150.00 - $200.00</a></li>
                                                    <li><a href="#">$200.00 - $250.00</a></li>
                                                    <li><a href="#">250.00+</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-heading">
                                        <a data-toggle="collapse" data-target="#collapseFour">Size</a>
                                    </div>
                                    <div id="collapseFour" className="collapse show" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <div className="shop__sidebar__size">
                                                <label> 
                                                    <input type="radio" id="xs"/>
                                                </label>
                                                <label>
                                                    <input type="radio" id="sm"/>
                                                </label>
                                                <label>
                                                    <input type="radio" id="md"/>
                                                </label>
                                                <label >
                                                    <input type="radio" id="xl"/>
                                                </label>
                                                <label >
                                                    <input type="radio" id="2xl"/>
                                                </label>
                                                <label >
                                                    <input type="radio" id="xxl"/>
                                                </label>
                                                <label >
                                                    <input type="radio" id="3xl"/>
                                                </label>
                                                <label >
                                                    <input type="radio" id="4xl"/>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-heading">
                                        <a data-toggle="collapse" data-target="#collapseFive">Colors</a>
                                    </div>
                                    <div id="collapseFive" className="collapse show" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <div className="shop__sidebar__color">
                                                <label className="c-1" >
                                                    <input type="radio" id="sp-1"/>
                                                </label>
                                                <label className="c-2" >
                                                    <input type="radio" id="sp-2"/>
                                                </label>
                                                <label className="c-3" >
                                                    <input type="radio" id="sp-3"/>
                                                </label>
                                                <label className="c-4" >
                                                    <input type="radio" id="sp-4"/>
                                                </label>
                                                <label className="c-5" >
                                                    <input type="radio" id="sp-5"/>
                                                </label>
                                                <label className="c-6" >
                                                    <input type="radio" id="sp-6"/>
                                                </label>
                                                <label className="c-7" >
                                                    <input type="radio" id="sp-7"/>
                                                </label>
                                                <label className="c-8" >
                                                    <input type="radio" id="sp-8"/>
                                                </label>
                                                <label className="c-9" >
                                                    <input type="radio" id="sp-9"/>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-heading">
                                        <a data-toggle="collapse" data-target="#collapseSix">Tags</a>
                                    </div>
                                    <div id="collapseSix" className="collapse show" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <div className="shop__sidebar__tags">
                                                <a href="#">Product</a>
                                                <a href="#">Bags</a>
                                                <a href="#">Shoes</a>
                                                <a href="#">Fashio</a>
                                                <a href="#">Clothing</a>
                                                <a href="#">Hats</a>
                                                <a href="#">Accessories</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className="shop__product__option">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="shop__product__option__left">
                                    <p>Showing 1–12 of 126 results</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="shop__product__option__right">
                                    <p>Sort by Price:</p>
                                    <select>
                                        <option value="">Low To High</option>
                                        <option value="">$0 - $55</option>
                                        <option value="">$55 - $100</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 row">
                        
                        {products?.products?.map((products:any) => (
                            
                        <div key={products._id}  className=" col-lg-4 col-md-6 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic setbg"  style={{backgroundImage: `url(${products.image})`}}>
                                    <ul className="product__hover">
                                        <li><a href="#"><img src="/src/lib/img/icon/heart.png" alt=""/></a></li>
                                        <li><a href="#"><img src="/src/lib/img/icon/compare.png" alt=""/> <span>Compare</span></a>
                                        </li>
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
                                            <input type="radio" id="pc-40"/>
                                        </label>
                                        <label className="active black" >
                                            <input type="radio" id="pc-41"/>
                                        </label>
                                        <label className="grey" >
                                            <input type="radio" id="pc-42"/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="product__pagination">
                            <Pagination totalPages={totalPages} page={page} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Shop;