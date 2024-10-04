import { Component } from '@angular/core';

import { Chart } from "angular-highcharts";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  LineChart=new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Partcipant inscrit au Formation'
    },
    credits: {
      enabled: false
    },
  series:[
    {
      name :'Participants inscrit',
      data:[10,2,3,6,9,17,20,10,5,2,16]
    } as any 
  ]
  })
  pieChart=new Chart({
    chart: {
    type: 'pie'
  },

  credits: {
    enabled: false
  },
  plotOptions:{
    pie:{
      innerSize:'99%',
      borderWidth:10,
      borderColor:'',
      slicedOffset:10,
      dataLabels:{
        connectorWidth:0,
      },
    },
  },

  title:{
  verticalAlign:'middle',
  floating:true,
  text:'les formations les plus recemondés',

 },
 legend:{
  enabled:false,
 },
  series:[
    {
      type:'pie',
      data:[
        {name : 'gestion de stock',y:1,color:'#eeeeee'},
        {name : 'loi de finance ',y:1,color:'#393e46'},
        {name :'adab',y:1,color:'#00adb5'},
        {name:'Big Data',y:1,color:'red'}
      ]
    }
  ]


  })
 
}
