//柱形模块

(function () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  // 指定配置和数据
 var data = [{
     "name": "一月",
     "value": 80
 }, {
     "name": "二月",
     "value": 87.8
 }, {
     "name": "三月",
     "value": 71
 }, {
     "name": "四月",
     "value": 80
 }, {
     "name": "五月",
     "value": 66
 }, {
     "name": "六月",
     "value": 80
 }, {
     "name": "七月",
     "value": 80
 }];
 var xData = [],
     yData = [];
 var min = 50; 
 data.map(function(a, b) {
     xData.push(a.name);
     if (a.value === 0) {
         yData.push(a.value + min);
     } else {
         yData.push(a.value);
     }
 });
 option = {
  
     color: ['#3398DB'],
     tooltip: {
         trigger: 'axis',
         axisPointer: {
             type: 'line',
             lineStyle: {
                 opacity: 0
             }
         },
         formatter: function(prams) {
             if (prams[0].data === min) {
                 return "合格率：0%"
             } else {
                 return "合格率：" + prams[0].data + "%"
             }
         }
     },
     legend: {
         data: ['直接访问', '背景'],
         show: false
     },
     grid: {
         left: '0%',
         right: '0%',
         bottom: '5%',
         top: '7%',
         height: '85%',
         containLabel: true,
         z: 22
     },
     xAxis: [{
         type: 'category',
         gridIndex: 0,
         data: xData,
         axisTick: {
             alignWithLabel: true
         },
         axisLine: {
             lineStyle: {
                 color: '#0c3b71'
             }
         },
         axisLabel: {
             show: true,
               textStyle: {
             color: "rgba(255,255,255,.6)",
             fontSize: "12"
           },
              fontSize:16
         }
     }],
     yAxis: [{
             type: 'value',
             gridIndex: 0,
             splitLine: {
                 show: false
             },
             axisTick: {
                 show: false
             },
             min: min,
             max: 100,
             axisLine: {
                 lineStyle: {
                     color: '#0c3b71'
                 }
             },
             axisLabel: {
                 color: 'rgb(170,170,170)',
                 formatter: '{value} %'
             }
         },
         {
             type: 'value',
             gridIndex: 0,
             min: min,
             max: 100,
             splitNumber: 12,
             splitLine: {
                 show: false
             },
             axisLine: {
                 show: false
             },
             axisTick: {
                 show: false
             },
             axisLabel: {
                 show: false
             },
             splitArea: {
                 show: true,
                 areaStyle: {
                     color: ['rgba(250,250,250,0.0)', 'rgba(250,250,250,0.05)']
                 }
             }
         }
     ],
     series: [{
             name: '合格率',
             type: 'bar',
             barWidth: '30%',
             xAxisIndex: 0,
             yAxisIndex: 0,
             itemStyle: {
                 normal: {
                     barBorderRadius: 30,
                     color: new echarts.graphic.LinearGradient(
                         0, 0, 0, 1, [{
                                 offset: 0,
                                 color: '#00feff'
                             },
                             {
                                 offset: 0.5,
                                 color: '#027eff'
                             },
                             {
                                 offset: 1,
                                 color: '#0286ff'
                             }
                         ]
                     )
                 }
             },
             data: yData,
             zlevel: 11
 
         },
         {
             name: '背景',
             type: 'bar',
             barWidth: '50%',
             xAxisIndex: 0,
             yAxisIndex: 1,
             barGap: '-135%',
             data: [100, 100, 100, 100, 100, 100, 100],
             itemStyle: {
                 normal: {
                     color: 'rgba(255,255,255,0.1)'
                 }
             },
             zlevel: 9
         },
       
     ]
 };
  // 把配置给实例对象
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });

  // 数据变化



})();

//散点图模块



(function () { 

  //实例化对象
  var myChart = echarts.init(document.querySelector(".line .chart"));

// Schema:
// date,AQIindex,PM2.5,PM10,CO,NO2,SO2
var dataBJ = [
  [55,9,56,0.46,18,6,1],
  [25,11,21,0.65,34,9,2],
  [56,7,63,0.3,14,5,3],
  [33,7,29,0.33,16,6,4],
  [42,24,44,0.76,40,16,5],
  [82,58,90,1.77,68,33,6],
  [74,49,77,1.46,48,27,7],
  [78,55,80,1.29,59,29,8],
  [267,216,280,4.8,108,64,9],
  [185,127,216,2.52,61,27,10],
  [39,19,38,0.57,31,15,11],
  [41,11,40,0.43,21,7,12],
  [64,38,74,1.04,46,22,13],
  [108,79,120,1.7,75,41,14],
  [108,63,116,1.48,44,26,15],
  [33,6,29,0.34,13,5,16],
  [94,66,110,1.54,62,31,17],
  [186,142,192,3.88,93,79,18],
  [57,31,54,0.96,32,14,19],
  [22,8,17,0.48,23,10,20],
  [39,15,36,0.61,29,13,21],
  [94,69,114,2.08,73,39,22],
  [99,73,110,2.43,76,48,23],
  [31,12,30,0.5,32,16,24],
  [42,27,43,1,53,22,25],
  [154,117,157,3.05,92,58,26],
  [234,185,230,4.09,123,69,27],
  [160,120,186,2.77,91,50,28],
  [134,96,165,2.76,83,41,29],
  [52,24,60,1.03,50,21,30],
  [46,5,49,0.28,10,6,31]
];

var dataGZ = [
  [26,37,27,1.163,27,13,1],
  [85,62,71,1.195,60,8,2],
  [78,38,74,1.363,37,7,3],
  [21,21,36,0.634,40,9,4],
  [41,42,46,0.915,81,13,5],
  [56,52,69,1.067,92,16,6],
  [64,30,28,0.924,51,2,7],
  [55,48,74,1.236,75,26,8],
  [76,85,113,1.237,114,27,9],
  [91,81,104,1.041,56,40,10],
  [84,39,60,0.964,25,11,11],
  [64,51,101,0.862,58,23,12],
  [70,69,120,1.198,65,36,13],
  [77,105,178,2.549,64,16,14],
  [109,68,87,0.996,74,29,15],
  [73,68,97,0.905,51,34,16],
  [54,27,47,0.592,53,12,17],
  [51,61,97,0.811,65,19,18],
  [91,71,121,1.374,43,18,19],
  [73,102,182,2.787,44,19,20],
  [73,50,76,0.717,31,20,21],
  [84,94,140,2.238,68,18,22],
  [93,77,104,1.165,53,7,23],
  [99,130,227,3.97,55,15,24],
  [146,84,139,1.094,40,17,25],
  [113,108,137,1.481,48,15,26],
  [81,48,62,1.619,26,3,27],
  [56,48,68,1.336,37,9,28],
  [82,92,174,3.29,0,13,29],
  [106,116,188,3.628,101,16,30],
  [118,50,0,1.383,76,11,31]
];

var dataSH = [
  [91,45,125,0.82,34,23,1],
  [65,27,78,0.86,45,29,2],
  [83,60,84,1.09,73,27,3],
  [109,81,121,1.28,68,51,4],
  [106,77,114,1.07,55,51,5],
  [109,81,121,1.28,68,51,6],
  [106,77,114,1.07,55,51,7],
  [89,65,78,0.86,51,26,8],
  [53,33,47,0.64,50,17,9],
  [80,55,80,1.01,75,24,10],
  [117,81,124,1.03,45,24,11],
  [99,71,142,1.1,62,42,12],
  [95,69,130,1.28,74,50,13],
  [116,87,131,1.47,84,40,14],
  [108,80,121,1.3,85,37,15],
  [134,83,167,1.16,57,43,16],
  [79,43,107,1.05,59,37,17],
  [71,46,89,0.86,64,25,18],
  [97,71,113,1.17,88,31,19],
  [84,57,91,0.85,55,31,20],
  [87,63,101,0.9,56,41,21],
  [104,77,119,1.09,73,48,22],
  [87,62,100,1,72,28,23],
  [168,128,172,1.49,97,56,24],
  [65,45,51,0.74,39,17,25],
  [39,24,38,0.61,47,17,26],
  [39,24,39,0.59,50,19,27],
  [93,68,96,1.05,79,29,28],
  [188,143,197,1.66,99,51,29],
  [174,131,174,1.55,108,50,30],
  [187,143,201,1.39,89,53,31]
];

var lineStyle = {
  normal: {
      width: 1,
      opacity: 0.5
  }
};

var option = {
  backgroundColor: '',
 
 
  title: {
      text: '',
      left: 'center',
      textStyle: {
          color: '#eee'
      }
  },
 
  legend: {
      left: 0,
      data: ['北京', '上海', '广州'],
      itemGap: 20,
      textStyle: {
          color: '#fff',
          fontSize: 14
      },
      selectedMode: 'single'
  },
  // visualMap: {
  //     show: true,
  //     min: 0,
  //     max: 20,
  //     dimension: 6,
  //     inRange: {
  //         colorLightness: [0.5, 0.8]
  //     }
  // },
  radar: {
      indicator: [
          {name: 'AQI', max: 300},
          {name: 'PM2.5', max: 250},
          {name: 'PM10', max: 300},
          {name: 'CO', max: 5},
          {name: 'NO2', max: 200},
          {name: 'SO2', max: 100}
      ],
      shape: 'circle',
      splitNumber: 5,
      name: {
          textStyle: {
              color: 'rgb(238, 197, 102)'
          }
      },
      splitLine: {
          lineStyle: {
              color: [
                  'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)',
                  'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.6)',
                  'rgba(238, 197, 102, 0.8)', 'rgba(238, 197, 102, 1)'
              ].reverse()
          }
      },
      splitArea: {
          show: false
      },
      axisLine: {
          lineStyle: {
              color: 'rgba(238, 197, 102, 0.5)'
          }
      }
  },
  series: [
      {
          name: '北京',
          type: 'radar',
          lineStyle: lineStyle,
          data: dataBJ,
          symbol: 'none',
          itemStyle: {
              color: '#0D7FF0'
          },
          areaStyle: {
              opacity: 0.1
          }
      },
      {
          name: '上海',
          type: 'radar',
          lineStyle: lineStyle,
          data: dataSH,
          symbol: 'none',
          itemStyle: {
              color: 'rgb(238, 197, 102)'
          },
          areaStyle: {
              opacity: 0.05
          }
      },
      {
          name: '广州',
          type: 'radar',
          lineStyle: lineStyle,
          data: dataGZ,
          symbol: 'none',
          itemStyle: {
              color: '#eee'
          },
          areaStyle: {
              opacity: 0.05
          }
      }
  ]
};
  //3.把配置项实例对象
  myChart.setOption(option);
  //4.自适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });


})();


// 柱状图

// 学习进度柱状图模块
(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".bar2 .chart"));

  var data = [70, 34, 60, 78, 69];
  var titlename = ["HTML5", "CSS3", "javascript", "VUE", "NODE"];
  var valdata = [702, 350, 610, 793, 664];
  var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
  option = {
    //图标位置
    grid: {
      top: "10%",
      left: "22%",
      bottom: "10%"
    },
    xAxis: {
      show: false
    },
    yAxis: [
      {
        show: true,
        data: titlename,
        inverse: true,
        axisLine: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: "#fff",

          rich: {
            lg: {
              backgroundColor: "#339911",
              color: "#fff",
              borderRadius: 15,
              // padding: 5,
              align: "center",
              width: 15,
              height: 15
            }
          }
        }
      },
      {
        show: true,
        inverse: true,
        data: valdata,
        axisLabel: {
          textStyle: {
            fontSize: 12,
            color: "#fff"
          }
        }
      }
    ],
    series: [
      {
        name: "条",
        type: "bar",
        yAxisIndex: 0,
        data: data,
        barCategoryGap: 50,
        barWidth: 10,
        itemStyle: {
          normal: {
            barBorderRadius: 20,
            color: function(params) {
              var num = myColor.length;
              return myColor[params.dataIndex % num];
            }
          }
        },
        label: {
          normal: {
            show: true,
            position: "inside",
            formatter: "{c}%"
          }
        }
      },
      {
        name: "框",
        type: "bar",
        yAxisIndex: 1,
        barCategoryGap: 50,
        data: [100, 100, 100, 100, 100],
        barWidth: 15,
        itemStyle: {
          normal: {
            color: "none",
            borderColor: "#00c1de",
            borderWidth: 3,
            barBorderRadius: 15
          }
        }
      }
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();


// 折线图

(function() {
	// 实例化对象
	
	  var myChart = echarts.init(document.querySelector(".line2 .chart"));
	
	// 指定配置
	var option = {
       color:['#00f2f1','#ed3f35'],
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
		textStyle:{
			color: "#4c9bfd"
		},
		right:"10%"
    },
    grid: {
		top: "20%",
        left: '3%',
        right: '4%',
        bottom: '3%',
		show: true,
		borderColor: "#012f4a",
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
		axisTick:{
			show:false
		},
		axisLabel:{
			color:"#4c9bfd"
		},
		axisLine: {
			show:false
		}
   
	},
    yAxis: {
        type: 'value',
		axisTick:{
			show:false
		},
		axisLabel:{
			color:"#4c9bfd"
		},
		axisLine: {
			show:false
		},
		splitLine: {
			lineStyle:{
				color:"#012f4a"
			}
			
		}
    },
    series: [
        {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
			smooth: true,
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
			smooth: true,
            data: [220, 182, 191, 234, 290, 330, 310]
        }
    ]
};

	// 把配置给实例对象
	 myChart.setOption(option);
	
	window.addEventListener("resize", function() {
	  myChart.resize();
	});
	
})();


// 饼形图

(function  () {
	// 实例化对象
	var myChart = echarts.init(document.querySelector(".pie .chart"));
	// 指定配置
	var option = {
		color: ["#065aad","#066eab","#0682ab",
		"#0696ab","#06a0ab"],
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        
        bottom: '4%',
		itemWidth: 10,
		itemHeight: 10,
		//  修改图例组件文字
		textStyle: {
			color:"rgba(255,255,255,.5)",
			fontSize: "12"
		},
		
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
			
            radius: ['40%', '60%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
          
            labelLine: {
                show: false
            },
            data: [
                {value: 335, name: '直接访问'},
                {value: 310, name: '邮件营销'},
                {value: 234, name: '联盟广告'},
                {value: 135, name: '视频广告'},
                {value: 1548, name: '搜索引擎'}
            ]
        }
    ]
};

	// 把配置给实例对象
	 myChart.setOption(option);
	
	window.addEventListener("resize", function() {
	  myChart.resize();
	});
	
	
})();



// 饼 形 2 图
  
  (function(){
	  
	  // 实例化对象
	  var myChart = echarts.init(document.querySelector(".pie2 .chart"));
	  	  
	  // 指定配置
      var option = {
		  color: ["#006cff","#60cda0","#ed8884","#ff9f7f",
		  "#0096ff","#9fe6b8","#32c5e9","#1d9dff"
		  ],
   
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
  

    legend: {
       bottom: "0%",
		itemWidth: 10,
		itemHeight: 10,
        data: ['江西', '湖南', '北京', '上海', '新疆', '山西', '河北', '湖北'],
		textStyle:{
			color: "#fff",
			fontSize: 12,
			
			
		},
         
	},
    series: [
 
        {
            name: '地区分布',
            type: 'pie',
            radius: ['10%', '70%'],
            center: ['50%', '50%'],
            roseType: 'radius',
			
            data: [
                {value: 10, name: '江西'},
                {value: 25, name: '湖南'},
                {value: 15, name: '北京'},
                {value: 25, name: '上海'},
                {value: 20, name: '新疆'},
                {value: 35, name: '山西'},
                {value: 30, name: '河北'},
                {value: 40, name: '湖北'}
            ]
        }
    ]
};

	  
		// 把配置给实例对象
	 myChart.setOption(option);
	
	window.addEventListener("resize", function() {
	  myChart.resize();
	});
	
	  
  })();




// 中 国 地 图 航 线
(function(){
	// 实例化对象
	var myChart = echarts.init(document.querySelector(".map .chart"));
	
	// 指定实例
	var geoCoordMap = {
	    	    '上海': [121.4648,31.2891],
	    	    '东莞': [113.8953,22.901],
	    	    '东营': [118.7073,37.5513],
	    	    '中山': [113.4229,22.478],
	    	    '临汾': [111.4783,36.1615],
	    	    '临沂': [118.3118,35.2936],
	    	    '丹东': [124.541,40.4242],
	    	    '丽水': [119.5642,28.1854],
	    	    '乌鲁木齐': [87.9236,43.5883],
	    	    '佛山': [112.8955,23.1097],
	    	    '保定': [115.0488,39.0948],
	    	    '兰州': [103.5901,36.3043],
	    	    '包头': [110.3467,41.4899],
	    	    '北京': [116.4551,40.2539],
	    	    '北海': [109.314,21.6211],
	    	    '南京': [118.8062,31.9208],
	    	    '南宁': [108.479,23.1152],
	    	    '南昌': [116.0046,28.6633],
	    	    '南通': [121.1023,32.1625],
	    	    '厦门': [118.1689,24.6478],
	    	    '台州': [121.1353,28.6688],
	    	    '合肥': [117.29,32.0581],
	    	    '呼和浩特': [111.4124,40.4901],
	    	    '咸阳': [108.4131,34.8706],
	    	    '哈尔滨': [127.9688,45.368],
	    	    '唐山': [118.4766,39.6826],
	    	    '嘉兴': [120.9155,30.6354],
	    	    '大同': [113.7854,39.8035],
	    	    '大连': [122.2229,39.4409],
	    	    '天津': [117.4219,39.4189],
	    	    '太原': [112.3352,37.9413],
	    	    '威海': [121.9482,37.1393],
	    	    '宁波': [121.5967,29.6466],
	    	    '宝鸡': [107.1826,34.3433],
	    	    '宿迁': [118.5535,33.7775],
	    	    '常州': [119.4543,31.5582],
	    	    '广州': [113.5107,23.2196],
	    	    '廊坊': [116.521,39.0509],
	    	    '延安': [109.1052,36.4252],
	    	    '张家口': [115.1477,40.8527],
	    	    '徐州': [117.5208,34.3268],
	    	    '德州': [116.6858,37.2107],
	    	    '惠州': [114.6204,23.1647],
	    	    '成都': [103.9526,30.7617],
	    	    '扬州': [119.4653,32.8162],
	    	    '承德': [117.5757,41.4075],
	    	    '拉萨': [91.1865,30.1465],
	    	    '无锡': [120.3442,31.5527],
	    	    '日照': [119.2786,35.5023],
	    	    '昆明': [102.9199,25.4663],
	    	    '杭州': [119.5313,29.8773],
	    	    '枣庄': [117.323,34.8926],
	    	    '柳州': [109.3799,24.9774],
	    	    '株洲': [113.5327,27.0319],
	    	    '武汉': [114.3896,30.6628],
	    	    '汕头': [117.1692,23.3405],
	    	    '江门': [112.6318,22.1484],
	    	    '沈阳': [123.1238,42.1216],
	    	    '沧州': [116.8286,38.2104],
	    	    '河源': [114.917,23.9722],
	    	    '泉州': [118.3228,25.1147],
	    	    '泰安': [117.0264,36.0516],
	    	    '泰州': [120.0586,32.5525],
	    	    '济南': [117.1582,36.8701],
	    	    '济宁': [116.8286,35.3375],
	    	    '海口': [110.3893,19.8516],
	    	    '淄博': [118.0371,36.6064],
	    	    '淮安': [118.927,33.4039],
	    	    '深圳': [114.5435,22.5439],
	    	    '清远': [112.9175,24.3292],
	    	    '温州': [120.498,27.8119],
	    	    '渭南': [109.7864,35.0299],
	    	    '湖州': [119.8608,30.7782],
	    	    '湘潭': [112.5439,27.7075],
	    	    '滨州': [117.8174,37.4963],
	    	    '潍坊': [119.0918,36.524],
	    	    '烟台': [120.7397,37.5128],
	    	    '玉溪': [101.9312,23.8898],
	    	    '珠海': [113.7305,22.1155],
	    	    '盐城': [120.2234,33.5577],
	    	    '盘锦': [121.9482,41.0449],
	    	    '石家庄': [114.4995,38.1006],
	    	    '福州': [119.4543,25.9222],
	    	    '秦皇岛': [119.2126,40.0232],
	    	    '绍兴': [120.564,29.7565],
	    	    '聊城': [115.9167,36.4032],
	    	    '肇庆': [112.1265,23.5822],
	    	    '舟山': [122.2559,30.2234],
	    	    '苏州': [120.6519,31.3989],
	    	    '莱芜': [117.6526,36.2714],
	    	    '菏泽': [115.6201,35.2057],
	    	    '营口': [122.4316,40.4297],
	    	    '葫芦岛': [120.1575,40.578],
	    	    '衡水': [115.8838,37.7161],
	    	    '衢州': [118.6853,28.8666],
	    	    '西宁': [101.4038,36.8207],
	    	    '西安': [109.1162,34.2004],
	    	    '贵阳': [106.6992,26.7682],
	    	    '连云港': [119.1248,34.552],
	    	    '邢台': [114.8071,37.2821],
	    	    '邯郸': [114.4775,36.535],
	    	    '郑州': [113.4668,34.6234],
	    	    '鄂尔多斯': [108.9734,39.2487],
	    	    '重庆': [107.7539,30.1904],
	    	    '金华': [120.0037,29.1028],
	    	    '铜川': [109.0393,35.1947],
	    	    '银川': [106.3586,38.1775],
	    	    '镇江': [119.4763,31.9702],
	    	    '长春': [125.8154,44.2584],
	    	    '长沙': [113.0823,28.2568],
	    	    '长治': [112.8625,36.4746],
	    	    '阳泉': [113.4778,38.0951],
	    	    '青岛': [120.4651,36.3373],
	    	    '韶关': [113.7964,24.7028]
	    	};
	
	    	var XAData = [
	    	    [{name:'西安'}, {name:'北京',value:100}],
	    	    [{name:'西安'}, {name:'上海',value:100}],
	    	    [{name:'西安'}, {name:'广州',value:100}],
	    	    [{name:'西安'}, {name:'西宁',value:100}],
	    	    [{name:'西安'}, {name:'银川',value:100}]
	    	];
	
	    	var XNData = [
	    	    [{name:'西宁'}, {name:'北京',value:100}],
	    	    [{name:'西宁'}, {name:'上海',value:100}],
	    	    [{name:'西宁'}, {name:'广州',value:100}],
	    	    [{name:'西宁'}, {name:'西安',value:100}],
	    	    [{name:'西宁'}, {name:'银川',value:100}]
	    	];
	
	    	var YCData = [
	    	    [{name:'银川'}, {name:'北京',value:100}],
	    	    [{name:'银川'}, {name:'广州',value:100}],
	    	    [{name:'银川'}, {name:'上海',value:100}],
	    	    [{name:'银川'}, {name:'西安',value:100}],
	    	    [{name:'银川'}, {name:'西宁',value:100}],
	    	];
	
	    	var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
	    	//var planePath = 'arrow';
	    	var convertData = function (data) {
	    			
	    	    var res = [];
	    	    for (var i = 0; i < data.length; i++) {
	    	    	
	    	        var dataItem = data[i];
	
	    	        var fromCoord = geoCoordMap[dataItem[0].name];
	    	        var toCoord = geoCoordMap[dataItem[1].name];
	    	        if (fromCoord && toCoord) {
	    	            res.push({
	    	                fromName: dataItem[0].name,
	    	                toName: dataItem[1].name,
	    	                coords: [fromCoord, toCoord],
	    	                value: dataItem[1].value
	    	            });
	    	        }
	    	    }
	    	    return res;
	    	   	
	    	};
	
	    	var color = ['#a6c84c', '#ffa022', '#46bee9'];//航线的颜色
	    	var series = [];
	    	[['西安', XAData], ['西宁', XNData], ['银川', YCData]].forEach(function (item, i) {  
	    	    series.push({
	    	        name: item[0] + ' Top3',
	    	        type: 'lines',
	    	        zlevel: 1,
	    	        effect: {
	    	            show: true,
	    	            period: 6,
	    	            trailLength: 0.7,
	    	            color: 'red',   //arrow箭头的颜色
	    	            symbolSize: 3
	    	        },
	    	        lineStyle: {
	    	            normal: {
	    	                color: color[i],
	    	                width: 0,
	    	                curveness: 0.2
	    	            }
	    	        },
	    	        data: convertData(item[1])
	    	    },
	    	    {
	    	        name: item[0] + ' Top3',
	    	        type: 'lines',
	    	        zlevel: 2,
	    	        symbol: ['none', 'arrow'],
	    	        symbolSize: 10,
	    	        effect: {
	    	            show: true,
	    	            period: 6,
	    	            trailLength: 0,
	    	            symbol: planePath,
	    	            symbolSize: 15
	    	        },
	    	        lineStyle: {
	    	            normal: {
	    	                color: color[i],
	    	                width: 1,
	    	                opacity: 0.6,
	    	                curveness: 0.2
	    	            }
	    	        },
	    	        data: convertData(item[1])
	    	    },
	    	    {
	    	        name: item[0] + ' Top3',
	    	        type: 'effectScatter',
	    	        coordinateSystem: 'geo',
	    	        zlevel: 2,
	    	        rippleEffect: {
	    	            brushType: 'stroke'
	    	        },
	    	        label: {
	    	            normal: {
	    	                show: true,
	    	                position: 'right',
	    	                formatter: '{b}'
	    	            }
	    	        },
	    	        symbolSize: function (val) {
	    	            return val[2] / 8;
	    	        },
	    	        itemStyle: {
	    	        	normal: {
	    	        		color: color[i],
			            },
			            emphasis: {
			                areaColor: '#2B91B7'
			            }
	    	        },
	    	        data: item[1].map(function (dataItem) {
	    	            return {
	    	                name: dataItem[1].name,
	    	                value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
	    	            };
	    	        })
	    	    });
	    	});
	    	var option = {
	    
	    	    tooltip : {
	    	        trigger: 'item', 
	    	        formatter:function(params, ticket, callback){
	    	            if(params.seriesType=="effectScatter") {
	    	                return "线路："+params.data.name+""+params.data.value[2];
	    	            }else if(params.seriesType=="lines"){
	    	                return params.data.fromName+">"+params.data.toName+"<br />"+params.data.value;
	    	            }else{
	    	                return params.name;
	    	            }
	    	        } 
	    	    },
	    	    legend: {
	    	        orient: 'vertical',
	    	        top: 'bottom',
	    	        left: 'right',
	    	        data:['西安 Top3', '西宁 Top3', '银川 Top3'],
	    	        textStyle: {
	    	            color: '#fff'
	    	        },
	    	        selectedMode: 'multiple'
	    	    },
	    	    geo: {
	    	        map: 'china',
	    	        label: {
	    	            emphasis: {
	    	                show: true,
	    	                color:'#fff'
	    	            }
	    	        },
					zoom: 1.2,
	    	        roam: true,
	    	        itemStyle: {
	    	        	normal: {
							
			                areaColor: 'rgba(20,41,87,.7)',
			                borderColor: '#195BB9',
			                borderWidth: 1,
			            },
			            emphasis: {
			                areaColor: '#2B91B7'
			            }
	    	        }
	    	    },
	    	    series: series
	    	};
	
	// 把配置给实例对象
	 myChart.setOption(option);
	
	window.addEventListener("resize", function() {
	  myChart.resize();
	});
	
})();

