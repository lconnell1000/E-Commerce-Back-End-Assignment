const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'hardcore music',
  },
  {
    tag_name: 'blue',
  },
  {
    tag_name: 'red',
  },
  {
    tag_name: 'yellow',
  },
  {
    tag_name: 'white',
  },
  {
    tag_name: 'gold',
  },
  {
    tag_name: 'sporting goods',
  },
  {
    tag_name: 'black',
  }
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
