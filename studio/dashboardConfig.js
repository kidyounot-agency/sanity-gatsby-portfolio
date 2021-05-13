export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '609cb50f4e929e70e3b5946b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-9sbdpdpf',
                  apiId: '2b88ce02-dbb2-4d83-834f-195e5c97b505'
                },
                {
                  buildHookId: '609cb5106003566cb70197d3',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-zft6r37a',
                  apiId: '4631eea5-570a-451a-889a-52e2199d6060'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kidyounot-agency/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-zft6r37a.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
