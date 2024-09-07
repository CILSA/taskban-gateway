const listings = [
    { id: 1, name: "La Soñada Real", sideWay: "left", dimensions: "20X30", width: 20, heigth: 30, status: "vendido", corner: true, neighbor: [2, 3, 4], seller: "Alicia Garcia", sellerId: 101, coverPhoto: "https://i.imgur.com/mcwZnGx.jpeg" },
    { id: 2, name: "Sol Naciente", sideWay: "center", dimensions: "15X25", width: 15, heigth: 25, status: "en-venta", corner: false, neighbor: [1, 3, 5], seller: "Carlos López", sellerId: 102, coverPhoto: "https://i.imgur.com/dh9vtdm.jpeg" },
    { id: 3, name: "Brisa Marina", sideWay: "right", dimensions: "18X22", width: 18, heigth: 22, status: "en-venta", corner: true, neighbor: [1, 2, 4], seller: "María Rodríguez", sellerId: 103, coverPhoto: "https://i.imgur.com/uSBJJ5E.jpeg" },
    { id: 4, name: "Luna Llena", sideWay: "left", dimensions: "10X40", width: 10, heigth: 40, status: "reservado", corner: false, neighbor: [1, 3, 5], seller: "Juan Martínez", sellerId: 104, coverPhoto: "https://i.imgur.com/Q8v4iS8.jpeg" },
    { id: 5, name: "Monte Azul", sideWay: "center", dimensions: "30X30", width: 30, heigth: 30, status: "en-venta", corner: true, neighbor: [2, 4, 6], seller: "Ana González", sellerId: 105, coverPhoto: "https://i.imgur.com/joa00nV.jpeg" },
    { id: 6, name: "Paz y Tranquilidad", sideWay: "right", dimensions: "12X28", width: 12, heigth: 28, status: "vendido", corner: false, neighbor: [5, 7, 8], seller: "Pedro Sánchez", sellerId: 106, coverPhoto: "https://i.imgur.com/QhNP5HZ.jpeg" },
    { id: 7, name: "Bosque Encantado", sideWay: "left", dimensions: "25X35", width: 25, heigth: 35, status: "reservado", corner: true, neighbor: [6, 8, 9], seller: "Laura Fernández", sellerId: 107, coverPhoto: "https://i.imgur.com/KGlgs23.jpeg" },
    { id: 8, name: "Amanecer Dorado", sideWay: "center", dimensions: "20X20", width: 20, heigth: 20, status: "en-venta", corner: false, neighbor: [6, 7, 9], seller: "Diego Pérez", sellerId: 108, coverPhoto: "https://i.imgur.com/uzio2BE.jpeg" },
    { id: 9, name: "Valle Sereno", sideWay: "right", dimensions: "15X25", width: 15, heigth: 25, status: "vendido", corner: true, neighbor: [7, 8, 10], seller: "Sofía Gómez", sellerId: 109, coverPhoto: "https://i.imgur.com/mcwZnGx.jpeg" },
    { id: 10, name: "Sueño Real", sideWay: "left", dimensions: "22X18", width: 22, heigth: 18, status: "en-venta", corner: false, neighbor: [9, 11, 12], seller: "Manuel Díaz", sellerId: 110, coverPhoto: "https://i.imgur.com/vhSjTer.jpeg" },
    { id: 11, name: "Aurora Boreal", sideWay: "center", dimensions: "28X22", width: 28, heigth: 22, status: "reservado", corner: true, neighbor: [10, 12, 13], seller: "Luisa Martínez", sellerId: 111, coverPhoto: "https://i.imgur.com/ImyOyiz.jpeg" }
]
export const getListings = () => {
    return listings;
}

export const getListingCompare = (ids) => {
    if (!Array.isArray(ids)) {
        return [];
    }

    // Filtra los listings que tienen un id incluido en el array de ids
    return listings.filter(listing => ids.includes(listing.id));
};

const listingsDetail = [
    {
        id: 1,
        name: "La Soñada Real",
        sideWay: "left",
        dimensions: "20X30",
        width: 20,
        heigth: 30,
        status: "vendido",
        corner: true,
        neighbor: [2, 3, 4],
        seller: "Alicia Garcia",
        sellerId: 101,
        sellerEmail: "alicia.garcia@example.com",
        sellerPhone1: "+123456789",
        sellerPhone2: "+987654321",
        sellerPhone3: "+112233445",
        photos: [
            "https://i.imgur.com/mcwZnGx.jpeg",
            "https://i.imgur.com/Q8v4iS8.jpeg",
            "https://i.imgur.com/KGlgs23.jpeg"
        ]
    },
    {
        id: 2,
        name: "Sol Naciente",
        sideWay: "center",
        dimensions: "15X25",
        width: 15,
        heigth: 25,
        status: "en-venta",
        corner: false,
        neighbor: [1, 3, 5],
        seller: "Carlos López",
        sellerId: 102,
        sellerEmail: "carlos.lopez@example.com",
        sellerPhone1: "+2233445566",
        sellerPhone2: "+6677889900",
        sellerPhone3: "+9988776655",
        photos: [
            "https://i.imgur.com/dh9vtdm.jpeg",
            "https://i.imgur.com/uzio2BE.jpeg",
            "https://i.imgur.com/joa00nV.jpeg"
        ]
    },
    {
        id: 3,
        name: "Brisa Marina",
        sideWay: "right",
        dimensions: "18X22",
        width: 18,
        heigth: 22,
        status: "en-venta",
        corner: true,
        neighbor: [1, 2, 4],
        seller: "María Rodríguez",
        sellerId: 103,
        sellerEmail: "maria.rodriguez@example.com",
        sellerPhone1: "+3344556677",
        sellerPhone2: "+7788990011",
        sellerPhone3: "+1100223344",
        photos: [
            "https://i.imgur.com/uSBJJ5E.jpeg",
            "https://i.imgur.com/ImyOyiz.jpeg",
            "https://i.imgur.com/QhNP5HZ.jpeg"
        ]
    },
    {
        id: 4,
        name: "Luna Llena",
        sideWay: "left",
        dimensions: "10X40",
        width: 10,
        heigth: 40,
        status: "reservado",
        corner: false,
        neighbor: [1, 3, 5],
        seller: "Juan Martínez",
        sellerId: 104,
        sellerEmail: "juan.martinez@example.com",
        sellerPhone1: "+4455667788",
        sellerPhone2: "+8899001122",
        sellerPhone3: "+5566778899",
        photos: [
            "https://i.imgur.com/vhSjTer.jpeg",
            "https://i.imgur.com/uzio2BE.jpeg",
            "https://i.imgur.com/KGlgs23.jpeg"
        ]
    },
    {
        id: 5,
        name: "Monte Azul",
        sideWay: "center",
        dimensions: "30X30",
        width: 30,
        heigth: 30,
        status: "en-venta",
        corner: true,
        neighbor: [2, 4, 6],
        seller: "Ana González",
        sellerId: 105,
        sellerEmail: "ana.gonzalez@example.com",
        sellerPhone1: "+5566778899",
        sellerPhone2: "+1122334455",
        sellerPhone3: "+9988776655",
        photos: [
            "https://i.imgur.com/QhNP5HZ.jpeg",
            "https://i.imgur.com/dh9vtdm.jpeg",
            "https://i.imgur.com/mcwZnGx.jpeg"
        ]
    },
    {
        id: 6,
        name: "Paz y Tranquilidad",
        sideWay: "right",
        dimensions: "12X28",
        width: 12,
        heigth: 28,
        status: "vendido",
        corner: false,
        neighbor: [5, 7, 8],
        seller: "Pedro Sánchez",
        sellerId: 106,
        sellerEmail: "pedro.sanchez@example.com",
        sellerPhone1: "+6677889900",
        sellerPhone2: "+5566778899",
        sellerPhone3: "+4433221100",
        photos: [
            "https://i.imgur.com/KGlgs23.jpeg",
            "https://i.imgur.com/Q8v4iS8.jpeg",
            "https://i.imgur.com/uSBJJ5E.jpeg"
        ]
    },
    {
        id: 7,
        name: "Bosque Encantado",
        sideWay: "left",
        dimensions: "25X35",
        width: 25,
        heigth: 35,
        status: "reservado",
        corner: true,
        neighbor: [6, 8, 9],
        seller: "Laura Fernández",
        sellerId: 107,
        sellerEmail: "laura.fernandez@example.com",
        sellerPhone1: "+7788990011",
        sellerPhone2: "+1100223344",
        sellerPhone3: "+3344556677",
        photos: [
            "https://i.imgur.com/Q8v4iS8.jpeg",
            "https://i.imgur.com/dh9vtdm.jpeg",
            "https://i.imgur.com/mcwZnGx.jpeg"
        ]
    },
    {
        id: 8,
        name: "Amanecer Dorado",
        sideWay: "center",
        dimensions: "20X20",
        width: 20,
        heigth: 20,
        status: "en-venta",
        corner: false,
        neighbor: [6, 7, 9],
        seller: "Diego Pérez",
        sellerId: 108,
        sellerEmail: "diego.perez@example.com",
        sellerPhone1: "+9988776655",
        sellerPhone2: "+6677889900",
        sellerPhone3: "+5566778899",
        photos: [
            "https://i.imgur.com/joa00nV.jpeg",
            "https://i.imgur.com/uSBJJ5E.jpeg",
            "https://i.imgur.com/uzio2BE.jpeg"
        ]
    },
    {
        id: 9,
        name: "Valle Sereno",
        sideWay: "right",
        dimensions: "15X25",
        width: 15,
        heigth: 25,
        status: "vendido",
        corner: true,
        neighbor: [7, 8, 10],
        seller: "Sofía Gómez",
        sellerId: 109,
        sellerEmail: "sofia.gomez@example.com",
        sellerPhone1: "+1122334455",
        sellerPhone2: "+9988776655",
        sellerPhone3: "+5566778899",
        photos: [
            "https://i.imgur.com/mcwZnGx.jpeg",
            "https://i.imgur.com/KGlgs23.jpeg",
            "https://i.imgur.com/ImyOyiz.jpeg"
        ]
    },
    {
        id: 10,
        name: "Sueño Real",
        sideWay: "left",
        dimensions: "22X18",
        width: 22,
        heigth: 18,
        status: "en-venta",
        corner: false,
        neighbor: [9, 11, 12],
        seller: "Manuel Díaz",
        sellerId: 110,
        sellerEmail: "manuel.diaz@example.com",
        sellerPhone1: "+3344556677",
        sellerPhone2: "+6677889900",
        sellerPhone3: "+1122334455",
        photos: [
            "https://i.imgur.com/vhSjTer.jpeg",
            "https://i.imgur.com/dh9vtdm.jpeg",
            "https://i.imgur.com/Q8v4iS8.jpeg"
        ]
    },
    {
        id: 11,
        name: "Aurora Boreal",
        sideWay: "center",
        dimensions: "28X22",
        width: 28,
        heigth: 22,
        status: "reservado",
        corner: true,
        neighbor: [10, 12, 13],
        seller: "Luisa Martínez",
        sellerId: 111,
        sellerEmail: "luisa.martinez@example.com",
        sellerPhone1: "+6677889900",
        sellerPhone2: "+5566778899",
        sellerPhone3: "+1122334455",
        photos: [
            "https://i.imgur.com/ImyOyiz.jpeg",
            "https://i.imgur.com/joa00nV.jpeg",
            "https://i.imgur.com/uSBJJ5E.jpeg"
        ]
    }
];

export const getListingById = (id) => {
    return listingsDetail.find(listing => listing.id === id);
};
