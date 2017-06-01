import { Random } from 'meteor/random';

Meteor.startup(() => {

  UploadServer.init({
      tmpDir: '/opt/uploads/tmp',
      uploadDir: '/opt/uploads/',
      checkCreateDirectories: true, //create the directories for you
      getFileName: function(fileInfo, formData) { 
        return Random.id()+".jpg"; 
      }
  })

});
