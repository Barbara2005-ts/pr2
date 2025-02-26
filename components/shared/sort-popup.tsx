import { ArrowRightLeft } from "lucide-react";
import Image from "next/image";


interface Props {
  className?: string;
}

export const SortPopup: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
     <ArrowRightLeft />
      <b>Сортировка:</b>
      <b className="text-primary">популярное</b>
    </div>
  );
};