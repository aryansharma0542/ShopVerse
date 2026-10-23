import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import { CartProvider } from './Context/CartContext.jsx';
import SearchProvider from './Context/SearchContext.jsx';
import WishlistPovider from './Context/wishlistContext.jsx';

createRoot(document.getElementById('root')).render(
<BrowserRouter>
<CartProvider>
<SearchProvider>
<WishlistPovider>
<App />
</WishlistPovider>
</SearchProvider>
</CartProvider>
</BrowserRouter>
)