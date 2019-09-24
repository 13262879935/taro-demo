Component({
  properties: {
    // iconiconset0308 | iconyinlemusic215 | iconiconfontzhizuobiaozhun023104 | icontubiaozhizuomoban | icondianying | iconjingdong- | icontuijianfuwu | iconicon_add | iconicon_down
    name: {
      type: String,
    },
    size: {
      type: Number,
      value: 18,
    },
    // string || string[]
    color: {
      type: null,
    },
  },
  data: {
    colorIsString: false,
  },
  attached: function() {
    this.setData({
      colorIsString: typeof this.properties.color === 'string',
    });
  },
  moved: function() {
    this.setData({
      colorIsString: typeof this.properties.color === 'string',
    });
  },
});
