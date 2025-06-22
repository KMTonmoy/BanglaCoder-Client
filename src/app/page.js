import AboutAdmin from '@/Components/AboutAdmin'
import Curriculum from '@/Components/Curriculum'
import Hero from '@/Components/Hero'
import WhatYouLearn from '@/Components/WhatYouLearn'
import React from 'react'

const page = () => {
  return (
    <div className='my-10 flex flex-col gap-10'>
      <Hero />
      <WhatYouLearn/>
      <Curriculum/>
      <AboutAdmin/>
    </div>
  )
}

export default page
