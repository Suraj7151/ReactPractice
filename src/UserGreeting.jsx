/* eslint-disable react/prop-types */


function UserGreeting(props){

    if(props.isLoggedIn){
        return <h2>Welcome {props.username}</h2>
    }
    else{
        return <h2>Please login to continue</h2>
    }
}   

export default UserGreeting