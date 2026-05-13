// src/components/home/LeadershipSection.tsx
'use client';

const LEADERS = [
  {
    id: 1,
    name: 'Mr. Bharat Bansal',
    designation: 'Chairman & Managing Director',
    experience: '35+ Years Experience',
    image: '/leadership/BharatBansal.webp',
    bio: 'Mr. Bharat Bansal is one of the Founder Directors of Ashlar Group with extensive experience in capital markets, public issues, commodity trading, and financial services. He has played a vital role in building Ashlar India into a trusted financial services brand.',
    linkedin: '#',
    email: 'bharat@ashlarindia.com',
  },
  
  {
    id: 2,
    name: 'Mr. Sunil Kumar',
    designation: 'Whole-time Director',
    experience: '20+ Years Experience',
    image: '/leadership/SunilKumar.jpeg',
    bio: 'Mr. Sunil Kumar has deep experience in financial markets and investor services. He has contributed significantly towards operational efficiency, client servicing, and execution of key business functions.',
    linkedin: '#',
    email: 'sunil@ashlarindia.com',
  },
  {
    id: 3,
    name: 'Mr. Sudhir Bhalla',
    designation: 'Director',
    experience: '17+ Years Experience',
    image: '/leadership/SudhirBhalla.jpeg',
    bio: 'Mr. Sudhir Bhalla is responsible for strategic planning, operational management, and corporate expansion initiatives. His leadership and industry expertise have supported the long-term growth of Ashlar India.',
    linkedin: '#',
    email: 'sudhir@ashlarindia.com',
  },
];

const TIMELINE = [
  {
    year: '2009',
    title: 'Company Founded',
    desc: 'Ashlar India was established to provide transparent and reliable financial market services.',
  },
  {
    year: '2010',
    title: 'SEBI Registration',
    desc: 'Registered with SEBI as a stock broker and investment service provider.',
  },
  {
    year: '2011',
    title: 'NSE & BSE Membership',
    desc: 'Expanded operations through NSE and BSE memberships.',
  },
  {
    year: '2013',
    title: 'MCX Membership',
    desc: 'Entered commodity trading services through MCX membership.',
  },
  {
    year: '2016',
    title: 'NSDL Depository Services',
    desc: 'Started Depository Participant services under NSDL.',
  },
];

const REGISTRATIONS = [
  {
    title: 'SEBI Registration',
    value: 'INZ000203739',
  },
  {
    title: 'NSE Member',
    value: '13718',
  },
  {
    title: 'BSE Member',
    value: '3302',
  },
  {
    title: 'MCX Member',
    value: '56815',
  },
  {
    title: 'NCDEX Member',
    value: '01002',
  },
  {
    title: 'NSDL DP-ID',
    value: 'IN303921',
  },
  {
    title: 'SEBI DP Registration',
    value: 'IN-DP-2362016',
  },
];

export default function LeadershipSection() {
  return (
    <section className="py-16 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-4">
            About Ashlar India
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-5">
            Leadership Team
          </h2>

          <p className="text-gray-600 leading-7 max-w-3xl mx-auto">
            Ashlar India is led and managed by a highly experienced team of
            professionals with deep expertise in stock broking, capital markets,
            compliance, risk management, and investor services.
          </p>
        </div>

        {/* Leadership Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {LEADERS.map((leader) => (
            <div
              key={leader.id}
              className="bg-white rounded-[24px] border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 p-6"
            >

              {/* Image */}
              <div className="flex justify-center">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-gray-100"
                />
              </div>

              {/* Name */}
              <h3 className="text-[22px] font-semibold text-center text-[#111827] mt-5">
                {leader.name}
              </h3>

              {/* Designation */}
              <p className="text-sm text-center text-blue-600 font-medium mt-1">
                {leader.designation}
              </p>

              {/* Experience */}
              <p className="text-xs text-center text-gray-500 mt-1">
                {leader.experience}
              </p>

              {/* Bio */}
              <p className="text-[13px] leading-6 text-gray-600 mt-5 text-justify">
                {leader.bio}
              </p>

              {/* Links */}
              <div className="mt-5 flex flex-col gap-2">

                <a
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:underline"
                >
                  LinkedIn Profile
                </a>

                <a
                  href={`mailto:${leader.email}`}
                  className="text-sm text-gray-600 hover:text-blue-600"
                >
                  {leader.email}
                </a>

              </div>
            </div>
          ))}
        </div>

        {/* Timeline Section */}
        {/* <div className="mt-24">

          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#111827]">
              Company Timeline
            </h3>

            <p className="text-gray-500 mt-3">
              Key milestones in Ashlar India's journey
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">

            {TIMELINE.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-100 p-6 text-center shadow-sm hover:shadow-lg transition-all"
              >
                <div className="text-3xl font-bold text-blue-600 mb-3">
                  {item.year}
                </div>

                <h4 className="font-semibold text-[#111827] mb-3">
                  {item.title}
                </h4>

                <p className="text-sm text-gray-600 leading-6">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div> */}

        {/* Memberships & Registrations */}
        {/* <div className="mt-24">

          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#111827]">
              Memberships & Registrations
            </h3>

            <p className="text-gray-500 mt-3">
              Official registrations and exchange memberships
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {REGISTRATIONS.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all"
              >
                <p className="text-sm text-gray-500">
                  {item.title}
                </p>

                <p className="text-xl font-bold text-blue-600 mt-2 break-all">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}