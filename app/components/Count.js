import react,{ useEffect, useState } from 'react'

export default function Count(){
    const [count,setCount] = useState(0);
    const [todolist,setTodolist] = useState(['test','test2']);
    const [todo,setTodo] = useState("");
    const [lastItem,setLastItem] = useState(0);

    useEffect(()=> {
        localStorage.setItem("todos",todolist);

           setLastItem(todolist.length-1) 
        
    },[todolist]);

   

   
// function addTask(tasks){
//     setTodolist([...todolist,tasks])
// }
function supprTask(removetask){
    setTodolist(todolist.filter(function(tasks,index){
        if(index !== removetask){
            return index
        }
    }))
}

    return(
        <div>
            <p>Vous avez cliquez {count} fois</p>
         <button onClick={()=>setCount(count + 1)}>bouton</button>
            <br/>
            <ul>

            {todolist.map((item,i)=>{
                return(
                    
                    <li style= {{color : i ==  lastItem ? 'red' : 'black'}} key={i}>{item}<span onClick={()=>supprTask(i)}> suppr</span></li>
                   
                    )
                })}
                </ul>
         <input name='task'  value={todo} onInput={e=>setTodo(e.target.value)}></input>
    
        <button onClick={()=>setTodolist(todolist=>[...todolist,todo])}>ajouter</button>
        
        </div>
    )
}