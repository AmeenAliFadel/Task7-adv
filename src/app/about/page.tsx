import BestCompany from '@/components/BestCompany/BestCompany'
import HappyCustomers from '@/components/HappyCustomers/HappyCustomers'
import Hero from '@/components/hero/Hero'
import SectionInAbout from '@/components/SectionInAbout/SectionInAbout'
import React from 'react'

export default function About() {
  return (
    <>
        <Hero />
        <BestCompany isPrimary={false}/>
        <SectionInAbout />
        <HappyCustomers />
    </>
  )
}
