const { default: mongoose } = require("mongoose");

const connectDB=async(req,res) =>{
 try{
await mongoose.connect(process.env.MONGO_URL);
res.status(200).send({
    message:"Database connected"
});
console.log(`database is connected`);
 }catch(error){
    res.status(504).send({
        message:`Internal Server error ${error}`,
        success:false,
        description:`database not connected`,
    });
 }
};
module.exports = connectDB;