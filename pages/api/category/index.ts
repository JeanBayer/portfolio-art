import type { NextApiRequest, NextApiResponse } from "next";
import { CATEGORY } from "../../../constants";


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(CATEGORY);
}
