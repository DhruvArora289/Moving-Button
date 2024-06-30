function movebutton() {
    const button=document.querySelector('.bt2')

    const maxX=window.innerWidth-button.clientWidth;
    const maxY=window.innerHeight-button.clientHeight;
    const maxraX=maxX/2;
    const maxraY=maxY/2;

    const randomLeft=Math.random()*maxraX;
    const randomRight=Math.random()*maxraY;

    button.style.transform=`translate(${randomLeft}px,${randomRight}px)`;

}

function openwindow(){
    window.location.href="tpyes.html";
}

function openwindow2() {
    window.location.href="tpno.html";
}