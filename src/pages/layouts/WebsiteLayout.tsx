import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { read } from '../../api/product';
import { ProductType } from '../types/product'
import { Outlet } from 'react-router-dom'
import {isAuthenticate} from '../../utils/localstorage'


const WebsiteLayout = () => {
	const [loguot, setLoguot] = useState('');
	console.log(loguot);
	const navigate = useNavigate();
	
	

	const handerRemove = async () => {
		const respon = await localStorage.removeItem('user');
		setLoguot(respon)
		navigate('/')
	}
	return (
		<div>
			<header className="header">
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-md-3">
						<div className="header__logo">
							<a href="/"><img src="/src/lib/img/logo.png" alt="logo" /></a>
						</div>
						</div>
						<div className="col-lg-6 col-md-6">
						<nav className="header__menu mobile-menu">
							<ul>
								<li className="active"><a href="/">Home</a></li>
								<li><a href="/shop">Shop</a></li>
								<li><a href="#">Pages</a>
									<ul className="dropdown">
										<li><a href="./about.html">About Us</a></li>
										<li><a href="./shop-details.html">Shop Details</a></li>
										<li><a href="./shopping-cart.html">Shopping Cart</a></li>
										<li><a href="./checkout.html">Check Out</a></li>
										<li><a href="./blog-details.html">Blog Details</a></li>
									</ul>
								</li>
								<li><a href="./blog.html">Blog</a></li>
								<li><a href="./contact.html">Contacts</a></li>
							</ul>
						</nav>
						</div>
						<div className="col-lg-3 col-md-3">
						<div className="header__nav__option">
							<a href="#" className="search-switch"><img src="/src/lib/img/icon/search.png" alt="" /></a>
							<a href="#"><img src="/src/lib/img/icon/heart.png" alt="" /></a>
							{isAuthenticate() && (
								< >
								<a className="h-auto"><img width="21" height="18" src="/src/lib/img/icon/user.png"/>
								<ul className="down">
									<li><a>{isAuthenticate().user?.email}</a></li>
									<li><a type="button" onClick={() => handerRemove()}>Log Out</a></li>
								</ul></a>
								
								</>
							)}
							{!isAuthenticate() && (
								<a className="h-auto" href="/signin"><img width="21" height="18" src="/src/lib/img/icon/user.png"/></a>
							)}
						</div>
						</div>
					</div>
					<div className="canvas__open"><i className="fa fa-bars"></i></div>
				</div>
			</header>
			
			<Outlet/>
			<footer className="footer">
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-md-6 col-sm-6">
							<div className="footer__about">
								<div className="footer__logo">
									<a href="#"><img src="/src/lib/img/footer-logo.png" alt="" /></a>
								</div>
								<p>The customer is at the heart of our unique business model, which includes design.</p>
								<a href="#"><img src="/src/lib/img/payment.png" alt="" /></a>
							</div>
						</div>
						<div className="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
							<div className="footer__widget">
								<h6>Shopping</h6>
								<ul>
									<li><a href="#">Clothing Store</a></li>
									<li><a href="#">Trending Shoes</a></li>
									<li><a href="#">Accessories</a></li>
									<li><a href="#">Sale</a></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-2 col-md-3 col-sm-6">
							<div className="footer__widget">
								<h6>Shopping</h6>
								<ul>
									<li><a href="#">Contact Us</a></li>
									<li><a href="#">Payment Methods</a></li>
									<li><a href="#">Delivary</a></li>
									<li><a href="#">Return & Exchanges</a></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-3 offset-lg-1 col-md-6 col-sm-6">
							<div className="footer__widget">
								<h6>NewLetter</h6>
								<div className="footer__newslatter">
									<p>Be the first to know about new arrivals, look books, sales & promos!</p>
									<form action="#">
										<input type="text" placeholder="Your email"/>
										<button type="submit"><span className="icon_mail_alt"></span></button>
									</form>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12 text-center">
							<div className="footer__copyright__text">
								<p>Copyright ©
									<script>
										06/04/2022
									</script>2020
									All rights reserved | This template is made with <i className="fa fa-heart-o"
									aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</footer>
			
			<div className="search-model">
				<div className="h-100 d-flex align-items-center justify-content-center">
					<div className="search-close-switch">+</div>
					<form className="search-model-form">
						<input type="text" id="search-input" placeholder="Search here....." />
					</form>
				</div>
			</div>
		</div>
	)
}
export default WebsiteLayout;