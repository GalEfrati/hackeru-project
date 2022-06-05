import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import './index.css';
import { Error } from './pages/ErrorPage';
import { HomePage } from './pages/HomePage';
import { LogInPage } from './pages/LoginPage';
import { TopBar } from "./compponents/TopBar";
import { SearchResult } from './pages/SearchResult';
import { CategoryPage } from './pages/CategoryPage';
import { ProductPage } from './pages/ProductPage'
import { ProfilePage } from './pages/Profilepage';
import { NewProductPage } from './pages/NewProductPage';
import * as productList from "./compponents/products-list.json";
import * as userList from "./compponents/user-data.json";



export function App() {
    const [profile, setProfile] = useState(null);
    const [search, setSearch] = useState("");
    const [posable, setPosable] = useState([]);
    const [result, setResult] = useState([]);
    const [productData, setProductData] = useState(productList.products);
    const [userData, setUserData] = useState(userList.users);
    const [change,setChange] =useState(false);



    useEffect(() => {
        const consistantProduct = JSON.parse(localStorage.getItem('product-information'));
        const consistantUsers = JSON.parse(localStorage.getItem('user-information'));
        const activeUser = JSON.parse(localStorage.getItem('active-user'));

        setProductData(consistantProduct);
        setUserData(consistantUsers);
        setProfile(activeUser);
        console.log(productData)
    },[])

    useEffect(() => {
        window.localStorage.setItem('product-information', JSON.stringify(productData));
        window.localStorage.setItem('user-information', JSON.stringify(userData));
        window.localStorage.setItem('active-user',JSON.stringify(profile))

        setChange(false);
    },[change,profile]);

    return (
        <BrowserRouter>
            <TopBar profile={profile} setProfile={setProfile}
                search={search} setSearch={setSearch}
                posable={posable} setPosable={setPosable}
                result={result} setResult={setResult}
                userData={userData} setUserData={setUserData}
                 />

            <Routes>
                <Route path="/" element={<HomePage profile={profile} setProfile={setProfile} />} />

                <Route path='/Profile/:profileName' element={<ProfilePage change={change} setChange={setChange} profile={profile} setProfile={setProfile}/>}/>

                <Route path="/LogIn" element={<LogInPage userData={userData} setUserData={setUserData} change={change} setChange={setChange} profile={profile} setProfile={setProfile} />} />

                <Route path="/Category/:categoryName" element={<CategoryPage productData={productData} setProductData={setProductData} change={change} setChange={setChange} result={result} setResult={setResult} profile={profile} setProfile={setProfile} />} />

                <Route path='/SearchResult' element={<SearchResult productData={productData} setProductData={setProductData} profile={profile} setProfile={setProfile} change={change} setChange={setChange} result={result} setResult={setResult} posable={posable} setPosable={setPosable} userData={userData} setUserData={setUserData} />} />

                <Route path='/NewProduct' element={<NewProductPage change={change} setChange={setChange} productData={productData} setProductData={setProductData} profile={profile} setProfile={setProfile}/>}/> 
                
                <Route path='/Product:itemid' element={<ProductPage change={change} setChange={setChange} profile={profile} setProfile={setProfile}/>} />

                <Route path='*' element={<Error />} />

            </Routes>
        </BrowserRouter>

    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(<App />, root);