import vivot2 from './assets/Images/vivot2.jpg';


export function ProductCard() {

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