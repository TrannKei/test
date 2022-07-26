import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
function App() {
  const [name, setName] = useState('')

  const [data, setData] = useState([{}])
  useEffect(() => {
    async function getDataAPI() {
      const getData = await fetch('https://dummyjson.com/todos')
        .then(res => res.json())
        .then(data => {
          data.todos.map((item) => {
            // item.time = time;
            // item.date = date;
            item.removed = false
            item.completed = false
            item.disabled = true
            item.isEdit = false
            item.addOn =[{title:"54"},{title:"54"},{title:"54"},{title:"54"},{title:"54"}]
            return item
          }
          )
          setData(data.todos)

        })
      // .then(()=>{

      // })


    }
    getDataAPI()

  }, [])
  // const [input, setInput] = useState([{}])
  // data[1].addOn = {title:"haw"}
  // console.log(data[1]);
  console.log(data);
  return (
    <>
      {data.map((item)=>{
        {item.addOn.map((ele)=>{
          <p>{ele.title}</p>
        })}
      })}
    </>
  );
}

export default App;
