export function Tabs(props) {
    const { selectedTab, setSelectedTab } = props

    const tabs = ['Article', 'Comparison', 'Affiliate Link']

    // return (
    //     <>
    //         <div className="tabs">
    //             <button className="tab-button article">Article</button>
    //             <button className="tab-button comparison">Comparison</button>
    //             <button className="tab-button Affiliate-Link">Affiliate Link</button>
    //         </div>
    //     </>
    // )

    return (

        <nav className="tab-container">
            {tabs.map((tab, tabIndex) => {

                return (
                    < button onClick={() => setSelectedTab(tab)}
                        key={tabIndex}
                        className={"tab-button " + (selectedTab == tab ? " tab-selected" : "")}>
                        <h1>
                            {tab}
                        </h1>
                    </button>
                )
            })}
            <hr />
        </nav >

    )

}