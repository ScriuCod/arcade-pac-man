namespace SpriteKind {
    export const Ghost = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Ghost, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
    info.changeScoreBy(-25)
})
function createFood () {
    for (let index = 0; index < 20; index++) {
        sprFood = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 5 5 5 5 5 . . . . . . 
            . . . . . 5 5 5 5 5 . . . . . . 
            . . . . . 5 5 5 5 5 . . . . . . 
            . . . . . 5 5 5 5 5 . . . . . . 
            . . . . . 5 5 5 5 5 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Food)
        tiles.placeOnRandomTile(sprFood, sprites.castle.tilePath5)
    }
}
function createEnemeis () {
    for (let index = 0; index < 4; index++) {
        sprGhost = sprites.create(img`
            . . . f f f f f f f f f f . . . 
            . . f a a a a a a a a a f f . . 
            . f a a a a a a a a a a a a f . 
            f a a a f f a a f f a a a a a f 
            f a a a f a a a f a a a a a a f 
            f a a a a a a a a a a a a a a f 
            f a a a a a a a a a a a a a a f 
            f a a a a a a a a a a a a a a f 
            f a a a a f a f a f a a a a a f 
            f a a a f a f a f a f a a a a f 
            f a a a a a a a a a a a a a a f 
            f a a a a a a a a a a a a a a f 
            f a a a a a a a a a a a a a a f 
            f a a a a a a a a a a a a a a f 
            f a a a a a a a a a a a a a a f 
            . f . f . f . f . f . f . f . f 
            `, SpriteKind.Ghost)
        tiles.placeOnRandomTile(sprGhost, sprites.castle.tilePath5)
        sprGhost.setFlag(SpriteFlag.StayInScreen, true)
        sprGhost.setFlag(SpriteFlag.BounceOnWall, true)
        sprGhost.setVelocity(30, 30)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 200)
    info.changeScoreBy(1)
})
let sprGhost: Sprite = null
let sprFood: Sprite = null
info.setScore(5)
info.setLife(5)
tiles.setTilemap(tilemap`level`)
let sprPacMan = sprites.create(img`
    . . . . 5 5 5 5 5 5 5 5 . . . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 4 . 
    . 5 5 5 5 e e 5 5 5 5 5 5 4 . . 
    5 5 5 5 5 e e 5 5 5 5 5 4 . . . 
    5 5 5 5 5 5 5 5 5 5 5 4 . . . . 
    5 5 5 5 5 5 5 5 5 5 4 . . . . . 
    5 5 5 5 5 5 5 5 5 4 . . . . . . 
    5 5 5 5 5 5 5 5 4 . . . . . . . 
    5 5 5 5 5 5 5 5 5 4 . . . . . . 
    5 5 5 5 5 5 5 5 5 5 4 . . . . . 
    5 5 5 5 5 5 5 5 5 5 5 4 . . . . 
    . 5 5 5 5 5 5 5 5 5 5 5 4 . . . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 4 . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . . . 5 5 5 5 5 5 5 5 . . . . 
    `, SpriteKind.Player)
tiles.placeOnRandomTile(sprPacMan, myTiles.tile1)
controller.moveSprite(sprPacMan, 100, 100)
createFood()
createEnemeis()
