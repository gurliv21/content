import React, { useEffect, useState } from 'react'
import { getPosts } from '../api/posts'
import PostComponent from '../components/PostComponent'
import CreatePost from '../components/CreatePost';
function Dashboard() {
   interface Post {
  id: number;
  title: string;
  content: string;
  image_url: string | null;
  created_at: string;
  user_id: number;
}
  const [post,setPost]=useState<Post[]>([])
  useEffect(()=>{
    async function apiCalls(){
      const result = await getPosts()
      setPost(result)

    }
    apiCalls( )

    


  },[])
  return (
    <div className='w-full' >
      <div  className='flex  justify-center   w-full'>
              <div className=''>
              {post.map((p)=>(
          <PostComponent post={p} key={p.id}/>
      ))}

      </div>
      </div>


    </div>
  )
}

export default Dashboard
