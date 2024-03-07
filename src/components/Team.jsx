import React from "react";
import { team } from "../placeholderData/team";

const TeamCard = ({ name, profileimg, designation, about }) => {
  return (
    <div className="flex bg-blue-50 p-2 rounded-lg items-center">
      <div className=" flex flex-col flex-1 justify-center items-center">
        <img
          className=" rounded-xl w-[100px] aspect-square object-cover"
          src={profileimg}
          alt=""
        />
        <span>{name}</span>
        <span className=" text-sm text-zinc-500">{designation}</span>
      </div>
      <p className=" flex-[4]">{about}</p>
    </div>
  );
};

const Team = () => {
  return (
    <div className=" flex flex-col gap-5 bg-white">
      <h2 className=" text-2xl font-semibold">Team</h2>
      <span>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. A consequatur
        alias eveniet inventore illum autem!
      </span>
      <div className="flex flex-col gap-5">
        {team.map((member, index) => {
          return (
            <div key={index}>
              <TeamCard
                name={member.name}
                profileimg={member.profileimg}
                designation={member.designation}
                about={member.about}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
