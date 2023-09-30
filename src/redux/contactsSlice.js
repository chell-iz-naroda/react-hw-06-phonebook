import { createSlice } from "@reduxjs/toolkit";

import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';


const contactsInitialState = {
    items: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.items.push(action.payload);
            },
            prepare(contact) {
                return {
                    payload: {
                        id: contact.id,
                        name: contact.name,
                        number: contact.number,
                    },
                };
            },
        },
        deleteContact(state, action) {
            const index = state.items.findIndex(item => item.id === action.payload);
            state.items.splice(index, 1);
        }
    }
});

const persistConfig = {
    key: 'contact',
    storage,
};

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;


export const persistedContactsReducer = persistReducer(
    persistConfig,
    contactsReducer
);