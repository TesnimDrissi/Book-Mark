import React,{useState} from 'react'


function ListBook(props) {

  const [toggle, setToggle] = useState(false)
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [author, setAuthor] = useState('')
  const [description, setDescription] = useState('')

  return (
    
    <div>

    <div className="wrapper">	
    <img className="image" src='wepik-monocolor-plastic-free-logo-20230630163053ghy8.png' onClick={()=>props.deleteTask(props.book.idbooks)} />
    <img className="image" src='wepik-monocolor-plastic-free-logo-202306301629001sCI.png' onClick={() => setToggle(!toggle)}/>
	
    {toggle && (
      <div className='input'>
        <input className='name-input' placeholder='Name'  onChange={(e)=>(setName(e.target.value))}/>  
        <input className='category-input' placeholder='Category'  onChange={(e)=>(setCategory(e.target.value))}/>
        <input className='author-input' placeholder='Author'  onChange={(e)=>(setAuthor(e.target.value))}/>
        <input className='description-input' placeholder='Description'  onChange={(e)=>(setDescription(e.target.value))}/>
        <button className='create' onClick={()=>{props.updateTask(name,category,author,description,props.book.idbooks)}} >Edit</button>
     </div>
     )}


  <ol className="list">
		<ul>
      <li className='name'> Name Of Book: {props.book.name }</li>
      <li className='category'>Category: {props.book.category }</li>
      <li className='author'>Author: {props.book.author }</li>
      <li className='description'>Description: {props.book.description }</li>
    </ul>
 
	</ol>
</div>

  </div>
  )
}

export default ListBook

{/* <img className="image" src='wepik-monocolor-plastic-free-logo-20230630163053ghy8.png'/>
<img className="image" src='wepik-monocolor-plastic-free-logo-202306301629001sCI.png'/> */}