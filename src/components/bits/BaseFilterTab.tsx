"use client";
import { Dispatch, FC, SetStateAction } from "react";
export interface TabItem {
  tab: string;
  name: string;
}

export interface BaseFilterTabProps {
  tab: TabItem[];
  active?: string;
  setActive?: Dispatch<SetStateAction<string>>;
  onTabClick?: (idx: number) => void;
}
const BaseFilterTab: FC<BaseFilterTabProps> = ({
  tab,
  active = "",
  setActive,
  onTabClick,
}) => {
  return (
    <div className="flex justify-self-center gap-2 p-1 bg-white border border-[#E4E4E7] rounded-xl w-fit bg-opacity-30">
      {tab.map((item, idx) => (
        <div
          key={item.tab}
          onClick={() => {
            if (setActive) {
              setActive(item.tab);
            }
            if (onTabClick) {
              console.log(idx, "idxinner");
              onTabClick(idx);
            }
          }}
          className={` px-4 py-2 text-primary text-center rounded-lg w-fit cursor-pointer text-sm transition-all 
            ${
              active === item.tab
                ? "bg-tabColor text-white"
                : "bg-transparent text-tertiary hover:bg-[#E4E4E7]"
            }`}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default BaseFilterTab;
