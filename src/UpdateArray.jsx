import { useState } from "react";


function UpdateArray(){

    const [foods, setFoods] = useState(["Apple", "Orange","Banana"]);

    function handleAddFood(){
        const newFood = document.getElementById("food-input").value;
        document.getElementById("food-input").value="";

        setFoods(f => [...f, newFood]);
    }

    function handleRemoveFood(index){
        setFoods(foods.filter((_, i) => i !== index));

    }

    return (
        <div>
            <h2>List of Foods</h2>
            <ul>
                {foods.map((food, index) => <li key={index} onClick={() =>handleRemoveFood(index)}>{food}</li>)}
            </ul>
            <input type="text" id="food-input" placeholder="Enter Food Name"/>
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    )
}

export default UpdateArray