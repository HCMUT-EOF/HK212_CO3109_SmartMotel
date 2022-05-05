import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Tenant from './pages/Tenant'
import Login from './pages/Login';
import About from './pages/About';
import TenantInfo from './pages/TenantInfo';
import WashingPage from './pages/WashingPage';
import EditPage from './pages/EditPage';

const rootElement = document.getElementById('root');

ReactDOM.render(
	<Router>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/tenants" component={Tenant}/>
			<Route path="/user/login" component={Login} />
			<Route path="/about" component={About} />
			<Route path="/tenantInfo/:id" component={TenantInfo} />
			<Route path="/control/washing" component={WashingPage} />
			<Route path="/tenants/edit/:id" component={EditPage} />
		</Switch>
	</Router>,
	rootElement
);
