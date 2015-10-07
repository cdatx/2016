module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "Container Days Austin 2016",
      description: "High quality, local discussion on Docker, CoreOS, LXC etc.",
      date: "Early 2016",

      // If your event is free, just comment this line
      // price: "$ TBA",
      venue: "TBA",
      address: "",
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
      'speakers',
      'openspaces',
      'schedule',
      'workshop',
      'sponsors',
      'partners',
      'contact',
      'twitter'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "About",
      location: "Location",
      speakers: "Speakers",
      openspaces: "Open Spaces",
      schedule: "Schedule",
      sponsors: "Sponsors",
      partners: "Partners",
      contact: "Contact",
      twitter: "Twitter",
      workshop: "Workshop"
    },

    // The entire schedule
    schedule: [
      {
        name: "Boyd Hemphill",
        photo: "https://pbs.twimg.com/profile_images/3525655355/04dafec967eea72a64c815f4af0c68a4_400x400.jpeg",
        bio: "In his capacity as Evangelist at StackEngine, Boyd dreamed of a DevOps Days style conference for the containerization revolution.",
        presentation: {
          title: "Welcome to Container Days",
          description: "Welcome to the second Container Days Austin.",
          time: "Friday, 6:30pm"
        },
        link: {
          href: "https://twitter.com/behemphi",
          text: "@behemphi"
        }
      },
    ],

    // List of Sponsors
    sponsors: [
      {
        name: "StackEngine",
        logo: "http://stackengine.com/wp-content/uploads/2014/04/StackEngine_Lo_FF1-e1398284107204.jpg",
        url: "http://stackengine.com/"
      }
    ],

    // List of Partners
    partners: [
      {
        name: "Stack Engine",
        logo: "http://stackengine.com/wp-content/uploads/2014/04/StackEngine_Lo_FF1-e1398284107204.jpg",
        url: "http://stackengine.com/"
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
