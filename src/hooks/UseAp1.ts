import axios from 'axios';

const Api = axios.create({

    baseURL: process.env.REACT_APP_API
});

export const useApi = () => ({
    validateToken: async (token: string) => {
        return {
            user: { id: 3, name: 'Usuario', email: 'jose@gmail.com' }
        };
        const response = await Api.post('/validate', { token });
        return response.data;
    },
    signin: async (email: string, password: string) => {
        return {
            user: { id: 3, name: 'Usuario', email: 'jose@gmail.com' },
            token: '123456789'
        };
        const response = await Api.post('/signin', { email, password });
       
        return response.data;
    },
    logout: async () => {
        return { status: true };
        const response = await Api.post('/logout');
        return response.data;
    }
});