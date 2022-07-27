import mongoose, { Schema } from "mongoose";
const { ObjectId } = mongoose.Types;
const productSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true,
	},
	price: {
		type: Number,
		required: true
	},
	image: {
		type: String,
	},
	category: {
		type: ObjectId,
		required: true,
		ref: 'Category'
	}
}, { timestamps: true });

export default mongoose.model('Product', productSchema);