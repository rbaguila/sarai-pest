import { Router } from 'meteor/iron:router';

Router.configure({
 noRoutesTemplate: 'noRoutesTemplate',
});

$.cloudinary.config({
    cloud_name: 'project-sarai',
    api_key: '165644439513415'
});