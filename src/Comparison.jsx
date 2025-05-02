import { Filter } from "./Filter"
import { ProductCard } from "./ProductCard"
import { useState } from "react"

export function Comparison() {

    const [selectedPrice, setSelectedPrice] = useState('less than ₹20,000')
    const [selectedSpec, setSelectedSpec] = useState('General Purpose')


    return (
        <>
            <div className='Comp'>
                <aside className='FilterContainer'>
                    <Filter selectedPrice={selectedPrice} setSelectedPrice={setSelectedPrice} selectedSpec={selectedSpec} setSelectedSpec={setSelectedSpec} />
                </aside >
                <div className='ProductContainer'>
                    <ProductCard selectedPrice={selectedPrice} selectedSpec={selectedSpec} />
                </div>
            </div>
        </>
    )
}