import { FaBalanceScale } from "react-icons/fa"
import { MdAccountBalance } from "react-icons/md"
import { CgOrganisation } from "react-icons/cg"
import { BsFillGearFill } from "react-icons/bs"

const getOrgsTypes = color => {
  return [
    {
      typeName: "orgs.type.court",
      icon: <FaBalanceScale color={color} size={25} />
    },
    {
      typeName: "orgs.type.publicService",
      icon: <MdAccountBalance color={color} size={25} />
    },
    {
      typeName: "orgs.type.privateOrganization",
      icon: <CgOrganisation color={color} size={25} />
    },
    {
      typeName: "orgs.type.personalized",
      icon: <BsFillGearFill color={color} size={25} />
    }
  ]
}

export default getOrgsTypes