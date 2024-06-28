import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../../../common/shared/shared.module';
import { PaginationResultModel } from '../../../../../common/models/pagination-result.model';
import { ProductModel } from '../../models/product.model';
import { RequestModel } from '../../../../../common/models/request.model';
import { ProductService } from '../../product.service';
import { SwalService } from '../../../../../common/services/swal.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  result: PaginationResultModel<ProductModel[]> = new PaginationResultModel<ProductModel[]>(); //bu bizim backendden gelen verileri tuttuğumuz modeldir.
  request: RequestModel = new RequestModel();
  pageNumbers: number[] = [];
  product: ProductModel = new ProductModel();

  constructor(
    private _product: ProductService,
    private _swal: SwalService,
    private _toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(pageNumber = 1) {
    this.request.pageNumber = pageNumber;
    this._product.getAll(this.request, res => {
      this.result = res; 
      this.setPageNumbers();
    })
  }

  //bu metodun amacı, sayfalama işlemi yapıldığında sayfa numaralarının güncellenmesi
  setPageNumbers() {
    const startPage = Math.max(1, this.result.pageNumber - 2);
    const endPage = Math.min(this.result.totalPageCount, this.result.pageNumber + 2);
    this.pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
      this.pageNumbers.push(i);
    }
  }

  search(){
    if(this.request.search.length > 3){
      this.getAll(1);
    }
  } 

}
