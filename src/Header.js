

 function Headers(props){
    return (<div style={{border: '2px solid blue', width:300, margin:20}} >
        
        <h2>age:{props.Age}</h2>
        <h2>Name:{props.name}</h2>
        <h2>place:{props.place}</h2>
        <p>company:{props.company}</p>
        
       
   </div> )
}
export default Headers


