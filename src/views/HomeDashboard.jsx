import SignOut from '../components/SignOut';
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/Dashboard';


export const HomeDashboard  = () => {
	return (
		<>
			<SignOut />
			<div className='mainContainer'>
                <Sidebar /> 
				<div className='profileContainer'>
                <Dashboard /> 
				</div>
			</div>

		</>
	)
}