const Veiculo = require('../models/Veiculos')
const logger = require('pino')()

const create = async (req, res)=>{
     try{
          const {placa, chassi, renavam, modelo, marca, ano} = req.body

          if(!placa || !chassi || !renavam || !modelo || !marca || !ano){
               logger.error({msg:"Não foi possivel cadastrar o veículo, dados incompletos"})
               return res.status(400).send({hasError: true, erro: "Não foi possivel cadastrar o veículo, dados incompletos"})
          }

          veiculo = await Veiculo.create(req.body)
          logger.info({msg:"Veículo cadastrado com sucesso!"})
          return res.send({veiculo})

     } catch(err){
          console.log(err)
          logger.error({msg:"Erro no registro"})
          res.status(400).send({hasError: true, erro: "Erro no registro"})
     }
}


const read = async (req, res)=>{
     try{
          const {renavam} = req.body

          if(!renavam){
               logger.error({msg:"Não foi possivel encontrar o veículo, dados incompletos"})
               return res.status(400).send({hasError: true, erro: "Não foi possivel encontrar o veículo, dados incompletos"})
          }

          veiculo = await Veiculo.find({renavam})

          if(!renavam){
               logger.error({msg:"Veículo não encontrado, verifique seu renavam!"})
               return res.status(400).send({erro:"Veículo não encontrado, verifique seu renavam!"})
          }
          logger.info({msg:"Veículo encontrado!"})
          return res.send({veiculo})

     } catch(err){
          logger.error({msg:"Erro ao encontrar veículo"})
          res.status(400).send({erro:"Erro ao encontrar veículo"})
     }
}

const update = async (req, res) => {

     try {
          const {_id, placaUp, chassiUp, renavamUp, modeloUp, marcaUp, anoUp} = req.body

          if(!await Exame.findOne({_id})){
               logger.warn({msg:"Veículo não encontrado"})
               return res.status(400).send({hasError: true, erro: "Veículo não encontrado"})
          }

          await Veiculo.findOneAndUpdate({_id: _id}, {placa: placaUp, chassi: chassiUp, renavam: renavamUp, modelo:modeloUp, marca: marcaUp, ano: anoUp})
          
          logger.info({msg:"Dados alterados!"})
          return res.send("Dados alterados!")

     } catch(err){
          logger.error({msg:"Erro ao atualizar dados"})
          res.status(400).send({erro:"Erro ao atualizar dados"})
     }
}

const Delete = async (req, res)=>{
     try{
          const {_id} = req.body

          if(!_id){
               logger.error({msg:"Não foi possivel encontrar o veículo, dados inválidos"})
               return res.status(400).send({hasError: true, erro: "Não foi possivel encontrar o veículo, dados inválidos"})
          }

          veiculo = await Veiculo.findOne({_id})

          if(!veiculo){
               logger.error({msg:"Veículo não enontrado!"})
               return res.status(400).send({erro:"Veículo não encontrado!"})
          }

          await Veiculo.deleteOne({_id})
          logger.info({msg:"Veículo deletado!"})
          return res.send("Veículo deletado!")

     } catch(err){
          logger.error({msg:"Erro ao deletar veículo"})
          res.status(400).send({erro:"Erro ao deletar veículo"})
     }
}

module.exports = {create, read, update, Delete}