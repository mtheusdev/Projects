const interval = setInterval(() => {
    const header = document.querySelector("._1QUKR")
    if (header) {
        clearInterval(interval)

        const button = document.createElement("button")
        const button2 = document.createElement("button2")
        button.innerHTML = "2x"
        button2.innerHTML = "1x"
        button.classList.add("twoTimesButton")
        button2.classList.add("oneTimesButton")
        button.addEventListener("click", () => {
            const audios = document.querySelectorAll("audio");
            audios.forEach((audio) => {
                audio.playbackRate = 2;
            })
        })
        button2.addEventListener("click", () => {
            const audios = document.querySelectorAll("audio");
            audios.forEach((audio) => {
                audio.playbackRate = 1;
            })
        })
        header.appendChild(button)
        header.appendChild(button2)
    }
}, 1000)