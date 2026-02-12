const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
  cloud_name: process.env.MY_CLOUD_NAME, 
  api_key: process.env.CLOUD_KEY, 
  api_secret: process.env.SECREAT_KEY,
});

async function uploadImage(buffer) {
    return new Promise((resolve, reject) => {

        const stream = cloudinary.uploader.upload_stream(
            { folder: "uploads" },
            (error, result) => {
                if (error) {
                    return reject(error);
                }
                resolve(result.secure_url); 
            }
        );

        stream.end(buffer);  
    });
}

module.exports = uploadImage;
