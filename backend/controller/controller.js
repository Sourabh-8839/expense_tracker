
const expenseTracker = require('../models/datastore');

exports.getDetails = async(req,res)=>{

    const expense=await expenseTracker.findAll();
 
    res.json(expense);

}

exports.postDetails = async(req,res)=>{

    const {amount,description,category} = req.body;

    const p = await expenseTracker.create({
        amount:amount,
        description:description,
        category:category
    });

    res.send(p);
    
}
exports.deleteDetails = async(req,res)=>{

    const proId = req.params.id;
    console.log(proId);
    
    await expenseTracker.destroy({where:{
        id:proId
    }});

    res.send('delete');
}

exports.editDetails = async(req,res)=>{

    const proId = req.params.id;
    
    const {amount,description,category} = req.body;

    const  updt= await expenseTracker.update({
        amount:amount,
        description:description,
        category:category
    },
    {
        where:{
            id:proId
        }
    });
    res.send(updt);
}