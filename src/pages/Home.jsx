import { Container, Grid } from '@mui/material';
import axios from 'axios';
import {useState, useEffect} from 'react'
import DisneyCard from '../components/DisneyCard/Index';
import Navbar from '../components/Navbar/Index';
import { Skeletons } from '../components/Skeletons/Index';

export const Home = () => {

  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
 

  const nextPage = () =>{
    setPage(page + 1);
  };

  const previousPage = () =>{
    if(page >1){
      setPage(page - 1);
    }
  };

  const getPosts = async() =>{

    try {
      
      const response = await axios.get(`https://api.disneyapi.dev/characters?page=${page}`);
      
      const data = response.data.data;

      setPosts(data);
        
    } catch (error){

      console.log(error);
    }

  }

  useEffect(()=>{

    getPosts();

  }, [page]);

  const postsFilter = (name) =>{
    var filteredPosts = [];
    if(name === ""){
      getPosts();
    }
    for(var i in posts){
      if(posts[i].name.includes(name)){
        filteredPosts.push(posts[i]);
      }
    }
    setPosts(filteredPosts);
  };

  return (
    <div>
      <Navbar postsFilter={postsFilter} nextPage={nextPage} previousPage={previousPage} page={page} />
      <Container maxWidth="false">
        <Grid container spacing={3}>
          {posts.length === 0 ? (<Skeletons/>) : (
            posts.map((post, key)=>(
              <Grid item xs={12} sm={6} md={3}  key={key}>
                <DisneyCard name={post.name} image={post.imageUrl} id={post._id}/>
              </Grid>
          
            ))
          )}
           
        </Grid>
        
      </Container>
    </div>
  
  )
}
