import React from "react";
import "./_header.scss";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdVideoCall } from "react-icons/md";
// import { BsFillMicFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = ({ handleSidebarToggle }) => {
  const { photoURL } = useSelector((state) => state.auth.user);
  const navigate = useNavigate()
  return (
    <div className=" header">
      <FaBars
        className="header__menu"
        size={26}
        onClick={() => handleSidebarToggle()}
      />
      <img
        src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo-700x394.png"
        alt=""
        className="header__logo"
        onClick={()=>navigate("/")}
      />

      <form>
        <input type="text" placeholder="Search" />
        <button type="submit">
          {" "}
          <AiOutlineSearch size={22} className="search-icon" />{" "}
        </button>
      </form>
      {/* <BsFillMicFill size={22}/> */}

      <div className="header__icons">
        <MdVideoCall size={28} />
        <MdNotifications size={28} />
        <img src={photoURL} alt="avatar" />
      </div>
    </div>
  );
};

export default Header;
