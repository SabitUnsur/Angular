import { createReducer, on } from "@ngrx/store";
import { increment,decrement,reset } from "./counter.action";

//Takip edilecek statei veriyoruz
export const initialState : number = 0;

export const counterReducer = createReducer(
    initialState,
    on(increment,(state)=>state+1),
    on(decrement,(state)=>state-1),
    on(reset,(state)=>0),
)

//bunu da app.module.ts de import etmeliyiz. StoreModule.forRoot({count:counterReducer}) şeklinde