import React from 'react'
import MainLayout from '../layout/MainLayout'
import ErrorPage from '../components/ErrorPage'
import HomePage from '../features/home/page/HomePage'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import AboutPage from '../features/about/page/AboutPage'
import ExperiencePage from '../features/experience/page/ExperiencePage'
import ProjectPage from '../features/project/page/ProjectPage'
import ContactPage from '../features/contact/page/ContactPage'
import EducationPage from '../features/education/page/EducationPage'
import SkillPage from '../features/skill/page/SkillPage'
import DetailProject from '../features/project/components/DetailProject'

const MainRouter = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<MainLayout />}>
               <Route path="*" element={<ErrorPage />} />
               <Route index element={<HomePage />} />
               <Route path="/about" element={<AboutPage />} />
               <Route path="/experience" element={<ExperiencePage />} />
               <Route path="/project" element={<ProjectPage />} />
               <Route path="/contact" element={<ContactPage />} />
               <Route path="/education" element={<EducationPage />} />
               <Route path="/skill" element={<SkillPage />} />

               <Route path="/project-detail" element={< DetailProject />} />
            </Route>
        </Routes>
    </Router>
  )
}

export default MainRouter