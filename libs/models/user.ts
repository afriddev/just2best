import mongoose, { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  referalManagerID: {
    type: String,
  },
  name: {
    type: String
  },
  fatherName:{
    type:String
  },
  dob:{
    type:Number
  },
  course:{
    type:String
  },
  collage:{
    type:String
  },
  university:{
    type:String
  },
  address:{
    type:String
  },
  mobileNumber:{
    type:Number
  },
  emailId:{
    type:String
  },
  photo:{
    type:String
  },
  idPhoto:{
    type:String
  },
  password:{
    type:String
  },
  internLocation:{
    type:String
  }

  
});
const userModel = models.user || mongoose.model("user", userSchema);
export default userModel;