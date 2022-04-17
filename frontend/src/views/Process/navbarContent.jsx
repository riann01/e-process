import { AiOutlineDashboard } from "react-icons/ai"
import { FiBox } from "react-icons/fi"
import { IoIosPeople } from "react-icons/io"
import { IoNotificationsOutline } from "react-icons/io5"

const navbarContent = [
  {
    name: "navbar.dashboard",
    icon: <AiOutlineDashboard size={20} color="#FFF" />,
    color: "yellow"
  },
  {
    name: "navbar.notifications",
    icon: <IoNotificationsOutline size={20} color="#FFF"/>,
    color: "pink"
  },
  {
    name: "navbar.myProcesses",
    icon: <FiBox size={20} color="#FFF" />,
    color: "violet"
  },
  {
    name: "navbar.mySector",
    icon: <IoIosPeople size={20} color="#FFF" />,
    color: "teal"
  }
]

export default navbarContent