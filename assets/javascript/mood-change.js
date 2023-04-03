console.log(`mood-change.js`);

let mood = "light";
let clickable = true;

function moodChange() {
    console.log(`moodChange()`);

    if (clickable) {
        clickable = false;
        if (mood === "light") {
            $(`.paintings-dark`).removeClass("hidden");
            $(`body`).removeClass("light");
            $(`body`).addClass("dark");
            mood = "dark";
        } else {
            $(`.paintings-light`).removeClass("hidden");
            $(`body`).removeClass("dark");
            $(`body`).addClass("light");
            mood = "light";
        }

        setTimeout(()=>{
            clickable = true;

            if (mood === "light") {
                $(`.paintings-dark`).addClass("hidden");
            } else {
                $(`.paintings-light`).addClass("hidden");
            }
        }, 1000);
    }
}

function popModal(mode, number) {
    console.log(`popModal(${mode}, ${number})`); 

    let folder = `assets/images/sample-paintings/`;
    folder += (mode === `l`) ? `light` : `dark`;

    let file = `painting-${number}.`;
    file += (number <=3 ) ? `webp`
    : (number === 15 && mode === `d`) ? `png`
    : `jpg`;

    // $(`.modal .modal-dialog .modal-content .modal-header .modal-title`).html(`${mode} - ${number}`);

    $(`.modal .modal-dialog .modal-content .modal-body img`).attr(`src`,`${folder}/${file}`);
}