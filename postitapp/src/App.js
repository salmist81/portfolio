import logo from './logo.svg';
import './App.css';

import PostIt from './post-it';
import Image from './image';

function App() {
  return (
    <div className="App">
      <h1>Web Developer</h1>

      <div className="container">
        <PostIt title="React Novice" message="Foundation is key" color="blue"/>
        <PostIt title="Javascript Novice" message="Foundation is key" color="pink"/>

      </div>

      <div className="wrapper">
        <Image 
          imgSource={
            "https://images.unsplash.com/photo-1622392328503-66b59e9099d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          }
          captionText="The Future is bright"
          hasBorder={false}
        
        />
      </div>
    </div>
    
  );
}

export default App;
