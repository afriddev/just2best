import mongoose from "mongoose"
let uri = "mongodb+srv://afridayan01:21765A0217@cluster0.8llunsc.mongodb.net/?retryWrites=true&w=majority"
let connectMongoDb = ()=>{

    mongoose.connect(uri)
    .then(()=>{
        console.log("Connected")
    })
    .catch((e)=>{
        console.log(e)
    })
}

export default connectMongoDb