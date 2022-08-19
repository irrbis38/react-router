import { Link, useMatch } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
  const match = useMatch(to);
  return (
    <Link to={to} {...props} className={match ? "active-link" : ""}>
      {children}
    </Link>
  );
}

export default CustomLink;
