import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from '../contactsSlice/contactsSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Function declaration for persistedReducer
function createPersistedReducer() {
    const persistConfig = {
        key: 'root',
        storage,
        blacklist: ['register'], // Exclude 'register' from being persisted
    };

    return persistReducer(persistConfig, contactsReducer);
}

const persistedReducer = createPersistedReducer();

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST'], // Ignore specific actions
            },
        }),
});

export const persistor = persistStore(store);

export { store };