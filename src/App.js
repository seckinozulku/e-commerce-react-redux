import './App.css';
import Header from "./Components/Header/Header";
import Category from './Components/Category/Category';
import Discount from './Components/Discount/Discount';
import Footer from './Components/Footer/Footer';
import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyCart from './Components/MyCart/MyCart';


const App = () => {

  const [categoryData, setCategoryData] = useState(null)
  const [postsData, setPostsData] = useState(null)
  const [searchItem, setSearchItem] = useState('')
  const [filteredItem, setFilteredItem] = useState(postsData)

  useEffect(() => {

    fetch(`http://localhost:3002/dataBase`)
      .then((response) => response.json())
      .then(data => {
        setCategoryData(data.category)
        setPostsData(data.posts)
        setFilteredItem(data.posts)
      })
      .catch(err => console.log(err))

  }, [])

  // Search
  const handleChange = (e) => {
    setSearchItem(e.target.value)
  }

  // CategorySelection
  const handleCategorySelection = (value) => {
    setFilteredItem(postsData?.filter((item) => {
      return item.category.toLowerCase().indexOf(value.toLowerCase()) !== -1
    }))
  }

  // Filtered
  const handleSearch = () => {
    if (searchItem.length >= 3)
      setFilteredItem(postsData?.filter((item) => {
        return item.title.toLowerCase().indexOf(searchItem.toLowerCase()) !== -1
      }))
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={
          <div className='App'>
            <Header handleChange={handleChange} handleSearch={handleSearch} />
            <Category handleCategorySelection={handleCategorySelection} categoryData={categoryData} filteredItem={filteredItem} />
            <Discount />
            <Footer />
          </div>
        }>
        </Route>
        <Route path='/sepetim' element={
          <MyCart />
        }>

        </Route>
      </Routes>
    </BrowserRouter>
  );

}

export default App;
