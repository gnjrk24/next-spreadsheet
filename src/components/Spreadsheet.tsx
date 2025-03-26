import Cell from "./Cell";
import { useState } from "react";
import { CellContent } from "@/types/sheet";

export default function Spreadsheet() {
  const [cellContents, setCellContents] = useState<Array<Array<CellContent>>>([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 10],
    [11, 12, 13],
  ]);
  const persist = () => {
    const data = JSON.stringify(cellContents);
    window.localStorage.setItem("cells", data);
  };
  console.log(cellContents);
  return (
    <>
      <table>
        <tbody>
          <tr>
            <th></th>
            {cellContents[0].map((_, i) => (
              <th>{String.fromCharCode(65 + i)}</th>
            ))}
          </tr>
          {cellContents.map((row, i) => {
            return (
              <tr>
                <th>{i + 1}</th>
                {row.map((cell, j) => (
                  <Cell
                    content={cell}
                    onChange={(updated: CellContent) => {
                      const updatedCellContents = [...cellContents];
                      console.table(updatedCellContents);
                      updatedCellContents[i][j] = updated;
                      console.table(updatedCellContents);
                      setCellContents(updatedCellContents);
                    }}
                  />
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <button
        onClick={() => {
          setCellContents([
            ...cellContents,
            Array(cellContents[0].length).fill(0),
          ]);
        }}
      >
        + row
      </button>
      <button onClick={() => setCellContents(cellContents.slice(0, -1))}>
        - row
      </button>
      <br />
      <button
        onClick={() => setCellContents(cellContents.map((row) => [...row, 0]))}
      >
        + column
      </button>
      <button
        onClick={() =>
          setCellContents(cellContents.map((row) => row.slice(0, -1)))
        }
      >
        - column
      </button>
    </>
  );
}
