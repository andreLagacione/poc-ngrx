import { createReducer, on } from "@ngrx/store";
import { addCompanyDocument } from "../actions/add-company-document.action";
import { updateCompanyDocument } from "../actions/update-company-document.action";
import { ICompanyDocument } from "../models/company-document.interface";

const initialState: ICompanyDocument[] = [];

export const companyDocumentReducer = createReducer(
    initialState,
    on(addCompanyDocument, (state, { document }) => ([{
        id: document.id,
        title: document.title,
        description: document.description,
        isRequired: document.isRequired,
        uploaded: document.uploaded,
    }])),
    // on(updateCompanyDocument, (state) => ({
    //     id: state.id,
    //     title: state.title,
    //     description: state.description,
    //     isRequired: state.isRequired,
    //     uploaded: state.uploaded,

    // }))
);