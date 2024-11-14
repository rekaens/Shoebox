import React from "react";

import { withBaseLayout } from "../layout/Base";

function Home() {
    return (
        <div className="bg-red-200 h-full justify-items-center p-3">
            <div className="w-2/4 flex justify-around items-center border-2 border-blue-500">
                TODO


            </div>
        </div>
    );
}

export default withBaseLayout(Home);
