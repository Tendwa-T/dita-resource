import { useUser } from '@/context/UserContext';
import Authenticate from '@/components/authenticate';
import { useRouter } from 'next/router';

export default function TestPage() {

    const isAuthenticated = Authenticate();
    const router = useRouter();



    return (
        <div>
            {/* A button to check authentication */}     
             
            {isAuthenticated ? (
                
                <div className='flex w-full justify-center'>
                    <h1 className='text-4xl font-bold text-center'>You are authenticated</h1>
                    <button className=' border border-black bg-[#2afc7a] bg-opacity-50 p-6' onClick={()=>{
                        router.push('/')
                    }}> Welcome</button> 
                </div>
            ) : (
                
                <div className='flex-1 w-full justify-center mx-auto items-center'>
                    <h1 className='text-4xl font-bold text-center'>You are not authenticated</h1>
                    <button className='border border-black bg-[#fc5b2a] bg-opacity-50 p-6 ' onClick={()=>{
                        router.push('/user/login')
                    }}> LogIn</button>
                </div>
            )}     
        </div>
    )
}