import React from 'react'
import { useNavigate } from 'react-router-dom';

type Props = {}

const loguot = (props: Props) => {
	const navigate = useNavigate()
	const logout = () => {
		localStorage.removeItem("accessToken");
		navigate('/')
	};
	return (
		<div onClick={logout}>loguot</div>
	)
}

export default loguot