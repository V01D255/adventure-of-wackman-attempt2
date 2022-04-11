namespace SpriteKind {
    export const GUI = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    wackman,
    player_animations[3],
    350,
    false
    )
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    wackman,
    player_animations[3],
    100,
    false
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    wackman,
    player_animations[1],
    350,
    false
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    wackman,
    player_animations[2],
    350,
    false
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    wackman,
    player_animations[0],
    350,
    false
    )
})
function new_room () {
    tiles.setCurrentTilemap(areas._pickRandom())
    tiles.placeOnRandomTile(wackman, sprites.dungeon.collectibleInsignia)
}
let wackman: Sprite = null
let player_animations: Image[][] = []
let areas: tiles.TileMapData[] = []
areas = [
tilemap`room1`,
tilemap`level3`,
tilemap`die1`,
tilemap`level4`,
tilemap`level7`
]
player_animations = [
assets.animation`wacky boy forward`,
assets.animation`wacky boy left`,
assets.animation`wacky boy right`,
assets.animation`wacky boy back`,
assets.animation`the wacky thing`,
assets.animation`wacky boy DEAD`
]
wackman = sprites.create(assets.image`wacky boy item`, SpriteKind.Player)
let speed = 50
controller.moveSprite(wackman, speed, speed)
scene.cameraFollowSprite(wackman)
info.setLife(3)
new_room()
let inv1 = sprites.create(assets.image`inv1`, SpriteKind.GUI)
let inv2 = sprites.create(assets.image`inv0`, SpriteKind.GUI)
inv1.setFlag(SpriteFlag.RelativeToCamera, true)
inv2.setFlag(SpriteFlag.RelativeToCamera, true)
inv1.setPosition(5, 15)
inv2.setPosition(16, 15)
let item1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.GUI)
let item2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.GUI)
item1.setFlag(SpriteFlag.RelativeToCamera, true)
item1.setPosition(7, 17)
item2.setFlag(SpriteFlag.RelativeToCamera, true)
inv2.setPosition(18, 17)
