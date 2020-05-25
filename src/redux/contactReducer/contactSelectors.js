export const getContacts = state => state.contacts;

export const getOnDeleteContact = (reducer, id) =>
  reducer.actions.deleteContact(id);

export const getOnAddContact = (reducer, newContact) =>
  reducer.actions.addContact(newContact);
