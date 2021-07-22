import { useParams } from "react-router-dom";

const Sidebar = () => {
    let { usermail } = useParams();
 
    return (
        <div className="sidebar"> 
        <h3 className="menu-options"> Menu </h3>
            <ul className="side-list">
                <li> <a href={`/dashboard/${usermail}`}> Dashboard </a> </li>
                <li> <a href={`/userprofile/${usermail}`}> Perfil de usuario </a> </li>
                <li> <a href={`/search/${usermail}`}> Buscar </a> </li>
            </ul>
        </div>
    )
}

export default Sidebar;