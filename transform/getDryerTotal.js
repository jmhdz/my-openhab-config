var returnValue = null
JSON.parse(input).data.devices.forEach(function(element, index, array) {
    if (element.id == 'ZWayVDev_4:0:50:0') {
        returnValue = element.metrics.level;
    }});
returnValue;