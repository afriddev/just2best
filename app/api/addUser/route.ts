import connectMongoDb from "@/libs/dataBase/mongoDb";
import userModel from "@/libs/models/user";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectMongoDb();
    try{
      let result = await userModel.create(await req.json())
      console.log(result)
      return NextResponse.json({ message: "success" });

    }
    catch(e){
      return NextResponse.json({message:"wrongData"})
    }
    
    
  } catch (e) {
    console.log(e)
    return NextResponse.json({ message: "serverError" });
    
  }
}