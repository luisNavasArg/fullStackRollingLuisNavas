import MyItem from "./MyItem"
const MyList =({list})=>{
    return(
        <ul>
            {list.map((item,i)=><MyItem key={`${i}item`} text={item}/> )}
        </ul>
    )
}
export default MyList