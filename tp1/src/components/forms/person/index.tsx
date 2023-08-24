import { FormEvent, ReactElement, useRef, useState } from "react"
import Person from "src/models/person"

type PersonFormProps = {
    push : (person:Person)=>void
}

export default function PersonForm(props:PersonFormProps): ReactElement{
    const {push} = props

    const [error,setError] = useState<string>('')
    const errorMsg = useRef<HTMLInputElement>(null)

    const showError = (msg:string) => {
        setError(msg)
        const err = errorMsg.current
        
        if(!err) return

        err.classList.add('show')
    }

    const clearError = ()=>{
        setError('')
        const err = errorMsg.current
        
        if(!err) return

        err.classList.remove('show')
    }

    const onFormSubmit = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()

        const { personName, age } = e.currentTarget

        if(!age.value || !personName.value) return
        
        if(age.value < 1) return showError('Age cannot be lower than 1 year')
        
        push(new Person(personName.value,age.value))

        clearError()

        e.currentTarget.personName.value = ''
        e.currentTarget.age.value = ''
    }

    return (
        <form action="" onSubmit={onFormSubmit}>
          
        <div>
            <label htmlFor="personName">Name</label>
            <input type="text" name="personName" id="personName" placeholder="Name" required/>
        </div>

        <div>
            <label htmlFor="age">Age</label>
            <input type="number" name="age" id="age" placeholder="Age" required/>
        </div>

        <small className="error">
            {error}
        </small>

        <input ref={errorMsg} type="submit" value="Add Person" />

        </form>
    )
}