/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx638261bec5e1009c',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '44896780dc25fe916d0e263b426a33e8',

  PROVINCE: '湖北',
  CITY: '荆州',

  USERS: [
    {
      // 想要发送的人的名字
      name: '小杜杜',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oEJ3J5pvp0kI5yUZyPV80tPqWv7w',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '	RcCcGAP21JioqOpL-5scydxiyin-u73V92T6Dn7814w',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-25',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '小宝贝', name: '小肚肚', year: '1998', date: '12-25',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '大哥哥', name: '阿望', year: '1996', date: '12-20',
        },
        {
          type: '节日', name: '我们已经认识了', year: '2023', date: '04-06',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-04-06' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2025-10-03' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'RcCcGAP21JioqOpL-5scydxiyin-u73V92T6Dn7814w',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oEJ3J5rPuVj3AIaDqUd7Qd7af_lQ',
    }
  ],

}

module.exports = USER_CONFIG

