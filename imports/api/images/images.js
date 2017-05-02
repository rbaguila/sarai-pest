Meteor.startup(function () {
  UploadServer.init({
    tmpDir: process.env.PWD + '/public/img/.uploads/tmp',
    uploadDir: process.env.PWD + '/public/img/.uploads/',
    checkCreateDirectories: true //create the directories for you
  });
});