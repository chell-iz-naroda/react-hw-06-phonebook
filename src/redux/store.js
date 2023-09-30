import { configureStore } from '@reduxjs/toolkit';
import persistStore from 'redux-persist/es/persistStore';

import { filterReducer } from './filterSlice';

import { persistedContactsReducer } from './contactsSlice';

export const store = configureStore({
    reducer: {
        contacts: persistedContactsReducer,
        filter: filterReducer,
    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: true,
            },
        });
    },
});

export const persistor = persistStore(store);