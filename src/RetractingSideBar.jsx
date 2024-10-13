import { useState } from "react";

export const Example = () => {
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
    ></nav>
  );
};

const TitleSection = ({ open }) => {
  return (
    <div>
      <button className="flex cursor-pointer items-center justify-between rounded-md transition-colors hover:bg-slate-100"></button>
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
