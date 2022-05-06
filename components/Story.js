import React, { useEffect, useState } from 'react';
import Store from "./Store";
import blaver from "blaver"
import { useSession } from 'next-auth/react';
function Story() {
   
    const [suggestions,setSuggesttions] = useState([]);
    const {data :session} = useSession();
    useEffect(() =>{
        const suggestions = [...Array(20)].map((_,i)=>({
            ...blaver.helpers.contextualCard(),
            id: i,
        }));
        setSuggesttions(suggestions);
    },[]);
  return (
    <div className='flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm
    overflow-x-scroll scrollbar-thin scrollbar-thumb-black'>
        {session &&(
            <Store img={session.user.image}
            username ={session.user.username}/>
        )}
        {suggestions.map(profile=>(
            <Store 
            key={profile.id} 
            img = {profile.avatar} 
            username = {profile.username}/>
        ))}
        {/* Story */}
        {/* Story */}
        {/* Story */}
        {/* Story */}
        {/* Story */}
        {/* Story */}
    </div>
  )
}

export default Story