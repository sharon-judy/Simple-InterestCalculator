import { Button, Stack, TextField } from '@mui/material'
import  './App.css'
import { useState } from 'react'



function App() {

    const [amount,setAmount]=useState("")
    const [rate,setRate]=useState("")
    const [year,setYear]=useState("")
    const [interest,setInterest]=useState(0)

    const[isInvalidPrinciple,setIsInvalidPrinciple]=useState(false)
    const[isInvalidRate,setIsInvalidRate]=useState(false)
    const[isInvalidYear,setIsInvalidYear]=useState(false)

    console.log(amount, rate,year);

    const validRegex=/^[0-9]*.?[0-9]+$/
    

      const validateInput=(e)=>{
        console.log(e);

        const {name,value}=e.target
        console.log(name,value);

        if(name=='principle') {
          setAmount(value)
        }
        else if (name=='rate') {

          setRate(value)
        }
        else {
          
          setYear(value)
        }



        if( validRegex.test(value) || value=="") {

          if(name == 'principle') {
            setIsInvalidPrinciple(false)
          }
          else if(name=='rate') {
            setIsInvalidRate(false)
          }
          else(
            setIsInvalidYear(false)
          )

        }else{
          if(name == 'principle'){
            setIsInvalidPrinciple(true)
          }
          else if(name=='rate') {
            setIsInvalidRate(true)
          }
          else(
            setIsInvalidYear(true)
          )

        }
        
        
      }

      const handleCalculate=(e)=>{
        e.preventDefault()
        console.log("calculate the simple inteest");
        if(amount && rate && year){
             
          setInterest((amount*rate*year)/100)
        }
        else{
          alert("please enter the field completly")
        }
        
      }

      const handleReset=(e)=>{
        e.preventDefault()

        setAmount("")
        setRate("")
        setYear("")
        setInterest(0)
        isInvalidPrinciple(false)
        isInvalidRate(false)
        isInvalidYear(false)
      }


  return (
    <>
      <div className='bg-dark  d-flex justify-content-center align-items-center' style={{minHeight:'100vh',width:'100%'}}>
        <div className='bg-light  rounded p-5' style={{height:'650px',width:'550px'}}>
          <h1>Simple Interest Calculator</h1>
          <p> Calculate Your Simple Interest Easily</p>
          <div className='text-light bg-warning rounded d-flex flex-column justify-content-center align-items-center' style={{height:'150px'}}>
            <h1 style={{fontSize:'50px'}}>₹ &nbsp;{interest}</h1>
            <h1 >Total Simple Interest</h1>
          
          </div>
          <form className='mt-3'>

          <div >

            <TextField onChange={validateInput}  value={amount || ""}  name='principle' id="principle_amount" label="Calculator" variant="outlined" className='w-100 mb-3' />
            { isInvalidPrinciple &&
              <div className='fw-bold text-danger'>Invalid Principle Amount</div>}
            <TextField onChange={validateInput} value={rate || ""}  name='rate' id="interest_rate" label="Rate" variant="filled" className='w-100 mb-3' />
            { isInvalidRate &&
              <div className='fw-bold text-danger'>Invalid Interest Rate</div>}
            <TextField onChange={validateInput} value={year || ""}  name='year' id="time_period" label="year" variant="filled" className='w-100 mb-3' />
            { isInvalidYear &&
              <div className='fw-bold text-danger'>Invalid Year</div>}  
            <Stack direction="row" spacing={2}>
              <Button type='submit' onClick={handleCalculate} disabled={isInvalidPrinciple || isInvalidRate || isInvalidYear } className='bg-dark me-3 w-50' variant="contained">Calculate</Button>
              <Button type='submit' onClick={handleReset} className=' me-3 w-50' variant="outlined">Reset</Button>
            </Stack>
            </div>
         
            </form>
         
          </div>
      </div>

    </>
  )
}

export default App


