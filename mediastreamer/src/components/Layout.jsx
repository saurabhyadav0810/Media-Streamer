import { Outlet } from "react-router-dom";
import Navbar from "./Nav";
import Sidebar from "./Side";
import style from "./Layout.module.css";

function Layout() {
    return (
        <div className={style.layout}> 
            <div className={style.navbar}>
                <Navbar />
            </div>
            <div className={style.main}>
                <Sidebar />
                <div className={style.content}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Layout;