import React , {useState} from 'react'

export default function MainPage() {
  //state for the form feilds
  
  const [date,setDate] = useState(null);
  const [sourceCurrency , setSourceCurrency] = useState("");
  const [targetCurrency , setTargetCurrency] = useState("");
  
  return (
    <div>
        <h1 className='text-5xl font-bold text-green-500 lg:mx-32'>Convert Your Currency Today</h1>

        <p className='py-6 lg:mx-32'>
        Convert Your Currency Today my first Project
        </p>

        <div className= "flex flex-col items-center justify-center mt-5">
          <section className='w-full lg:w-1/2'>
                  <form>
                  <div className="mb-4">
                     <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                     <input type="date" id="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                     </input>
                  </div>
                  <div className="mb-4">
                     <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Source Currency</label>
                     <select name='' id='' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                      <option value="">Select Source Currency</option>
                     </select>
                  </div>
                  <div className="mb-4">
                     <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Target Currency</label>
                     <select name='' id='' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                      <option value="">Select Target Currency</option>
                     </select>
                  </div>
                  <div className="mb-4">
                     <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount in Source Currency</label>
                     <input type="text" id="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                     </input>
                  </div>

                  <button className='px-4 py-2 font-bold text-white bg-green-600 rounded-md hover:bg-green-300'>Get</button>
                  </form>
          </section>
        </div>
    </div>
  )
}
