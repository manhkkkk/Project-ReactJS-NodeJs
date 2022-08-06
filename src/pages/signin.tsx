import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { signin } from '../api/auth';
import toastr from 'toastr'
import { useState } from 'react';
import "toastr/build/toastr.min.css";
import { isAuthenticate } from './../utils/localstorage';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { useEffect } from 'react';

type FormInputs = {
	name: string,
	email: string,
	password: string | number
}
const Signin = () => {
	const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();
	const navigate = useNavigate();

	const onSubmit: SubmitHandler<FormInputs> = async data => {
		const { data: users } = await axios.post('http://localhost:8000/api/signin', data);
		localStorage.setItem('user', JSON.stringify(users));
		toastr.success("dang nhap thanh cong dang chuyen trang")
		navigate('/admin/product')

	}
	return (
		<div className="flex flex-col items-center justify-center bg-gray-300 h-screen select-none">
			<div className="flex flex-col bg-white px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-xl shadow-2xl w-full max-w-md  border-l-4 border-purple-600">
				<div className="font-medium self-center text-xl sm:text-2xl uppercase w-60 text-center bg-purple-600 shadow-2xl p-6 rounded-full text-white">Sign In</div>
				<div className="mt-10">
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="relative w-full mb-3">
							<button>Sign In</button>
							<input type="email" {...register('email', { required: true })} className="mt-6 border-0 p-4 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" placeholder="Email" />
							{errors.email && <small className="p-2 text-red-500">* Email</small>}
						</div>
						<div className="relative w-full mb-3">
							<input type="password"{...register('password', { required: true })} className="mt-4 border-0 p-4 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" placeholder="Password" />
							{errors.password && <small className="p-2 text-red-500">* Password</small>}
						</div>
						<div className="text-center mt-6">
							<button className="p-3 rounded-lg bg-purple-600 outline-none text-white shadow w-32 justify-center focus:bg-purple-700 hover:bg-purple-500">Signin</button>
						</div>
						<div className="flex flex-wrap mt-6">
							<div className="w-1/2 text-left">
								<a href="#" className="text-blue-900 text-xl"><small>Forgot password?</small></a>
							</div>
							<div className="w-1/2 text-right">
								<Link to="/signup" className="text-blue-900 text-xl"><small>Sign Up</small></Link>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Signin