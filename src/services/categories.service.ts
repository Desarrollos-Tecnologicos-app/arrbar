import { Category } from "../interfaces"
import CategoryModel from "../models/category"
import axios from 'axios'

const getGeneralCategories = async () => {
    const url = `${process.env.urlSYScom}/categorias`;

    try {
        const { data, status } = await axios.get(url, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `${process.env.tkn}`
            }
        });

        if (status === 200) {
            return data
        }
    } catch (error) {
        console.error('Error fetching category data:', error);
        throw error;
    }
}

const getSubCategoriesById = async (id: number) => {
	const url = `${process.env.urlSYScom}/categorias/${id}`;

    try {
        const { data, status } = await axios.get(url, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': `${process.env.tkn}`
            }
        });

        const categories = data.subcategorias
        return { categories, status };
    } catch (error) {
        console.error('Error fetching category data:', error);
        throw error;
    }
}

export { getGeneralCategories, getSubCategoriesById }
