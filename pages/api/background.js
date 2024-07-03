const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'APTECH EDUCATION',
                degree: 'Computer System Engineering',
                detail: "Bachelor's Degree in Computer System Engineering from APTECH.",
                year: '2018-2022'
            },
            {
                id: 2,
                title: 'CodeGym Academy',
                degree: 'Front-end Technology',
                detail: "Completed Basic Front-end Technology from CodeGym Academy.",
                year: '2023-2024'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'ITLeadpro',
                role: 'Intern Frontend Developer | PHP Developer',
                url: '',
                desc: 'As a Intern Frontend developer, I learnd how to use ReactJS, JavaScript to build user interfaces for web applications. In addition, I also developed websites in my role as a PHP developer.',
                year: '05/2019 - 05/2020',
                location: 'Truong Chinh, Ha Noi'
            },
            {
                id: 2,
                title: 'Twendee',
                role: 'Fresher Frontend Developer',
                url: '',
                desc: 'As an Fresher Frontend Developer, I use React, Vue & JavaScript to build interactive websites.',
                year: '05/2020 - 07/2021',
                location: 'Ha Noi, Viet Nam'
            },
            {
                id: 3,
                title: 'Twendee',
                role: 'Junior Frontend Developer',
                url: '',
                desc: 'As an Junior Frontend Developer, I use React, Vue & JavaScript to build interactive websites.',
                year: '07/2021 - 02/2022',
                location: 'Ha Noi, Viet Nam'
            },
            {
                id: 4,
                title: 'Twendeesoft',
                role: 'Junior Frontend Developer',
                url: '',
                desc: 'As an Junior Frontend Developer, I use React, Vue & JavaScript to build interactive websites.',
                year: '02/2024 - Present',
                location: 'Ha Noi, Viet Nam'
            },
        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
