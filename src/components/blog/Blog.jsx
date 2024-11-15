import React from 'react'

const Blog = () => {
    const blogData = [
        {
            id: 1,
            blogName: "Exciting Project Launch",
            date: 'November 12, 2024',
            for: 'Altaneo Finance',
            desc: 'We are thrilled to announce our new project that aims to revolutionize the way you interact with technology. This is a game-changer for the industry, and we cant wait to share more details with you.',
            link: 'https://example.com'
        },
        {
            id: 1,
            blogName: "Exciting Project Launch",
            date: 'November 12, 2024',
            for: 'Altaneo Finance',
            desc: 'We are thrilled to announce our new project that aims to revolutionize the way you interact with technology. This is a game-changer for the industry, and we cant wait to share more details with you.',
            link: 'https://example.com'
        },
        {
            id: 1,
            blogName: "Exciting Project Launch",
            date: 'November 12, 2024',
            for: 'Altaneo Finance',
            desc: 'We are thrilled to announce our new project that aims to revolutionize the way you interact with technology. This is a game-changer for the industry, and we cant wait to share more details with you.',
            link: 'https://example.com'
        }
    ]
    return (
        <>
            <div className='mt-24 text-center font-bold text-3xl'>Blog</div>
            {blogData.map((data, index) => {
                return (

                    <a href={data.link} target="_blank" rel="noopener noreferrer">
                        <div className="bg-white p-6 mt-4 rounded-lg shadow-lg max-w-2xl mx-auto border-b-2 border-gray-300 hover:shadow-xl transition-shadow duration-200">
                            <h2 className="text-xl font-bold text-gray-900 mb-4 hover:text-pink-600">
                                {data.blogName}
                            </h2>
                            <div className="flex text-sm mb-4">
                                <span className="text-black font-semibold mr-3">{data.date}  ||</span>
                                <span className="text-pink-600"> {data.for}</span>
                            </div>
                            <p className="text-gray-700 line-clamp-2">
                                {data.desc}
                            </p>

                        </div>
                    </a>
                )
            })
            }
        </>
    )
}

export default Blog