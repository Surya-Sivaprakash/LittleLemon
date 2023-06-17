import logo from "../Assets/LemonLogo.png";
import Nav from "./Nav";

function Header() {
  return (
    <div className="flex justify-evenly mt-3">
      <div className="">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <Nav />
    </div>
  );
}
export default Header;
