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
        photo: "./themes/yellow-swan/img/register.png",
        bio: "",
        presentation: {
          title: "Registration",
          description: "Registration begins at 8am, and continues till 9am. Come early, grab a coffee, and interact with your peers.",
          time: "Friday, 8am"
        },
        link: {
          href: "",
          text: ""
        }
      },
      {
        name: "Workshop #1a",
        photo: "./themes/yellow-swan/img/speaker/bill.jpg",
        bio: "",
        presentation: {
          title: "Docker 101 Workshop",
          description: "Getting started with learning Docker with Bill Maxwell.",
          time: "Friday, 9am",
          href: "./talks/workshop1.html",
          hreftext: "Details..."
        },
        link: {
          href: "",
          text: ""
        }
      },
      {
        name: "Workshop #1b",
        photo: "./themes/yellow-swan/img/container.png",
        bio: "",
        presentation: {
          title: "Chef Habitat Workshop",
          description: "Introduction to Application Automation with Habitat.",
          time: "Friday, 9am",
          href: "./talks/workshop2.html",
          hreftext: "Details..."
        },
        link: {
          href: "",
          text: ""
        }
      },      {
        name: "Workshop #2",
        photo: "./themes/yellow-swan/img/speaker/everett.jpg",
        bio: "",
        presentation: {
          title: "Docker Swarm ++ ",
          description: "Orchestration Containers in Production at Scale with Docker Swarm with Everett Toews.",
          time: "Friday, 1pm",
          href: "./talks/workshop3.html",
          hreftext: "Details..."
        },
        link: {
          href: "",
          text: ""
        }
      },
      {
        name: "Workshop #3",
        photo: "./themes/yellow-swan/img/container.png",
        bio: "",
        presentation: {
          title: "Intro to Kubernetes",
          description: "Go over Kubernetes specifics, and learn how to run container based applications in a Kubernetes cluster.",
          time: "Friday, 1pm",
          href: "./talks/workshop4.html",
          hreftext: "Details..."
        },
        link: {
          href: "",
          text: ""
        }
      },
      {
        name: "Workshop #4",
        photo: "./themes/yellow-swan/img/speaker/alan.jpg",
        bio: "jjdsajdpao",
        presentation: {
          title: "Intro to Mesos",
          description: "Introduction to Mesos, learning how to build a production Mesos cluster, and common pitfalls.",
          time: "Friday, 1pm",
          href: "./talks/workshop5.html",
          hreftext: "Details..."
        },
        link: {
          href: "",
          text: ""
        }
      },      {
        name: "Registration",
        photo: "./themes/yellow-swan/img/register.png",
        bio: "",
        presentation: {
          title: "Registration",
          description: "Evening registration begins at 5pm.",
          time: "Friday, 5pm",
        },
        link: {
          href: "",
          text: ""
        }
      },
      {
        name: "Karthik Gaekwad",
        photo: "./themes/yellow-swan/img/speaker/karthik.jpg",
        bio: "Karthik is a technologist who lives in Austin who loves 3 things- BBQ, containers, and the Austin tech scene! While he's not working on the container team at Oracle, he runs the local Austin Docker Meetup, Cloud Austin and Devopsdays.",
        presentation: {
          title: "Welcome!",
          description: "Welcome to Container Days Austin. ",
          time: "Friday, 5:30pm",
        },
        link: {
          href: "https://twitter.com/iteration1",
          text: "@iteration1"
        }
      },
      {
        name: "Keynote",
        photo: "./themes/yellow-swan/img/speaker/speaker.png",
        bio: "",
        presentation: {
          title: "Keynote",
          description: "Container Days kickoff with an awesome keynote. Stay tuned for details.",
          time: "Friday, 5:45pm",
        },
        link: {
          href: "",
          text: ""
        }
      },
      {
        name: "Happy Hour",
        photo: "./themes/yellow-swan/img/hh.png",
        bio: "",
        presentation: {
          title: "Happy Hour",
          description: "Kick back, and enjoy a happy hour with conference goers and peers.",
          time: "Friday, 6:30pm",
        },
        link: {
          href: "",
          text: ""
        }
      },
      {
        name: "Registration",
        photo: "./themes/yellow-swan/img/register.png",
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
        photo: "./themes/yellow-swan/img/speaker/speaker.png",
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
        photo: "./themes/yellow-swan/img/speaker/speaker.png",
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
        photo: "./themes/yellow-swan/img/speaker/speaker.png",
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
        photo: "./themes/yellow-swan/img/lunch.png",
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
        photo: "./themes/yellow-swan/img/conversation.png",
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
        photo: "./themes/yellow-swan/img/conversation.png",
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
        photo: "./themes/yellow-swan/img/conversation.png",
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
        photo: "./themes/yellow-swan/img/conversation.png",
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
        photo: "./themes/yellow-swan/img/speaker/karthik.jpg",
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
    boothSponsors: [
    {
        name: "Rancher",
        logo: "themes/yellow-swan/img/sponsor/rancher.png",
        url: "http://www.rancher.com/"
    },
    {
        name: "CDK Global",
        logo: "themes/yellow-swan/img/sponsor/cdk.png",
        url: "http://www.cdkglobal.com/"
    },
    {
        name: "Sysdig",
        logo: "themes/yellow-swan/img/sponsor/sysdig.png",
        url: "http://www.sysdig.org/"
    },
    {
        name: "NewIron",
        logo: "themes/yellow-swan/img/sponsor/newiron.png",
        url: "http://newiron.com/"
    },
    {
        name: "Carina by Rackspace",
        logo: "themes/yellow-swan/img/sponsor/carina.svg",
        url: "https://getcarina.com/"
    }
    ],
    silverSponsors:[
    {
        name: "Ambonare",
        logo: "themes/yellow-swan/img/sponsor/ambonare.png",
        url: "https://www.ambonare.com/"
    }
    ],
    breakfastSponsors: [
    {
      name: "Flux7",
      logo: "themes/yellow-swan/img/sponsor/flux7.png",
      url: "https://www.flux7.com/"
    }
    ],
    lunchSponsors: [
    ],
    hhSponsors: [
    {
      name: "Chef",
      logo: "themes/yellow-swan/img/sponsor/chef.png",
      url: "https://www.chef.io/"
    }
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
