const review = [
    {
        id: 0,
        clientName: 'Mr. Le Hoang Long (Erik)',
        clientLocation: 'Twendeesoft | Viet Nam',
        clientSource: '',
        clientReview: 'It is always nice to work with him. The work is finished quickly and he does more than is asked of him. It is also clear that he has a lot of knowledge of the work he does. I look forward to our next collaboration.'
    },
    {
        id: 2,
        clientName: 'Mr. Le Hung (Cris)',
        clientLocation: 'Twendeesoft | Viet Nam',
        clientSource: '',
        clientReview: 'He is very good with communication and experienced website developer, great experience to work with him. '
    },
    {
        id: 3,
        clientName: 'Mr. Hoang Viet Bach',
        clientLocation: 'APTECH | Viet Nam',
        clientSource: '',
        clientReview: "Phong is extremely knowledgeable and helpful. He knows in and out of web app development . His understanding of different technologies and frameworks in the space is also very impressive. I hope I get the chance to work with him again"
    },
    {
        id: 4,
        clientName: 'Mr. Hoang Quoc Trung',
        clientLocation: 'Lam Son Dong Security | Viet Nam',
        clientSource: '',
        clientReview: 'I have worked with Phong and he is very professional and excellent software  developer. I admire his speed of development and quality of work when given an assignment.'
    },
    {
        id: 5,
        clientName: 'Ms. Le Hai Yen (Olivia Le)',
        clientLocation: 'BenBen School | Viet Nam',
        clientSource: '',
        clientReview: 'He is such a reliable developer. I can see the hard work and effort that he put into his work. Having only one chance to work with him, I’m satisfied with everything. Hope we can work together in the future'
    },
]
export default function handler(req, res) {
    res.status(200).json(review)
}
