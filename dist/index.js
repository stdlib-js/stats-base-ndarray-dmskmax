"use strict";var q=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var n=q(function(p,v){
var d=require('@stdlib/ndarray-base-numel-dimension/dist'),t=require('@stdlib/ndarray-base-stride/dist'),u=require('@stdlib/ndarray-base-offset/dist'),s=require('@stdlib/ndarray-base-data-buffer/dist'),o=require('@stdlib/stats-strided-dmskmax/dist').ndarray;function x(i){var r=i[1],e=i[0];return o(d(e,0),s(e),t(e,0),u(e),s(r),t(r,0),u(r))}v.exports=x
});var f=require("path").join,c=require('@stdlib/utils-try-require/dist'),g=require('@stdlib/assert-is-error/dist'),j=n(),a,m=c(f(__dirname,"./native.js"));g(m)?a=j:a=m;module.exports=a;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
