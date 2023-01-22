"use strict";
(() => {
var exports = {};
exports.id = 221;
exports.ids = [221];
exports.modules = {

/***/ 4966:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(834);

const allProducts = async (req, res)=>{
    const db = new _database__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z();
    const allEntries = await db.getAll();
    const lenght = allEntries.length;
    res.status(200).json({
        data: allEntries,
        lenght
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (allProducts);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [834], () => (__webpack_exec__(4966)));
module.exports = __webpack_exports__;

})();