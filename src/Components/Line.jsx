import React, { useState,useEffect } from 'react';
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



ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);





const KisaDevreAkimlari=[];
const dataY1= [];
const updatedArray1= [];
const dataY2= [];
const PickUpCurrent1= 600;
const PickUpCurrent2= 400;






for (let a = 0; a <= 5; a++) {
  const yy=PickUpCurrent1*a
  KisaDevreAkimlari.push(yy)
  

 
const   y1= (0.14/( Math.pow (KisaDevreAkimlari[a]/PickUpCurrent1,0.02)-1) )
const   y2=0.14/( Math.pow (KisaDevreAkimlari[a]/PickUpCurrent2,0.02)-1)
//console.log("y " +y1)
dataY1.push(y1); // Diziye sayıları string olarak ekleyin
dataY2.push(y2); // Diziye sayıları string olarak ekleyin
 
}

const LineChartComponent = () => {
  const [veri,setVeri]=useState(1);
  const [sonuc,setSonuc]=useState(1);
  
useEffect( ()=>{
// Sayı her değiştiğinde çarpım sonucunu güncelle
setSonuc(multiplyByTwo(veri));
}, [veri]); // veri değişkeni değiştiğinde useEffect tetiklenir

const multiplyByTwo = (numm) => {
  const doubledNumbers = dataY1.map((num) => num *numm );
  console.log(doubledNumbers)

};
  

  const data = {
    labels:KisaDevreAkimlari ,
    datasets: [
      {
        label: '1.RÖLE',
        data:dataY1,
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.5 // This adds some "curve" to the line
      },

      {
        label: '2.RÖLE',
        data:dataY2,
        fill: false,
        borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
        tension: 0.5 // This adds some "curve" to the line
      },
    ],
  };
  
 
/*
  const [y, setY] = useState([]); // Y dizisi için state


   
    for (let x = 1; x <= 10; x++) {
      data.push(x + 1); // Y dizisine x'in 1 fazlasını ekle
    }
    setY(data); // Y dizisini güncelle*/


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
    <>
      
      <div className="chart-container"> 
      <Line options={options} data={data}>   </Line>
      <form>
        {['Röle 1', 'RÖLE 2 '].map((month, index) => (
          <div key={month} className='input-css'>
            <label>
              {month} TMS :
              <input type="number"  onChange={(e)=> setVeri(e.target.value)} />
            </label>
          </div>
        ))}
      </form>
      </div>
      
    </>
  );

};


export default LineChartComponent;