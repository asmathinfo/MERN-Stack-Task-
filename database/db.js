const mongoose = require('mongoosse');



const connectDB = async () => {
    try{
        await mongoose.connect('mongodb+srv://user:<password>@mern-cluster.xylyi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
            UseNewUrlPaser:true,
            UseUnifiedTopology:true

        });

        console.log('Database Connection Successfully')

    }catch (err){
        console.log(err);
    }
};

module.exports = connectDB;