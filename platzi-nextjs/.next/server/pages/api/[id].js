"use strict";
(() => {
var exports = {};
exports.id = 536;
exports.ids = [536];
exports.modules = {

/***/ 1208:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(834);

const getProductById = async (req, res)=>{
    const db = new _database__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z();
    //Se llama ID porque asi creamos el archivo
    const id = req.query.id;
    const entry = await db.getById(id);
    res.status(200).json(entry);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getProductById);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [834], () => (__webpack_exec__(1208)));
module.exports = __webpack_exports__;

})();