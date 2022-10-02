var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var gF = "roboto";
var gImages = [];


async function renderPage () {

    // ctx.globalCompositeOperation='source-over';
    // ctx.globalCompositeOperation='destination-over';

    //fill background
    _drawRect("#004e9d", {x: 0, y: 0, w: canvas.width, h: canvas.height});

    /* HEADER */
    //draw top button
    await _drawImage('assets/close-icon.png', {x: 50, y: 20, w: 13, h: 13});
    _drawText("#ffffff", '16px', gF, {x: 80, y: 32, w: 50}, "Zurück");

    //draw inner rect
    _drawRect("#ffffff", {x: 50, y: 50, w: canvas.width - 100, h: canvas.height - 100});




    /* FOOTER */
    //bottom text
    _drawText("#ffffff", "18px", gF, {x: 50, y: 1058, w: 1350},
        "Newsticker - Die neusten News aus aller Welt - jederzeit auf dem PinScreen - Tolle Sache - Newsticker - Die neusten News aus aller Welt - jederzeit auf dem PinScreen - Tolle Sache -"
    )
    //draw sp mark
    await _drawImage('assets/ps_mark.png', {x: 1830, y: 1033, w: 60, h: 40});



    /* LEFT PANEL */
    //draw building image
    await _drawImage('assets/b-bg.png', {x: 50, y: 50, w: 1200, h: 980});

    // notes
    _drawRect("#004e9d", {x: 100, y: 905, w: 210, h: 25});
    _drawText("#ffffff", "15px", gF, {x: 110, y: 923, w: 150}, "3 Zimmer, Passau (Zentrum)");
    _drawRect("#ffffff", {x: 100, y: 935, w: 150, h: 25});
    _drawText("#004e9d", "15px", gF, {x: 110, y: 953, w: 130}, "Kaufpreis: 340.000€");
    

    
    /* RIGHT PANEL */
    //draw vr image
    await _drawImage('assets/vr-mark.png', {x: 1650, y: 100, w: 200, h: 50});
    //draw qr image
    await _drawImage('assets/qr.png', {x: 1690, y: 190, w: 150, h: 150});

    // write text
    _drawText("#000000", "17px", gF, {x: 1300, y: 223, w: 74}, "Passau");
    _drawText("#000000", "25px", gF, {x: 1300, y: 263, w: 250}, "3 Zimmerwohnung \nmit Südbalkon");

    _drawText("#707070", "25px", gF, {x: 1300, y: 383, w: 153},
    "Mietobjekt\nZimme\nGrundfläche\nKaufpreis\nNebenkosten\nEtage\nFrei ab\nObjekt Nr.");

    _drawText("#707070", "25px", gF, {x: 1500, y: 383, w: 153},
    "Etagenwohnung\n375m²\n340.000€\n---\n3a.A.40562", 300);

    _drawText("#707070", "22px", gF, {x: 1300, y: 683, w: 153},
    "Energieausweis:\nArt:\nEndenergiewert:\nBaujahr:", 300);

    _drawText("#707070", "22px", gF, {x: 1500, y: 683, w: 153},
    "na\nEnergieverbrauchsausweis\nna kWh/(m''a)\n2021\n", 300);

    _drawText("#707070", "22px", gF, {x: 1300, y: 823, w: 453},
    "Weitere Infos:\nVom neuen Mieter kann der Garten mitbenutzt \nwerden. Haustiere erlaubt. Es stehen im gleichen \nHause noch 2 weitere Wohnungen. Es stehen im \ngleichen Hause noch 2 weitere Wohnungen zur \nVermietung.Gerne setzen Sie sich auch mit uns in \nVerbindung. Telefonisch unter 0123 / 45 46 89 \noder via eMail unter info@vr-bank-passau.de", 300);
    

    /** CONTROLS */
    _drawRect("#004e9d", {x: 50, y: 500, w: 30, h: 100});
    await _drawImage('assets/arrow-left.png', {x: 40, y: 540, w: 20, h: 20});

    _drawRect("#004e9d", {x: 1840, y: 500, w: 30, h: 100});
    await _drawImage('assets/arrow-right.png', {x: 1860, y: 540, w: 20, h: 20});













    // global function    
    function _drawText(color, fontSize, font, rect, text, fontWeight) {
        if (fontWeight > 0) {
            ctx.font = `${fontWeight} ${fontSize} ${font}`;
        } else {
            ctx.font = `900 ${fontSize} ${font}`;
        }
        
        ctx.fillStyle = color;

        var lineHeight = ctx.measureText("M").width * 1.5;

        // multiline        
        // contain \n.
        var lines = text.split("\n");
        for (var i = 0; lines.length > 0 && i < lines.length; ++i) {
            // var w = context.measureText(str).width;
            // let wcnt = Math.floor(rect.w / ctx.measureText("M").width);
            ctx.fillText(lines[i], rect.x, rect.y);
            rect.y += lineHeight;
        }

        // ctx.fillText(text, rect.x, rect.y, rect.w);
    }

    function _drawRect(color, rect) {
        ctx.fillStyle = color;
        ctx.fillRect(rect.x, rect.y, rect.w, rect.h);
    }

    function _drawImage(src, rect) {
        return new Promise(resolve => {
            const image = new Image(rect.w, rect.h); // Using optional size for image    
            // image.addEventListener("load", (e) => {
            //     ctx.drawImage(image, rect.x, rect.y, rect.w, rect.h);
            // });
            image.onload = function(){
                ctx.drawImage(image, rect.x, rect.y, rect.w, rect.h);
                resolve();
            };
            image.src = src;
        })
        
    }
}


window.onload = async function () {
    renderPage();
}