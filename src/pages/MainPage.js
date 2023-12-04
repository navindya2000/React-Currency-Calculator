import React , {useEffect, useState} from 'react'
import axios from 'axios'

export default function MainPage() {
  //state for the form fields
  
  const [date,setDate] = useState(null);
  const [sourceCurrency , setSourceCurrency] = useState("");
  const [targetCurrency , setTargetCurrency] = useState("");
  const [amountInSourceCurrency, setAmountInSourceCurrency] = useState(0);
  const [amountInTargetCurrency, setAmountInTargetCurrency] = useState(0);
  const [currencyNames, setCurrencyNames] = useState([]);
  const [loading, setLoading] = useState(true);
  //handleSubmit method
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("http://localhost:5000/convert" , {
        params: {
          date,
          sourceCurrency,
          targetCurrency,
          amountInSourceCurrency},
        });

        setAmountInTargetCurrency(response.data)
        setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  //get all Currency using hook
  useEffect(()=>{
    const getCurrencyNames =async() => {
      try{
        const response = await axios.get(
          "http://localhost:5000/getAllCurrencies"
        );
        setCurrencyNames(response.data);
      }catch(err){
        console.error(err);
      }
    };
    console.log(date);
    getCurrencyNames();
  },[])
  
  return (
    <div>
        <h1 className='text-5xl font-bold text-green-500 lg:mx-32'>Convert Your Currency Today</h1>

        <p className='py-6 lg:mx-32'>
        "Convert Your Currency Today" This is my first React Project
        </p>

        <div className= "flex flex-col items-center justify-center mt-5">
          <section className='w-full lg:w-1/2'>
                  <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                     <label htmlFor={date} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                     <input onChange={(e)=>setDate(e.target.value)} type="date" id="date" name="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                     </input>
                  </div>
                  <div className="mb-4">
                     <label htmlFor={sourceCurrency} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Source Currency</label>
                     <select onChange={(e)=>setSourceCurrency(e.target.value)} name='sourceCurrency' id='sourceCurrency' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                      <option value="sourceCurrency">Select Source Currency</option>
                      {Object.keys(currencyNames).map((currency)=>(
                        <option className='p-1' key={currency} value={currency}>
                          {currencyNames[currency]}
                        </option>
                      ))}
                     </select>
                  </div>
                  <div className="mb-4">
                     <label htmlFor={targetCurrency} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Target Currency</label>
                     <select  onChange={(e)=>setTargetCurrency(e.target.value)} name='targetCurrency' id='targetCurrency' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                      <option value="targetCurrency">Select Target Currency</option>
                      {Object.keys(currencyNames).map((currency)=>(
                        <option className='p-1' key={currency} value={currency}>
                          {currencyNames[currency]}
                        </option>
                      ))}
                     </select>
                  </div>
                  <div className="mb-4">
                     <label htmlFor={amountInSourceCurrency} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount in Source Currency</label>
                     <input onChange={(e)=>setAmountInSourceCurrency(e.target.value)} type="text" id="amountInSourceCurrency" name = 'amountInSourceCurrency' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                     </input>
                  </div>

                  <button className='px-4 py-2 font-bold text-white bg-green-600 rounded-md hover:bg-green-300'>Get</button>
                  </form>
          </section>
        </div>
        
        {!loading ?
        
        <section className='mt-5 text-xl lg:mx-60'>
        {amountInSourceCurrency} {currencyNames[sourceCurrency]}is equals to {" "}
        <span className='font-bold text-green-500'>{amountInTargetCurrency}</span> in {currencyNames[targetCurrency]}
        </section>
        : null}
    </div>
  )
}
