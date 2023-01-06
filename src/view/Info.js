import React from 'react'
import '../style/info.scss'
import CustomerReview from '../component/CustomerReview'
import Sidebar from '../component/Sidebar'
const Info = () => {
    return (
        <div className="info_div">
        <Sidebar/>
           <CustomerReview/>
        </div>
    )
}

export default Info
