import React, {Component} from 'react';
import axios, {post} from 'axios';



class Info extends React.Component {

  constructor(props){
  super(props);
  this.onFileChange = this.onFileChange.bind(this);
  this.onSubmit = this.onSubmit.bind(this);
  this.onpictureSubmit=this.onpictureSubmit.bind(this);
  this.onHobbySubmit=this.onHobbySubmit.bind(this);


}
  state={
    work:[],
    langs:[],
    hardskills:[],
    imgCollection:'',
    hobby:'',
    langpic:'',
    langs_two:[],
    frontend:'',
    frontendarray:[],
    frontendExperience:null,
    frontendRating:null,
    frontendpicture:null,

    frontend_info:{
      frontendExperience:null,
      frontendRating:null,
      frontendpicture:null,
    },
    backend_pic:'',
    backend:[],
    backend_info:{
      backendRating:null,
      backendExperience:null,
      backendpicture:null
    },
    database_pic:'',
    database:[],
    databaseRating:null,
    databaseExperience:null,
    databse_info:{
      databaseRating:null,
      databaseExperience:null
    },
    mobiletools_pic:'',
    mobiletools:[],
    mobiletoolsExperience:null,
    mobiletoolsRating:null,
    mobiletools_info:{
      mobiletoolsExperience:null,
      mobiletoolsRating:null
    },
    softskills:[],
    softskillsRating:null,
    softskillsRatingComment:null,
    softskills_info:{
      softskillsRating:null,
      softskillsRatingComment:null
    },
    Picture:'',
    SkillsRating:null,
    SkillsComment:null,
    skills_info:{
      SkillsRating:null,
      SkillsComment:null
    },
    Company:null,
    Role:null,
    TimeServed:null,
    Description:null,
    Experience:null,
    Rating:null,
    Picture:null,
    lang_info:{
      Experience:null,
      Rating:null,
      Picture:null
    },
    work_info:{
      Company:null,
      Role:null,
      TimeServed:null,
      Description:null,
    }
  }
//verified start
  addLangInfo(){
    this.setState({langs_two:[...this.state.langs_two, ""]})
  }
  addfrontendInfo(){
    this.setState({frontendarray:[...this.state.frontendarray, ""]})
  }
  addwork(e, index){
    this.setState({work:[...this.state.work, ""]})
  }
  addhardskills(e){
      this.setState({hardskills:[...this.state.hardskills, ""]})
    }

  addsoftskills(e){
        this.setState({softskills:[...this.state.softskills, ""]})
    }
  addbackend(e){
          this.setState({backend:[...this.state.backend, ""]})
  }
  adddatabase(e){
      this.setState({database:[...this.state.database, ""]})
  }
  addmobiletools(e){
      this.setState({mobiletools:[...this.state.mobiletools, ""]})
  }

//verified End

  addlang(){
    this.setState({langs:[...this.state.langs, ""]})
  }

  onFileChange(e){
    this.state.imgCollection=e.target.files;
    this.setState({ imgCollection: this.state.imgCollection})
  }

  onHobbyChange(e){
    this.state.hobby=e.target.files;
    this.setState({ hobby: this.state.hobby})
  }


onLanguageChange(e){
  this.state.langpic=e.target.files;
  this.setState({ langpic: this.state.langpic})
}

onfrontendChange(e){
  this.state.frontend=e.target.files;
  this.setState({ frontend: this.state.frontend})
}

onbackendChange(e){
  this.state.backend_pic=e.target.files;
  this.setState({ backend_pic: this.state.backend_pic})
}


ondatabaseChange(e){
  this.state.database_pic=e.target.files;
  this.setState({ database_pic: this.state.database_pic})
}

onmobiletoolsChange(e){
  this.state.mobiletools_pic=e.target.files;
  this.setState({ mobiletools_pic: this.state.mobiletools_pic})
}

onpictureChange(e){
  this.state.Picture=e.target.files;
  this.setState({ Picture: this.state.Picture})
}

// verified start

  onSubmit(e) {
    e.preventDefault()

    //skills
    var formData = new FormData();
    for (const key of Object.keys(this.state.imgCollection)) {
        formData.append('imgCollection', this.state.imgCollection[key])
    }

    //profilepictures
    var formData_two = new FormData();
    for (const key of Object.keys(this.state.Picture)) {
        formData_two.append('Picture', this.state.Picture[key])
    }

    //hobbies
    var formData_three = new FormData();
    for (const key of Object.keys(this.state.hobby)) {
        formData_three.append('hobby', this.state.hobby[key])
    }
    //axios post here
}

onpictureSubmit(e) {
  e.preventDefault()

  var formData = new FormData();
  for (const key of Object.keys(this.state.Picture)) {
      formData.append('Picture', this.state.Picture[key])
  }
  //axios post here
}

handle_Change(e, index){
  //    this.state.work[index]=e.traget.value;
    //  this.setState({work:this.state.work});
  e.preventDefault();
  const{name, value} =e.target;
  this.setState({...this.state,[name]:value});
  let wi = {...this.state.work_info};

  wi.Company=this.state.Company;
  wi.Role=this.state.Role;
  wi.TimeServed=this.state.TimeServed;
  wi.Description=this.state.Description;

  this.state.work[index]=wi;
  this.setState({work: this.state.work}, () => console.log(this.state.work[index]))
}

handleLangChange(e, index){
  e.preventDefault();
  const{name, value} =e.target;
  this.setState({...this.state,[name]:value});
  let li = {...this.state.lang_info};

  li.Experience=this.state.Experience;
  li.Rating=this.state.Rating;
  li.Picture=this.state.Picture;

  this.state.langs_two[index]=li;
  this.setState({langs_two: this.state.langs_two}, () => console.log(this.state.langs_two[index]))
}


handlefrontendChange(e, index){
  e.preventDefault();
  const{name, value} =e.target;
  this.setState({...this.state,[name]:value});
  let li = {...this.state.frontend_info};

  li.frontendExperience=this.state.frontendExperience;
  li.frontendRating=this.state.frontendRating;
  li.frontendpicture=this.state.frontendpicture;

  this.state.frontendarray[index]=li;
  this.setState({frontendarray: this.state.frontendarray}, () => console.log(this.state.frontendarray[index]))
}

handlebackendChange(e, index){
  e.preventDefault();
  const{name, value} =e.target;
  this.setState({...this.state,[name]:value});
  let li = {...this.state.backend_info};

  li.backendExperience=this.state.backendExperience;
  li.backendRating=this.state.backendRating;
  li.backendpicture=this.state.backendpicture;

  this.state.backend[index]=li;
  this.setState({backend: this.state.backend}, () => console.log(this.state.backend[index]))
}


handledatabaseChange(e, index){
  e.preventDefault();
  const{name, value} =e.target;
  this.setState({...this.state,[name]:value});
  let li = {...this.state.databse_info};

  li.databaseExperience=this.state.databaseExperience;
  li.databaseRating=this.state.databaseRating;

  this.state.database[index]=li;
  this.setState({database: this.state.database}, () => console.log(this.state.database[index]))
}


handlemobiletoolsChange(e, index){
  e.preventDefault();
  const{name, value} =e.target;
  this.setState({...this.state,[name]:value});
  let li = {...this.state.mobiletools_info};

  li.mobiletoolsExperience=this.state.mobiletoolsExperience;
  li.mobiletoolsRating=this.state.mobiletoolsRating;

  this.state.mobiletools[index]=li;
  this.setState({mobiletools: this.state.mobiletools}, () => console.log(this.state.mobiletools[index]))
}


onhandleRateChange(e, index){
  e.preventDefault();
  const{name, value} =e.target;
  this.setState({...this.state,[name]:value});
  let rate = {...this.state.skills_info};

  rate.SkillsRating=this.state.SkillsRating;
  rate.SkillsComment=this.state.SkillsComment;

  this.state.skills_info[index]=rate;
  this.setState({skills_info: this.state.skills_info}, () => console.log(this.state.skills_info[index]))


}


onhandlesoftskillsRateChange(e, index){
  e.preventDefault();
  const{name, value} =e.target;
  this.setState({...this.state,[name]:value});
  let rate = {...this.state.softskills_info};

  rate.softskillsRating=this.state.softskillsRating;
  rate.softskillsRatingComment=this.state.softskillsRatingComment;

  this.state.softskills_info[index]=rate;
  this.setState({softskills_info: this.state.softskills_info}, () => console.log(this.state.softskills_info[index]))



}

onHobbySubmit(e) {
  e.preventDefault()

  var formData = new FormData();
  for (const key of Object.keys(this.state.hobby)) {
      formData.append('imgCollection', this.state.hobby[key])
  }
  //axios post here
}

//verified end

onLanguageSubmit(e) {
  e.preventDefault()

  //skills
  var formData = new FormData();
  for (const key of Object.keys(this.state.langpic)) {
      formData.append('langpic', this.state.langpic[key])
      console.log(this.state.langpic[key]);
  }

  //axios post here
}


onfrontendSubmit(e) {
  e.preventDefault()

  //skills
  var formData = new FormData();
  for (const key of Object.keys(this.state.frontend)) {
      formData.append('langpic', this.state.frontend[key])
      console.log(this.state.frontend[key]);
  }

  //axios post here
}


onbackendSubmit(e) {
  e.preventDefault()

  var formData = new FormData();
  for (const key of Object.keys(this.state.backend_pic)) {
      formData.append('backend_piC', this.state.backend_pic[key])
      console.log(this.state.backend_pic[key]);
  }
  //axios post here
}


ondatabasesubmit(e) {
  e.preventDefault()

  var formData = new FormData();
  for (const key of Object.keys(this.state.database_pic)) {
      formData.append('database_pic', this.state.database_pic[key])
      console.log(this.state.database_pic[key]);
  }
  //axios post here
}

onmobiletoolssubmit(e) {
  e.preventDefault()

  var formData = new FormData();
  for (const key of Object.keys(this.state.mobiletools_pic)) {
      formData.append('mobiletools_pic', this.state.mobiletools_pic[key])
      console.log(this.state.mobiletools_pic[key]);
  }
  //axios post here
}

submit(e){
  e.preventDefault();

  const payload = {
    work:this.state.work,
    langs:this.state.langs,
    hardskills:this.state.hardskills,
    imgCollection:this.state.work.imgCollection,
    hobby:this.state.hobby,
    langpic:this.state.langpic,
    langs_two:this.state.langs_two,
    frontend:this.state.frontend,
    frontendarray:this.state.frontendarray,
    frontendExperience:this.state.frontendExperience,
    frontendRating:this.state.frontendRating,
    backend_pic:this.state.backend_piC,
    backend:this.state.backend,
    database_pic:this.state.database_pic,
    database:this.state.database,
    databaseRating:this.state.databaseRating,
    databaseExperience:this.state.databaseExperience,
    mobiletools_pic:this.state.mobiletools_pic,
    mobiletools:this.state.mobiletools,
    mobiletoolsExperience:this.state.mobiletoolsExperience,
    mobiletoolsRating:this.state.mobiletoolsRating,
    softskills:this.state.softskills,
    softskillsRating:this.state.softskillsRating,
    softskillsRatingComment:this.state.softskillsRatingComment,
    Picture:this.state.Picture,
    SkillsRating:this.state.SkillsRating,
    SkillsComment:this.state.SkillsComment,
    Company:this.state.Company,
    Role:this.state.Role,
    TimeServed:this.state.TimeServed,
    Description:this.state.Description,
    Experience:this.state.Experience,
    Rating:this.state.Rating,
    Picture:this.state.Picture,

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

render(){

  return(
    <div className="wrapper">
      <div className="form-wrapper">

      <form onSubmit={this.onSubmit}>
      <div className="Hobby" >
      <label htmlFor="Hobby">Upload Picture</label>
        <div>
        <input type="file" name="Picture" onChange={(e)=>this.onpictureChange(e)} multiple />
        </div>
          <label htmlFor="Skills">Skills</label>
        <div>
        <input type="file" name="imgCollection" onChange={(e)=>this.onFileChange(e)} multiple />
        </div>
        <label htmlFor="Hobby">Hobby</label>
          <div>
          <input type="file" name="Hobby" onChange={(e)=>this.onHobbyChange(e)} multiple />
          </div>

        <button  type="submit">Upload</button>
      </div>
      </form>
                  {
                  this.state.work.map((work, index)=>{
                    return(
                      <div key={index}>
                      <input
                      onChange ={(e)=>this.handle_Change(e,index)}
                      placeholder = "Company"
                      name="Company"
                      />
                      <input onChange ={(e)=>this.handle_Change(e,index)}
                      placeholder = "Role"
                      name="Role"
                      />
                      <input
                      onChange ={(e)=>this.handle_Change(e,index)}
                      placeholder = "Time Served"
                      name="TimeServed"
                      />
                      <input onChange ={(e)=>this.handle_Change(e,index)}
                      placeholder = "Description"
                      name="Description"
                      />

                      </div>
                    )
                    })
                  }
                  <div className="buttontext">
                  <label htmlFor="Experience">Add Company</label>
                    <button onClick={(e)=>this.addwork(e)}>Add Another</button>
                  </div>


                  {
                  this.state.langs_two.map((langs_two, index)=>{
                    return(
                      <div key={index}>
                      <input onChange ={(e)=>this.handleLangChange(e,index)}
                      placeholder = "Experience"
                      name="Experience"
                      />
                      <input onChange ={(e)=>this.handleLangChange(e,index)}
                      placeholder = "Rating"
                      name="Rating"
                      />

                      <form onSubmit={(e)=>this.onLanguageSubmit(e)}>
                      <div className="Language" >
                      <label htmlFor="Language">Language</label>
                        <div>
                        <input type="file" name="Language" onChange={(e)=>this.onLanguageChange(e)} multiple />
                        </div>
                        <button  type="submit">Upload</button>
                      </div>
                      </form>

                      </div>
                    )
                    })
                  }

                  <div className="buttontext">
                  <label htmlFor="Language">Add Language</label>
                    <button onClick={(e)=>this.addLangInfo(e)}>Add</button>
                  </div>


                  {
                  this.state.hardskills.map((hardskills, index)=>{
                    return(
                      <div key={index}>
                      <input onChange ={(e)=>this.onhandleRateChange(e,index)}
                      name="SkillsRating"
                      placeholder = "Rating"
                      />
                      <input onChange ={(e)=>this.onhandleRateChange(e,index)}
                      placeholder = "Comment"
                      name="SkillsComment"
                      />
                      </div>
                    )
                    })
                  }

                  <div className="buttontext">
                  <label htmlFor="hardskills">Add Hard Skill</label>
                    <button onClick={(e)=>this.addhardskills(e)}>Add</button>

                  </div>

                  {
                  this.state.softskills.map((softskills, index)=>{
                    return(
                      <div key={index}>
                      <input onChange ={(e)=>this.onhandlesoftskillsRateChange(e,index)}
                      name="softskillsRating"
                      placeholder = "Rating"
                      />
                      <input onChange ={(e)=>this.onhandlesoftskillsRateChange(e,index)}
                      name="softskillsRatingComment"
                      placeholder = "Comment"
                      />
                      </div>
                    )
                    })
                  }

                  <div className="buttontext">
                  <label htmlFor="softskills">Add Soft Skill</label>
                    <button onClick={(e)=>this.addsoftskills(e)}>Add</button>

                  </div>

                  {
                  this.state.frontendarray.map((langs_two, index)=>{
                    return(
                      <div key={index}>
                      <input onChange ={(e)=>this.handlefrontendChange(e,index)}
                      placeholder = "Experience"
                      name="frontendExperience"
                      />
                      <input onChange ={(e)=>this.handlefrontendChange(e,index)}
                      placeholder = "Rating"
                      name="frontendRating"
                      />

                      <form onSubmit={(e)=>this.onfrontendSubmit(e)}>
                      <div className="frontend" >
                      <label htmlFor="frontend">Front End</label>
                        <div>
                        <input type="file" name="frontend" onChange={(e)=>this.onfrontendChange(e)} multiple />
                        </div>
                        <button  type="submit">Upload</button>
                      </div>
                      </form>

                      </div>
                    )
                    })
                  }

                  <div className="buttontext">
                  <label htmlFor="frontend">Add Frontend</label>
                    <button onClick={(e)=>this.addfrontendInfo(e)}>Add</button>
                  </div>


                  {
                  this.state.backend.map((backend, index)=>{
                    return(
                      <div key={index}>
                      <input onChange ={(e)=>this.handlebackendChange(e,index)}
                      name="backendRating"
                      placeholder = "Rating"
                      />
                      <input onChange ={(e)=>this.handlebackendChange(e,index)}
                      name="backendExperience"
                      placeholder = "Experience"
                      />

                      <form onSubmit={(e)=>this.onbackendSubmit(e)}>
                      <div className="backend" >
                      <label htmlFor="backend">Back End</label>
                        <div>
                        <input type="file" name="backend" onChange={(e)=>this.onbackendChange(e)} multiple />
                        </div>
                        <button  type="submit">Upload</button>
                      </div>
                      </form>

                      </div>
                    )
                    })
                  }

                  <div className="buttontext">
                  <label htmlFor="backend">Add BackEnd</label>
                    <button onClick={(e)=>this.addbackend(e)}>Add</button>

                  </div>


                  {
                  this.state.database.map((database, index)=>{
                    return(
                      <div key={index}>
                      <input onChange ={(e)=>this.handledatabaseChange(e,index)}
                      placeholder = "Rating"
                      name="databaseRating"
                      />
                      <input onChange ={(e)=>this.handledatabaseChange(e,index)}
                      placeholder = "Experience"
                      name="databaseExperience"
                      />

                      <form onSubmit={(e)=>this.ondatabasesubmit(e)}>
                      <div className="database" >
                      <label htmlFor="database">Database</label>
                        <div>
                        <input type="file" name="database" onChange={(e)=>this.ondatabaseChange(e)} multiple />
                        </div>
                        <button  type="submit">Upload</button>
                      </div>
                      </form>

                      </div>
                    )
                    })
                  }

                  <div className="buttontext">
                  <label htmlFor="database">Add database</label>
                    <button onClick={(e)=>this.adddatabase(e)}>Add</button>

                  </div>



                  {
                  this.state.mobiletools.map((mobiletools, index)=>{
                    return(
                      <div key={index}>
                      <input onChange ={(e)=>this.handlemobiletoolsChange(e,index)}
                      placeholder = "Rating"
                      name="mobiletoolsRating"
                      />
                      <input onChange ={(e)=>this.handlemobiletoolsChange(e,index)}
                      placeholder = "Experience"
                      name="mobiletoolsExperience"
                      />

                      <form onSubmit={(e)=>this.onmobiletoolssubmit(e)}>
                      <div className="mobiletools" >
                      <label htmlFor="mobiletools">Mobile Tools</label>
                        <div>
                        <input type="file" name="mobiletools" onChange={(e)=>this.onmobiletoolsChange(e)} multiple />
                        </div>
                        <button  type="submit">Upload</button>
                      </div>
                      </form>

                      </div>
                    )
                    })
                  }

                  <div className="buttontext">
                  <label htmlFor="mobiletools">Add Mobile Tools</label>
                    <button onClick={(e)=>this.addmobiletools(e)}>Add</button>

                  </div>
                  <div>
                    <button onClick={(e)=>this.submit(e)}> SubmitInfo </button>

                  </div>

      </div>
    </div>
  );
}

}

export default Info;
