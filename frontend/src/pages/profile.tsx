import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPhone, FaMapMarkerAlt, FaUserCircle, FaCog, FaLock, FaSignOutAlt, FaBell, FaEnvelope } from 'react-icons/fa';

const Profile = () => {
  const user = {
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    mobile: '+1 123 456 7890',
    location: 'San Francisco, CA',
    profileImage: 'https://via.placeholder.com/100',
    bio: 'A passionate software engineer with over 10 years of experience working with tech companies. Loves to create innovative solutions.',
    social: {
      facebook: 'https://facebook.com/johndoe',
      twitter: 'https://twitter.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
      instagram: 'https://instagram.com/johndoe',
    },
    recentActivity: [
      'Updated profile picture',
      'Changed password',
      'Subscribed to newsletter',
      'Logged in from a new device',
    ],
  };

  return (
    <div className="min-h-screen bg-white p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Profile Dashboard</h1>
        {/* <button className="bg-red-500 text-white px-4 py-2 rounded flex items-center hover:bg-red-600">
          <FaSignOutAlt className="h-5 w-5 mr-2" />
          Logout
        </button> */}
      </div>

      {/* Profile Info and Account Settings */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Info */}
        <div className="bg-white rounded-lg border p-6 flex flex-col items-center">
          <img
            src={user.profileImage}
            alt="Profile"
            className="w-24 h-24 rounded-full mb-4"
          />
          <h2 className="text-xl font-semibold">{user.fullName}</h2>
          <p className="text-gray-600">{user.bio}</p>

          {/* Contact Info */}
          <div className="mt-4 space-y-2">
            <p className="flex items-center text-gray-600">
              <FaEnvelope className="h-5 w-5 mr-2" /> {user.email}
            </p>
            <p className="flex items-center text-gray-600">
              <FaPhone className="h-5 w-5 mr-2" /> {user.mobile}
            </p>
            <p className="flex items-center text-gray-600">
              <FaMapMarkerAlt className="h-5 w-5 mr-2" /> {user.location}
            </p>
          </div>

          {/* Social Icons */}
          <div className="mt-4 flex space-x-3">
            <a href={user.social.facebook} target="_blank" rel="noreferrer" className="text-blue-600">
              <FaFacebook className="h-6 w-6" />
            </a>
            <a href={user.social.twitter} target="_blank" rel="noreferrer" className="text-blue-400">
              <FaTwitter className="h-6 w-6" />
            </a>
            <a href={user.social.linkedin} target="_blank" rel="noreferrer" className="text-blue-500">
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a href={user.social.instagram} target="_blank" rel="noreferrer" className="text-pink-500">
              <FaInstagram className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Account Settings */}
        <div className="col-span-2 bg-white rounded-lg border p-6">
          <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
          <ul className="space-y-4">
            <li>
              <button className="flex items-center w-full text-left px-4 py-2 bg-gray-50 rounded-md hover:bg-gray-100">
                <FaUserCircle className="h-6 w-6 text-gray-500 mr-3" />
                Edit Profile
              </button>
            </li>
            <li>
              <button className="flex items-center w-full text-left px-4 py-2 bg-gray-50 rounded-md hover:bg-gray-100">
                <FaEnvelope className="h-6 w-6 text-gray-500 mr-3" />
                Change Email
              </button>
            </li>
            <li>
              <button className="flex items-center w-full text-left px-4 py-2 bg-gray-50 rounded-md hover:bg-gray-100">
                <FaLock className="h-6 w-6 text-gray-500 mr-3" />
                Change Password
              </button>
            </li>
            <li>
              <button className="flex items-center w-full text-left px-4 py-2 bg-gray-50 rounded-md hover:bg-gray-100">
                <FaCog className="h-6 w-6 text-gray-500 mr-3" />
                Settings
              </button>
            </li>
            <li>
              <button className="flex items-center w-full text-left px-4 py-2 bg-gray-50 rounded-md hover:bg-gray-100">
                <FaBell className="h-6 w-6 text-gray-500 mr-3" />
                Notifications
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg border p-6 mt-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <ul className="divide-y divide-gray-200">
          {user.recentActivity.map((activity, index) => (
            <li key={index} className="py-3">
              {activity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;





// import React, { useState } from 'react';
// import {
//   Box,
//   Typography,
//   TextField,
//   Button,
//   Chip,
//   IconButton,
// } from '@mui/material';
// import {
//   DataGrid,
//   GridColDef,
//   gridClasses,
//   GridToolbar,
// } from '@mui/x-data-grid';
// import FilterListIcon from '@mui/icons-material/FilterList';
// import SortIcon from '@mui/icons-material/Sort';
// import MailOutlineIcon from '@mui/icons-material/MailOutline';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import SearchIcon from '@mui/icons-material/Search';
// import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
// import CloseIcon from '@mui/icons-material/Close';
// import ClientSpendingChart from './components/clientspendingchart';
// import FrequentlyBoughtCategoriesByClient from './components/freqboughtcatbyclient';
// import FrequentlyBoughtProductsByClient from './components/freqboughtprodbyclient';




// const rows = [
//   { id: 1, name: 'Robert Renard', frequentPurchase: { product: 'Boissons', percentage: 43 }, category: 'Épiceries', store: 'Carrefour Marché', date: '9/11/2024' },
//   { id: 2, name: 'Cody Fisher', frequentPurchase: { product: 'Ampoules LED', percentage: 50 }, category: 'Électronique', store: 'Sainte Lucie', date: '9/11/2024' },
//   { id: 3, name: 'Albert Florès', frequentPurchase: { product: 'Savon', percentage: 73 }, category: 'Articles maison', store: 'Njiforbi', date: '9/11/2024' },
//   { id: 4, name: 'Floyd Miles', frequentPurchase: { product: 'Yaourt', percentage: 47 }, category: 'Épiceries', store: 'Sentimental', date: '9/11/2024' },
//   { id: 5, name: 'Arlène McCoy', frequentPurchase: { product: 'Câbles USB', percentage: 70 }, category: 'Électronique', store: 'Colombe', date: '9/11/2024' },
//   { id: 6, name: 'Arsène Wenger', frequentPurchase: { product: 'Soccer ball', percentage: 90 }, category: 'Sports', store: 'Super U', date: '9/11/2024' },
//   { id: 7, name: 'Marlène Graciana', frequentPurchase: { product: 'Makeup box', percentage: 60 }, category: 'Articles maison', store: 'Santa Lucia', date: '9/11/2024' },
// ];

// const Clients: React.FC = () => {
//   const [searchText, setSearchText] = useState('');
//   const [isPopoverOpen, setIsPopoverOpen] = useState(false);
//   const [selectedClient, setSelectedClient] = useState<any>(null);

//   const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchText(event.target.value);
//   };

//   const handleMoreOptionsClick = (event: React.MouseEvent<HTMLButtonElement>, client: any) => {
//     setIsPopoverOpen(true);
//     setSelectedClient(client);
//   };

//   const handleClose = () => {
//     setIsPopoverOpen(false);
//     setSelectedClient(null);
//   };


//   const columns: GridColDef[] = [
//     {
//       field: 'name',
//       headerName: 'Nom',
//       flex: 1,
//       sortable: false,
//     },
//     {
//       field: 'frequentPurchase',
//       headerName: 'Achat fréquent de produits',
//       flex: 1.5,
//       sortable: false,
//       renderCell: (params) => (
//         <Box display="flex" alignItems="center">
//           <Chip
//             label={`${params.value.product} ${params.value.percentage}%`}
//             sx={{
//               backgroundColor: '#E3F2FD',
//               color: '#1565C0',
//               '& .MuiChip-label': { fontWeight: 'bold' },
//               mt: 1
//             }}
//           />
//         </Box>
//       ),
//     },
//     {
//       field: 'category',
//       headerName: 'Catégorie Pdt',
//       flex: 1,
//       sortable: false,
//       renderCell: (params) => (
//         <Chip
//           label={params.value}
//           sx={{
//             backgroundColor: params.value === 'Épiceries' ? '#FCE4EC' : '#E8EAF6',
//             color: params.value === 'Épiceries' ? '#C2185B' : '#3F51B5',
//           }}
//         />
//       ),
//     },
//     {
//       field: 'store',
//       headerName: 'Nom du magasin',
//       flex: 1,
//       sortable: false,
//     },
//     {
//       field: 'date',
//       headerName: 'Date',
//       flex: 1,
//       sortable: false,
//       renderCell: (params) => (
//         <Box display="flex" alignItems="center">
//           <Box component="span" mr={1} display="flex">
//             <CalendarTodayIcon sx={{ mr: 1, color: 'action.active' }} />
//           </Box>
//           {params.value}
//         </Box>
//       ),
//     },
//     {
//       field: 'action',
//       headerName: 'Action',
//       flex: 1,
//       sortable: false,
//       renderCell: () => (
//         <Button
//           variant="outlined"
//           startIcon={<MailOutlineIcon />}
//           sx={{ borderRadius: 20, textTransform: 'none' }}
//         >
//           Mail
//         </Button>
//       ),
//     },
//     {
//       field: 'moreOptions',
//       headerName: '',
//       width: 50,
//       sortable: false,
//       renderCell: (params) => (
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
//         rows={rows}
//         columns={columns}
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
//       {/* {isPopoverOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-end">
//           <div className="bg-white rounded-lg p-6 w-[650px]">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-xl font-bold">{selectedClient?.name}</h2>
//               <button onClick={handleClose} className="text-gray-500 hover:text-gray-700">
//                 <CloseIcon />
//               </button>
//             </div>
          
//             <ClientSpendingChart clientId={''} />

//             <div className="flex justify-between mt-6">
//               <FrequentlyBoughtCategoriesByClient clientId={''} />
//               <FrequentlyBoughtProductsByClient clientId={''} />
//             </div>

//             <button className="w-full bg-cyan-500 text-black py-2 rounded mt-4 hover:bg-cyan-600">
//               Éligible à la fidélisation
//             </button>
//           </div>
//         </div>
//       )} */}
//       {isPopoverOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-end">
//           <div className="bg-white rounded-lg w-[700px] flex flex-col max-h-[100vh]">
//             <div className="p-6 border-b">
//               <div className="flex justify-between items-center">
//                 <h2 className="text-xl font-bold">{selectedClient?.name}</h2>
//                 <button onClick={handleClose} className="text-gray-500 hover:text-gray-700">
//                   <CloseIcon />
//                 </button>
//               </div>
//             </div>

//             <div className="overflow-y-auto flex-grow p-6">
//               <ClientSpendingChart clientId={''} />

//               <div className="flex justify-between mt-6">
//                 <FrequentlyBoughtCategoriesByClient clientId={''} />
//                 <FrequentlyBoughtProductsByClient clientId={''} />
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
