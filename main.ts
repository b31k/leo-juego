// Actualizar hacia dónde mira el personaje
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mirandoDerecha = true
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mirandoDerecha = false
})
// --- CONTROLES ---
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
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.setImage(assets.image`miImagen`)
        mySprite.vy = -250
    }
})
let projectile: Sprite = null
let atacando = false
let mySprite: Sprite = null
let mirandoDerecha = false
mirandoDerecha = true
// --- CONFIGURACIÓN INICIAL (on start) ---
scene.setBackgroundImage(img`
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
    `)
effects.none.startScreenEffect()
tiles.setCurrentTilemap(tilemap`nivel1`)
mySprite = sprites.create(assets.image`leo simple`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 500
scene.cameraFollowSprite(mySprite)
// Registrar animaciones de movimiento UNA SOLA VEZ al inicio
characterAnimations.loopFrames(
mySprite,
assets.animation`pixel leo dere`,
200,
characterAnimations.rule(Predicate.MovingRight)
)
characterAnimations.loopFrames(
mySprite,
assets.animation`pixel leo izq`,
200,
characterAnimations.rule(Predicate.MovingLeft)
)
characterAnimations.loopFrames(
mySprite,
[assets.image`leo simple`],
200,
characterAnimations.rule(Predicate.NotMoving)
)
