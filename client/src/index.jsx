import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Book from './components/Book.jsx'

const App = () => {
  const [books, setBooks] = useState([])
  const [refresh,setRefresh]= useState(true)

  useEffect(() => {
    axios
    .get("http://localhost:3000/api/books/")
    .then((response)=>{
      setBooks(response.data)
      console.log(response.data);
    })
    .catch((error)=>{
      console.error(error);
    })
  }, [refresh])

  const insert = function(name,category,author,description){
    axios
    .post("http://localhost:3000/api/books/add",
    {name:name,
    category:category,
    author:author,
    description:description})
    .then((response)=>{
      console.log(response.data)
      setRefresh(!refresh)
    })
    .catch((error)=>{
      console.error(error);
    })
  }

  const deleteTask = function(idbooks){
    axios
    .delete(`http://localhost:3000/api/books/${idbooks}`)
    .then((response)=>{
      console.log(response.data)
      setRefresh(!refresh)
    })
    .catch((error)=>{
      console.error(error);
    })
  }

  const updateTask = function(name,category,author,description,idbooks){ 
    axios
    .put(`http://localhost:3000/api/books/${idbooks}`,
    {name:name,
    category:category,
    author:author,
    description:description})
   
    .then((response)=>{
      console.log(response.data)
      setRefresh(!refresh)
    })
    .catch((error)=>{
      console.error(error);
    })
  }

  return (
    <div >
      <div className='home'>
         {/* <h1>The Last Chapter</h1> */}
         <img className="home-img" src='last.png'/>
         </div>
     
      <Book books={books} insert={insert} deleteTask={deleteTask} updateTask={updateTask} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
