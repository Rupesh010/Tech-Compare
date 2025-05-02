export function Filter(props) {
    const { selectedPrice, setSelectedPrice, selectedSpec, setSelectedSpec } = props

    const prices = ['less than ₹20,000', '₹20,000 - ₹50,000', '₹50,000 - ₹75,000', '₹75,000 - ₹90,000', 'more than ₹90,000']
    const specs = ['General Purpose', 'Camera', 'Performance', 'Gaming', 'Clean OS', 'Flagship']


    return (
        <>
            <div className="filter">
                <h3>Price</h3>
                {
                    prices.map((price, priceIndex) => {

                        return (
                            < button onClick={() => setSelectedPrice(price)}
                                key={priceIndex}
                                className={"filter-button " + (selectedPrice == price ? " filter-selected" : "")}>
                                <h1>
                                    {price}
                                </h1>
                            </button>
                        )
                    })
                }

                <h3>Specifications</h3>
                {
                    specs.map((spec, specIndex) => {

                        return (
                            < button onClick={() => setSelectedSpec(spec)}
                                key={specIndex}
                                className={"filter-button " + (selectedSpec == spec ? " filter-selected" : "")}>
                                <h1>
                                    {spec}
                                </h1>
                            </button>
                        )
                    })
                }
            </div>
        </>
    )
}