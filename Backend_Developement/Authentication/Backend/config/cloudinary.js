import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"
cloudinary.config({
    cloud_name:process.env.CLOUDNARY_CLOUD_NAME,
    api_key:process.env.CLOUDNARY_API_KEY,
    api_secret:process.env.CLOUDNARY_API_SECRET 
})

const uploadOnCloudinary = async (filePath) =>{
    try {
        if (!filePath) {
            return null
        }

        let result = cloudinary.uploader.upload(filePath) 
        console.log(result) 
        fs.unlinkSync(filePath)
        return result.secure_url
        
    } catch (error) {
        fs.unlinkSync(filePath)
        console.log(error)
        
    }
}

export default uploadOnCloudinary;