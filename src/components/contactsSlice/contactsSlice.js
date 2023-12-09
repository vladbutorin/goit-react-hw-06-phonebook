import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        filter: '',
    },
    reducers: {
        addContact: (state, action) => {
            const isNameExists = state.items.some(
                (contact) => contact.name.toLowerCase() === action.payload.name.toLowerCase()
            );

            if (isNameExists) {
                alert(`The contact ${action.payload.name} already exists in the phonebook.`);
                return;
            }

            state.items.push(action.payload);
        },
        deleteContact: (state, action) => {
            state.items = state.items.filter((contact) => contact.id !== action.payload);
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
    },
});

export const { addContact, deleteContact, setFilter } = contactsSlice.actions;
export default contactsSlice.reducer;
