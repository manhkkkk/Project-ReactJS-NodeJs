import User from '../models/Auth';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
	const { email, password } = req.body;
	try {
		const existUser = await User.findOne({ email }).exec();
		if (existUser) {
			res.status(400).json({
				message: "Tài khoản đã tồn tại"
			})
		}
		const user = await new User({ email, password }).save();
		res.json({
			user: {
				_id: user._id,
				email: user.email,
			}
		});
	} catch (error) {
		res.status(400).json({
			message: "Đăng ký thất bại"
		})
	}
}
export const login = async (req, res) => {
	const { email, password } = req.body;
	try {
		const user = await User.findOne({ email }).exec();
		if (!user) {
			res.status(400).json({
				message: "Email không tồn tại"
			})
		}
		if (!user.authenticate(password)) {
			res.status(400).json({
				message: "Mật khẩu không đúng"
			})
		}
		const token = jwt.sign({ _id: user._id }, "123456", { expiresIn: '1h' });
		res.json({
			token,
			user: {
				_id: user._id,
				email: user.email,
				name: user.name,
				role: user.role
			}
		})
	} catch (error) {
		res.status(400).json({
			message: "Đăng nhập thất bại"
		})
	}
}