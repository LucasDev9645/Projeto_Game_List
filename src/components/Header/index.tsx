import logo from "../../assets/img/Vector.svg";

import { HeaderStyles } from "./styles";

const Header = () => {
  return (
    <HeaderStyles>
      <img src={logo} alt="logomarca lf games" />
      <h1>LF Games</h1>
    </HeaderStyles>
  );
};

export default Header;
