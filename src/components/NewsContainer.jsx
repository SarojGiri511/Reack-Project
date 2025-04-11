import React, { useEffect, useState } from 'react'
import Newscard from './Newscard'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const NewsContainer = () => {
  const navigation = useNavigate();
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setNews(response.data);
    });
  }, []);

  const handleClick = (news) => {
    navigation(`/news/${news.id}`, { state: { news } });
  };
  
      return (
        <div>
        <h1 className='text.2xl font-bold text-center pt-4'>News</h1>
        <p className= 'text-gray-400 text-center'>Lorem ipsum dolor sit amet consctur adioisicing elit. Natus magnam?</p>
        <div className='grid grid-cols-4 gap-4 px-20 py-10'>
        {news.map((news,index) => (
          <Newscard key={index} news={news} />
        ))}
        </div>
  
        </div>
      )
    }
  


export default NewsContainer