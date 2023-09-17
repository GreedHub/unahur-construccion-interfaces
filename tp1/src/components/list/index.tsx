import { ReactElement } from "react";
import ListItem from "./item";

type ListItemProps<T> = {
    items: T[]
    getter: (item:T)=>string
}

export default function List<T>(props: ListItemProps<T>):ReactElement{

    const { items, getter } = props
    
    return(
        <ul>
            {items.map((item:T,i:number)=><ListItem item={item} getter={getter} key={i}/>)}
        </ul>
    )
}