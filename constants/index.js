const awardList = [
    {
        number: '1',
        awardName: ' World Architecture Festival',
        title: 'Sustainable Building – Completed Buildings',
        year: '2021',
    },
    {
        number: '2',
        awardName: ' Architizer A+',
        title: 'Best Firm – Architecture + Sustainability',
        year: '2022',
    },
    {
        number: '3',
        awardName: ' Green Good Design',
        title: 'Green Architecture',
        year: '2022',
    },
    {
        number: '4',
        awardName: ' Asia-Pacific Property',
        title: 'Best Residential Architecture – Japan',
        year: '2022',
    },
    {
        number: '5',
        awardName: ' Dezeen',
        title: 'Sustainable Building ',
        year: '2022',
    },
    {
        number: '6',
        awardName: ' Japan Institute of Architects',
        title: 'Architectural Design Excellence',
        year: '2022',
    },
    {
        number: '7',
        awardName: ' MIPIM Asia',
        title: 'Best Green Development',
        year: '2022',
    },
    {
        number: '8',
        awardName: ' International Design Awards',
        title: 'Sustainable Living/Green Architecture',
        year: '2022',
    },
    {
        number: '9',
        awardName: ' Urban Land Institute - Asia Pacific',
        title: 'Excellence in Sustainability',
        year: '2022',
    },
    {
        number: '10',
        awardName: ' Global Future Design',
        title: 'Cultural Architecture',
        year: '2022',
    },
]
const cardsText = [
    {
        number: '1',
        title: 'Design Consultation',
        desc: 'At Saisei, every project starts with understanding  your unique needs.Our design consultation  service offers expert guidance, helping you shape  ideas into tangible plans that align with both  functionality and sustainability.From conceptual  sketches to detailed design strategies, our team  ensures your vision is fully realized, down to the  last detail.',
        img: '/imgservice/8th.png',
        listDesc1: 'Initial concept meetings and workshops',
        listDesc2: 'Sustainability assessments',
        listDesc3: 'Site analysis and feasibility studies',
        listDesc4: 'Design development and refinement',
    },
    {
        number: '2',
        title: 'Project Management',
        desc: 'Flawless execution is key to successful projects. Saisei’s project management service ensures that every phase—from planning to construction—is handled with the utmost care and attention to  detail. We coordinate every aspect, keeping  timelines on track and quality uncompromised, while staying aligned with your goals and budget.',
        img: '/imgservice/9th.png',
        listDesc1: 'Full project coordination',
        listDesc2: 'Timeline and budget management',
        listDesc3: 'Quality control and site supervision',
        listDesc4: 'Stakeholder communication and reporting',
    },
    {
        number: '3',
        title: 'Custom Solutions',
        desc: 'No two projects are the same, and neither are our solutions. Saisei offers custom architectural services designed to meet your unique needs, whether it’s integrating cutting-edge sustainability features or creating a design that resonates with the local culture. We take pride in delivering personalized solutions that go beyond expectations.',
        img: '/imgservice/10th.png',
        listDesc1: 'Tailored design and material selection',
        listDesc2: 'Adaptable and scalable architectural solutions',
        listDesc3: 'Integration of cultural and environmental elements',
        listDesc4: 'Innovative design technologies and methods',
    },
    {
        number: '4',
        title: 'Sustainability Consulting',
        desc: 'Sustainability is at the heart of everything we do. Our sustainability consulting service offers deep expertise in integrating green practices across all stages of your project. Whether you’re looking for energy-efficient designs, sustainable certifications, or advanced eco-friendly technologies, we provide the guidance and solutions to help your project leave a positive, lasting impact.',
        img: '/imgservice/11th.png',
        listDesc1: 'Green certifications and compliance',
        listDesc2: 'Energy efficiency planning',
        listDesc3: 'Resource management and waste reduction',
        listDesc4: 'Sustainable materials sourcing and recommendations',
    },
]
const processList = [
    {
        number:'(1)',
        title: 'Discovery & Visioning',
        para: 'We start by deeply understanding your goals, style preferences, and needs through collaborative workshops and site visits.',
        item1:'Initial consultations and workshops',
        item2:'Site analysis and project scoping',
        item3:'Vision boards and concept sketches'
    },
    {
        number:'(2)',
        title: 'Design Development',
        para:'Our design team translates ideas into detailed plans and renders, integrating sustainability and your feedback at every step.',
        item1:'Detailed design plans and 3D visualizations',
        item2:'Material selection and sustainability assessments',
        item3:'Client feedback and design refinements'
    },
    {
        number:'(3)',
        title: 'Planning & Coordination',
        para:'We handle all logistics, permits, and coordination while managing timelines and budgets to keep everything on track.',
        item1:'Budget planning and timeline management',
        item2:'Permit applications and approvals',
        item3:'Vendor selection and project coordination'
    },
    {
        number:'(4)',
        title: 'Build & Execute',
        para:'During the build phase, our project managers ensure construction runs smoothly with a focus on quality control and communication.',
        item1:'On-site supervision and quality control',
        item2:'Communication with contractors and suppliers',
        item3:'Progress reporting and client check-ins'
    },
    {
        number:'(5)',
        title: 'Final Touches & Handover',
        para:'We focus on the finishing details, conduct thorough inspections, and deliver a seamless handover for a perfect result.',
        item1:'Final inspections and quality checks',
        item2:'Client walkthroughs and feedback',
        item3:'Handover package and post-project support'
    },
]
const carouselList = [
    {
        number: '(1)',
        title: 'Energy Efficiency',
        desc: 'Mottainai teaches the importance of not  wasting resources, whether it’s time, energy, or materials. This philosophy drives Saisei to reduce energy consumption by utilizing intelligent systems like solar and geothermal power, ensuring that no energy is wasted and everything is used to its fullest.',
        rightText: ' Mottainai',
        // rightImg:'',
        bgImg: '/imgsustainability/10th.png',
    },
    {
        number: '(2)',
        title: 'Water conservation',
        desc: 'In Zen philosophy, water is a symbol of life, clarity, and flow. By focusing on 水の節約 (Mizu no Setsuyaku), Saisei ensures that water is conserved and respected through rainwater harvesting and greywater recycling, creating systems that honor the natural water cycle.',
        rightText: ' Mizu no Junkan',
        // rightImg:'',
        bgImg: '/imgsustainability/5th.png',
    },
    {
        number: '(3)',
        title: 'Energy Efficiency',
        desc: 'In the spirit of Wabi-sabi, Saisei honors the beauty of imperfection and the natural aging of materials. 自然素材の美 (Shizen Sozai no Bi) emphasizes the use of reclaimed and recycled materials that reduce environmental impact while celebrating the natural beauty of organic textures and wear.',
        rightText: ' Shizen Sozai no Bi',
        // rightImg:'',
        bgImg: '/imgsustainability/12th.png',
    },
    {
        number: '(4)',
        title: 'Biophilic Design',
        desc: 'Biophilic design centers on integrating natural elements into the built environment, fostering harmony between humans and nature. 自然との調和 (Shizen to no Chōwa) reflects Saisei’s focus on creating spaces that seamlessly blend with their surroundings, incorporating greenery, natural light, and air circulation.',
        rightText: ' Mottainai',
        // rightImg:'',
        bgImg: '/imgsustainability/14th.png',
    },
]

const teamList = [
    {
        pName: 'Takahiro Watanabe',
        pDesignation: 'FOUNDER & LEAD ARCHITECT',
        pImg: '/imgabout/3rd.png',
    },
    {
        pName: 'Takahiro Watanabe',
        pDesignation: 'FOUNDER & LEAD ARCHITECT',
        pImg: '/imgabout/4th.png',
    },
    {
        pName: 'Takahiro Watanabe',
        pDesignation: 'FOUNDER & LEAD ARCHITECT',
        pImg: '/imgabout/5th.png',
    },
    {
        pName: 'Takahiro Watanabe',
        pDesignation: 'FOUNDER & LEAD ARCHITECT',
        pImg: '/imgabout/6th.png',
    },
    {
        pName: 'Takahiro Watanabe',
        pDesignation: 'FOUNDER & LEAD ARCHITECT',
        pImg: '/imgabout/7th.png',
    },
    {
        pName: 'Takahiro Watanabe',
        pDesignation: 'FOUNDER & LEAD ARCHITECT',
        pImg: '/imgabout/8th.png',
    },
]

const projectList = [
    {
        number: '1',
        bgImg: '/imgproject/5th.png',
        frontImg: '/imgproject/1st.png',
        propertyName: 'SHIZUKA GARDENS',
        propertyPlace: 'HOKKAIDO, JAPAN',
        pagination: '1 / 6',
    },
    {
        number: '2',
        bgImg: '/imgproject/6th.png',
        frontImg: '/imgproject/2nd.png',
        propertyName: 'KAWA LOFTS',
        propertyPlace: 'TOKYO, JAPAN',
        pagination: '2 / 6',
    },
    {
        number: '3',
        bgImg: '/imgproject/7th.png',
        frontImg: '/imgproject/3rd.png',
        propertyName: 'KINSEI PAVILION',
        propertyPlace: 'OSAKA, JAPAN',
        pagination: '3 / 6',
    },
    {
        number: '4',
        bgImg: '/imgproject/8th.png',
        frontImg: '/imgproject/4th.png',
        propertyName: 'ZENKAI LOUNGE',
        propertyPlace: 'NAGOYA, JAPAN',
        pagination: '1 / 6',
    },
    {
        number: '5',
        bgImg: '/imgproject/9th.png',
        frontImg: '/imgproject/11th.png',
        propertyName: 'HIKARI VILLA ',
        propertyPlace: 'OKINAWA, JAPAN',
        pagination: '1 / 6',
    },
    {
        number: '6',
        bgImg: '/imgproject/10th.png',
        frontImg: '/imgproject/12th.png',
        propertyName: 'YAMA HOUSE',
        propertyPlace: 'NAGANO, JAPAN',
        pagination: '6 / 6',
    },
]

const journalData = [
    {
        number: 1,
        img: '/imgsustainability/16th.png',
        title: "SAISEI'S ROLE IN SHAPING TOKYO'S SUSTAINABLE URBAN FUTURE",
        date: "August 30,2025",
        tag: 'URBAN PLANNING '
    },
    {
        number: 2,
        img: '/imgsustainability/17th.png',
        title: "SHIZUKA GARDENS: A MASTERCLASS IN SUSTAINABLE LUXURY HOSPITALITY",
        date: "August 5,2025",
        tag: 'ECO RESORT '
    },
    {
        number: 3,
        img: '/imgsustainability/18th.png',
        title: "REDIFINING URBAN LANDSCAPES: REGENERATIVE ARCHITECTURE",
        date: "October 4,2025",
        tag: ' SUSTAINABILITY'
    },
    {
        number: 4,
        img: '/imgsustainability/19th.png',
        title: "SUSTAINABLE LUXURY IN TOKYO: THE INNOVATION BEHIND KAWA LOFTS",
        date: "August 30,2025",
        tag: 'SUSTAINABILITY '
    },
]

const journalPost = [
        {
        number: 1,
        img: '/imgjournal/1st.png',
        title: "SAISEI'S ROLE IN SHAPING TOKYO'S SUSTAINABLE URBAN FUTURE",
        date: "August 30,2025",
        tag: 'URBAN PLANNING '
    },
    {
        number: 2,
        img: '/imgjournal/2nd.png',
        title: "SHIZUKA GARDENS: A MASTERCLASS IN SUSTAINABLE LUXURY HOSPITALITY",
        date: "August 5,2025",
        tag: 'ECO RESORT '
    },
    {
        number: 3,
        img: '/imgjournal/3rd.png',
        title: "REDIFINING URBAN LANDSCAPES: REGENERATIVE ARCHITECTURE",
        date: "October 4,2025",
        tag: 'SUSTAINABILITY'
    },
    {
        number: 4,
        img: '/imgjournal/4th.png',
        title: "SUSTAINABLE LUXURY IN TOKYO: THE INNOVATION BEHIND KAWA LOFTS",
        date: "August 10,2025",
        tag: 'SUSTAINABILITY'
    },
    {
        number: 5,
        img: '/imgjournal/5th.png',
        title: "HOW SAISEI INTEGRATES SMART TECHNOLOGY IN SUSTAINABLE DESIGN",
        date: "August 20,2025",
        tag: 'SMART BUILDING '
    },
    {
        number: 6,
        img: '/imgjournal/6th.png',
        title: "THE HARMONY OF MODERNITY AND TRADITION SAISEI'S DESIGNS",
        date: "August 25,2025",
        tag: 'SUSTAINABILITY'
    },
]


export {
    awardList,
    cardsText,
    carouselList,
    teamList,
    projectList,
    journalData,
    journalPost,
    processList
}