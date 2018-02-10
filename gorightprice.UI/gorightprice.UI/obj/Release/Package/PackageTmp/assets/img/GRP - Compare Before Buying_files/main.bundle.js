webpackJsonp([1],{

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var Observable_1 = __webpack_require__(4);
__webpack_require__(33);
// import { Router } from '@angular/router';
// import { User } from '../utility/user'; 
var data_service_1 = __webpack_require__(37);
var product_service_1 = __webpack_require__(38);
var router_1 = __webpack_require__(27);
var landingPageComponent = (function () {
    function landingPageComponent(router, dataService, productService) {
        var _this = this;
        this.router = router;
        this.dataService = dataService;
        this.productService = productService;
        this.searchResult = ["test"];
        this.api_url = "https://price-api.datayuge.com/api/v1/compare/search/suggest?api_key=pyB0jLd5lRR02RnRw6YBRlplgBSiVL239jn&product=";
        var self = this;
        this.zone = new core_1.NgZone({ enableLongStackTrace: false });
        this.dataSource = Observable_1.Observable.create(function (observer) {
            self.dataService.getObservables(_this.api_url + _this.asyncSelected).subscribe(function (result) {
                console.log(result);
                _this.searchResult = result.keywords;
                observer.next(_this.searchResult.map(function (a) {
                    console.log(a);
                    return a;
                }));
            });
        });
    }
    // Load data once component is ready
    landingPageComponent.prototype.ngOnInit = function () {
    };
    landingPageComponent.prototype.changeTypeaheadLoading = function (e) {
        this.typeaheadLoading = e;
    };
    landingPageComponent.prototype.changeTypeaheadNoResults = function (e) {
        this.typeaheadNoResults = e;
    };
    landingPageComponent.prototype.typeaheadOnSelect = function (e) {
        console.log('Selected value: ', e.value);
        this.itemSelected = e.item;
        this.productService.selectedItem = e.item;
        this.router.navigate(['/product-detail', e.item]);
    };
    return landingPageComponent;
}());
landingPageComponent = __decorate([
    core_1.Component({
        selector: 'landing-page',
        templateUrl: "partials/landing-page.html",
        styleUrls: ['./assets/css/landing-page.css']
    })
    // App Component class
    ,
    __metadata("design:paramtypes", [router_1.Router, data_service_1.DataService, product_service_1.ProductService])
], landingPageComponent);
exports.landingPageComponent = landingPageComponent;


/***/ }),

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
__webpack_require__(33);
// import { Router } from '@angular/router';
// import { User } from '../utility/user'; 
var data_service_1 = __webpack_require__(37);
var product_service_1 = __webpack_require__(38);
var pager_service_1 = __webpack_require__(262);
var filterPipe_1 = __webpack_require__(389);
var router_1 = __webpack_require__(27);
var constants_1 = __webpack_require__(75);
var productDetailComponent = (function () {
    function productDetailComponent(router, dataService, pagerService, productService) {
        this.router = router;
        this.dataService = dataService;
        this.pagerService = pagerService;
        this.productService = productService;
        this.productSearchUrl = "https://price-api.datayuge.com/api/v1/compare/search?product=";
        this.filterBrandList = new Array();
        this.maxPrice = 0;
        this.minPrice = 0;
        this.selectedMinPrice = 0;
        this.selectedMaxPrice = 0;
        this.activatePriceFilter = false;
        // apiKey:string="&api_key=pyB0jLd5lRR02RnRw6YBRlplgBSiVL239jn";
        // pager object
        this.pager = {};
        this.priceRange = [];
        this.someRange2config = {
            behaviour: 'drag',
            connect: true,
            step: 0.1,
            // step:0.01,
            // limit: 5, // NOTE: overwritten by [limit]="10"
            range: {
                min: 0,
                max: 20
            }
        };
        var self = this;
        this.viewSelected = 'Grid';
        var selectedItem = productService.selectedItem;
        this.productSearchUrl = this.productSearchUrl + selectedItem + constants_1.apiKey;
        console.log("final url is " + this.productSearchUrl);
    }
    // Load data once component is ready
    productDetailComponent.prototype.ngOnInit = function () {
        this.getProductList();
    };
    productDetailComponent.prototype.getProductList = function () {
        var _this = this;
        var self = this;
        this.dataService.getProductData(this.productSearchUrl).then(function (data) {
            console.log(data);
            _this.productList = _this.fullProductList = data.data;
            _this.fullbrandFilters = _this.brandFilters = data.meta.filters[1].brand;
            _this.minPrice = _this.selectedMinPrice = data.meta.filters[0].price.min;
            _this.maxPrice = _this.selectedMaxPrice = data.meta.filters[0].price.max;
            _this.priceRange = [0, _this.maxPrice];
            console.log("in price is " + _this.priceRange);
            self.someRange2config.range = {
                min: _this.minPrice,
                max: _this.maxPrice
            };
            // this.someRange2config.limit=this.minPrice;
            _this.setPage(1);
        });
    };
    productDetailComponent.prototype.productClickHandler = function (url, productId, lowestPrice) {
        console.log("url is " + url + constants_1.apiKey);
        console.log("product id is " + productId);
        this.productService.productUrl = url;
        this.productService.productId = productId;
        this.productService.productPrice = lowestPrice;
        console.log("lowest is " + lowestPrice);
        this.router.navigate(['product-stores']);
        // window.open(url+apiKey,"_blank");
    };
    productDetailComponent.prototype.viewFilterHandler = function (view) {
        console.log(view);
        this.viewSelected = view;
    };
    productDetailComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.pagerService.getPager(this.productList.length, page);
        // get current page of items
        this.pagedItems = this.productList.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    productDetailComponent.prototype.onSliderChange = function (e) {
        console.log(e);
        this.selectedMinPrice = e[0];
        this.selectedMaxPrice = e[1];
        this.activatePriceFilter = true;
    };
    productDetailComponent.prototype.filterPrice = function () {
        console.log("inside filter price");
        this.productList = new filterPipe_1.FilterPipe().transform(this.fullProductList, this.selectedMinPrice, this.selectedMaxPrice);
        this.setPage(1);
        this.activatePriceFilter = false;
    };
    productDetailComponent.prototype.checkedBrand = function (e, event) {
        var _this = this;
        if (event.target.checked) {
            this.filterBrandList.push(e.name);
            var tempProductList_1 = [];
            var _loop_1 = function (i) {
                this_1.fullProductList.forEach(function (element) {
                    if (element.product_title.includes(_this.filterBrandList[i]))
                        tempProductList_1.push(element);
                });
            };
            var this_1 = this;
            for (var i = 0; i < this.filterBrandList.length; i++) {
                _loop_1(i);
            }
            if (tempProductList_1.length == 0)
                this.productList = this.fullProductList;
            else
                this.productList = tempProductList_1;
        }
        else {
            var index = this.filterBrandList.indexOf(e.name);
            if (index > -1) {
                this.filterBrandList.splice(index, 1);
            }
            var tempProductList_2 = [];
            if (this.filterBrandList.length == 0) {
                tempProductList_2 = this.fullProductList;
            }
            else {
                var _loop_2 = function (i) {
                    this_2.fullProductList.forEach(function (element) {
                        if (element.product_title.includes(_this.filterBrandList[i]))
                            tempProductList_2.push(element);
                    });
                };
                var this_2 = this;
                for (var i = 0; i < this.filterBrandList.length; i++) {
                    _loop_2(i);
                }
            }
            if (tempProductList_2.length == 0)
                this.productList = this.fullProductList;
            else
                this.productList = tempProductList_2;
        }
        this.setPage(1);
    };
    return productDetailComponent;
}());
productDetailComponent = __decorate([
    core_1.Component({
        selector: 'product-detail',
        templateUrl: "partials/product-detail.html",
        styleUrls: ['./assets/css/product-details.css']
    })
    // App Component class
    ,
    __metadata("design:paramtypes", [router_1.Router, data_service_1.DataService, pager_service_1.PagerService, product_service_1.ProductService])
], productDetailComponent);
exports.productDetailComponent = productDetailComponent;


/***/ }),

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
__webpack_require__(33);
// import { Router } from '@angular/router';
// import { User } from '../utility/user'; 
var data_service_1 = __webpack_require__(37);
var product_service_1 = __webpack_require__(38);
var constants_1 = __webpack_require__(75);
var productStoresComponent = (function () {
    function productStoresComponent(dataService, productService) {
        this.dataService = dataService;
        this.productService = productService;
        this.techSpecURL = "https://price-api.datayuge.com/api/v1/compare/specs?id=" + this.productService.productId;
    }
    productStoresComponent.prototype.ngOnInit = function () {
        this.getProductStoresData(this.productService.productUrl + constants_1.apiKey);
        this.getTechSpecData(this.techSpecURL + constants_1.apiKey);
        this.lowestPrice = 200;
        console.log(this.techSpecURL + constants_1.apiKey);
        console.log("lowprice" + this.productService.productPrice);
    };
    productStoresComponent.prototype.getProductStoresData = function (url) {
        var _this = this;
        this.dataService.getProductData(url).then(function (data) {
            console.log(data);
            _this.productStoresData = data.data;
            // console.log(this.generateArray(specs));
        });
    };
    productStoresComponent.prototype.getTechSpecData = function (url) {
        var _this = this;
        this.dataService.getTechSpecData(url).then(function (data) {
            console.log(data);
            _this.productTechSpecData = data.data;
            var specs = _this.generateArray(_this.productTechSpecData)[1];
            _this.subScpecData = _this.generateArray(specs);
            console.log("specs data");
            console.log(_this.subScpecData);
            console.log("specs");
            console.log(specs);
        });
    };
    productStoresComponent.prototype.getProductDetails = function (obj) {
        return Object.keys(obj)[0] ? obj[Object.keys(obj)[0]] : obj[0];
    };
    productStoresComponent.prototype.generateArray = function (obj) {
        return Object.keys(obj).map(function (key) { return obj[key]; });
    };
    return productStoresComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], productStoresComponent.prototype, "itemDetails", void 0);
productStoresComponent = __decorate([
    core_1.Component({
        selector: 'product-stores',
        templateUrl: "partials/product-stores.html",
        styleUrls: ['./assets/css/product-stores.css']
    })
    // App Component class
    ,
    __metadata("design:paramtypes", [data_service_1.DataService, product_service_1.ProductService])
], productStoresComponent);
exports.productStoresComponent = productStoresComponent;


/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__(78);
var PagerService = (function () {
    function PagerService() {
    }
    PagerService.prototype.getPager = function (totalItems, currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 12; }
        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);
        var startPage, endPage;
        if (totalPages <= 12) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 12;
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        var pages = _.range(startPage, endPage + 1);
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    };
    return PagerService;
}());
exports.PagerService = PagerService;


/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
  * Created by rt on 04/04/2017.
 */
__webpack_require__(385);
__webpack_require__(303);
var platform_browser_dynamic_1 = __webpack_require__(267);
var app_module_1 = __webpack_require__(372);
var core_1 = __webpack_require__(1);
core_1.enableProdMode();
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by chengsh on 20/12/2016.
 */
var core_1 = __webpack_require__(1);
var http_1 = __webpack_require__(40);
var constants_1 = __webpack_require__(75);
__webpack_require__(232);
var lodash_1 = __webpack_require__(78);
var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.options = new http_1.RequestOptions({
            withCredentials: true
        });
    }
    DataService.prototype.getData = function (paramUrl, searchParam) {
        var options;
        if (searchParam) {
            options = lodash_1._.clone(this.options);
            options.search = this.makeSearchParams(searchParam);
        }
        else {
            options = this.options;
        }
        return this.http.get(constants_1.context + 'api/' + paramUrl, options)
            .map(function (response) { return response.json(); })
            .toPromise()
            .catch(this.handleError);
    };
    DataService.prototype.getProductData = function (paramUrl, searchParam) {
        var options;
        if (searchParam) {
            options = lodash_1._.clone(this.options);
            options.search = this.makeSearchParams(searchParam);
        }
        else {
            options = this.options;
        }
        return this.http.get(paramUrl, options)
            .map(function (response) { return response.json(); })
            .toPromise()
            .catch(this.handleError);
    };
    DataService.prototype.getTechSpecData = function (paramUrl, searchParam) {
        var options;
        if (searchParam) {
            options = lodash_1._.clone(this.options);
            options.search = this.makeSearchParams(searchParam);
        }
        else {
            options = this.options;
        }
        return this.http.get(paramUrl, options)
            .map(function (response) { return response.json(); })
            .toPromise()
            .catch(this.handleError);
    };
    DataService.prototype.makeSearchParams = function (searchParam) {
        var params = new http_1.URLSearchParams();
        lodash_1._.map(searchParam, function (value, key) {
            params.set(key, value);
        });
        return params;
    };
    DataService.prototype.loadDevData = function (paramUrl) {
        return this.http.get(constants_1.devContext + paramUrl)
            .map(function (response) { return response.json(); })
            .toPromise()
            .catch(this.handleError);
    };
    // Get json file for map data
    DataService.prototype.getFile = function (paramUrl) {
        return this.http.get(constants_1.context + paramUrl, this.options)
            .map(function (response) { return response.json(); })
            .toPromise()
            .catch(this.handleError);
    };
    // Workaround for json() cannot handle csv format
    // d3Csv(paramUrl: string): Promise<any> {
    //     return new Promise((resolve, reject) => {
    //         d3.csv(context + paramUrl, function (error, data) {
    //             if (error) {
    //                 reject(error);
    //             }
    //             resolve(data);
    //         });
    //     });
    // }
    DataService.prototype.handleError = function (error) {
        console.error('An error occurred in LOAD DATA', error);
        return Promise.reject(error.message || error);
    };
    DataService.prototype.getObservables = function (url) {
        return this.http.get(url)
            .map(this.extractData);
    };
    DataService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    //for logging visits for every page
    DataService.prototype.logVisitor = function (url) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' }), options = new http_1.RequestOptions({ headers: headers }), params = {
            "PageName": url
        };
        return this.http.post(constants_1.context + 'api/User', params, options);
    };
    return DataService;
}());
DataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], DataService);
exports.DataService = DataService;


/***/ }),

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by rt on 04/04/2017.
 */
var core_1 = __webpack_require__(1);
var AppComponent = (function () {
    function AppComponent() {
        this.updatedDate = '';
    }
    // Load data once component is ready
    AppComponent.prototype.ngOnInit = function () {
        // this.userService.loginUser()
        //     .then(
        //         user => this.user = user
        //     );
        // this.userService.getDashboardInfo()
        //     .then(
        //         (info) => {
        //             this.updatedDate = moment(info.UpdatedDate).format('MMM YYYY');
        //         }
        //     );
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: "partials/app.html",
        styleUrls: ['./assets/css/style.css', './assets/css/app.css']
    })
    // App Component class
    ,
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;


/***/ }),

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Created by rt on 04/04/2017.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Imports
var core_1 = __webpack_require__(1);
var platform_browser_1 = __webpack_require__(19);
var forms_1 = __webpack_require__(11);
var http_1 = __webpack_require__(40);
// Ng-bootstrap module
var ng2_bootstrap_1 = __webpack_require__(283);
var ng2_nouislider_1 = __webpack_require__(387);
// Declarations
var app_component_1 = __webpack_require__(371);
var landing_page_component_1 = __webpack_require__(259);
var product_detail_component_1 = __webpack_require__(260);
var header_component_1 = __webpack_require__(374);
var product_list_component_1 = __webpack_require__(375);
var product_stores_component_1 = __webpack_require__(261);
// import { HomeComponent }            from '../pages/home/home.component';
var data_service_1 = __webpack_require__(37);
var sessionStorage_service_1 = __webpack_require__(377);
// import { UserService, UserResolve, DashboardInfoResolve }  from '../service/user.service';
var route_guard_service_1 = __webpack_require__(376);
var product_service_1 = __webpack_require__(38);
var pager_service_1 = __webpack_require__(262);
var app_routes_1 = __webpack_require__(373);
var filterPipe_1 = __webpack_require__(389);
var searchPipe_1 = __webpack_require__(390);
var keysPipe_1 = __webpack_require__(393);
var carousel_component_1 = __webpack_require__(391);
var slide_component_1 = __webpack_require__(392);
// Decorator
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            http_1.JsonpModule,
            // ng-bootstrap module
            ng2_bootstrap_1.DropdownModule.forRoot(),
            ng2_bootstrap_1.TooltipModule.forRoot(),
            ng2_bootstrap_1.ModalModule.forRoot(),
            ng2_bootstrap_1.TabsModule.forRoot(),
            ng2_bootstrap_1.TypeaheadModule.forRoot(),
            ng2_nouislider_1.NouisliderModule,
            app_routes_1.routing
        ],
        declarations: [
            app_component_1.AppComponent,
            landing_page_component_1.landingPageComponent,
            product_detail_component_1.productDetailComponent,
            product_list_component_1.productListComponent,
            product_stores_component_1.productStoresComponent,
            header_component_1.headerComponent,
            filterPipe_1.FilterPipe,
            searchPipe_1.SearchPipe,
            carousel_component_1.carouselComponent,
            slide_component_1.slideComponent,
            keysPipe_1.KeysPipe,
        ],
        providers: [
            data_service_1.DataService,
            sessionStorage_service_1.SessionStorageService,
            product_service_1.ProductService,
            pager_service_1.PagerService,
            // UserService,
            //UserResolve,
            //DashboardInfoResolve,
            route_guard_service_1.RouteGuard,
            { provide: 'Window', useValue: window }
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__(27);
var product_detail_component_1 = __webpack_require__(260);
var landing_page_component_1 = __webpack_require__(259);
var product_stores_component_1 = __webpack_require__(261);
// Route Configuration
exports.routes = [
    {
        path: '',
        component: landing_page_component_1.landingPageComponent,
    },
    {
        path: 'product-detail/:value', component: product_detail_component_1.productDetailComponent,
    },
    {
        path: 'product-stores', component: product_stores_component_1.productStoresComponent
    },
    {
        path: '**', redirectTo: ''
    }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes, { useHash: true });


/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
// import { User } from '../utility/user';
// import { UserService } from '../service/user.service';
var router_1 = __webpack_require__(27);
var headerComponent = (function () {
    function headerComponent(router) {
        this.router = router;
    }
    // Load data once component is ready
    headerComponent.prototype.ngOnInit = function () {
    };
    headerComponent.prototype.reload = function () {
        this.router.navigate(['/']);
    };
    return headerComponent;
}());
headerComponent = __decorate([
    core_1.Component({
        selector: 'header-area',
        templateUrl: "partials/header.html",
        styleUrls: ['./assets/css/header.css']
    })
    // App Component class
    ,
    __metadata("design:paramtypes", [router_1.Router])
], headerComponent);
exports.headerComponent = headerComponent;


/***/ }),

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
__webpack_require__(33);
var productListComponent = (function () {
    function productListComponent() {
    }
    productListComponent.prototype.ngOnInit = function () {
    };
    productListComponent.prototype.getRating = function (rating) {
        return 20 * rating + '%';
    };
    productListComponent.prototype.getRatingTooltip = function (rating) {
        if (rating)
            return "Rated " + rating + " out of 5";
        else
            return "Rating not available";
    };
    return productListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], productListComponent.prototype, "itemDetails", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], productListComponent.prototype, "viewSelected", void 0);
productListComponent = __decorate([
    core_1.Component({
        selector: 'product-list',
        templateUrl: "partials/product-list.html",
        styleUrls: ['./assets/css/product-details.css']
    })
    // App Component class
    ,
    __metadata("design:paramtypes", [])
], productListComponent);
exports.productListComponent = productListComponent;


/***/ }),

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by chengsh on 16/01/2017.
 */
var core_1 = __webpack_require__(1);
var router_1 = __webpack_require__(27);
// import { UserService } from './user.service';
var RouteGuard = (function () {
    function RouteGuard(router) {
        this.router = router;
    }
    RouteGuard.prototype.canActivate = function () {
        return new Promise(function (resolve) {
            // this.userService.canAccessProductPage()
            //     .then(canAccess => {
            //         if (!canAccess) {
            //             this.router.navigate(['individual-customer']);
            //         }
            resolve(true);
        });
        // });
    };
    return RouteGuard;
}());
RouteGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router])
], RouteGuard);
exports.RouteGuard = RouteGuard;


/***/ }),

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by chengsh on 16/02/2017.
 */
var core_1 = __webpack_require__(1);
var SessionStorageService = (function () {
    function SessionStorageService() {
    }
    SessionStorageService.prototype.set = function (key, value) {
        var test = 'a';
        if (typeof value == 'string') {
            sessionStorage.setItem(key, value);
        }
        else {
            sessionStorage.setItem(key, JSON.stringify(value));
        }
    };
    SessionStorageService.prototype.get = function (key) {
        var result = sessionStorage.getItem(key);
        return JSON.parse(result);
    };
    return SessionStorageService;
}());
SessionStorageService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], SessionStorageService);
exports.SessionStorageService = SessionStorageService;


/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var http_1 = __webpack_require__(40);
__webpack_require__(232);
var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
        // this.options = new RequestOptions({
        //     withCredentials: true
        // });
    }
    return ProductService;
}());
ProductService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ProductService);
exports.ProductService = ProductService;


/***/ }),

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(265);
module.exports = __webpack_require__(264);


/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
// import { Flyer } from './heroes';
var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (list, minPrice, maxPrice) {
        console.log(maxPrice);
        var filter_list = list;
        if (minPrice) {
            filter_list = filter_list.filter(function (_item) {
                return _item.product_lowest_price >= +minPrice;
            });
        }
        if (maxPrice) {
            filter_list = filter_list.filter(function (_item) {
                return _item.product_lowest_price <= +maxPrice;
            });
        }
        console.log(filter_list);
        return filter_list;
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    core_1.Pipe({ name: 'priceFilter' })
], FilterPipe);
exports.FilterPipe = FilterPipe;


/***/ }),

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var SearchPipe = (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (value, keys, term) {
        if (!term)
            return value;
        return (value || []).filter(function (item) { return keys.split(',').some(function (key) { return item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key]); }); });
    };
    return SearchPipe;
}());
SearchPipe = __decorate([
    core_1.Pipe({
        name: 'search'
    })
], SearchPipe);
exports.SearchPipe = SearchPipe;


/***/ }),

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var Direction;
(function (Direction) {
    Direction[Direction["UNKNOWN"] = 0] = "UNKNOWN";
    Direction[Direction["NEXT"] = 1] = "NEXT";
    Direction[Direction["PREV"] = 2] = "PREV";
})(Direction = exports.Direction || (exports.Direction = {}));
var carouselComponent = (function () {
    function carouselComponent() {
        this.slides = [];
        this.destroyed = false;
    }
    Object.defineProperty(carouselComponent.prototype, "interval", {
        get: function () {
            return this._interval;
        },
        set: function (value) {
            this._interval = value;
            this.restartTimer();
        },
        enumerable: true,
        configurable: true
    });
    carouselComponent.prototype.ngOnDestroy = function () {
        this.destroyed = true;
    };
    carouselComponent.prototype.select = function (nextSlide, direction) {
        if (direction === void 0) { direction = Direction.UNKNOWN; }
        var nextIndex = nextSlide.index;
        if (direction === Direction.UNKNOWN) {
            direction = nextIndex > this.getCurrentIndex() ? Direction.NEXT : Direction.PREV;
        }
        // Prevent this user-triggered transition from occurring if there is already one in progress
        if (nextSlide && nextSlide !== this.currentSlide) {
            this.goNext(nextSlide, direction);
        }
    };
    carouselComponent.prototype.goNext = function (slide, direction) {
        if (this.destroyed) {
            return;
        }
        slide.direction = direction;
        slide.active = true;
        if (this.currentSlide) {
            this.currentSlide.direction = direction;
            this.currentSlide.active = false;
        }
        this.currentSlide = slide;
        // every time you change slides, reset the timer
        this.restartTimer();
    };
    carouselComponent.prototype.getSlideByIndex = function (index) {
        var len = this.slides.length;
        for (var i = 0; i < len; ++i) {
            if (this.slides[i].index === index) {
                return this.slides[i];
            }
        }
    };
    carouselComponent.prototype.getCurrentIndex = function () {
        return !this.currentSlide ? 0 : this.currentSlide.index;
    };
    carouselComponent.prototype.next = function () {
        var newIndex = (this.getCurrentIndex() + 1) % this.slides.length;
        if (newIndex === 0 && this.noWrap) {
            this.pause();
            return;
        }
        return this.select(this.getSlideByIndex(newIndex), Direction.NEXT);
    };
    carouselComponent.prototype.prev = function () {
        var newIndex = this.getCurrentIndex() - 1 < 0 ? this.slides.length - 1 : this.getCurrentIndex() - 1;
        if (this.noWrap && newIndex === this.slides.length - 1) {
            this.pause();
            return;
        }
        return this.select(this.getSlideByIndex(newIndex), Direction.PREV);
    };
    carouselComponent.prototype.restartTimer = function () {
        var _this = this;
        this.resetTimer();
        var interval = +this.interval;
        if (!isNaN(interval) && interval > 0) {
            this.currentInterval = setInterval(function () {
                var nInterval = +_this.interval;
                if (_this.isPlaying && !isNaN(_this.interval) && nInterval > 0 && _this.slides.length) {
                    _this.next();
                }
                else {
                    _this.pause();
                }
            }, interval);
        }
    };
    carouselComponent.prototype.resetTimer = function () {
        if (this.currentInterval) {
            clearInterval(this.currentInterval);
            this.currentInterval = null;
        }
    };
    carouselComponent.prototype.play = function () {
        if (!this.isPlaying) {
            this.isPlaying = true;
            this.restartTimer();
        }
    };
    carouselComponent.prototype.pause = function () {
        if (!this.noPause) {
            this.isPlaying = false;
            this.resetTimer();
        }
    };
    carouselComponent.prototype.addSlide = function (slide) {
        slide.index = this.slides.length;
        this.slides.push(slide);
        if (this.slides.length === 1 || slide.active) {
            this.select(this.slides[this.slides.length - 1]);
            if (this.slides.length === 1) {
                this.play();
            }
        }
        else {
            slide.active = false;
        }
    };
    carouselComponent.prototype.removeSlide = function (slide) {
        this.slides.splice(slide.index, 1);
        if (this.slides.length === 0) {
            this.currentSlide = null;
            return;
        }
        for (var i = 0; i < this.slides.length; i++) {
            this.slides[i].index = i;
        }
    };
    return carouselComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], carouselComponent.prototype, "noWrap", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], carouselComponent.prototype, "noPause", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], carouselComponent.prototype, "noTransition", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], carouselComponent.prototype, "interval", null);
carouselComponent = __decorate([
    core_1.Component({
        selector: 'carousel',
        template: "\n    <div (mouseenter)=\"pause()\" (mouseleave)=\"play()\" class=\"carousel slide\">\n      <ol class=\"carousel-indicators\" [hidden]=\"slides.length <= 1\">\n         <li *ngFor=\"let slidez of slides\" [class.active]=\"slidez.active === true\" (click)=\"select(slidez)\"></li>\n      </ol>\n      <div class=\"carousel-inner\"><ng-content></ng-content></div>\n                  <a class=\"left carousel-control\" (click)=\"prev()\" [hidden]=\"!slides.length\">\n                  <span class=\"glyphicon glyphicon-chevron-left\"></span>\n                  </a>\n                  <a class=\"right carousel-control\" (click)=\"next()\" [hidden]=\"!slides.length\">\n                  <span class=\"glyphicon glyphicon-chevron-right\"></span>\n                 </a>\n    </div>\n  "
    })
], carouselComponent);
exports.carouselComponent = carouselComponent;


/***/ }),

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
var carousel_component_1 = __webpack_require__(391);
var slideComponent = (function () {
    function slideComponent(carousel) {
        this.carousel = carousel;
        this.addClass = true;
    }
    slideComponent.prototype.ngOnInit = function () {
        this.carousel.addSlide(this);
    };
    slideComponent.prototype.ngOnDestroy = function () {
        this.carousel.removeSlide(this);
    };
    return slideComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], slideComponent.prototype, "index", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], slideComponent.prototype, "direction", void 0);
__decorate([
    core_1.HostBinding('class.active'),
    core_1.Input(),
    __metadata("design:type", Boolean)
], slideComponent.prototype, "active", void 0);
__decorate([
    core_1.HostBinding('class.item'),
    core_1.HostBinding('class.carousel-item'),
    __metadata("design:type", Boolean)
], slideComponent.prototype, "addClass", void 0);
slideComponent = __decorate([
    core_1.Component({
        selector: 'slide',
        template: "\n    <div [class.active]=\"active\" class=\"item text-center\">\n      <ng-content></ng-content>\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [carousel_component_1.carouselComponent])
], slideComponent);
exports.slideComponent = slideComponent;


/***/ }),

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(1);
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
var KeysPipe = (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        if (value) {
            // create instance vars to store keys and final output
            var keyArr = Object.keys(value), dataArr_1 = [];
            // loop through the object,
            // pushing values to the return array
            keyArr.forEach(function (key) {
                dataArr_1.push(value[key]);
            });
            // return the resulting array
            return dataArr_1;
        }
    };
    return KeysPipe;
}());
KeysPipe = __decorate([
    core_1.Pipe({ name: 'keys' })
], KeysPipe);
exports.KeysPipe = KeysPipe;


/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by chengsh on 19/12/2016.
 */
exports.devContext = "sample_json_data/"; //for local build
exports.context = "http://analyticsdev.dev.cba/CorporateCards/"; //for dev build
// export var context="http://analytics.staging.cba/CorporateCards/";	//for staging build
//export var context="";														//for prod build
exports.apiKey = "&api_key=pyB0jLd5lRR02RnRw6YBRlplgBSiVL239jn";
exports.momentDateFormatStr = 'DD MMM YYYY';
exports.momentMonthFormatStr = 'MMM YYYY';
exports.pipeMonthFormatStr = 'MMM y';
exports.techSpecDetail = "https://price-api.datayuge.com/api/v1/compare/specs?id=";


/***/ })

},[386]);