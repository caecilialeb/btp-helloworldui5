sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/m/MessageToast",
    "sap/base/Log"
],
     /**
      * @param {typeof sap.ui.core.mvc.Controller} Controller
      */
     function (Controller, MessageBox, MessageToast, Log) {
         "use strict";

         return Controller.extend("sap.btp.helloworldui5.controller.View1", {
             onInit: function () {
             },
             onAlertMessageBoxPress: function () {
                //debugger;
                Log.info("Gut gemacht.")
                 MessageBox.alert("Du machst das großartig!");
             }
      });
 });