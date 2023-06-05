

type PropsType = {
    title: string
    list: Array<ListType>
}
type ListType = {
    id: number,
    name: string,
    price: number
}
const itemList = (props:PropsType) => {
    return(
        <div>
            {props.list.map((item)=>{
                return(
                    <div>{item.name} : {item.price}</div>
                )
            })}
        </div>
    )
}

export default itemList;