import { useState, useEffect } from 'react';

export default function HomePage() {
  const [message, setMessage] = useState('Loading...');
  
  useEffect(() => {
    // Simulate data loading
    setMessage('Welcome to the Home Page!');
  }, []);
  
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to Nukoo Userside</h1>
      <p>{message}</p>
    </div>
  );
}
