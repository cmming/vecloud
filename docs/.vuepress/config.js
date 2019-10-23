module.exports = {
    title: 'vecloud',
    description: 'vecloud',
    contentLoading: true,
    configureWebpack: {
        resolve: {
            alias: {
                '@': '/'
            }
        }
    },
    themeConfig: {
        sideBar: 'auto',
        sidebarDepth: 3,
        lastUpdated: '上次更新',
        sidebar: {
            '/docker/': getBlogSidebar('docker'),
        },
    },
}



function getBlogSidebar(type) {
    switch (type) {
        case 'docker':
            return [{
                title: '镜像打包',
                children: [
                    ['./install', 'php-fpm'],
                ]
            }]
            break;
    }
}