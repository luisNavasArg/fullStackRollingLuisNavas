import MyForm from './MyForm'
import MyList from './MyList'
const Home=()=>{
    return(
        <div>
            <h1>Mi lista de tareas</h1>
            <MyForm/>
            <MyList></MyList>
        </div>
    )

}
export default Home