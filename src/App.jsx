const Children = (props) =>{
  return(
      <div className="">
          <h1>{props.titulo}</h1>
          {props.children}
      </div> 
      
  )
}
/*   const Children = ({titulo, children}) =>{
  return(
      <div className="">
          <h1>{titulo}</h1>
          {children}
      </div> 
      
  )
} asi tambien funciona, es la forma destructurada */

const App = () =>{
  return(
    <>
      <Children titulo={"Este es un titulo"}>
        <p>Esto es un children..</p>
        <p>Esto es un children x2..</p>
      </Children>
    </>  
  )
}

export default App;