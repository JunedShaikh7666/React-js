function HomeConstrants() {
  return {
    portfolioItems: [
      { id: 1, img: "src/assets/img/pf1.jpg", link: "portfolio-details.html" },
      { id: 2, img: "src/assets/img/pf2.jpg", link: "portfolio-details.html" },
      { id: 3, img: "src/assets/img/pf3.jpg", link: "portfolio-details.html" },
      { id: 4, img: "src/assets/img/pf4.jpg", link: "portfolio-details.html" },
      { id: 5, img: "src/assets/img/pf1.jpg", link: "portfolio-details.html" },
      { id: 6, img: "src/assets/img/pf2.jpg", link: "portfolio-details.html" },
      { id: 7, img: "src/assets/img/pf3.jpg", link: "portfolio-details.html" },
      { id: 8, img: "src/assets/img/pf4.jpg", link: "portfolio-details.html" },
    ],
    features: [
      { id:1, icon:"icofont icofont-ambulance-cross", heading:'Emergency Help', info:'Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.'},
      { id:2, icon:"icofont icofont-medical-sign-alt", heading:'Enriched Pharmecy',info:'Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.'},
      { id:3, icon:"icofont icofont-stethoscope", heading:'Medical Treatment',info:'Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.'}
    ],
    countdown:[
      { id:1, icon:'icofont icofont-home', num: 3468, title:'Hospital Rooms'},
      { id:2, icon:'icofont icofont-user-alt-3', num: 557, title:'Specialist Doctors'},
      { id:3, icon:'icofont-simple-smile', num: 4379, title:'Happy Patients'},
      { id:4, icon:'icofont icofont-table', num: 32, title:'Years of Experience'},
    ],
    schedules: [
      { id: 1,
        icon: "fa-ambulance",
        label: "Lorem Amet",
        title: "Emergency Cases",
        description: "Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.",
        link: "#" },
      {
        id: 2,
        icon: "fa-user-md",
        label: "Dolor Sit",
        title: "Qualified Doctors",
        description: "Pellentesque vehicula augue eget rhoncus. Aenean et suscipit metus.",
        link: "#"
      },
      {
        id: 3,
        icon: "fa-hospital-o",
        label: "Consectetur Adipiscing",
        title: "Modern Equipment",
        description: "Curabitur imperdiet nisl nec justo suscipit, ac dapibus elit tincidunt.",
        link: "#"
      }
    ],
    services :[
      {id:1, icon:'icofont icofont-prescription', heading:'General Treatment', info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet. '},
      {id:2, icon:'icofont icofont-tooth', heading:'Teeth Whitening', info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet. '},
      {id:3, icon:'icofont icofont-heart-alt', heading:'Heart Surgery', info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet. '},
      {id:4, icon:'icofont icofont-listening', heading:'Ear Treatment', info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet. '},
      {id:5, icon:'icofont icofont-eye-alt', heading:'Vision Problems', info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet. '},
      {id:6, icon:'icofont icofont-blood', heading:'Blood Transfusion', info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet. '}
    ],
    packages: [
    {
      id: 1,
      icon: "icofont-ui-cut",
      title: "Plastic Surgery",
      amount: "$199",
      features: [
        { text: "Lorem ipsum dolor sit", included: true },
        { text: "Cubitur sollicitudin fentum", included: true },
        { text: "Nullam interdum enim", included: false },
        { text: "Donec ultricies metus", included: false },
        { text: "Pellentesque eget nibh", included: false },
      ]
    },
    {
      id: 2,
      icon: "icofont-tooth",
      title: "Teeth Whitening",
      amount: "$299",
      features: [
        { text: "Lorem ipsum dolor sit", included: true },
        { text: "Cubitur sollicitudin fentum", included: true },
        { text: "Nullam interdum enim", included: true },
        { text: "Donec ultricies metus", included: false },
        { text: "Pellentesque eget nibh", included: false },
      ]
    },
    {
      id: 3,
      icon: "icofont-heart-beat",
      title: "Heart Surgery",
      amount: "$399",
      features: [
        { text: "Lorem ipsum dolor sit", included: true },
        { text: "Cubitur sollicitudin fentum", included: true },
        { text: "Nullam interdum enim", included: true },
        { text: "Donec ultricies metus", included: true },
        { text: "Pellentesque eget nibh", included: true },
      ]
    }
    ],
    blog:[
      {id:1, img:'src/assets/img/blog1.jpg'}
    ],
  };
}

export default HomeConstrants;
