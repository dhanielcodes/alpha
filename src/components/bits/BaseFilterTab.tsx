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
}
const BaseFilterTab: FC<BaseFilterTabProps> = ({
  tab,
  active = "",
  setActive,
}) => {
  return (
    <div className="flex justify-self-center gap-2 p-1 bg-white border border-[#E4E4E7] rounded-xl w-fit bg-opacity-30">
      {tab.map((item) => (
        <div
          key={item.tab}
          onClick={() => {
            if (setActive) {
              setActive(item.tab);
            }
          }}
          className={`px-4 py-2 text-primary text-center rounded-lg w-fit cursor-pointer text-sm transition-all 
            ${
              active === item.tab
                ? "bg-tabColor text-white"
                : "bg-transparent text-tertiary"
            }`}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default BaseFilterTab;
