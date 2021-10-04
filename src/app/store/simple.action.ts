import { createAction, props } from "@ngrx/store";

export const alterar = createAction("alterarrenda",props<{renda:any}>())
export const simular = createAction("simulartotal",props<{parcela:any}>())
