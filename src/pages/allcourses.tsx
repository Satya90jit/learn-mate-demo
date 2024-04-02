import CommonHero from '@/components/common/CommonHero'
import { PublicLayouts } from '@/layouts'
import React from 'react'

const allcourses = () => {
  return (
    <PublicLayouts>
      <section className="flex justify-center items-center h-screen">
      <CommonHero name="All Courses" />
      </section>
    </PublicLayouts>
  )
}

export default allcourses