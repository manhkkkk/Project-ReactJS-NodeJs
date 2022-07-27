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
	const page =  parseInt(req.query.page );
	const limit =  parseInt(req.query.limit);
	const skip =   limit * (page - 1) ;
	const sort =  req.query.sort || '';
	const name = req.query.name;
	if (name) {
		const products = await Product.find({ name: new RegExp(name, 'i') }).exec();
		res.status(200).json({
			products
		})
		return
	}
	try {
		const products = await Product.find()
		.limit(limit).sort(sort).skip(skip).exec();

		const result = await Promise.allSettled([
			Product.countDocuments()
		])
		
		const count = await result[0] ? result[0].value : 0;
		console.log(count);
		res.json({products,count});
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
	}
}