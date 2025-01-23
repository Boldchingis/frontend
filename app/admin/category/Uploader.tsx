import { useState } from "react";

const CLOUDINARY_CLOUD_NAME = "duhir31qk";
const CLOUDINARY_UPLOAD_PRESET = "food-delivery";

export const Uploader = ({ setImage }: { setImage: (url: string) => void }) => {
  const [loading, setLoading] = useState(false);

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setLoading(true);

      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

      try {
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/upload`,
          {
            method: "POST",
            body: data,
          }
        );

        const result = await response.json();
        setImage(result.secure_url); 
        setLoading(false);
      } catch (error) {
        alert("aldaa garlaa");
        console.error(error);
        setLoading(false);
      }
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleUpload}
        disabled={loading}
      />
      {loading && <p>Uploading...</p>}
    </div>
  );
};
