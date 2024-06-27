export class PaginationResultModel<T>{
    datas: T;
    pageNumber: number=1;
    pageSize: number;
    isFirstPage: boolean=true;
    isLastPage: boolean=false;
    totalPageCount: number;



}