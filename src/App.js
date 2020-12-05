import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from './crud/ListCompanyComponent';
import HeaderComponent from './crud/HeaderComponent';
import FooterComponent from './crud/FooterComponent';
import CreateEmployeeComponent from './crud/CreateCompanyComponent';
import UpdateEmployeeComponent from './crud/UpdateCompanyComponent';
import ViewEmployeeComponent from './crud/ViewCompanyComponent';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import ListCompanyComponent from './crud/ListCompanyComponent';
import CreateCompanyComponent from './crud/CreateCompanyComponent';
import ListStockComponent from './Stock/ListStockComponent';
import CreateStockComponent from './Stock/CreateStockComponent';
//import SideNavPage from './admin/SideNav';
import Navbar from './admin/Navbar';
import ViewUserComponent from './admin/ViewUserComponent';
import ManagerLogin from './Manager/ManagerLogin';
import Welcome from './admin/Welcome';
import ManagerWelcome from './Manager/ManagerWelcome';
import UpdateCompanyComponent from './crud/UpdateCompanyComponent';
import ListManagerComponent from './Manager/ListManagerComponent';
import CreateManagerComponent from './Manager/CreateManagerComponent';
import UpdateManagerComponent from './Manager/UpdateManagerComponent';
import UpdateStockComponent from './Stock/UpdateStockComponent';
import WelcomeInvestor from './Investor/WelcomeInvestor';
import ViewStockComponent from './Investor/ViewStockComponent';
import UpdateUserComponent from './admin/UpdateUserComponent';
import MyStockComponent from './Investor/MyStockComponent';

function App() {
  return (
    <div>
         <Router>
             {/* <Navbar/> */}
            <Switch>
            <Route path ="/" exact component={HeaderComponent}/>
               <Route path ="/admin/welcome" exact component={Welcome}/>
               <Route path ="/manager/welcome" exact component={ManagerWelcome}/>
               <Route path ="/admin/users" exact component={ViewUserComponent}/>

               <Route path ="/getmystocks" component={MyStockComponent}></Route>

               {/* <Route path = "/update-user/:userId" component = {UpdateUserComponent}></Route> */}

               <Route path ="/investor/welcome" exact component={WelcomeInvestor}/>
               <Route path ="/investor/view" exact component={ViewStockComponent}/>

               
               <Route path ="/login" component={Login}/>
               <Route path ="/register" component={Register}/>

               <Route path = "/getcompany" component = {ListCompanyComponent}></Route>
               <Route path = "/add-company" component = {CreateCompanyComponent}></Route>

               <Route path ="/getstock" component={ListStockComponent}></Route>
               <Route path = "/add-stock/:stockId" component = {CreateStockComponent}></Route>
               <Route path = "/update-stock/:stockId" component = {UpdateStockComponent}></Route>
               
               <Route path = "/managerlogin" component = {ManagerLogin}></Route>
               <Route path = "/update-company/:companyId" component = {UpdateCompanyComponent}></Route>
               <Route path = "/getmanager" component = {ListManagerComponent}></Route>
               <Route path = "/add-manager" component = {CreateManagerComponent}></Route> 
               <Route path = "/update-user/:userId" component = {UpdateManagerComponent}></Route>

               <Route path = "/update-user1/:userId" component = {UpdateUserComponent}></Route>              
               </Switch>
              
                {/* <div className="container"> */}
                {/* <Home/> */}
                    {/* <Switch>  */}
                          {/* <Route path = "/" exact component = {ListEmployeeComponent}></Route>
                          <Route path = "/employees" component = {ListEmployeeComponent}></Route>
                          <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
                          <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route> */}
                          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                    {/* </Switch> */}
                {/* </div> 
              {/* <FooterComponent /> */}
        </Router>
    </div>
    
  );
}

export default App;
