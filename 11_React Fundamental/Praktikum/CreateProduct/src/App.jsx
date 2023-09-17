import { useState } from 'react'
import './App.css'
import Form from './Components/Form'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Table from './Components/Table'

function App() {
  const [tableData, setTableData] = useState([])

  const addData = (formData) => {
    setTableData([...setTableData, formData])
  }


  return (
    <>
     <Navbar/>
     <Header/>
     <Form addData={addData}/>
     <Table tableData={tableData}/>
    </>
  )
}

export default App
