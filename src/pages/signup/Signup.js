import {useState} from 'react'
import { useSignup } from '../../hooks/useSignup'

//styles
import "./Signup.css"


export default function Signup() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [displayName,setDisplayName]=useState("")
  const [thumbNail,setThumbNail]=useState(null)
  const [thumbNailError,setThumbNailError]=useState(null)
  const {signup,isPending,error} =useSignup()
  
  const handleSubmit =(e)=>{
   e.preventDefault()
   signup(email,password,displayName,thumbNail);
  }

  const handleFileChanege =(e)=>{
    setThumbNail(null)
    let selected = e.target.files[0]
    console.log(selected);
    if (!selected) {
      setThumbNailError("Please select a file")
      return
    }
    if (!selected.type.includes("image")) {
      setThumbNailError("Selected File must be an Image")
      // no need to go one if one of conditions is true
      return
    }
    if (selected.size> 100000) {
      setThumbNailError("Image file size must be less than 100kb")
      return
    }
    setThumbNailError(null)
    setThumbNail(selected)
    console.log("thumbnail updated");
  }
  return (
    <form className='auth-form' onSubmit={handleSubmit}>
      <h2>Sign up</h2>
      <label>
      <span>display name:</span>
      <input 
      required
      onChange={(e)=>setDisplayName(e.target.value)}
      value={displayName}
      type="text" />
    </label>
    
    <label>
      <span>email:</span>
      <input 
      required
      onChange={(e)=>setEmail(e.target.value)}
      value={email}
      type="email" />
    </label>
    <label>
      <span>password:</span>
      <input 
      required
      onChange={(e)=>setPassword(e.target.value)}
      value={password}
      type="password" />
    </label>
    
    <label>
      <span>profile thumbnail:</span>
      <input 
      required
      onChange={handleFileChanege}
      type="file" />
      {thumbNailError && <div className='error'>{thumbNailError}</div> }
    </label>
    {!isPending &&<button className='btn'>Sign up</button>  }
    {isPending &&<button className='btn' disabled>Loading</button>  }
    {error && <div>{error}</div> }
    </form>
  )
}
