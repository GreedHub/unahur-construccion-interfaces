import { FormEvent, ReactElement } from "react"

type PersonFormProps = {
    push : (todo:string)=>void
}

export default function TodoForm(props:PersonFormProps): ReactElement{
    const {push} = props


    const onFormSubmit = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()

        const { task } = e.currentTarget

        if(!task.value) return
        
        push(task.value)

        e.currentTarget.task.value = ''
    }

    return (
        <form action="" onSubmit={onFormSubmit}>
          
        <div>
            <label htmlFor="task">Task</label>
            <input type="text" name="task" id="task" placeholder="Task" required/>
        </div>

        <input type="submit" value="Add Task" />

        </form>
    )
}