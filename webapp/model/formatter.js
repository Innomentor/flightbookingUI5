sap.ui.define([], function () {
    "use strict";
    return {
        getStatus: function (value) {
            if (value == "Spicejet"|| value == "Air Asia") {
                return "Completed";

            } else  {
                return "Cancelled";
            }

        },
        getTime: function (hour) {
            suffix = (hour>11) ? "PM" : "AM";
hour = (hour>12) ? hour-=12 : ((hour==0) ? 12 : hour);
        }
    };
});