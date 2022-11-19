export default{
    name:'experiences',
    title:'Experiences',
    type: 'document',
    fields:[
        {
            name:'year',
            title:'Year',
            type:'string'
        },
        {   name:'name',
            title:'name',
            type:'string'
        },
        {
            name:'company',
            title:'Company',
            type:'string'
        },
        {
            name:'desc',
            title:'Desc',
            type:'string'
        },
        {
            name: 'imgUrl',
            title: 'ImageUrl',
            type: 'image',
            options: {
                hotspot: true,
            }
        }
    ]
}