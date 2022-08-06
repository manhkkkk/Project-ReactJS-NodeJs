import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { read } from '../api/product';
import { ProductType } from './types/product';

type ProductEditProps = {
	onUpdate: (product: ProductType) => void
}
type FormInputs = {
	name: string,
	price: number,
	category?: object,
	image?: string
}
const ProductEdit = (props: ProductEditProps) => {
	const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>();
	const navigate = useNavigate();
	const { id }= useParams();
	const [product, setProduct] = useState()
	const [category, setCategory] = useState();
	// console.log(category);
	
	useEffect(() => { // 3
		const getGT = async () => {
			const {data} = await axios.get("http://localhost:8000/api/category/")
			setCategory(data)
		}
		getGT();
	}, []);
	useEffect(() => {
		const getProduct = async () => {
			const { data } = await read(id);
			setProduct(data)
			console.log(data);
			
			reset(data)
		}
		getProduct();
	}, [])

	const onSubmit: SubmitHandler<FormInputs> = (data) => {
		props.onUpdate(data);
		// console.log(data);

		navigate('/admin/product')
	}
	return (
		<div className="bg-info " >
			<div className="justify-center bg-teal-500 flex items-center h-screen w-full bg-teal-lighter">
				<div  className=" grid justify-items-start w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
					<h1 className=" block w-full text-center text-grey-darkest mb-6">Update</h1>
					<form onSubmit={handleSubmit(onSubmit)} className=" flex items-stretch  mb-4 md:flex md:flex-wrap md:justify-between" action="/" method="post">
						<select {...register('category', { required: true })}>{category?.map((category: any) => (
							<option value={category._id}>{category.name}</option>
						))}
						{errors.category && <span>Fields is required</span>}
						</select>
						<div className="flex flex-col mb-4 md:w-full">
						<label className="mb-2 uppercase font-bold text-lg text-grey-darkest" >Name</label>
						<input type="text" {...register('name', { required: true })}  className="border py-2 px-3 text-grey-darkest"/>
						{errors.name && <span>Fields is required</span>}
						</div>
						<div className="flex flex-col mb-6 md:w-full">
						<label className="mb-2 uppercase font-bold text-lg text-grey-darkest" >Price</label>
						<input type="number" {...register('price', { required: true })}className="border py-2 px-3 text-grey-darkest"/>
						</div>
						{errors.price && <span>Fields is required</span>}
						<div>
						<input type="file" {...register('image', { required: true })}
						placeholder="Upload an image"
						/>
						</div>
						<button className="block bg-teal hover:bg-teal-dark uppercase text-lg mx-auto rounded btn btn-success" >Update</button>
					</form>
					<a className="block w-full text-center no-underline text-sm text-grey-dark hover:text-grey-darker" href="/login">Left Page?</a>
				</div>
				</div>
				</div>
	)
}

export default ProductEdit