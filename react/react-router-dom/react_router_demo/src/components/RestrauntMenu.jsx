import {Link, useParams}  from 'react-router-dom'

export const RestaurantMenu =()=>{
    const  params = useParams();
    const {id} = params;
    return(
        <div>
            <Link to="/restaurant/8">
            <h1>Restaurant id: {id}</h1>
            <h1>Namaste</h1>
            </Link>
        </div>
    )
}