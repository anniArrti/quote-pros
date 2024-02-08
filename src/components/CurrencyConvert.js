import React,{ useState }from 'react'
import useCurrencyInfo from '../customHooks/currencyInfo';
const CurrencyConvert = () => {
  const [from, setFrom]= useState("usd");
  const [to, setTo]= useState("inr");
  const [amount, setAmount] = useState(0);
  const [convertAmount, setConvertAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);
  
  const handleChange = (e) => {
    setFrom(e.target.value);
  };

  const handleConvert = () => {
    setConvertAmount(currencyInfo[to]*amount)
  }
  return (
    <div>
      <label htmlFor='from'>From</label>
      <select id="from" value={from} onChange={handleChange}>
        {options.map((crc) => (
          <option key={crc} value={crc}>{crc}</option>
        ))}
      </select>
      <input type='text' value={amount} onChange={(e) => setAmount(e.target.value)}/>
      <label htmlFor='to'>To</label>
      <select id="to" value={to} onChange={(e) => setTo(e.target.value)}>
        {options.map((crc) => (
          <option key={crc} value={crc}>{crc}</option>
        ))}
      </select>
      <input type='text' value={convertAmount} />
      <button onClick={handleConvert} >Convert</button>
      <div>{amount}</div>
    </div>
  )
}

export default CurrencyConvert
