import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// // Debug environment variables
// console.log("CLOUDINARY_NAME:", process.env.CLOUDINARY_NAME);
// console.log("CLOUDINARY_API_KEY:", process.env.CLOUDINARY_API_KEY);
// console.log("CLOUDINARY_SECRET_KEY:", process.env.CLOUDINARY_SECRET_KEY);

cloudinary.config({
  cloud_name: "dy2fllwhq",
  api_key: "282772812972193",
  api_secret:"3DyMRKzxcd6ZY-4U81QfiaChS5I",
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
      if (!localFilePath) return null;
  
      // Upload the file to Cloudinary
      const response = await cloudinary.uploader.upload(localFilePath, {
        resource_type: "auto",
      });
  
      // Check if the file exists before deleting
      if (fs.existsSync(localFilePath)) {
        fs.unlinkSync(localFilePath);
      }
  
      return response;
    } catch (err) {
      // Check if the file exists before deleting in the catch block
      if (fs.existsSync(localFilePath)) {
        fs.unlinkSync(localFilePath);
      }
  
      console.log("cloudinary upload error", err);
      return null;
    }
  };
  
  export { uploadOnCloudinary };