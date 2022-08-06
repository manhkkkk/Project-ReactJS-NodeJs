import { ProductType } from './types/product'
import { Link, NavLink, useParams } from "react-router-dom";
import { useEffect,useState } from 'react';
import axios from 'axios'



type ProductsProps = {
	products: ProductType[],
	onRemove: (_id?: number) => void,
}
	
const ProductPage = (props: ProductsProps,) => {
	// const [category, setCategory] = useState();
	// const [limit, setLimit] = useState(5)
	// const [page, setPage] = useState(1)

	// useEffect(() =>{
	// 	const getPage = async () => {
	// 		const {data} = await axios.get(`http://localhost:8000/api/products?page=${page}`)
	// 		setPage(data);
	// 	}
	// 	getPage();
		
	// },[])
	
	// useEffect(() => {
	// 	const getGT = async () => {
	// 		const {data} = await axios.get("http://localhost:8000/api/category")
	// 		setCategory(data)
	// 	}
	// 	getGT();
	// }, []);
	return (
		<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
			<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
				<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
					<tr>
						<th  className="px-4 py-3 font-medium text-xl text-gray-900 dark:text-white whitespace-nowrap">#</th>
						<th scope="col" className="px-4 py-3 text-xl text-gray-900 ">Image</th>
						<th scope="col" className="px-4 py-3 text-xl text-gray-900 ">Name</th>
						<th scope="col" className="px-4 py-3 text-xl text-gray-900 ">Price</th>
						<th scope="col" className="right ">
						<Link  className="font-medium text-blue-600 dark:text-blue-500 hover:underline btn btn-success" to={`/admin/product/add`}>OK</Link>
						</th>
					</tr>
				</thead>
				<tbody>
					{props.products?.products?.map((products, index,) => {
						return <tr key={index} className=" border-b dark:bg-gray-800 dark:border-gray-700">
							<td className="px-4 py-4">{index + 1}</td>
							<td scope="row" className="px-4 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"><img width={100} height={90} src={products.image} alt="" /></td>
							<td scope="row" className="px-4 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">{products.name}</td>
							<td className="font-medium text-gray-900 dark:text-white whitespace-nowrap">{products.price}</td>
							<td  className="px-0 py-4 "><Link  className="font-medium text-blue-600 dark:text-blue-500 hover:underline btn btn-warning" to={`/admin/product/edit/${products._id}`}>OK</Link></td>
							<td className="px-0 py-4"><button className=" btn btn-danger" onClick={() => props.onRemove(products._id)}>Xóa</button></td>
						</tr>
					})}
				</tbody>
			</table>
		</div>
	)
}

export default ProductPage;