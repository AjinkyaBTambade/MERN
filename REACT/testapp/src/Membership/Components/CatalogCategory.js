import { useState } from "react";

const CatalogCategory=()=> {
    const categories=['fruits', 'flowers', 'vegetables'];
    const[selectedCategories, setSelectedCategories]=useState([]);

    const handleCheckboxChange=(e)=>{
        const category=e.target.value;
        setSelectedCategories( prevSelected=>
            prevSelected.includes(category)
            ? prevSelected.filter((item)=>item !==category)
            :[...prevSelected, category]
        )
        console.log(selectedCategories);
    }

    return (
      <div> 
        <p>Category</p>
        {
            categories.map((category)=>(
                <div>
                    <input type="checkbox" value={category}
                     onChange={handleCheckboxChange}/> {category}
                </div>
            ))
        }
        <div>
            <ul>
                {selectedCategories.map((category)=>(
                    <li key={category} >{category}</li>
                ))}
            </ul>
        </div>
        </div>
    );
  }
export default CatalogCategory;
  
