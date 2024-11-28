import React from "react";
import AdressCard from "../AdressCard/AdressCard";
import OrderTraker from "./OrderTraker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarBorderIcon from "@mui/icons-material/StarBorder";
const OrderDetails = () => {
  return (
    <div className="px:5 lg:px-20">
      <div>
        <h1 className="font-bold text-xl py-7">Dilivery Address</h1>
        <AdressCard />
      </div>
      <div className="py-20">
        <OrderTraker activeStep={3} />
      </div>

      <Grid className="space-y-5 "container>
        {[1,1,1,1,1,1].map((item)=><Grid
          item
          container
          className="shadow-xl rounded-md p-5 border"
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Grid item xs={6}>
            <div className="flex items-center space-x-4">
              <img
                className="w-[5rem] h-[5rem] object-cover object-top"
                src="https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-1/463746180_1083398613447443_4403933015147624517_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEj8mg3trsskLB5l3jEEhX_4wg-9NbyyRzjCD701vLJHKtQleAq2h3zfFkELrxyTCuC1Sos46rA0WOXqwjREqo0&_nc_ohc=ob2_a_wNOuEQ7kNvgHx_qY8&_nc_zt=24&_nc_ht=scontent.fhan2-5.fna&_nc_gid=ApyWCmxYeSm29qyaSJMyn3O&oh=00_AYBAbjXB9YNTS3WXeua4UsXtEv5iaJ6TMR8-7i5aWJdB5w&oe=674DB2FA"
                alt=""
              />
              <div className="space-y-2 ml-5">
                <p className="font-semibold">Men Slim Mid Rise Black Jeans</p>
                <p className="space-x-5 opacity-50 text-xs font-semibold">
                  <span>Color: pink</span>
                  <span>Size: M</span>
                </p>
                <p>Seller: linaria</p>
                <p>₹1099</p>
              </div>
            </div>
          </Grid>

          <Grid item>
            <Box sx={{ color: deepPurple[500] }}>
              <StarBorderIcon sx={{ fontSize: "2rem" }} className="px-2" />
              <span>Rate & Review Product</span>
            </Box>
          </Grid>
        </Grid>
        )}
        
      </Grid>
    </div>
  );
};

export default OrderDetails;
