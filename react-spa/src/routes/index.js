import Login from '../pages/Login/index';
import AccountManage from '../pages/AccountManage/index';

export default [{
    path: '/',
    exact: true,
    component: Login,
}, {
    path: '/account-manage',
    exact: true,
    component: AccountManage,
}];
