import React from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../../components/Spinner'
import { useDocument } from '../../hooks/useDocument'
import ProjectComments from './ProjectComments'

//styles
import "./Projects.css"
import ProjectSummary from './ProjectSummary'


export default function Projects() {
  const {id} =useParams()
  const {error,document}=useDocument("projects",id)
  if (error) {
    return <div className='error'>{error}</div>
  }
  if (!document) {
    return <Spinner/>
  }
  return (
    <div className='project-details'>
      <ProjectSummary project={document} />
      <ProjectComments project={document}/>
    
    </div>
  )
}

