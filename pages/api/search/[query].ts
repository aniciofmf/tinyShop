import type { NextApiRequest, NextApiResponse } from "next";

import { db } from "../../../db";
import { Product } from "../../../interfaces";
import { productModel } from "../../../models";

export default function handler(req: NextApiRequest, res: NextApiResponse<{ msg: string } | Product[]>) {
	switch (req.method) {
		case "GET":
			return searchProducts(req, res);

		default:
			return res.status(400).json({
				msg: "Bad request",
			});
	}
}

async function searchProducts(req: NextApiRequest, res: NextApiResponse<{ msg: string } | Product[]>) {
	try {
		let { query = "" } = req.query;

		if (query.length === 0) {
			return res.status(400).json({
				msg: "You must specify the search query",
			});
		}

		query = query.toString().toLowerCase();

		await db.dbConnect();
		const products = await productModel
			.find({
				$text: { $search: query },
			})
			.select("title images price inStock slug -_id")
			.lean();

		await db.dbDisconnect();

		return res.status(200).json(products);
	} catch (error) {}
}
