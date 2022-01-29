
function Reportpage() {
    return (
        <div>
            {/* Reporting section */}
            <section className="section section-header pb-md-5 pt-5">
                <div className="container pt-4 pb-2">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-12 text-center ">
                            <h1 className="display-6 font-weight-bolder mb-2">
                                Real-time event reporting
                            </h1>
                            <p className="lead mb-2 mb-lg-2 lh-3">
                                Report events in real time
                            </p>

                        </div>

                        {/* <div className="row-4">
                                <div className="col-12 col-md-5 justify-content-md-center pe-1 ps-1 ps-md-1">
                                
                                <div  className={style.leftcard_bottom} style={{ paddingTop: 10 }}>
                                
                                </div>
                                </div>
                                <div className="col-12 col-md-7 ps-1 ps-md-0 pe-1 mt-3 mt-md-0">

                                    <ReportingMapDisplay metaDataList={filteredMetaData} />

                                </div>

                            </div> */}


                        <div className="row mt-4">
                            <div className="col-12 col-md-5 justify-content-md-center pe-1 ps-1 ps-md-1">
                                <div>

                                    <div className={style.leftcard_bottom} style={{ paddingTop: 50 }}>
                                        <label className="text-dark display-6 mb-2">Report Events</label>
                                        <br />
                                        {/* {categories && categories.data && [...categories.data].map((category, index) => {
                                                    return <div key={index} className={style.leftcard_cards} style={{ cursor: "pointer" }} onClick={() => sortMetaData(category._id)}>
                                                        <div >{category.title}</div>
                                                        <div className={style.spotter}>

                                                            <div><img src="/arrow.svg" alt="decking"></img></div>
                                                        </div>
                                                    </div>
                                                })} */}
                                        <div className="container">
                                            <p className="lead">
                                                Report crypto events and happpening around Africa in real time.
                                            </p>
                                            <a href="/Report"><button type="button" className="btn btn-lg btn-warning">Report Events</button></a>

                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-7 ps-1 ps-md-0 pe-1 mt-3 mt-md-0">

                                <ReportingMapDisplay metaDataList={filteredMetaData} />

                            </div>
                        </div>
                    </div>



                </div>
            </section>
        </div>
    )
}



export default Reportpage