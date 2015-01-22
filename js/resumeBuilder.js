//The following is the JSON for my page.

var bio = {
    "name": "Jeff Plourd",
    "role": "Web Developer",
    "contacts": {
        "mobile": "858-688-0577",
        "email": "jeffplourd@gmail.com",
        "github": "jeffplourd",
        "twitter": "@jeffplourd",
        "location": "San Diego"
    },
    "welcomeMessage": "It's an amazing day!",
    "skills": [
        "awesomeness",
        "delivering things",
        "cryogenic sleep",
        "saving the universe"
    ],
    "bioPic": "images/fry.jpg"
};

var education = {
	"schools": [
	{
		"name": "San Diego State Univ",
		"city": "San Diego, CA",
		"degree": "BS",
		"majors": ["Criminal Justice", "Leadership Development"],
		"dates": 2012,
		"url":  "http://example.com"
	},
	{
		"name": "UNLV",
		"city": "Las Vegas, NV",
		"degree": "MA",
		"majors": ["Education"],
		"dates": 2014,
		"url":  "http://example.com"
	}
	],
	"onlineCourses": [
		{
			"title": "JavaScript Basics",
			"school": "Udacity",
			"dates": 2014,
			"url": "http://www.udacity.com/course/ud804"
		}
	]
};

var work = {
	"jobs": [
		{
			"employer": "Teach for America / Clark County School District",
			"title": "5th Grade Teacher",
			"dates": "6/2012-6-2014",
			"description": "Worked with other teachers and administrators to evaluate and revise elementary school programs. Supervised an average of 35 students in classrooms, halls, cafeterias, schoolyards and on field trips. Encouraged interactive learning by incorporating educational software and the Internet. Instructed up to 35 students individually and in groups.",
			"location": "Las Vegas, NV"
		},
		{
			"employer": "WyzAnt Tutoring",
			"title": "Tutor",
			"dates": "6/2014-current",
			"description": "Adapted teaching methods and materials to meet students' varying needs and interests. Met regularly with parents and guardians to discuss children's progress. Promoted physical, mental and social development by implementing projects and e-learning.",
			"location": "San Diego, CA"
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "Sample Project 1",
			"dates": "2014",
			"description": "blah blah blah",
			"images": [
				"http://placebear.com/500/300",
				"http://placekitten.com/g/500/300"
			]
		}
	]
};


//The following are the functions that manipulate my page.

bio.display = function(){
	var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedHeaderRole);
	var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedHeaderName);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);

	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedBioPic);

	var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcome);

	if(bio.skills.length > 0) {

		$("#header").append(HTMLskillsStart);

		var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
		$("#skills").append(formattedSkill);
	}

	//This section is to add the footer contact info

	$("#footerContacts").append(formattedMobile);
	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedGithub);
	$("#footerContacts").append(formattedLocation);

}

bio.display();

work.display = function(){
	for(jobs in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[jobs].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[jobs].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[jobs].dates);
		$(".work-entry:last").append(formattedWorkDates);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[jobs].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[jobs].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

work.display();



projects.display = function() {
	for(project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if(projects.projects[project].images.length > 0) {
			for(image in projects.projects[project].images){
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
};

projects.display();

education.display = function (){
	for(school in education.schools){
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
		$(".education-entry:last").append(formattedSchoolNameDegree);

		var formattedSchoolDate = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].city);
		var formattedSchoolDateLocation = formattedSchoolDate + formattedSchoolLocation;
		$(".education-entry:last").append(formattedSchoolDateLocation);

		for(major in education.schools[school].majors){
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
			$(".education-entry:last").append(formattedSchoolMajor);
		}
	}

	$("#education").append(HTMLonlineClasses);

	for(online in education.onlineCourses){
		$("#education").append(HTMLschoolStart);

		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[online].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[online].school);
		var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
		$(".education-entry:last").append(formattedOnlineTitleSchool);

		var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[online].dates);
		$(".education-entry:last").append(formattedOnlineDates);

		var formattedOnlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[online].url);
		$(".education-entry:last").append(formattedOnlineURL);
	}
}

education.display();



//this code appends the google maps functionality to the page
$("#mapDiv").append(googleMap);

//this code makes the console display the x and y coordinates of clicks

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x, y);
});

//this function 'internationalizes' names
function inName(name){
	name = name.trim().split("");
	console.log(name);
	name[1] = name[1].toUpperCase;
	name[0] = name[0].slice(0,1).toUpperCase + name[0].slice(1).toLowerCase;

	return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

//This should create a google hangout button to connect with me.

gapi.hangout.render('#placeholder-div', { 'render': 'createhangout' });
