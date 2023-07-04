import { Outlet } from "react-router-dom"
import Navigation from "../Header/components/Navigation"


const Layout = () => {
    return (
        <div><h1>Layout</h1>
        <Navigation />
        <Outlet />
        </div>
    )
}

export default Layout