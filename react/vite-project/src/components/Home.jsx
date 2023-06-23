import MyForm from './MyForm'
import MyList from './MyList'
const Home=({list,setList})=>{
    return(
        <div>
            <h1>Mi lista de tareas</h1>
            <MyForm list={list} setList={setList}/>
            <MyList list={list}></MyList>
        </div>
    )

}
export default Home