require([
	"esri/Map",
	"esri/views/MapView",
	"esri/layers/FeatureLayer"
], function(Map, MapView, FeatureLayer) {

	var map = new Map({
		basemap: "gray"
	});

	//*************************添加图层*************************************
	// Trailheads Point feature layer
	var featureLayer01 = new FeatureLayer({
		url: "http://sampleserver6.arcgisonline.com/arcgis/rest/services/SampleWorldCities/MapServer/0"
	});
	// Trailheads Line feature layer
	var featureLayer02 = new FeatureLayer({
		url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/Earthquakes_Since1970/FeatureServer/0"
	});


	document.getElementById("AddPoint").addEventListener("click", function() {
		map.add(featureLayer01);
	});

	document.getElementById("AddLine").addEventListener("click", function() {
		map.add(featureLayer02);
	});



	//*************************添加地图到视图*************************************
	var view = new MapView({
		container: "viewDiv",
		map: map,
		center: [114, 34],
		zoom: 5
	});

	//*************************移除图层*************************************
	document.getElementById("RemovePoint").addEventListener("click", function() {
		view.map.remove(featureLayer01);
	});

	document.getElementById("RemoveLine").addEventListener("click", function() {
		view.map.remove(featureLayer02);
	});


//**********************************************功能：显示地图的比例尺，鼠标等坐标点等**********************************************************
      
      //*** 添加DIV用于显示坐标等信息 ***//
      var coordsWidget = document.createElement("div");
      coordsWidget.id = "coordsWidget";
      coordsWidget.className = "esri-widget esri-component";
      coordsWidget.style.padding = "1px 5px 80px";
      view.ui.add(coordsWidget, "bottom-left");

      //***显示经纬度、比例尺大小和尺度***//
      function showCoordinates(pt) {
        var coords = "经纬度" + pt.latitude.toFixed(3) + " " + pt.longitude.toFixed(3) + 
            " | 比例尺:" + Math.round(view.scale * 1) / 1 +
            " | 缩放等级 " + view.zoom;
        coordsWidget.innerHTML = coords;
      }
      
      //*** 添加事件显示中心的坐标（在视图停止移动之后） ***//
      view.watch(["stationary"], function() {
        showCoordinates(view.center);
      });

      //*** 添加显示鼠标的坐标点***//
      view.on(["pointer-down","pointer-move"], function(evt) {
        showCoordinates(view.toMap({ x: evt.x, y: evt.y }));
      });

});