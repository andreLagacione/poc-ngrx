import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { addCompanyDocument } from './actions/add-company-document.action';
import { ICompanyDocument } from './models/company-document.interface';
import { CompanyDocumentsService } from './services/company-documents.service';

@Component({
  selector: 'app-company-documents',
  templateUrl: './company-documents.component.html',
  styleUrls: ['./company-documents.component.scss']
})
export class CompanyDocumentsComponent implements OnInit {

  constructor(
    private store: Store,
    private companyDocumentsService: CompanyDocumentsService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.store.subscribe(
      _response => console.log(_response)
    );

    setTimeout(() => {
      this.store.dispatch(addCompanyDocument({
        document: {
          id: '1',
          title: 'Documento 1',
          description: 'Documento 1',
          isRequired: true,
          uploaded: false,
        }
      }))
    }, 5000);
  }

  getDocuments() {
    
  }

  uploadDocument(document: ICompanyDocument) {
    
  }

  voltar() {
    this.router.navigate(['']);
  }

  checkIfRequiredDocumentWasUpdated(documents: ICompanyDocument[]) {
    
  }

}
