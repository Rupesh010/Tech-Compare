import vivot2 from './assets/Images/vivot2.jpg';


export function ProductCard() {

    // async function componentDidMount() {
    //     let url = 'https://api.techspecs.io/v5/products'
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     console.log(parsedData);
    //     console.log("working...");
    // }
    fetch("https://api.techspecs.io/v5/products", {
        method: "GET",
        headers: {
            "X-API-ID": "68049ee9f80ae5c79b48694a",
            "X-API-KEY": "be80e442-0633-4cdf-85f4-0e4444ae79f3",
        },
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));


    return (
        <div className="product-card">
            <img src={vivot2} alt="Product Image" />
            <div className='product-details'>
                <h2>Vivo T2 5G</h2>
                <p>128GB RAM | Gsm Unlocked Phone | Qualcomm SM6375 | Snapdragon 695 5G | 64MP</p>
                <p className="price">
                    <span>₹15999</span>
                </p>
            </div>
        </div>
    )
}