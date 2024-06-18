class Emre extends Component {
   
    
  
    
    constructor(props) {
      super(props);
     
      this.state = {
          
          series: [
              {
            name: '1.Rölenin Eğrisi',
            data: dataY}
            ,
            {
              name: '2.Rölenin Eğrisi',
              data: dataY2
          },
          {
              name: '3.Rölenin Eğrisi',
              data: dataY3
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
              size: 1,
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
        
        
        };
      }
     
    
  
    render() {
      return (
      
  
  
  
            <div>
          <form> </form>
            <Chart
      options={this.state.options}
      series={this.state.series}
      type="line"
      width="900"
    />
      <div> 
      <div>
        <label htmlFor="number">Sayıyı Girin:</label>
        <input type="number" id="number"  />
      </div>
          
          </div>      </div>
        
      
      );
    }
  }



  ///////
  handleInputChange = (e) => {
    


         const newVal = parseFloat(e.target.value);
         this.setState({ number: newVal }, () => {
          

            newSeriesData = this.state.series[0].data.map(dataPoint => dataPoint * newVal);
           
           // Yeni data dizisi oluşturma
           const newData = [...newSeriesData];
           
           // Series dizisini güncelleme
           this.setState({
             series: 
             this.state.series.map((serie, index) => ({
          ...serie,
               data: index === 0? newData : this.state.series[0].data, // İlk seri için yeni data, diğerleri için mevcut dataY'nin ilk hali
             })),
           });
        
         });
        }


       