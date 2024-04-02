
import CommonHero from '@/components/common/CommonHero'
import { PublicLayouts } from '@/layouts'
import React from 'react'

const signupp = () => {
  return (
      <PublicLayouts>
        <section className='flex justify-center items-center h-screen'>
        <CommonHero name="Signup" />
        </section>
        
      </PublicLayouts>
  )
}

export default signupp