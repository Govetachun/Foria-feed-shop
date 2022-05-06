import React, { useEffect ,useState} from 'react'
import blaver from "blaver"

function Suggesttions() {
    const [sugestions, setSuggestions] = useState([]);
    useEffect(()=>{
        const sugestions = [...Array(5)].map((_,i)=>(
            {
                ...blaver.helpers.contextualCard(),
                id: i
            }
        ));
            setSuggestions(sugestions);
    },[]);
  return (
    <div className='mt-4 ml-10'>
        <div className='flex justify-between text-sm mb-5'>
            <h3 className='text-sm font-bold text-gray-400'>Suggestions for you</h3>
            <button className='text-gray-600'>See All</button>
        </div>
        {
            sugestions.map((profile)=>(
                <div 
                key={profile.id} 
                className='flex justify-between items-center mt-3'
                >
                <img 
                className='w-10 h-10 rounded-full border p-[2px]' 
                src={profile.avatar}
                />
                <div className='flex-1 ml-4'>
                    <h2 className='font-semibold text-sm'>{profile.username}</h2>
                    <h3 className='text-xs text-gray-400'>Works at {profile.company.name}</h3>
                </div>
                <button className='text-blue-400 font-bold text-sm'>Follow</button>
                </div>
            ))
        }
    </div>
  )
}

export default Suggesttions