// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Links } from '../../api/links/links.js';
import { Plant_Problem, Students } from '../../api/plant_problem/plant_problem.js';
import { CMS } from '../../api/cms/cms.js';
import { Experts } from '../../api/experts/experts.js';
import { Assistance } from '../../api/assistance/assistance.js';
import { Logs } from '../../api/logs/logs.js';
import { Forms } from '../../api/forms/forms.js';

Meteor.startup(() => {
  if (Forms.find().count() === 0) {
    const data = [
      {
        date: 'July 5th 2017, 4:01:38 pm', 
        email: 'mdlacson@up.edu.ph', 
        location: 'Laguna',
        source: 'Rice', 
        area: 'LB', 
        cropStage: 'Seeding',  
        variety: 'Hybrid', 
        pesttype: 'Insect', 
        symptoms: 'Stunting', 
        parts: 'Others', 
        distribution: 'Random', 
        damage: 'Chewing Type', 
        fertilizer: 'None', 
        insecticide: 'None', 
        herbicide: 'None', 
        fungicide: 'None', 
        weather: 'Drought', 
        chemapplied: '12 days before', 
        weatherobserved: '1 day before',
      },
    ];

    data.forEach(form => Forms.insert(form));
  }

  // if the Links collection is empty
  if (Links.find().count() === 0) {
    const data = [
      {
        title: 'SARAi',
        url: 'http://sarai.ph/',
        createdAt: new Date(),
      },
      {
        title: 'Library',
        url: '/pests',
        createdAt: new Date(),
      },
      {
        title: 'SPID',
        url: '/pests-id',
        createdAt: new Date(),
      },
      {
        title: 'Diseases',
        url: '/diseases',
        createdAt: new Date(),
      },
      {
        title: 'Clinic',
        url: '/pests-clinic',
        createdAt: new Date(),
      },
    ];

    data.forEach(link => Links.insert(link));
  }

  // if the Experts collection is empty
  if (Experts.find().count() === 0) {
    const data = [
      {
        profile: '/img/experts/Ebuenga.jpg',
        name: 'Melvin D. Ebuenga',
        position: 'University Researcher',
        company: 'NCPC, UPLB'
      },
      {
        profile: '/img/experts/Cayabyab.jpg',
        name: 'Bonifacio F. Cayabyab',
        position: 'University Researcher',
        company: 'NCPC, UPLB'
      },
      {
        profile: '/img/experts/Pangga.jpg',
        name: 'Ireneo B. Pangga',
        position: 'Assistant Professor',
        company: 'CPC, CA, UPLB'
      },
      {
        profile: '/img/experts/Burgonio.jpg',
        name: 'Gideon Aries S. Burgonio',
        position: 'University Research Assistant',
        company: 'NCPC, UPLB'
      }
    ];
    data.forEach(expert => Experts.insert(expert));
  }

  if (Meteor.users.find().fetch().length === 0) {
      Accounts.createUser({username: 'admin123',email: 'admin@admin.com', password: 'admin123'});
      var id = Meteor.users.findOne({username: "admin123"});
      Roles.addUsersToRoles(id._id, ['Admin']);

      Accounts.createUser({username: 'pests123',email: 'pests@pests.com', password: 'pests123'});
      var id1 = Meteor.users.findOne({username: "pests123"});
      Roles.addUsersToRoles(id1._id, ['Pests Admin']);

      Accounts.createUser({username: 'clinic123',email: 'clinic@clinic.com', password: 'clinic123'});
      var id2 = Meteor.users.findOne({username: "clinic123"});
      Roles.addUsersToRoles(id2._id, ['Clinic Admin', 'Pest Expert']);

      Accounts.createUser({username: 'id1234',email: 'id@id.com', password: 'id1234'});
      var id3 = Meteor.users.findOne({username: "id1234"});
      Roles.addUsersToRoles(id3._id, ['Id Admin']);

      Accounts.createUser({username: 'diseases',email: 'diseases@diseases.com', password: 'diseases'});
      var id4 = Meteor.users.findOne({username: "diseases"});
      Roles.addUsersToRoles(id4._id, ['Diseases Admin']);

      Accounts.createUser({username: 'expert1',email: 'expert1@expert.com', password: 'expert1'});
      var id5 = Meteor.users.findOne({username: "expert1"});
      Roles.addUsersToRoles(id5._id, ['Pest Expert']);

      Accounts.createUser({username: 'expert2',email: 'expert2@expert.com', password: 'expert2'});
      var id6 = Meteor.users.findOne({username: "expert2"});
      Roles.addUsersToRoles(id6._id, ['Pest Expert']);

      Accounts.createUser({username: 'expert3',email: 'expert3@expert.com', password: 'expert3'});
      var id7 = Meteor.users.findOne({username: "expert3"});
      Roles.addUsersToRoles(id7._id, ['Pest Expert']);

      Accounts.createUser({username: 'expert4',email: 'expert4@expert.com', password: 'expert4'});
      var id8 = Meteor.users.findOne({username: "expert4"});
      Roles.addUsersToRoles(id8._id, ['Pest Expert']);
  }

  // if the Assistance collection is empty
  if (Assistance.find().count() === 0) {
    const data = [
      {
        type: 'message',
        email: 'agamboa@gmail.com',
        subject: 'Pests seen',
        message: 'This is sample message number one.',
        user: 'Alexis Gamboa',
        date: 'April 16th 2016, 6:27:25 pm',
        month: 'April',
        year: '2016',
        problem: 'Unknown',
        control: '1'
      },
      {
        type: 'message',
        email: 'rdim@gmail.com',
        subject: 'Bugs alert',
        message: 'This is sample message number two.',
        user: 'Ren Dimasalang',
        date: 'April 16th 2016, 6:37:25 pm',
        month: 'April',
        year: '2016',
        problem: 'Black Bug',
        control: '2'
      },
      {
        type: 'message',
        email: 'hsantos@gmail.com',
        subject: 'Need Expert',
        message: 'This is sample message number three. If this works then yehey!',
        user: 'Harvey Santos',
        date: 'April 16th 2016, 6:47:25 pm',
        month: 'April',
        year: '2016',
        problem: 'Black Bug',
        control: '3'
      },
      {
        type: 'message',
        email: 'gfernandez@gmail.com',
        subject: 'Rice bugs',
        message: 'Thus is sample message number four. Dont know what to do.',
        user: 'Gail Fernandez',
        date: 'April 16th 2016, 6:49:25 pm',
        month: 'April',
        year: '2016',
        problem: 'Black Bug',
        control: '4'
      },
      {
        type: 'message',
        email: 'psilva@gmail.com',
        subject: 'Corn bugs',
        message: 'This is sample message number five. ',
        user: 'Penny Silva',
        date: 'April 16th 2016, 6:53:25 pm',
        month: 'April',
        year: '2016',
        problem: 'Unknown',
        control: '5'
      }
    ];

    data.forEach(assistance => Assistance.insert(assistance));
  }
  if (Logs.find().count() === 0) {
    const data = [
      {
        type: 'message',
        email: 'agamboa@gmail.com',
        subject: 'Pests seen',
        message: 'This is sample message number one.',
        user: 'Alexis Gamboa',
        date: 'April 16th 2016, 6:27:25 pm',
        month: 'April',
        year: '2016',
        problem: 'Unknown',
        control: '1',
        username: 'admin123',
        dateReplied: '',
        adminId: '',
        adminUsername: '',
        adminEmail: '',
        reply: ''
      },
      {
        type: 'message',
        email: 'rdim@gmail.com',
        subject: 'Bugs alert',
        message: 'This is sample message number two.',
        user: 'Ren Dimasalang',
        date: 'April 16th 2016, 6:37:25 pm',
        month: 'April',
        year: '2016',
        problem: 'Black Bug',
        control: '2',
        username: 'admin123',
        dateReplied: '',
        adminId: '',
        adminUsername: '',
        adminEmail: '',
        reply: ''
      },
      {
        type: 'message',
        email: 'hsantos@gmail.com',
        subject: 'Need Expert',
        message: 'This is sample message number three. If this works then yehey!',
        user: 'Harvey Santos',
        date: 'April 16th 2016, 6:47:25 pm',
        month: 'April',
        year: '2016',
        problem: 'Black Bug',
        control: '3',
        username: 'admin123',
        dateReplied: '',
        adminId: '',
        adminUsername: '',
        adminEmail: '',
        reply: ''
      },
      {
        type: 'message',
        email: 'gfernandez@gmail.com',
        subject: 'Rice bugs',
        message: 'Thus is sample message number four. Dont know what to do.',
        user: 'Gail Fernandez',
        date: 'April 16th 2016, 6:49:25 pm',
        month: 'April',
        year: '2016',
        problem: 'Black Bug',
        control: '4',
        username: 'admin123',
        dateReplied: '',
        adminId: '',
        adminUsername: '',
        adminEmail: '',
        reply: ''
      },
      {
        type: 'message',
        email: 'psilva@gmail.com',
        subject: 'Corn bugs',
        message: 'This is sample message number five. ',
        user: 'Penny Silva',
        date: 'April 16th 2016, 6:53:25 pm',
        month: 'April',
        year: '2016',
        problem: 'Unknown',
        control: '5',
        username: 'admin123',
        dateReplied: '',
        adminId: '',
        adminUsername: '',
        adminEmail: '',
        reply: ''
      }
    ];

    data.forEach(logs => Logs.insert(logs));
  }

  // if the CMS collection is empty
  if (CMS.find().count() === 0) {
    const data = [
        {
          info: 'finalLib',
          bannerImage: '/img/banners/pest_lib_banner.jpg',
          bannerImageID: '',
          bannerHeadText: 'Pest Library',
          bannerSubText: 'An online library for Rice and Corn Pests',
          searchLabelText: 'Search the library for pests',
          viewPestType: ['Rice', 'Corn', 'Banana'],
          pestsPerPage: 8
        },
        {
          info: 'finalDiseases',
          bannerImage: '/img/banners/diseases_banner.jpg',
          bannerImageID: '',
          bannerHeadText: 'Diseases Library',
          bannerSubText: 'An online library for Rice, Corn, and Banana Diseases',
          searchLabelText: 'Search the library for diseases',
          viewDiseaseType: ['Rice', 'Corn', 'Banana'],
          diseasesPerPage: 8
        },
        {
          info: 'finalId',
          bannerImage: '/img/banners/pest_id_banner.jpg',
          bannerImageID: '',
          bannerHeadText: 'Pest Identification',
          bannerSubText: 'Identify pest by uploading a pest picture below by selecting the image processing tab or by answering questions from the ontology-based tab',
        },
        {
          info: 'finalClinic',
          bannerImage: '/img/banners/pest_clinic_banner.png',
          bannerImageID: '',
          bannerHeadText: 'Pest Clinic',
          bannerSubText: 'Ask for experts assistance on rice and corn pests',
          row1HeadText: 'Concerned in Increase Protection and Pest Management Services to its Clients',
          row1Image: '/img/clinic/sarai_3.jpg',
          row2HeadText: 'Serving since 70s',
          row2SubText: 'Started in the late 70s, the Plant Pest Clinic is an extension program of the Crop Protection Cluster which offers pest management services such as accurate diagnostic and control recommendation to farmers. Through it, experts share their knowledge on pest identification and management, consultations, and offers other related services such as fungal, bacterial, and nematode analyses.',
          row2Image: '/img/clinic/sarai_2.jpg'
        },
        {
          info: 'finalHome',
          bannerImage: '/img/banners/pest_banner.jpg',
          bannerImageID: '',
          bannerHeadText: 'Smarter Pest Identification',
          bannerSubText: 'An online platform that combines different strategies and practices for identification and management of pests',
        }
    ];

    data.forEach(cms => CMS.insert(cms));
  }

  // if the Plant_Problem collection is empty
  if (Plant_Problem.find().count() === 0) {
    const data = [

    //--------------------------PESTS--------------------------
        {
          type: 'Pest',
          keywords: [],
          fil_stage_plant_affected: '',
          fil_effect: 'Sira ang mga dulo ng dahon pati ang mga gilid nito. Kaya nitong kainin ang buong dahon. Kaya rin nitong maputol ang uhay mula sa puno nito.',
          fil_part_destroyed: 'Puno, dahon, murang palay, uhay',
          fil_stage_threatening: 'Larva',
          fil_symptoms: 'Nawawala ang mga dahon. Tumba at putol na puno ng palay. Ang mga pausbong pa lang na mga uhay ay nawawala. Mas mapapansin sila kung gabi o kaya ay kapag makulimlim dahil mas aktibo sila sa mga oras na ito.',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment: 'Kultural na pamamaraan: Bunutin ang mga damo dahil nagsisilbi itong alternatibong tirahan ng Armyworm. Patayin ang mga uod sa pamamagitan ng pagtataas ng lebel ng tubig. Ang seedbed ay dapat malayo sa damuhan.; Natural na pamamaraan: Iwasang patayin ang mga natural na kalaban nito gaya ng Tachinid Fly.',
          fil_name: 'Harabas',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: '',
          symptoms: 'Gross feeding damage to foliage, growing points, and young stems. Severe infestation results in total defoliation or destruction of the plant to ground level.',
          description: 'Eggs: Pale-yellowish and becomes dark brown just before hatching. The black head-capsules of the larvae can be seen through the shells. Each egg is about 0.5 mm in diameter, conical with a slightly rounded apex and a densely sculpted surface; Larvae: Develops from grey-green with white-yellow stripes down its back when small, to black with thin blue lines down the middle of the back and yellow-green lines outside the blue lines when fully grown. It measures 2 to 3cm long, has a velvety-black upper surface with pale lateral lines, a green or yellow ventral surface, and no hairs on the body. There are three parallel lines on the dorsal surface of the prothoracic (first body) segment and a stripe running longitudinally down the mid-dorsal surface of the body is always paler than the black pigmentation on either side of it. The head is always shiny-black; Pupa: Mahogany-brown, 10-14mm long, with a smooth, shiny surface; Adult: It is 14-18mm long and has a 29-32mm wing span. The abdomen is covered with pale grey-brown scales (except for the tip in the female which has black hair-scales). Forewings are dark-brown with distinctive grey-black markings. Hindwings are white with dark veins.',
          plant_affected: 'Rice',
          order: 'Lepidoptera: Noctuidae',
          classification: 'Moth-like',
          treatment: 'Many animals, birds and insects prey on the African armyworm at different stages of its life cycle. These natural enemies should be encouraged by maintaining natural surroundings with plenty of breeding places for them, including trees and shrubs. Night birds and bats feed on the African armyworm moths, and lacewings, wasps, parasitic wasps and spiders eat the caterpillars; Avoid burning and overgrazing of grasslands which are the natural habitat and food store of the caterpillars. Burning often causes outbreaks because as soon as temperatures rise, eggs are laid in large quantities on the fresh new grass.',
          sci_name: 'Spodoptera exempta (Walker)/Mythimna separata Walker/Spodoptera mauritia Boisduval',
          eng_name: 'African Armyworm, Black Armyworm, Nutgrass Armyworm, True Armyworm, Hail Worm, Mystery Armyworm, Rain Worm',
          name: 'Black Armyworm adult',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/BlackArmywormadult.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/BlackArmywormadult.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/BlackArmywormlarva.jpg'
          ]
       },

        {
          type: 'Pest',
          keywords: [],
          fil_stage_plant_affected: '',
          fil_effect: 'Sira ang mga dulo ng dahon pati ang mga gilid nito. Kaya nitong kainin ang buong dahon. Kaya rin nitong maputol ang uhay mula sa puno nito.',
          fil_part_destroyed: 'Puno, dahon, murang palay, uhay',
          fil_stage_threatening: 'Larva',
          fil_symptoms: 'Nawawala ang mga dahon. Tumba at putol na puno ng palay. Ang mga pausbong pa lang na mga uhay ay nawawala. Mas mapapansin sila kung gabi o kaya ay kapag makulimlim dahil mas aktibo sila sa mga oras na ito.',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment: 'Kultural na pamamaraan: Bunutin ang mga damo dahil nagsisilbi itong alternatibong tirahan ng Armyworm. Patayin ang mga uod sa pamamagitan ng pagtataas ng lebel ng tubig. Ang seedbed ay dapat malayo sa damuhan.; Natural na pamamaraan: Iwasang patayin ang mga natural na kalaban nito gaya ng Tachinid Fly.',
          fil_name: 'Harabas',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: '',
          symptoms: 'Gross feeding damage to foliage, growing points, and young stems. Severe infestation results in total defoliation or destruction of the plant to ground level.',
          description: 'Eggs: Pale-yellowish and becomes dark brown just before hatching. The black head-capsules of the larvae can be seen through the shells. Each egg is about 0.5 mm in diameter, conical with a slightly rounded apex and a densely sculpted surface; Larvae: Develops from grey-green with white-yellow stripes down its back when small, to black with thin blue lines down the middle of the back and yellow-green lines outside the blue lines when fully grown. It measures 2 to 3cm long, has a velvety-black upper surface with pale lateral lines, a green or yellow ventral surface, and no hairs on the body. There are three parallel lines on the dorsal surface of the prothoracic (first body) segment and a stripe running longitudinally down the mid-dorsal surface of the body is always paler than the black pigmentation on either side of it. The head is always shiny-black; Pupa: Mahogany-brown, 10-14mm long, with a smooth, shiny surface; Adult: It is 14-18mm long and has a 29-32mm wing span. The abdomen is covered with pale grey-brown scales (except for the tip in the female which has black hair-scales). Forewings are dark-brown with distinctive grey-black markings. Hindwings are white with dark veins.',
          plant_affected: 'Rice',
          order: 'Lepidoptera: Noctuidae',
          classification: 'Caterpillar-like',
          treatment: 'Many animals, birds and insects prey on the African armyworm at different stages of its life cycle. These natural enemies should be encouraged by maintaining natural surroundings with plenty of breeding places for them, including trees and shrubs. Night birds and bats feed on the African armyworm moths, and lacewings, wasps, parasitic wasps and spiders eat the caterpillars; Avoid burning and overgrazing of grasslands which are the natural habitat and food store of the caterpillars. Burning often causes outbreaks because as soon as temperatures rise, eggs are laid in large quantities on the fresh new grass.',
          sci_name: 'Spodoptera exempta (Walker)/Mythimna separata Walker/Spodoptera mauritia Boisduval',
          eng_name: 'African Armyworm, Black Armyworm, Nutgrass Armyworm, True Armyworm, Hail Worm, Mystery Armyworm, Rain Worm',
          name: 'Black Armyworm larva',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/BlackArmywormlarva.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/BlackArmywormlarva.jpg',
          ]
       },

        {
          type: 'Pest',
          keywords: [],
          fil_stage_plant_affected: '',
          fil_effect: '',
          fil_part_destroyed: '',
          fil_stage_threatening: '',
          fil_symptoms: '',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment: '',
          fil_name: '',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: '',
          symptoms: '',
          description: 'Egg: Laid in clusters covered with short yellowish brown hairs from the abdominal tips of the female moths. Each egg is pearly white, round, and has a ridged surface; Larva: Brown or green with longitudinal stripes, with black spots ringing the body about one-fourth of the body length behind the head; Adult: Has 15-20mm long grey-brown body, and a wingspan of 30-38mm. The forewings are grey to reddish-brown with a strongly variegated pattern and paler lines along the veins, and the hindwings are greyish-white with grey margins.',
          plant_affected: 'Rice',
          order: 'Lepidoptera: Noctuidae',
          classification: 'Moth-like',
          treatment: 'Seedbeds should be established far from large areas of weeds, remove weeds from areas outside of fields, and plow all uncultivated land. In insecticides, sprays are more effective than granules. High dosages are required to kill large armyworm and cutworm larvae. Spraying should be done late in the afternoon before the larvae leave their resting places to climb up the plants. Because damage is normally concentrated in discrete areas of a rice field, only areas where damage occurs should be sprayed.',
          sci_name: 'Spodoptera litura (Fabricius)',
          eng_name: 'Common Cutworm, Grass Cutworm, Vegetable Cutworm, Tobacco Cutworm, Tobacco Caterpillar, Taro Caterpillar',
          name: 'Common Cutworm adult',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/CommonCutwormadult.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/CommonCutwormadult.jpg',
          ]
       },
        
        {
          type: 'Pest',
          keywords: [],
          fil_stage_plant_affected: '',
          fil_effect: '',
          fil_part_destroyed: '',
          fil_stage_threatening: '',
          fil_symptoms: '',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment: '',
          fil_name: '',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: '',
          symptoms: '',
          description: 'Egg: Laid in clusters covered with short yellowish brown hairs from the abdominal tips of the female moths. Each egg is pearly white, round, and has a ridged surface; Larva: Brown or green with longitudinal stripes, with black spots ringing the body about one-fourth of the body length behind the head; Adult: Has 15-20mm long grey-brown body, and a wingspan of 30-38mm. The forewings are grey to reddish-brown with a strongly variegated pattern and paler lines along the veins, and the hindwings are greyish-white with grey margins.',
          plant_affected: 'Rice',
          order: 'Lepidoptera: Noctuidae',
          classification: 'Caterpillar-like',
          treatment: 'Seedbeds should be established far from large areas of weeds, remove weeds from areas outside of fields, and plow all uncultivated land. In insecticides, sprays are more effective than granules. High dosages are required to kill large armyworm and cutworm larvae. Spraying should be done late in the afternoon before the larvae leave their resting places to climb up the plants. Because damage is normally concentrated in discrete areas of a rice field, only areas where damage occurs should be sprayed.',
          sci_name: 'Spodoptera litura (Fabricius)',
          eng_name: 'Common Cutworm, Grass Cutworm, Vegetable Cutworm, Tobacco Cutworm, Tobacco Caterpillar, Taro Caterpillar',
          name: 'Common Cutworm larva',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/CommonCutwormlarva.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/CommonCutwormlarva.jpg',
          ]
       },

        {
          type: 'Pest',
          keywords: [],
          fil_stage_plant_affected: '',
          fil_effect: '',
          fil_part_destroyed: '',
          fil_stage_threatening: '',
          fil_symptoms: '',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment: '',
          fil_name: '',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: '',
          symptoms: '',
          description: 'Egg: Laid in rows along leaves, which fold over and protect the eggs. The pale yellow, spherical eggs can be seen when the leaf blade is unfolded; Larva: Usually light brown or gray green, with a longitudinal dark band midway down the side of the body; Pupa: Shiny, yellowish-brown; Adult: Wing span is 38-48 mm. Forewings are grayish-yellow, with dark-gray or reddish-yellow tint. External wing margin blackened obliquely from top backward, with dark stroke and with a row of dark points. Hindwings are gray, with dark external margin. Antennae are thread-like.',
          plant_affected: 'Rice',
          order: 'Lepidoptera: Noctuidae',
          classification: 'Moth-like',
          treatment: 'Weeding, inter-row cultivations, removal of crop residues from fields after harvesting, deep autumn plowing, optimal dates of early sowing, cultivation of resistant varieties, insecticide treatments of crops, release of such entomophages as Trichogramma spp.',
          sci_name: 'Mythimna separata (Walker)',
          eng_name: 'Ear-cutting caterpillar, Oriental Armyworm, Northern Armyworm',
          name: 'Ear-cutting Caterpillar adult',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/Ear-cuttingCaterpillaradult.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/Ear-cuttingCaterpillaradult.jpg',
          ]
       },

        {
          type: 'Pest',
          keywords: [],
          fil_stage_plant_affected: '',
          fil_effect: '',
          fil_part_destroyed: '',
          fil_stage_threatening: '',
          fil_symptoms: '',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment: '',
          fil_name: '',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: '',
          symptoms: '',
          description: 'Egg: Laid in rows along leaves, which fold over and protect the eggs. The pale yellow, spherical eggs can be seen when the leaf blade is unfolded; Larva: Usually light brown or gray green, with a longitudinal dark band midway down the side of the body; Pupa: Shiny, yellowish-brown; Adult: Wing span is 38-48 mm. Forewings are grayish-yellow, with dark-gray or reddish-yellow tint. External wing margin blackened obliquely from top backward, with dark stroke and with a row of dark points. Hindwings are gray, with dark external margin. Antennae are thread-like.',
          plant_affected: 'Rice',
          order: 'Lepidoptera: Noctuidae',
          classification: 'Caterpillar-like',
          treatment: 'Weeding, inter-row cultivations, removal of crop residues from fields after harvesting, deep autumn plowing, optimal dates of early sowing, cultivation of resistant varieties, insecticide treatments of crops, release of such entomophages as Trichogramma spp.',
          sci_name: 'Mythimna separata (Walker)',
          eng_name: 'Ear-cutting caterpillar, Oriental Armyworm, Northern Armyworm',
          name: 'Ear-cutting Caterpillar larva',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/Ear-cuttingCaterpillarlarva.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/Ear-cuttingCaterpillarlarva.jpg',
          ]
       },
        
        {
          type: 'Pest',
          keywords: [],
          fil_stage_plant_affected: '',
          fil_effect: '',
          fil_part_destroyed: '',
          fil_stage_threatening: '',
          fil_symptoms: '',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment: '',
          fil_name: '',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: '',
          symptoms: '',
          description: 'Egg: Laid in small clusters openly on the leaf blades. Each egg is spherical and shiny; Larva: Has two pairs of white or black horns; one pair on their heads and another pair projecting from the abdomen; Adult: Has two white ring spots on the front wing and seven on the back wing of the top side. On the underside, there are three spots on the front wing and six on the back wing, all ringed with violet and yellow circles.',
          plant_affected: 'Rice',
          order: 'Lepidoptera: Satyridae',
          classification: 'Moth-like',
          treatment: '',
          sci_name: 'Melanitis leda ismene Cramer',
          eng_name: 'Green Horned Caterpillar (larva), Common Evening Brown (adult)',
          name: 'Greenhorned Caterpillar adult',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/GreenhornedCaterpillaradult.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/GreenhornedCaterpillaradult.jpg',
          ]
       },

        {
          type: 'Pest',
          keywords: [],
          fil_stage_plant_affected: '',
          fil_effect: '',
          fil_part_destroyed: '',
          fil_stage_threatening: '',
          fil_symptoms: '',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment: '',
          fil_name: '',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: '',
          symptoms: '',
          description: 'Egg: Laid in small clusters openly on the leaf blades. Each egg is spherical and shiny; Larva: Has two pairs of white or black horns; one pair on their heads and another pair projecting from the abdomen; Adult: Has two white ring spots on the front wing and seven on the back wing of the top side. On the underside, there are three spots on the front wing and six on the back wing, all ringed with violet and yellow circles.',
          plant_affected: 'Rice',
          order: 'Lepidoptera: Satyridae',
          classification: 'Caterpillar-like',
          treatment: '',
          sci_name: 'Melanitis leda ismene Cramer',
          eng_name: 'Green Horned Caterpillar (larva), Common Evening Brown (adult)',
          name: 'Greenhorned Caterpillar larva',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/GreenhornedCaterpillarlarva.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/GreenhornedCaterpillarlarva.jpg',
          ]
       },
        
        {
          type: 'Pest',
          keywords: [],
          fil_stage_plant_affected: '',
          fil_effect: 'Pagkaputol ng mga dahon ng pakanang dahilig na parang ginupit ng gunting. Pagkakaroon ng mga binilot na dahon na nagsisilbing proteksyon ng uod. Ang dahon ay nagmumukhang manipis na papel at hindi pantay-pantay na pagkaputol ng dahon. Sa ibang kaso, nagiging bansot ang mga dahon dahil mas gusto ng caseworn umatake sa murang yugto ng pagtubo ng palay.',
          fil_part_destroyed: 'Dahon, mga batang seedlings',
          fil_stage_threatening: 'Larva',
          fil_symptoms: 'Pagkakaroon ng mga nakasabit na binilot na parte ng dahon. Ang dulong parte ng dahon ay mistulang manipis na papel at mayroon hindi pantay-pantay na pagkasira ng mga dahon.',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment: 'Kultural na pamamaraan: Mag-Crop Rotation. Linisin palagi ang palayan at bunutin ang mga damo. Para mabawasan ang mga larvae, igahin ang tubig ng hindi bababa sa tatlong araw. Tamang paggamit ng fertilizer, paglilipat-tanim ng mga matandang punla sa mas malawak na lugar.; Natural na pamamaraan: Ang mga itlog ng case worm ay pinaparasito ng Trichogramma (minutum Ashmead) at ang larvae naman ay kinakain ng (tabanid fly (Tabanus sp.?) at braconid wasp (Dacnusa sp.) samantalang ang hydrophilids, dystiscids at Cybister tripunctatus orientalis ay nagsisilbing predator ng caseworm. Ang mga itlog naman na nakadikit sa dahon ay kayang tanggalin ng mga kuhol (Pila sp. and Radix sp.). Kinakain din ng ilang mga gagamba ang caseworm.; Kemikal na pamamaraan: Foliar spray ng insecticides gaya ng carbamate, hindi lalagpas ng 7 araw pagka-transplant.',
          fil_name: '',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: '',
          symptoms: 'Ladder-like appearance on the surface of leaves, leaf cases floating on water, leaves cut at right angles (like being cut with a pair of scissors), leaves with papery upper epidermis (whitish appearance).',
          description: 'Eggs: Pale, yellowish green, circular, somewhat flattened with a smooth surface, laid on the under surfaces of leaves drooping into the water; Larva: Young larva is pale cream, about 1.2 mm long and 0.2 mm across the head, and the head is light yellow. Full grown larva is about 14 mm long and 1.6 mm in diameter, and pale green with a semitransparent skin and light brown prothoracic shield and head; Pupa: 5.5 mm long and 1.5 mm wide, and is cream colored when freshly formed but turns silvery white toward moth emergence; Adult: 6mm long with a wing span of 15mm, white wings are marked with a few light brown to black specks and two or three submarginal fulvous bands.',
          plant_affected: 'Rice',
          order: 'Lepidoptera: Pyralidae',
          classification: 'Moth-like',
          treatment: 'Use of correct fertilizer application, plant early and use wider spacing (30 × 20 mm), drain the field, transplant older seedlings (sparse planting can also reduce the damage), grow a ratoon, encourage biological control agents (snails, hydrophilid and dytiscid water beetles, spiders, dragonflies, and birds), use foliar treatments of carbamate insecticides.',
          sci_name: 'Nymphula depunctalis (Guenée)',
          eng_name: 'Rice Caseworm',
          name: 'Rice Caseworm adult',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/RiceCasewormadult.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/RiceCasewormadult.jpg',
          ]
       },
        
        {
          type: 'Pest',
          keywords: [],
          fil_stage_plant_affected: '',
          fil_effect: '',
          fil_part_destroyed: '',
          fil_stage_threatening: '',
          fil_symptoms: '',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment: '',
          fil_name: '',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: 'Adult, larva',
          symptoms: '',
          description: 'Eggs: Yellow and develop purple to violet markings as they mature, laid in small clusters on leaf blades; Larva: Moves like inchworms, arching their backs as they go; Adult: Yellow orange with two diagonal, dark red bands on each front wing.',
          plant_affected: 'Rice',
          order: 'Lepidoptera: Noctuidae',
          classification: 'Moth-like',
          treatment: '',
          sci_name: 'Naranga aenescens (Moore)',
          eng_name: 'Green Semilooper',
          name: 'Rice Green Semilooper adult',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/RiceGreenSemilooperadult.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/RiceGreenSemilooperadult.jpg',
          ]
       },

        {
          type: 'Pest',
          keywords: [],
          stage_threatening: 'Adult, larva',
          symptoms: '',
          description: 'Eggs: Yellow and develop purple to violet markings as they mature, laid in small clusters on leaf blades; Larva: Moves like inchworms, arching their backs as they go; Adult: Yellow orange with two diagonal, dark red bands on each front wing.',
          plant_affected: 'Rice',
          order: 'Lepidoptera: Noctuidae',
          classification: 'Caterpillar-like',
          treatment: '',
          sci_name: 'Naranga aenescens (Moore)',
          fil_name: '',
          eng_name: 'Green Semilooper',
          name: 'Rice Green Semilooper larva',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/RiceGreenSemilooperlarva.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/RiceGreenSemilooperlarva.jpg',
          ]
       },
        
        {
          type: 'Pest',
          keywords: [],
          fil_stage_plant_affected: '',
          fil_effect:'Nakarolyo ang dahon. Pagkasira ng dahon at pag-iiba ng kulay nito. Mukhang nasunog at mahina ang dahon.',
          fil_part_destroyed:'Dahon',
          fil_stage_threatening: 'Larva',
          fil_symptoms:'May mga nakarolyo o nakatuping dahon. Ang paligid at dulo ng apektadong dahon ay natutuyo. Mukhang nasunog at mahina ang palay.',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment:'Kultural na pamamaraan: Gumamit ng barayti na maresistensya sa leaf folder. Bunutin ang mga damo dahil nagsisilbi itong alternatibong tirahan ng leaf folder. Pagtataas ng lebel ng tubig sa palayan pagkatapos umani upang hindi na makapangitlog ang mga leaf folder. Huwag masyadong masinsin ang mga pagtatanim. Mag-crop rotation.; Natural na pamamaraan: Ang leaf folder ay maraming mga natural na kalaban, kasama na rito ang parasitoids, predators at pathogens. Sa Pilipinas, ang Anaxipha longipennis at Metioche vittaticollis ay uri ng kagaykay ay kinakain ang mga itlog at uod ng leaffolder. Ang iba pang kalaban ng leaf folder ay plant (Cyrtorhinus lividipennis), pagong-pagungan (Micraspis crocea at Harmonia octomaculata). Ang pumapatay naman sa malaking leaf folder ay mga gagamba tulad ng Argiope catenulata. (CABI, 2005)',
          fil_name: '',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: 'Adult, larva',
          symptoms: 'The first sign of leaffolder infestation is the presence of moths in the field. Longitudinal and transparent whitish streaks on damaged leaves, tubular folded leaves, and leaf tips sometimes fastened to the basal part of leaf are caused by larvae feeding. Severely damaged plants appear burned with many folded leaves. Under heavy attack, a field will appear gray white from a distance.',
          description: 'Eggs: Translucent, yellowish white, oval, 0.90 mm long and 0.39 mm wide, and almost flat with a slightly convex surface; Larva: Young larvae are translucent but turn yellowish green as they mature, head capsules and thoraxes are brown, have one pair of dark spots on the abdomen near the head; Pupa: Light brown, but turns reddish brown toward moth emergence; Adult: 10-12mm long and has wing span of 13-15mm; light brown with shiny, brownish yellow wings adorned with dark, broad margins, and two to three dark vertical stripes; appears triangular when at rest.',
          plant_affected: 'Rice',
          order: 'Lepidoptera: Pyralidae',
          classification: 'Moth-like',
          treatment: 'Careful use of nitrogenous fertilizer in split applications is recommended. Removal of grassy weeds from rice fields and surrounding borders prevents the buildup of rice leaffolders on alternate hosts. However, chemical control is the only practical method to control increasing leaffolder infestation during crop growth. Numerous insecticides that have been identified for control are most effective as foliar sprays. But foliar sprays have to be repeated because they are often washed off by frequent rains. Granular insecticides broadcast into water are ineffective. Since leaffolders can attack the crop during any growth stage, fields should be monitored weekly.',
          sci_name: 'Cnaphalocrocis medinalis (Guenée)',
          eng_name: 'Rice Leaffolder',
          name: 'Rice Leaffolder adult',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/RiceLeaffolderadult.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/RiceLeaffolderadult.jpg',
          ]
       },

        {
          type: 'Pest',
          keywords: [],
          fil_stage_plant_affected: '',
          fil_effect:'Nakarolyo ang dahon. Pagkasira ng dahon at pag-iiba ng kulay nito. Mukhang nasunog at mahina ang dahon.',
          fil_part_destroyed:'Dahon',
          fil_stage_threatening: 'Larva',
          fil_symptoms:'May mga nakarolyo o nakatuping dahon. Ang paligid at dulo ng apektadong dahon ay natutuyo. Mukhang nasunog at mahina ang palay.',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment:'Kultural na pamamaraan: Gumamit ng barayti na maresistensya sa leaf folder. Bunutin ang mga damo dahil nagsisilbi itong alternatibong tirahan ng leaf folder. Pagtataas ng lebel ng tubig sa palayan pagkatapos umani upang hindi na makapangitlog ang mga leaf folder. Huwag masyadong masinsin ang mga pagtatanim. Mag-crop rotation.; Natural na pamamaraan: Ang leaf folder ay maraming mga natural na kalaban, kasama na rito ang parasitoids, predators at pathogens. Sa Pilipinas, ang Anaxipha longipennis at Metioche vittaticollis ay uri ng kagaykay ay kinakain ang mga itlog at uod ng leaffolder. Ang iba pang kalaban ng leaf folder ay plant (Cyrtorhinus lividipennis), pagong-pagungan (Micraspis crocea at Harmonia octomaculata). Ang pumapatay naman sa malaking leaf folder ay mga gagamba tulad ng Argiope catenulata. (CABI, 2005)',
          fil_name: '',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: 'Adult, larva',
          symptoms: 'The first sign of leaffolder infestation is the presence of moths in the field. Longitudinal and transparent whitish streaks on damaged leaves, tubular folded leaves, and leaf tips sometimes fastened to the basal part of leaf are caused by larvae feeding. Severely damaged plants appear burned with many folded leaves. Under heavy attack, a field will appear gray white from a distance.',
          description: 'Eggs: Translucent, yellowish white, oval, 0.90 mm long and 0.39 mm wide, and almost flat with a slightly convex surface; Larva: Young larvae are translucent but turn yellowish green as they mature, head capsules and thoraxes are brown, have one pair of dark spots on the abdomen near the head; Pupa: Light brown, but turns reddish brown toward moth emergence; Adult: 10-12mm long and has wing span of 13-15mm; light brown with shiny, brownish yellow wings adorned with dark, broad margins, and two to three dark vertical stripes; appears triangular when at rest.',
          plant_affected: 'Rice',
          order: 'Lepidoptera: Pyralidae',
          classification: 'Caterpillar-like',
          treatment: 'Careful use of nitrogenous fertilizer in split applications is recommended. Removal of grassy weeds from rice fields and surrounding borders prevents the buildup of rice leaffolders on alternate hosts. However, chemical control is the only practical method to control increasing leaffolder infestation during crop growth. Numerous insecticides that have been identified for control are most effective as foliar sprays. But foliar sprays have to be repeated because they are often washed off by frequent rains. Granular insecticides broadcast into water are ineffective. Since leaffolders can attack the crop during any growth stage, fields should be monitored weekly.',
          sci_name: 'Cnaphalocrocis medinalis (Guenée)',
          eng_name: 'Rice Leaffolder',
          name: 'Rice Leaffolder larva',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/RiceLeaffolderlarva.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/RiceLeaffolderlarva.jpg',
          ]
       },
        
        {
          type: 'Pest',
          keywords: [],
          fil_stage_plant_affected: '',
          fil_effect: '',
          fil_part_destroyed: '',
          fil_stage_threatening: '',
          fil_symptoms: '',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment: '',
          fil_name: '',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: 'Adult, larva',
          symptoms: '',
          description: 'Eggs: Pearl-like, laid singly on leaf blades; Larva: Heads are flat and slanted backward, have reddish vertical bands at each side of the head; Adult: White spots on brown wings, adults rest with their wings upright.',
          plant_affected: 'Rice',
          order: 'Lepidoptera: Hesperiidae',
          classification: 'Fly-like',
          treatment: '',
          sci_name: 'Pelopidas mathias (Fabricius)',
          fil_name: '',
          eng_name: 'Rice Skipper, Small Branded Swift, Black Branded Swift, Lesser Millet Skipper',
          name: 'Rice Skipper adult',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/RiceSkipperadult.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/RiceSkipperadult.jpg',
          ]
       },

        {
          type: 'Pest',
          keywords: [],
          fil_stage_plant_affected: '',
          fil_effect: '',
          fil_part_destroyed: '',
          fil_stage_threatening: '',
          fil_symptoms: '',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment: '',
          fil_name: '',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: 'Adult, larva',
          symptoms: '',
          description: 'Eggs: Pearl-like, laid singly on leaf blades; Larva: Heads are flat and slanted backward, have reddish vertical bands at each side of the head; Adult: White spots on brown wings, adults rest with their wings upright.',
          plant_affected: 'Rice',
          order: 'Lepidoptera: Hesperiidae',
          classification: 'Caterpillar-like',
          treatment: '',
          sci_name: 'Pelopidas mathias (Fabricius)',
          fil_name: '',
          eng_name: 'Rice Skipper, Small Branded Swift, Black Branded Swift, Lesser Millet Skipper',
          name: 'Rice Skipper larva',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/RiceSkipperlarva.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/RiceSkipperlarva.jpg',
          ]
       },
        
        {
          type: 'Pest',
          keywords: [],
          fil_stage_plant_affected:'Aksip',
          fil_effect:'Sa vegetative stage, nagdudulot ng dead tillers or deadhearts ang stem borer. Pagkakaroon ng uban sa reproductive stage. Pagkakaroon ng butas sa mga suwi at puno. Namamatay ang puno ng palay kung saan ang pinaka-ubod nito ay natutuyo. Kapansin-pansin din na ito ay madaling bunutin.',
          fil_part_destroyed:'katawan, suwi at uhay',
          fil_stage_threatening:'Larva',
          fil_symptoms:'Mayroong mga dead tillers o deadhearts sa vegetative stage. Madali itong bunutin. Pagkakaroon ng uban.',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment:'Kultural na pamamaraan: Gumamit ng variety na mas mabilis ang paglaki at hindi masyadong tumataas. Sabay-sabay na pagtatanim ng mga karatig na palayan. Gumamit ng barayti na maresistensya sa stem borer. Kung nagkaroon ng paglaganap ng stem borer sa palayan, tubigan pagka-ani upang matanggal ang mga itlog. Para mawala ang mga stem borer sa ibabang bahagi ng pananim, anihin ang palay sa hanggang sa ibabang bahagi.; Natural na pamamaraan: Kinakain ng mga Trichogramma, Telenomus, and Tetratichus (wasps) ang mga itlog ng stemborer. Kinakain rin ng kagaykay (kuliglig) (Metioche vittaticollis and Anaxipha longipennis) grasshopper (Conocephalus longipennis), mirid (Cytorhinus lividipennis) ang mga malalaking stem borer.',
          fil_name: 'Aksip',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: 'Adult, larva',
          symptoms: 'Larvae within the stems, signs of a stem being cut by larval feeding, insect excrements in stem, external discoloration and exit holes on the leaf sheath and stem, deadhearts (damage to the tiller before flowering), whiteheads (dry panicles the appear whitish); Egg masses are a sign that plant damage will occur; Large numbers of adult stem borer moths around lights indicate that large numbers of eggs will be laid that evening. ',
          description: 'Eggs: Laid near the tip of the leaf blade. Egg masses are disc-shaped and are covered by a light brown mat of hair from the females’ abdomen; Larva: Unmarked and range from light yellow to white; Adult: Bright white with no markings and has a distinctive tuft of long hairs on the thorax. Both sexes have similar coloration, but the male is smaller. Nocturnal, positively phototropic, and strong fliers.',
          plant_affected: 'Rice',
          order: 'Lepidoptera: Pyralidae',
          classification: 'Moth-like',
          treatment: 'Clipping the seedlings before transplanting greatly reduces the carryover of eggs from the seedbed to the transplanted fields. However, stem borers are difficult to control with insecticides. After hatching, the larvae are exposed only for a few hours before they penetrate a tiller or enter the plant. Successful control involves repeated foliar applications with spray volumes more than 400 liters/ha.',
          sci_name: 'Scirpophaga innotata (Walker)',
          eng_name: 'White Stemborer',
          name: 'White Stemborer',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/WhiteStemborer.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/WhiteStemborer.jpg',
          ]
       },
        
        {
          type: 'Pest',
          keywords: [],
          fil_stage_plant_affected:'Aksip',
          fil_effect:'Sa vegetative stage, nagdudulot ng dead tillers or deadhearts ang stem borer. Pagkakaroon ng uban sa reproductive stage. Pagkakaroon ng butas sa mga suwi at puno. Namamatay ang puno ng palay kung saan ang pinaka-ubod nito ay natutuyo. Kapansin-pansin din na ito ay madaling bunutin.',
          fil_part_destroyed:'katawan, suwi at uhay',
          fil_stage_threatening:'Larva',
          fil_symptoms:'Mayroong mga dead tillers o deadhearts sa vegetative stage. Madali itong bunutin. Pagkakaroon ng uban.',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment:'Kultural na pamamaraan: Gumamit ng variety na mas mabilis ang paglaki at hindi masyadong tumataas. Sabay-sabay na pagtatanim ng mga karatig na palayan. Gumamit ng barayti na maresistensya sa stem borer. Kung nagkaroon ng paglaganap ng stem borer sa palayan, tubigan pagka-ani upang matanggal ang mga itlog. Para mawala ang mga stem borer sa ibabang bahagi ng pananim, anihin ang palay sa hanggang sa ibabang bahagi.; Natural na pamamaraan: Kinakain ng mga Trichogramma, Telenomus, and Tetratichus (wasps) ang mga itlog ng stemborer. Kinakain rin ng kagaykay (kuliglig) (Metioche vittaticollis and Anaxipha longipennis) grasshopper (Conocephalus longipennis), mirid (Cytorhinus lividipennis) ang mga malalaking stem borer.',
          fil_name: 'Aksip',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: 'Adult, larva',
          symptoms: 'Larvae within the stems, signs of a stem being cut by larval feeding, insect excrements in stem, external discoloration and exit holes on the leaf sheath and stem, deadhearts (damage to the tiller before flowering), whiteheads (dry panicles the appear whitish); Egg masses are a sign that plant damage will occur; Large numbers of adult stem borer moths around lights indicate that large numbers of eggs will be laid that evening. ',
          description: 'Eggs: Laid near the tip of the leaf blade. Egg masses are disc-shaped and are covered by a light brown mat of hair from the females’ abdomen; Larva: Unmarked and range from light yellow to white; Adult: Female is pale yellow or light brown front wings, each with a characteristic single, black spot; male is smaller, gray or light brown, has two rows of small spots at the tip of each front wing. Nocturnal, positively phototropic, and strong fliers.',
          plant_affected: 'Rice',
          order: 'Lepidoptera: Pyralidae',
          classification: 'Moth-like',
          treatment: 'Clipping the seedlings before transplanting greatly reduces the carryover of eggs from the seedbed to the transplanted fields. However, stem borers are difficult to control with insecticides. After hatching, the larvae are exposed only for a few hours before they penetrate a tiller or enter the plant. Successful control involves repeated foliar applications with spray volumes more than 400 liters/ha.',
          sci_name: 'Scirpophaga incertulas (Walker)',
          eng_name: 'Yellow Stemborer',
          name: 'Yellow Stemborer adult',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/YellowStemboreradult.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/YellowStemboreradult.jpg',
          ]
       },

        {
          type: 'Pest',
          keywords: [],
          fil_stage_plant_affected:'Aksip',
          fil_effect:'Sa vegetative stage, nagdudulot ng dead tillers or deadhearts ang stem borer. Pagkakaroon ng uban sa reproductive stage. Pagkakaroon ng butas sa mga suwi at puno. Namamatay ang puno ng palay kung saan ang pinaka-ubod nito ay natutuyo. Kapansin-pansin din na ito ay madaling bunutin.',
          fil_part_destroyed:'katawan, suwi at uhay',
          fil_stage_threatening:'Larva',
          fil_symptoms:'Mayroong mga dead tillers o deadhearts sa vegetative stage. Madali itong bunutin. Pagkakaroon ng uban.',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment:'Kultural na pamamaraan: Gumamit ng variety na mas mabilis ang paglaki at hindi masyadong tumataas. Sabay-sabay na pagtatanim ng mga karatig na palayan. Gumamit ng barayti na maresistensya sa stem borer. Kung nagkaroon ng paglaganap ng stem borer sa palayan, tubigan pagka-ani upang matanggal ang mga itlog. Para mawala ang mga stem borer sa ibabang bahagi ng pananim, anihin ang palay sa hanggang sa ibabang bahagi.; Natural na pamamaraan: Kinakain ng mga Trichogramma, Telenomus, and Tetratichus (wasps) ang mga itlog ng stemborer. Kinakain rin ng kagaykay (kuliglig) (Metioche vittaticollis and Anaxipha longipennis) grasshopper (Conocephalus longipennis), mirid (Cytorhinus lividipennis) ang mga malalaking stem borer.',
          fil_name: 'Aksip',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: 'Adult, larva',
          symptoms: 'Larvae within the stems, signs of a stem being cut by larval feeding, insect excrements in stem, external discoloration and exit holes on the leaf sheath and stem, deadhearts (damage to the tiller before flowering), whiteheads (dry panicles the appear whitish); Egg masses are a sign that plant damage will occur; Large numbers of adult stem borer moths around lights indicate that large numbers of eggs will be laid that evening. ',
          description: 'Eggs: Laid near the tip of the leaf blade. Egg masses are disc-shaped and are covered by a light brown mat of hair from the females’ abdomen; Larva: Unmarked and range from light yellow to white; Adult: Female is pale yellow or light brown front wings, each with a characteristic single, black spot; male is smaller, gray or light brown, has two rows of small spots at the tip of each front wing. Nocturnal, positively phototropic, and strong fliers.',
          plant_affected: 'Rice',
          order: 'Lepidoptera: Pyralidae',
          classification: 'Caterpillar-like',
          treatment: 'Clipping the seedlings before transplanting greatly reduces the carryover of eggs from the seedbed to the transplanted fields. However, stem borers are difficult to control with insecticides. After hatching, the larvae are exposed only for a few hours before they penetrate a tiller or enter the plant. Successful control involves repeated foliar applications with spray volumes more than 400 liters/ha.',
          sci_name: 'Scirpophaga incertulas (Walker)',
          eng_name: 'Yellow Stemborer',
          name: 'Yellow Stemborer larva',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/YellowStemborerlarva.jpg',
          image_gallery: [    
            'http://res.cloudinary.com/project-sarai/image/upload/pests/YellowStemborerlarva.jpg',
          ]
       },

        {
          type: 'Pest',
          keywords: [],
          fil_stage_plant_affected: '',
          fil_effect: '',
          fil_part_destroyed: '',
          fil_stage_threatening: '',
          fil_symptoms: '',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment: '',
          fil_name: '',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: 'Adult, larva',
          symptoms: 'Presence of larvae on food plants, presence of pupae in cocoon attached to underside of leaves, and skeletonized leaves by larval feeding.',
          description: 'Egg: White to pale green and shiny, dome-shaped with 28-32 vertical ribs from the micropyle to the base; Larva: About 40 mm wingspan and 15-18 mm long, forewing gold to bronze in ground color and has two silver oval spots that are similar in size; Pupa About 20 mm long, pale green ventrally with a dark brown dorsal stripe, or body entirely brown; Adult: About 40 mm wingspan and 15-18 mm long; forewing gold to bronze in ground color and has two silver oval spots that are similar in size.',
          plant_affected: 'Corn',
          order: 'Lepidoptera: Noctuidae',
          classification: 'Fly-like',
          treatment: '',
          sci_name: 'Chrysodeixis chalcites Esper',
          eng_name: 'Corn Semilooper, Tomato Looper, Green Gardern Looper (larva); Golden Twin Spot (adult)',
          name: 'Corn Semilooper adult',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/CornSemilooperadult.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/CornSemilooperadult.jpg',
          ]
       },

        {
          type: 'Pest',
          keywords: [],
          fil_stage_plant_affected: '',
          fil_effect: '',
          fil_part_destroyed: '',
          fil_stage_threatening: '',
          fil_symptoms: '',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment: '',
          fil_name: '',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: 'Adult, larva',
          symptoms: 'Presence of larvae on food plants, presence of pupae in cocoon attached to underside of leaves, and skeletonized leaves by larval feeding.',
          description: 'Egg: White to pale green and shiny, dome-shaped with 28-32 vertical ribs from the micropyle to the base; Larva: About 40 mm wingspan and 15-18 mm long, forewing gold to bronze in ground color and has two silver oval spots that are similar in size; Pupa About 20 mm long, pale green ventrally with a dark brown dorsal stripe, or body entirely brown; Adult: About 40 mm wingspan and 15-18 mm long; forewing gold to bronze in ground color and has two silver oval spots that are similar in size.',
          plant_affected: 'Corn',
          order: 'Lepidoptera: Noctuidae',
          classification: 'Caterpillar-like',
          treatment: '',
          sci_name: 'Chrysodeixis chalcites Esper',
          eng_name: 'Corn Semilooper, Tomato Looper, Green Gardern Looper (larva); Golden Twin Spot (adult)',
          name: 'Corn Semilooper larva',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/CornSemilooperlarva.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/CornSemilooperlarva.jpg',
          ]
       },

        {
          type: 'Pest',
          keywords: [],
          fil_stage_plant_affected: '',
          fil_effect: '',
          fil_part_destroyed: '',
          fil_stage_threatening: '',
          fil_symptoms: '',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment: '',
          fil_name: '',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: 'Adult',
          symptoms: 'Feeding damage on leaves and in the whorl; boring in the stems, tassels, ears and midribs which can lead to lodging, breaking of tassels, and dropping of ears.',
          description: '',
          plant_affected: 'Corn',
          order: 'Lepidoptera: Crambidae',
          classification: 'Moth-like',
          treatment: '',
          sci_name: 'Ostrinia furnacalis Guenee',
          eng_name: 'Asian/Oriental Cornborer',
          name: 'Asian Cornborer adult',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/AsianCornboreradult.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/AsianCornboreradult.jpg',
          ]
       },

        {
          type: 'Pest',
          keywords: [],
          fil_stage_plant_affected: '',
          fil_effect: '',
          fil_part_destroyed: '',
          fil_stage_threatening: '',
          fil_symptoms: '',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment: '',
          fil_name: '',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: '',
          symptoms: 'Eggs are laid on the silks, larvae invade the cobs and developing grain is consumed. Secondary bacterial infections are common.',
          description: 'Egg: pale green when first deposited, becoming yellowish and then gray with time; shape varies from slightly dome-shaped to a flattened sphere, and measures about 0.5-0.6 mm in diameter and 0.5 mm in height; Larva: Full-grown larvae are about 30-40 mm long; the head is brown and mottled; the prothoracic and supra-anal plates and legs are pale-brown, only claws and spiracles remaining black; the final body segment is elongated; Pupa: mahogany-brown in color, and measures 17 to 22 mm in length and 5.5 mm in width; Adult:  has wingspan of 32-45mm; forewings are usually yellowish brown in color, and often bear a small dark spot centrally; forewing also may bear a broad dark transverse band distally, but the margin of the wing is not darkened; hind wings are creamy white basally and blackish distally, and usually bear a small dark spot centrally.',
          plant_affected: 'Corn',
          order: 'Lepidoptera: Noctuidae',
          classification: 'Moth-like',
          treatment: '',
          sci_name: 'Helicoverpa armigera Hubner',
          eng_name: 'Corn Earworm, Cotton Bollwormm, Tobacco Budworm (larva); Scarce Bordered Straw (adult)',
          name: 'Corn Earworm adult',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/CornEarwormadult.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/CornEarwormadult.jpg',
          ]
       },

        {
          type: 'Pest',
          keywords: [],
          fil_stage_plant_affected: '',
          fil_effect: '',
          fil_part_destroyed: '',
          fil_stage_threatening: '',
          fil_symptoms: '',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment: '',
          fil_name: '',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: '',
          symptoms: 'Eggs are laid on the silks, larvae invade the cobs and developing grain is consumed. Secondary bacterial infections are common.',
          description: 'Egg: pale green when first deposited, becoming yellowish and then gray with time; shape varies from slightly dome-shaped to a flattened sphere, and measures about 0.5-0.6 mm in diameter and 0.5 mm in height; Larva: Full-grown larvae are about 30-40 mm long; the head is brown and mottled; the prothoracic and supra-anal plates and legs are pale-brown, only claws and spiracles remaining black; the final body segment is elongated; Pupa: mahogany-brown in color, and measures 17 to 22 mm in length and 5.5 mm in width; Adult:  has wingspan of 32-45mm; forewings are usually yellowish brown in color, and often bear a small dark spot centrally; forewing also may bear a broad dark transverse band distally, but the margin of the wing is not darkened; hind wings are creamy white basally and blackish distally, and usually bear a small dark spot centrally.',
          plant_affected: 'Corn',
          order: 'Lepidoptera: Noctuidae',
          classification: 'Caterpillar-like',
          treatment: '',
          sci_name: 'Helicoverpa armigera Hubner',
          fil_name: '',
          eng_name: 'Corn Earworm, Cotton Bollwormm, Tobacco Budworm (larva); Scarce Bordered Straw (adult)',
          name: 'Corn Earworm larva',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/CornEarwormlarva.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/CornEarwormlarva.jpg',
          ]
       },

        {
          type: 'Pest',
          keywords: [],
          fil_stage_plant_affected: '',
          fil_effect: '',
          fil_part_destroyed: '',
          fil_stage_threatening: '',
          fil_symptoms: '',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment: '',
          fil_name: '',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: '',
          symptoms: 'Stunting, wilting on the plant and linear lesions on the leaves with wavy edges caused by Stewart\'s Wilt. ',
          description: 'Corn flea beetle is a very tiny (1.8 mm), black, shiny beetles with elongated hind legs, which are used for jumping when disturbed.',
          plant_affected: 'Corn',
          order: 'Coleoptera',
          classification: 'Beetle-like',
          treatment: 'Cut off their food supply by delaying transplanting or planting by a couple weeks if possible. Corn flea beetle feeding may be reduced with the use of insecticidal seed treatments and foliar insecticides.',
          sci_name: 'Chaetocnema pulicaria',
          eng_name: 'Corn Flea Beetle, Clover Flea Beetle',
          name: 'Corn Flea Beetle',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/CornFleaBeetle.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/CornFleaBeetle.jpg',
          ]
       },

        {
          type: 'Pest',
          keywords: [],
          fil_stage_plant_affected: '',
          fil_effect: '',
          fil_part_destroyed: '',
          fil_stage_threatening: '',
          fil_symptoms: '',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment: '',
          fil_name: '',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: '',
          symptoms: 'The leaf of the plant becomes membranous and dry.',
          description: 'Small, metallic blue beetles with a series of black dots on the elytra. It measures 1/4th to 1/5th of an inch in length and 1/8th inch in width.',
          plant_affected: 'Rice',
          order: 'Coleoptera: Chrysomelidae: Hispinae',
          classification: 'Two or one unit body',
          treatment: 'Deep and thorough ploughing of the field and crop rotation will be a great help. It is also possible to pluck the infected leaves in minor infection and uproot the whole plant in case of major infection.',
          sci_name: 'Leptispa Pygmaea',
          eng_name: 'Rice Blue Beetle',
          name: 'Leptispa',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/Leptispa.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/Leptispa.jpg',
          ]
       },

        {
          type: 'Pest',
          keywords: [],
          fil_stage_plant_affected: '',
          fil_effect: '',
          fil_part_destroyed: '',
          fil_stage_threatening: '',
          fil_symptoms: '',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment: '',
          fil_name: '',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: '',
          symptoms: 'There will be increased moisture levels and heating on the surface due to the weevil\'s respiration. Seeds with round holes are formed by exiting adults.',
          description: 'A small weevil that is usually 1/10 inch (2 to 3 mm) in size and stout in appearance. It is reddish-brown to black in color with four light yellow or reddish spots on the corners of the elytra. The snout is long (1 mm), almost 1/3 of the total length.',
          plant_affected: 'Rice',
          order: 'Coleoptera : Curculionidae',
          classification: 'Beetle-like',
          treatment: 'Control of these insects by seed treatments is reliant on either the adults, in the case of cypermethrin, or larvae, when triflumuron is used, feeding on the treated grain and hence the insecticide. When feeding on treated grain, insecticide is ingested and the insect is killed.',
          sci_name: 'Sitophilus Oryzae',
          eng_name: 'Rice Weevil',
          name: 'Rice Weevil',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/RiceWeevil.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/RiceWeevil.jpg',
          ]
       },

        {
          type: 'Pest',
          keywords: [],
          fil_stage_plant_affected: '',
          fil_effect: '',
          fil_part_destroyed: '',
          fil_stage_threatening: '',
          fil_symptoms: '',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment: '',
          fil_name: '',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: '',
          symptoms: 'Scraping of the upper surface of the leaf blade leaving only the lower epidermis as white streaks parallel to the midrib. Tunneling of larvae through leaf tissue causes irregular translucent white patches that are parallel to the leaf veins.',
          description: 'It is a small bluish-black beetle fringed with numerous short spines over the body.',
          plant_affected: 'Rice',
          order: 'Coleoptera: Chrysomeloidea: Chrysomelidae',
          classification: 'Two or one unit body',
          treatment: 'A cultural control method that is recommended for the rice hispa is to avoid over fertilizing the field. Close plant spacing results in greater leaf densities that can tolerate higher hispa numbers. To prevent egg laying of the pests, the shoot tips can be cut. Clipping and burying shoots in the mud can reduce grub populations by 75−92%.',
          sci_name: 'Dicladispa Armigera',
          eng_name: 'Rice Hispa, Spiny Beetle',
          name: 'Rice Hispa',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/RiceHispa.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/RiceHispa.jpg',
          ]
       },

        {
          type: 'Pest',
          keywords: [],
          fil_stage_plant_affected: '',
          fil_effect: '',
          fil_part_destroyed: '',
          fil_stage_threatening: '',
          fil_symptoms: '',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment: '',
          fil_name: '',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: '',
          symptoms: 'Because white grubs feed on roots, damage is usually first noticed during dry periods when injured plants cannot get the water they need. Turf often dies in large, irregular-shaped patches.',
          description: 'White grubs are the larval stage of certain beetles, called scarabs. They are fairly large, creme-colored larvae with 3 distinct pairs of legs and an amber-colored head.',
          plant_affected: 'Rice, Corn',
          order: 'Coleoptera: Scarabaeidae',
          classification: 'Maggot',
          treatment: 'There are a number of natural enemies including predators such as wasps, beetles and ants that control white grubs. Two biological control products that are presently available to the consumer are milky spore disease and parasitic nematodes.',
          sci_name: 'Phyllophaga',
          eng_name: 'White Grub, Scarab Larvae',
          name: 'White Grub Larva',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/WhiteGrubLarva.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/WhiteGrubLarva.jpg',
          ]
       },

        //JASON
        {
          type: 'Pest',
          keywords: [],
          fil_stage_plant_affected: '',
          fil_effect: '',
          fil_part_destroyed: '',
          fil_stage_threatening: '',
          fil_symptoms: '',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment: '',
          fil_name: '',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: '',
          symptoms: 'Irregular to longitudinal exit holes on leaves. Damage on stems, seeds, roots, and on young panicles of the rice plant. Dreadheart.',
          description: 'Can grow up to an inch long, and are black and brown. They have large hind legs and two cerci (spiky things coming out of the back of their abdomens).',
          plant_affected: 'Rice',
          order: 'Orthoptera',
          classification: 'Fly-like',
          treatment: 'There are no known control practices for this insect.',
          sci_name: 'Euscyrtus Concinnus',
          eng_name: 'Cricket, Gryllids',
          name: 'Field Cricket',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/FieldCricket.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/FieldCricket.jpg',
          ]
       },

        {
          type: 'Pest',
          keywords: [],
          fil_stage_plant_affected: '',
          fil_effect: '',
          fil_part_destroyed: '',
          fil_stage_threatening: '',
          fil_symptoms: '',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment: '',
          fil_name: '',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: '',
          symptoms: 'Chewed edges of leaves, flowers or buds, holes in leaves, flowers or buds, gray scar tissue on fruit.',
          description: 'They range in size from as small as 5mm to as large as 130mm. They are usually green, sometimes with brown markings. They have a thick body, usually taller than it is wide, and long thing legs. The hind legs are longer than the front or middle legs, and are often used for jumping. On the head they have chewing mouthparts and long thin antennae that reach back at least to the abdomen of the insect.',
          plant_affected: 'Rice, Corn',
          order: 'Orthoptera',
          classification: 'Fly-like',
          treatment: 'Remove long grass around affected plants to eliminate hiding places. Encourage biological control by attracting their predators to the garden – bats, birds and snakes.',
          sci_name: 'Tettigoniidae sp.',
          eng_name: 'Katydid, Bush Cricket, Long-horned Grasshopper',
          name: 'Katydid',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/Katydid.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/Katydid.jpg',
          ]
       },

        {
          type: 'Pest',
          keywords: [],
          fil_stage_plant_affected: '',
          fil_effect: '',
          fil_part_destroyed: '',
          fil_stage_threatening: '',
          fil_symptoms: '',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment: '',
          fil_name: '',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: '',
          symptoms: 'Both young and adult stages feed upon the leaves and shoots of paddy. They also cut off the ear heads.',
          description: 'The adults are medium sized insects, uniformly greenish and practically without any spot. They measures about 5 cms in length.',
          plant_affected: 'Rice',
          order: 'Orthoptera',
          classification: 'Two or one unit body',
          treatment: 'Dusting the crop with to 10% BHC or 5% Aldrin is very much effective. Poison baiting is useful both against nymphs and adults. The egg masses are destroyed by ploughing the field and exposing them to birds.',
          sci_name: 'Oxya hyla intricata ',
          eng_name: 'Rice Grasshopper, Short-horned Grasshopper',
          name: 'Short-horned Grasshopper',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/Short-hornedGrasshopper.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/Short-hornedGrasshopper.jpg',
          ]
       },

        {
          type: 'Pest',
          keywords: [],
          fil_stage_plant_affected: '',
          fil_effect: '',
          fil_part_destroyed: '',
          fil_stage_threatening: '',
          fil_symptoms: '',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment: '',
          fil_name: '',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: '',
          symptoms: 'Cut out areas on leaves and cut-off panicles. Presence of yellow and brown nymphs and adults feeding on rice foliage.',
          description: 'Large size and absence of prosternal tubercule. Other distinctive characteristics concern the wings: smoky at the apex (radial sector) and black veins in the anal sector.',
          plant_affected: 'Rice',
          order: 'Orthoptera: AcrididaeLarge',
          classification: 'Two or one unit body',
          treatment: 'Flood the stubbles, shave bunds, sweep along the bunds and pick adults directly from the foliage at night when they are sluggish. Use poison baits from salt water and rice bran. Use foliar sprays to control grashoppers in rice fields. Granules are not effective.',
          sci_name: 'Locusta migratoria manilensis',
          eng_name: 'Oriental Migratory Locust, Asiatic Migratory Locust',
          name: 'Oriental Migratory Locust',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/OrientalMigratoryLocust.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/OrientalMigratoryLocust.jpg',
          ]
       },

        {
          type: 'Pest',
          keywords: [],
          fil_stage_plant_affected: '',
          fil_effect: '',
          fil_part_destroyed: '',
          fil_stage_threatening: '',
          fil_symptoms: '',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment: '',
          fil_name: '',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: '',
          symptoms: 'The crickets usually damage seedlings, feeding aboveground on foliage or stem tissue, and belowground on roots and tubers. Girdling of the stems of seedling plants at the soil surface is a common form of injury, though young plants are sometimes severed and pulled belowground to be consumed. Additional injury to small plants is caused by soil surface tunneling, which may dislodge seedlings or cause them to desiccate.',
          description: 'Mole crickets are cylindrical-bodied insects about 3–5 centimetres (1.2–2.0 in) long, with small eyes and shovel-like forelimbs highly developed for burrowing.',
          plant_affected: 'Rice',
          order: 'Orthoptera',
          classification: 'Two or one unit body',
          treatment: 'Maintain standing water. Encourage biological control agents: sphecid wasp, carabid beetle, nematodes, and fungus; mole crickets eat each other when they are together because of their cannibalistic behavior.',
          sci_name: 'Gryllotalpa orientalis',
          eng_name: 'Short-winged Mole Cricket, Southern Mole Cricket, Tawny Mole Cricket',
          name: 'Mole Cricket',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/MoleCricket.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/MoleCricket.jpg',
          ]
       },

        //JV
        {
          type: 'Pest',
          keywords: [],
          fil_stage_plant_affected: '',
          fil_effect:'Sinisipsip ng plant hopper ang katas ng palay kaya nagiging chlorotic (maputla o naninilaw) ang mga dahon nito. Nagsisimula ito sa tip ng dahon patungo sa gitnang bahagi ng dahon hanggang sa tuluyan itong mamatay, ang kondisyong ito ang tinatawag na hopperburn. Sa umpisa, mukha lang may patse-patse sa palayan, ngunit mabilis itong dumami sa pamamagitan ng paglipat-lipat nito mula sa isang palay patungo sa kabila. Ang brown plant hopper ay maaaring mayroon dalang rice ragged stunt at grassy stunt virus.',
          fil_part_destroyed:'Katawan',
          fil_stage_threatening:'Nimpa hanggang magulang na insekto',
          fil_symptoms:'May hopperburn ang palayan. Tingnan kung may sintomas ng rice ragged stunt at grassy stunt virus.',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment:'Kultural na pamamaraan: Mag-crop rotation. Gumamit ng ng mga legumes bilang pamalit sa palay. Split application ng Nitrogen fertilizer at pagtanggal ng tubig sa palayan sa loob ng 3-4 na araw upang mabasawasan ang dami ng plant hopper.; Natural na pamamaraan: Kumakain ng itlog the brown leafhopper ang mga parasitoids gaya ng eulophid wasps (Tetrastichus formosus Timberlake), mymarid (Anagru soptabilis Perkins), trichogrammatid (Paracentrobia andoi Ishii). Kumakain naman ng plant hopper ang dryinid wasp (Echthrodelphax bicolor), Elenchus yasumatsui, beetle (Ophioneaiskii Habu); fungal pathogens gaya ng Hirsutella citriformis at Beauveria bassiana; nematode parasite Hexamermis sp.',
          fil_name: 'Kayumangging hanip, Kayumangging ngusong kabayo',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: '',
          symptoms: 'Hopperburn or yellowing, browning and drying of plant, ovipositional marks exposing the plant to fungal and bacterial infections, presence of honeydew and sooty molds in the bases of areas infected, plants with ragged stunt or grassy stunt virus disease.',
          description: 'Adults occur in macropterous (long-winged) and brachypterous (short-winged) forms. The macropterous form is about 3.5 – 4.5 mm in length. The body is brown, and the wings are transparent, with very conspicuous veins. Young nymphs are white, but they gradually become darker in older instars.',
          plant_affected: 'Rice',
          order: 'Hemiptera',
          classification: 'Fly-like',
          treatment: ' Flood the seedbed, for a day, so that only the tips of seedlings are exposed will control BHP. Sweep small seedbeds with a net to remove some BPH (but not eggs), particularly from dry seed beds. At high BPH densities, sweeping will not remove sufficient numbers of BPH from the base of the plant.',
          sci_name: 'Nilaparvata lugens',
          eng_name: 'Brown Planthopper, Planthopper',
          name: 'Brown Planthopper',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/BrownPlanthopper.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/BrownPlanthopper.jpg',
          ]
       },

        {
          type: 'Pest',
          keywords: [],
          fil_stage_plant_affected: '',
          fil_effect:'Kapag hindi masyadong marami ang green leaf hopper sa inyong palayan, hindi masyado pansin ang epekto nito. Madaling lumawak ang epekto ng green leaf hopper dahil kaya nitong lumipat patungo sa iba pang palay. Pinapasok ng leaf hopper ang malakarayom na nguso nito sa leaf tissue, sa paraang ito maaring masalin ng leaf hopper ang virus na dala nito. Ang mga palayan na may green leaf hopper ay maaaring mayroon ding tungro o yellow-dwarf disease. Ito ay may kakaunting suwi at naninilaw hanggang sa matuyo ang apektadong palay (dahil sa tungro).',
          fil_part_destroyed:'Dahon',
          fil_stage_threatening:'Nimpa hanggang magulang na insekto',
          fil_symptoms:'Bansot at kakaunti ang suwi. Ang mga apektadongpalay ay naninilaw hanggang sa ito matuyo',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment:'Natural na pamamaraan: Ang mga itlog ng green leaf hopper ay kinakain ng mymarid wasps (Anagrus soptabilis Perkins and Gonatocerus sp.), trichogrammatid wasps (Paraentrobia andoi Ishii). Ang malalaki naming mga green leaf hopper ay kinakain ng dryinid wasp (Echthrodelphax fairchildii Perkins), strepsipteran (Halictophagus munroei Hirashima and Kifune), pipunculid flies (Pipunculus mutillatus Loew and Tomosvaryella oryzaetora Koizumi)',
          fil_name: 'Ngusong Kabayo',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: '',
          symptoms: 'Stunted plants and reduced vigor, reduced number of productive tillers, withering or complete plant drying.',
          description: 'The thickened part of the antennae is very short and ends with a bristle (arista). Two ocelli (simple eyes) are present on the top or front of the head. The tarsi are made of three segments. The femora are at front with, at most, weak spines. The hind tibiae have one or more distinct keels, with a row of movable spines on each, sometimes on enlarged bases.',
          plant_affected: 'Rice',
          order: 'Hemiptera',
          classification: 'Fly-like',
          treatment: 'Reduce the number of rice crops to two per year and synchronized crop establishment across farms reduces leafhoppers and other insect vectors. Transplant older seedlings (>3 weeks) to reduce viral disease susceptibility transmitted by leafhoppers. Plant early within a given planting period, particularly in the dry season to reduce the risk of insect-vector disease.',
          sci_name: 'Nephotettix malayanus, Nephotettix virescens, Nephotettix nigropictus Stal',
          eng_name: 'Green Leafhopper, Leafhopper, Hopper',
          name: 'Green Leafhopper',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/GreenLeafhopper.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/GreenLeafhopper.jpg',
          ]
       }, 

        {
          type: 'Pest',
          keywords: [],
          fil_stage_plant_affected: '',
          fil_effect: '',
          fil_part_destroyed: '',
          fil_stage_threatening: '',
          fil_symptoms: '',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment: '',
          fil_name: '',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: '',
          symptoms: 'Drying of leaf tips, whole leaves become orange and leaf margins become orange and curl.',
          description: 'Zigzag Leafhopper are plant-sucking pest that are usually, brown to white. They are easily recognized by the striped markings on its wings.',
          plant_affected: 'Rice',
          order: 'Hemiptera',
          classification: 'Two or one unit body',
          treatment: 'There are parasites and predators that help regulate the population of this insect. Mymarid wasps and the mirid bugs prey on the eggs. Dryinid wasps and pipunculid flies parasitize both the adults and the nymphs and spiders eat the adults.',
          sci_name: 'Recilia dorsalis',
          eng_name: 'Zigzag Leafhopper',
          name: 'Zigzag Leafhopper',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/ZigzagLeafhopper.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/ZigzagLeafhopper.jpg',
          ]
       },

        {
          type: 'Pest',
          keywords: [],
          fil_stage_plant_affected: '',
          fil_effect: '',
          fil_part_destroyed: '',
          fil_stage_threatening: '',
          fil_symptoms: '',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment: '',
          fil_name: '',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: '',
          symptoms: 'Heavy infestation causes stunted growth, formation of white heads, half-filled or empty grains, and browning of leaves or bug burn. ',
          description: 'It is white and tinged with green and pink and turns shiny brownish black to shiny black as it matures. It is 8-9 mm long. The nymphs are brown or yellow in color. Black spots are visible on their bodies. Different nymphal instars vary in sizes. Six nymphal instars are completed in 29-35 days.',
          plant_affected: 'Rice, Corn',
          order: 'Hemiptera',
          classification: 'Two or one unit body',
          treatment: 'Maintain a clean field by removing the weeds and drying the rice field during plowing. Plant rice varieties of the same maturity date to break the insect’s cycle. Use of mercury bulbs as light traps for egg-laying adults, light trapping of insects should start 5 days before and after the full moon.',
          sci_name: 'Scotinophara coarctata',
          eng_name: 'Black Bug, Common Black Bug',
          name: 'Black Bug',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/BlackBug.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/BlackBug.jpg',
          ]
       },

        {
          type: 'Pest',
          keywords: [],
          fil_stage_plant_affected: '',
          fil_effect: '',
          fil_part_destroyed: '',
          fil_stage_threatening: '',
          fil_symptoms: '',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment: '',
          fil_name: '',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: '',
          symptoms: 'Formation of a hollow cavity or tubular gall at the base of the infested tiller. The gall formed is a silvery white hollow tube, 1 cm wide and 10−30 cm long, affected tiller inhibits growth of leaves and fails to produce panicles, deformed, wilted, and rolled leaf, elongation of leaf sheaths, also called onion leaf or silvershoot and plant stunting',
          description: 'Rice Gall Midge are very fragile small insects usually only 2–3 mm in length; many are less than 1 mm long. They are characterised by hairy wings, unusual in the order Diptera, and have long antennae.',
          plant_affected: 'Rice',
          order: 'Hemiptera',
          classification: 'Two or one unit body',
          treatment: 'Plow ratoon of the previous crop and remove all off-season plant hosts. Encourage biological control agents: platygasterid, eupelmid, and pteromalid wasps (parasitize the larvae), phytoseiid mites (feed on eggs), spiders (feed on adults).',
          sci_name: 'Orseolia oryzae',
          eng_name: 'Gall Midge, Rice Gall Midge, Asian Gall Midge',
          name: 'Rice Gall Midge',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/RiceGallMidge.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/RiceGallMidge.jpg',
          ]
       },

        {
          type: 'Pest',
          keywords: [],
          fil_stage_plant_affected: '',
          fil_effect: '',
          fil_part_destroyed: '',
          fil_stage_threatening: '',
          fil_symptoms: '',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment: '',
          fil_name: '',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: '',
          symptoms: 'Wilting, plant stunting, yellowish curled leaves and damaged spots or chakdhora or soorai disease.',
          description: 'Small sap-sucking insect that is observed most frequently for its ovoid, sluggish mature female, about 1 cm (0.4 inch) long.',
          plant_affected: 'Rice',
          order: 'Hemiptera',
          classification: 'Two or one unit body',
          treatment: 'Encourage biological control agents: small encyrtid wasps, spiders, chloropid fly, drosophilid, and lady beetles.',
          sci_name: 'Brevennia rehi',
          eng_name: 'Rice Mealy Bug, Mealy Bug',
          name: 'Rice Mealy Bug',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/RiceMealyBug.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/RiceMealyBug.jpg',
          ]
       },

        {
          type: 'Pest',
          keywords: [],
          fil_stage_plant_affected: '',
          fil_effect:'Sa soft dough stage, sinisipsip ng rice bugs ang mga butil kaya ito nagkakaroon ng sira o kaya pagkawala ng laman ng mga butil',
          fil_part_destroyed: '',
          fil_stage_threatening:'Nimpa hanggang magulang na insekto',
          fil_symptoms:'Ang mga butil ay may paltak na itim, wala sa tamang hugis o kaya naman ay walang laman. May mabahong amoy na mapapansin sa palayan. Mapapansin ang maliliit nitong mga itlog na kulay kayumanggi na parang nahahanay sa dahon ng palay.',
          fil_description:'Payat na pahaba, kulay kayumanggi',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment:'Kultural na pamamaraan: Pagtatanim kasabay ang mga karatig na palayan. Bunutin ang mga damo dahil nagsisilbi itong alternatibong tirahan ng rice bug. Pantay na paglalagay ng pataba at tubig sa buong palayan upang sabay-sabay ang paglaki nito. Gumamit ng barayti na maresistensya sa Rice Bug (need help from expert). Upang masira ang life cycle ng Rice Bug magtanim ng palay na sabay-sabay ang paglaki.;Natural na pamamaraan: Iwasang patayin ang mga natural nitong kaaway tulad ng (need help from CPC group)',
          fil_name: 'Atangya',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: '',
          symptoms: 'Small or shriveled grains, deformed or spotty grains, empty grains, erect panicles and foul odor',
          description: 'Leptocorisa acuta adults are long (14-17 mm) and slender (3-4 mm wide). They are a light yellow-green to yellow-brown color. The head is broad, often similar in length and width to the pronotum (upper surface of the first plate on the thorax) and the scutellum (triangular shaped plate on the thorax, posterior to the pronotum).',
          plant_affected: 'Rice',
          order: 'Hemiptera',
          classification: 'Two or one unit body',
          treatment: 'Capturing rice bugs, in the early morning or late afternoon, by net can be effective at low rice bug densities, though labor intensive. Encourage biological control agents: Some wasps, grasshoppers and spiders attack rice bugs or rice bug eggs. Indiscriminate insecticide use disrupts biological control, resulting in pest resurgence.',
          sci_name: 'Leptocorisa Varicornis, Leptocorisa oratorius Fab., Leptocorisa acuta Thunberg',
          eng_name: 'Rice Paddy Bug, Rice Bug, Paddy Bug',
          name: 'Rice Paddy Bug',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/RicePaddyBug.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/RicePaddyBug.jpg',
          ]
       },

        {
          type: 'Pest',
          keywords: [],
          fil_stage_plant_affected: '',
          fil_effect: '',
          fil_part_destroyed: '',
          fil_stage_threatening: '',
          fil_symptoms: '',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment: '',
          fil_name: '',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: '',
          symptoms: 'If root aphid infestation is very severe, stunting and leaf yellowing may occur. The stunting can be compared with the damage caused by root grubs.',
          description: 'Fully grown aphids are 1.2 - 2.2 mm long and dark green to grey-brown in colour. Nymphs are lighter in colour with a reddish area at the tip of the abdomen.',
          plant_affected: 'Rice',
          order: 'Hemiptera',
          classification: 'Two or one unit body',
          treatment: 'Encourage biological control agents or natural enemies that can manage the population of rice root aphids. Both the nymphs and adults are parasitized by a small braconid wasp and a mermithid nematode and are preyed upon by lady beetles.',
          sci_name: 'Tetraneura nigriabdominalis',
          eng_name: 'Rice Root Aphid, Aphid',
          name: 'Rice Root Aphid',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/RiceRootAphid.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/RiceRootAphid.jpg',
          ]
       },

        {
          type: 'Pest',
          keywords: [],
          fil_stage_plant_affected: 'Mula transplanting hanggang sa vegetative na stage.',
          fil_effect:'Kinakain ng rice whorl maggot ang mga umuusbong pa lang na mga dahon. Ito ang nagiging dahilan ng pagkakaroon ng mga sugat sa mga dahon. Nababansot at naninilaw ang mga dahon at nagkakaroon ng mga butas-butas. Madaling nasisira ang mga dahon sa hampas ng hangin.',
          fil_part_destroyed: 'Dahon',
          fil_stage_threatening: 'Larva/Maggot',
          fil_symptoms: 'Pagkakaroon ng pa-isa-isang pahaba na maputing itlog na nakadikit sa palay. Pagkakaroon ng kulay malagatas (cream) na uod na nagiging madilaw kapag lumaki. Kinakain nito ang pausbong pa lamang na dahon. Pagkakaroon ng manipis at mala-papel na patse sa dahon. Ang mga batang dahon ay bansot at naninilaw. Madaling nasisira ang mga dahon sa hampas ng hangin.',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment:'Kultural na pamamaraan: Gumamit ng barayti na may resistensya sa Rice Whorl Maggot. Plant spacing.; Natural na pamamaraan: Iwasang patayin ang mga natural nitong kaaway gaya ng __________ (need help from CPC); Kemikal na pamamaraan: Hindi nirerekomenda ang paggamit ng kemikal sa Rice Whorl Maggot dahil ang pinsala nito ay hanggang early tillering stage lamang.',
          fil_name: '',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: '',
          symptoms: '',
          description: '',
          plant_affected: 'Rice',
          order: '',
          classification: 'Maggot',
          treatment: '',
          sci_name: 'Hydrellia philippina (Ferino)',
          eng_name: '',
          name: 'Rice Whorl Maggot',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/RiceWhorlMaggot.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/RiceWhorlMaggot.jpg',
          ] 
       },

        {
          type: 'Pest',
          keywords: [],
          fil_stage_plant_affected:'Aksip',
          fil_effect:'Sa vegetative stage, nagdudulot ng dead tillers or deadhearts ang stem borer. Pagkakaroon ng uban sa reproductive stage. Pagkakaroon ng butas sa mga suwi at puno. Namamatay ang puno ng palay kung saan ang pinaka-ubod nito ay natutuyo. Kapansin-pansin din na ito ay madaling bunutin.',
          fil_part_destroyed:'katawan, suwi at uhay',
          fil_stage_threatening:'Larva',
          fil_symptoms:'Mayroong mga dead tillers o deadhearts sa vegetative stage. Madali itong bunutin. Pagkakaroon ng uban.',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment:'Kultural na pamamaraan: Gumamit ng variety na mas mabilis ang paglaki at hindi masyadong tumataas. Sabay-sabay na pagtatanim ng mga karatig na palayan. Gumamit ng barayti na maresistensya sa stem borer. Kung nagkaroon ng paglaganap ng stem borer sa palayan, tubigan pagka-ani upang matanggal ang mga itlog. Para mawala ang mga stem borer sa ibabang bahagi ng pananim, anihin ang palay sa hanggang sa ibabang bahagi.; Natural na pamamaraan: Kinakain ng mga Trichogramma, Telenomus, and Tetratichus (wasps) ang mga itlog ng stemborer. Kinakain rin ng kagaykay (kuliglig) (Metioche vittaticollis and Anaxipha longipennis) grasshopper (Conocephalus longipennis), mirid (Cytorhinus lividipennis) ang mga malalaking stem borer.',
          fil_name: 'Aksip',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: 'Adult, larva',
          symptoms: '',
          description: '',
          plant_affected: 'Rice',
          order: '',
          classification: 'Moth-like',
          treatment: '',
          sci_name: 'Chilo suppressalis Walker',
          eng_name: '',
          name:'Striped Stemborer',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/StripedStemborer.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/StripedStemborer.jpg',
          ]
       },

        {
          type: 'Pest',
          keywords: [],
          fil_stage_plant_affected:'Aksip',
          fil_effect:'Sa vegetative stage, nagdudulot ng dead tillers or deadhearts ang stem borer. Pagkakaroon ng uban sa reproductive stage. Pagkakaroon ng butas sa mga suwi at puno. Namamatay ang puno ng palay kung saan ang pinaka-ubod nito ay natutuyo. Kapansin-pansin din na ito ay madaling bunutin.',
          fil_part_destroyed:'katawan, suwi at uhay',
          fil_stage_threatening:'Larva',
          fil_symptoms:'Mayroong mga dead tillers o deadhearts sa vegetative stage. Madali itong bunutin. Pagkakaroon ng uban.',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment:'Kultural na pamamaraan: Gumamit ng variety na mas mabilis ang paglaki at hindi masyadong tumataas. Sabay-sabay na pagtatanim ng mga karatig na palayan. Gumamit ng barayti na maresistensya sa stem borer. Kung nagkaroon ng paglaganap ng stem borer sa palayan, tubigan pagka-ani upang matanggal ang mga itlog. Para mawala ang mga stem borer sa ibabang bahagi ng pananim, anihin ang palay sa hanggang sa ibabang bahagi.; Natural na pamamaraan: Kinakain ng mga Trichogramma, Telenomus, and Tetratichus (wasps) ang mga itlog ng stemborer. Kinakain rin ng kagaykay (kuliglig) (Metioche vittaticollis and Anaxipha longipennis) grasshopper (Conocephalus longipennis), mirid (Cytorhinus lividipennis) ang mga malalaking stem borer.',
          fil_name: 'Aksip',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: 'Adult, larva',
          symptoms: '',
          description: '',
          plant_affected: 'Rice',
          order: '',
          classification: 'Moth-like',
          treatment: '',
          sci_name: 'Sesamia inferens Walker',
          eng_name: '',
          name:'Pink Stemborer',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/PinkStemborer.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/PinkStemborer.jpg',
          ]
       },

        {
          type: 'Pest',
          keywords: [],
          fil_stage_plant_affected:'Namumulaklak',
          fil_effect:'Dahil ang apektado ng pesteng ito ay ang mismong prutas, bumababa ang produksyon sa mga lugar na mayroong Thrips. Nababawasan ang mga prutas na maaaring ibenta.',
          fil_part_destroyed:'Dahon, Bunga',
          fil_stage_threatening:'Adult',
          fil_symptoms:'Ang mga dahon ay nakatupi o nabibilog habang ang mga balat ng mga prutas ay hindi kagandahan',
          fil_description: 'Ang katawan ng mga babaeng adult ay kulay kayumanggi habang ang kanilang mga paa at antena ay kulay dilaw. Ang kanilang mga antena ay may pitong hati. Malapad ang kanilang mga ulo. Parehas lamang ang itsura ng babae at lalaking adult ngunit mas maliit ang mga lalaking adult at mas light ang kulay ng kanilang mga katawan at paa.',
          fil_plant_affected: 'Saging',
          fil_classification: '',
          fil_treatment:'Dahil maliliit ang mga Thrips, kakaunti lamang ang iba pang insekto na maaaring kumain sa kanila dahil maliliit na insekto lamang din ang maaaring pumasok sa parte ng halaman kung saan tumatago ang mga Thrips. Ang mga insekto na maaaring makapigil sa pagdami ng mga Thrips ay ang mga insekto na ang kinakain lamang ay mga itlog at larva. Maaari namang mapuksa ang mga Thrips sa pamamagitan ng mga insecticides. Beauveria bassiano o kaya naman Verticillium lecanii ang dalawa sa mga insecticides na maaaring magamit na nabibili sa merkado o kaya naman maaaring gawin gamit ang iilang uri ng sabon.',
          fil_name: 'Thrips',
          stage_plant_affected: 'Flowering',
          effect: 'Although the most important damage in economic terms is usually to the fruits of bananas, C. signipennis is also known to cause leaf-rolling damage to decorative plants such as Anthurium and Strelitzia.',
          part_destroyed: 'Leaf, Fruit',
          stage_threatening: 'Adult',
          symptoms: 'Leaves are rolled or folded while fruits have malformed skin',
          description: 'Female macropterous; body colour brown, legs yellowish, antennal segment III yellow; fore wing brown with base paler. Antennae 7-segmented (rarely with 8 segments), III & IV slightly constricted at apex with short forked sensorium; segment VII short. Head wider than long, with 2 pairs of ocellar setae; pair III stout and arising just outside anterior margins of ocellar triangle; postocular setae pairs I & III shorter than ocellar setae pair III, pair II very small. Pronotum with 2 pairs of long posteroangular setae, posterior margin with 3 pairs of setae. Mesonotum with no lines of sculpture around anterior campaniform sensilla. Metanotum with lines of sculpture longitudinal medially, but transverse at anterior; median setae arising at anterior margin, campaniform sensilla present. Fore wing first vein with 3 setae on distal half, second vein with about 14 closely set setae; clavus with 5 marginal setae, the subapical seta longer than the apical seta. Tergite II with 4 lateral marginal setae; tergites V–VIII with ctenidia present laterally, on VIII posteromesad to spiracles; posterior margin of VIII with comb complete medially but microtrichia small and irregular and sometimes arising in groups; pleurotergites without discal setae. Sternite II with 2 pairs of marginal setae, III–VII with 3 pairs, median pair on VII arising in front of margin; sternite II with 1 to 4 discal setae, III–VII with discal setae varying in number from 6 to 14 in a regular transverse row. Male similar to female in structure, but smaller and paler; tergite VIII with no marginal comb; tergite IX with median S1 setae longer than S2 and arising closer to S2 than to each other; sternites III–VII with transverse pore plate anterior to row of about 8 discal setae.',
          plant_affected: 'Banana',
          order: 'Thysanoptera',
          classification: 'Two or one unit body',
          treatment: 'Due to their small sizes and high rates of reproduction, thrips are difficult to control using classical biological control. All predators must be small and slender enough to penetrate the crevices where thrips hide while feeding, and then prey extensively on eggs and larvae. Only two families of parasitoid Hymenoptera are known to parasitize eggs and larvae, the Eulophidae and the Trichogrammatidae. Other biocontrol agents of adults and larvae include aphid wasps, anthocorid bugs of genus Orius, and phytoseiid mites. For this reason, many growers are occasionally forced to make limited use of pesticides to control thrips populations in the field and in greenhouses. Another effective strategy for pest thrips are biological insecticides, including Beauveria bassiana or Verticillium lecanii. These demonstrate a clear effect on eggs, larvae and adults of thrips. Insecticidal soap spray is effective against thrips. It is commercially available or can be made of certain types of household soap. Scientists in Japan report that significant reductions in larva and adult melon thripes occur when plants are illuminated with red light.',
          sci_name: 'Chaetanaphothrips signipennis Thrips florum',
          eng_name: 'Flower Thrips',
          name:'Thrips',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/Thrips.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/Thrips.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/Thrips2.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/Thrips3.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/Thrips4.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/Thrips5.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/Thrips6.jpg',
          ]
       },
       
       {
          type: 'Pest',
          keywords: [],
          fil_stage_plant_affected:'Pagpuputol',
          fil_effect:'Isa sa mga pangunahing peste ng saging ang banana root borer. Lubos na nasisira nito ang kahit anong uri ng saging. Maaaring maubos ang mga pananim kung hindi mapatay ang mga banana root borer. Mas pinupuntahan nito ang mga naputol nang mga tangkay ng saging o kaya naman ang mga pinagputulan ng mga tangkay.',
          fil_part_destroyed:'Ugat, Tangkay',
          fil_stage_threatening:'Adult',
          fil_symptoms:'Nagsisimula ang mga banana root borer sa ilalim ng mga mamamatay nang dahon. Binibilog ng mga larva nito ang mga dahon hanggang sa makapasok ito sa loob ng tangkay. Maaaring maging kasing haba ng binilog na dahon ang mismong tangkay at ang buong ito ay sisirain ng mga banana root borer.',
          fil_description: 'Ang katawan ng mga adult ay sobrang kayumanggi hanggang sa nag-aabong itim, makintab, at nasa labing-isang milimetro (11 mm) ang haba. Makapit ang kanilang katawan dahil sa kanilang mga hook-like extensions na maaaring maikumpara sa mga paa ng salagubang. Ang mga larva naman nito ay puti ang katawan habang ang kanilang mga ulo ay kayumangging may pagkapula.',
          fil_plant_affected: 'Saging',
          fil_classification: '',
          fil_treatment:'Ang mga adult ay madaling mapukaw ng mga bagong putol na tangkay kaya naman maaari silang mapatay sa pamamagitan ng pag gamit ng mga pinutol na sanga ng puno bilang trap. Maaari rin namang gumamit ng insecticides kapag mas rumami pa ang bilang nila sa labing-lima hanggang bente.',
          fil_name: 'Banana Root Borer Adult',
          stage_plant_affected: 'Sucker appearance',
          effect: 'The banana root borer is a major pest of banana and Manilla hemp (abaca). It infests and seriously damages all varieties of banana and plants belonging to the genus Musa. Substantial losses can result if this pest is not controlled. Although it will attack all parts of banana suckers (keikis) and established plants, it prefers decaying banana corm material. Spent stems (cut or left standing), residual corms left after the stem has been cut, underground stubs of corm tissue left after de-suckering, uprooted suckers or stems, and any corm tissues that are large enough to dry slowly are good targets for banana root borer attack',
          part_destroyed: 'Root, stem',
          stage_threatening: 'Adult',
          symptoms: 'The infestation by C. sordidus begins at the base of the dying outermost leaf-sheath and in injured tissues at the lower part of the pseudostem. Initially the young larvae make several longitudinal tunnels in the surface tissue until they are able to penetrate to adjacent inner leaf-sheaths; the larvae then bore into the pseudostem base and rhizome (in bananas, also into the base of suckers and into roots). Larval tunnels may run for the entire length of fallen pseudostems',
          description: 'Adult: The adult root borer is dark brown to grey black, shining, about 11 mm long. It is similar in general appearance to the billbugs (Sphenophorus), but lacks the depressions on the pronotum. All tibiae are armed with hook-like extensions which enable the beetle to hold tightly to plant tissue. Larva: The larva is typical of the root borer subfamily Calendrinae, the body white and the head capsule dark reddish brown. The last two abdominal segments are modified into a plate-like structure giving a "chopped off" appearance in lateral view. The eighth abdominal segment bears a large elongate spiracle, but all other abdominal spiracles are minute and indistinct. Pupa: The pupa is also typical of the subfamily Calendrinae, the beak being very irregularly margined with numerous transverse depressions.',
          plant_affected: 'Banana',
          order: 'Coleoptera',
          classification: 'Beetle-like',
          treatment: 'Adults are attracted to freshly cut pseudostems (trunks) and corms, and population estimates can easily be made using traps consisting of these plant parts. Two trapping methods are used in Central and South America banana populations. The split-log trap uses fresh banana pseudostems cut into 1- to 1 1/2-foot lengths. The pseudostem logs are then split lengthwise through the center, and the halves are placed with the split surfaces on the soil at a number of locations in the field. The stump trap uses recently harvested plants. Trunks are cut about a foot from ground level. A piece of the remaining trunk is removed by making a second cut at a 30- to 45-degree angle about 6 inches from the ground. The resulting piece of trunk is placed back on the stump. Adult weevils are attracted to the surface between the piece and the stump. A minimum of three survey counts should be made at 2- to 3-day intervals to obtain reliable estimates. Adults should be removed each time. An average of 5 adults per trap is the action threshold for the split-log trap; an average of 15 to 20 adults is the threshold used with the stump trap. Insecticidal treatments are recommended when counts exceed the action threshold.',
          sci_name: 'Cosmopolites sordidus',
          eng_name: 'Banana Root Borer Adult',
          name:'Banana Root Borer Adult',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/BananaRootBorerAdult.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/BananaRootBorerAdult.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/BananaRootBorerAdult2.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/BananaRootBorerAdult3.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/BananaRootBorerAdult4.jpg',
          ]
       },
       
       {
          type: 'Pest',
          keywords: [],
          fil_stage_plant_affected:'Pagpuputol',
          fil_effect:'Isa sa mga pangunahing peste ng saging ang banana root borer. Lubos na nasisira nito ang kahit anong uri ng saging. Maaaring maubos ang mga pananim kung hindi mapatay ang mga banana root borer. Mas pinupuntahan nito ang mga naputol nang mga tangkay ng saging o kaya naman ang mga pinagputulan ng mga tangkay.',
          fil_part_destroyed:'Ugat, Tangkay',
          fil_stage_threatening:'Adult',
          fil_symptoms:'Nagsisimula ang mga banana root borer sa ilalim ng mga mamamatay nang dahon. Binibilog ng mga larva nito ang mga dahon hanggang sa makapasok ito sa loob ng tangkay. Maaaring maging kasing haba ng binilog na dahon ang mismong tangkay at ang buong ito ay sisirain ng mga banana root borer.',
          fil_description: 'Ang katawan ng mga adult ay sobrang kayumanggi hanggang sa nag-aabong itim, makintab, at nasa labing-isang milimetro (11 mm) ang haba. Makapit ang kanilang katawan dahil sa kanilang mga hook-like extensions na maaaring maikumpara sa mga paa ng salagubang. Ang mga larva naman nito ay puti ang katawan habang ang kanilang mga ulo ay kayumangging may pagkapula.',
          fil_plant_affected: 'Saging',
          fil_classification: '',
          fil_treatment:'Ang mga adult ay madaling mapukaw ng mga bagong putol na tangkay kaya naman maaari silang mapatay sa pamamagitan ng pag gamit ng mga pinutol na sanga ng puno bilang trap. Maaari rin namang gumamit ng insecticides kapag mas rumami pa ang bilang nila sa labing-lima hanggang bente.',
          fil_name: 'Banana Root Borer Larva',
          stage_plant_affected: 'Sucker appearance',
          effect: 'The banana root borer is a major pest of banana and Manilla hemp (abaca). It infests and seriously damages all varieties of banana and plants belonging to the genus Musa. Substantial losses can result if this pest is not controlled. Although it will attack all parts of banana suckers (keikis) and established plants, it prefers decaying banana corm material. Spent stems (cut or left standing), residual corms left after the stem has been cut, underground stubs of corm tissue left after de-suckering, uprooted suckers or stems, and any corm tissues that are large enough to dry slowly are good targets for banana root borer attack',
          part_destroyed: 'Root, stem',
          stage_threatening: 'Adult',
          symptoms: 'The infestation by C. sordidus begins at the base of the dying outermost leaf-sheath and in injured tissues at the lower part of the pseudostem. Initially the young larvae make several longitudinal tunnels in the surface tissue until they are able to penetrate to adjacent inner leaf-sheaths; the larvae then bore into the pseudostem base and rhizome (in bananas, also into the base of suckers and into roots). Larval tunnels may run for the entire length of fallen pseudostems',
          description: 'Adult: The adult root borer is dark brown to grey black, shining, about 11 mm long. It is similar in general appearance to the billbugs (Sphenophorus), but lacks the depressions on the pronotum. All tibiae are armed with hook-like extensions which enable the beetle to hold tightly to plant tissue. Larva: The larva is typical of the root borer subfamily Calendrinae, the body white and the head capsule dark reddish brown. The last two abdominal segments are modified into a plate-like structure giving a "chopped off" appearance in lateral view. The eighth abdominal segment bears a large elongate spiracle, but all other abdominal spiracles are minute and indistinct. Pupa: The pupa is also typical of the subfamily Calendrinae, the beak being very irregularly margined with numerous transverse depressions.',
          plant_affected: 'Banana',
          order: 'Coleoptera',
          classification: 'Maggot',
          treatment: 'Adults are attracted to freshly cut pseudostems (trunks) and corms, and population estimates can easily be made using traps consisting of these plant parts. Two trapping methods are used in Central and South America banana populations. The split-log trap uses fresh banana pseudostems cut into 1- to 1 1/2-foot lengths. The pseudostem logs are then split lengthwise through the center, and the halves are placed with the split surfaces on the soil at a number of locations in the field. The stump trap uses recently harvested plants. Trunks are cut about a foot from ground level. A piece of the remaining trunk is removed by making a second cut at a 30- to 45-degree angle about 6 inches from the ground. The resulting piece of trunk is placed back on the stump. Adult weevils are attracted to the surface between the piece and the stump. A minimum of three survey counts should be made at 2- to 3-day intervals to obtain reliable estimates. Adults should be removed each time. An average of 5 adults per trap is the action threshold for the split-log trap; an average of 15 to 20 adults is the threshold used with the stump trap. Insecticidal treatments are recommended when counts exceed the action threshold.',
          sci_name: 'Cosmopolites sordidus',
          eng_name: 'Banana Root Borer Larva',
          name:'Banana Root Borer Larva',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/BananaRootBorerLarva.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/BananaRootBorerLarva.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/BananaRootBorerLarva2.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/BananaRootBorerLarva3.jpg',
          ]
       },
       
       {
          type: 'Pest',
          keywords: [],
          fil_stage_plant_affected:'Pagtubo',
          fil_effect:'Kapag ang taniman ay hindi gaanong naaalagaan, mabilis dumami ang mga pseudostem borer. Mas maraming tanim, mas mabilis na kumakalat ang peste dahil pinagdidikit dikit nila ang mga dahon na kanilang ginagawang tunnel. Nahihirapang dumaloy ang sustansya sa loob ng halaman kaya naman ito ay namamatay.',
          fil_part_destroyed:'Dahon, Tangkay',
          fil_stage_threatening:'Adult',
          fil_symptoms:'Ang mga dahon ay nagiging madilaw at mabilis na natatanggal kapag hinangin dahil sa pagbilog ng mga larva. Ang mga mahahabang tunnel na nagagawa ng mga larva ay mabilis na nawawalan ng kulay at kapag ito ay umabot na sa growing point ng puno, mamamatay ang puno.',
          fil_description: 'Ang mga adult ay may habang sampung milimetro hanggang labing-dalawang milimetro, matigas na katawan, at patusok na bibig. Ang katawan ng mga ito ay kayumangging may pagkapula at maaaring maging itim kapag mas tumanda pa ito. Tuwing gabi lamang sila lumalabas at tumatago sa mga lugar na maaaring basa o kaya sa mga basura kapag may araw pa. Madalang lumipad ang mga ito at mabagal silang maglakad. Ang mga itlog nito ay habilog o oval, nasa dalawang milimetro ang haba at kulay perlas. Malambot, maputi, at maikli (hanggang sampung milimetro lamang ang haba) naman ang larva ng pseudostem borer ngunit ang kanilang ulo ay matigas at kulay kayumanggi. Ang pupa naman ay halos kasing laki lamang ng larva ngunit ang mga parte ng adult ay makikita na sa katawan ng mga ito.',
          fil_plant_affected: 'Saging',
          fil_classification: '',
          fil_treatment:'Cultural Control-Upang mapigilan ang pagdami ng mga peste, marapat na paniguraduhing malinis ang paligid at ang mismong taniman. Sa pamamagitan ng paglilinis, nawawalan ng mga lugar na maaaring pagtaguan ng mga pseudostem borer. Ugaliin ding tanggalin ang mga nalantang halaman o kaya naman iwasang magputol ng puno sa paligid nito. Biological Control-Maaaring pigilan ang pagdami sa pamamagitan ng pag-eexpose ng mga lalaking adult sa x-rays at gamma rays. Sa paraang ito, malalabanan nila ang mga normal na lalaking adult at mapapatay nila ito. Hindi mauubos ang peste ngunit malilimitahan ang pagdami nila. Maaari namang humanap ng ibang hayop upang pumatay o kumain sa mga pseudostem borer. Chemical Control-Maaaring gumamit ng mga kemikal gaya ng aluminiym phosphide upang mapatay ang mga peste sa loob ng halaman. Lahat ng apektadong halaman ay tatanggalin na pagkatapos nito.',
          fil_name: 'Pseudostem Borer',
          stage_plant_affected: 'Growing',
          effect: 'It can become an important pest in poorly managed plantations. The larvae tunnel within the corm that lies below the soil surface. When there are large populations, tunnels are found through most of the corm tissue and a short distance up the pseudostem. This tunnelling weakens the plant and renders it susceptible to "blowdown" in windy weather. Heavy infestations interfere with the movement of nutrients to the plant, and plants appear unthrifty. In severe cases the young suckers whither and fail to develop. This pest can become a major pest, reducing plant growth and causing extensive plant fall outs. Typical symptoms of a severe infestation are reduced plant growth, choking of the bunch in the pseudostem, yellow leaves and weak or dying suckers.',
          part_destroyed: 'Leaf, stem',
          stage_threatening: 'Adult',
          symptoms: 'The leaves yellow and the plants are susceptible to wind damage because of tunnels made by O. longicollis larvae boring in the pseudostems and bunch stalks. The long larval tunnels rapidly become discoloured. If the larval tunnel passes through the central growing point, the plant is killed. The characteristic of larva habit of cutting a rectangular hole just before completion of the cocoon helps in locating the cocoon inside the pseudostem.',
          description: 'Adult pseudostem borers are about 10-12mm long, hard shelled and have the pronounced snout typical of weevils. The newly emerged pseudostem borer is reddish brown but soon becomes uniformly dull black. The pseudostem borers are nocturnal and hide during the day in or around corms or in moist areas near the plant and in the trash. Unusually sluggish in their movements, they feign death when disturbed and seldom fly. Natural spread is very slow. Dispersal is primarily by the introduction of infested suckers and bits for planting. Eggs are laid singly in a shallow pit at the base of the pseudostem. They are elongate, oval, about 2 mm long and pearly white. The eggs are very hard to find because the oviposition site becomes covered by congealed sap. The soft, creamy-white, stout (up to 10 mm in length), legless larvae have a distinctly curved body, are swollen in the middle and have a hard brown head. Pupae are about the same size as the larvae. Inside the white pupal skin the structure of the future adult with its snout, wing buds, legs and antennae is visible.',
          plant_affected: 'Banana',
          order: 'Coleoptera',
          classification: 'Beetle-like',
          treatment: 'Cultural Control-The most practical method of combating O. longicollis consists of prevention by means of clean culture, accompanied by trapping the adults. Clean culture should include the removal of trash which provides hiding places and, more especially, the removal of broken and decaying plants which serve as breeding places. The practice of cutting off the stems at a height varying from 2 to 7 feet and allowing these to remain until they disintegrate provides ideal breeding conditions for the beetles. One of these cut stems may have dozens of insects in all stages of their development (Hoffmann, 1933). In Assam, northern India, Isahaque (1978) found that dead banana plants remained succulent for a long time and therefore permitted the survival of larvae and pupae during the winter. He recommended the removal and burning of dry leaves and leaf sheaths, and dead or cut pseudostems, in the winter to help reduce weevil populations. Trapping can be done by placing cut pieces of stem in the field for the purpose of attracting beetles for oviposition. These traps are best destroyed at regular intervals, of short enough duration to prevent maturity of any larvae which might hatch. The traps should be visited frequently and the adults destroyed. Either the weevils are crushed or the traps burnt to kill the weevils. If very thin slices of stem are used as traps, they will be insufficient to allow the complete development to take place; Biological Control-The technique of release of sterile males may have potential in control of this weevil (Chiang, 1965). One-day-old male pupae were irradiated with X-rays and gamma-rays. The maximum practical dose for use in studies on control by the release of sterile males was 2000 R. Inundative releases of sterile males into banana plantations were made to compete with fertile males so that the number of viable offspring would be reduced. Apparently this approach to weevil control was not followed up; Host-plant Resistance-In India, Isahaque (1978) showed that the banana variety Bhimkal was completely free of infestation by O. longicollis. In addition Kaskal was highly resistant and Jahajee was resistant. Resistance in these three varieties appeared to be connected with their broad, thick and compact leaf-sheaths and pseudostems, although chemical antibiosis may also have been a contributing factor; Chemical Control-In India infested pseudostems have been fumigated after the initiation of flowering, otherwise there was a phytotoxic effect. Three aluminium phosphide tablets per plant were inserted 15 cm above ground level, at a depth of a quarter of the pseudostem diameter. After insertion, the entry hole was sealed (Anon., 1977); Integrated Pest Management-Wijesekara and Menike (1991) stated that it is possible to manage O. longicollis and Cosmopolites by a combination of cultural and chemical control. All infested plants are removed, the pseudostems split open and allowed to dry in the field (if convenient all pseudostems are remoned from field and destroyed by feeding to cows or pigs). The pseudostems of harvested banana plants are cut at ground level and carbofuran [a hazardous pesticide that is now banned] granules applied onto the cut surface, which is covered with another piece of pseudostem to make a trap. Twenty five such pseudostem traps per acre are randomly placed at the base of clumps once a month. Uninfested planting material should always be used for establishing a new plantation.',
          sci_name: 'Odoiporus longicollis',
          eng_name: 'Pseudostem Borer',
          name:'Pseudostem Borer',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/PseudostemBorer.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/PseudostemBorer.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/PseudostemBorer2.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/PseudostemBorer3.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/PseudostemBorer4.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/PseudostemBorer5.jpg',
          ]
       },
       
       {
          type: 'Pest',
          keywords: [],
          fil_stage_plant_affected:'Namumulaklak',
          fil_effect:'Ang adult nito ang kumakain ng mga dahon kasama ng tangkay ng puno ng saging. Kinakain din nito ang balat ng mga bagong bunga na sumisira sa mismong prutas kaya naman hindi na mabebenta ang ito at nagiging sanhi rin ito ng pagpasok ng mga mikrobyo.',
          fil_part_destroyed:'Ugat, Dahon, Bunga',
          fil_stage_threatening:'Larva, Adult',
          fil_symptoms:'Nangingitlog ito ng nasa lima hanggang apatnapu at lima sa may ugat ng puno. Pito hanggang siyam na araw itong mamamalagi rito bago tuluyang mapisa. Ang larva nito ay matatagpuan sa may ugat at binubutas nito ang ugat ng puno upang maging tunnel. Dalawampu hanggang dalawampu at dalawang araw lamang ang itinatagal ng larva bago ito maging adult.',
          fil_description: 'Ang itlog nito ay may pagkadilaw ang kulay at habang ito ay tumatagal nagiging kayumanggi. Ito ay habilog o oval. Ang larva nito ay may pagkaputi at may pagkamabuhok. Ang laba nito ay mula isa hanggang isa at kalahating milimetro. Ang pupa ay dilaw na nagiging kayumanggi at mas dumidilim ang kulay nito habang ito ay nagiging adult.',
          fil_plant_affected: 'Saging',
          fil_classification: '',
          fil_treatment:'Dapat tanggalin ang mga damo sa paligid ng mga puno kung saan maraming peste ang nakikita. Maaaring gumamit ng insecticides ngunit ito ay iniiwasan dahil naaapektuhan din nito ang prutas maliban na lamang kung malaki na ang nagiging epekto nito sa produksyon ng saging. Ang mga insecticides na maaaring magamit ay ang Endosulphan (0.04%) or Carbaryl WP (0.1%).',
          fil_name: 'Fruit Scarring Beetle',
          stage_plant_affected: 'Flowering',
          effect: 'The adult beetle feeds on the young unfuried leaves and stems of banana plants, and also eats the skin of young fruit, making scars which spoil the fruit and make it unsalable, and allowing the entry of pathogens.',
          part_destroyed: 'Root, leaf, fruit',
          stage_threatening: 'Larva, Adult',
          symptoms: 'The eggs are deposited singly or in clusters varying in number from 5 to 45, in cavities gnawed by the female in the leaf-sheath of bananas near the crown just above the surface of the ground, on the surface roots in natural depressions or in cavities made by the female, and on the surface roots of the old “ mats.” The duration of the egg stage is from 7 to 9 days. The larvae feed on the young roots, gnawing the soft epidermal tissues of the older roots, into which they tunnel. The duration of the larval stage is from 20 to 22 days.',
          description: 'The egg is pale lemon-yellow in colour, becoming brownish as the embryo approaches maturity, and broadly oval in shape with one end slightly more acute than the other ; length, 1·2 mm. The larva is whitish, with the head somewhat amber-coloured, the body being slender and hairy ; length, 1–1·5 mm. The pupa is dirty yellow, becoming darker as the adult becomes ready to emerge.',
          plant_affected: 'Banana',
          order: 'Coleoptera',
          classification: 'Beetle-like',
          treatment: 'Removal of grass weeds from plantations where the population of this pest is high can often reduce the population levels enough to avoid the use of insecticides. Unless the beetles are causing serious economic losses the use of insecticides should be avoided. In case of severe infestation spraying with Endosulphan (0.04%) or Carbaryl WP (0.1 %) controls the pest population.',
          sci_name: 'Philicoptus demissus Philicoptus iliganus',
          eng_name: 'Fruit Scarring Beetle',
          name:'Fruit Scarring Beetle',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/FruitScarringBeetle.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/FruitScarringBeetle.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/FruitScarringBeetle2.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/FruitScarringBeetle3.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/FruitScarringBeetle4.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/FruitScarringBeetle5.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/FruitScarringBeetle6.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/FruitScarringBeetle7.jpg',
          ]
       },
       
       {
          type: 'Pest',
          keywords: [],
          fil_stage_plant_affected:'Namumulaklak',
          fil_effect:'Hindi gaanong nakamamatay ng halaman ang pagkain ng peste rito, mas nakamamatay ang posibleng virus na madala ng peste sa puno ng saging galing sa isa pang puno ng saging o sa ibang halaman na pinanggalingan nito.',
          fil_part_destroyed:'Dahon',
          fil_stage_threatening:'Adult',
          fil_symptoms:'Nasisira nito ang halaman dahil sa pagkain nito rito. Ang mga dahon ay nakukurba o kaya naman ay binibilog upang maging tunnel',
          fil_description: 'Nymphs: Ang mga bagong pisang nymphs o ang unang stage ng nymphs ay habilog o oval at mas hahaba pa ito kapag mas tumanda. Kayumangging may pagkapula ang mga katawan nito at nahahati sa apat na parte ang antena nila, at may habang 1/250 inch. Ang ikalawang stage ng nymphs ay kahawig lamang ng unang stage ngunit ito ay nasa 7/250 inch ang haba. Ang pangatlong stage naman ay mas light ang pagkakayumanggi, 9/250 inch ang haba. Mas napapansin dito ng compound na mata nito at ang antena nila ay mayroon nang limang parte. Ang ika-apat na stage ay may antenang nahahati sa anim na parte, light na kayumanggi rin ang kulay, at 1/25 inch ang haba. Adult: Ang kanilang haba ay nasa 1/25 hanggang 1/12 inch, makinang ang kanilang katawan na kulay reddish brown hanggang dark brown o halos maging itim. Nahahati rin sa anim na parte ang mga antena nilang kasing haba ng kanilang katawan. Nakakapag-produce na ng itlog ang mga adult isang araw makatapos ang kanilang maturity stage. Nanganganak sila ng apat kada araw.',
          fil_plant_affected: 'Saging',
          fil_classification: '',
          fil_treatment:'Maaaring mapuksa ang mga banana aphids ng kanilang mga natural na kalaban o kaya naman ng mga insecticides na mabibili sa merkado o insecticide na gawa sa sabon o panghugas ng mga plato o vegetable oils. Dapat ding iwasang magkaroon ng maraming langgam sa paligid ng mga puno dahil pinoprotektahan ng mga langgam ang mga banana aphids dahil kinakain ng mga langgam ang honeydew na ginagawa ng mga banana aphids. Ilan sa mga tips upang mapigilan ang pagdami ng mga ito ay ang mga sumusunod: (1) Maghanap ng ibang halaman na maaaring mapagbahayan ng mga aphids - maaari silang mamalagi sa ibang halaman malapit sa mga puno ng saging; (2) Ugaliing tignan ang tanim kung mayroong mga pesteng namamalagi rito; (3) Unahing ubusin ang mga langgam sa paligid; (4) Magkaroon ng mga hayop o insektong kumakain mismo ng mga aphids gaya ng lady beetles; (5) Tanggalin ang mga saging na napabayaan na lalo na ang mga may damage na; (6) Alagaan din ang mga damong nakapaligid sa mga puno ng saging o kaya naman ay tanggalin ang mga ito kung hindi naman kailangan; (7) Magtanim ng ibang crops; (8) Tanggalin ang mga banana mats; at (9) Gumamit ng mga aphid control sprays.',
          fil_name: 'Banana Aphids',
          stage_plant_affected: 'Flowering',
          effect: 'Direct feeding damage is uncommon. Damage from excessive honeydew and the resultant sooty mould development occurs only rarely and only when populations build up to high levels. The greatest potential damage is due to transmission of bunchy top virus.',
          part_destroyed: 'Leaf',
          stage_threatening: 'Adult',
          symptoms: 'Like most aphids, the banana aphid is a phloem feeder that uses its long stylets to pierce plant tissues to suck the sap directly from the vessels. This can cause plants to become deformed; the leaves become curled and shriveled, and in some cases galls are formed on the leaves.',
          description: 'Nymphs: Like most other aphid species, the banana aphid has four nymphal stages. Newborn nymphs are oval at first and become slightly elongated. They are reddish brown, with four segmented antennae, and measure 1/250 inch in length. The second stage nymphs are similar in appearance and measure approximately 7/250 inch long. The third nymphal stage individuals are light brown, measuring about 9/250 inch in length; the compound eyes are more noticeable beginning with this stage, and the nymphs have five-segmented antennae. The fourth stage nymphs have six-segmented antennae, are light brown in color, and are 1/25 inch long. The first, second, third, and fourth nymphal stages last 2 to 4, 3 to 4, 2 to 4, and 2 to 4 days, respectively. Adults: Adult banana aphids are small to medium sized aphids (1/25 to 1/12 inch), shiny, reddish to dark brown or almost black. They have six-segmented antennae that are as long as the body. Alates have prominent, dark (brown or black) wing veins. Adults start producing young one day after reaching maturity. They can give birth to 4 aphids per day with an average production of 14 offspring per female.',
          plant_affected: 'Banana',
          order: 'Hemiptera',
          classification: 'Two or one unit body',
          treatment: 'Aphids can be killed by their natural enemies, or with sprays of registered insecticides, or with insecticidal soaps or liquid dish washing detergents and vegetable oils. Ants protect the aphids from their enemies, and ants feed upon the sweet honeydew that aphids produce. Control tips: (1) Inspect alternate hosts for aphids - eliminate populations of banana aphids that are living on non-banana hosts within the vicinity of your bananas; (2) Inspect banana plants for aphids - scout banana plants at least twice per month for aphid colonies; (3) Control ants - control ants if possible and lawful, ants aggressively protect aphids from natural enemies; (4) Invite beneficial animals and insects - strive to foster a conducive environment for beneficial, aphid-feeding or -parasitizing insects such as lady beetles; (5) Destroy wild bananas in the area - eliminate wild of unattended patches of bananas, large populations of banana aphids can grow on them and the wild patches when infected can serve as a serious and constant source of disease for farms and residential neighborhoods; (6) Control weeds around bananas - maintain good weed control around the banana patch; (7) Diversify the banana farm - grow a range of different plants or crops; (8) Prune the mats - keep banana mats pruned of all unwanted suckers; (9) Spray for aphid control.',
          sci_name: 'Pentalonia nigronervosa',
          eng_name: 'Banana Aphids',
          name:'Banana Aphids',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/BananaAphids.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/BananaAphids.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/BananaAphids2.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/BananaAphids3.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/BananaAphids4.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/BananaAphids5.jpg',
          ]
       },
       
       {
          type: 'Pest',
          keywords: [],
          fil_stage_plant_affected:'Namumulaklak',
          fil_effect:'Ang mga apektadong puno ay maaaring magkaroon ng mas maliliit na bunga o kaya naman ay hindi na mamunga. Isang sakit naman ang maaaring madala ng pineapple wilt na magiging sanhi ng pagkabuwal ng puno dahil sa paghina ng ugat nito.',
          fil_part_destroyed:'Buong puno',
          fil_stage_threatening:'Adult',
          fil_symptoms:'Kadalasang matatagpuan ang mga ito sa tuktok ng mga halamang pinepeste nito. Naaapektuhan nito ang paglaki ng halaman dahil sa ginagawa nitong honeydew na posibleng makaharang sa sinag ng araw papunta sa mga dahon. Nag-iiwan din ito ng sakit sa halaman na tinatawag na pineapple mealybug wilt. Mayroong dalawang klase ng wilt, ang mabilis na wilt at ang mabagal na wilt. Ang mabilis na wilt ay namumuo dalawang buwan matapos ang pag-atake ng isang grupo ng mga mealybug at ang mabagal na wilt naman ay epekto ng maraming mealybug na kumakain sa halaman sa loob ng ilang buwan. Ang mabagal na wilt ay sanhi ng pagbabago ng kulay ng mga dahon mula luntian papuntang namumula-mulang dilaw. Kapag naman mas bata ang halaman sa anim na buwan at tinamaan ito ng mabilis na wilt, ang mga dahon ay maaaring maging maputlang dilaw o kaya naman ay kulay rosas. Sa mas matanda namang halaman, sanhi ng panunuyo ng dahon ang mabilis na wilt.',
          fil_description: 'Ang mga babaeng false pineapple mealybug ay nakakapanganak ng halos 350 live young sa buo nilang buhay mula sa isang libo nitong kayang ipanganak. Ang katawan ng mga adult ay habilog o oval at nag-aabo ang kulay. Mukha itong gray at flat na rambutan na may habang isa at kalahating milimetro at lapad na isang milimetro.',
          fil_plant_affected: 'Saging',
          fil_classification: '',
          fil_treatment:'Pagpipigil - ang pagpuksa sa mga langgam na nagiging katulong nila ay isa sa mga paraan upang mapigilan ang pagdami ng mga false pineapple mealybug. Maaaring maglagay ng mga bakod para sa mga langgam ngunit mas epektibo ang paggamit ng insecticides. Control - hindi sapat na puksain lamang ang mga langgam na katulong nila, mas mainam na pati sila ay mapatay rin. Kahit na nagkaroon na ng pineapple wilt ang puno, maaari pa ring puksain ang mga false pineapple mealybug sa pamamagitan ng mga sumusunod: (1) Movement Control - pagtanggal ng mga langgam sa paligid dahil nakakatulog ito sa paglilipat ng mga mealybug sa iba pang lugar, maaaring gumamit ng mga wind barrier sa paligid ng taniman upang mabawasan ang bilang ng mga peste; (2) Biological Control - maaaring gumamit ng mga hayop o insekto na kumakain ng iba pang peste upang mabawasan o maubos ang mga mealybug; (3) Chemical Control - ang paggamit ng insecticides ay mainam na pamatay sa mga peste.',
          fil_name: 'False Pineapple Mealybug',
          stage_plant_affected: 'Flowering',
          effect: 'Affected plants either produce smaller fruit or produce no fruit at all. Pineapple wilt may also result in the invasion of saprophytic organisms, which leads to the collapse of roots. Ultimately, plants may die as a result of infection by pineapple wilt via D. neobrevipes. D. neobrevipes also causes green spot disease, which is characterized by galls on leaves caused by a reaction between the plant and a secretion from the mealybugs.',
          part_destroyed: 'Whole tree',
          stage_threatening: 'Adult',
          symptoms: 'D. neobrevipes is usually found near the top of a host plant and feeds by sucking the sap from the plant tissue. This causes local lesions to form at the site of feeding. These lesions are bizonate, with a dark green centre surrounded by a lighter green area. D. neobrevipes also affects the plant’s photosyntheitic ability by producing sugary honeydew which facilitates the growth of sooty mould, blocking sunlight from reaching the leaves. The main damage that pineapple mealybugs such as D. neobrevipes cause is as a result of their role as a vector of pineapple wilt. This devastating disease is caused by Pineapple mealybug wilt associated virus-2 (PMWaV-2), a mealybug-transmitted ampelovirus. There are two types of wilt, quick wilt and slow wilt. Quick wilt, also known as mealybug wilt, develops around 2 months after a short attack by a large colony of mealybugs, whereas slow wilt is caused by many mealybugs feeding on the plant tissue over many months. Slow wilt causes the inner leaves to turn dry and brown, and causes outer leaves to lose their turgidity and droop. Unlike slow wilt, quick wilt causes leaves to turn a yellow-pink colour. In plants younger than 6 months, quick wilt causes inner leaves to turn light green to pale yellow or pink. In older plants, quick wilt causes leaves to droop, turn pink and dry out. Both types of wilt cause leaves to droop and dry out. They also both affect the fruit yield of the plant, especially if symptoms are seen early in the season. ',
          description: 'D. neobrevipes is ovoviviparous, with each female giving birth to approximately 350 live young in a lifetime, although it can be as many as 1000 young. Females go through 3 larval instars which last for 11 to 23 days, 6 to 20 days and 7 to 28 days, respectively. The total larval period is 35 days on average but can range from 26 to 52 days. Males go through 4 larval instars before becoming winged adults. These instars last for 11 to 19 days, 7 to 19 days, 2 to 7 days and 2 to 8 days, respectively. The total larval period ranges from 22 to 53 days. Adults are oval, grey, and are coated with white mealy wax which forms small tufts. They are 1.5 mm long and 1.0 mm wide. Female adults can live for 48 to 72 days, whereas the winged males live for 2 to 7 days.',
          plant_affected: 'Banana',
          order: 'Hemiptera',
          classification: 'Two or one unit body',
          treatment: 'Prevention - controlling mutualistic ants will prevent the build-up of mealybug populations, by reducing the protection the mealybugs benefit from and by allowing natural enemies to prey on any mealybugs present. Physical barriers such as ant fences have shown partial effectiveness, but the most effective ant control involves the use of insecticidal baits. A commonly used chemical for these baits is hydramethylnon; Control - although it is thought that the control of ants is an effective way to prevent the build-up of D. neobrevipes, the mealybugs themselves may also need controlling. Even if mealybugs have already established and symptoms of pineapple wilt have been observed, control should still be implemented as recovery can be rapid if the appropriate control measures are put in to place; Movement Control - controlling ants will prevent them from transporting mealybugs further in an area. The use of wind barriers around the edge of the field can reduce the number of mealybug crawlers (first instars) that are spread by the wind to uninfested areas; Biological Control - D. neobrevipes has a range of natural enemies that, in the absence of caretaker ants, can effectively control populations of the mealybug. New predators can be introduced to an area in order to control the mealybugs, but without first controlling ant populations, these introductions will not be effective; Chemical Control - chemicals can be effective at controlling D. neobrevipes, but if the mealybugs are feeding deep in the plant, they will be hidden from the application of insecticides. The waxy coating on the mealybugs may prevent penetration of chemical sprays, reducing their effectiveness. Insecticides that have been used in the control of mealybugs include the organophosphates malathion and diazinon.',
          sci_name: 'Dysmicoccus neobrevipes',
          eng_name: 'False Pineapple Mealybug',
          name:'False Pineapple Mealybug',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/FalsePineappleMealybug.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/FalsePineappleMealybug.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/FalsePineappleMealybug2.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/FalsePineappleMealybug3.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/FalsePineappleMealybug4.jpg',
          ]
       },
       
       {
          type: 'Pest',
          keywords: [],
          fil_stage_plant_affected:'Namumulaklak, Anihan',
          fil_effect:'Maaaring magdala ng sakit na pineapple wilt ang pineapple mealybug na posibleng maging sanhi ng pagkaubos ng mga panananim sa isang lugar. Ang mga punong maaapektuhan ay magkakaroon ng maliliit na bunga o kaya naman ay hindi na mamunga at tuluyan na lamang mamatay.',
          fil_part_destroyed:'Buong puno',
          fil_stage_threatening:'Adult',
          fil_symptoms:'Ang pagkakaroon ng dilaw dilaw na mala-pekas sa mga dahon ay isang sinyales na mayroong pineapple mealybug sa puno. Gaya rin ng false pineapple mealybug, gumagawa ito ng honeydew kaya naman nahaharangan din nito ang sinag ng araw at maaaring maging abnormal ang tubo ng puno pati na ang mga bunga nito.',
          fil_description: 'Ang mga adult ay nasa isang milimetro lamang ang lapad ngunit ito ay nakikita ng ating mga mata. Kagaya ng false pineapple mealybug, mukha rin itong flat na rambutan ngunit ito ay puti. Ang korte ng kanilang katawan ay habilog o oval at mas maumbok ang kanilang katawan kaysa sa false pineapple mealybug. Mayroong labing-pitong pares ng wax filaments na nakapalibot sa katawan nito. Maaari itong mapagkamalang false pineapple mealybug kaya dapat itong patignan at ipakumpirma sa isang eksperto bago umaksyon.',
          fil_plant_affected: 'Saging',
          fil_classification: '',
          fil_treatment:'Sa pamamagitan ng mga natural na kaaway ng pineapple mealybug mapa-parasite man o predator nito, mababawasan ang kanilang bilang o maaaring pang maubos sila ngunit mas mainam kung kasabay ng pagpuksa sa mga pineapple mealybug ay inuubos din ang mga langgam na pumoprotekta sa kanila. Maaari rin silang buhusan ng tubig na nasa 50°C ang temperatura sa loob ng tatlumpung minuto upang mawala sila. Hindi masyadong nirerekomenda ang pag gamit ng insecticides at sa halip, pinaka nirerekomenda ang pagcontrol din sa populasyon ng mga langgam.',
          fil_name: 'Pineapple Mealybug',
          stage_plant_affected: 'Flowering, harvesting',
          effect: 'D. brevipes is often injurious to crops especially when the mealybug is introduced to new geographical areas without natural enemies, or as a result of injudicious chemical spraying techniques. Areas where the mealybug occurs but where the mealybug wilt of pineapple is absent are at risk from the introduction of mealybugs carrying the virus. Areas where only the parthenogenetic form occurs are also at risk from the introduction of the biparental form.',
          part_destroyed: 'Whole tree',
          stage_threatening: 'Adult',
          symptoms: 'Infestations of D. brevipes occur on the foliage, stems and fruit. This results in reduced vigour and general debility of the host plant, yellow spotting on the undersides of leaves which may be shed prematurely, dieback of stems and wilting. Honeydew deposited on the leaves and fruit by the mealybugs serves as a medium for the growth of black sooty moulds. The sooty moulds result in a reduction of photosynthetic area. Ornamental plants and produce lose their market value.',
          description: 'Adult pineapple mealybugs are very small, about 1 mm wide, but are visible to the naked eye. They appear fuzzy with white wax, with a pink or pink-orange hue underneath the wax. They are oval and appear humped. The ventral surface of the adult mealybug has 17 pairs of wax filaments along the edge. The pair at the posterior end of the insect is the longest. If the pineapple mealybug species is not confirmed by an expert, it could be confused with the gray pineapple mealybug, Dysmicoccus neobrevipes. ',
          plant_affected: 'Banana',
          order: 'Hemiptera',
          classification: 'Two or one unit body',
          treatment: 'Biological Control: The pineapple mealybug has many natural enemies, both parasites and predators. These include parasitoids in the family Encyrtidae, Anagyrus ananatis, Euryrhopalus propinquus, and Hambeltonia pseudococcina, and predators in the family Coccinellidae, Nephus bilucenarius and Scymnus uncinatus. Biological control efforts were mostly stopped post-World War II with the development of broad-application insecticides. There are many more natural enemies of the pineapple mealybug for other crops where they are generally considered a minor pest. Biological control is much less effective when ants tend to the pest because the ants will actively defend the pineapple mealybug from harm. There are, so far, no good biological controls for ants tending pineapple mealybug, as the major predators of these ants are other ant species that drive the former out of the field. Mechanical/Physical/Cultural Control: Heat treating the pineapple crowns in a water bath at 50°C for 30 minutes rendered them free of Pineapple mealybug wilt-associated virus and made the crowns less desirable for pineapple mealybug colonization. The most successful control of the pineapple mealybug thus far has been through control of the ant populations that tend to the pest. Without the care of ants, the pineapple mealybug becomes much more susceptible to predators and parasitoids, and the effectiveness of biological control increases. Ant bait traps and other ground traps have also been effective.',
          sci_name: 'Dysmicoccus brevipes',
          eng_name: 'Pineapple Mealybug',
          name:'Pineapple Mealybug',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/PineappleMealybug.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/PineappleMealybug.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/PineappleMealybug2.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/PineappleMealybug3.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/PineappleMealybug4.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/PineappleMealybug5.jpg',
          ]
       },
       
       {
          type: 'Pest',
          keywords: [],
          fil_stage_plant_affected:'Pagpuputol',
          fil_effect:'Ang mga pesteng ito ay namumuhay sa katas ng halaman. Habang sila ay naglalabas ng honeydew, nagkakaroon ng mga amag na humaharang sa sinag ng araw kaya nagkakaproblema sa proseso ng pagtubo ng halaman, nalalagas din ang mga dahon, at maaaring mamatay ang halaman kung ito ay bata pa. Kinakain naman ng mga langgam ang inilalabas ng mga coconut buff mealybug na honeydew kaya naman pinoprotektahan nila ang mga pesteng ito. Kaya hindi madaling maubos ang mga peste sa halaman kahit na gumamit ng mga bagay upang mapigil ang kanilang pagdami.',
          fil_part_destroyed:'Buong puno',
          fil_stage_threatening:'Adult',
          fil_symptoms:'Ang pangunahing damage ng coconut buff mealybug ay ang pagkaubos ng katas ng halaman, pagkadilaw ng mga dahon, pagharang sa sinag ng araw na nakakapigil sa pagtubo ng halaman nang maayos.',
          fil_description: 'Ang mga adult na coconut buff mealybug ay may habang tatlo at kalahating milimetro, flat, at habilog o oval. Kulay salmon hanggang dark na pula ang kanilang kulay na may puti o dilaw na wax cones na nagbibigay sa kanila ng tusok tusok na anyo. ',
          fil_plant_affected: 'Saging',
          fil_classification: '',
          fil_treatment:'Palaging tignan ang mga halaman, lahat ng parte ng puno ay kailangang tignan kung mayroong peste o kahit damage lamang ang tignan. Hindi masyadong tinatablan ng insecticides ang coconut buff mealybug dahil sa wax nito sa katawan kaya naman ang kailangang gawin bukod sa pagpuksa sa mga langgam na katulong nila ay ang pagpuputol o kaya naman paghuhugas sa mga parte ng puno na naapektuhan na ng peste.',
          fil_name: 'Coconut Buff Mealybug',
          stage_plant_affected: 'Sucker appearance',
          effect: 'Adult females and immatures feed on the sap of the host plant. Honeydew secretions produced during feeding may result in black, sooty mold growth. The presence of sooty mold can result in reduced photosynthesis, defoliation, and occasional death of a young plant. Ants are often found feeding on mealybug honeydew secretions and may also defend the mealybugs from predators or parasitoids. An infestation of the coconut mealybug, Nipaecoccus nipae (Maskell), on a palm species. Black sooty mold growth is common with high populations.',
          part_destroyed: 'Whole tree',
          stage_threatening: 'Adult',
          symptoms: 'In most cases, the main damage caused by N. nipae is the depletion of plant sap, yellowing of the foliage, reduced vigour of the host, and the deposition on the foliage and fruit of honeydew which serves as a medium for the growth of black sooty moulds. The covering of sooty moulds reduces the photosynthetic area.',
          description: 'In life, adult female N. nipae are 3.5 mm long, flattish and oval. They are salmon-pink to dark-red in colour, with distinctive dorsal and marginal white or yellow wax cones which create a satellite appearance. In most species of mealybug, the males, if present, are less conspicuous that the females, but male N. nipae are more numerous than females. Male N. nipae produce small (about 2 mm long) waxy filamentous cocoons or tests on the foliage, which are often present in large numbers. The male tests of N. nipae are more common and more conspicuous than those of many other mealybug species.',
          plant_affected: 'Banana',
          order: 'Hemiptera',
          classification: 'Two or one unit body',
          treatment: 'Management of scale and mealybug insects begins with detection and identification of the pest. Mealybugs can be very small or resemble disease organisms or even plant structures, making detection difficult. Regular monitoring will allow detection of these pests before damage is obvious and will also allow improved control. All plant parts need to be searched, including the undersides of leaves and stems. Inspection of plants prior to introducing them into the landscape, nursery or collection is very important in reducing new infestations of scales. Management can be difficult because of the waxy material mealybugs produce which provides protection from many insecticides. Pruning or washing infested plant parts can be helpful in reducing populations, particularly in cases of small infestations. A brisk wash spray of water can also be helpful in removing mealybugs from plants and reducing the population. Mealybugs are commonly attacked by predators, parasites and diseases which can help manage populations, particularly for long term control. It is important to recognize the presence of beneficial insects and to take steps to conserve them in the environment so they are available to control the pest insects. It is often necessary to manage mealybugs with insecticides so it is important to select appropriate insecticides, timing and application methods to reduce negative impact on the natural enemies but still get maximum control. Contact insecticides commonly provide quick knockdown of the pest but require good coverage and generally repeat applications. The stage most susceptible to contact insecticides is the crawler stage. Horticultural oil and insecticidal soaps also can provide good control, but must be treated like contact insecticides, which require thorough coverage and repeat applications. Systemic insecticides can provide excellent options for scale control and can provide some flexibility in application timing and methods. These insecticides move through the plant and provide an excellent way to expose scale insects to the insecticide when they feed on the plant. It is important not to overuse or misuse insecticides which can lead to numerous problems including insecticide resistance. To avoid insecticide resistance it is critical to rotate among insecticide groups.',
          sci_name: 'Nipaecoccus nipae',
          eng_name: 'Coconut Buff Mealybug',
          name:'Coconut Buff Mealybug',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/CoconutBuffMealybug.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/CoconutBuffMealybug.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/CoconutBuffMealybug2.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/CoconutBuffMealybug3.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/CoconutBuffMealybug4.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/CoconutBuffMealybug5.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/CoconutBuffMealybug6.jpg',
          ]
       },
       
       {
          type: 'Pest',
          keywords: [],
          fil_stage_plant_affected:'Namumulaklak',
          fil_effect:'Nababawasan ang kalidad ng mga prutas na inaani dahil sa mga scale insects. Ang mga sanga, dahon, at bunga ay nakakaroon ng malalaking sira at ang mga bunga ay hindi na maaaring maibenta.',
          fil_part_destroyed:'Dahon, Tangkay',
          fil_stage_threatening:'Adult',
          fil_symptoms:'Matatagpuan sila sa gilid o ilalim ng mga dahon o kaya naman sa mga tangkay. Hindi sila gaanong kita dahil nagiging halos kakulay nila ang kanilang paligid. Kapag kinakain ng scale insects ang ilalim ng dahon, nagkakaron ito ng dilaw na mga tuldok sa ibabaw.',
          fil_description: 'Marami ang uri ng mga scale insects, mayroong sobrang liit na nasa isa o dalawang milimetro lamang ang sukat na korteng talaba o kaya naman ay tahong, mayroon ding makintab ang katawan at parang mga perlas na nasa limang milimetro ang haba, at mayroon ding nababalot ng mealy wax. Ang mga babaeng adult ay halos hindi na gumagalaw at nakadikit na lamang sa halamang pinepeste nila. Naglalabas sila ng wax upang maprotektahan sila; ang wax na ito ang nagbibigay sa kanila ng itsurang mala-kaliskis ng isda kaya sila tinatawag na scale insects.',
          fil_plant_affected: 'Saging',
          fil_classification: '',
          fil_treatment:'Kailangang putulin ang mga apektadong parte ng puno upang mawala ang mga scale insects. Maaaring palisin ang mga ito o kaya naman kunin gamit ang kamay kung ang kanilang bilang ay kakaunti. Ang natural na predators naman nito ay ang mga ladybug at lacewing na maaari namang matagpuan sa mga hardin o kaya sa merkado. Ang mga horticultural oils naman at ibang ligtas na oil-based insecticides ay maaaring makapatay ng mga scale insects kahit na ang mga adult na may armor coverings.',
          fil_name: 'Scale Insects',
          stage_plant_affected: 'Flowering',
          effect: 'The presence of colonies of scale insect reduces quality on harvested fruits. Pseudostem, leaves and fruits can be infested specially where there is heavy infestation that can cause severe damage on fruits and causes the fruits unmarketable.',
          part_destroyed: 'Leaf, stem',
          stage_threatening: 'Adult',
          symptoms: 'Whether armored or soft, scale insects are often found on the undersides of leaves or on branches. Each species of scale has specific plants they are associated with. The scale blends in well, so the actual insect may not be very apparent. When scales feed underneath the leaves, yellow spots often appear on the tops of the foliage. Over time, the plant can become more chlorotic-looking, and new plant growth can be stunted. And if you’re dealing with soft scale, another symptom is the appearance of sooty mold. (Be aware, however, that sooty mold can also be caused by whiteflies and aphids.)',
          description: 'Scale insects vary dramatically in appearance; from very small organisms (1–2 mm) that grow beneath wax covers (some shaped like oyster shells, others like mussel shells), to shiny pearl-like objects (about 5 mm), to creatures covered with mealy wax. Adult female scales are almost always immobile (aside from mealybugs) and permanently attached to the plant they have parasitized. They secrete a waxycoating for defense; this coating causes them to resemble reptilian scales or fish scales, hence their common name.',
          plant_affected: 'Banana',
          order: 'Hemiptera',
          classification: 'Two or one unit body',
          treatment: 'To get rid of scale insects prune and dispose of infested branches, twigs and leaves. When scale numbers are low they may be rubbed or picked off of plants by hand. Dabbing individual pests with an alcohol-soaked cotton swab or neem-based leaf shine will also work when infestations are light. Commercially available beneficial insects, such as ladybugs and lacewing, are natural predators of the young larval or “crawler” stage. Organic pesticides, like insecticidal soap and d-Limonene can also be used to kill the larvae. However, these products have very little persistence in the environment, so several applications during egg-hatching will be required for effective control. Azamax contains azadirachtin, the key insecticidal ingredient found in neem oil. This concentrated spray is approved for organic use and offers multiple modes of action, making it virtually impossible for pest resistance to develop. Best of all, it’s non-toxic to honey bees and many other beneficial insects. Horticultural oils and other safe, oil-based insecticides work by smothering insects and will control all pest stages, including adults which are protected from most other insecticides by their armor coverings. Fast-acting botanical insecticides should be used as a last resort. Derived from plants which have insecticidal properties, these natural pesticides have fewer harmful side effects than synthetic chemicals and break down more quickly in the environment.',
          sci_name: 'Chrysomphalus aonidium Hemiberlesia lataneae',
          eng_name: 'Scale Insects',
          name:'Scale Insects',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/ScaleInsects.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/ScaleInsects.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/ScaleInsects2.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/ScaleInsects3.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/ScaleInsects4.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/ScaleInsects5.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/ScaleInsects6.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/ScaleInsects7.jpg',
          ]
       },
       
       {
          type: 'Pest',
          keywords: [],
          fil_stage_plant_affected:'Namumulaklak',
          fil_effect:'Maaaring masira ng uod ang anim na pung porsiyento ng dahon. Ang pagkasira ng mga dahon ay sanhi ng pagka-antala ng paglaki ng bunga nito.',
          fil_part_destroyed:'Dahon',
          fil_stage_threatening:'Larva',
          fil_symptoms:'Ang mga dahon ay nakatupi o nabibilog at ang pagkakabilog ng dahon ay maaaring umabot sa labinlimang sentimetro kung ang gagawa ay isang full-grown na larva.',
          fil_description: 'Ang mga itlog ay dilaw at matatagpuan sa ilalim ng mga dahon o kaya naman sa gilid nito. Maraming itlog ang maaaring nasa iisang dahon. Ang larva naman nito ay maputlang luntian ang kulay at mayroong maiikli at maninipis na balahibo. Ang ulo nito ay kulay itim ay hugis puso kung sa harap ito titignan. Umaabot ito sa habang anim na sentimetro. Ang pupa naman nito ay kayumangging naninilaw. Mayroon itong habang apat hanggang anim na sentimetro. Ang mga adult naman ay kayumanggi ang kulay. Ang sakop ng pakpak nito ay nasa lima hanggang lima at kalahating sentimetro para sa mga lalaki at anim hanggang anim at kalahating sentimetro naman sa mga babae.',
          fil_plant_affected: 'Saging',
          fil_classification: '',
          fil_treatment:'Ang mga natural na kaaway ng banana leaf roller ang pangunahing nakapupuksa sa mga ito. Maaari namang gamitin ang kamay sa pagtanggal ng mga larva na matatagpuan sa dahon ng saging. Kung hindi naman posible, maaaring gumamit ng kemikal na gamot sa bagong pisang larva ngunit hindi ito masyadong nirerekomenda.',
          fil_name: 'Banana Leaf Roller',
          stage_plant_affected: 'Flowering',
          effect: 'The caterpillars can damage 60% of the plant leaf area. Leaf damage lowers banana yields due to delayed fruit maturity and reduced bunch size.',
          part_destroyed: 'Leaf',
          stage_threatening: 'Larva',
          symptoms: 'Parts of the leaves of banana trees are incised and rolled up. The roll of a full-grown larva may be up to 15 cm long.',
          description: 'Eggs: The eggs are conspicuously yellow. They are laid singly on the undersides of leaves, but a number of eggs may be deposited on the same leaf. Larva: The larva has not been described in detail. It is pale green and clothed with short, silky hairs. The head is black, and heart-shaped in frontal view. As in all hesperiid larvae, there is a conspicuous "neck": the thorax directly behind the head is much narrower than the head. The larva soon becomes covered with a white, waxy powder, a waste product of its metabolism. The full-grown larva reaches a length of about 6 cm. Pupa: The slender pupa is yellow-brown and covered with the same waxy powder as the larva. It reaches a length of 4-6 cm, and has a long proboscis that reaches to the tip of the abdomen and is free from where it leaves the wing sheaths. Adults: Adults are brown on the upper and under side. The wingspan is 5-5.5 cm in the male, 6-6.5 cm in the female. The apex of the forewing is acute and the outer margin straight (slightly convex in the female). The forewing has three conspicuous, pale-yellow, semi-hyaline spots, in space 2, space 3 and cell. The scales of these spots are perpendicular to the wing surface. The rectangular spot in space 2 is the largest. It is partly overlapped by the cell spot, which is also rectangular, but outwardly excavate (rounded in the Moluccas). The spot in space 3 is more or less triangular and isolated.',
          plant_affected: 'Banana',
          order: 'Lepidoptera',
          classification: 'Caterpillar-like',
          treatment: 'Natural enemies generally keep populations of E. thrax under control, even in areas where it does not occur naturally. In case of an outbreak, hand-removal of the easily found leaf rolls is the best option for control; however, if this is not possible, chemical treatment directed at the newly-hatched larvae may be effective, but is seldom required.',
          sci_name: 'Erionota thrax',
          eng_name: 'Banana Leaf Roller',
          name:'Banana Leaf Roller',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/BananaLeafRoller.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/BananaLeafRoller.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/BananaLeafRoller2.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/BananaLeafRoller3.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/BananaLeafRoller4.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/BananaLeafRoller5.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/BananaLeafRoller6.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/BananaLeafRoller7.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/BananaLeafRoller8.jpg',
          ]
       },
       
       {
          type: 'Pest',
          keywords: [],
          fil_stage_plant_affected:'Namumulaklak, Seedling',
          fil_effect:'Hinihigop ng mga lace bugs ang katas mula sa puno ng saging kaya ang sustansya ay hindi dumadaloy nang mabuti sa buong puno.',
          fil_part_destroyed:'Dahon',
          fil_stage_threatening:'Adult, Nymphs',
          fil_symptoms:'Ang mga dahon ay nagkakaroon ng hindi normal na kulay, nakakaron din ng pagkalagas ng dahon, butas sa loob ng katawan ng puno, at pagkabulok',
          fil_description: 'Ang mga adult na lace bugs ay may magagandang pakpak. Ang ibang species ay puti habang ang iba naman ay may markang itim o kayumanggi. Sila ay may habang nasa 1/8 hanggang 3/16 inch. Ang nymphs naman ay walang pakpak pero may spine sa kanilang mga likod.',
          fil_plant_affected: 'Saging',
          fil_classification: '',
          fil_treatment:'Para mawala ang mga lace bugs, kailangang tanggalin ang mga dahon na nagtatago sa mga ito. Para naman sa kemikal na kontrol, ang paggamit ng isa sa mga sumusunod ay makatutulog: Malathion 50 EC @ 2 ml/lt, Dimethoate 30 EC @1 ml/lt, Methyl demeton 25 EC @1 ml/lt, Phosphamidon 40 SL @1.25 ml/lt, Monocrotophos 36 WSC @1 ml/lt, Methomyl 25 EC @2 ml/lit, 3% Neem oil.',
          fil_name: 'Lace Bug',
          stage_plant_affected: 'Flowering, Seedling',
          effect: 'Lace bug sucks sap from foliage; it acts as a vector in transmission of Phytoplasma from root (wilt) affected palms to healthy palm.',
          part_destroyed: 'Leaf',
          stage_threatening: 'Adult, Nymphs',
          symptoms: 'Leaves have abnormal colours, abnormal leaf fall, internal feeding, necrotic areas, and wilting.',
          description: 'Adult lace bugs have beautifully sculptured wings that resemble an intricate, lacy network. There are also lacy extensions at each side on the front part of the body and an expanded, lacy hood that extends over the head. Some species are almost entirely white while others are marked with black or brown. They range in size from 1/8 to 3/16 inch. Nymphs do not have wings but usually have spines on the back.',
          plant_affected: 'Banana',
          order: 'Hemiptera',
          classification: 'Fly-like',
          treatment: 'To manage lace bugs, remove leaflets harboring the insects and destroy them. For chemical method, spraying one these can help: Malathion  50 EC @ 2 ml/lt, Dimethoate  30 EC @1 ml/lt, Methyl demeton 25 EC @1 ml/lt, Phosphamidon 40 SL @1.25 ml/lt, Monocrotophos 36 WSC @1 ml/lt, Methomyl 25 EC @2 ml/lit, 3% Neem oil.',
          sci_name: 'Stephanitis typicus',
          eng_name: 'Lace Bug',
          name:'Lace Bug',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/LaceBug.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/LaceBug.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/LaceBug2.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/LaceBug3.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/LaceBug4.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/LaceBug5.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/LaceBug6.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/LaceBug7.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/LaceBug8.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/LaceBug9.jpg',
          ]

       },

       {
          type: 'Pest',
          fil_stage_plant_affected:'',
          fil_effect:'',
          fil_part_destroyed:'',
          fil_stage_threatening:'',
          fil_symptoms:'',
          fil_description: '',
          fil_plant_affected: 'Kakaw',
          fil_classification: '',
          fil_treatment:'',
          fil_name: 'Redbanded Thrips',
          stage_plant_affected: '',
          effect: 'The larvae and adults feed on the foliage and the fruit by piercing the epidermis with their mouthparts. Redbanded thrips prefer young foliage and their feeding causes leaf silvering, distortion, leaf drop. The thrips destroys the cells on which it feeds, causes injury to the fruit, and leaves unsightly dark colored droplets or blotches of excrement on the leaf surface. A more serious injury is leaf drop, which may denude trees. Honeydew excretory products from red-banded thrips and other insect infestations fall to leaves, fruits or objects beneath, giving rise to the objectionable fruit-degrading, black sooty mold.',
          part_destroyed: 'Leaf, Pods',
          stage_threatening: 'Adult',
          symptoms: 'Symptoms of S. rubrocinctus attack on cocoa result from feeding by adults and/or larvae on the leaves and pods. On leaves, the feeding punctures cause the development of chlorotic spots and premature leaf drop, while on the pods, they cause brown patches that coalesce during severe infestations to form a dark brown, corky layer of dead cells that makes the estimation of pod ripeness virtually impossible. Necrotic lesions are produced in the leaves and pods by adults and larvae, and in the flowers by adults. Small brown patches of excretory droplets, typical of thrips infestation, are an obvious means of identifying damage.',
          description: 'The female is about 1.2 mm in length and has a dark brown to black body underlain by red pigment chiefly in the first three abdominal segments; the anal segments retain a reddish black color, and the wings are dark. The male is similar, but smaller and is seldom collected. The nymph and pupa are light yellow to orange with the first three and last segments of the abdomen bright red. After hatching, there are two nymphal stages lasting nine to ten days. Fully-grown second stage nymphs are about 1 mm long. The two nymphal stages are followed by two resting stages (pre-pupal and pupal stages). The resting stages last three to five days before adults emerge. Eggs are inserted into the lower leaf surface and covered with a drop of fluid, which dries to form a black, disc-like cover. Females lay up to 50 eggs and live for up to one month. The eggs hatch within four days.',
          plant_affected: 'Cacao',
          order: 'Thysanoptera',
          classification: 'Two or one unit body',
          treatment: 'Redbanded thrips are preyed upon by a large assortment of natural predators such as spiders, mites, lacewings, predatory thrips, and predatory bugs, especially minute pirate bugs. Chemical controls are not always necessary for this thrips, as natural controls are apparently effective most of the time.',
          sci_name: 'Selenothrips rubrocinctus',
          eng_name: 'Redbanded Thrips',
          name:'Redbanded Thrips',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/CacaoThrips.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/CacaoThrips.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/CacaoThrips2.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/CacaoThrips3.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/CacaoThrips4.jpg',
          ]

       },

       {
          type: 'Pest',
          fil_stage_plant_affected:'',
          fil_effect:'',
          fil_part_destroyed:'',
          fil_stage_threatening:'',
          fil_symptoms:'',
          fil_description: '',
          fil_plant_affected: 'Kakaw',
          fil_classification: '',
          fil_treatment:'',
          fil_name: 'Camellia Aphids',
          stage_plant_affected: 'Flowering stage, Fruiting stage, Seedling stage, Vegetative growing stage',
          effect: 'Aphids feed by sucking sap from their hosts. This often causes the plants to become deformed, the leaves curled and shriveled and, in some cases, galls are formed on the leaves. In most cases the black citrus aphid is a minor pest of coffee wherever it is found. This pest congregates on the tender young shoots, flower buds and the undersides of young leaves. They are not known to feed on the older and tougher plant tissues. Like other soft bodied insects such as leafhoppers, mealybugs and scales, aphids produce honeydew. This sweet and watery excrement is fed on by bees, wasps, ants and other insects. The honeydew serves as a medium on which a sooty fungus, called sooty mold, grows. Sooty mold blackens the leaf, decreases photosynthesis activity, decreases vigor and causes disfigurement of the host. When the sooty mold occurs on fruit, it often becomes unmarketable or of a lower grade as the fungus is difficult to wash off.',
          part_destroyed: 'Leaf',
          stage_threatening: 'Adult',
          symptoms: 'Growing point: distortion; Inflorescence: twisting and distortion; Leaves: abnormal forms, leaves rolled or folded',
          description: 'Eggs are not produced by this species. Females give birth to living young. There are four nymphal stages of this aphid. The first stage is approximately 1/36 inch in length and the last about 1/17 inch. They are without wings and brownish in color. Only females are found. They are oval, shiny black, brownish-black or reddish brown in color, either with or without wings, measuring 1/25 to 1/12 inch in body length and having short black-and-white banded antennae. Winged individuals tend to have darker abdomens and be slightly thinner. The incidence of winged individuals is dependent on the population density and leaf age. Reproduction is partheneogenic or non sexual. Females start reproducing soon after becoming adults. They produce 5 to 7 live young per day, up to a total of about 50 young per female.',
          plant_affected: 'Cacao',
          order: 'Hemiptera',
          classification: 'Two or one unit body',
          treatment: 'Non-Chemical Control: Several natural enemies of the black citrus aphid keep this pest under control. Sometimes to the extent that insecticides are usually unnecessary; Chemical Control: If chemical control becomes necessary either insecticidal oil, or a synthetic aphidicide(insecticide) may be used. Chemical control should only be applied at the first signs of damage during periods of flush growth. Flush growth (young red leaves) on coffee should be completely moistened after application of chemicals.',
          sci_name: 'Toxoptera aurantii',
          eng_name: 'Camellia Aphid, Citrus Aphid, Black Citrus Aphid',
          name:'Camellia Aphids',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/CamelliaAphids.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/CamelliaAphids.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/CamelliaAphids2.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/CamelliaAphids3.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/CamelliaAphids4.jpg',
          ]

       },


       {
          type: 'Pest',
          fil_stage_plant_affected:'',
          fil_effect:'',
          fil_part_destroyed:'',
          fil_stage_threatening:'',
          fil_symptoms:'',
          fil_description: '',
          fil_plant_affected: 'Kakaw',
          fil_classification: '',
          fil_treatment:'',
          fil_name: 'Cacao Tussock Moth',
          stage_plant_affected: 'Vegetative growing stage',
          effect: 'The larvae cause serious damage to the young leaves of cacao in the Philippines, both in nurseries and plantations. When very numerous they can cause total defoliation, killing or stunting the tree',
          part_destroyed: 'Leaf',
          stage_threatening: 'Adult',
          symptoms: 'Leaves: external feeding',
          description: 'Eggs: The eggs are pillbox-shaped, pale whitish-brown, with a darker ring encircling a depressed top. Larva: The larva is basically yellowish, sparsely clothed with brown hairs, and with one dorsal and two lateral brown bands. There are paired tufts of long, brown hair on the first thoracic and eighth abdominal segments, projecting forwards and backwards, respectively, and lateral tufts of grey hair on the first and second abdominal segments. As in O. antiqua, there are four dorsal tufts of yellow hair on the first to fourth abdominal segments. The head is red. Pupa: The pupa is stout, glossy black in the male, with numerous small tufts of short hairs. Formed in a loose cocoon incorporating the larval hairs. Adult: Wingspan: 21-30 mm. The head, thorax and abdomen are brown in the male. The forewings are of the same colour, with an indistinct oblique subbasal line. Crossing these are waved antemedial and postmedial lines which approach each other at the lower angle of the cell, the area between them slightly tinged with bluish-grey and with a waved dark line edged with white on each side of the discocellulars. There are also two indistinct waved submarginal lines. The wing apex is slightly tinged with grey, with some subapical dark streaks. Hind wings dark brown. The flightless female is brownish grey, thickly haired, with rudimentary wings.',
          plant_affected: 'Cacao',
          order: 'Lepidoptera',
          classification: 'Moth-like',
          treatment: 'Most insecticides used to control other orchard pests will also control this species.',
          sci_name: 'Orgyia postica',
          eng_name: 'Cacao Tussock Moth, Cocoa Tussock Moth, Small Tussock Moth',
          name:'Cacao Tussock Moth',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/CacaoTussockMoth.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/CacaoTussockMoth.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/CacaoTussockMoth2.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/CacaoTussockMoth3.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/CacaoTussockMoth4.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/CacaoTussockMoth5.jpg',
          ]

       },


       {
          type: 'Pest',
          fil_stage_plant_affected:'',
          fil_effect:'',
          fil_part_destroyed:'',
          fil_stage_threatening:'',
          fil_symptoms:'',
          fil_description: '',
          fil_plant_affected: 'Kakaw',
          fil_classification: '',
          fil_treatment:'',
          fil_name: 'Mirid Bug',
          stage_plant_affected: 'Flowering stage, Fruiting stage, Seedling stage, Vegetative growing stage',
          effect: 'Estimates of crop loss attributed to damage by Helopeltis spp. are variable and depend on factors such as agricultural practices, control methods, locality, climate, and the plant and insect species involved. Before the use of modern chemical insecticides, crop losses on tea plantations in India sometimes reached 100%.  Feeding damage on tea is most severe during periods of dull, calm, misty weather. Adult Helopeltis spp. prefer shaded, more humid positions near the centre of the plant, and feeding activity is highest in the early morning and late afternoon. On cocoa, feeding damage is concentrated on the pods in all stages of development. Heavy infestations can lead to substantial levels of pod malformation and drop',
          part_destroyed: 'Whole plant',
          stage_threatening: 'Adult',
          symptoms: 'Fruit: abnormal shape, discoloration, internal feeding, lesions (black or brown and scab or pitting), premature drop; Growing point: dieback; Inflorescence: discoloration panicle; Leaves: abnormal colors, abnormal forms, internal feeding, necrotic areas; Stems: dieback, discoloration, internal feeding, necrosis; Whole plant: dwarfing',
          description: 'The adult H. theivora is small bug measuring 6-8 mm in length. The body is slender and elongated with yellowish-brown or olive green head, dark red thorax and yellow and greenish-black abdomen. Appendages are long, dark and delicate. The thorax bears a characteristic dorsal knobbed process.',
          plant_affected: 'Cacao',
          order: 'Hemiptera',
          classification: 'Two or one unit body',
          treatment: 'Chemical control: By spraying DDT (0.1%) and malathion (0.1%) the insect population can be controlled; Biological control: Biological control includes introduction of hyperparasite, Agamermisparadecandata (stainer) which parasitizes the nymphal stage of the mosquito bug; Cultural control: Plant growing in soil having high ratio of available potash to available phosphoric acid show less infestation of this pest. Therefore, cultivation of tea plants in appropriate soil is advisable to keep the pest population under control; Mechanical control: It includes collection and destruction of adult mosquito bugs by hand net.',
          sci_name: 'Helopeltis theivora',
          eng_name: 'Mirid Bug, Tea Mosquito, Tea Bug',
          name:'Mirid Bug',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/MiridBug.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/MiridBug.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/MiridBug2.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/MiridBug3.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/MiridBug4.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/MiridBug5.jpg',
          ]

       },


       {
          type: 'Pest',
          fil_stage_plant_affected:'',
          fil_effect:'',
          fil_part_destroyed:'',
          fil_stage_threatening:'',
          fil_symptoms:'',
          fil_description: '',
          fil_plant_affected: 'Kakaw',
          fil_classification: '',
          fil_treatment:'',
          fil_name: 'Carpenter Moth',
          stage_plant_affected: 'Seedling stage',
          effect: 'This pest might cause the plant to die',
          part_destroyed: 'Whole plant',
          stage_threatening: 'Adult',
          symptoms: 'Growing point: internal feeding, boring; Stems: dieback, internal feeding, wilt; Whole plant: internal feeding, plant dead, dieback',
          description: 'The adult moths are white, medium sized with a wing expanse of 28-40 mm. Males are smaller than females. The wings are long and narrow with small black spots on the forewings and small dots on the outer margin of the hind wings. Bipectinate antennae are present in both sexes. Proboscis is absent. The abdomen is long and posterior tapering.',
          plant_affected: 'Cacao',
          order: 'Lepidoptera',
          classification: 'Moth-like',
          treatment: 'Control is often not practical because of the large number of host species used by the pest. It is also complicated as Z. coffeae is one of several stem-boring pests. The removal and burning of dead and dying branches and seedlings will help to reduce pest numbers. Chemical control can be effective. Swabbing the main stem with a suspension of carbaryl was effective as a prophylactic measure. However, other studies have found such measures ineffective.',
          sci_name: 'Zeuzera coffeae',
          eng_name: 'Carpenter Moth, Carpenter Stemborer, Cocoa Pod and Stemborer, Coffee Leopard Moth',
          name:'Carpenter Moth',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/CarpenterMoth.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/CarpenterMoth.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/CarpenterMoth2.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/CarpenterMoth3.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/CarpenterMoth4.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/CarpenterMoth5.jpg',
          ]

       },


       {
          type: 'Pest',
          fil_stage_plant_affected:'',
          fil_effect:'',
          fil_part_destroyed:'',
          fil_stage_threatening:'',
          fil_symptoms:'',
          fil_description: '',
          fil_plant_affected: 'Kakaw',
          fil_classification: '',
          fil_treatment:'',
          fil_name: 'Cacao Pod Borer',
          stage_plant_affected: 'Fruiting stage',
          effect: 'C. cramerella has become the most important insect pest of cocoa in many parts of South-East Asia over the past 150 years. C. cramerella causes losses to cocoa by boring in the placental tissues and the wall of the pod, disrupting the development of the beans. Feeding results in pods that may ripen prematurely, with small, flat beans, often stuck together in a mass of dried mucilage. The beans from seriously infested pods are completely unusable, and in heavy infestations over half the potential crop can be lost. In light infestations there is no loss, but control may still be needed to prevent higher infestations from developing.',
          part_destroyed: 'Pods',
          stage_threatening: 'Adult',
          symptoms: 'External damage to the pod caused by the cocoa pod borer is seen as entry and exit holes created by the tunnelling larvae on the husk, and overall premature or uneven ripening (yellowing) of pods caused by internal feeding activity. If pods are cut open, characteristic tunnels and scarification caused by feeding commonly cause beans to stick together. Harvested beans clump together in severe infestations and may be impossible to extract from damaged pods.',
          description: 'Adult: The adult is a small brown moth, ca 7 mm in length. It has a wingspan of about 12 mm characterized by bright yellow patches at the tips of the forewings. The moths have very long antennae which are swept backwards in their natural resting position. Moths in flight have an appearance similar to that of large, slow-flying mosquitoes. Eggs: Eggs are yellow-orange, flattened and just visible to the naked eye (ca 0.5 x 0.2 mm). Rectangular indentations cover the surface of the egg. On hatching, eggs become translucent, the shell being whitish but darkened by faeces within. Larva: First-instar larvae are translucent white in colour and ca 1 mm long. Late-instar larvae are ca 10 mm long and creamy coloured while still inside the pod, but greenish after they emerge to pupate. Pupa: Pupae lie beneath a light-brown waterproof silken membrane tightly drawn over a depression on a pod surface or leaf.',
          plant_affected: 'Cacao',
          order: 'Lepidoptera',
          classification: 'Moth-like',
          treatment: 'Harvesting: Rampasan; Mechanical control: Sleeving; Integrated Pest Management: The most immediate reductions in C. cramerella are likely to come about through better managed harvesting and spraying. Both of these rely on well-pruned trees kept to a height low enough to collect and/or spray all pods. See sections on Harvesting (Rampasan) and Chemical Control. Longer term control may be improved by grafting or replanting with hard-walled clones. Further releases of exotic natural enemies may provide additional partial control, if suitable parasites can be found.',
          sci_name: 'Conopomorpha cramerella',
          eng_name: 'Cacao Pod Borer, Cocoa Pod Borer, Cacao Moth, Javanese Cocoa Moth',
          name:'Cacao Pod Borer',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/CacaoPodBorer.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/CacaoPodBorer.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/CacaoPodBorer2.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/CacaoPodBorer3.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/CacaoPodBorer4.jpg',
          ]

       },


       {
          type: 'Pest',
          fil_stage_plant_affected:'',
          fil_effect:'',
          fil_part_destroyed:'',
          fil_stage_threatening:'',
          fil_symptoms:'',
          fil_description: '',
          fil_plant_affected: 'Kape',
          fil_classification: '',
          fil_treatment:'',
          fil_name: 'Coffee Mealybug',
          stage_plant_affected: 'Flowering stage, Fruiting stage, Seedling stage, Vegetative growing stage',
          effect: 'Mealybugs are pests of economic importance for a wide range of hosts. They can cause severe damage to crops, making the crop not suitable for market.',
          part_destroyed: 'Whole plant',
          stage_threatening: 'Adult',
          symptoms: 'Fruit: external feeding, honeydew or sooty mold; Growing point: external feeding; Inflorescence: external feeding, honeydew or sooty mold; Leaves: external feeding, honeydew or sooty mold, wilting; Roots: external feeding; Stems: external feeding, honeydew or sooty mold, wilt; Vegetative organs: external feeding, mold growth',
          description: 'Round, soft-bodied insects that are brownish red or tan in colour, with clumped segments of pink/purple wax covering their bodies. They are 1–3 mm in size and have an indistinct black stripe on their back.',
          plant_affected: 'Coffee',
          order: 'Hemiptera',
          classification: 'Two or one unit body',
          treatment: 'To prevent the spread of coffee mealybugs, you should: always use clean planting material, avoid sharing machinery and equipment with other gardeners unless it has been correctly cleaned down, and practice good hygiene measures by ensuring shoes, clothing, equipment (including cutting tools), machinery and vehicles are clean and free of soil and plant material before and after use.',
          sci_name: 'Planococcus kenyae',
          eng_name: 'Coffee Mealybug, Oriental Cacao Mealybug, Lilac Mealybug',
          name:'Coffee Mealybug',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/CoffeeMealybug.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/pestsCoffeeMealybug.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/pestsCoffeeMealybug2.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/pestsCoffeeMealybug3.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/pestsCoffeeMealybug4.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/pestsCoffeeMealybug5.jpg',
          ]

       },

       {
          type: 'Pest',
          fil_stage_plant_affected:'',
          fil_effect:'',
          fil_part_destroyed:'',
          fil_stage_threatening:'',
          fil_symptoms:'',
          fil_description: '',
          fil_plant_affected: 'Kape',
          fil_classification: '',
          fil_treatment:'',
          fil_name: 'Green Scale',
          stage_plant_affected: '',
          effect: 'This tropical soft scale may occur on cultivated hosts in commercial nurseries, resulting in a quarantine of the infested plants until the scale is under control. Usually infestations are accompanied by sooty mold, a black fungus growth, which develops on honeydew excreted by the scale. Accumulations of sooty mold cause the infested plant to be unsightly.When large populations are present yellowing, defoliation, reduction in fruit set and loss in plant vigor are caused. This pest is especially damaging to young trees in the first two years after transplanting.',
          part_destroyed: 'Fruit, Leaf, Stem',
          stage_threatening: 'Adult',
          symptoms: 'Fruit: external feeding; Leaves: honeydew or sooty mold; Stems: external feeding',
          description: 'Adults: The adult female is shiny pale green with a conspicuous black, irregular U-shaped internal marking that is dorsally visible to the naked eye. Two sub-marginal black eye spots are also present and can be seen with a hand lens. The outline shape may be described as elongate-oval and moderately convex. Adult scales are 2.5 to 3.25 mm. Dead scales are light brown or buff color and the black internal marking is lost. Nymphs: Nymphs, or immature green scales are oval, flat and yellowish green in color, and have six short legs. There are three nymphal stages before becoming an adult, each stage being larger and more convex than the previous stage. Eggs: Eggs are whitish green and elongate-oval and are laid singly and hatch beneath the female where they are protected. Eggs hatch from a few minutes to several hours after being laid.',
          plant_affected: 'Coffee',
          order: 'Hemiptera',
          classification: 'Two or one unit body',
          treatment: 'Chemical control: Direct insecticidal sprays to lower leaf surfaces and new growth to give thorough coverage; Biological control: Several entomogenous fungi were observed associated with green scale on citrus, and some apparently played an important role in the natural limitations of the scale on citrus during certain seasons of the year. In Florida, these fungi include: the white-fringed fungus, Verticilium (Cephalosporium ) lecanii (Zimmerman); Aschersonia cubensis (Cuban aschersonia); the pink scale fungus, Nectria diploa; and a grayish blue fungus The white-fringed fungus is the most common and apparently causes the highest percentage of mortality. All attempts to artificially spread or inoculate the fungus to healthy green scale were unsuccessful. The green scale is often associated with ants. Controlling ant populations help to reduce levels of this pest. Ants protect the green scales from lady beetles and other predators. In turn, the ants feed on the sweet honeydew excreted by the scales. Without the ants the green scale is more vulnerable to predation by beetles; Cultural Control: Scales are usually brought into greenhouse situations with the introduction of infested plant material. All plant material going into the greenhouse should be thoroughly inspected for scales and other insects before being introduced.',
          sci_name: 'Coccus viridis',
          eng_name: 'Green Scale, Coffee Scale Insect, Soft Green Scale',
          name:'Green Scale',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/GreenScale.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/GreenScale.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/GreenScale2.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/GreenScale3.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/GreenScale4.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/GreenScale5.jpg',
          ]

       },

       {
          type: 'Pest',
          fil_stage_plant_affected:'',
          fil_effect:'',
          fil_part_destroyed:'',
          fil_stage_threatening:'',
          fil_symptoms:'',
          fil_description: '',
          fil_plant_affected: 'Kape',
          fil_classification: '',
          fil_treatment:'',
          fil_name: 'Coffee Stem Borer',
          stage_plant_affected: '',
          effect: 'Adult X. quadripes lay their eggs in cracks or crevices in the bark of living Coffea trees or into dead wood. The larvae feed in the upper roots, to a depth of about 18 cm, or lower parts of the stems up to about 1 m. There are no external signs of attack except for the adult emergence holes, which are probably about 4-7 mm in diameter. Tree death and stems snapping off close to the ground are a clear indication that an attack by X. quadripes has taken place.',
          part_destroyed: 'Roots, Stem',
          stage_threatening: 'Adult',
          symptoms: 'Internal feeding on roots and stem',
          description: 'It is fairly large dark-brown beetle of about 1cm length. Adult bears a pair of prominent antennae and characteristically, white or yellow stripes on the elytra',
          plant_affected: 'Coffee',
          order: 'Coleoptera',
          classification: 'Two or one unit body',
          treatment: 'Cultural control: The general methods of cultural control of X. quadripes included uprooting and burning of infested trees, treating the stems during the oviposition period to kill or dislodge eggs and young larvae, the catching and killing of adults during their period of activity, and maintaining shelter belts in order to shade the coffee bushes; Biological control: The two most easily reared parasitoids found in plantations, Doryctes strioliger and Sclerodermus domesticus, were mass bred and released, but did not decrease losses. Further, experimentation showed that although the rate of parasitism could be increased by releases of parasitoids, their numbers fell as soon as releases were stopped. The work was abandoned owing to the high cost of developing a continuous mass-breeding programme.',
          sci_name: 'Xylotrechus quadripes',
          eng_name: 'Coffee Stem Borer',
          name:'Coffee Stem Borer',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/CoffeeStemBorer.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/CoffeeStemBorer.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/CoffeeStemBorer2.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/CoffeeStemBorer3.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/CoffeeStemBorer4.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/CoffeeStemBorer5.jpg',
          ]

       },

       {
          type: 'Pest',
          fil_stage_plant_affected:'',
          fil_effect:'',
          fil_part_destroyed:'',
          fil_stage_threatening:'',
          fil_symptoms:'',
          fil_description: '',
          fil_plant_affected: 'Kape',
          fil_classification: '',
          fil_treatment:'',
          fil_name: 'Coffee Berry Borer',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: 'Adult',
          symptoms: 'Fruit: internal feeding, lesions (black or brown), premature drop; Seeds: internal feeding, rot',
          description: 'Eggs - elliptical or ovoid in shape, milky-white and shiny when first laid, 0.5-0.8 mm long, 0.25-0.35 mm wide. Larvae - there are two larval instars for the female and one for the male. White, legless, vermiform body with fine but sparse hairs, brown hypognathous head, 3-segmented thorax and 9-segmented abdomen. Well-developed mouth parts. First instar is about 0.6-0.8 mm long, and a fully developed second instar female larva is about 2.2 mm long. Pupae - white, becoming yellow after 10 days of development. Mandibles, eyes, antennae, elytra and membraneous wings are differentiated and easily visible. Female body length 1.7 mm; male 1.2 mm. Adults - males are apterous, stunted and deformed. Females with body 1.4-1.6 mm long and 2.3 times as long as wide, entirely black. antennal funicle usually 5-segmented, antennal club with suture 1 almost straight and partly septate; suture 2 slightly procurved and marked by setae. Frons broadly convex, with a deep, long median groove, surface finely wrinkled with net-like markings. Eyes with slight indentation. Pronotum with fine, raised basal and posterolateral marginal bead, anterior margin bearing 4-8 coarse teeth of about equal size, disc convex, summit rather high, rather shiny, not reticulate, small rasp-like teeth on anterior slope abundant, 25 or more, rather small, posterior area subreticulate, with small, isolated, rather numerous granules, intermixed with some shallow punctures laterally. Elytra with declivity convex, gradual, extending almost to middle of elytra, striae scarcely impressed, strial punctures rather coarse, moderately deep, usually reticulate at centre, each with a minute, non-erect seta, interstices smooth, shining, as wide as striae, with single rows of non-granulate punctures bearing unflattened, slender scales, each at least 8 times longer than wide, spaced between rows by scale length, slightly closer within rows, discal and declival scales equal in width, without additional vestiture.',
          plant_affected: 'Coffee',
          order: 'Coleoptera',
          classification: 'Beetle-like',
          treatment: 'Prevention: Phytosanitary Measures - Transportation of seeds containing the H. hampei has been the main cause of its spread worldwide. A few coffee-producing countries or zones within countries are still free from this insect and in these cases stringent quarantine precautions are strongly recommended. Treatment of infested coffee berries at a temperature of approximately -15°C for 48 h provided 100% control of all life stages',
          sci_name: 'Hypothenemus hampei',
          eng_name: 'Coffee Berry Borer, Coffee Seed Borer',
          name:'Coffee Berry Borer',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/CoffeeBerryBorer.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/pestsCoffeeBerryBorer.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/pestsCoffeeBerryBorer2.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/pestsCoffeeBerryBorer3.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/pestsCoffeeBerryBorer4.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/pestsCoffeeBerryBorer5.jpg',
          ]

       },

       {
          type: 'Pest',
          fil_stage_plant_affected:'',
          fil_effect:'',
          fil_part_destroyed:'',
          fil_stage_threatening:'',
          fil_symptoms:'',
          fil_description: '',
          fil_plant_affected: 'Kape',
          fil_classification: '',
          fil_treatment:'',
          fil_name: 'Coffee Leaf Folder',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: '',
          symptoms: '',
          description: '',
          plant_affected: 'Coffee',
          order: '',
          classification: '',
          treatment: '',
          sci_name: '',
          eng_name: 'Coffee Leaf Folder',
          name:'Coffee Leaf Folder',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/placeholder.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/placeholder.jpg',
          ]

       },


       {
          type: 'Pest',
          fil_stage_plant_affected:'',
          fil_effect:'',
          fil_part_destroyed:'',
          fil_stage_threatening:'',
          fil_symptoms:'',
          fil_description: '',
          fil_plant_affected: 'Niyog o Buko',
          fil_classification: '',
          fil_treatment:'',
          fil_name: 'Coconut Scale Insect',
          stage_plant_affected: 'Flowering stage, Fruiting stage, Seedling stage, Vegetative growing stage',
          effect: 'A. destructor is potentially the most destructive pest species on coconut, wherever it occurs in the world; the undersurface of the leaves is mainly attacked, but frond stalks, flower clusters and young fruit can also be affected. In extreme cases, the leaves dry up, entire fronds drop off, the crown dies and the whole crop is lost. Neglected coconut plantations are particularly susceptible to damage by A. destructor. A. destructor is also an important economic pest of mango in Asia, Africa, the Philippines, India and Brazil; and of banana in Asia, the Pacific Islands, West Indies, Africa, Madagascar and South America. It attacks the leaves and fruits of oil palms, reducing the quality of the fruits. ',
          part_destroyed: 'Fruit, Leaf, Stem',
          stage_threatening: 'Adult',
          symptoms: 'On leaves, A. destructor causes yellow spots to develop beneath the insects, due to the toxicity of saliva injected in to plant tissues while feeding. Entire leaves may turn yellow to brown and fall, and fruits may be discoloured, stunted or fall prematurely. The bright yellow colour of affected coconut palms is clearly visible from a great distance. The undersurface of the leaves is mainly attacked, but frond stalks, flower clusters and young fruit can also be affected. In extreme cases, the leaves dry out, entire fronds drop off and the crown dies.',
          description: 'Coconut scale resembles other armored scales in that the body is protected by a waxy cover. Infestations may be noted by the formation of closely packed colonies composed of what resemble miniature fried eggs. Females develop through two nymphal stages, while males have an additional non-feeding pre-pupal stage (four immature stages). Positive identification of coconut scales requires that adult females be slide mounted and the diagnostic characters observed at high magnification. Eggs: Freshly laid eggs are smooth, elongate and whitish, becoming pale yellow over time. Eggs are laid under the scale cover around the body of the female. Mean length and width of eggs are 0.22 mm and 0.09 mm, respectively. First instar nymphs: Newly hatched nymphs (also called crawlers) are free-moving and recognized by the presence of legs, antennae, and a pair of bristles at the tip of abdomen. Crawlers are light green to yellowish brown, translucent and somewhat oblong, with an average length and width of 0.23 mm and 0.11 mm, respectively. Second instar female: Females remain pale yellow, circular and somewhat transparent in the second instar, which lasts for 8-10 days. Females nymphs are 0.6-1.1 mm long. Male nymphs: Development of male characteristics starts in the middle of the second instar. Male covers become reddish brown and more elliptical in shape, and then transform in stages into the pre-pupal, pupal and adult stages. The second instar lasts for 5-8 days for males. The male pre-pupal and pupal stages are spent under the scale produced by the second instar. Adult females: Adult female coconut scales have a circular or broadly oval cover that is 1.5-2.0 mm in diameter. The cover is flat and translucent with a subcentral pale exuviae. Bodies of slide-mounted specimens are 0.7-1.2 mm in length with a pyriform and membranous body. Diagnostic characteristics include: three pairs of lobes with no indication of a fourth pair; plates long, flat and fringed; and with sclerotization on the dorsum of the pygidium. Adult males: Adult male coconut scales are small, two-winged, reddish, gnat-like insects with eyes, antennae, three pairs of legs and long appendages. Adult males do not feed and are short lived.',
          plant_affected: 'Coconut',
          order: 'Hemiptera',
          classification: 'Two or one unit body',
          treatment: 'Biological Control: Over 40 species of parasitoids and predators, and several fungal pathogens, are known to attack coconut scale.  In the absence of these natural enemies, population explosions of this pest can occur. Aphytis melinus DeBach and Aphytis lingnanensis Compere (Hymenoptera: Aphelinidae) are the most common parasitoid species controlling the coconut scale populations in Fiji and the Philippines. Aphytis melinus and/or another parasitoid, Comperiella bifasciata Howard (Hymenoptera: Encyrtidae), were introduced into Hawaii, California, Argentina and other regions for the control of coconut scale. Cultural control: Pruning and training of fruit trees and proper disposal of infested leaves, branches and twigs will help control scale insects on nursery plants and trees. Excessive use of plant fertilizers contributes to scale outbreaks. Chemical control:  Various insecticides are registered for control of armored scales in ornamental and fruit crops. Crawler stages are generally the most susceptible to insecticides. Contact action insecticides, including horticultural oils, become progressively less effective once the scale insects develop their waxy cover. Insect growth regulators may be effective, provided they are applied when the immature stages are present. Location of the insect on the plant, growth stage of the plant, and solubility of the insecticide influence the effectiveness of systemic insecticides applied for control of armored scales. Several spray applications at 15-20 day intervals may be necessary for complete management of a heavy infestation. The toxicity of insecticides to parasitoids and other beneficial insects should be considered before starting a spray program for scale insects. Since coconut scale is a quarantine pest in many areas, phytosanitary treatment with gamma irradiation has been developed as a potential control measure for this scale.',
          sci_name: 'Aspidiotus destructor, Aspidiotus rigidus',
          eng_name: 'Coconut Scale Insect, Coconut Scale',
          name:'Coconut Scale Insect',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/CoconutScaleInsect.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/CoconutScaleInsect.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/CoconutScaleInsect2.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/CoconutScaleInsect3.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/CoconutScaleInsect4.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/CoconutScaleInsect5.jpg',
          ]

       },

       {
          type: 'Pest',
          fil_stage_plant_affected:'',
          fil_effect:'',
          fil_part_destroyed:'',
          fil_stage_threatening:'',
          fil_symptoms:'',
          fil_description: '',
          fil_plant_affected: 'Niyog o Buko',
          fil_classification: '',
          fil_treatment:'',
          fil_name: 'Uwang Niyog, Uang Niyog',
          stage_plant_affected: 'Vegetative growing stage',
          effect: 'On oil palms, O. rhinoceros bores into the base of the cluster of unopened leaves (spears), causing V- or wedge-shaped cuts in the unfolded fronds. Spears may collapse or emerged fronds may break off along the petiole or midrib. In young palms where the spears are narrower and penetration may occur lower down, the effects of damage can be much more severe than in older palms. The young palms affected by the beetle damage are believed to have a delayed immaturity period. Thus, early oil palm yields could be considerably reduced after a prolonged and serious rhinoceros beetle attack.',
          part_destroyed: 'Leaf',
          stage_threatening: 'Adult',
          symptoms: 'O. rhinoceros adults feed in the crown region of both coconut and oil palm. On oil palms they bore through petiole bases into the central unopened leaves. This causes tissue maceration and the presence of a fibrous frass inside and at the entrance to the feeding hole is an indication of its activity within. A single attack may be followed by others on the same palm. These attacks subsequently produce fronds which have wedge-shaped gaps or the characteristic V-shaped cuts to fronds.',
          description: 'Although Oryctes rhinoceros is found in several regions of the world, its shape, size and color are generally consistent. Adult beetles range from 1.2 to 2.5 inches in length (3.0 to 6.3 cm) and are dark brown or black. The ventral surface (underside) of males and females has reddish-brown hairs, but the female has a fuzzy grouping of these hairs at the tip of the abdomen. Both males and females possess a similarly sized horn used for leverage when moving within tightly-packed leaves or within the cavities they create in the crown of palms, the horn length is longer on average for males. Oryctes rhinoceros larvae (grubs) are milky white with red heads. The body is C-shaped, has three pairs of segmented legs, and is grayish posteriorly. Over the course of three instars, or phases between molts, they grow to 4.0 inches long (10.0 cm).',
          plant_affected: 'Coconut',
          order: 'Coleoptera',
          classification: 'Beetle-like',
          treatment: 'Detection can be difficult due to the beetle’s nocturnal activity and residence within trees. Visual signs such as holes bored at the base of leaves and V-shaped feeding damage help locate this beetle. Once detected, management and control are required to mitigate the economic impact of a beetle infestation. Control: Historical control of scarab beetle pests has included chemical and biopesticides, biological control (predators, parasitoids, and pathogens), and trapping with lures. Traps for the coconut rhinoceros beetle contain 4-methyloctanoate, an aggregation pheromone produced by the male beetle. In breeding sites, the fungus Metarhizium anisopliae may be applied for larval control and is distributed by adults. This fungus acts as a biopesticide on immature stages of the beetle. Viruses in the genus Nudivirus have also been associated with Oryctes rhinoceros and may play a role in controlling the beetle in regions where they are invasive. Infection by Oryctes rhinoceros nudivirusdeforms and may kill larvae, and hinders oviposition by females. However, the nudivirus may harm other species and genera of scarabs. In Korea, farmers of Allomyrina dichotoma (Japanese rhinoceros beetle) face a potential disaster if the nudivirus were to infect their populations, which consist of hundreds of larvae grown together in large plastic containers. These beetles are cultivated for sale as pets and to be used in gambling. The result of a Korean study in which Allomyrina dichotoma larvae were infected with the nudivirus was that 60% died in six weeks. There is also concern that the nudivirus may be transmitted to wild populations of Allomyrina dichotoma. There is no clear indication that the Oryctes rhinoceros nudivirus is the major pathogen responsible for losses of Allomyrina dichotoma in Korea and tests are ongoing. Management: Managing the coconut rhinoceros beetle involves removing or destroying organic material that supports larval development such as decaying logs and stumps, removing dead palms, and removing piles of leaves and grass. A study on burning the downed and decomposing trunks of oil palms has shown that only partial burning of sites is ineffective in managing population levels of Oryctes rhinoceros.',
          sci_name: 'Oryctes rhinoceros',
          eng_name: 'Rhinoceros Beetle, Coconut Rhinoceros Beetle, Asiatic Rhinoceros Beetle, Black Beetle, Coconut Black Beetle, Coconut Palm Rhinoceros Beetle',
          name:'Rhinoceros Beetle',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/RhinocerosBeetle.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/RhinocerosBeetle.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/RhinocerosBeetle2.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/RhinocerosBeetle3.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/RhinocerosBeetle4.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/RhinocerosBeetle5.jpg',
          ]

       },

       {
          type: 'Pest',
          fil_stage_plant_affected:'',
          fil_effect:'',
          fil_part_destroyed:'',
          fil_stage_threatening:'',
          fil_symptoms:'',
          fil_description: '',
          fil_plant_affected: 'Niyog o Buko',
          fil_classification: '',
          fil_treatment:'',
          fil_name: 'Coconut Leaf Beetle',
          stage_plant_affected: 'Vegetative growing stage',
          effect: 'Brontispa attacks palms of all ages, although it is most damaging to young palms in nurseries and for the first 4-5 years after planting out in the field, especially in dry areas. Neglected palms are more heavily attacked than those kept free from undergrowth. ',
          part_destroyed: 'Leaf',
          stage_threatening: 'Adult',
          symptoms: 'Both adults and larvae damage the leaflets of young unopened fronds. They graze away the leaf surface in streaks, which are typically parallel to the midrib. The narrow feeding scars enlarge to form irregular, brown blotches as the frond opens. The brown areas shrivel and curl, giving the leaf a characteristic scorched, ragged appearance. Large areas of the leaflets break off leaving the foliage partially skeletonized and its effective photosynthetic tissue may in extreme cases be reduced to virtually nothing. As the leaflets separate when the fronds expand, the adults move to attack younger leaves. They leave narrow chewing marks, which are individually less damaging than larval feeding. Adults cause more damage than larvae due to the longer duration of this stage. The shorter interval between the opening of successive fronds on mature palms, and their larger size, contribute greatly to their relative freedom from attack. A mature palm may be expected to produce a new frond every 4-5 weeks. In young palms, after the rapid emergence of the first few seedling leaves, the fronds are produced less frequently and over the first 4-5 years of its life a young palm will, on average, produce a new frond only once in every 6-7 weeks; under adverse conditions the interval may exceed 8 weeks. Thus, on a young palm there is never more than one frond vulnerable to attack at any one time, and there is usually an interval between the opening of consecutive fronds when there is not one at a vulnerable stage. This results in all immigrant beetles becoming concentrated on those palms which do have a vulnerable frond, and the relatively small size of the fronds renders the damage more devastating. The fronds are larger in mature palms and there may be more than one infested frond at any one time; so that, although the number of beetles may be greater, there is less damage. The rate of frond production gradually speeds up after the palm is about 5 years old, and, by the time it is 8-10 years old, the palm will be producing new fronds at the normal interval of one every 4-5 weeks. It is significant that, at this age, healthy, vigorous palms achieve relative immunity to severe beetle attack.',
          description: 'Eggs: The brown eggs are elliptical, about 1.5 mm long and 1 mm wide, with each end broadly rounded. The slightly convex upper surface has the chorion with a honeycomb sculpturation. They are fixed to the leaf surface by a cementing substance. Larva: The larvae are whitish in colour. The head of the first stage larva is comparatively large compared with the body. The entire cuticle is more densely covered with minute spicules. A seta arises from about the middle of the lateral margin of each thoracic segment, with two setae on each of the abdominal lateral processes. Each process of the tail-shovel bears a large, sharp, curved spine at the inner angle, and a series of five or six setae along the dorsal and ventral margins. The larva is about the same length as the egg, but about 0.75 mm in width. The second-instar larva resembles the full-grown larva more than the first instar. The lateral abdominal processes are longer, each bearing four setae which are comparatively longer than those of the fully developed larva and situated at different points around the periphery of the apex. There are eight setae on the prothorax (four on each side) and six on the meso- and metathorax (three on each side, two setae on the produced part and one posteriorly). The distinct spine at the inner angle of each prong of the tail-shovel is not prominent as in the first-instar. The fully developed larva has the body moderately flat, almost parallel-sided, very slightly and gradually narrowed from the prothorax towards the apex, composed of 13 segments (one head, three thoracic and nine abdominal). It is almost 9 mm long and 2.25 mm wide. The anus is situated ventrally on the ninth segment, if the fold at the anal orifice is considered as representing a segment, then the abdomen should be regarded as 10-segmented. The distinct head bears a pair of 2-segmented antennae; a group of five ocelli, three in a line and two in another, situated behind the antennae; a pair of apically bidentate mandibles. The thoracic segments are broader than they are long, the mesothorax very slightly broader than the prothorax and the metathorax very slightly broader than the mesothorax. The dorsal surface of the prothorax is more strongly sclerotized with a fine median suture and laterally rounded. The meso- and metathorax bears laterally a small knob in the middle, bearing two fine, short setae. There is a pair of well developed 3-segmented legs on each thoracic segment, each terminating in a single claw and fleshy pad-like structure. Each of the first seven abdominal segments is broader than it is long; each of the first three segments is somewhat shorter than the following segments; the eighth and ninth together form the terminal tail-shovel. Each segment bears laterally a moderately long process, ventral to the spiracles. A lateral process is a conical structure projecting horizontally nearly from the middle of the margin, except in the fifth, sixth and seventh segments, in which they appear to arise more from the posterior part. The apical part is subconical and distinctly thinner than the basal part. The entire surface is densely covered with spinules. The apical part bearing three or four setae. The tail-shovel is longer than broad, apically deeply concave, the prongs bent inwards and bluntly-pointed. The upper ridge on each side bearing nine spinules, three smaller on the basal part nearer the large spiracle, four larger on the middle part and two smaller on the bent apical part. There are 4 small spinules on the lower ridge more widely spaced than those on the upper ridge. The upper surface is concave, bearing many irregularly placed transparent areas and the ventral surface is flat. There are 9 pairs of spiracles, one thoracic, between the pro- and mesothorax, situated on a conical structure resembling a lateral process, and one pair dorsally situated on each of the first seven abdominal segments. The larvae undergo five instars which can be distinguished on the morphometrics ( in mm) of the tail-shovel as follows: L1, 0.33, mean 0.13; L2, 0.47, mean 0.20; L3, 0.65, mean 0.29; L4, 0.82, mean 0.37; L5, 0.94, mean 0.45. Pupa: The head bears three processes, one median and one on each side. Each lateral process is fleshy, broadest basally, pointed apically, pre-apically bearing small blunt spine. Thorax with meso- and metanotum each bearing a pair of wings. The abdomen is 9-segmented, the eighth and ninth segments are fused. Each of the first six segments bears laterally a pair of spiracles opening dorsally. Each segment bearing spinules arranged as follows: no spinules on first segment; from segments 2 to 7, two groups of four in transverse line, one nearer the basal margin and the other nearer the apical, those of the basal group are comparatively larger and more widely-spaced, those of the apical line are situated in the intervals of the spinules of the basal group; on segment 8 only two in transverse line near the basal margin. Dorso-laterally bearing a longitudinal series of spinules, one on each of the first seven segments, situated a little posterior to and more inward than the corresponding spiracle (on the seventh in a similar position). Anterior to each spiracle on segments 3 to 6 and in a similar position on 7 is a spine. Laterally on segments 1-7 bearing a group of closely placed spinules bearing moderately long setae, the spinules being less prominent on segments 1-2, or 3. Ventrally, only segments 4-7 bearing spinules. The prongs of the tail-shovel are more slender, somewhat longer than those of the larva, and also lack lateral spines or setae. The last larval exuvium is always retained on the prongs of the tail-shovel. Adult: The adults 8.5-9.5 mm long, 2.00-2.25 mm wide; length of antenna, 2.75 mm. The males are slightly smaller than females. Their colour varies geographically from reddish-brown in Java, to almost black in the Solomon Islands and Irian Jaya. Some specimens have the elytra brown or black, or have a spindle-shaped black marking on the elytral suture. Considerable overlapping of these forms, which were long regarded as distinct species, occurs.',
          plant_affected: 'Coconut',
          order: 'Coleoptera',
          classification: 'Two or one unit body',
          treatment: 'Cultural control: A surgical method of control has been attempted in the Solomon Islands; this involved cutting out and destroying the central unopened frond which harbours the pest.  This procedure must be conducted over a large area at one time to reduce re-infestation from neighbouring palms and must be repeated fairly often to be effective. Palms which were 3-6 years old could stand the loss of one leaf every 6 months, but younger palms could not as this caused too great a reduction in growth rate. However, this method is expensive and will not greatly affect the Brontispa population as a whole unless mature palms are also treated. Mechanical control of the pest by removing affected heart leaves is laborious and has very little effect. Chemical control: Chemicals used to control the pest must reach the insect in the narrow crevices between the leaflets and chemical treatment must be maintained throughout the year because B. longissima breeds continuously, with several generations a year. If beetles start breeding as soon as they reach the young palms, larvae will probably start appearing after about 1 week; if there has been any residual effect from insecticide treatment, or if the invasion rate is slow, it will be considerably longer before the larval population presents a serious risk. The application of chemicals at 10-day intervals was more effective than 3-weekly applications. Frequent applications of high volumes of spray, in excess of that required to provide satisfactory levels of control, caused slight phytotoxicity; growth and the production of new fronds was retarded. Satisfactory control can be achieved at low cost using a fine, low-volume spray applied from above to the central spike of each individual palm. Damage caused by Brontispa is considered serious enough for chemical control measures to be used on young palms. Chemicals recommended are carbaryl and trichlorfon. The pesticide is applied to the central spike of the palm. Trichlorfon eliminated Brontispa from isolated areas of young palms in Western Samoa. Monthly spraying of young coconuts with permethrin is also advocated in Western Samoa.',
          sci_name: 'Brontispa longissima',
          eng_name: 'Coconut Leaf Beetle, Coconut Hispine Beetle',
          name:'Coconut Leaf Beetle',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/CoconutLeafBeetle.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/CoconutLeafBeetle.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/CoconutLeafBeetle2.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/CoconutLeafBeetle3.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/CoconutLeafBeetle4.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/CoconutLeafBeetle5.jpg',
          ]

       },

       {
          type: 'Pest',
          fil_stage_plant_affected:'',
          fil_effect:'',
          fil_part_destroyed:'',
          fil_stage_threatening:'',
          fil_symptoms:'',
          fil_description: '',
          fil_plant_affected: 'Niyog o Buko',
          fil_classification: '',
          fil_treatment:'',
          fil_name: 'Slug Caterpillar',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: '',
          symptoms: '',
          description: 'The caterpillar is greenish in colour with broad anterior and narrow posterior.',
          plant_affected: 'Coconut',
          order: 'Lepidoptera',
          classification: 'Caterpillar-like',
          treatment: 'Remove the affected leaves in the lower rows, spray dichlorvos at 2 ml/litre of water with a pedal pump/rocker sprayer/tractor mounted power operated pump and spray gun to reach the tree top, apply monocrotophos (10 ml + 10ml) as root feed, a waiting period of 45 days must be observed from insecticide application till harvest, monitor the pest occurrence in new areas with the help of light traps to attract moth, leaflets have to be observed for fresh incidence by cutting 1-2 leaf fronds in the garden.',
          sci_name: 'Penthocrates sp.',
          eng_name: 'Slug Caterpillar',
          name:'Slug Caterpillar',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/SlugCaterpillar.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/SlugCaterpillar.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/SlugCaterpillar2.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/SlugCaterpillar3.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/SlugCaterpillar4.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/SlugCaterpillar5.jpg',
          ]

       },

       {
          type: 'Pest',
          fil_stage_plant_affected:'',
          fil_effect:'',
          fil_part_destroyed:'',
          fil_stage_threatening:'',
          fil_symptoms:'',
          fil_description: '',
          fil_plant_affected: 'Niyog o Buko',
          fil_classification: '',
          fil_treatment:'',
          fil_name: 'False Spider Mite',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: '',
          symptoms: 'Look for necrotic areas on the underside of leaves and the presence of white molted skins or reddish, flat mites that move slowly when disturbed.',
          description: 'The female is 228 microns long. Immature specimens are reddish and adults are rufous amber. The body shape from above is ovate-sagittate with the width approximately 2/3 that of the length. The dorsal cuticular surface of the body is conspicuously reticulated. The areolae on cephalothorax laterad of the mandibular plate is about 1/3 longer than wide. Dorsally, the cephalothorax bears three pairs of rather weak setae; one pair at the anterior margin between coxae one, one pair just in front of the eyes, and one pair just behind the eyes. The abdomen bears 20 very weak setae dorsally: seven along each lateral margin from the main suture back to the caudal tip; three submedian pairs, the first near the main suture and the second and third pairs opposite the second and third marginal setae, respectively. All dorsal setae appear to be simple, unpectinate, and unserrate. A pair of dusky-bordered pores opens dorsally on the abdomen, a short distance behind the main suture. The legs are short and stout, and the posterior pair barely reaches beyond the tip of the abdomen.',
          plant_affected: 'Coconut',
          order: '',
          classification: 'Two or one unit body',
          treatment: '',
          sci_name: 'Rarosiella cocosae',
          eng_name: 'False Spider Mite',
          name:'False Spider Mite',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/pests/FalseSpiderMite.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/pests/FalseSpiderMite.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/pests/FalseSpiderMite2.jpg',
          ]

       },

    //---------------------------DISEASES--------------------------
        {
          type: 'Disease',
          fil_stage_plant_affected: '',
          fil_effect: '',
          fil_part_destroyed: '',
          fil_stage_threatening: '',
          fil_symptoms: '',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment: '',
          fil_name: '',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: '',
          symptoms: 'Symptoms appear first as water-soaked stripes at the margin of fully developed leaves. Lesions enlarge both in length and width. Margins are wavy and turn light brown in a few days. Regions adjoining the healthy part has a water-soaked appearance. Lesions may start at one or both edges of the leaves and as the disease advances, the lesions cover the entire blade, turn grayish, and later white. Appearance of milky or ”opaque dew drops” on the surface of young lesions in the morning is a sign of bacterial blight infection. The milky dew drops dry to form small, amber-colored beads and these spheres are the ooze of the bacterial mass. Infection at seedling stage develop “Kresek” or wilting of whole leaves or the entire plant.',
          description: 'It causes wilting of seedlings and yellowing and drying of leaves.',
          plant_affected: 'Rice',
          order: '',
          classification: 'Bacterial',
          treatment: 'Use of resistant varieties together with modified cultural practices to disrupt the disease cycle and proper deployment of resistant varieties in the field. Use balanced amounts of plant nutrients, especially nitrogen. Keep fields clean. Remove weed hosts and plow under rice stubble, straw, rice ratoons and volunteer seedlings, which can serve as hosts of bacteria.',
          sci_name: 'Xanthomonas oryzae pv. oryzae',
          eng_name: 'Bacterial Leaf Blight',
          name: 'Bacterial Leaf Blight',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/diseases/BacterialLeafBlight.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/BacterialLeafBlight.jpg',
          ]
       },

        {
          type: 'Disease',
          fil_stage_plant_affected: '',
          fil_effect: '',
          fil_part_destroyed: '',
          fil_stage_threatening: '',
          fil_symptoms: '',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment: '',
          fil_name: '',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: '',
          symptoms: 'Infected plants show browning and drying of leaves. Initially appear as small, water-soaked, linear lesions between leaf veins. These streaks are initially dark green and later become light brown to yellowish gray. The lesions are translucent when held against the light. Entire leaves may become brown and die when the disease is very severe.',
          description: 'Infected plants show browning and drying of leaves. Under severe conditions, this could lead to reduced grain weight due to loss of photosynthetic area.',
          plant_affected: 'Rice',
          order: '',
          classification: 'Bacterial',
          treatment: 'Use of resistant to the disease varieties of rice. Treat seeds with hot water. Keep fields clean—remove weed hosts and plow under rice stubble, straw, rice ratoons, and volunteer seedlings, which may be infected by the bacteria. Use balanced amounts of plant nutrients, especially nitrogen.',
          sci_name: 'Xanthomonas oryzae pv. oryzicola',
          eng_name: 'Bacterial Leaf Streak',
          name: 'Bacterial Leaf Streak',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/diseases/BacterialLeafStreak.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/BacterialLeafStreak.jpg',
          ]
       },

        {
          type: 'Disease',
          fil_stage_plant_affected: '',
          fil_effect: '',
          fil_part_destroyed: '',
          fil_stage_threatening: '',
          fil_symptoms: '',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment: '',
          fil_name: '',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: '',
          symptoms: 'Lesions are linear, 3 to 5 mm in length, about 1 to 1.5 mm in width along the leaf axis. Center of the spot is dark brown, the border fading toward the outer margin of the spot. Sheath lesions are the same as those on the leaf or may be longer. In resistant varieties, the lesions are uniformly red-brown throughout  and very narrow; in susceptible varieties the spots are wider with a narrow light-brown or gray-brown center.',
          description: 'It leads to premature death of leaves and leaf sheaths, premature ripening of grains, and in severe cases, lodging of plants.',
          plant_affected: 'Rice',
          order: '',
          classification: 'Fungal',
          treatment: 'Use of resistant to the disease varieties of rice. Remove weeds and weedy rice in the field and nearby areas to remove alternate hosts that allow the fungus to survive and infect new rice crops. Use balanced nutrients, make sure that adequate potassium is used. If narrow brown spot poses a risk to the field, spray propiconazole at booting to heading stages.',
            sci_name: 'Cercospora oryzae',
          sci_name: 'Cercospora oryzae',
          eng_name: 'Narrow Brown Spot, Narrow Leaf Spot, Cercospora Leaf Spot',
          name: 'Narrow Leaf Spot',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/diseases/NarrowLeafSpot.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/NarrowLeafSpot.jpg',
          ]
       },

        {
          type: 'Disease',
          fil_stage_plant_affected: '',
          fil_effect: '',
          fil_part_destroyed: '',
          fil_stage_threatening: '',
          fil_symptoms: '',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment: '',
          fil_name: '',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: '',
          symptoms: 'On the leaves (usually during the seedling stage), the spots are spindle shaped, pointed at both ends, often showing a brownish margin. Lesions are often found near the uppermost node. Grayish-brown lesions are formed and the neck is girdled, causing the head or panicle to fall over.',
          description: 'It can affect all above ground parts of a rice plant: leaf, collar, node, neck, parts of panicle, and sometimes leaf sheath.',
          plant_affected: 'Rice',
          order: '',
          classification: 'Fungal',
          treatment: 'Use of resistant varieties. Advisable to raise seedlings in lowland conditions because it has been observed that seedlings raised in upland nurseries are more susceptible to blast even after transplanting. Reduce nitrogenous fertilizer application to prevent severe outbreak of blast in susceptible varieties. Several recommended fungicides are available against rice blast.',
          sci_name: 'Magnaporthe oryzae',
          eng_name: 'Rice Blast',
          name: 'Rice Blast',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/diseases/RiceBlast.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/RiceBlast.jpg',
          ]
       },

        {
          type: 'Disease',
          fil_stage_plant_affected: '',
          fil_effect: '',
          fil_part_destroyed: '',
          fil_stage_threatening: '',
          fil_symptoms: '',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment: '',
          fil_name: '',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: '',
          symptoms: 'Rice plants are stunted and have reduced number of tillers. Young emerging leaves develop interveinal chlorosis leading to discoloration of the leaves, starting from tip downwards. Often whole leaf is discolored. Plants infected at an early stage generally die prematurely, infected plants take more time for maturity because of delayed flowering. The panicles are often poorly developed and the grains are also often covered with dark brown blotches.',
          description: 'Rice tungro disease is caused by the combination of two viruses, which are transmitted by leafhoppers. It causes leaf discoloration, stunted growth, reduced tiller numbers and sterile or partly filled grains. Tungro infects cultivated rice,some wild rice relatives and other grassy weeds commonly found in rice paddies.',
          plant_affected: 'Rice',
          order: '',
          classification: 'Viral',
          treatment: 'Synchronized planting with distinct fallow period between cropping. Avoidance of late planting (more than a month after most fields in the area are planted); most of the GLH from the adjacent or nearby fields with older plants will migrate to the newly planted field because GLH prefer younger rice plants, roguing but effective only under low disease. Planting resistant varieties. Destruction of stubble several das after harvest by plowing and harowing to eradicate GLH and possible source of tungro viruses. Observe neighboring fields for presence of tungro and know the variety planted to anticipate future actions. Avoid planting susceptible varieties in areas where Tungro occur in almost all rice varieties. Use insecticides only when needed to save money and the friendly insects (no insecticides are needed in plants more than 60 days old afte transplanting and when no tungro and few GLH are present).',
          sci_name: 'Rice tungro bacilliform virus',
          eng_name: 'Tungro',
          name: 'Tungro',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/diseases/Tungro.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/Tungro.jpg',
          ]
       },

        {
          type: 'Disease',
          fil_stage_plant_affected: '',
          fil_effect: '',
          fil_part_destroyed: '',
          fil_stage_threatening: '',
          fil_symptoms: '',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment: '',
          fil_name: 'Bakanae',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: '',
          symptoms: 'Mycelia present on the nodes of infected plants are signs of the pathogen, Infected plants become yellow and begin to wilt at later stages.',
          description: 'Infected seedlings are easily identified in the field because they are relatively taller, spindly and pale compared to the healthy seedlings',
          plant_affected: 'Rice',
          order: '',
          classification: 'Fungal',
          treatment: 'Use of Resistant varieties, Seed treatment with recommended fungicides, Gather and burn infected plants or deep plowing to bury and submerge infected stubbles can help reduce sources of inocula.',
          sci_name: 'Fusarium moniliforme/Gibberella fujikuroi',
          eng_name: 'Bakanae',
          name: 'Bakanae',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/diseases/Bakanae.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/Bakanae.jpg',
          ]
       },

        {
          type: 'Disease',
          fil_stage_plant_affected: '',
          fil_effect: '',
          fil_part_destroyed: '',
          fil_stage_threatening: '',
          fil_symptoms: '',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment: '',
          fil_name: 'Sheath Blight',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: '',
          symptoms: 'Characterized by the presence of large spots confined mostly to the leaf sheaths and occasionally on the leaves and stems, Leaf sheaths are entirely rotted sclerotial bodies on the infected parts are irregular in shape in severe cases, Spots are at first greenish-gray and ellipsoid which quickly enlarge and become grayish with blackish-brown margins, Lesions may coalesce to form irregular discolored areas.',
          description: 'Sheath blight is a fungal disease caused by Rhizoctonia solani. Infected leaves senesce or dry out and die more rapidly. Young tillers can also be destroyed. As a result, the leaf area of the canopy can significantly be reduced by the disease. This reduction in leaf area, along with the diseased-induced senescence of leaves and young infected tillers are the primary causes of yield reduction.',
          plant_affected: 'Rice',
          order: '',
          classification: 'Fungal',
          treatment: 'Deep plowing to bury and submerge infected stubbles and sclerotia helps reduce sources of inoculum, Several recommended fungicides are available against sheath blight.',
          sci_name: 'Rhizoctonia solani',
          eng_name: 'Rice Sheath Blight',
          name: 'Sheath Blight',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/diseases/SheathBlight.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/SheathBlight.jpg',
          ]
       },

        {
          type: 'Disease',
          fil_stage_plant_affected: '',
          fil_effect: '',
          fil_part_destroyed: '',
          fil_stage_threatening: '',
          fil_symptoms: '',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment: '',
          fil_name: 'Brown Spot',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: '',
          symptoms: 'On leaves, the spots vary in size and shape from minute dots to circular or oval spots. Similar symptoms can be observed on the leaf sheath of the infected plant, Smaller spots are dark brown or purplish brown. Larger ones have the same color at the edge but maybe pale yellow, dirty white, brown or gray towards the center, Spots may coalesce so that the entire leaf surface withers and dries up.',
          description: 'Brown spot is a fungal disease that infects the coleoptile, leaves, leaf sheath, panicle branches, glumes, and spikelets. Its most observable damage are the numerous big spots on the leaves which can kill the whole leaf. When infection occurs in the seed, unfilled grains or spotted or discolored seeds are formed.',
          plant_affected: 'Rice',
          order: '',
          classification: 'Fungal',
          treatment: 'Plant resistant varieties, Use only healthy or clean seeds for planting or treat seeds with recommended fungicides if necessary, Apply muriate of potash to correct the soil deficiency, Spray with recommended fungicides.',
          sci_name: 'Helminthosporium oryzae/Cochliobolus miyabeanus',
          eng_name: 'Helminthosporium Leaf Spot',
          name: 'Brown Spot',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/diseases/BrownSpot.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/BrownSpot.jpg',
          ]
       },

        {
          type: 'Disease',
          fil_stage_plant_affected: '',
          fil_effect: '',
          fil_part_destroyed: '',
          fil_stage_threatening: '',
          fil_symptoms: '',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment: '',
          fil_name: 'Sheath Rot',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: '',
          symptoms: 'Typical sheath rot lesion starts at the uppermost leaf sheath enclosing the young panicles, Usually several spots are observed and these spots enlarge and coalesce or grow together and can cover most of the leaf sheath, Spots appear oblong or as irregular spot with dark reddish, brown margins, and gray center or brownish gray throughout, Affected leaf sheaths may have abundant whitish powdery fungal growth (mycelium) visible on the outer surface, Un-emerged panicles rot and florets turn red-brown to dark brown, Panicles remain within the sheath or may partially emerge.',
          description: 'The disease reduces grain yield by retarding or aborting panicle emergence, and producing unfilled seeds and sterile panicles. Sheath Rot also reduces grain quality by causing panicles to rot and grains to become discolored.',
          plant_affected: 'Rice',
          order: '',
          classification: 'Fungal',
          treatment: 'Minimize insect infestation in rice field, Remove infected stubbles after harvest, Apply potash at tillering stage, Apply foliar spray of calcium sulfate and zinc sulfate, Apply a seed treatment fungicide like carbendazim, edifenphos, or mancozeb as seed treatment and foliar spraying at booting stage, Apply a foliar fungicide like benomyl and copper oxychloride as foliar sprays.',
          sci_name: 'Sarocladium oryzae',
          eng_name: 'Sheath Rot',
          name: 'Sheath Rot',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/diseases/SheathRot.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/SheathRot.jpg',
          ]
       },

        {
          type: 'Disease',
          fil_stage_plant_affected: '',
          fil_effect: '',
          fil_part_destroyed: '',
          fil_stage_threatening: '',
          fil_symptoms: '',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment: '',
          fil_name: '',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: '',
          symptoms: 'Alternating bands of irregular blotches on the leaf sheath, leaf blade and ear husks starting from the base upward. Blotches are grayish-green, with bluish gray or traw colored centers with distinct brown borders. Presence of irregular, white turning light to dark brown sclerotia on the dead ares is the most reliable sign of the disease. Infected ears may be rotten often showing some seed germination at the base of the cob.',
          description: 'Sheath blight is a fungal disease caused by Rhizoctonia solani. Infected leaves senesce or dry out and die more rapidly. Young tillers can also be destroyed. As a result, the leaf area of the canopy can significantly be reduced by the disease. This reduction in leaf area, along with the diseased-induced senescence of leaves and young infected tillers are the primary causes of yield reduction.',
          plant_affected: 'Corn',
          order: '',
          classification: 'Fungal',
          treatment: 'Practice deep plowing to bury sclerotia. Avoid planting cultivars with very low ear placement. Remove leaf sheath above the infected portion below the earshot. Apply recommended fungicides.',
          sci_name: 'Rhizoctonia solani',
          eng_name: 'Banded Leaf and Sheath Blight',
          name: 'Banded Leaf and Sheath Blight',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/diseases/BandedLeaf.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/BandedLeaf.jpg',
          ]
       },

        {
          type: 'Disease',
          fil_stage_plant_affected: '',
          fil_effect: '',
          fil_part_destroyed: '',
          fil_stage_threatening: '',
          fil_symptoms: '',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment: '',
          fil_name: '',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: '',
          symptoms: 'Surfaces of leaf blades, leaf sheaths and stalks exhibit brown, circular, powdery pustules. Leaves which are severely infected dries up and defoliates prematurely. Those of southern rust are circular to oval, light cinnamon-brown to orange in color and predominantly on the upper-leaf surface. Pustules tend to occur only sparsely on the leaf underside, but may occur abundantly on the leaf sheath. Haloes can be observed in some hybrids around pustules when leaves are backlit. The pustules are usually more densely clustered than those of common rust. And, like common rust, the pustules can darken in color later in the season as the spore type changes.',
          description: 'Common corn rust, caused by the fungus Puccinia sorghi, is the most frequently occurring of the two primary rust diseases of corn in the U.S., but it rarely causes significant yield losses in Ohio field (dent) corn. Occasionally field corn, particularly in the southern half of the state, does become severely affected when weather conditions favor the development and spread of the rust fungus. Sweet corn is generally more susceptible than field corn. In years with exceptionally cool summers, and especially on late-planted fields or sweet corn, yield losses may occur when the leaves at and above the ears become severely diseased before grain fill is complete.',
          plant_affected: 'Corn',
          order: '',
          classification: 'Fungal',
          treatment: 'Plow deep to bury scleotia. Some producers avoid disease or minimize its effects by not planting late or by using shorter season hybrids. By doing so, they have a more mature and resistant crop in the field when rust spores arrive and sometimes disease can be completely avoided.',
          sci_name: 'Puccinia polysora',
          eng_name: 'Corn Rust',
          name: 'Corn Rust',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/diseases/CornRust.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/CornRust.jpg',
          ]
       },

        {
          type: 'Disease',
          fil_stage_plant_affected: '',
          fil_effect: '',
          fil_part_destroyed: '',
          fil_stage_threatening: '',
          fil_symptoms: '',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment: '',
          fil_name: '',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: '',
          symptoms: 'Base of lower leaves have streaks or chlorotic areas where downy growth can be observed early in the morning. Next leaves exhibit more severe symptoms.',
          description: '',
          plant_affected: 'Corn',
          order: '',
          classification: 'Fungal',
          treatment: 'Reduce nitrogen fertilizer. Plant resistant varieties. Eliminate infected plants. Maintain weed-free field. Use recommended fungicide.',
          sci_name: 'Peronosclerospora philippinensis',
          eng_name: 'Downy Mildew',
          name: 'Downy Mildew',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/diseases/DownyMildew.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/DownyMildew.jpg',
          ]
       },

        {
          type: 'Disease',
          fil_stage_plant_affected: '',
          fil_effect: '',
          fil_part_destroyed: '',
          fil_stage_threatening: '',
          fil_symptoms: '',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment: '',
          fil_name: '',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: '',
          symptoms: 'Lesions on leaves varies in shape and size: elongated or oval tan to bown spots which may merge and develop to burning of large areas of the leaves',
          description: 'Maydis leaf blight (also known as southern maize leaf blight) is caused by the ascomycete fungi Bipolaris maydis and is reported from most maize growing regions of the world.  Maydis leaf blight is most serious in warm and wet temperate and tropical areas, where yield losses close to 70% have been reported due to the disease. Several races of B. maydis are pathogenic to maize.  Symptoms and severity of B. maydis depends on the pathogen race and host germplasm.',
          plant_affected: 'Corn',
          order: '',
          classification: 'Fungal',
          treatment: 'Planting of resistant varieties. Application of recommended fungicides.',
          sci_name: 'Helminthosporium maydis',
          eng_name: 'Maydis Leaf Blight',
          name: 'Maydis Leaf Blight',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/diseases/MaydisLeafBlight.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/MaydisLeafBlight.jpg',
          ]
       },

        {
          type: 'Disease',
          fil_stage_plant_affected: '',
          fil_effect: '',
          fil_part_destroyed: '',
          fil_stage_threatening: '',
          fil_symptoms: '',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment: '',
          fil_name: '',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: '',
          symptoms: 'Small spots surrounded by halo, which develop into rectangular lesions delineated by the veins on both sides which run in parallel.',
          description: 'Grey leaf spot is a foliar disease which can infect leaves and stems of susceptible turf varieties.',
          plant_affected: 'Corn',
          order: '',
          classification: 'Fungal',
          treatment: 'Plant resistant varieties. Apply recommended fungicides.',
          sci_name: 'Cercospora zeae-maydis',
          eng_name: 'Grey Leaf Spot',
          name: 'Grey Leaf Spot',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/diseases/GreyLeafSpot.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/GreyLeafSpot.jpg',
          ]
       },

        {
          type: 'Disease',
          fil_stage_plant_affected: '',
          fil_effect: '',
          fil_part_destroyed: '',
          fil_stage_threatening: '',
          fil_symptoms: '',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment: '',
          fil_name: '',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: '',
          symptoms: 'Galls or boil on aboveground tissues. Galls first appear as glistening white or grayish white swellings. Interior of galls later becomes black and powdery and ontains numerous sooty masses of spores.',
          description: 'Common smut, a disease that occurs wherever corn is grown, is caused by Ustilago maydis, a fungus that survives on crop debris and on the soil. It can infect any tissue of the plant by entering through wounds and forming characteristic smut galls. The fungus can also enter through the silks, causing gall formation on the ear tip. Yield is reduced because of impaired plant function and even barrenness.',
          plant_affected: 'Corn',
          order: '',
          classification: 'Fungal',
          treatment: 'Use of resistant varieties. Avoid mechanical injury of plants. Proper nutritional management.',
          sci_name: 'Ustilago maydis',
          eng_name: 'Corn Smut',
          name: 'Corn Smut',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/diseases/CornSmut.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/CornSmut.jpg',
          ]
       },

        {
          type: 'Disease',
          fil_stage_plant_affected: '',
          fil_effect: '',
          fil_part_destroyed: '',
          fil_stage_threatening: '',
          fil_symptoms: '',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment: '',
          fil_name: '',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: '',
          symptoms: 'Affected tissues are soft and mushy and emit foul odor. Plants usually topple over or may remain standing but exhibit wilted leaves.',
          description: 'Stenocarpella (Diplodia) ear rot is caused by Stenocarpella species and commonly found in hot, humid maize growing regions. The causal agents of Stenocarpella ear rot also cause Stenocarpella stalk rot and Macrospora leaf stripe. Stenocarpella species can produce various mycotoxins that are harmful to birds.',
          plant_affected: 'Corn',
          order: '',
          classification: 'Bacterial',
          treatment: 'Cultivate to improve soil condition. Proper nutritional management.',
          sci_name: 'Stenocarpella macrospora',
          eng_name: 'Stalk Rot',
          name: 'Stalk Rot',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/diseases/StalkRot.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/StalkRot.jpg',
          ]
       },

        {
          type: 'Disease',
          fil_stage_plant_affected: '',
          fil_effect: '',
          fil_part_destroyed: '',
          fil_stage_threatening: '',
          fil_symptoms: '',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment: '',
          fil_name: '',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: '',
          symptoms: 'Large and small spots are found on leaves and also on fruit. The most characteristic symptom of both types of spot is a sandpaper feel to the leaf and fruit. This is caused by the fungal structures protruding through the surface of the leaf. Both the large and small spots are dark brown to black in colour. The small spots are less than 1mm in diameter and appear sooty. They can run together to form streaks. The larger spots are up to 4mm in diameter and can also appear as streaks. Sometimes the centre of these larger spots are lighter in colour. Spots can also appear on the midrib of the leaf and on the petioles.',
          plant_affected: 'Banana',
          order: '',
          classification: 'Fungal',
          treatment: 'Some chemical treatments, which are used to control yellow Sigatoka, may provide control of freckle. Mineral oil alone is thought to be ineffective. The use of a plastic bag cover over the bunch may in the long run be the most economical control for freckle.',
          sci_name: 'Phyllosticta maculata/Phyllosticta cavendishii/Phyllosticta musarum',
          eng_name: 'Banana Freckle',
          name: 'Banana Freckle',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/diseases/BananaFreckle.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/BananaFreckle.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/BananaFreckle2.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/BananaFreckle3.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/BananaFreckle4.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/BananaFreckle5.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/BananaFreckle6.jpg',
          ]
       },

        {
          type: 'Disease',
          fil_stage_plant_affected: '',
          fil_effect: '',
          fil_part_destroyed: '',
          fil_stage_threatening: '',
          fil_symptoms: '',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment: '',
          fil_name: '',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: '',
          symptoms: 'The spots are black, four-pointed stars, up to 60 mm long, most clearly seen on the lower surface of older leaves. The long axis of the star is parallel to the leaf veins, that is, at right angles to the length of the leaf. The spots are scattered, but sometimes occur in large groups. A velvet-like mass of spores is produced on the lower surface of the spots. The spores are spread by rain and wind. This is the asexual state of the fungus. Sexual spores are also formed in the spots, and they spread the fungus too.',
          description: '',
          plant_affected: 'Banana',
          order: '',
          classification: 'Fungal',
          treatment: 'Control measures are unlikely to be needed against this disease. If they are, priority should be given to reducing shade levels or planting the bananas in open ground.',
          sci_name: 'Phyllachora musicola',
          eng_name: 'Banana black cross, back cross disease, tar spot',
          name: 'Banana Black Cross',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/diseases/BananaBlackCross.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/BananaBlackCross.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/BananaBlackCross2.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/BananaBlackCross3.jpg',
          ]
       },

        {
          type: 'Disease',
          fil_stage_plant_affected: '',
          fil_effect: '',
          fil_part_destroyed: '',
          fil_stage_threatening: '',
          fil_symptoms: '',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment: '',
          fil_name: '',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: '',
          symptoms: 'Red-brown or black streaks appear on the underneath of the third or forth youngest leaf. These form spots, 20-30 mm long, with grey or light brown centres and dark brown or black margins, best seen on the upper surface (Photo 1). The spots join together, often with yellow areas between. The infected areas invariably form bands several centimetres wide on either side of the midrib. In severe infections, spots do not occur, but large areas of the leaf turn black and die. Generally, the streaks are more common at the tips and edges of the leaves. The disease is spread by the movement of infected plant material, or by spores produced within dead or dying leaves. Spores are released from the upper leaf surface and are spread in wind and/or rain to nearby leaves or far away plantations.',
          description: 'Black Sigatoka is a devastating leaf disease of bananas around the world. Infected leaves die early, reducing fruit yield, and causing premature ripening of bunches.',
          plant_affected: 'Banana',
          order: '',
          classification: 'Fungal',
          treatment: 'Cultural methods of control are very important; the strategy is to reduce the humidity in the plantation, reducing the time that the leaves are wet and the spores can germinate and infect.',
          sci_name: 'Mycosphaerella fijiensis/Paracercospora fijiensis',
          eng_name: 'Black Sigatoka, black leaf streak',
          name: 'Black Sigatoka',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/diseases/BlackSigatoka.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/BlackSigatoka.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/BlackSigatoka2.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/BlackSigatoka3.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/BlackSigatoka4.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/BlackSigatoka5.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/BlackSigatoka6.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/BlackSigatoka7.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/BlackSigatoka8.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/BlackSigatoka9.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/BlackSigatoka10.jpg',
          ]
       },

        {
          type: 'Disease',
          fil_stage_plant_affected: '',
          fil_effect: '',
          fil_part_destroyed: '',
          fil_stage_threatening: '',
          fil_symptoms: '',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment: '',
          fil_name: '',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: '',
          symptoms: 'Cucumber mosaic virus is a common virus widespread in many crops. It causes mottles and mosaics, terms used to describe patterns of light and dark green on the leaves. In tomato, the virus can cause a "fern leaf" symptom - narrow, twisted, distorted leaves. In banana, there are yellow streaks and flecks, sometimes with mild distortion. Usually, symptoms occur on a few leaves only, after which apparently healthy leaves are produced. In snake gourd, leaf symptoms vary: some leaves have faint spots and blotches roughly following the veins, others have large areas of yellow, or distortions with patches of yellow and darker green.',
          description: '',
          plant_affected: 'Banana',
          order: '',
          classification: 'Viral',
          treatment: 'Control of Cucumber mosaic virus is difficult. It has a wide host range, insecticides do not prevent its spread, and there are several strains. Once plants are infected and show symptoms there is no way to make them healthy again, so it is important to prevent infection.',
          sci_name: 'Cucumber mosaic cucumovirus',
          eng_name: 'Banana mosaic, cucumber mosaic, infectious chlorosis',
          name: 'Bract Mosaic',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/diseases/BractMosaic.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/BractMosaic.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/BractMosaic2.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/BractMosaic3.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/BractMosaic4.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/BractMosaic5.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/BractMosaic6.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/BractMosaic7.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/BractMosaic8.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/BractMosaic9.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/BractMosaic10.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/BractMosaic11.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/BractMosaic12.jpg',
          ]
       },

        {
          type: 'Disease',
          fil_stage_plant_affected: '',
          fil_effect: '',
          fil_part_destroyed: '',
          fil_stage_threatening: '',
          fil_symptoms: '',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment: '',
          fil_name: '',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: '',
          symptoms: 'Plants with banana bunchy top (BBT) have narrow, progressively shorter leaves with little distance between them, hence the name "bunchy top". Leaf edges often roll upwards with yellow margins. The most characteristic symptoms are short, dark-green dots and dashes along the minor leaf veins, so-called "Morse-code" patterns, which form hooks curving downwards near the edge of the midrib. Hold the leaf up to the light and view from the underside. The virus is spread by an aphid, Pentalonia nigronervosa. It takes more than 4 hours of feeding on a diseased plant before aphids become infected with the virus. But once infected, the aphids continue spreading the virus until they die. Aphids live for 15-20 days. The virus is not transmitted on tools or through the soil.',
          description: 'BBT is caused by a virus. In the past, the disease has devastated banana industries in Australia, Fiji, Samoa and Tonga. Today, it is causing much damage in Pakistan and is spreading in the DR Congo. Plants that are infected when young rarely produce a fruit bunch. When diseased suckers are planted they become severely stunted and they do not produce fruit. Plants infected at a later growth stage may produce a distorted bunch. In Pacific island countries, the failure to select healthy planting material has resulted in plantations showing 20% of plants with BBT in the first year, and major losses within 2-3 years.',
          plant_affected: 'Banana',
          order: '',
          classification: 'Viral',
          treatment: 'Banana plants should only be transferred between countries as tissue cultures tested to ensure that they are free of all known banana viruses. Plants of many varieties of bananas, tested to internationally agreed standards, can be obtained from the INIBAP transit centre in Belgium, and from IITA, Nigeria.',
          sci_name: 'Banana bunchy top nanavirus',
          eng_name: 'Banana bunchy top',
          name: 'Bunchy Top',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/diseases/BunchyTop.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/BunchyTop.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/BunchyTop2.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/BunchyTop3.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/BunchyTop4.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/BunchyTop5.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/BunchyTop6.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/BunchyTop7.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/BunchyTop8.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/BunchyTop9.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/BunchyTop10.jpg',
          ]
       },

        {
          type: 'Disease',
          fil_stage_plant_affected: '',
          fil_effect: '',
          fil_part_destroyed: '',
          fil_stage_threatening: '',
          fil_symptoms: '',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment: '',
          fil_name: '',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: '',
          symptoms: 'The spots are oval to diamond-shaped, up to 10 cm long, and at right angles to the length of the leaf. They are brown on the upper surface, zoned, with yellow margins, and grey to brown below. The spots often merge, covering large areas of the leaf; this occurs particularly at the margin of the leaf giving a band of dead tissue with a zigzag yellow border between diseased and healthy parts. Banana (Cordana) leaf spot infections often occurs on banana black cross leaf spots. This suggests that the fungus is a weak pathogen and needs a wound to infect. Spores are produced on the underside of the leaf in large numbers, making the spots appear greyish-brown and hairy. They are spread in wet, windy weather.',
          description: 'Usually, the disease is of minor importance on Cavendish bananas, but can sometimes be severe on plantains, that is, cooking bananas, but it is not likely to reduce yields to the extent that control measures are required. This disease is said to be worse if misting oils are used. Misting oils are used for the control of black Sigatoka.',
          plant_affected: 'Banana',
          order: '',
          classification: 'Fungal',
          treatment: 'Control measures are unlikely to be needed against this disease.',
          sci_name: 'Cordana musae',
          eng_name: 'Banana (Cordana) leaf spot, banana diamond leaf spot',
          name: 'Cordana Leaf Spot',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/diseases/CordanaLeafSpot.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/CordanaLeafSpot.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/CordanaLeafSpot2.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/CordanaLeafSpot3.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/CordanaLeafSpot4.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/CordanaLeafSpot5.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/CordanaLeafSpot6.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/CordanaLeafSpot7.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/CordanaLeafSpot8.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/CordanaLeafSpot9.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/CordanaLeafSpot10.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/CordanaLeafSpot11.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/CordanaLeafSpot12.jpg',
          ]
       },

        {
          type: 'Disease',
          fil_stage_plant_affected: '',
          fil_effect: '',
          fil_part_destroyed: '',
          fil_stage_threatening: '',
          fil_symptoms: '',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment: '',
          fil_name: '',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: '',
          symptoms: 'The fungus invades bananas through the fine (hair) roots, travelling through the roots and stem in the xylem or water-conducting tissues. Spores are produced, and these and the growth of the fungus block the flow of water and cause a wilt. Another type of spore, a chlamydospore, is produced in the soil; this is thick walled and allows the fungus to survive when there is no host to infect. The first sign is a yellowing at the margins of older leaves, advancing towards the midrib. Leaves turn brown, dry, and eventually collapse. Disease symptoms move progressively from older to younger leaves until only a few of the youngest leaves remain green and erect, with the older ones forming a "skirt" around the stem. Eventually, all the leaves collapse. On some varieties the stems split. Internally, brown, red and yellow rings occur in the stem, at first at the centre and later, in cases of severe infection, spreading throughout the stem. Suckers may also show symptoms. Eventually, all parts above and below ground will die and rot. Fusarium wilt can remain alive in soil for long periods, perhaps indefinitely, as resistant spores, in infested plant debris or in the roots of other plants that are hosts. Spread of Fusarium wilt over short distances is by root-to-root contact in surface run-off water, in soil attached to vehicles, tools, footwear, and in unsterilIsed potting composts. Over longer distances, spread occurs both within and between countries in infected planting material.',
          description: 'Fusarium wilt probably originated in Southeast Asia, but was first reported from Australia in 1876. Subsequently, it spread globally and is present in most parts of Asia, Africa and the Americas. It is now spreading in Pacific islands. The aggressive race, TR4, which was first detected in Asia in the 1990s, it is now found in Taiwan, Indonesia, Malaysia, the Philippines, China and northern Australia. Outbreaks were recently reported from Mozambique (2013), Jordan (2014), and from Pakistan, Lebanon and Queensland, Australia (2015). There is a possibility it is also in Oman.',
          plant_affected: 'Banana',
          order: '',
          classification: 'Fungal',
          treatment: 'Management of Fusarium wilt is extremely difficult as the fungus remains alive in the soil for many years, and there are no fungicides or cultural controls that can be usefully applied against it. The only solutions are to: (1) keep it out in the first place; (2) establish methods for early detection; (3) observe strict hygiene measures; and (4) use resistant varieties.',
          sci_name: 'Fusarium oxysporum f.sp. cubense',
          eng_name: 'Panama disease of banana, Fusarium wilt of banana',
          name: 'Fusarium Wilt',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/diseases/FusariumWilt.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/FusariumWilt.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/FusariumWilt2.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/FusariumWilt3.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/FusariumWilt4.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/FusariumWilt5.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/FusariumWilt6.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/FusariumWilt7.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/FusariumWilt8.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/FusariumWilt9.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/FusariumWilt10.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/FusariumWilt11.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/FusariumWilt12.jpg',
          ]
        },
        {
          type: 'Disease',
          fil_stage_plant_affected: '',
          fil_effect: '',
          fil_part_destroyed: '',
          fil_stage_threatening: '',
          fil_symptoms: '',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment: '',
          fil_name: '',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: '',
          symptoms: 'Symptoms vary depending on the strain of the virus, the variety of banana or plantain and the environment. The most common symptom is lines of yellow that run from the midrib of the leaf to the margin. These streaks are continuous or broken, and either scattered throughout the leaf or in bands. As the leaf ages, the streaks turn brown or black. Initially, the symptoms are similar to Cucumber mosaic virus.Infected plants may be smaller than normal and less vigorous, with smaller bunches. In some African countries, dieback and internal rotting of the pseudostem occurs. Differences between symptoms in different parts of the world led to them being described as distinct viruses. Molecular studies on the DNA of the viruses have confirmed the differences. Spread of the virus is in planting material, suckers primarily. Spread can also occur as plants in tissue culture if they are not tested properly. It is now known that the virus or parts of the virus can enter the DNA of certain varieties (e.g., AAB, ABB, AAAB types) and remain hidden there without showing symptoms. However, if bananas are grown under stress, such as occurs when they are growing as tissue cultures, the virus reassembles, multiplies, and symptoms appear. Spread between plants is by mealybugs, especially species of Planococcus and Pseudococcus, although how important they are is not well known.',
          description: '',
          plant_affected: 'Banana',
          order: '',
          classification: 'Viral',
          treatment: 'Use only virus-free planting material, taking it from plantations that are free from banana streak disease.',
          sci_name: 'Banana streak badnavirus',
          eng_name: 'Banana streak, banana streak disease',
          name: 'Banana Streak',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/diseases/BananaStreak.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/BananaStreak.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/BananaStreak2.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/BananaStreak3.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/BananaStreak4.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/BananaStreak5.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/BananaStreak6.jpg',
          ]
       },

        {
          type: 'Disease',
          fil_stage_plant_affected: '',
          fil_effect: '',
          fil_part_destroyed: '',
          fil_stage_threatening: '',
          fil_symptoms: '',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment: '',
          fil_name: '',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: '',
          symptoms: 'The first visible symptom is a slight discoloration between the leaf`s secondary veins. Over time, these points develop into pale yellow streaks, brown streaks and elliptic necrotic spots arranged parallel to the secondary veins. The depressed grey center is surrounded by a yellow halo.  As the disease progresses, the lesions coalesce and cover a large area of the leaf.',
          description: 'Sigatoka leaf spot (popularly known as Yellow Sigatoka) is a fungal disease caused by Mycosphaerella musicola. It was the first Mycosphaerella leaf spot disease to have a global impact on bananas but has since been  largely displaced by black leaf streak  in many banana production areas. However, it can still cause considerable losses at higher altitudes and cooler temperatures, and is also typically a greater problem during rainy seasons in subtropical banana growing regions. The disease reduces the leaf`s photosynthetic capacity, which affects bunch size. It also shortens the fruit`s green life, the time between harvest and ripening.early ripening.',
          plant_affected: 'Banana',
          order: '',
          classification: 'Fungal',
          treatment: 'In regions where the pathogen is present, the inoculum can be maintained at a low level using cultural practices such on drainage, weeding, proper fertilization, planting density and deleafing to reduce inoculum. Sigatoka leaf spot can be effectively controlled by combining deleafing and chemical treatment.',
          sci_name: 'Mycosphaerella musicola',
          eng_name: 'Sigatoka leaf spot, Yellow Sigatoka',
          name: 'Yellow Sigatoka',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/diseases/YellowSigatoka.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/YellowSigatoka.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/YellowSigatoka2.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/YellowSigatoka3.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/YellowSigatoka4.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/YellowSigatoka5.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/YellowSigatoka6.jpg',
          ]
       },

        {
          type: 'Disease',
          fil_stage_plant_affected: '',
          fil_effect: '',
          fil_part_destroyed: '',
          fil_stage_threatening: '',
          fil_symptoms: '',
          fil_description: '',
          fil_plant_affected: '',
          fil_classification: '',
          fil_treatment: '',
          fil_name: '',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: '',
          symptoms: 'Dark brown to black streaks appear on the leaves, often surrounded by yellow halos. The streaks are more numerous on the lower surface of the leaves. They are slightly raised, and feel rough to the touch due to the spore masses of the fungus. If the disease is severe, the leaves may turn yellow. Mainly the older leaves are affected.',
          description: 'The disease is rarely important. Reports from Samoa (1981) and Philippines (1971) suggest it was serious when only benzimidazole fungicides, e.g., benomyl, were used against black Sigatoka disease. However, benomyl is no longer used, and in many countries registration has been cancelled. For instance, in Australia, it became illegal to supply or use products containing benomyl after December 2006.',
          plant_affected: 'Banana',
          order: '',
          classification: 'Fungal',
          treatment: 'This is only a minor disease, and control measures are not necessary.',
          sci_name: 'Uredo musae',
          eng_name: 'Banana rust, banana leaf rust',
          name: 'Banana Rust',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/diseases/BananaRust.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/BananaRust.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/BananaRust2.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/BananaRust3.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/BananaRust4.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/BananaRust5.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/BananaRust6.jpg',
          ]
       },

       {
          type: 'Disease',
          fil_stage_plant_affected: '',
          fil_effect: '',
          fil_part_destroyed: '',
          fil_stage_threatening: '',
          fil_symptoms: '',
          fil_description: '',
          fil_plant_affected: 'Kakaw',
          fil_classification: '',
          fil_treatment: '',
          fil_name: 'Vascular Streak Dieback',
          stage_plant_affected: '',
          effect: 'The disease is most damaging in seedlings less than 10 months old (prior to jorquetting of the apical bud). These seedlings become infected in the main stem and are eventually killed. The younger the seedling at the time of infection, the greater its chance of being killed. In older trees, only the most susceptible clones are killed by infections beginning in outer branches.',
          part_destroyed: 'Whole plant',
          stage_threatening: '',
          symptoms: 'Leaves: abnormal colors, abnormal leaf fall, necrotic areas; Roots: necreotic streaks or lesions; Stems: dieback, discoloration of bark, internal discoloration, mould growth on lesion; Whole plant: dwarfing',
          description: 'Infection always occurs through young flush leaves at a growing point with the fungus growing down the stem. Seedlings have only one growing point and are killed by the infection. After the jorquette is formed, the infection may progress into the main stem and kill the plant. Once trees are mature they have thousands of growing points, all of which can be infected. The disease does not progress into the larger branches of mature trees except perhaps in the most susceptible material, within which it can spread to the trunk causing the tree to die. There are no visible symptoms during initial fungal growth within the plant.',
          plant_affected: 'Cacao',
          order: 'Ceratobasidiales',
          classification: 'Fungal',
          treatment: 'Monthly inspection and pruning of infected stems has been practised both to prevent the disease from spreading within individual plants and also to lower the inoculum level. Pruning can be effective when combined with moderate levels of resistance, but it was often ineffective when inoculum levels were high and planting material was susceptible. Pruning young seedlings can result in complete recovery, but may also lead to an uneven stand.',
          sci_name: 'Oncobasidium theobromae',
          eng_name: 'Vascular Streak Dieback',
          name: 'Vascular Streak Dieback',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/diseases/VascularStreakDieback.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/VascularStreakDieback.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/VascularStreakDieback2.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/VascularStreakDieback3.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/VascularStreakDieback4.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/VascularStreakDieback5.jpg',
          ]
       },

       {
          type: 'Disease',
          fil_stage_plant_affected: '',
          fil_effect: '',
          fil_part_destroyed: '',
          fil_stage_threatening: '',
          fil_symptoms: '',
          fil_description: '',
          fil_plant_affected: 'Kakaw',
          fil_classification: '',
          fil_treatment: '',
          fil_name: 'Black Pod Rot',
          stage_plant_affected: 'Flowering stage, Fruiting stage, Pre-emergence, Seedling stage, Vegetative growing stage',
          effect: 'In the cocoa trees, P. megakarya infects the bark, flower, and trees with cankers. These cankers will often exude a reddish gum reducing the life of the tree in turn reducing the yield of the plant. The most devastating place the pathogen attacks is in the flowers as from these flowers is where the cocoa fruit will set. An infected flower will have infected fruit, which will turn black and will be unable to be harvested and processed.',
          part_destroyed: 'Whole plant',
          stage_threatening: '',
          symptoms: 'Fruit: lesions (black or brown), mummification, premature drop; Roots: soft rot of cortex; Seeds: rot, shrivelled; Stems: canker on woody stem; Whole plant: damping off, plant dead, dieback',
          description: '',
          plant_affected: 'Cacao',
          order: 'Peronosporales',
          classification: '',
          treatment: 'Cultural control: Several cultural practices to manage black pod disease could be implemented in cocoa plantation. A spacing of 3.1 x 3.1m and pruning of trees are recommended for cocoa planting in order to allow more light and air flow around the trees. This will reduce the level of humidity that is causing black pod disease. The removal of pods with black pod symptom should also be done in favor to eliminate the source of inoculum. In another study, the utilization of litter mulch under cocoa plantation has been reported in Papua New Guinea, which has some negative effect on the population of P. palmivora, and therefore could reduce the pod infection especially at the beginning of raining season. Leaf litter showed rapid decline in pathogen recovery of colonized cocoa tissue after 18 weeks, relative to grass ground cover. More frequent ripe pod harvest (i.e. twice a week) and removal of infected pod on the ground was demonstrated to significantly reduced disease occurrence and improve pod yield compared to less frequent harvest and removal (i.e. once a month). In addition, scattered healthy pod on the ground should also be removed, as it will be infected and become the source of inoculum later. Sanitation is one cultural method to control for black pod disease. Sanitation practices include weed removal, pruning, thinning and removal of infected and mummified pods every two weeks in order to eliminate the source for inoculum. Phytosanitary pod removal was observed to significantly reduce disease occurrences by 9–11% to 22–31%, where this practice removes the source for secondary inoculum. However, increase in disease incidence after raining season was observed to be most likely due to the spread of inoculum from survival site by the rain. The application of fungicide following sanitation is commonly performed for an effective control of disease, as sanitation practice alone would not completely eliminate the source of inoculum and still causes greater black pod incident compared to sanitation followed by at least one fungicide application; Chemical control: The application of copper fungicide has been shown to significantly reduce a great number of black pod incidences in Nigeria. Metalaxyl (Ridomil) and cuprous oxide (Perenox) were identified to be successful in increasing the number of harvested healthy pod compared to the application of fosetyl aluminium (Aliete) and control treatment. On top of that, the timing of fungicide application has some positive effect on the final pod yield where this plot produced greater yield than the unsprayed plot. The application was done before August, which is before the main disease epidemic that usually occurs in September and October. The recommended standard for fungicide application to control black pod disease caused by P. megakarya for a season is 6 to 8 times of application in every 3–4 weeks. However, the adoption of recommended application was very low among farmers in Ghana. Therefore, an experiment with a reduced number of fungicide applications demonstrated that there was 25 to 45% reduction in disease incidence. In terms of disease control and yields, sanitation and three applications of Ridomil 72 plus (12% metalaxyl + 60% copper-1-oxide) fungicide showed a better control compared to sanitation alone and sanitation with one or two fungicide applications. However, reduced in fungicide application was shown to be significantly less effective than the recommended standard fungicide application. It was suggested that the understanding regarding the source of inoculum, the amount of infective inoculum production and how the disease is disseminated is important in order to identify the appropriate and economical method in fungicide application as well as for an effective control of the disease. For example, the application of fungicide on the trunk will help farmers to control the spread of the disease up in the canopy, as it is difficult to reach the canopy during fungicide application. This will eventually save more time, labor and cost for disease management; Cultural and chemical control: In Ghana, a study that combined the sanitation and fungicide application showed a significant reduction in the percentage of disease incidence, where greater black pod incident were observed from pods on the trunk than the canopy in control treatment (no fungicide application). This suggested that the application of fungicide on the trunk would protect pods from infection, therefore reduce primary and secondary infection rate, both on the trunk and in the canopy. In addition, the application of systemic (potassium phosphonate) with one and double injection (20 ml and 40 ml of fungicide for each injection frequency), and semi-systemic (metalaxyl) fungicide showed better control compared to contact fungicides (copper based fungicide) in both locations that were used in the experiment; Biological control: Heavy application of chemical fungicide would eventually leads to resistant of pathogen and causing soil and water pollutions. Hence, more sustainable and environmental friendly method should be established and implemented, such as biological control. Several species of fungi from the genera of Trichoderma was identified to be a beneficial endophyte, to control black pod caused by Phytophthora spp. An isolate of Trichoderma asperellum from soil was observed as a potential mycoparasite for P. megakarya where this fungus has the potential to reduce black pod incident under field condition in Cameroon. It was reported that moderate black pod cases (47%) occurred in the T. asperellum treatment to control black pod disease compared to trees with untreated (71%) and chemical fungicide (1.73%). In Brazil, a new species known as Trichoderma martiale Samuels, sp. nov. was identified as an endophyte on cocoa, which has the ability to reduce black pod symptoms cause by P. megakarya. This endophyte species survives on cocoa pods, and has the ability to establish a long endophytic association with the host (about 3.5 months). Nevertheless, the protection against black pod via biological control is not as effective as the control using chemical fungicides; Resistant variety: There is no specific variety of cocoa that shows resistant to Phytophthora infections and the establishment and utilization of resistant variety will be most likely depends on the region. Numerous breeding programs have been established worldwide in order to screen and test for local hybrids for disease resistant of Phytophthora spp. For example, a study in Cameroon assessed the performance of local cocoa cultivars (the southern and northern Cameroon cultivar) compared to the local and international gene bank cultivars. The local genebank cultivar consisted of F1 hybrid of Upper Amazon X Trinidad, and an international cultivar from Papua New Guinea, and Latin America were provided through International Cocoa Genebank, Trinidad. Based on the information provided by farmers and leaf disc test to assess resistant variety, the local cultivars selected from farmers field showed some resistant to P. megakarya compared to other varieties. Thus, it was concluded that there are some potential resistant varieties available in this area.',
          sci_name: 'Phytophthora megakarya',
          eng_name: 'Black Pod Rot, Black Canker',
          name: 'Black Pod Rot',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/diseases/BlackPodRot.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/BlackPodRot.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/BlackPodRot2.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/BlackPodRot3.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/BlackPodRot4.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/BlackPodRot5.jpg',
          ]
       },

       {
          type: 'Disease',
          fil_stage_plant_affected: '',
          fil_effect: '',
          fil_part_destroyed: '',
          fil_stage_threatening: '',
          fil_symptoms: '',
          fil_description: '',
          fil_plant_affected: 'Kape',
          fil_classification: '',
          fil_treatment: '',
          fil_name: 'Coffee Rust',
          stage_plant_affected: '',
          effect: "The damage caused by coffee rust is the result of reduced photosynthetic capacity of infected leaves and premature defoliation or leaf drop associated with high infection levels. Vegetative growth and berry growth and size are reduced and is generally related to the amount of rust in the current year. The impact of rust, however, can have a longer term impact. Leaf rust associated defoliation and the strong carbohydrate sink of the berries cause shoots and roots to starve and consequently to dieback, thereby reducing the number of nodes on which coffee will be produced next year. Since next year's production of coffee occurs on wood produced this season, the tip and shoot dieback caused by the rust can seriously reduce the following season's crop. Researchers have estimated losses caused by rust between 30 and 80%. On average, however, losses are believed to be about 15% annually.",
          part_destroyed: 'Leaf',
          stage_threatening: '',
          symptoms: 'Infections occur on the coffee leaves.The first observable symptoms are small, pale yellow spots on the upper surfaces of the leaves. As these spots gradually increase in diameter, masses of orange urediniospores (= uredospores) appear on the undersurfaces. The fungus sporulates through the stomata rather than breaking through the epidermis as most rusts do, so it does not form the pustules typical of many rusts. The powdery lesions on the undersides of the leaves can be orange-yellow to red-orange in color, and there is considerable variation from one region to another. While the lesions can develop anywhere on the leaf, they tend to be concentrated around the margins, where dew and rain droplets collect. The centers of the spots eventually dry and turn brown, while the margins of the lesions continue to expand and produce urediniospores. Early in the season, the first lesions usually appear on the lowermost leaves, and the infection slowly progresses upward in the tree. The infected leaves drop prematurely, leaving long expanses of twigs devoid of leaves.',
          description: 'The disease is recognized by the yellow-orange powdery lesions or spots on the underside of leaves',
          plant_affected: 'Coffee',
          order: 'Pucciniales',
          classification: 'Fungal',
          treatment: 'Non-chemical control: Resistance varies with leaf age, particularly for susceptible varieties, with young leaves more susceptible than older leaves on the same plant. Plants with incomplete resistance, however, usually display the opposite response,with high resistance in young and low resistance in older leaves. Cultivars derived from Timor hybrid and the Icatu cultivar display this pattern. Light intensity also influences cultivar reactions. Leaves exposed to high light intensity are generally more susceptible to rust, varying up to 10 fold depending upon pre- and post-inoculation light intensity. It is an important consideration in setting up conditions for rust screening or evaluation. Overbearing coffee may exacerbate rust intensity. Additionally, leaves supporting rapidly growing coffee berries are more susceptible to infection than leaves that only support vegetative growth. High yielding coffee varieties are more susceptible than low yielding varieties. Chemical control: Fungicides to control of rust have been used successfully for a quite a number of years. The metallic copper fungicides have been the least expensive and most effective, with copper oxychloride formulations being the best. The dithiocarbamate protectant fungicides have been useful, but their short residual life and instability at higher temperatures and humidity have limited their widespread adoption. Their performance is better when mixed with copper fungicides. The systemic triazole sterol biosynthesis inhibitors have been effective, but high cost and occasional problems with severe defoliation (phytotoxicity) have been observed. Among the systemics, triademifon has been the best so far. The systemics have also been particularly effective when used in combination or alternately with copper fungicides, reducing the likelihood for the development of fungicide tolerant rust strains. Occasional problems with defoliation associated with the systemics, and their high cost, however, may limit their usefulness. Fungicide efficacy depends both on timing of application and complete placement or coverage of the toxicant. This latter factor is important, since redistribution by rain is very limited. Important factors are spray volume, droplet size, and coverage. In timing the application of fungicides, rainfall was generally the most important factor to consider. Sprays during the rainy season were recommended, and sometimes recommended before the onset of the rainy season. Studies showed that initial inoculum level and berry yield varied greatly from year to year, and it was necessary to include these factors in scheduling fungicide applications. Yield in coffee can vary from maximum to 10% of max yield, depending on cultivar and on the extent of defoliation and yield the previous year, due to rust. Only 2-3 fungicide applications were required during low yield years and 4-6 applications during high yield years. These schedules were developed empirically.',
          sci_name: 'Hemileia vastatrix',
          eng_name: 'Coffee Rust, Coffee Leaf Rust',
          name: 'Coffee Rust',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/diseases/CoffeeRust.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/CoffeeRust.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/CoffeeRust2.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/CoffeeRust3.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/CoffeeRust4.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/CoffeeRust5.jpg',
          ]
       },
       

      {
          type: 'Disease',
          fil_stage_plant_affected: '',
          fil_effect: '',
          fil_part_destroyed: '',
          fil_stage_threatening: '',
          fil_symptoms: '',
          fil_description: '',
          fil_plant_affected: 'Kape',
          fil_classification: '',
          fil_treatment: '',
          fil_name: 'Brown Eye Spot',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: 'Leaf',
          stage_threatening: '',
          symptoms: 'Spots occur on leaves and berries. Plants are susceptible throughout all of their developmental stages. Brown circular leaf spots, up to 15 mm in diam., sometimes with concentric rings and a yellowish halo. The centre of spot becomes grey and dark sporulation can be seen in this area.',
          description: '',
          plant_affected: 'Coffee',
          order: 'Capnodiales',
          classification: 'Fungal',
          treatment: 'Prevention is the most effective method of managing M. coffeicola. Risk factors for this pathogen include: prolonged (24–72 hours) humid environment, poor soil nutrition, and plant stress caused by increased planting density, herbicide injury, weeds, drought, and over irrigation. To manage humidity a farmer can prune to allow for air circulation and ensure the soil has proper drainage. In order to maintain proper plant nutrition, soil testing and a fertilization regiment are essential for combating this pathogen. Plant symptoms such as chlorosis, leaf curling, and bronzing along the edges of leaves can be used to diagnose specific nutrient deficiencies. For example if a plant has leaves bronzed along edges, cupped down-ward; new leaves dead; eventual die back of shoot tips, then it is likely the plant has a calcium deficiency. To reduce plant stress, a farmer can use herbicides to combat weeds but must be careful not to damage the plant in process. Also to minimize competition between adjacent crops, it is important to properly space coffee plants in 8 ft. by 8 ft. areas. Stress can further be minimized if post and pre-harvest damage by machinery or laborers is avoided. To avoid wilting stress plants should be properly irrigated. However, if a crop already has M. coffeicola, copper fungicide is effective. In Hawaii, farmers often spray tri-annually, using 1.5-6 lbs of fungicide per 50–100 gallons water, containing 30-80% copper hydroxide. "Sprays should coincide with dry weather and calm winds. Three spray applications per season should suffice (occurring approximately once per month), beginning at flowering. Thorough coverage of the plant canopy is very important. Large farms in Hawai‘i utilize tractor-mounted mist blowers."',
          sci_name: 'Mycosphaerella coffeicola',
          eng_name: 'Brown Eye Spot, Cercospora Spot',
          name: 'Brown Eye Spot',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/diseases/BrownEyeSpot.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/BrownEyeSpot.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/BrownEyeSpot2.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/BrownEyeSpot3.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/BrownEyeSpot4.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/BrownEyeSpot5.jpg',
          ]
       },

       {
          type: 'Disease',
          fil_stage_plant_affected: '',
          fil_effect: '',
          fil_part_destroyed: '',
          fil_stage_threatening: '',
          fil_symptoms: '',
          fil_description: '',
          fil_plant_affected: 'Kape',
          fil_classification: '',
          fil_treatment: '',
          fil_name: 'Pink Disease',
          stage_plant_affected: '',
          effect: 'The disease can cause significant losses, ranging from the loss of individual branches to death of the whole tree if the main stem is affected. Young trees (2-8 years old in rubber, 2-6 years old in cocoa) are particularly severely affected. ',
          part_destroyed: 'Fruit, Stem',
          stage_threatening: '',
          symptoms: 'Initial symptoms vary with the host. On Hevea, the initial stages of infection are seen as drops of latex and a silky-white mycelial growth on the surface of brown bark. In Piper, sterile pink/white pustules of around 1 mm diameter appear on the young green stems. In Citrus, the sterile pustules may appear first, sometimes with gummosis. In Theobroma, infection is usually first seen as a sparse white mycelium (web) on the bark surface. The surface mycelium is easily overlooked, particularly where the bark is wet. The mycelium spreads mainly along the underside of the branch and sterile pink/white mycelial pustules appear through cracks in the bark and through the pores of the swollen lenticels, about 1-8 cm behind the leading edge of the infection. Hyphae penetrate the branch, causing progressive death of distal tissues. Leaves distal to the infection turn light green in the interveinal areas and then scorch brown from the margins. The affected leaves remain attached to the plant for a long time, giving an appearance similar to that of a broken branch. The characteristic pink/white or pink/orange basidiomatal encrustation develops mostly towards the underside of the branch, although it can develop around the entire circumference of the stem; it can reach 2 m in length. The crust is initially smooth, but cracks and becomes paler as it ages. Conidia are sometimes produced, on orange/red pustules scattered over the bark surface. Long black streaks of coagulated latex or gums appear on infected branches of Hevea or Theobroma, and open wounds develop as the bark cankers and splits. ',
          description: '',
          plant_affected: 'Coffee',
          order: 'Polyporales',
          classification: 'Fungal',
          treatment: 'Management of P. salmonicolor and Pink Disease can be very difficult given its wide host range, making cross-infection a concern. Cultural control can be implemented by pruning frequently and burning any infected branches removed. This is effective when the disease can be recognized in the earliest stages, but it is most effective when performed concurrently with fungicide application. The encrustation and conidial pustules are able to remain functional for a period of time after the infected branches have been removed from the tree. Fungicide use varies among countries affected by the disease. In India, pre- and post-monsoon application of fungicides directly on the trunk and branches of cocoa or rubber trees effectively prevented the disease, while application of a sulphur-lime slurry to tea shrubs worked best in Kalimantan in Borneo, and Validamycin A was found to be the most effective means of control on rubber trees in Vietnam. The use of fungicides prevents the basidiospores from germinating and causing infection.',
          sci_name: 'Phanerochaete salmonicolor',
          eng_name: 'Pink Disease',
          name: 'Pink Disease',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/diseases/PinkDisease.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/PinkDisease.jpg',
          ]
       },

       {
          type: 'Disease',
          fil_stage_plant_affected: '',
          fil_effect: '',
          fil_part_destroyed: '',
          fil_stage_threatening: '',
          fil_symptoms: '',
          fil_description: '',
          fil_plant_affected: 'Kape',
          fil_classification: '',
          fil_treatment: '',
          fil_name: 'Dieback',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: 'Fruit, Stem',
          stage_threatening: '',
          symptoms: '',
          description: '',
          plant_affected: 'Coffee',
          order: 'Pleosporales',
          classification: 'Fungal',
          treatment: '',
          sci_name: 'Ascochyta tarda',
          eng_name: 'Dieback',
          name: 'Dieback',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/diseases/Dieback.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/Dieback.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/Dieback2.jpg',
          ]
       },

       {
          type: 'Disease',
          fil_stage_plant_affected: '',
          fil_effect: '',
          fil_part_destroyed: '',
          fil_stage_threatening: '',
          fil_symptoms: '',
          fil_description: '',
          fil_plant_affected: 'Niyog o Buko',
          fil_classification: '',
          fil_treatment: '',
          fil_name: 'Cadang-cadang',
          stage_plant_affected: 'Flowering stage, Fruiting stage, Vegetative growing stage',
          effect: '',
          part_destroyed: '',
          stage_threatening: '',
          symptoms: 'Symptoms of cadang-cadang develop slowly over 8 to 15 years making it difficult to diagnose at an early time. There are three main “stages” of defined series of characteristics: early, medium, and late stages. The first symptoms in the early stage develop within two to four years of infection. These symptoms include scarification of the coconuts which also become rounded. The leaves (fronds) display bright yellow spots. About two years later, during the medium stage, the inflorescences become stunted and eventually killed, so no more coconuts are produced. Yellow spots are larger and in greater abundance to give the appearance of chlorosis. During the final stage, roughly 6 years after the first symptoms are recorded, the yellow/bronze fronds start to decrease in size and number. Finally, all the leaves coalesce, leaving just the trunk of the palm “standing like a telephone pole”. Palms under 10 years of age are rarely affected by cadang-cadang; the incidence of disease increases until about 40 years of age and then plateaus. "No recovery has ever been observed, and the disease is always fatal". African oil palm has similar symptoms as coconut but also have orange spotting on palms.',
          description: '',
          plant_affected: 'Coconut',
          order: '',
          classification: 'Viral',
          treatment: '',
          sci_name: '',
          eng_name: 'Yellow Mottling Disease',
          name: 'Cadang-cadang',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/diseases/CadangCadang.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/CadangCadang.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/CadangCadang2.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/CadangCadang3.jpg',
          ]
       },

       {
          type: 'Disease',
          fil_stage_plant_affected: '',
          fil_effect: '',
          fil_part_destroyed: '',
          fil_stage_threatening: '',
          fil_symptoms: '',
          fil_description: '',
          fil_plant_affected: 'Niyog o Buko',
          fil_classification: '',
          fil_treatment: '',
          fil_name: 'Stem Bleeding Disease',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: 'Trunk',
          stage_threatening: '',
          symptoms: 'The diagnostic symptom is the conspicuous black stain coming from a hole or wound and seeping down the coconut stem. At first there is a soft, slowly expanding stem decay that blackens with age. Darkly pigmented liquid bleeds down the trunk from the point of infection, covering the stem surface with a black layer of fluids.  A cavity may develop beneath the affected area. Over the years, the fungal invasion of the interior stem can rot the stem entirely, causing plant decline and death. Basal stem invasion may occur in wet areas, producing a black collar of diseased stem tissue at the plant-soil interface. Roots may be blackened and decayed.',
          description: 'A reddish-brown liquid oozes from cracks and holes in the stem. It seeps out and runs down the stem, turning black and staining the stem as it dries.',
          plant_affected: 'Coconut',
          order: '',
          classification: 'Fungal',
          treatment: 'Prevention and avoidance: Avoid wounding palm trunks at all stages of growth, maintenance, and during their harvest and transport for installation in a landscape. Do not drive stakes into palm trunks to secure them to trucks. Avoid contact of wounded palm stems with soil. Do not install sprinkler irrigation emitters that spray water on coconut trunks. Place irrigation emitters at least 12 inches from a coconut palm and direct them away from the trunk. Inspect plants for symptoms regularly; early treatment carries the best chance for success. Minimize stress by providing the palm with adequate nutrition, maintaining equable levels of soil moisture, and avoiding unnecessary cosmetic pruning. Avoid using spikes to climb the palms  for pruning maintence. Treatment: For early infections, chisel or scrape out the rotten portion. Treat wounded or infected areas with fungicide and tar (for example, Bordeaux paste, mancozeb, or copper oxychloride), followed by sealing with coal tar two days later. Burn or destroy the chiseled pieces. Apply neem cake to the base of affected plants. Advanced symptoms may be virtually untreatable, requiring palm removal and destruction. Weakened coconut palms with rotting stems may be a toppling hazard in high winds',
          sci_name: 'Thielaviopsis paradoxa',
          eng_name: 'Stem Bleeding Disease',
          name: 'Stem Bleeding Disease',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/diseases/StemBleedingDisease.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/StemBleedingDisease.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/StemBleedingDisease2.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/StemBleedingDisease3.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/StemBleedingDisease4.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/StemBleedingDisease5.jpg',
          ]
       },

       {
          type: 'Disease',
          fil_stage_plant_affected: '',
          fil_effect: '',
          fil_part_destroyed: '',
          fil_stage_threatening: '',
          fil_symptoms: '',
          fil_description: '',
          fil_plant_affected: 'Niyog o Buko',
          fil_classification: '',
          fil_treatment: '',
          fil_name: 'Leaf Spot',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: '',
          stage_threatening: '',
          symptoms: 'It has been shown that the fungus usually requires wounds to infect the plant and necessary for the fungus to develop. The first symptoms of Pestalotiopsis palmarum begin as very small yellow, brown or black discoloration of the leaves. The disease can be restricted to the leaf blade or may only appear on the petiole and rachis right away. Spots and discoloration areas can be smaller than ¼ inch in size, but under optimal conditions can grow much larger eventually forming lesions. The spots will often turn a grayish color and will be outlined in black. Extreme wilting and a drying appearance on the leaves is also a major symptom of Pestalotiopsis palm. In mature palms, if the fungus is limited to only leaf spots, the disease may not be very serious and damaging. However, the fungus can severely affect juvenile plants if only a few leaf spots are present because they have yet to develop a trunk and only have a few leaves.',
          description: '',
          plant_affected: 'Coconut',
          order: 'Xylariales',
          classification: 'Fungal',
          treatment: 'Wind and water movement easily disperses spores of Pestalotiopsis palmarum so sanitation and irrigation management can be proven to be critical in preventing the movement of the disease. Wounds and damage to the plant offer easy access for the fungus so the limitation of human and insect activity can be very beneficial. Limiting the length of time that the leaves are wet when exposed to high humidity levels also reduces the risk of inoculation. So eliminating overhead irrigation can prevent infection on leaves when there is favorable humid weather. Nutrient management is also very important in controlling Pestalotopsis palmarum. Nutrient deficiencies can cause chlorosis and necrosis of leaf tissue which then in turn creates a wound necessary for disease inoculation. Based on the amount of disease on the leaves, pruning the leaves may treat the disease, but one needs to decide if pruning the leaves is worth the nutrient deficiency that could follow depending on the growth stage of the plant. Fungicides are also available for managing the disease, but alone will not solve the problem. Fungicides will prevent infection of healthy leaves, but infected leaves will stay infected until the leaf dies. Using multiple techniques for managing Pestalotiopsis palmarum at the same time is recommended for optimal management of the disease.',
          sci_name: 'Pestalozzia palmarum',
          eng_name: 'Leaf Spot',
          name: 'Leaf Spot',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/diseases/LeafSpot.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/LeafSpot.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/LeafSpot2.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/LeafSpot3.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/LeafSpot4.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/LeafSpot5.jpg',
          ]
       },

       {
          type: 'Disease',
          fil_stage_plant_affected: '',
          fil_effect: '',
          fil_part_destroyed: '',
          fil_stage_threatening: '',
          fil_symptoms: '',
          fil_description: '',
          fil_plant_affected: 'Niyog o Buko',
          fil_classification: '',
          fil_treatment: '',
          fil_name: 'Coconut Bud and Fruit Rot',
          stage_plant_affected: '',
          effect: '',
          part_destroyed: 'Whole tree',
          stage_threatening: '',
          symptoms: 'Leaves: yellow foliage and shoot die-back. If citrus weevils are present adults may feed on leaves causing notching. Fruit: reduced fruit size and yield. Trunk: Trunk - infection of the trunk by Phytophthora results in dark water soaked areas in the area of active infection. Lesions usually occur on the bark or at the bud union. Lesions may exude copious amount of gum and a brown necrotic area will be found under the bark lesions. Dead bark tends to break away from the trunk in vertical strips. Lesions may spread around the circumference of the trunk slowly girdling the tree. Whole tree: Phytophthora may result in poor tree health, thin canopy, failure to make new growth, and little water and nutrient uptake leading to wilting. When roots are infected the surface of the root becomes soft, discolored and appears water-soaked. Fibrous roots slough their cortex leaving only the white thread-like root cylinder.',
          description: '',
          plant_affected: 'Coconut',
          order: 'Oomycetes',
          classification: 'Fungal',
          treatment: 'A tree demonstrating phytophthora symptoms can sometimes be saved by removing the soil from around the base of the tree all the way down to the top of the main roots, cutting away any bark that’s oozy or dark and leaving the root system exposed. This allows the root system to dry completely, slowing the spread of phytophthora. In most other cases, phytophthora management is limited to prevention. Trees and shrubs, like azaleas, should be planted in well-draining areas, so their roots remain dry for most of the day. Phytophthora only needs four hours of standing water to germinate, making it difficult to combat in areas with poor drainage. Some gardeners get around this by planting their landscaping on mounds 8 to 10 inches tall and being extra careful to plant crowns at the same depth they were at the nursery (often indicated by a dark line on the trunk). Well-established trees are less frequently affected than younger trees because they have widely spread roots that provide lots of avenues for water and nutrition. If a few sections are damaged, they are prepared to compensate. In smaller plants, such as shrubs or vegetables, all bets are off — they can be lost to phytophthora before you even realize the disease has taken hold.',
          sci_name: 'Phytophthora',
          eng_name: 'Coconut Bud and Fruit Rot',
          name: 'Coconut Bud and Fruit Rot',
          image: 'http://res.cloudinary.com/project-sarai/image/upload/diseases/CoconutBudAndFruitRot.jpg',
          image_gallery: [
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/CoconutBudAndFruitRot.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/CoconutBudAndFruitRot2.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/CoconutBudAndFruitRot3.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/CoconutBudAndFruitRot4.jpg',
            'http://res.cloudinary.com/project-sarai/image/upload/diseases/CoconutBudAndFruitRot5.jpg',
          ]
       }
            
    ];

    data.forEach(plant_problem => Plant_Problem.insert(plant_problem));
  }
});

Router.route('/pests-csv', {
  where: 'server',
  action: function () {
    var filename = 'pests.csv';
    var fileData = "";

    var headers = {
      'Content-type': 'text/csv',
      'Content-Disposition': "attachment; filename=" + filename
    };
    var records = Plant_Problem.find({type: "Pest"});

    fileData += "Plant Affected, Name, Common Names, Filipino Names, Scientific Names, Identification Signs, Management Practices, Image URL" + "\r\n";
    records.forEach(function(rec) {
      var imgFilename = rec.name.split(" ").join("");
      var imgUrl = "http://res.cloudinary.com/project-sarai/image/upload/pests/" + imgFilename + ".jpg";

      rec.plant_affected = "\"" + rec.plant_affected + "\"";
      rec.name = "\"" + rec.name + "\"";
      rec.eng_name = "\"" + rec.eng_name + "\"";
      rec.fil_name = "\"" + rec.fil_name + "\"";
      rec.sci_name = "\"" + rec.sci_name + "\"";
      rec.description = "\"" + rec.description + "\"";
      rec.treatment = "\"" + rec.treatment + "\"";
      imgUrl = "\"" + imgUrl + "\"";
      fileData += rec.plant_affected + "," + rec.name + "," + rec.eng_name +  "," + rec.fil_name + "," + rec.sci_name + "," + rec.description + "," + rec.treatment + "," + imgUrl + "\r\n";
    }); 
    this.response.writeHead(200, headers);
    return this.response.end(fileData);
  }
});

Router.route('/pests-rice-csv', {
  where: 'server',
  action: function () {
    var filename = 'pests-rice.csv';
    var fileData = "";

    var headers = {
      'Content-type': 'text/csv',
      'Content-Disposition': "attachment; filename=" + filename
    };
    var records = Plant_Problem.find({$and: [{plant_affected: "Rice"}, {type: "Pest"}]});

    fileData += "Plant Affected, Name, Common Names, Filipino Names, Scientific Names, Identification Signs, Management Practices, Image URL" + "\r\n";
    records.forEach(function(rec) {
      var imgFilename = rec.name.split(" ").join("");
      var imgUrl = "http://res.cloudinary.com/project-sarai/image/upload/pests/" + imgFilename + ".jpg";

      rec.plant_affected = "\"" + rec.plant_affected + "\"";
      rec.name = "\"" + rec.name + "\"";
      rec.eng_name = "\"" + rec.eng_name + "\"";
      rec.fil_name = "\"" + rec.fil_name + "\"";
      rec.sci_name = "\"" + rec.sci_name + "\"";
      rec.description = "\"" + rec.description + "\"";
      rec.treatment = "\"" + rec.treatment + "\"";
      imgUrl = "\"" + imgUrl + "\"";
      fileData += rec.plant_affected + "," + rec.name + "," + rec.eng_name +  "," + rec.fil_name + "," + rec.sci_name + "," + rec.description + "," + rec.treatment + "," + imgUrl + "\r\n";
    }); 
    this.response.writeHead(200, headers);
    return this.response.end(fileData);
  }
});

Router.route('/pests-corn-csv', {
  where: 'server',
  action: function () {
    var filename = 'pests-corn.csv';
    var fileData = "";

    var headers = {
      'Content-type': 'text/csv',
      'Content-Disposition': "attachment; filename=" + filename
    };
    var records = Plant_Problem.find({$and: [{plant_affected: "Corn"}, {type: "Pest"}]});

    fileData += "Plant Affected, Name, Common Names, Filipino Names, Scientific Names, Identification Signs, Management Practices, Image URL" + "\r\n";
    records.forEach(function(rec) {
      var imgFilename = rec.name.split(" ").join("");
      var imgUrl = "http://res.cloudinary.com/project-sarai/image/upload/pests/" + imgFilename + ".jpg";

      rec.plant_affected = "\"" + rec.plant_affected + "\"";
      rec.name = "\"" + rec.name + "\"";
      rec.eng_name = "\"" + rec.eng_name + "\"";
      rec.fil_name = "\"" + rec.fil_name + "\"";
      rec.sci_name = "\"" + rec.sci_name + "\"";
      rec.description = "\"" + rec.description + "\"";
      rec.treatment = "\"" + rec.treatment + "\"";
      imgUrl = "\"" + imgUrl + "\"";
      fileData += rec.plant_affected + "," + rec.name + "," + rec.eng_name +  "," + rec.fil_name + "," + rec.sci_name + "," + rec.description + "," + rec.treatment + "," + imgUrl + "\r\n";
    }); 
    this.response.writeHead(200, headers);
    return this.response.end(fileData);
  }
});

Router.route('/pests-ricecorn-csv', {
  where: 'server',
  action: function () {
    var filename = 'pests-ricecorn.csv';
    var fileData = "";

    var headers = {
      'Content-type': 'text/csv',
      'Content-Disposition': "attachment; filename=" + filename
    };
    var records = Plant_Problem.find({$and: [{plant_affected: "Rice, Corn"}, {type: "Pest"}]});

    fileData += "Plant Affected, Name, Common Names, Filipino Names, Scientific Names, Identification Signs, Management Practices, Image URL" + "\r\n";
    records.forEach(function(rec) {
      var imgFilename = rec.name.split(" ").join("");
      var imgUrl = "http://res.cloudinary.com/project-sarai/image/upload/pests/" + imgFilename + ".jpg";

      rec.plant_affected = "\"" + rec.plant_affected + "\"";
      rec.name = "\"" + rec.name + "\"";
      rec.eng_name = "\"" + rec.eng_name + "\"";
      rec.fil_name = "\"" + rec.fil_name + "\"";
      rec.sci_name = "\"" + rec.sci_name + "\"";
      rec.description = "\"" + rec.description + "\"";
      rec.treatment = "\"" + rec.treatment + "\"";
      imgUrl = "\"" + imgUrl + "\"";
      fileData += rec.plant_affected + "," + rec.name + "," + rec.eng_name +  "," + rec.fil_name + "," + rec.sci_name + "," + rec.description + "," + rec.treatment + "," + imgUrl + "\r\n";
    }); 
    this.response.writeHead(200, headers);
    return this.response.end(fileData);
  }
});

Router.route('/pests-banana-csv', {
  where: 'server',
  action: function () {
    var filename = 'pests-banana.csv';
    var fileData = "";

    var headers = {
      'Content-type': 'text/csv',
      'Content-Disposition': "attachment; filename=" + filename
    };
    var records = Plant_Problem.find({$and: [{plant_affected: "Banana"}, {type: "Pest"}]});

    fileData += "Plant Affected, Name, Common Names, Filipino Names, Scientific Names, Identification Signs, Management Practices, Image URL" + "\r\n";
    records.forEach(function(rec) {
      var imgFilename = rec.name.split(" ").join("");
      var imgUrl = "http://res.cloudinary.com/project-sarai/image/upload/pests/" + imgFilename + ".jpg";

      rec.plant_affected = "\"" + rec.plant_affected + "\"";
      rec.name = "\"" + rec.name + "\"";
      rec.eng_name = "\"" + rec.eng_name + "\"";
      rec.fil_name = "\"" + rec.fil_name + "\"";
      rec.sci_name = "\"" + rec.sci_name + "\"";
      rec.description = "\"" + rec.description + "\"";
      rec.treatment = "\"" + rec.treatment + "\"";
      imgUrl = "\"" + imgUrl + "\"";
      fileData += rec.plant_affected + "," + rec.name + "," + rec.eng_name +  "," + rec.fil_name + "," + rec.sci_name + "," + rec.description + "," + rec.treatment + "," + imgUrl + "\r\n";
    }); 
    this.response.writeHead(200, headers);
    return this.response.end(fileData);
  }
});

Router.route('/pests-cacao-csv', {
  where: 'server',
  action: function () {
    var filename = 'pests-cacao.csv';
    var fileData = "";

    var headers = {
      'Content-type': 'text/csv',
      'Content-Disposition': "attachment; filename=" + filename
    };
    var records = Plant_Problem.find({$and: [{plant_affected: "Cacao"}, {type: "Pest"}]});

    fileData += "Plant Affected, Name, Common Names, Filipino Names, Scientific Names, Identification Signs, Management Practices, Image URL" + "\r\n";
    records.forEach(function(rec) {
      var imgFilename = rec.name.split(" ").join("");
      var imgUrl = "http://res.cloudinary.com/project-sarai/image/upload/pests/" + imgFilename + ".jpg";

      rec.plant_affected = "\"" + rec.plant_affected + "\"";
      rec.name = "\"" + rec.name + "\"";
      rec.eng_name = "\"" + rec.eng_name + "\"";
      rec.fil_name = "\"" + rec.fil_name + "\"";
      rec.sci_name = "\"" + rec.sci_name + "\"";
      rec.description = "\"" + rec.description + "\"";
      rec.treatment = "\"" + rec.treatment + "\"";
      imgUrl = "\"" + imgUrl + "\"";
      fileData += rec.plant_affected + "," + rec.name + "," + rec.eng_name +  "," + rec.fil_name + "," + rec.sci_name + "," + rec.description + "," + rec.treatment + "," + imgUrl + "\r\n";
    }); 
    this.response.writeHead(200, headers);
    return this.response.end(fileData);
  }
});

Router.route('/pests-coffee-csv', {
  where: 'server',
  action: function () {
    var filename = 'pests-coffee.csv';
    var fileData = "";

    var headers = {
      'Content-type': 'text/csv',
      'Content-Disposition': "attachment; filename=" + filename
    };
    var records = Plant_Problem.find({$and: [{plant_affected: "Coffee"}, {type: "Pest"}]});

    fileData += "Plant Affected, Name, Common Names, Filipino Names, Scientific Names, Identification Signs, Management Practices, Image URL" + "\r\n";
    records.forEach(function(rec) {
      var imgFilename = rec.name.split(" ").join("");
      var imgUrl = "http://res.cloudinary.com/project-sarai/image/upload/pests/" + imgFilename + ".jpg";

      rec.plant_affected = "\"" + rec.plant_affected + "\"";
      rec.name = "\"" + rec.name + "\"";
      rec.eng_name = "\"" + rec.eng_name + "\"";
      rec.fil_name = "\"" + rec.fil_name + "\"";
      rec.sci_name = "\"" + rec.sci_name + "\"";
      rec.description = "\"" + rec.description + "\"";
      rec.treatment = "\"" + rec.treatment + "\"";
      imgUrl = "\"" + imgUrl + "\"";
      fileData += rec.plant_affected + "," + rec.name + "," + rec.eng_name +  "," + rec.fil_name + "," + rec.sci_name + "," + rec.description + "," + rec.treatment + "," + imgUrl + "\r\n";
    }); 
    this.response.writeHead(200, headers);
    return this.response.end(fileData);
  }
});

Router.route('/pests-coconut-csv', {
  where: 'server',
  action: function () {
    var filename = 'pests-coconut.csv';
    var fileData = "";

    var headers = {
      'Content-type': 'text/csv',
      'Content-Disposition': "attachment; filename=" + filename
    };
    var records = Plant_Problem.find({$and: [{plant_affected: "Coconut"}, {type: "Pest"}]});

    fileData += "Plant Affected, Name, Common Names, Filipino Names, Scientific Names, Identification Signs, Management Practices, Image URL" + "\r\n";
    records.forEach(function(rec) {
      var imgFilename = rec.name.split(" ").join("");
      var imgUrl = "http://res.cloudinary.com/project-sarai/image/upload/pests/" + imgFilename + ".jpg";

      rec.plant_affected = "\"" + rec.plant_affected + "\"";
      rec.name = "\"" + rec.name + "\"";
      rec.eng_name = "\"" + rec.eng_name + "\"";
      rec.fil_name = "\"" + rec.fil_name + "\"";
      rec.sci_name = "\"" + rec.sci_name + "\"";
      rec.description = "\"" + rec.description + "\"";
      rec.treatment = "\"" + rec.treatment + "\"";
      imgUrl = "\"" + imgUrl + "\"";
      fileData += rec.plant_affected + "," + rec.name + "," + rec.eng_name +  "," + rec.fil_name + "," + rec.sci_name + "," + rec.description + "," + rec.treatment + "," + imgUrl + "\r\n";
    }); 
    this.response.writeHead(200, headers);
    return this.response.end(fileData);
  }
});

Router.route('/diseases-csv', {
  where: 'server',
  action: function () {
    var filename = 'diseases.csv';
    var fileData = "";

    var headers = {
      'Content-type': 'text/csv',
      'Content-Disposition': "attachment; filename=" + filename
    };
    var records = Plant_Problem.find({type: "Disease"});

    fileData += "Plant Affected, Name, Common Names, Filipino Names, Scientific Names, Identification Signs, Management Practices, Image URL" + "\r\n";
    records.forEach(function(rec) {
      var imgFilename = rec.name.split(" ").join("");
      var imgUrl = "http://res.cloudinary.com/project-sarai/image/upload/diseases/" + imgFilename + ".jpg";

      rec.plant_affected = "\"" + rec.plant_affected + "\"";
      rec.name = "\"" + rec.name + "\"";
      rec.eng_name = "\"" + rec.eng_name + "\"";
      rec.fil_name = "\"" + rec.fil_name + "\"";
      rec.sci_name = "\"" + rec.sci_name + "\"";
      rec.symptoms = "\"" + rec.symptoms + "\"";
      rec.treatment = "\"" + rec.treatment + "\"";
      imgUrl = "\"" + imgUrl + "\"";
      fileData += rec.plant_affected + "," + rec.name + "," + rec.eng_name +  "," + rec.fil_name + "," + rec.sci_name + "," + rec.symptoms + "," + rec.treatment + "," + imgUrl + "\r\n";
    }); 
    this.response.writeHead(200, headers);
    return this.response.end(fileData);
  }
});

Router.route('/diseases-rice-csv', {
  where: 'server',
  action: function () {
    var filename = 'diseases-rice.csv';
    var fileData = "";

    var headers = {
      'Content-type': 'text/csv',
      'Content-Disposition': "attachment; filename=" + filename
    };
    var records = Plant_Problem.find({$and: [{plant_affected: "Rice"}, {type: "Disease"}]});

    fileData += "Plant Affected, Name, Common Names, Filipino Names, Scientific Names, Identification Signs, Management Practices, Image URL" + "\r\n";
    records.forEach(function(rec) {
      var imgFilename = rec.name.split(" ").join("");
      var imgUrl = "http://res.cloudinary.com/project-sarai/image/upload/diseases/" + imgFilename + ".jpg";

      rec.plant_affected = "\"" + rec.plant_affected + "\"";
      rec.name = "\"" + rec.name + "\"";
      rec.eng_name = "\"" + rec.eng_name + "\"";
      rec.fil_name = "\"" + rec.fil_name + "\"";
      rec.sci_name = "\"" + rec.sci_name + "\"";
      rec.symptoms = "\"" + rec.symptoms + "\"";
      rec.treatment = "\"" + rec.treatment + "\"";
      imgUrl = "\"" + imgUrl + "\"";
      fileData += rec.plant_affected + "," + rec.name + "," + rec.eng_name +  "," + rec.fil_name + "," + rec.sci_name + "," + rec.symptoms + "," + rec.treatment + "," + imgUrl + "\r\n";
    }); 
    this.response.writeHead(200, headers);
    return this.response.end(fileData);
  }
});

Router.route('/diseases-corn-csv', {
  where: 'server',
  action: function () {
    var filename = 'diseases-corn.csv';
    var fileData = "";

    var headers = {
      'Content-type': 'text/csv',
      'Content-Disposition': "attachment; filename=" + filename
    };
    var records = Plant_Problem.find({$and: [{plant_affected: "Corn"}, {type: "Disease"}]});

    fileData += "Plant Affected, Name, Common Names, Filipino Names, Scientific Names, Identification Signs, Management Practices, Image URL" + "\r\n";
    records.forEach(function(rec) {
      var imgFilename = rec.name.split(" ").join("");
      var imgUrl = "http://res.cloudinary.com/project-sarai/image/upload/diseases/" + imgFilename + ".jpg";

      rec.plant_affected = "\"" + rec.plant_affected + "\"";
      rec.name = "\"" + rec.name + "\"";
      rec.eng_name = "\"" + rec.eng_name + "\"";
      rec.fil_name = "\"" + rec.fil_name + "\"";
      rec.sci_name = "\"" + rec.sci_name + "\"";
      rec.symptoms = "\"" + rec.symptoms + "\"";
      rec.treatment = "\"" + rec.treatment + "\"";
      imgUrl = "\"" + imgUrl + "\"";
      fileData += rec.plant_affected + "," + rec.name + "," + rec.eng_name +  "," + rec.fil_name + "," + rec.sci_name + "," + rec.symptoms + "," + rec.treatment + "," + imgUrl + "\r\n";
    }); 
    this.response.writeHead(200, headers);
    return this.response.end(fileData);
  }
});

Router.route('/diseases-banana-csv', {
  where: 'server',
  action: function () {
    var filename = 'diseases-banana.csv';
    var fileData = "";

    var headers = {
      'Content-type': 'text/csv',
      'Content-Disposition': "attachment; filename=" + filename
    };
    var records = Plant_Problem.find({$and: [{plant_affected: "Banana"}, {type: "Disease"}]});

    fileData += "Plant Affected, Name, Common Names, Filipino Names, Scientific Names, Identification Signs, Management Practices, Image URL" + "\r\n";
    records.forEach(function(rec) {
      var imgFilename = rec.name.split(" ").join("");
      var imgUrl = "http://res.cloudinary.com/project-sarai/image/upload/diseases/" + imgFilename + ".jpg";

      rec.plant_affected = "\"" + rec.plant_affected + "\"";
      rec.name = "\"" + rec.name + "\"";
      rec.eng_name = "\"" + rec.eng_name + "\"";
      rec.fil_name = "\"" + rec.fil_name + "\"";
      rec.sci_name = "\"" + rec.sci_name + "\"";
      rec.symptoms = "\"" + rec.symptoms + "\"";
      rec.treatment = "\"" + rec.treatment + "\"";
      imgUrl = "\"" + imgUrl + "\"";
      fileData += rec.plant_affected + "," + rec.name + "," + rec.eng_name +  "," + rec.fil_name + "," + rec.sci_name + "," + rec.symptoms + "," + rec.treatment + "," + imgUrl + "\r\n";
    }); 
    this.response.writeHead(200, headers);
    return this.response.end(fileData);
  }
});

Router.route('/diseases-cacao-csv', {
  where: 'server',
  action: function () {
    var filename = 'diseases-cacao.csv';
    var fileData = "";

    var headers = {
      'Content-type': 'text/csv',
      'Content-Disposition': "attachment; filename=" + filename
    };
    var records = Plant_Problem.find({$and: [{plant_affected: "Cacao"}, {type: "Disease"}]});

    fileData += "Plant Affected, Name, Common Names, Filipino Names, Scientific Names, Identification Signs, Management Practices, Image URL" + "\r\n";
    records.forEach(function(rec) {
      var imgFilename = rec.name.split(" ").join("");
      var imgUrl = "http://res.cloudinary.com/project-sarai/image/upload/diseases/" + imgFilename + ".jpg";

      rec.plant_affected = "\"" + rec.plant_affected + "\"";
      rec.name = "\"" + rec.name + "\"";
      rec.eng_name = "\"" + rec.eng_name + "\"";
      rec.fil_name = "\"" + rec.fil_name + "\"";
      rec.sci_name = "\"" + rec.sci_name + "\"";
      rec.symptoms = "\"" + rec.symptoms + "\"";
      rec.treatment = "\"" + rec.treatment + "\"";
      imgUrl = "\"" + imgUrl + "\"";
      fileData += rec.plant_affected + "," + rec.name + "," + rec.eng_name +  "," + rec.fil_name + "," + rec.sci_name + "," + rec.symptoms + "," + rec.treatment + "," + imgUrl + "\r\n";
    }); 
    this.response.writeHead(200, headers);
    return this.response.end(fileData);
  }
});

Router.route('/diseases-coffee-csv', {
  where: 'server',
  action: function () {
    var filename = 'diseases-coffee.csv';
    var fileData = "";

    var headers = {
      'Content-type': 'text/csv',
      'Content-Disposition': "attachment; filename=" + filename
    };
    var records = Plant_Problem.find({$and: [{plant_affected: "Coffee"}, {type: "Disease"}]});

    fileData += "Plant Affected, Name, Common Names, Filipino Names, Scientific Names, Identification Signs, Management Practices, Image URL" + "\r\n";
    records.forEach(function(rec) {
      var imgFilename = rec.name.split(" ").join("");
      var imgUrl = "http://res.cloudinary.com/project-sarai/image/upload/diseases/" + imgFilename + ".jpg";

      rec.plant_affected = "\"" + rec.plant_affected + "\"";
      rec.name = "\"" + rec.name + "\"";
      rec.eng_name = "\"" + rec.eng_name + "\"";
      rec.fil_name = "\"" + rec.fil_name + "\"";
      rec.sci_name = "\"" + rec.sci_name + "\"";
      rec.symptoms = "\"" + rec.symptoms + "\"";
      rec.treatment = "\"" + rec.treatment + "\"";
      imgUrl = "\"" + imgUrl + "\"";
      fileData += rec.plant_affected + "," + rec.name + "," + rec.eng_name +  "," + rec.fil_name + "," + rec.sci_name + "," + rec.symptoms + "," + rec.treatment + "," + imgUrl + "\r\n";
    }); 
    this.response.writeHead(200, headers);
    return this.response.end(fileData);
  }
});

Router.route('/diseases-coconut-csv', {
  where: 'server',
  action: function () {
    var filename = 'diseases-coconut.csv';
    var fileData = "";

    var headers = {
      'Content-type': 'text/csv',
      'Content-Disposition': "attachment; filename=" + filename
    };
    var records = Plant_Problem.find({$and: [{plant_affected: "Coconut"}, {type: "Disease"}]});

    fileData += "Plant Affected, Name, Common Names, Filipino Names, Scientific Names, Identification Signs, Management Practices, Image URL" + "\r\n";
    records.forEach(function(rec) {
      var imgFilename = rec.name.split(" ").join("");
      var imgUrl = "http://res.cloudinary.com/project-sarai/image/upload/diseases/" + imgFilename + ".jpg";

      rec.plant_affected = "\"" + rec.plant_affected + "\"";
      rec.name = "\"" + rec.name + "\"";
      rec.eng_name = "\"" + rec.eng_name + "\"";
      rec.fil_name = "\"" + rec.fil_name + "\"";
      rec.sci_name = "\"" + rec.sci_name + "\"";
      rec.symptoms = "\"" + rec.symptoms + "\"";
      rec.treatment = "\"" + rec.treatment + "\"";
      imgUrl = "\"" + imgUrl + "\"";
      fileData += rec.plant_affected + "," + rec.name + "," + rec.eng_name +  "," + rec.fil_name + "," + rec.sci_name + "," + rec.symptoms + "," + rec.treatment + "," + imgUrl + "\r\n";
    }); 
    this.response.writeHead(200, headers);
    return this.response.end(fileData);
  }
});
