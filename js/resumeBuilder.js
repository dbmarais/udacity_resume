/*
This is empty on purpose! Your code to build the resume will go here.
 */

/*var formattedName = HTMLheaderName.replace("%data%","Deon Marais");
$("#header").append(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%","Web Developer");
$("#header").append(formattedRole);*/

var bio = {
          "name" : "Deon Marais",
          "role" : "Web Developer",
          "contact" : ["Hennef","mail@deonmarais.com","tel: 011222333","Github"],
          "picture" : "pic",
          "welcome" : "This is a welcome Message",
          "skills" : ["R","MS Excel Guru"]
  };


var education = {
  "schools" : [
  {
  "name" : "FH Cologne",
  "years": "2007-2011",
  "city" : "Cologne, Germany",
  "degree" : "MA",
  "major" : "Internaional Business"
},
  {
  "name" : "University of Johannesburg, South Africa",
  "years": "2004-2006",
  "city" : "Johannesburg, South Africa",
  "degree" : "B.Com",
  "major" : ["Investment Management", "Econometrics"]
}
]
};

var work = {
  "jobs" :[
    {
    "employer" : "InMEDiG",
    "years": "2011",
    "location" : "Cologne, Germany",
    "title" : "Data Analyst",
    "description" : "Analysis and Dashboarding. Tempor cupidatat ea magna sit non voluptate qui.Culpa cupidatat dolor ex laboris enim esse reprehenderit cillum. Non eiusmod reprehenderit sint quis occaecat irure Lorem elit ullamco quis nostrud fugiat. Aliquip laboris et est amet et amet mollit qui sint occaecat eiusmod. Consequat laboris elit nisi pariatur aliqua et adipisicing occaecat. Ad est adipisicing aliqua adipisicing occaecat consectetur qui laborum enim labore occaecat elit."
},
  {
    "employer" : "Cologne University of Applied Science",
    "years": "2010-2011",
    "location" : "Cologne, Germany",
    "title" : "Research Assistant",
    "description" : "Cross Border Banking Project: Proident labore sint do esse et labore sit ex elit in officia do ut amet reprehenderit elit.Laboris commodo exercitation consequat mollit excepteur ullamco ad irure. Aute in est veniam consequat consequat laboris sit amet Lorem irure incididunt pariatur commodo amet est cillum. Non nulla aliquip culpa ullamco culpa ipsum non excepteur eiusmod quis nostrud laborum labore non duis excepteur. Aliqua nostrud minim nulla proident in minim reprehenderit. Mollit eu duis nulla duis aliqua eiusmod eu enim esse. Pariatur consequat velit dolor esse sint magna ex. Sit sit tempor proident do anim Lorem id sit quis laborum anim dolore tempor laborum dolor enim id."
}
]
};


var formattedName = HTMLheaderName.replace("%data%",bio.name);
$("#header").append(formattedName);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
$("#header").append(formattedRole);


    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
    $("#skills").append(formattedSkill);



 for(job in work.jobs){

     $("#workExperience").append(HTMLworkStart);

     var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
     var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);

     var formattedEmployerTitle = formattedEmployer + formattedTitle;
     $(".work-entry:last").append(formattedEmployerTitle);

     var formattedDate = HTMLworkDates.replace("%data%",work.jobs[job].years);
     $(".work-entry:last").append(formattedDate);

     var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
     $(".work-entry:last").append(formattedDescription);
   }

$("#mapDiv").append(googleMap);




/*var inName = function(n){
  var nArr = n.split(" ");
  n[0] = n[0].charAt(0).toUpperCase()+n.slice(1).toLowerCase();
  n[1] = n[1].toUpperCase();
  var intName = n.join(" ");
  return intName;

}*/
