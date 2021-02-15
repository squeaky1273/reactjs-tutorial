import React from 'react'
import POPOSFeature from './POPOSFeature'
import './POPOSFeatureList.css'

function POPOSFeatureList(props) {
    const icons = props.features.map((feature) => {
    return <POPOSFeature key={feature} name={feature} />
  })
    return <div className="POPOSFeatureList">{icons}</div>
}

// function POPOSDetails(props) {
// return (
//   <div className="POPOSDetails">
//     <div className="POPOSDetails-info">
//       <POPOSFeatureList features={features}/>
//       <p className="POPOSDetails-geo">{ geo.lat } { geo.lon }</p>
//     </div>
//   </div>
// )
// }

export default POPOSFeatureList