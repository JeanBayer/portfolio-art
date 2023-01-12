import type { NextApiRequest, NextApiResponse } from "next";
import { CATEGORY } from "../../../data";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { type } = req.query;
  const isValidCategory = CATEGORY.some((category) => category.type === type);
  if (!isValidCategory)
    return res.status(404).json({ message: "Not found", status: 404 });

  res
    .status(200)
    .json(CATEGORY.filter((category) => category.type === req.query.type));
}
