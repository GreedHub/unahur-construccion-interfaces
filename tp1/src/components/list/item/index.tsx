import { ReactElement, useState } from "react";

type ListItemProps<T> = {
    item: T
    getter: (item:T)=>string
}

export default function ListItem<T>(props: ListItemProps<T>):ReactElement{
    
    const {getter,item} = props

    const [value] = useState<string>(getter(item))
    
    return(
        <li>{value}</li>
    )
}