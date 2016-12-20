"use strict";
var router_1 = require('@angular/router');
var quote_component_1 = require('./components/pages/quote/quote.component');
var track_component_1 = require('./components/pages/track/track.component');
var appRoutes = [
    {
        path: '',
        component: quote_component_1.QuoteComponent
    },
    {
        path: 'pages/get-a-quote',
        component: quote_component_1.QuoteComponent
    },
    {
        path: 'pages/track-a-shipment',
        component: track_component_1.TrackComponent
    },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map