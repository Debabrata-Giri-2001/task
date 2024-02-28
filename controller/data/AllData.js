const modal = require('../../model/data/data');
const allData = modal.data;

exports.getUser= async (req,res)=>{
    try {
        const data = await allData.find();
        res.json(data);
    } catch (error) {
        res.status(500).json(error)
        console.log(error);
    }
}
