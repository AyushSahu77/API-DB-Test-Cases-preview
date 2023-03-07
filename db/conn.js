const mongoose = require('mongoose')
const mongoDBconnect = 'mongodb+srv://<CLUSTER-NAME>:<CLUSTER-PASSWORD>@cluster0.wy6ry18.mongodb.net/testDB?retryWrites=true&w=majority'

//Change <CLUSTER-NAME> & <CLUSTER-PASSWORD> to your cluster details

mongoose.set("strictQuery", false);
mongoose.connect(mongoDBconnect).then(() => {
    console.log('Connection successfull with DB!')
  }).catch((err) => {
    console.log('Connection with DB can not be established!')
  });
