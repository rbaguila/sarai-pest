import { Random } from 'meteor/random';

Meteor.startup(() => {

  // UploadServer.init({
  //     // tmpDir: process.env.PWD + '/server/uploads/tmp',
  //     // uploadDir: process.env.PWD + '/server/uploads/',
  //     tmpDir: '/opt/uploads/tmp',
  //     uploadDir: '/opt/uploads/',
  //     checkCreateDirectories: true, //create the directories for you
  //     //overwrite: true,
  //     getFileName: function(fileInfo, formData) { 
  //       return Random.id()+".jpg"; 
  //     }
  // })

});
