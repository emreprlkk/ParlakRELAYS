import React, { Component } from "react";
import Chart from "react-apexcharts";
import   "./form.css"
//import Dropdown from './react-dropdown.jsx';
//import Styles from '../Styles/InputNumber.css';
import { FaBeer } from 'react-icons/fa';
import ModernCircles from "./sim.jsx"
import Select from 'react-select'
import DataTable  from './Table'
import { GoFoldDown } from 'react-icons/go';
import { data } from "autoprefixer";

const options = [
  { value: 'NI', label: 'Nominal Inverse' },
  { value: 'VI', label: 'Very Inverse' },
  { value: 'EI', label: 'Extremely Inverse' },
  { value: 'LTSI', label: 'Long Time Standard Inverse' },
];


class Emre2 extends Component {
  constructor(props) 
  {
    super(props);
 
    const data_React_table =  Array.from({ length: 2000 }, (_, i) => 100 + (i * 5))
    this.state = {
      tms1: '',
      ct1: '',
      cmt1: '',
      DataY_1:[],

      StateDeneme:[],

     Kisa_Devre_React_Table: data_React_table,
     dataY2_React_Table:[],
      k1: 0.14,
      a1:0.02,
      k2: 0.14,
      a2:0.02,
      k3: 0.14,
      a3:0.02,
      k4: 0.14,
      a4:0.02,
      k5: 0.14,
      a5:0.02,
      selectedOption: 'NI', // Seçili seçeneği tutacak durum
      
   
      tms2: '',
      ct2: '',
      cmt2: '',
      DataY_2:[],
    

      tms3: '',
      ct3: '',
      cmt3: '',
      DataY_3:[],
      
      tms4: '',
      ct4: '',
      cmt4: '',
      DataY_4:[],
      
      tms5: '',
      ct5: '',
      cmt5: '',
      DataY_5:[],
      
      series: [
        {
          name: 'Röle 1',
          data: []
        }, 
        {
            name: 'Röle 2',
            data: []
          },
          {
            name: 'Röle 3',
            data: []
          },
          {
            name: 'Röle 4',
            data: []
          },
          {
            name: 'Röle 5',
            data: []
          }
      ],
      options: {
        chart: {
          type: 'area',
          stacked: false,
          height: 350,
          zoom: {
            type: 'x',
            enabled: true,
            autoScaleYaxis: true
          },
          toolbar: {
            autoSelected: 'zoom'
          }
        },
        stroke: {
          curve: 'smooth' // Bu ayar çizgileri daha yumuşak yapar
        },
        dataLabels: {
          enabled: false
        },
        markers: {
          colors: ['#FF4560'], // Tüm marker'lar için tek renk
          size: 0.1,
        },
        title: {
          text: 'PARLAK RELAY GRAPH',
          align: 'center'
        },
        fill: {
        //  type: 'gradient',
         /* gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 0,
            stops: [0, 90, 200]
          },*/
        },
        yaxis: {
          labels: {
           /* formatter: function (val) {
              return (val / 1000000).toFixed(0);
            },*/
          },
          title: {
            text: 'Rölenin Açma Süresi ( Sn )'
          },
        },
        xaxis: {
          categories:[],
          type: 'Amper',
          title: {
              text: 'Kisa Devre Akimleri (Amper)'
            },
            tickAmount: 10, // Başlangıçta gösterilecek maksimum etiket sayısı
        },
        tooltip: {
            theme: 'dark', // 'dark' veya 'light' temayı seçebilirsiniz
            style: {
              fontSize: '12px',
              fontFamily: undefined
            },
              shared: true, // Bu ayar, araç ipucunun paylaşıldığını belirtir
              x: {
                show: true
              },
         
        }
      },
    };
    
    this.handleChange1 = this.handleChange1.bind(this);
    this.calculateData1 = this.calculateData1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
 this.calculateData2 = this.calculateData2.bind(this);
  this.handleChange3 = this.handleChange3.bind(this);
  this.calculateData3 = this.calculateData3.bind(this);
   this.handleChange4 = this.handleChange4.bind(this);
    this.calculateData4 = this.calculateData4.bind(this);
   this.handleChange5 = this.handleChange5.bind(this);
  this.calculateData5 = this.calculateData5.bind(this);
  this.handleInputChange = this.handleInputChange.bind(this);
  this.DropDown2 = this.DropDown2.bind(this);
  }

  componentDidMount() {
    this.handleChange();
    this.calculateData1();
   this.calculateData2();
    this.calculateData3();
    this.calculateData4();
   this.calculateData5();
   this.handleInputChange();
   this.DropDown2();

  }
  componentDidUpdate(prevProps) {
    const { tms1, ct1, cmt1,k,a,Kisa_Devre_React_Table,dataY2_React_Table } = this.state;
    if (prevProps.inputValues !== this.props.inputValues) {
      console.log('Input values updated:', this.props.inputValues);
      let y1 = tms1*(k / (Math.pow(this.props.inputValues[0] / (ct1*cmt1), a) - 1));
      console.log('Input values röle açma saniyesi :', +y1);
    }
  }
  handleChange1(e) {
    
    const { name, value } = e.target;
    this.setState({ [name]: parseFloat(value) }, () => this.calculateData1(0));
  }

  handleChange2(e) {
    const { name, value } = e.target;
    this.setState({ [name]: parseFloat(value) }, () => this.calculateData2(1));
  }
  
  handleChange3(e) {
    const { name, value } = e.target;
    this.setState({ [name]: parseFloat(value) }, () => this.calculateData3(2));
  }
  handleChange4(e) {
    const { name, value } = e.target;
    this.setState({ [name]: parseFloat(value) }, () => this.calculateData4(3));
  }
  handleChange5(e) {
    const { name, value } = e.target;
    this.setState({ [name]: parseFloat(value) }, () => this.calculateData5(4));
  }
  calculateData1(n) {
    const { tms1, ct1, cmt1,k1,a1,Kisa_Devre_React_Table,dataY2_React_Table } = this.state;
    //console.log("data y1 "+this.state.dataY)
    const KisaDevreAkimlari = [];
   // console.log("fault "+this.state.Kisa_Devre_React_Table)
  
    const newdataY = [];
    let index=0;
    let NewdataY2_React_Table=[]
       // console.log("tms1 "+tms1,"ct1 "+ct1,"cmt1 "+cmt1)
       // console.log("tms2 "+tms2,"ct2 "+ct2,"cmt2 "+cmt2)
    for (let i = 0; i <= 10000; i+=200) {
       
     // console.log( "kisadevre "+yy )
      KisaDevreAkimlari.push(i);
      let y1 = tms1*(k1 / (Math.pow(KisaDevreAkimlari[index] / (ct1*cmt1), a1) - 1));
    
      
     // console.log( "hjhhj"+y1 )
      if(y1==Infinity){
        y1=1;
      }
    else  if(KisaDevreAkimlari[index]< (ct1*cmt1)){
        y1=0.0000001
      }
      newdataY.push(y1.toFixed(3));
      index++
    }
  /*  for (let indexx = 0; indexx < Kisa_Devre_React_Table.length; indexx++) {
      // Denklemi uygular ve sonucu y2 dizisine ekler
     // console.log("ct ve cm "+ct1 + " "+cmt1)
     // console.log("bilgi kisa devre "+Kisa_Devre_React_Table[indexx])
      let y2=(tms1 * (k / (Math.pow(Kisa_Devre_React_Table[indexx] / (ct1*cmt1), a)) - 1));
      NewdataY2_React_Table.push(y2.toFixed(3))
      //console.log("bilgi röle "+y2.toFixed(3))
     
    }*/
    this.setState({ dataY2_React_Table:NewdataY2_React_Table  });
   // Series dizisini güncelleme
   this.setState(prevState => ({
    series: prevState.series.map((serie, index) => {
      // Eğer mevcut indeks n ise, data özelliğini güncelle
      if (index === n) {
        return {...serie, data: newdataY };
      }
      // Diğer tüm elemanlar değişmeden kalır
      return serie;
    }),
    options: {
        ...this.state.options,
        xaxis: {
            categories:KisaDevreAkimlari,
            type: 'Amper',
            title: {
                text: 'Kisa Devre Akimleri (Amper)'
              },
              tickAmount: 10, // Başlangıçta gösterilecek maksimum etiket sayısı
          },

      },
      

  }));

  //console.log("data y2 "+this.state.series[0].data)
  }
  calculateData2(n) {
    const { tms2, ct2, cmt2,k2,a2,Kisa_Devre_React_Table,dataY2_React_Table } = this.state;
    const KisaDevreAkimlari = [];
    const newdataY2 = [];
    let index =  0;
    //console.log( "hjhhj  "+tms2,ct2,cmt2 )
    for (let i = 0; i <= 10000; i+=200) {
      
     
      KisaDevreAkimlari.push(i);
      let y2 = tms2*(k2/ (Math.pow(KisaDevreAkimlari[index] / (ct2*cmt2), a2) - 1));
      
    
      if(y2==Infinity){
        y2=1;
      }
      else  if(KisaDevreAkimlari[index]< (ct2*cmt2)){
        y2=0.0000001
      }
  
      newdataY2.push(y2.toFixed(3));
      index++
    }
    //console.log("y2 "+dataY2)
   // console.log( "metod 2 "+KisaDevreAkimlari )
       // Series dizisini güncelleme
  this.setState(prevState => ({
    series: prevState.series.map((serie, index) => {
      // Eğer mevcut indeks n ise, data özelliğini güncelle
      if (index === n) {
        return {...serie, data: newdataY2 };
      }
      // Diğer tüm elemanlar değişmeden kalır
      return serie;
    }),options: {
        ...this.state.options,
        xaxis: {
            categories:KisaDevreAkimlari,
            type: 'Amper',
            title: {
                text: 'Kisa Devre Akimleri (Amper)'
              },
              tickAmount: 10, // Başlangıçta gösterilecek maksimum etiket sayısı
          },
       
      }
  }));
       
  }
  calculateData3(n) {
    const { tms3, ct3, cmt3,k3,a3,Kisa_Devre_React_Table,dataY2_React_Table } = this.state;
    const KisaDevreAkimlari = [];
    const newdataY3 = [];
    let index =  0;
  //  console.log( "hjhhj  "+tms3 ,ct3,cmt3 )
    for (let i = 0; i <= 10000 ; i+=200) {
      const yy =  i;
      
      KisaDevreAkimlari.push(yy);
     // console.log( "devrek  "+KisaDevreAkimlari )
      let y3 = tms3*(k3/ (Math.pow(KisaDevreAkimlari[index] / (ct3*cmt3), a3) - 1));
    
      if(y3==Infinity){
        y3=1;
      }
      else  if(KisaDevreAkimlari[index]< (ct3*cmt3)){
        y3=0.0000001
        
      }
  
      newdataY3.push(y3.toFixed(3));
      index++
    
    }
    //console.log("y2 "+dataY2)
   //console.log( "hjhhj"+dataY3 )
       // Series dizisini güncelleme
  this.setState(prevState => ({
    series: prevState.series.map((serie, index) => {
      // Eğer mevcut indeks n ise, data özelliğini güncelle
      if (index === n) {
        return {...serie, data: newdataY3 };
      }
      // Diğer tüm elemanlar değişmeden kalır
      return serie;
    }),options: {
        ...this.state.options,
        xaxis: {
            categories:KisaDevreAkimlari,
            type: 'Amper',
            title: {
                text: 'Kisa Devre Akimleri (Amper)'
              },
              tickAmount: 10, // Başlangıçta gösterilecek maksimum etiket sayısı
          },
       
      }
  }));
       
  }

  calculateData4(n) {
    const { tms4, ct4, cmt4,k4,a4,Kisa_Devre_React_Table,dataY2_React_Table } = this.state;
    const KisaDevreAkimlari = [];
    const newDataY4 = [];
    let index =  0;
  // console.log( "hjhhj  "+tms4 ,ct4,cmt4 )
    for (let i = 0; i <= 10000 ; i+=200) {
      const yy =  i;
      
      KisaDevreAkimlari.push(yy);
     // console.log( "devrek  "+KisaDevreAkimlari )
      let y4 = tms4*(k4 / (Math.pow(KisaDevreAkimlari[index] / (ct4*cmt4), a4) - 1));
    
      if(y4==Infinity){
        y4=1;
      }
      else  if(KisaDevreAkimlari[index]< (ct4*cmt4)){
        y4=0.0000001
      }

    newDataY4.push(y4.toFixed(3));
    index++
  
    
    }
    //console.log("y2 "+dataY2)
   //console.log( "hjhhj"+dataY3 )
       // Series dizisini güncelleme
  this.setState(
    prevState => ({
    series: prevState.series.map((serie, index) => {
      // Eğer mevcut indeks n ise, data özelliğini güncelle
      if (index === n) {
        return {...serie, data: newDataY4 };
      }
      // Diğer tüm elemanlar değişmeden kalır
      return serie;
    }),options: {
        ...this.state.options,
        xaxis: {
            categories:KisaDevreAkimlari,
            type: 'Amper',
            title: {
                text: 'Kisa Devre Akimleri (Amper)'
              },
              tickAmount: 10, // Başlangıçta gösterilecek maksimum etiket sayısı
          },
       
      }
  }));
       
  }

  calculateData5(n) {
    const { tms5, ct5, cmt5,k5,a5,Kisa_Devre_React_Table,dataY2_React_Table } = this.state;
    const KisaDevreAkimlari = [];
    const newDataY5 = [];
    let index =  0;
   // console.log( "hjhhj  "+tms5 ,ct5,cmt5 )
    for (let i = 0; i <= 10000 ; i+=200) {
      const yy =  i;
      
      KisaDevreAkimlari.push(yy);
     // console.log( "devrek  "+KisaDevreAkimlari )
      let y5 = tms5*(k5 / (Math.pow(KisaDevreAkimlari[index] / (ct5*cmt5), a5) - 1));
    
      if(y5==Infinity){
        y5=1;
      }
      else  if(KisaDevreAkimlari[index]< (ct5*cmt5)){
        y5=0.0000001
      }
 
 
      newDataY5.push(y5.toFixed(3));
    index++
  
    
    }
    //console.log("y2 "+dataY2)
   //console.log( "hjhhj"+dataY3 )
       // Series dizisini güncelleme
  this.setState(prevState => ({
    series: prevState.series.map((serie, index) => {
      // Eğer mevcut indeks n ise, data özelliğini güncelle
      if (index === n) {
        return {...serie, data: newDataY5 };
      }
      // Diğer tüm elemanlar değişmeden kalır
      return serie;
    }),options: {
        ...this.state.options,
        xaxis: {
            categories:KisaDevreAkimlari,
            type: 'Amper',
            title: {
                text: 'Kisa Devre Akimleri (Amper)'
              },
              tickAmount: 10, // Başlangıçta gösterilecek maksimum etiket sayısı
          },
       
      }
  }));
       
  }

  handleChange = (selectedOption) => {

    //console.log("güncellendi ÖNCE  " + this.state.k); // Log the updated state value
    if (selectedOption && selectedOption.value === 'NI') {
      this.setState({ k1: 0.14, a1: 0.02 }, () => {
   //     console.log("güncellendi ESNASI  " + this.state.k); // Log the updated state value
        this.calculateData1(0); // Correctly calling the method using this keyword
      });
      
    }
    else if (selectedOption && selectedOption.value === 'VI') {
      this.setState({ k1: 13.5, a1: 1 }, () => {
      //  console.log("güncellendi k " + this.state.k); // Log the updated state value
        this.calculateData1(0); // Correctly calling the method using this keyword
      });

      
      
    }
    else if (selectedOption && selectedOption.value === 'EI') {
      this.setState({ k1: 80, a1: 2 }, () => {
   //     console.log("güncellendi k " + this.state.k); // Log the updated state value
        this.calculateData1(0); // Correctly calling the method using this keyword
      });
      

      const options = [
        { value: 'NI', label: 'Nominal Inverse' },
        { value: 'VI', label: 'Very Inverse' },
        { value: 'EI', label: 'Extremely Inverse' },
        { value: 'LTSI', label: 'Long Time Standard Inverse' },
      ];
      
    }
    else if (selectedOption && selectedOption.value === 'LTSI') {
      this.setState({ k1: 120, a1: 1 }, () => {
      //  console.log("güncellendi k " + this.state.k); // Log the updated state value
        this.calculateData1(0); // Correctly calling the method using this keyword
      });
      

    }
    
    
  };
  DropDown2 = (selectedOption) => {

    //console.log("güncellendi ÖNCE  " + this.state.k); // Log the updated state value
    if (selectedOption && selectedOption.value === 'NI') {
      this.setState({ k2: 0.14, a2: 0.02 }, () => {
   //     console.log("güncellendi ESNASI  " + this.state.k); // Log the updated state value
        this.calculateData2(1); // Correctly calling the method using this keyword
      });
      
    }
    else if (selectedOption && selectedOption.value === 'VI') {
      this.setState({ k2: 13.5, a2: 1 }, () => {
      //  console.log("güncellendi k " + this.state.k); // Log the updated state value
        this.calculateData2(1); // Correctly calling the method using this keyword
      });

      
      
    }
    else if (selectedOption && selectedOption.value === 'EI') {
      this.setState({ k2: 80, a2: 2 }, () => {
   //     console.log("güncellendi k " + this.state.k); // Log the updated state value
        this.calculateData2(1); // Correctly calling the method using this keyword
      });
      

      const options = [
        { value: 'NI', label: 'Nominal Inverse' },
        { value: 'VI', label: 'Very Inverse' },
        { value: 'EI', label: 'Extremely Inverse' },
        { value: 'LTSI', label: 'Long Time Standard Inverse' },
      ];
      
    }
    else if (selectedOption && selectedOption.value === 'LTSI') {
      this.setState({ k2: 120, a2: 1 }, () => {
      //  console.log("güncellendi k " + this.state.k); // Log the updated state value
        this.calculateData2(1); // Correctly calling the method using this keyword
      });
      

    }
    
    
  };
  DropDown3 = (selectedOption) => {

    //console.log("güncellendi ÖNCE  " + this.state.k); // Log the updated state value
    if (selectedOption && selectedOption.value === 'NI') {
      this.setState({ k3: 0.14, a3: 0.02 }, () => {
   //     console.log("güncellendi ESNASI  " + this.state.k); // Log the updated state value
   this.calculateData3(2); // Correctly calling the method using this keyword
      });
      
    }
    else if (selectedOption && selectedOption.value === 'VI') {
      this.setState({ k3: 13.5, a3: 1 }, () => {
      //  console.log("güncellendi k " + this.state.k); // Log the updated state value
      this.calculateData3(2); // Correctly calling the method using this keyword
      });

      
      
    }
    else if (selectedOption && selectedOption.value === 'EI') {
      this.setState({ k3: 80, a3: 2 }, () => {
   //     console.log("güncellendi k " + this.state.k); // Log the updated state value
   this.calculateData3(2); // Correctly calling the method using this keyword
      });
      

      const options = [
        { value: 'NI', label: 'Nominal Inverse' },
        { value: 'VI', label: 'Very Inverse' },
        { value: 'EI', label: 'Extremely Inverse' },
        { value: 'LTSI', label: 'Long Time Standard Inverse' },
      ];
      
    }
    else if (selectedOption && selectedOption.value === 'LTSI') {
      this.setState({ k3: 120, a3: 1 }, () => {
      //  console.log("güncellendi k " + this.state.k); // Log the updated state value
        this.calculateData3(2); // Correctly calling the method using this keyword
      });
      

    }
    
    
  };
  DropDown4 = (selectedOption) => {

    //console.log("güncellendi ÖNCE  " + this.state.k); // Log the updated state value
    if (selectedOption && selectedOption.value === 'NI') {
      this.setState({ k4: 0.14, a4: 0.02 }, () => {
   //     console.log("güncellendi ESNASI  " + this.state.k); // Log the updated state value
   this.calculateData4(3); // Correctly calling the method using this keyword
      });
      
    }
    else if (selectedOption && selectedOption.value === 'VI') {
      this.setState({ k4: 13.5, a4: 1 }, () => {
      //  console.log("güncellendi k " + this.state.k); // Log the updated state value
      this.calculateData4(3); // Correctly calling the method using this keyword
      });

      
      
    }
    else if (selectedOption && selectedOption.value === 'EI') {
      this.setState({ k4: 80, a4: 2 }, () => {
   //     console.log("güncellendi k " + this.state.k); // Log the updated state value
   this.calculateData4(3); // Correctly calling the method using this keyword
      });
      

      const options = [
        { value: 'NI', label: 'Nominal Inverse' },
        { value: 'VI', label: 'Very Inverse' },
        { value: 'EI', label: 'Extremely Inverse' },
        { value: 'LTSI', label: 'Long Time Standard Inverse' },
      ];
      
    }
    else if (selectedOption && selectedOption.value === 'LTSI') {
      this.setState({ k4: 120, a4: 1 }, () => {
      //  console.log("güncellendi k " + this.state.k); // Log the updated state value
        this.calculateData4(3); // Correctly calling the method using this keyword
      });
      

    }
    
    
  };
  DropDown5 = (selectedOption) => {

    //console.log("güncellendi ÖNCE  " + this.state.k); // Log the updated state value
    if (selectedOption && selectedOption.value === 'NI') {
      this.setState({ k5: 0.14, a5: 0.02 }, () => {
   //     console.log("güncellendi ESNASI  " + this.state.k); // Log the updated state value
   this.calculateData5(4); // Correctly calling the method using this keyword
      });
      
    }
    else if (selectedOption && selectedOption.value === 'VI') {
      this.setState({ k5: 13.5, a5: 1 }, () => {
      //  console.log("güncellendi k " + this.state.k); // Log the updated state value
      this.calculateData5(4); // Correctly calling the method using this keyword
      });

      
      
    }
    else if (selectedOption && selectedOption.value === 'EI') {
      this.setState({ k5: 80, a5: 2 }, () => {
   //     console.log("güncellendi k " + this.state.k); // Log the updated state value
   this.calculateData5(4); // Correctly calling the method using this keyword
      });
      

      const options = [
        { value: 'NI', label: 'Nominal Inverse' },
        { value: 'VI', label: 'Very Inverse' },
        { value: 'EI', label: 'Extremely Inverse' },
        { value: 'LTSI', label: 'Long Time Standard Inverse' },
      ];
      
    }
    else if (selectedOption && selectedOption.value === 'LTSI') {
      this.setState({ k5: 120, a5: 1 }, () => {
      //  console.log("güncellendi k " + this.state.k); // Log the updated state value
        this.calculateData5(4); // Correctly calling the method using this keyword
      });
      

    }
    
    
  };
   handleInputChange = (index, value) => {

    const { StateDeneme } = this.state;
    const newInputValues = [...StateDeneme]; // StateDeneme'den yeni bir kopya oluşturuyoruz
   // console.log("newInoutValues Eski :"+newInputValues)
    newInputValues[index] = value; // Belirli bir indekste yeni değeri ayarlıyoruz
    console.log("newInoutValues Yeni :"+newInputValues)
    const newFaultArray=newInputValues.map((_,indexf)=>
    indexf===index? value:''// Belirli indekse sahip item'i güncelle, diğerleri boş string olarak ayarla
    )
     console.log("fault  Yeni :"+newFaultArray)
    //console.log("newInoutValues Yeni :"+newInputValues)
    this.setState({ StateDeneme: newFaultArray },() => {
   //   console.log("güncellendi StateDeneme " +StateDeneme); // Log the updated state value
      this.hesapKitap(); // Correctly calling the method using this keyword
     
    }); // setState ile yeni dizi değerini güncelliyoruz  KISA DEVRE DEĞERLERİNİ DİZİ OLARAK ALDIN .
  };
  hesapKitap(){
   /*console.log(isNaN( this.state.StateDeneme[0] ))
    console.log(isNaN( this.state.StateDeneme[1] ))
    console.log(isNaN( this.state.StateDeneme[2] ))
    console.log(isNaN( this.state.StateDeneme[3] ))
    console.log(isNaN( this.state.StateDeneme[4] ))*/
    const { tms1, ct1, cmt1,k,a, tms2, ct2, cmt2,
      tms3, ct3, cmt3,tms4, ct4, cmt4 ,tms5,cmt5,ct5,StateDeneme} = this.state;
    const FaultsArray=[...StateDeneme]
        let y1,y2,y3,y4,y5;
    let Doluİndex=  FaultsArray.findIndex(item=>item !==''&& !isNaN(item))+1
    console.log(Doluİndex)
      switch(Doluİndex){
        
        case 1:
          console.log("girdi case 1 ve state 0  "+this.state.StateDeneme[0])
           y1 = tms1*(k / (Math.pow(this.state.StateDeneme[0] / (ct1*cmt1), a) - 1));
           console.log("girdi case 1 ve y1  "+y1)
          return [y1.toFixed(3) + " Röle  Saniye Açar"]
          case 2:
            console.log("girdi case 2 ")
             y1 = tms1*(k / (Math.pow(this.state.StateDeneme[1] / (ct1*cmt1), a) - 1));
             y2 = tms2*(k / (Math.pow(this.state.StateDeneme[1] / (ct2*cmt2), a) - 1));
            return       [y1.toFixed(3) + " Röle  Saniye Açar" ,y2.toFixed(3) + " Röle  Saniye Açar"]
            case 3:
               y1 = tms1*(k / (Math.pow(this.state.StateDeneme[2] / (ct1*cmt1), a) - 1));
               y2 = tms2*(k / (Math.pow(this.state.StateDeneme[2] / (ct2*cmt2), a) - 1));
               y3 = tms3*(k / (Math.pow(this.state.StateDeneme[2] / (ct3*cmt3), a) - 1));
              return  [y1.toFixed(3) + " Röle  Saniye Açar" ,y2.toFixed(3) + " Röle  Saniye Açar",y3.toFixed(3)+" Saniyede Röle Açar"]
              case 4:
                 y1 = tms1*(k / (Math.pow(this.state.StateDeneme[3] / (ct1*cmt1), a) - 1));
                y2 = tms2*(k / (Math.pow(this.state.StateDeneme[3] / (ct2*cmt2), a) - 1));
                 y3 = tms3*(k / (Math.pow(this.state.StateDeneme[3] / (ct3*cmt3), a) - 1));
               y4 = tms4*(k / (Math.pow(this.state.StateDeneme[3] / (ct4*cmt4), a) - 1));
               return  [y1.toFixed(3) + " Röle  Saniye Açar" ,y2.toFixed(3) + " Röle  Saniye Açar",y3.toFixed(3)+" Saniyede Röle Açar",y4.toFixed(3)+" Saniyede Röle Açar"]
                case 5:
                  y1 = tms1*(k / (Math.pow(this.state.StateDeneme[4] / (ct1*cmt1), a) - 1));
                  y2 = tms2*(k / (Math.pow(this.state.StateDeneme[4] / (ct2*cmt2), a) - 1));
                   y3 = tms3*(k / (Math.pow(this.state.StateDeneme[4] / (ct3*cmt3), a) - 1));
                 y4 = tms4*(k / (Math.pow(this.state.StateDeneme[4] / (ct4*cmt4), a) - 1));
                 y5 = tms5*(k / (Math.pow(this.state.StateDeneme[4] / (ct5*cmt5), a) - 1));
                 return  [y1.toFixed(3) + " Röle  Saniye Açar" ,y2.toFixed(3) + " Röle  Saniye Açar",y3.toFixed(3)+" Saniyede Röle Açar",
                 y4.toFixed(3)+" Saniyede Röle Açar",y5.toFixed(3)+" Saniyede Röle Açar"]




      }




    
   /*
   let y1 = tms1*(k / (Math.pow(this.state.StateDeneme[0] / (ct1*cmt1), a) - 1));
   let y2 = tms2*(k / (Math.pow(this.state.StateDeneme[1] / (ct2*cmt2), a) - 1));
   let y3 = tms3*(k / (Math.pow(this.state.StateDeneme[2] / (ct3*cmt3), a) - 1));
   let y4 = tms4*(k / (Math.pow(this.state.StateDeneme[3] / (ct4*cmt4), a) - 1));*/
   
    // return [y1.toFixed(3)  ,+y2.toFixed(3),+y3.toFixed(3),+y4.toFixed(3)  ] ; 
    return [0,0,0,0,0]
  }
 
  render() {

 
    
    ;
    return (
      
      <div>
   
        <div className="anadiv_chart_and_configrasyon">  
          <Chart
         className="chart"
          options={this.state.options}
          series={this.state.series}
          type="line"
         
        /> 
       </div>
      
   <div className=" tanitim" > <h4>AŞAĞIDAKİ  EKRANDA BİRDAN FAZLA RÖLENİN CONFİGRASYON AYARLAMALARINI YAPABİLİRSİNİZ</h4> </div>

  

        <div className="kare">
        <form className="form-container1">
        <div >   <Select
          value={this.state.selectedOption}
          onChange={this.handleChange}
          options={options}
          placeholder='Eğri Tipi Seçin'
          
         
        /> </div>
   
       
            <input className="inputPlaceholder"
                  
           style={{ width: '20vh', height: '1vh', padding: '5px', fontSize: '14px' }} 
              type="number"
              name="tms1"
              value={this.state.tms1}
              onChange={this.handleChange1}
              placeholder="Eğri seçimini Girin"
            />
    
          <br />
     
            <input   className="inputPlaceholder"
            style={{ width: '20vh', height: '1vh', padding: '5px', fontSize: '14px' }}
      //     className={Styles.inputNumber}
              type="number"
              name="ct1"
              value={this.state.ct1}
              onChange={this.handleChange1}
              placeholder="Akım Trafosu Değeri"
            />
       
          <br />
        
       
            <input
            className="inputPlaceholder"
            style={{ width: '20vh', height: '1vh', padding: '5px', fontSize: '14px' }}
              type="number"
              name="cmt1"
              value={this.state.cmt1}
              onChange={this.handleChange1}
              placeholder="Akım Çarpanı"
            />
        
        </form>
  
        <form className="form-container2">

        <div >   <Select
          value={this.state.selectedOption}
          onChange={this.DropDown2}
          options={options}
          placeholder='Eğri Tipi Seçin'
          
         
        /> </div>
        
         
         
            <input     className="inputPlaceholder"
          style={{ width: '20vh', height: '1vh', padding: '5px', fontSize: '14px' }}
              type="number"
              name="tms2"
              value={this.state.tms2}
              onChange={this.handleChange2}
              placeholder="Eğrinin Değerini Giriniz"
            />
          
          <br />
        
         
            <input  className="inputPlaceholder"
               style={{ width: '20vh', height: '1vh', padding: '5px', fontSize: '14px' }}
              type="number"
              name="ct2"
              value={this.state.ct2}
              onChange={this.handleChange2}
              placeholder="Akım Trafosu Değeri"
            />
         
          <br />
         
       
            <input className="inputPlaceholder"
               style={{ width: '20vh', height: '1vh', padding: '5px', fontSize: '14px' }}
              type="number"
              name="cmt2"
              value={this.state.cmt2}
              onChange={this.handleChange2}
              placeholder="Akım Çarpanı"
            />
          
        </form>
        <form className="form-container3">
      
        <div >   <Select
          value={this.state.selectedOption}
          onChange={this.DropDown3}
          options={options}
          placeholder='Eğri Tipi Seçin'
          
         
        /> </div>
       
        
            <input  className="inputPlaceholder"
               style={{ width: '20vh', height: '1vh', padding: '5px', fontSize: '14px' }}
              type="number"
              name="tms3"
              value={this.state.tms3}
              onChange={this.handleChange3}
              placeholder="Eğrinin Değerini Giriniz"
            />
        
          <br />
     
         
            <input className="inputPlaceholder"
            style={{ width: '20vh', height: '1vh', padding: '5px', fontSize: '14px' }}
              type="number"
              name="ct3"
              value={this.state.ct3}
              onChange={this.handleChange3}
              placeholder="Akım Trafosu Değeri"
            />
        
          <br />
         
        
            <input className="inputPlaceholder"
       style={{ width: '20vh', height: '1vh', padding: '5px', fontSize: '14px' }}
              type="number"
              name="cmt3"
              value={this.state.cmt3}
              onChange={this.handleChange3}
              placeholder="Akım Çarpanı"
            />
        
        </form>
        <form className="form-container4">
         
      
        <div >   <Select
          value={this.state.selectedOption}
          onChange={this.DropDown4}
          options={options}
          placeholder='Eğri Tipi Seçin'
          
         
        /> </div>
     
      
            <input  className="inputPlaceholder"
           style={{ width: '20vh', height: '1vh', padding: '5px', fontSize: '14px' }}
              type="number"
              name="tms4"
              value={this.state.tms4}
              onChange={this.handleChange4}
              placeholder="Eğrinin Değerini Giriniz"
            />
     
          <br />
         
 
            <input className="inputPlaceholder"
            style={{ width: '20vh', height: '1vh', padding: '5px', fontSize: '14px' ,backgroundColor: 'lightgrey'}}
             
              type="number"
              name="ct4"
              value={this.state.ct4}
              onChange={this.handleChange4}
              placeholder="Akım Trafosu Değeri"
            />
        
          <br />
         
            <input className="inputPlaceholder"
              style={{ width: '20vh', height: '1vh', padding: '5px', fontSize: '14px' }}
              type="number"
              name="cmt4"
              value={this.state.cmt4}
              onChange={this.handleChange4}
              placeholder="Akım Çarpanı"
            />
          
        </form>
        <form className="form-container5">
    
            <div >   <Select
          value={this.state.selectedOption}
          onChange={this.DropDown5}
          options={options}
          placeholder='Eğri Tipi Seçin'
          
         
        /> </div>
            <input  className="inputPlaceholder"
              style={{ width: '20vh', height: '1vh', padding: '5px', fontSize: '14px' }}
              type="number"
              name="tms5"
              value={this.state.tms5}
              onChange={this.handleChange5}
               placeholder='Eğri Değerini Giriniz'
            />
        
          <br />
         
          
            
            <input className="inputPlaceholder"
            style={{ width: '20vh', height: '1vh', padding: '5px', fontSize: '14px' }}
            type="number"
              name="ct5"
              value={this.state.ct5}
              onChange={this.handleChange5}
              placeholder='Eğri Değerini Giriniz'
            />
        
          <br />
      
         
            <input  className="inputPlaceholder"
              style={{ width: '20vh', height: '1vh', padding: '5px', fontSize: '14px' }}
              type="number"
              name="cmt5"
              value={this.state.cmt5}
              onChange={this.handleChange5}
              placeholder='Akım Çarpanı'
            />
       
        </form>
        </div>
         {/*}  <div className="react-table"><DataTable 
        kisa_devre_react_Table={this.state.Kisa_Devre_React_Table}
        
        röle1Data={this.state.dataY2_React_Table} röle2Data={this.state.series[1].data} röle3Data={this.state.series[2].data}
        röle4Data={this.state.series[3].data} röle5Data={this.state.series[4].data}/> </div>  */}
        <div className=" tanitim" > <h4>AYARLADIĞINIZ RÖLELERİN KISA DEVRE AKIMLARINA KARŞI DAVRANIŞLARINI İNCELEYEBİLİRSİNİZ</h4> </div>
        <div className="electric-container">
      <div className="electric-line">
      <div className="text">Enerjinin Akış Yönü</div>
      </div>
    </div>
        <ModernCircles onInputChange={this.handleInputChange} 
        Result_Relay1={this.hesapKitap()}/>
        
       <div>{this.hesapKitap()} </div>
      </div>
      
     /* <div>
   <Chart
         className="chart"
          options={this.state.options}
          series={this.state.series}
          type="line"
          width="900"
        />
      </div>*/
      
    );
  }
}

export default Emre2;
