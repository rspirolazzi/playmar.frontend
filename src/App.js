// in src/App.js
import React from 'react'
import {authClient, restClient} from 'aor-feathers-client'
import feathersClient from './feathersClient'
import {Admin, Resource} from 'admin-on-rest'

import {CustomerList, CustomerCreate, CustomerEdit} from './resources/customers'
import {ProductList, ProductCreate, ProductEdit} from './resources/products'
import {UserList, UserCreate, UserEdit} from './resources/users'
import {OrderList, OrderCreate, OrderEdit} from './resources/orders'
import {ConfigurationList, ConfigurationCreate, ConfigurationEdit} from './resources/configurations'

import ProductIcon from 'material-ui/svg-icons/action/shop';
import CustomerIcon from 'material-ui/svg-icons/social/group';
import UserIcon from 'material-ui/svg-icons/action/verified-user';

const authClientOptions = {
    storageKey: 'feathers-jwt',
    authenticate: {strategy: 'local'},
}

// to rename id field(s) for specific resources use this syntax:
const options = {id: '_id'}


const App = () => (
    <Admin authClient={authClient(feathersClient, authClientOptions)} restClient={restClient(feathersClient, options)}>
        <Resource name="customers" list={CustomerList} edit={CustomerEdit} create={CustomerCreate} icon={CustomerIcon}/>
        <Resource name="products" list={ProductList} edit={ProductEdit} create={ProductCreate} icon={ProductIcon}/>
        <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon}/>
        <Resource name="orders" list={OrderList} edit={OrderEdit} create={OrderCreate}/>
        <Resource name="configurations" list={ConfigurationList} edit={ConfigurationEdit} create={ConfigurationCreate}/>
    </Admin>
)

export default App