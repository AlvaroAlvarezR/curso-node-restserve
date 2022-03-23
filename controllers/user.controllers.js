const  { response } = require('express');

const getUsers = (req, res = response) => {
    const {q, nombre = 'No name', apiKey, page = 1, limit } = req.query;
    res.json({msg: 'Get API', q, nombre, apiKey, page, limit});
}

const putUsers = (req, res = response) => {
    const {id} = req.params;
    res.json({msg: 'Put API', id});
}
const postUsers = (req, res = response) => {
    const body = req.body;
    res.json({msg: 'Post API', body});
}
const deleteUsers = (req, res = response) => {
    res.json({msg: 'Delete API'});
}
const patchUsers = (req, res = response) => {
    res.json({msg: 'Patch API'});
}

module.exports = {
    getUsers,
    putUsers,
    postUsers,
    deleteUsers,
    patchUsers
}