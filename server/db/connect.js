const mongoose = require('mongoose')
const db=process.env.DATABASE;
const connectionParams={
    useNewUrlParser: true,
   useUnifiedTopology: true,
}
mongoose.set("strictQuery", false);
mongoose.connect(db,connectionParams)
   .then( () => {
       console.log('Connected to the database ')
   })
   .catch( (err) => {
       console.error(`Error connecting to the database. n${err}`);
   })
   