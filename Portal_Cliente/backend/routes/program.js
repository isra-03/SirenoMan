const router=require('express').Router()
const {
    getAllProgram,
    addProgram,
    deleteProgram,
    updateProgram,
    getProgram}=require('../controller/program')

router.get('/',getAllProgram)
    .post('/add',addProgram)
    .patch('/update/:idProgram',updateProgram)
    .get('/delete/:idProgram',deleteProgram)//ver si lleva id
    .get('/:idProgram',getProgram)

module.exports=router