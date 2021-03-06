VSS.init({
    explicitNotifyLoaded: true,
    usePlatformStyles: true
});

VSS.require(
    "TFS/Dashboards/WidgetHelpers", function(WidgetHelpers) {
        WidgetHelpers.IncludeWidgetStyles();
        VSS.register("HelloWorldWidget", function () {
            return {
                load: function (widgetSettings) {
                    var $title = $('h2.title');
                    $title.text('Hello World');

                    return WidgetHelpers.WidgetStatusHelper.Success();
                }
            }
        });
        VSS.notifySucceeded();
    }
);