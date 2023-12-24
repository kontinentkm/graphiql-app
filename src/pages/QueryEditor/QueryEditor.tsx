import React, { useState } from 'react';

const PrettifyApp: React.FC = () => {
  const [query, setQuery] = useState<string>('');

  const handleQueryChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuery(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter') {
      prettifyQuery();
    }
  };

  const prettifyQuery = () => {
    // Implement your custom prettify logic here
    try {
      const parsedQuery = JSON.parse(JSON.stringify(query));
      const prettifiedQuery = JSON.stringify(parsedQuery, null, 2);
      setQuery(prettifiedQuery);
    } catch (error) {
      console.error('Error prettifying query:', error);
      // Handle error (e.g., display an error message to the user)
    }
  };

  return (
    <div>
      <h1>GraphQL Query Prettifier</h1>
      <textarea
        value={query}
        onChange={handleQueryChange}
        onKeyPress={handleKeyPress}
        placeholder="Enter your GraphQL query"
      />
      <button onClick={prettifyQuery}>Prettify</button>
    </div>
  );
};

export default PrettifyApp;
