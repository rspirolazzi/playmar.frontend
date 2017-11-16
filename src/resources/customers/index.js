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
    DateField,
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

const CustomerFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const CustomerList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="code"/>
            <TextField source="name"/>
            <TextField source="lastName"/>
            <TextField source="phone"/>
            <TextField source="mobile"/>
            <EmailField source="email"/>
            <TextField source="dni"/>
            <TextField source="cuit"/>
            <TextField source="description"/>
            <DateField source="buyDate"/>
            <DateField source="dueWarranty"/>
            <BooleanField source="enabled"/>
            <EditButton />
        </Datagrid>
    </List>
)
const CustomerTitle = ({record}) => {
    return <span>Customer {record ? `"${record.code}"` : ''}</span>
}

export const CustomerEdit = (props) => (
    <Edit title={<CustomerTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id"/>
            <TextInput source="code" validate={required}/>
            <TextInput source="name"/>
            <TextInput source="lastName"/>
            <TextInput source="phone"/>
            <TextInput source="mobile"/>
            <TextInput source="email" validate={email}/>
            <TextInput source="dni"/>
            <TextInput source="cuit"/>
            <LongTextInput source="description"/>
            <DateInput source="buyDate"/>
            <DateInput source="dueWarranty"/>
            <BooleanInput source="enabled"/>
        </SimpleForm>
    </Edit>
)

export const CustomerCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="code" validate={required}/>
            <TextInput source="name"/>
            <TextInput source="lastName"/>
            <TextInput source="phone"/>
            <TextInput source="mobile"/>
            <TextInput source="email" validate={email}/>
            <TextInput source="dni"/>
            <TextInput source="cuit"/>
            <LongTextInput source="description"/>
            <DateInput source="buyDate"/>
            <DateInput source="dueWarranty"/>
            <BooleanInput source="enabled" defaultValue={true} />
        </SimpleForm>
    </Create>
)