import { useState } from "react"

export default function Onewaybinding(){
 
    const [username] = useState('AMIT');
    const [product] = useState({Name:"TV", Price:56000.44});
    const [categories] = useState(["Electronics", "Footwear"]);
   
    return(
        <div className="container-fluid mt-2">
            <h1>{username}</h1>
            <dl>
                <dt>Name</dt>
                <dd className="form-control ">{product.Name}</dd>
                <dt>Price</dt>
                <dd className="form-control">{product.Price}</dd>
            </dl>
            <ol>
                {
                    categories.map(category=>
                        <li>{category}</li>
                        )
                }
            </ol>
        </div>
    )
}


// Note : React support "One Way Binding" , Not support "Two Way Binding"