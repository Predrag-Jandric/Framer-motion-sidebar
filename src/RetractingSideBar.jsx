import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export const RetractingSideBar = () => {
  return (
    <div className="flex bg-indigo-50">
      <Sidebar />
      <ExampleContent />
    </div>
  );
};

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <nav
      className="sticky top-0 h-screen shrink-0 border-r border-slate-300 bg-white p-2"
      style={{ width: open ? "225px" : "fit-content" }}
    >
      <TitleSection open={open} />

      <div className="space-y-1">

      </div>
    </nav>
  );
};

const Option = ({Icon, title, selected, setSelected, open, notifs}) => {
  return (
    <button className={`relative flex h-10 w-full items-center rounded-md transition-colors ${selected === title ? "bg-indigo-100 text-indigo-800" : "text-indigo-500 hover:bg-slate-100"}`}>
    

    <div className="grid h-full w-10 place-content-center text-lg">
      <Icon/>
    </div>
    </button>
  )
}

const TitleSection = ({ open }) => {
  return (
    <div>
      <div className="flex cursor-pointer items-center justify-between rounded-md transition-colors hover:bg-slate-100">
        <div className="flex items-center gap-2">
          <Logo />

          {open && (
            <div>
              <span className="block text-xs font-semibold">Is loading</span>
              <span className="block text-xs text-slate-500">pro plan</span>
            </div>
          )}
        </div>
        {open && <FaChevronDown className="mr-2" />}
      </div>
    </div>
  );
};

const ExampleContent = () => <div className="h-[200vh] w-full"></div>;

const Logo = () => {
  return (
    <div className="grid size-10 shrink-0 place-content-center rounded-md bg-indigo-600">
      <svg
        id="logo-35"
        width="50"
        height="39"
        viewBox="0 0 50 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {" "}
        <path
          d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
          className="ccompli1"
          fill="#007AFF"
        ></path>{" "}
        <path
          d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
          className="ccustom"
          fill="#312ECB"
        ></path>{" "}
      </svg>
    </div>
  );
};
