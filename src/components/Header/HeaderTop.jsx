import { HiOutlineMailOpen } from "react-icons/hi";
import { ImLocation } from "react-icons/im";
import { MdCall } from "react-icons/md";
const SocialInfo = ({ icon, label }) => {
  return (
    <div className="header-social-info">
      <div className="header-social-icon-wrapper">{icon}</div>
      <p>{label}</p>
    </div>
  );
};
const HeaderTOP = () => {
  return (
    <div className="header-top">
      <h1 className="logo">Mut Tech Club</h1>
      <div className="header-social">
        <SocialInfo icon={<HiOutlineMailOpen />} label="info@mut.ac.ke " />
        <SocialInfo icon={<ImLocation />} label="Muranga  " />
        <SocialInfo icon={<MdCall />} label="+254-798 959 217 " />
      </div>
    </div>
  );
};
export default HeaderTOP;
