import React, { /*useCallback,*/ useState } from "react";
import ToDoTask from "./ToDoTask";
import DoneLogo from '../assets/done.svg';
import ToDoLogo from '../assets/to-do.svg';
import DoneTask from "./DoneTask";


const List = () => {

    const [newTasks, setNewTasks] = useState([{id: 1, name: 'Skillwill'}, {id: 2, name: 'Bitcamp'}])
    const [doneTasks, setDoneTasks] = useState([{id: 99, name: 'Sleep'}, {id: 98, name: 'Eat'}])
    const [inputTask, setInputTask] = useState('')
    
    
    const onChange = (event) => {
        const value = event.target.value
        setInputTask(value)
    }

    const addTask = (event) => {
        event.preventDefault()

        const userInput = {
            id: newTasks.length + 1, 
            name: inputTask
        }

        setNewTasks((prevState) => [...prevState, userInput])
        setInputTask('')
    }



    const moveToDone = (id) => {
        const moveTask = newTasks.filter((task) => task.id === id)
        setDoneTasks((prevState) => [...prevState, moveTask[0]])

        setNewTasks((prevState) => prevState.filter((task) => task.id !== id))

        // console.log(moveTask)
        // console.log(doneTasks)
    }
    
    const moveToDo = (id) => {
        const moveTask = doneTasks.filter((task) => task.id === id)
        setNewTasks((prevState) => [...prevState, moveTask[0]])

        setDoneTasks((prevState) => prevState.filter((task) => task.id !== id))
    }

    const removeTask = (id) => {
        setDoneTasks((prevState) => prevState.filter((doneTask) => doneTask.id !== id))
        console.log('remove',id)
    }

    // const moveToDone = useCallback((id) => {
    //     const moveTask = newTasks.filter((task) => task.id === id)
    //     setDoneTasks((prevState) => [...prevState, moveTask[0]])

    //     setNewTasks((prevState) => prevState.filter((task) => task.id !== id))
    // }, [])

    // const moveToDo = useCallback((id) => {
    //     const moveTask = doneTasks.filter((task) => task.id === id)
    //     setNewTasks((prevState) => [...prevState, moveTask[0]])

    //     setDoneTasks((prevState) => prevState.filter((task) => task.id !== id))
    // }, [doneTasks])

    // const removeTask = useCallback((id) => {
    //     setDoneTasks((prevState) => prevState.filter((doneTask) => doneTask.id !== id))
    //     console.log('remove',id)
    // }, [])

    console.log(doneTasks)
    return (
        <div className="background">
            <div className="users">
                <div className="form">
                    <form className="user-form" onSubmit={addTask}>
                        <input type="text" onChange={onChange} value={inputTask} placeholder="e.g. Do Homework" />
                        <button type="submit">Add Task</button>
                    </form>
                </div>

                <div className="lists">
                    <div className="section">
                        <div className="image">
                            <img src={ToDoLogo} alt='text' />
                        </div>
                        {newTasks.map((newTask) => (
                            <ToDoTask 
                            key={newTask.id} 
                            id={newTask.id} 
                            name={newTask.name} 
                            button={"Done"} 
                            action={moveToDone} 
                            />
                        ))}
                    </div>

                    <div className="section">
                        <div className="image">
                            <img src={DoneLogo} alt='text' />
                        </div>
                        {doneTasks.map((doneTask) => (
                            <DoneTask 
                            key={doneTask.id} 
                            id={doneTask.id} 
                            name={doneTask.name} 
                            buttonOne={"Remove"} 
                            buttonTwo={"To Do"} 
                            actionOne={removeTask} 
                            actionTwo={moveToDo} 
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default List