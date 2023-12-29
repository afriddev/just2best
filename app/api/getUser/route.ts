import connectMongoDb from "@/libs/dataBase/mongoDb"
import userModel from "@/libs/models/user"
import { NextResponse } from "next/server"

export async function POST(req){

    let {email,password} = await req.json()
    console.log(email,password)
    try{
       await connectMongoDb()
       let result = await userModel.find({emailId:email,password:password})
       if(result.length > 0){
        return NextResponse.json(result[0]);
       }
       else{
        return NextResponse.json({
            message:"notFount"
        })
       }
    }
    catch(e){

    }

}