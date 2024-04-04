const cloudinary = require("cloudinary").v2;
require("dotenv").config();
const { CLOUD_NAME, API_KEY, API_SECRET } = process.env;

cloudinary.config({
    cloud_name: CLOUD_NAME,
    api_key: API_KEY,
    api_secret: API_SECRET
});


exports.uploadImageToCloudinary = async (file, folder, height, quality) => {
  const options = { folder }
  if (height) {
    options.height = height
  }
  if (quality) {
    options.quality = quality
  }
  options.resource_type = "auto"
  console.log("OPTIONS", options)
  return await cloudinary.uploader.upload(file.tempFilePath, options)
}


function extractPublicId  (imageUrl)  {
  const parts = imageUrl.split('/');
  const filename = parts[parts.length - 2] + "/" + parts[parts.length - 1];
  const publicId = filename.split('.')[0];
  console.log('publicId: ', publicId);
  return publicId;
}

exports.deleteImageFromCloudinary = async (imageUrl) => {
  try {
      const publicId = extractPublicId(imageUrl);
      const result = await cloudinary.uploader.destroy(publicId);
      return result;
  } catch (error) {
      throw new Error('Error deleting image from Cloudinary: ' + error.message);
  }
}