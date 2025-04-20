import React,{useState} from "react";
import { CATEGORIES } from "../data";

function NewTaskForm({onTaskFormSubmit}) {
  const distCategories = CATEGORIES.slice(1)
  const [details,setDetails] = useState("")
  const [category,setCategory]= useState("Code")

  function handleSelect(event){
     setCategory(event.target.value)
  }

  function handleDetails(event){
    setDetails(event.target.value)
 }

 function handleSubmit(e){
  e.preventDefault()

   const newTask = {
    text : details,
    category : category,
   }

   onTaskFormSubmit(newTask)
   setDetails("")
   setCategory("Code")
 }
  
  return (
    <form 
    className="new-task-form" 
    onSubmit={handleSubmit}
    >
      <label>
        Details
        <input 
        type="text" 
        name="text"
        value={details}
        onChange={handleDetails}
        />
      </label>
      <label>
        Category
        <select 
        name="category"
        value={category}
        onChange={handleSelect}
        >
          {distCategories.map((category)=>(
            <option key={category}>{category}</option>
          ))}
        </select>
      </label>
      <input 
      type="submit" 
      value="Add task" />
    </form>
  );
}

export default NewTaskForm;
