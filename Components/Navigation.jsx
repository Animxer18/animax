import Link from "next/link";
import SearchBar from "./SearchBar";

const Navigation = () => {
  return (
    <div className="nav-wrapper">
      <nav className="nav-container flex align-center justify-between w-100">
        <Link href="/" className="flex align-center">
          <h1 className="text-xxl">Ani</h1>
          <h1 className="color-primary text-xxl">MAX</h1>
        </Link>

        <div className="flex align-center gap-20">
          <Link href="/latest" className="link">
            Shop
          </Link>
          <Link href="/top" className="link">
            Merchs
          </Link>
          <Link href="/top" className="link">
            Events
          </Link>
        </div>

        <Link href="/login" className="login-btn link-button">
          Login
        </Link>
      </nav>

      <div className="flex align-center w-100 justify-between">
        <div className="flex align-center gap-20">
          <Link className="link" href="/latest">
            Latest Anime
          </Link>
          <Link className="link" href="/top">
            Top Animes
          </Link>
        </div>
        <SearchBar />
      </div>
    </div>
  );
};

export default Navigation;
