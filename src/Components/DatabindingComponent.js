export default function DataBindingComponent(){
 
    var products = [
        {Name: "Winter Jacket", Price: 45000.44, Photo: "images.jpg"},
        {Name: "Nike Casuals", Price: 6000.44, Photo: "shoe.jpg"},
        {Name: "Speaker", Price:5200.44, Photo:"speaker.png"}
    ];

    return(
        <div className="container-fluid mt-2">
            <h2>Products Table</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Preview</th>
                        <th colSpan="2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product=>
                             <tr key={product.Name}>
                                <td>{product.Name}</td>
                                <td>{product.Price}</td>
                                <td>
                                    <img src={product.Photo} width="100" height="100" />
                                </td>
                                <td>
                                    <button className="btn btn-outline-info">
                                        <span className="bi bi-pen-fill"></span>
                                    </button>
                                </td>
                                <td>
                                    <button className="btn btn-outline-danger">
                                        <span className="bi bi-trash-fill"></span>
                                    </button>
                                </td>
                             </tr>
                            )
                    }
                </tbody>
            </table>
        </div>
    )
}