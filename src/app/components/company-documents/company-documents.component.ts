import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import { addCompanyDocument } from './actions/add-company-document.action';
import { updateCompanyDocument } from './actions/update-company-document.action';
import { ICompanyDocument } from './models/company-document.interface';
import { hasCompanyDocuments } from './selectors/company-documents.selector';
import { CompanyDocumentsService } from './services/company-documents.service';

@Component({
  selector: 'app-company-documents',
  templateUrl: './company-documents.component.html',
  styleUrls: ['./company-documents.component.scss']
})
export class CompanyDocumentsComponent implements OnInit {

  documents$: Observable<ICompanyDocument[]> = this.store.select((state: any) => state.companyDocuments);

  constructor(
    private store: Store,
    private companyDocumentsService: CompanyDocumentsService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.store.select((state: any) => state.companyDocuments).pipe(
      take(1)
    ).subscribe(
      _response => {
        if (!_response.length) {
          setTimeout(() => {
            this.getDocuments();
          }, 3000);
        }
      }
    );
  }

  getDocuments() {
    this.companyDocumentsService.get() 
    .subscribe(
      _response => {
        _response.map(item => {
          this.store.dispatch(addCompanyDocument({
            document: {
              id: item.id,
              title: item.title,
              description: item.description,
              isRequired: item.isRequired,
              uploaded: item.uploaded,
            }
          }))
        });
      }
    )
  }

  uploadDocument(document: ICompanyDocument) {
    this.store.dispatch(updateCompanyDocument({
      document: {
        ...document,
        uploaded: true
      }
    }))
  }

  voltar() {
    this.router.navigate(['']);
  }

  checkIfRequiredDocumentWasUpdated(documents: ICompanyDocument[]) {
    
  }

}
