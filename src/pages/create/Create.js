import React, { useEffect,useState } from 'react'
import Select from 'react-select'
import { useCollection } from '../../hooks/useCollection'
import {useFirestore} from "../../hooks/useFirestore"
import { timestamp } from '../../firebase/config'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useHistory } from 'react-router-dom'


//styles
import "./Create.css"

const categories =[
  {value:"development",label:"Development"},
  {value:"design",label:"Design"},
  {value:"sales",label:"Sales"},
  {value:"marketing",label:"Marketing"}
]

export default function Create() {
  const history = useHistory()
  const [name,setName]=useState("")
  const [details,setDetails]=useState("")
  const [dueDate,setDueDate]=useState("")
  const [category,setCategory]=useState("")
  const [assignedUsers,setAssignedUsers]=useState([])
  const [formError,setFormError]=useState(null)
  const {addDocument,response}=useFirestore("projects")
  const {user}= useAuthContext()

  const [users, setUsers]=useState([])
  const {documents}=useCollection("users")
  // updating the users onoptions
  useEffect(() => {
    if (documents) {
      const options =documents.map((user)=>{
        return {value: user ,label:user.displayName}
    })
    setUsers(options)
    }
  }, [documents])
  

  const handleSubmit = async (e)=>{
    e.preventDefault()
    setFormError(null)
    if(!category){
      setFormError("Please select a project category")
      return
    }
    if(assignedUsers.length<1)
    {setFormError("Please assign project to at least one user")
      return
    }
    const createdBy ={
      displayName : user.displayName,
      photoURL : user.photoURL,
      id : user.uid
    }
    const assignedUsersList = assignedUsers.map((u)=>{
      return {
        displayName: u.value.displayName,
        photoURL : u.value.photoURL,
        id : u.value.id

      }
    })
    const project = {
      name,
      details,
      category : category.value,
      dueDate :timestamp.fromDate(new Date(dueDate)),
      comments : [],
      createdBy,
      assignedUsersList
    }
    await addDocument(project)
    if (!response.error) {
      history.push("/")
    }
  }
  return (
    <div className='create-form'>
    <h2 className='page-title'>Create a New Project</h2>
    <form onSubmit={handleSubmit}>
    <label >
      <span>Project name:</span>
      <input 
      required
      onChange={(e)=>setName(e.target.value)}
      value={name}
      type="text" />
    </label>

    <label >
      <span>Project details:</span>
      <textarea 
      required
      onChange={(e)=>setDetails(e.target.value)}
      value={details}
      type="text" ></textarea>
    </label>

    <label >
      <span>Set due date:</span>
      <input 
      required
      onChange={(e)=>setDueDate(e.target.value)}
      value={dueDate}
      type="date" />
    </label>
    <label>
      <span>Project category:</span>
      <Select
      onChange={(option)=>setCategory(option)}
      options={categories}
      />
    </label>
    <label >
      <span>Assign to :</span>
      {/* select multi users ismulti */}
      <Select
      onChange={(option)=>setAssignedUsers(option)}
      options={users}
      isMulti
      />
    </label>
    <button className='btn' style={{marginBottom :"50px"}}>Add Project</button>
    {formError && <p className='error'>{formError}</p>  }
    </form>
    </div>
  )
}
