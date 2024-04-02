import CommonHero from '@/components/common/CommonHero'
import { PublicLayouts } from '@/layouts'
import React from 'react'

const login = () => {
  return (
    <PublicLayouts>
        <section className='flex justify-center items-center h-screen '>
        <CommonHero name="Login" />
        </section>
    </PublicLayouts>
  )
}

export default login