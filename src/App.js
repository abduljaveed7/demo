import Headers from "./Header"
let numbers=[{
  age:25,
  name:"javeed",
  place:"pedana",
  company:"ibm"
},
{
  age:26,
  name:"abdul",
  place:"mtm",
  company:"ey"
}]

function App() {
  return (
    numbers.map((number)=>{
      return <Headers  key={number.company} Age={number.age} name={number.name} place={number.place} company={number.company} />
     
    })
   
  )
}
  



  




export default App
