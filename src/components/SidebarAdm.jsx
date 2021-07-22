import { useParams } from "react-router-dom";

const SidebarAdm = () => {
    let { usermail } = useParams();

    return (
        <div className="sidebar"> 
        <h3 className="menu-options"> Menu </h3>
            <ul className=" side-list">
                <li> <a href={`/dashboard/${usermail}`}> Dashboard </a> </li>
                <li> <a href='/userprofile/admins@everis.cl'> Perfil de usuario </a> </li>
                <li> <a href={`/search/${usermail}`}> Buscar </a> </li>
                <li> <a href={`/newadmin/${usermail}`}> Añadir nuevo administrador </a> </li>
            </ul>
        </div>
    )
}

export default SidebarAdm;