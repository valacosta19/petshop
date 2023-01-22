import { NextApiRequest, NextApiResponse } from "next";
import DB from "@database";

const allProducts = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = new DB();
  const allEntries = await db.getAll();
  const lenght = allEntries.length;

  res.status(200).json({ data: allEntries, lenght });
};

export default allProducts;
