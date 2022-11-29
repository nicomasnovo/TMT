import { useState } from 'react';
import { useEffect } from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // const data = {
    //   name: 'nicoa',
    //   email: 'nicolas.masnovo@bci.cl',
    // };

    // fetch('http://localhost:3000/api/user', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
    fetch('http://localhost:3000/api/users')
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <>
      <Header />
      <main></main>
      <Footer />
    </>
  );
}

export default App;
