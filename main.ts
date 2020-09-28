let sprPacMan = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . 5 5 5 5 5 5 5 5 . . . 
    . . . 5 5 5 e e 5 5 5 5 5 5 . . 
    . . 5 5 5 5 e e 5 5 5 5 5 5 5 . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . 5 5 5 5 5 5 5 5 5 5 5 . . . . 
    . 5 5 5 5 5 5 5 5 5 . . . . . . 
    . 5 5 5 5 5 5 5 . . . . . . . . 
    . 5 5 5 5 5 5 5 5 . . . . . . . 
    . 5 5 5 5 5 5 5 5 5 . . . . . . 
    . . 5 5 5 5 5 5 5 5 5 5 . . . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
    . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . . . . 5 5 5 5 5 5 5 5 . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.setTilemap(tiles.createTilemap(hex`0a00080001080808080808080802090b0b0b0a0b0b0d0b07090d0a0a0a0a0a0a0b07090b0a0b0b0b0c0b0b07090b0a0a0a0a0a0a0a07090b0b0a0b0b0a0b0b070306060606060606060405050505050505050505`, img`
    . . . . . . . . . . 
    . 2 2 2 . 2 2 . 2 . 
    . . . . . . . . 2 . 
    . 2 . 2 2 2 . 2 2 . 
    . 2 . . . . . . . . 
    . 2 2 . 2 2 . 2 2 . 
    . . . . . . . . . . 
    2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.castle.tilePath7,sprites.castle.tilePath9,sprites.castle.tileGrass1,sprites.castle.tilePath8,sprites.castle.tilePath6,sprites.castle.tilePath2,sprites.castle.tilePath4,sprites.castle.tilePath5,sprites.dungeon.floorLight0,myTiles.tile1,myTiles.tile2], TileScale.Sixteen))
tiles.placeOnRandomTile(sprPacMan, myTiles.tile1)
controller.moveSprite(sprPacMan, 100, 100)
