import {useState} from 'react'
import { timestamp } from '../../firebase/config'
import {useAuthContext} from "../../hooks/useAuthContext"
import {useFirestore} from "../../hooks/useFirestore"
import Avatar from "../../components/Avatar"
import formatDistanceToNow from "date-fns/formatDistanceToNow"

export default function ProjectComments({project}) {
    const [newComment,setNewComment]=useState("")
    const {updateDocument,response}=useFirestore("projects")
    const {user}=useAuthContext()

    const handleSubmit =async (e)=>{
        e.preventDefault()

        const commentToAdd ={
        displayName :user.displayName,
        photoURL :user.photoURL,
        content:newComment,
        createdAt:timestamp.fromDate(new Date()),
        id: Math.random()
        }
        await updateDocument(project.id, {
            comments: [...project.comments, commentToAdd]
        })
        if (!response.error) {
            setNewComment("")
        }
    }

  return (
    <div className='project-comments'>
        <h4>Project Comments</h4>
        <form className="add-comment" onSubmit={handleSubmit}>
            <ul>
                {project.comments.length>0 && project.comments.map((comment)=>(
                    <li key={comment.id}>
                        <div className='comment-author'>
                            <Avatar src={comment.photoURL}  />
                            <p>{comment.displayName}</p>
                        </div>
                        <div className='comment-date'>
                            <p>{formatDistanceToNow(comment.createdAt.toDate(),{addSuffix:true})}</p>
                        </div>
                        <div className="comment-content">
                            <p>{comment.content}</p>
                        </div>
                    </li>
                ))}
            </ul>
            <label>
                <span>Add new Comment</span>
                <textarea
                required
                onChange={(e)=>setNewComment(e.target.value)}
                value={newComment}
                ></textarea>
            </label>
            <button className='btn' style={{marginBottom :"50px"}}>Add Comment</button>
            

        </form>

    </div>
  )
}
