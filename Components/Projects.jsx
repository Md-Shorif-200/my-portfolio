import React from 'react'
import SectionTitleContainer from './SectionTitleContainer'
import ProjectsTab from './ProjectsTab'
import Container from './Container'
import Footer from './Footer'

export default function Projects() {
  return (
    <main className='w-full min-h-screen bg-[#02050A] py-10 md:pt-28 xl:pt-28 pb-10'>
          <SectionTitleContainer title="My Projects" paragrap={'Always excited to explore new technologies in web development and constantly push myself to learn and grow. I enjoy taking on challenges and thrive in environments where I can collaborate and contribute.'} />


                <Container>
            <ProjectsTab/>

                </Container>
               <div className='md:hidden'>
                       <Footer/>
               </div>
    </main>
  )
}
