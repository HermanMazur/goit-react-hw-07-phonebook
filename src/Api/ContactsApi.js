import axios from "axios";

const instanceContact = axios.create({
  baseURL: 'https://6374d27f08104a9c5f8a4a51.mockapi.io/contacts/api/',
});

export const getContacts = async () => {
    const { data } = await instanceContact.get('/contacts');
    return data;
};

export const addContacts = async data => {
        const { data: result } = await instanceContact.post('/contacts', data);
        return result; 
}

export const deleteContacts = async (id) => {
  const { data } = await instanceContact.delete(`/contacts/${id}`);
        return data;
}
    
