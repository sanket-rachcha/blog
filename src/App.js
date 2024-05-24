
import { useEffect, useState } from 'react';
import './App.css';
// import jsonData from './ttd.json'; // Import JSON data

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((result)=>{
      result.json().then((resp)=>{
        console.log(resp)
        setPosts(resp)
      })
    })
  },[]);

  function deleteUser(id){

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
      method:'DELETE'
    }).then((result)=>{
      result.json().then((resp)=>{
        console.log(resp)
      })
    })

  }

  return (
    <div className="App">
      <h1>Welcome to this world</h1>
      <table className='custom-table'>
        <thead>
          <tr>
            <th>User ID</th>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => (
            <tr key={index}>
              <td>{post.userId}</td>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
              <td><button onClick={()=>deleteUser(post.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
