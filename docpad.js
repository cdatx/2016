module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "Container Days Austin",
      description: "High quality, local discussion on Docker, CoreOS, LXC etc.",
      date: "October 14th & 15th 2016",

      // If your event is free, just comment this line
      // price: "$ TBA",
      venue: "Texas Advanced Computing Center (TACC)",
      address: "10100 Burnet Rd",
      city: "Austin",
      state: "Texas"
    },
    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    //callToAction: {
    //    text: "Register now!",
    //    link: "https://www.eventbrite.com/e/container-days-austin-2015-tickets-15159477405"
    // },

    // Site info
    site: {
      theme: "yellow-swan",
      url: "http://braziljs.github.io/conf-boilerplate/",
      googleanalytics: "UA-33656081-1"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      'sponsors',
      'register',
      'schedule',
      'workshop',
      'openspaces',
      'conduct',
      'twitter'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "About",
      location: "Location",
      speakers: "Speakers",
      schedule: "Schedule",
      sponsors: "Sponsors",
      register: "Register",
      openspaces: "Openspaces",
      conduct: "Conduct",
      twitter: "Twitter",
      workshop: "Workshop"
    },

    // The entire schedule
    schedule: [
      {
        name: "Registration",
        photo: "/themes/yellow-swan/img/register.png",
        bio: "",
        presentation: {
          title: "Registration",
          description: "Registration begins at 9am, and continues till 10am. Come early, grab a coffee, and interact with your peers.",
          time: "Friday, 9am"
        },
        link: {
          href: "",
          text: ""
        }
      },
      {
        name: "Workshop #1",
        photo: "/themes/yellow-swan/img/container.png",
        bio: "",
        presentation: {
          title: "Container Workshop",
          description: "Details coming very soon.",
          time: "Friday, 10am"
        },
        link: {
          href: "",
          text: ""
        }
      },
      {
        name: "Workshop #2",
        photo: "/themes/yellow-swan/img/container.png",
        bio: "",
        presentation: {
          title: "Container Workshop",
          description: "Details coming very soon.",
          time: "Friday, 1pm"
        },
        link: {
          href: "",
          text: ""
        }
      },
      {
        name: "Workshop #3",
        photo: "/themes/yellow-swan/img/container.png",
        bio: "",
        presentation: {
          title: "Container Workshop",
          description: "Details coming very soon.",
          time: "Friday, 3pm"
        },
        link: {
          href: "",
          text: ""
        }
      },
      {
        name: "Registration",
        photo: "/themes/yellow-swan/img/register.png",
        bio: "",
        presentation: {
          title: "Registration",
          description: "Evening registration begins at 5pm.",
          time: "Friday, 5pm"
        },
        link: {
          href: "",
          text: ""
        }
      },
      {
        name: "Karthik Gaekwad",
        photo: "/themes/yellow-swan/img/speaker/karthik.jpg",
        bio: "Karthik is a technologist who lives in Austin who loves 3 things- BBQ, containers, and the Austin tech scene! While he's not working on the container team at Oracle, he runs the local Austin Docker Meetup, Cloud Austin and Devopsdays.",
        presentation: {
          title: "Welcome!",
          description: "Welcome to Container Days Austin. ",
          time: "Friday, 6:30pm"
        },
        link: {
          href: "https://twitter.com/iteration1",
          text: "@iteration1"
        }
      },
      {
        name: "Keynote",
        photo: "/themes/yellow-swan/img/speaker/speaker.png",
        bio: "",
        presentation: {
          title: "Keynote",
          description: "Container Days kickoff with an awesome keynote. Stay tuned for details.",
          time: "Friday, 5:45pm"
        },
        link: {
          href: "",
          text: ""
        }
      },
      {
        name: "Happy Hour",
        photo: "/themes/yellow-swan/img/hh.png",
        bio: "",
        presentation: {
          title: "Happy Hour",
          description: "Kick back, and enjoy a happy hour with conference goers and peers.",
          time: "Friday, 6:30pm"
        },
        link: {
          href: "",
          text: ""
        }
      },
      {
        name: "Registration",
        photo: "/themes/yellow-swan/img/register.png",
        bio: "",
        presentation: {
          title: "Registration",
          description: "Registration begins at 9am, and continues till 10am. Come early, grab a coffee, and interact with your peers.",
          time: "Saturday, 9am"
        },
        link: {
          href: "",
          text: ""
        }
      },
      {
        name: "Keynote",
        photo: "/themes/yellow-swan/img/speaker/speaker.png",
        bio: "",
        presentation: {
          title: "Keynote",
          description: "Container Days kickoff with an awesome keynote. Stay tuned for details.",
          time: "Saturday, 10am"
        },
        link: {
          href: "",
          text: ""
        }
      },
      {
        name: "Session #1",
        photo: "/themes/yellow-swan/img/speaker/speaker.png",
        bio: "",
        presentation: {
          title: "Session #1",
          description: "A very special talk. Stay tuned for details.",
          time: "Saturday, 9:55am"
        },
        link: {
          href: "",
          text: ""
        }
      },
      {
        name: "Session #2",
        photo: "/themes/yellow-swan/img/speaker/speaker.png",
        bio: "",
        presentation: {
          title: "Session #2",
          description: "A very special talk. Stay tuned for details.",
          time: "Saturday, 10:30am"
        },
        link: {
          href: "",
          text: ""
        }
      },
      {
        name: "Lunch",
        photo: "/themes/yellow-swan/img/lunch.png",
        bio: "",
        presentation: {
          title: "Lunch",
          description: "",
          time: "Saturday, noon"
        },
        link: {
          href: "",
          text: ""
        }
      },
      {
        name: "Openspace Sessions",
        photo: "/themes/yellow-swan/img/conversation.png",
        bio: "",
        presentation: {
          title: "Openspace #1",
          description: "",
          time: "Saturday, 1pm"
        },
        link: {
          href: "",
          text: ""
        }
      },
      {
        name: "Openspace Sessions",
        photo: "/themes/yellow-swan/img/conversation.png",
        bio: "",
        presentation: {
          title: "Openspace #2",
          description: "",
          time: "Saturday, 2pm"
        },
        link: {
          href: "",
          text: ""
        }
      },
      {
        name: "Openspace Sessions",
        photo: "/themes/yellow-swan/img/conversation.png",
        bio: "",
        presentation: {
          title: "Openspace #3",
          description: "",
          time: "Saturday, 3pm"
        },
        link: {
          href: "",
          text: ""
        }
      },
      {
        name: "Openspace Sessions",
        photo: "/themes/yellow-swan/img/conversation.png",
        bio: "",
        presentation: {
          title: "Openspace #4",
          description: "",
          time: "Saturday, 4pm"
        },
        link: {
          href: "",
          text: ""
        }
      },
      {
        name: "Closing",
        photo: "/themes/yellow-swan/img/speaker/karthik.jpg",
        bio: "",
        presentation: {
          title: "Closing Circle",
          description: "Gather back as a larger group to close the conference and share our openspace learnings.",
          time: "Saturday, 5pm"
        },
        link: {
          href: "",
          text: ""
        }
      }
    ],

    // List of Sponsors
//        name: "StackEngine",
//        logo: "http://stackengine.com/wp-content/uploads/2014/04/StackEngine_Lo_FF1-e1398284107204.jpg",
//        url: "http://stackengine.com/"
    sponsors: [
    ],

    // List of Partners
    partners: [
     {
//        name: "Stack Engine",
//        logo: "http://stackengine.com/wp-content/uploads/2014/04/StackEngine_Lo_FF1-e1398284107204.jpg",
//        url: "http://stackengine.com/"
      }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    },

    // Site Path
    getUrl: function() {
    	return this.site.url;
    }
  }
};
