function UpdateECharts() {
	document.getElementById('mainECharts').style.visibility = "visible";

	// 基于准备好的dom，初始化echarts实例
	var myChart = echarts.init(document.getElementById('mainECharts'));

	// 指定图表的配置项和数据
	option = {
	  title: {
	    text: '湖北省近十年农产品播种面积',
		subtext: '单位：千公顷',
	  },
	  radar: {
	    // shape: 'circle',
	    indicator: [
	      { name: '2010', max: 8200 ,min: 7600 },
	      { name: '2011', max: 8200 ,min: 7600 },
		  { name: '2012', max: 8200 ,min: 7600 },
		  { name: '2013', max: 8200 ,min: 7600 },
		  { name: '2014', max: 8200 ,min: 7600 },
		  { name: '2015', max: 8200 ,min: 7600 },
		  { name: '2016', max: 8200 ,min: 7600 },
		  { name: '2017', max: 8200 ,min: 7600 },
		  { name: '2018', max: 8200 ,min: 7600 },
		  { name: '2019', max: 8200 ,min: 7600 }
	    ]
	  },
	  series: [
	    {
	      name: '农产品播种面积',
	      type: 'radar',
	      data: [
	        {
	          value: [7997.57, 8009.57, 8078.89, 8106.19, 8112.26, 7952.36, 7843.51, 7956.14, 7952.9, 7815.89],
			},
	      ]
	    }
	  ]
	};

	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
}

function UpdateECharts3() {
	document.getElementById('mainECharts').style.visibility = "visible";

	// 基于准备好的dom，初始化echarts实例
	var myChart = echarts.init(document.getElementById('mainECharts'));
	// 指定图表的配置项和数据
	option = {
	  title: {
	    text: '湖北省近十年粮食人均占有量',
	    subtext: '单位：千克/人',
	    left: 'center'
	  },
	  tooltip: {
	    trigger: 'item'
	  },
	  legend: {
	    orient: 'vertical',
	    left: 'left'
	  },
	  series: [
	    {
	      name: '粮食人均占有量',
	      type: 'pie',
	      radius: '50%',
	      data: [
	        { value: 403, name: '2010' },
	        { value: 419, name: '2011' },
	        { value: 431, name: '2012' },
	        { value: 447, name: '2013' },
			{ value: 458, name: '2014' },
			{ value: 500, name: '2015' },
			{ value: 477, name: '2016' },
			{ value: 483, name: '2017' },
			{ value: 481, name: '2018' },
	        { value: 460, name: '2019' }
	      ],
	      emphasis: {
	        itemStyle: {
	          shadowBlur: 10,
	          shadowOffsetX: 0,
	          shadowColor: 'rgba(0, 0, 0, 0.5)'
	        }
	      }
	    }
	  ]
	};
	


	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
}

function clr() {
	document.getElementById('mainECharts').style.visibility = "hidden";
}
