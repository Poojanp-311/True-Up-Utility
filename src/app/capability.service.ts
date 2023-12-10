import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CapabilityService {

  constructor() { }

  capability(){
    return[
      {
      id:1,
      name:"RSP"
    },
    {
      id:2,
      name:"TIBCO"
    },

  ]
  }

  space(){
    return[
      {
      id:1,
      name:"SpringBoot_Ilab02"
    },
    {
      id:1,
      name:"SpringBoot_Plab01"
    },
    {
      id:1,
      name:"SpringBoot_Qlab01"
    },
    {
      id:1,
      name:"SpringBoot_Qlab02"
    },
    {
      id:1,
      name:"SpringBoot_Qlab03"
    },
    {
      id:1,
      name:"SpringBoot_Qlab06"
    },
    {
      id:1,
      name:"SpringBoot_Qlab07"
    },
    {
      id:2,
      name:"TibcoCE_Ilab02"
    },
    {
      id:2,
      name:"TibcoCE_Plab01"
    },
    {
      id:2,
      name:"TibcoCE_Qlab01"
    },
    {
      id:2,
      name:"TibcoCE_Qlab02"
    },
    {
      id:2,
      name:"TibcoCE_Qlab03"
    },
    {
      id:2,
      name:"TibcoCE_Qlab06"
    },
    {
      id:2,
      name:"TibcoCE_Qlab07"
    },


  ]
  }




}
