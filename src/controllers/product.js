import Category from '../models/category';
import Product from '../models/product';

export const create = async (req, res) => {
	try {
		const product = await new Product(req.body).save();
		console.log(product)
		res.json(product);
	} catch (error) {
		res.status(400).json({
			error: "Không thêm được sản phẩm"
		})
	}
}
export const list = async (req, res) => {
	const page = req.query.page * 1 || 1;
	const limit = req.query.limit * 1 || 6;
	const skip = limit * (page -1) ;
	const sort = req.query.sort || '-price';
	console.log(sort);
	try {
		const products = await Product.find().limit(limit).sort(sort).skip(skip).exec();
		res.json(products);
	} catch (error) {
		res.status(400).json({
			error: "Không có sản phẩm"
		})
	}
}

export const getProduct = async (req, res) => {
	try {
		const product = await Product.findOne({ _id: req.params.id }).exec();
		res.json(product);
	} catch (error) {
		res.status(400).json({
			error: "Không có sản phẩm"
		})
	}
}
export const remove = async (req, res) => {
	try {
		const product = await Product.findOneAndDelete({ _id: req.params.id }).exec();
		res.json(product);
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
		const product = await Product.findOneAndUpdate(condition, update).exec();
		res.json(product);
	} catch (error) {
		res.status(400).json({
			error: "Xóa sản phẩm không thành công"
		})
		// dabf 
	}
}