export function Filter(props) {
    const { selectedPrice, setSelectedPrice, selectedSpec, setSelectedSpec } = props

    const prices = ['less than ₹20K', '₹50K - ₹75K', '₹75K - ₹90K', 'more than ₹90K']
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