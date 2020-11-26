export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fbf417d33d944dd228b579e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-groq-studio',
                  apiId: '5ef962e2-0059-4bb0-8654-fec3399bd17b'
                },
                {
                  buildHookId: '5fbf417d613244fb12f968d0',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-groq',
                  apiId: '055b9545-79d1-429f-a862-19b1cd86a64c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vivekneem/sanity-gatsby-blog-groq',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-groq.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
