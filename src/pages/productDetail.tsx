import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'

type Props = {}
type ProductType = {
	_id: number,
	name: string,
	price: number,
	image?: string,

}

const ProductDetail = (props: Props) => {
	const { id } = useParams();
	const [product, setProduct] = useState<ProductType>(); // 1
	console.log(product);

	useEffect(() => { // 3
		const getProduct = async () => {
			const response = await fetch('http://localhost:8000/api/products/' + id);
			const data = await response.json();
			setProduct(data);
		}
		getProduct();
	}, []);
	return ( // 2
		<div>
			<div className="grid grid-cols-3">
				<div className=" gap-4 lg:grid-cols-3 sm:grid-cols-2 ">
					<div className="w-full px-4 lg:px-0">
						<div className="p-3 bg-white rounded shadow-md">
							<div className="">
								<div className="relative w-full mb-3 h-62 lg:mb-0">
									<img src={product?.image} alt="Just a flower"
										className="object-fill w-full h-full rounded" />
								</div>
								<div className="flex-auto p-2 justify-evenly">
									<div className="flex flex-wrap ">
										<div className="flex items-center justify-between w-full min-w-0 ">
											<h2 className="mr-auto text-lg cursor-pointer hover:text-gray-900 ">
												{product?.name}
											</h2>
										</div>
									</div>
									<div className="mt-1 text-xl font-semibold">{product?.price} </div>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductDetail