// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: "My CaseCollection (from HealthHub)",
    image: "images/mcc.png",
    designation: "SCSS | JavaScript | Google Polymer",
    view: "MCC is a project that utilizes a website system to meticulously archive images of patients' bones. This innovative platform empowers doctors to efficiently search for and reference diverse treatment methodologies or engage in specialized research within their respective medical disciplines. By facilitating such capabilities, MCC not only enhances medical decision-making but also contributes significantly to the advancement of professional expertise.",
    linkednURL: "",
  },
  {
    id: 1,
    name: "EVN",
    image: "images/evn.png",
    designation: "CSS | ReactJS | Typescript",
    view: "We have developed a comprehensive website dedicated to managing and facilitating the purchase invoices and electricity payments for EVN (Vietnam Electricity Corporation). This platform empowers users to efficiently track their electricity consumption patterns, select from a variety of tailored payment plans, and conveniently process payments online. By providing these features, we aim to enhance user convenience and transparency in managing their electricity usage and payments.",
    linkednURL: "",
  },
  {
    id: 2,
    name: "Zaapi",
    image: "images/zaapi.png",
    designation: "CSS | ReactJS | ReactNative | Typescript",
    view: "With Zaapi's intuitive order management and notification system, you can streamline your operations, provide a seamless ordering experience for your customers, and stay connected with them throughout their purchasing journey.",
    linkednURL: "",
  },
  {
    id: 3,
    name: "Elmodino (EShot)",
    image: "images/eshot.png",
    designation: "VueJS | CSS",
    view: "EShot plays a crucial role in overseeing, managing, and controlling machinery systems. It not only assists users in understanding their personal and team job responsibilities but also facilitates effective team collaboration. Moreover, EShot functions as a tool to identify and rectify errors, thereby ensuring the accuracy and reliability of customer data. Its comprehensive functionalities make it indispensable for maintaining operational efficiency and data integrity in various organizational contexts.",
    linkednURL: "",
  },
  {
    id: 4,
    name: "TAOStartup",
    image: "images/tao.png",
    designation: "PHP | WordPress",
    view: "Our vision is to become the largest startup community in Vietnam. We focus on core values of building real, quality networking through community activities such as meetups, workshops, and business matching for startups. Additionally, Táo provides valuable knowledge and advice on product development, business growth, and market expansion.",
    linkednURL: "",
  },
  {
    id: 5,
    name: "Bottle  Bunker (from Lotte)",
    image: "images/lotte.jpg",
    designation: "VueJS | CSS",
    view: "Botte Bunker functions as a comprehensive management system for a diverse portfolio of wines and snacks sourced from various allied nations. It not only facilitates order processing but also rigorously controls the supply chain to ensure reliability and traceability. Moreover, Botte Bunker prioritizes the safety and security of its operations, implementing robust measures to safeguard both products and data integrity. Its integrated approach ensures efficient management and high standards of service delivery across the supply network.",
    linkednURL: "",
  },
];
export default function handler(req, res) {
  res.status(200).json(recommendationCard);
}
