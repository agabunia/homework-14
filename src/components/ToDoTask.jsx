import React from 'react';

const ToDoTask = ({id, name, action, button}) => {

    console.log('Render ToDo-task', id)
    return (
      <div className="task">
         <p className='task-name'> {name} </p>
         <div className="task-bottom">
           <button onClick={() => action(id)}> {button} </button>
           <p className='task-no'> No: {id} </p>
         </div>
      </div>
    )    
}


export default React.memo(ToDoTask)