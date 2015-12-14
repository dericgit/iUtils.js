/**
 * Created by leiquan on 15/12/1.
 * @file ajaxJsonp.js
 * @author leiquan<leiquan@baidu.com>
 */

define(function (require, exports, module) {

    var ajax = require('./ajax');

    /**
     * @params String url, Object params, Function successCallback, Function  failCallback
     */
    var ajaxJsonp = function (url, params, successCallback, failCallback) {
        ajax({
            method: "jsonp",
            url: url,
            params: params,
            type: 'text',
            successCallback: successCallback,
            failCallback: failCallback
        });
    }

    module.exports = ajaxJsonp;


});