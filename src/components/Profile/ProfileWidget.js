import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const ProfileWidget = () => {
  return (
    <Link to="/profile">
      <CgProfile
        size={"1.7rem"}
        className="transition ease-in-out duration-200 text-white hover:text-[#ff2e2e]"
      />
    </Link>
  );
};

export default ProfileWidget;
