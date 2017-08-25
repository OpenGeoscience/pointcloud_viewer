import 'geojs/geo.ext';  //required to bring in hammer & d3
import geojs from 'geojs';
import View from 'girder/views/View';

import template from './templates/geojsView.pug';
import './stylesheets/geojsView.styl';

const GeoJsView = View.extend({
    render: function () {
        this.$el.html(template());
        this.$('.g-geojs-map-overlay-topleft').text(this.model.name());

        this._map = geojs.map({
            node: this.$('.g-geojs-map-container'),
            center: {
                x: -98,
                y: 39
            },
            zoom: 3
        });
        this._map.createLayer('osm');

        var layer = this._map.createLayer('feature');
        var reader = geojs.createFileReader('jsonReader', {'layer': layer});

        reader.read(this.model.downloadUrl());
        this._map.draw();

        return this;
    },

    destroy: function () {
        // TODO zach: do I need to do anything to clean up the map?
        View.prototype.destroy.call(this);
    }
});

export default GeoJsView;
