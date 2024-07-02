// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: 'My CaseCollection (from HealthHub)',
    image: "images/mcc.png",
    designation: 'SCSS | JavaScript | Google Polymer',
    view: "MCC is a project that utilizes a website system to meticulously archive images of patients' bones. This innovative platform empowers doctors to efficiently search for and reference diverse treatment methodologies or engage in specialized research within their respective medical disciplines. By facilitating such capabilities, MCC not only enhances medical decision-making but also contributes significantly to the advancement of professional expertise.",
    linkednURL: "https://www.linkedin.com/in/shahmir-minhas/"
  },
  {
    id: 1,
    name: 'EVN',
    image: "images/evn.png",
    designation: 'CSS | ReactJS | Typescript',
    view: "We have developed a comprehensive website dedicated to managing and facilitating the purchase invoices and electricity payments for EVN (Vietnam Electricity Corporation). This platform empowers users to efficiently track their electricity consumption patterns, select from a variety of tailored payment plans, and conveniently process payments online. By providing these features, we aim to enhance user convenience and transparency in managing their electricity usage and payments.",
    linkednURL: "https://www.linkedin.com/in/sikandar-hayat-381407179/"
  },
  {
    id: 2,
    name: 'Nasir Khan',
    image: "images/nasir.jpg",
    designation: 'MERN | JavaScript | Tailwind | Sass | Bootstrap',
    view: "I wholeheartedly recommend Osama as a talented React frontend developer with an incredible flair for UI/UX design. His proficiency in Node.js further enhances his capabilities, allowing him to build robust and scalable applications. Osama's attention to detail, problem-solving skills, and dedication to delivering exceptional results make him a valuable addition to any development team.",
    linkednURL: "https://www.linkedin.com/in/nasirkhan22/"
  },
  {
    id: 3,
    name: 'Muhammad Ullah',
    image: "images/muhammad.jpeg",
    designation: 'MERN Stack Developer at Productbox',
    view: "I highly recommend Osama Javed for web frontend development positions. Their expertise in ReactJS and Next.js, combined with their professionalism and dedication, make them an invaluable asset to any team.",
    linkednURL: "https://www.linkedin.com/in/muhammadullahafridi/"
  },
]
export default function handler(req, res) {
  res.status(200).json(recommendationCard)
}
