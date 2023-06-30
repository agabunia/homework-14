import React from "react";

const DoneTask = ({id, name, actionOne, actionTwo, buttonOne, buttonTwo}) => {

    console.log('Render Done-task', id)
    return (
      <div className="task">
         <p className='task-name'> {name} </p>
         <div className="task-bottom">
             <button onClick={() => actionOne(id)}> {buttonOne} </button>
             <button onClick={() => actionTwo(id)}> {buttonTwo} </button>
         </div>
     </div>
    )
}


export default React.memo(DoneTask) 