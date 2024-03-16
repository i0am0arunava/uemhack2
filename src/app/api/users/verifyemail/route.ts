import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { Console } from "console";
import {NextRequest,NextResponse} from 'next/server';


connect()

export async function POST(request:NextRequest){
    try {
        const reqBody=await request.json()
        const {token}=reqBody
        console.log(token);
      const user=  await User.findOne({verifyToken:token,
        verifyTokenExpiry:{$gt:Date.now()}
        
        })
        if(!user){
            return NextResponse.json({error:"Invalid token"},{status:400})
        }
        user.isVerified=true;
        user.verifyToken=undefined;
        user.verifyTokenExpiry=undefined;
        await user.save()
        return NextResponse.json({
            message:"email verified",
            success:true
        })


    } catch (error) {
        console.log(error)
    }
}