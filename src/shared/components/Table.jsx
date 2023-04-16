const Table = ({tableHeaders, table ele}) => {
    return ( 
        <table>
        <thead>
            <tr>
                <th>Search Date</th>
                <th>Search Term</th>
                <th></th>

            </tr>
        </thead>
        <tbody>
            {searchTermsList.map((item, index) => (
                <tr key={item.search_id} className={index % 2 === 0 ? "even" : "odd"}>
                    <td>{item.search_date.split('T')[0]}</td>
                    <td>{item.search_word}</td>
                    <MdDeleteOutline
                        size={20}
                        className="raw-delete-icon"
                        onClick={() => handleDeleteIconClick(item.search_id)}
                    />
                </tr>
            ))}
        </tbody>
    </table>
     );
}
 
export default Table;