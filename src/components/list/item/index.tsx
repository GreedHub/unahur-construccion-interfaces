import { ReactElement, useState } from "react";

type ListItemProps = {
    item: any
    getter: (item:any)=>string
}

export default function ListItem(props: ListItemProps):ReactElement{
    
    const {getter,item} = props

    const [value] = useState<string>(getter(item))
    
    return(
        <li>{value}</li>
    )
}