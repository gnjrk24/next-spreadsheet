import { CellContent } from "@/types/sheet";

interface Props {
  content: CellContent;
}
export default function Cell({ content }: Props) {
  return <td>{content}</td>;
}
