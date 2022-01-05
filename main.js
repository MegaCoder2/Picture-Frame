function preload()
{
    
}
function setup()
{
    canvas = createCanvas(550, 550)
    canvas.position(110, 250)
    video = createCapture(VIDEO)
    video.hide()
}
function draw()
{
    image(video, 60, 35, 450, 455)
    fill(255, 0, 0)
    circle(50, 50, 80)
    circle(500, 500, 80)
    circle(50, 500, 80)
    circle(500, 50, 80)
    fill(0, 128, 0)
    rect(37.5, 90, 25, 370)
    rect(90, 487.5, 370, 25)
    rect(487.5, 90, 25, 370)
    rect(90, 35.5, 370, 25)
}
function take_snapshot()
{
    save("framepicture.png")
}
function filter_tint()
{
    tint_color = document.getElementById("color_name").value
}