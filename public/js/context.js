var context = {
  titles: [
    'Waldorf',
    'The Mocktail Process'
  ],
  nav: {
    home: [
      'Projects',
      '/'
    ]
  },
  paragraphs: {
    scene:'<em>Boulder, Colorado, Winter 2015.</em> A YouTube rip of the new Purity Ring album plays over the cafe speakers while Luke Vernon, Danny Glunz, and Alex Campbell pitch me on their web app. Luke is a local entrepreneur with deep experience building a green manufacturing company called Ecoproducts, who runs a recruiting and job mailing list in the natural foods industry. Danny and Alex are cool-running web devs and good friends of mine that I had worked alongside before.',
    problem:'Highly-networked individuals across all industries meet loads of talented people and know dozens of companies searching for talent. Often these people are part of venture funds, mentor networks, their own companies, or accelerator programs. These individuals do their best to make matches between talented people and good companies, but are stuck with custom and time-consuming manual processes that prevent many connections from being made. Because of this, lots of talented people struggle to find roles at companies while lots of companies struggle to find talented people.',
    context:'Dozens of interviews by Luke and Danny revealed a common manual system for making matches between companies and talent. Highly-networked people maintain a list of candidates in their network which they hopefully remember to update every time they receive an intro email. Then they peruse their network for potential opportunities by checking Linkedin, network job listings (e.g. venture funds, accelerators, code school boards), and private recruiting newsletters, hopefully finding something that matches someone recent on the spreadsheet.',
    contexttwo:'Executing this process each time a great resume lands in a highly-networked individual’s inbox takes way too much time and there is no way to close the loop after an introduction has been made. There must be a better way, yeah?',
    role:'I joined Luke and Danny part-time for three months to design a base UI style for Upknown before going full-time for three months to work on product and email interaction. Luke and Danny had done a lot of user research with highly-networked people in the area, and they brought me into that research process when I joined.',
    roletwo:'From that research, they had built a web app that allows highly-networked individuals to index candidates in a searchable stream without leaving their inbox. This stream can be distributed via email to anyone who follows the user. Candidate profiles include the attached resume, generated tags like #ios #mobile #dev, and information pulled from FullContact and Linkedin, including a profile image, current title, role, etc.',
    research:'We had a constant supply of user feedback and potential users at our fingertips thanks to Luke, making it easier to evaluate which problems were being solved and which solutions were falling flat.',
    researchtwo:'By talking with users, we determined that there was confusion around the nature of adding candidates to Upknown. Was it an endorsement of the candidate’s skills? Or just a resume blast? What about people I don’t know but want to track anyway? We also heard indirectly that our one onboarding page was poor/nonexistant (probably didn’t need to do research to confirm that).',
    researchthree:'By looking at user behavior, we saw that most people didn\'t take the time to log into the app every time they forward a candidate into the system. We needed to re-think the email forwarding flow, and beef up the way that people interact with Upknown in their inboxes.',
    onboarding:'Upknown is a complex application that interacts with the user both through emails and through a web application interface. The switch between app and inbox is jarring, because when people are in their inbox, they are trying as hard as possible to stay in their inbox. Onboarding was a thorn in our sides because we were constantly iterating on the core user flow and shipping large changes to the product. After building a few approaches over a few months, we decided it was best to keep people in the app through the onboarding and recreate the experience of adding a candidate to Upknown. There was a lot of guesswork and theories we never proved. Here are a few of the flows we played with, before settling on the Walkthrough flow.',
    onboardingtwo:'Like all features, our process was to begin discussing user needs after user interviews, brainstorming flows and collecting use cases and then settling on one user flow. Then I built a clickable prototype, made tweaks based on feedback, and implemented it. Danny came through afterwards to unscramble my Javascript and fix some bugs.',
    onboardingthree:'Unfortunately, I didn’t push for one-on-one new user tests on our onboarding after building it, because things were coming to a head due to funds and it seemed good enough to move on. In retrospect, I would have jammed in a week to focus on testing the onboarding–it would have made the product significantly better despite other sacrifices.',
    relationships:'Universally early users (including us) felt it was unclear what it meant when they forwarded a candidate to Upknown. Were they endorsing this person? The original name was “Indorsely,” so that was a logical conclusion, but even the users who used the system more for indexing candidates as opposed to sharing their candidates said they would like to indicate the strength of a connection.',
    relationshipstwo:'The Wi-fi symbol does just that–indicate the strength of a connection. At the time we were looking at Conspire’s product (which we felt did a lot right and but also maybe did some things wrong) and copied a move from their design playbook: using the wi-fi signal to indicate the strength of a connection between people. When you pair it with a prompt like “how well do you know this person?” it lends significant context to auxiliary testimonials that further describe the nature of the user <> candidate relationship.',
    relationshipsthree:'After implementing the wi-fi icon, we thought we could use icons to indicate another level of detail: the nature of the user’s relationship with the candidate. After some discussion and me walking around the parking lot going through everyone I know in my head, we settled on icons for Friend, Coworker, and “In The Network” (for people who you don’t know and have not worked with but come recommended through your network). These clarifications wouldn’t be mutually exclusive, and would go a long way to further defining the relationship. But, it’s a nice-to-have, not a need-to-have, and we pushed it to the backlog to focus on making great emails.',
    emails:'Users weren’t confirming their candidates in the app or fixing glaring problems with the way Upknown scraped candidate information. For example, if Upknown thought a candidate’s name was the first two words of the subject line of the email, the user should know before it is added to their stream and be prompted to fix any errors. It needed to be easier to confirm candidates and correct information.',
    emailstwo:'After deciding this was a problem we needed to address using The Big Guns (new features), we collected user needs and whiteboarded out potential user flows. Then I busted out the full flow and cleaned it up.',
    emailsthree:'In order to test as soon as possible, Danny built out a barebones version of the email system, I added some css margins, and we collected feedback around the unstyled emails. There was a lot of debate around building a Gmail plugin, but because of development timelines, it made more sense to polish off the email system that was likely to solve the problem rather than jump into the hopeful unknown (versus the Upknown, hueh). I pushed the emails to their final state, keeping in mind that if action was required of the user, it needed to be clear and easy to fix without leaving the inbox.',
    emailsaside:'Coding emails is 4x time intensive as other front-end work due to the security risks of viewing emails. Email clients display a small, varying set of style rules and toss the rest while mangling your code. We used a Ruby mailcatcher to preview emails as they are sent, an inline css compiler with some custom tweaks, and I used an Etsy email <head> template to make Gmail viewing awesome, along with Mailchimp <tc> templates for responsiveness on the iOS mail app, and a bunch of custom for Outlook + Yahoo + Gmail mobile app. Testing takes a lot of patience, even with EmailOnAcid or Litmus.',
    end:'In the end, we made the decision to sideline the product after six months of part time and full-time work on Upknown. There’s a lot of work we all would have liked to get through to bring Upknown to a better place, but sometimes economics and timelines don’t work out despite having solutions to clear user pain points. You take what you learn from the experience to build better next time.',
    endtwo:'I learned a lot about organizing and prioritizing product design work. There is a constant interplay between making big-picture decisions and designing critical details, and balancing those two modes takes intentionality.',
    endthree:'Working closely with Danny and Luke also made me question what values I bring to the table when designing products. Sometimes what is best for the users\' experience isn’t always best for the product overall due to the needs of other stakeholders. Just because Danny is a badass and we could ship features every day doesn’t mean we should, but at the same time, our nimble design and development cycle could have been utilized to take bigger risks.',
    endfour:'A handful of users still use Upknown to track candidates and match them with jobs in their network (tracking jobs manually). But on the development side, the project is private on Github, closed to new user accounts.'
  },
  paragraphs_mocktail: {
    context: 'In late 2014 I met Hunter Streit, a musician and graphic artist now based in Portland. We both had strings in the electronic music scene, especially in a style called Neuro, which is the lovechild of glitch hop and neurofunk (derived from Drum & Bass in the early 2000s). I had just finished working with Techstars Boulder as a designer and was looking for something more off the beaten path than startups. We had a few meetings over coffee and realized we had to start a project using our shared love of music, technology, and art.',
    problem:'The music market is grossly saturated. Thanks to the accessibility of making music in the computer era, and the popular revival of dance music in the late 2000s, the amount of music produced by amateur music producers has exploded in the last twenty years. Some of these artists are very talented and produce high-quality, innovative and diverse music but lack the skills and bandwidth needed to present their music to the world.',
    hypothesis:'Using graphic art and design combined with an attitude of professionalism and respect for deadlines, we could start an agency that helped musicians push their careers forward towards making a living from their music. After a base of clients is established, more expertise would be deployed to meet the needs of musicians trying to build an audience. The agency would build a number of properties in the online music space using the high quality of work and partners from client projects and eventually transform into a product company.',
    wrong:'For many reasons, personal, professional, and some related to the market, my cofounder and I decided to split less than a year after forming. Mocktail worked with almost 40 musicians and a handful of additional designers during its peak in 2015, and it gave me a portfolio of dozens of artist logos and pressure to constantly refine my logo design process.',
    wrongtwo:'As it turns out, as much as talent agents and artist managers like to pump up the importance of good design when “picking” artists, design is a commodity and a small part of the music career equation. We weren’t able to have the impact that we had hoped, and some of our unique selling points, like high-quality communication, billing, and project management is not as important in the music industry as in technology because the music industry is mostly held together by strong interpersonal relationships and shared histories. We positioned the firm in the wrong part of the market and tried to attract talent cold instead of working through our already existing friendships in the industry.',
    wrongthree:'Managing a creative team is challenging, in this case because there were different types of creatives on the team with similar skill sets but different methodologies. Being flexible and checking your ego at the door every day is hard when a large part of the work is up to individual taste. I try to keep the artistic taste, but imagine it’s someone else’s and I’m just representing it for the purpose of the project. This helps me take feedback and disagreements and reframe it constructively.',
    wrongfour:'The biggest learning was that a financial model has to work before I start a business (duh). We had optimistic projections that wouldn’t have worked even if everything went right. Don’t do things that you know won’t work, Trevor!'
  },
  heads: {
    main: [
      'Trevor Waldorf'
    ],
    matrix: 'The Mocktail Menu',
    process: 'Our Process',
    deliverables: 'Project Deliverables',
    contact: 'Work with us',
    success:'Thanks, message sent!',
    artists: 'Artists',
    mail: 'Practice Makes Perfect',
    mailconfirm: 'Almost ready to rumble...',
  },
  subheads: {
    process: [
      'Every project runs on a different timeline, but our process is consistent.</p><p> Here\'s exactly what to expect when working with Mocktail.'
    ],
    success: [
      'We\'ll get back to you within 24 hours of reading your message. If you have any questions or comments, send them to <em>design@mocktail.ink</em>.',
      'FAQ'
    ],
    artists: 'A few of the many talented artists with whom Mocktail has worked.',
    mail:'Daily production exercises in your inbox, 7 days a week.',
    mailconfirm: 'Confirm your email address and you\'ll be signed up for the daily production exercises.'
  },
  cta: [
    'Let\'s go'
  ],
  product: {
    discount: 'Artists and labels who have previously worked with Mocktail on branding retain former pricing for cover art',
    first: [
      'Sketch',
      '99',
      'One logomark or logotype design from one draft with a single revision, delivered in black & white. Sketch is a trial offering by Mocktail that makes professional logo design accessible to projects on tight budgets.',
      'Accelerated project',
      'One draft, one revision',
      '8 day timeline',
      '2 delivered files',
      'Let\'s go'
    ],
    second: [
      'img/icons/icon_brand.svg',
      'Visual Identity',
      'Comprehensive visual identity development, including logo design, art direction, core social media profile assets, and visual strategy guidelines. ',
      '1,249',
      'Visual strategy session',
      '3 drafts, 2 rolling revision periods',
      '5 week timeline',
      '10+ delivered files',
      'Learn more'
    ],
    third: [
      'Cover Art',
      '220',
      'Art for releases or promotional material. We work in a variety of styles–painting, 3D, photomanipulation–to produce art that evokes emotion.',
      'Process-driven',
      '2 drafts',
      '2 week timeline',
      '1+ delivered files',
      'Let\'s go'
    ]
  },

  process: {
    first: [
      'Step 1: Intro',
      'Day 1',
      'Jam over a video call. Collect three or more reference images. Riff on any existing ideas for the project.'
    ],
    second: [
      'Step 2: Chorus',
      'In 14 days',
      'Draw between two and two hundred sketches. Ruthlessly cull the herd. Digitize and send drafts.'
    ],
    third: [
      'Step 3: Outro',
      'In 31 days',
      'Revise the designs. Send the final deliverables in more file formats than you\'ll ever use. ~it\'s lit fam~'
    ]
  },

  praise: {
    first: [
      'Trevor and his team are awesome to work with: they\’re smart, they\’re talented, they know electronic music, and they are true professionals with communication and deliverables. The final price was exactly what I was quoted, and was beyond reasonable for the quality of work I received. Highly recommended!',
      'John S. (Barrow)',
      'img/barrow.svg'
    ],
    second: [
      'We found Mocktail early on in our process of branding, and are extremely satisfied with the image they have helped us create so far. Their team is professional and efficient - from our first video conference, to each revision throughout the design process, to the after-sale communication; their team has always delivered, exceptionally.',
      'Evan S. (from Zombie Penthouse)',
      'img/thumbs/evan.png'
    ],
    third: [
      'Good shit',
      'Wyler @ The Rust',
      'img/grid/therust.png'
    ]},
    //Process page specifics
    images: {
      timeline: [
        'img/thumb2.png'
      ]
    },
    //Steps
    steps: {
      first: [
        '1. Kickoff Call',
        'We begin with a short video call to meet and sync up. During the call we outline expectations, discuss references and strategy, and explore initial ideas.',
        'img/icons/icon_phone_alt.svg'
      ],
      second: [
        '2. Initial Drafts',
        'Sketching begins and we produce up to a couple hundred ideas. The best ideas are digitized in black and white then sent over to you for review.',
        'img/icon_sketch.svg'
      ],
      third: [
        '3. Revisions',
        'Once the core idea is decided upon, we progress with revisions and fine-tune the designs. For sketches, only one revision is needed. For identity projects, this is the largest part of the process.',
        'img/icon_art.svg'
      ],
      fourth: [
        '4. Delivery',
        'All files are packaged up in a variety of formats and sizes and shared via Google Drive. Depending on the project, this includes everything from social media assets to vectors to full-size .pngs.',
        'img/icons/icon_delivery.svg'
      ],
      last: [
        'Send-off',
        'For larger projects, we\'ll finish with a short retrospective send-off to wrap up the project. We also connect you to any people you should meet within the Mocktail network.',
        'img/icons/icon_star.svg'
      ]
    },
    contact: {
      subhead: 'Just saying hello? Shoot an email to design@mocktail.ink'
    },
    //FAQ
    faq: {
      first: [
        'How long do most projects take?',
        'Mocktail Sketch - 5-8 days<br>Cover Art - 10 days<br>Visual Identities - no less than 30 days'
      ],
      second: [
        'How many revisions do I get?',
        'For Mocktail Sketch and for cover art, one revision after the directional drafts.<br>For visual identity development, due to the number of moving pieces, we work on a rolling revision schedule, so there may be up to 25 revisions overall.'
      ],
      third: [
        'How do I pay you?',
        'We invoice all of our clients via PayPal, where you can pay through your credit card, debit card, bank account, or PayPal account credit.'
      ],
      fourth: [
        'Downpayments?',
        'All projects require a 50% down payment before work starts. This is refundable up until we have delivered the initial drafts.'
      ],
      fifth: [
        'Can we do an accelerated project?',
        'Depending on the deadline, yes. Often our work is scheduled out in advance, but it\'s worth asking just in case. 24 hours is minimum turnaround. In the case of accelerated projects, all payments are made up front before work begins. Plan ahead for best results.'
      ],
      sixth: [
        'Who is on the Mocktail team?',
        'Mocktail is somewhat fluid. Thus far, we have been comprised of two co-founders and four contracted designers, all visual designers with varying backgrounds. Mocktail was started by @TJWaldorf and Spec Visual (we produce under Hex Eater and Spectric, respectively)'
      ],
      seventh: [
        'Can you promote my music?',
        'No one has ever asked this, but listen: we work with a lot of independent labels and artists who are doing cool things. It\'s in our interest to connect these people. It happens. Just saying.<br>Aside from that, we run a small Soundcloud page at https://soundcloud.com/mocktaildesign and often post our clients\' music on our Facebook page.'
      ]
    },
    //Artists
    artist: {
      first: [
        'zp',
        '200781395',
        'Zombie Penthouse',
        'We were lucky enough to work with Evan and Taylor on a full visual identity right after they launched their Zombie Penthouse project in early 2015. After making waves in the hybrid trap/bass online scene, Zombie Penthouse is pushing forward in a new direction. Follow ZP on <a href="https://soundcloud.com/zombiepenthouse">Soundcloud</a> to get in on the action.',
        'ZP embeds'
      ],
      second: [
        'bloom',
        '231325288',
        'Bloom',
        'After crushing a logo project with Bloom last year, it has been a blast to watch him continually drop unique, finely-crafted tunes and garner attention from around the independent scene. The dude is the real deal. Keep an eye on <a href="https://soundcloud.com/refractedrecords" alt="Refracted SC Link">Refracted Records</a> for forthcoming releases.',
        'Bloom embeds'
      ],
      third: [
        'sdk',
        '239139019',
        'ScottyDoesKnow',
        'Scotty is the Pumpkin Spiced Latte to the world\'s white girl: the most wonderful treat of all. Scoop him on <a href="https://soundcloud.com/sdktheway">Soundcloud</a>.',
      ]
    },
    //Mail
    mail: {
      subsubhead: 'Exercises from',
      roster: [
        '',
        ''
      ],
      placeholder: 'Email',
      cta: 'Yes, I want to become a better producer, send me a production exercise every day',
    },
    mailconfirm: {
      scgroup: 'https://soundcloud.com/groups/get-fit-production-exercises',
      p1: 'The first season of exercises start in mid-March, and you\'ll receive plenty of warning a few days before things kick off. If you\'re reading this and things are already in full swing, join the <a href="https://soundcloud.com/groups/get-fit-production-exercises">Soundcloud group</a>.'
    },
    //Image grids
    grid1: [
      'img/grid/cosmic.png',
      'img/grid/bloom.png',
      'img/grid/maven.png',
      'img/grid/refracted.png'
    ],
    grid2: [
      'img/grid/frequent.png',
      'img/grid/eyeris.png',
      'img/grid/refracted-2.png',
      'img/grid/noizetank.jpg'
    ],
    grid3: [
      'img/grid/barrow.png',
      'img/grid/zp.png',
      'img/grid/seismic.png',
      'img/grid/therust.png'
    ],
    deliverablesrow1: {
      logo: [
        'img/logo.svg',
        'Logo Files',
        'Black and White and Kush kush kush'
      ],
      strategic: [
        'img/logo.svg',
        'Visual Strategy',
        'Ohhh yeah buddy, super season one strats.'
      ],
      logo2: [
        'img/logo.svg',
        'Logo Files',
        'Black and White and Kush kush kush'
      ],
      logo3: [
        'img/logo.svg',
        'Logo Files',
        'Black and White and Kush kush kush'
      ]
    },
    deliverablesrow2: {
      logo4: [
        'img/logo.svg',
        'Logo Files',
        'Black and White and Kush kush kush'
      ],
      logo5: [
        'img/logo.svg',
        'Logo Files',
        'Black and White and Kush kush kush'
      ],
      logo6: [
        'img/logo.svg',
        'Logo Files',
        'Black and White and Kush kush kush'
      ],
      logo7: [
        'img/logo.svg',
        'Logo Files',
        'Black and White and Kush kush kush'
      ]
    }
};

module.exports = context;
