
import React from 'react'
import { getProviders, signIn } from "next-auth/react"
import Headers from "../../components/Header"
export default function SignIn({ providers }) {
  return (
    <>
    <Headers/>
    <div className='flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center'>
        <img className='w-80' src='https://foria-85d7d.web.app/static/media/logo.79d55de7463d6ad86be5.png'></img>
        <p className='font-xs italic'>Welcome to FORIA ecommerce !</p>
    <div className='mt-40'>
    {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button className='p-3 bg-blue-500 rounded-lg text-white' onClick={() => signIn(provider.id,{callbackUrl: '/'})}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
    </div>
    
      
    </>
  )
}

export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}
