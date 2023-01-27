import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import CartSlick from './CartSlick';
import PackagesDescription from './PackagesDescription';
import TestsIncluded from './TestsIncluded';

const PackagesDetails = () => {
  const packagesDetails = useLoaderData()
  
  // console.log(packagesDetails)
  return (
    <div>
        <PackagesDescription packagesDetails={packagesDetails}></PackagesDescription>
        <TestsIncluded packagesDetails={packagesDetails}></TestsIncluded>
        <CartSlick></CartSlick>
    </div>
  )
}

export default PackagesDetails