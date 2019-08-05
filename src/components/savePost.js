import React, { Component } from 'react'
import axios from 'axios'

class savePost extends Component{
    constructor(props){
        super(props)

        this.state={
            text:'',
            upVotes:0

        }
    }
    
    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }
    submitHandler = e => {
        e.preventDefault()
        if(this.state.text !== ''){
            console.log(this.state)
            axios.post('https://segware-upvotes-api.herokuapp.com/api/post', this.state)
                .then(response =>{ 
                    console.log(response)
                })
                .catch(error => {
                    console.log(error)
                });}
        else{
            alert("texto nulo!");
        }
            }
        

    render(){   
        const{ text } = this.state
        return(
            <center>
                <div>
                    <form onSubmit={this.submitHandler} >
                        <h1>Novo Post</h1>
                    
                        <div>
                            <input type ="textarea" name="text" value={text} onChange={this.changeHandler} />
                        </div> 
                        <div>
                            <button class="btn btn-dark" type="submit" style={{marginTop: 5 + 'px'}}>Submit</button>
                        </div>
                    </form>
                </div>
            </center>
        )
    }
}
    export default savePost