const header = {
  // all the properties are optional - can be left empty or deleted
  // homepage: 'https://rajshekhar26.github.io/cleanfolio',
  // title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Tarush Rajput',
  role: 'Software Developer',
  description:
    'Currently pursuing my Master’s degree in Computer Science at University of California, Irvine. I have a bachelors degree in Computer Engineering. I have previously interned at three companies where I worked as a full stack app developer where I worked on the front-end using Flutter and implemented back-end APIs in nodeJs and I also worked with databases such as MongoDB and MySQL. I have also worked on a multitude of personal projects where I explored and worked with different tech stacks. I love coding because I can see my ideas come to life when I am working on a project',
  resume: 'https://drive.google.com/file/d/101XWQit-7-GLsJs7iNkZqPCuBrEstZXj/view?usp=share_link',
  social: {
    linkedin: 'https://www.linkedin.com/in/tarush-r/',
    github: 'https://github.com/tarush-r',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Peerpad',
    description:
      'A collaborative peer-to-peer text editor that overcomes the drawbacks of the classic client-server model',
    stack: ['Javscript', 'HTML/CSS', 'NodeJs'],
    sourceCode: 'https://github.com/T-A-S-K/PeerPad_midsem',
    // livePreview: 'https://github.com',
  },
  {
    name: 'End-to-End Encrypted Chat App',
    description:
      'A secure End-to-End Encrypted Chat App',
    stack: ['Flutter', 'NodeJs', 'MongoDb'],
    sourceCode: 'https://github.com/tarush-r/End-To-End-Ecrypted-Chat-App',
    // livePreview: 'https://github.com',
  },
  {
    name: 'Top Down Shooter Game',
    description:
      'A 2D top down shooter game with random dungeon generation',
    stack: ['Unity'],
    sourceCode: 'https://github.com/tarush-r/Top-Down-Shooter-Game',
    // livePreview: 'https://github.com',
  },
]

const workex = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Trainer Goes Online',
    description:
      'Worked on an app the connects trainers to clients',
    stack: ['Flutter', 'Firebase', 'NodeJs'],
    // sourceCode: 'https://github.com/T-A-S-K/PeerPad_midsem',
    // livePreview: 'https://github.com',
  },
  {
    name: 'MyBiznis',
    description:
      'Developed an app for small to medium sized busniess owners that allows them to sell their products online',
    stack: ['Flutter', 'NodeJs', 'MongoDb'],
    // sourceCode: 'https://github.com/tarush-r/End-To-End-Ecrypted-Chat-App',
    // livePreview: 'https://github.com',
  },
  {
    name: 'Branding Catalyst',
    description:
      'Worked on an app that connects mentors with mentees',
    stack: ['Flutter', 'NodeJs', 'Firebase'],
    // sourceCode: 'https://github.com/tarush-r/Top-Down-Shooter-Game',
    // livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python', 'Javascript', 'Java', 'C++', 'Flutter', 'Firebase', 'HTML/CSS', 'Git', 'Android', 'MongoDb', 'NodeJs', 'SQL', 'MySQL', 'SQLite',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'tarushtrajput@gmail.com',
}

export { header, about, projects, workex, skills, contact }
