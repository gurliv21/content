import React, { useState, ChangeEvent } from "react";
import { FiImage } from "react-icons/fi";
import Button from "./Button";
import { createPost } from "../api/posts";
import { useNavigate } from "react-router-dom";
const CreatePost: React.FC = () => {
    const navigate = useNavigate()
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const submitPost = async() => {
    if (!title.trim()) return alert("Title is required!");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", desc);
    if (image) formData.append("image", image);

    console.log("POST DATA:", { title, desc, image });
    try{
            console.log("are u there")
            const result = await createPost({ title, desc, image })
            console.log(result)
            if(result.message=="post created"){
                navigate(-1)
            }

    }catch(error){
        console.log("error logging posts",error)
    }



    
  };

  return (
    <div className="w-full max-w-xl mx-auto mt-6 border rounded-xl p-4 shadow-sm h-[400px]">
      <h2 className="text-xl font-bold mb-3">Create a Post</h2>


      <input
        type="text"
        className="border w-full p-2 rounded mb-3 outline-none"
        placeholder="Post Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />


      <textarea
        className="border w-full p-2 rounded mb-3 outline-none h-32 resize-none"
        placeholder="Write your post..."
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />


      <label className="flex items-center gap-2 cursor-pointer text-orange-600 font-semibold mb-4">
        <FiImage className="text-2xl" />
        <span>Upload Image</span>

        <input
          type="file"
          accept="image/*"
          onChange={handleImage}
          className="hidden"
        />
      </label>


      {image && (
        <img
          src={URL.createObjectURL(image)}
          alt="preview"
          className="w-full h-auto rounded mb-3 border"
        />
      )}


      <Button variant="primary" onClick={submitPost}>
        Post
      </Button>
    </div>
  );
};

export default CreatePost;
