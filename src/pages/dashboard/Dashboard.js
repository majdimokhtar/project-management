import {useState} from 'react'
import ProjectList from '../../components/ProjectList'
import { useCollection } from '../../hooks/useCollection'
import {useAuthContext} from "../../hooks/useAuthContext"

// styles
import "./Dashboard.css"
import ProjectFilter from './ProjectFilter'
import Spinner from '../../components/Spinner'
export default function Dashboard() {
  const {user}=useAuthContext()
  const [currentFilter,setCurrentFilter] =useState("all")
  const {documents,error}=useCollection("projects")
  const changeFilter =(newFilter)=>{
    setCurrentFilter(newFilter)
  }
  const projects =documents? documents.filter((document)=>{
  switch (currentFilter){
    case "all":
      return true
    case "mine":
      let assignedToMe=false
      document.assignedUsersList.forEach((u)=>{
      if (user.uid===u.id) {
        assignedToMe =true
      }
      })
      return assignedToMe
      case "development":
      case "design":
      case "sales":
      case "marketing":
        console.log(document.category,currentFilter);
        return document.category === currentFilter
        default:
        return true
  }
  }) : null
  return (
    <div>
    <h2 className="page-title">Dashboard</h2>
    {error && <p>{error}</p> }
    {documents && (<ProjectFilter 
    changeFilter={changeFilter}
    currentFilter={currentFilter} />
     )}
     {!documents && <Spinner/> }
    {projects && <ProjectList projects={projects}/>}
    </div>
  )
}
