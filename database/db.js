const mongoose = require('mongoose');



const connectDB = async () => {
    try{
        await mongoose.connect(
            'mongodb+srv://user:12345@mern-cluster.xylyi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
            {
                 UseNewUrlParser: true,
                 UseUnifiedTopology: true
            }
        );

        console.log('Database Connection Successfully');
    }catch (err) {
        console.log(err);
    }
};

module.exports = connectDB;