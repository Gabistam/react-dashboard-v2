import {
  UilGlobe,
  UilMap,
  UilPagelines,
  UilCelsius,
  UilClipboardNotes,
} from "@iconscout/react-unicons";

const SidebarItems = [
  {
    name: "Learningday",
    route: "/",
  },
  {
    name: "Todo List",
    route: "/Todo",
    icon: UilClipboardNotes,
  },
  {
    name: "Botanic",
    route: "/Botanics",
    icon: UilPagelines,
  },
  {
    name: "Météo",
    route: "/Weather",
    icon: UilCelsius,
  },
  {
    name: "World",
    route: "World",
    icon: UilGlobe,
  },
];

export default SidebarItems;
