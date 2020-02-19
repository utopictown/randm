import Head from 'next/head'
import { useState } from 'react'


const Home = () => {
  const [item, setItem] = useState([]);
  const [inputItem, setInputItem] = useState('');
  const [result, setResult] = useState('');

  const handleSetItem = () => {
    if (inputItem !== '') {
      setItem([...item, inputItem])
    } else {
      alert('tidak boleh kosong')
    }
    setInputItem('')
  }

  const randm = () => {
    const randomizedIdx = Math.floor((Math.random() * item.length - 1) + 1)
    setResult(item[randomizedIdx])
  }

  const removeItem = (index) => {
    const removedItem = item.filter((_item, i) => i != index)
    setItem(removedItem);
  }


  return (
    <>
      {item.length ? item.map((_item, i) => <div key={i}>{_item} <span onClick={() => removeItem(i)}>❌</span> </div>) : 'masih kosong..'}
      <div><input type="text" onChange={val => setInputItem(val.target.value)} value={inputItem} style={{ border: '1px solid' }}/></div>
      <button onClick={() => handleSetItem()}>➕tambah</button>
      <button onClick={() => randm()}>🤔random!</button>
      <br/>
      <br/>
      <br/>
      <p>result: {result != '' ? result+' ☑️☑️☑️': ''}</p>
    </>
  )
}

export default Home
