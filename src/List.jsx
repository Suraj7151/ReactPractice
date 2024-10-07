/* eslint-disable react/prop-types */


function List(props){
    

    // fruits.sort((a,b) => a.name.localeCompare(b.name));
    // fruits.sort((a,b) => b.name.localeCompare(a.name));

    // fruits.sort((a,b) => a.calories - b.calories);
    // fruits.sort((a,b) => b.calories - a.calories);

    const category = props.category
    const itemList = props.items;

    const listItems = itemList.map(item => <li key={item.id}>{item.name}: &nbsp; {item.calories}</li>);

    return(<>
        <h2>{category}</h2>
        <ol>{listItems}</ol>
    </>);
}

export default List