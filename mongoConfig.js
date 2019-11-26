const mongoose = require("mongoose");
const db = {
    url : process.env.MONGO_URL,
}

mongoose.connect(db.url, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if(err) console.log(err);
    else console.log("Connected to the DB");
});

const Schema  = mongoose.Schema;
const userSchema = new Schema({name : String, sex : String , designation : String});
const User = mongoose.model("users",userSchema);

User.insertMany([{name: 'Tarun Bansal', sex: 'Male', designation: 'Full stack Developer'}, {name: 'Danish', sex: 'Female', designation: 'CTO'}], (err, docs) => {
    if(err) console.log('error occures while inserting..');
    if(docs) console.log('Test Data inserted');
});

module.exports = User;