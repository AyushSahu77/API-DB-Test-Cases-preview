const mongoose = require('mongoose')
const mongoDBconnect = 'mongodb+srv://AyushsCluster77:mongocluster139@cluster0.wy6ry18.mongodb.net/testDB?retryWrites=true&w=majority'

mongoose.set("strictQuery", false);
mongoose.connect(mongoDBconnect).then(() => {
    console.log('Connection successfull with DB!')
  }).catch((err) => {
    console.log('Connection with DB can not be established!')
  });