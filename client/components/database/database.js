export const COLOURS = {
    white: '#ffffff',
    black: '#000000',
    green: '#00AC76',
    red: '#C04345',
    blue: '#87CEEB',
    backgroundLight: '#F0F0F3',
    backgroundMedium: '#B9B9B9',
    backgroundDark: '#777777',
    yellow: '#FFD700'
};

export const Items = [
    {
        id: 1,
        category: 'product',
        productName: 'MI Super Bass Bluetooth Wireless Headphones',
        productPrice: 1799,
        description:
            'Up to 20 hours battery life | Super powerful Bass | 40mm dynamic driver | Pressure less ear muffs | Bluetooth 5.0 | Voice control  ',

        subDes: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, voluptatibus fugit tempora error soluta repudiandae aspernatur alias aliquid adipisci, quo ipsa nihil sequi esse debitis ratione. Laudantium fugit reiciendis labore!
            Illo modi, quae ab obcaecati beatae, voluptas molestiae neque aperiam vel qui explicabo necessitatibus doloribus assumenda maxime veritatis excepturi dolores dignissimos atque nostrum? Corporis magnam mollitia excepturi architecto. Natus, cumque!`,

        isOff: true,
        offPercentage: 10,
        productImage: require('./images/products/Mi1.png'),
        isAvailable: true,
        productImageList: [
            require('./images/products/Mi1.png'),
            require('./images/products/Mi2.png'),
            require('./images/products/Mi3.png'),
        ],
    },
    {
        id: 2,
        category: 'product',
        productName: 'boAt Rockerz 450 Bluetooth Headphone',
        productPrice: 1499,
        description:
            'boAt Rockerz 450 M is an on-ear wireless headset that has been ergonomically designed to meet the needs of music lovers.',
        subDes: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, voluptatibus fugit tempora error soluta repudiandae aspernatur alias aliquid adipisci, quo ipsa nihil sequi esse debitis ratione. Laudantium fugit reiciendis labore!
            Illo modi, quae ab obcaecati beatae, voluptas molestiae neque aperiam vel qui explicabo necessitatibus doloribus assumenda maxime veritatis excepturi dolores dignissimos atque nostrum? Corporis magnam mollitia excepturi architecto. Natus, cumque!`,
        isOff: false,
        productImage: require('./images/products/boat1.png'),
        isAvailable: true,
        productImageList: [
            require('./images/products/boat1.png'),
            require('./images/products/boat2.png'),
            require('./images/products/boat3.png'),
        ],
    },
    {
        id: 3,
        category: 'accessory',
        productName: 'boAt Airdopes 441',
        productPrice: 1999,
        description:
            'Bluetooth: It has Bluetooth v5.0 with a range of 10m and is compatible with Android & iOS',
        subDes: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, voluptatibus fugit tempora error soluta repudiandae aspernatur alias aliquid adipisci, quo ipsa nihil sequi esse debitis ratione. Laudantium fugit reiciendis labore!
            Illo modi, quae ab obcaecati beatae, voluptas molestiae neque aperiam vel qui explicabo necessitatibus doloribus assumenda maxime veritatis excepturi dolores dignissimos atque nostrum? Corporis magnam mollitia excepturi architecto. Natus, cumque!`,
        isOff: true,
        offPercentage: 18,
        productImage: require('./images/acceseries/boatairpods1.png'),
        isAvailable: true,
        productImageList: [
            require('./images/acceseries/boatairpods1.png'),
            require('./images/acceseries/boatairpods2.png'),
            require('./images/acceseries/boatairpods3.png'),
        ],
    },
    {
        id: 4,
        category: 'accessory',
        productName: 'boAt Bassheads 242',
        productPrice: 399,
        description:
            'Fly into your workouts with precise tones that inspire and energize your system with its HD sound, all the time.',
        subDes: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, voluptatibus fugit tempora error soluta repudiandae aspernatur alias aliquid adipisci, quo ipsa nihil sequi esse debitis ratione. Laudantium fugit reiciendis labore!
            Illo modi, quae ab obcaecati beatae, voluptas molestiae neque aperiam vel qui explicabo necessitatibus doloribus assumenda maxime veritatis excepturi dolores dignissimos atque nostrum? Corporis magnam mollitia excepturi architecto. Natus, cumque!`,
        isOff: false,
        productImage: require('./images/acceseries/boatbassheads1.png'),
        isAvailable: true,
        productImageList: [
            require('./images/acceseries/boatbassheads1.png'),
            require('./images/acceseries/boatbassheads3.png'),
        ],
    },
    {
        id: 5,
        category: 'accessory',
        productName: 'boAt Rockerz 255 Pro+',
        productPrice: 1499,
        description:
            'The unbeatable boAt signature sound shines through no matter what are you playing courtesy its 10mm drivers.',
        subDes: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, voluptatibus fugit tempora error soluta repudiandae aspernatur alias aliquid adipisci, quo ipsa nihil sequi esse debitis ratione. Laudantium fugit reiciendis labore!
            Illo modi, quae ab obcaecati beatae, voluptas molestiae neque aperiam vel qui explicabo necessitatibus doloribus assumenda maxime veritatis excepturi dolores dignissimos atque nostrum? Corporis magnam mollitia excepturi architecto. Natus, cumque!`,
        isOff: false,
        productImage: require('./images/acceseries/boatrockerz1.png'),
        isAvailable: false,
        productImageList: [
            require('./images/acceseries/boatrockerz1.png'),
            require('./images/acceseries/boatrockerz2.png'),
            require('./images/acceseries/boatrockerz3.png'),
        ],
    },
    {
        id: 6,
        category: 'accessory',
        productName: 'Boult Audio AirBass Propods TWS',
        productPrice: 1299,
        description:
            'One Touch Control & Voice Assistant: With one multifunction button, you can play/pause, previous/next track and answer/hang-up calls.Voice assistant function lets you access siri/Google Assistant',
        subDes: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, voluptatibus fugit tempora error soluta repudiandae aspernatur alias aliquid adipisci, quo ipsa nihil sequi esse debitis ratione. Laudantium fugit reiciendis labore!
            Illo modi, quae ab obcaecati beatae, voluptas molestiae neque aperiam vel qui explicabo necessitatibus doloribus assumenda maxime veritatis excepturi dolores dignissimos atque nostrum? Corporis magnam mollitia excepturi architecto. Natus, cumque!`,
        isOff: false,
        productImage: require('./images/acceseries/boultairbass1.png'),
        isAvailable: true,
        productImageList: [
            require('./images/acceseries/boultairbass1.png'),
            require('./images/acceseries/boultairbass2.png'),
            require('./images/acceseries/boultairbass3.png'),
        ],
    },
    {
        id: 7,
        category: 'sofa',
        productName: 'Comfy Sofa',
        productPrice: 5299,
        description:
            'Sofa by sleepwell company SUPER COMFY is their defination',
        subDes: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, voluptatibus fugit tempora error soluta repudiandae aspernatur alias aliquid adipisci, quo ipsa nihil sequi esse debitis ratione. Laudantium fugit reiciendis labore!
            Illo modi, quae ab obcaecati beatae, voluptas molestiae neque aperiam vel qui explicabo necessitatibus doloribus assumenda maxime veritatis excepturi dolores dignissimos atque nostrum? Corporis magnam mollitia excepturi architecto. Natus, cumque!`,
        isOff: false,
        productImage: require('./images/sofa/sofa1.png'),
        isAvailable: true,
        productImageList: [
            require('./images/acceseries/boultairbass1.png'),
            require('./images/acceseries/boultairbass2.png'),
            require('./images/acceseries/boultairbass3.png'),
        ],
    },
    {
        id: 8,
        category: 'sofa',
        productName: '2Comfy Sofa',
        productPrice: 7299,
        description:
            'Sofa by sleepwell company SUPER COMFY is their defination',
        subDes: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, voluptatibus fugit tempora error soluta repudiandae aspernatur alias aliquid adipisci, quo ipsa nihil sequi esse debitis ratione. Laudantium fugit reiciendis labore!
            Illo modi, quae ab obcaecati beatae, voluptas molestiae neque aperiam vel qui explicabo necessitatibus doloribus assumenda maxime veritatis excepturi dolores dignissimos atque nostrum? Corporis magnam mollitia excepturi architecto. Natus, cumque!`,
        isOff: false,
        productImage: require('./images/sofa/sofa2.png'),
        isAvailable: true,
        productImageList: [
            require('./images/acceseries/boultairbass1.png'),
            require('./images/acceseries/boultairbass2.png'),
            require('./images/acceseries/boultairbass3.png'),
        ],
    },
    {
        id: 9,
        category: 'sofa',
        productName: '3Comfy Sofa',
        productPrice: 3299,
        description:
            'Sofa by sleepwell company SUPER COMFY is their defination',
        subDes: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, voluptatibus fugit tempora error soluta repudiandae aspernatur alias aliquid adipisci, quo ipsa nihil sequi esse debitis ratione. Laudantium fugit reiciendis labore!
            Illo modi, quae ab obcaecati beatae, voluptas molestiae neque aperiam vel qui explicabo necessitatibus doloribus assumenda maxime veritatis excepturi dolores dignissimos atque nostrum? Corporis magnam mollitia excepturi architecto. Natus, cumque!`,
        isOff: false,
        productImage: require('./images/sofa/sofa3.png'),
        isAvailable: true,
        productImageList: [
            require('./images/acceseries/boultairbass1.png'),
            require('./images/acceseries/boultairbass2.png'),
            require('./images/acceseries/boultairbass3.png'),
        ],
    },
    {
        id: 10,
        category: 'sofa',
        productName: '4Comfy Sofa',
        productPrice: 4299,
        description:
            'Sofa by sleepwell company SUPER COMFY is their defination',
        subDes: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, voluptatibus fugit tempora error soluta repudiandae aspernatur alias aliquid adipisci, quo ipsa nihil sequi esse debitis ratione. Laudantium fugit reiciendis labore!
            Illo modi, quae ab obcaecati beatae, voluptas molestiae neque aperiam vel qui explicabo necessitatibus doloribus assumenda maxime veritatis excepturi dolores dignissimos atque nostrum? Corporis magnam mollitia excepturi architecto. Natus, cumque!`,
        isOff: false,
        productImage: require('./images/sofa/chair1.png'),
        isAvailable: true,
        productImageList: [
            require('./images/acceseries/boultairbass1.png'),
            require('./images/acceseries/boultairbass2.png'),
            require('./images/acceseries/boultairbass3.png'),
        ],
    },
    {
        id: 11,
        category: 'sofa',
        productName: 'Comfy Sofa',
        productPrice: 5299,
        description:
            'Sofa by sleepwell company SUPER COMFY is their defination',
        subDes: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, voluptatibus fugit tempora error soluta repudiandae aspernatur alias aliquid adipisci, quo ipsa nihil sequi esse debitis ratione. Laudantium fugit reiciendis labore!
            Illo modi, quae ab obcaecati beatae, voluptas molestiae neque aperiam vel qui explicabo necessitatibus doloribus assumenda maxime veritatis excepturi dolores dignissimos atque nostrum? Corporis magnam mollitia excepturi architecto. Natus, cumque!`,
        isOff: false,
        productImage: require('./images/sofa/chair2.png'),
        isAvailable: true,
        productImageList: [
            require('./images/acceseries/boultairbass1.png'),
            require('./images/acceseries/boultairbass2.png'),
            require('./images/acceseries/boultairbass3.png'),
        ],
    },
    {
        id: 12,
        category: 'sofa',
        productName: 'Comfy Sofa',
        productPrice: 5299,
        description:
            'Sofa by sleepwell company SUPER COMFY is their defination',
        subDes: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, voluptatibus fugit tempora error soluta repudiandae aspernatur alias aliquid adipisci, quo ipsa nihil sequi esse debitis ratione. Laudantium fugit reiciendis labore!
            Illo modi, quae ab obcaecati beatae, voluptas molestiae neque aperiam vel qui explicabo necessitatibus doloribus assumenda maxime veritatis excepturi dolores dignissimos atque nostrum? Corporis magnam mollitia excepturi architecto. Natus, cumque!`,
        isOff: false,
        productImage: require('./images/sofa/chair3.png'),
        isAvailable: true,
        productImageList: [
            require('./images/acceseries/boultairbass1.png'),
            require('./images/acceseries/boultairbass2.png'),
            require('./images/acceseries/boultairbass3.png'),
        ],
    },
    {
        id: 13,
        category: 'sofa',
        productName: 'Comfy Sofa',
        productPrice: 5299,
        description:
            'Sofa by sleepwell company SUPER COMFY is their defination',
        subDes: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, voluptatibus fugit tempora error soluta repudiandae aspernatur alias aliquid adipisci, quo ipsa nihil sequi esse debitis ratione. Laudantium fugit reiciendis labore!
        Illo modi, quae ab obcaecati beatae, voluptas molestiae neque aperiam vel qui explicabo necessitatibus doloribus assumenda maxime veritatis excepturi dolores dignissimos atque nostrum? Corporis magnam mollitia excepturi architecto. Natus, cumque!`,
        isOff: false,
        productImage: require('./images/sofa/sofa1.png'),
        isAvailable: true,
        productImageList: [
            require('./images/acceseries/boultairbass1.png'),
            require('./images/acceseries/boultairbass2.png'),
            require('./images/acceseries/boultairbass3.png'),
        ],
    },
];