import { createReducer, on } from "@ngrx/store";
import { alterar } from "../store/simple.action"
import { simular } from "../store/simple.action"

const _simpleReducer=createReducer (0,on (alterar,(state, action)=>(state=action.renda)))
export function simpleReducer(state: any, action: any){

  return _simpleReducer(state,action)
  }
  const _simpleReducer2=createReducer (0,on (simular,(state, action)=>(state=action.parcela)))
export function simpleReducer2(state: any, action: any){

  return _simpleReducer2(state,action)
  }

