import { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { uploadImageToCloudinary } from "../../utils/uploadImageToCloudinary";

const ImageUpload = ({ onGetImageUrl }) => {
  const [file, setFile] = useState("");

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    if (selectedFile) {
      const uploadImageCloudinary = await uploadImageToCloudinary(selectedFile);
      if (uploadImageCloudinary?.url) {
        onGetImageUrl(uploadImageCloudinary.url);
      }
    }
  };

  return (
    <div className="w-1/2 md:w-1/3 flex flex-col items-center justify-center bg-gray-100 rounded-lg">
      <label
        htmlFor="file-upload"
        className="flex flex-col items-center justify-center w-full border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-green-500 transition-colors duration-200"
      >
        <IoCloudUploadOutline className="text-gray-500" size={40} />
        <span className="mt-2 text-base text-gray-500">Upload Photo</span>
        {file && (
          <span className="mt-2 text-sm text-gray-400">{file?.name}</span>
        )}
      </label>
      <input
        name="image"
        id="file-upload"
        type="file"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
};
export default ImageUpload;
