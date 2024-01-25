import { Link } from "react-router-dom";

import { useAuth } from "@/context/AuthContext";
import { Button } from "./ui/button";

const Header = () => {
  const { token, removeToken } = useAuth();

  return (
    <nav className="w-11/12 py-4 mx-auto flex items-center justify-between border-b-2">
      <ul className="flex items-center gap-4">
        <Link to="">
          <li>Home</li>
        </Link>
        <Link to="">
          <li>About</li>
        </Link>
        <Link to="">
          <li>Services</li>
        </Link>
        <Link to="">
          <li>Contact</li>
        </Link>
      </ul>

      <div>
        {!token ? (
          <ul className="flex items-center gap-4">
            <Link to="signup">
              <li>Sign up</li>
            </Link>
            <Link to="/signin">
              <li>Sign in</li>
            </Link>
          </ul>
        ) : (
          <Button variant="destructive" onClick={removeToken}>
            Sign out
          </Button>
        )}
      </div>
    </nav>
  );
};

export default Header;
