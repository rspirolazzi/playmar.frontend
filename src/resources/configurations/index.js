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

const ConfigurationFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const ConfigurationList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="name"/>
            <TextField source="type"/>
            <TextField source="value"/>
            <BooleanField source="enabled"/>
            <EditButton />
        </Datagrid>
    </List>
)
const ConfigurationTitle = ({record}) => {
    return <span>Configuration {record ? `"${record.code}"` : ''}</span>
}

export const ConfigurationEdit = (props) => (
    <Edit title={<ConfigurationTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id"/>
            <TextInput source="name" validate={required}/>
            <LongTextInput source="description"/>
            <SelectInput source="type" validate={required} choices={[
    { id: 'String', name: 'String' },
    { id: 'Number', name: 'Number' },
    { id: 'Date', name: 'Date' },
    { id: 'Boolean', name: 'Boolean' },
]} />
            <TextInput source="value" />
            <BooleanInput source="enabled"/>
        </SimpleForm>
    </Edit>
)

export const ConfigurationCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" validate={required}/>
            <LongTextInput source="description"/>
            <SelectInput source="type" validate={required} choices={[
    { id: 'String', name: 'String' },
    { id: 'Number', name: 'Number' },
    { id: 'Date', name: 'Date' },
    { id: 'Boolean', name: 'Boolean' },
]} />
            <TextInput source="value" />
            <BooleanInput source="enabled"/>
        </SimpleForm>
    </Create>
)