import React from 'react'
import Story from './Story'
import Posts from './Posts'
import Miniprofile from './Miniprofile'
import Suggestions from './Suggesttions'
import { useSession } from 'next-auth/react'
function Feed() {
    const {data:session} = useSession();
  return (
    <div className={'grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto ${!session && "!grid-cols-1 !max-w-3xl"}'}>
        <section className='col-span-2'>
            {/* Section */}
            <div>
                <Story/>
                <Posts />
            </div>
         
        </section>
        {session && (<section className='hidden xl:inline-grid md:col-span-1'>
            <div className='fixed top-20'>
            <Miniprofile/>
            <Suggestions/>
            </div>
            {/* Section */}
            {/* Mini profile */}
            {/* Suggestions*/}
        </section>)}
        
        
    </div>
  )
}

export default Feed