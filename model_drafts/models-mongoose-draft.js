TileSchema = {
  _id: myObjectId,

  edges: {
    N: null,
    S: null,
    E: null,
    W: null
  },
  lasers: {
    horizontal: {},
    vertical: {}
  },
  center:{

  },
  flag: {type: ObjectId},
  wrench: [0,1,2]
},



FlagSchema = {
  number: [1,2,3,4,5,6,7,8],
};

EdgeSchema = {
  type: ['wall', 'pusher'],
  magnitue: [1,2,3] // for pushers only
};

CenterSchema = {
  type: ['conveyer', 'pit', 'gear'],

};
