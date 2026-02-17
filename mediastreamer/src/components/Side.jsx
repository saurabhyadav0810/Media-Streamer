import style from "./side.module.css";
function Sidebar() {
    return (
        <div className={style.sidebar}>
            <a href="/">Home</a>
            <a href="/">Trending</a>
            <a href="/Profile">Profile</a>
            <a href="/Upload">Upload</a>
        </div>
    );
}
export default Sidebar;