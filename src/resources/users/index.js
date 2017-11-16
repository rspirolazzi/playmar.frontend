import React from 'react'
import {
    Filter,
    List,
    Edit,
    Create,
    Datagrid,
    TextField,
    EmailField,
    BooleanField,
    NumberField,
    TextInput,
    EditButton,
    DisabledInput,
    LongTextInput,
    ReferenceInput,
    SelectInput,
    SimpleForm,
    DateInput,
    BooleanInput,
    required, minLength, maxLength, minValue, maxValue, number, regex, email, choices
} from 'admin-on-rest';

const UserFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const UserList = (props) => (
    <List {...props}>
        <Datagrid>
            <EmailField source="email"/>
            <EditButton />
        </Datagrid>
    </List>
)
const UserTitle = ({record}) => {
    return <span>User {record ? `"${record.email}"` : ''}</span>
}

export const UserEdit = (props) => (
    <Edit title={<UserTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id"/>
            <TextInput type="email"  source="email" validate={email}/>
            <TextInput type="password" source="password"/>
        </SimpleForm>
    </Edit>
)

export const UserCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput type="email"  source="email" validate={email}/>
            <TextInput type="password" source="password"/>
        </SimpleForm>
    </Create>
)