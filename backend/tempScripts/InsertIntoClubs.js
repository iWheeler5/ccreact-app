try{
    db.clubs.insertMany([
        {
            name: "The Island",
            description: "The Island is hidden away in the basement of an old Victorian police station, now operating as an arts centre and event space. As you descend into the basement vaults of the building you find the main room all painted black with an industrial underground club feel. ",
            avgreview: 7,
            cityId: 2,
            capacity: 250,
            coverimgurl: "https://clubculturestorage.blob.core.windows.net/city-images/TheIsland.jpg",
            address:{
                addressline1: "Bridewell St",
                city: "Bristol",
                postcode: "BS1 2QD"
            }

        },
        {
            name: "The Black Swan",
            description: "The Black Swan plays host to frequent events with a Drum & Bass and Jungle focus their famous Yard Parties.",
            avgreview: 8,
            cityId: 2,
            capacity: 700,
            coverimgurl: "https://clubculturestorage.blob.core.windows.net/city-images/TheBlackSwan.jpg",
            address:{
                addressline1: "438 Stapleton Road",
                city: "Bristol",
                postcode: "BS5 6NR"
            }
        },
        {
            name: "The Crofters Rights",
            description: "This pub prides itselft on Craft Beer and Pizza during the day but comes alive at night, playing host to exciting house, techno and drum & bass events.",
            avgreview: 8,
            cityId: 2,
            capacity: 300,
            coverimgurl: "https://clubculturestorage.blob.core.windows.net/city-images/CroftersRights.jpg",
            address:{
                addressline1: "117-119 Stokes Croft",
                city: "Bristol",
                postcode: "BS1 3RW"
            }
        },
        {
            name: "Timbuk2",
            description: "This below street level club is woven into the fabric of Bristol nightlife. Any Bristol electronic music enthusiast will have fond memories of this unique venue. In addition to three rooms of music, the clubs layout includes two bars and seating areas. With its DJ booth dead centre, the tunnel like main room provides an intimacy that more conventional floor plans cannot offer.",
            avgreview: 8,
            cityId: 2,
            capacity: 300,
            coverimgurl: "https://scontent-lcy1-1.xx.fbcdn.net/v/t1.18169-9/10423939_863621177035906_2086386973235295920_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=174925&_nc_ohc=dcFuuMG_ZHkAX99gCop&_nc_ht=scontent-lcy1-1.xx&oh=3fa6a51da23f521f52888691874a85d1&oe=60C9C018",
            address:{
                addressline1: "22 Small Street",
                city: "Bristol",
                postcode: "BS1 1DW"
            }
        },
        {
            name: "Cosies",
            description: "This Bar plays host to an impressive array of guest DJs in an intimate underground setting.",
            avgreview: 8,
            cityId: 2,
            capacity: 100,
            coverimgurl: "https://media.timeout.com/images/101900801/750/422/image.jpg",
            address:{
                addressline1: "34 Portland Square",
                city: "Bristol",
                postcode: "BS2 8RG"
            }
        }


    ]);
}
catch(e){
    print(e);
}