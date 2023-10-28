import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:9999/',
});

export const obtenerProductos = async () => {
    try {
        const response = await api.get('/foods'); // Reemplaza '/datos' con la ruta correcta de tu API
        return response.data;
    } catch (error) {
        console.error('Error al obtener datos:', error);
        throw error;
    }
};


export const getProducto = async (id) => {
    try {
        const response = await api.get(`/foods/${id}`); // Reemplaza '/datos' con la ruta correcta de tu API
        return response.data;
    } catch (error) {
        console.error('Error al obtener datos:', error);
        throw error;
    }
};

