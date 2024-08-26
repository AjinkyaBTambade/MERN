import './Details.css'; // Optional: For styling

function Details({ item }) {
    if (!item) {
        return <p>Select an item to view details.</p>;
    }

    return (
        <div>
            <h2>Product ID: {item.id}</h2>
            <img src={item.imageUrl} alt={item.name} width="100" height="100" />
            <p><strong>Name:</strong> {item.name}</p>
            <p><strong>Description:</strong> {item.description}</p>
            <p><strong>Price:</strong> ${item.price}</p>
        </div>
    );
}

export default Details;
