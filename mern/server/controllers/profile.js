// newProfile function for post profile data
const newProfile =(req, res, next) =>{
    res.json({message: "Post new profile"});
};

// newProfile function to get profile data

const getProfile=(req,res,next)=>{
    res.json({message: "get profile data"});
}

module.exports = {newProfile, getProfile};