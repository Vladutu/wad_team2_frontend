import {Component, OnInit, ViewChild} from "@angular/core";
import {ModalComponent} from "ng2-bs3-modal/components/modal";
import {SortDescriptor, orderBy} from "@progress/kendo-data-query";
import {GridDataResult} from "@progress/kendo-angular-grid";
import {Subgroup, ESSubgroup} from "../../model/models";
import {SubgroupService} from "../../service/subgroup.service";
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'wad-subgroup-list',
  templateUrl: './subgroup-list.component.html',
  styleUrls: ['./subgroup-list.component.css']
})
export class SubgroupListComponent implements OnInit {

  @ViewChild('formModal')
  private formModal: ModalComponent;

  private requesting: boolean = false;

  private subgroups: Subgroup[] = [];

  private sort: SortDescriptor[] = [];

  private gridView: GridDataResult;

  private edit: boolean = false;

  private subgroupForm: FormGroup;

  private selected: Subgroup = null;

  constructor(private subgroupService: SubgroupService) {
  }

  ngOnInit() {
    this.loadSubgroupsFromService();
    this.subgroupForm = new FormGroup({
      'name': new FormControl('', [Validators.required])
    });
  }

  onFormSubmit() {
    if (!this.edit) {
      this.saveSubgroup();
    }
    else {
      this.editSubgroup();
    }
  }

  private editSubgroup() {
    this.requesting = true;
    let toBeUpdated: ESSubgroup = new ESSubgroup(this.subgroupForm.value.name);

    this.subgroupService.edit(this.selected.id, toBeUpdated)
      .subscribe((edited: Subgroup)=> {
        this.closeModal();
        this.loadSubgroupsFromService();
        this.edit = false;
      }, error=> {
        console.log(error);
        this.closeModal();
        this.edit = false;
      })
  }

  private saveSubgroup() {
    this.requesting = true;
    let toBeSaved: ESSubgroup = new ESSubgroup(this.subgroupForm.value.name);

    this.subgroupService.save(toBeSaved)
      .subscribe((saved: Subgroup)=> {
        this.closeModal();
        this.loadSubgroupsFromService();
      }, error=> {
        console.log(error);
        this.closeModal();
      });
  }


  private closeModal() {
    this.dismissModal();
    this.formModal.close();
  }

  private dismissModal() {
    this.requesting = false;
    this.subgroupForm.reset();
    this.edit = false;
  }

  private onDelete(subgroup: Subgroup): void {
    this.subgroupService.delete(subgroup.id)
      .subscribe((deleted: Subgroup)=> {
        this.loadSubgroupsFromService();
      }, error=> {
        console.log(error);
      });
    this.loadSubgroupsFromService();
  }

  private onEdit(subgroup: Subgroup): void {
    this.edit = true;
    this.selected = subgroup;
    this.subgroupForm.reset({name: subgroup.name});
    this.formModal.open('md');
  }

  private sortChange(sort: SortDescriptor[]): void {
    this.sort = sort;
    this.loadSubgroupsOnGrid();
  }

  private loadSubgroupsOnGrid(): void {
    this.gridView = {
      data: orderBy(this.subgroups, this.sort),
      total: this.subgroups.length
    };
  }

  private loadSubgroupsFromService(): void {
    this.subgroupService.getAll()
      .subscribe((subgroups: Subgroup[])=> {
          this.subgroups = subgroups;
          this.loadSubgroupsOnGrid();
        },
        error => {
          console.log(error);
        });
  }

}
