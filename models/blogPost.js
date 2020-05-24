const mongoose = require('mongoose');

// Schema
const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({
   title: String,
   firstName: String,
   surname:   String,
   links: String,
   education: String,
   CurrentRole: String,
   rating: String,
   commentsRating: String,
   selfMotivation: String,
   commentsSelf: String,
   timeManagement: String,
   commentsTime: String,
   teamwork: String,
   commentsTeam: String,
   commmunication: String,
   commentsComm: String,
   performanceUP: String,
   commentsUP: String,
   conflictRes: String,
   commentsRes: String,
   body: String,
   date: {
      type: String,
      default: Date.now()
   },
   work:[Object],
   langs:[Object],
   hardskills:[Object],
   imgCollection:Buffer,
   hobby:Buffer,
   langpic:Buffer,
   langs_two:[Object],
   frontend:Buffer,
   frontendarray:[Object],
   frontendExperience:String,
   frontendRating:String,
   backend_pic:Buffer,
   backend:[Object],
   database_pic:Buffer,
   database:[Object],
   databaseRating:String,
   databaseExperience:String,
   mobiletools_pic:Buffer,
   mobiletools:[Object],
   mobiletoolsExperience:String,
   mobiletoolsRating:String,
   softskills:[Object],
   softskillsRating:String,
   softskillsRatingComment:String,
   Picture:Buffer,
   SkillsRating:String,
   SkillsComment:String,
   Company:String,
   Role:String,
   TimeServed:String,
   Description:String,
   Experience:String,
   Rating:String,
   Picture:Buffer,
})

const BlogPostSchema_two = new Schema({
   title: String,
   firstName: String,
   surname:   String,
   links: String,
   education: String,
   CurrentRole: String,
   rating: String,
   commentsRating: String,
   selfMotivation: String,
   commentsSelf: String,
   timeManagement: String,
   commentsTime: String,
   teamwork: String,
   commentsTeam: String,
   commmunication: String,
   commentsComm: String,
   performanceUP: String,
   commentsUP: String,
   conflictRes: String,
   commentsRes: String,

   body: String,
   date: {
      type: String,
      default: Date.now()
   }
})

const AllSchema ={
  first_half: BlogPostSchema,
  second_half: BlogPostSchema_two
}
//Model
const BlogPost = mongoose.model('users', BlogPostSchema);

module.exports = BlogPost;
