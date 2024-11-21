import { IconButton,Button } from '@mui/material'
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
const CartItems = () => {
  return (
    <div className='p-5 shadow-lg border rounded-md'>
      
        <div className='flex items-center'>

            <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                <img className='w-full h-full object-cover object-top'
                src="https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-1/450519748_1953801395089656_3918132296723739587_n.jpg?stp=dst-jpg_s200x200&_nc_cat=102&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeGMC4JqPYtDXgrZjDrhXhgDLpJFFc5Dr30ukkUVzkOvfWVnT9LlDet9NF4XjiOEs6NCnLweE3t31B8SjibLunjS&_nc_ohc=eAC6qSayiqcQ7kNvgFwVPYB&_nc_zt=24&_nc_ht=scontent.fhan20-1.fna&_nc_gid=Ason6buvBLmrzEJmw-Dut-W&oh=00_AYBBOEnQHMpRy1-csdy0G0Sj0i4FFlku8SGBdtmI2sDlwA&oe=674523E2" alt="" />
            </div>

            <div className='ml-5 space-y-1'>

                <p className='font-semibold'>Men slim quần áo Nam</p>
                <p className='opacity-70'>Sile:L ,White</p>
                <p className='opacity-70 mt-2'>Seller: Crish fasshion </p>
                <div className="flex space-x-5 items-center  text-gray-900 pt-6 ">
                <p className="font-semibold">$199</p>
                <p className="opacity-50 line-through">$211</p>
                <p className="text-green-600 font-semibold">5% off</p>
              </div>
            </div>

           

        </div>
        <div className='lg:flex items-center lg:space-x-10 pt-4'>

                <div className="flex items-center space-x-2">
                    <IconButton>
                    <RemoveCircleOutlineIcon/>
                    </IconButton>
                    <span className='py-1 px-7 border rounded-sm'>3</span>
                    <IconButton sx={{color:"RGB(145 85 253)"}}>
                    <AddCircleOutlineIcon/>
                    </IconButton>
                   
                    
                </div>
                <div>
                    <Button sx={{color:"RGB(145 85 253)"}}>Remove</Button>
                </div>

            </div>


    </div>
  )
}

export default CartItems
