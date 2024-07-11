import {v2 as cloudinary} from "cloudinary";
import fs from "fs";         //to read,write,update files in node.js

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary = async (localFilePath)=>{
    try{
        if(!localFilePath) return null
        //else just upload the file on cloudinary
        const response=await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"    //can be a image,video,pdf,audio,etc
        })
        //File has been uploaded successfully
        //console.log("File has been uploaded successfully!",response.url);
        fs.unlinkSync(localFilePath)
        return response;
    }catch(error){
        fs.unlinkSync(localFilePath)        //remove the locally saved temporary file as the upload opreation got failed
        console.log("File upload failed!",error);
        return null;
    }
}
export {uploadOnCloudinary};