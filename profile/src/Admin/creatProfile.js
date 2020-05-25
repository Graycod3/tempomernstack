import React from 'react';
import Login from './login.js';
import axios from 'axios';
//import '../App.css';

class CreatProfile  extends React.Component{

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

/*   componentDidMount = () => {
    this.getBlogPost();
  };
*/
// get data from db
/*getBlogPost = () => {
  axios.get('/api')
    .then((response) =>{
      const data = response.data;
      this.setState({ posts: data });
      console.log('Data has been received !!!');
    })
    .catch(() =>{
        alert('Error retrieving data');
    });

}*/



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
    url: '/api/save',
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
        <div className="form-input">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          </div>


        <div className="form-input">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
        </div>

        <div className="form-input">
          <input
            type="text"
            name="surname"
            placeholder="Surname"
            value={this.state.surname}
            onChange={this.handleChange}
          />
        </div>

        <div className="form-input">
          <input
            type="text"
            name="links"
            placeholder="Links"
            value={this.state.links}
            onChange={this.handleChange}
          />
          </div>

        <div className="form-input">
          <input
            type="text"
            name="education"
            placeholder="Education"
            value={this.state.education}
            onChange={this.handleChange}
          />
          </div>

          <div className="form-input">
            <input
              type="text"
              name="CurrentRole"
              placeholder="Current Role"
              value={this.state.CurrentRole}
              onChange={this.handleChange}
            />
            </div>

        <div className="form-input">
          <input
            type="text"
            name="rating"
            placeholder="Rating"
            value={this.state.rating}
            onChange={this.handleChange}
          />
          </div>

        <div className="form-input">
          <input
            type="text"
            name="commentsRating"
            placeholder="Comments"
            value={this.state.commentsRating}
            onChange={this.handleChange}
          />
          </div>

        <div className="form-input">
          <input
            type="text"
            name="selfMotivation"
            placeholder="SelfMotivation"
            value={this.state.selfMotivation}
            onChange={this.handleChange}
          />
          </div>

        <div className="form-input">
          <input
            type="text"
            name="commentsSelf"
            placeholder="Comments"
            value={this.state.commentsSelf}
            onChange={this.handleChange}
          />
          </div>

        <div className="form-input">
          <input
            type="text"
            name="timeManagement"
            placeholder="TimeManagement"
            value={this.state.timeManagement}
            onChange={this.handleChange}
          />
          </div>

        <div className="form-input">
          <input
            type="text"
            name="commentsTime"
            placeholder="Comments"
            value={this.state.commentsTime}
            onChange={this.handleChange}
          />
          </div>

        <div className="form-input">
          <input
            type="text"
            name="teamwork"
            placeholder="Teamwork"
            value={this.state.teamwork}
            onChange={this.handleChange}
          />
          </div>

        <div className="form-input">
          <input
            type="text"
            name="commentsTeam"
            placeholder="Comments"
            value={this.state.commentsTeam}
            onChange={this.handleChange}
          />
          </div>

        <div className="form-input">
          <input
            type="text"
            name="commmunication"
            placeholder="Communication"
            value={this.state.commmunication}
            onChange={this.handleChange}
          />
          </div>

        <div className="form-input">
          <input
            type="text"
            name="commentsComm"
            placeholder="Comments"
            value={this.state.commentsComm}
            onChange={this.handleChange}
          />
          </div>

        <div className="form-input">
          <input
            type="text"
            name="performanceUP"
            placeholder="Permance Under Pressure"
            value={this.state.performanceUP}
            onChange={this.handleChange}
          />
          </div>

        <div className="form-input">
          <input
            type="text"
            name="commentsUP"
            placeholder="Comments"
            value={this.state.commentsUP}
            onChange={this.handleChange}
          />
          </div>

        <div className="form-input">
          <input
            type="text"
            name="conflictRes"
            placeholder="Conflict Resolution"
            value={this.state.conflictRes}
            onChange={this.handleChange}
          />
          </div>

        <div className="form-input">
          <input
            type="text"
            name="commentsRes"
            placeholder="Comments"
            value={this.state.commentsRes}
            onChange={this.handleChange}
          />



          </div>

          <div className="form-input">

             <textarea
             placeholder="body"
             name="body"
             cols="30"
             rows="10"
             value={this.state.body}
             onChange={this.handleChange}>

             </textarea>
          </div>

          <button>Submit</button>
      </form>

      <div className="blog-.blog-post_display">
        {this.displayBlogPost(this.state.posts)}
      </div>
    </div>
  );
}
}
export default CreatProfile;
