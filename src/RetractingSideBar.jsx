import { useState } from "react";
import { motion } from "framer-motion";
import { BsAirplane, BsClouds, BsMagnet, BsArrowRight } from "react-icons/bs";

export const RetractingSideBar = () => {
  return (
    <div className="flex bg-indigo-50">
      <Sidebar />
    </div>
  );
};

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <motion.nav
      layout
      className="sticky top-0 h-screen shrink-0 border-r border-slate-300 bg-white p-2"
      style={{ width: open ? "225px" : "fit-content" }}
    >
      <TitleSection open={open} />

      <div className="space-y-1">
        <Option
          Icon={BsAirplane}
          title="Dashboard"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <Option
          Icon={BsClouds}
          title="Tags"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <Option
          Icon={BsMagnet}
          title="Mode"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
      </div>

      <ToggleClose open={open} setOpen={setOpen} />
    </motion.nav>
  );
};

const Option = ({ Icon, title, selected, setSelected, open }) => {
  return (
    <motion.button
      layout
      onClick={() => setSelected(title)}
      className={`relative flex h-10 w-full items-center rounded-md transition-colors ${
        selected === title
          ? "bg-indigo-100 text-indigo-800"
          : "text-indigo-500 hover:bg-slate-100"
      }`}
    >
      <motion.div
        layout
        className="grid h-full w-10 place-content-center text-lg"
      >
        <Icon />
      </motion.div>
      {open && (
        <motion.span
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.125 }}
          className="text-xs font-medium"
        >
          {title}
        </motion.span>
      )}
    </motion.button>
  );
};

const TitleSection = ({ open }) => {
  return (
    <div>
      <div className="mb-2 flex cursor-pointer items-center justify-between rounded-md transition-colors hover:bg-slate-100">
        <div className="flex items-center gap-2">
          <Logo />

          {open && (
            <motion.div
              layout
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.125 }}
            >
              <span className="block font-semibold">Company XYZ</span>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

const Logo = () => {
  return (
    <motion.div
      layout
      className="grid size-10 shrink-0 place-content-center rounded-md bg-indigo-600"
    >
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
    </motion.div>
  );
};

const ToggleClose = ({ open, setOpen }) => {
  return (
    <motion.button
      layout
      onClick={() => setOpen((pv) => !pv)}
      className="absolute bottom-0 left-0 right-0 border-t border-slate-300 transition-colors hover:bg-slate-100"
    >
      <div className="flex items-center p-2">
        <motion.div
          layout
          className="grid size-10 place-content-center text-lg"
        >
          <BsArrowRight
            className={`transition-transform ${open && "rotate-180"}`}
          />
        </motion.div>

        {open && (
          <motion.span
            layout
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.125 }}
            className="text-xs font-medium"
          >
            Hide
          </motion.span>
        )}
      </div>
    </motion.button>
  );
};
