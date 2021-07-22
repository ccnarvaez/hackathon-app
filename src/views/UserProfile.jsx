import SignOut from '../components/SignOut';
import Sidebar from '../components/Sidebar';
import Profile from '../components/Profile';


export const UserProfile = () => {
	return (
		<>
			<SignOut />
			<div className='mainContainer'>
                <Sidebar /> 
				<div className='profileContainer' id='profile-update'>
                <Profile /> 
				</div>
			</div>

		</>
	)
}