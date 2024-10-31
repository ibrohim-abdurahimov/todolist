import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { FaTrash } from 'react-icons/fa'
import { AiOutlineClear } from "react-icons/ai";
import { FaPlusSquare } from "react-icons/fa";


const Todolist = () => {
    const [text, setText] = useState("")
    const [data, setDate] = useState([])
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!text.trim()) {
            return null
        }
        let date = new Date()
        let newTodo = {
            id: uuidv4(),
            text,
            time: `${date.getHours()}:${date.getMinutes()}`
        }
        setDate([...data, newTodo])
        setText("")
    }
    const handleDelate = (id) => {
        setDate(data.filter(item => item.id !== id))
    }
    const clearTasks = () => {
        setDate([]);
    };
    return (
        <div className='w-[500px] p-3 border border-slate-400 m-auto mt-8 bg-sky-400'>
            <h2 className='text-white text-2xl text-center'>To-Do-List</h2>
            <form className='flex gap-3 mt-3' onSubmit={handleSubmit} action="">
                <input placeholder=' What needs to be done?' value={text} onChange={(e) => setText(e.target.value)} type="text" className='border outline-none w-full rounded-md' />
                {
                    text.trim() && <button className='text-white'><FaPlusSquare /></button>

                }
            </form>
            <div>
                {
                    data?.map((item) => (
                        <div>
                            <div className='py-4 border-b-2 border-yellow-400 flex gap-2 text-white' key={item.id}>
                                <span className='flex-1 text-left'>{item.text}</span>
                                <span>{item.time}</span>
                                <button onClick={() => handleDelate(item.id)}><FaTrash /></button>
                            </div>
                        </div>
                    ))
                }
                <div className='flex justify-center mt-3'> 
                    <button className='flex gap-2 items-center p-2 text-white bg-amber-400 rounded-lg' onClick={clearTasks}>Clear <AiOutlineClear /></button>
                </div>
            </div>
        </div>
    )
}

export default Todolist