import React from "react";

function toggleCard() {
    console.log("Hello");
}

export default function ShoeCard() {
    const smallCard = true;

    return (
        <div className="collapse bg-base-200 w-1/3 md:w-3/4 shadow-xl mt-2 mb-2">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium p-0">
                <div className="card card-compact card-side bg-base-100 h-24">
                    <figure>
                        <div className="avatar">
                            <div className="w-24">
                                <img src="https://www.hypeneedz.com/cdn/shop/files/AirJordan1HighTravisScott.jpg?v=1701717752" />
                            </div>
                        </div>
                    </figure>
                    <div className="card card-body">
                        <h2 className="card-title">Air Jordan 1 High Travis Scott</h2>
                        <p>
                            Der Travis Scott x Air Jordan 1 Retro High verleiht der ikonischen Silhouette dank eines ...
                        </p>
                        {/* <div className="card-actions justify-end">
                            <button className="btn btn-sm btn-outline btn-success">Edit</button>
                            <button className="btn btn-sm btn-outline btn-error">Delete</button>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="collapse-content w-full">
                <div className="stats shadow w-full ">
                    <div className="stat place-items-center">
                        <div className="stat-title">Total Sold</div>
                        <div className="stat-value">31K</div>
                        <div className="stat-desc">From January 1st to February 1st</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title">Price</div>
                        <div className="stat-value text-secondary">$1,999.00</div>
                        <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title">StockX</div>
                        <div className="stat-actions">
                            <button className="btn btn-sm">Open StockX</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
