function removeElement() {
    const elToRemove = document.querySelector("#ADS-block-detect");
    if (elToRemove) {
        elToRemove.remove();
    }
}

function removeScript() {
    const scripts = document.getElementsByTagName("script");
    for (let i = 0; i < scripts.length; i++) {
        const regexSrcBase = /https:\/\/chat\.chatgptdemo\.net\/assets\/js\/secret\.js/
        const src = scripts[i].getAttribute("src");
        if (regexSrcBase.test(src)) {
            scripts[i].remove();
        }
    }
}

removeElement();
window.addEventListener("load", removeElement)
document.addEventListener("DOMContentLoaded", removeElement)
removeScript();
window.addEventListener("load", removeScript)
document.addEventListener("DOMContentLoaded", removeScript)

const observer = new MutationObserver((mutationsList) => {
    for (const m of mutationsList) {
        if (m.type === "childList" && m.addedNodes.length > 0) {
            const addedNode = m.addedNodes[0]
            if (addedNode.id === "ADS-block-detect") {
                addedNode.remove();
            }

        }
    }
})

const observerConfig = {
    childList: true,
    subtrees: true,
}

observer.observe(document.body, observerConfig);

