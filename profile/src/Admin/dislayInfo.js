import React from 'react';
import Login from './login.js';
import axios from 'axios';
//import '../App.css';

class DisplayInfo  extends React.Component{

  state = {
    title: '',
    firstName: '',
    surname: '',
    links: '',
    education: '',
    CurrentRole: '',
    rating: '',
    commentsRating: '',
    selfMotivation: '',
    commentsSelf: '',
    timeManagement: '',
    commentsTime: '',
    teamwork: '',
    commentsTeam: '',
    commmunication: '',
    commentsComm: '',
    performanceUP: '',
    commentsUP: '',
    conflictRes: '',
    commentsRes: '',
    body: '',
    posts: []
  };

  componentDidMount = () => {
    this.getBlogPost();
  };

// get data from db
getBlogPost = () => {
  axios.get('/api')
    .then((response) =>{
      const data = response.data;
      this.setState({ posts: data });
      console.log('Data has been received !!!');
    })
    .catch(() =>{
        alert('Error retrieving data');
    });

}



// getting the in put and updating
  handleChange =({target}) =>{
    const {name, value} = target;
    this.setState({ [name]: value});
  };

submit =(event) => {
  event.preventDefault();

  const payload = {
  title: this.state.title,
  firstName: this.state.firstName,
  surname: this.state.surname,
  links: this.state.links,
  education: this.state.education,
  CurrentRole: this.state.CurrentRole,
  rating: this.state.rating,
  commentsRating: this.state.commentsRating,
  selfMotivation: this.state.selfMotivation,
  commentsSelf: this.state.commentsSelf,
  timeManagement: this.state.timeManagement,
  commentsTime: this.state.commentsTime,
  teamwork: this.state.teamwork,
  commentsTeam: this.state.commentsTeam,
  commmunication: this.state.commmunication,
  commentsComm: this.state.commentsComm,
  performanceUP: this.state.performanceUP,
  commentsUP: this.state.commentsUP,
  conflictRes: this.state.conflictRes,
  commentsRes: this.state.commentsRes,
  body: this.state.body
};

  axios({
    url: 'http://localhost:3000/api/save',
    method: 'POST',
    data: payload
  })
    .then(()=> {
       console.log('Data in server NOW')
       this.resetUserInput();
       this.getBlogPost();
    })
      .catch(() =>{
        console.log('Data NOT in server error')
      });;

};

// reset input data
  resetUserInput = () => {
    this.setState({
      title: '',
      firstName: '',
      surname: '',
      links: '',
      education: '',
      CurrentRole: '',
      rating: '',
      commentsRating: '',
      selfMotivation: '',
      commentsSelf: '',
      timeManagement: '',
      commentsTime: '',
      teamwork: '',
      commentsTeam: '',
      commmunication: '',
      commentsComm: '',
      performanceUP: '',
      commentsUP: '',
      conflictRes: '',
      commentsRes: '',
      body: ''
    });
  };

//display posts
displayBlogPost = (posts) => {
  if (!posts.length) return null;

  return posts.map((post, index) =>(

    <div key={index} className="blog-post_display">
      <h3>{post.title}</h3>
      <p>{post.body}</p>

    </div>

  ));
};



render(){

  console.log('State: ', this.state);

  return (
    <div className="app">
      <h2>Create Profile</h2>
      <form onSubmit={this.submit}>

          <button>Submit</button>
      </form>

      <div className="blog-.blog-post_display">
        {this.displayBlogPost(this.state.posts)}
      </div>
    </div>
  );
}
}
export default DisplayInfo;
