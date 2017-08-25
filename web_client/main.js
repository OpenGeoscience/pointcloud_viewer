import _ from 'underscore';
import FileListWidget from 'girder/views/widgets/FileListWidget';
import { wrap } from 'girder/utilities/PluginUtils';

import PcView from './PcView';
import viewButtonTemplate from './templates/viewButton.pug';

wrap(FileListWidget, 'render', function (render) {
    render.call(this);

    this.$el.prepend($('<div>', {class: 'g-pc-container'}));

    _.each(this.$('.g-file-list-link'), (link) => {
        const file = this.collection.get($(link).attr('cid'));
        if (file.get('mimeType') === 'text/plain' || _.contains(file.get('exts'), 'las')) {
            $(link).after(viewButtonTemplate({cid: file.cid}));
        }
    });

    this.$('.g-view-with-pc').tooltip();

    return this;
});

FileListWidget.prototype.events['click .g-view-with-pc'] = function (e) {
    const file = this.collection.get($(e.currentTarget).attr('file-cid'));

    if (this.pcView) {
        this.pcView.destroy();
    }

    this.pcView = new PcView({
        parentView: this,
        el: this.$('.g-pc-container'),
        model: file
    }).render();
};
