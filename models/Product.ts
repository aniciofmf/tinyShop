import mongoose, { Model, Schema } from "mongoose";
import { ProductBase } from "./../interfaces/Product";

const productSchema = new Schema(
	{
		description: { type: String, required: true },
		images: [{ type: String }],
		stock: { type: Number, required: true, default: 0 },
		price: { type: Number, required: true, default: 0 },
		sizes: [
			{
				type: String,
				enum: {
					values: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
					message: "{VALUE} is an invalid size",
				},
			},
		],
		slug: { type: String, required: true, unique: true },
		tags: [{ type: String }],
		title: { type: String, required: true },
		type: {
			type: String,
			enum: {
				values: ["shirts", "pants", "hoodies", "hats"],
				message: "{VALUE} is an invalid type",
			},
		},
		gender: {
			type: String,
			enum: {
				values: ["men", "women", "kid", "unisex"],
				message: "{VALUE} is an invalid genre",
			},
		},
	},
	{
		timestamps: true,
	}
);

productSchema.index({ title: "text", tags: "text" });

const Product: Model<ProductBase> = mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
