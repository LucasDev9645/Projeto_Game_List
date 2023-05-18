import { Link } from "react-router-dom";

import logo from "../../assets/img/Vector.svg";

import { HeaderStyles } from "./styles";

const Header = () => {
  return (
    <HeaderStyles>
      <img src={logo} alt="logomarca lf games" />
      <Link to="/">
        <h1>LF Games</h1>
      </Link>
    </HeaderStyles>
  );
};

export default Header;
