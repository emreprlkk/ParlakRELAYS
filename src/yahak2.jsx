import React, { Component } from "react";
import Chart from "react-apexcharts";
import   "./form.css"
import { FiChevronsDown } from "react-icons/fi";
import { FiChevronsUp } from "react-icons/fi";
import ModernCircles from "./sim.jsx"
import Select from 'react-select'
import Sidebar from './ModernSidebar.jsx';
import { isNumber } from "@mui/x-data-grid/internals";
import { toast, ToastContainer } from 'react-toastify';
import LoaderComponent from './LoaderComponent.jsx';
const options = [
  { value: 'NI', label: 'Nominal Inverse' },
  { value: 'VI', label: 'Very Inverse' },
  { value: 'EI', label: 'Extremely Inverse' },
  { value: 'LTSI', label: 'Long Time Inverse' },
];

const optionsii = [
  { value: 'NI', label: 'Nominal Inverse' },
  { value: 'VI', label: 'Very Inverse' },
  { value: 'EI', label: 'Extremely Inverse' },
  { value: 'LTSI', label: 'Long Time Inverse' },
  { value: 'DFT', label: 'Definite Tme' }
];


class Emre2 extends Component {
  constructor(props) 
  {
    super(props);
 
  //  const data_React_table =  Array.from({ length: 2000 }, (_, i) => 100 + (i * 5))
    const KisaDevreAkimlari_default=[];
    for(let i=0 ; i<=7000; i+=50){
      KisaDevreAkimlari_default.push(i);
    }
    this.state = {
      tms1: '',
      ct1: '',
      cmt1: '',
      DataY_1:[],
      KisaDevreAkimlari:KisaDevreAkimlari_default,
      loading: false,

      
      DTİİ1:false,
      DTİİ2:false,
      DTİİ3:false,
      DTİİ4:false,
      DTİİ5:false,
      DTİİİ1:false,
      DTİİİ2:false,
      DTİİİ3:false,
      DTİİİ4:false,
      DTİİİ5:false,
      
      StateDeneme:[],
      isVisibleDropİcon1:true,
      isVisibleDropİcon2:false,
      isVisibleDropİcon3:false,

     //Kisa_Devre_React_Table: data_React_table,
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

      iik1: 0.14,
      iia1:0.02,
      iik2: 0.14,
      iia2:0.02,
      iik3: 0.14,
      iia3:0.02,
      iik4: 0.14,
      iia4:0.02,
      iik5: 0.14,
      iia5:0.02,
      Röle1Egri: 'Eğri Tipi', // Seçili seçeneği tutacak durum
      Röle2Egri: 'Eğri Tipi',
      Röle3Egri: 'Eğri Tipi',
      Röle4Egri: 'Eğri Tipi',
      Röle5Egri: 'Eğri Tipi',

      Röle1Egri_ii: 'Eğri Tipi',
      Röle2Egri_ii: 'Eğri Tipi',
      Röle3Egri_ii: 'Eğri Tipi',
      Röle4Egri_ii: 'Eğri Tipi',
      Röle5Egri_ii: 'Eğri Tipi',
      // Seçili seçeneği tutacak durum
      
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
      iitms1:'',
      iict1:'',
      iicm1:'',

      iitms2:'',
      iict2:'',
      iicm2:'',

      iitms3:'',
      iict3:'',
      iicm3:'',

      iitms4:'',
      iict4:'',
      iicm4:'',

      iitms5:'',
      iict5:'',
      iicm5:'',

      iiitms1:'',
      iiict1:'',
      iiicm1:'',

      iiitms2:'',
      iiict2:'',
      iiicm2:'',

      iiitms3:'',
      iiict3:'',
      iiicm3:'',

      iiitms4:'',
      iiict4:'',
      iiicm4:'',

      iiitms5:'',
      iiict5:'',
      iiicm5:'',
      
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
       
          type: 'line',
          stacked: false,
       
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
          curve: 'straight', // Bu ayar çizgileri daha yumuşak yapar
          width: 3 // Çizgilerin kalınlığını burada ayarlayabilirsiniz
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
          align: 'center',
          margin: 60,
          offsetX: 0,
          offsetY: 0,
          floating: false,
          style: {
            fontSize:  '14px',
            fontWeight:  'bold',
            fontFamily:  undefined,
            color:  'black'
          }
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
        colors: ['#000000', '#34d399', '#e65100', '#01579b','#A5A58D'], // Çizgi renkleri burada ayarlanır,
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
    //ilk kez render edildiğinde ve DOM'a eklendiğinde tek seferlik çalışır.
    //sadece ilk render sonrası çağrılır ve componentin props veya state değiştiğinde tekrar çağrılmez.
   /* this.handleChange();
    this.calculateData1();
   this.calculateData2();
    this.calculateData3();
    this.calculateData4();
   this.calculateData5();
   this.handleInputChange();
   this.DropDown2();*/


  }
 componentDidUpdate(prevState) {
  // bir React componentinin props veya state değiştiğinde her seferinde çağrılır.
  //componentDidUpdate her render sonrası çağrılır, yani hem ilk render sonrası hem de props/state değişiklikleri sonrası çağrılır.
   // Eğer progress değerimiz değiştiyse, bu metodu tetikleyin

    
  
  }
   
  handleChange1(e) {
    //alert('Please fill in all fields.');
    const { name, value } = e.target;
    this.setState({ [name]: parseFloat(value) }, () => this.calculateData1(0));
  }
  Dropİcon=(event)=>{
    const {isVisibleDropİcon1,isVisibleDropİcon2,isVisibleDropİcon3}=this.state
    const iconName = event.currentTarget.getAttribute('data-icon');
    if(iconName==="Firstİcon"){
      this.setState((prevState) => {
    
        return { isVisibleDropİcon1: !prevState.isVisibleDropİcon1 };
      }, () => 
      {
      this.calculateData1(0)
      });
      console.log(`Icon name: ${iconName}`);
    }
    else if(iconName==="Secondİcon"){
      this.setState((prevState) => {
        if(isVisibleDropİcon1 )
        { 
          return { isVisibleDropİcon2: !prevState.isVisibleDropİcon2 };
        }

         else if ( !isVisibleDropİcon1 && isVisibleDropİcon2){
          return { isVisibleDropİcon2: !prevState.isVisibleDropİcon2 };
         }
      
      }, () => {
     
        if (!isVisibleDropİcon1) {
          toast.error("I>> kullanabilmeniz için I> 'ın aktif olması gerekir");
          // console.log("toast çalışıyor olmalı");
        }
       this.calculateData1(0);
       this.calculateData2(1);
       this.calculateData3(2);
       this.calculateData4(3);
       this.calculateData5(4);
       this.hesapKitap();
       
      });
      
      //console.log(`Icon name: ${iconName}`);
    }


    
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
  relay1fonkI_0= async(n)=>{
  const {KisaDevreAkimlari, tms1, ct1, cmt1,k1,a1  } = this.state;
  this.setState({ loading: true });
  { 
      // 1. rölede  sadece I> hesaplaması yapılıyor.
      console.log("1.röle I> ÇALIŞMALI")
        const newdataY = [];
        let index=0;
        console.log("state kontrolleri " +KisaDevreAkimlari.length, tms1, ct1, cmt1,k1,a1)
         
        for (let i = 0; i <= 7000; i+=50) {
           
         // console.log( "kisadevre "+yy )
         
          let y1 = tms1*(k1 / (Math.pow(KisaDevreAkimlari[index] / (ct1*cmt1), a1) - 1));
    
          if(y1==Infinity){
            y1=0.0000001;
          }
        else  if(KisaDevreAkimlari[index]< (ct1*cmt1)){
            y1=0.0000001
          }
          newdataY.push(y1.toFixed(3));
          index++
        }
    
        this.setState(prevState =>
           ({
          series: prevState.series.map((serie, index) => {
            if (index === n) {
              return { ...serie, data: newdataY };
            }
            return serie;
          }),
          options: {
            ...this.state.options,
            xaxis: {
              categories: KisaDevreAkimlari,
              type: 'Amper',
              title: {
                text: 'Kisa Devre Akimleri (Amper)',
              },
              tickAmount: 10,
            },
          },
        }), 
        () => {
          this.setState({ loading: false });
         
        });
      }
   
  

  }
  relay1fonkI_00= async(n)=>{
    const {KisaDevreAkimlari, tms1, ct1, cmt1,iik1,iia1,iitms1,iict1,iicm1,DTİİ1 ,k1,a1 } = this.state;

      this.setState({ loading: true });
      
    if (isNumber(tms1) && isNumber(ct1) && isNumber(cmt1) && ( (iitms1==''||isNaN(iitms1)) || (iict1==''|| isNaN(iict1))  
   || (iicm1=='' ||isNaN(iicm1) )) ) {
//2. kademe aktif olmasına rağmen sadece 1. kademede veri var sadece 1. kademeyi hesaplatıp grafikte göstert.

this.relay1fonkI_0(0);

    }
   else if (isNumber(tms1) && isNumber(ct1) && isNumber(cmt1) && ( isNumber(iitms1) && isNumber(iict1) && isNumber(iicm1) ) ) {
      //kullanıcı 2. kademeyi aktif etmiş ve  röle 1 için hem I> hem de I>> hesaplatmak istiyor.

      const newdataY = [];
      let index=0;
      for (let i = 0; i <=7000; i+=50) {
         ////1. kademenin ayarları hesaplanıyor..
        if(i>=(iicm1*iict1)){
          break;
        }
        
         let y1 = tms1*(k1 / (Math.pow(KisaDevreAkimlari[index] / (ct1*cmt1),a1) - 1));
     
         if(y1==Infinity){
           y1=1;
         }
       else  if(KisaDevreAkimlari[index]< (ct1*cmt1)){
           y1=0.0000001
         }
         newdataY.push(y1.toFixed(3));
         index++
       }
     // console.log(DTİİ1)
      if (DTİİ1===false){
        for(let ii=(iicm1*iict1) ; ii<=7000;ii+=50){
          /// ikinci kademenin eğri ayarlarına geçiliyor.. 
          let y2 = iitms1*(iik1 / (Math.pow(KisaDevreAkimlari[index] / (iicm1*iict1), iia1) - 1));
    
          if(y2==Infinity){
            y2=1;
          }
        else  if(KisaDevreAkimlari[index]< (iicm1*iict1)){
            y2=0.0000001
          }
          newdataY.push(y2.toFixed(3));
          index++
        }
      }
      else{
        for(let ii=(iicm1*iict1) ; ii<=7000;ii+=50){
          newdataY.push(iitms1);
          index++
        }
  
  
      }
      
     // Series dizisini güncelleme
     this.setState(prevState => 
      ({
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
        
    
    }),
    () => {
      this.setState({ loading: false });
     
    });
    
    
    

    }
    
   
  }
  relay2fonkI_0= async(n)=>{
    const {KisaDevreAkimlari, tms2, ct2, cmt2,k2,a2  } = this.state;

      this.setState({ loading: true });
     

      { 
        // 1. rölede  sadece I> hesaplaması yapılıyor.
        console.log("2.röle I> ÇALIŞMALI")
          const newdataY = [];
          let index=0;
         // console.log("state kontrolleri " +KisaDevreAkimlari.length, tms1, ct1, cmt1,k1,a1)
           
          for (let i = 0; i <= 7000; i+=50) {
             
           // console.log( "kisadevre "+yy )
           
            let y2 = tms2*(k2 / (Math.pow(KisaDevreAkimlari[index] / (ct2*cmt2), a2) - 1));
      
            if(y2==Infinity){
              y2=0.0000001;
            }
          else  if(KisaDevreAkimlari[index]< (ct2*cmt2)){
              y2=0.0000001
            }
            newdataY.push(y2.toFixed(3));
            index++
          }
      
         this.setState(prevState => 
          ({
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
            
        
        }),() => {
          this.setState({ loading: false });
         
        });
       
        }
    }
 
  relay2fonkII_00= async(n)=>{
    const {KisaDevreAkimlari, tms2, ct2, cmt2,k2,a2,iitms2,iict2,iicm2,DTİİ2,iik2,iia2 } = this.state;
 
      this.setState({ loading: true });
     
   
    if (isNumber(tms2) && isNumber(ct2) && isNumber(cmt2) && ( (iitms2==''||isNaN(iitms2)) || (iict2==''|| isNaN(iict2))  
   || (iicm2=='' ||isNaN(iicm2) )) ) {
//2. kademe aktif olmasına rağmen sadece 1. kademede veri var sadece 1. kademeyi hesaplatıp grafikte göstert.

this.relay2fonkI_0(1);

    }
   else if (isNumber(tms2) && isNumber(ct2) && isNumber(cmt2) && ( isNumber(iitms2) && isNumber(iict2) && isNumber(iicm2) ) ) {
      //kullanıcı 2. kademeyi aktif etmiş ve  röle 1 için hem I> hem de I>> hesaplatmak istiyor.

      const newdataY = [];
      let index=0;
      for (let i = 0; i <=7000; i+=50) {
         ////1. kademenin ayarları hesaplanıyor..
        if(i>=(iicm2*iict2)){
          break;
        }
        
         let y2 = tms2*(k2 / (Math.pow(KisaDevreAkimlari[index] / (ct2*cmt2), a2) - 1));
     
     
         if(y2==Infinity){
          y2=1;
         }
       else  if(KisaDevreAkimlari[index]< (ct2*cmt2)){
        y2=0.0000001
         }
         newdataY.push(y2.toFixed(3));
         index++
       }

      if (DTİİ2===false){
        for(let ii=(iicm2*iict2) ; ii<=7000;ii+=50){
          /// ikinci kademenin eğri ayarlarına geçiliyor.. 
          let y2 = iitms2*(iik2 / (Math.pow(KisaDevreAkimlari[index] / (iicm2*iict2), iia2) - 1));
    
          if(y2==Infinity){
            y2=1;
          }
        else  if(KisaDevreAkimlari[index]< (iicm2*iict2)){
            y2=0.0000001
          }
          newdataY.push(y2.toFixed(3));
          index++
        }
      }
      else{
        for(let ii=(iicm2*iict2) ; ii<=7000;ii+=50){
          newdataY.push(iitms2);
          index++
        }
  
  
      }
      
     // Series dizisini güncelleme
     this.setState(prevState => 
      ({
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
        
    
    }),() => {
      this.setState({ loading: false });
     
    });

    }
    
  
  }
  relay3fonkI_0= async(n)=>{
    const {KisaDevreAkimlari, tms3, ct3, cmt3,k3,a3   } = this.state;

      this.setState({ loading: true });
     

      { 
        // 3. rölede  sadece I> hesaplaması yapılıyor.
        console.log("3.röle I> ÇALIŞMALI")
          const newdataY = [];
          let index=0;
         // console.log("state kontrolleri " +KisaDevreAkimlari.length, tms1, ct1, cmt1,k1,a1)
           
          for (let i = 0; i <= 7000; i+=50) {
             
           // console.log( "kisadevre "+yy )
           
            let y3 = tms3*(k3 / (Math.pow(KisaDevreAkimlari[index] / (ct3*cmt3), a3) - 1));
      
            if(y3==Infinity){
              y3=0.0000001;
            }
          else  if(KisaDevreAkimlari[index]< (ct3*cmt3)){
              y3=0.0000001
            }
            newdataY.push(y3.toFixed(3));
            index++
          }
      
         this.setState(prevState => 
          ({
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
            
        
        }),() => {
          this.setState({ loading: false });
         
        });
  
        }
    }
    relay3fonkII_00= async(n)=>{

      const {KisaDevreAkimlari, tms3, ct3, cmt3,k3,a3,iitms3,iict3,iicm3,DTİİ3,iik3,iia3  } = this.state;
  
        this.setState({ loading: true });
       
      if (isNumber(tms3) && isNumber(ct3) && isNumber(cmt3) && ( (iitms3==''||isNaN(iitms3)) || (iict3==''|| isNaN(iict3))  
     || (iicm3=='' ||isNaN(iicm3) )) ) {
  //2. kademe aktif olmasına rağmen sadece 1. kademede veri var sadece 1. kademeyi hesaplatıp grafikte göstert.
 // console.log("relay00 çalıştı "+iitms2)
  this.relay3fonkI_0(2);
  
      }
     else if (isNumber(tms3) && isNumber(ct3) && isNumber(cmt3) && ( isNumber(iitms3) && isNumber(iict3) && isNumber(iicm3) ) ) {
        //kullanıcı 2. kademeyi aktif etmiş ve  röle 1 için hem I> hem de I>> hesaplatmak istiyor.
  
        const newdataY = [];
        let index=0;
        for (let i = 0; i <=7000; i+=50) {
           ////1. kademenin ayarları hesaplanıyor..
          if(i>=(iicm3*iict3)){
            break;
          }
          
           let y3 = tms3*(k3 / (Math.pow(KisaDevreAkimlari[index] / (ct3*cmt3), a3) - 1));
       
       
           if(y3==Infinity){
            y3=0.0000001;
           }
         else  if(KisaDevreAkimlari[index]< (ct3*cmt3)){
          y3=0.0000001
           }
           newdataY.push(y3.toFixed(3));
           index++
         }
       
        if (DTİİ3===false){
          for(let ii=(iicm3*iict3) ; ii<=7000;ii+=50){
            /// ikinci kademenin eğri ayarlarına geçiliyor.. 
            let y3 = iitms3*(iik3 / (Math.pow(KisaDevreAkimlari[index] / (iicm3*iict3), iia3) - 1));
      
            if(y3==Infinity){
              y3=0.0000001;
            }
          else  if(KisaDevreAkimlari[index]< (iicm3*iict3)){
              y3=0.0000001
            }
            newdataY.push(y3.toFixed(3));
            index++
          }
        }
        else{
          for(let ii=(iicm3*iict3) ; ii<=7000;ii+=50){
            newdataY.push(iitms3);
            index++
          }
    
    
        }
        
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
          
      
      }),() => {
        this.setState({ loading: false });
       
      });
  
      }
      
    
    }
    relay4fonkI_0=async(n)=>{  const {KisaDevreAkimlari, tms4,
       ct4, cmt4,k4,a4,isVisibleDropİcon1,isVisibleDropİcon2,isVisibleDropİcon3,iitms4,iict4,iicm4,iiitms4,iiict4,iiicm4,DTİİ4,DTİİİ4  } = this.state;
      
        this.setState({ loading: true });
       

       { 
        // 4. rölede  sadece I> hesaplaması yapılıyor.
        console.log("4.röle I> ÇALIŞMALI")
          const newdataY = [];
          let index=0;
         // console.log("state kontrolleri " +KisaDevreAkimlari.length, tms1, ct1, cmt1,k1,a1)
           
          for (let i = 0; i <= 7000; i+=50) {
             
           // console.log( "kisadevre "+yy )
           
            let y4 = tms4*(k4 / (Math.pow(KisaDevreAkimlari[index] / (ct4*cmt4), a4) - 1));
      
            if(y4==Infinity){
              y4=0.0000001;
            }
          else  if(KisaDevreAkimlari[index]< (ct4*cmt4)){
              y4=0.0000001
            }
            newdataY.push(y4.toFixed(3));
            index++
          }
      
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
            
        
        }),() => {
          this.setState({ loading: false });
         
        });
    
        }

    }
    relay4fonkII_0=async(n)=>{
      const {KisaDevreAkimlari, tms4,
        ct4, cmt4,k4,a4,iitms4,iict4,iicm4,DTİİ4,iik4,iia4  } = this.state;
 
          this.setState({ loading: true });
         
    
      if (isNumber(tms4) && isNumber(ct4) && isNumber(cmt4) && ( (iitms4==''||isNaN(iitms4)) || (iict4==''|| isNaN(iict4))  
      || (iicm4=='' ||isNaN(iicm4) )) ) {
   //2. kademe aktif olmasına rağmen sadece 1. kademede veri var sadece 1. kademeyi hesaplatıp grafikte göstert.
   this.relay4fonkI_0(3);
   
       }
      else if (isNumber(tms4) && isNumber(ct4) && isNumber(cmt4) && ( isNumber(iitms4) && isNumber(iict4) && isNumber(iicm4) ) ) {
         //kullanıcı 2. kademeyi aktif etmiş ve  röle 1 için hem I> hem de I>> hesaplatmak istiyor.
   
         const newdataY = [];
         let index=0;
         for (let i = 0; i <=7000; i+=50) {
            ////1. kademenin ayarları hesaplanıyor..
           if(i>=(iicm4*iict4)){
             break;
           }
           
            let y4= tms4*(k4 / (Math.pow(KisaDevreAkimlari[index] / (ct4*cmt4), a4) - 1));
        
        
            if(y4==Infinity){
             y4=0.0000001;
            }
          else  if(KisaDevreAkimlari[index]< (ct4*cmt4)){
           y4=0.0000001
            }
            newdataY.push(y4.toFixed(3));
            index++
          }
         console.log(DTİİ4)
         if (DTİİ4===false){
           for(let ii=(iicm4*iict4) ; ii<=7000;ii+=50){
             /// ikinci kademenin eğri ayarlarına geçiliyor.. 
             let y4 = iitms4*(iik4 / (Math.pow(KisaDevreAkimlari[index] / (iicm4*iict4), iia4) - 1));
       
             if(y4==Infinity){
               y4=0.0000001;
             }
           else  if(KisaDevreAkimlari[index]< (iicm4*iict4)){
               y4=0.0000001
             }
             newdataY.push(y4.toFixed(3));
             index++
           }
         }
         else{
           for(let ii=(iicm4*iict4) ; ii<=7000;ii+=50){
             newdataY.push(iitms4);
             index++
           }
     
     
         }
         
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
           
       
       }),() => {
        this.setState({ loading: false });
       
      });
   
       }

    }
    relay5fonkI_0= async(n)=>{  const {KisaDevreAkimlari, tms5,
      ct5, cmt5,k5,a5,isVisibleDropİcon1,isVisibleDropİcon2,isVisibleDropİcon5,iitms5,iict5,iicm5,iiitms5,iiict5,iiicm5,DTİİ5,DTİİİ5  } = this.state;
    
        this.setState({ loading: true });
       
  
      { 
       // 5. rölede  sadece I> hesaplaması yapılıyor.
       console.log("5.röle I> ÇALIŞMALI")
         const newdataY = [];
         let index=0;
        // console.log("state kontrolleri " +KisaDevreAkimlari.length, tms1, ct1, cmt1,k1,a1)
          
         for (let i = 0; i <= 7000; i+=50) {
            
          // console.log( "kisadevre "+yy )
          
           let y5= tms5*(k5 / (Math.pow(KisaDevreAkimlari[index] / (ct5*cmt5), a5) - 1));
     
           if(y5==Infinity){
             y5=0.0000001;
           }
         else  if(KisaDevreAkimlari[index]< (ct5*cmt5)){
             y5=0.0000001
           }
           newdataY.push(y5.toFixed(3));
           index++
         }
     
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
           
       
       }),() => {
        this.setState({ loading: false });
       
      });
      
       }

   }
   relay5fonkII_0= async(n)=>{
    const {KisaDevreAkimlari, tms5,
      ct5, cmt5,k5,a5,iitms5,iict5,iicm5,DTİİ5,iik5,iia5  } = this.state;

        this.setState({ loading: true });


    if (isNumber(tms5) && isNumber(ct5) && isNumber(cmt5) && ( (iitms5==''||isNaN(iitms5)) || (iict5==''|| isNaN(iict5))  
    || (iicm5=='' ||isNaN(iicm5) )) ) {
 //2. kademe aktif olmasına rağmen sadece 1. kademede veri var sadece 1. kademeyi hesaplatıp grafikte göstert.
 this.relay5fonkI_0(4);
 
     }
    else if (isNumber(tms5) && isNumber(ct5) && isNumber(cmt5) && ( isNumber(iitms5) && isNumber(iict5) && isNumber(iicm5) ) ) {
       //kullanıcı 2. kademeyi aktif etmiş ve  röle 1 için hem I> hem de I>> hesaplatmak istiyor.
 
       const newdataY = [];
       let index=0;
       for (let i = 0; i <=7000; i+=50) {
          ////1. kademenin ayarları hesaplanıyor..
         if(i>=(iicm5*iict5)){
           break;
         }
         
          let y5= tms5*(k5 / (Math.pow(KisaDevreAkimlari[index] / (ct5*cmt5), a5) - 1));
      
      
          if(y5==Infinity){
           y5=0.0000001;
          }
        else  if(KisaDevreAkimlari[index]< (ct5*cmt5)){
         y5=0.0000001
          }
          newdataY.push(y5.toFixed(3));
          index++
        }
       
       if (DTİİ5===false){
         for(let ii=(iicm5*iict5) ; ii<=7000;ii+=50){
           /// ikinci kademenin eğri ayarlarına geçiliyor.. 
           let y5 = iitms5*(iik5/ (Math.pow(KisaDevreAkimlari[index] / (iicm5*iict5), iia5) - 1));
     
           if(y5==Infinity){
             y5=0.0000001;
           }
         else  if(KisaDevreAkimlari[index]< (iicm5*iict5)){
             y5=0.0000001
           }
           newdataY.push(y5.toFixed(3));
           index++
         }
       }
       else{
         for(let ii=(iicm5*iict5) ; ii<=7000;ii+=50){
           newdataY.push(iitms5);
           index++
         }
   
   
       }
       
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
         
     
     }),() => {
      this.setState({ loading: false });
     
    });
 
     }

  }
  calculateData1(n) {
const {KisaDevreAkimlari, tms1, ct1, cmt1,k1,a1,isVisibleDropİcon1,isVisibleDropİcon2,isVisibleDropİcon3,iitms1,iict1,iicm1,iiitms1,iiict1,iiicm1,DTİİ1,DTİİİ1  } = this.state;
  
if(isVisibleDropİcon1 && isVisibleDropİcon2===false && isVisibleDropİcon3===false && (isNumber(tms1) && isNumber(ct1) && isNumber(cmt1)))
//1. RÖLEDE SADECE I>0 KULLANILIYOR DEMEKTİR.
{
 this.relay1fonkI_0(0);
}
else if(isVisibleDropİcon1 && isVisibleDropİcon2 && isVisibleDropİcon3===false && ( (isNumber(tms1) && isNumber(ct1) && isNumber(cmt1)) 
|| (isNumber(iitms1) && isNumber(iict1) && isNumber(iicm1))  ))
//1. RÖLEDE SADECE I> ve I >>  KULLANILIYOR DEMEKTİR.
{
  this.relay1fonkI_00(0);
}

else if(isVisibleDropİcon1 && isVisibleDropİcon2 && isVisibleDropİcon3 && (isNumber(tms1) && isNumber(ct1) && isNumber(cmt1)) 
&&(isNumber(iitms1) && isNumber(iict1) && isNumber(iicm1)) && (isNumber(iiitms1) && isNumber(iiict1) && isNumber(iiicm1)))
{
// 1. RÖEL İÇİN 3 KADEMEDE AKTİF.. 
 // console.log("üç kadamede aktif")
 console.log("1.röle  I> ve I >> VE I>>> ÇALIŞMALI")
  const newdataY = [];
  let index=0;

   
  for (let i = 0; i <= 7000; i+=50) {
     
    if(i>=(iicm1*iict1)){
      break;
    }
   
    let y1 = tms1*(k1 / (Math.pow(KisaDevreAkimlari[index] / (ct1*cmt1), a1) - 1));

  
    if(y1==Infinity){
      y1=1;
    }
else  if(KisaDevreAkimlari[index]< (ct1*cmt1)){
      y1=0.0000001
    }
    newdataY.push(y1.toFixed(3));
    index++
  }


  if (DTİİ1===false){
    for(let ii=(iicm1*iict1) ; ii<=7000;ii+=50){
      /// ikinci kademenin eğri ayarlarına geçiliyor.. 
      let y2 = iitms1*(k1 / (Math.pow(KisaDevreAkimlari[index] / (iicm1*iict1), a1) - 1));

      if(y2==Infinity){
        y2=1;
      }
    else  if(KisaDevreAkimlari[index]< (iicm1*iict1)){
        y2=0.0000001
      }
      newdataY.push(y2.toFixed(3));
      index++
    }
  }
  else{
     /// ikinci kademenin eğri ayarlarına geçiliyor.. 
    for(let ii=(iicm1*iict1) ; ii<=(iiicm1*iiict1);ii+=50){
      if(ii>=(iiicm1*iiict1)){
        break;
      }
      newdataY.push(iitms1);
      index++
    }


  }

  if(DTİİİ1===false){
    for(let iii=(iiicm1*iiict1) ; iii<=7000;iii+=50){
      /// üçüncü kademenin eğri ayarlarına geçiliyor.. 
      let y3 = iiitms1*(k1 / (Math.pow(KisaDevreAkimlari[index] / (iiicm1*iiict1), a1) - 1));
  
      if(y3==Infinity){
        y3=1;
      }
    else  if(KisaDevreAkimlari[index]< (iiicm1*iiict1)){
        y3=0.0000001
      }
      newdataY.push(y3.toFixed(3));
      index++
    }
  
  }
  else{
     /// üçüncü kademenin eğri ayarlarına geçiliyor.. 
    for(let ii=(iiicm1*iiict1) ; ii<=7000;ii+=50){
      newdataY.push(iiitms1);
      index++
    }

  }


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

}

}
  calculateData2(n) {
    const {KisaDevreAkimlari, tms2, ct2, cmt2,k2,a2,isVisibleDropİcon1,isVisibleDropİcon2,isVisibleDropİcon3,
      iitms2,iict2,iicm2,iiitms2,iiict2,iiicm2,DTİİ2,DTİİİ2  } = this.state;

   
    const newdataY2 = [];
    let index =  0;
if(isVisibleDropİcon1 && isVisibleDropİcon2 && isVisibleDropİcon3===false && ( (!isNumber(tms2) && !isNumber(ct2) && !isNumber(cmt2)) 
&& (isNumber(iitms2) && isNumber(iict2) && isNumber(iicm2))  )){
  toast.error("2. Röle için I> ayarlamadan I>> ayarlayamazsınız.")
}
  else  if(isVisibleDropİcon1 && isVisibleDropİcon2===false && isVisibleDropİcon3===false && (isNumber(tms2) && isNumber(ct2) && isNumber(cmt2)))
//2. RÖLEDE SADECE I>0 KULLANILIYOR DEMEKTİR.
{
 this.relay2fonkI_0(1);
}
else if(isVisibleDropİcon1 && isVisibleDropİcon2 && isVisibleDropİcon3===false && ( (isNumber(tms2) && isNumber(ct2) && isNumber(cmt2)) 
|| (isNumber(iitms2) && isNumber(iict2) && isNumber(iicm2))  ))
//2. RÖLEDE SADECE I> ve I >>  KULLANILIYOR DEMEKTİR.
{
 this.relay2fonkII_00(1);
}

else if(isVisibleDropİcon1 && isVisibleDropİcon2 && isVisibleDropİcon3 && (isNumber(tms2) && isNumber(ct2) && isNumber(cmt2)) 
&&(isNumber(iitms2) && isNumber(iict2) && isNumber(iicm2)) && (isNumber(iiitms2) && isNumber(iiict2) && isNumber(iiicm2)))
{
// 2. RÖLE İÇİN 3 KADEMEDE AKTİF.. 
 // console.log("üç kadamede aktif")

  const newdataY2 = [];
  let index=0;

   
  for (let i = 0; i <= 7000; i+=50) {
     
    if(i>=(iicm2*iict2)){
      break;
    }
   
    let y2 = tms2*(k2 / (Math.pow(KisaDevreAkimlari[index] / (ct2*cmt2), a2) - 1));

  
    if(y2==Infinity){
      y2=1;
    }
else  if(KisaDevreAkimlari[index]< (ct2*cmt2)){
      y2=0.0000001
    }
    newdataY2.push(y2.toFixed(3));
    index++
  }


  if (DTİİ2===false){
    for(let ii=(iicm2*iict2) ; ii<=7000;ii+=50){
      /// ikinci kademenin eğri ayarlarına geçiliyor.. 
      let y2 = iitms2*(k2 / (Math.pow(KisaDevreAkimlari[index] / (iicm2*iict2), a2) - 1));

      if(y2==Infinity){
        y2=1;
      }
    else  if(KisaDevreAkimlari[index]< (iicm2*iict2)){
        y2=0.0000001
      }
      newdataY2.push(y2.toFixed(3));
      index++
    }
  }
  else{
     /// ikinci kademenin eğri ayarlarına geçiliyor.. 
    for(let ii=(iicm2*iict2) ; ii<=(iiicm2*iiict2);ii+=50){
      if(ii>=(iiicm2*iiict2)){
        break;
      }
      newdataY2.push(iitms2);
      index++
    }


  }

  if(DTİİİ2===false){
    for(let iii=(iiicm2*iiict2) ; iii<=7000;iii+=50){
      /// üçüncü kademenin eğri ayarlarına geçiliyor.. 
      let y3 = iiitms2*(k2 / (Math.pow(KisaDevreAkimlari[index] / (iiicm2*iiict2), a2) - 1));
  
      if(y3==Infinity){
        y3=1;
      }
    else  if(KisaDevreAkimlari[index]< (iiicm2*iiict2)){
        y3=0.0000001
      }
      newdataY2.push(y3.toFixed(3));
      index++
    }
  
  }
  else{
     /// üçüncü kademenin eğri ayarlarına geçiliyor.. 
    for(let ii=(iiicm2*iiict2) ; ii<=7000;ii+=50){
      newdataY2.push(iiitms2);
      index++
    }

  }


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


       
  }
  calculateData3(n) {
    const {isVisibleDropİcon1,isVisibleDropİcon2,isVisibleDropİcon3, tms3, ct3, cmt3,k3,a3,iitms3,iict3,iicm3 } = this.state;
      if(isVisibleDropİcon1 && isVisibleDropİcon2===false && isVisibleDropİcon3===false && (isNumber(tms3) && isNumber(ct3) && isNumber(cmt3)))
    //3. RÖLEDE SADECE I>0 KULLANILIYOR DEMEKTİR.
    {this.relay3fonkI_0(2)
    }
    else if(isVisibleDropİcon1 && isVisibleDropİcon2 && isVisibleDropİcon3===false && ( (isNumber(tms3) && isNumber(ct3) && isNumber(cmt3)) 
    || (isNumber(iitms3) && isNumber(iict3) && isNumber(iicm3))  ))
    //2. RÖLEDE SADECE I> ve I >>  KULLANILIYOR DEMEKTİR.
    {
      this.relay3fonkII_00(2);
       
  }
}
  calculateData4(n) {
    const {KisaDevreAkimlari, tms4,  ct4, cmt4,k4,a4,isVisibleDropİcon1,isVisibleDropİcon2,isVisibleDropİcon3,iitms4,iict4,iicm4,iiitms4,iiict4,iiicm4,DTİİ4,DTİİİ4  } = this.state;
    
    const newDataY = [];
    let index =  0;
  // console.log( "hjhhj  "+tms4 ,ct4,cmt4 )
  if(isVisibleDropİcon1 && isVisibleDropİcon2===false && isVisibleDropİcon3===false && (isNumber(tms4) && isNumber(ct4) && isNumber(cmt4)))
  //4. RÖLEDE SADECE I>0 KULLANILIYOR DEMEKTİR.
  {this.relay4fonkI_0(3)
  }
  else if(isVisibleDropİcon1 && isVisibleDropİcon2 && isVisibleDropİcon3===false && ( (isNumber(tms4) && isNumber(ct4) && isNumber(cmt4)) 
  || (isNumber(iitms4) && isNumber(iict4) && isNumber(iicm4))  ))
  //4. RÖLEDE SADECE I> ve I >>  KULLANILIYOR DEMEKTİR.
  {
    this.relay4fonkII_0(3);
     
}  
  }
  calculateData5(n) {
    const { tms5,  ct5, cmt5,k5,a5,isVisibleDropİcon1,isVisibleDropİcon2,isVisibleDropİcon3,iitms5,iict5,iicm5
      } = this.state;
    
    const newDataY = [];
    let index =  0;

  if(isVisibleDropİcon1 && isVisibleDropİcon2===false && isVisibleDropİcon3===false && (isNumber(tms5) && isNumber(ct5) && isNumber(cmt5)))
  //5. RÖLEDE SADECE I>0 KULLANILIYOR DEMEKTİR.
  {this.relay5fonkI_0(4)
  }
  else if(isVisibleDropİcon1 && isVisibleDropİcon2 && isVisibleDropİcon3===false && ( (isNumber(tms5) && isNumber(ct5) && isNumber(cmt5)) 
  || (isNumber(iitms5) && isNumber(iict5) && isNumber(iicm5))  ))
  //5. RÖLEDE SADECE I> ve I >>  KULLANILIYOR DEMEKTİR.
  {
    this.relay5fonkII_0(4);
     
}  
  }

  handleChange = (Röle1Egri) => {
      
    //console.log("güncellendi ÖNCE  " + this.state.k); // Log the updated state value
    if (Röle1Egri && Röle1Egri.value === 'NI') {
      this.setState({ k1: 0.14,DTİİ1:false,  a1: 0.02,Röle1Egri:'Nominal Inverse' }, () => {
   //     console.log("güncellendi ESNASI  " + this.state.k); // Log the updated state value
        this.calculateData1(0);
        this.hesapKitap();
       // Correctly calling the method using this keyword
      });
      
    }
    else if (Röle1Egri && Röle1Egri.value === 'VI') {
      this.setState({ k1: 13.5,DTİİ1:false,  a1: 1,Röle1Egri:'Very Inverse' }, () => {
      //  console.log("güncellendi k " + this.state.k); // Log the updated state value
        this.calculateData1(0);
        this.hesapKitap(); // Correctly calling the method using this keyword
      });

    }
    else if (Röle1Egri && Röle1Egri.value === 'EI') {
      this.setState({ k1: 80,DTİİ1:false, a1: 2,Röle1Egri:'Extremely Inverse' }, () => {
   //     console.log("güncellendi k " + this.state.k); // Log the updated state value
        this.calculateData1(0); 
        this.hesapKitap();// Correctly calling the method using this keyword
      });

    }
    else if (Röle1Egri && Röle1Egri.value === 'LTSI') {
      this.setState({ k1: 120, a1: 1 ,Röle1Egri:'Long Time Inverse'}, () => {
      //  console.log("güncellendi k " + this.state.k); // Log the updated state value
        this.calculateData1(0);
        this.hesapKitap(); // Correctly calling the method using this keyword
      });
    }
    else if (Röle1Egri && Röle1Egri.value === 'DFT') {
      this.setState({ DTİİ1:true, Röle1Egri:'Definite Time'}, () => {
//  console.log("güncellendi definete time  " + this.state.DTİİ1); // Log the updated state value
        this.calculateData1(0);
        this.hesapKitap();// this.renderHtmlOpen(); // Correctly calling the method using this keyword
      });
    }
    
    
    
  };
  handleChangeii = (Röle1Egri_ii) => {
    
    
  //console.log("güncellendi ÖNCE  " + this.state.k); // Log the updated state value
  if (Röle1Egri_ii && Röle1Egri_ii.value === 'NI') {
    this.setState({ iik1: 0.14,DTİİ1:false,  iia1: 0.02,Röle1Egri_ii:'Nominal Inverse' }, () => {
 //     console.log("güncellendi ESNASI  " + this.state.k); // Log the updated state value
      this.calculateData1(0);
      this.hesapKitap();
     // Correctly calling the method using this keyword
    });
    
  }
  else if (Röle1Egri_ii && Röle1Egri_ii.value === 'VI') {
    this.setState({ iik1: 13.5,DTİİ1:false,  iia1: 1,Röle1Egri_ii:'Very Inverse' }, () => {
    //  console.log("güncellendi k " + this.state.k); // Log the updated state value
      this.calculateData1(0);
      this.hesapKitap(); // Correctly calling the method using this keyword
    });

  }
  else if (Röle1Egri_ii && Röle1Egri_ii.value === 'EI') {
    this.setState({ iik1: 80,DTİİ1:false, iia1: 2,Röle1Egri_ii:'Extremely Inverse' }, () => {
 //     console.log("güncellendi k " + this.state.k); // Log the updated state value
      this.calculateData1(0); 
      this.hesapKitap();// Correctly calling the method using this keyword
    });
  }
  else if (Röle1Egri_ii && Röle1Egri_ii.value === 'LTSI') {
    this.setState({ iik1: 120, iia1: 1 ,Röle1Egri_ii:'Long Time Inverse'}, () => {
    //  console.log("güncellendi k " + this.state.k); // Log the updated state value
      this.calculateData1(0);
      this.hesapKitap(); // Correctly calling the method using this keyword
    });
  }
  else if (Röle1Egri_ii && Röle1Egri_ii.value === 'DFT') {
    this.setState({ DTİİ1:true, Röle1Egri_ii:'Definite Time'}, () => {
//  console.log("güncellendi definete time  " + this.state.DTİİ1); // Log the updated state value
      this.calculateData1(0);
      this.hesapKitap();// this.renderHtmlOpen(); // Correctly calling the method using this keyword
    });
  }
  
  
  
};
DropDown2 = (Röle2Egri) => {

    //console.log("güncellendi ÖNCE  " + this.state.k); // Log the updated state value
    if (Röle2Egri && Röle2Egri.value === 'NI') {
      this.setState({ k2: 0.14, DTİİ2:false, a2: 0.02,Röle2Egri:'Nominal Inverse' }, () => {
   //     console.log("güncellendi ESNASI  " + this.state.k); // Log the updated state value
        this.calculateData2(1);
        this.hesapKitap(); // Correctly calling the method using this keyword
      });
      
    }
    else if (Röle2Egri && Röle2Egri.value === 'VI') {
      this.setState({ k2: 13.5,DTİİ2:false,  a2: 1,Röle2Egri:'Very Inverse' }, () => {
      //  console.log("güncellendi k " + this.state.k); // Log the updated state value
        this.calculateData2(1);
        this.hesapKitap(); // Correctly calling the method using this keyword
      });

      
      
    }
    else if (Röle2Egri && Röle2Egri.value === 'EI') {
      this.setState({ k2: 80,DTİİ2:false,  a2: 2,Röle2Egri:'Extrelemy Inverse' }, () => {
   //     console.log("güncellendi k " + this.state.k); // Log the updated state value
        this.calculateData2(1);
        this.hesapKitap(); // Correctly calling the method using this keyword
      });
      

 
    }
    else if (Röle2Egri && Röle2Egri.value === 'LTSI') {
      this.setState({ k2: 120,DTİİ2:false,  a2: 1,Röle2Egri:'Long Time Inverse' }, () => {
      //  console.log("güncellendi k " + this.state.k); // Log the updated state value
        this.calculateData2(1); 
        this.hesapKitap();// Correctly calling the method using this keyword
      });
      

    }
     else if (Röle2Egri && Röle2Egri.value === 'DFT') {
      this.setState({ DTİİ2:true,Röle2Egri:'Definite Time'}, () => {
//  console.log("güncellendi definete time  " + this.state.DTİİ1); // Log the updated state value
        this.calculateData2(1);
        this.hesapKitap();// this.renderHtmlOpen(); // Correctly calling the method using this keyword
      });
    }
    
  };
DropDown2ii = (Röle2Egri_ii) => {

    //console.log("güncellendi ÖNCE  " + this.state.k); // Log the updated state value
    if (Röle2Egri_ii && Röle2Egri_ii.value === 'NI') {
      this.setState({ iik2: 0.14, DTİİ2:false, iia2: 0.02,Röle2Egri_ii:'Nominal Inverse' }, () => {
   //     console.log("güncellendi ESNASI  " + this.state.k); // Log the updated state value
        this.calculateData2(1);
        this.hesapKitap(); // Correctly calling the method using this keyword
      });
      
    }
    else if (Röle2Egri_ii && Röle2Egri_ii.value === 'VI') {
      this.setState({ iik2: 13.5,DTİİ2:false,iia2: 1,Röle2Egri_ii:'Very Inverse' }, () => {
      //  console.log("güncellendi k " + this.state.k); // Log the updated state value
        this.calculateData2(1);
        this.hesapKitap(); // Correctly calling the method using this keyword
      });

      
      
    }
    else if (Röle2Egri_ii && Röle2Egri_ii.value === 'EI') {
      this.setState({ iik2: 80,DTİİ2:false,  iia2: 2,Röle2Egri_ii:'Extrelemy Inverse' }, () => {
   //     console.log("güncellendi k " + this.state.k); // Log the updated state value
        this.calculateData2(1);
        this.hesapKitap(); // Correctly calling the method using this keyword
      });
      

    }
    else if (Röle2Egri_ii && Röle2Egri_ii.value === 'LTSI') {
      this.setState({ iik2: 120,DTİİ2:false,  iia2: 1,Röle2Egri_ii:'Long Time Inverse' }, () => {
      //  console.log("güncellendi k " + this.state.k); // Log the updated state value
        this.calculateData2(1); 
        this.hesapKitap();// Correctly calling the method using this keyword
      });
      

    }
     else if (Röle2Egri_ii && Röle2Egri_ii.value === 'DFT') {
      this.setState({ DTİİ2:true,Röle2Egri_ii:'Definite Time'}, () => {
//  console.log("güncellendi definete time  " + this.state.DTİİ1); // Log the updated state value
        this.calculateData2(1);
        this.hesapKitap();// this.renderHtmlOpen(); // Correctly calling the method using this keyword
      });
    }
    
  };
DropDown3 = (Röle3Egri) => {

     //console.log("güncellendi ÖNCE  " + this.state.k); // Log the updated state value
     if (Röle3Egri && Röle3Egri.value === 'NI') {
      this.setState({ k3: 0.14, DTİİ3:false, a3: 0.02,Röle3Egri:'Nominal Inverse' }, () => {
   //     console.log("güncellendi ESNASI  " + this.state.k); // Log the updated state value
        this.calculateData3(2);
        this.hesapKitap(); // Correctly calling the method using this keyword
      });
      
    }
    else if (Röle3Egri && Röle3Egri.value === 'VI') {
      this.setState({ k3: 13.5,DTİİ3:false,  a3: 1,Röle3Egri:'Very Inverse' }, () => {
      //  console.log("güncellendi k " + this.state.k); // Log the updated state value
        this.calculateData3(2);
        this.hesapKitap(); // Correctly calling the method using this keyword
      });

      
      
    }
    else if (Röle3Egri && Röle3Egri.value === 'EI') {
      this.setState({ k3: 80,DTİİ3:false,  a3: 2,Röle3Egri:'Extrelemy Inverse' }, () => {
   //     console.log("güncellendi k " + this.state.k); // Log the updated state value
        this.calculateData3(2);
        this.hesapKitap(); // Correctly calling the method using this keyword
      });
      

 
    }
    else if (Röle3Egri && Röle3Egri.value === 'LTSI') {
      this.setState({ k3: 120,DTİİ3:false,  a3: 1,Röle3Egri:'Long Time Inverse' }, () => {
      //  console.log("güncellendi k " + this.state.k); // Log the updated state value
        this.calculateData3(2);
        this.hesapKitap(); // Correctly calling the method using this keyword
      });

    }
     else if (Röle3Egri && Röle3Egri.value === 'DFT') {
      this.setState({ DTİİ3:true,Röle3Egri:'Definite Time'}, () => {
//  console.log("güncellendi definete time  " + this.state.DTİİ1); // Log the updated state value
        this.calculateData3(2);
        this.hesapKitap();// this.renderHtmlOpen(); // Correctly calling the method using this keyword
      });
    }
    
    
  };
DropDown3ii = (Röle3Egri_ii) => {

    //console.log("güncellendi ÖNCE  " + this.state.k); // Log the updated state value
    if (Röle3Egri_ii && Röle3Egri_ii.value === 'NI') {
     this.setState({ k3: 0.14, DTİİ3:false, a3: 0.02,Röle3Egri_ii:'Nominal Inverse' }, () => {
  //     console.log("güncellendi ESNASI  " + this.state.k); // Log the updated state value
       this.calculateData3(2);
       this.hesapKitap(); // Correctly calling the method using this keyword
     });
     
   }
   else if (Röle3Egri_ii && Röle3Egri_ii.value === 'VI') {
     this.setState({ k3: 13.5,DTİİ3:false,  a3: 1,Röle3Egri_ii:'Very Inverse' }, () => {
     //  console.log("güncellendi k " + this.state.k); // Log the updated state value
       this.calculateData3(2);
       this.hesapKitap(); // Correctly calling the method using this keyword
     });

     
     
   }
   else if (Röle3Egri_ii && Röle3Egri_ii.value === 'EI') {
     this.setState({ k3: 80,DTİİ3:false,  a3: 2,Röle3Egri_ii:'Extrelemy Inverse' }, () => {
  //     console.log("güncellendi k " + this.state.k); // Log the updated state value
       this.calculateData3(2);
       this.hesapKitap(); // Correctly calling the method using this keyword
     });
     


   }
   else if (Röle3Egri_ii && Röle3Egri_ii.value === 'LTSI') {
     this.setState({ k3: 120,DTİİ3:false,  a3: 1,Röle3Egri_ii:'Long Time Inverse' }, () => {
     //  console.log("güncellendi k " + this.state.k); // Log the updated state value
       this.calculateData3(2);
       this.hesapKitap(); // Correctly calling the method using this keyword
     });
     

   }
    else if (Röle3Egri_ii && Röle3Egri_ii.value === 'DFT') {
     this.setState({ DTİİ3:true,Röle3Egri_ii:'Definite Time'}, () => {
//  console.log("güncellendi definete time  " + this.state.DTİİ1); // Log the updated state value
       this.calculateData3(2);
       this.hesapKitap();// this.renderHtmlOpen(); // Correctly calling the method using this keyword
     });
   }
   
   
 };
 DropDown4 = (Röle4Egri) => {

  //console.log("güncellendi ÖNCE  " + this.state.k); // Log the updated state value
  if (Röle4Egri && Röle4Egri.value === 'NI') {
   this.setState({ k4: 0.14, DTİİ4:false, a4: 0.02,Röle4Egri:'Nominal Inverse' }, () => {
//     console.log("güncellendi ESNASI  " + this.state.k); // Log the updated state value
     this.calculateData4(3);
     this.hesapKitap(); // Correctly calling the method using this keyword
   });
   
 }
 else if (Röle4Egri && Röle4Egri.value === 'VI') {
   this.setState({ k4: 13.5,DTİİ4:false,  a4: 1,Röle4Egri:'Very Inverse' }, () => {
   //  console.log("güncellendi k " + this.state.k); // Log the updated state value
     this.calculateData4(3);
     this.hesapKitap(); // Correctly calling the method using this keyword
   });

   
   
 }
 else if (Röle4Egri && Röle4Egri.value === 'EI') {
   this.setState({ k4: 80,DTİİ4:false,  a4: 2,Röle4Egri:'Extrelemy Inverse' }, () => {
//     console.log("güncellendi k " + this.state.k); // Log the updated state value
     this.calculateData4(3);
     this.hesapKitap(); // Correctly calling the method using this keyword
   });
   


 }
 else if (Röle4Egri && Röle4Egri.value === 'LTSI') {
   this.setState({ k4: 120,DTİİ4:false,  a4: 1,Röle4Egri:'Long Time Inverse' }, () => {
   //  console.log("güncellendi k " + this.state.k); // Log the updated state value
     this.calculateData4(3);
     this.hesapKitap(); // Correctly calling the method using this keyword
   });

 }
  else if (Röle4Egri && Röle4Egri.value === 'DFT') {
   this.setState({ DTİİ4:true,Röle4Egri:'Definite Time'}, () => {
//  console.log("güncellendi definete time  " + this.state.DTİİ1); // Log the updated state value
     this.calculateData4(3);
     this.hesapKitap();// this.renderHtmlOpen(); // Correctly calling the method using this keyword
   });
 }
 
 
};
DropDown4ii = (Röle4Egri_ii) => {

 //console.log("güncellendi ÖNCE  " + this.state.k); // Log the updated state value
 if (Röle4Egri_ii && Röle4Egri_ii.value === 'NI') {
  this.setState({ iik4: 0.14, DTİİ4:false, iia4: 0.02,Röle4Egri_ii:'Nominal Inverse' }, () => {
//     console.log("güncellendi ESNASI  " + this.state.k); // Log the updated state value
    this.calculateData4(3);
    this.hesapKitap(); // Correctly calling the method using this keyword
  });
  
}
else if (Röle4Egri_ii && Röle4Egri_ii.value === 'VI') {
  this.setState({ iik4: 13.5,DTİİ4:false,  iia4: 1,Röle4Egri_ii:'Very Inverse' }, () => {
  //  console.log("güncellendi k " + this.state.k); // Log the updated state value
    this.calculateData4(3);
    this.hesapKitap(); // Correctly calling the method using this keyword
  });

  
  
}
else if (Röle4Egri_ii && Röle4Egri_ii.value === 'EI') {
  this.setState({ iik4: 80,DTİİ4:false,  iia4: 2,Röle4Egri_ii:'Extrelemy Inverse' }, () => {
//     console.log("güncellendi k " + this.state.k); // Log the updated state value
    this.calculateData4(3);
    this.hesapKitap(); // Correctly calling the method using this keyword
  });
  


}
else if (Röle4Egri_ii && Röle4Egri_ii.value === 'LTSI') {
  this.setState({ iik4: 120,DTİİ4:false,  iia4: 1,Röle4Egri_ii:'Long Time Inverse' }, () => {
  //  console.log("güncellendi k " + this.state.k); // Log the updated state value
    this.calculateData4(3);
    this.hesapKitap(); // Correctly calling the method using this keyword
  });
  

}
 else if (Röle4Egri_ii && Röle4Egri_ii.value === 'DFT') {
  this.setState({ DTİİ4:true,Röle4Egri_ii:'Definite Time'}, () => {
//  console.log("güncellendi definete time  " + this.state.DTİİ1); // Log the updated state value
    this.calculateData4(3);
    this.hesapKitap();// this.renderHtmlOpen(); // Correctly calling the method using this keyword
  });
}


};
DropDown5 = (Röle5Egri) => {

  //console.log("güncellendi ÖNCE  " + this.state.k); // Log the updated state value
  if (Röle5Egri && Röle5Egri.value === 'NI') {
   this.setState({ k5: 0.14, DTİİ5:false, a5: 0.02,Röle5Egri:'Nominal Inverse' }, () => {
//     console.log("güncellendi ESNASI  " + this.state.k); // Log the updated state value
     this.calculateData5(4);
     this.hesapKitap(); // Correctly calling the method using this keyword
   });
   
 }
 else if (Röle5Egri && Röle5Egri.value === 'VI') {
   this.setState({ k5: 13.5,DTİİ5:false,  a5: 1,Röle5Egri:'Very Inverse' }, () => {
   //  console.log("güncellendi k " + this.state.k); // Log the updated state value
     this.calculateData5(4);
     this.hesapKitap(); // Correctly calling the method using this keyword
   });

   
   
 }
 else if (Röle5Egri && Röle5Egri.value === 'EI') {
   this.setState({ k5: 80,DTİİ5:false,  a5: 2,Röle5Egri:'Extrelemy Inverse' }, () => {
//     console.log("güncellendi k " + this.state.k); // Log the updated state value
     this.calculateData5(4);
     this.hesapKitap(); // Correctly calling the method using this keyword
   });
   


 }
 else if (Röle5Egri && Röle5Egri.value === 'LTSI') {
   this.setState({ k5: 120,DTİİ5:false,  a5: 1,Röle5Egri:'Long Time Inverse' }, () => {
   //  console.log("güncellendi k " + this.state.k); // Log the updated state value
     this.calculateData5(4);
     this.hesapKitap(); // Correctly calling the method using this keyword
   });

 }
  else if (Röle5Egri && Röle5Egri.value === 'DFT') {
   this.setState({ DTİİ5:true,Röle5Egri:'Definite Time'}, () => {
//  console.log("güncellendi definete time  " + this.state.DTİİ1); // Log the updated state value
     this.calculateData5(4);
     this.hesapKitap();// this.renderHtmlOpen(); // Correctly calling the method using this keyword
   });
 }
 
 
};
DropDown5ii = (Röle5Egri_ii) => {

 //console.log("güncellendi ÖNCE  " + this.state.k); // Log the updated state value
 if (Röle5Egri_ii && Röle5Egri_ii.value === 'NI') {
  this.setState({ iik5: 0.14, DTİİ5:false, iia5: 0.02,Röle5Egri_ii:'Nominal Inverse' }, () => {
//     console.log("güncellendi ESNASI  " + this.state.k); // Log the updated state value
    this.calculateData5(4);
    this.hesapKitap(); // Correctly calling the method using this keyword
  });
  
}
else if (Röle5Egri_ii && Röle5Egri_ii.value === 'VI') {
  this.setState({ iik5: 13.5,DTİİ5:false,  iia5: 1,Röle5Egri_ii:'Very Inverse' }, () => {
  //  console.log("güncellendi k " + this.state.k); // Log the updated state value
    this.calculateData5(4);
    this.hesapKitap(); // Correctly calling the method using this keyword
  });

}
else if (Röle5Egri_ii && Röle5Egri_ii.value === 'EI') {
  this.setState({ iik5: 80,DTİİ5:false,  iia5: 2,Röle5Egri_ii:'Extrelemy Inverse' }, () => {
//     console.log("güncellendi k " + this.state.k); // Log the updated state value
    this.calculateData5(4);
    this.hesapKitap(); // Correctly calling the method using this keyword
  });

}
else if (Röle5Egri_ii && Röle5Egri_ii.value === 'LTSI') {
  this.setState({ iik5: 120,DTİİ5:false,  iia5: 1,Röle5Egri_ii:'Long Time Inverse' }, () => {
  //  console.log("güncellendi k " + this.state.k); // Log the updated state value
    this.calculateData5(4);
    this.hesapKitap(); // Correctly calling the method using this keyword
  });
  
}
 else if (Röle5Egri_ii && Röle5Egri_ii.value === 'DFT') {
  this.setState({ DTİİ5:true,Röle5Egri_ii:'Definite Time'}, () => {
//  console.log("güncellendi definete time  " + this.state.DTİİ1); // Log the updated state value
    this.calculateData5(4);
    this.hesapKitap();// this.renderHtmlOpen(); // Correctly calling the method using this keyword
  });
}


};



   handleInputChange = (index, value) => {

    const { StateDeneme } = this.state;
    const newInputValues = [...StateDeneme]; // StateDeneme'den yeni bir kopya oluşturuyoruz
 
    newInputValues[index] = value; // Belirli bir indekste yeni değeri ayarlıyoruz
  
    const newFaultArray=newInputValues.map((_,indexf)=>
    indexf===index? value:''// Belirli indekse sahip item'i güncelle, diğerleri boş string olarak ayarla
    )
    //console.log("newInoutValues Yeni :"+newInputValues)
    this.setState({ StateDeneme: newFaultArray },() => {
   //   console.log("güncellendi StateDeneme " +StateDeneme); // Log the updated state value
      this.hesapKitap(); // Correctly calling the method using this keyword
     
    }); // setState ile yeni dizi değerini güncelliyoruz  KISA DEVRE DEĞERLERİNİ DİZİ OLARAK ALDIN .
  };
  
  hesapKitap(){

    const { tms1, ct1, cmt1,k1,a1, tms2, ct2, cmt2,k2,a2,
      tms3, ct3, cmt3,k3,a3,tms4, ct4, cmt4 ,k4,a4,tms5,cmt5,ct5,k5,a5,StateDeneme,isVisibleDropİcon1,isVisibleDropİcon2,iicm1,iitms1,iict1,DTİİ1,
      iicm2,iitms2,iict2,DTİİ2,
      iicm3,iitms3,iict3,DTİİ3,
      iicm4,iitms4,iict4,DTİİ4,
      iicm5,iitms5,iict5,DTİİ5,
      iik1,
      iia1,
      iik2,
      iia2,
      iik3,
      iia3,
      iik4,
      iia4,
      iik5,
      iia5
    
    
    } = this.state;
    const FaultsArray=[...StateDeneme]
        let y1,y2,y3,y4,y5;
    let Doluİndex=  FaultsArray.findIndex(item=>item !==''&& !isNaN(item))+1
 
      switch(Doluİndex){
        
        case 1:
          if(isVisibleDropİcon1 && isVisibleDropİcon2===false){
            //  sadece 1.kademe aktif demektir
            y1 = tms1*(k1 / (Math.pow(this.state.StateDeneme[0] / (ct1*cmt1), a1) - 1));
            
         
            if(y1<0 )
            { y1="Röle Açmaz"}
        
            return       [isNumber(y1) ? y1.toFixed(3) + " Röle  Saniye Açar":y1  ]
             }
             else if(isVisibleDropİcon1 && isVisibleDropİcon2){
               //I> ve I>> aktiftir.
               if(this.state.StateDeneme[0]!='' && this.state.StateDeneme[0]!=0 && this.state.StateDeneme[0]>(cmt1*ct1) &&( this.state.StateDeneme[0]<(iicm1*iict1)|| (iicm1=='' && iict1=='') )){
                 y1 = tms1*(k1 / (Math.pow(this.state.StateDeneme[0] / (ct1*cmt1), a1) - 1));
                 if(y1<0 )
                 { y1="Röle Açmaz"}
                 
               }
               else if(this.state.StateDeneme[0]!='' && this.state.StateDeneme[0]!=0 && this.state.StateDeneme[0]>=(cmt1*ct1) && this.state.StateDeneme[0]>=(iicm1*iict1)) {
                   // 1. röle için 2.kademe bölgesinde bir değer hesap edilip kullanıcıya bildirilecek
                  if(DTİİ1){
                  y1=iitms1
                  }
                  else{
                   y1 = iitms1*(iik1 / (Math.pow(this.state.StateDeneme[0] / (iict1*iicm1), iia1) - 1));
                   if(y1<0 )
                   { y1= ["Röle Açmaz"]}
                
                  }
               }
           
               return       [isNumber(y1) ? y1.toFixed(3) + " Röle  Saniye Açar":y1  ]
             }
  
        case 2:

        if(isVisibleDropİcon1 && isVisibleDropİcon2===false){
          //  sadece 1.kademe aktif demektir
          y1 = tms1*(k1 / (Math.pow(this.state.StateDeneme[1] / (ct1*cmt1), a1) - 1));
          y2 = tms2*(k2 / (Math.pow(this.state.StateDeneme[1] / (ct2*cmt2), a2) - 1));
       
          if(y1<0 )
          { y1="Röle Açmaz"}
      
          if(y2<0 )
          { y2="Röle Açmaz"}
 
          return       [isNumber(y1) ? y1.toFixed(3) + " Röle  Saniye Açar":y1 ,
          isNumber(y2) ? y2.toFixed(3) + " Röle Saniye Açar":y2 ]
           }
           else if(isVisibleDropİcon1 && isVisibleDropİcon2){
             //I> ve I>> aktiftir.
      if(this.state.StateDeneme[1]!='' && this.state.StateDeneme[1]!=0 && this.state.StateDeneme[1]>(cmt1*ct1) &&( this.state.StateDeneme[1]<(iicm1*iict1)|| (iicm1=='' && iict1=='') )){
               y1 = tms1*(k1 / (Math.pow(this.state.StateDeneme[1] / (ct1*cmt1), a1) - 1));
               if(y1<0 )
               { y1="Röle Açmaz"}
               
             }
       else if(this.state.StateDeneme[1]!='' && this.state.StateDeneme[1]!=0 && this.state.StateDeneme[1]>=(cmt1*ct1) && this.state.StateDeneme[1]>=(iicm1*iict1)) {
                 // 1. röle için 2.kademe bölgesinde bir değer hesap edilip kullanıcıya bildirilecek
                if(DTİİ1){
                y1=iitms1
                }
                else{
                 y1 = iitms1*(iik1 / (Math.pow(this.state.StateDeneme[1] / (iict1*iicm1), iia1) - 1));
                 if(y1<0 )
                 { y1= ["Röle Açmaz"]}
              
                }
             }
       if(this.state.StateDeneme[1]!='' && this.state.StateDeneme[1]!=0 && this.state.StateDeneme[1]>(cmt2*ct2)&&( this.state.StateDeneme[1]<(iicm2*iict2)|| (iicm2=='' && iict2=='') ))
            {
              //2.röle kesinlikle I> da çalışıyordur.
              y2 = tms2*(k2 / (Math.pow(this.state.StateDeneme[1] / (ct2*cmt2), a2) - 1));
              if(y2<0 )
              { y2= ["Röle Açmaz"]}
            }
       else if (this.state.StateDeneme[1]!='' && this.state.StateDeneme[1]!=0 && this.state.StateDeneme[1]>=(cmt2*ct2)){
              //2.röle kesinlikle I>>  ÇALIŞIYORDUR
       if(DTİİ2 &&this.state.StateDeneme[1]>=(iicm2*iict2) ){
                y2=iitms2
              }
              else{
                y2 = iitms2*(iik2 / (Math.pow(this.state.StateDeneme[1] / (iict2*iicm2), iia2) - 1));
                             
               if(y2<0 )
               { y2= ["Röle Açmaz"]}
              }
             }
           
           }

           return       [isNumber(y1) ? y1.toFixed(3) + " Röle  Saniye Açar":y1 ,
           isNumber(y2) ? y2.toFixed(3) + " Röle Saniye Açar":y2  ]
       
        case 3:
              if(isVisibleDropİcon1 && isVisibleDropİcon2===false){
                //  sadece 1.kademe aktif demektir
                y1 = tms1*(k1 / (Math.pow(this.state.StateDeneme[2] / (ct1*cmt1), a1) - 1));
                y2 = tms2*(k2 / (Math.pow(this.state.StateDeneme[2] / (ct2*cmt2), a2) - 1));
                y3 = tms3*(k3 / (Math.pow(this.state.StateDeneme[2] / (ct3*cmt3), a3) - 1));
                if(y1<0 )
                { y1="Röle Açmaz"}
            
                if(y2<0 )
                { y2="Röle Açmaz"}
            
                if(y3<0 )
                { y3="Röle Açmaz"}
               

                return       [isNumber(y1) ? y1.toFixed(3) + " Röle  Saniye Açar":y1 ,
                isNumber(y2) ? y2.toFixed(3) + " Röle Saniye Açar":y2,   isNumber(y3) ? y3.toFixed(3) + " Röle Saniye Açar":y3 ]
                 }
                 else if(isVisibleDropİcon1 && isVisibleDropİcon2){
                   //I> ve I>> aktiftir.
                   if(this.state.StateDeneme[2]!='' && this.state.StateDeneme[2]!=0 && this.state.StateDeneme[2]>(cmt1*ct1) &&( this.state.StateDeneme[2]<(iicm1*iict1)|| (iicm1=='' && iict1=='') )){
                     y1 = tms1*(k1 / (Math.pow(this.state.StateDeneme[2] / (ct1*cmt1), a1) - 1));
                     if(y1<0 )
                     { y1="Röle Açmaz"}
                     
                   }
                   else if(this.state.StateDeneme[2]!='' && this.state.StateDeneme[2]!=0 && this.state.StateDeneme[2]>=(cmt1*ct1) && this.state.StateDeneme[2]>=(iicm1*iict1)) {
                       // 1. röle için 2.kademe bölgesinde bir değer hesap edilip kullanıcıya bildirilecek
                      if(DTİİ1){
                      y1=iitms1
                      }
                      else{
                       y1 = iitms1*(iik1 / (Math.pow(this.state.StateDeneme[2] / (iict1*iicm1), iia1) - 1));
                       if(y1<0 )
                       { y1= ["Röle Açmaz"]}
                    
                      }
                   }
                  if(this.state.StateDeneme[2]!='' && this.state.StateDeneme[2]!=0 && this.state.StateDeneme[2]>(cmt2*ct2)&&( this.state.StateDeneme[3]<(iicm2*iict2)|| (iicm2=='' && iict2=='') ))
                  {
                    //2.röle kesinlikle I> da çalışıyordur.
                    y2 = tms2*(k2 / (Math.pow(this.state.StateDeneme[2] / (ct2*cmt2), a2) - 1));
                    if(y2<0 )
                    { y2= ["Röle Açmaz"]}
                  }
                   else if (this.state.StateDeneme[2]!='' && this.state.StateDeneme[2]!=0 && this.state.StateDeneme[2]>=(cmt2*ct2)){
                    //2.röle kesinlikle I>>  ÇALIŞIYORDUR
                    if(DTİİ2 &&this.state.StateDeneme[2]>=(iicm2*iict2) ){
                      y2=iitms2
                    }
                    else{
                      y2 = iitms2*(iik2 / (Math.pow(this.state.StateDeneme[2] / (iict2*iicm2), iia2) - 1));
                                   
                     if(y2<0 )
                     { y2= ["Röle Açmaz"]}
                    }
                   }
                   if(this.state.StateDeneme[2]!='' && this.state.StateDeneme[2]!=0 && this.state.StateDeneme[2]>(cmt3*ct3) &&( this.state.StateDeneme[3]<(iicm3*iict3)|| (iicm3=='' && iict3=='')))
                   {
                      //3.röle I> da çalılıyor.
                      y3 = tms3*(k3 / (Math.pow(this.state.StateDeneme[2] / (ct3*cmt3), a3) - 1));
                      if(y3<0 )
                      { y3="Röle Açmaz"}
                      
                   }
                   else if (this.state.StateDeneme[2]!='' && this.state.StateDeneme[2]!=0 && this.state.StateDeneme[2]>=(cmt3*ct3)){
                      //3. röle I>> çalışıyor.
                      if(DTİİ3 &&this.state.StateDeneme[2]>=(iicm3*iict3) ){
                        y3=iitms2
                      }
                      else{
                        y3 = iitms3*(iik3 / (Math.pow(this.state.StateDeneme[2] / (iict3*iicm3), iia3) - 1));
                                     
                       if(y3<0 )
                       { y3= ["Röle Açmaz"]}
                      }
                   }
                 }

                 return       [isNumber(y1) ? y1.toFixed(3) + " Röle  Saniye Açar":y1 ,
                 isNumber(y2) ? y2.toFixed(3) + " Röle Saniye Açar":y2, isNumber(y3) ? y3.toFixed(3) + " Röle Saniye Açar":y3  ]

        case 4:
         if(isVisibleDropİcon1 && isVisibleDropİcon2===false){
                    //  sadece 1.kademe aktif demektir
                    y1 = tms1*(k1 / (Math.pow(this.state.StateDeneme[3] / (ct1*cmt1), a1) - 1));
                    y2 = tms2*(k2 / (Math.pow(this.state.StateDeneme[3] / (ct2*cmt2), a2) - 1));
                    y3 = tms3*(k3 / (Math.pow(this.state.StateDeneme[3] / (ct3*cmt3), a3) - 1));
                    y4 = tms4*(k4 / (Math.pow(this.state.StateDeneme[3] / (ct4*cmt4), a4) - 1));
                    if(y1<0 )
                    { y1="Röle Açmaz"}
                
                    if(y2<0 )
                    { y2="Röle Açmaz"}
                
                    if(y3<0 )
                    { y3="Röle Açmaz"}
                    if(y4<0 )
                    { y4="Röle Açmaz"}
                
                    return       [
                      isNumber(y1) ? y1.toFixed(3) + " Röle  Saniye Açar":y1 ,
                      isNumber(y2) ? y2.toFixed(3) + " Röle Saniye Açar":y2, 
                      isNumber(y3) ? y3.toFixed(3) + " Röle Saniye Açar":y3,
                      isNumber(y4) ? y4.toFixed(3) + " Röle Saniye Açar":y4 ]
                     }
        else if(isVisibleDropİcon1 && isVisibleDropİcon2){
           
                       //I> ve I>> aktiftir.
         if(this.state.StateDeneme[3]!='' && this.state.StateDeneme[3]!=0 && this.state.StateDeneme[3]>(cmt1*ct1) &&( this.state.StateDeneme[3]<(iicm1*iict1)|| (iicm1=='' && iict1=='') )  ){
                        console.log("1.röle 1.kademe ")
                        y1 = tms1*(k1 / (Math.pow(this.state.StateDeneme[3] / (ct1*cmt1), a1) - 1));
                         if(y1<0 )
                         { y1="Röle Açmaz"}
                         
                       }
        else if(this.state.StateDeneme[3]!='' && this.state.StateDeneme[3]!=0 && this.state.StateDeneme[3]>=(cmt1*ct1)&& this.state.StateDeneme[3]>=(iicm1*iict1)) {
                           // 1. röle için 2.kademe bölgesinde bir değer hesap edilip kullanıcıya bildirilecek
                           console.log("1.röle 2.kademe ")
                          if(DTİİ1){
                        y1=iitms1
                          }
                          else{
                           y1 = iitms1*(iik1 / (Math.pow(this.state.StateDeneme[3] / (iict1*iicm1), iia1) - 1));
                           if(y1<0 )
                           { y1= ["Röle Açmaz"]}
                        
                          }
                       }
        if(this.state.StateDeneme[3]!='' && this.state.StateDeneme[3]!=0 && this.state.StateDeneme[3]>(cmt2*ct2) &&( this.state.StateDeneme[3]<(iicm2*iict2)|| (iicm2=='' && iict2=='') ) )
                      {
                        console.log("2.röle 1.kademe ")
                        //2.röle kesinlikle I> da çalışıyordur.
                        y2 = tms2*(k2 / (Math.pow(this.state.StateDeneme[3] / (ct2*cmt2), a2) - 1));
                        if(y2<0 )
                        { y2= ["Röle Açmaz"]}
                      }
       else if (this.state.StateDeneme[3]!='' && this.state.StateDeneme[3]!=0 && this.state.StateDeneme[3]>=(cmt2*ct2) && this.state.StateDeneme[3]>=(iicm2*iict2)){
                        //2.röle kesinlikle I>>  ÇALIŞIYORDUR
                        console.log("2.röle 2.kademe ")
                        if(DTİİ2 &&this.state.StateDeneme[3]>=(iicm2*iict2) ){
                          y2=iitms2
                        }
                        else{
                          y2 = iitms2*(iik2 / (Math.pow(this.state.StateDeneme[3] / (iict2*iicm2), iia2) - 1));
                                       
                       
                        }
                       }
        if(this.state.StateDeneme[3]!='' && this.state.StateDeneme[3]!=0 && this.state.StateDeneme[3]>(cmt3*ct3) &&( this.state.StateDeneme[3]<(iicm3*iict3)|| (iicm3=='' && iict3=='') ) )
                       {
                        console.log("3.röle 1.kademe ")
                          //3.röle I> da çalılıyor.
                          y3 = tms3*(k3 / (Math.pow(this.state.StateDeneme[3] / (ct3*cmt3), a3) - 1));
                          if(y3<0 )
                          { y3="Röle Açmaz"}
                          
                       }
       else if (this.state.StateDeneme[3]!='' && this.state.StateDeneme[3]!=0 && this.state.StateDeneme[3]>=(cmt3*ct3) && this.state.StateDeneme[3]>=(iicm3*iict3)     ){
                          //3. röle I>> çalışıyor.
                          console.log("3.röle 2.kademe ")
                          if(DTİİ3 &&this.state.StateDeneme[3]>=(iicm3*iict3) ){
                            y3=iitms3
                          }
                          else{
                            y3 = iitms3*(iik3 / (Math.pow(this.state.StateDeneme[3] / (iict3*iicm3),iia3) - 1));
                                         
                           if(y3<0 )
                           { y3= ["Röle Açmaz"]}
                          }
                       }
      if(this.state.StateDeneme[3]!='' && this.state.StateDeneme[3]!=0 && this.state.StateDeneme[3]>(cmt4*ct4) && ( this.state.StateDeneme[3]<(iicm4*iict4)|| (iicm4=='' && iict4=='') ) )
                       {
                        console.log("4.röle 1.kademe ")
                    
                          //4.röle I> da çalılıyor.
                          y4 = tms4*(k4 / (Math.pow(this.state.StateDeneme[3] / (ct4*cmt4), a4) - 1));
                          if(y4<0 )
                          { y4="Röle Açmaz"}
                          
                       }
       else if (this.state.StateDeneme[3]!='' && this.state.StateDeneme[3]!=0 && this.state.StateDeneme[3]>=(cmt4*ct4)&& this.state.StateDeneme[3]>=(iicm4*iict4)){
                        //4. röle I>> çalışıyor.
                        console.log("4.röle 2.kademe ")
                        if(DTİİ4 &&this.state.StateDeneme[3]>=(iicm4*iict4) ){
                          y4=iitms4
                        }
                        else{
                          y4 = iitms4*(iik4 / (Math.pow(this.state.StateDeneme[3] / (iict4*iicm4), iia4) - 1));
                                       
                         if(y4<0 )
                         { y4= ["Röle Açmaz"]}
                        }
                     }
                     }
    
                     return       [
                      isNumber(y1) ? y1.toFixed(3) + " Röle  Saniye Açar":y1 ,
                      isNumber(y2) ? y2.toFixed(3) + " Röle Saniye Açar":y2,
                      isNumber(y3) ? y3.toFixed(3) + " Röle Saniye Açar":y3 ,
                      isNumber(y4) ? y4.toFixed(3) + " Röle Saniye Açar":y4  ]
         case 5:
          if(isVisibleDropİcon1 && isVisibleDropİcon2===false){
            //  sadece 1.kademe aktif demektir
            y1 = tms1*(k1 / (Math.pow(this.state.StateDeneme[4] / (ct1*cmt1), a1) - 1));
            y2 = tms2*(k2 / (Math.pow(this.state.StateDeneme[4] / (ct2*cmt2), a2) - 1));
            y3 = tms3*(k3 / (Math.pow(this.state.StateDeneme[4] / (ct3*cmt3), a3) - 1));
            y4 = tms4*(k4 / (Math.pow(this.state.StateDeneme[4] / (ct4*cmt4), a4) - 1));
            y5 = tms5*(k5 / (Math.pow(this.state.StateDeneme[4] / (ct5*cmt5), a5) - 1));
            if(y1<0 )
            { y1="Röle Açmaz"}
        
            if(y2<0 )
            { y2="Röle Açmaz"}
        
            if(y3<0 )
            { y3="Röle Açmaz"}
            if(y4<0 )
            { y4="Röle Açmaz"}
            if(y5<0 )
            { y5="Röle Açmaz"}
        
            return       [
              isNumber(y1) ? y1.toFixed(3) + " Röle  Saniye Açar":y1 ,
              isNumber(y2) ? y2.toFixed(3) + " Röle Saniye Açar":y2, 
              isNumber(y3) ? y3.toFixed(3) + " Röle Saniye Açar":y3,
              isNumber(y4) ? y4.toFixed(3) + " Röle Saniye Açar":y4,
              isNumber(y5) ? y5.toFixed(3) + " Röle Saniye Açar":y5  ]
             }   
             else if(isVisibleDropİcon1 && isVisibleDropİcon2){
           
              //I> ve I>> aktiftir.
if(this.state.StateDeneme[4]!='' && this.state.StateDeneme[4]!=0 && this.state.StateDeneme[4]>(cmt1*ct1) &&( this.state.StateDeneme[4]<(iicm1*iict1)|| (iicm1=='' && iict1=='') )  ){
               //console.log("1.röle 1.kademe ")
               y1 = tms1*(k1 / (Math.pow(this.state.StateDeneme[4] / (ct1*cmt1), a1) - 1));
                if(y1<0 )
                { y1="Röle Açmaz"}
                
              }
else if(this.state.StateDeneme[4]!='' && this.state.StateDeneme[4]!=0 && this.state.StateDeneme[4]>=(cmt1*ct1)&& this.state.StateDeneme[4]>=(iicm1*iict1)) {
                  // 1. röle için 2.kademe bölgesinde bir değer hesap edilip kullanıcıya bildirilecek
                 // console.log("1.röle 2.kademe ")
                 if(DTİİ1){
               y1=iitms1
                 }
                 else{
                  y1 = iitms1*(iik1 / (Math.pow(this.state.StateDeneme[4] / (iict1*iicm1), iia1) - 1));
                  if(y1<0 )
                  { y1= ["Röle Açmaz"]}
               
                 }
              }
if(this.state.StateDeneme[4]!='' && this.state.StateDeneme[4]!=0 && this.state.StateDeneme[4]>(cmt2*ct2) &&( this.state.StateDeneme[4]<(iicm2*iict2)|| (iicm2=='' && iict2=='') ) )
             {
             //  console.log("2.röle 1.kademe ")
               //2.röle kesinlikle I> da çalışıyordur.
               y2 = tms2*(k2 / (Math.pow(this.state.StateDeneme[4] / (ct2*cmt2), a2) - 1));
               if(y2<0 )
               { y2= ["Röle Açmaz"]}
             }
else if (this.state.StateDeneme[4]!='' && this.state.StateDeneme[4]!=0 && this.state.StateDeneme[4]>=(cmt2*ct2) && this.state.StateDeneme[4]>=(iicm2*iict2)){
               //2.röle kesinlikle I>>  ÇALIŞIYORDUR
              // console.log("2.röle 2.kademe ")
               if(DTİİ2 &&this.state.StateDeneme[4]>=(iicm2*iict2) ){
                 y2=iitms2
               }
               else{
                 y2 = iitms2*(iik2 / (Math.pow(this.state.StateDeneme[4] / (iict2*iicm2), iia2) - 1));
                              
              
               }
              }
if(this.state.StateDeneme[4]!='' && this.state.StateDeneme[4]!=0 && this.state.StateDeneme[4]>(cmt3*ct3) &&( this.state.StateDeneme[4]<(iicm3*iict3)|| (iicm3=='' && iict3=='') ) )
              {
             //  console.log("3.röle 1.kademe ")
                 //3.röle I> da çalılıyor.
                 y3 = tms3*(k3 / (Math.pow(this.state.StateDeneme[4] / (ct3*cmt3), a3) - 1));
                 if(y3<0 )
                 { y3="Röle Açmaz"}
                 
              }
else if (this.state.StateDeneme[4]!='' && this.state.StateDeneme[4]!=0 && this.state.StateDeneme[4]>=(cmt3*ct3) && this.state.StateDeneme[4]>=(iicm3*iict3)     ){
                 //3. röle I>> çalışıyor.
             //    console.log("3.röle 2.kademe ")
                 if(DTİİ3 &&this.state.StateDeneme[4]>=(iicm3*iict3) ){
                   y3=iitms3
                 }
                 else{
                   y3 = iitms3*(iik3 / (Math.pow(this.state.StateDeneme[4] / (iict3*iicm3), iia3) - 1));
                                
                  if(y3<0 )
                  { y3= ["Röle Açmaz"]}
                 }
              }
if(this.state.StateDeneme[4]!='' && this.state.StateDeneme[4]!=0 && this.state.StateDeneme[4]>(cmt4*ct4) && ( this.state.StateDeneme[4]<(iicm4*iict4)|| (iicm4=='' && iict4=='') ) )
              {
              // console.log("4.röle 1.kademe ")
           
                 //4.röle I> da çalılıyor.
                 y4 = tms4*(k4 / (Math.pow(this.state.StateDeneme[4] / (ct4*cmt4), a4) - 1));
                 if(y4<0 )
                 { y4="Röle Açmaz"}
                 
              }
else if (this.state.StateDeneme[4]!='' && this.state.StateDeneme[4]!=0 && this.state.StateDeneme[4]>=(cmt4*ct4)&& this.state.StateDeneme[4]>=(iicm4*iict4)){
               //4. röle I>> çalışıyor.
              // console.log("4.röle 2.kademe ")
               if(DTİİ4 &&this.state.StateDeneme[4]>=(iicm4*iict4) ){
                 y4=iitms4
               }
               else{
                 y4 = iitms4*(iik4 / (Math.pow(this.state.StateDeneme[4] / (iict4*iicm4), iia4) - 1));
                              
                if(y4<0 )
                { y4= ["Röle Açmaz"]}
               }
            }
if(this.state.StateDeneme[4]!='' && this.state.StateDeneme[4]!=0 && this.state.StateDeneme[4]>(cmt5*ct5) && ( this.state.StateDeneme[4]<(iicm5*iict5)|| (iicm5=='' && iict5=='') ) )
            {
            // console.log("5.röle 1.kademe ")
         
               //4.röle I> da çalılıyor.
               y5 = tms5*(k5 / (Math.pow(this.state.StateDeneme[4] / (ct5*cmt5), a5) - 1));
               if(y5<0 )
               { y5="Röle Açmaz"}
               
            }
else if (this.state.StateDeneme[4]!='' && this.state.StateDeneme[4]!=0 && this.state.StateDeneme[4]>=(cmt5*ct5)&& this.state.StateDeneme[4]>=(iicm5*iict5)){
             //5. röle I>> çalışıyor.
            // console.log("4.röle 2.kademe ")
             if(DTİİ5 &&this.state.StateDeneme[4]>=(iicm5*iict5) ){
               y5=iitms5
             }
             else{
               y5 = iitms5*(iik5 / (Math.pow(this.state.StateDeneme[4] / (iict5*iicm5), iia5) - 1));
                            
              if(y5<0 )
              { y5= ["Röle Açmaz"]}
             }
          }  
          return       [
            isNumber(y1) ? y1.toFixed(3) + " Röle  Saniye Açar":y1 ,
            isNumber(y2) ? y2.toFixed(3) + " Röle Saniye Açar":y2,
            isNumber(y3) ? y3.toFixed(3) + " Röle Saniye Açar":y3 ,
            isNumber(y4) ? y4.toFixed(3) + " Röle Saniye Açar":y4,
            isNumber(y5) ? y5.toFixed(3) + " Röle Saniye Açar":y5  ]         
            }
      
      }




    
   
    return [0,0,0,0,0]
  }
  renderHtmlOpen=()=>{

    return(
   
<div className="kare"  >



        <div className="DropdownOpen" >  
        <h4>I&gt;&gt; Fonksiyonu Aktif </h4>          
         <FiChevronsUp   data-icon="Secondİcon" color="black" size={50}  onClick={this.Dropİcon}
          style={{ cursor: 'pointer', fontSize: '24px' }}/> 
          
          </div>
        
        <form className="form-container1">
        <div >  
          <div className="relayheadertext">Röle 1 I&gt;&gt;</div>
           <Select
          value={this.state.Röle1Egri_ii}
        onChange={this.handleChangeii}
          options={optionsii}
          placeholder={this.state.Röle1Egri_ii} 
        /> 
       
        </div>
   
        {this.state.DTİİ1 ? ( <input className="inputPlaceholder"
                  data-iitms1="iitms1"
           style={{ width: '95%', height: '1vh', padding: '5px', fontSize: '10px' }} 
              type="number"
             name="iitms1"
              value={this.state.iitms1}
            onChange={this.handleChange1}
              placeholder="Zaman (Saniye)"
            />):( <input className="inputPlaceholder"
                  data-iitms1="iitms1"
           style={{ width: '95%', height: '1vh', padding: '5px', fontSize: '10px' }} 
              type="number"
             name="iitms1"
              value={this.state.iitms1}
            onChange={this.handleChange1}
              placeholder="Eğrinin Değeri:0,4"
            />) }
           
    
          <br />
     
            <input   className="inputPlaceholder"
      //      data-iict1="iict1"
          style={{ width: '95%', height: '1vh', padding: '5px', fontSize: '10px' }} 
      //     className={Styles.inputNumber}
              type="number"
              name="iict1"
              value={this.state.iict1}
            onChange={this.handleChange1}
              placeholder="Akım Trafosu:600"
            />
       
          <br />
        
       
            <input
            className="inputPlaceholder"
           // data-iicm1="iicm1"
          style={{ width: '95%', height: '1vh', padding: '5px', fontSize: '10px' }} 
              type="number"
              name="iicm1"
              value={this.state.iicm1}
              onChange={this.handleChange1}
              placeholder="Akım Çarpanı:5"
            />
        
        </form>
  
        <form className="form-container2">

        <div > 
        <div className="relayheadertext">Röle 2 I&gt;&gt; </div> 
         <Select
          value={this.state.Röle2Egri_ii}
        onChange={this.DropDown2ii}
          options={optionsii}
          placeholder={this.state.Röle2Egri_ii}
          
         
        /> </div>
        
         
         
        {this.state.DTİİ2 ? (
           <input className="inputPlaceholder"
                  data-iitms1="iitms1"
           style={{ width: '95%', height: '1vh', padding: '5px', fontSize: '10px' }} 
              type="number"
             name="iitms2"
              value={this.state.iitms2}
            onChange={this.handleChange2}
              placeholder="Zaman(Saniye)"
            />):( <input className="inputPlaceholder"
                  data-iitms1="iitms1"
           style={{ width: '95%', height: '1vh', padding: '5px', fontSize: '10px' }} 
              type="number"
             name="iitms2"
              value={this.state.iitms2}
            onChange={this.handleChange2}
              placeholder="Eğri Değeri:0,22"
            />) }
          
          <br />
        
         
            <input  className="inputPlaceholder"
             style={{ width: '95%', height: '1vh', padding: '5px', fontSize: '10px' }} 
              type="number"
              name="iict2"
              value={this.state.iict2}
              onChange={this.handleChange2}
              placeholder="Akım Trafosu:400"
            />
         
          <br />
         
       
            <input className="inputPlaceholder"
             style={{ width: '95%', height: '1vh', padding: '5px', fontSize: '10px' }} 
              type="number"
              name="iicm2"
              value={this.state.iicm2}
          onChange={this.handleChange2}
              placeholder="Akım Çarpanı:10"
            />
          
        </form>
        <form className="form-container3">
      
        <div > 
        <div className="relayheadertext">Röle 3 I&gt;&gt;</div> 
           <Select
          value={this.state.Röle3Egri_ii}
          onChange={this.DropDown3ii}
          options={optionsii}
          placeholder={this.state.Röle3Egri_ii}
          
         
        /> </div>
       <input  className="inputPlaceholder"
             style={{ width: '95%', height: '1vh', padding: '5px', fontSize: '10px' }} 
              type="number"
              name="iitms3"
              value={this.state.iitms3}
              onChange={this.handleChange3}
              placeholder="Eğri:0,18"
            /> 
          <br />    
         
            <input className="inputPlaceholder"
          style={{ width: '95%', height: '1vh', padding: '5px', fontSize: '10px' }} 
              type="number"
              name="iict3"
              value={this.state.iict3}
             onChange={this.handleChange3}
              placeholder="Akım Trafosu:300"
            />
        
          <br />
         
        
            <input className="inputPlaceholder"
     style={{ width: '95%', height: '1vh', padding: '5px', fontSize: '10px' }} 
              type="number"
              name="iicm3"
              value={this.state.iicm3}
            onChange={this.handleChange3}
              placeholder="Akım Çarpanı:10"
            />
        
        </form>
        <form className="form-container4">
         
      
        <div >   
        <div className="relayheadertext"> Röle 4 I&gt;&gt;</div>
          <Select
          value={this.state.Röle4Egri_ii}
        onChange={this.DropDown4ii}
          options={optionsii}
          placeholder={this.state.Röle4Egri_ii}
          
         
        /> </div>
     
      
            <input  className="inputPlaceholder"
         style={{ width: '95%', height: '1vh', padding: '5px', fontSize: '10px' }} 
              type="number"
              name="iitms4"
              value={this.state.iitms4}
           onChange={this.handleChange4}
              placeholder="Eğri Değeri:0,150"
            />
     
          <br />
         
 
            <input className="inputPlaceholder"
            style={{ width: '95%', height: '1vh', padding: '5px', fontSize: '10px' }}
             
              type="number"
              name="iict4"
              value={this.state.iict4}
              onChange={this.handleChange4}
              placeholder="Akım Trafosu:200"
            />
        
          <br />
         
            <input className="inputPlaceholder"
            style={{ width: '95%', height: '1vh', padding: '5px', fontSize: '10px' }} 
              type="number"
              name="iicm4"
              value={this.state.iicm4}
            onChange={this.handleChange4}
              placeholder="Akım Çarpanı:30"
            />
          
        </form>
        <form className="form-container5">
        <div className="relayheadertext">Röle 5 I&gt;&gt;</div>
            <div >   <Select
          value={this.state.Röle5Egri_ii}
        onChange={this.DropDown5ii}
          options={optionsii}
          placeholder={this.state.Röle5Egri_ii}
          
         
        /> </div>
            <input  className="inputPlaceholder"
            style={{ width: '95%', height: '1vh', padding: '5px', fontSize: '10px' }} 
              type="number"
              name="iitms5"
              value={this.state.iitms5}
             onChange={this.handleChange5}
               placeholder='Eğri Değeri:0,05'
            />
        
          <br />
         
          
            
            <input className="inputPlaceholder"
          style={{ width: '95%', height: '1vh', padding: '5px', fontSize: '10px' }} 
            type="number"
              name="iict5"
              value={this.state.iict5}
              onChange={this.handleChange5}
              placeholder='Akım Trafosu:50'
            />
        
          <br />
      
         
            <input  className="inputPlaceholder"
            style={{ width: '95%', height: '1vh', padding: '5px', fontSize: '10px' }} 
              type="number"
              name="iicm5"
              value={this.state.iicm5}
              onChange={this.handleChange5}
              placeholder='Akım Çarpanı:50'
            />
       
        </form>
        </div>

    )
  }
  renderHtmlClose=()=>{
    return(

      <div className="karehidden">
      <FiChevronsDown  data-icon="Secondİcon" onClick={this.Dropİcon} 
     style={{ cursor: 'pointer', fontSize: '24px' }} color="black" size={50}/> <h4>I&gt;&gt; Fonsksiyonu Pasif Durumda  </h4> 
       </div>
    )
  }
 
  render() {
    const { loading } = this.state;
   
 
    
    
    return (
      
      <div>
   <div className="app-container">
        <LoaderComponent loading={loading} />
      
      
      </div>
    <Sidebar/>
    <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
       
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
        <div  className="chart">  
          <Chart
          width='100%'
          height='100%'
       
          options={this.state.options}
          series={this.state.series}
          type="line"
         
        /> 
       </div>

      
   <div className=" tanitim" > <h4>AŞAĞIDAKİ  EKRANDA BİRDEN FAZLA RÖLENİN CONFİGRASYON AYARLAMALARINI YAPABİLİRSİNİZ </h4> </div>

  

      
   {
        this.state.isVisibleDropİcon1 ?
         (  
        <div className="kare"  >
        <div className="DropdownOpen" >  
        <h4>I&gt; Fonksiyonu Aktif </h4>          
         <FiChevronsUp   data-icon="Firstİcon" color="black" size={50}  onClick={this.Dropİcon}
          style={{ cursor: 'pointer', fontSize: '24px' }}/> 
          </div>
        <form className="form-container1">
        <div >  
          <div className="relayheadertext">Röle 1 I&gt;</div>
           <Select
          value={this.state.Röle1Egri}
          onChange={this.handleChange}
          options={options}
          placeholder={this.state.Röle1Egri}
          
         
        /> </div>
   
       
            <input className="inputPlaceholder"
                  
           style={{ width: '95%', height: '1vh', padding: '5px', fontSize: '10px' }} 
              type="number"
              name="tms1"
              value={this.state.tms1}
              onChange={this.handleChange1}
              placeholder="Eğri Değeri:0,3"
            />
    
          <br />
     
            <input   className="inputPlaceholder"
          style={{ width: '95%', height: '1vh', padding: '5px', fontSize: '10px' }} 
      //     className={Styles.inputNumber}
              type="number"
              name="ct1"
              value={this.state.ct1}
              onChange={this.handleChange1}
              placeholder="Akım Trafosu:600"
            />
       
          <br />
        
       
            <input
            className="inputPlaceholder"
          style={{ width: '95%', height: '1vh', padding: '5px', fontSize: '10px' }} 
              type="number"
              name="cmt1"
              value={this.state.cmt1}
              onChange={this.handleChange1}
              placeholder="Akım Çarpanı:1"
            />
        
        </form>
  
        <form className="form-container2">

        <div > 
        <div className="relayheadertext">Röle 2 I&gt;</div> 
         <Select
          value={this.state.Röle2Egri}
          onChange={this.DropDown2}
          options={options}
          placeholder={this.state.Röle2Egri}
          
         
        /> </div>
        
         
         
            <input     className="inputPlaceholder"
        style={{ width: '95%', height: '1vh', padding: '5px', fontSize: '10px' }} 
              type="number"
              name="tms2"
              value={this.state.tms2}
              onChange={this.handleChange2}
              placeholder="Eğri Değeri:0,22"
            />
          
          <br />
        
         
            <input  className="inputPlaceholder"
             style={{ width: '95%', height: '1vh', padding: '5px', fontSize: '10px' }} 
              type="number"
              name="ct2"
              value={this.state.ct2}
              onChange={this.handleChange2}
              placeholder="Akım Trafosu:400"
            />
         
          <br />
         
       
            <input className="inputPlaceholder"
             style={{ width: '95%', height: '1vh', padding: '5px', fontSize: '10px' }} 
              type="number"
              name="cmt2"
              value={this.state.cmt2}
              onChange={this.handleChange2}
              placeholder="Akım Çarpanı:1 "
            />
          
        </form>
        <form className="form-container3">
      
        <div > 
        <div className="relayheadertext">Röle 3 I&gt;</div> 
           <Select
          value={this.state.Röle3Egri}
          onChange={this.DropDown3}
          options={options}
          placeholder={this.state.Röle3Egri}
          
         
        /> </div>
       
        
            <input  className="inputPlaceholder"
             style={{ width: '95%', height: '1vh', padding: '5px', fontSize: '10px' }} 
              type="number"
              name="tms3"
              value={this.state.tms3}
              onChange={this.handleChange3}
              placeholder="Eğri Değeri:0,15"
            />
        
          <br />
     
         
            <input className="inputPlaceholder"
          style={{ width: '95%', height: '1vh', padding: '5px', fontSize: '10px' }} 
              type="number"
              name="ct3"
              value={this.state.ct3}
              onChange={this.handleChange3}
              placeholder="Akım Trafosu:300"
            />
        
          <br />
         
        
            <input className="inputPlaceholder"
     style={{ width: '95%', height: '1vh', padding: '5px', fontSize: '10px' }} 
              type="number"
              name="cmt3"
              value={this.state.cmt3}
              onChange={this.handleChange3}
              placeholder="Akım Çarpanı:1"
            />
        
        </form>
        <form className="form-container4">
         
      
        <div >   
        <div className="relayheadertext">Röle 4 I&gt;</div>
          <Select
          value={this.state.Röle4Egri}
          onChange={this.DropDown4}
          options={options}
          placeholder={this.state.Röle4Egri}
          
         
        /> </div>
     
      
            <input  className="inputPlaceholder"
         style={{ width: '95%', height: '1vh', padding: '5px', fontSize: '10px' }} 
              type="number"
              name="tms4"
              value={this.state.tms4}
              onChange={this.handleChange4}
              placeholder="Eğri Değeri:0,1"
            />
     
          <br />
         
 
            <input className="inputPlaceholder"
            style={{ width: '95%', height: '1vh', padding: '5px', fontSize: '10px'}}
             
              type="number"
              name="ct4"
              value={this.state.ct4}
              onChange={this.handleChange4}
              placeholder="Akım Trafosu:200"
            />
        
          <br />
         
            <input className="inputPlaceholder"
            style={{ width: '95%', height: '1vh', padding: '5px', fontSize: '10px' }} 
              type="number"
              name="cmt4"
              value={this.state.cmt4}
              onChange={this.handleChange4}
              placeholder="Akım Çarpanı:1"
            />
          
        </form>
        <form className="form-container5">
        <div className="relayheadertext">Röle 5 I&gt;</div>
            <div >   <Select
          value={this.state.Röle5Egri}
          onChange={this.DropDown5}
          options={options}
          placeholder={this.state.Röle5Egri}
          
         
        /> </div>
            <input  className="inputPlaceholder"
            style={{ width: '95%', height: '1vh', padding: '5px', fontSize: '10px' }} 
              type="number"
              name="tms5"
              value={this.state.tms5}
              onChange={this.handleChange5}
               placeholder='Eğri Değerini:0,05'
            />
        
          <br />
         
          
            
            <input className="inputPlaceholder"
          style={{ width: '95%', height: '1vh', padding: '5px', fontSize: '10px' }} 
            type="number"
              name="ct5"
              value={this.state.ct5}
              onChange={this.handleChange5}
              placeholder='Akım Trafosu:50'
            />
        
          <br />
      
         
            <input  className="inputPlaceholder"
            style={{ width: '95%', height: '1vh', padding: '5px', fontSize: '10px' }} 
              type="number"
              name="cmt5"
              value={this.state.cmt5}
              onChange={this.handleChange5}
              placeholder='Akım Çarpanı:1'
            />
       
        </form>
        </div>): (
        <div className="karehidden">
         <FiChevronsDown  data-icon="Firstİcon" onClick={this.Dropİcon} 
        style={{ cursor: 'pointer', fontSize: '24px' }} color="black" size={50}/> <h4>I&gt;  Fonsksiyonu Pasif Durumda  </h4> 
        </div>
        )
       }

       
       {
        this.state.isVisibleDropİcon2 ? (  
          <div >
          {this.renderHtmlOpen()}
          </div>
        ): (
          <div>
          {this.renderHtmlClose()}
          </div>
        )
       }
      

     
        <div className=" tanitim" > <h4> RÖLELERİ AYARLADIKTAN SONRA KISA DEVRE AKIMLARINA KARŞI DAVRANIŞLARINI İNCELEYEBİLİRSİNİZ</h4> </div>
         
 
        <ModernCircles onInputChange={this.handleInputChange} 
        Result_Relay1={this.hesapKitap()}/>
        
    
      </div>

      
    );
  }
}

export default Emre2;
