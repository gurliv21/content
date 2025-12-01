import React from "react";
import { SlLike,SlDislike  } from "react-icons/sl";
import { FaRegComment } from "react-icons/fa";
export interface Post {
  id: number;
  title: string;
  content: string;
  image_url: string | null;
  created_at: string;
  user_id: number;
}

interface PostComponentProps {
  post: Post;
}


function PostComponent({ post }:PostComponentProps) {
  if (!post) return null;

  const date = new Date(post.created_at).toLocaleString();

  return (
    <div className="min-h-[150px] w-[450px] border-y p-2  mt-6">
       <div className="">
       <div>
              <p className="text-sm text-gray-500 mt-1">
        {date}
      </p>
       </div>

      <h2 className="text-[16px] font-semibold text-gray-900">
        {post.title}
      </h2>

 


      
      {post.image_url && (
        <img
          src={post.image_url}
          alt="post"
          className="w-full h-40 object-cover mt-3 rounded-md"
        />
      )}

      <p className="text-gray-700 mt-3">
        {post.content}
      </p>

       </div>
       <div className="flex gap-5 mt-4">
        <SlLike />
        <SlDislike />
        <FaRegComment />
       </div>
       
      

    </div>
  );
}

export default PostComponent;
