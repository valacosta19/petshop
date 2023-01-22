import { NextApiRequest, NextApiResponse } from "next";
import DB from "@database";

const getProductById = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = new DB();

  //Se llama ID porque asi creamos el archivo
  const id = req.query.id;

  const entry = await db.getById(id as string);

  res.status(200).json(entry);
};

export default getProductById;
