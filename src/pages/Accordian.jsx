import React, { useState } from "react";

const tempData = [
  {
    id: "1",
    title: "This is title one",
    content: "This is content of title one",
  },
  {
    id: "2",
    title: "This is title two",
    content: "This is content of title two",
  },
  {
    id: "3",
    title: "This is title three",
    content: "This is content of title three",
  },
  {
    id: "4",
    title: "This is title four",
    content: "This is content of title four",
  },
];

const AccordianChild = ({
  item,
  isMultipleOpenAllowed,
  current,
  setCurrent,
  index,
}) => {
  const [active, setActive] = useState(false);
  return (
    <div className=" w-[300px] ">
      <div
        onClick={() => {
          setActive(!active);
          if (current == index) {
            setCurrent(-1);
            return;
          }
          setCurrent(index);
        }}
        className=" bg-zinc-900 text-white cursor-pointer p-2 border border-zinc-700"
      >
        <span>{item.title}</span>
      </div>
      {isMultipleOpenAllowed && active && (
        <span className=" ">{item.content}</span>
      )}
      {!isMultipleOpenAllowed && index == current && (
        <span>{item.content}</span>
      )}
    </div>
  );
};

const AccordionParent = ({ isMultipleOpenAllowed, items }) => {
  const [current, setCurrent] = useState(-1);
  console.log(current);
  return (
    <div>
      {items.map((item, index) => {
        return (
          <AccordianChild
            item={item}
            key={item.id}
            isMultipleOpenAllowed={isMultipleOpenAllowed}
            current={current}
            setCurrent={setCurrent}
            index={index}
          />
        );
      })}
    </div>
  );
};

const Accordian = () => {
  return (
    <div className=" w-[100%] h-screen flex justify-center items-center flex-col gap-10 bg-zinc-700">
      {/* test */}
      <AccordionParent isMultipleOpenAllowed={false} items={tempData} />
      <AccordionParent isMultipleOpenAllowed={true} items={tempData} />
    </div>
  );
};

export default Accordian;
