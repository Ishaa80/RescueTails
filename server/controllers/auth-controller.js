const home = async (req, res) => {
    try{
        res.status(200).send('Welcome Auth World');
    }
    catch(error){
        console.log(error);
    }};

const register = async (req, res) => {
    try{
        console.log(req.body);
        res.status(200).json({message: req.body});
    }
    catch(error){
        res.status(500).json({msg:"Internal server error"});
    }};

module.exports = {home, register};