import React from "react";
import {HomeServicesContainer} from "../../containers/HomeServicesContainer/"
export const HomeServicesScreen = ()=>{
  const configTextField = {label:{title:""}}
  return(
    <HomeServicesContainer configTextField={configTextField}/>
  )
}