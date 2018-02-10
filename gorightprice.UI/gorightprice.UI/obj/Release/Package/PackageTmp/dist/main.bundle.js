webpackJsonp([1],{

/***/ 13:
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
var http_1 = __webpack_require__(26);
var Observable_1 = __webpack_require__(2);
var constants_1 = __webpack_require__(58);
__webpack_require__(214);
var lodash_1 = __webpack_require__(19);
__webpack_require__(272);
var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.model = {};
        this.options = new http_1.RequestOptions({
            withCredentials: true
        });
    }
    DataService.prototype.getData = function (paramUrl, searchParam) {
        //   const proxyurl = "https://cors-anywhere.herokuapp.com/";
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Accept', 'application/json');
        headers.append('Access-Control-Allow-Credentials', 'true');
        headers.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        var options;
        if (searchParam) {
            options = lodash_1._.clone(this.options);
            options.search = this.makeSearchParams(searchParam);
        }
        else {
            options = this.options;
        }
        options = new http_1.RequestOptions({
            headers: headers
        });
        return this.http.get(constants_1.context + 'api/' + paramUrl, options)
            .map(function (response) { return response.json(); })
            .toPromise()
            .catch(this.handleError);
    };
    DataService.prototype.getProductData = function (paramUrl, searchParam) {
        // const proxyurl = "https://cors-anywhere.herokuapp.com/";
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Credentials', 'true');
        headers.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        var options;
        if (searchParam) {
            options = lodash_1._.clone(this.options);
            options.search = this.makeSearchParams(searchParam);
        }
        else {
            options = this.options;
        }
        options = new http_1.RequestOptions({
            headers: headers
        });
        return this.http.get(paramUrl, options)
            .map(function (response) { return response.json(); })
            .toPromise()
            .catch(this.handleError);
    };
    DataService.prototype.getTechSpecData = function (paramUrl, searchParam) {
        //  const proxyurl = "https://cors-anywhere.herokuapp.com/";
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Accept', 'application/json');
        headers.append('Access-Control-Allow-Credentials', 'true');
        headers.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        var options;
        if (searchParam) {
            options = lodash_1._.clone(this.options);
            options.search = this.makeSearchParams(searchParam);
        }
        else {
            options = this.options;
        }
        options = new http_1.RequestOptions({
            headers: headers
        });
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
        //  const proxyurl = "https://cors-anywhere.herokuapp.com/";
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Accept', 'application/json');
        headers.append('Access-Control-Allow-Credentials', 'true');
        headers.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        var options = new http_1.RequestOptions({
            headers: headers
        });
        return this.http.get(constants_1.devContext + paramUrl, options)
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
        //  const proxyurl = "https://cors-anywhere.herokuapp.com/";
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
    DataService.prototype.saveEmailSubscription = function (url, param) {
        var proxyurl = "https://cors-anywhere.herokuapp.com/";
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        var options = new http_1.RequestOptions({
            headers: headers
        });
        return this.http.post(proxyurl + url + param, null, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleErrorObservable);
        ;
    };
    DataService.prototype.signUp = function (url, name, email, password) {
        var proxyurl = "https://cors-anywhere.herokuapp.com/";
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(proxyurl + url, { Name: name,
            Email: email,
            Password: password
        }, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleErrorObservable);
    };
    DataService.prototype.handleErrorObservable = function (error) {
        console.error(error.message || error);
        return Observable_1.Observable.throw(error.message || error);
    };
    return DataService;
}());
DataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], DataService);
exports.DataService = DataService;


/***/ }),

/***/ 14:
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
var http_1 = __webpack_require__(26);
__webpack_require__(214);
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

/***/ 229:
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
        template: "\n    <div (mouseenter)=\"pause()\" (mouseleave)=\"play()\" class=\"carousel slide\">\n      <ol class=\"carousel-indicators\" [hidden]=\"slides.length <= 1\">\n         <li *ngFor=\"let slidez of slides\" [class.active]=\"slidez.active === true\" (click)=\"select(slidez)\"></li>\n      </ol>\n      <div class=\"carousel-inner\" ><ng-content></ng-content></div>\n                  <a class=\"left carousel-control1\" (click)=\"prev()\" [hidden]=\"!slides.length\">\n                  <span class=\"glyphicon glyphicon-chevron-left\" s></span>\n                  </a>\n                  <a class=\"right carousel-control1\" (click)=\"next()\" [hidden]=\"!slides.length\">\n                  <span class=\"glyphicon glyphicon-chevron-right\" ></span>\n                 </a>\n    </div>\n  ",
        styleUrls: ['./assets/css/carousel.css']
    })
], carouselComponent);
exports.carouselComponent = carouselComponent;


/***/ }),

/***/ 230:
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
var Observable_1 = __webpack_require__(2);
var data_service_1 = __webpack_require__(13);
var product_service_1 = __webpack_require__(14);
var router_1 = __webpack_require__(6);
// Observable class extensions
__webpack_require__(12);
__webpack_require__(213);
var landingPageComponent = (function () {
    function landingPageComponent(router, dataService, productService) {
        var _this = this;
        this.router = router;
        this.dataService = dataService;
        this.productService = productService;
        this.loading = false;
        this.searchResult = ["test"];
        this.api_url = "https://price-api.datayuge.com/api/v1/compare/search/suggest?api_key=pyB0jLd5lRR02RnRw6YBRlplgBSiVL239jn&product=";
        this.api_subscription_url = "http://api.gorightprice.com/api/Subscription/Subscribe?Email=";
        this.model = {};
        this.responseStatus = [];
        var self = this;
        this.zone = new core_1.NgZone({ enableLongStackTrace: false });
        this.dataSource = Observable_1.Observable.create(function (observer) {
            self.dataService.getObservables(_this.api_url + _this.asyncSelected).subscribe(function (result) {
                _this.searchResult = result.keywords;
                observer.next(_this.searchResult.map(function (a) {
                    return a;
                }));
            });
        });
    }
    // Load data once component is ready
    landingPageComponent.prototype.ngOnInit = function () {
        console.log("name=" + localStorage.getItem('currentUser'));
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
    landingPageComponent.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    landingPageComponent.prototype.onSubmit = function (value) {
        var _this = this;
        this.loading = true;
        //   this.message="hello";
        this.dataService.saveEmailSubscription(this.api_subscription_url, value["email"]).subscribe(function (data) {
            // return true;
            _this.responseStatus = data;
            if (_this.responseStatus[0] == "Exists") {
                _this.message = "User already subscribed";
                _this.loading = false;
                _this.router.navigate(['/']);
            }
            if (_this.responseStatus[0] == "Inserted") {
                _this.model.email = '';
                _this.message = "You are subscribed successfully";
                _this.loading = false;
                _this.router.navigate(['/']);
            }
        }, function (error) {
            _this.loading = false;
            console.error("Error subcribing email!");
            return Observable_1.Observable.throw(error);
        });
    };
    landingPageComponent.prototype.valuechange = function () {
        this.message = '';
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

/***/ 231:
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
__webpack_require__(12);
// import { Router } from '@angular/router';
// import { User } from '../utility/user'; 
var data_service_1 = __webpack_require__(13);
var product_service_1 = __webpack_require__(14);
var pager_service_1 = __webpack_require__(233);
var router_1 = __webpack_require__(6);
var constants_1 = __webpack_require__(58);
var _ = __webpack_require__(19);
var productDetailComponent = (function () {
    function productDetailComponent(router, activatedRoute, dataService, pagerService, productService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.dataService = dataService;
        this.pagerService = pagerService;
        this.productService = productService;
        this.proxyurl = "https://cors-anywhere.herokuapp.com/";
        this.productSearchUrl = "https://price-api.datayuge.com/api/v1/compare/search?product=";
        this.productListUrl = "https://price-api.datayuge.com/api/v1/compare/list?product=";
        this.filterBrandList = new Array();
        this.priceRangeList = new Array();
        this.maxPrice = 0;
        this.minPrice = 0;
        this.selectedMinPrice = 0;
        this.selectedMaxPrice = 0;
        this.activatePriceFilter = false;
        this.showFilterModal = false;
        this.showSortingModal = false;
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
        // this.selectedItem = productService.selectedItem;
        this.sortfilterOptions = exports.SortfilterOptions;
        this.sortfilterSelected = "1";
        this.pageLoaded = false;
    }
    // Load data once component is ready
    productDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.selectedItem = params.value;
            _this.getProductList();
        });
    };
    productDetailComponent.prototype.getProductList = function () {
        var _this = this;
        var self = this;
        this.productSearchUrl = this.productSearchUrl + this.selectedItem + constants_1.apiKey;
        this.dataService.getProductData(this.productSearchUrl).then(function (data) {
            _this.productList = _this.fullProductList = data.data;
            _this.fullbrandFilters = _this.brandFilters = data.meta.filters[1].brand;
            _this.minPrice = _this.selectedMinPrice = data.meta.filters[0].price.min;
            _this.maxPrice = _this.selectedMaxPrice = data.meta.filters[0].price.max;
            _this.priceRange = [0, _this.maxPrice];
            _this.calculatePriceRange();
            console.log("in price is " + _this.priceRange);
            self.someRange2config.range = {
                min: _this.minPrice,
                max: _this.maxPrice
            };
            // this.someRange2config.limit=this.minPrice;
            _this.setPage(1);
        });
    };
    productDetailComponent.prototype.getFilteredItems = function (url) {
        var _this = this;
        // let tempProductUrl=this.productSearchUrl + "&filter=brand:"+"erd"+"&price_start="+1000+"&price_end="+50000;
        this.dataService.getProductData(url).then(function (data) {
            _this.productList = data.data;
            console.log(_this.productList);
            _this.setPage(1);
            _this.filterproductList();
        }).catch(function (e) {
            _this.productList = [];
            _this.setPage(1);
            _this.filterproductList();
            console.log(e);
        });
    };
    productDetailComponent.prototype.clearPrice = function () {
        this.priceRange = [this.minPrice, this.maxPrice];
        this.selectedMinPrice = this.minPrice;
        this.selectedMaxPrice = this.maxPrice;
        this.filterPrice();
    };
    productDetailComponent.prototype.clearBrand = function () {
        this.filterBrandList = [];
        var tempUrl = this.productSearchUrl + "&price_start=" + this.selectedMinPrice + "&price_end=" + this.selectedMaxPrice;
        this.getFilteredItems(tempUrl);
    };
    productDetailComponent.prototype.calculatePriceRange = function () {
        var length = this.maxPrice - this.minPrice;
        this.priceRangeList = [];
        var sub_len = length / 4;
        var current_start = this.minPrice;
        ;
        for (var i = 0; i < 4; i++) {
            // console.log("smaller range :["+ current_start + ", " + (current_start + sub_len) + "]");
            this.priceRangeList.push({ "min": Math.floor(current_start), "max": Math.floor(current_start + sub_len) });
            current_start += sub_len;
        }
    };
    productDetailComponent.prototype.priceFilterHandler = function (index) {
        this.selectedMinPrice = this.priceRangeList[index].min;
        this.selectedMaxPrice = this.priceRangeList[index].max;
        this.priceRange = [this.selectedMinPrice, this.selectedMaxPrice];
        this.filterPrice();
    };
    productDetailComponent.prototype.sortfilterHandler = function (filter) {
        var _this = this;
        console.log(filter);
        var self = this;
        this.filterName = '';
        this.sortfilterSelected = this.sortfilterOptions.find(function (item) { return item.name == filter; }).id;
        switch (this.sortfilterSelected) {
            case "1":
                self.filterName = 'relevance';
                break;
            case "2":
                this.filterName = 'lowtohigh';
                break;
            case "3":
                this.filterName = "hightolow";
                break;
            case "4":
                self.filterName = "popularity";
                break;
            default:
                self.filterName = "relevance";
                break;
        }
        if (self.filterName == 'relevance')
            self.getFilteredItems(self.updateProductSearchUrl());
        else if (self.filterName == 'popularity') {
            // self.productListUrl = self.productListUrl + this.selectedItem + "&sort=" + filterName + apiKey;
            var templateUrl = this.updateProductSearchUrl();
            this.dataService.getProductData(templateUrl).then(function (data) {
                _this.productList = _this.fullProductList = data.data;
                _this.setPage(1);
            });
        }
        else
            self.filterproductList();
    };
    productDetailComponent.prototype.filterproductList = function () {
        var sortedList;
        if (this.filterName == 'lowtohigh') {
            sortedList = _.sortBy(this.productList, 'product_lowest_price');
            this.productList = sortedList.slice();
            this.setPage(1);
        }
        else if (this.filterName == 'hightolow') {
            sortedList = _.sortBy(this.productList, 'product_lowest_price');
            this.productList = sortedList.slice().reverse();
            this.setPage(1);
        }
    };
    productDetailComponent.prototype.productClickHandler = function (url, productId, lowestPrice) {
        this.productService.productUrl = url;
        this.productService.productId = productId;
        this.productService.productPrice = lowestPrice;
        this.router.navigate(['product-stores', url.replace("https://price-api.datayuge.com/api/v1/compare/", ''), productId]);
        // window.open(url+apiKey,"_blank");
    };
    productDetailComponent.prototype.viewFilterHandler = function (view) {
        console.log(view);
        this.viewSelected = view;
    };
    productDetailComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages + 1) {
            return;
        }
        // get pager object from service
        this.pager = this.pagerService.getPager(this.productList.length, page);
        // get current page of items
        this.pagedItems = this.productList.slice(this.pager.startIndex, this.pager.endIndex + 1);
        this.pageLoaded = true;
    };
    productDetailComponent.prototype.onSliderChange = function (e) {
        console.log(e);
        this.selectedMinPrice = e[0];
        this.selectedMaxPrice = e[1];
        this.filterPrice();
        // this.activatePriceFilter = true;
    };
    productDetailComponent.prototype.filterPrice = function () {
        console.log("inside filter price");
        this.priceRange = [this.selectedMinPrice, this.selectedMaxPrice];
        // this.productList = new FilterPipe().transform(this.fullProductList, this.selectedMinPrice, this.selectedMaxPrice);
        // let tempProductUrl=this.productSearchUrl +"&price_start="+this.selectedMinPrice+"&price_end="+this.selectedMaxPrice;
        this.getFilteredItems(this.updateProductSearchUrl());
        // this.setPage(1);
        this.activatePriceFilter = false;
    };
    productDetailComponent.prototype.checkedBrandNew = function (e, event) {
        // let tempUrl=this.productSearchUrl;
        if (event.target.checked) {
            this.filterBrandList.push('brand:' + e.name);
        }
        else {
            var index = this.filterBrandList.indexOf('brand:' + e.name);
            if (index > -1) {
                this.filterBrandList.splice(index, 1);
            }
        }
        this.getFilteredItems(this.updateProductSearchUrl());
    };
    productDetailComponent.prototype.updateProductSearchUrl = function () {
        var tempUrl = this.productSearchUrl;
        if (this.filterBrandList.length > 0)
            tempUrl = tempUrl + "&filter=" + this.filterBrandList.join('|').toLowerCase() + "&price_start=" + this.selectedMinPrice + "&price_end=" + this.selectedMaxPrice;
        else
            tempUrl = tempUrl + "&price_start=" + this.selectedMinPrice + "&price_end=" + this.selectedMaxPrice;
        // this.filterproductList();
        if (this.filterName == 'popularity' || this.filterName == 'relevance') {
            tempUrl = tempUrl + "&sort=" + this.filterName;
        }
        return tempUrl;
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
    productDetailComponent.prototype.filterClickHandler = function () {
        console.log("filter call");
        this.showFilterModal = true;
    };
    productDetailComponent.prototype.sortFilterClickHandler = function () {
        this.showSortingModal = true;
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
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, data_service_1.DataService, pager_service_1.PagerService, product_service_1.ProductService])
], productDetailComponent);
exports.productDetailComponent = productDetailComponent;
exports.SortfilterOptions = [{
        "name": "Relevance",
        "id": "1"
    },
    {
        "name": "Price: Low to high",
        "id": "2"
    },
    {
        "name": "Price: High to low",
        "id": "3"
    },
    {
        "name": "Popularity",
        "id": "4"
    }];


/***/ }),

/***/ 232:
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
__webpack_require__(12);
var data_service_1 = __webpack_require__(13);
var product_service_1 = __webpack_require__(14);
var router_1 = __webpack_require__(6);
var constants_1 = __webpack_require__(58);
var _ = __webpack_require__(19);
var productStoresComponent = (function () {
    function productStoresComponent(dataService, activatedRoute, productService) {
        this.dataService = dataService;
        this.activatedRoute = activatedRoute;
        this.productService = productService;
        this.techSpecURL = "https://price-api.datayuge.com/api/v1/compare/specs?id=";
        this.vendorUrl = "https://price-api.datayuge.com/api/v1/compare/";
        this.rowIndex = false;
        this.pageLoaded = false;
    }
    productStoresComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.productURl = params.url;
            //  this.productPrice=params.price;
            _this.productId = params.productId;
            _this.techSpecURL = _this.techSpecURL + _this.productId;
            _this.getProductStoresData(_this.vendorUrl + _this.productURl + constants_1.apiKey);
            _this.lowPrice = _this.productService.productPrice;
        });
    };
    productStoresComponent.prototype.getProductStoresData = function (url) {
        var _this = this;
        var self = this;
        this.dataService.getProductData(url).then(function (data) {
            _this.getTechSpecData(_this.techSpecURL + constants_1.apiKey);
            _this.productStoresData = data.data;
            _this.processPrice();
        });
    };
    productStoresComponent.prototype.processPrice = function () {
        var _this = this;
        var priceList = [];
        this.productStoresData.stores.forEach(function (element) {
            priceList.push(_this.getProductDetails(element).product_price);
        });
        this.lowestPrice = _.min(priceList, function (d) {
            return d ? d : 0;
        });
    };
    productStoresComponent.prototype.getTechSpecData = function (url) {
        var _this = this;
        this.dataService.getTechSpecData(url).then(function (data) {
            _this.productTechSpecData = data.data;
            var specs = _this.generateArray(_this.productTechSpecData)[1];
            _this.subScpecData = _this.generateArray(specs);
            _this.specNames = Object.keys(specs);
            _this.pageLoaded = true;
        });
    };
    productStoresComponent.prototype.getProductDetails = function (obj) {
        if (this.productStoresData.stores.length <= 1)
            return obj;
        else
            return Object.keys(obj)[0] ? obj[Object.keys(obj)[0]] : obj[0];
    };
    productStoresComponent.prototype.generateArray = function (obj) {
        return Object.keys(obj).map(function (key) { return obj[key]; });
    };
    productStoresComponent.prototype.getRating = function (rating) {
        return 20 * parseFloat(rating) + '%';
    };
    productStoresComponent.prototype.getRatingTooltip = function (rating) {
        if (rating)
            return "Rated " + rating + " out of 5";
        else
            return "Rating not available";
    };
    productStoresComponent.prototype.onNavigate = function (url) {
        window.open(url, "_blank");
    };
    productStoresComponent.prototype.clicked = function (event) {
        var target = event.target || event.srcElement || event.currentTarget;
        var idAttr = target.attributes.id;
        var value = idAttr.nodeValue;
        window.open();
    };
    productStoresComponent.prototype.getImageData = function () {
        if (this.productStoresData.product_images && this.productStoresData.product_images.length == 0)
            return this.productStoresData.product_images[0] = ('../assets/img/no-photo.jpg');
        else
            return this.productStoresData.product_images ? this.productStoresData.product_images : this.productStoresData.product_image;
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
    __metadata("design:paramtypes", [data_service_1.DataService, router_1.ActivatedRoute, product_service_1.ProductService])
], productStoresComponent);
exports.productStoresComponent = productStoresComponent;


/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _ = __webpack_require__(19);
var PagerService = (function () {
    function PagerService() {
    }
    PagerService.prototype.getPager = function (totalItems, currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 12; }
        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);
        var startPage, endPage;
        if (totalPages <= 9) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 9;
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

/***/ 237:
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
var platform_browser_1 = __webpack_require__(15);
var forms_1 = __webpack_require__(5);
var http_1 = __webpack_require__(26);
// Ng-bootstrap module
var ng2_bootstrap_1 = __webpack_require__(247);
var ng2_nouislider_1 = __webpack_require__(263);
// Declarations
var app_component_1 = __webpack_require__(308);
var landing_page_component_1 = __webpack_require__(230);
var product_detail_component_1 = __webpack_require__(231);
var header_component_1 = __webpack_require__(312);
var product_list_component_1 = __webpack_require__(313);
var product_stores_component_1 = __webpack_require__(232);
var account_component_1 = __webpack_require__(310);
var alert_component_1 = __webpack_require__(311);
// import { HomeComponent }            from '../pages/home/home.component';
var data_service_1 = __webpack_require__(13);
var alert_service_1 = __webpack_require__(57);
var sessionStorage_service_1 = __webpack_require__(317);
// import { UserService, UserResolve, DashboardInfoResolve }  from '../service/user.service';
var route_guard_service_1 = __webpack_require__(316);
var product_service_1 = __webpack_require__(14);
var pager_service_1 = __webpack_require__(233);
var app_routes_1 = __webpack_require__(309);
var filterPipe_1 = __webpack_require__(320);
var searchPipe_1 = __webpack_require__(322);
var keysPipe_1 = __webpack_require__(321);
var CapitalisePipe_1 = __webpack_require__(318);
var carousel_component_1 = __webpack_require__(229);
var slide_component_1 = __webpack_require__(315);
var drodown_component_1 = __webpack_require__(319);
var product_store_image_component_1 = __webpack_require__(314);
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
            account_component_1.accountComponent,
            carousel_component_1.carouselComponent,
            slide_component_1.slideComponent,
            keysPipe_1.KeysPipe,
            drodown_component_1.DropdownComponent,
            alert_component_1.alertComponent,
            product_store_image_component_1.productStoreImageComponent,
            CapitalisePipe_1.CapitalizePipe
            // HomeComponent
        ],
        providers: [
            data_service_1.DataService,
            sessionStorage_service_1.SessionStorageService,
            product_service_1.ProductService,
            pager_service_1.PagerService,
            alert_service_1.AlertService,
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

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
  * Created by rt on 04/04/2017.
 */
__webpack_require__(238);
__webpack_require__(236);
var platform_browser_dynamic_1 = __webpack_require__(235);
var app_module_1 = __webpack_require__(237);
var core_1 = __webpack_require__(1);
core_1.enableProdMode();
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ }),

/***/ 308:
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
        var headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
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
    AppComponent.prototype.scrolltoTop = function () {
        window.scrollTo(0, 0);
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

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__(6);
var product_detail_component_1 = __webpack_require__(231);
var landing_page_component_1 = __webpack_require__(230);
var product_stores_component_1 = __webpack_require__(232);
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
        path: 'product-stores/:url/:productId', component: product_stores_component_1.productStoresComponent
    },
    { path: 'landingPage', component: landing_page_component_1.landingPageComponent },
    { path: 'register', component: landing_page_component_1.landingPageComponent },
    { path: 'productdetail', component: product_detail_component_1.productDetailComponent },
    {
        path: '**', redirectTo: ''
    },
];
exports.routing = router_1.RouterModule.forRoot(exports.routes, { useHash: true });


/***/ }),

/***/ 310:
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
var router_1 = __webpack_require__(6);
var data_service_1 = __webpack_require__(13);
var alert_service_1 = __webpack_require__(57);
// Observable class extensions
__webpack_require__(12);
__webpack_require__(213);
var accountComponent = (function () {
    function accountComponent(router, dataService, alertService) {
        this.router = router;
        this.dataService = dataService;
        this.alertService = alertService;
        this.model = {};
        this.api_account_url = "http://api.gorightprice.com/api/AccountController/SignUp";
        this.responseStatus = [];
    }
    // Load data once component is ready
    accountComponent.prototype.ngOnInit = function () {
    };
    accountComponent.prototype.closeModal = function () {
        this.closeBtn.nativeElement.click();
    };
    accountComponent.prototype.onSignUp = function () {
        var _this = this;
        //  this.loading = true;
        console.log(this.model.name1);
        this.dataService.signUp(this.api_account_url, this.model.name1, this.model.email1, this.model.password1).subscribe(function (data) {
            // return true;
            _this.responseStatus = data;
            if (_this.responseStatus[0] == "Exists") {
                alert();
                console.log("Email already registered");
                _this.closeModal();
                _this.router.navigate(['/']);
            }
            if (_this.responseStatus[0] == "Inserted") {
                localStorage.setItem('currentUser', _this.model.name1);
                console.log("Registration successful");
                //   this.alertService.success('Registration successful', true);
                _this.closeModal();
                _this.router.navigate(['/']);
            }
        }, function (error) {
            console.error("Error adding user !");
            // return Observable.throw(error);
        });
    };
    return accountComponent;
}());
__decorate([
    core_1.ViewChild('closeBtn'),
    __metadata("design:type", core_1.ElementRef)
], accountComponent.prototype, "closeBtn", void 0);
accountComponent = __decorate([
    core_1.Component({
        selector: 'account-login',
        templateUrl: "partials/account.html",
        styleUrls: ['./assets/css/account.css']
    })
    // App Component class
    ,
    __metadata("design:paramtypes", [router_1.Router, data_service_1.DataService, alert_service_1.AlertService])
], accountComponent);
exports.accountComponent = accountComponent;


/***/ }),

/***/ 311:
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
var alert_service_1 = __webpack_require__(57);
var alertComponent = (function () {
    function alertComponent(alertService) {
        this.alertService = alertService;
    }
    alertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.getMessage().subscribe(function (message) { _this.message = message; });
    };
    return alertComponent;
}());
alertComponent = __decorate([
    core_1.Component({
        selector: 'alert',
        templateUrl: "partials/alert.html",
    }),
    __metadata("design:paramtypes", [alert_service_1.AlertService])
], alertComponent);
exports.alertComponent = alertComponent;


/***/ }),

/***/ 312:
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
var router_1 = __webpack_require__(6);
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

/***/ 313:
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
__webpack_require__(12);
var product_service_1 = __webpack_require__(14);
var router_1 = __webpack_require__(6);
var productListComponent = (function () {
    function productListComponent(router, productService) {
        this.router = router;
        this.productService = productService;
        this.isImageloaded = false;
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
    productListComponent.prototype.isLoaded = function () {
        this.isImageloaded = true;
    };
    productListComponent.prototype.productClickHandler = function (url, productId, lowestPrice) {
        console.log("iside product handler");
        console.log(url);
        this.productService.productUrl = url;
        this.productService.productId = productId;
        this.productService.productPrice = lowestPrice;
        this.router.navigate(['product-stores', url.replace("https://price-api.datayuge.com/api/v1/compare/", ''), productId]);
        // window.open(url+apiKey,"_blank");
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
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], productListComponent.prototype, "pagedItems", void 0);
productListComponent = __decorate([
    core_1.Component({
        selector: 'product-list',
        templateUrl: "partials/product-list.html",
        styleUrls: ['./assets/css/product-details.css']
    })
    // App Component class
    ,
    __metadata("design:paramtypes", [router_1.Router, product_service_1.ProductService])
], productListComponent);
exports.productListComponent = productListComponent;


/***/ }),

/***/ 314:
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
__webpack_require__(12);
var data_service_1 = __webpack_require__(13);
var product_service_1 = __webpack_require__(14);
var router_1 = __webpack_require__(6);
var productStoreImageComponent = (function () {
    function productStoreImageComponent(dataService, activatedRoute, productService) {
        this.dataService = dataService;
        this.activatedRoute = activatedRoute;
        this.productService = productService;
    }
    productStoreImageComponent.prototype.ngOnInit = function () {
        if (!(this.imageData instanceof Array)) {
            this.imageData = [this.imageData];
        }
        this.parentImageSrc = this.imageData[0];
    };
    productStoreImageComponent.prototype.updateImagesrc = function (item) {
        this.parentImageSrc = item;
    };
    return productStoreImageComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], productStoreImageComponent.prototype, "imageData", void 0);
productStoreImageComponent = __decorate([
    core_1.Component({
        selector: 'product-store-image',
        templateUrl: "partials/product-store-image.html",
        styleUrls: ['./assets/css/product-store-image.css']
    })
    // App Component class
    ,
    __metadata("design:paramtypes", [data_service_1.DataService, router_1.ActivatedRoute, product_service_1.ProductService])
], productStoreImageComponent);
exports.productStoreImageComponent = productStoreImageComponent;


/***/ }),

/***/ 315:
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
var carousel_component_1 = __webpack_require__(229);
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
        template: "\n    <div [class.active]=\"active\" class=\"item text-center\">\n      <ng-content></ng-content>\n    </div>\n  ",
        styleUrls: ['./assets/css/carousel.css']
    }),
    __metadata("design:paramtypes", [carousel_component_1.carouselComponent])
], slideComponent);
exports.slideComponent = slideComponent;


/***/ }),

/***/ 316:
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
var router_1 = __webpack_require__(6);
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

/***/ 317:
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

/***/ 318:
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
var CapitalizePipe = (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (value) {
        if (value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
        return value;
    };
    return CapitalizePipe;
}());
CapitalizePipe = __decorate([
    core_1.Pipe({ name: 'capitalize' })
], CapitalizePipe);
exports.CapitalizePipe = CapitalizePipe;


/***/ }),

/***/ 319:
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
var DropdownComponent = (function () {
    function DropdownComponent() {
        this.select = new core_1.EventEmitter();
    }
    return DropdownComponent;
}());
DropdownComponent = __decorate([
    core_1.Component({
        selector: 'drop-down',
        template: "<label class=\"drop-down-label\">{{labelName}}</label>\n    <select #sel (change)=\"select.emit(sel.value)\" class={{className}}>\n    <option *ngFor=\"let item of items;let i=index;\" class=\"custom-option\" [selected]=\"item.id==initialValue\">{{item.name}}</option>\n    </select>",
        styleUrls: ['../assets/css/drop-down.component.css'],
        inputs: ['items', 'labelName', 'className', 'initialValue'],
        outputs: ['select']
    })
], DropdownComponent);
exports.DropdownComponent = DropdownComponent;


/***/ }),

/***/ 320:
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

/***/ 321:
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

/***/ 322:
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

/***/ 57:
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
var router_1 = __webpack_require__(6);
var Subject_1 = __webpack_require__(11);
var AlertService = (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new Subject_1.Subject();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationStart) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    return AlertService;
}());
AlertService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router])
], AlertService);
exports.AlertService = AlertService;


/***/ }),

/***/ 58:
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

},[307]);