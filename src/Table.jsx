import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect } from 'react';
import { isNumber } from '@mui/x-data-grid/internals';

export default function DataTable(props) {
  const { kisa_devre_react_Table,röle1Data, röle2Data, röle3Data,röle4Data,röle5Data } = props;
  console.log(" kisadevre "+kisa_devre_react_Table.length )

  console.log("röle "+röle1Data.length )

  const columns = [
    { field: 'id', headerName: 'ID', width: 70, filterable: true,align: 'center', headerAlign: 'center' },
    { field: 'KisaDevre', headerName: 'Kısa Devre Akımı', width: 130 ,align: 'center', headerAlign: 'center' },
    { field: 'röle1', headerName: 'RÖLE1 SÜRESİ',description:'Röle-1 ün ilgili kısa devrede açma saniyesi.', width: 150 ,align: 'center', headerAlign: 'center' },
    {
      field: 'röle2',headerName: 'RÖLE 2 SÜRESİ', description: 'Röle-2 nin ilgili kısa devrede açma saniyesi.',type: 'number', width: 130,align: 'center', headerAlign: 'center' },
      { field: 'röle3', headerName: 'RÖLE 3 SÜRESİ',description: 'Röle-3 ün ilgili kısa devrede açma saniyesi.', type: 'number',width: 130, filterable: true ,align: 'center', headerAlign: 'center' },
      { field: 'röle4', headerName: 'RÖLE 4 SÜRESİ', description: 'Röle-4 ün ilgili kısa devrede açma saniyesi.',type: 'number',width: 130, filterable: true ,align: 'center', headerAlign: 'center' },
      { field: 'röle5', headerName: 'RÖLE 5 SÜRESİ',description:'Röle-5 in ilgili kısa devrede açma saniyesi.', type: 'number',width: 130, filterable: true ,align: 'center', headerAlign: 'center' },
   /* {
      field: 'fullName',headerName: 'FARK SÜRESİ',description: 'cart curt açıklama.', sortable: false,width: 300,
      valueGetter: (value,row) => {
        const firstNameNumber = Number(row.firstName);
        const lastNameNumber = Number(row.lastName);
    
        // İki sayıyı karşılaştırıp farkı hesapla
 let difference = Math.abs(firstNameNumber - lastNameNumber).toFixed(3);
       
     
        {   return difference.toString()+" Saniye";}
   
     
      },
    },*/
 
  ];
  
  const rows = [];

  // röle1Data ve röle2Data dizilerinin tüm elemanlarını rows dizisine ekler
  for (let i = 0; i < röle1Data.length /*|| i < röle2Data.length|| i < röle3Data.length || i < röle4Data.length || i < röle5Data.length*/; i++) {
    
    rows.push({ id: i + 1, KisaDevre: kisa_devre_react_Table[i] +" Amper", röle1: röle1Data[i] });
  }
 
  return (
    <div style={{ height: 450, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10,15,20,30,40,51,100,1000,10000]}
        checkboxSelection
      />
     
    
    </div>
    
  );
}