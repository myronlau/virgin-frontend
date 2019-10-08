//Menu list
export default {
  name: 'menuItems',
  data() {
    return {
      rootSubmenuKeys: ['1', 'sub1', 'sub2', '3'],
      menuList: [
        {
          key: '1',
          title: 'Dashboard',
          icon: 'dashboard'
        },
        {
          key: 'sub1',
          title: 'Navigation One',
          icon: 'mail',
          children: [
            {
              key: 5,
              title: 'Option 5',
              icon: ''
            },
            {
              key: 6,
              title: 'Option 6',
              icon: ''
            },
            {
              key: 7,
              title: 'Option 7',
              icon: ''
            },
            {
              key: 8,
              title: 'Option 8',
              icon: ''
            }
          ]
        },
        {
          key: 'sub2',
          title: 'Navigation two',
          icon: 'appstore',
          children: [
            {
              key: '9',
              title: 'Option 9',
              icon: ''
            },
            {
              key: '10',
              title: "Option 10",
              icon: ''
            }
          ]
        },
        {
          key: '3',
          title: 'Setting',
          icon: 'setting'
        }
      ]
    }
  }
}