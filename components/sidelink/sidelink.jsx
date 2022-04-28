import React, {useState} from "react";

const SideLink = ({ name, Icon}) => {
  const [active, setactive] = useState("Home")

  return (
    <li className="group" onClick={() => setactive(name)}>
      <a href={name.toLowerCase()} className="cursor-pointer block mb-2 pointer-events-none">
        <div className="inline-block">
          <div
            className={`
            flex items-center 
            group-hover:bg-blue-50 
            group-hover:text-red-500 
            rounded-full pl-2 py-3 pr-6
            ${active === name ? "text-red-400" : ""}
            `}
            >
            <Icon />
            <span className="ml-2 font-bold text-xl">{name}</span>
          </div>
        </div>
      </a>
    </li>
  );
};

export default SideLink;