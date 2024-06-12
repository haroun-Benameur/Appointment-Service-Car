const services = [
    {backgroundImage:'src/assets/repairbg.png',
      image: 'src/assets/repair.png',
      name: 'Repair service Rent',
      description: 'Your one-stop shop for top-condition equipment and expert repairs'
    },
    {backgroundImage:'src/assets/repairbg.png',
      // backgroundImage:'src/assets/visitbg.png',
    image: 'src/assets/visit.png',

      name: 'Visit service 1000',
      description: 'Services offered after 1000 visits'
    },
    {backgroundImage:'src/assets/repairbg.png',
      // backgroundImage:'src/assets/diagnosticbg.png',
      image: 'src/assets/service repair.png',
      name: 'Diagnostic service',
      description: 'Diagnosis and determination of faults'
    },
    {backgroundImage:'src/assets/repairbg.png',
      // backgroundImage:'src/assets/repairbg.png',
      image: 'src/assets/fast.png',
      name: 'Fast service',
      description: 'Empty and change lubricant'
    },
    {backgroundImage:'src/assets/repairbg.png',
      // backgroundImage:'src/assets/visitbg.png',
      image: 'src/assets/cleaning.png',
      name: 'Cleaning service',
      description: 'Sparkling rides, inside and out.'
    },
    {backgroundImage:'src/assets/repairbg.png',
      // backgroundImage:'src/assets/diagnosticbg.png',
      image: 'src/assets/service repair.png',
      name: 'Service Repair',
      description: 'Repairing breakdowns'
    }
  ];

  const choices =[
  {image :"src/assets/Solid.png",
  name:"Tailored to your needs",
  description:"Whether you seek repairs, cleaning, or diagnostics, quickly find the right agency for the job."
  },
  {image :"src/assets/user.png",
    name:"Professionalism",
    description:"We connect you with a network of licensed, vetted, and reputable car service agencies, ensuring you receive professional care for your vehicle."},
  
  {image :"src/assets/confidence.png",
    name:"Confidence in every choice",
    description:"We partner with trusted car service agencies in your area, ensuring quality and peace of mind"}
  ];

  const availableservices =[
    {
      name:"Drain"
    },
    {
      name:"repair"
    },
    {
      name:"diagnostic"
    },
    {
      name:"visit"
    }
  ]
  const capacities = [{
    time:'8:00',
    capacity:'2'
  },
  {
    time:'8:30',
    capacity:'2'
  },
  {
    time:'9:00',
    capacity:'2'
  },
  {
    time:'9:30',
    capacity:'2'
  },
  {
    time:'10:00h',
    capacity:'5'
  }
];


  
  export {services , choices ,availableservices ,capacities};
  