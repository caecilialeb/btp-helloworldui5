/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "sap/btp/helloworldui5/model/models",
        "sap/base/Log"
    ],
    function (UIComponent, Device, models, Log) {
        "use strict";

        return UIComponent.extend("sap.btp.helloworldui5.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);
                
Log.info("Hallo das ist eine Info");
Log.debug("das ist eine debug message");
Log.warning("Das ist eine Warnung!");
Log.error("Ups, da ist was schief gelaufen -- ERROR");
Log.fatal("Ein fataler Fehler!");

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");
            }
        });
    }
);