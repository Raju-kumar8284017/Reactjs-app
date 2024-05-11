import { useState } from 'react';
import './TodoList.css';
 
 let TodoList = function() {

    let [todo, setTodo] = useState([ ])  
  

     function handleSubmit(event) {
        event.preventDefault()
        let task = event.target.task.value

          if (!task) {
            alert("please provide a valid task")
            return
          }

          setTodo([...todo, { task: task, completed: false}])

        event.target.reset()
    } 

   
       
    return(
      <div className="container my-5">
        <div className='card'>
            <div className="h3 p-4">Todo List</div>
         <div className='text-start p-2'>
         {
             todo.map((todo, index) =>{
                return (
                  <div key={index} className='d-flex '>
                    <div class="alert  alert-dismissible fade show ml-1" role="alert">
                         <div className='itemdiv'><input type="checkbox" name="" className='form-check-input rounded-pill'/> {todo.task}
                             <button type="button" class="btn-close btn-1x mx-1" data-bs-dismiss="alert"></button>
                         </div>
                     </div>
                  </div>
                )
              })
          }
          </div>
          <hr/>
           <form className="d-flex mb-2 mx-3" onSubmit={handleSubmit}>
              <input className="form-control me-2" name='task' placeholder="add task here..."/>
              <button className="btn btn-success" type="submit">Add</button>
           </form>
       </div>
     </div>
    )
}

export default TodoList;