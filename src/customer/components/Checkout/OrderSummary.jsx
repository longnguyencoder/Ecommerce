import React from 'react'
import AdressCard from '../AdressCard/AdressCard'
import CartItems from '../Cart/CartItems'
import { Button } from '@mui/material'

const OrderSummary = () => {
  return (
    <div>
      <div className='p-5 shadow-lg rounded-s-md border'>
            <AdressCard/>
      </div>

      <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
          {[1,1,1,1].map((item)=><CartItems />)}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border">
            <p className="uppercase font-bold opacity-60 pb-4">Price details</p>
            <hr />
            <div className="space-y-3 font-semibold mb-10">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>₹4697</span>
              </div>
              <div className="flex justify-between pt-3 ">
                <span>Discount</span>
                <span className='text-green-600'>-₹4697</span>
              </div>
              <div className="flex justify-between pt-3 ">
                <span>Delivery Charges</span>
                <span className='text-green-600'>Free</span>
              </div>
              
              
              <div className="flex justify-between pt-3 ">
                <span>Total Amount</span>
                <span className='text-green-600'>₹1278</span>
              </div>
            </div>
            <Button className='w-full mt-5 '
                  variant="contained"
                  sx={{ px: "2rem", py: "1rem", bgcolor: "#9155fd" }}
                >
                  CHECKOUT
                </Button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default OrderSummary
