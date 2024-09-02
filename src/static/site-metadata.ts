interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Running Page',
  siteUrl: 'https://run.imangry.xyz',
  logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTtc69JxHNcmN1ETpMUX4dozAgAN6iPjWalQ&usqp=CAU',
  description: 'Personal running record',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://notes.stevenash0822.com',
    },
    {
      name: 'About',
      url: 'https://github.com/stevenash0822/running_page/blob/dev_timmmy/README-CN.md',
    },
  ],
};

export default data;
