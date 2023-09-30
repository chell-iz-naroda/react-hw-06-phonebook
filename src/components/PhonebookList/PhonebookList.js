import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';
import { useSelector, useDispatch } from 'react-redux';


import { List, ListItem, Text, Button } from './PhonebookList.styled';


export const PhonebookList = () => {

    const contacts = useSelector(getContacts);
    const filters = useSelector(getFilter);
    const dispatch = useDispatch();

    const onDelete = (contactId) => {
        dispatch(deleteContact(contactId));
    }



    const getContact = () => {
        const lowerCaseContact = filters.toLowerCase();
        if (lowerCaseContact.trim().length === 0) {
            return contacts;
        }
        return contacts.filter (cnt => {
            return cnt.name.toLowerCase().includes(lowerCaseContact);
        })
    };

    const visibleContactsItems = getContact();


    return visibleContactsItems.length > 0 ? (
        <List>
            {visibleContactsItems.map(({ id, name, number }) => (
                <ListItem key={id}>
                    <Text>{`${name}: ${number}`}</Text>
                    <Button type="button" onClick={() => onDelete(id)}>Delete</Button>
                </ListItem>
            ))}
        </List>
    ) :
        (
            <Text>
                No contacts
            </Text>
        );
}