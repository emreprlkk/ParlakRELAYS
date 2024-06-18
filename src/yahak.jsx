import React, { Component, useState } from "react";
import Chart from "react-apexcharts";

    function example (){
        const[us,setus]=useState(1);
        // Kullanıcıdan gelen girişi state'e ata
     const handleChange = (event) => {
       setus(event.target.value);
     };
     return us;
    }
    const PickUpCurrent1=600;

    const PickUpCurrent2=400;
    const PickUpCurrent3=200;
    const KisaDevreAkimlari = [];
    const dataY = [];
    let newSeriesData= [];
    
    const dataY2 = [];
    const dataY3 = [];
    for (let a = 0; a <= 80; a++) {
        const yy = PickUpCurrent2 * a;
        KisaDevreAkimlari.push(yy);
       // console.log(KisaDevreAkimlari)
        let y1 = (0.14 / (Math.pow(KisaDevreAkimlari[a] / PickUpCurrent1, 0.02) - 1));
        let y2 = (0.14 / (Math.pow(KisaDevreAkimlari[a] / PickUpCurrent2, 0.02) - 1));
        let y3 = (0.14 / (Math.pow(KisaDevreAkimlari[a] / PickUpCurrent3, 0.02) - 1));
    
        if(y1==Infinity ) {
            y1=1;
        }
        if(y2==Infinity ) {
            y2=1;
        }
        if(y3==Infinity ) {
            y3=1;
        }
    
        dataY.push(y1.toFixed(3));
        dataY2.push(y2.toFixed(3));
        dataY3.push(y3.toFixed(3));

    }
       
   
        class Emre extends Component {
          constructor(props) {
            super(props);
        // handleInputChange fonksiyonunu class metoduna dönüştürün
    this.handleInputChange1 = this.handleInputChange1.bind(this);
   
            this.state = {
                tms1: '', // Kullanıcının girdiği sayıyı saklayacak state
                tms1: 1, // Kullanıcıdan alınacak sayı için başlangıç değeri
                tms2: '', // Kullanıcının girdiği sayıyı saklayacak state
                tms2: 1, // Kullanıcıdan alınacak sayı için başlangıç değeri
                tms3: '', // Kullanıcının girdiği sayıyı saklayacak state
                tms3: 1, // Kullanıcıdan alınacak sayı için başlangıç değeri
                dataY:[],
                dataY2:[],
                dataY3:[],
                PickUpCurrent1:'',
                PickUpCurrent2:'',
                PickUpCurrent3:'',

           //     previousNumber: 1, // Bir önceki sayıyı saklayacak state
              series: [
                {
                  name: '1.Rölenin Eğrisi',
                  data: dataY // Başlangıçta boş dizi
                },
                {
                  name: '2.Rölenin Eğrisi',
                  data: dataY2 // Başlangıçta boş dizi
                },
                {
                  name: '3.Rölenin Eğrisi',
                  data: dataY3 // Başlangıçta boş dizi
                }
              ],
             //  yx: [1,1], // Kullanıcıdan alınan sayıları saklamak için
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
                  categories:KisaDevreAkimlari,
                  type: 'Amper',
                  title: {
                      text: 'Kisa Devre Akimleri (Amper)'
                    },
                    tickAmount: 10, // Başlangıçta gösterilecek maksimum etiket sayısı
                },
                tooltip: {
                  
                      shared: true, // Bu ayar, araç ipucunun paylaşıldığını belirtir
                      x: {
                        show: true
                      },
                 
                }
              },
              // Diğer state özellikleri...
            };
          }
        
          handleInputChange1 = (e,denklemdizisi,n) => {
          
            let newVal ;
          
          
             {
                newVal = parseFloat(e.target.value); // Girilen değeri bir sayıya dönüştürme
              //  console.log("girdiğin sayı değeri  "+newVal)
              }   
                if (isNaN(newVal)){

                     this.setState({ tms1: '' }); // number state'ini boş bir string olarak güncelle
                }
               
             

            if (!isNaN(newVal) /*&& newVal!== 0*/) {

                // NaN kontrolü yaparak girilen değerin boş olup olmadığını kontrol ederiz 
          //  console.log("sayı girdin " +newVal)
 
           // Kullanıcının girdiği sayıyı yx dizisine eklemek
        
      //   console.log("sayı girdin " +newVal)

 
    this.setState({ tms1: newVal }, 
       
        () => {
        // Mevcut dataY dizisinin ilk hali olan [2, 3, 5] dizisi ile çarpma işlemi
     //   console.log("if e girmeden önceki newval " +newVal)
        if(newVal==0){
            newVal=1
           }
       
    //       console.log("if ten  sonraki newval " +newVal)
     //      console.log("BÖLÜ DİZİSİ " +(this.state.yx))
       
          
        const newSeriesData =denklemdizisi// dataY//this.state.series[0].data.map(dataPoint => dataPoint /(this.state.yx[this.state.yx.length - 2 ]) );
        //console.log("sıfırladığım dizi   " +newSeriesData)

      
        let newSeriesData2=[];
        newSeriesData2 = newSeriesData.map(dataPoint => (dataPoint  * newVal).toFixed(3));
       
        const newData = [...newSeriesData2];
        
       // Series dizisini güncelleme
  this.setState(prevState => ({
    series: prevState.series.map((serie, index) => {
      // Eğer mevcut indeks n ise, data özelliğini güncelle
      if (index === n) {
        return {...serie, data: newData };
      }
      // Diğer tüm elemanlar değişmeden kalır
      return serie;
    }),
  }));
});
         }
            }
            handleInputChange2 = (e,denklemdizisi,n) => {
                let newVal ;
                
    
                 {
                    newVal = parseFloat(e.target.value); // Girilen değeri bir sayıya dönüştürme
                  //  console.log("girdiğin sayı değeri  "+newVal)
                  }   
                    if (isNaN(newVal)){
    
                         this.setState({ tms2: '' }); // number state'ini boş bir string olarak güncelle
                    }
                   
                 
    
                if (!isNaN(newVal) /*&& newVal!== 0*/) {
    
                    // NaN kontrolü yaparak girilen değerin boş olup olmadığını kontrol ederiz 
              //  console.log("sayı girdin " +newVal)
     
               // Kullanıcının girdiği sayıyı yx dizisine eklemek
            
          //   console.log("sayı girdin " +newVal)
    
     
        this.setState({ tms2: newVal }, 
           
            () => {
            // Mevcut dataY dizisinin ilk hali olan [2, 3, 5] dizisi ile çarpma işlemi
         //   console.log("if e girmeden önceki newval " +newVal)
            if(newVal==0){
                newVal=1
               }
           
        //       console.log("if ten  sonraki newval " +newVal)
         //      console.log("BÖLÜ DİZİSİ " +(this.state.yx))
           
              
            const newSeriesData =denklemdizisi// dataY//this.state.series[0].data.map(dataPoint => dataPoint /(this.state.yx[this.state.yx.length - 2 ]) );
            //console.log("sıfırladığım dizi   " +newSeriesData)
    
          
            let newSeriesData2=[];
            newSeriesData2 = newSeriesData.map(dataPoint => (dataPoint  * newVal).toFixed(3));
           
            const newData = [...newSeriesData2];
            
           // Series dizisini güncelleme
      this.setState(prevState => ({
        series: prevState.series.map((serie, index) => {
          // Eğer mevcut indeks n ise, data özelliğini güncelle
          if (index === n) {
            return {...serie, data: newData };
          }
          // Diğer tüm elemanlar değişmeden kalır
          return serie;
        }),
      }));
    });
             }
                }
                handleInputChange3 = (e,denklemdizisi,n) => {
                    let newVal ;
                    
        
                     {
                        newVal = parseFloat(e.target.value); // Girilen değeri bir sayıya dönüştürme
                      //  console.log("girdiğin sayı değeri  "+newVal)
                      }   
                        if (isNaN(newVal)){
        
                             this.setState({ tms3: '' }); // number state'ini boş bir string olarak güncelle
                        }
                       
                     
        
                    if (!isNaN(newVal) /*&& newVal!== 0*/) {
        
                        // NaN kontrolü yaparak girilen değerin boş olup olmadığını kontrol ederiz 
                  //  console.log("sayı girdin " +newVal)
         
                   // Kullanıcının girdiği sayıyı yx dizisine eklemek
                
              //   console.log("sayı girdin " +newVal)
        
         
            this.setState({ tms3: newVal }, 
               
                () => {
                // Mevcut dataY dizisinin ilk hali olan [2, 3, 5] dizisi ile çarpma işlemi
             //   console.log("if e girmeden önceki newval " +newVal)
                if(newVal==0){
                    newVal=1
                   }
               
            //       console.log("if ten  sonraki newval " +newVal)
             //      console.log("BÖLÜ DİZİSİ " +(this.state.yx))
               
                  
                const newSeriesData =denklemdizisi// dataY//this.state.series[0].data.map(dataPoint => dataPoint /(this.state.yx[this.state.yx.length - 2 ]) );
                //console.log("sıfırladığım dizi   " +newSeriesData)
        
              
                let newSeriesData2=[];
                newSeriesData2 = newSeriesData.map(dataPoint => (dataPoint  * newVal).toFixed(3));
               
                const newData = [...newSeriesData2];
                
               // Series dizisini güncelleme
          this.setState(prevState => ({
            series: prevState.series.map((serie, index) => {
              // Eğer mevcut indeks n ise, data özelliğini güncelle
              if (index === n) {
                return {...serie, data: newData };
              }
              // Diğer tüm elemanlar değişmeden kalır
              return serie;
            }),
          }));
        });
                 }
                    }




         
   

          render() {
   
            return (
                
              <div>
                <div>
                <form> TMS GİRİNİZ  <input
                 
                 type="number"
                 id="TMS 1"
                 value={this.state.tms1}
                 onChange={(event) => this.handleInputChange1(event,dataY,0)}
               />  </form>

                   <form> TMS GİRİNİZ  2  <input
                 type="number"
                 id="TMS 2"
                 value={this.state.tms2}
                 onChange={(event) => this.handleInputChange2(event,dataY2,1)}
               /> </form>
            
                 
               <form> TMS GİRİNİZ  3 
               <input
                 type="number"
                 id="TMS 3"
                 value={this.state.tms3}
                 onChange={(event) => this.handleInputChange3(event,dataY3,2)}
               />

               </form>
                
               
            
                </div>
                <Chart
                  options={this.state.options}
                  series={this.state.series}
                  type="line"
                  width="900"
                />
              </div>
            );
          }
        }
        
        
        
   




 

   
    //console.log(dataY)
    //console.log(dataY2)


export default Emre;