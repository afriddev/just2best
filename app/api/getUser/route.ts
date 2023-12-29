import connectMongoDb from "@/libs/dataBase/mongoDb"
import userModel from "@/libs/models/user"
import { NextResponse } from "next/server"

const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };

export async function POST(req){

    let {email,password} = await req.json()
    console.log(email,password)
    try{
       await connectMongoDb()
       let result = await userModel.find({emailId:email,password:password})
       if(result.length > 0){
        return NextResponse.json(result[0],{ headers: corsHeaders });
       }
       else{
        return NextResponse.json({
            message:"notFount"
        },{ headers: corsHeaders })
       }
    }
    catch(e){

    }

}