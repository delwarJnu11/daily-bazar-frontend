import { useState } from "react";

const Image = ({ src }) => {
  const [zoomImage, setZoomImage] = useState(false);
  const [zoomImageCoordinate, setZoomImageCoordinate] = useState({
    x: 0,
    y: 0,
  });

  // Handle Zomm Image
  const handleZoomImage = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    console.log(left, top);
    console.log(width, height);
    // Calculate relative position of mouse inside the image
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;

    setZoomImage(true);
    setZoomImageCoordinate({ x, y });
  };

  const handleMouseLeave = () => {
    setZoomImage(false);
  };
  // Zoom Styles
  const zoomStyle = zoomImage
    ? {
        transformOrigin: `${zoomImageCoordinate.x * 100}% ${
          zoomImageCoordinate.y * 100
        }%`,
        transform: "scale(2)",
        cursor: "crosshair",
      }
    : {};
  return (
    <div
      className="relative overflow-hidden"
      onMouseMove={handleZoomImage}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={src}
        className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-125"
        alt="Fresh organic villa farm lemon 500gm pack"
        style={{
          ...zoomStyle,
        }}
      />
    </div>
  );
};
export default Image;
