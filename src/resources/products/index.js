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

const ProductFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const ProductList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="code"/>
            <TextField source="name"/>
            <TextField source="description"/>
            <NumberField source="price"/>
            <BooleanField source="enabled"/>
            <EditButton />
        </Datagrid>
    </List>
)
const ProductTitle = ({record}) => {
    return <span>Product {record ? `"${record.code}"` : ''}</span>
}

export const ProductEdit = (props) => (
    <Edit title={<ProductTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id"/>
            <TextInput source="code" validate={required}/>
            <TextInput source="name"/>
            <LongTextInput source="description"/>
            <TextInput source="price" validate={number}/>
            <BooleanInput source="enabled"/>
        </SimpleForm>
    </Edit>
)

export const ProductCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="code" validate={required}/>
            <TextInput source="name"/>
            <LongTextInput source="description"/>
            <TextInput source="price" validate={number}/>
            <BooleanInput source="enabled" defaultValue={true}/>
        </SimpleForm>
    </Create>
)