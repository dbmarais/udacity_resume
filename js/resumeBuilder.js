/*
This is empty on purpose! Your code to build the resume will go here.
 */
 //Using Strict mode.
"use strict";

//SECTION I: JSon Objects to store Resume info
var bio = {
  "name": "Deon Marais",
  "role": "Web Developer",
  "contacts": {
    "mobile": "0157755475",
    "email": "mail@deonmarais.com",
    "github": "github",
    "twitter":"The Twitter",
    "location": "Cologne, Germany"
  },
  "welcomeMessage": "This is a welcome message welcoming you to my Resume",
  "skills": [
    "R",
    "MS Excel Guru",
    "python",
    "Grel"
  ],
  "biopic": "images/fry.jpg"
};


var education = {
  "schools": [
    {
      "name": "FH Cologne",
      "location": "Cologne, Germany",
      "degree": "MA",
      "majors": [
        "Business Intelligence",
        "Econometrics",
        "Macro Economics"
      ],
      "dates": "2007-2011",
      "url": "www.th-koeln.de"
    },
    {
      "name": "University of International Business and Economics Beijing",
      "location": "Beijing, China",
      "degree": "MA",
      "majors": [
        "Cross Cultural Marketing"
      ],
      "dates": "2008",
      "url": "www.english.uibe.edu.cn"
    },
    {
      "name": "University of Johannesburg, South Africa",
      "location": "Johannesburg, South Africa",
      "degree": "B.Com",
      "majors": [
        "Investment Management",
        "Econometrics",
        "Economics"
      ],
      "dates": "2004-2006",
      "url": "www.uj.ac.za"
    },
  ],
  "onlineCourses": [
    {
       "title": "string",
       "school": "string",
       "dates": "string",
       "url": "string"
     }
   ]

};


var work = {
  "jobs": [
    {
      "employer": "InMEDiG",
      "title": "Data Analyst",
      "location": "Cologne, Germany",
      "dates": "2011-2016",
      "description": "Analysis and Dashboarding. Tempor cupidatat ea magna sit non voluptate qui.Culpa cupidatat dolor ex laboris enim esse reprehenderit cillum. Non eiusmod reprehenderit sint quis occaecat irure Lorem elit ullamco quis nostrud fugiat. Aliquip laboris et est amet et amet mollit qui sint occaecat eiusmod. Consequat laboris elit nisi pariatur aliqua et adipisicing occaecat. Ad est adipisicing aliqua adipisicing occaecat consectetur qui laborum enim labore occaecat elit."
    },
    {
      "employer": "Cologne University of Applied Science",
      "title": "Research Assistant",
      "location": "Cologne, Germany",
      "dates": "2010-2011",
      "description": "Cross Border Banking Project: Proident labore sint do esse et labore sit ex elit in officia do ut amet reprehenderit elit.Laboris commodo exercitation consequat mollit excepteur ullamco ad irure. Aute in est veniam consequat consequat laboris sit amet Lorem irure incididunt pariatur commodo amet est cillum. Non nulla aliquip culpa ullamco culpa ipsum non excepteur eiusmod quis nostrud laborum labore non duis excepteur. Aliqua nostrud minim nulla proident in minim reprehenderit. Mollit eu duis nulla duis aliqua eiusmod eu enim esse. Pariatur consequat velit dolor esse sint magna ex. Sit sit tempor proident do anim Lorem id sit quis laborum anim dolore tempor laborum dolor enim id."
    }
  ]

};

var projects = {
    "projects":[
        {
          "title":"Rhinos Poaching in Sub Saharan Africa",
          "dates":"2015-2016",
          "description":"An interactive Map of Reported Poaching of White Rhino in Sub-Saharan Africa",
          "images":["https://placehold.it/180X120","https://placehold.it/180X120","https://placehold.it/180X120","https://placehold.it/180X120"]
        }
    ],

};



//SECTION II: Defining the display functions
bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#name").after(formattedRole);

    for (var contact in bio.contacts) {

        var formattedContact = HTMLcontactGeneric.replace("%data%", bio.contacts[contact]);
        formattedContact = formattedContact.replace("%contact%", contact);

        $("#topContacts, #footerContacts").append(formattedContact);

    }

    var formattedBiopic = HTMLbioPic.replace("%data%", "/images/fry.jpg");
    $("#header").append(formattedBiopic);

    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", "Dolor aute mollit ipsum id adipisicing minim dolore mollit consequat aliqua consectetur culpa.");
    $("#header").append(formattedWelcome);

    $("#header").append(HTMLskillsStart);

    bio.skills.forEach(function(skill) {

        var formattedSkill = HTMLskills.replace("%data%", skill);
        $("#skills").append(formattedSkill);
    });

};


work.display = function() {

    $("#workExperience").append(HTMLworkStart);

    work.jobs.forEach(function(job) {

        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);

        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDate = HTMLworkDates.replace("%data%", job.dates);
        $(".work-entry:last").append(formattedDate);

        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedDescription);;
    })
}

projects.display = function() {
    $("#projects").append(HTMLprojectStart);
    projects.projects.forEach(function(project) {
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
        $(".project-entry").append(formattedProjectTitle);

        var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
        $(".project-entry").append(formattedProjectDates);

        var formattedProjectDescription = HTMLworkDescription.replace("%data%", project.description);
        $(".project-entry").append(formattedProjectDescription);

        project.images.forEach(function(url) {
            var formattedProjectImage = HTMLprojectImage.replace("%data%", url);
            $(".project-entry").append(formattedProjectImage);
        });
    });
};

education.display = function() {
    $("#education").append(HTMLschoolStart);

    education.schools.forEach(function(school) {
        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);

        var formattedDegreeName = HTMLschoolDegree.replace("%data%", school.degree);
        $(".education-entry").append(formattedSchoolName + formattedDegreeName);

        var formattedDegreeDate = HTMLschoolDates.replace("%data%", school.dates);
        $(".education-entry").append(formattedDegreeDate);

        //Add the Majors by iterating through the Majors Array within Schools object

        school.majors.forEach(function(major) {

            var formattedMajor = HTMLschoolMajor.replace("%data%", major);
            $(".education-entry").append(formattedMajor);
            $("education-entry").append(formattedMajor);
        });
    });
};

//SECTION III: Invoking the display functions

bio.display();
work.display();
education.display();
projects.display();

$("#mapDiv").append(googleMap);
