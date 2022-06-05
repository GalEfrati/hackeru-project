import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as data from "../compponents/products-list.json";


let items = [];

data.products.map((item, key) => items.push(item.description));

export function SearchBar(props) {

    
    const navigate = useNavigate();
    const [displayList, setDisplayList] = useState(true);


useEffect(()=>{
    const consistantSearch = JSON.parse(window.localStorage.getItem('search-value'));
    props.setSearch(consistantSearch);
    let arr=[]
    props.setResult(arr);
    
    data.products.map((item) => {
        if (item.description.includes(consistantSearch) ) {

            arr.push(item);
            props.setResult(arr);
        }
        else if (consistantSearch === "") {
            arr.push(item);
            props.setResult(arr);
        }

    }
    )
},[])

    useEffect(()=>{
        window.localStorage.setItem('search-value',JSON.stringify(props.search));
    },[props.search])


    let searchUpdate = (e) => {
        props.setSearch(e.target.value);
        
        if (e.target.value.length > 0) {
            let regex = new RegExp(`${e.target.value}`, 'i');
            props.setPosable(items.sort().filter(v => regex.test(v)));

            if (props.posable.length > 0) {
                setDisplayList(true);
            }

        }
        else {
            setDisplayList(false);
        }
    }
    let changeSearch = (e) => {
        props.setSearch(e.target.innerHTML);
        setDisplayList(false);
    }
    
    let addToResult = (e) => {
        let arr=[]
        e.preventDefault();
        props.setResult(arr);
        data.products.map((item) => {
            if (item.description.includes(props.search) ) {

                arr.push(item);
                props.setResult(arr);
            }
            else if (props.search === "") {
                arr.push(item);
                props.setResult(arr);
            }

        }
        )
        setDisplayList(false)
        navigate('/SearchResult');

    }


    return (
        <>
            <form id='search-bar-form' onSubmit={addToResult} >
                <input id='search-bar' type="text" value={props.search} onChange={searchUpdate} autoComplete='off'></input>

                {displayList ?
                    <span id='aotocomplete'>
                        {props.posable.map((item, i) => <span key={i} className='suggestion' onClick={changeSearch}>{item}</span>)}
                    </span> : null}
                
                <button type='submit'>search</button>
            </form>
        </>
    );
}
