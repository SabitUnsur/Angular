import { createAction } from "@ngrx/store";

export const increment = createAction("[add] incerement")

export const decrement = createAction("[sub] decrement")

export const reset = createAction("[reset] reset")