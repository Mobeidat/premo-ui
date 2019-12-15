(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["documentation20"],{ed0a:function(a,n,e){"use strict";e.r(n);var s=function(){var a=this,n=a.$createElement,e=a._self._c||n;return e("div",{staticClass:"maz-dialog-doc"},[e("ComponentContainer",{attrs:{code:a.codeExample}},[e("div",{staticClass:"flex"},[e("MazBtn",{staticClass:"mr-2",on:{click:function(n){a.hasDialogOpen=!0}}},[a._v(" Open Basic Dialog ")]),e("MazDialog",{model:{value:a.hasDialogOpen,callback:function(n){a.hasDialogOpen=n},expression:"hasDialogOpen"}},[e("div",{attrs:{slot:"title"},slot:"title"},[a._v(" Basic Dialog ")]),a._v(" Dialog Content Basic ")]),e("MazBtn",{staticClass:"mr-2",attrs:{type:"success"},on:{click:function(n){a.hasDialogOpenSuccess=!0}}},[a._v(" Open Success Dialog ")]),e("MazDialog",{attrs:{success:""},model:{value:a.hasDialogOpenSuccess,callback:function(n){a.hasDialogOpenSuccess=n},expression:"hasDialogOpenSuccess"}},[e("div",{attrs:{slot:"title"},slot:"title"},[a._v(" Success Dialog ")]),a._v(" Dialog Content Success ")]),e("MazBtn",{attrs:{type:"danger"},on:{click:function(n){a.hasDialogOpenDanger=!0}}},[a._v(" Open Danger Dialog ")]),e("MazDialog",{attrs:{danger:""},model:{value:a.hasDialogOpenDanger,callback:function(n){a.hasDialogOpenDanger=n},expression:"hasDialogOpenDanger"}},[e("div",{attrs:{slot:"title"},slot:"title"},[a._v(" Danger Dialog ")]),a._v(" Dialog Content Danger ")])],1)])],1)},l=[],t={name:"MazDialogDoc",data:function(){return{hasDialogOpen:!1,hasDialogOpenDanger:!1,hasDialogOpenSuccess:!1,codeExample:'<template>\n  <MazBtn\n    class="mr-2"\n    @click="hasDialogOpen = true"\n  >\n    Open Basic Dialog\n  </MazBtn>\n  <MazDialog\n    v-model="hasDialogOpen"\n  >\n    <div slot="title">\n      Basic Dialog\n    </div>\n    Dialog Content Basic\n  </MazDialog>\n  <MazBtn\n    type="success"\n    class="mr-2"\n    @click="hasDialogOpenSuccess = true"\n  >\n    Open Success Dialog\n  </MazBtn>\n  <MazDialog\n    v-model="hasDialogOpenSuccess"\n    success\n  >\n    <div slot="title">\n      Success Dialog\n    </div>\n    Dialog Content Success\n  </MazDialog>\n  <MazBtn\n    type="danger"\n    @click="hasDialogOpenDanger = true"\n  >\n    Open Danger Dialog\n  </MazBtn>\n  <MazDialog\n    v-model="hasDialogOpenDanger"\n    danger\n  >\n    <div slot="title">\n      Danger Dialog\n    </div>\n    Dialog Content Danger\n  </MazDialog>\n</template>\n\nexport default {\n  data () {\n    return {\n      hasDialogOpen: false,\n      hasDialogOpenDanger: false,\n      hasDialogOpenSuccess: false\n    }\n  }\n}'}}},i=t,o=e("2877"),c=Object(o["a"])(i,s,l,!1,null,null,null);n["default"]=c.exports}}]);
//# sourceMappingURL=documentation20.82d940c7.js.map