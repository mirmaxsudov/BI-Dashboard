"use client"

import Monthly from "./Monthly";
import Quarterly from "./Quarterly";
import Annual from "./Annual";

const ReportCpt = () => {
    return (<>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Monthly />
            <Quarterly />
            <Annual />
        </div>
    </>)
}

export default ReportCpt;