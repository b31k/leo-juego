scene.onOverlapTile(SpriteKind.Player, assets.tile`miMosaico1`, function (sprite, location) {
    Tiburon.follow(mySprite)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mirandoDerecha = true
    characterAnimations.loopFrames(
    mySprite,
    assets.animation`pixel leo dere`,
    200,
    characterAnimations.rule(Predicate.MovingRight)
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mirandoDerecha = false
    characterAnimations.loopFrames(
    mySprite,
    assets.animation`pixel leo izq`,
    200,
    characterAnimations.rule(Predicate.MovingLeft)
    )
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (atacando) {
        return
    }
    atacando = true
    characterAnimations.setCharacterAnimationsEnabled(mySprite, false)
    if (mirandoDerecha) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`ataque`,
        100,
        false
        )
        pause(400)
    } else {
        animation.runImageAnimation(
        mySprite,
        assets.animation`ataque izq`,
        100,
        false
        )
        pause(400)
    }
    characterAnimations.setCharacterAnimationsEnabled(mySprite, true)
    atacando = false
})
// Lanzar la daga hacia el lado correcto
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mirandoDerecha) {
        projectile = sprites.createProjectileFromSprite(assets.image`daga`, mySprite, 200, 0)
    } else {
        projectile = sprites.createProjectileFromSprite(assets.image`daga`, mySprite, -200, 0)
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (true) {
        if (mySprite.isHittingTile(CollisionDirection.Bottom) && info.life() > 0) {
            mySprite.setImage(assets.image`leo simple`)
            mySprite.vy = -250
        }
    }
})
info.onLifeZero(function () {
    sprites.destroy(Tiburon)
    controller.moveSprite(mySprite, 0, 0)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . f f f f f f f f f f . . . . 
        . . f e e 2 2 2 2 2 2 f f . . . 
        . f f e e 2 2 2 2 2 2 2 f f . . 
        . f e e 2 2 2 e e e e e e f f . 
        f f e e 2 2 2 2 2 2 2 2 2 2 2 . 
        . f f f f f f d f f f f f f . . 
        . f d f d f f d d f d d f f . . 
        . f d d 1 8 d d d 8 1 d d f . . 
        . f d d 1 8 d d d 8 1 d d f . . 
        . . f d d d d d d d d d f . . . 
        . . . f 6 6 4 4 4 6 6 f . . . . 
        . f d d d 7 7 7 7 7 d d d f . . 
        . f d e f 6 7 7 7 7 f e d f . . 
        . . f f f 6 7 7 7 7 f f f . . . 
        . . . f 8 c c c 8 c c f . . . . 
        . . . f a b b b a b b f . . . . 
        `,img`
        . . f f f f f f f f f f . . . . 
        . . f e e 2 2 2 2 2 2 f f . . . 
        . f f e e 2 2 2 2 2 2 2 f f . . 
        . f e e 2 2 2 e e e e e e f f . 
        f f e e 2 2 2 2 2 2 2 2 2 2 2 . 
        . f f f f 1 f d 1 f f f f f . . 
        . f d 1 d f f d d 1 d d f f . . 
        . f 1 d 1 8 d 1 d 8 1 d d f . . 
        . f 1 d 1 8 1 1 d 8 1 d d f . . 
        . . f d d d d 1 d d d d f . . . 
        . . . f 6 6 4 4 4 6 6 f . . . . 
        . f 1 d d 7 7 7 1 1 d d d f . . 
        . f 1 e f 6 7 7 7 1 f e 1 f . . 
        . . f f f 6 7 7 7 7 f f f . . . 
        . . . f 1 c c 1 8 1 c f . . . . 
        . . . f a b b 1 a b 1 f . . . . 
        `,img`
        . . f f f f f f f f f f . . . . 
        . . f e e 2 2 2 2 2 2 f f . . . 
        . f f e e 2 2 2 2 2 2 2 f f . . 
        . f e e 2 2 2 e e e e e e f f . 
        f f e e 2 2 2 2 2 2 2 2 2 2 2 . 
        . f f f f 1 1 d 1 f f 1 f f . . 
        . f d 1 d f f 1 d 1 1 d f f . . 
        . f 1 d 1 8 d 1 d 8 1 d 1 f . . 
        . f 1 d 1 8 1 1 1 8 1 d 1 f . . 
        . . f d d f f f f 1 1 d f . . . 
        . . . f 6 6 4 4 4 6 6 f . . . . 
        . f 1 1 1 7 7 1 1 1 1 1 1 f . . 
        . f 1 e f 6 1 7 7 1 f e 1 f . . 
        . . f f f 1 7 1 7 7 f f f . . . 
        . . . f 1 1 1 1 8 1 1 f . . . . 
        . . . f 1 b b 1 a b 1 f . . . . 
        `,img`
        . . f f f f f f f f f f . . . . 
        . . f e e 2 2 2 2 2 2 f f . . . 
        . f f e e 2 2 2 2 2 2 2 f f . . 
        . f e e 2 2 2 e e e e e e f f . 
        f f e e 2 2 2 2 2 2 2 2 2 2 2 . 
        . f f f f 1 1 1 1 f f 1 f f . . 
        . f 1 1 1 f f 1 d 1 1 1 f f . . 
        . f 1 d f f 1 1 d f f 1 1 f . . 
        . f 1 1 f 8 1 1 1 8 f 1 1 f . . 
        . . f 1 1 f f f f 1 1 d f . . . 
        . . . f 1 1 1 1 4 6 6 f . . . . 
        . f 1 1 1 1 7 1 1 1 1 1 1 f . . 
        . f 1 e f 6 1 7 1 1 f e 1 f . . 
        . . f f f 1 7 1 7 7 f f f . . . 
        . . . f 1 1 1 1 8 1 1 f . . . . 
        . . . f 1 b b 1 1 b 1 f . . . . 
        `,img`
        . . f f f f f f f f f f . . . . 
        . . f e e 2 2 2 2 2 2 f f . . . 
        . f f e e 2 2 2 2 2 2 2 f f . . 
        . f e e 2 2 2 e e e e e e f f . 
        f f e e 2 2 2 2 2 2 2 2 2 2 2 . 
        . f 1 1 1 1 1 1 1 1 1 1 f f . . 
        . f f 1 1 1 1 1 1 1 1 1 f f . . 
        . f 1 1 f f 1 1 1 f f 1 1 f . . 
        . f 1 1 f f 1 1 1 f f 1 1 f . . 
        . . f 1 1 1 1 1 1 1 1 1 f . . . 
        . . . f 1 f f f f f 1 f . . . . 
        . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
        . f 1 f f f f 1 f f f f 1 f . . 
        . . f f f 1 1 f 1 1 f f f . . . 
        . . . f 1 1 1 1 1 1 1 f . . . . 
        . . . f 1 f f 1 f f 1 f . . . . 
        `,img`
        . . f f f f f f f f f f . . . . 
        . . f e e 2 2 2 2 2 2 f f . . . 
        . f f e e 2 2 2 2 2 2 2 f f . . 
        . f e e 2 2 2 e e e e e e f f . 
        f f e e 2 2 2 2 2 2 2 2 2 2 2 . 
        . f 1 1 1 1 1 1 1 1 1 1 f f . . 
        . f f 1 1 1 1 1 1 1 1 1 f f . . 
        . f 1 1 f f 1 1 1 f f 1 1 f . . 
        . f 1 1 f f 1 1 1 f f 1 1 f . . 
        . . f 1 1 1 1 1 1 1 1 1 f . . . 
        . . . f 1 f f f f f 1 f . . . . 
        . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
        . f 1 f . . . 1 f f f f 1 f . . 
        . . f f f f f . 1 1 f f f . . . 
        . . f f 1 1 f . 1 1 1 f . . . . 
        . f 1 f 1 1 1 f f f 1 f . . . . 
        `,img`
        . . f f f f f f f f f f . . . . 
        . . f e e 2 2 2 2 2 2 f f . . . 
        . f f e e 2 2 2 2 2 2 2 f f . . 
        . f e e 2 2 2 e e e e e e f f . 
        f f e e 2 2 2 2 2 2 2 2 2 2 2 . 
        . f 1 1 1 1 1 1 1 1 1 1 f f . . 
        . f f 1 1 1 1 1 1 1 1 1 f f . . 
        . f 1 1 f f 1 1 1 f f 1 1 f . . 
        . f 1 1 f f 1 1 1 f f 1 1 f . . 
        . . f 1 1 1 1 1 1 1 1 1 f . . . 
        . . . f 1 f f f f f 1 f . . . . 
        . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
        . f 1 f . . . 1 . . . . 1 f . . 
        . . f f f f f . . f f f f . . . 
        . . f f 1 1 f . . 1 1 1 1 f . . 
        . f 1 f 1 1 1 f . f f 1 1 f . . 
        `,img`
        . . f f f f f f f f f f . . . . 
        . . f e e 2 2 2 2 2 2 f f . . . 
        . f f e e 2 2 2 2 2 2 2 f f . . 
        . f e e 2 2 2 e e e e e e f f . 
        f f e e 2 2 2 2 2 2 2 2 2 2 2 . 
        . f 1 1 1 1 1 1 1 1 1 1 f f . . 
        . f f 1 1 1 1 1 1 1 1 1 f f . . 
        . f 1 1 f f 1 1 1 f f 1 1 f . . 
        . f 1 1 f f 1 1 1 f f 1 1 f . . 
        . . f 1 1 1 1 1 1 1 1 1 f . . . 
        . . . f 1 f f f f f 1 f . . f . 
        . f 1 1 1 1 . 1 1 . . . . . 1 f 
        . f 1 f . . . 1 . . . . . . 1 f 
        . . f f f f f . . f f f f f 1 1 
        . . f f 1 1 f . . 1 1 1 1 f f 1 
        . f 1 f 1 1 1 f . f f 1 1 f . f 
        `,img`
        . . f f f f f f f f f f . . . . 
        . . f e e 2 2 2 2 2 2 f f . . . 
        . f f e e 2 2 2 2 2 2 2 f f . . 
        . f e e 2 2 2 e e e e e e f f . 
        f f e e 2 2 2 2 2 2 2 2 2 2 2 . 
        . f 1 1 1 1 1 1 1 1 1 1 f f . . 
        . f f 1 1 1 1 1 1 1 1 1 f f . . 
        . f 1 1 f f 1 1 1 f f 1 1 f . . 
        . f 1 1 f f 1 1 1 f f 1 1 f . . 
        . . f 1 1 1 1 1 1 1 1 1 f . . . 
        . . . f 1 f f f f f 1 f . . f . 
        f f . . . . . 1 1 . . . . . 1 f 
        1 1 . f . . . 1 . . . . . . 1 f 
        1 f f f f f f . . f f f f f 1 1 
        1 . f f 1 1 f . . 1 1 1 1 f f 1 
        f f 1 f 1 1 1 f . f f 1 1 f . f 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . f f f f f f f f f f . . . . 
        . . f e e 2 2 2 2 2 2 f f . . . 
        . f f e e 2 2 2 2 2 2 2 f f . . 
        . f e e 2 2 2 e e e e e e f f . 
        f f e e 2 2 2 2 2 2 2 2 2 2 2 . 
        . f 1 1 1 1 1 1 1 1 1 1 f f . . 
        . f f 1 1 1 1 1 1 1 1 1 f f . . 
        . f 1 1 f f 1 1 1 f f 1 1 f . . 
        . f 1 1 f f 1 1 1 f f 1 1 f . . 
        . . f 1 1 1 1 1 1 1 1 1 f . . . 
        f f . f 1 f f f f f 1 f . . f f 
        1 1 . f . . . 1 . . . . . . 1 f 
        1 f f f f f f . . f f f f f 1 1 
        1 . f f 1 1 f . . 1 1 1 1 f f 1 
        f f 1 f 1 1 1 f . f f 1 1 f . f 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . f f f f f f f f f f . . . . 
        . . f e e 2 2 2 2 2 2 f f . . . 
        . f f e e 2 2 2 2 2 2 2 f f . . 
        . f e e 2 2 2 e e e e e e f f . 
        f f e e 2 2 2 2 2 2 2 2 2 2 2 . 
        . f 1 1 1 1 1 1 1 1 1 1 f f . . 
        . f f 1 1 1 1 1 1 1 1 1 f f . . 
        f f 1 1 f f 1 1 1 f f 1 1 f 1 f 
        1 f 1 1 f f 1 1 1 f f 1 1 f 1 f 
        1 f f 1 1 1 1 1 1 1 1 1 f f 1 1 
        1 . f f 1 f f f f f 1 f 1 f f 1 
        f f 1 f 1 1 1 f . f f 1 1 f . f 
        `],
    500,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`transparency16`, function (sprite, location) {
    Tiburon.unfollow()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairSouth, function (sprite, location) {
    if (controller.up.isPressed()) {
        mySprite.setVelocity(0, -100)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(500)
})
let mirandoDerecha = true
let atacando = false
let projectile: Sprite = null
let Tiburon: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(img`
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666661ddd6666666666666666666666666666666666666666666
    666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666d111111111116666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666611111111111111166666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666dd1111111111111111111666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666d11111111111111111111111111666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666d11111111111111111111111111111116666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666d111111111111111111111111111111111111111111d6666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666111111111111111111111111111111111111111111111111111ddd666666666666666
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666666611111111111111111111111111111111111111111d1111111111111111dddddd66666dddd
    66666666666666666666666666666666666666666666666666666666666666666666666666666666666111111dddd11111111111111111111111111111111111111111111dd1111111ddddddddddddd1
    6666666666666666666666666666666666666666666666666666666666666666666666666666666dd111111ddd111111111111111111111111111d11111111dd111dd11111111111111111111dddd111
    666666666666666666666666666666666666666666666666666666666666666666666666111111111111111111111111111111111111111d111d1111ddddddddd111111111ddddd111ddddddddd11111
    66666666666666666666666666666666666666666666666666666666666666666666911111111111111d1111111111dddddd11111dddd1ddddddddddddddddddddd1111dd111111111ddddddd1111111
    666666611111d66666666666666666666666666666666666666666666d1111111111d111d11111111111111111111111dddd1111dddddddddddddddddddddddddd111111111111dddddddddd11111111
    66666111111111166666666666666666666666666666666dd1111dddd11111111111ddddd11111111111111111111111111111ddddddddddddddddddddddddddd111111dddddddddddddddd11111111b
    666111111111111111666666666666666666666dd111111d11111ddddddddddddddddddddddddddddddddddddd11111111111ddddddddddddddddddddddddddddd11ddddddddddddddddd11111bbbbbb
    1ddd1dd11111ddd1111111666666666dd11111111111111dddddddddddd11111111ddddddddddddddddddddddddddd1111111dddddddddddddddddddddddddddddddddddddddddddddd11111bbbbbbbb
    ddddddddd11dddddd11111111111dd1111111111dddddddddddddd1111111111111111ddddddddddddddddddddddddddd111111ddddddddddddddddddddddddddddddddddddddddddbbb1bbbbbbbbbbb
    dddddddddddddddddddddd1111111d1dddddddddddddddddd1111111111111111111111111dddddddddddddddddddddddddd11111111ddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbb
    111111ddddddddddddddddddddddddddddddddddddddb111111111111111111111111111111111dddddddddddddddddddddddddd111111dddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbb
    1111111111dddddddddddddddddddddddddddddddb111111111111111111111111111111111b1111ddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbb11b
    1111111111111dddddddddddddddddddddddddb1111111111111111111111bbb11111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbb1111111
    1111111bbb111111ddddddddddddddddddddbb1111111111111111bbbbbb111bb111111111111111111111bbbddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbb1111111111111
    bbbb111bbbbbb11111ddddddddddddddbbb11111111b111bbb11bbbbbbbbb1bbbbbbbbb1111bb1111b111111111bbddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbb111111111111111
    bbbbbbbbbbbbbbbb1111bddddddbbbbbbbb1111bbb111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1111b1111111bbbbbbbbdddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbb11111111111111111
    bbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbb11bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11bbbbbbbbbbbbbbbbbbbbbbdddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbc1111111111111111111
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc1111111111111111111c11
    bbbbbbbb1b11bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccc11111111111111111111111111
    bbbbb11111111111b11bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccc11111111111c11111111111111111111
    bbb11111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccc11111111111c11111c111111cc11c11111c
    bb1111111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbb111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111111ccccccccccc1111c111c11111111c1111cccc11cc11111c
    bb11111111111111111111111111bb1bbbbbbbbbbbbbbbcc1111111111111111111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111111111111ccccccccccccc11111111c111c1111cccc11cc111111c
    b11111c1111111111111111111111c1111111bbbc111111111111111111111cc111111cbbbbbbbbbbbbbbbbbbbbbbbbb111111111111111111cc1ccccccccc11111cccccc111111ccccc11ccc11111cc
    b1111ccc1111111111111111111111cc111111ccccccccc111111111111111ccccccc11111cbbbbbbbbbbbbbbbbbbbbc111111cc11111111ccccccccccccccc1cccccccc11c111ccccc111cc11111ccc
    1111dccc111111111111111111111111cccc11cccccccccc11111cccccccccccccccccc111111cccccbbbbbbcccccccccccccc111111ccccccccccccccccccccccccccc111111ccccccc1ccc11111ccc
    1cccc1111111111111111111c111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1111cccccccccccccccccccc
    cccc11111111111111111111111111111111ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1cccccccccccccccccccccc
    ccc111111111111111111111111111111c111ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    11c11111c11111c1c1111cc1111111c111c11111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    1111111ccc111cc1cc111cc111111111111cc111111ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    111c11ccc1111cc1cc11ccccc111ccc11111cccc1111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    11cccccccc11cc11cc11cccccc111ccccc11cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccc1ccc11ccccccc11cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccc1cccc1cccccccc11ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc6cccccccccccccccccccc
    cccccccccccccccccccccccccc66cccccccccccccccc6ccccccccccccccccccccccccccccccccccccccccccc666c6cccccccccccc66666ccccccccccccccccc6ccccccc6ccc66ccccc6ccccccccccccc
    6cc6c6666c6c6666c666cc66c666666666666666c666666cccc6666c66666666666666666666666cc6666666666666666666666666666666666666666666666666666cc666666666666666666666c666
    666666666666666666666666e6666666666666666666ee6666666666666666666666666666666666666666eeeee6ee66666666666eeeee66666e66e66ee6666666e666e66666666eeee6666e66666666
    6666e66e6e6ee666e66666666666666666ee6666666eee6666666eeee66eee66eee66666eee66eee666666ee66ee66eeeee76eeee6e66ee66666666eeee66e66666666e666666666eeeee6666ee66666
    666e666666666666666e666666666666668888888888888888888888888888888888888888888888888888888888888888886ee666e66ee66666666eee666eeee6eee66666666666ee6e666ee6666666
    6666666e66666eee66666666688888888888888888888888888888888888888888888888888888888888888888888888888888868888888888888888888888888888868888888e6666666666666e666e
    66666666666666e66666666e88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888866666e666666666e
    66666666666666666ee66668888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886666e66666e66e
    66666666666e6666666666e8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888e66666e666666
    6666e66ee666666ee6e88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888866666666e666
    666666666666ee8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888868888666666e
    66e6666666e88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666666
    6e6666e668888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888866666
    6e666e668888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888866e
    66666e8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666
    6666688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666
    6666688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666
    66e6888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666
    ee66888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888e66
    666e888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666
    66666888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888668e66ee
    ee66888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888866666e66
    e6666888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666ee666
    e666866888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888688888886886666666666
    666e66688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888868888886667666666e666
    6666668868886888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666866e666666eee66666
    66e666e666886888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666666666ee666e666666666
    66e6666666866888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886666666666666666666666666
    6666666666e66688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886866eee666666e66666666666666
    e66666e66666668888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888686e666e6666e666e66666666666
    ee66666666666688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888866666666ee666e666e66666666666
    666666666666666688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886686ee666e6666e666e6666e6e66e
    6666666666e66666888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886666e666eee6666666e6e6666666
    6666666666e6666888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886e66666eee66ee6666666e6666666
    e66e66666e66688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666666666eee6666eee666666
    e66666e6666668888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888e66666666ee666ee6666
    66666e666688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666666e666666666
    666e66688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888e66666e
    e6e6668888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888666
    6666688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886
    6888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    ee88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    `)
effects.none.startScreenEffect()
tiles.setCurrentTilemap(tilemap`nivel1`)
mySprite = sprites.create(assets.image`leo simple`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 500
scene.cameraFollowSprite(mySprite)
info.setLife(3)
Tiburon = sprites.create(img`
    .............ccfff..............
    ...........ccddbcf..............
    ..........ccddbbf...............
    ..........fccbbcf...............
    .....fffffccccccff.........ccc..
    ...ffbbbbbbbcbbbbcfff....ccbbc..
    ..fbbbbbbbbcbcbbbbcccff.cdbbc...
    ffbbbbbbffbbcbcbbbcccccfcdbbf...
    fbcbbb11ff1bcbbbbbcccccffbbf....
    fbbb11111111bbbbbcccccccbbcf....
    .fb11133cc11bbbbcccccccccccf....
    ..fccc31c111bbbcccccbdbffbbcf...
    ...fc13c111cbbbfcddddcc..fbbf...
    ....fccc111fbdbbccdcc.....fbbf..
    ........ccccfcdbbcc........fff..
    .............fffff..............
    `, SpriteKind.Enemy)
Tiburon.setPosition(380, 370)
forever(function () {
    characterAnimations.loopFrames(
    Tiburon,
    [img`
        ................................
        ................................
        ................................
        .............fffff..............
        ...........ff7768f..............
        ..........ff7766f...............
        ..........fff66ff...............
        .....fffffffffffff.........fff..
        ...ff6666666f66668fff....ff66f..
        ..f666666668686666888ff.f766f...
        ff666666f56686866688888f8766f...
        f6c66611f516866666888888866f....
        f66611111111666668888888668f....
        .f6ffffff811666688888888888f....
        ..fc1c131f1166688888676ff668f...
        ....c131f118666887777ff..f66f...
        ....ffff111f6766887ff.....f66f..
        ........8888f8766ff........fff..
        .............fffff..............
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        `,img`
        ................................
        ................................
        .............88fff..............
        ...........887768f..............
        ..........887766f...............
        ..........f88668f...............
        .....fffff888888ff.........fff..
        ...ff6666666866668fff....ff66f..
        ..f666666668686666888ff.f766f...
        ff666666f56686866688888ff766f...
        f6f66611f51686666688888ff66f....
        f66611111111666668888888668f....
        .f611111111f666688888888888f....
        ..f111fff1f166688888676ff66ff...
        ...fff1f1ff8666f87777ff..f66f...
        ....ff11111f6766887ff.....f66f..
        ......fffffff876688........fff..
        .............fffff..............
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        `,img`
        ................................
        ................................
        ................................
        .............88fff..............
        ...........887768f..............
        ..........887766f...............
        ..........f88668f...............
        .....fffff888888ff.........fff..
        ...ff6666666866668fff....ff66f..
        ..f666666668686666888ff.f766f...
        ff666666f56686866688888ff766f...
        f6866611f51686666688888ff66f....
        f66611111111666668888888668f....
        .fffffffff11666688888888888f....
        ..131311f11166688888676ff668f...
        ...1317f1118666f87777ff..f66f...
        ....6f7f111f6766887ff.....f66f..
        ........fffff876688........fff..
        .............fffff..............
        ................................
        ................................
        ................................
        ................................
        ................................
        ................................
        `,img`
        ................................
        ................................
        ................................
        ................................
        .............fffff..............
        ...........887768f..............
        ..........887766f...............
        ..........f88668f...............
        .....fffff888888ff.........fff..
        ...ff6666666866668fff....ff66f..
        ..f666666668686666888ff.f766f...
        ff666666556686866688888ff766f...
        f6866611f51686666688888ff66f....
        f66611111111666668888888668f....
        .f61111f1f11666688888888888f....
        ..fffff1f11166688888776ff668f...
        ...f111f1118666f87777ff..f66f...
        ....ffff111f6766887ff.....f66f..
        ........fffff876688........fff..
        .............fffff..............
        ................................
        ................................
        ................................
        ................................
        ................................
        `],
    500,
    characterAnimations.rule(Predicate.NotMoving)
    )
    characterAnimations.loopFrames(
    Tiburon,
    [img`
        .............ccfff..............
        ...........ccddbcf..............
        ..........ccddbbf...............
        ..........fccbbcf...............
        .....fffffccccccff.........ccc..
        ...ffbbbbbbbcbbbbcfff....ccbbc..
        ..fbbbbbbbbcbcbbbbcccff.cdbbc...
        ffbbbbbbffbbcbcbbbcccccfcdbbf...
        fbcbbb11ff1bcbbbbbcccccffbbf....
        fbbb11111111bbbbbcccccccbbcf....
        .fb11133cc11bbbbcccccccccccf....
        ..fccc31c111bbbcccccbdbffbbcf...
        ...fc13c111cbbbfcddddcc..fbbf...
        ....fccc111fbdbbccdcc.....fbbf..
        ........ccccfcdbbcc........fff..
        .............fffff..............
        `,img`
        .............ccfff..............
        ............cddbbf..............
        ...........cddbbf...............
        ..........fccbbcf............ccc
        ....ffffffccccccff.........ccbbc
        ..ffbbbbbbbbbbbbbcfff.....cdbbc.
        ffbbbbbbbbbcbcbbbbcccff..cddbbf.
        fbcbbbbbffbbcbcbbbcccccfffdbbf..
        fbbb1111ff1bcbcbbbcccccccbbbcf..
        .fb11111111bbbbbbcccccccccbccf..
        ..fccc33cc11bbbbccccccccfffbbcf.
        ...fc131c111bbbcccccbdbc...fbbf.
        ....f33c111cbbbfdddddcc.....fbbf
        .....ff1111fbdbbfddcc........fff
        .......cccccfbdbbfc.............
        .............fffff..............
        `,img`
        ..............cfff..............
        ............ccddbf..............
        ...........cbddbff.........ccc..
        ..........fccbbcf.........cbbc..
        ...fffffffccccccff.......cdbc...
        .ffcbbbbbbbbbbbbbcfff....cdbf...
        fcbbbbbbbbbcbbbbbbcccff.cdbf....
        fbcbbbbffbbbcbcbbbcccccffdcf....
        fbb1111ffbbbcbcbbbccccccbbcf....
        .fb11111111bbcbbbccccccccbbcf...
        ..fccc33cb11bbbbcccccccfffbbf...
        ...fc131c111bbbcccccbdbc..fbbf..
        ....f33c111cbbccdddddbc....fff..
        .....ff1111fdbbccddbcc..........
        .......cccccfdbbbfcc............
        .............fffff..............
        `,img`
        .............ccfff..............
        ............cddbbf..............
        ...........cddbbf...............
        ..........fccbbcf............ccc
        ....ffffffccccccff.........ccbbc
        ..ffbbbbbbbbbbbbbcfff.....cdbbc.
        ffbbbbbbbbbcbcbbbbcccff..cddbbf.
        fbcbbbbbffbbcbcbbbcccccfffdbbf..
        fbbb1111ff1bcbcbbbcccccccbbbcf..
        .fb11111111bbbbbbcccccccccbccf..
        ..fccc33cc11bbbbccccccccfffbbcf.
        ...fc131c111bbbcccccbdbc...fbbf.
        ....f33c111cbbbfdddddcc.....fbbf
        .....ff1111fbdbbfddcc........fff
        .......cccccfbdbbfc.............
        .............fffff..............
        `],
    500,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    Tiburon,
    [img`
        ..............fffcc.............
        ..............fcbddcc...........
        ...............fbbddcc..........
        ...............fcbbccf..........
        ..ccc.........ffccccccfffff.....
        ..cbbcc....fffcbbbbcbbbbbbbff...
        ...cbbdc.ffcccbbbbcbcbbbbbbbbf..
        ...fbbdcfcccccbbbcbcbbffbbbbbbff
        ....fbbffcccccbbbbbcb1ff11bbbcbf
        ....fcbbcccccccbbbbb11111111bbbf
        ....fcccccccccccbbbb11cc33111bf.
        ...fcbbffbdbcccccbbb111c13cccf..
        ...fbbf..ccddddcfbbbc111c31cf...
        ..fbbf.....ccdccbbdbf111cccf....
        ..fff........ccbbdcfcccc........
        ..............fffff.............
        `,img`
        ..............fffcc.............
        ..............fbbddc............
        ...............fbbddc...........
        ccc............fcbbccf..........
        cbbcc.........ffccccccffffff....
        .cbbdc.....fffcbbbbbbbbbbbbbff..
        .fbbddc..ffcccbbbbcbcbbbbbbbbbff
        ..fbbdfffcccccbbbcbcbbffbbbbbcbf
        ..fcbbbcccccccbbbcbcb1ff1111bbbf
        ..fccbcccccccccbbbbbb11111111bf.
        .fcbbfffccccccccbbbb11cc33cccf..
        .fbbf...cbdbcccccbbb111c131cf...
        fbbf.....ccdddddfbbbc111c33f....
        fff........ccddfbbdbf1111ff.....
        .............cfbbdbfccccc.......
        ..............fffff.............
        `,img`
        ..............fffc..............
        ..............fbddcc............
        ..ccc.........ffbddbc...........
        ..cbbc.........fcbbccf..........
        ...cbdc.......ffccccccfffffff...
        ...fbdc....fffcbbbbbbbbbbbbbcff.
        ....fbdc.ffcccbbbbbbcbbbbbbbbbcf
        ....fcdffcccccbbbcbcbbbffbbbbcbf
        ....fcbbccccccbbbcbcbbbff1111bbf
        ...fcbbccccccccbbbcbb11111111bf.
        ...fbbfffcccccccbbbb11bc33cccf..
        ..fbbf..cbdbcccccbbb111c131cf...
        ..fff....cbdddddccbbc111c33f....
        ..........ccbddccbbdf1111ff.....
        ............ccfbbbdfccccc.......
        ..............fffff.............
        `,img`
        ..............fffcc.............
        ..............fbbddc............
        ...............fbbddc...........
        ccc............fcbbccf..........
        cbbcc.........ffccccccffffff....
        .cbbdc.....fffcbbbbbbbbbbbbbff..
        .fbbddc..ffcccbbbbcbcbbbbbbbbbff
        ..fbbdfffcccccbbbcbcbbffbbbbbcbf
        ..fcbbbcccccccbbbcbcb1ff1111bbbf
        ..fccbcccccccccbbbbbb11111111bf.
        .fcbbfffccccccccbbbb11cc33cccf..
        .fbbf...cbdbcccccbbb111c131cf...
        fbbf.....ccdddddfbbbc111c33f....
        fff........ccddfbbdbf1111ff.....
        .............cfbbdbfccccc.......
        ..............fffff.............
        `],
    500,
    characterAnimations.rule(Predicate.MovingRight)
    )
})
forever(function () {
    if (info.life() > 0) {
        if (!(controller.anyButton.isPressed()) && mySprite.isHittingTile(CollisionDirection.Bottom)) {
            mySprite.setImage(assets.image`leo simple`)
        }
    }
})
