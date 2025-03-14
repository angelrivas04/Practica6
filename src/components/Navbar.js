import {AppBar, Toolbar, Typography} from "@mui/material";
import Sidebar from "./Sidebar";

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
            <Sidebar/>
                    Menu
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
