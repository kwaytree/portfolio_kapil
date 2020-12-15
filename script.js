let themeCss = document.querySelector("#theme_select");
const setTheme = (mode)=>{
    if(mode==="light"){
        themeCss.href = "./themes/style.css";
    }
    else if(mode==="dark"){
        themeCss.href = "./themes/dark.css";
    }
    else if(mode==="azul"){
        themeCss.href = "./themes/azul.css";
    }
    else if(mode==="purpura"){
        themeCss.href = "./themes/purpura.css";
    }
    else if(mode==="rosa"){
        themeCss.href = "./themes/rosa.css";
    }
    localStorage.setItem('theme',mode);
}

let theme = localStorage.getItem("theme");

if(theme == null){
    setTheme('light')
}
else{
    setTheme(theme);
}



document.querySelectorAll(".theme_dot").forEach((d)=>{
    d.addEventListener("click",(e)=>{
        e.preventDefault();
        setTheme(d.id);
    })
})

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function grow(){
    let i = 0;
    document.querySelector(".flow").setAttribute("width",`${i}%`);
    while(i<100){
        i++;
        document.querySelector(".flow").style.width = `${i}%`;
        await sleep(100);
    }
    return;
}


document.querySelectorAll(".browser_dot").forEach((bd)=>{
    bd.addEventListener("click",(e)=>{
        e.preventDefault();
        if(bd.id === "one"){
            document.querySelector(".flow").style.backgroundColor = "#f75d59";
            grow();
        }
        else if(bd.id === "two"){
            document.querySelector(".flow").style.backgroundColor = "#f7b742";
            grow();
        }
        else if(bd.id === "three"){
            document.querySelector(".flow").style.backgroundColor = "#00c44c"
            grow();
        }
    })
})

