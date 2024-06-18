import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  } from 'chart.js';
  import zoomPlugin from 'chartjs-plugin-zoom';

ChartJS.register(zoomPlugin);

const Deneme = () => {
    const PickUpCurrent1=600;

    const PickUpCurrent2=300;
    const KisaDevreAkimlari = [];
    const dataY = [];

    const dataY2 = [];
    for (let a = 0; a <= 10; a++) {
        const yy = PickUpCurrent1 * a;
        KisaDevreAkimlari.push(yy);
  
        const y1 = (0.14 / (Math.pow(KisaDevreAkimlari[a] / PickUpCurrent1, 0.02) - 1));
        const y2 = (0.14 / (Math.pow(KisaDevreAkimlari[a] / PickUpCurrent2, 0.02) - 1));
  
        dataY.push(y1);
        dataY2.push(y2);

      }
const datasets=[
    {
        label: 'Veri Seti 1',
        data: dataY, // Başlangıç değerleri
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        fill: false,
      },
      {
        label: 'Veri Seti 2',
        data: dataY2, // Başlangıç değerleri
        borderColor: '#FF0000',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
        borderWidth: 2,
        fill: false,
      },
]
  const [data, setData] = useState({
    labels: KisaDevreAkimlari,
    datasets: datasets
  });

  const handleInputChange1 = (e, index) => {
    let TMS1;

    let TMS2;
    console.log("name "+e.target.name)
    // const newData = [...data.datasets[0].data];
   if(e.target.name==1){
    
     TMS1 = parseFloat(e.target.value) ;
     const multipliedDataY = dataY.map((value) => value * TMS1);
     setData({
        ...data,
        datasets: [{ ...data.datasets[0], data: multipliedDataY  },{ ...data.datasets[1]  }],
      });
   }
   else if(e.target.name==2) {
     TMS2 = parseFloat(e.target.value) ;
     
   const multipliedDataY2 = dataY2.map((value) => value * TMS2);
   setData({
    ...data,
    datasets: [{ ...data.datasets[0]  },{ ...data.datasets[1], data: multipliedDataY2  }],
  });
   }
  

  

    // Diziyi çarpma
   

    //    console.log("çarpılmış dizi "+multipliedDataY)
   // newData[index] = multipliedDataY[index] || 0;
    setData({
      ...data,
      datasets: [{ ...data.datasets[0], data: multipliedDataY  },{ ...data.datasets[1], data: multipliedDataY2  }],
    });
  };

  

  /*useEffect(() => {
    // Burada verileri otomatik olarak güncelleyebilirsiniz.
    // Örneğin, kullanıcının farklı sayılar girdiğini varsayalım.
    // Bu noktada verileri güncellemek için bir mekanizma ekleyebilirsiniz.
  }, [data2]);*/

  const options = {
    
 
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'RÖLELER',
      },
      zoom : {
        zoom:{
          wheel:{
            enabled:true,
          },
          pinch:{
            enabled:true
          },
          mode:'xy',
        
        }
      },
     
    },
  

}


  return (
    <div div className="chart-container">
   
      <Line options={options} data={data} />
      <div>
        <input
          type="number"
          name='1'
          placeholder="RÖLE 1 TMS "
          onChange={(e) => handleInputChange1(e, 0)}
        />
        <input
          type="number"
          name='2'
          placeholder="RÖLE 2 TMS"
          onChange={(e) => handleInputChange1(e, 1)}
        />
      </div>
    </div>
  );
};

export default Deneme;
