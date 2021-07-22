import { useParams } from "react-router-dom";

const SidebarAdm = () => {
    let { usermail } = useParams();

    return (
        <div className="sidebar"> 
        <label> Menu </label>
            <ul className=" side-list">
                <li> <a href={`/dashboard/${usermail}`}> Dashboard </a> </li>
                <li> <a href={`/userprofile/${usermail}`}> Perfil de usuario </a> </li>
                <li> <a href={`/search/${usermail}`}> Buscar </a> </li>
                <li> <a href="/newadmin"> Añadir nuevo administrador </a> </li>
            </ul>
        </div>
    )
}

export default SidebarAdm;