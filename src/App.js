import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Search from './Page/Search/Search'
import LinkedIn from './Page/LinkedIn/LinkedIn'
import SearchResult from './Page/SearchResult/SearchResult'
const App = () => {
  return (
<BrowserRouter>
<Routes>
<Route index element={<Search/>}/>
<Route path='/search' element={<Search/>}/>
<Route path='/linkedin' element={<LinkedIn/>}/>
<Route path='/search/result' element={<SearchResult/>}/>
</Routes>
</BrowserRouter>


  )
}

export default App

