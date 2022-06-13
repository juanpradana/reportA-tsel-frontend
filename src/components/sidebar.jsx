import { useState } from "react";

function Sidebar() {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Overview", src: "Pulse", dest: "/" },
    { title: "Network", src: "Hotspot", dest: "/network" },
    { title: "Power", src: "Lightning-alt", dest: "/power"},
    { title: "Transport ", src: "Globe", dest: "/transport" },
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-gray-200 h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src={require("../assets/control.png")}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)} alt='control button'
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={require("../assets/logo3.png")}
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`} alt='logo'
          />
          <h1
            className={`text-black origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Report'A
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
            >
              <a 
                href={`${Menu.dest}`}
                className={
                  `flex  rounded-md p-2 cursor-pointer hover:bg-purple-500/50 text-black font-bold text-sm items-center gap-x-4 
                  ${Menu.gap ? "mt-9" : "mt-2"}
                  ${index === Menus.map(object => object.dest).indexOf(`${window.location.pathname}`) && "bg-purple-500/50"}`
                }
              >
                <img src={require(`../assets/${Menu.src}.png`)} alt='menus'/>
                <span className={`${!open && "hidden"} origin-left duration-200`}>
                  {Menu.title}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold ">{window.location.pathname} Page</h1>
      </div>
    </div>
  );
}

export default Sidebar