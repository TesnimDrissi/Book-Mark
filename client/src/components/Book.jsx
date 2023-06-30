import React,{useState} from 'react'
import ListBook from "./ListBook.jsx"

function Book(props) {
 const [toggle, setToggle] = useState(false)
 const [name, setName] = useState('')
 const [category, setCategory] = useState('')
 const [author, setAuthor] = useState('')
 const [description, setDescription] = useState('')

 
  return (
    <div>

       <img className='add' src='add.png'  onClick={() => setToggle(!toggle)}/>
      
       {toggle && (
      <div className='input'>
        <input className='name-input' placeholder='Name'  onChange={(e)=>(setName(e.target.value))}/>  
        <input className='category-input' placeholder='Category'  onChange={(e)=>(setCategory(e.target.value))}/>
        <input className='author-input' placeholder='Author'  onChange={(e)=>(setAuthor(e.target.value))}/>
        <input className='description-input' placeholder='Description'  onChange={(e)=>(setDescription(e.target.value))}/>
        <button className='create' onClick={()=>{props.insert(name,category,author,description)}} >Add</button>
     </div>
     )}

      {props.books.map((book, index) => {
            return(
             <div key={index}>
               <ListBook book={book} deleteTask={props.deleteTask}  updateTask={props.updateTask}/>
             </div>
            )
         }
         )
         }
    </div>
  )
}

export default Book


