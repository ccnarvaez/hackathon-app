import SignOut from '../components/SignOut';
import Sidebar from '../components/Sidebar';
import Search from '../components/Search';

export const SearchView =()=>{
    return <>
    <SignOut />
    <div className="search-container">
    <Sidebar />
    <Search />
    </div>
    </>
}