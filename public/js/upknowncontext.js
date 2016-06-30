var proccontext = {
  title: 'Our Process',
  heads: {
    process: 'The Mocktail Process',
    deliverables: 'Project Deliverables'
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
    onboardingtwo:'Like all features, our process was discussing user needs after user interviews, brainstorming flows and collecting use cases, and then settling on one user flow. Then I built a clickable prototype, made tweaks based on feedback, and implemented it. Danny came through afterwards to unscramble my Javascript and fix some bugs.',
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
  images: {
    timeline: [
      'img/thumb2.png'
    ]
  },
  praise: {
    third: [
      'Good shit',
      'Wyler Ess @ The Rust)',
      'img/logo.svg'
    ]
  },
  cta: [
    'Let\'s go'
  ],
  steps: {
    first: [
      'Kickoff Call',
      'Every project begins with a quick video call to meet and sync up. We outline expectations, build the creative brief, and explore everyone\'s initial ideas. If we\'re building a full visual identity, this is expanded into the strategic session.',
      'img/thumb2.png',
      'Before the call:',
      'This is our chance to get to know you and get a sense of your brand. Prepare between three and five examples of design or art in a similar style to what you\'re interested in.'
    ],
    second: [
      'Initial Drafts',
      'The drafting begins and the wheels begin to turn.',
      'img/thumb2.png'
    ],
    third: [
      'Revisions',
      'Super cool super lame',
      'img/thumb2.png'
    ],
    fourth: [
      'Delivery',
      'My favorite part',
      'img/thumb2.png'
    ],
    last: [
      'All done!',
      'We\'ll talk more later, never fear.',
      'img/thumb2.png'
    ]
  },
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

module.exports = proccontext;
