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
    ReferenceField,
    SelectInput,
    NumberField,
    SimpleForm,
    DateInput,
    BooleanInput,
    required, minLength, maxLength, minValue, maxValue, number, regex, email, choices
} from 'admin-on-rest'

const OrderFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
)

export const OrderList = (props) => (
    <List {...props}>
        <Datagrid>
            <ReferenceField label="User" source="user" reference="users">
                <TextField source="email" />
            </ReferenceField>
            <ReferenceField label="Order" source="customer" reference="customers">
                <TextField source="name" />
            </ReferenceField>
            <DateField source="dueDate"/>
            <DateField source="doneDate"/>
            <NumberField source="numeric"/>
            <NumberField source="total" options={{ style: 'currency', currency: 'USD' }}/>
            <TextField source="status"/>
            <EditButton />
        </Datagrid>
    </List>
)
const OrderTitle = ({record}) => {
    return <span>Order {record ? `"${record.code}"` : ''}</span>
}

export const OrderEdit = (props) => (
    <Edit title={<OrderTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id"/>
            <ReferenceInput label="User" source="user_id" reference="users">
                <SelectInput optionText="email" />
            </ReferenceInput>
            <ReferenceInput label="Customer" source="customer_id" reference="customers">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <DateInput source="dueDate"/>
            <DateInput source="doneDate"/>
            <TextInput type="number" source="numeric" validate={number}/>
            <TextInput type="number" source="total" validate={number}/>
            <TextInput source="status"/>
        </SimpleForm>
    </Edit>
)

export const OrderCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput label="User" source="user" reference="users">
                <SelectInput optionText="email" />
            </ReferenceInput>
            <ReferenceInput label="Customer" source="customer" reference="customers">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <DateInput source="dueDate"/>
            <DateInput source="doneDate"/>
            <TextInput type="number" source="numeric" validate={number} defaultValue="0"/>
            <TextInput type="number" source="total" validate={number} defaultValue="0"/>
            <TextInput source="status"/>
        </SimpleForm>
    </Create>
)