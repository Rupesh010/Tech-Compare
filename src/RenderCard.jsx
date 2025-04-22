import { ProductCard } from "./ProductCard";


export default function RenderCard({ item }) {

    return (
        <>

            <div className="product-card">

                <div className="product-details">
                    <h2>{item.title}</h2>
                    <p>{item.ram} | {item.storage} | {item.processor} | {item.display} | Front cam - {item.camera.front} | Rear cam - {item.camera.rear} | {item.battery}</p>
                    <p className="price">
                        <span>₹{item.price}</span>
                    </p>
                </div>
            </div>
        </>
    )
}