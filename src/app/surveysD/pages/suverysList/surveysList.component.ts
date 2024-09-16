import { ChangeDetectionStrategy, ChangeDetectorRef, Component, computed, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SurveysService } from '../../services/surveys.service';
import { CommonModule } from '@angular/common';
import * as SimpleDatatables from 'simple-datatables';
import { SurveyResponse } from '../../interfaces/suervey-response.interface';

@Component({
  selector: 'app-surveys',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './surveysList.component.html'
})
export default class SurveysComponent {

  private surveysService = inject(SurveysService);

  private dataTable: SimpleDatatables.DataTable | undefined;
  public tableData: SurveyResponse[] = [];

  ngOnInit(): void {
    this.surveysService.surveyList().subscribe(data => {
      this.tableData = (data as SurveyResponse[]);
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initializeDataTable();
    }, 1000);

  }

  ngOnDestroy(): void {
    if (this.dataTable) {
      this.dataTable.destroy();
    }
  }

  private initializeDataTable(): void {
    const tableElement = document.getElementById('pagination-table') as HTMLTableElement;

    if (tableElement && typeof SimpleDatatables !== 'undefined') {
      this.dataTable = new SimpleDatatables.DataTable(tableElement, {
        paging: true,
        perPage: 5,
        perPageSelect: [5, 10, 15, 20, 25],
        sortable: false,
      });
    }
  }

  editItem(id: number) {
    // Lógica para editar el elemento
    console.log(`Editar el ID: ${id}`);
  }

}
