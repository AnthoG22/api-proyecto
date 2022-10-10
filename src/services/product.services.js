import {getConnection} from "./../common/connection";

async function readBooks(response) {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM books")
        return response.json(result)
}

async function readBook(body,response) {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM books WHERE id = ?", body.id)
    return response.json(result)
}

async function createBook(id, title, total_pages, author, nationality , language, cover_url, editorial,response) {
    if (id === undefined || title === undefined || total_pages === undefined || author === undefined || nationality === undefined || language ===undefined||cover_url===undefined ||editorial===undefined) {
        return response.status(400).json({message:"Bad Request. Please fill all field."});
    }
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO `books` (`id`, `title`, `total_pages`, `author`, `nationality`, `language`,`cover_url`,`editorial`) VALUES (?,?,?,?,?,?,?,?)", [id, title, total_pages, author, nationality , language, cover_url, editorial])
        return response.json(result)
}

// solucionar
async function updateBook(id, title, total_pages, author, nationality , language, cover_url, editorial,response) {
    if (id === undefined || title === undefined || total_pages === undefined || author === undefined || nationality === undefined || language ===undefined||cover_url===undefined ||editorial===undefined ) {
        return response.status(400).json({message:"Bad Request. Please fill all field."});
    }
        const connection = await getConnection();
        const result = await connection.query("UPDATE books SET `title`= ?,`total_pages`=?,`author`=?,`nationality`=?,`language`=?,`cover_url`=?,`editorial`=? WHERE id= ?", [title, total_pages, author, nationality , language, cover_url, editorial,id]);
        return response.json(result)
}

async function deleteBook(body,response) {
    const connection = await getConnection();
    const result = await connection.query("DELETE FROM books WHERE id = ?", body.id)
    return response.json(result)
}

export const methods = {
    createBook,
    readBooks,
    readBook,
    updateBook,
    deleteBook
}