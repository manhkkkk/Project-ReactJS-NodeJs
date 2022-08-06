import { useEffect, useState } from 'react'
import './App.css'
import { ProductType } from './pages/types/product'
import { Route, Routes, Navigate, NavLink } from 'react-router-dom';
import ProductPage from './pages/productPage';
import ProductAdd from './pages/productAdd'
import ProductEdit from './pages/productEdit';
import Signin from './pages/signin';
import Signup from './pages/signup';
import { list, remove, add, update } from './api/product';
import toastr from 'toastr'
import "toastr/build/toastr.min.css";
import { useNavigate } from 'react-router-dom';
import PrivateRouter from './components/PrivateRouter';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import AdminLayout from './pages/layouts/AdminLayout';
import Homepage from './pages/homePage';
import ProductDetail from './pages/productDetail'
import Shop from './pages/Shop';
import Category from './pages/category';


function App() {
	const [products, setProducts] = useState<ProductType[]>([]);
	const navigate = useNavigate();
	useEffect(() => {
		const getProducts = async () => {
			const { data } = await list();
			setProducts(data);
		}
		getProducts();
	}, []);

	const onHanlderRemove = async (_id: any) => {
		if (window.confirm("Ban muon xoa khong")) {
			remove(_id);
			toastr.success('xoa thanh cong')
			setProducts(products.filter(item => item._id !== _id));
		}
	}
	const onHanlderAdd = async (product: ProductType) => {
		const { data } = await add(product);
		if (data) {
			toastr.success('them thanh cong thanh cong')
			setProducts([...products, data])
			navigate('/admin/product/add')
		}
		else{
			toastr.error('them thanh cong thanh cong')
		}
	}
	const onHandleUpdate = async (product: ProductType) => {
		const [image, setImage] = useState('')

		
		// const { data } = await update(product);
		const { data } = await update(product);
		// console.log(product);
		
		// console.log(data);
		toastr.success('sua thanh cong ');
		setProducts(products.map(item => item._id === data._id ? product : item));
	}
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<WebsiteLayout />}>
					<Route index element={<Homepage />} />
					<Route path="shop">
						<Route index element={<Shop />} />
						<Route path=":id" element={<ProductDetail />} />
						<Route path="category/:id" element={<Category/>}/>
					</Route>
				</Route>
				{/* <Route path="/" element={<WebsiteLayout />}>
					<Route index element={<Homepage products={products} />} >
					<Route path="product/:id" element={<ProductDetail />} >
					<Route path="category/:id" element={<Category />} >
					</Route>
				</Route> */}
				<Route path="admin" element={<PrivateRouter> <AdminLayout /></PrivateRouter>}>
					<Route index element={<Navigate to="dashboard" />} />
					<Route path="dashboard" element={<h1>Dashboard page</h1>} />
					<Route path="product">
						<Route index element={<ProductPage products={products} onRemove={onHanlderRemove} />} />
						<Route path="add" element={<ProductAdd onAdd={onHanlderAdd} />} />
						<Route path="edit/:id" element={<ProductEdit onUpdate={onHandleUpdate} />} />
					</Route>

				</Route>
				<Route path="/signup" element={<Signup />} />
				<Route path="/signin" element={<Signin />} />
			</Routes>
		</div>
	)
}

export default App;
