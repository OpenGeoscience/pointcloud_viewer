import potree from 'potree/build/potree/potree';
import View from 'girder/views/View';

import template from './templates/pc.pug';
import './stylesheets/pc.styl';

const PcView = View.extend({
    render: function () {
        this.$el.html(template());

        window.viewer = new Potree.Viewer(document.getElementById(".g-pc-container"));

        viewer.setEDLEnabled(true);
        viewer.setFOV(60);
        viewer.setPointBudget(1*1000*1000);
        viewer.loadSettingsFromURL();

        viewer.setDescription("Loading Octree of LAS files");

        viewer.loadGUI(() => {
            viewer.setLanguage('en');
            $("#menu_appearance").next().show();
            //viewer.toggleSidebar();
        });

        // Sigeom
        Potree.loadPointCloud(this.model.downloadUrl(), "lidar data", function(e){
            viewer.scene.addPointCloud(e.pointcloud);

            let material = e.pointcloud.material;
            material.size = 1;
            material.pointSizeType = Potree.PointSizeType.ADAPTIVE;

            e.pointcloud.position.x += 3;
            e.pointcloud.position.y -= 3;
            e.pointcloud.position.z += 4;

            viewer.fitToScreen();
        });

        return this;
    },

    destroy: function () {
        // this._map.exit();
        View.prototype.destroy.call(this);
    }
});

export default PcView;
