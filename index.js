const $div_gallery = document.getElementById("gallery");
const $overlay = document.getElementById("overlay");
const $ham_icon = document.getElementById("ham-icon");
const $overlay_menu = document.getElementById("overlay-menu");
$imageClickedDiv = document.getElementById("imageClickedDiv");
const $first_page_services_names = [
    "Photography", "Web Development", "Web Content", "Branding", "Web Design", "Video"
];



for (var i = 0; i < 6; i++) {

    //creating service image elements in js
    let $image = document.createElement("img");
    $image.classList.add("image");
    $image.setAttribute("src", `images/first-page/${$first_page_services_names[i]}.jpg`);
    $image.setAttribute("title", $first_page_services_names[i]);
    $image.setAttribute("alt", $first_page_services_names[i]);

    //creating service image captions in js
    let $caption = document.createElement("h4");
    $caption.classList.add("image-caption");
    $caption.innerHTML = `${$first_page_services_names[i]}`


    //creating gallery items
    const $gallery_item = document.createElement("div");
    $gallery_item.classList.add("gallery_item");
    $gallery_item.appendChild($image);
    $gallery_item.appendChild($caption);

    //creating an <a> elemnt to which a gallery item will be embedded
    const $a = document.createElement("a");
    $a.setAttribute("tabindex", 0);
    $a.appendChild($gallery_item);

    //embeding <a> element to gallery div
    $div_gallery.appendChild($a);

    $gallery_item.addEventListener('mouseenter', function (ev) {
        $gallery_item_nodes = $gallery_item.childNodes;
        $gallery_item_nodes[0].style.filter = "brightness(100%)"; // changing the brightness of the image which mouse is over
        $gallery_item_nodes[1].style.fontWeight = "bold";
        $gallery_item_nodes[1].style.fontSize = "18px"
    });

    $gallery_item.addEventListener('mouseleave', function (ev) {
        $gallery_item_nodes = $gallery_item.childNodes;
        $gallery_item_nodes[0].style.filter = "brightness(30%)";
        $gallery_item_nodes[1].style.fontWeight = "normal";
        $gallery_item_nodes[1].style.fontSize = "16px"
    });


    function imageSelected(ev) {
        event = ev.target.closest(".gallery_item");
        console.log(event);
        $overlay.style.display = "block";
        $image_overlayed.classList.add("image-overlayed");
        $image_overlayed.setAttribute("src", event.firstChild.getAttribute("src"));
        $imageClickedDiv.style.display = "block";
        $imageClickedDiv.appendChild($image_overlayed);
    }

}

//hamburger-menu
$ham_icon.addEventListener("click", dropMenu);

$ham_icon.onkeydown = dropMenu;

//function to drop the menu when hamurger-menu clicked
function dropMenu(ev) {
    if (ev.keyCode == 13 || ev.which == 1) {
        $overlay_menu.style.display = "block";
        $overlay_menu.style.opacity = ".97";
    }
}


//making overlay elements invisible
function overlayOff() {
    $overlay_menu.style.display = "none";
    $overlay.style.display = "none";
}

document.onkeydown = function (evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        overlayOff();
    }
}
document.onClick = function (evt) {
    evt = evt || window.event;
    if ($overlay_menu.style.display = "block") {
        overlayOff();
    }
}
