import type { NextApiRequest, NextApiResponse } from "next";

import { db, productsData } from "../../db";
import { productModel } from "../../models";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { products } = productsData;

	try {
		await db.dbConnect();
		await productModel.deleteMany();
		await productModel.insertMany(products);
		await db.dbDisconnect();

		res.status(200).json("Data loaded");
	} catch (error) {
		res.status(500).json("There was an error loading the data");
	}
}
