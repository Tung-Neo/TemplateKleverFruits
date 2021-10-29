var
// options={
//   chart:{
//     height:320,
//     type:"area",
//     stacked:!1,
//     toolbar:{show:!1,autoSelected:"zoom"}},
//     colors:["#2a77f4","#a5c2f1"],
//     dataLabels:{enabled:!1},
//     stroke:{curve:"smooth",
//     width:[1.5, 1.5],
//     dashArray:[0,4],
//     lineCap:"round"},
//     grid:{padding:{left:0,right:0},
//     strokeDashArray:3},
//     markers:{size:0,hover:{size:0}},
//     series:[
//       {name:"Tuần Này",data:[634,200,939,458,1184,570,1340]},
//       {name:"Tuần Trước",data:[456,170,712,368,493,448,950]}],
//       xaxis:{type:"day",categories:["Thứ 2","Thứ 3","Thứ 4","Thứ 5","Thứ 6","Thứ 7","Chủ Nhật"],
//       axisBorder:{
//         show:!0},
//         axisTicks:{show:!0}},
//         fill:{
//           type:"gradient",
//           gradient:{
//             shadeIntensity:1,
//             opacityFrom:.4,
//             opacityTo:.3,
//             stops:[0,90,100]}},
//             tooltip:{x:{format:"dd/MM/yy HH:mm"}},legend:{position:"top",horizontalAlign:"right"}};
// (chart=new ApexCharts(document.querySelector("#ana_dash_1"),options)).render();

options={
  series:[{data:[641,465,521,420,682,660,930]}],
  chart:{height:350,type:"line",zoom:{enabled:!1}},
  colors:["#008ffb"],
  dataLabels:{enabled:!1},
  stroke:{curve:"straight",width:[3]},
  grid:{row:{colors:["#f3f3f3","transparent"],opacity:.5}},
  xaxis:{categories:["Thứ 2","Thứ 3","Thứ 4","Thứ 5","Thứ 6","Thứ 7","Chủ Nhật"]}};
(chart=new ApexCharts(document.querySelector("#apex_line1"),options)).render();
  options={
    chart:{height:270,type:"donut"},
    plotOptions:{pie:{donut:{size:"85%"}}},
    dataLabels:{enabled:!1},
    stroke:{show:!0,width:2,colors:["transparent"]},
    series:[30,27,19,24],
    legend:{
      show:!0,position:"bottom",
      horizontalAlign:"center",
      verticalAlign:"middle",
      floating:!1,
      fontSize:"13px",
      offsetX:0,
      offsetY:0},
    labels:["Táo","Nho","Xoài","Khác"],
    colors:["#FB5D75","rgba(250, 184, 57)","rgba(34, 227, 163)", "rgba(34, 156, 249)"],
    responsive:[{
      breakpoint:600,
      options:{
        plotOptions:{
          donut:{customScale:.2}},
          chart:{height:240},
          legend:{show:!1}}}],
    tooltip:{y:{formatter:function(o){return o+" %"}}}};
(chart=new ApexCharts(document.querySelector("#ana_device"),options)).render();

options={
  chart:{height:380,type:"line",stacked:!1,toolbar:{show:!1}},
  dataLabels:{enabled:!1},
  stroke:{width:[0,0,3]},
  series:[
    {name:"Đơn Hàng",type:"column",data:[15,21,21,18,9,19,28]},
    {name:"Đơn Hàng Với Coupon",type:"column",data:[11,17,18,14,16,14,26]},
    {name:"Tổng Đơn",type:"line",data:[26,38,39,32,27,33,54]}],
  colors:["rgba(42, 118, 244, .18)","#2a76f4","rgba(251, 182, 36, .6)"],
  xaxis:{
    categories:[24,25,26,27,28,29,30],
    axisBorder:{show:!0,color:"#bec7e0"},
    axisTicks:{show:!0,color:"#bec7e0"}},
  yaxis:[
    {
      axisTicks:{show:!0},
      axisBorder:{show:!0,color:"#20016c"},
      labels:{style:{color:"#20016c"}},
      title:{text:"Số Đơn Hàng"}},
    // {
    //   axisTicks:{show:!0},
    //   axisBorder:{show:!0,color:"#77d0ba"},
    //   labels:{style:{color:"#77d0ba"},offsetX:10},
    //   title:{text:"Operating Cashflow (thousand crores)"}},
    // {
    //   opposite:!0,
    //   axisTicks:{show:!0},
    //   axisBorder:{show:!0,color:"#fa5c7c"},
    //   labels:{style:{color:"#fa5c7c"}},
    //   title:{text:"Revenue (thousand crores)"}}
    ],
  tooltip:{
    followCursor:!0,
    y:{formatter:function(e){return void 0!==e?e+" đơn hàng":e}}},
  grid:{borderColor:"#f1f3fa"},
  legend:{offsetY:6},
  responsive:[
    {
      breakpoint:600,
      options:{yaxis:{show:!1},legend:{show:!1}}}]};
  function generateData1(e,t,a){
    for(var o=0,r=[];o<t;)
    {var
      n=Math.floor(Math.random()*(a.max-a.min+1))+a.min,
      s=Math.floor(61*Math.random())+15;
      r.push([e,n,s]),
      e+=864e5,o++}
      return r}
      (chart=new ApexCharts(document.querySelector("#apex_mixed"),options)).render();
