import HomeLoadingSection from '@/components/HomeLoadingSection';
import Image from 'next/image'
import { Suspense } from 'react';

 const HomePage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <h2 className='text-2xl font-semibold'> Home page</h2> 
    
    <Suspense fallback={<h2 className='text-2xl font-semibold'>Loading.....</h2>}>
      <HomeLoadingSection />
    </Suspense>
    
    </main>
  )
}

export default HomePage;