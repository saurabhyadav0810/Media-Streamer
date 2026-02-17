import style from "./Nav.module.css";

function Navbar() {
    return (
        <nav className={style.navbar}>
            <h1 className={style.logo}>MediaStreamer</h1>
            <input className={style.search} type="search" placeholder="Search here.." />
            <div className={style.user}>
                <a href="/Profile">Profile</a>
                <a href="/Upload">Upload</a>
            </div>
        </nav>
    );
}
export default Navbar;
