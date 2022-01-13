const mongoose = require('../../config/db');

const VeiculoSchema = new mongoose.Schema({
     placa:{
          type:String,
          require:true,
     },
     chassi:{
          type:Number,
          require:true
     },
     renavam:{
          type:Number,
          require:true
     },   
     modelo:{
          type:String,
          require:true
     },  
     marca:{
          type:String,
          require:true
     },  
     ano:{
          type:Number,
          require:true
     },  
     createdAt:{
         type:Date,
         default: Date.now()
     }
    
})

VeiculoSchema.pre('save', async function(next){
   
     next();
})

const Veiculo = mongoose.model('veiculos', VeiculoSchema)

module.exports = Veiculo