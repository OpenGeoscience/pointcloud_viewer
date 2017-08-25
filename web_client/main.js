import _ from 'underscore';
import FileListWidget from 'girder/views/widgets/FileListWidget';
import { wrap } from 'girder/utilities/PluginUtils';

import GeoJsView from './GeoJsView';
import viewButtonTemplate from './templates/viewButton.pug';

wrap(FileListWidget, 'render', function (render) {
    render.call(this);

    this.$el.prepend($('<div>', {class: 'g-geojs-view-container'}));

    _.each(this.$('.g-file-list-link'), (link) => {
        const file = this.collection.get($(link).attr('cid'));
        if (file.get('mimeType') === 'application/json' || _.contains(file.get('exts'), 'json')) {
            $(link).after(viewButtonTemplate({cid: file.cid}));
        }
    });

    this.$('.g-view-with-geojs').tooltip();

    return this;
});

FileListWidget.prototype.events['click .g-view-with-geojs'] = function (e) {
    const file = this.collection.get($(e.currentTarget).attr('file-cid'));

    if (this.geoJsView) {
        this.geoJsView.destroy();
    }

    this.geoJsView = new GeoJsView({
        parentView: this,
        el: this.$('.g-geojs-view-container'),
        model: file
    }).render();
};
