import Cell from "./Cell";
export default function Spreadsheet() {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>A</th>
            <th>B</th>
            <th>C</th>
          </tr>

          <tr>
            <th>1</th>
            <Cell content={1} />
            <Cell content={2} />
            <Cell content={3} />
          </tr>
          <tr>
            <th>2</th>
            <Cell content={""} />
            <Cell content={""} />
            <Cell content={""} />
          </tr>

          <tr>
            <th>3</th>
            <Cell content={""} />
            <Cell content={""} />
            <Cell content={""} />
          </tr>
        </tbody>
      </table>
    </>
  );
}
