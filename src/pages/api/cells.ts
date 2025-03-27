import type { NextApiRequest, NextApiResponse } from "next";
import { CellContent } from "@/types/sheet";
import fs from "fs";

type Data = {
  cells?: Array<Array<CellContent>>;
};
const storage = { cells: undefined };
console.log(storage);
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method } = req;

  switch (method) {
    case "GET":
      res.status(200).json(storage);
      break;
    case "POST":
      const { cells } = req.body;
      storage.cells = cells;
      res.status(200).json({});
      break;
    default:
      break;
  }
}
