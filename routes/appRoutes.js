const express = require("express");
const router = express.Router();
const veiculoController = require("../app/controllers/veiculoController");

router.post('/veiculo/create', async (req, res)=>{
     await veiculoController.create(req, res);
})

router.get('/veiculo/get', async (req, res)=>{
     await veiculoController.read(req, res);
})

router.get('/veiculoList/get', async (req, res)=>{
     await veiculoController.readList(req, res);
})

router.put('/veiculo/update', async (req, res)=>{
     await veiculoController.update(req, res);
})

router.delete('/veiculo/delete', async (req, res)=>{
     await veiculoController.Delete(req, res);
})



module.exports = router