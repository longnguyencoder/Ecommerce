import { Grid } from '@mui/material';
import React from 'react';
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';
const OrderCart = () => {
  const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className='p-5 shadow-lg shadow-black hover:shadow-2xl border ml-5'>
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            {/* Thêm margin-left vào đây */}
            <img
              className="w-[5rem] h-[5rem] object-cover object-top ml-5"
              src="https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-1/450519748_1953801395089656_3918132296723739587_n.jpg?stp=dst-jpg_s200x200&_nc_cat=102&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeGMC4JqPYtDXgrZjDrhXhgDLpJFFc5Dr30ukkUVzkOvfWVnT9LlDet9NF4XjiOEs6NCnLweE3t31B8SjibLunjS&_nc_ohc=Ilm26m54swUQ7kNvgG6kNAI&_nc_zt=24&_nc_ht=scontent.fhan20-1.fna&_nc_gid=Aw7tkWfgky1JVs1faHD2ftw&oh=00_AYBGz25Ol9DgSIv-h6QuoDaj269RNkhQwocxqi5GAIbvMQ&oe=6749C122"
              alt=""
            />
            <div className="ml-5 space-y-2">
              <p className="">Men slim Mid Ricew</p>
              <p className="opacity-50 text-xs font-semibold">Size: M</p>
              <p className="opacity-50 text-xs font-semibold">Color: black</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
            <p>$1099</p>
        </Grid>
        <Grid item xs={4}>
            {true && <div>
                <p>
               <AdjustIcon  sx={{width:"15px",height:"15px"}} className='text-green-600 mr-2 text-sm'/>
                <span>
                    Delivered On March 03
                </span>
            </p>
            <p className='text-xs'>
                Your Item Has Been Delivered
            </p>
                </div>}
            { false &&<p>
                <span>
                    Expected Delivered On March 03
                </span>
            </p>}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCart;
