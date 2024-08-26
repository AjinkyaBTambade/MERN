
function List({ items, onItemClick }) {
    return (
        <div>
            <ul>
                {
                    items.map((item, index) => (
                        <li key={index} onClick={() => onItemClick(item)}>{item.name}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default List;
