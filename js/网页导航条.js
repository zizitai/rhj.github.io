function codeCommentRemove(f) {　
    return f.toString().replace(/^[^\/]+\/\*!?\s?/, '').replace(/\*\/[^\/]+$/, '');
}
var menuHtml = codeCommentRemove(function () {
    /*
		<!-- 网页导航条开始 -->
		<nav id="导航条">
			<table id="导航条table">
				<tbody>
					<tr id="导航栏网站导航">
						<td>
							<strong style="font-size: 20px;">网站导航</strong>
						</td>
						<td>
							<div id="websitelink" style="text-align: left;">
								&nbsp;&nbsp;
								<a href="./index.html">主页</a>
								<a href="./人口.html">湖北省人口</a>
								<a href="./油料.html">湖北省油料</a>
								<a href="./粮食.html">湖北省粮食</a>
								<a href="./图层管理.html">图层管理及经纬度显示</a>
								<a href="./地图交互.html">地图交互</a>
							</div>
						</td>
					</tr>
					<tr id="导航栏友情链接">
						<td>
							<strong style="font-size: 20px;">友情链接</strong>
						</td>
						<td>
							<div id="friendlink" style="text-align: left;">
								&nbsp;&nbsp;
								<a target="_blank" href=https://developers.arcgis.com/javascript/latest/>ArcGIS Developer</a><!-- 在新窗口中打开 target="_blank" -->
								<a target="_blank" href=https://echarts.apache.org/>ECharts</a><!-- 在新窗口中打开 target="_blank" -->
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</nav>
		<!-- 网页导航条结束 -->
    */
});

document.write(menuHtml);