import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './Pages/Main';
import Product from './Pages/Product';

//Quando for component, usar ()
const Routes = () => (

	//Switch = permite que apenas 1 rota seja chamada ao mesmo tempo
	//Exact  = só chama a primeira rota quando a url for EXATA igual ao path
	<BrowserRouter>
		<Switch>
			<Route exact path={`${process.env.PUBLIC_URL}/`} component={Main} />
			<Route path={`${process.env.PUBLIC_URL}/products/:id`} component={Product} />
		</Switch>
	</BrowserRouter>

);

export default Routes;