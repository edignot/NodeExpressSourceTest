const express = require('express')

require('dotenv').config()

const Analytics = require('analytics-node');

const analytics = new Analytics(process.env.ANALYTICS_WRITE_KEY);

const app = express();

app.get('/', (req, res) => {

  analytics.identify({
    anonymousId: 'ID1',
    traits: {
      friends: 100
    }
  });

  analytics.track({
    anonymousId: 'ID2',
    event: 'Item Purchased',
    properties: {
      revenue: 39.95,
      shippingMethod: '2-day'
    }
  });

  analytics.page({
    userId: '019mr8mf4r',
    category: 'Docs',
    name: 'Node.js Library',
    properties: {
      url: 'https://segment.com/docs/connections/sources/catalog/librariesnode',
      path: '/docs/connections/sources/catalog/librariesnode/',
      title: 'Node.js Library - Segment',
      referrer: 'https://github.com/segmentio/analytics-node'
    }
  });

  analytics.group({
    userId: '019mr8mf4r',
    groupId: '56',
    traits: {
      name: 'Initech',
      description: 'Accounting Software'
    }
  });

  res.send('Node Express Source Test')
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));