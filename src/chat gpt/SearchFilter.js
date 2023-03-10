import {useState} from 'react'
function SearchFilter({ items }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = event => {
    setSearchTerm(event.target.value);
  }

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
      />
      <ol>
        {items
          .filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()))
          .map(item => (
            <li key={item}>{item}</li>
          ))}
      </ol>
    </div>
  );
}
export default SearchFilter