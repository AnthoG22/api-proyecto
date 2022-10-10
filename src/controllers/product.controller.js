import {methods as productServices} from "../services/product.services"

const getBooks = async (req, res)=>{
    try {
        const query = await productServices.readBooks(res);
        return query
    } catch (error) {
        res.status(400);
        res.send(error.message);
    }
};

const getBook = async (req, res)=>{
    try {
        const query = await productServices.readBook(req.params,res);
        return query
    } catch (error) {
        res.status(400);
        res.send(error.message);
    }
};

const createBook = async (req, res)=>{
    try {
        const { id, title, total_pages, author, nationality , language, cover_url, editorial } = req.body;
        const query = await productServices.createBook(id, title, total_pages, author, nationality , language, cover_url, editorial,res);
        return query
    } catch (error) {
        res.status(400);
        res.send(error.message);
    }
};

const updateBook = async (req, res)=>{
    try {
        const {id} = req.params;
        const {title, total_pages, author, nationality , language, cover_url, editorial  } = req.body;
        const query = await productServices.updateBook(id, title, total_pages, author, nationality , language, cover_url, editorial,res);
        return query
    } catch (error) {
        res.status(400);
        res.send(error.message);
    }
};

const deleteBook = async (req, res)=>{
    try {
        const query = await productServices.deleteBook(req.params,res);
        return query
    } catch (error) {
        res.status(400);
        res.send(error.message);
    }
};

export const methods ={
    getBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook
}
