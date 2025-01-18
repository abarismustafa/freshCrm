import React from "react";
import OrderDetailSum from "./orderdetailsum";
import OrderDetailList from "./OrderDetailList";

export default function OrderDetail(){
    return(
        <div>
            <OrderDetailSum />
            <OrderDetailList />
         </div>
    )
}