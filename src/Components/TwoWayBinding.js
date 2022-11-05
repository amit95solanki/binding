import { useState } from "react";



export default  function TwoWayBinding(){
    const [product,setProduct]= useState({Name:"Your Product Name", Price:0,City:"Hyd",Stock:true})

    function ChangeName(e){
        setProduct({
            Name:e.target.value,
            Price:product.Price,
            City:product.City,
            Stock:product.Stock
        })
    }
    function ChangePrice(e){
        setProduct({
            Price:e.target.value,
            Name:product.Name,
            City:product.City,
            Stock:product.Stock
        })
    }
    function Changecity(e){
        setProduct({
            City:e.target.value,
            Price:product.Price,
            Name:product.Name,
            Stock:product.Stock
        })
    }
    function  ChangeStock(e){
        setProduct({
            Stock:e.target.checked,
            Price:product.Price,
            City:product.City,
            Name:product.Name
        })
    }

    return(
        <div className="container-fluid mt-2">
            <div className="row">
                <div className="col-3">
                    <h2>Register</h2>
                    <dl>
                        <dt>Name</dt>
                        <dd><input type="text" onChange={ChangeName} className="form-control" value={product.Name} /></dd>
                        <dt>Price</dt>
                        <dd><input type="text" onChange={ChangePrice} className="form-control" value={product.Price} /></dd>
                        <dt>City</dt>
                        <dd>
                            <select onChange={ Changecity} className="form-select" value={product.City}>
                                <option >delhi</option>
                                <option >hyd</option>
                            </select>
                        </dd>
                        <dt>Stock</dt>
                        <dd className="form-switch" ><input onChange={ChangeStock} className="form-check-input" checked={product.Stock} type="checkbox" />Avaiable</dd>
                    </dl>
                </div>
                <div className="col-9">
                    <h2>Product Details</h2>
                    <dl>
                        <dt>Name</dt>
                        <dd>{product.Name}</dd>
                        <dt>Price</dt>
                        <dd>{product.Price}</dd>
                        <dt>City</dt>
                        <dd>{product.City}</dd>
                        <dt>Stock</dt>
                        <dd>{(product.Stock===true)?"Available":"Out of Stock"}</dd>
                    </dl>
                </div>
            </div>
        </div>
    );
}