import { DataGrid, GridColDef } from '@mui/x-data-grid';
// import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { MailOutline, ArrowForward } from '@mui/icons-material';
import ChartComponentGeneral from './components/chart-components';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Nom', width: 150 },
    { 
      field: 'frequentPurchase', 
      headerName: 'Achat fréquent de produits', 
      width: 200,
      renderCell: (params) => (
        <div className="flex items-center">
          <span className="bg-blue-100 text-blue-800 px-2 py-1 mt-1 rounded-full text-xs font-semibold">
            {params.value.product} {params.value.percentage}%
          </span>
        </div>
      )
    },
    { 
      field: 'category', 
      headerName: 'Catégorie Pdt', 
      width: 150,
      renderCell: (params) => (
        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
          params.value === 'Épiceries' ? 'bg-pink-100 text-pink-800' : 'bg-blue-100 text-blue-800'
        }`}>
          {params.value}
        </span>
      )
    },
    { field: 'phone', headerName: 'Téléphone', width: 150 },
    { field: 'store', headerName: 'Nom du magasin', width: 150 },
    { field: 'date', headerName: 'Date', width: 120 },
    {
      field: 'action',
      headerName: 'Action',
      width: 100,
      renderCell: () => (
        <button className="flex items-center bg-white border border-gray-300 px-3 py-1 rounded-full text-sm">
          <MailOutline className="w-4 h-4 mr-1" />
          Mail
        </button>
      )
    },
  ];

  const rows = [
    { id: 1, name: 'Robert Renard', frequentPurchase: { product: 'Boissons', percentage: 43 }, category: 'Épiceries', phone: '(671) 555-0110', store: 'Carrefour Marché', date: '9/11/2024' },
    { id: 2, name: 'Cody Fisher', frequentPurchase: { product: 'Ampoules LED', percentage: 50 }, category: 'Électronique', phone: '(505) 555-0125', store: 'Sainte Lucie', date: '9/11/2024' },
    // Add more rows as needed
  ];

  return (
    <div className="">
      <h1 className="text-2xl font-bold mb-6">Tableau de bord</h1>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {[
          { title: 'Volume des transactions', value: '20 000 FCFA', icon: 'mail' },
          { title: 'Produit le plus vendu', value: '43 T-shirt', icon: 'briefcase' },
          { title: 'Récompenses de fidélité totales', value: '62 Contacte', icon: 'user' },
        ].map((card, index) => (
          <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">{card.title}</p>
              <p className="text-xl font-bold">{card.value}</p>
            </div>
            <ArrowForward className="text-gray-400" />
          </div>
        ))}
      </div>

      {/* Client Purchases Table */}
      <div className="bg-white p-4 rounded-lg border border-gray-200 mb-6">
        <h2 className="text-lg font-semibold mb-4">Achat fréquent du client</h2>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid 
                    rows={rows} 
                    columns={columns} 
                    // pageSize={5} 
                    checkboxSelection />
        </div>
      </div>

      {/* Best Selling Product and Transactions */}
      {/* <div className="grid grid-cols-3 gap-4 mb-6"> */}
        {/* <div className="bg-white p-4 rounded-lg border border-gray-200 col-span-1">
          <h2 className="text-lg font-semibold mb-4">Produit le plus vendu</h2> */}
          {/* Add product list here */}
        {/* </div> */}
        {/* <ChartComponentGeneral /> */}
      {/* </div> */}
      <div className="mb-6">
      <ChartComponentGeneral />
      </div>

      {/* Best Selling Category and Business Categories */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg border border-gray-200 col-span-2">
          <h2 className="text-lg font-semibold mb-4">Catégorie la plus vendue</h2>
          {/* Add category table here */}
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <h2 className="text-lg font-semibold mb-4">Catégories d'entreprises</h2>
          {/* Add pie chart here */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;