webpackJsonp([0],{

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(14)
/* script */
var __vue_script__ = __webpack_require__(59)
/* template */
var __vue_template__ = __webpack_require__(60)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/IndexComponent.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-754b2df6", Component.options)
  } else {
    hotAPI.reload("data-v-754b2df6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      posts: []
    };
  },
  created: function created() {
    var _this = this;

    var uri = 'http://vuelaravelcrud.test/api/posts';
    this.axios.get(uri).then(function (response) {
      _this.posts = response.data.data;
    });
  },

  methods: {
    deletePost: function deletePost(id) {
      var _this2 = this;

      var uri = 'http://vuelaravelcrud.test/api/post/delete/' + id;
      this.axios.delete(uri).then(function (response) {
        _this2.posts.splice(_this2.posts.indexOf(id), 1);
      });
    }
  }
});

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("h1", [_vm._v("Posts")]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-10" }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-md-2" },
        [
          _c(
            "router-link",
            {
              staticClass: "btn btn-primary",
              attrs: { to: { name: "create" } }
            },
            [_vm._v("Create Post")]
          )
        ],
        1
      )
    ]),
    _c("br"),
    _vm._v(" "),
    _c("table", { staticClass: "table table-hover" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "tbody",
        _vm._l(_vm.posts, function(post) {
          return _c("tr", { key: post.id }, [
            _c("td", [_vm._v(_vm._s(post.id))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(post.title))]),
            _vm._v(" "),
            _c("td", [_vm._v(_vm._s(post.body))]),
            _vm._v(" "),
            _c(
              "td",
              [
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-primary",
                    attrs: { to: { name: "edit", params: { id: post.id } } }
                  },
                  [_vm._v("Edit")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("td", [
              _c(
                "button",
                {
                  staticClass: "btn btn-danger",
                  on: {
                    click: function($event) {
                      _vm.deletePost(post.id)
                    }
                  }
                },
                [_vm._v("Delete")]
              )
            ])
          ])
        })
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("Item Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Item Price")]),
        _vm._v(" "),
        _c("th", [_vm._v("Actions")])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-754b2df6", module.exports)
  }
}

/***/ })

});