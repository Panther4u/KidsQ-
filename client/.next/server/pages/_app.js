(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 5857:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9409);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9931);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4515);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(943);
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7195);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _react_oauth_google__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6999);
/* harmony import */ var _react_oauth_google__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_react_oauth_google__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_redux_store__WEBPACK_IMPORTED_MODULE_1__]);
_redux_store__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








if (false) {}
if (false) {}
// stripePromise
const NEXT_PUBLIC_STRIPE_KEY = "pk_test_51NYXCFGndYsQkAEFifIbJH64sZFMDpF7DcLYvUUN2az3VdK1M7qVPo7Z2j9rhunf3Pd0C3aFLENIxFriJWwx1P6a00lQFqaoc6";
const stripePromise = (0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_5__.loadStripe)(NEXT_PUBLIC_STRIPE_KEY);
const NEXT_PUBLIC_GOOGLE_CLIENT_ID = "903081644488-n60j77h2s46n2anpau0p5krrjrpi8aae.apps.googleusercontent.com";
function App({ Component , pageProps  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_oauth_google__WEBPACK_IMPORTED_MODULE_7__.GoogleOAuthProvider, {
        clientId: NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {
            store: _redux_store__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__.Elements, {
                stripe: stripePromise,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    id: "root",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                        ...pageProps
                    })
                })
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3507:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NK": () => (/* binding */ set_coupon),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports couponSlice, get_coupons */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    coupon_info: undefined
};
const couponSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "coupon",
    initialState,
    reducers: {
        set_coupon: (state, { payload  })=>{
            state.coupon_info = payload;
            localStorage.setItem("couponInfo", JSON.stringify(payload));
        },
        get_coupons: (state, { payload  })=>{
            const data = localStorage.getItem("couponInfo");
            if (data) {
                state.coupon_info = JSON.parse(data);
            } else {
                state.coupon_info = undefined;
            }
        }
    }
});
const { set_coupon , get_coupons  } = couponSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (couponSlice.reducer);


/***/ }),

/***/ 1839:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BM": () => (/* binding */ set_shipping),
/* harmony export */   "SZ": () => (/* binding */ set_client_secret),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports orderSlice, get_shipping */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    shipping_info: {},
    stripe_client_secret: ""
};
const orderSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "order",
    initialState,
    reducers: {
        set_shipping: (state, { payload  })=>{
            state.shipping_info = payload;
            localStorage.setItem("shipping_info", JSON.stringify(payload));
        },
        get_shipping: (state, { payload  })=>{
            const data = localStorage.getItem("shipping_info");
            if (data) {
                state.shipping_info = JSON.parse(data);
            } else {
                state.shipping_info = {};
            }
        },
        set_client_secret: (state, { payload  })=>{
            state.stripe_client_secret = payload;
        }
    }
});
const { get_shipping , set_shipping , set_client_secret  } = orderSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (orderSlice.reducer);


/***/ }),

/***/ 4850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bg": () => (/* binding */ handleFilterSidebarClose),
/* harmony export */   "CZ": () => (/* binding */ handleFilterSidebarOpen),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export shopFilterSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    filterSidebar: false
};
const shopFilterSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "shopFilter",
    initialState,
    reducers: {
        handleFilterSidebarOpen: (state, { payload  })=>{
            state.filterSidebar = true;
        },
        handleFilterSidebarClose: (state, { payload  })=>{
            state.filterSidebar = false;
        }
    }
});
const { handleFilterSidebarOpen , handleFilterSidebarClose  } = shopFilterSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shopFilterSlice.reducer);


/***/ }),

/***/ 9409:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_apiSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3478);
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4805);
/* harmony import */ var _features_cartSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4662);
/* harmony import */ var _features_compareSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(513);
/* harmony import */ var _features_productModalSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4225);
/* harmony import */ var _features_shop_filter_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4850);
/* harmony import */ var _features_wishlist_slice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3961);
/* harmony import */ var _features_coupon_couponSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3507);
/* harmony import */ var _features_order_orderSlice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1839);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_apiSlice__WEBPACK_IMPORTED_MODULE_1__, _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_2__, _features_cartSlice__WEBPACK_IMPORTED_MODULE_3__, _features_compareSlice__WEBPACK_IMPORTED_MODULE_4__, _features_wishlist_slice__WEBPACK_IMPORTED_MODULE_7__]);
([_api_apiSlice__WEBPACK_IMPORTED_MODULE_1__, _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_2__, _features_cartSlice__WEBPACK_IMPORTED_MODULE_3__, _features_compareSlice__WEBPACK_IMPORTED_MODULE_4__, _features_wishlist_slice__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
    reducer: {
        [_api_apiSlice__WEBPACK_IMPORTED_MODULE_1__/* .apiSlice.reducerPath */ .g.reducerPath]: _api_apiSlice__WEBPACK_IMPORTED_MODULE_1__/* .apiSlice.reducer */ .g.reducer,
        auth: _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP,
        productModal: _features_productModalSlice__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP,
        shopFilter: _features_shop_filter_slice__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP,
        cart: _features_cartSlice__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP,
        wishlist: _features_wishlist_slice__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP,
        compare: _features_compareSlice__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP,
        coupon: _features_coupon_couponSlice__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .ZP,
        order: _features_order_orderSlice__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(_api_apiSlice__WEBPACK_IMPORTED_MODULE_1__/* .apiSlice.middleware */ .g.middleware)
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8819:
/***/ (() => {



/***/ }),

/***/ 7195:
/***/ (() => {



/***/ }),

/***/ 6999:
/***/ ((module) => {

"use strict";
module.exports = require("@react-oauth/google");

/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 4335:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit/query/react");

/***/ }),

/***/ 4515:
/***/ ((module) => {

"use strict";
module.exports = require("@stripe/react-stripe-js");

/***/ }),

/***/ 943:
/***/ ((module) => {

"use strict";
module.exports = require("@stripe/stripe-js");

/***/ }),

/***/ 9931:
/***/ ((module) => {

"use strict";
module.exports = require("react-modal");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9915:
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ }),

/***/ 3590:
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2590], () => (__webpack_exec__(5857)));
module.exports = __webpack_exports__;

})();