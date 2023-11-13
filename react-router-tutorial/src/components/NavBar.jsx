import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      {/* Link 또는 NavLink로 경로 연결 */}
      {/* Active Links: isActive, isPending(boolean 값, transition 완료 여부) - `style` */}
      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive
              ? "red"
              : "black",
          };
        }}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive
              ? "red"
              : "black",
          };
        }}
        to="about"
      >
        About
      </NavLink>
    </nav>
  );
}
