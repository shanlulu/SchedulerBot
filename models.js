var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  googleCalendarAccount: Object,
  defaultMeetingMinutes: Number,
  slackId: String,
  slackUsername: String,
  slackEmail: String,
  slackDMIds: Array,
  tokens: Object,
  pending: String
});

var reminderSchema =  mongoose.Schema({
  subject: String,
  date: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

var meetingSchema =  mongoose.Schema({
  subject: String,
  date: String,
  time: Number,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  invitees: Array
})

User = mongoose.model('User', userSchema);
Reminder = mongoose.model('Reminder', reminderSchema);
Meeting = mongoose.model('Meeting', meetingSchema);

module.exports = {
  User: User,
  Reminder: Reminder,
  Meeting: Meeting
};
