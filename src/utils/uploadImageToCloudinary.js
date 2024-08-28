import axios from "axios";

export const uploadImageToCloudinary = async (image) => {
  const formData = new FormData();

  formData.append("file", image);
  formData.append("upload_preset", "dailyBazar");

  try {
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${
        import.meta.env.VITE_APP_CLOUDINARY_CLOUD_NAME
      }/image/upload`,
      formData
    );
    return response.data;
  } catch (error) {
    console.error("Error uploading image:", error);
  }
};
