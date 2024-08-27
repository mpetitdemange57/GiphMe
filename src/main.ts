let allImagesWrappersList = document.querySelectorAll(".Gif");

allImagesWrappersList.forEach(imgWrapper => {
    const imageSource: string | null = imgWrapper.querySelector("img")!.getAttribute("src");
    console.log("imageSource " + imageSource);
    imgWrapper.appendChild(createButton(imageSource));
})

function createButton(urlAssociatedImage){
    let button = document.createElement("button");
    button.classList.add("button-download");
    button.textContent = "⬇️";
    button.title="Download me !"
    button.onclick = ($event) => buttonDownloadClick($event, urlAssociatedImage);
    return button;
}

// function downloadURI(uri, name) {
//     var link = document.createElement("a");
//     link.download = name;
//     link.href = uri;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//     delete link;
//   }

function buttonDownloadClick($event, urlImageAssociee){
    console.log("Downloaded");
    $event.preventDefault();
    $event.stopPropagation();
    // downloadURI(urlImageAssociee, "Test");
}