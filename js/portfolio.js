$( document ).ready(function() {
    var gallery = $("#viewtiful").justifiedGallery({
        rowHeight : 100,
        maxRowHeight : 400,
        lastRow : 'justify',
        margins : 3,
    });

    gallery.on('jg.complete', function() {
        $('#viewtiful a').swipebox({hideBarsDelay : false})
    });

    var gallery = $("#xBAND").justifiedGallery({
        rowHeight : 100,
        maxRowHeight : 400,
        lastRow : 'justify',
        margins : 3,
    });

    gallery.on('jg.complete', function() {
        $('#xBAND a').swipebox({hideBarsDelay : false})
    });

    var gallery = $("#ss").justifiedGallery({
        rowHeight : 100,
        maxRowHeight : 400,
        lastRow : 'justify',
        margins : 3,
    });

    gallery.on('jg.complete', function() {
        $('#ss a').swipebox({hideBarsDelay : false})
    });
});
