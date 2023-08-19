ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32615").setExtent([-132891.416131, 1518016.099422, 1217519.779139, 2340794.104843]);
var wms_layers = [];

var format_LTS_COMP_REND_0 = new ol.format.GeoJSON();
var features_LTS_COMP_REND_0 = format_LTS_COMP_REND_0.readFeatures(json_LTS_COMP_REND_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32615'});
var jsonSource_LTS_COMP_REND_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LTS_COMP_REND_0.addFeatures(features_LTS_COMP_REND_0);
var lyr_LTS_COMP_REND_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LTS_COMP_REND_0, 
                style: style_LTS_COMP_REND_0,
                interactive: true,
                title: '<img src="styles/legend/LTS_COMP_REND_0.png" /> LTS_COMP_REND'
            });

lyr_LTS_COMP_REND_0.setVisible(true);
var layersList = [lyr_LTS_COMP_REND_0];
lyr_LTS_COMP_REND_0.set('fieldAliases', {'LOTE_': 'LOTE_', 'Unidad_de': 'Unidad_de', 'ZONA_1': 'ZONA_1', 'RanchoLote': 'RanchoLote', 'REND_2021': 'REND_2021', 'REND_2022': 'REND_2022', 'REND_2023': 'REND_2023', 'REND_2024': 'REND_2024', 'PROM_REND': 'PROM_REND', });
lyr_LTS_COMP_REND_0.set('fieldImages', {'LOTE_': 'TextEdit', 'Unidad_de': 'TextEdit', 'ZONA_1': 'TextEdit', 'RanchoLote': 'TextEdit', 'REND_2021': 'TextEdit', 'REND_2022': 'TextEdit', 'REND_2023': 'TextEdit', 'REND_2024': 'TextEdit', 'PROM_REND': 'TextEdit', });
lyr_LTS_COMP_REND_0.set('fieldLabels', {'LOTE_': 'inline label', 'Unidad_de': 'inline label', 'ZONA_1': 'inline label', 'RanchoLote': 'inline label', 'REND_2021': 'inline label', 'REND_2022': 'inline label', 'REND_2023': 'inline label', 'REND_2024': 'inline label', 'PROM_REND': 'inline label', });
lyr_LTS_COMP_REND_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});