canvas = document.getElementById('canvas')
g = canvas.getContext('2d')
width = canvas.width
height = canvas.height

g.fillStyle = 'violet'
g.fillRect(0, 0, width, height)

g.fillStyle = 'blue'
g.fillRect(width / 2, height / 3, width, height)
