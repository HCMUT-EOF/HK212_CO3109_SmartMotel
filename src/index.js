import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Tenant from './pages/Tenant';
import About from './pages/About';
import TenantInfo from './pages/TenantInfo';
import WashingPage from './pages/WashingPage';

const rootElement = document.getElementById('root');

ReactDOM.render(
	<Router>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/user/login" component={Login} />
			<Route path="/tenantsList" component={Tenant} />
			<Route path="/about" component={About} />
			<Route path="/tenantInfo/:id" component={TenantInfo} />
			<Route path="/control/washing" component={WashingPage} />
		</Switch>
	</Router>,
	rootElement
);
