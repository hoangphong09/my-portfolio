const expertise = [
    {
        id: 0,
        title: 'Frontend Developer',
        desc: 'With 2 years of hands-on experience in web development, specializing in ReactJS, JavaScript, VueJS. Experienced in translating UI/UX designs into code, ensuring a seamless user experience. Strong knowledge of modern frontend development practices including component-based architecture, state management, and RESTful APIs. Passionate about learning new technologies and solving complex problems to deliver innovative solutions.',
    },
    {
        id: 1,
        title: 'PHP Developer',
        desc: 'I am a PHP programmer with 1.5 years of experience in using WordPress (Elementor), Magento for managing and building online stores, personal blogs, and corporate systems.',
    },
    {
        id: 2,
        title: 'Scrum and Jira',
        desc: "As a developer, I'm proficient in Jira and Scrum methodologies. I use Jira to simplify project management tasks like task assignment, prioritization, and progress tracking. Scrum has improved my teamwork, utilizing daily stand-ups, sprint planning, and retrospectives. My expertise ensures high-quality software products are delivered promptly.",
    },
    {
        id: 3,
        title: 'Git',
        desc: "Git (and GitHub) is essential for version control and collaboration. Its intuitive interface and features like pull requests and issue tracking simplify the process. Continuous integration ensures up-to-date code. GitHub is vital to my success as a developer.",
    },
    {
        id: 4,
        title: 'Open Source Contributor',
        desc: "Open Source is the future for any developer. I usually take some time on weekend and contribute into opensource project. It gives me opportunity to learn from best developer's practices and also gives me a chance to help others and contribute into the community for the good.",
    },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
