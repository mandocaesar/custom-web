var LocsB = [
    {
        lat: 52.1,
        lon: 11.3,
        title: 'Title A2',
        html: [
            '<h3 style="color: black;">Content A2</h3>',
            '<p style="color: black;">Lorem Ipsum</p>'
        ].join(''),
        zoom: 8
    },
    {
        lat: 51.2,
        lon:   22.2,
        title: 'Title B2',
        html: [
            '<h3 style="color: black;">Content B2</h3>',
            '<p style="color: black;">Lorem Ipsum</p>'
        ].join(''),
        zoom: 8
    },
    {
        lat: 49.4,
        lon: 35.9,
        title: 'Title C2',
        html: [
            '<h3 style="color: black;">Content C2</h3>',
            '<p style="color: black;">Lorem Ipsum</p>'            
        ].join(''),
        zoom: 4
    },
    {
        lat: 47.8,
        lon: 15.6,
        title: 'Title D2',
        html: [
            '<h3 style="color: black;">Content D2</h3>',
            '<p style="color: black;">Lorem Ipsum</p>'
        ].join(''),
        zoom: 6
    }
];


new Maplace({
    locations: LocsB,
    map_div: '#gmap-tabs',
    controls_div: '#controls-tabs',
    controls_type: 'list',
    controls_on_map: false,
    show_infowindow: false,
    start: 1,
    afterShow: function(index, location, marker) {
        $('#info').html(location.html);
    }
}).Load();