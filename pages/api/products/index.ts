import type { NextApiRequest, NextApiResponse } from "next";

import { db } from "../../../db";
import { Product } from "../../../interfaces";
import { productModel } from "../../../models";
import { GLOBAL_CONSTANTS } from "../../../globals/constants";

export default function handler(req: NextApiRequest, res: NextApiResponse<{ msg: string } | Product[]>) {
	switch (req.method) {
		case "GET":
			return getProducts(req, res);

		default:
			return res.status(400).send({ msg: "Bad Request" });
	}
}

async function getProducts(req: NextApiRequest, res: NextApiResponse<Product[]>) {
	try {
		const { gender = "all" } = req.query;

		let queryCond = {};

		if (gender != "all" && GLOBAL_CONSTANTS.genders.includes(gender.toString())) {
			queryCond = { gender };
		}

		await db.dbConnect();
		const products = await productModel.find(queryCond).select("-_id title price stock slug images").lean();
		await db.dbDisconnect();

		return res.status(200).json(products);
	} catch (error) {}
}
