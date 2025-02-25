import dayjs from "dayjs";
import Link from "next/link";
import React from "react";
import { News } from "../../types";

const DocumentCard = ({ title, content, updatedAt, id }: News) => {
  return (
    <Link href={`/dashboard/${id}`}>
      <div className="w-[150px] h-[200px] bg-white shadow-md hover:bg-gray-50 flex flex-col justify-between gap-1">
        {/* CONTENT */}
        <div className="flex flex-col p-2.5 gap-1">
          <p className="line-clamp-2 max-w-full text-sm font-bold">
            {title}
          </p>
          <p className="text-xs line-clamp-6">{content}</p>
        </div>
              
        {/* ACTIONS */}
        <div className="flex justify-between items-center border-t border-gray-500 p-2.5">
          <span className="font-semibold text-xs text-red-600">{1}%</span>
          <span className="font-medium text-xs">{dayjs(updatedAt).format("DD/MM/YYYY")}</span>
        </div>
      </div>
    </Link>
  );
};

export default DocumentCard;
