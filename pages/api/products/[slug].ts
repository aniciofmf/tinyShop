import type { NextApiRequest, NextApiResponse } from "next";

import { db } from "../../../db";
import { Product } from "../../../interfaces";
import { productModel } from "../../../models";

export default function handler(req: NextApiRequest, res: NextApiResponse<{ msg: string } | Product>) {
	switch (req.method) {
		case "GET":
			return getProductsBySlug(req, res);

		default:
			return res.status(400).send({ msg: "Bad Request" });
	}
}

async function getProductsBySlug(req: NextApiRequest, res: NextApiResponse<{ msg: string } | Product>) {
	try {
		const { slug } = req.query;

		await db.dbConnect();
		const product = await productModel.findOne({ slug: slug }).select("_id title price stock slug images").lean();
		await db.dbDisconnect();

		if (product) {
			return res.status(200).json(product);
		} else {
			return res.status(401).json({ msg: "Product not found" });
		}
	} catch (error) {}
}
