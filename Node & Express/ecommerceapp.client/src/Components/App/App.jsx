import './App.css';
import { useState } from 'react';
import List from '../../Components/Catalog/List/List.jsx';
import Details from '../../Components/Catalog/Details/Details';

function App() {
    // Sample data
    const [items] = useState([
        { id: 1, name: "Lily", description: "Experience immersive Look Of This Flower", price: 199, imageUrl: "/images/lily.jpg" },
        { id: 2, name: "Rose", description: "Stay With Us For Beatiful Flowers", price: 299, imageUrl: "/images/rose.jpg" },
        { id: 3, name: "Marigold", description: " perfect for any occasion", price: 399, imageUrl: "/images/marigold.jpg" },
    ]);


    // Set state name as first parameter and set the function to change the state
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    // Rendering logic
    return (
        <div>
            <h1>Today's Branded Products</h1>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-4">
                        <h3>Select Product</h3>
                        <List items={items} onItemClick={handleItemClick} />
                    </div>
                    <div className="col-sm-8">
                        <Details item={selectedItem} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
