htmlToCanvas(`
    <div xmlns="http://www.w3.org/1999/xhtml">
        <em>I</em>
        am 
        <span style="color:blue;">
            HTML
        </span>
    </div>
`, `
    <style>
        foreignObject div {
            font-size: 40px;
            color: red;
        }
    </style>
`, 200, 50).then(canvas => {
    const $img = document.createElement('img')
    $img.src = canvas.toDataURL('image/png')
    document.body.appendChild($img)
})