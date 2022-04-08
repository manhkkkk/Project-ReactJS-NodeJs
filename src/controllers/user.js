import User from '../models/Auth';

export const userById = async (req, res, next, id) => {
	try {
		const user = await User.findById(id).exec();
		if (!user) {
			res.status(400).json({
				message: "Không tìm thấy user"
			})
		}
		req.profile = user;
		req.profile.password = undefined;
		next();
	} catch (error) {
		console.log(error);
	}
}
export const list = async (req, res) => {
	try {
		const user = await User.find().exec();
		res.json(user);
	} catch (error) {
		res.status(400).json({
			error: "Không có sản phẩm"
		})
	}
}
export const remove = async (req, res) => {
	try {
		const user = await User.findOneAndDelete({ _id: req.params.id }).exec();
		res.json(user);
	} catch (error) {
		res.status(400).json({
			error: "Xóa sản phẩm không thành công"
		})
	}
}