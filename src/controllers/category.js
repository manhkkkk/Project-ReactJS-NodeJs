import Category from '../models/category';
import Product from '../models/product';

export const list = async (req, res) => {
	try {
		const category = await Category.find().exec();
		res.json(category);
	} catch (error) {
		res.status(400).json({
			error: "Không có danh muc"
		})
	}
}
export const create = async (req, res) => {
	try {
		const category = await new Category(req.body).save();
		res.json(category);
	} catch (error) {
		res.status(400).json({
			error: "Thêm không thành công"
		})
	}
}
export const read = async (req, res) => {
	const condition = { _id: req.params.id };
	try {
		const category = await Category.findOne({ _id: req.params.id }).exec();
		const products = await Product.find({ category }).populate('category').select('-category').exec();
		res.json({
			products, category
		});
	} catch (error) {
		res.status(400).json({
			error: "tim không thành công"
		})
	}
}

export const geCategory = async (req, res) => {
	try {
		const category = await Category.findOne({ _id: req.params.id }).exec();
		res.json(category);
	} catch (error) {
		res.status(400).json({
			error: "Không có sản phẩm"
		})
	}
}
export const remove = async (req, res) => {
	try {
		const category = await Category.findOneAndDelete({ _id: req.params.id }).exec();
		res.json(category);
	} catch (error) {
		res.status(400).json({
			error: "Xóa sản phẩm không thành công"
		})
	}
}
export const update = async (req, res) => {
	const condition = { _id: req.params.id }
	const update = req.body;
	try {
		const category = await ProduCategoryct.findOneAndUpdate(condition, update).exec();
		res.json(category);
	} catch (error) {
		res.status(400).json({
			error: "Xóa sản phẩm không thành công"
		})
	}
}