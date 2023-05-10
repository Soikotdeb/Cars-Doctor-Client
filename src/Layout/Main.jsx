import { Outlet } from "react-router-dom";
import Footer from "../Pages/shared/Footer/Footer";
import NavBar from "../Pages/shared/Navbar/NavBar";


const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;