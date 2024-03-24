import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import generateTokenAndSetCookie from "../utils/generateToken.js"
export const login = async(req,res)=>{
  try {
    const {username,password} =req.body;
    const user = await User.findOne({username})
    const isPasswordCorrect =await bcrypt.compare(password,user?.password || "") //validation is to check if the user doesnot exist
    if(!user || !isPasswordCorrect){
     return res.status(400).json({error:"Invalid username and password"})
    }

    generateTokenAndSetCookie(user._id,res)
    res.status(200).json({
        _id: user._id,
        fullName: user.fullName,
        username: user.username,
        profilePic: user.profilePic,
    });
  } catch (error) {
    console.log("error in login controller",error.message)
    res.status(500).json({error:"Internal Server error"})
  }
}

export const signup = async(req,res)=>{
    try {
        const {fullName , username, password, confirmPassword, gender} = req.body    
    
        if(password !== confirmPassword){
            return res.status(400).json({error:"Passwords doesn't match"})
        }
    
        const user = await User.findOne({username})
    
        if(user){
            return res.status(400).json({error:"User already exist"})
    
        }
    

        //https://avatar.iran.liara.run/public/boy?username=[value]
    
        const boyProfilePic =`https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic =`https://avatar.iran.liara.run/public/girl?username=${username}`
    
        //Hashing Password

        const salt=await bcrypt.genSalt(10)
        const hashPassword=await bcrypt.hash(password,salt)
        const newUser =new User({
            fullName,
            username,
            password:hashPassword,
            gender,
            profilePic:gender==="male"?boyProfilePic : girlProfilePic
        })
    
        if(newUser){
            generateTokenAndSetCookie(newUser._ud,res)
            await newUser.save()

            res.status(201).json({
                _id:newUser._id,
                fullName:newUser.fullName,
                username:newUser.username,
                profilePic:newUser.profilePic
            })
        }else{
        res.status(400).json({error:"Invalid User Data"})

        }
        
    
    } catch (error) {
        console.log("error in signup controller",error.message)
        res.status(500).json({error:"Internal Server error"})
    }
}
export const logout =(req,res)=>{
 try {
    res.cookie("jwt","",{maxAge:0})
     res.status(200).json({message:"Logout successfully"})

 } catch (error) {
    console.log("error in logout controller",error.message)
    res.status(500).json({error:"Internal Server error"})
 }
}