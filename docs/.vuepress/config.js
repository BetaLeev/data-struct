module.exports = {
    title: '数据结构导论',
    description: '数据结构导论 - 书籍',
    themeConfig: {
        sidebar: [
            {
                title: '概论',   // 必要的
                path: '/overview/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
            },
            {
                title: '线性表',   // 必要的
                path: '/linear-table/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
            }
            , {
                title: '栈、队列和数组',   // 必要的
                path: '/array/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
            }, {
                title: '树和二叉树',   // 必要的
                path: '/tree/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
            }, {
                title: '图',   // 必要的
                path: '/map/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
            }
        ]
    }
}