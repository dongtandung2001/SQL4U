export const info = [
    {
        _id: '1',
        userName: 'Jax Scott',
        userAvatar: 'https://galaxylands.com.vn/wp-content/uploads/2022/10/tieu-su-ca-si-mono-13.jpg',
        description: 'What are UNION, MINUS and INTERSECT commands?',
        topic: 'Database Basic',
        title: 'What are UNION, MINUS and INTERSECT commands?',
        date: '11/1/2022',
        replies: [
            {
                userName: 'Daniela Avery',
                reply: 'The UNION operator combines and returns the result-set retrieved by two or more SELECT statements',
                dateR: '20/11/2022'
            },
            {
                userName: "Vy Dinh",
                userAvatar: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png",
                reply: "The MINUS  operator in SQL is used to remove duplicates from the result-set obtained by the second SELECT query from the result-set obtained by the first SELECT query and then return the filtered results from the first",
                dateR: "11/6/2022"
            },
            {
                userName: "Daniela Avery",
                userAvatar: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png",
                reply: "The intersect clause in SQL combines the result-set fetched by the two SELECT statements where records from one match the other and then returns this intersection of result-sets",
                dateR: "11/7/2022"
            }
        ]
    },
    {
        _id: '2',
        userName: 'Dog',
        userAvatar: 'https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg',
        description: 'This is a question',
        topic: 'Intermediate',
        title: 'Title of the question 2',
        date: 'today',
        replies: [
            {
                userName: 'Dung',
                reply: 'I dont know',
                dateR: '20/11/2022'
            },

            {
                userName: 'Phu',
                reply: 'ok',
                dateR: '20/11/2022'
            }

        ]

    }
    ,
    {
        _id: '3',
        userName: 'David',
        userAvatar: 'https://galaxylands.com.vn/wp-content/uploads/2022/10/tieu-su-ca-si-mono-13.jpg',
        description: 'This is a question',
        topic: 'Advance SQL',
        title: 'Title of the question 1',
        date: 'today',

    },
    {
        _id: '4',
        userName: 'John',
        userAvatar: 'https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg',
        description: 'This is a question',
        topic: 'Technical problems',
        title: 'Title of the question 2',
        date: 'today',

    }
]