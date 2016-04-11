/**
* Declare variables
*/
var bio = {
  "name" : "Takao Minamoto",
  "role" : "Sr. Software Engineer",
  "contacts" : {
  	"mobile": "408-313-1116",
    "email" : "takao.m@gmail.com",
    "github" : "tminamoto",
    "twitter" : "takao_mi_x",
    "location" : "Cupertino, California, USA"
  },
  "welcomeMessage" : "Welcome to my bio",
  "skills" : ["Java", "Spring MVC", "JavaScript", "AngularJS", "Linux", "Unix", "Oracle DB", "Weblogic", "Oracle Access Manager", "Project management"],
  "bioPic" : "images/222180_8270853497_3497_n.jpg"
}

var work = {
  "jobs" : [
    {
      "employer": "NEC Corp. of America",
      "title": "Sr. Software Engineer",
      "location": "Santa Clara, California, USA",
      "dates": "09/2011 - in progress",
      "description": "- Lead web application developer of customer portal<BR>- Analyzed client’s technologies and advise to sustain their systems<BR>- Trouble shooting of various complex systems"    },
    {
      "employer": "BEANCUBE Inc.",
      "title": "Sr. Consultant",
      "location": "Los Angeles, California, USA",
      "dates": "05/2007 - 09/2011",
      "description": "- Analyzed client’s business and system flow, defined client’s requirements, plan project scope, schedule and provide possible solution options to client<BR>- Supported Design system architecture, database, and application based on the requirement"
    },
    {
      "employer": "ABeam Consulting",
      "title": "Consultant",
      "location": "Tokyo, Japan",
      "dates": "04/2004 - 05/2007",
      "description": "- Assisted to create overview proposal for System/Network architecture for ERP system<BR>- Created specification and developed in-house ERP and sub system<BR>- Database administration"
    }
  ]
}

var projects = {
  "projects" : [
    {
      "title": "Various internal system development for our customer center",
      "dates": "09/2011 - in progress",
      "description": "- Analytic system according to our opeation records.<BR>- Test envrironment management system",
      "images": []
    },
    {
      "title": "Major coffee retailer exporting system",
      "dates": "2010 - 09/2011",
      "description": "- Lead the development of the exporting system that receive the exporting data and format the data to send to exporter and calculate the total cost to pay government and exporting carriers",
      "images": []
    },
    {
      "title": "Taxation systems for Bing 4 accounting firms",
      "dates": "05/2007 - 2010",
      "description": "- This project was conducted on every year before the taxation season. Enhanced the web and desktop application to meet the government regulation. And added additional features to support accountants operation",
      "images": []
     }
  ]
}

var education = {
  "schools" : [
    {
      "name": "Keio University",
      "location": "Tokyo, Japan",
      "degree": "Bachelor",
      "majors": ["Computer Science"],
      "dates": "03/2004",
      "url": "http://www.sfc.keio.ac.jp/en/"
    }
  ],
  "onlineCourses" : [
    {
      "title": "Front-End Web Developer",
      "school": "Udacity",
      "dates": 2016,
      "url": "https://www.udacity.com/"
    }
  ]  
}

/**
* Main functions to construct the entire resume
*/
displayBio();
displayWork();
displayProject();
displayEducation();
displayMap();
displayFooter();


/**
* @description Display biography
*/
function displayBio() {

  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

  $("#topContacts").before(formattedName);
  $("#topContacts").before(formattedRole);

  var formattedContact = null;

  $.each(bio.contacts, function(key, element) {
    formattedContact = HTMLcontactGeneric.replace("%contact%", key);
    formattedContact = formattedContact.replace("%data%", element);
    $("#topContacts").append(formattedContact);
  });

  var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);

  $("#topContacts").after(formattedPic);

  var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

  $("#topContacts").after(formattedWelcomeMsg);

  $("#header").append(HTMLskillsStart);

  var formattedSkill = null;

  $.each(bio.skills,function(){
    formattedSkill = HTMLskills.replace("%data%", this);
    $("#skills").append(formattedSkill);
  });

}

/**
* @description Display work experiences
*/
function displayWork() {

  $("#workExperience").append(HTMLworkStart);

  for (job in work.jobs) {

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployer = formattedEmployer + formattedTitle;

    $(".work-entry").append(formattedEmployer);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates)

    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

    $(".work-entry:last").append(formattedDescription);
  }

}

/**
* @description Display projects
*/
function displayProject() {

  $("#projects").append(HTMLprojectStart);

  for (project in projects.projects) {

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    if (projects.projects[project].images.length > 0) {
      for (image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
}

/**
* @description Display education
*/
function displayEducation() {

  $("#education").append(HTMLschoolStart);

  for (school in education.schools) {

    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    var formattedSchoolName = formattedSchoolName + formattedSchoolDegree;

    $(".education-entry:last").append(formattedSchoolName);

    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);

    $(".education-entry:last").append(formattedSchoolDates);

    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);

    $(".education-entry:last").append(formattedSchoolLocation);

    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);

    $(".education-entry:last").append(formattedSchoolMajor);

  }

  $("#education").append(HTMLonlineClasses);
  $("#education").append(HTMLschoolStart);

  for (onlineCourse in education.onlineCourses) {

    var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
    var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
    var formattedonlineTitle = formattedonlineTitle + formattedonlineSchool;

    $(".education-entry:last").append(formattedonlineTitle);

    var formatteonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);

    $(".education-entry:last").append(formatteonlineDates);

    var formatteonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);

    $(".education-entry:last").append(formatteonlineURL);

  }

}


/**
* @description Display google maps
*/
function displayMap () {

  $("#mapDiv").append(googleMap);	

}

/**
* @description Display footer of my resume
*/
function displayFooter() {

  var formattedContact = null;

  $.each(bio.contacts, function(key, element) {
    formattedContact = HTMLcontactGeneric.replace("%contact%", key);
    formattedContact = formattedContact.replace("%data%", element);
    $("#footerContacts").append(formattedContact);
  });

}
