// import React, { useState, useEffect } from 'react';
// import { Box, Typography, Button, Chip, IconButton } from '@mui/material';
// import { DataGrid, GridColDef, GridRenderCellParams, GridPaginationModel } from '@mui/x-data-grid';
// import MailOutlineIcon from '@mui/icons-material/MailOutline';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
// import CloseIcon from '@mui/icons-material/Close';
// import axios from 'axios';
// import ClientSpendingChart from './components/clientspendingchart';
// import FrequentlyBoughtCategoriesByClient from './components/freqboughtcatbyclient';
// import FrequentlyBoughtProductsByClient from './components/freqboughtprodbyclient';

// interface DataInput {
//   id: number | string;
//   client_id: string;
//   transaction_date: string;
//   product_category: string;
//   product: string;
//   amount_spent: string;
//   phone_number: string;
//   supermarket_name: string;
// }

// const Clients: React.FC = () => {
//   const [data, setData] = useState<DataInput[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [isPopoverOpen, setIsPopoverOpen] = useState(false); // Popover state
//   const [selectedClient, setSelectedClient] = useState<DataInput | null>(null); // Selected client for the popover
//   const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
//     pageSize: 10,
//     page: 0,
//   });
//   const [totalRows, setTotalRows] = useState(0);

//   useEffect(() => {
//     fetchData();
//   }, [paginationModel]);

//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get<DataInput[]>('http://127.0.0.1:8000/api/v1/data', {
//         params: {
//           limit: paginationModel.pageSize,
//           offset: paginationModel.page * paginationModel.pageSize,
//         },
//       });

//       const updatedData = response.data.map((item, index) => ({
//         ...item,
//         id: item.id || `${item.client_id}-${index}`,  // Ensure every row has a unique ID
//       }));

//       setData(updatedData);
//       setTotalRows(parseInt(response.headers['x-total-count'] || '0', 10));
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       setLoading(false);
//     }
//   };

//   // Trigger popover when the "More Options" button is clicked
//   const handleMoreOptionsClick = (event: React.MouseEvent<HTMLButtonElement>, client: DataInput) => {
//     setIsPopoverOpen(true);
//     setSelectedClient(client);
//   };

//   // Close the popover
//   const handleClose = () => {
//     setIsPopoverOpen(false);
//     setSelectedClient(null);
//   };

//   const columns: GridColDef[] = [
//     { field: 'client_id', headerName: 'Nom', flex: 1, sortable: false },
//     {
//       field: 'product',
//       headerName: 'Achat fréquent de produits',
//       flex: 1.5,
//       sortable: false,
//       renderCell: (params: GridRenderCellParams) => (
//         <Box display="flex" alignItems="center">
//           <Chip
//             label={`${params.value}`}
//             sx={{
//               backgroundColor: '#E3F2FD',
//               color: '#1565C0',
//               '& .MuiChip-label': { fontWeight: 'bold' },
//               mt: 1,
//             }}
//           />
//         </Box>
//       ),
//     },
//     {
//       field: 'product_category',
//       headerName: 'Catégorie Pdt',
//       flex: 1,
//       sortable: false,
//       renderCell: (params: GridRenderCellParams) => (
//         <Chip
//           label={params.value}
//           sx={{
//             backgroundColor: params.value === 'Épiceries' ? '#FCE4EC' : '#E8EAF6',
//             color: params.value === 'Épiceries' ? '#C2185B' : '#3F51B5',
//           }}
//         />
//       ),
//     },
//     { field: 'supermarket_name', headerName: 'Nom du magasin', flex: 1, sortable: false },
//     {
//       field: 'transaction_date',
//       headerName: 'Date',
//       flex: 1,
//       sortable: false,
//       renderCell: (params: GridRenderCellParams) => (
//         <Box display="flex" alignItems="center">
//           <Box component="span" mr={1} display="flex">
//             <CalendarTodayIcon sx={{ mr: 1, color: 'action.active' }} />
//           </Box>
//           {params.value}
//         </Box>
//       ),
//     },
//     {
//       field: 'moreOptions',
//       headerName: '',
//       width: 50,
//       sortable: false,
//       renderCell: (params: GridRenderCellParams) => (
//         <IconButton onClick={(event) => handleMoreOptionsClick(event, params.row)}>
//           <MoreVertIcon />
//         </IconButton>
//       ),
//     },
//   ];

//   return (
//     <Box sx={{ height: '100%', width: '100%', p: 3 }}>
//       <Typography variant="h5" gutterBottom>
//         Comportement clients
//       </Typography>

//       <DataGrid
//         rows={data}
//         columns={columns}
//         loading={loading}
//         paginationModel={paginationModel}
//         onPaginationModelChange={setPaginationModel}
//         paginationMode="server"
//         rowCount={totalRows}
//         sx={{
//           border: 'none',
//           '& .MuiDataGrid-columnHeaders': {
//             backgroundColor: '#F5F5F5',
//             color: '#757575',
//           },
//           '& .MuiDataGrid-cell': {
//             borderBottom: 'none',
//           },
//           '& .MuiDataGrid-row': {
//             borderBottom: '1px solid #E0E0E0',
//           },
//         }}
//       />

//       {/* Popover content */}
//       {isPopoverOpen && selectedClient && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-end">
//           <div className="bg-white rounded-lg w-[700px] flex flex-col max-h-[100vh]">
//             <div className="p-6 border-b">
//               <div className="flex justify-between items-center">
//                 <h2 className="text-xl font-bold">{selectedClient.client_id}</h2>
//                 <button onClick={handleClose} className="text-gray-500 hover:text-gray-700">
//                   <CloseIcon />
//                 </button>
//               </div>
//             </div>

//             <div className="overflow-y-auto flex-grow p-6">
//               <ClientSpendingChart clientId={selectedClient.client_id} />
//               <div className="flex justify-between mt-6">
//                 <FrequentlyBoughtCategoriesByClient clientId={selectedClient.client_id} />
//                 <FrequentlyBoughtProductsByClient clientId={selectedClient.client_id} />
//               </div>
//             </div>

//             <div className="p-6 border-t">
//               <button className="w-full bg-cyan-500 text-black py-2 rounded hover:bg-cyan-600">
//                 Éligible à la fidélisation
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </Box>
//   );
// };

// export default Clients;



import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Chip, IconButton } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams, GridPaginationModel } from '@mui/x-data-grid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import ClientSpendingChart from './components/clientspendingchart';
import FrequentlyBoughtCategoriesByClient from './components/freqboughtcatbyclient';
import FrequentlyBoughtProductsByClient from './components/freqboughtprodbyclient';

interface DataInput {
  id: number | string;
  client_id: string;
  transaction_date: string;
  product_category: string;
  product: string;
  amount_spent: string;
  phone_number: string;
  supermarket_name: string;
}

const Clients: React.FC = () => {
  const [data, setData] = useState<DataInput[]>([]);
  const [loading, setLoading] = useState(true);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState<DataInput | null>(null);
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    pageSize: 10,
    page: 0,
  });
  const [totalRows, setTotalRows] = useState(0);
  const [selectedRowIds, setSelectedRowIds] = useState<string[]>([]);

  useEffect(() => {
    fetchData();
  }, [paginationModel.page, paginationModel.pageSize]); // Fetch data on pagination change

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get<DataInput[]>('http://127.0.0.1:8000/api/v1/data', {
        params: {
          limit: paginationModel.pageSize,
          offset: paginationModel.page * paginationModel.pageSize,
        },
      });

      const updatedData = response.data.map((item, index) => ({
        ...item,
        id: item.id || `${item.client_id}-${index}`, // Ensure every row has a unique ID
      }));

      setData(updatedData);
      setTotalRows(parseInt(response.headers['x-total-count'] || '0', 10));
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  const handleSelectionChange = (newSelection: string[]) => {
    setSelectedRowIds(newSelection); // Directly set new selection
  };

  const handleMoreOptionsClick = (event: React.MouseEvent<HTMLButtonElement>, client: DataInput) => {
    setIsPopoverOpen(true);
    setSelectedClient(client);
  };

  const handleClose = () => {
    setIsPopoverOpen(false);
    setSelectedClient(null);
  };

  const columns: GridColDef[] = [
    { field: 'client_id', headerName: 'Nom', flex: 1, sortable: false },
    {
      field: 'product',
      headerName: 'Achat fréquent de produits',
      flex: 1.5,
      sortable: false,
      renderCell: (params: GridRenderCellParams) => (
        <Box display="flex" alignItems="center">
          <Chip
            label={`${params.value}`}
            sx={{
              backgroundColor: '#E3F2FD',
              color: '#1565C0',
              '& .MuiChip-label': { fontWeight: 'bold' },
              mt: 1,
            }}
          />
        </Box>
      ),
    },
    {
      field: 'product_category',
      headerName: 'Catégorie Pdt',
      flex: 1,
      sortable: false,
      renderCell: (params: GridRenderCellParams) => (
        <Chip
          label={params.value}
          sx={{
            backgroundColor: params.value === 'Épiceries' ? '#FCE4EC' : '#E8EAF6',
            color: params.value === 'Épiceries' ? '#C2185B' : '#3F51B5',
          }}
        />
      ),
    },
    { field: 'supermarket_name', headerName: 'Nom du magasin', flex: 1, sortable: false },
    {
      field: 'transaction_date',
      headerName: 'Date',
      flex: 1,
      sortable: false,
      renderCell: (params: GridRenderCellParams) => (
        <Box display="flex" alignItems="center">
          <Box component="span" mr={1} display="flex">
            <CalendarTodayIcon sx={{ mr: 1, color: 'action.active' }} />
          </Box>
          {params.value}
        </Box>
      ),
    },
    {
      field: 'action',
      headerName: 'Action',
      flex: 1,
      sortable: false,
      renderCell: () => (
        <Button variant="outlined" startIcon={<MailOutlineIcon />} sx={{ borderRadius: 20, textTransform: 'none' }}>
          Mail
        </Button>
      ),
    },
    {
      field: 'moreOptions',
      headerName: '',
      width: 50,
      sortable: false,
      renderCell: (params: GridRenderCellParams) => (
        <IconButton onClick={(event) => handleMoreOptionsClick(event, params.row)}>
          <MoreVertIcon />
        </IconButton>
      ),
    },
  ];

  return (
    <Box sx={{ height: '100%', width: '100%', p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Comportement clients
      </Typography>

      <DataGrid
        rows={data}
        columns={columns}
        loading={loading}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        paginationMode="server"
        // rowCount={totalRows}
        checkboxSelection
        // onRowSelectionModelChange={handleSelectionChange}
        rowSelectionModel={selectedRowIds}
        sx={{
          border: 'none',
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: '#F5F5F5',
            color: '#757575',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: 'none',
          },
          '& .MuiDataGrid-row': {
            borderBottom: '1px solid #E0E0E0',
          },
        }}
      />
      {isPopoverOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-end">
          <div className="bg-white rounded-lg w-[700px] flex flex-col max-h-[100vh]">
            <div className="p-6 border-b">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">{selectedClient?.client_id}</h2>
                <button onClick={handleClose} className="text-gray-500 hover:text-gray-700">
                  <CloseIcon />
                </button>
              </div>
            </div>

            <div className="overflow-y-auto flex-grow p-6">
              <ClientSpendingChart clientId={selectedClient?.client_id || ''} />

              <div className="flex justify-between mt-6">
                <FrequentlyBoughtCategoriesByClient clientId={selectedClient?.client_id || ''} />
                <FrequentlyBoughtProductsByClient clientId={selectedClient?.client_id || ''} />
              </div>
            </div>

            <div className="p-6 border-t">
              <button className="w-full bg-cyan-500 text-black py-2 rounded hover:bg-cyan-600">
                Éligible à la fidélisation
              </button>
            </div>
          </div>
        </div>
      )}
    </Box>
  );
};

export default Clients;

