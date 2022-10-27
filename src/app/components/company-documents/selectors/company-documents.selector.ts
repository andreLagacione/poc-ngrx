import { createFeatureSelector, createSelector, select, Store } from "@ngrx/store";
import { filter, map } from "rxjs";
import { ICompanyDocument } from "../models/company-document.interface";

export interface AppState {
    companyDocuments: ICompanyDocument[];
}

// const feature = createSelector()

export const documents = (state: any) => state.companyDocuments;

export const hasCompanyDocuments = () => createSelector(
    (state: any) => state.companyDocuments,
    document => !!document.length
)