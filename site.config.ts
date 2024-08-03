import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '7875426197cf461698809def95960ebf',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Alexander J. Taylor',
  domain: 'praecellens.org',
  author: 'A.J Taylor',

  // open graph metadata (optional)
  description: 'Greatness is an endless war you wage against yourself',

  // social usernames (optional)
  twitter: 'alexanderprae',
  github: 'ajtffati',
  linkedin: 'alexanderjtaylor',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  navigationStyle: 'default'
  // navigationStyle: 'custom',
  // navigationLinks: [
  //   {
  //     title: 'About', My name is Alexander J Taylor, but my friends call me A.J. I am a senior studying Communication Studies and Public Relations at Florida Atlantic University, located in sunny Boca Raton, Florida.

Growing up, my life was a blend of sports and literature. As a child, I was raised on the Atlanta Falcons, with my passion for the Atlanta Hawks and Toronto Maple Leafs coming later in my life. My mother, a New York University graduate, curated my love for all aspects of texts, from reading the news to epic fantasy. By consuming a variety of different media, I have been able to flourish as a well-rounded individual.

Because of my strong ties to team sports and the written arts, I have always had a strong fixation for the human individual. I believe that everybody is the hero of their own story. My interpersonal skills have been honed and refined by multiple customer service jobs, starting at age 16 at Burger King. I progressed into a head cashier until I left for Florida Atlantic University. I arrived at FAU and started working at Chartwells, becoming a head cashier for the Pollo Tropical store. After two years at Chartwells, I journeyed to Starbucks to become a Barista, where I have been happily connecting with customers for over a year.

In 2024, I started the brand “praecellens”. Praecellens is a brand with a mission to be better than your previous self. Praecellens is the present participle (-ing verbs) of praecello (to surpass). You do not work for ten years, become great, and cease. You must battle, day in and day out, against an opponent that you are very familar with.

Greatness is an endless war you wage against
  //     pageId: 'f1199d37579b41cbabfc0b5174f4256a'
  //   },
  //   {
  //     title: 'Contact', Gmail guy
  //     pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
  //   }
  // ]
})
