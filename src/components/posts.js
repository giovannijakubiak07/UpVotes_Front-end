import React from 'react'
import axios from 'axios'

    const Posts = ({ posts }) => {
      
      

      return (
        <div>
          <center><h1>Lista de Posts</h1></center>
          {posts.map((post) => (
            <div className="card" key={post.id}>
              <div className="card-body">
                <p></p>
                <h6 className="card-title">{post.text}</h6>
                <h6 className="card-title">Upvotes: {post.upVotes}</h6>
             
                <form onSubmit={e => {
                                  e.preventDefault()
                                  console.log(post)
                                  axios.put('https://segware-upvotes-api.herokuapp.com/api/post', post)
                                      .then(response =>{ 
                                          console.log(response)
                                          
                                      })
                                      .catch(error => {
                                          console.log(error)
                                      });
                                      
                                  }}> 
                  <button class="btn btn-dark" type="submit">Like!</button>
                </form>
              </div>
            </div>
          ))}
        </div>
      )
    };

    export default Posts