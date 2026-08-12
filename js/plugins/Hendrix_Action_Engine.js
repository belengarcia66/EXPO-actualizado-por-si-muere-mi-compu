/*:
 * @target MZ
 * @plugindesc v1.6.5 Create quality action games with upgraded eventing system
 * @author Sang Hendrix
 * @url https://sanghendrix.itch.io
 * 
 * @help
 * Version 1.6.5
 * ----------------------------------------------------------------------------
 * This RPG Maker MZ plugin lets you create real-time action games like
 * ARPGs, top-down shooters, beat 'em ups, and more. Designed for ease of use,
 * it builds on RPG Maker’s built-in eventing system, so the better you are with
 * RPG Maker, the better the games you'll be able to create with this plugin.
 * ----------------------------------------------------------------------------
 * HOW TO USE
 * ■ Text Tutorials & Manual: https://rpgmakeractioncombat.com
 * ■ Video Trailer: https://www.youtube.com/watch?v=zcXZNgt3V50
 * ■ Video Tutorials: https://www.youtube.com/watch?v=pF6q9zI3EQg&list=PL785kvkmLIUh4oP32GWsuLHOl-v7w1gjb
 * 
 * ■ All expansion and add-on (not required, but good to have and fun to play with) 
 * https://itch.io/c/5532775/rpg-maker-action-combat-mz-active-battle-system
 * 
 * You still need to learn how to use RPG Maker, especially eventing in order
 * to maximize the potential of this plugin.
 * 
 * Some common keyword in plugin commands:
 * this - The current event / The event calling this plugin command. Similar to this._eventId
 * player - Party leader
 * <notetag> - An event with this notetag
 * Event name / id - An event name or its id
 * ----------------------------------------------------------------------------
 * HOW TO INSTALL
 * 1. Copy all plugins from RPG Maker Action Combat folder
 * 2. Paste them to your project's plugins folder
 * 3. Enable them in your plugin list. Enabling only Hendrix Action Engine
 * and Dot Move System is enough. The other plugins are optional unless
 * you want more feature.
 * 4. The order for all plugins:
 * Dot Move > Hendrix Animation Solution > Hendrix Keyboard Gamepad
 * > Hendrix Action Engine > Hendrix Hotbar Creator 
 * ----------------------------------------------------------------------------
 * TERMS OF USE
 * Please refer to this link for full terms of use:
 * https://www.sanghendrix.com/p/terms-of-service-license.html
 * ----------------------------------------------------------------------------
 * For support, please reach out:
 * Discord: https://discord.gg/YKPscqHV8b (prefered)
 * Patreon: https://www.patreon.com/SangHendrix
 * X: https://x.com/sanghendrix96
 * ----------------------------------------------------------------------------
 * @param axc34234234
 * @text --------------------------
 * @default --------------------------
 * 
 * @param gameGenre
 * @text Game Type
 * @desc Top-Down: Default RPG Maker | Beat 'em up: Limit to only Left & Right direction
 * @type select
 * @option Top-Down
 * @value topdown
 * @option Beat 'em up
 * @value beatup
 * @default topdown
 * 
 * @param Input Support
 * @text Input Support
 * @type select
 * @option Mouse + Keyboard
 * @value mouse_keyboard
 * @option Gamepad Only
 * @value gamepad_only
 * @option Mouse Only
 * @value mouse_only
 * @option All
 * @value all
 * @desc Restricts which input methods are accepted by the game.
 * @default all
 * 
 * @param axc
 * @text --------------------------
 * @default --------------------------
 * 
 * @param deszco1
 * @text ■ DEBUG
 * 
 * @param avd4
 * @text --------------------------
 * @default --------------------------
 * 
 * @param Debug Toggle Button
 * @text Debug Hitbox Button
 * @desc Button to toggle debug hitbox mode, displaying hitbox and checkRange area
 * @type string
 * @default 9
 * 
 * @param Debug Collision Button
 * @text Debug Collision Button
 * @desc Button to show real collision (like the area that block you)
 * @type string
 * @default 0
 * 
 * @param axcxcxc
 * @text --------------------------
 * @default --------------------------
 * 
 * @param deszco1s
 * @text ■ SPAWN EVENTS
 * 
 * @param axcxcxcx
 * @text --------------------------
 * @default --------------------------
 * 
 * @param templateMapId
 * @text Template Map ID
 * @desc The map ID containing your template events
 * @type number
 * @default 0
 * 
 * @param Events To Spawn
 * @text Spawn Events at Start
 * @desc Spawn event with this Id/Name when you enter a map
 * @type string
 * @default 
 * 
 * @param Spawn Actors at Start
 * @text Spawn Actor Events
 * @desc Spawn events that share the same name with any actor in party. Good to make followers system
 * @type boolean
 * @default false
 * 
 * @param axcx
 * @text --------------------------
 * @default --------------------------
 * 
 * @param deszco1x
 * @text ■ Passive Common Event
 * 
 * @param avdx
 * @text --------------------------
 * @default --------------------------
 * 
 * @param NpcTags
 * @text Events Notetags
 * @type struct<NpcTag>[]
 * @desc Any event with this tag will always run these common event in parallel
 *
 * @param LimitAreaOfCalling
 * @text Disable Offscreen
 * @type boolean
 * @desc Only run common events if the events are inside game viewport
 * @default false
 * 
 * @param a
 * @text --------------------------
 * @default --------------------------
 * 
 * @param desco1
 * @text ■ ENEMY HP BAR SETUP
 * 
 * @param aa
 * @text --------------------------
 * @default --------------------------
 * 
 * @param barSize 
 * @text Bar Size
 * @desc Format: width, height
 * @default 100, 6
 * 
 * @param borderImage
 * @text Border Image
 * @type file
 * @dir img/system/
 * @desc The border image to be used for the HP bar
 * @default
 * 
 * @param showRadius
 * @text Show Radius
 * @type number
 * @desc When player comes to this radius of enemy event (tile unit), display its HP bar. 0 to not display HP bars.
 * @default 7
 * 
 * @param axczr
 * @text --------------------------
 * @default --------------------------
 * 
 * @param desco1er
 * @text ■ HUD SETUP
 * 
 * @param aaww
 * @text --------------------------
 * @default --------------------------
 * 
 * @param HUDs
 * @text HUD Elements
 * @type struct<HUD>[]
 * @desc List of HUD elements to be displayed on the screen
 * @default []
 * 
 * @param smartHUDVisibility
 * @text Smart HUD Visibility
 * @type boolean
 * @desc HUD elements to fade out when player character is behind them
 * @default true
 * 
 * @param hideHUDDuringMessages
 * @text Hide during Messages
 * @type boolean
 * @desc Hide all HUD elements when message windows are displayed
 * @default false
 * 
 * @param customFontFile
 * @text Custom Font File
 * @type string
 * @desc Custom font for HUD's text elements, e.g. haha.ttf
 * @default 
 * 
 * @param aaa
 * @text --------------------------
 * @default --------------------------
 * 
 * @param desco3z
 * @text ■ DAMAGE TEXT SETUP
 * 
 * @param aaaa
 * @text --------------------------
 * @default --------------------------
 * 
 * @param addValue
 * @text Add Value
 * @type boolean
 * @desc True: 1 dmg -> 3 dmg = Display 4. False: 1 dmg -> 3 dmg = Display 1 and then 3
 * @default false
 * 

 * @param damageTextSettings
 * @text Damage Text Settings
 * @type struct<DamageTextSettings>
 * @desc General font settings for damage text
 * @default
 * 
 * @param aaaazfrt
 * @text --------------------------
 * @default --------------------------
 * 
 * @param desco3zxctrwe
 * @text ■ COMBAT SETTINGS
 * 
 * @param aaaazxce353
 * @text --------------------------
 * @default --------------------------
 * 
 * @param critDmgMultiplier
 * @text Critical Damage Multiplier
 * @type number
 * @decimals 2
 * @min 0
 * @desc Multiplier for critical hit damage
 * @default 3.0
 * 
 * @param Gain XP when enemy defeated
 * @text Gain EXP from Enemy
 * @type boolean
 * @desc Enemies from database when defeated will grant EXP to whole party
 * @default true
 * 
 * @param Gain Gold when enemy defeated
 * @text Gain Gold from Enemy
 * @type boolean
 * @desc Enemies from database when defeated will grant GOLD to whole party
 * @default true
 * 
 * @param missSfxSettings
 * @text Miss Sound Effect
 * @type struct<MissSfxSettings>
 * @desc Settings for the miss sound effect
 * @default {"filename":"","volume":"80","pitch":"100"}
 * 
 * @param aaaazfrtvvvc
 * @text --------------------------
 * @default --------------------------
 * 
 * @param desco3zxctrwexcvd
 * @text ■ ENEMY DROP ITEMS
 * 
 * @param aaaazxce353fsdgsdh
 * @text --------------------------
 * @default --------------------------
 * 
 * @param Enemy Drop Items
 * @text Enemy Drop Items
 * @type boolean
 * @desc Enemies drop items from database by spawning an event from template map with the same name as the drop
 * @default true
 * 
 * @param Drop Item Style
 * @text Drop Item Style
 * @type select
 * @option Icon Drop (Easy but no customization)
 * @value icon
 * @option Event from Template Map
 * @value template
 * @option Both (Icon + Item Template commands)
 * @value both
 * @desc Icon Drop (auto-generates)| Template Map (spawn events with same name)| Both (runs commands from event named "Item Template")
 * @default icon
 * 
 * @param pickupSFX
 * @text Item Pickup SFX
 * @type struct<PickupSFX>
 * @desc Sound effect settings for picking up dropped items
 * @default {"sfxFile":"Item1","volume":"90","pitch":"100"}
 * 
 * @param aaaaz
 * @text --------------------------
 * @default --------------------------
 * 
 * @param desco3zxc
 * @text ■ PLAYER SETTINGS
 * 
 * @param aaaazxc
 * @text --------------------------
 * @default --------------------------
 * 
 * @param Player Hitbox
 * @text Player Hitbox Settings
 * @desc Format: width, height, offsetX, offsetY (in tiles for width/height, pixels for offsets)
 * @type string
 * @default 1, 1, 0, 0
 * 
 * @param playerCollisionRect
 * @text Player Collision Rect
 * @desc Set player collision area: width, height, offset x, offset y. Tiles unit (support decimal). Centered by default
 * @type string
 * @default 1, 1, 0, 0
 * 
 * @param Player Graphical Offset
 * @text Player Graphical Offset
 * @desc Format: offsetX, offsetY (in pixels). Adjust the player's graphic position for sprite
 * @type string
 * @default 0, 0
 * 
 * @param dashSpeedMultiplier
 * @text Player Run Speed
 * @desc The multiplier to apply to movement speed when dashing (holding Shift)
 * @default 2.0
 * @type number
 * @decimals 1
 * @min 0
 * 
 * @param Auto Game Over
 * @text Disable Auto Game Over
 * @type boolean
 * @desc Game won't end when party leader HP reaches 0. Setup your own game over mechanic with condition HP('player') <= 0
 * @default false
 * 
 * @param 468erhshdgfwd
 * @text --------------------------
 * @default --------------------------
 *
 * @param ItemGainNotificationzc
 * @text ■ ITEM GAIN NOTIFICATION
 * 
 * @param 468erhshdgfwdzxc
 * @text --------------------------
 * @default --------------------------
 * 
 * @param Enable Item Gain Notification
 * @text Enable
 * @type boolean
 * @default true
 * 
 * @param Show Quantity
 * @text Show Quantity
 * @type boolean
 * @default true
 * 
 * @param Display Duration
 * @text Display Duration
 * @type number
 * @default 120
 * 
 * @param Visual Setting
 * @text Visual Setting
 * @type struct<ItemGainVisualSettings>
 * @default {"Alignment":"center","Transparent Window":"true","aawwcczxczxc":"--------------------------","Display Above Player":"true","Above Player Vertical Offset":"-25","aawwcczxczxcvxv":"--------------------------","Position":"center, 0","Padding":"10","aawwcczxczxcvxvccc":"--------------------------","Weapon Text Color":"#FFFFFF","Armor Text Color":"#FFFFFF","Gold Text Color":"#FFFFFF","Item Text Color":"#FFFFFF"}
 * 
 * @param Sound Settings
 * @text Sound Settings
 * @type struct<ItemGainSoundSettings>
 * @default {"Weapon SFX":"Equip1","Armor SFX":"Equip2","Gold SFX":"Coin","Item SFX":"Cursor1","General SFX Volume Pitch":"100, 100"}
 * 
 * @param aaaaazxcxcxczxcxcs
 * @text --------------------------
 * @default --------------------------
 * 
 * @param desco3zxcxczsdffdfdwe
 * @text ■ BLOCK
 * 
 * @param aaaazxcxsdasdczxx
 * @text --------------------------
 * @default --------------------------
 * 
 * @param Block Region ID
 * @text Block Region ID
 * @desc Region ID that both players and events cannot pass through, even with Through ON
 * @type number
 * @default 0
 * 
 * @param Allow Region ID
 * @text Allow Region ID
 * @desc Player and Events can pass through this Region ID in all circumstances
 * @type number
 * @min 0
 * @max 255
 * @default 250
 * 
 * @param Building & Wall Block
 * @text Building & Wall Block
 * @desc Blocks characters (even with Through ON) from passing through tile A3 A4 (wall and building)
 * @type boolean
 * @default false
 * 
 * @param blockTarget
 * @text Block Target
 * @desc Only block these Through ON target from Block Region ID and Building & Wall
 * @type select
 * @option Both Player and Events
 * @value both
 * @option Only Player
 * @value player
 * @option Only Events
 * @value events
 * @default both
 * 
 * @param aaaaazxcxcxczxcxcs34
 * @text --------------------------
 * @default --------------------------
 * 
 * @param desco3zxcxczsdffdfdwex1
 * @text ■ TILESET PASSAGE
 * 
 * @param aaaazxcxsdasdczxx234
 * @text --------------------------
 * @default --------------------------
 * 
 * @param passageType
 * @text Passage Type
 * @type select
 * @option Default RPG Maker
 * @value default
 * @option RPG Maker Action Combat
 * @value action
 * @desc Choose collision system: Default uses original RPG Maker collision, Action Combat adds custom collision features
 * @default default
 * 
 * @param passableSwitch
 * @text <Pass> feature
 * @type switch
 * @desc If empty or 0 then <pass> feature always enabled. Otherwise, it'll only enabled when this switch is ON
 * @default 0
 * 
 * @param aaaazfrt33
 * @text --------------------------
 * @default --------------------------
 * 
 * @param desco3zxctrwe234
 * @text ■ MENU MODIFICATION
 * 
 * @param aaaazxce353zxc
 * @text --------------------------
 * @default --------------------------
 * 
 * @param Disable Right Click Menu
 * @text Right Click open Menu
 * @type boolean
 * @desc Prevents opening menu with right click
 * @default false
 * 
 * @param SoloPlayerMenu
 * @text Solo Player Menu
 * @type boolean
 * @desc Disables party member selection when using items or skills
 * @default true
 * 
 * @param RemoveFormation
 * @text Remove Formation
 * @type boolean
 * @default true
 * @desc Remove Formation command from menu
 * 
 * @param aaaaazxcxcxcs234
 * @text --------------------------
 * @default --------------------------
 * 
 * @param desco3zxcxczsdwe
 * @text ■ OTHER HELPFUL FEATURES
 * 
 * @param aaaazxcxczxx
 * @text --------------------------
 * @default --------------------------
 * 
 * @param Easy Conditional Branch
 * @text Easy Conditional Branch
 * @type boolean
 * @desc Instead of writing this._eventId, 'player', '<notetag>', you can write as: this, player, <notetag> in condition
 * @default true
 * 
 * @param Move via Cursor
 * @text Move via Cursor Click
 * @type boolean
 * @desc Move player when click/touch on map
 * @default false
 * 
 * @param eventSliding
 * @text Event Sliding
 * @type boolean
 * @desc Events slide when moving toward an obstacles. Put comment <no sliding> in an event to force sliding off
 * @default true
 * 
 * @param Clickable Outline Settings
 * @text <clickable> Outline
 * @type struct<ClickableOutlineSettings>
 * @desc Configuration for the clickable outline effect.
 * @default {"Color":"#FFFFFF","Thickness":"2","Opacity":"255"}
 * 
 * @command ----s
 * @text ■ SPAWN EVENTS -----------------
 * 
 * @command spawnEvent
 * @text Spawn Event
 * @desc Spawn an event from template map (assign template map ID in plugin parameter)
 * 
 * @arg eventId
 * @text Event ID/Name
 * @desc ID / Name of the event from template map | Support Expression
 * @type string
 * @default
 * 
 * @arg position
 * @text Position (X, Y)
 * @desc this| player| this/player front| region x| cursor| random(A:B)| <notetag> near: this/player/eventId| this/player locked target
 * @type string
 * @default this
 * 
 * @arg startDegree
 * @text Rotation Degree
 * @desc 0-360 | this/player | mouse or gamepad | mouse or gamepad +/- X | <notetag>: Point to event with this notetag
 * @type string
 * @default
 * 
 * @arg turnToward
 * @text Turn Toward
 * @desc Support: same as player/this/event name/<notetag>| 1-8| event name| <notetag>| player| this
 * @type string
 * @default
 * 
 * @arg notSpawnOn
 * @text Not Spawn On
 * @desc Support: impassable A3 A4 B C (etc) (tileset), impassable events (events that block movement)
 * @type string
 * @default
 * 
 * @arg attachTo
 * @text Attach To
 * @desc Attach this spawned event to a target. Support: this (the event calling this spawn command), player, none
 * @type select
 * @option none
 * @option this
 * @option player
 * @default none
 * 
 * @arg gridBased
 * @text Grid-Based
 * @desc Spawn Grid-Based instead of Pixel-Based. Pixel-Based is more accurate
 * @type boolean
 * @default false
 * 
 * @arg permanent
 * @text Permanent Event
 * @desc The event will persist after map transfer
 * @type boolean
 * @default false
 * 
 * @command DestroyEvent
 * @text Destroy Event
 * @desc Destroys any event (spawned from template map or regular RPG Maker)
 *
 * @arg target
 * @text Event Target
 * @desc Support: this, ID, name, <notetag>
 * @type string
 * @default this
 * 
 * @arg destroyNearby
 * @text Destroy Nearby Events
 * @desc Destroys nearest event with this name/<notetag> near Event Target. Leave empty to destroy Event Target itself
 * @type string
 * @default
 *
 * @arg permanent
 * @text Destroy Permanently
 * @desc For regular RPG Maker events only: remain deleted when returning to map
 * @type boolean
 * @default true
 * 
 * @command spawnEventHitbox
 * @text Create Dynamic Event
 * @desc Basically creating an almost regular event out of nowhere. Use it creatively
 * 
 * @arg name
 * @text Name
 * @desc Name of the event. Defaults to "DynamicHitbox" if left empty
 * @type string
 * @default
 * 
 * @arg notetag
 * @text Notetag
 * @desc Notetag to add to the event (e.g. <enemyHitbox> <stuff <etc>)
 * @type string
 * @default
 * 
 * @arg comment
 * @text Comments
 * @desc Add comments to the event (e.g. <water>)
 * @type string
 * @default
 * 
 * @arg position
 * @text Position (X, Y)
 * @desc Support: this| player| this/player front| random(A:B)| <notetag> near: this/player/eventId| this/player locked target
 * @type string
 * @default this
 * 
 * @arg rotationDegree
 * @text Rotation Degree
 * @desc 0-360 | this/player | mouse or gamepad | mouse or gamepad +/- X | <notetag>: Point to nearest event with this notetag
 * @type string
 * @default
 * 
 * @arg turnToward
 * @text Turn Toward
 * @desc Support: same as player/this/event name/<notetag>| 1-8| event name| <notetag>| player| this
 * @type string
 * @default
 * 
 * @arg attachTo
 * @text Attach To
 * @desc Attach this dynamic event to a target. Support: this (the event calling this command), player, <notetag>
 * @type string
 * @default
 * 
 * @arg wait
 * @text Destroy After
 * @desc Number of frames to wait before destroying this event. Empty = lives forever
 * @type number
 * @default
 * 
 * @command DestroyDynamicEvent
 * @text Destroy Dynamic Event
 * @desc Destroys all dynamic events (created by Create Dynamic Event) with the specified notetag
 * 
 * @arg notetag
 * @text Notetag to Match
 * @desc <notetag> -> Destroy all events with this notetag | <notetag> near: this/player/eventId -> Only events near X
 * @type string
 * @default
 * 
 * @command aa
 * @text ---------------------------------
 * 
 * @command ---
 * @text ■ ENEMY & PLAYER HP BAR
 * 
 * @command aaa
 * @text ---------------------------------
 * 
 * @command UpdateEventHp
 * @text Increase / Decrease Character HP
 * @desc Change the HP of a character
 *
 * @arg eventId
 * @type string
 * @text Target
 * @desc Support: this | player | eventId | all: All events with hp bar
 * @default this
 *
 * @arg value
 * @type string
 * @text HP Change
 * @desc +- numbers, $gameVariables.value(x), damage (read value from notetag <dmg: x>), player weapon, player 2nd weapon
 * 
 * @arg exceedMaxHealth
 * @text Exceed Max Health
 * @type boolean
 * @desc Allow HP to exceed the initial maximum HP when gaining health
 * @default false
 * 
 * @command EventHPBarVisibility
 * @text HP Bar Visibility
 * @desc Show or hide HP bar of a specific event
 *
 * @arg Status
 * @type boolean
 * @text Show HP Bar
 * @desc Show or hide the HP bar
 * @default true
 * 
 * @arg Target
 * @type text
 * @text Target Event ID
 * @desc The event ID to affect. Use 'this' for current event
 * @default this
 * 
 * @command RemoveEventHpBar
 * @text Remove Event HP Bar
 * @desc Remove the HP bar of the specified event.
 * 
 * @arg eventId
 * @type string
 * @text Event ID
 * @desc this: Current event
 * @default this
 * 
 * @command setCollisionStatus
 * @text Collision Status
 * @desc Enable or disable collision checks for this event (result of conditional branch 'checkCollide')
 * 
 * @arg enabled
 * @text Enable Collisions
 * @type boolean
 * @desc If false, checkCollide conditional branch will return false for this event
 * @default true
 * 
 * @command aaaa
 * @text ---------------------------------
 *
 * @command --
 * @text ■ POP UP TEXT
 * 
 * @command aaaaa
 * @text ---------------------------------
 * 
 * @command ShowVariableOnEvent
 * @text Pop Text Value
 * @desc Pop up damage text on the screen
 *
 * @arg eventId
 * @type string
 * @text Event ID
 * @desc Support: this, eventId, player
 * @default this
 *
 * @arg value
 * @type string
 * @text Value
 * @desc Text, $gameVariables.value(x), damage (notetag <dmg: x>), exp / gold (from enemy), player weapon, player 2nd weapon
 * @default
 *
 * @arg duration
 * @type number
 * @text Text Duration
 * @desc Duration of the DMG text (in frame)
 * @min 1
 * @default 80
 * 
 * @arg animation
 * @type select
 * @text Animation Type
 * @desc Choose how the text will animate
 * @default bounce
 * @option Bounce
 * @value bounce
 * @option Move Up
 * @value moveup
 * @option Pop Up
 * @value popup
 * @option Pop Up Letter
 * @value letter
 * 
 * @arg stickToMap
 * @text Stick to Map
 * @type boolean
 * @desc Text stays at world position instead of moving with screen
 * @default false
 *
 * @arg visualSettings
 * @text Visual Settings
 * @type struct<DMGTextVisualSettings>
 * @desc Settings for text appearance and position
 * @default {"fontFilename":"","fontSize":"","offsetX":"0","offsetY":"0","fontColor":"#ffffff","outlineColor":"#000000","criticalColor":"true"}
 * 
 * @command aaaaaa213
 * @text ---------------------------------
 * 
 * @command ----r4
 * @text ■ EASY GUN SYSTEM
 * 
 * @command aaaaaaa12ew
 * @text ---------------------------------
 * 
 * @command GunAmmoControl
 * @text Gun - Ammo and Capacity Control
 * @desc Modify the ammo/magazine capacity of the equipped gun (a weapon with note <capacity: x> and <ammo: item name>)
 * 
 * @arg slot
 * @text Weapon Slot
 * @type select
 * @option Weapon Slot
 * @value 0
 * @option Shield Slot
 * @value 1
 * @desc Which equipment slot to check for the gun
 * @default 0
 * 
 * @arg target
 * @text Target
 * @type select
 * @option Ammo
 * @value ammo
 * @option Capacity
 * @value capacity
 * @desc Remember to put these note to your weapon in database: <capacity: x> and <ammo: item name>
 * @default ammo
 * 
 * @arg value
 * @text Value to Change
 * @type string
 * @desc -1, +5, -$gameVariables.value(4)
 * @default -1
 * 
 * @command GunReload
 * @text Gun - Reload
 * @desc Reload the equipped gun using ammo from inventory
 * 
 * @arg slot
 * @text Weapon Slot
 * @type select
 * @option Weapon Slot
 * @value 0
 * @option Shield Slot
 * @value 1
 * @desc Which equipment slot to check for the gun
 * @default 0
 * 
 * @command aaaaaazxcasd1
 * @text ---------------------------------
 * 
 * @command ----123125
 * @text ■ STATES
 * 
 * @command aaaaaaarqwee2
 * @text ---------------------------------
 * 
 * @command AddState
 * @text Add State
 * @desc Inflict a state to target and run associated common event if defined in state database's note <state common event: x> 
 * 
 * @arg target
 * @text Target
 * @type string
 * @desc Support: this/player/event ID/event name/<notetag>
 * @default this
 * 
 * @arg stateId
 * @text State
 * @type state
 * @desc The state to apply
 * @default 1
 * 
 * @command RemoveState
 * @text Remove State
 * @desc Only use this in common event of states assigned by <state common event: x> in State database
 * 
 * @arg stateId
 * @text State
 * @type state
 * @desc The state to remove
 * @default 1
 * 
 * @command aaaaaa
 * @text ---------------------------------
 * 
 * @command ----
 * @text ■ SPECIAL COMMANDS
 * 
 * @command aaaaaaa
 * @text ---------------------------------
 * 
 * @command Knockback
 * @text Knockback
 * @desc Pushes a character away from a target
 * 
 * @arg character
 * @text Who to knockback
 * @type string
 * @desc Who to knockback. Support: this, player, event ID, <notetag>
 * @default this
 * 
 * @arg from
 * @text Knockback From
 * @type string
 * @desc The target to knockback from. Use: 'player', event ID, or notetag
 * @default player
 * 
 * @arg distance
 * @text Distance
 * @type number
 * @decimals 1
 * @desc Distance to knockback in tiles (1 = 1 tile, 0.5 = half tile, etc.)
 * @default 1
 * 
 * @arg durationPower
 * @text Duration, Deceleration
 * @type string
 * @desc Format: duration (in frame), deceleration power. Lower duration/deceleration = Faster/Smoother
 * @default 30, 2.5
 * 
 * @arg style
 * @text Style
 * @type select
 * @desc How the knockback behaves
 * @default push
 * @option Push Away
 * @value push
 * @option Jump Away
 * @value jump
 * 
 * @arg wait
 * @text Wait to Completion
 * @type boolean
 * @desc Wait until knockback finishes before continuing
 * @default false
 * 
 * @command PlayerJump
 * @text Jumping
 * @desc Makes a target jump
 * 
 * @arg target
 * @text Target
 * @type string
 * @desc Which character should jump: player, this, event ID, or <notetag>
 * @default player
 * 
 * @arg height
 * @text Jump Height
 * @type number
 * @default 100
 * @desc Height of the jump in pixels
 * 
 * @arg power
 * @text Jump Power
 * @type number
 * @default 12
 * @desc Power/speed of the jump (higher = faster rise and fall)
 * 
 * @command StopQueue
 * @text Whatever you're doing, Stop!
 * @desc Immediately stops whatever the event is doing from Movement Route
 * 
 * @command AttachToEvent
 * @text Child and Parent
 * @desc Make an event(s) become child of another event or player. Child events will follow their parent
 * 
 * @arg child
 * @text The Child
 * @desc Support: this, event name, <notetag>, player
 * @type string
 * @default this
 * 
 * @arg parent
 * @text The Parent
 * @desc Support: this, player, event name, eventID, <notetag>. To reset: none
 * @type string
 * @default player
 * 
 * @command ChangeHitboxData
 * @text Change Event Hitbox
 * @desc Change the hitbox dimensions and offset of an event
 * 
 * @arg eventId
 * @text Event ID
 * @desc Support: this, eventID
 * @type string
 * @default this
 * 
 * @arg width
 * @text Width
 * @desc Width of the hitbox
 * @type string
 * @default 1
 * 
 * @arg height
 * @text Height
 * @desc Height of the hitbox
 * @type string
 * @default 1
 * 
 * @arg offsetX
 * @text X Offset
 * @desc X offset of the hitbox
 * @type string
 * @default 0
 * 
 * @arg offsetY
 * @text Y Offset
 * @desc Y offset of the hitbox
 * @type string
 * @default 0
 * 
 * @command AssignNewPassive
 * @text Assign New Passive
 * @desc Assign or delete a common event from comment <passive: x, x, x> of current event
 * 
 * @arg Status
 * @text Status
 * @type select
 * @option Assign
 * @value assign
 * @option Delete
 * @value delete
 * @desc Assign or delete the common event
 * @default assign
 * 
 * @arg CommonEventId
 * @text Common Event ID/Name
 * @type text
 * @desc ID or name of common events, separated by commas (e.g., "1, 2, Hohohaha")
 * @default 
 *
 * @text Dynamic Passable
 * @desc Control whether events can be passed/walked through by player
 * 
 * @arg target
 * @text Target
 * @type string
 * @desc Support: this, event ID, event name, <notetag>
 * @default this
 * 
 * @arg status
 * @text Status
 * @type select
 * @option Passable
 * @value Passable
 * @option Normal
 * @value Normal
 * @desc Make event passable or restore to normal state
 * @default Passable
 * 
 * @command GainItemsRandomly
 * @text Gain Items Randomly
 * @desc Roll a percentage chance, then grant ONE random item from the pool.
 * 
 * @arg percentage
 * @text Percentage
 * @type text
 * @desc Chance (0-100) to gain an item. (e.g. 50, $gameVariables.value(1)).
 * @default 50
 * 
 * @arg itemList
 * @text Item List
 * @type struct<RandomItemEntry>[]
 * @desc List of possible Weapon/Item/Armor.
 * @default []
 * 
 * @command GameMode
 * @text Game Mode
 * @desc Switches the game genre behavior at runtime
 *
 * @arg gameMode
 * @text Game Mode
 * @type select
 * @option Beat 'em Up
 * @value beatup
 * @option Top-Down (default)
 * @value topdown
 * @default topdown
 * 
 * @command aaaaaaczxvzxb
 * @text ---------------------------------
 * 
 * @command ----cxbdfgw
 * @text ■ VISUAL EFFECTS
 * 
 * @command aaaaaaaerwedas
 * @text ---------------------------------
 * 
 * @command BreakCharacter
 * @text Break Character
 * @desc Makes the current event break into pieces and fade away. Cost performance
 * 
 * @command EventEffect
 * @text Characters Effect
 * @desc Apply visual effects to events or player
 * 
 * @arg target
 * @text Target
 * @type string
 * @desc Support: player, this, eventID, event name, <notetag>
 * @default this
 * 
 * @arg effect
 * @text Effect
 * @type select
 * @option Spin
 * @value spin
 * @option Shake
 * @value shake
 * @option Bounce
 * @value bounce
 * @option Flash
 * @value flash
 * @option Fade Out and In
 * @value fade
 * @option Scale Up and Down
 * @value scale
 * @desc Effect to apply
 * @default spin
 * 
 * @arg origin
 * @text Origin
 * @type select
 * @option Center
 * @value center
 * @option Top
 * @value top
 * @option Bottom
 * @value bottom
 * @desc Origin point for the effect
 * @default center
 * 
 * @arg duration
 * @text Duration
 * @type number
 * @desc Duration of the effect in frames
 * @default 60
 * 
 * @arg intensity
 * @text Intensity
 * @type number
 * @desc Intensity of the effect (higher = stronger)
 * @default 5
 * 
 * @arg wait
 * @text Wait for Completion
 * @type boolean
 * @desc Wait for the effect to complete before continuing
 * @default true
 * 
 * @command ChangePriority
 * @text Change Priority
 * @desc Change the display priority (z-layer) of a character.
 * 
 * @arg target
 * @text Target
 * @type string
 * @desc Support: this, player, event ID, event name, <notetag>
 * @default this
 * 
 * @arg priority
 * @text Priority
 * @type select
 * @option Below Characters
 * @value 0
 * @option Same as Characters
 * @value 1
 * @option Above Characters
 * @value 2
 * @desc The display priority for the target character.
 * @default 1
 * 
 * @command CameraUpdate
 * @text Camera Update
 * @desc Pause or resume camera focus on player
 * 
 * @arg pauseCamera
 * @text Pause Camera
 * @type boolean
 * @desc On: Camera movement will be paused. OFF: camera will resume following player
 * @default false
 * 
 * @command aaaaaaacxv45aa
 * @text ---------------------------------
 * 
 * @command -----bvbdfgw452
 * @text ■ FREEZE GAME
 * 
 * @command aaaaaaaaa2341aa341e
 * @text ---------------------------------
 * 
 * @command PauseThenResume
 * @text Freeze Time
 * @desc Freeze all events and player for a set number of frames
 * 
 * @arg frames
 * @type number
 * @text Duration
 * @desc Number of frames to wait before resuming the game
 * @default 60
 * 
 * @command pauseEvent
 * @text Pause Events
 * @desc Pause all events except the calling event
 * 
 * @arg pause
 * @text Pause State
 * @desc Whether to pause (true) or unpause (false) events
 * @type boolean
 * @default true
 * 
 * @command aaaaaaaaa
 * @text ---------------------------------
 * 
 * @command -----
 * @text ■ SWITCHES & VARIABLES
 * 
 * @command aaaaaaaaaaa
 * @text ---------------------------------
 * 
 * @command ControlSelfSwitch
 * @text Control Self Switch
 * @desc Jump to the page with the corresponding Self Switch based on the comment on that page 
 * @arg state
 * @text State
 * @type boolean
 * @desc Set the self switch state to ON or OFF
 * @default true
 * @arg comment
 * @text Comment to search for
 * @type string
 * @desc Jump to page with a self-switch that has this comment. Want extra self-switches? Use a switch named "self switch X"
 * @arg eventId
 * @text Event ID (optional)
 * @type string
 * @desc Blank: this event. ID: eventID. <notetag>: All event with notetag. nearby <notetag>: Nearest event with notetag
 * 
 * @command SetValue
 * @text Control Local Variable
 * 
 * @arg valueToSet
 * @text Value
 * @type string
 * @desc +X, -X, or just X to set directly. Can also use Min:Max for random range
 * 
 * @arg id
 * @text Name ID (Optional)
 * @type string
 * @desc Name this variable (just like command Control Variable)
 *
 * @command ResetMapValues
 * @text Reset All Local Variables
 * @desc Resets all local variables for all events on the current map to 0
 * 
 * @command QuickSwitchVariableReset
 * @text Reset Switches & Variables
 * @desc Reset switches, variables containing a specific keyword to their default values
 * 
 * @arg target
 * @text Target
 * @type select
 * @option Switch
 * @value switch
 * @option Variable
 * @value variable
 * @option Switch + Variable
 * @value both
 * @desc What type of data to reset
 * @default both
 * 
 * @arg keyword
 * @text Keyword
 * @type string
 * @desc Any switch/variable with this keyword in the name will be reset. Switches become false, Variable become 0
 * @default
 * 
 * @command ResetEventPages
 * @text Reset Events Self Switches
 * @desc Clears all self switches for every event with the given name across ALL maps in the project, resetting them to page 1
 *
 * @arg eventName
 * @text Event Name
 * @desc All events in the whole game with this name will be reset
 * @type string
 * @default
 * 
 * @command aaaaaaaaa31
 * @text ---------------------------------
 * 
 * @command -----2
 * @text ■ PLAYER
 * 
 * @command aaaaaaaaaaa31
 * @text ---------------------------------
 * 
 * @command ControlInput
 * @text Control Input
 * @desc Block keyboard, mouse, gamepad. If use Hendrix Keyboard Gamepad Solution, put it before Hendrix. Action Engine
 *
 * @arg blockAllInput
 * @type boolean
 * @text Block All Input
 * @desc If use Hendrix Keyboard Gamepad Solution, put it before Hendrix Action Engine
 * @on Block
 * @off Unblock
 * @default true
 * 
 * @command ControlPlayerMovement
 * @text Player Movement
 * @desc Controls whether player movement is allowed or disallowed
 *
 * @arg allowMovement
 * @type boolean
 * @text Player Movement
 * @desc Allow or disallow player movement
 * @on Allow
 * @off Disallow
 * @default true
 * 
 * @command CycleWeapon
 * @text Fast Weapon/Shield Equip
 * @desc Equips the next or previous available weapon/shield from inventory to the party leader
 * @arg direction
 * @text Direction
 * @type select
 * @option Next Weapon/Shield
 * @value next
 * @option Previous Weapon/Shield
 * @value previous
 * @default next
 * @arg slot
 * @text Equipment Slot
 * @type select
 * @option Weapon Slot
 * @value 0
 * @option Shield/Offhand Slot
 * @value 1
 * @default 0
 * @desc For dual wielding characters, shield slot holds a second weapon
 * 
 * @command ChangePlayerHitbox
 * @text Change Player Hitbox
 * @desc Changes the hitbox dimensions of the player
 *
 * @arg width
 * @text Width
 * @desc Width of the player's hitbox in tile
 * @type number
 * @decimals 2
 * @min 0.1
 * @default 1.0
 *
 * @arg height
 * @text Height
 * @desc Height of the player's hitbox in tile
 * @type number
 * @decimals 2
 * @min 0.1
 * @default 1.0
 *
 * @arg offsetX
 * @text X Offset
 * @desc X-axis offset of the hitbox in pixel
 * @type number
 * @decimals 2
 * @min -999
 * @default 0
 *
 * @arg offsetY
 * @text Y Offset
 * @desc Y-axis offset of the hitbox in pixel
 * @type number
 * @decimals 2
 * @min -999
 * @default 0
 * 
 * @command SwingWeapon
 * @text Swing Weapon
 * @desc Creates a weapon swing animation using an image file
 * 
 * @arg weaponSprite
 * @text Weapon Sprite
 * @type file
 * @dir img/pictures/
 * @desc Image file for the weapon sprite
 * @default 
 * 
 * @arg eventId
 * @text Event ID
 * @type string
 * @desc Support: this, player
 * @default player
 * 
 * @arg offset
 * @text Offset
 * @type string
 * @desc Format: x, y (in pixels)
 * @default 0, 0
 * 
 * @arg zIndex
 * @text Z-Index
 * @type select
 * @desc Layer depth of the weapon sprite
 * @default same
 * @option Same as Character
 * @value same
 * @option Below Character
 * @value below
 * @option Above Character
 * @value above
 * 
 * @arg style
 * @text Style
 * @type select
 * @desc Animation style for the weapon
 * @default clockwise
 * @option Clockwise
 * @value clockwise
 * @option Counter-Clockwise
 * @value counterclockwise
 * @option Full Circle
 * @value fullcircle
 * @option Thrust
 * @value thrust
 * 
 * @arg speed
 * @text Animation Speed
 * @type number
 * @desc Speed of the swing animation (default: 20, lower = faster)
 * @min 1
 * @default 20
 * 
 * @arg visualSettings
 * @text Trait Settings
 * @type struct<SwingWeaponVisual>
 * @desc Visual effect settings for weapon trail
 * @default {"traitEffect":"true","traitColor":"","traitBlend":"screen","traitOrder":"above"}
 * 
 * @command LockInTarget
 * @text Target Lock
 * @desc Makes Player automatically face toward events with a notetag when moving within range
 * 
 * @arg lockCommand
 * @text What do you want?
 * @type select
 * @option Disable Locking
 * @value disable
 * @option Enable Locking
 * @value enable
 * @option Switch to Next Target
 * @value switch
 * @desc What locking action to perform
 * @default enable
 * 
 * @arg 342342342341
 * @text ------------------------
 * 
 * @arg notetag
 * @text Look at Notetag
 * @type string
 * @desc The notetag to search for (e.g., '<enemy>' or '<boss>')
 * @default <enemy>
 * 
 * @arg range
 * @text Range
 * @type number
 * @desc Detection range in grid tiles
 * @min 1
 * @max 20
 * @default 5
 * 
 * @arg 34234234234173
 * @text ------------------------
 * 
 * @arg autoSwitchTarget
 * @text Auto Switch Target
 * @type boolean
 * @desc Automatically switch to nearest target
 * @default true
 * 
 * @arg runFreely
 * @text Player Run Freely
 * @type boolean
 * @desc Player doesn't face the locked target when running
 * @default true
 * 
 * @arg 3423423423417322
 * @text ------------------------
 * 
 * @arg targetImage
 * @text Indicator Image
 * @type file
 * @dir img/pictures/
 * @desc Optional image to display on locked target
 * @default
 * 
 * @arg indicatorPosition
 * @text Indicator Position
 * @type select
 * @option Above Head
 * @value above
 * @option Middle
 * @value middle
 * @option Foot
 * @value foot
 * @desc Vertical position of the target indicator relative to the target
 * @default above
 * 
 * @arg indicatorAnimation
 * @text Indicator Animation
 * @type select
 * @option Pulse
 * @value pulse
 * @option Up and Down
 * @value updown
 * @option Static
 * @value static
 * @desc Animation type for the target indicator
 * @default pulse
 * 
 * @command Mount
 * @text Mount
 * @desc Mount the player onto a target event. The event follows the player exactly and copies the player's facing direction.
 * 
 * @arg action
 * @text Action
 * @type select
 * @option Mount
 * @value mount
 * @option Dismount
 * @value dismount
 * @desc Mount onto target, or dismount from current mount
 * @default mount
 * 
 * @arg target
 * @text Target
 * @desc The event to mount onto. Support: this, event ID, event name, <notetag>
 * @type string
 * @default this
 * 
 * @arg speed
 * @text Movement Speed
 * @desc How fast do you want this mount to go?
 * @type string
 * @default 
 * 
 * @arg movePlayerAbove
 * @text Move Player Above
 * @desc If there's a number in here, move the positions of the player 1 tile above the mount event + this offset Y
 * @type string
 * @default
 * 
 * @command DisplayWeapon
 * @text Display Weapon
 * @desc Display a weapon sprite anchored to the player that rotates toward the right stick / mouse cursor.
 * 
 * @arg status
 * @text Status
 * @type boolean
 * @on Show
 * @off Erase
 * @default true
 * @desc Show or erase the weapon sprite.
 * 
 * @arg weaponSprite
 * @text Weapon Sprite
 * @type file
 * @dir img/pictures/
 * @desc The image file to use as the weapon sprite.
 * @default 
 * 
 * @arg offset
 * @text Offset
 * @type string
 * @desc X and Y offset in pixels from player center. Format: "x, y".
 * @default 0, 0
 * 
 * @command aaaaaaaaa31sd2
 * @text ---------------------------------
 * 
 * @command -----2123
 * @text ■ Deprecated (Do not use)
 * 
 * @command aaaaaaaaaaa312123
 * @text ---------------------------------
 * 
 * @command destroyEvent
 * @text Destroy Spawned Event (Deprecated)
 * @desc Destroy events spawned from Template Map
 * 
 * @arg identifier
 * @text Event Target
 * @desc Support: ID, name, <notetag>, this (current event)
 * @type string
 * @default this
 * 
 * @command destroyRegularEvent
 * @text Destroy Regular Event (Deprecated)
 * @desc Destroys regular map events (created regulary, not via spawning)
 *
 * @arg target
 * @text Event Target
 * @desc Support: this, ID, name, <notetag>
 * @type string
 * @default this
 *
 * @arg permanent
 * @text Destroy Permanently
 * @desc The event will remain deleted even when returning to the map
 * @type boolean
 * @default true
 * 
 * @command destroyEventNear
 * @text Destroy Spawned Event Near (Deprecated)
 * @desc Destroys the nearest event spawned from template map with matching name/notetag to specified event
 * 
 * @arg identifier
 * @text Event Target
 * @desc Support: Event name, <notetag>
 * @type string
 * @default
 * 
 * @arg eventId
 * @text Source Event ID
 * @desc ID of event to check distance from. Use 'this' for current event
 * @type string 
 * @default this
 * 
 * @command UpdatePlayerHp
 * @text Increase / Decrease Actor HP (Deprecated)
 * @desc Change the HP of an actor
 * 
 * @arg target
 * @type string
 * @text Actor
 * @desc Actor ID/name. Support: player: Party leader | self: Current event if it has notetag <hp: actor, actor ID>
 * @default player
 *
 * @arg value
 * @type string
 * @text HP Change
 * @desc Support: +- a number, $gameVariables.value(x), damage (read value from notetag <dmg: x>), etc
 * 
 */
/*~struct~ClickableOutlineSettings:
 * @param Color
 * @type string
 * @desc Outline color (Hex code like #FFFFFF)
 * @default #FFFFFF
 *
 * @param Thickness
 * @type number
 * @desc Thickness of the outline (pixel unit)
 * @default 2
 *
 * @param Opacity
 * @type number
 * @min 0
 * @max 255
 * @desc Opacity of the outline (0 to 255)
 * @default 255
 */

/*~struct~ItemGainVisualSettings:
 * @param Alignment
 * @type select
 * @option Left
 * @value left
 * @option Center
 * @value center
 * @option Right
 * @value right
 * @default left
 *
 * @param Transparent Window
 * @type boolean
 * @default false
 * 
 * @param aawwcczxczxc
 * @text --------------------------
 * @default --------------------------
 *
 * @param Display Above Player
 * @type boolean
 * @default false
 *
 * @param Above Player Vertical Offset
 * @text Vertical Offset
 * @type number
 * @desc Used if Display Above Player is true
 * @min -999
 * @default -48
 * 
 * @param aawwcczxczxcvxv
 * @text --------------------------
 * @default --------------------------
 *
 * @param Position
 * @text Position (x, y)
 * @type string
 * @desc Used if Display Above Player is false
 * @default center, 0
 *
 * @param Padding
 * @type number
 * @default 10
 * 
 * @param aawwcczxczxcvxvccc
 * @text --------------------------
 * @default --------------------------
 *
 * @param Weapon Text Color
 * @type string
 * @default #FFFFFF
 *
 * @param Armor Text Color
 * @type string
 * @default #FFFFFF
 *
 * @param Gold Text Color
 * @type string
 * @default #FFFFFF
 *
 * @param Item Text Color
 * @type string
 * @default #FFFFFF
 */

/*~struct~ItemGainSoundSettings:
 * @param General SFX Volume Pitch
 * @text Volume & Pitch
 * @type string
 * @desc volume, pitch
 * @default 45, 100
 * 
 * @param Weapon SFX
 * @type file
 * @dir audio/se/
 * @default Equip1
 *
 * @param Armor SFX
 * @type file
 * @dir audio/se/
 * @default Equip2
 *
 * @param Gold SFX
 * @type file
 * @dir audio/se/
 * @default Coin
 *
 * @param Item SFX
 * @type file
 * @dir audio/se/
 * @default Cursor1
 */

/*~struct~NpcTag:
 * @param Notetag
 * @text Events Notetag
 * @type commonEvent
 * @desc The notetag to check for in the event's note section
 *
 * @param CommonEventIds
 * @text Common Event Ids
 * @type common_event[]
 * @desc The IDs of the common events to run in background for these group of events
 * @default
*/
/*~struct~DMGTextVisualSettings:
 * @param fontFilename
 * @type string
 * @text Font Filename
 * @desc Custom font file from fonts folder (Arial.ttf). Leave empty to use default or parameter setting
 * @default
 *
 * @param fontSize
 * @type number
 * @text Font Size
 * @desc Custom font size. Leave empty to use default setting
 * 
 * @param offsetX
 * @type number
 * @text Offset X
 * @desc Horizontal offset
 * @min -9999
 * @default 0
 *
 * @param offsetY
 * @type number
 * @text Offset Y
 * @desc Vertical offset
 * @min -9999
 * @default 0
 *
 * @param fontColor
 * @type string
 * @text Font Color
 * @desc Text color (e.g. #e6b400)
 * @default #e6b400
 *
 * @param outlineColor
 * @type string
 * @text Outline Color
 * @desc Text outline color (e.g. #900C3F)
 * @default #900C3F
 * 
 * @param outlineWidth
 * @type number
 * @text Outline Width
 * @desc Thickness of the text outline
 * @default 4
 * 
 * @param criticalColor
 * @type boolean
 * @text Critical Color
 * @desc Auto change color of text to critical color threshold
 * @default true
*/
/*~struct~DamageTextSettings:
 * @param fontFace
 * @type string
 * @text Font
 * @desc File from game's font folder. E.g. Arial.ttf, Something.otf
 * @default
 *
 * @param fontSize
 * @type number
 * @text Font Size
 * @default 28
 *
 * @param fontColor
 * @type string
 * @text Font Color
 * @desc Font color in hex code
 * @default #e6b400
 *
 * @param outline
 * @type boolean
 * @text Font Outline
 * @default true
 *
 * @param outlineColor
 * @type string
 * @text Font Outline Color
 * @desc Color in Hex code
 * @default #900C3F
 * 
 * @param outlineThickness
 * @type number
 * @text Outline Thickness
 * @desc Thickness of the font outline
 * @min 0
 * @default 1
*/
/*~struct~HUD:
 * @param This bar is
 * @text Name
 * @type string
 * @desc Does nothing, just a name so you can identify what this bar is
 * @default 
 * 
 * @param switchID
 * @text Visibility Switch
 * @type switch
 * @desc The switch that controls the visibility of the HUD element.
 * @default 0
 * 
 * @param -------
 * @text --------------------------------
 * 
 * @param useAs
 * @text Use As
 * @type select
 * @option Variable
 * @value variable
 * @option Player HP
 * @value hp
 * @option Player MP
 * @value mp
 * @option Player EXP
 * @value exp
 * @option Event HP
 * @value eventhp
 * @desc What type of value to display in this HUD bar
 * @default variable
 * 
 * @param variableID
 * @text Variable Value
 * @type variable
 * @desc The game variable whose value will be represented by the HUD's progress bar
 * @default 0
 *
 * @param maxVariableValue
 * @text Max Variable Value
 * @type variable
 * @desc The maximum value of the game variable for the HUD's progress bar.
 * @default 0
 * 
 * @param eventHpTag
 * @text Event HP Notetag
 * @type string
 * @desc Notetag to identify the event whose <hp: x> will be tracked (when 'Use As' is set to Event HP)
 * @default 
 * 
 * @param --------
 * @text --------------------------------
 * @type string
 *
 * @param sizeAndPosition
 * @text Size and Position
 * @type string
 * @desc Format: width, height, x, y. For x/y, can use event(id).x/y or player.x/y
 * @default 100, 20, (Graphics.width-100)/2, (Graphics.height-20)/2
 * 
 * @param barColor
 * @text Bar Color
 * @type string
 * @desc Hex color code for the bar when no image is used (e.g., #ff0000 for red)
 * @default #ff0000
 * 
 * @param barImage
 * @text Bar Image
 * @type file
 * @dir img/pictures
 * @desc (Optional) The image file used for the HUD's progress bar.
 * 
 * @param ------
 * @text --------------------------------
 * @type string
 * 
 * @param frameImage
 * @text Frame Image
 * @type file
 * @dir img/pictures
 * @desc (Optional) The image file used as the foreground frame for the HUD bar.
 *
 * @param frameImageBack
 * @text Frame Background Image
 * @type file
 * @dir img/pictures
 * @desc (Optional) The image file used as the background frame behind the HUD bar
 * 
 * @param additionalLayers
 * @text Additional Images
 * @type struct<AdditionalLayerSettings>[]
 * @desc List of additional images to be displayed
 * @default []
 * 
 * @param -----
 * @text --------------------------------
 * @type string
 * 
 * @param flashWhenMax
 * @text Flash When Max
 * @type boolean
 * @desc Whether the bar should flash when it reaches the maximum value
 * @default false
 * 
 * @param barDirection
 * @text Bar Fill Direction
 * @type select
 * @option Left to Right
 * @value leftToRight
 * @option Right to Left
 * @value rightToLeft
 * @desc Direction the bar fills/empties
 * @default leftToRight
 * 
 * @param -----65
 * @text --------------------------------
 * 
 * @param displayTextType
 * @text Display Text Value
 * @type select
 * @option None
 * @value none
 * @option Variable
 * @value variable
 * @option Variable / Max Variable
 * @value variableMax
 * @option Player HP
 * @value playerHp
 * @option Player HP / Max HP
 * @value playerHpMax
 * @option Player MP
 * @value playerMp
 * @option Player MP / Max MP
 * @value playerMpMax
 * @option Player EXP
 * @value playerExp
 * @option Player EXP / Max EXP
 * @value playerExpMax
 * @option Event HP
 * @value eventHp
 * @option Event HP / Max HP
 * @value eventHpMax
 * @desc Choose what type of text to display on the HUD
 * @default none
 * 
 * @param fontSettings
 * @text Font Settings
 * @type struct<FontSettings>
 * @desc Font settings for variable text display
 * @default {"size":"","color":"","outline":"true","outlineColor":"","offsetX":"0","offsetY":"0"}
 */
/*~struct~PickupSFX:
 * @param sfxFile
 * @text SFX File
 * @type file
 * @dir audio/se
 * @desc What file to play?
 * @default Item1
 * 
 * @param volume
 * @text Volume
 * @type number
 * @min 0
 * @max 100
 * @desc Volume (0-100)
 * @default 90
 * 
 * @param pitch
 * @text Pitch
 * @type number
 * @min 50
 * @max 150
 * @desc Pitch (50-150)
 * @default 100
 */
/*~struct~FontSettings:
 * @param size
 * @text Font Size
 * @type number
 * @desc Font size for the variable text. Empty to use game default
 * @default 
 * 
 * @param color
 * @text Font Color
 * @type string
 * @desc Hex color code for variable text (e.g., #ffffff). Leave empty to use game default
 * @default 
 * 
 * @param outline
 * @text Enable Outline
 * @type boolean
 * @desc Enable text outline for variable text
 * @default true
 * 
 * @param outlineColor
 * @text Outline Color
 * @type string
 * @desc Hex color code for text outline (e.g., #000000). Leave empty to use game default
 * @default 
 * 
 * @param offsetX
 * @text X Offset
 * @type number
 * @min -999
 * @desc Horizontal offset for variable text position. Leave empty for center
 * @default 0
 * 
 * @param offsetY
 * @text Y Offset
 * @type number
 * @min -999
 * @desc Vertical offset for variable text position. Leave empty for center
 * @default 0
*/
/*~struct~AdditionalLayerSettings:
 * @param image
 * @text Image File
 * @type file
 * @dir img/pictures
 * @desc The image file to use (can be regular image or spritesheet)
 * 
 * @param row
 * @text Spritesheet Rows
 * @type number
 * @desc Number of rows in the spritesheet. Leave 0 for regular image
 * @default 0
 * 
 * @param column
 * @text Spritesheet Columns
 * @type number
 * @desc Number of columns in the spritesheet. Leave 0 for regular image
 * @default 0
 * 
 * @param fps
 * @text Animation FPS
 * @type number
 * @desc Frames per second for spritesheet animation
 * @default 15
 * 
 * @param xOffset
 * @text X Offset
 * @type string
 * @desc The X offset from the HUD's position
 * @default 0
 * 
 * @param yOffset
 * @text Y Offset
 * @type string
 * @desc The Y offset from the HUD's position
 * @default 0
 * 
 * @param dragAndDrop
 * @text Drag and Drop
 * @type boolean
 * @desc Allow to drag this image when in drag and drop mode
 * @default false
 */
/*~struct~MissSfxSettings:
 * @param filename
 * @text SFX Filename
 * @type file
 * @dir audio/se/
 * @desc Sound effect to play when an attack is evaded or misses
 * @default 
 *
 * @param volume
 * @type number
 * @text Volume
 * @desc Volume of the miss sound effect (0-100)
 * @min 0
 * @max 100
 * @default 80
 *
 * @param pitch
 * @type number
 * @text Pitch
 * @desc Pitch of the miss sound effect (50-150)
 * @min 50
 * @max 150
 * @default 100
 */
/*~struct~SwingWeaponVisual:
 * @param traitEffect
 * @text Trait Effect
 * @type boolean
 * @desc Enable visual trail effect on weapon swing
 * @default true
 * @on Enable
 * @off Disable
 * 
 * @param traitColor
 * @text Trait Color
 * @type string
 * @desc Color for the trait, using Hex color (e.g #ffffff). Empty to use weapon sprite as trait.
 * @default #ffffff
 * 
 * @param traitBlend
 * @text Trait Blend
 * @type select
 * @desc Blend mode for the trail effect
 * @default normal
 * @option Normal
 * @value normal
 * @option Add
 * @value add
 * @option Screen
 * @value screen
 * @option Multiply
 * @value multiply
 * 
 * @param traitOrder
 * @text Trait Order
 * @type select
 * @desc Layer order of the trail relative to weapon sprite
 * @default below
 * @option Above Weapon Sprite
 * @value above
 * @option Below Weapon Sprite
 * @value below
 */
/*~struct~RandomItemEntry:
 * @param Weapon
 * @text Weapon
 * @type weapon
 * @desc Weapon to add to the pool. Leave as None to skip.
 * @default 0
 * 
 * @param Item
 * @text Item
 * @type item
 * @desc Item to add to the pool. Leave as None to skip.
 * @default 0
 * 
 * @param Armor
 * @text Armor
 * @type armor
 * @desc Armor to add to the pool. Leave as None to skip.
 * @default 0
 * 
 * @param Weight
 * @text Weight
 * @type number
 * @min 1
 * @desc Relative chance weight. Leave at 1 for equal odds across all entries. Higher = more likely to get.
 * @default 1
 */

var Imported = Imported || {};
Imported.Hendrix_Action_Engine = true;

const HpluginName = "Hendrix_Action_Engine";
const Hparameters = PluginManager.parameters(HpluginName);
const inputSupport = String(Hparameters['Input Support'] || 'all');
const enableItemGainNotification = (Hparameters['Enable Item Gain Notification'] || 'true') === 'true';
const itemGainShowQuantity = (Hparameters['Show Quantity'] || 'true') === 'true';
const itemGainDisplayDuration = Number(Hparameters['Display Duration'] || 120);

const itemGainVisualSetting = JSON.parse(Hparameters['Visual Setting'] || '{}');
const itemGainAlignment = String(itemGainVisualSetting['Alignment'] || 'left').toLowerCase();
const itemGainDisplayAbovePlayer = (String(itemGainVisualSetting['Display Above Player'] || 'false')) === 'true';
const itemGainPosition = String(itemGainVisualSetting['Position'] || 'center, 0').split(',').map(s => s.trim());
const itemGainVerticalOffset = Number(itemGainVisualSetting['Above Player Vertical Offset'] || -48);
const itemGainPadding = Number(itemGainVisualSetting['Padding'] || 10);
const itemGainWeaponColor = String(itemGainVisualSetting['Weapon Text Color'] || '#FFFFFF');
const itemGainArmorColor = String(itemGainVisualSetting['Armor Text Color'] || '#FFFFFF');
const itemGainGoldColor = String(itemGainVisualSetting['Gold Text Color'] || '#FFFFFF');
const itemGainItemColor = String(itemGainVisualSetting['Item Text Color'] || '#FFFFFF');
const itemGainTransparentWindow = (String(itemGainVisualSetting['Transparent Window'] || 'false')) === 'true';

const itemGainSoundSettings = JSON.parse(Hparameters['Sound Settings'] || '{}');
const itemGainWeaponSfx = String(itemGainSoundSettings['Weapon SFX'] || 'Equip1');
const itemGainArmorSfx = String(itemGainSoundSettings['Armor SFX'] || 'Equip2');
const itemGainGoldSfx = String(itemGainSoundSettings['Gold SFX'] || 'Coin');
const itemGainItemSfx = String(itemGainSoundSettings['Item SFX'] || 'Cursor1');
const [itemGainSfxVolume, itemGainSfxPitch] = String(itemGainSoundSettings['General SFX Volume Pitch'] || '100, 100').split(',').map(Number);
const clickableOutlineSettings = JSON.parse(Hparameters['Clickable Outline Settings'] || '{"Color":"#FFFFFF","Thickness":"2","Opacity":"255"}');
const debugToggleButton = String(Hparameters['Debug Toggle Button'] || '9');
const debugCollisionRectButton = String(Hparameters['Debug Collision Button'] || '0');
const eventSliding = (Hparameters['eventSliding'] || 'true') === 'true';
const borderImage = String(Hparameters['borderImage'] || '');
const defaultRadius = Number(Hparameters['showRadius'] || 2);

const playerCollisionRect = String(Hparameters['playerCollisionRect'] || '1, 1, 0, 0');
const limitAreaOfCalling = (Hparameters['LimitAreaOfCalling'] || 'false') === 'true';
const StemplateMapIdH = Number(Hparameters['templateMapId'] || 1);
const smartHUDVisibility = (Hparameters['smartHUDVisibility'] || 'true') === 'true';
const hideHUDDuringMessages = (Hparameters['hideHUDDuringMessages'] || 'false') === 'true';
const soloPlayerMenu = (Hparameters['SoloPlayerMenu'] || 'false') === 'true';
const missSfxSettings = JSON.parse(Hparameters['missSfxSettings'] || '{"filename":"","volume":"80","pitch":"100"}');
const gameGenre = String(Hparameters['gameGenre'] || 'topdown');
const disableAutoGameOver = (Hparameters['Auto Game Over'] || 'false') === 'true';
const passableSwitch = Number(Hparameters['passableSwitch'] || 0);
const passageType = String(Hparameters['passageType'] || 'action');
const [playerGraphicalOffsetX, playerGraphicalOffsetY] = (Hparameters['Player Graphical Offset'] || '0, 0').split(',').map(val => Number(val.trim()));
const [playerHitboxWidth, playerHitboxHeight, playerHitboxOffsetX, playerHitboxOffsetY] = (Hparameters['Player Hitbox'] || '1, 1, 0, 0').split(',').map(val => Number(val.trim()));
const moveViaCursor = (Hparameters['Move via Cursor'] || 'false') === 'true';
const eventsToSpawn = (Hparameters['Events To Spawn'] || '').split(',').map(e => e.trim()).filter(e => e);
const spawnActorsAtStart = (Hparameters['Spawn Actors at Start'] || 'false') === 'true';
const gainExpFromEnemies = (Hparameters['Gain XP when enemy defeated'] || 'false') === 'true';
const gainGoldFromEnemies = (Hparameters['Gain Gold when enemy defeated'] || 'false') === 'true';
const disableRightClickMenu = (Hparameters['Disable Right Click Menu'] || 'false') === 'true';
const enemyDropItems = (Hparameters['Enemy Drop Items'] || 'false') === 'true';
const dropItemStyle = String(Hparameters['Drop Item Style'] || 'icon');
const [barWidth, barHeight] = (Hparameters['barSize'] || '100, 6').split(',').map(val => Number(val.trim()));
const npcTags = JSON.parse(Hparameters['NpcTags'] || '[]').map(tag => { const parsed = JSON.parse(tag); parsed.CommonEventIds = JSON.parse(parsed.CommonEventIds).map(Number); return parsed; });
const pickupSFX = JSON.parse(Hparameters['pickupSFX'] || '{}');
const removeFormation = (Hparameters['RemoveFormation'] || 'false') === 'true';
const easyConditionalBranch = (Hparameters['Easy Conditional Branch'] || 'true') === 'true';
const brokenSprites = new Map();
const activeEffects = new Map();
const lastHpDecrease = {};
let hitboxCache = {};
let lastLeaderLevel = null;
let showCollisionAreas = false;
let HallInputBlocked = false;
let isBeatEmUp = gameGenre === 'beatup';
let showHitboxes = (Hparameters['Show Hitboxes'] || 'false') === 'true';

//============================================================
// INITIALIZATION & FRAMEWORK MODIFICATION
//============================================================
const H_DotMoveSystem = PluginManager._scripts.includes('DotMoveSystem');

const H_Game_Player_performTransfer = Game_Player.prototype.performTransfer;
Game_Player.prototype.performTransfer = function () {
	if (this.isTransferring()) {
		$gameMap.clearCustomEventHitboxCaches();
	}
	H_Game_Player_performTransfer.call(this);
};

const H_Scene_Map_update = Scene_Map.prototype.update;
Scene_Map.prototype.update = function () {
	H_Scene_Map_update.call(this);
	if (Utils.isOptionValid('test') && debugToggleButton !== 'none' && Input.isTriggered(debugToggleButton)) {
		showHitboxes = !showHitboxes;
		if (!this.hitboxLayer && showHitboxes) {
			this.hitboxLayer = new HitboxLayer();
			this.addChild(this.hitboxLayer);
		}
	}
	if (showHitboxes && this.hitboxLayer) {
		this.hitboxLayer.update();
	}
	this.hendrixHuds.forEach(hud => {
		hud.updateHUD();
	});
	if (Input.isTriggered('pagedown') && Utils.isOptionValid('test')) {
		this.toggleHUDDragMode();
	}
	if (this._isVarBarDragMode) {
		if (this.hendrixHuds) {
			this.hendrixHuds.forEach(hud => hud.updateDrag());
		}
	}
	SupdateEventClocksH();
	SupdateBrokenSpritesH();
	this.updateEventEffects();
	this.checkClickableEvents();
	if (!ShxWeaponSpriteH || !ShxWeaponDataH) return;

	const screenX = $gamePlayer.screenX() + ShxWeaponDataH.offsetX;
	const screenY = $gamePlayer.screenY() - $gameMap.tileHeight() / 2 + ShxWeaponDataH.offsetY;

	ShxWeaponSpriteH.x = screenX;
	ShxWeaponSpriteH.y = screenY;

	let angle = ShxWeaponSpriteH.rotation;
	let usedGamepad = false;

	const gamepads = navigator.getGamepads ? navigator.getGamepads() : [];
	for (const gp of gamepads) {
		if (gp) {
			const rx = gp.axes[2] || 0;
			const ry = gp.axes[3] || 0;
			if (Math.abs(rx) > 0.15 || Math.abs(ry) > 0.15) {
				angle = Math.atan2(ry, rx);
				usedGamepad = true;
				break;
			}
		}
	}

	if (!usedGamepad) {
		angle = Math.atan2(TouchInput._y - screenY, TouchInput._x - screenX);
	}

	ShxWeaponSpriteH.rotation = angle;
	ShxWeaponDataH.lastAngle = angle;
};

const H_Scene_Map_processMapTouch = Scene_Map.prototype.processMapTouch;
Scene_Map.prototype.processMapTouch = function () {
	if (!moveViaCursor) return;
	H_Scene_Map_processMapTouch.call(this);
};

if (!disableRightClickMenu) {
	const H_Scene_Map_isMenuCalled = Scene_Map.prototype.isMenuCalled;
	Scene_Map.prototype.isMenuCalled = function () {
		if (TouchInput.isCancelled()) {
			return false;
		}
		return H_Scene_Map_isMenuCalled.call(this);
	};
}

Game_Party.prototype.maxItems = function () { return 9999; };

//============================================================
// SHORTCUTS
//============================================================

function SisTilePassableH(x, y) {
	const flags = $gameMap.tilesetFlags();
	for (const tileId of $gameMap.allTiles(x, y)) {
		const flag = flags[tileId];
		if ((flag & 0x10) !== 0) continue;
		if ((flag & 0x0f) === 0) return true;
		return false;
	}
	return false;
}

window.findTargets = function (identifier, context = null) {
	const targets = [];

	if (identifier === 'player') {
		targets.push($gamePlayer);
		return targets;
	}

	// This event
	if (identifier === 'this' && context?._eventId) {
		const event = $gameMap.event(context._eventId);
		if (event) targets.push(event);
		return targets;
	}

	// Event ID
	if (!isNaN(identifier)) {
		const event = $gameMap.event(Number(identifier));
		if (event) targets.push(event);
		return targets;
	}

	// Notetag or name
	if (typeof identifier === 'string') {
		const isNotetag = identifier.startsWith('<') && identifier.endsWith('>');
		const key = isNotetag ? identifier : identifier;

		$gameMap.tagToEvents ||= new Map();
		const indexed = $gameMap.tagToEvents.get(key);
		if (indexed) {
			for (const event of indexed) {
				if (event && !event._erased && $gameMap._events[event._eventId]) {
					targets.push(event);
				}
			}
		} else {
			// fallback for events not indexed yet
			$gameMap.events().forEach(event => {
				if (!event || !event.event()) return;
				if (isNotetag && event.event().note.includes(identifier)) {
					targets.push(event);
				} else if (!isNotetag && event.event().name === identifier) {
					targets.push(event);
				}
			});
		}
	}

	return targets;
};

window.findTarget = function (identifier, context = null) {
	const targets = findTargets(identifier, context);
	return targets.length > 0 ? targets[0] : null;
};

window.findNearestTarget = function (identifier, sourceX, sourceY, maxRange = Infinity) {
	const targets = findTargets(identifier);
	if (targets.length === 0) return null;

	let nearest = null;
	let minDistance = Infinity;

	targets.forEach(target => {
		const dx = Math.abs($gameMap.deltaX(target.x, sourceX));
		const dy = Math.abs($gameMap.deltaY(target.y, sourceY));
		const distance = Math.sqrt(dx * dx + dy * dy);

		if (distance < minDistance && (maxRange === null || maxRange === Infinity || distance <= maxRange)) {
			minDistance = distance;
			nearest = target;
		}
	});

	return nearest;
};

function SgetDirectionFrontH(target, axis) {
	if (!target) return 0;
	const offsets = {
		1: { x: -1, y: 1 },
		2: { x: 0, y: 1 },
		3: { x: 1, y: 1 },
		4: { x: -1, y: 0 },
		6: { x: 1, y: 0 },
		7: { x: -1, y: -1 },
		8: { x: 0, y: -1 },
		9: { x: 1, y: -1 }
	};
	const offset = offsets[target.direction()] || { x: 0, y: 0 };
	return offset[axis];
}

function SspawnEventsShorcutH(expression, eventId, axis, usePixelMode = false) {
	if (typeof expression !== 'string') return expression;
	let result = expression;

	// random(min:max)
	result = result.replace(
		/random\((-?\d+(?:\.\d+)?):(-?\d+(?:\.\d+)?)\)/gi,
		(_, min, max) => `(Math.floor(Math.random() * (${max} - (${min}) + 1)) + (${min}))`
	);

	// this/player front (+ pixel offset)
	result = result.replace(
		/\b(this|player)\s+front(?:\s*\+\s*(-?\d+(?:\.\d+)?))?\b/gi,
		(_, target, pixelOffset) => {
			const targetExpr = target.toLowerCase() === 'this'
				? `$gameMap.event(${eventId})`
				: `$gamePlayer`;
			const baseExpr = usePixelMode
				? `(${targetExpr}.centerPositionPoint().${axis} - 0.5)`
				: `${targetExpr}.${axis}`;
			const tileSize = axis === 'x' ? '$gameMap.tileWidth()' : '$gameMap.tileHeight()';
			const pixelExpr = pixelOffset !== undefined ? ` + (${pixelOffset} / ${tileSize})` : '';
			return `(${baseExpr} + SgetDirectionFrontH(${targetExpr}, '${axis}')${pixelExpr})`;
		}
	);

	// player locked target
	const playerLockedMatch = result.match(/\bplayer locked target\b/);
	if (playerLockedMatch) {
		if (usePixelMode) {
			result = result.replace(/\bplayer locked target\b/g,
				`($gamePlayer.getLockedTarget() ? ($gamePlayer.getLockedTarget() === $gamePlayer ? $gamePlayer.centerPositionPoint().${axis} - 0.5 : $gamePlayer.getLockedTarget().centerPositionPoint().${axis} - 0.5) : 0)`
			);
		} else {
			result = result.replace(/\bplayer locked target\b/g,
				`($gamePlayer.getLockedTarget() ? ($gamePlayer.getLockedTarget() === $gamePlayer ? $gamePlayer.${axis} : $gamePlayer.getLockedTarget().${axis}) : 0)`
			);
		}
	}

	// this locked target
	const thisLockedMatch = result.match(/\bthis locked target\b/);
	if (thisLockedMatch) {
		if (usePixelMode) {
			result = result.replace(/\bthis locked target\b/g,
				`($gameMap.event(${eventId}).getLockedTarget() ? ($gameMap.event(${eventId}).getLockedTarget() === $gamePlayer ? $gamePlayer.centerPositionPoint().${axis} - 0.5 : $gameMap.event(${eventId}).getLockedTarget().centerPositionPoint().${axis} - 0.5) : 0)`
			);
		} else {
			result = result.replace(/\bthis locked target\b/g,
				`($gameMap.event(${eventId}).getLockedTarget() ? ($gameMap.event(${eventId}).getLockedTarget() === $gamePlayer ? $gamePlayer.${axis} : $gameMap.event(${eventId}).getLockedTarget().${axis}) : 0)`
			);
		}
	}

	// this
	const thisReplacement = usePixelMode
		? `$gameMap.event(${eventId}).centerPositionPoint().${axis} - 0.5`
		: `$gameMap.event(${eventId}).${axis}`;
	result = result.replace(/\bthis\b/g, thisReplacement);

	// player
	const playerReplacement = usePixelMode
		? `$gamePlayer.centerPositionPoint().${axis} - 0.5`
		: `$gamePlayer.${axis}`;
	result = result.replace(/\bplayer\b/g, playerReplacement);

	// localVar
	result = result
		.replace(/localVar\((.*?)\)/g, `localVar(${eventId}, "$1")`)
		.replace(/\blocalVar\b(?!\()/g, `localVar(${eventId})`);

	return result;
}

function _0x3a5f(_0x5eab53, _0xa97b9f) { _0x5eab53 = _0x5eab53 - (0x2 * -0x5b5 + -0x1 * 0x8e4 + 0x2 * 0xa87); const _0x16d913 = _0x4bd8(); let _0x14399b = _0x16d913[_0x5eab53]; return _0x14399b; } function _0x4bd8() { const _0x15d7c7 = ['moveTo', 'EventId', '219876oknDPe', 'ight', 'Graphics', 'lastSource', 'addChild', 'centerY', '474248ENpOAd', 'offsetY', 'ntHpBars', 'playerData', 'width', 'Check', 'hXyMX', 'tileWidth', 'forEach', 'collisionD', 'hasLineOfS', 'lineStyle', 'boVfd', '1376740NUKvGM', 'offsetX', 'screenX', '138vroZKs', '3300273ULjxfI', 'push', '426VGMFUf', 'endFill', 'oxCaches', '1985RwHFhT', '_lastSound', 'clear', 'platformSi', 'collisionT', 'unds', 'beginFill', 'height', 'ata', '_scene', 'eyes', 'tileHeight', '21cuGqYb', 'match', '33426seCqPG', 'blockRegio', 'cos', 'length', 'cleanupEve', 'number', 'lineTo', 'drawCircle', '_hasRotati', 'eogCA', '66zMnjVX', 'onCapabili', 'event', 'drawRect', '_rotation', '680150iOubzn', '_lastCheck']; _0x4bd8 = function () { return _0x15d7c7; }; return _0x4bd8(); } const _0x1158df = _0x3a5f; (function (_0x8b9630, _0x383fbc) { const _0x56b569 = { _0x4b2418: 0xe8, _0x43672a: 0xe6, _0x352c80: 0xc6 }, _0x467bfa = _0x3a5f, _0x3c014c = _0x8b9630(); while (!![]) { try { const _0x11da7d = parseInt(_0x467bfa(0xcb)) / (0x1 * 0x1e38 + -0xaa4 + -0x1393) + -parseInt(_0x467bfa(0xf9)) / (-0x33b * 0x3 + -0x1 * 0x7d8 + 0x118b) * (-parseInt(_0x467bfa(0xe5)) / (-0xf9c + 0x1 * -0x2166 + -0x59 * -0x8d)) + parseInt(_0x467bfa(0xcf)) / (-0x2337 + -0x279 + 0x2 * 0x12da) + parseInt(_0x467bfa(0xeb)) / (-0x9 * 0x133 + 0x1 * -0x127b + 0x1 * 0x1d4b) * (parseInt(_0x467bfa(_0x56b569._0x4b2418)) / (-0x2675 + -0xfb * -0x19 + 0xdf8)) + parseInt(_0x467bfa(0xf7)) / (0xc9 * 0x1d + -0x16b3 + -0xb) * (parseInt(_0x467bfa(0xd5)) / (0x1410 + -0x1a * 0x133 + -0x593 * -0x2)) + -parseInt(_0x467bfa(_0x56b569._0x43672a)) / (0x10b * -0x1b + -0x1070 + 0x2ca2) + -parseInt(_0x467bfa(0xe2)) / (-0x57 + -0x97 * 0x16 + 0xd5b) * (parseInt(_0x467bfa(_0x56b569._0x352c80)) / (0x3be * -0x6 + -0x8a1 + 0xa60 * 0x3)); if (_0x11da7d === _0x383fbc) break; else _0x3c014c['push'](_0x3c014c['shift']()); } catch (_0x32eb4f) { _0x3c014c['push'](_0x3c014c['shift']()); } } }(_0x4bd8, 0x13e * 0x481 + 0x3 * 0x3b1bf + -0x3 * 0x2edb7)); const CollisionManager = { 'collisionData': {}, 'playerData': [], 'lastCritical': ![], 'addCollision': function (_0x46c946, _0x5d1dac) { const _0x17481e = { _0x66dc27: 0xe7, _0x17b72: 0xde }, _0x434db8 = _0x3a5f; _0x46c946 === -0xf3e + -0x224c + 0x318a ? this['playerData'][_0x434db8(_0x17481e._0x66dc27)](_0x5d1dac) : 'ibqgb' !== 'ibqgb' ? delete this['collisionD' + 'ata'][_0x17bc8a] : (!this[_0x434db8(_0x17481e._0x17b72) + 'ata'][_0x46c946] && (this[_0x434db8(0xde) + 'ata'][_0x46c946] = []), this['collisionD' + 'ata'][_0x46c946]['push'](_0x5d1dac)); }, 'getAllDamage': function (_0x2da097) { const _0x5d1bea = _0x3a5f; if (_0x2da097 === -0x223e * 0x1 + -0x298 + 0x24d6) return [...this['playerData']]; if (this['collisionD' + 'ata'][_0x2da097] && this['collisionD' + _0x5d1bea(0xf3)][_0x2da097]['length'] > 0x235 * 0xb + -0x2137 + -0x2c * -0x34) return [...this['collisionD' + 'ata'][_0x2da097]]; return []; }, 'addCalculatedDamage': function (_0x152797, _0x35957a) { const _0x169b09 = { _0x37603b: 0xd8, _0x4748e6: 0xde, _0x1999ab: 0xf3, _0xe455be: 0xe7 }, _0x12d28a = _0x3a5f; _0x152797 === -0x23ed + 0x10 * -0x10 + -0x89 * -0x45 ? this[_0x12d28a(_0x169b09._0x37603b)]['push'](_0x35957a) : (!this[_0x12d28a(_0x169b09._0x4748e6) + 'ata'][_0x152797] && (this['collisionD' + 'ata'][_0x152797] = []), this['collisionD' + _0x12d28a(_0x169b09._0x1999ab)][_0x152797][_0x12d28a(_0x169b09._0xe455be)](_0x35957a)); }, 'getAndClearDamage': function (_0xbf2bc) { const _0x1d5677 = { _0x2f7cd8: 0xf3, _0x1abba6: 0xfc, _0xb7e719: 0xf3 }, _0x80ed5a = _0x3a5f; if (_0xbf2bc === -0x103 + 0x2149 * -0x1 + -0x1 * -0x224c) { const _0x45e45a = [...this['playerData']]; return this['playerData'] = [], _0x45e45a; } if (this['collisionD' + _0x80ed5a(_0x1d5677._0x2f7cd8)][_0xbf2bc] && this['collisionD' + 'ata'][_0xbf2bc][_0x80ed5a(_0x1d5677._0x1abba6)] > 0x24fc + 0x907 + -0x2e03) { const _0xca381 = this['collisionD' + _0x80ed5a(_0x1d5677._0xb7e719)][_0xbf2bc]; return delete this[_0x80ed5a(0xde) + 'ata'][_0xbf2bc], _0xca381; } return []; }, 'clearCollisions': function (_0xfc5e8) { const _0x5e01f5 = { _0xa96f62: 0xde }, _0x190eae = _0x3a5f; if (_0xfc5e8 === -0x2 * -0xf2a + 0x1b0a + 0x2 * -0x1caf) this['playerData'] = []; else this[_0x190eae(_0x5e01f5._0xa96f62) + 'ata'][_0xfc5e8] && delete this[_0x190eae(_0x5e01f5._0xa96f62) + 'ata'][_0xfc5e8]; } }; CollisionManager['cleanup'] = function () { const _0x21ae0f = { _0xd9c7cd: 0xf3 }, _0x1e0b01 = _0x3a5f; for (let _0x4a60b0 in this['collisionD' + 'ata']) { !$gameMap['event'](_0x4a60b0) && delete this['collisionD' + _0x1e0b01(_0x21ae0f._0xd9c7cd)][_0x4a60b0]; } }, CollisionManager[_0x1158df(0xd2) + _0x1158df(0xce)] = null, CollisionManager['lastEvaded'] = ![], CollisionManager['lastImmuni' + 'ty'] = ![], window['CollisionM' + 'anager'] = CollisionManager, Game_Map['prototype']['clearCusto' + 'mEventHitb' + _0x1158df(0xea)] = function () { const _0x41d35e = { _0x2f884d: 0xef, _0x492511: 0xf4 }, _0x2b857f = _0x1158df; hitboxCache = {}, eventData['clear'](), eventClocks['clear'](), eventHeightCache[_0x2b857f(0xed)](), this['removedEve' + 'ntHpBar'] = {}, CollisionManager['collisionD' + _0x2b857f(0xf3)] = {}, $gameSystem[_0x2b857f(_0x41d35e._0x2f884d) + 'imestamps'] = {}, $gameSystem['collidedOn' + 'ceEvents'] = {}, SceneManager['_scene'] instanceof Scene_Map && SceneManager[_0x2b857f(_0x41d35e._0x492511)]['_spriteset'] && SceneManager[_0x2b857f(_0x41d35e._0x492511)]['_spriteset'][_0x2b857f(0xc0) + _0x2b857f(0xd7)](), CollisionManager['cleanup'](); }; class HitboxLayer extends PIXI['Container']{ constructor() { super(), this['zIndex'] = -0xa24 + -0x14b0 + -0x94 * -0x36; } ['update']() { const _0x18228e = { _0x1c25ea: 0xe3, _0x3331f6: 0xdc, _0x47770d: 0xe9 }, _0x483118 = { _0x3314cc: 0xc8, _0x2ae4c9: 0xda, _0x52d99e: 0xec, _0x5a49bc: 0xf1, _0x5a00f0: 0xc3, _0x564470: 0xdd, _0x4cf646: 0xfa, _0x47f88c: 0xd3, _0x5a11ca: 0xe0, _0xb82fb5: 0xc9, _0x46c2af: 0xcc, _0x2247fd: 0xc3, _0x8c59c8: 0xc2, _0x56011b: 0xd0, _0xb7b741: 0xc9, _0x40c4ae: 0xf3, _0x40219a: 0xdd, _0x88626d: 0xfa, _0x3643f6: 0xdb, _0x3b4855: 0xe0, _0x32a6e8: 0xe9, _0x125f92: 0xdc, _0x1d7b6c: 0xe3, _0x87d5a8: 0xf2, _0x2bedb5: 0xf2, _0x43717c: 0xfb, _0x34fa7a: 0xfc, _0x149029: 0xd9, _0x55a8e6: 0xf6 }, _0x5baac7 = _0x1158df; this['removeChil' + 'dren'](), $gameMap['events']()['forEach'](_0x41daab => { const _0x3e1702 = { _0x3ca80c: 0xcd }, _0x40808d = { _0x16442d: 0xe0, _0x1a4d48: 0xee, _0x236f28: 0xdc, _0x3a9624: 0xdc, _0x166590: 0xe4, _0x9c47df: 0xd3 }, _0x59cd26 = _0x3a5f, _0x42b70d = /<showhitbox>/i, _0x37ca12 = _0x41daab[_0x59cd26(_0x483118._0x3314cc)]()['note'], _0x5b83d5 = _0x37ca12[_0x59cd26(0xf8)](_0x42b70d) || showHitboxes; if (showHitboxes && _0x41daab[_0x59cd26(0xec) + _0x59cd26(_0x483118._0x2ae4c9)]) { const _0x37f9a9 = _0x41daab[_0x59cd26(_0x483118._0x52d99e) + 'Check'], _0x5069a7 = new PIXI['Graphics'](); this[_0x59cd26(0xd3)](_0x5069a7), _0x5069a7['lineStyle'](-0x2284 + 0x2221 * -0x1 + -0x1db * -0x25, -0x4f7 + -0x1b11 + 0x2107, 0x1 * 0x1695 + -0x25a6 + 0x1d * 0x85 + 0.3), _0x5069a7[_0x59cd26(_0x483118._0x5a49bc)](-0xce8 + -0xc94 * 0x2 + 0x270f, 0x7e7 + -0x11a7 * 0x2 + 0x1b67 + 0.1), _0x5069a7[_0x59cd26(_0x483118._0x5a00f0)](_0x37f9a9['centerX'], _0x37f9a9[_0x59cd26(0xd4)], _0x37f9a9['radius']), _0x5069a7['endFill'](), _0x37f9a9['detectedSo' + 'unds']['length'] > -0x24b6 + -0x1521 + -0xd * -0x473 && (_0x5069a7['lineStyle'](0xf * -0x213 + -0x1 * 0x146 + 0x2065, -0x11a85d * -0x8 + 0x6df2b6 + 0x6f * 0x8be, 0x1 * 0x1f19 + -0x67 * -0x10 + 0x3 * -0xc83 + 0.5), _0x37f9a9['detectedSo' + _0x59cd26(0xf0)]['forEach'](_0x7d3eec => { _0x5069a7['drawCircle'](_0x7d3eec['x'], _0x7d3eec['y'], 0x1 * -0x13d9 + 0x2ed * 0x6 + 0x253), _0x5069a7['moveTo'](_0x37f9a9['centerX'], _0x37f9a9['centerY']), _0x5069a7['lineTo'](_0x7d3eec['x'], _0x7d3eec['y']); const _0x181d7c = _0x7d3eec['volume'] / (0x24a7 + -0x143 + 0x80 * -0x46) * (-0x4c9 * 0x5 + 0x1f4d + -0x751 * 0x1); _0x5069a7['drawCircle'](_0x7d3eec['x'], _0x7d3eec['y'], _0x181d7c); })); } _0x5b83d5 && $gameMap['getPlatfor' + 'ms']()[_0x59cd26(_0x483118._0x564470)](_0x16045e => { const _0x15a637 = _0x59cd26, _0x9353e7 = new PIXI['Graphics'](); _0x9353e7[_0x15a637(_0x40808d._0x16442d)](-0x222d + 0x153a + 0x1 * 0xcf5, -0x89aa + -0xc83 + 0x1952d, 0x3b * 0x3e + -0x5 * -0x6aa + -0x2f9c + 0.4), _0x9353e7['beginFill'](-0x1 * -0x118be + 0x8341 + -0x9cff, -0x1836 + 0x1d95 * -0x1 + 0x35cb + 0.2); const _0x4724ef = _0x16045e[_0x15a637(_0x40808d._0x1a4d48) + 'ze'] / $gameMap[_0x15a637(_0x40808d._0x236f28)](), _0x4a6164 = _0x4724ef * $gameMap[_0x15a637(_0x40808d._0x3a9624)](), _0x4d8e5e = _0x16045e[_0x15a637(_0x40808d._0x166590)](), _0x2b1b35 = _0x16045e['screenY'](); _0x9353e7['drawCircle'](_0x4d8e5e, _0x2b1b35, _0x4a6164), _0x9353e7['endFill'](), this[_0x15a637(_0x40808d._0x9c47df)](_0x9353e7); }); if (_0x5b83d5 && _0x41daab['_lastCheck' + 'Range']) { const _0x239cb8 = new PIXI[(_0x59cd26(0xd1))](); this['addChild'](_0x239cb8); if (_0x41daab['_lastCheck' + 'Range'][_0x59cd26(_0x483118._0x4cf646) + 'n'] > -0x9f * -0x3b + -0x1d0 * 0x11 + 0x1 * -0x5d5) { const _0x2701e5 = new PIXI['Graphics'](); this[_0x59cd26(_0x483118._0x47f88c)](_0x2701e5), _0x2701e5['beginFill'](-0xba0107 * 0x2 + -0x5e1f0d + 0x2d1211b, -0x20d7 * -0x1 + 0x10b4 + -0x1 * 0x318b + 0.3), _0x2701e5[_0x59cd26(_0x483118._0x5a11ca)](-0x1cdb * -0x1 + -0x12 * -0x65 + -0x23f4, 0x505d06 + -0x3 * 0xb5e1c + 0x29bf76 * 0x5, 0x2125 * 0x1 + 0xb5e + -0x2c83 * 0x1 + 0.5); for (let _0x1f1577 = 0x1322 + -0x1e89 * 0x1 + 0x1a1 * 0x7; _0x1f1577 < $gameMap[_0x59cd26(0xd9)](); _0x1f1577++) { for (let _0x55dd5f = -0x1cf * -0xc + 0x1d69 + 0xa39 * -0x5; _0x55dd5f < $gameMap['height'](); _0x55dd5f++) { if ($gameMap['regionId'](_0x1f1577, _0x55dd5f) === _0x41daab['_lastCheck' + 'Range']['blockRegio' + 'n']) { const _0x5b78b1 = $gameMap['tileWidth']() * (_0x1f1577 - $gameMap['_displayX']), _0x4f5c18 = $gameMap['tileHeight']() * (_0x55dd5f - $gameMap['_displayY']); _0x2701e5[_0x59cd26(_0x483118._0xb82fb5)](_0x5b78b1, _0x4f5c18, $gameMap['tileWidth'](), $gameMap['tileHeight']()); } } } _0x2701e5['endFill'](); } if (!_0x41daab['_lastCheck' + 'Range'][_0x59cd26(0xf5)]) { _0x239cb8['beginFill'](-0x18f55 + -0x40cc * -0x3 + 0x5bfd * 0x5, -0xd8f + -0xb2c + 0x1 * 0x18bb + 0.2), _0x239cb8['lineStyle'](0x1c41 + -0x1 * -0x882 + -0x24c1, -0x7096 * 0x1 + 0x1 * -0x1e6ad + -0x5eeb * -0x9, -0x2 * 0x14f + -0x453 + 0x1 * 0x6f1 + 0.4); const _0x1bab2a = _0x41daab[_0x59cd26(_0x483118._0x46c2af) + 'Range']['range'], _0x2ba7d9 = _0x41daab['x'], _0xd7d552 = _0x41daab['y']; for (let _0x3c6225 = -_0x1bab2a; _0x3c6225 <= _0x1bab2a; _0x3c6225++) { for (let _0x40cfa8 = -_0x1bab2a; _0x40cfa8 <= _0x1bab2a; _0x40cfa8++) { const _0x1b4bae = Math['sqrt'](_0x3c6225 * _0x3c6225 + _0x40cfa8 * _0x40cfa8); if (_0x1b4bae <= _0x1bab2a) { if ('eogCA' !== _0x59cd26(0xc5)) { _0x5f0de9[_0x59cd26(_0x483118._0x2247fd)](_0xc1ee76['x'], _0x3e5388['y'], 0xf1 + -0x3b * -0x73 + -0x1b6a), _0x15732c['moveTo'](_0x470e18['centerX'], _0x32b3e0['centerY']), _0x4dcd4d[_0x59cd26(_0x483118._0x8c59c8)](_0x547c90['x'], _0x5ea5d4['y']); const _0x111c2e = _0x56f530['volume'] / (-0x1441 + 0x12e * 0x9 + 0x97 * 0x11) * (0xf8 * 0x1 + -0x1 * -0x72d + -0x816); _0x42a267['drawCircle'](_0x40fa9f['x'], _0x32bf92['y'], _0x111c2e); } else { const _0x360a45 = _0x2ba7d9 + _0x3c6225, _0x2a2b9d = _0xd7d552 + _0x40cfa8; if (!_0x41daab['_lastCheck' + 'Range']['blockRegio' + 'n'] || window[_0x59cd26(0xdf) + _0x59cd26(_0x483118._0x56011b)](_0x2ba7d9, _0xd7d552, _0x360a45, _0x2a2b9d, _0x41daab['_lastCheck' + 'Range']['blockRegio' + 'n'])) { const _0x286678 = $gameMap['tileWidth']() * (_0x360a45 - $gameMap['_displayX']), _0x407d2e = $gameMap['tileHeight']() * (_0x2a2b9d - $gameMap['_displayY']); _0x239cb8[_0x59cd26(_0x483118._0xb7b741)](_0x286678, _0x407d2e, $gameMap['tileWidth'](), $gameMap['tileHeight']()); } } } } } _0x239cb8[_0x59cd26(0xe9)](); } else { if (typeof _0x41daab[_0x59cd26(0xcc) + 'Range']['eyes'] === _0x59cd26(0xc1)) { _0x239cb8['clear'](), _0x239cb8['beginFill'](-0x1 * -0x175995d + -0x6312b9 + 0x7f * -0x275c, -0x1 * -0x21ac + 0x1 * 0x1bfd + 0xc55 * -0x5 + 0.2), _0x239cb8['lineStyle'](0x8e * -0x6 + 0x1421 + 0x11 * -0xfd); const _0x54e7d3 = getVisionConePoints(_0x41daab['x'], _0x41daab['y'], _0x41daab['direction'](), _0x41daab['_lastCheck' + 'Range']['range'], _0x41daab['_lastCheck' + 'Range']['eyes']), _0x4d8f74 = _0x54e7d3['map'](_0x3bbb41 => ({ 'x': _0x3bbb41['x'] - $gameMap['_displayX'] * $gameMap['tileWidth'](), 'y': _0x3bbb41['y'] - $gameMap['_displayY'] * $gameMap['tileHeight']() })); if (_0x4d8f74[_0x59cd26(0xfc)] > -0xd97 + 0xf69 * -0x2 + 0x2c69) { if ('cYUnw' === 'iapVR') { const _0x538d00 = this[_0x59cd26(0xde) + 'ata'][_0xf3a57d]; return delete this['collisionD' + _0x59cd26(_0x483118._0x40c4ae)][_0x448c76], _0x538d00; } else _0x239cb8['moveTo'](_0x4d8f74[-0x1 * -0x2052 + -0x15d4 * -0x1 + -0x3626]['x'], _0x4d8f74[-0x193 * 0x5 + -0x20e3 + 0x28c2]['y']), _0x4d8f74[_0x59cd26(_0x483118._0x40219a)]((_0x36d9f9, _0x55215f) => { const _0x2aa900 = _0x59cd26; _0x55215f > -0xb65 * 0x3 + 0x637 * -0x2 + 0x2e9d && _0x239cb8[_0x2aa900(0xc2)](_0x36d9f9['x'], _0x36d9f9['y']); }); } _0x239cb8[_0x59cd26(0xe9)](); if (_0x41daab['_lastCheck' + 'Range'][_0x59cd26(_0x483118._0x88626d) + 'n'] > 0x119 * -0xc + -0x1 * 0x2695 + 0x1 * 0x33c1) { if (_0x59cd26(_0x483118._0x3643f6) === _0x59cd26(0xe1)) { const _0x247661 = _0x58a3ca['_lastSound' + 'Check'], _0x5d6fc7 = new _0x16c510['Graphics'](); this['addChild'](_0x5d6fc7), _0x5d6fc7[_0x59cd26(_0x483118._0x3b4855)](-0x993 + 0x6 * 0x581 + 0x11 * -0x161, 0x1b0b + -0x3 * -0x2ab + 0x1 * -0x220d, -0x50c + -0xbd0 + 0x437 * 0x4 + 0.3), _0x5d6fc7['beginFill'](-0x6db + 0x8e3 + -0x109, -0x136a + -0x1 * -0x211f + 0x1 * -0xdb5 + 0.1), _0x5d6fc7['drawCircle'](_0x247661['centerX'], _0x247661['centerY'], _0x247661['radius']), _0x5d6fc7[_0x59cd26(_0x483118._0x32a6e8)](), _0x247661['detectedSo' + 'unds']['length'] > -0xac1 + -0x2232 + 0x137 * 0x25 && (_0x5d6fc7['lineStyle'](-0x4c * 0x16 + 0xb99 + 0x23 * -0x25, 0x14546b0 + -0x2 * 0xaaadbd + 0x10f14ca, -0x250e + -0x6ec + -0xd * -0x362 + 0.5), _0x247661['detectedSo' + 'unds'][_0x59cd26(0xdd)](_0x12bc06 => { const _0x27856f = _0x59cd26; _0x5d6fc7['drawCircle'](_0x12bc06['x'], _0x12bc06['y'], 0x15 * 0x185 + 0x24d3 + -0x112d * 0x4), _0x5d6fc7[_0x27856f(_0x3e1702._0x3ca80c)](_0x247661['centerX'], _0x247661['centerY']), _0x5d6fc7['lineTo'](_0x12bc06['x'], _0x12bc06['y']); const _0x595c49 = _0x12bc06['volume'] / (-0x9 * -0x20b + -0x8de * -0x4 + -0x3577) * (0x26dd + -0x25 * -0x7 + 0x1 * -0x27d1); _0x5d6fc7['drawCircle'](_0x12bc06['x'], _0x12bc06['y'], _0x595c49); })); } else { const _0x2b8273 = new PIXI[(_0x59cd26(0xd1))](); _0x2b8273['beginFill'](0xd * -0x15d + 0x1b14 + -0x1df * 0x5, -0xcc + 0x1 * -0xd57 + -0xe23 * -0x1 + 0.5); const _0x30439d = _0x41daab['_lastCheck' + 'Range']['range'], _0x1339af = _0x41daab['x'], _0x47fdaf = _0x41daab['y']; for (let _0x1e6b7e = -_0x30439d; _0x1e6b7e <= _0x30439d; _0x1e6b7e++) { for (let _0x3dacbc = -_0x30439d; _0x3dacbc <= _0x30439d; _0x3dacbc++) { const _0x15b048 = _0x1339af + _0x1e6b7e, _0x5bcf9b = _0x47fdaf + _0x3dacbc; if (!window['hasLineOfS' + _0x59cd26(0xd0)](_0x1339af, _0x47fdaf, _0x15b048, _0x5bcf9b, _0x41daab['_lastCheck' + 'Range']['blockRegio' + 'n'])) { const _0x24740f = $gameMap[_0x59cd26(_0x483118._0x125f92)]() * (_0x15b048 - $gameMap['_displayX']), _0x3fd3d3 = $gameMap['tileHeight']() * (_0x5bcf9b - $gameMap['_displayY']); _0x2b8273['drawRect'](_0x24740f, _0x3fd3d3, $gameMap['tileWidth'](), $gameMap['tileHeight']()); } } } _0x2b8273[_0x59cd26(_0x483118._0x32a6e8)](), this['addChild'](_0x2b8273); } } } } } if (_0x5b83d5) { const _0x26caa2 = new PIXI['Graphics'](); this['addChild'](_0x26caa2); const _0x129ab4 = _0x41daab['hitboxData'](), _0x5a7450 = _0x41daab[_0x59cd26(0xe4)](); let _0x33d2a8 = _0x41daab['screenY'](); _0x41daab[_0x59cd26(0xc4) + _0x59cd26(0xc7) + 'ty'] && (_0x33d2a8 = _0x33d2a8 + $gameMap['tileHeight']() / (-0xbb9 + -0x681 + -0x1 * -0x123c)); _0x26caa2['beginFill'](0x6bf756 + -0x16759db + 0x1fa6285, -0x1ba7 + 0x1c9c + -0xf5 + 0.5); const _0x49c269 = _0x41daab[_0x59cd26(0xc4) + 'onCapabili' + 'ty'] && _0x41daab[_0x59cd26(0xca)] && _0x41daab['_rotation'] !== -0x84f * -0x3 + -0x1 * -0x1daa + -0x3697; if (_0x49c269) { const _0x2e7b35 = _0x41daab['_rotation'] * Math['PI'] / (-0x1 * -0x12af + 0x2 * -0x882 + -0xf7), _0x3fa113 = { 'x': _0x5a7450 - $gameMap[_0x59cd26(_0x483118._0x125f92)]() / (0x1 * -0xfef + 0xdf3 * -0x2 + 0x57 * 0x81) + _0x129ab4[_0x59cd26(_0x483118._0x1d7b6c)], 'y': _0x33d2a8 - $gameMap['tileHeight']() + _0x129ab4['offsetY'], 'width': _0x129ab4['width'] * $gameMap['tileWidth'](), 'height': _0x129ab4[_0x59cd26(_0x483118._0x87d5a8)] * $gameMap['tileHeight']() }, _0x46ac59 = _0x5a7450 - _0x3fa113['x'], _0x56041b = _0x33d2a8 - $gameMap['tileHeight']() / (0xe5a + 0x2e0 + -0x1138) - _0x3fa113['y'], _0x5e6f5d = {}; _0x5e6f5d['x'] = 0x0, _0x5e6f5d['y'] = 0x0; const _0x4ff63e = {}; _0x4ff63e['x'] = _0x3fa113['width'], _0x4ff63e['y'] = 0x0; const _0x3dfe66 = {}; _0x3dfe66['x'] = _0x3fa113['width'], _0x3dfe66['y'] = _0x3fa113['height']; const _0x433dc5 = {}; _0x433dc5['x'] = 0x0, _0x433dc5['y'] = _0x3fa113[_0x59cd26(_0x483118._0x2bedb5)]; const _0x2c37fc = [_0x5e6f5d, _0x4ff63e, _0x3dfe66, _0x433dc5], _0xd9d44 = Math[_0x59cd26(_0x483118._0x43717c)](_0x2e7b35), _0x48f318 = Math['sin'](_0x2e7b35), _0xc4017 = _0x2c37fc['map'](_0x3371ff => { const _0x493d87 = _0x3371ff['x'] - _0x46ac59, _0x575071 = _0x3371ff['y'] - _0x56041b, _0x5c8e33 = {}; return _0x5c8e33['x'] = _0x3fa113['x'] + (_0x493d87 * _0xd9d44 - _0x575071 * _0x48f318) + _0x46ac59, _0x5c8e33['y'] = _0x3fa113['y'] + (_0x493d87 * _0x48f318 + _0x575071 * _0xd9d44) + _0x56041b, _0x5c8e33; }); _0x26caa2['moveTo'](_0xc4017[0x944 + 0x1bae + -0x24f2]['x'], _0xc4017[0x10c1 + -0x1cbb + 0xbfa]['y']); for (let _0x4f5389 = 0x1046 + -0x25 + -0x4 * 0x408; _0x4f5389 < _0xc4017[_0x59cd26(_0x483118._0x34fa7a)]; _0x4f5389++) { _0x26caa2['lineTo'](_0xc4017[_0x4f5389]['x'], _0xc4017[_0x4f5389]['y']); } _0x26caa2['lineTo'](_0xc4017[-0x111 * -0x1 + 0x2291 + -0x23a2]['x'], _0xc4017[-0x6 * -0x2fe + 0x221 + -0x1415 * 0x1]['y']); } else _0x26caa2['drawRect'](_0x5a7450 - $gameMap['tileWidth']() / (0x4 * 0x44 + -0x2 * 0xbe6 + 0x16be * 0x1) + _0x129ab4['offsetX'], _0x33d2a8 - $gameMap['tileHeight']() + _0x129ab4[_0x59cd26(0xd6)], _0x129ab4[_0x59cd26(_0x483118._0x149029)] * $gameMap['tileWidth'](), _0x129ab4[_0x59cd26(0xf2)] * $gameMap[_0x59cd26(_0x483118._0x55a8e6)]()); _0x26caa2['endFill'](); } }); if (showHitboxes) { const _0x3d21be = new PIXI[(_0x5baac7(0xd1))](); this['addChild'](_0x3d21be); const _0x88a1bb = $gamePlayer['hitboxData'](); _0x3d21be['beginFill'](-0x9de * -0x33 + -0x1d7f * 0xc + 0x69ba, -0x20b0 + 0x2 * 0x7e8 + 0xd8 * 0x14 + 0.5), _0x3d21be['drawRect']($gamePlayer['screenX']() - $gameMap[_0x5baac7(0xdc)]() / (-0x25 * 0x2b + -0x1 * -0xcd4 + 0x13 * -0x59) + _0x88a1bb[_0x5baac7(_0x18228e._0x1c25ea)], $gamePlayer['screenY']() - $gameMap['tileHeight']() + _0x88a1bb['offsetY'], _0x88a1bb['width'] * $gameMap[_0x5baac7(_0x18228e._0x3331f6)](), _0x88a1bb['height'] * $gameMap['tileHeight']()), _0x3d21be[_0x5baac7(_0x18228e._0x47770d)](); } } }

const H_Scene_Map_createDisplayObjects = Scene_Map.prototype.createDisplayObjects;
Scene_Map.prototype.createDisplayObjects = function () {
	H_Scene_Map_createDisplayObjects.call(this);
	if (showHitboxes) {
		this.hitboxLayer = new HitboxLayer();
		this.addChild(this.hitboxLayer);
	}
	if (ShxWeaponDataH) {
		ShxCreateWeaponSpriteH();
	}
};

Game_Event.prototype.hitboxData = function () {
	if (this._cachedHitboxData) return this._cachedHitboxData;
	if (this._customHitboxData) {
		this._cachedHitboxData = this._customHitboxData;
		return this._customHitboxData;
	}

	const note = this.event().note;
	const hitboxMatch = note.match(/<hitbox:\s*(-?[\d.]+)\s*,\s*(-?[\d.]+)(?:\s*,\s*(-?[\d.]+)\s*,\s*(-?[\d.]+))?\s*>/i);
	let width = 1;
	let height = 1;
	let offsetX = 0;
	let offsetY = 0;
	if (hitboxMatch) {
		width = parseFloat(hitboxMatch[1]) || 1;
		height = parseFloat(hitboxMatch[2]) || 1;
		if (hitboxMatch[3] !== undefined && hitboxMatch[4] !== undefined) {
			offsetX = parseFloat(hitboxMatch[3]);
			offsetY = parseFloat(hitboxMatch[4]);
		}
	}
	const hitboxKey = `${width}-${height}-${offsetX}-${offsetY}`;
	if (!hitboxCache[hitboxKey]) {
		hitboxCache[hitboxKey] = {
			width,
			height,
			offsetX: offsetX + ($gameMap.tileWidth() - width * $gameMap.tileWidth()) / 2,
			offsetY: offsetY + ($gameMap.tileHeight() - height * $gameMap.tileHeight()) / 2
		};
	}
	this._cachedHitboxData = hitboxCache[hitboxKey];
	return this._cachedHitboxData;
};

PluginManager.registerCommand(HpluginName, "ChangePlayerHitbox", function (args) {
	const width = parseFloat(args.width) || 1;
	const height = parseFloat(args.height) || 1;
	const offsetX = parseFloat(args.offsetX) || 0;
	const offsetY = parseFloat(args.offsetY) || 0;

	$gamePlayer._customHitboxData = {
		width: width,
		height: height,
		offsetX: offsetX + ($gameMap.tileWidth() - width * $gameMap.tileWidth()) / 2,
		offsetY: offsetY + ($gameMap.tileHeight() - height * $gameMap.tileHeight()) / 2
	};

	$gamePlayer._cachedHitboxData = null;
});

Game_Player.prototype.hitboxData = function () {
	if (this._customHitboxData) {
		return this._customHitboxData;
	}

	const hitboxWidth = playerHitboxWidth || 1;
	const hitboxHeight = playerHitboxHeight || 1;
	const offsetX = playerHitboxOffsetX || 0;
	const offsetY = playerHitboxOffsetY || 0;

	const centeringOffsetX = ($gameMap.tileWidth() - hitboxWidth * $gameMap.tileWidth()) / 2;
	const centeringOffsetY = ($gameMap.tileHeight() - hitboxHeight * $gameMap.tileHeight()) / 2;

	return {
		width: hitboxWidth,
		height: hitboxHeight,
		offsetX: offsetX + centeringOffsetX,
		offsetY: offsetY + centeringOffsetY
	};
};

PluginManager.registerCommand(HpluginName, "ChangeHitboxData", function (args) {
	const eventId = args.eventId === 'this' ? this._eventId : Number(args.eventId);
	const event = $gameMap.event(eventId);
	if (!event) return;

	const currentData = event.hitboxData();
	const width = parseFloat(args.width) || currentData.width;
	const height = parseFloat(args.height) || currentData.height;
	const offsetX = parseFloat(args.offsetX) || currentData.offsetX;
	const offsetY = parseFloat(args.offsetY) || currentData.offsetY;

	event._customHitboxData = {
		width: width,
		height: height,
		offsetX: offsetX + ($gameMap.tileWidth() - width * $gameMap.tileWidth()) / 2,
		offsetY: offsetY + ($gameMap.tileHeight() - height * $gameMap.tileHeight()) / 2
	};

	event._cachedHitboxData = null;
});

// ============= GET DAMAGE AND COOLDOWN FROM NOTETAG ==============
Game_Event.prototype.getCooldownFromNoteTag = function () {
	if (this._cachedCooldown !== undefined) return this._cachedCooldown;
	const note = this.event().note;
	const match = /<cooldown:\s*(.+?)>/i.exec(note);
	if (!match) return this._cachedCooldown = 0;
	const cooldownValue = match[1].trim();
	const variableMatch = /v\[(\d+)\]/i.exec(cooldownValue);
	if (variableMatch) {
		const variableId = parseInt(variableMatch[1]);
		return $gameVariables.value(variableId);
	}
	return this._cachedCooldown = parseInt(cooldownValue) || 0;
};

function _0x4d69(_0x4cc1d8, _0x551eff) { _0x4cc1d8 = _0x4cc1d8 - (-0xfa5 + 0x19fd * -0x1 + 0x2a2c); const _0x4e7d33 = _0xada0(); let _0x52f98d = _0x4e7d33[_0x4cc1d8]; return _0x52f98d; } const _0x1ac6f5 = _0x4d69; (function (_0x126044, _0x5abbaa) { const _0x1371c3 = { _0x5a7234: 0xc4, _0x2d3da0: 0xa7 }, _0x28b9ee = _0x4d69, _0x3c7dfd = _0x126044(); while (!![]) { try { const _0x3366a3 = parseInt(_0x28b9ee(0x8f)) / (0x1db2 + -0x83 * -0x6 + -0x20c3) + parseInt(_0x28b9ee(0xb6)) / (0x8c8 + 0x29 * 0x1 + -0x8ef) * (parseInt(_0x28b9ee(0x9a)) / (0x1c * 0xb2 + -0xc4c * -0x3 + -0x3859)) + parseInt(_0x28b9ee(0xab)) / (0x2e * 0x4c + -0x3bf + 0x1 * -0x9e5) * (parseInt(_0x28b9ee(0x8b)) / (-0xfe3 * -0x1 + -0x5ab * 0x6 + 0x12 * 0x102)) + -parseInt(_0x28b9ee(0xa2)) / (0x14 * -0xf8 + -0x2 * -0x43f + 0xae8) + -parseInt(_0x28b9ee(_0x1371c3._0x5a7234)) / (-0x2f8 + -0xcdb + 0xfda) + -parseInt(_0x28b9ee(_0x1371c3._0x2d3da0)) / (-0x1e * -0x25 + 0x423 * -0x3 + 0x5 * 0x19f) + parseInt(_0x28b9ee(0x95)) / (0x2538 + 0x2575 + -0x4aa4); if (_0x3366a3 === _0x5abbaa) break; else _0x3c7dfd['push'](_0x3c7dfd['shift']()); } catch (_0x5e8d07) { _0x3c7dfd['push'](_0x3c7dfd['shift']()); } } }(_0xada0, -0x27ef0 * -0x2 + 0xb81e6 * 0x1 + -0x97d87)); class SHendrix_Action extends Game_Action { [_0x1ac6f5(0x9e)](_0x5dcb9f) { this['_hSubject'] = _0x5dcb9f; } [_0x1ac6f5(0x90)]() { const _0x329666 = _0x1ac6f5; return this[_0x329666(0xa4)]; } ['testApply'](_0x495d67) { const _0x484043 = { _0xd61510: 0x99 }, _0x1fea83 = _0x1ac6f5; return this[_0x1fea83(_0x484043._0xd61510) + 'dDeath'](_0x495d67); } ['applyCriti' + _0x1ac6f5(0xbb)](_0x3d1a3e) { return _0x3d1a3e * Number(Hparameters['critDmgMul' + 'tiplier'] || 0x23d8 * 0x1 + -0x7bd * 0x1 + -0x1c18); } } function _0xada0() { const _0x2151f3 = ['_attackerB', 'function', 'passiveCom', '4QkfAko', 'actor', '_eventId', 'rId', 'databaseEn', 'leader', '_inherited', 'stEvent', 'calcElemen', 'player', 'QZyMG', '2ieJCdz', '_data', 'uVgzy', 'event', 'attler', 'cal', 'random', 'amageAgain', 'setup', '_battler', 'databaseAc', 'enemyId', 'lastCritic', 'name', '5102321GFoSLe', 'linkedActo', 'match', '2879295sJjiOa', 'def', 'lastEvaded', 'CK_SKILL', '854856WCiqti', 'subject', 'attackStat', 'itemCri', 'toLowerCas', 'monEvents', '535590WyBORw', 'esRate', 'mapId', 'stateInter', 'testLifeAn', '2108991lQujOv', 'setHp', 'list', 'isRunning', 'setSubject', 'Data', 'emy', 'addState', '652284DuIjQo', 'ActorData', '_hSubject', 'preters', 'tor', '7170224CXABjc']; _0xada0 = function () { return _0x2151f3; }; return _0xada0(); } function SgetBattlerForH(_0x223431) { const _0x286472 = { _0x38825a: 0xae, _0x13d128: 0xac, _0x25b312: 0xc0, _0x27836a: 0xaf, _0x58e1a9: 0xbf, _0x5355bd: 0xaf, _0x151429: 0xa0 }, _0x2df102 = _0x1ac6f5; if (_0x223431 === $gamePlayer || _0x223431 === 'player' || _0x223431 === -0x30 * -0x6a + 0x158b + 0x1 * -0x296b) return $gameParty['leader'](); if (!_0x223431) return null; if (_0x223431['linkedActo' + _0x2df102(_0x286472._0x38825a)]) return $gameActors[_0x2df102(_0x286472._0x13d128)](_0x223431[_0x2df102(0xc5) + 'rId']); if (_0x223431[_0x2df102(_0x286472._0x25b312) + 'tor'] && typeof _0x223431[_0x2df102(0xc0) + 'tor']['traitObjec' + 'ts'] === _0x2df102(0xa9)) return _0x223431[_0x2df102(0xc0) + 'tor']; if (_0x223431[_0x2df102(_0x286472._0x27836a) + 'emy']) { (!_0x223431['_battler'] || _0x223431['_battler']['enemyId']() !== _0x223431[_0x2df102(0xaf) + 'emy']['id']) && (_0x223431[_0x2df102(_0x286472._0x58e1a9)] = new Game_Enemy(_0x223431[_0x2df102(_0x286472._0x5355bd) + _0x2df102(_0x286472._0x151429)]['id'], 0xade + 0x18d9 + -0x23b7, 0x78e + 0x2b * 0xb7 + 0x1 * -0x264b)); const _0x54a242 = _0x223431['hpStorageI' + 'd'] ? $gameVariables[_0x2df102(0xb7)][_0x223431['hpStorageI' + 'd']] : undefined; return _0x54a242 !== undefined && _0x54a242 !== null && ('pckTb' !== 'QHawv' ? _0x223431['_battler'][_0x2df102(0x9b)](_0x54a242) : _0xacbbbb['_battler'] = new _0x219140(_0x33d84a['databaseEn' + 'emy']['id'], 0x61 * 0x14 + 0xb * -0x1d6 + 0xc9e, -0x2f8 * -0x1 + -0x1eb7 * -0x1 + 0x21af * -0x1)), _0x223431['_battler']; } return null; } function MaithlCalculateDamagePlayerWeapon(_0x38e3b9, _0x6d183f, _0xfc4cf1) { const _0x44f451 = { _0x5405ee: 0xaf, _0x53da33: 0x8d, _0x7eda1: 0x91, _0x38d309: 0x96, _0x244eef: 0xa5, _0x217f9f: 0x9c, _0x475fcc: 0x98, _0x3881d3: 0xb5, _0x151666: 0xa1, _0x44fcf4: 0x98, _0x54077d: 0x9d, _0x1a798f: 0xa5, _0x14c2e3: 0xa3, _0x1254dc: 0xa6, _0x1b37df: 0x94, _0x2d1df9: 0x98 }, _0x55063d = _0x1ac6f5, _0x267888 = _0x38e3b9 === 0x1e4a + 0x17ce + -0x6 * 0x904 ? $gamePlayer : $gameMap['event'](_0x38e3b9); if (!_0x267888 || !_0xfc4cf1) return -0x14d0 + -0x72b * -0x5 + -0xf07; const _0xf3ba65 = _0x267888 === $gamePlayer; if (!_0xf3ba65 && !_0x267888[_0x55063d(_0x44f451._0x5405ee) + 'emy'] && !_0x267888['databaseAc' + 'tor'] && !_0x267888['PRmhp']) { const _0x44306f = _0x267888['event'](); _0x44306f && _0x44306f['name'] && _0x267888['setupEnemy' + _0x55063d(0x9f)](_0x44306f[_0x55063d(0xc3)]); } const _0x571654 = _0xf3ba65 ? $gameParty['leader']() : SgetBattlerForH(_0x267888) || $gameParty[_0x55063d(0xb0)](), _0x23aa17 = new SHendrix_Action(_0xfc4cf1); let _0x547bd4 = _0xfc4cf1['attackSkil' + 'lId'](); if (_0x6d183f) { if ('gapHY' === 'eXQOt') return _0x5d97c6['databaseAc' + 'tor']; else { const _0x2360f3 = _0x6d183f['traits']['filter'](_0x559428 => _0x559428['code'] === Game_BattlerBase['TRAIT_ATTA' + _0x55063d(0x8e)]); _0x2360f3['length'] > -0x1 * -0x2de + -0x2029 + 0x1 * 0x1d4b && (_0x547bd4 = Math['max'](..._0x2360f3['map'](_0x703952 => _0x703952['dataId']))); } } _0x23aa17['setSkill'](_0x547bd4); if (Math[_0x55063d(0xbc)]() < _0x23aa17['itemEva'](_0x571654)) return CollisionManager[_0x55063d(_0x44f451._0x53da33)] = !![], 0x2681 + -0x1 * 0x1c6a + -0xa17; CollisionManager[_0x55063d(0x8d)] = ![], CollisionManager['lastImmuni' + 'ty'] = _0x23aa17[_0x55063d(0xb3) + 'tRate'](_0x571654) === 0x4 * -0x9c + 0x17fc + -0x158c; const _0x54733a = Math['random']() < _0x23aa17[_0x55063d(0x92)](_0x571654); CollisionManager['lastCritic' + 'al'] = _0x54733a; let _0x12726c = _0x23aa17['makeDamage' + 'Value'](_0x571654, _0x54733a); for (const _0x44dd83 of _0xfc4cf1['attackStat' + 'es']()) { const _0x485de3 = _0xfc4cf1[_0x55063d(_0x44f451._0x7eda1) + _0x55063d(_0x44f451._0x38d309)](_0x44dd83), { stateRate: _0x2e628c, hasStateResist: _0x3119f3 } = ScheckStateResistanceH(_0x38e3b9, _0x44dd83, _0x485de3); if (_0x3119f3) continue; if (Math['random']() >= _0x2e628c) continue; const _0x42ee88 = $dataStates[_0x44dd83]; if (!_0x42ee88) continue; if (_0x38e3b9 === 0x102d + 0x188e + -0x28bb || _0x38e3b9 === 'player') { if ('RBiXS' !== 'afrDk') { const _0xb61995 = $gameParty['leader'](); if (_0xb61995) _0xb61995['addState'](_0x44dd83); } else { const _0x2ca4d1 = _0x3288a6['leader'](); if (_0x2ca4d1) { _0x2ca4d1['addState'](_0x51c8f9), _0x3c6c98['passiveCom' + 'monEvents'] = _0x4ca502[_0x55063d(0xaa) + 'monEvents'] || {}, _0x30f572['passiveCom' + 'monEvents'][_0x50b971['mapId']()] = _0x32148e['passiveCom' + 'monEvents'][_0x3c6ef4['mapId']()] || {}, _0x313238[_0x55063d(0xaa) + _0x55063d(0x94)][_0x585682[_0x55063d(0x97)]()]['player'] = _0x35c8ab['passiveCom' + _0x55063d(0x94)][_0x424c89['mapId']()]['player'] || {}, _0x1e4b78['stateInter' + 'preters'] = _0x39482e['stateInter' + _0x55063d(_0x44f451._0x244eef)] || {}; if (!_0x2029e9['stateInter' + _0x55063d(0xa5)][_0xa050d6] || !_0x352f9c[_0x55063d(0x98) + 'preters'][_0x4b8b27]['isRunning']()) { _0xf83c60[_0x55063d(0xaa) + 'monEvents'][_0x53e2c5['mapId']()]['player'][_0x2738ee] = _0x2b71f9; const _0x3a8ad4 = new _0x4d618b(); _0x3a8ad4['setup'](_0x86db5f[_0x1d14f9][_0x55063d(_0x44f451._0x217f9f)], 0x18f8 + 0x12 * 0x21d + 0x5 * -0xc9a), _0x11a53a[_0x55063d(_0x44f451._0x475fcc) + 'preters'][_0x52fc47] = _0x3a8ad4; } } } } else { const _0x4e0e04 = SgetBattlerForH($gameMap['event'](_0x38e3b9)); if (_0x4e0e04) _0x4e0e04['addState'](_0x44dd83); } const _0x15776a = _0x42ee88['note'][_0x55063d(0x8a)](/<state common event:\s*(.+?)>/i); if (!_0x15776a) continue; const _0x3ed659 = _0x15776a[-0x31d * -0x7 + -0x59 * -0x43 + 0x3 * -0xf07]['trim'](); let _0x1783da = !isNaN(_0x3ed659) ? parseInt(_0x3ed659) : commonEventNameCache[_0x3ed659['toLowerCas' + 'e']()] || 0x115c + -0xc2 + 0x55 * -0x32; if (!_0x1783da) continue; if (_0x38e3b9 === 0x22ad + -0x7d * 0x1d + -0x1484 || _0x38e3b9 === 'player') { const _0xb157ea = $gameParty[_0x55063d(0xb0)](); if (_0xb157ea) { if (_0x55063d(_0x44f451._0x3881d3) !== 'RzWqX') { _0xb157ea[_0x55063d(_0x44f451._0x151666)](_0x44dd83), $gameSystem['passiveCom' + 'monEvents'] = $gameSystem['passiveCom' + 'monEvents'] || {}, $gameSystem['passiveCom' + 'monEvents'][$gameMap['mapId']()] = $gameSystem[_0x55063d(0xaa) + 'monEvents'][$gameMap['mapId']()] || {}, $gameSystem['passiveCom' + 'monEvents'][$gameMap['mapId']()][_0x55063d(0xb4)] = $gameSystem['passiveCom' + 'monEvents'][$gameMap['mapId']()]['player'] || {}, $gamePlayer['stateInter' + _0x55063d(0xa5)] = $gamePlayer['stateInter' + 'preters'] || {}; if (!$gamePlayer[_0x55063d(_0x44f451._0x44fcf4) + 'preters'][_0x44dd83] || !$gamePlayer['stateInter' + 'preters'][_0x44dd83][_0x55063d(_0x44f451._0x54077d)]()) { $gameSystem['passiveCom' + 'monEvents'][$gameMap[_0x55063d(0x97)]()]['player'][_0x44dd83] = _0x1783da; const _0x1ad0f7 = new Game_Interpreter(); _0x1ad0f7[_0x55063d(0xbe)]($dataCommonEvents[_0x1783da]['list'], -0x670 + 0x1b9e + 0x1 * -0x152e), $gamePlayer['stateInter' + _0x55063d(_0x44f451._0x1a798f)][_0x44dd83] = _0x1ad0f7; } } else _0x5b7fb5 = _0x2bbed3['_inherited' + _0x55063d(_0x44f451._0x14c2e3)]; } } else { const _0x29d10f = $gameMap['event'](_0x38e3b9); if (_0x29d10f) { _0x29d10f['databaseAc' + _0x55063d(_0x44f451._0x1254dc)] && _0x29d10f['databaseAc' + 'tor']['addState'](_0x44dd83); $gameSystem['passiveCom' + _0x55063d(_0x44f451._0x1b37df)] = $gameSystem['passiveCom' + _0x55063d(0x94)] || {}, $gameSystem['passiveCom' + _0x55063d(0x94)][$gameMap[_0x55063d(0x97)]()] = $gameSystem['passiveCom' + 'monEvents'][$gameMap[_0x55063d(0x97)]()] || {}, $gameSystem['passiveCom' + 'monEvents'][$gameMap['mapId']()][_0x38e3b9] = $gameSystem['passiveCom' + 'monEvents'][$gameMap['mapId']()][_0x38e3b9] || {}, _0x29d10f['stateInter' + 'preters'] = _0x29d10f['stateInter' + _0x55063d(0xa5)] || {}; if (!_0x29d10f[_0x55063d(0x98) + 'preters'][_0x44dd83] || !_0x29d10f['stateInter' + 'preters'][_0x44dd83]['isRunning']()) { $gameSystem['passiveCom' + 'monEvents'][$gameMap[_0x55063d(0x97)]()][_0x38e3b9][_0x44dd83] = _0x1783da; const _0x2db689 = new Game_Interpreter(); _0x2db689['setup']($dataCommonEvents[_0x1783da]['list'], _0x38e3b9), _0x29d10f[_0x55063d(_0x44f451._0x2d1df9) + 'preters'][_0x44dd83] = _0x2db689; } } } } return Math['round'](Math['max'](_0x12726c, -0x3dc * -0x3 + 0x5e4 + -0x1177)); } Game_Interpreter['prototype']['calculateD' + _0x1ac6f5(0xbd) + _0x1ac6f5(0xb2)] = function (_0x5a58fd, _0x5e8e55, _0x583906, _0x3e6089 = null) { const _0x54b13c = { _0x5a4324: 0xa8, _0x12ff7b: 0xac, _0x3b5f76: 0xb8, _0x14b14f: 0x93, _0x5ded74: 0xba, _0x13248f: 0xba, _0x51610b: 0xb1, _0x525620: 0xa6, _0x47984d: 0x8d }, _0x320807 = _0x1ac6f5; if (!_0x5a58fd) return -0x1 * -0x21dc + 0x122e * 0x1 + -0x340a; if (_0x5e8e55 !== 'skill') return -0x20b1 + -0xa82 + 0x1 * 0x2b33; const _0x48d96d = SgetSkillDataH(_0x583906); if (!_0x48d96d) return 0x42c + -0x2552 + 0x2 * 0x1093; const _0x1386d4 = _0x3e6089 || this[_0x320807(0xad)], _0x28fbb3 = $gameMap['event'](_0x1386d4); let _0x36367f = null; if (_0x28fbb3 && _0x28fbb3['event'] && _0x28fbb3['event']()) { const _0x5e9a5b = _0x28fbb3[_0x320807(0xb9)]()['note']['match'](/<attacker:\s*(.+?)>/i); if (_0x5e9a5b) { const _0x1c2b88 = _0x5e9a5b[0x26a + 0x50d * 0x6 + 0x7d * -0x43]['trim'](); if (_0x1c2b88 === 'player') { if ('rEgTO' !== 'eHGVj') _0x36367f = $gameParty['leader'](); else { const _0x8a91d3 = _0x243c30[_0x57b225[_0x320807(0x93) + 'e']()]; _0x8a91d3 && ((!_0x3c3617['_attackerB' + _0x320807(0xba)] || _0x599a93[_0x320807(0xa8) + 'attler'][_0x320807(0xc1)]() !== _0x8a91d3['id']) && (_0x1da19a[_0x320807(_0x54b13c._0x5a4324) + 'attler'] = new _0x2b79d9(_0x8a91d3['id'], -0xe8a + -0x27 * 0x4f + -0x1 * -0x1a93, 0x8 * 0x3cb + 0xb2 * 0x1 + 0x2 * -0xf85)), _0x197ea6 = _0x45b10f['_attackerB' + 'attler']); } } else { if (_0x1c2b88['toLowerCas' + 'e']()['startsWith']('actor')) { const _0x1eb559 = /actor\s*(\d+)/i['exec'](_0x1c2b88); if (_0x1eb559) _0x36367f = $gameActors[_0x320807(_0x54b13c._0x12ff7b)](Number(_0x1eb559[0x6 * 0x63d + 0x44 * 0x2b + -0x5 * 0x9c5])); } else { if ('uVgzy' === _0x320807(_0x54b13c._0x3b5f76)) { const _0x42f495 = enemyNameCache[_0x1c2b88[_0x320807(_0x54b13c._0x14b14f) + 'e']()]; _0x42f495 && ((!_0x28fbb3['_attackerB' + 'attler'] || _0x28fbb3['_attackerB' + 'attler']['enemyId']() !== _0x42f495['id']) && (_0x28fbb3[_0x320807(_0x54b13c._0x5a4324) + 'attler'] = new Game_Enemy(_0x42f495['id'], 0x1dd9 + -0x2 * 0xd22 + -0x395, -0xa6 * -0x23 + -0x361 * -0x7 + -0x235 * 0x15)), _0x36367f = _0x28fbb3[_0x320807(_0x54b13c._0x5a4324) + _0x320807(_0x54b13c._0x5ded74)]); } else (!_0x2e143b[_0x320807(0xa8) + _0x320807(_0x54b13c._0x13248f)] || _0x187b14['_attackerB' + 'attler']['enemyId']() !== _0x2ad79f['id']) && (_0xbac684['_attackerB' + _0x320807(_0x54b13c._0x13248f)] = new _0x283768(_0x295854['id'], 0x20c7 + -0x12ff * -0x1 + 0x11a * -0x2f, -0x5e0 * 0x5 + 0x25 * 0xf0 + 0xa * -0x88)), _0x330b1e = _0x37fff1['_attackerB' + 'attler']; } } } } if (!_0x36367f && _0x28fbb3 && _0x28fbb3[_0x320807(0xb1) + 'EnemyName'] && _0x28fbb3['_inherited' + 'EnemyData']) { const _0x47d50d = _0x28fbb3['_inherited' + 'EnemyData']; (!_0x28fbb3['_attackerB' + _0x320807(0xba)] || _0x28fbb3['_attackerB' + 'attler']['enemyId']() !== _0x47d50d['id']) && (_0x28fbb3['_attackerB' + 'attler'] = new Game_Enemy(_0x47d50d['id'], 0x8c9 * 0x1 + -0x1c16 * 0x1 + 0x1 * 0x134d, 0x7b * 0xf + -0x12f9 * 0x1 + 0xbc4)), _0x36367f = _0x28fbb3['_attackerB' + 'attler']; } else { if (!_0x36367f && _0x28fbb3 && _0x28fbb3[_0x320807(_0x54b13c._0x51610b) + 'ActorId'] && _0x28fbb3[_0x320807(0xb1) + 'ActorData']) _0x36367f = _0x28fbb3[_0x320807(0xb1) + _0x320807(0xa3)]; else !_0x36367f && _0x28fbb3 && _0x28fbb3['databaseAc' + 'tor'] && (_0x36367f = _0x28fbb3['databaseAc' + _0x320807(_0x54b13c._0x525620)]); } if (!_0x36367f && _0x28fbb3) _0x36367f = SgetBattlerForH(_0x28fbb3); if (!_0x36367f) _0x36367f = $gameParty['leader'](); const _0xfed7e1 = _0x5a58fd === $gamePlayer, _0x493ed2 = _0xfed7e1 ? $gameParty['leader']() : SgetBattlerForH(_0x5a58fd) || $gameParty['leader'](), _0x16f520 = new SHendrix_Action(_0x36367f); _0x16f520['setSkill'](_0x48d96d['id']); if (Math[_0x320807(0xbc)]() * (0x82c + -0x75a * 0x1 + -0x6e * 0x1) >= _0x48d96d['successRat' + 'e'] || Math['random']() < _0x16f520['itemEva'](_0x493ed2)) return CollisionManager['lastEvaded'] = !![], -0x170d + 0x4cb * -0x2 + 0x20a3; CollisionManager[_0x320807(_0x54b13c._0x47984d)] = ![], CollisionManager['lastImmuni' + 'ty'] = _0x16f520['calcElemen' + 'tRate'](_0x493ed2) === 0x12bf + 0x141 * 0x1 + -0x1400; const _0x113980 = _0x48d96d['damage']['critical'] && Math[_0x320807(0xbc)]() < _0x16f520['itemCri'](_0x493ed2); CollisionManager[_0x320807(0xc2) + 'al'] = _0x113980; const _0x2e85ad = _0x16f520['makeDamage' + 'Value'](_0x493ed2, _0x113980); return Math['round'](Math['max'](_0x2e85ad, 0x1 * -0x21ae + -0xedd * -0x1 + 0x12d2)); }; function SapplyDefenseReductionH(_0x2fcf39, _0x23131d, _0x32e30e) { const _0x567efd = { _0x11af51: 0xb9, _0x3c8524: 0x8a, _0x12a3be: 0x93 }, _0x4ef14b = _0x1ac6f5; if (!_0x23131d || !_0x32e30e) return _0x2fcf39; const _0xcb8620 = $gameMap[_0x4ef14b(_0x567efd._0x11af51)](_0x23131d); if (!_0xcb8620 || !_0xcb8620['event']()['note']) return _0x2fcf39; const _0x3485b9 = _0xcb8620['event']()['note'][_0x4ef14b(_0x567efd._0x3c8524)](/<dmg:\s*(.+?)>/i); if (!_0x3485b9) return _0x2fcf39; const _0x26252e = _0x3485b9[-0x2f3 * 0x9 + 0x14f4 + 0x166 * 0x4]['trim'](); if (skillNameCache[_0x26252e[_0x4ef14b(_0x567efd._0x12a3be) + 'e']()]) return _0x2fcf39; return Math['max'](_0x2fcf39 - Math['floor'](_0x32e30e[_0x4ef14b(0x8c)] / (-0x2d7 * -0xa + -0x166f + 0x5 * -0x131)), 0xfb + 0xf42 + -0x103c); } function SgetSkillDataH(_0x9a2dc2) { if (typeof _0x9a2dc2 === 'string') return skillNameCache[_0x9a2dc2['toLowerCas' + 'e']()]; else { if (typeof _0x9a2dc2 === 'number') return $dataSkills[_0x9a2dc2]; } return _0x9a2dc2; } Game_Event['prototype']['getDamageF' + 'romNoteTag'] = function () { const _0xba36bf = { _0x18dce7: 0xa0 }, _0x266a23 = _0x1ac6f5, _0x10c400 = this[_0x266a23(0xb9)]()['note'], _0x296f32 = /<dmg:\s*(.+?)>/i['exec'](_0x10c400); if (!_0x296f32) return 0x14a6 * -0x1 + -0x1f7e * -0x1 + 0x8 * -0x15b; const _0x1dc092 = _0x296f32[0x68 * -0x4 + 0x1 * -0x329 + -0x4ca * -0x1]['trim'](); let _0x2749f4 = -0x1 * -0x9ad + -0x1ca1 * 0x1 + 0x12f4; const _0x317408 = skillNameCache[_0x1dc092['toLowerCas' + 'e']()]; if (_0x317408) return 0x18b5 + 0x936 + -0x21eb; const _0xeee473 = enemyNameCache[_0x1dc092['toLowerCas' + 'e']()]; if (_0xeee473) { !this['databaseEn' + _0x266a23(_0xba36bf._0x18dce7)] && this['setupEnemy' + 'Data'](_0x1dc092); const _0x9516b1 = SgetBattlerForH(this); return _0x9516b1 ? _0x9516b1['atk'] : _0xeee473['params'][-0xdd7 + -0x37 * -0x6b + -0x924]; } const _0x142834 = /v\[(\d+)\]/i['exec'](_0x1dc092); if (_0x142834) _0x2749f4 = $gameVariables['value'](parseInt(_0x142834[0xd51 + 0xf3 * 0x1d + -0x82b * 0x5])); else { const _0x200f5c = /(\d+)\s*-\s*(\d+)/['exec'](_0x1dc092); if (_0x200f5c) { const _0x388ab3 = parseInt(_0x200f5c[0x12f5 + 0x6e * -0x2e + 0xd0]), _0x1a2c90 = parseInt(_0x200f5c[0x6ef + 0x1a2d * -0x1 + 0x1340]); _0x2749f4 = Math['floor'](Math['random']() * (_0x1a2c90 - _0x388ab3 + (-0x1c7d + -0x1fcf + 0x3c4d))) + _0x388ab3; } else _0x2749f4 = parseInt(_0x1dc092) || 0x1842 + 0xa0a + -0x224c; } return _0x2749f4; };

// =========================== Hitbox cache and stuff  ==================================
Game_Map.prototype.hitboxesAreColliding = function (x1, y1, hitboxData1, x2, y2, hitboxData2, rotation1 = 0, rotation2 = 0) {
	// Nither object is rotated > AABB
	if (rotation1 === 0 && rotation2 === 0) {
		const left1 = x1 - $gameMap.tileWidth() / 2 + hitboxData1.offsetX;
		const right1 = left1 + hitboxData1.width * $gameMap.tileWidth();
		const top1 = y1 - $gameMap.tileHeight() + hitboxData1.offsetY;
		const bottom1 = top1 + hitboxData1.height * $gameMap.tileHeight();

		const left2 = x2 - $gameMap.tileWidth() / 2 + hitboxData2.offsetX;
		const right2 = left2 + hitboxData2.width * $gameMap.tileWidth();
		const top2 = y2 - $gameMap.tileHeight() + hitboxData2.offsetY;
		const bottom2 = top2 + hitboxData2.height * $gameMap.tileHeight();

		return left1 < right2 && right1 > left2 && top1 < bottom2 && bottom1 > top2;
	}

	// Rotate > OBB
	const getCorners = (x, y, hitboxData, rotation) => {
		let adjustedY = y;
		let adjustedPivotY = y;
		if (rotation !== 0) {
			adjustedY = y + ($gameMap.tileHeight() / 2);
			adjustedPivotY = adjustedY;
		}

		const rect = {
			x: x - $gameMap.tileWidth() / 2 + hitboxData.offsetX,
			y: adjustedY - $gameMap.tileHeight() + hitboxData.offsetY,
			width: hitboxData.width * $gameMap.tileWidth(),
			height: hitboxData.height * $gameMap.tileHeight()
		};

		const pivotX = x - rect.x;
		const pivotY = (adjustedPivotY - $gameMap.tileHeight() / 2) - rect.y;
		const angleRad = rotation * Math.PI / 180;
		const cos = Math.cos(angleRad);
		const sin = Math.sin(angleRad);

		return [
			{ x: (-pivotX * cos + pivotY * sin) + x, y: (-pivotX * sin - pivotY * cos) + adjustedPivotY },
			{ x: ((-pivotX + rect.width) * cos + pivotY * sin) + x, y: ((-pivotX + rect.width) * sin - pivotY * cos) + adjustedPivotY },
			{ x: ((-pivotX + rect.width) * cos + (pivotY - rect.height) * sin) + x, y: ((-pivotX + rect.width) * sin - (pivotY - rect.height) * cos) + adjustedPivotY },
			{ x: (-pivotX * cos + (pivotY - rect.height) * sin) + x, y: (-pivotX * sin - (pivotY - rect.height) * cos) + adjustedPivotY }
		];
	};

	const getOBBAxes = (corners) => {
		const axis1 = {
			x: corners[1].x - corners[0].x,
			y: corners[1].y - corners[0].y
		};
		const axis2 = {
			x: corners[3].x - corners[0].x,
			y: corners[3].y - corners[0].y
		};
		const length1 = Math.sqrt(axis1.x * axis1.x + axis1.y * axis1.y);
		const length2 = Math.sqrt(axis2.x * axis2.x + axis2.y * axis2.y);

		return [
			{ x: axis1.x / length1, y: axis1.y / length1 },
			{ x: axis2.x / length2, y: axis2.y / length2 }
		];
	};

	const projectCornersOnAxis = (corners, axis) => {
		let min = (corners[0].x * axis.x + corners[0].y * axis.y);
		let max = min;
		for (let i = 1; i < corners.length; i++) {
			const projection = corners[i].x * axis.x + corners[i].y * axis.y;
			min = Math.min(min, projection);
			max = Math.max(max, projection);
		}
		return { min, max };
	};

	const corners1 = getCorners(x1, y1, hitboxData1, rotation1);
	const corners2 = getCorners(x2, y2, hitboxData2, rotation2);
	const axes = [...getOBBAxes(corners1), ...getOBBAxes(corners2)];

	for (const axis of axes) {
		const projection1 = projectCornersOnAxis(corners1, axis);
		const projection2 = projectCornersOnAxis(corners2, axis);
		if (projection1.max < projection2.min || projection2.max < projection1.min) {
			return false;
		}
	}

	return true;
};

Game_Map.prototype.initTagIndex = function () {
	this.tagToEvents = new Map();
};

Game_Map.prototype.buildTagIndex = function () {
	this.initTagIndex();
	this.events().forEach(event => {
		if (event && event.event && event.event()) {
			this.addEventToTagIndex(event);
		}
	});
};

Game_Map.prototype.clearTagIndex = function () {
	this.tagToEvents = new Map();
};

Game_Map.prototype.addEventToTagIndex = function (event) {
	this.tagToEvents ||= new Map();

	const eventNote = event.event().note;
	const eventName = event.event().name;

	// Index notetags
	const tagMatches = eventNote.match(/<([^>]+)>/g);
	if (tagMatches) {
		for (const tagMatch of tagMatches) {
			const tag = tagMatch;
			if (!this.tagToEvents.has(tag)) {
				this.tagToEvents.set(tag, []);
			}
			const eventArray = this.tagToEvents.get(tag);
			if (!eventArray.includes(event)) {
				eventArray.push(event);
			}
		}
	}

	// event name
	if (eventName && eventName.trim() !== '') {
		if (!this.tagToEvents.has(eventName)) {
			this.tagToEvents.set(eventName, []);
		}
		const eventArray = this.tagToEvents.get(eventName);
		if (!eventArray.includes(event)) {
			eventArray.push(event);
		}
	}
};

Game_Map.prototype.removeEventFromTagIndex = function (event) {
	if (!this.tagToEvents) return;

	for (const [tag, eventArray] of this.tagToEvents.entries()) {
		const index = eventArray.indexOf(event);
		if (index > -1) {
			eventArray.splice(index, 1);

			if (eventArray.length === 0) {
				this.tagToEvents.delete(tag);
			}
		}
	}
};

Game_Event.prototype.checkCollisionStatus = function () {
	return this._collisionEnabled !== false;
};

Game_Map.prototype.taggedEventIsCollidingWithTargetEvent = function (targetId, tags, collisionCooldownInFrames = 0, collisionRange = 6) {
	const targetEvent = targetId === 'player' ? $gamePlayer : this.event(targetId);
	if (!targetEvent || targetEvent._x == null || targetEvent._y == null) return false;

	const sourceX = targetEvent._x;
	const sourceY = targetEvent._y;

	const collisionTimestamps = $gameSystem.collisionTimestamps ||= {};
	const collidedOnceEvents = $gameSystem.collidedOnceEvents ||= {};
	const currentTimeInFrames = Graphics.frameCount;
	const collisionRangeSquared = collisionRange * collisionRange;

	const checkSkipCollision = (event) => {
		if (!(event instanceof Game_Event)) return false;

		if (event._collisionEnabled === true) {
			return false;
		}
		if (event._collisionEnabled === false) {
			return true;
		}

		const cacheKey = event._eventId + '-' + event._pageIndex;
		this.skipCollisionCache ||= {};

		if (this.skipCollisionCache[cacheKey] === undefined) {
			if (event._pageIndex >= 0) {
				const currentPage = event.event().pages[event._pageIndex];
				if (currentPage?.list) {
					this.skipCollisionCache[cacheKey] = currentPage.list.some(listItem =>
						listItem.code === 108 && listItem.parameters[0] === '<skip collision>'
					);
				} else {
					this.skipCollisionCache[cacheKey] = false;
				}
			} else {
				this.skipCollisionCache[cacheKey] = false;
			}
		}

		return this.skipCollisionCache[cacheKey];
	};

	const impassableMatch = typeof tags === 'string' ? tags.match(/^impassable\s+([A-E]+)$/i) : null;
	if (impassableMatch) {
		const tilesetLetters = impassableMatch[1].split('');
		const tilesetRanges = tilesetLetters.map(letter => {
			return {
				'A': [
					//[2048, 2815], // A1
					//[2816, 4351], // A2
					[4352, 5887], // A3
					[5888, 8191], // A4
					//[1536, 1663]  // A5
				],
				'B': [[0, 255]],
				'C': [[256, 511]],
				'D': [[512, 767]],
				'E': [[768, 1023]]
			}[letter];
		}).flat();

		const x = targetEvent._x;
		const y = targetEvent._y;

		const positions = [
			[x, y],
			[x + 1, y],
			[x - 1, y],
			[x, y + 1],
			[x, y - 1]
		];

		return positions.some(([checkX, checkY]) => {
			const tiles = this.allTiles(checkX, checkY);
			const flags = this.tilesetFlags();

			return tiles.some(tileId => {
				return tilesetRanges.some(range =>
					tileId >= range[0] &&
					tileId <= range[1] &&
					(flags[tileId] & 0x0f) === 0x0f
				);
			});
		});
	}

	if (tags === 'map boundary') {
		if ($gameMap.isLoopHorizontal() && $gameMap.isLoopVertical()) return false;
		if (!$gameMap.isLoopHorizontal() && (targetEvent._x <= 0 || targetEvent._x >= $gameMap.width() - 1)) return true;
		if (!$gameMap.isLoopVertical() && (targetEvent._y <= 0 || targetEvent._y >= $gameMap.height() - 1)) return true;
		return false;
	}

	if (tags === 'passable') {
		const hb = targetEvent.hitboxData ? targetEvent.hitboxData() : { width: 1, height: 1, offsetX: 0, offsetY: 0 };
		const tw = $gameMap.tileWidth();
		const th = $gameMap.tileHeight();

		const left = Math.floor(targetEvent._realX + hb.offsetX / tw);
		const right = Math.floor(targetEvent._realX + hb.offsetX / tw + hb.width);
		const top = Math.floor(targetEvent._realY + hb.offsetY / th);
		const bot = Math.floor(targetEvent._realY + hb.offsetY / th + hb.height);

		for (let tx = left; tx <= right; tx++) {
			for (let ty = top; ty <= bot; ty++) {
				if (SisTilePassableH(tx, ty)) return true;
			}
		}
		return false;
	}

	const regionMatch = typeof tags === 'string' ? tags.match(/^region\s+(\d+)$/i) : null;
	if (regionMatch) {
		const regionId = parseInt(regionMatch[1]);

		const collisionKey = this._mapId + '-' + (targetId === 'player' ? 'player' : targetId) + '-region-' + regionId;
		const currentTimeInFrames = Graphics.frameCount;
		const lastCollisionTimeInFrames = $gameSystem.collisionTimestamps[collisionKey] || 0;

		if (currentTimeInFrames - lastCollisionTimeInFrames <= collisionCooldownInFrames) return false;

		const x = targetEvent._x;
		const y = targetEvent._y;
		const currentRegion = this.regionId(x, y);

		if (currentRegion === regionId) {
			$gameSystem.collisionTimestamps[collisionKey] = currentTimeInFrames;
			return true;
		}
		return false;
	}

	const checkCollision = (event, matchingTag) => {
		if (event instanceof Game_Event) {
			if (checkSkipCollision(event)) return false;
			if (targetEvent instanceof Game_Event && checkSkipCollision(targetEvent)) return false;
		}

		const collisionKey = this._mapId + '-' +
			(event === $gamePlayer ? 'player' : event._eventId) + '-' +
			(targetId === 'player' ? 'player' : targetId) + '-' +
			matchingTag;

		if (collisionCooldownInFrames === 0 && collidedOnceEvents[collisionKey]) return false;

		let actualCooldown = collisionCooldownInFrames;
		if (collisionCooldownInFrames === "cooldown" && event instanceof Game_Event) {
			actualCooldown = event.getCooldownFromNoteTag();
		}

		const lastCollisionTimeInFrames = collisionTimestamps[collisionKey] || 0;
		if (currentTimeInFrames - lastCollisionTimeInFrames <= actualCooldown) return false;

		if (!this.hitboxesAreColliding(
			event.screenX(),
			event.screenY(),
			event.hitboxData(),
			targetEvent.screenX(),
			targetEvent.screenY(),
			targetId === 'player' ? targetEvent.hitboxData() : targetEvent.hitboxData(),
			event.customRotationPoint ? event._rotation : 0,
			targetEvent.customRotationPoint ? targetEvent._rotation : 0
		)) return false;

		collisionTimestamps[collisionKey] = currentTimeInFrames;
		if (collisionCooldownInFrames === 0) collidedOnceEvents[collisionKey] = true;

		if (event instanceof Game_Event) {
			let damageValue = 0;
			const eventNote = event.event().note;
			const dmgMatch = eventNote.match(/<dmg:\s*(.+?)>/i);

			if (dmgMatch) {
				CollisionManager.lastSourceEventId = event._eventId;
				const potentialSkillName = dmgMatch[1].trim();
				const pSkillLow = potentialSkillName.toLowerCase();
				const skill = skillNameCache[pSkillLow];

				if (pSkillLow === 'weapon' || pSkillLow === '2nd weapon') {
					const isPlayerTarget = targetId === 'player' || targetId === 0;
					const targetCanTakeDamage = isPlayerTarget ||
						(targetEvent.databaseEnemy || targetEvent.databaseActor || targetEvent.PRmhp);

					if (targetCanTakeDamage) {
						if (!isPlayerTarget && !targetEvent.databaseEnemy && !targetEvent.databaseActor && !targetEvent.PRmhp) {
							const eventData = targetEvent.event();
							if (eventData.name) {
								targetEvent.setupEnemyData(eventData.name);
							}
						}

						let attacker = null;
						if (event._inheritedActorId && event._inheritedActorData) attacker = event._inheritedActorData;
						else if (event.databaseActor) attacker = event.databaseActor;
						else if (event.linkedActorId) attacker = $gameActors.actor(event.linkedActorId);
						else attacker = $gameParty.leader();

						let weaponToUse = null;
						if (attacker && typeof attacker.equips === 'function') {
							const equips = attacker.equips();
							if (pSkillLow === 'weapon' && equips[0]) {
								weaponToUse = equips[0];
							} else if (pSkillLow === '2nd weapon' && equips[1] && DataManager.isWeapon(equips[1])) {
								weaponToUse = equips[1];
							}
						}

						damageValue = MaithlCalculateDamagePlayerWeapon(targetId === 'player' ? 0 : targetId, weaponToUse, attacker);
						CollisionManager.lastEvaded = (damageValue === 0 && !CollisionManager.lastImmunity);
						SprocessStateApplicationH(event, targetId === 'player' ? 0 : targetId);
					} else {
						damageValue = event.getDamageFromNoteTag();
					}
				} else if (skill) {
					const interpreter = new Game_Interpreter();
					const isPlayerTarget = targetId === 'player' || targetId === 0;
					const target = isPlayerTarget ? $gamePlayer : targetEvent;

					const targetCanTakeSkillDamage = isPlayerTarget ||
						(targetEvent.databaseEnemy || targetEvent.databaseActor || targetEvent.PRmhp);

					if (targetCanTakeSkillDamage) {
						if (!isPlayerTarget && !targetEvent.databaseEnemy && !targetEvent.databaseActor && !targetEvent.PRmhp) {
							const eventData = targetEvent.event();
							if (eventData.name) {
								targetEvent.setupEnemyData(eventData.name);
							}
						}

						damageValue = interpreter.calculateDamageAgainstEvent(target, 'skill', skill, event._eventId);
						CollisionManager.lastEvaded = (damageValue === 0 && !CollisionManager.lastImmunity);
						SprocessStateApplicationH(event, targetId === 'player' ? 0 : targetId);
					} else {
						damageValue = event.getDamageFromNoteTag();
					}
				} else {
					damageValue = event.getDamageFromNoteTag();
				}
			} else {
				damageValue = event.getDamageFromNoteTag();
			}

			CollisionManager.addCollision(targetId === 'player' ? 0 : targetId, damageValue);
			if (event.databaseEnemy || event.databaseActor || event.linkedActorId) {
				SprocessEnemyAttackTraitsH(event, targetId === 'player' ? 0 : targetId);
			}
		}

		return true;
	};

	if (tags === 'player') {
		const dx = Math.abs($gameMap.deltaX($gamePlayer._x, targetEvent._x));
		const dy = Math.abs($gameMap.deltaY($gamePlayer._y, targetEvent._y));
		if (dx * dx + dy * dy <= collisionRangeSquared) {
			return checkCollision($gamePlayer, 'player');
		}
		return false;
	}

	this.tagToEvents ||= new Map();
	const eventsToCheck = new Set();

	for (const tag of Array.isArray(tags) ? tags : [tags]) {
		const taggedEvents = this.tagToEvents.get(tag) || [];
		for (const event of taggedEvents) {
			if (!event || event._erased || !$gameMap._events[event._eventId] || !event.event()) {
				const index = taggedEvents.indexOf(event);
				if (index > -1) {
					taggedEvents.splice(index, 1);
				}
				continue;
			}
			const roughDistance = Math.abs($gameMap.deltaX(event._x, sourceX)) + Math.abs($gameMap.deltaY(event._y, sourceY));
			if (roughDistance > collisionRange * 2) continue;

			//Not compatible with map has a Scroll Type
			//const roughDistance = Math.abs(event._x - sourceX) + Math.abs(event._y - sourceY);

			//const dx = event._x - sourceX;
			//const dy = event._y - sourceY;
			//if (dx * dx + dy * dy > collisionRangeSquared) continue; Bug: Help performance but filter out events in circle

			eventsToCheck.add(event);
		}
	}

	for (const event of eventsToCheck) {
		if (checkSkipCollision(event)) continue;
		if (targetId !== 'player' && event._eventId === targetId) continue;

		const eventNote = event.event().note;
		const eventName = event.event().name;
		let matchingTag = null;

		for (const tag of Array.isArray(tags) ? tags : [tags]) {
			const isNotetag = tag.startsWith('<') && tag.endsWith('>');
			const matchesNote = isNotetag && eventNote.includes(tag);
			const matchesName = !isNotetag && eventName === tag;

			if (matchesNote || matchesName) {
				matchingTag = tag;
				break;
			}
		}

		if (!matchingTag) continue;
		if (checkCollision(event, matchingTag)) return true;
	}

	return false;
};

Game_Map.prototype.shareCollidingWith = function (targetId, tags, collisionCooldownInFrames = 0) {
	if (!$gameSystem.collisionTimestamps) $gameSystem.collisionTimestamps = {};
	const collisionTimestamps = $gameSystem.collisionTimestamps;
	const currentTimeInFrames = Graphics.frameCount;
	const tagSet = new Set(Array.isArray(tags) ? tags : [tags]);
	const sharedKey = `${targetId}-${Array.isArray(tags) ? tags.join('-') : tags}`;
	const lastCollisionTime = collisionTimestamps[sharedKey] || 0;

	const targetEvent = targetId === 'player' ? $gamePlayer : this.event(targetId);
	if (!targetEvent || targetEvent._x == null || targetEvent._y == null) return false;

	let cooldown = collisionCooldownInFrames;
	if (cooldown === "cooldown" && targetEvent instanceof Game_Event) {
		cooldown = targetEvent.getCooldownFromNoteTag();
	}

	if (currentTimeInFrames - lastCollisionTime <= cooldown) {
		return false;
	}

	const checkSkipCollision = (event) => {
		if (!(event instanceof Game_Event)) return false;
		if (event._collisionEnabled === true) {
			return false;
		}
		if (event._collisionEnabled === false) {
			return true;
		}
		const cacheKey = this._mapId + '-' + event._eventId + '-' + event._pageIndex;
		this.skipCollisionCache ||= {};

		if (this.skipCollisionCache[cacheKey] === undefined) {
			if (event._pageIndex >= 0) {
				const currentPage = event.event().pages[event._pageIndex];
				if (currentPage?.list) {
					this.skipCollisionCache[cacheKey] = currentPage.list.some(listItem =>
						listItem.code === 108 && listItem.parameters[0] === '<skip collision>'
					);
				} else {
					this.skipCollisionCache[cacheKey] = false;
				}
			} else {
				this.skipCollisionCache[cacheKey] = false;
			}
		}

		return this.skipCollisionCache[cacheKey];
	};

	const collisionFound = this.events().some(event => {
		if (event === targetEvent) return false;
		if (checkSkipCollision(event)) return false;

		const eventNote = event.event().note;
		let matchingTag = false;

		for (const tag of tagSet) {
			const searchTag = tag.startsWith('<') ? tag : `<${tag}>`;
			if (eventNote.includes(searchTag)) {
				matchingTag = searchTag;
				break;
			}
		}
		if (!matchingTag) return false;

		if (this.hitboxesAreColliding(
			event.screenX(),
			event.screenY(),
			event.hitboxData(),
			targetEvent.screenX(),
			targetEvent.screenY(),
			targetId === 'player' ? targetEvent.hitboxData() : targetEvent.hitboxData(),
			event.customRotationPoint ? event._rotation : 0,
			targetEvent.customRotationPoint ? targetEvent._rotation : 0
		)) {
			collisionTimestamps[sharedKey] = currentTimeInFrames;
			if (event instanceof Game_Event) {
				CollisionManager.lastSourceEventId = event._eventId;
				const damageValue = event.getDamageFromNoteTag();
				CollisionManager.addCollision(targetId === 'player' ? 0 : targetId, damageValue);
			}

			return true;
		}

		return false;
	});
	return collisionFound;
};

PluginManager.registerCommand(HpluginName, "setCollisionStatus", function (args) {
	if ($gameMap.event(this._eventId)) {
		$gameMap.event(this._eventId)._collisionEnabled = args.enabled === 'true';
	}
});

//============================================================
// DAMAGE TEXT POP UP
//============================================================

const eventData = new Map();
const eventClocks = new Map();
const eventHeightCache = new Map();

const damageTextSettings = JSON.parse(Hparameters['damageTextSettings'] || '{}');

const loadCustomFont = (fontFile) => {
	if (!fontFile) return null;
	try {
		const fontFace = fontFile.split('.')[0];
		const fontPath = `fonts/${fontFile}`;
		if (Utils.isNwjs()) {
			const customFont = new FontFace(fontFace, `url('${fontPath}')`);
			customFont.load().then(function (loadedFont) {
				document.fonts.add(loadedFont);
			}).catch(error => {
				console.error('Error loading font:', error);
			});
		} else {
			const style = document.createElement('style');
			style.textContent = `
                @font-face {
                    font-family: '${fontFace}';
                    src: url('${fontPath}');
                }
            `;
			document.head.appendChild(style);
		}
		return fontFace;
	} catch (e) {
		return null;
	}
};

const defaultConfig = {
	fontFace: loadCustomFont(damageTextSettings.fontFace) || "rmmz-mainfont",
	fontSize: Number(damageTextSettings.fontSize) || 28,
	fontColor: damageTextSettings.fontColor || "#e6b400",
	outline: damageTextSettings.outline === 'true',
	outlineColor: damageTextSettings.outlineColor || "#900C3F",
	outlineThickness: Number(damageTextSettings.outlineThickness) || 1,
	currentDisplayedValue: ""
};

class Sprite_Variable extends Sprite {
	constructor(config, variableId, duration, offsetX, offsetY, value = null, addValue = false, eventSprite, stickToMap = false) {
		super();
		this._id = Date.now() + Math.random();
		this._variableId = variableId;
		this._duration = duration;
		this._currentDuration = duration;
		this._offsetX = offsetX;
		this._offsetY = offsetY;
		this._addValue = addValue;
		this._config = config;
		this._isDirty = true;
		this._lastValue = null;
		this._lastPosition = { x: 0, y: 0 };
		this._eventSprite = eventSprite;
		this.animationType = config.animationType || 'bounce';
		this._stickToMap = stickToMap;

		this.bitmap = new Bitmap(240, 48);
		this.bitmap.smooth = false;
		if (this._config.fontFilename && this._config.fontFilename.trim()) {
			const customFont = loadCustomFont(this._config.fontFilename);
			if (customFont) {
				this.bitmap.fontFace = customFont;
			}
		} else if (this._config.fontFace) {
			this.bitmap.fontFace = this._config.fontFace;
		}
		if (this._config.fontSize && this._config.fontSize > 0) {
			this.bitmap.fontSize = this._config.fontSize;
		} else if (this._config.defaultFontSize) {
			this.bitmap.fontSize = this._config.defaultFontSize;
		}
		this.bitmap.textColor = this._config.fontColor;

		this.setupOutline();

		this.updateValue(value);
		this.anchor.set(0.5, 1);

		this._value = value !== null ? value : $gameVariables.value(variableId);
		this._isLargeNumber = CollisionManager.lastCritical;
		this._initialX = eventSprite.x + offsetX;
		this._initialY = eventSprite.y - eventSprite.height / 2 + offsetY;

		if (this._stickToMap) {
			this._worldX = this._initialX + ($gameMap.displayX() * $gameMap.tileWidth());
			this._worldY = this._initialY + ($gameMap.displayY() * $gameMap.tileHeight());
		}

		if (this.animationType === 'letter') {
			this._letters = [];
			this._letterSprites = [];
			this.setupLetterAnimation();
		} else if (this.animationType === 'bounce') {
			this._jumpDuration = Math.floor(this._duration * 0.7);
			this.jumpHeight = this._duration * 0.5;
			this.gravity = (2 * this.jumpHeight) / Math.pow(this._jumpDuration / 2, 2);
			this._initialVelocity = -Math.sqrt(2 * this.gravity * this.jumpHeight);
			this._velocity = this._initialVelocity;
			this.jumpY = 0;
			this._jumpAngle = Math.random() * Math.PI * 2;
			this._jumpDistance = this._duration * 0.8;
			this._horizontalVelocity = Math.cos(this._jumpAngle) * (this._jumpDistance / this._jumpDuration);
			this._jumpX = 0;
		} else if (this.animationType === 'moveup') {
			this.initialMoveSpeed = 2.5;
			this.totalMoveDistance = 0;
			this.maxMoveDistance = 48;
			this.moveY = 0;
		} else if (this.animationType === 'popup') {
			this.initialMoveSpeed = 2;
			this.totalMoveDistance = 0;
			this.maxMoveDistance = 48;
			this.moveY = 0;
			this._popupPhase = 0;
			this._maxScale = 1.5;
		}

		if (this._isLargeNumber) {
			this.jumpHeight *= 1;
			this._jumpDuration = Math.floor(this._jumpDuration * 1);
			this._jumpDistance = this._duration * 1;
		}

		this._fadeOutStart = this._duration * 0.3;
		this._initialScale = this._isLargeNumber ? 1 : 0.8;
		this.scale.set(this._initialScale, this._initialScale);
	}

	setupLetterAnimation() {
		const text = String(this._config.currentDisplayedValue);
		this._letters = text.split('');

		const tempBitmap = new Bitmap(1, 1);
		if (this._config.fontFilename && this._config.fontFilename.trim()) {
			const customFont = loadCustomFont(this._config.fontFilename);
			if (customFont) tempBitmap.fontFace = customFont;
		} else if (this._config.fontFace) {
			tempBitmap.fontFace = this._config.fontFace;
		}
		tempBitmap.fontSize = this.bitmap.fontSize;

		const totalWidth = tempBitmap.measureTextWidth(text);
		const startX = -totalWidth / 2;

		let currentX = startX;

		const revealDuration = Math.floor(this._duration * 0.20);
		const delayPerLetter = this._letters.length > 1 ? revealDuration / this._letters.length : 0;

		this._letters.forEach((letter, index) => {
			const letterWidth = tempBitmap.measureTextWidth(letter);
			const letterSprite = new Sprite(new Bitmap(letterWidth + 10, this.bitmap.fontSize + 10));
			letterSprite.bitmap.smooth = false;

			if (this._config.fontFilename && this._config.fontFilename.trim()) {
				const customFont = loadCustomFont(this._config.fontFilename);
				if (customFont) letterSprite.bitmap.fontFace = customFont;
			} else if (this._config.fontFace) {
				letterSprite.bitmap.fontFace = this._config.fontFace;
			}

			letterSprite.bitmap.fontSize = this.bitmap.fontSize;

			const colors = this._config.fontColor.split(',').map(c => c.trim());
			if (colors.length === 2) {
				letterSprite._useGradient = true;
				letterSprite._gradientColors = colors;
				letterSprite._letter = letter;
				letterSprite._outlineColor = this._config.outlineColor;
				letterSprite._outlineWidth = this._config.outlineThickness;
				letterSprite._useOutline = this._config.outline;

				const context = letterSprite.bitmap._context;
				const height = this.bitmap.fontSize + 10;
				const shiftAmount = 6;
				const gradient = context.createLinearGradient(0, -shiftAmount, 0, height + shiftAmount);
				gradient.addColorStop(0, colors[0]);
				gradient.addColorStop(0.40, colors[0]);
				gradient.addColorStop(0.65, colors[1]);
				gradient.addColorStop(1, colors[1]);
				context.fillStyle = gradient;

				if (this._config.outline) {
					context.strokeStyle = this._config.outlineColor;
					context.lineWidth = this._config.outlineThickness;
					context.lineJoin = 'round';
					context.miterLimit = 2;
				}

				context.font = letterSprite.bitmap._makeFontNameText();
				context.textAlign = 'center';
				context.textBaseline = 'middle';

				const x = (letterWidth + 10) / 2;
				const y = (this.bitmap.fontSize + 10) / 2;

				if (this._config.outline) {
					context.strokeText(letter, x, y);
				}
				context.fillText(letter, x, y);
			} else {
				letterSprite.bitmap.textColor = this._config.fontColor;

				if (this._config.outline) {
					letterSprite.bitmap.outlineColor = this._config.outlineColor;
					letterSprite.bitmap.outlineWidth = this._config.outlineThickness;
				}

				letterSprite.bitmap.drawText(letter, 0, 0, letterWidth + 10, this.bitmap.fontSize + 10, 'center');
			}

			letterSprite.anchor.set(0.5, 0.5);
			letterSprite.x = currentX + letterWidth / 2;
			letterSprite.y = 0;

			currentX += letterWidth;

			letterSprite.delay = Math.floor(index * delayPerLetter);
			letterSprite.jumpHeight = 15 + Math.random() * 8;
			letterSprite.jumpSpeed = 0;
			letterSprite.jumpY = 0;
			letterSprite.gravity = 0.5;
			letterSprite.hasAppeared = false;
			letterSprite.hasJumped = false;
			letterSprite.opacity = 0;

			this.addChild(letterSprite);
			this._letterSprites.push(letterSprite);
		});

		this.moveY = -48;
		this.bitmap.clear();
	}

	updateLetterAnimation() {
		const currentFrame = this._duration - this._currentDuration;

		this._letterSprites.forEach((letterSprite, index) => {
			if (currentFrame >= letterSprite.delay && !letterSprite.hasAppeared) {
				letterSprite.hasAppeared = true;
				letterSprite.opacity = 255;
				letterSprite.hasJumped = true;
				letterSprite.jumpSpeed = -Math.sqrt(2 * letterSprite.gravity * letterSprite.jumpHeight);
			}

			if (!letterSprite.hasAppeared) {
				return;
			}

			letterSprite.jumpSpeed += letterSprite.gravity;
			letterSprite.jumpY += letterSprite.jumpSpeed;

			if (letterSprite.jumpY > 0) {
				letterSprite.jumpY = 0;
				letterSprite.jumpSpeed = -letterSprite.jumpSpeed * 0.5;

				if (Math.abs(letterSprite.jumpSpeed) < 0.5) {
					letterSprite.jumpSpeed = 0;
				}
			}

			letterSprite.y = letterSprite.jumpY;
		});
	}

	setupOutline() {
		if (this._config.outline) {
			this.bitmap.outlineColor = this._config.outlineColor;
			this.bitmap.outlineWidth = this._config.outlineThickness;
		} else {
			this.bitmap.outlineWidth = 0;
		}
	}

	updateValue(value) {
		if (value !== null) {
			if (this._addValue && typeof value === 'number' && typeof this._config.currentDisplayedValue === 'number') {
				this._config.currentDisplayedValue += value;
			} else {
				this._config.currentDisplayedValue = value;
			}
		} else {
			this._config.currentDisplayedValue = $gameVariables.value(this._variableId);
		}
		this._isDirty = true;
	}

	update() {
		super.update();

		if (this._isDirty && this.animationType !== 'letter') {
			this.redraw();
			this._isDirty = false;
		}

		this._currentDuration--;

		if (this.animationType === 'letter') {
			this.updateLetterAnimation();

			if (this._currentDuration <= 10) {
				this.opacity = (this._currentDuration / 10) * 255;
			} else {
				this.opacity = 255;
			}
		} else if (this.animationType === 'bounce') {
			if (this._currentDuration > this._duration - this._jumpDuration) {
				this._velocity += this.gravity;
				this.jumpY += this._velocity;
				this._jumpX += this._horizontalVelocity;

				if (this.jumpY > 0) {
					this.jumpY = 0;
					this._velocity = 0;
				}

				if (this._isLargeNumber) {
					const jumpProgress = 1 - ((this._currentDuration - (this._duration - this._jumpDuration)) / this._jumpDuration);
					const scaleMultiplier = 1.7 - (jumpProgress * 0.5);
					this.scale.set(this._initialScale * scaleMultiplier, this._initialScale * scaleMultiplier);
				}
			}

			if (this._currentDuration <= this._fadeOutStart) {
				this.opacity = (this._currentDuration / this._fadeOutStart) * 255;
			}
		} else if (this.animationType === 'moveup' || this.animationType === 'popup') {
			if (this.totalMoveDistance < this.maxMoveDistance) {
				const progress = this.totalMoveDistance / this.maxMoveDistance;
				const currentSpeed = this.initialMoveSpeed * (1 - progress * progress);
				this.moveY -= currentSpeed;
				this.totalMoveDistance += currentSpeed;
			}

			if (this.animationType === 'popup') {
				this._popupPhase = 1 - (this._currentDuration / this._duration);

				if (this._popupPhase < 0.2) {
					const scaleProgress = this._popupPhase / 0.2;
					const currentScale = 1 + (this._maxScale - 1) * scaleProgress;
					this.scale.set(currentScale, currentScale);
				} else {
					const scaleProgress = (this._popupPhase - 0.3) / 0.7;
					const currentScale = this._maxScale - (this._maxScale - 1) * Math.min(1, scaleProgress);
					this.scale.set(currentScale, currentScale);
				}
			}

			const fadeStartPercentage = 0.7;
			if (this._currentDuration <= this._duration * fadeStartPercentage) {
				this.opacity = (this._currentDuration / (this._duration * fadeStartPercentage)) * 255;
			}
		}

		this.updatePosition();
		if (!this._isLargeNumber && this.animationType === 'bounce') {
			this.updateScale();
		}

		if (this._currentDuration <= 0) {
			this.parent.removeChild(this);
		}
	}

	updatePosition() {
		if (this._stickToMap) {
			const screenX = this._worldX - ($gameMap.displayX() * $gameMap.tileWidth());
			const screenY = this._worldY - ($gameMap.displayY() * $gameMap.tileHeight());

			if (this.animationType === 'bounce') {
				this.x = screenX + this._jumpX;
				this.y = screenY + this.jumpY;
			} else if (this.animationType === 'moveup' || this.animationType === 'popup' || this.animationType === 'letter') {
				this.x = screenX;
				this.y = screenY + this.moveY;
			}
		} else {
			if (this.animationType === 'bounce') {
				this.x = this._initialX + this._jumpX;
				this.y = this._initialY + this.jumpY;
			} else if (this.animationType === 'moveup' || this.animationType === 'popup' || this.animationType === 'letter') {
				this.x = this._initialX;
				this.y = this._initialY + this.moveY;
			}
		}
	}

	updateScale() {
		const progress = 1 - (this._currentDuration / this._duration);
		const scale = this._initialScale + Math.sin(progress * Math.PI) * 0.2;
		this.scale.set(scale, scale);
	}

	redraw() {
		this.bitmap.clear();
		this.opacity = this._currentDuration > this._duration * 0.5 ? 255 : (this._currentDuration / (this._duration * 0.5)) * 255;

		const colors = this._config.fontColor.split(',').map(c => c.trim());
		if (colors.length === 2) {
			const context = this.bitmap._context;
			const shiftAmount = 10;
			const gradient = context.createLinearGradient(0, -shiftAmount, 0, 48 + shiftAmount);
			gradient.addColorStop(0, colors[0]);
			gradient.addColorStop(0.40, colors[0]);
			gradient.addColorStop(0.65, colors[1]);
			gradient.addColorStop(1, colors[1]);
			context.fillStyle = gradient;

			if (this._config.outline) {
				context.strokeStyle = this._config.outlineColor;
				context.lineWidth = this._config.outlineThickness;
				context.lineJoin = 'round';
				context.miterLimit = 2;
			}

			context.font = this.bitmap._makeFontNameText();
			context.textAlign = 'center';
			context.textBaseline = 'middle';

			const displayText = String(this._config.currentDisplayedValue);
			const x = 120;
			const y = 24;

			if (this._config.outline) {
				context.strokeText(displayText, x, y);
			}
			context.fillText(displayText, x, y);
		} else {
			const displayText = String(this._config.currentDisplayedValue);
			this.bitmap.drawText(displayText, 0, 0, 240, 48, "center");
		}
	}
}

function SupdateEventClocksH() {
	for (const [eventId, clock] of eventClocks) {
		let currentClock = clock + 1;
		if (currentClock >= 60) {
			const config = eventData.get(eventId);
			if (config) {
				config.currentDisplayedValue = 0;
				currentClock = 0;
			}
		}
		eventClocks.set(eventId, currentClock);
	}

	for (const eventId of eventClocks.keys()) {
		if (!$gameMap.event(eventId)) {
			eventClocks.delete(eventId);
			eventData.delete(eventId);
		}
	}
}

PluginManager.registerCommand(HpluginName, "ShowVariableOnEvent", function (args) {
	let eventIds = [];
	if (args.eventId.toLowerCase() === "player") {
		eventIds.push(0);
	} else if (args.eventId.toLowerCase() === "this") {
		eventIds.push(this._eventId);
	} else {
		eventIds.push(Number(args.eventId));
	}

	const weaponAttack = args.weaponAttack || 'none';
	const duration = Number(args.duration);
	const criticalValue = args.criticalValue ? Number(args.criticalValue) : 0;
	let offsetX = 0;
	let offsetY = 0;
	const addValue = PluginManager.parameters(HpluginName).addValue.toLowerCase() === "true";

	let value = null;

	if ((args.value && (args.value.toLowerCase().includes('player weapon') || args.value.toLowerCase().includes('player 2nd weapon'))) || weaponAttack !== 'none') {
		const leader = $gameParty.leader();

		let weaponSlot = 'slot1';
		if (weaponAttack && weaponAttack !== 'none') {
			weaponSlot = weaponAttack;
		} else if (args.value.toLowerCase().includes('player 2nd weapon') || args.value.toLowerCase().includes('2nd weapon')) {
			weaponSlot = 'slot2';
		}

		const weapon = weaponSlot === 'slot1' ? leader.equips()[0] : leader.equips()[1];
		if (weapon && DataManager.isWeapon(weapon)) {
			const targetEventId = eventIds[0];
			const storedDamages = CollisionManager.getAllDamage(targetEventId);
			if (storedDamages && storedDamages.length > 0) {
				value = Math.abs(storedDamages[storedDamages.length - 1]);
			} else {
				value = MaithlCalculateDamagePlayerWeapon(targetEventId, weapon, leader);
			}

			if (args.value && (args.value.toLowerCase().includes('player weapon') || args.value.toLowerCase().includes('player 2nd weapon'))) {
				let expression = args.value.replace(/player\s+2nd\s+weapon/gi, value.toString());
				expression = expression.replace(/player\s+weapon/gi, value.toString());
				try {
					value = eval(expression);
				} catch (e) {
					console.warn(`This expression can't run: ${expression}`, e);
				}
			}
		} else {
			if (weaponAttack !== 'none') {
				return;
			}
		}
	}

	for (const eventId of eventIds) {
		let targetSprite;
		if (eventId === 0) {
			targetSprite = SceneManager._scene._spriteset._characterSprites.find(
				sprite => sprite._character === $gamePlayer
			);
		} else {
			const event = $gameMap.event(eventId);
			if (!event) continue;
			targetSprite = SceneManager._scene._spriteset._characterSprites.find(
				sprite => sprite._character === event
			);
		}
		if (!targetSprite) continue;

		if (args.value === "damage") {
			const actualEventId = this._eventId;
			if (eventId === 0) {
				const damages = CollisionManager.getAllDamage(actualEventId);
				if (!damages || damages.length === 0) continue;

				const playerDamages = CollisionManager.getAllDamage(0);
				if (!playerDamages || playerDamages.length === 0) continue;

				let rawDamage = Math.abs(playerDamages[playerDamages.length - 1]);
				const sourceEventId = CollisionManager.lastSourceEventId;
				const leader = $gameParty.leader();
				value = SapplyDefenseReductionH(rawDamage, sourceEventId, leader);
			} else {
				const damages = CollisionManager.getAllDamage(eventId);
				if (!damages || damages.length === 0) continue;
				value = Math.abs(damages[damages.length - 1]);
			}
		} else if (args.value === "exp") {
			if (eventId !== 0) {
				const event = $gameMap.event(eventId);
				if (!event) return;

				if (!event.databaseEnemy) {
					event.getHpValueFromNote();
				}

				if (event.databaseEnemy) {
					value = event.databaseEnemy.exp;
					if (window.DifficultyManager) {
						value = Math.round(value * DifficultyManager.getMultiplier());
					}
				}

				if (value !== null) {
					value = value + "XP";
				}
			}
		} else if (args.value === "gold") {
			if (eventId !== 0) {
				const event = $gameMap.event(eventId);
				if (!event) continue;

				if (!event.databaseEnemy) {
					event.getHpValueFromNote();
				}

				if (event.databaseEnemy) {
					value = event.databaseEnemy.gold;
					if (window.DifficultyManager) {
						value = Math.round(value * DifficultyManager.getMultiplier());
					}
				}

				if (value !== null && value > 0) {
					value = value + "G";
				}
			}
		} else if (value === null) {
			try {
				value = eval(args.value);
			} catch (e) {
				value = args.value;
			}
		}

		if (value === 0) {
			value = "Miss";
			if (missSfxSettings && missSfxSettings.filename) {
				AudioManager.playSe({
					name: missSfxSettings.filename,
					volume: Number(missSfxSettings.volume || 80),
					pitch: Number(missSfxSettings.pitch || 100),
					pan: 0
				});
			}
		}

		if (typeof value === 'number' && criticalValue !== 0) {
			value += criticalValue;
		}

		let config = { ...defaultConfig };
		if (args.visualSettings) {
			const visualSettings = JSON.parse(args.visualSettings);
			if (visualSettings.fontColor?.trim()) config.fontColor = visualSettings.fontColor;
			if (visualSettings.outlineColor?.trim()) config.outlineColor = visualSettings.outlineColor;
			if (visualSettings.outlineWidth !== undefined && visualSettings.outlineWidth !== '') { config.outlineThickness = Number(visualSettings.outlineWidth); }
			if (visualSettings.fontFilename && visualSettings.fontFilename.trim()) { config.fontFilename = visualSettings.fontFilename.trim(); }
			if (visualSettings.fontSize && Number(visualSettings.fontSize) > 0) { config.fontSize = Number(visualSettings.fontSize); }
			if (visualSettings.offsetX !== undefined && visualSettings.offsetX !== '') offsetX = Number(visualSettings.offsetX);
			if (visualSettings.offsetY !== undefined && visualSettings.offsetY !== '') offsetY = Number(visualSettings.offsetY);
		}

		if (typeof value === 'number' && CollisionManager.lastCritical) {
			let useCriticalColor = true;
			if (args.visualSettings) {
				const visualSettings = JSON.parse(args.visualSettings);
				if (visualSettings.criticalColor !== undefined) {
					useCriticalColor = visualSettings.criticalColor === 'true' || visualSettings.criticalColor === true;
				}
			}

			if (useCriticalColor) {
				config.fontColor = "#fc3223";
				config.outlineColor = "#900C3F";
			}
		}

		const stickToMap = args.stickToMap === 'true';
		config.animationType = args.animation || 'bounce';
		const variableSprite = new Sprite_Variable(config, null, duration, offsetX, offsetY, value, addValue, targetSprite, stickToMap);
		const spriteset = SceneManager._scene._spriteset;
		spriteset.addChild(variableSprite);
		spriteset._variableSprites.push(variableSprite);
	}
});

//==========================================================
// EVENT HP BAR
//==========================================================

const _HGame_Map_initialize = Game_Map.prototype.initialize;
Game_Map.prototype.initialize = function () {
	_HGame_Map_initialize.call(this);
	this.initializeRemovedEventHpBars();
	this.eventsPaused = false;
	this.pauseFramesLeft = 0;
};

Game_Map.prototype.initializeRemovedEventHpBars = function () {
	this.removedEventHpBar = {};
};

Game_Event.prototype.setupSkillReferences = function () {
	const eventData = this.event();
	if (!eventData?.note) return;
	const dmgMatch = eventData.note.match(/<dmg:\s*(.+?)>/i);
	if (dmgMatch) {
		const potentialSkillName = dmgMatch[1].trim();
		const skill = skillNameCache[potentialSkillName.toLowerCase()];
		if (skill) {
			this.databaseSkill = skill;
		}
	}
};

const _HGame_Event_initialize = Game_Event.prototype.initialize;
Game_Event.prototype.initialize = function (mapId, eventId) {
	_HGame_Event_initialize.call(this, mapId, eventId);
	this.setInitialHp();
	this.setupSkillReferences();
	this.setupZIndex();
	this.setupCustomProperties();
	this.isHovered = false;
};

Game_Event.prototype.setupZIndex = function () {
	this._zIndex = this.screenZ();
};

Game_Event.prototype.zIndex = function () {
	return this._zIndex;
};

Game_Event.prototype.setupEnemyData = function (enemyName) {
	const enemy = enemyNameCache[enemyName.toLowerCase()];
	if (!enemy) return null;

	this.databaseEnemy = enemy;
	this.PRnam = enemy.name;
	const battler = SgetBattlerForH(this);
	this.PRmhp = battler ? battler.mhp : enemy.params[0];

	return this.PRmhp;
};

Game_Event.prototype.getHpValueFromNote = function () {
	const eventData = this.event();
	if (!eventData?.note) {
		if (!eventData?.name) return null;
		this.setupEnemyData(eventData.name);
		return this.PRmhp || null;
	}

	const hpMatch = eventData.note.match(/<hp:\s*(.+?)\s*>/i);
	if (!hpMatch) {
		return eventData?.name ? this.setupEnemyData(eventData.name) : null;
	}

	const hpString = hpMatch[1].trim();

	const minionMatch = /minion,\s*(\d+)/i.exec(hpString);
	if (minionMatch) {
		const actorId = parseInt(minionMatch[1]);
		const actor = $gameActors.actor(actorId);
		if (actor) {
			this._isMinionActor = true;
			this._minionActorId = actorId;
			this.linkedActorId = actorId;
			return actor.hp;
		}
	}

	const actorMatch = /actor,\s*(\d+)/i.exec(hpString);
	if (actorMatch) {
		const actorId = parseInt(actorMatch[1]);
		const actor = $gameActors.actor(actorId);
		if (actor) {
			this.linkedActorId = actorId;
			return actor.hp;
		}
	}

	const rangeMatch = /(\d+)\s*-\s*(\d+)/.exec(hpString);
	if (rangeMatch) {
		const min = parseInt(rangeMatch[1]);
		const max = parseInt(rangeMatch[2]);
		const baseHp = Math.floor(Math.random() * (max - min + 1)) + min;

		this.databaseEnemy = null;
		this.PRmhp = baseHp;

		return baseHp;
	}

	const variableMatch = /v\[(\d+)\]/i.exec(hpString);
	if (variableMatch) {
		const baseHp = $gameVariables.value(parseInt(variableMatch[1])) || 0;
		this.databaseEnemy = null;
		this.PRmhp = baseHp;
		return baseHp;
	}

	if (!isNaN(hpString)) {
		const baseHp = parseInt(hpString) || 0;
		this.databaseEnemy = null;
		this.PRmhp = baseHp;
		return baseHp;
	}

	return this.setupEnemyData(hpString);
};

Game_Event.prototype.setInitialHp = function () {
	const eventData = this.event();
	if (!eventData) return;

	if (eventData.note && eventData.note.match(/<hideHP>/i)) {
		this._hideHpBar = true;
	}

	const storageId = `Map${$gameMap.mapId()}_Event${this._eventId}_HP`;
	this.hpStorageId = storageId;

	const hpMatch = eventData.note ? eventData.note.match(/<hp:\s*(.+?)>/i) : null;
	let enemyNameOrHpValue = null;

	if (hpMatch) {
		enemyNameOrHpValue = hpMatch[1].trim();
	} else if (eventData.name) {
		enemyNameOrHpValue = eventData.name;
	}

	if (enemyNameOrHpValue) {
		if (!/^\d+(-\d+)?$/.test(enemyNameOrHpValue) && !enemyNameOrHpValue.includes('actor,') && !enemyNameOrHpValue.includes('minion,')) {
			this.setupEnemyData(enemyNameOrHpValue);
		}
	}

	if (hpMatch) {
		const hpValue = hpMatch[1].trim();

		const minionMatch = /minion,\s*(\d+)/i.exec(hpValue);
		const actorMatch = /actor,\s*(\d+)/i.exec(hpValue);

		if (minionMatch) {
			const actorId = parseInt(minionMatch[1]);
			const actor = $gameActors.actor(actorId);
			if (actor) {
				this._isMinionActor = true;
				this._minionActorId = actorId;
				this.linkedActorId = actorId;

				this.databaseActor = actor;
				this.PRnam = actor.name;
				this.PRmhp = actor.mhp;

				if (!$gameVariables._data[storageId]) {
					$gameVariables._data[storageId] = actor.hp;
					this._maxHp = actor.mhp;
				}
			}
		} else if (actorMatch) {
			const actorId = parseInt(actorMatch[1]);
			const actor = $gameActors.actor(actorId);
			if (actor) {
				this.databaseActor = actor;
				this.linkedActorId = actorId;
				this.PRnam = actor.name;
				this.PRmhp = actor.mhp;
			}
		} else {
			const enemy = enemyNameCache[hpValue.toLowerCase()];
			if (enemy) {
				this.databaseEnemy = enemy;
				this.PRnam = enemy.name;
				const enemyBattler = SgetBattlerForH(this);
				this.PRmhp = enemyBattler ? enemyBattler.mhp : enemy.params[0];
			}
		}
	}

	if (!$gameVariables._data[storageId]) {
		const hpValue = this.getHpValueFromNote();
		if (hpValue !== null) {
			$gameVariables._data[storageId] = hpValue;
			this._maxHp = hpValue;
		}
	}
};

const _H_Game_Actor_displayLevelUp = Game_Actor.prototype.displayLevelUp;
Game_Actor.prototype.displayLevelUp = function (newSkills) {
	if (SceneManager._scene instanceof Scene_Map) {
		return;
	}
	_H_Game_Actor_displayLevelUp.call(this, newSkills);
};

class EventHpBar extends Sprite {
	constructor(event, hp, offsetY, radius) {
		super();
		this._event = event;
		this.hpStorageId = event.hpStorageId;
		if (event._isMinionActor) {
			const actor = $gameActors.actor(event._minionActorId);
			if (actor) {
				this._maxHp = actor.mhp;
				this.currentHp = $gameVariables._data[event.hpStorageId] || actor.hp;
				this.targetHp = this.currentHp;
			}
		} else if (event.linkedActorId) {
			const actor = $gameActors.actor(event.linkedActorId);
			if (actor) {
				this._maxHp = actor.mhp;
				this.currentHp = actor.hp;
				this.targetHp = actor.hp;
			}
		} else {
			this._maxHp = event._maxHp || hp;
			this.currentHp = $gameVariables._data[this.hpStorageId] || 0;
			this.targetHp = this.currentHp;
		}
		this._previousHp = this.currentHp;
		this._offsetY = offsetY || 0;
		this._radius = radius || parseInt(Hparameters["showRadius"]);
		this._scale = this.HpScale(event);
		this.bitmap = new Bitmap(barWidth * this._scale, barHeight * this._scale);
		this._bitmapWidth = this.bitmap.width;
		this._bitmapHeight = this.bitmap.height;
		this.anchor.set(0.5, 1);
		this.fadingOut = false;
		this._fadeOutFrames = 0;
		this.maxFadeOutFrames = 13;
		this._hpChangeDuration = 3;
		this.hpChangeFrames = 0;
		this.opacity = 0;
		this._fadeInFrames = 0;
		this._maxFadeInFrames = 13;
		this.shouldDisplay = false;
		this._gaugeYOffset = 0;
		this._rewardsAwarded = false;
		this.z = event.zIndex() + 1;
		this.anchor.set(0.5, 0.5);

		this._borderSprite = new Sprite();
		this.addChild(this._borderSprite);
		this._borderSprite.anchor.set(0.5, 0.5);
		if (borderImage) {
			this._borderSprite.bitmap = ImageManager.loadSystem(borderImage);
		}

		this.visible = false;
		this.removedEventHpBar = new Set();
		this._lastDrawnHp = null;
		this._lastEventScreenPos = null;
		this._lastEventScreenPosY = null;
		this._lastCharacterName = null;
		this._lastCharacterIndex = null;
		this.refresh();
	}

	HpScale(event) {
		const scaleMatch = event.event().note.match(/<hpScale:\s*(\d*\.?\d+)\s*>/i);
		return scaleMatch ? parseFloat(scaleMatch[1]) : 1;
	}

	update() {
		super.update();
		this.updatePosition();
		this.updateVisibility();
		if (this.fadingOut) {
			this.updateFadeOut();
		} else if (this.shouldDisplay && this._fadeInFrames < this._maxFadeInFrames) {
			this.updateFadeIn();
		}
		this.updateHpChange();
		this.updateFlash();
	}

	startFadeOut() {
		this.fadingOut = true;
	}

	updateFadeIn() {
		if (this._fadeInFrames < this._maxFadeInFrames) {
			this.opacity = (this._fadeInFrames / this._maxFadeInFrames) * 255;
			this._fadeInFrames++;
		} else {
			this.visible = true;
			this._fadeInFrames = this._maxFadeInFrames;
		}
	}

	updateVisibility() {
		if (this._radius <= 0) {
			this.visible = false;
			this.shouldDisplay = false;
			return;
		}

		if (!this._event || !$gamePlayer || SceneManager._scene instanceof Scene_Menu || this._event.noHpBar) {
			this.visible = false;
			this.shouldDisplay = false;
			return;
		}

		if (this.manuallyHidden) {
			this.visible = false;
			this.shouldDisplay = false;
			return;
		}

		if (this._event._hideHpBar) {
			this.opacity = 0;
			if (this._borderSprite) {
				this._borderSprite.opacity = 0;
			}
			return;
		}

		const dx = Math.abs($gameMap.deltaX(this._event.x, $gamePlayer.x));
		const dy = Math.abs($gameMap.deltaY(this._event.y, $gamePlayer.y));
		if (dx > this._radius || dy > this._radius) {
			if (this.visible && !this.fadingOut) {
				this.shouldDisplay = false;
				this.startFadeOut();
				this._fadeInFrames = 0;
			}
			return;
		}

		const distanceSquared = dx * dx + dy * dy;
		const radiusSquared = this._radius * this._radius;

		if (distanceSquared <= radiusSquared) {
			if (!this.visible && !this.fadingOut) {
				this.visible = true;
				this._fadeInFrames = 0;
			}
			this.shouldDisplay = true;
			this.fadeOutFrames = 0;
		} else if (this.visible && !this.fadingOut) {
			this.shouldDisplay = false;
			this.startFadeOut();
			this._fadeInFrames = 0;
		}

		if (this._borderSprite) {
			this._borderSprite.opacity = this.opacity;
		}
	}

	startFadeOut() {
		this.fadingOut = true;
	}

	updateFadeOut() {
		if (this.fadeOutFrames < this.maxFadeOutFrames) {
			this.opacity = (1 - this.fadeOutFrames / this.maxFadeOutFrames) * 255;
			this.fadeOutFrames++;
		} else {
			this.fadingOut = false;
			this.visible = false;
			this.fadeOutFrames = 0;
		}
	}

	updatePosition() {
		if (!this._event) {
			return;
		}

		const eventScreenPos = this._event.screenX();
		const eventScreenPosY = this._event.screenY();
		const characterName = this._event.characterName();
		const characterIndex = this._event.characterIndex();

		const spriteHeight = this.getEventSpriteHeight(characterName, characterIndex);

		let scaleY = 1;
		if (SceneManager._scene instanceof Scene_Map && SceneManager._scene._spriteset) {
			const eventSprite = SceneManager._scene._spriteset._characterSprites.find(
				sprite => sprite._character === this._event
			);
			if (eventSprite && !eventSprite._destroyed && eventSprite.scale && eventSprite.scale.y != null) {
				scaleY = eventSprite.scale.y;
			}
		}

		const scaledSpriteHeight = spriteHeight * scaleY;

		this.x = eventScreenPos;
		this.y = eventScreenPosY - scaledSpriteHeight + this._offsetY - 15;

		this._lastEventScreenPos = eventScreenPos;
		this._lastEventScreenPosY = eventScreenPosY;
		this._lastCharacterName = characterName;
		this._lastCharacterIndex = characterIndex;

		if (this._borderSprite) {
			this._borderSprite.x = 0;
			this._borderSprite.y = 0;
			this._borderSprite.scale.set(this._scale, this._scale);
		}
	}

	getEventSpriteHeight(characterName, characterIndex) {
		if (!characterName) return $gameMap.tileHeight();

		if (eventHeightCache.has(characterName)) {
			return eventHeightCache.get(characterName);
		}

		const is8DirSprite = characterName.includes('8dir');

		const defaultHeight = is8DirSprite ?
			(ImageManager.isBigCharacter(characterName) ? $gameMap.tileHeight() * 2 : $gameMap.tileHeight() * 1.5) :
			(ImageManager.isBigCharacter(characterName) ? $gameMap.tileHeight() * 1.33 : $gameMap.tileHeight());

		eventHeightCache.set(characterName, defaultHeight);

		const bitmap = ImageManager.loadCharacter(characterName);
		bitmap.addLoadListener(() => {
			const big = ImageManager.isBigCharacter(characterName);
			let charWidth, charHeight;

			if (big) {
				charWidth = bitmap.width / 3;
				charHeight = is8DirSprite ? bitmap.height / 8 : bitmap.height / 4;
			} else {
				charWidth = bitmap.width / 12;
				charHeight = is8DirSprite ? bitmap.height / 8 : bitmap.height / 8;
			}

			const canvas = document.createElement('canvas');
			const ctx = canvas.getContext('2d');
			canvas.width = charWidth;
			canvas.height = charHeight;

			let sx, sy;
			if (big) {
				sx = (characterIndex % 4 * 3) * charWidth; sy = 0;
			} else {
				sx = (characterIndex % 4 * 3) * charWidth;
				if (is8DirSprite) {
					sy = Math.floor(characterIndex / 4) * 8 * charHeight;
				} else {
					sy = Math.floor(characterIndex / 4) * 4 * charHeight;
				}
			}
			ctx.drawImage(bitmap._canvas || bitmap._image,
				sx, sy, charWidth, charHeight,
				0, 0, charWidth, charHeight);

			const imageData = ctx.getImageData(0, 0, charWidth, charHeight);
			const data = imageData.data;

			let topPixel = charHeight;
			for (let y = 0; y < charHeight; y++) {
				let hasPixelInRow = false;
				for (let x = 0; x < charWidth; x++) {
					const alpha = data[(y * charWidth + x) * 4 + 3];
					if (alpha > 0) {
						hasPixelInRow = true;
						break;
					}
				}
				if (hasPixelInRow) {
					topPixel = y;
					break;
				}
			}

			let bottomPixel = 0;
			for (let y = charHeight - 1; y >= 0; y--) {
				let hasPixelInRow = false;
				for (let x = 0; x < charWidth; x++) {
					const alpha = data[(y * charWidth + x) * 4 + 3];
					if (alpha > 0) {
						hasPixelInRow = true;
						break;
					}
				}
				if (hasPixelInRow) {
					bottomPixel = y + 1;
					break;
				}
			}

			let finalHeight;
			if (is8DirSprite) {
				finalHeight = bottomPixel - topPixel;
				finalHeight = Math.max(finalHeight, charHeight * 0.8);
			} else {
				finalHeight = bottomPixel - topPixel;
			}
			eventHeightCache.set(characterName, finalHeight > 0 ? finalHeight : defaultHeight);

		});

		return defaultHeight;
	}

	refresh() {
		const currentHp = Math.floor(this.currentHp);
		if (this._lastDrawnHp === currentHp) {
			return;
		}
		const width = this._bitmapWidth;
		const height = this._bitmapHeight;
		const rate = this.currentHp / this._maxHp;
		const fillW = Math.floor(width * rate);

		this.bitmap.clear();
		this.bitmap.fillRect(0, 0, width, height, '#000000');

		if (fillW > 0) {
			let topColor = '#ff4a0d';
			let bottomColor = '#e60505';

			if (this._event) {
				if (!this._cachedColors) {
					const colorMatch = this._event.event().note.match(/<hpColor:\s*([#a-fA-F0-9]+)\s*>/i);
					if (colorMatch) {
						topColor = colorMatch[1];
						const rgb = this.hexToRgb(topColor);
						bottomColor = this.rgbToHex(
							Math.max(0, rgb.r - 40),
							Math.max(0, rgb.g - 40),
							Math.max(0, rgb.b - 40)
						);
					}
					this._cachedColors = { top: topColor, bottom: bottomColor };
				} else {
					topColor = this._cachedColors.top;
					bottomColor = this._cachedColors.bottom;
				}
			}

			const halfHeight = Math.floor(height / 2);
			this.bitmap.fillRect(0, 0, fillW, halfHeight, topColor);
			this.bitmap.fillRect(0, halfHeight, fillW, height - halfHeight, bottomColor);
		}
		this._lastDrawnHp = currentHp;
	}

	hexToRgb(hex) {
		const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		return result ? {
			r: parseInt(result[1], 16),
			g: parseInt(result[2], 16),
			b: parseInt(result[3], 16)
		} : null;
	}

	rgbToHex(r, g, b) {
		return '#' + [r, g, b].map(x => {
			const hex = x.toString(16);
			return hex.length === 1 ? '0' + hex : hex;
		}).join('');
	}

	setHp(value) {
		this.targetHp = Math.max(0, Math.min(value, this._maxHp));
		this.hpChangeFrames = this._hpChangeDuration;
		if (this.hpStorageId) {
			$gameVariables._data[this.hpStorageId] = this.targetHp;
		}
	}

	addHp(value) {
		this.targetHp = Math.max(0, this.targetHp + value);
		this.hpChangeFrames = this._hpChangeDuration;
	}

	updateHpChange() {
		if (this.hpChangeFrames > 0) {
			const prevHp = this.currentHp;
			this.currentHp += (this.targetHp - this.currentHp) / this.hpChangeFrames;

			if (this.hpStorageId) {
				const newHp = Math.floor(this.currentHp);
				$gameVariables._data[this.hpStorageId] = newHp;

				if (newHp <= 0) {
					delete $gameVariables._data[this.hpStorageId];
				}
			}

			if (this.currentHp < prevHp) {
				this._flashFrames = 15;
				this.updateFlash();
			}

			// If HP 0, gain Exp / Gold
			if (Math.floor(this.currentHp) <= 0 && !this._rewardsAwarded) {
				this._rewardsAwarded = true;

				if (this._event.databaseEnemy) {
					const enemy = this._event.databaseEnemy;

					// Give EXP
					if (gainExpFromEnemies) {
						let scaledExp = enemy.exp;
						if (window.DifficultyManager) {
							scaledExp = Math.round(scaledExp * DifficultyManager.getMultiplier());
						}
						if (scaledExp > 0) {
							$gameParty.members().forEach(actor => {
								actor.gainExp(scaledExp);
							});
						}
					}

					// Give Gold
					if (gainGoldFromEnemies) {
						let scaledGold = enemy.gold;
						if (window.DifficultyManager) {
							scaledGold = Math.round(scaledGold * DifficultyManager.getMultiplier());
						}
						if (scaledGold > 0) {
							$gameParty.gainGold(scaledGold);
						}
					}

					// Drop Items
					if (enemyDropItems && enemy.dropItems) {
						this.processEnemyDrops(enemy);
					}
				}
			}

			this.refresh();
			this.hpChangeFrames--;
		}
		this._previousHp = this.currentHp;
	}

	processEnemyDrops(enemy) {
		if (!enemy.dropItems || !this._event) return;

		enemy.dropItems.forEach(drop => {
			if (!drop || drop.kind === 0) return;

			const dropChance = drop.denominator > 0 ? 1 / drop.denominator : 0;

			if (Math.random() < dropChance) {
				let droppedItem = null;

				switch (drop.kind) {
					case 1:
						droppedItem = $dataItems[drop.dataId];
						break;
					case 2:
						droppedItem = $dataWeapons[drop.dataId];
						break;
					case 3:
						droppedItem = $dataArmors[drop.dataId];
						break;
				}

				if (droppedItem) {
					if (dropItemStyle === 'template') {
						this.spawnTemplateItemEvent(droppedItem);
					} else if (dropItemStyle === 'both') {
						$gameMap.spawnBothItemEvent(droppedItem, drop.kind, this._event.x, this._event.y);
					} else {
						$gameMap.spawnIconItemEvent(droppedItem, drop.kind, this._event.x, this._event.y);
					}
				}
			}
		});
	};

	spawnTemplateItemEvent(droppedItem) {
		if (!droppedItem.name) return;

		const templateEventId = $dataTemplateMap.events.findIndex(e =>
			e && e.name === droppedItem.name
		);

		if (templateEventId > 0) {
			const enemyX = this._event.x;
			const enemyY = this._event.y;

			let hasAvailableSpot = false;
			const maxDistance = 2;

			for (let dx = -maxDistance; dx <= maxDistance; dx++) {
				for (let dy = -maxDistance; dy <= maxDistance; dy++) {
					const checkX = enemyX + dx;
					const checkY = enemyY + dy;

					if ($gameMap.isValid(checkX, checkY) && $gameMap.isPassable(checkX, checkY, 5)) {
						const isTileOccupied = $gameMap.eventsXy(checkX, checkY).length > 0;
						if (!isTileOccupied) {
							hasAvailableSpot = true;
							break;
						}
					}
				}
				if (hasAvailableSpot) break;
			}

			const spawnedEventId = $gameMap.spawnEvent(
				templateEventId,
				enemyX,
				enemyY,
				true
			);

			if (spawnedEventId) {
				const spawnedEvent = $gameMap.event(spawnedEventId);
				if (spawnedEvent) {
					spawnedEvent.jumpToNearby(maxDistance, !hasAvailableSpot);
				}
			}
		}
	};

	hasHpDecreased() {
		return this.currentHp < this._previousHp;
	}

	updateFlash() {
		if (this._flashFrames > 0) {
			const intensity = 200 * Math.sin((this._flashFrames % 6) * Math.PI / 15);
			this.setBlendColor([255, 255, 255, intensity]);
			this._flashFrames--;
		} else {
			this.setBlendColor([0, 0, 0, 0]);
		}
	}
}

const _Game_Actor_setHp = Game_Actor.prototype.setHp;
Game_Actor.prototype.setHp = function (hp) {
	_Game_Actor_setHp.call(this, hp);
	if (SceneManager._scene instanceof Scene_Map && SceneManager._scene._spriteset) {
		const spriteset = SceneManager._scene._spriteset;
		spriteset._eventHpBars.forEach(hpBar => {
			if (hpBar._event.linkedActorId === this._actorId && !hpBar._event._isMinionActor) {
				hpBar.setHp(this.hp);
			}
		});
	}
};

const H_Spriteset_Map_initialize = Spriteset_Map.prototype.initialize;
Spriteset_Map.prototype.initialize = function () {
	H_Spriteset_Map_initialize.call(this);
	this._variableSprites = [];
};

const H_Spriteset_Map_update = Spriteset_Map.prototype.update;
Spriteset_Map.prototype.update = function () {
	H_Spriteset_Map_update.call(this);
	this.updateEventHpBars();
	this.updateVariableSprites();
	this.updateCollisionSprites();
};

Spriteset_Map.prototype.updateEventHpBars = function () {
	const currentGroup = Graphics.frameCount % 2;
	const playerX = $gamePlayer.x;
	const playerY = $gamePlayer.y;

	for (let i = 0; i < this._eventHpBars.length; i++) {
		const hpBar = this._eventHpBars[i];
		if (hpBar._event.eventId() % 2 !== currentGroup) continue;
		const dx = Math.abs($gameMap.deltaX(hpBar._event.x, playerX));
		const dy = Math.abs($gameMap.deltaY(hpBar._event.y, playerY));
		const radius = hpBar._radius || defaultRadius;
		if (dx > radius || dy > radius) {
			if (hpBar.visible) hpBar.startFadeOut();
			continue;
		}
		const distanceSquared = dx * dx + dy * dy;
		if (distanceSquared <= radius * radius) {
			hpBar.update();
		} else if (hpBar.visible) {
			hpBar.startFadeOut();
		}
	}
};

Spriteset_Map.prototype.updateVariableSprites = function () {
	this._variableSprites = this._variableSprites.filter(sprite => {
		if (sprite._currentDuration <= 0) {
			this.removeChild(sprite);
			return false;
		}
		sprite.update();
		return true;
	});
};

Spriteset_Map.prototype.cleanupEventHpBars = function () {
	this._eventHpBars = this._eventHpBars.filter(hpBar => {
		if (!$gameMap._events[hpBar._event._eventId]) {
			this._tilemap.removeChild(hpBar);
			return false;
		}
		return true;
	});
};

Game_Interpreter.prototype.currentEvent = function () {
	return this.isOnCurrentMap() ? $gameMap.event(this._eventId) : null;
};

Game_Event.prototype.isMinionActor = function () {
	return this._isMinionActor === true;
};

Game_Event.prototype.getMinionActorId = function () {
	return this._minionActorId;
};

const _Spriteset_Map_createCharacters = Spriteset_Map.prototype.createCharacters;
Spriteset_Map.prototype.createCharacters = function () {
	_Spriteset_Map_createCharacters.call(this);
	this._eventHpBars = [];

	const events = $gameMap.events();
	for (let i = 0; i < events.length; i++) {
		const event = events[i];
		if (!event || event.noHpBar) continue;

		let eventData;
		if (event instanceof Hendrix_TemplateEvent) {
			eventData = $dataTemplateMap.events[event._templateEventId];
		} else if (typeof event.event === 'function') {
			eventData = event.event();
		} else {
			continue;
		}
		if (!event.noHpBar) {
			const eventData = event.event();
			if (eventData) {
				const hpValue = event.getHpValueFromNote();
				const hpYMatch = eventData.note ? eventData.note.match(/<hpy:\s*(-?\d+)\s*>/i) : null;
				const radiusMatch = eventData.note ? eventData.note.match(/<radius:\s*(\d+)\s*>/i) : null;
				if (hpValue !== null) {
					const offsetY = hpYMatch ? parseInt(hpYMatch[1]) : 0;
					const radius = radiusMatch ? parseInt(radiusMatch[1]) : defaultRadius;
					const hpBar = new EventHpBar(event, hpValue, offsetY, radius);
					this._eventHpBars.push(hpBar);
					this._tilemap.addChild(hpBar);
				}
			}
		}
	}
};

Game_Map.prototype.getCurrentEventHp = function (eventId) {
	const event = this.event(eventId);
	if (!event) return null;

	if (event._isMinionActor) {
		if (event.hpStorageId) {
			return $gameVariables._data[event.hpStorageId] || 0;
		}
	}
	else if (event.linkedActorId && !event._isMinionActor) {
		const actor = $gameActors.actor(event.linkedActorId);
		return actor ? actor.hp : 0;
	}

	if (event.hpStorageId) {
		return $gameVariables._data[event.hpStorageId] || 0;
	}

	if (SceneManager._scene instanceof Scene_Map &&
		SceneManager._scene._spriteset?._eventHpBars) {
		const hpBar = SceneManager._scene._spriteset._eventHpBars.find(
			bar => bar._event === event
		);
		if (hpBar) {
			return Math.max(0, hpBar.currentHp);
		}
	}

	const hpValue = event.getHpValueFromNote();
	if (hpValue !== null) {
		return hpValue;
	}

	return null;
};


Game_Map.prototype.getMaxEventHp = function (eventId) {
	const event = this.event(eventId);
	if (!event) return null;

	if (event._isMinionActor) {
		if (event.linkedActorId) {
			return $gameActors.actor(event.linkedActorId) ? $gameActors.actor(event.linkedActorId).mhp : null;
		}
	}
	else if (event.linkedActorId && !event._isMinionActor) {
		return $gameActors.actor(event.linkedActorId) ? $gameActors.actor(event.linkedActorId).mhp : null;
	}

	if (SceneManager._scene instanceof Scene_Map &&
		SceneManager._scene._spriteset?._eventHpBars) {
		const hpBar = SceneManager._scene._spriteset._eventHpBars.find(
			bar => bar._event === event
		);
		if (hpBar) return hpBar._maxHp;
	}

	if (event.PRmhp !== undefined) return event.PRmhp;
	if (event._maxHp !== undefined) return event._maxHp;

	return null;
};

Game_Interpreter.prototype.updateEventHp = function (eventId, value) {
	const event = eventId === "this" ? this.currentEvent() : $gameMap.event(eventId);
	if (!event) return;

	if (event._isMinionActor) {
		if (event.hpStorageId) {
			const currentHp = $gameVariables._data[event.hpStorageId] || 0;
			const newHp = Math.max(0, currentHp + value);
			$gameVariables._data[event.hpStorageId] = newHp;
		}
	}
	else if (event.linkedActorId) {
		const actor = $gameActors.actor(event.linkedActorId);
		if (actor) {
			actor.gainHp(value);
			return;
		}
	}

	if (SceneManager._scene instanceof Scene_Map &&
		SceneManager._scene._spriteset?._eventHpBars) {
		const hpBar = SceneManager._scene._spriteset._eventHpBars.find(
			bar => bar._event === event
		);
		if (hpBar) {
			const newHp = Math.max(0, hpBar.currentHp + value);
			hpBar.targetHp = newHp;
			hpBar.currentHp = newHp;
			hpBar.hpChangeFrames = hpBar._hpChangeDuration;
			hpBar.refresh();
		}
	}
};

Game_Map.prototype.hasHpDecreased = function (eventId) {
	const event = this.event(eventId);
	if (!event) return false;
	const currentHp = this.getCurrentEventHp(eventId);
	const originalHp = parseInt(event.event().meta.hp || 0);
	return currentHp < originalHp;
};

PluginManager.registerCommand(HpluginName, "UpdateEventHp", function (args) {
	const eventIdArg = args.eventId;
	const useWeaponAttack = args.useWeaponAttack || 'none';
	const exceedMaxHealth = args.exceedMaxHealth === 'true';

	const updateHp = (eventId) => {
		if (args.value === undefined || args.value === null || args.value === '') {
			return;
		}

		const valueStr = String(args.value).trim();

		let actualEventId = eventId;
		let isPlayerTarget = false;
		let isMinionTarget = false;
		let isActorTarget = false;
		let targetActor = null;

		if (eventId === "player") {
			isPlayerTarget = true;
			targetActor = $gameParty.leader();
		}
		else if (eventId === "this") {
			actualEventId = this._eventId;
			const event = $gameMap.event(actualEventId);

			if (event) {
				if (event._isMinionActor) {
					isMinionTarget = true;
					targetActor = $gameActors.actor(event._minionActorId);
				} else if (event.linkedActorId) {
					isActorTarget = true;
					targetActor = $gameActors.actor(event.linkedActorId);
				}
			}
		}
		else {
			actualEventId = Number(eventId);
			const event = $gameMap.event(actualEventId);

			if (event) {
				if (event._isMinionActor) {
					isMinionTarget = true;
					targetActor = $gameActors.actor(event._minionActorId);
				} else if (event.linkedActorId) {
					isActorTarget = true;
					targetActor = $gameActors.actor(event.linkedActorId);
				}
			}
		}

		let hpChange = 0;

		if (valueStr.includes('damage')) {
			let damageEventId;
			if (isPlayerTarget) {
				damageEventId = 0;
			} else if (isMinionTarget || isActorTarget) {
				damageEventId = actualEventId;
			} else {
				damageEventId = actualEventId;
			}

			const damages = CollisionManager.getAllDamage(damageEventId);
			CollisionManager.lastEvaded = false;
			CollisionManager.lastImmunity = false;

			if (damages && damages.length > 0) {
				let baseDamage = Math.abs(damages[damages.length - 1]);

				if (CollisionManager.lastEvaded || (baseDamage === 0 && CollisionManager.lastImmunity)) {
					hpChange = 0;
				} else {
					const sourceEventId = CollisionManager.lastSourceEventId;

					if (targetActor) {
						baseDamage = SapplyDefenseReductionH(baseDamage, sourceEventId, targetActor);
					}

					let expression = valueStr.replace(/damage/g, baseDamage.toString());

					try {
						hpChange = eval(expression);
					} catch (e) {
						console.error('Failed to evaluate damage expression:', expression, e);
						hpChange = -baseDamage;
					}
				}

				CollisionManager.addCalculatedDamage(damageEventId, hpChange);
			} else {
				const sourceEventId = CollisionManager.lastSourceEventId || this._eventId;

				if (isPlayerTarget) {
					const sourceEvent = $gameMap.event(sourceEventId);
					if (sourceEvent) {
						let skillDamage = sourceEvent.getDamageFromNoteTag();
						if (skillDamage > 0) {
							if (valueStr.startsWith('+')) {
								hpChange = skillDamage;
							} else {
								hpChange = -skillDamage;
							}
							CollisionManager.addCalculatedDamage(0, hpChange);
						}
					}
				} else {
					const event = $gameMap.event(actualEventId);
					if (event) {
						let skillDamage = event.getDamageFromNoteTag();
						if (skillDamage > 0) {
							if (valueStr.startsWith('+')) {
								hpChange = skillDamage;
							} else {
								hpChange = -skillDamage;
							}
							CollisionManager.addCalculatedDamage(actualEventId, hpChange);
						}
					}
				}
			}
		}
		else if ((valueStr.toLowerCase().includes('player weapon') || valueStr.toLowerCase().includes('player 2nd weapon')) || (useWeaponAttack !== 'none' && useWeaponAttack !== undefined)) {
			const leader = $gameParty.leader();
			const equippedWeapons = typeof leader.equips === 'function' ? leader.equips() : [];
			let weaponDamage = 0;

			let weaponSlot = 'slot1';
			if (useWeaponAttack && useWeaponAttack !== 'none') {
				weaponSlot = useWeaponAttack;
			} else if (valueStr.toLowerCase().includes('player 2nd weapon') || valueStr.toLowerCase().includes('2nd weapon')) {
				weaponSlot = 'slot2';
			}

			let weapon = null;
			if (weaponSlot === 'slot1' && equippedWeapons[0]) {
				weapon = equippedWeapons[0];
			} else if (weaponSlot === 'slot2' && equippedWeapons[1] && DataManager.isWeapon(equippedWeapons[1])) {
				weapon = equippedWeapons[1];
			}

			const targetId = isPlayerTarget ? 0 : actualEventId;
			weaponDamage = MaithlCalculateDamagePlayerWeapon(targetId, weapon, leader);
			CollisionManager.addCollision(targetId, weaponDamage);

			if (valueStr.toLowerCase().includes('player weapon') || valueStr.toLowerCase().includes('player 2nd weapon')) {
				let expression = valueStr.replace(/player\s+2nd\s+weapon/gi, weaponDamage.toString());
				expression = expression.replace(/player\s+weapon/gi, weaponDamage.toString());
				try {
					hpChange = eval(expression);
				} catch (e) {
					console.error('Failed to evaluate weapon expression:', expression, e);
					hpChange = -weaponDamage;
				}
			} else {
				if (weaponDamage > 0) {
					hpChange = -weaponDamage;
				}
			}
		}
		else {
			try {
				hpChange = eval(valueStr);
			} catch (e) {
				console.error('Failed to evaluate value expression:', valueStr, e);
				return;
			}
		}

		if (hpChange !== 0) {
			if ((isPlayerTarget || isActorTarget) && targetActor) {
				if (hpChange > 0 && !exceedMaxHealth) {
					const currentHp = targetActor.hp;
					const maxHp = targetActor.mhp;
					if (currentHp + hpChange > maxHp) {
						hpChange = maxHp - currentHp;
					}
					if (hpChange <= 0) return;
				}
				targetActor.gainHp(hpChange);
			}
			else if (isMinionTarget && targetActor) {
				if (hpChange > 0 && !exceedMaxHealth) {
					const currentHp = targetActor.hp;
					const maxHp = targetActor.mhp;
					if (currentHp + hpChange > maxHp) {
						hpChange = maxHp - currentHp;
					}
					if (hpChange <= 0) return;
				}
				targetActor.gainHp(hpChange);
			}
			else {
				if (hpChange > 0 && !exceedMaxHealth) {
					const event = $gameMap.event(actualEventId);
					if (event) {
						const currentHp = $gameMap.getCurrentEventHp(actualEventId) || 0;
						let maxHp;

						if (event._isMinionActor && event.databaseActor) {
							maxHp = event.databaseActor.mhp;
						} else {
							maxHp = event.getHpValueFromNote() || currentHp;
						}

						if (currentHp + hpChange > maxHp) {
							hpChange = maxHp - currentHp;
						}
						if (hpChange <= 0) return;
					}
				}
				this.updateEventHp(actualEventId, hpChange);
			}
		}
	};

	if (eventIdArg === "all") {
		$gameMap.events().forEach((event) => {
			if (event.getHpValueFromNote() !== null) {
				updateHp(event._eventId);
			}
		});
	} else {
		updateHp(eventIdArg);
	}
});

PluginManager.registerCommand(HpluginName, "UpdatePlayerHp", function (args) {
	const updateHp = () => {
		const actualEventId = this._eventId;
		let hpChange = 0;

		if (args.value.includes('damage')) {
			const damages = CollisionManager.getAllDamage(actualEventId);
			if (damages && damages.length > 0) {
				let latestDamage = damages[damages.length - 1];

				// Get target actor
				let targetActor = null;
				if (!args.target || args.target === 'player') {
					targetActor = $gameParty.leader();
				} else if (args.target === 'self') {
					const event = $gameMap.event(actualEventId);
					if (event) {
						const note = event.event().note;
						const match = note.match(/<hp:\s*actor,\s*(\d+)>/i);
						if (match) {
							const actorId = parseInt(match[1]);
							targetActor = $gameActors.actor(actorId);
						}
					}
				} else {
					const actorId = parseInt(args.target);
					if (!isNaN(actorId)) {
						targetActor = $gameActors.actor(actorId);
					} else {
						targetActor = $gameActors._data.find(actor =>
							actor && actor._name === args.target
						);
					}
				}

				// Fefense reduction
				if (targetActor) {
					const sourceEventId = CollisionManager.lastSourceEventId;
					latestDamage = SapplyDefenseReductionH(Math.abs(latestDamage), sourceEventId, targetActor);
				}

				let expression = args.value;

				const parenRegex = /\((.*?)\)/g;
				expression = expression.replace(parenRegex, (match, innerContent) => {
					if (innerContent.includes('damage')) {
						const evalInner = innerContent
							.replace(/damage/g, latestDamage.toString());
						try {
							const innerResult = Math.max(0, eval(evalInner));
							return `(${innerResult})`;
						} catch (e) {
							return `(${latestDamage})`;
						}
					}
					return match;
				});

				expression = expression
					.replace(/damage/g, latestDamage.toString());

				expression = expression.replace(/\s+/g, '');

				try {
					hpChange = eval(expression);
					CollisionManager.addCalculatedDamage(0, hpChange);
				} catch (e) {
					hpChange = latestDamage;
					CollisionManager.addCalculatedDamage(0, hpChange);
				}
			}
		} else {
			hpChange = eval(args.value);
		}

		if (hpChange !== 0) {
			if (!args.target || args.target === 'player') {
				$gameParty.leader().gainHp(hpChange);
			} else if (args.target === 'self') {
				const event = $gameMap.event(actualEventId);
				if (event) {
					const note = event.event().note;
					const match = note.match(/<hp:\s*actor,\s*(\d+)>/i);
					if (match) {
						const actorId = parseInt(match[1]);
						const targetActor = $gameActors.actor(actorId);
						if (targetActor) {
							targetActor.gainHp(hpChange);
						}
					}
				}
			} else {
				let targetActor = null;
				const actorId = parseInt(args.target);

				if (!isNaN(actorId)) {
					targetActor = $gameActors.actor(actorId);
				} else {
					targetActor = $gameActors._data.find(actor =>
						actor && actor._name === args.target
					);
				}

				if (targetActor) {
					targetActor.gainHp(hpChange);
				}
			}
		}
	};

	updateHp();
});

Game_Interpreter.prototype.removeEventHpBar = function (eventId) {
	const event = $gameMap.event(eventId);
	if (!event) return;

	const spriteset = SceneManager._scene._spriteset;
	const hpBarIndex = spriteset._eventHpBars.findIndex(hpBar => hpBar._event === event);

	if (hpBarIndex > -1) {
		const hpBar = spriteset._eventHpBars[hpBarIndex];
		hpBar.startFadeOut();

		const mapId = $gameMap.mapId();
		if (!Array.isArray($gameMap.removedEventHpBar[mapId])) {
			$gameMap.removedEventHpBar[mapId] = [];
		}
		$gameMap.removedEventHpBar[mapId].push(event._eventId);

		setTimeout(() => {
			const hpBarIndex = spriteset._eventHpBars.findIndex(hpBar => hpBar._event === event);
			if (hpBarIndex > -1) {
				spriteset._tilemap.removeChild(hpBar);
				spriteset._eventHpBars.splice(hpBarIndex, 1);
			}
		}, hpBar.maxFadeOutFrames * 1000 / 60);
	}
};

PluginManager.registerCommand(HpluginName, "RemoveEventHpBar", function (args) {
	if (args.eventId === "this") {
		this.removeEventHpBar(this._eventId);
	} else {
		const eventId = parseInt(args.eventId);
		this.removeEventHpBar(eventId);
	}
});

Game_Map.prototype.getCharacterDistance = function (character1, character2) {
	const dx = Math.abs($gameMap.deltaX(character1.x, character2.x));
	const dy = Math.abs($gameMap.deltaY(character1.y, character2.y));
	return Math.sqrt(dx * dx + dy * dy);
};

Spriteset_Map.prototype.refreshEventHpBars = function () {
	const mapId = $gameMap.mapId();
	const removedEventHpBars = $gameMap.removedEventHpBar[mapId] || [];
	const eventsWithHpBar = new Set(this._eventHpBars.map(hpBar => hpBar._event._eventId));

	$gameMap.events().forEach(event => {
		if (!removedEventHpBars.includes(event._eventId) && !eventsWithHpBar.has(event._eventId)) {
			const hpValue = event.getHpValueFromNote();
			if (hpValue !== null) {
				const eventData = event.event();
				const offsetY = parseInt(eventData.note?.match(/<hpy:\s*(-?\d+)\s*>/i)?.[1] || 0);
				const radius = parseInt(eventData.note?.match(/<radius:\s*(\d+)\s*>/i)?.[1] || defaultRadius);
				const hpBar = new EventHpBar(event, hpValue, offsetY, radius);
				this._eventHpBars.push(hpBar);
				this._tilemap.addChild(hpBar);
			}
		}
	});
};

PluginManager.registerCommand(HpluginName, 'refreshEventHpBars', () => {
	if (SceneManager._scene instanceof Scene_Map) {
		SceneManager._scene._spriteset.refreshEventHpBars();
	}
});

Game_Event.prototype.resetHpToOriginal = function () {
	const originalHp = this.getHpValueFromNote();
	if (originalHp !== null) {
		if (this.hpStorageId) {
			$gameVariables._data[this.hpStorageId] = originalHp;
		}

		let hpBar = SceneManager._scene._spriteset._eventHpBars.find(hpBar => hpBar._event === this);
		if (hpBar) {
			hpBar.setHp(originalHp);
		}
	}
};

PluginManager.registerCommand(HpluginName, "ResetEventHpToOriginal", function (args) {
	const mapId = $gameMap.mapId();
	$gameMap.removedEventHpBar[mapId] = [];
	$gameMap.events().forEach(event => {
		event.resetHpToOriginal();
	});
});

PluginManager.registerCommand(HpluginName, "EventHPBarVisibility", function (args) {
	const status = args.Status === 'true';
	const eventId = args.Target === "this" ? this._eventId : parseInt(args.Target);
	if (!$gameMap.event(eventId)) return;
	if (!SceneManager._scene._spriteset) return;
	const hpBar = SceneManager._scene._spriteset._eventHpBars.find(bar => bar._event === $gameMap.event(eventId));
	if (!hpBar) return;
	hpBar.setVisibility(status);
});

EventHpBar.prototype.setVisibility = function (visible) {
	this.manuallyHidden = !visible;
	this.noHpBar = !visible;
	this.visible = visible;
	this.shouldDisplay = visible;
	if (visible) {
		this._fadeInFrames = 0;
		this.fadingOut = false;
		this.opacity = 255;
	} else {
		this.opacity = 0;
	}
};

const H_Scene_Map_start = Scene_Map.prototype.start;
Scene_Map.prototype.start = function () {
	H_Scene_Map_start.call(this);
	passageCache = {};
	$gameMap.clearCustomEventHitboxCaches();
	$gameMap.clearPassageCache();
	$gameMap.initializePassCache();
};

Scene_Map.prototype.clearRemovedEventHpBars = function () {
	const mapId = $gameMap.mapId();
	if (!$gameMap.removedEventHpBar[mapId]) return;
	const existingEventIds = new Set(this._spriteset._eventHpBars.map(hpBar => hpBar._event._eventId));
	for (const eventId in $gameMap.removedEventHpBar[mapId]) {
		if (!existingEventIds.has(parseInt(eventId))) {
			delete $gameMap.removedEventHpBar[mapId][eventId];
			if ($gameMap.event(parseInt(eventId))) {
				$gameMap.event(parseInt(eventId)).setInitialHp();
			}
		}
	}
};

//==========================================================
// EVENT CHILD
//==========================================================

Game_Event.prototype.setupPlayerChild = function () {
	if (!this.page()) return;
	if (this.wasAttached) return;

	const attachComment = this.list().find(command =>
		(command.code === 108 || command.code === 408) &&
		command.parameters[0].match(/<child\s+of:\s*(.+?)>/i)
	);

	if (!attachComment) {
		if (!this.wasAttached) {
			this.isPlayerChild = false;
			this.theParent = null;
		}
		return;
	}

	const [, target] = attachComment.parameters[0].match(/<child\s+of:\s*(.+?)>/i);
	let parentEvent = null;

	if (target.toLowerCase() === 'player') {
		parentEvent = $gamePlayer;
	} else if (target.startsWith('<') && target.endsWith('>')) {
		let nearestDistance = Infinity;
		$gameMap.events().forEach(event => {
			if (event !== this && event.event().note.includes(target)) {
				const distance = Math.sqrt(
					Math.pow(this.x - event.x, 2) +
					Math.pow(this.y - event.y, 2)
				);
				if (distance < nearestDistance) {
					nearestDistance = distance;
					parentEvent = event;
				}
			}
		});
	} else if (!isNaN(target)) {
		parentEvent = $gameMap.event(Number(target));
	} else {
		let nearestDistance = Infinity;
		$gameMap.events().forEach(event => {
			if (event !== this && event.event().name === target) {
				const distance = Math.sqrt(
					Math.pow(this.x - event.x, 2) +
					Math.pow(this.y - event.y, 2)
				);
				if (distance < nearestDistance) {
					nearestDistance = distance;
					parentEvent = event;
				}
			}
		});
	}

	if (parentEvent) {
		const offsetMatch = this.list().find(command =>
			(command.code === 108 || command.code === 408) &&
			command.parameters[0].match(/<child offset:\s*(-?\d+\.?\d*),\s*(-?\d+\.?\d*)>/i)
		);

		if (offsetMatch) {
			const [, x, y] = offsetMatch.parameters[0].match(/<child offset:\s*(-?\d+\.?\d*),\s*(-?\d+\.?\d*)>/i);
			this.childOffsetX = -Number(x);
			this.childOffsetY = -Number(y);
		}

		this.isPlayerChild = parentEvent === $gamePlayer;
		this.theParent = parentEvent;

		if (this.isPlayerChild) {
			this.lastPlayerX = $gamePlayer._realX + this.childOffsetX;
			this.lastPlayerY = $gamePlayer._realY + this.childOffsetY;
		} else {
			this.lastParentX = parentEvent._realX + this.childOffsetX;
			this.lastParentY = parentEvent._realY + this.childOffsetY;
		}

		if (H_DotMoveSystem) {
			const parentPos = parentEvent.positionPoint();
			const eventPos = this.positionPoint();
			this.childOffsetX = eventPos.x - parentPos.x;
			this.childOffsetY = eventPos.y - parentPos.y;
		} else {
			this.childOffsetX = this._realX - parentEvent._realX;
			this.childOffsetY = this._realY - parentEvent._realY;
		}

	} else {
		this.isPlayerChild = false;
		this.theParent = null;
	}
};

PluginManager.registerCommand(HpluginName, "AttachToEvent", function (args) {
	const source = args.child || 'this';
	let sourceEvents = findTargets(source, this);

	if (args.parent === 'none') {
		sourceEvents.forEach(sourceEvent => {
			if (!sourceEvent) return;
			if (sourceEvent === $gamePlayer) {
				$gamePlayer._parentEvent = null;
				$gamePlayer._parentOffsetX = 0;
				$gamePlayer._parentOffsetY = 0;
				return;
			}
			sourceEvent.isPlayerChild = false;
			sourceEvent.theParent = null;
			sourceEvent.childOffsetX = 0;
			sourceEvent.childOffsetY = 0;
			sourceEvent.wasAttached = false;
		});
		return;
	}

	const attachTo = args.parent || 'this';
	let parentEvents = findTargets(attachTo, this);

	let commandOffsetX = 0, commandOffsetY = 0;
	if (args.offset) {
		const offsetMatch = args.offset.match(/\s*(-?\d+\.?\d*)\s*,\s*(-?\d+\.?\d*)\s*/);
		if (offsetMatch) {
			commandOffsetX = Number(offsetMatch[1]) || 0;
			commandOffsetY = Number(offsetMatch[2]) || 0;
		}
	}

	sourceEvents.forEach(sourceEvent => {
		if (!sourceEvent) return;

		if (sourceEvent === $gamePlayer) {
			const parentEvent = parentEvents.find(p => p && p !== $gamePlayer);
			if (parentEvent) {
				$gamePlayer._parentEvent = parentEvent;
				if (H_DotMoveSystem) {
					const parentPos = parentEvent.positionPoint
						? parentEvent.positionPoint()
						: { x: parentEvent._realX, y: parentEvent._realY };
					$gamePlayer._parentOffsetX = $gamePlayer._realX - parentPos.x;
					$gamePlayer._parentOffsetY = $gamePlayer._realY - parentPos.y;
				} else {
					$gamePlayer._parentOffsetX = $gamePlayer._realX - parentEvent._realX;
					$gamePlayer._parentOffsetY = $gamePlayer._realY - parentEvent._realY;
				}
				if (args.offset) {
					$gamePlayer._parentOffsetX = commandOffsetX;
					$gamePlayer._parentOffsetY = commandOffsetY;
				}
				$gamePlayer._lastParentX = parentEvent._realX;
				$gamePlayer._lastParentY = parentEvent._realY;
			}
			return;
		}

		let nearestParent = null;
		let shortestDistance = Infinity;

		parentEvents.forEach(parentEvent => {
			if (!parentEvent || parentEvent === sourceEvent) return;

			const distance = Math.sqrt(
				Math.pow(sourceEvent.x - parentEvent.x, 2) +
				Math.pow(sourceEvent.y - parentEvent.y, 2)
			);

			if (distance < shortestDistance) {
				shortestDistance = distance;
				nearestParent = parentEvent;
			}
		});

		if (nearestParent) {
			sourceEvent.isPlayerChild = (nearestParent === $gamePlayer);
			sourceEvent.theParent = nearestParent;

			if (sourceEvent.isPlayerChild) {
				sourceEvent.lastPlayerX = $gamePlayer._realX;
				sourceEvent.lastPlayerY = $gamePlayer._realY;
			} else {
				sourceEvent.lastParentX = nearestParent._realX;
				sourceEvent.lastParentY = nearestParent._realY;
			}

			if (H_DotMoveSystem) {
				const parentPos = nearestParent.positionPoint();
				const eventPos = sourceEvent.positionPoint();
				sourceEvent.childOffsetX = eventPos.x - parentPos.x;
				sourceEvent.childOffsetY = eventPos.y - parentPos.y;
			} else {
				sourceEvent.childOffsetX = sourceEvent._realX - nearestParent._realX;
				sourceEvent.childOffsetY = sourceEvent._realY - nearestParent._realY;
			}

			if (args.offset) {
				sourceEvent.childOffsetX = commandOffsetX;
				sourceEvent.childOffsetY = commandOffsetY;
			}
			sourceEvent.wasAttached = true;
		}
	});
});

function MaithlSetMountPassable(event, passable) {
	if (!event) return;
	const eventId = event.eventId();

	if (!$gameSystem._playerPassThroughEvents) {
		$gameSystem._playerPassThroughEvents = [];
	}

	if (passable) {
		if (!$gameMap._passEvents) {
			$gameMap.initializePassCache();
		}
		$gameMap.addPassEvent(eventId, event.x, event.y);
		if (!$gameSystem._playerPassThroughEvents.includes(eventId)) {
			$gameSystem._playerPassThroughEvents.push(eventId);
		}
	} else {
		if ($gameMap._passEvents) {
			$gameMap.removePassEvent(eventId, event.x, event.y);
		}
		const index = $gameSystem._playerPassThroughEvents.indexOf(eventId);
		if (index > -1) {
			$gameSystem._playerPassThroughEvents.splice(index, 1);
		}
	}
}

PluginManager.registerCommand(HpluginName, "Mount", function (args) {
	const action = args.action || 'mount';

	if (action === 'dismount') {
		const mountedEvent = $gamePlayer._mountedEvent;
		if (mountedEvent) {
			mountedEvent.isPlayerChild = false;
			mountedEvent.isMount = false;
			mountedEvent.theParent = null;
			mountedEvent.childOffsetX = 0;
			mountedEvent.childOffsetY = 0;
			mountedEvent.wasAttached = false;
			MaithlSetMountPassable(mountedEvent, false);

			if ($gamePlayer._preMountSpeed !== undefined) {
				$gamePlayer.setMoveSpeed($gamePlayer._preMountSpeed);
				$gamePlayer._preMountSpeed = undefined;
			}
			if (mountedEvent._preSmountEventHSpeed !== undefined) {
				mountedEvent.setMoveSpeed(mountedEvent._preSmountEventHSpeed);
				mountedEvent._preSmountEventHSpeed = undefined;
			}

			if (H_DotMoveSystem) {
				$gamePlayer.setOffsetX(0);
				$gamePlayer.setOffsetY(0);
			} else {
				$gamePlayer._mountSpriteOffsetX = 0;
				$gamePlayer._mountSpriteOffsetY = 0;
			}

			$gamePlayer._mountedEvent = null;
		}
		return;
	}

	const targets = findTargets(args.target || 'this', this);
	const SmountEventH = targets.find(t => t && t !== $gamePlayer);
	if (!SmountEventH) return;

	if ($gamePlayer._mountedEvent && $gamePlayer._mountedEvent !== SmountEventH) {
		const prev = $gamePlayer._mountedEvent;
		prev.isPlayerChild = false;
		prev.isMount = false;
		prev.theParent = null;
		prev.childOffsetX = 0;
		prev.childOffsetY = 0;
		prev.wasAttached = false;
		MaithlSetMountPassable(prev, false);
	}

	const movePlayerAboveStr = (args.movePlayerAbove || '').trim();
	let targetSpriteX = $gamePlayer._realX;
	let targetSpriteY = $gamePlayer._realY;
	if (movePlayerAboveStr !== '') {
		const offsetY = eval(movePlayerAboveStr);
		targetSpriteX = SmountEventH._realX;
		targetSpriteY = SmountEventH._realY - 1 + Number(offsetY) / $gameMap.tileHeight();
	}

	if (H_DotMoveSystem) {
		$gamePlayer.locate(SmountEventH._realX, SmountEventH._realY);
		$gamePlayer.setOffsetX(targetSpriteX - SmountEventH._realX);
		$gamePlayer.setOffsetY(targetSpriteY - SmountEventH._realY);
	} else {
		$gamePlayer.locate(Math.round(SmountEventH._realX), Math.round(SmountEventH._realY));
		$gamePlayer._mountSpriteOffsetX = Math.round((targetSpriteX - SmountEventH._realX) * $gameMap.tileWidth());
		$gamePlayer._mountSpriteOffsetY = Math.round((targetSpriteY - SmountEventH._realY) * $gameMap.tileHeight());
	}

	SmountEventH.isPlayerChild = true;
	SmountEventH.isMount = true;
	SmountEventH.theParent = $gamePlayer;
	SmountEventH.childOffsetX = 0;
	SmountEventH.childOffsetY = 0;
	SmountEventH.lastPlayerX = $gamePlayer._realX;
	SmountEventH.lastPlayerY = $gamePlayer._realY;
	SmountEventH.wasAttached = true;
	SmountEventH.setDirection($gamePlayer.direction());
	MaithlSetMountPassable(SmountEventH, true);
	const mountSpeedStr = (args.speed || '').trim();
	if (mountSpeedStr !== '') {
		$gamePlayer._preMountSpeed = $gamePlayer.moveSpeed();
		$gamePlayer.setMoveSpeed(eval(mountSpeedStr));
		SmountEventH._preSmountEventHSpeed = SmountEventH.moveSpeed();
		SmountEventH.setMoveSpeed(eval(mountSpeedStr));
	}

	$gamePlayer._mountedEvent = SmountEventH;
});

const _SGame_Event_isMoving_MountH = Game_Event.prototype.isMoving;
Game_Event.prototype.isMoving = function () {
	if (this.isMount && $gamePlayer._mountedEvent === this) {
		if ($gamePlayer.isMoving()) return true;
		if (this.lastPlayerX !== undefined && this.lastPlayerY !== undefined) {
			return this.lastPlayerX !== $gamePlayer._realX ||
				this.lastPlayerY !== $gamePlayer._realY;
		}
		return false;
	}
	return _SGame_Event_isMoving_MountH.call(this);
};

const _SGame_Player_isMoving_MountH = Game_Player.prototype.isMoving;
Game_Player.prototype.isMoving = function () {
	if (this._mountedEvent) return false;
	return _SGame_Player_isMoving_MountH.call(this);
};

const _SGame_Player_screenX_MountH = Game_Player.prototype.screenX;
Game_Player.prototype.screenX = function () {
	return _SGame_Player_screenX_MountH.call(this) + (this._mountSpriteOffsetX || 0);
};

const _SGame_Player_screenY_MountH = Game_Player.prototype.screenY;
Game_Player.prototype.screenY = function () {
	return _SGame_Player_screenY_MountH.call(this) + (this.jumpY || 0) + (this._mountSpriteOffsetY || 0);
};

const _SGame_CharacterBase_screenZ_MountH = Game_CharacterBase.prototype.screenZ;
Game_CharacterBase.prototype.screenZ = function () {
	if (this === $gamePlayer && $gamePlayer._mountedEvent) {
		return _SGame_CharacterBase_screenZ_MountH.call(this) + 1;
	}
	return _SGame_CharacterBase_screenZ_MountH.call(this);
};

if (Imported.Hendrix_Animation_Solution) {
	const _Game_Player_updateGraphics_Mount = Game_Player.prototype.updateGraphics;
	Game_Player.prototype.updateGraphics = function () {
		if (this._mountedEvent && this._detectedIdleGraphic) {
			if (this._characterName !== this._detectedIdleGraphic) {
				this.setImage(this._detectedIdleGraphic, 0);
			}
			this._isIdleAnimating = true;
			this._stepAnime = false;
			return;
		}
		_Game_Player_updateGraphics_Mount.call(this);
	};

	const _SGame_Player_updateMovingState_Mount = Game_Player.prototype.updateMovingState;
	Game_Player.prototype.updateMovingState = function () {
		_SGame_Player_updateMovingState_Mount.call(this);
		if (this._mountedEvent) {
			this._isMoving = false;
		}
	};

	const _SGame_Player_animationWait_MountH = Game_Player.prototype.animationWait;
	Game_Player.prototype.animationWait = function () {
		if (this._mountedEvent && this._preMountSpeed !== undefined && !this._isMoving) {
			const origSpeed = this._moveSpeed;
			this._moveSpeed = this._preMountSpeed;
			const wait = _SGame_Player_animationWait_MountH.call(this);
			this._moveSpeed = origSpeed;
			return wait;
		}
		return _SGame_Player_animationWait_MountH.call(this);
	};

	const _SGame_Event_animationWait_MountH = Game_Event.prototype.animationWait;
	Game_Event.prototype.animationWait = function () {
		if (this.isMount && $gamePlayer._mountedEvent === this &&
			this._preSmountEventHSpeed !== undefined && !this._isMoving) {
			const origSpeed = this._moveSpeed;
			this._moveSpeed = this._preSmountEventHSpeed;
			const wait = _SGame_Event_animationWait_MountH.call(this);
			this._moveSpeed = origSpeed;
			return wait;
		}
		return _SGame_Event_animationWait_MountH.call(this);
	};
}

//==========================================================
// DISPLAY WEAPON
//==========================================================

let ShxWeaponSpriteH = null;
let ShxWeaponDataH = null;

function ShxCreateWeaponSpriteH() {
	if (!ShxWeaponDataH) return;
	if (ShxWeaponSpriteH && ShxWeaponSpriteH.parent) {
		ShxWeaponSpriteH.parent.removeChild(ShxWeaponSpriteH);
		ShxWeaponSpriteH.destroy();
		ShxWeaponSpriteH = null;
	}
	ShxWeaponSpriteH = new Sprite();
	ShxWeaponSpriteH.bitmap = ImageManager.loadPicture(ShxWeaponDataH.file);
	ShxWeaponSpriteH.anchor.set(0, 0.5);
	ShxWeaponSpriteH.z = $gamePlayer.screenZ() + 1;
	ShxWeaponSpriteH.rotation = ShxWeaponDataH.lastAngle || 0;
	if (SceneManager._scene instanceof Scene_Map && SceneManager._scene._spriteset && SceneManager._scene._spriteset._tilemap) {
		SceneManager._scene._spriteset._tilemap.addChild(ShxWeaponSpriteH);
	}
}

PluginManager.registerCommand(HpluginName, "DisplayWeapon", function (args) {
	if (args.status !== 'true') {
		if (ShxWeaponSpriteH && ShxWeaponSpriteH.parent) {
			ShxWeaponSpriteH.parent.removeChild(ShxWeaponSpriteH);
			ShxWeaponSpriteH.destroy();
			ShxWeaponSpriteH = null;
		}
		ShxWeaponDataH = null;
		return;
	}
	const weaponFile = (args.weaponSprite || '').trim();
	if (!weaponFile) return;
	const _offsetParts = (args.offset || '0, 0').split(',');
	ShxWeaponDataH = {
		file: weaponFile,
		offsetX: eval((_offsetParts[0] || '0').trim()),
		offsetY: eval((_offsetParts[1] || '0').trim()),
		lastAngle: 0
	};
	ShxCreateWeaponSpriteH();
});

const _0xbb3cb9 = _0x568e; function _0x15ec() { const _0x39756a = ['tileWidth', 'jRfBG', 'resolveCom', '283692NpbtXT', 'eHasTag', 'ntIds', 'sFromCusto', 'Notetag', '25pVdfei', 'gzStc', 'isDatabase', 'forEach', '341QvMcag', 'page', '1187rSlUVh', 'mNotetag', '<pass>', 'filter', 'eComment', 'split', 'mTags', 'currentPag', 'name', 'height', 'eters', 'setupCommo', 'length', 'prototype', 'tileHeight', 'applyCommo', 'extractCom', '2349048MYuuYX', 'event', '10FmrgTa', 'adjustX', 'trim', 'sFromPage', 'delete', 'CZDQB', 'rpreters', '2061RvuNvf', '_commonEve', '6287634dGCabw', 'includes', 'monEvents', 'call', 'ntCommonEv', 'able', 'monEventId', 'setup', '248372VXmGxy', 'code', 'lidingComm', 'isNearScre', '743813mkKAgn', '6vRsCrz', '_passiveBl', '1812HKMuNf', 'passiveCom', 'tIds', '_eventId', 'siveCommon']; _0x15ec = function () { return _0x39756a; }; return _0x15ec(); } (function (_0x4e60eb, _0x58c753) { const _0x213451 = { _0x330c0e: 0x12f, _0x98cc8a: 0x11c, _0x2f031b: 0x10b, _0x38454c: 0x115, _0x1749c7: 0x129, _0x365aef: 0x11a, _0x57c5b5: 0x104, _0x481876: 0x12d, _0x37c7ec: 0x124 }, _0x1bf9a3 = _0x568e, _0x320b92 = _0x4e60eb(); while (!![]) { try { const _0x596715 = -parseInt(_0x1bf9a3(_0x213451._0x330c0e)) / (0x28f * 0x8 + 0x8 * 0x23b + 0x3 * -0xcc5) + -parseInt(_0x1bf9a3(_0x213451._0x98cc8a)) / (-0x1751 + 0x635 + 0x111e) * (-parseInt(_0x1bf9a3(_0x213451._0x2f031b)) / (0x15e2 + 0x1f32 + -0x3511)) + parseInt(_0x1bf9a3(_0x213451._0x38454c)) / (-0x23e6 + -0x22b2 * -0x1 + -0x8 * -0x27) * (-parseInt(_0x1bf9a3(_0x213451._0x1749c7)) / (0x849 + 0x1887 + -0x73 * 0x49)) + parseInt(_0x1bf9a3(_0x213451._0x365aef)) / (-0x453 + -0x13b7 + 0x1810) * (parseInt(_0x1bf9a3(0x119)) / (-0x1489 + -0x4 * 0x886 + 0x36a8)) + parseInt(_0x1bf9a3(0x102)) / (-0x1a * -0x150 + -0x1c6b + -0x5ad) + -parseInt(_0x1bf9a3(0x10d)) / (0x1 * 0x1621 + -0x1952 * -0x1 + -0x2f6a) * (-parseInt(_0x1bf9a3(_0x213451._0x57c5b5)) / (0x2377 + 0x1265 + -0x2 * 0x1ae9)) + -parseInt(_0x1bf9a3(_0x213451._0x481876)) / (0x1e6d + 0x8 * -0x3d2 + 0x2e) * (parseInt(_0x1bf9a3(_0x213451._0x37c7ec)) / (-0x1075 + -0x1492 * -0x1 + 0x1 * -0x411)); if (_0x596715 === _0x58c753) break; else _0x320b92['push'](_0x320b92['shift']()); } catch (_0x38b443) { _0x320b92['push'](_0x320b92['shift']()); } } }(_0x15ec, 0xdc553 + -0x2601 * -0x5c + 0x4 * -0x446dc)); let commonEventNameCache = null, enemyNameCache = null, skillNameCache = null, stateNameCache = null; const _DataManager_isDatabaseLoaded = DataManager[_0xbb3cb9(0x12b) + 'Loaded']; function _0x568e(_0x330ae8, _0x5273bb) { _0x330ae8 = _0x330ae8 - (-0x9a1 + 0x1 * -0x2294 + 0x2d2d); const _0x3f5967 = _0x15ec(); let _0x370cd9 = _0x3f5967[_0x330ae8]; return _0x370cd9; } DataManager['isDatabase' + 'Loaded'] = function () { const _0x22ad50 = { _0x483aba: 0x12c }, _0x1d401d = { _0x136bd1: 0xf9 }, _0x3059f7 = _0xbb3cb9; if (!_DataManager_isDatabaseLoaded[_0x3059f7(0x110)](this)) return ![]; return enemyNameCache = {}, $dataEnemies['forEach'](_0x45d9ca => { if (_0x45d9ca) enemyNameCache[_0x45d9ca['name']['toLowerCas' + 'e']()] = _0x45d9ca; }), commonEventNameCache = {}, $dataCommonEvents[_0x3059f7(_0x22ad50._0x483aba)](_0x39dc23 => { if (_0x39dc23) commonEventNameCache[_0x39dc23['name']['toLowerCas' + 'e']()] = _0x39dc23['id']; }), skillNameCache = {}, $dataSkills['forEach'](_0x266585 => { const _0x1d8f71 = _0x3059f7; if (_0x266585) skillNameCache[_0x266585[_0x1d8f71(_0x1d401d._0x136bd1)]['toLowerCas' + 'e']()] = _0x266585; }), stateNameCache = {}, $dataStates['forEach'](_0x17965d => { if (_0x17965d) stateNameCache[_0x17965d['name']['toLowerCas' + 'e']()] = _0x17965d['id']; }), !![]; }, Game_Event[_0xbb3cb9(0xfe)]['resolveCom' + 'monEventId'] = function (_0x244f64) { const _0x453197 = { _0x1c3054: 0x106 }, _0x1c5334 = _0xbb3cb9; if (!isNaN(_0x244f64['trim']())) return parseInt(_0x244f64[_0x1c5334(_0x453197._0x1c3054)]()); const _0x1c1c4c = _0x244f64['trim']()['toLowerCas' + 'e'](); return commonEventNameCache[_0x1c1c4c] || -0xbf * 0x4 + -0x6c9 + 0x9c5; }; const _Game_Event_setupPage = Game_Event[_0xbb3cb9(0xfe)]['setupPage']; Game_Event['prototype']['setupPage'] = function () { const _0x27af63 = { _0x2de648: 0x117, _0x3464b8: 0x110, _0x162074: 0x111, _0x2f94d2: 0x126, _0x53aabd: 0x112, _0x3cec35: 0x131 }, _0x497971 = _0xbb3cb9, _0xd75ed8 = this['_pageIndex'] >= -0x1a52 + -0x985 + 0x23d7 && $gameMap['_passEvent' + 's'] && $gameMap['_passEvent' + 's']['has'](this['_eventId']); this['_cachedNoS' + _0x497971(_0x27af63._0x2de648) + 'ent'] = undefined, _Game_Event_setupPage[_0x497971(_0x27af63._0x3464b8)](this), this['_independe' + _0x497971(_0x27af63._0x162074) + 'entInterpr' + _0x497971(0xfb)] = [], this['_wasNearSc' + 'reen'] = ![], this['_commonEve' + _0x497971(_0x27af63._0x2f94d2)] = [], this['_passiveBl' + 'ocked'] = ![], this[_0x497971(0x100) + 'nEventsFro' + _0x497971(0x130)](), this['setupFrame' + 'Speed'](), this['setupPlaye' + 'rChild'](), this['setupClick' + _0x497971(_0x27af63._0x53aabd)](), this['setupLockR' + 'otation'](); if ($gameMap['_passEvent' + 's']) { const _0x2f2eb0 = this['_pageIndex'] >= 0xbe7 + 0x1700 + 0x5 * -0x6fb && this['event']()['note']['includes'](_0x497971(_0x27af63._0x3cec35)); if (_0x2f2eb0 && !_0xd75ed8) $gameMap['_passEvent' + 's']['add'](this['_eventId']); else !_0x2f2eb0 && _0xd75ed8 && $gameMap['_passEvent' + 's'][_0x497971(0x108)](this[_0x497971(0x11f)]); } }, Game_Event['prototype']['applyCommo' + 'nEventsFro' + 'mNotetag'] = function () { const _0x150bfe = { _0x409933: 0x101, _0x26f405: 0x127, _0x441df1: 0x126, _0x595dae: 0x10f, _0xd73196: 0x11f, _0x45b3d3: 0x11b, _0x27b28c: 0xfc }, _0x285947 = { _0x3163e6: 0x134 }, _0x1daf74 = _0xbb3cb9; if (!this['event']()) return; const _0x503452 = this[_0x1daf74(0x103)]()['note'], _0x3dbcb2 = this[_0x1daf74(_0x150bfe._0x409933) + 'monEventId' + _0x1daf74(_0x150bfe._0x26f405) + _0x1daf74(0x135)](_0x503452), _0x4a6cb4 = this['extractCom' + 'monEventId' + 'sFromPage'](); this['_commonEve' + _0x1daf74(_0x150bfe._0x441df1)] = [...new Set([..._0x3dbcb2, ..._0x4a6cb4])], this[_0x1daf74(0x11b) + 'ocked'] = this['currentPag' + _0x1daf74(0x125)]('<no\x20passiv' + 'e>'); if (this['currentPag' + 'eHasPassiv' + _0x1daf74(0x133)]() && $gameSystem['passiveCom' + _0x1daf74(_0x150bfe._0x595dae)] && $gameSystem['passiveCom' + 'monEvents'][$gameMap['mapId']()] && $gameSystem['passiveCom' + 'monEvents'][$gameMap['mapId']()][this['_eventId']]) { const _0x4cd806 = $gameSystem['passiveCom' + 'monEvents'][$gameMap['mapId']()][this[_0x1daf74(_0x150bfe._0xd73196)]]; Array['isArray'](_0x4cd806) && _0x4cd806['forEach'](_0x2df808 => { const _0x5d4ec5 = _0x1daf74; !this['_commonEve' + _0x5d4ec5(0x126)]['includes'](_0x2df808) && this[_0x5d4ec5(0x10c) + 'ntIds']['push'](_0x2df808); }); } if (this['_commonEve' + 'ntIds']['length'] > 0xbf1 * -0x1 + -0x1a17 + 0x2608 && !this[_0x1daf74(_0x150bfe._0x45b3d3) + 'ocked']) { if (_0x1daf74(0x109) === 'CZDQB') (!limitAreaOfCalling || this['isNearScre' + 'en']()) && this[_0x1daf74(_0x150bfe._0x27b28c) + 'nEventInte' + 'rpreters'](); else { if (!this['page']()) return []; const _0x561c38 = []; return this['page']()['list']['forEach'](_0x230d7c => { const _0x58b3da = _0x1daf74; if (_0x230d7c['code'] !== -0x898 + 0x1975 + -0x17 * 0xb7 && _0x230d7c[_0x58b3da(0x116)] !== 0x210b + -0x18f1 * 0x1 + 0x682 * -0x1) return; const _0x37b871 = /<passive:\s*(.+?)\s*>/i['exec'](_0x230d7c['parameters'][-0x53b * -0x4 + 0x37 * 0x4b + -0x2509]); if (_0x37b871) { const _0x2ead53 = _0x37b871[0x7f5 + 0x15a7 + -0x1d9b][_0x58b3da(_0x285947._0x3163e6)](','), _0x2e438d = _0x2ead53['map'](_0x242ba4 => this[_0x58b3da(0x123) + 'monEventId'](_0x242ba4))[_0x58b3da(0x132)](_0x3f2005 => _0x3f2005 > 0x7d * -0x4e + -0x1c2d + 0x1 * 0x4243); _0x561c38['push'](..._0x2e438d); } }), _0x561c38; } } }, Game_Character['prototype'][_0xbb3cb9(0x118) + 'en'] = function () { const _0x14909a = { _0x59599d: 0xfa }, _0x40e697 = _0xbb3cb9, _0x5946cc = 0x9e * -0x26 + 0x2417 * 0x1 + 0xc9d * -0x1, _0x245b80 = $gameMap[_0x40e697(0x105)](this['_realX']), _0x7f0f10 = $gameMap['adjustY'](this['_realY']), _0xc3eee5 = Graphics['width'] / $gameMap[_0x40e697(0x121)](), _0x162b22 = Graphics[_0x40e697(_0x14909a._0x59599d)] / $gameMap[_0x40e697(0xff)](); return _0x245b80 >= -_0x5946cc && _0x245b80 <= _0xc3eee5 + _0x5946cc && _0x7f0f10 >= -_0x5946cc && _0x7f0f10 <= _0x162b22 + _0x5946cc; }, Game_Event['prototype'][_0xbb3cb9(0x101) + 'monEventId' + 'sFromCusto' + 'mTags'] = function (_0x2e3266) { const _0x5e68fe = { _0x51c2de: 0x12a, _0x25cfd9: 0x128, _0x42e42e: 0x122 }; return npcTags['reduce']((_0x27237f, _0x5d7e0e) => { const _0x431e54 = _0x568e; if (_0x431e54(_0x5e68fe._0x51c2de) === 'gzStc') return _0x2e3266['includes'](_0x5d7e0e[_0x431e54(_0x5e68fe._0x25cfd9)]) && (_0x431e54(_0x5e68fe._0x42e42e) === 'jRfBG' ? _0x27237f['push'](..._0x5d7e0e['CommonEven' + _0x431e54(0x11e)]) : (!_0x506959 || this['isNearScre' + 'en']()) && this[_0x431e54(0xfc) + 'nEventInte' + _0x431e54(0x10a)]()), _0x27237f; else { const _0x38c33d = new _0x4083ea(); return _0x38c33d[_0x431e54(0x114)](_0x58292a[_0xb9417d]['list'], this['_eventId']), _0x38c33d; } }, []); }, Game_Event[_0xbb3cb9(0xfe)]['extractCom' + 'monEventId' + _0xbb3cb9(0x107)] = function () { const _0xb028e1 = { _0x17005a: 0x12c }, _0x31f1a2 = _0xbb3cb9; if (!this['page']()) return []; const _0x1807e0 = []; return this['page']()['list'][_0x31f1a2(_0xb028e1._0x17005a)](_0xaedbf3 => { const _0x51fcee = _0x31f1a2; if (_0xaedbf3[_0x51fcee(0x116)] !== 0x1c46 + 0x19a8 * -0x1 + -0x232 && _0xaedbf3['code'] !== -0x786 + 0x1c12 + -0x1 * 0x12f4) return; const _0x3c20b5 = /<passive:\s*(.+?)\s*>/i['exec'](_0xaedbf3['parameters'][-0x59 * -0x2b + 0x74f * -0x1 + -0x7a4]); if (_0x3c20b5) { const _0x28f879 = _0x3c20b5[-0xc07 * -0x1 + 0x869 + -0x1 * 0x146f]['split'](','), _0x37d720 = _0x28f879['map'](_0x196709 => this['resolveCom' + _0x51fcee(0x113)](_0x196709))[_0x51fcee(0x132)](_0x307d4d => _0x307d4d > -0x19b2 + 0x1a7 + -0x4cf * -0x5); _0x1807e0['push'](..._0x37d720); } }), _0x1807e0; }, Game_Event['prototype'][_0xbb3cb9(0xf8) + 'eHasTag'] = function (_0x4f3d55) { const _0x25a737 = _0xbb3cb9; if (!this[_0x25a737(0x12e)]()) return ![]; return this['page']()['list']['some'](_0x2f21c1 => (_0x2f21c1['code'] === 0x1868 + -0x25d3 * -0x1 + 0x3dcf * -0x1 || _0x2f21c1['code'] === -0x1 * 0x18e9 + 0x117c + 0x905 * 0x1) && _0x2f21c1['parameters'][0x1 * -0xa76 + 0x37 * -0x11 + -0x1 * -0xe1d][_0x25a737(0x10e)](_0x4f3d55)); }, Game_Event[_0xbb3cb9(0xfe)]['setupCommo' + 'nEventInte' + 'rpreters'] = function () { const _0x473c5d = _0xbb3cb9; this['_independe' + 'ntCommonEv' + 'entInterpr' + _0x473c5d(0xfb)] = this['_commonEve' + 'ntIds']['filter'](_0x47b2d8 => $dataCommonEvents && $dataCommonEvents[_0x47b2d8])['map'](_0x3bb75e => { const _0x437950 = new Game_Interpreter(); return _0x437950['setup']($dataCommonEvents[_0x3bb75e]['list'], this['_eventId']), _0x437950; }); }, Game_System[_0xbb3cb9(0xfe)]['cleanupPas' + _0xbb3cb9(0x120) + 'Events'] = function () { const _0xf317fb = { _0x1d5195: 0x10f }, _0x44bf06 = _0xbb3cb9; if (!this[_0x44bf06(0x11d) + 'monEvents']) return; for (const _0x18d03a in this[_0x44bf06(0x11d) + _0x44bf06(_0xf317fb._0x1d5195)]) { const _0x31e8dc = this['passiveCom' + 'monEvents'][_0x18d03a]; for (const _0x12df99 in _0x31e8dc) { (!_0x31e8dc[_0x12df99] || _0x31e8dc[_0x12df99]['length'] === 0x7c * 0x35 + -0x1 * -0xd7a + -0x2726) && delete _0x31e8dc[_0x12df99]; } Object['keys'](_0x31e8dc)[_0x44bf06(0xfd)] === 0x14c8 + -0x50 * 0x4a + 0x258 && delete this['passiveCom' + _0x44bf06(_0xf317fb._0x1d5195)][_0x18d03a]; } };

const H_Game_Event_update = Game_Event.prototype.update;
Game_Event.prototype.update = function () {
	if (!$gameMap._events[this._eventId]) return; // Stop update null events, a fix (kind of) for Destroy Event parallel name and notetag
	const shouldUpdate = !$gameMap.eventsPaused || ($gameMap.pausingEvent && this._eventId === $gameMap.pausingEvent);
	if (shouldUpdate) {
		H_Game_Event_update.call(this);
		const mapId = $gameMap.mapId();
		const _passiveMap = $gameSystem.passiveCommonEvents?.[mapId];
		if (_passiveMap?.[this._eventId]) {
			const storedStates = _passiveMap[this._eventId];

			if (!this.stateInterpreters) {
				this.stateInterpreters = {};
			}

			for (const stateId in storedStates) {
				const commonEventId = storedStates[stateId];

				if (!this.stateInterpreters[stateId]) {
					const interpreter = new Game_Interpreter();
					interpreter.setup($dataCommonEvents[commonEventId].list, this._eventId);
					this.stateInterpreters[stateId] = interpreter;
				}
			}
		}

		if (this.stateInterpreters) {
			for (const stateId in this.stateInterpreters) {
				const interpreter = this.stateInterpreters[stateId];
				if (!interpreter.isRunning()) {
					const commonEventId = _passiveMap?.[this._eventId]?.[stateId];
					if (commonEventId && $dataCommonEvents[commonEventId]) {
						interpreter.setup($dataCommonEvents[commonEventId].list, this._eventId);
					}
				}
				interpreter.update();
			}
		}
	}
	if (this.isPlayerChild && $gamePlayer) {
		const deltaX = $gamePlayer._realX - this.lastPlayerX;
		const deltaY = $gamePlayer._realY - this.lastPlayerY;

		if (deltaX !== 0 || deltaY !== 0) {
			const baseX = $gamePlayer._realX + this.childOffsetX;
			const baseY = $gamePlayer._realY + this.childOffsetY;
			const autoX = this._realX - (this.lastPlayerX + this.childOffsetX);
			const autoY = this._realY - (this.lastPlayerY + this.childOffsetY);
			this._realX = baseX + autoX;
			this._realY = baseY + autoY;
		}

		this.lastPlayerX = $gamePlayer._realX;
		this.lastPlayerY = $gamePlayer._realY;

		if (this.isMount) {
			this.setDirection($gamePlayer.direction());
		}
	} else if (this.theParent) {
		if (!this.theParent || this.theParent._erased || !$gameMap._events[this.theParent._eventId]) {
			this.theParent = null;
			this.childOffsetX = 0;
			this.childOffsetY = 0;
			this.wasAttached = false;
			return;
		}
		const deltaX = this.theParent._realX - this.lastParentX;
		const deltaY = this.theParent._realY - this.lastParentY;

		if (deltaX !== 0 || deltaY !== 0) {
			const baseX = this.theParent._realX + this.childOffsetX;
			const baseY = this.theParent._realY + this.childOffsetY;
			const autoX = this._realX - (this.lastParentX + this.childOffsetX);
			const autoY = this._realY - (this.lastParentY + this.childOffsetY);
			this._realX = baseX + autoX;
			this._realY = baseY + autoY;
		}

		this.lastParentX = this.theParent._realX;
		this.lastParentY = this.theParent._realY;
	}
	if (shouldUpdate) {
		if (this._commonEventIds.length === 0 || this._passiveBlocked) return;

		const isNearScreen = (!limitAreaOfCalling || this.isNearScreen());
		if (!this._wasNearScreen && isNearScreen) {
			if (!this._independentCommonEventInterpreters.length) {
				this.setupCommonEventInterpreters();
			}
		}
		this._wasNearScreen = isNearScreen;
		if (isNearScreen) {
			this.updateIndependentCommonEventInterpreters();
		}
	}
};

function _0x3af9(_0x4fe744, _0x8bf408) { _0x4fe744 = _0x4fe744 - (0x2 * 0xe9f + 0x540 + -0x210b); const _0x2089e3 = _0x5355(); let _0x2c6ba6 = _0x2089e3[_0x4fe744]; return _0x2c6ba6; } const _0x286f9c = _0x3af9; (function (_0x37d028, _0x36fa07) { const _0xbf8fdd = { _0x4d2392: 0x199, _0x45576a: 0x187, _0x75edf5: 0x182, _0x3e2bb6: 0x197, _0x5f3cb7: 0x18c }, _0x376dbc = _0x3af9, _0x589950 = _0x37d028(); while (!![]) { try { const _0x2300ab = -parseInt(_0x376dbc(0x194)) / (0x1f54 + -0x1b2b + 0x1c * -0x26) * (parseInt(_0x376dbc(_0xbf8fdd._0x4d2392)) / (0x4c9 + -0x2598 + 0x1f * 0x10f)) + parseInt(_0x376dbc(_0xbf8fdd._0x45576a)) / (-0x2 * 0x12a0 + 0x2e0 * -0x5 + 0x33a3) + parseInt(_0x376dbc(_0xbf8fdd._0x75edf5)) / (-0x190d + -0x3 * -0x84c + 0x2d) * (parseInt(_0x376dbc(0x196)) / (0x733 + -0x1c * -0x159 + 0x1675 * -0x2)) + -parseInt(_0x376dbc(0x19d)) / (0x8c4 + 0x2683 * -0x1 + -0x1 * -0x1dc5) * (-parseInt(_0x376dbc(_0xbf8fdd._0x3e2bb6)) / (-0x3df * 0x7 + -0x1531 + 0x3 * 0x101b)) + parseInt(_0x376dbc(_0xbf8fdd._0x5f3cb7)) / (0x4e * -0x31 + -0x1f3c + 0xf66 * 0x3) * (parseInt(_0x376dbc(0x173)) / (0x423 * 0x3 + 0x2578 + -0x31d8)) + parseInt(_0x376dbc(0x19f)) / (0xd38 + 0x1585 + 0x9 * -0x3db) * (-parseInt(_0x376dbc(0x186)) / (-0x21b3 + 0x9b1 + -0x2f * -0x83)) + parseInt(_0x376dbc(0x17b)) / (0x1 * -0x10dd + -0x22db + 0x33c4); if (_0x2300ab === _0x36fa07) break; else _0x589950['push'](_0x589950['shift']()); } catch (_0x416290) { _0x589950['push'](_0x589950['shift']()); } } }(_0x5355, 0x1 * -0x83fab + -0x42a03 + 0x229e9 * 0xb), Game_Event['prototype']['updateInde' + 'pendentCom' + _0x286f9c(0x175) + 'terpreters'] = function () { const _0x25feda = { _0x575d6d: 0x189, _0x4c365a: 0x181 }, _0x569f6d = _0x286f9c; this['_independe' + _0x569f6d(_0x25feda._0x575d6d) + 'entInterpr' + _0x569f6d(0x180)][_0x569f6d(_0x25feda._0x4c365a)]((_0x5bd159, _0x5e0162) => { const _0x3e3fe7 = _0x569f6d; if (!_0x5bd159['isRunning']()) { const _0x1198b6 = this['_commonEve' + 'ntIds'][_0x5e0162]; _0x1198b6 && $dataCommonEvents[_0x1198b6] && _0x5bd159['setup']($dataCommonEvents[_0x1198b6]['list'], this[_0x3e3fe7(0x17f)]); } _0x5bd159['update'](); }); }, Game_Event['prototype']['currentPag' + 'eHasPassiv' + _0x286f9c(0x18e)] = function () { const _0x2dcdf5 = _0x286f9c, _0x55c16b = this['page'](); if (!_0x55c16b) return ![]; const _0x3213e1 = _0x55c16b['list']['some'](_0x499e97 => (_0x499e97['code'] === 0x133a * -0x1 + -0x1433 + -0x65 * -0x65 || _0x499e97['code'] === -0x38 * 0x63 + 0x46f * -0x4 + -0x147e * -0x2) && _0x499e97[_0x2dcdf5(0x192)][0x57 * -0x3f + -0xc5d + -0x10e3 * -0x2]['match'](/<passive:/i)); if (_0x3213e1) return !![]; const _0x388f6a = this['event']()['note']; return npcTags['some'](_0x4dbf24 => _0x388f6a['includes'](_0x4dbf24[_0x2dcdf5(0x185)])); }); const _Game_Event_setupCommonEventInterpreters = Game_Event['prototype']['setupCommo' + _0x286f9c(0x195) + _0x286f9c(0x177)]; Game_Event[_0x286f9c(0x193)]['setupCommo' + _0x286f9c(0x195) + 'rpreters'] = function () { const _0x464a59 = { _0x34281d: 0x191 }, _0x440e61 = _0x286f9c; !this['_originalC' + _0x440e61(0x198) + 'Ids'] && (this['_originalC' + _0x440e61(0x198) + 'Ids'] = [...this['_commonEve' + 'ntIds']]), _Game_Event_setupCommonEventInterpreters[_0x440e61(_0x464a59._0x34281d)](this); }, PluginManager['registerCo' + _0x286f9c(0x188)](HpluginName, 'AssignNewP' + 'assive', function (_0x43bc1f) { const _0x412ed0 = { _0x592c71: 0x17d, _0x9c1d0f: 0x19e, _0x33211f: 0x19a, _0x4876b5: 0x19b, _0x574427: 0x18a, _0x49edec: 0x184, _0xc913d2: 0x18d, _0x522de8: 0x189, _0x53d3ed: 0x174, _0x3a14ee: 0x176, _0xa0d7e8: 0x17e, _0x58238b: 0x19a, _0x13e374: 0x18d, _0x5b05d2: 0x18b, _0x29ac8c: 0x176, _0x50d782: 0x179, _0x2486ee: 0x17a, _0x4b6b87: 0x18a, _0x4afc49: 0x180, _0xa15d7b: 0x17a, _0x5d3707: 0x18d, _0x161db6: 0x190 }, _0x38b53a = _0x286f9c, _0x12094b = _0x43bc1f['Status'], _0x5ee4f1 = _0x43bc1f['CommonEven' + _0x38b53a(0x17c)]['split'](',')['map'](_0xecb02b => _0xecb02b['trim']()), _0x3f64fe = this['_eventId'], _0x3d3621 = $gameMap[_0x38b53a(0x18f)](_0x3f64fe); if (!_0x3d3621) return; const _0x33ac2c = _0x3d3621[_0x38b53a(_0x412ed0._0x592c71) + _0x38b53a(_0x412ed0._0x9c1d0f) + 'eComment'](); if (!_0x33ac2c) return; if (!_0x3d3621[_0x38b53a(_0x412ed0._0x33211f) + 'ntIds']) { if ('ZvACG' === 'Mlqlz') { if (!_0x9a960f['isRunning']()) { const _0x175a78 = this['_commonEve' + 'ntIds'][_0x2b3849]; _0x175a78 && _0x1bc8fc[_0x175a78] && _0x286109['setup'](_0x2c09ec[_0x175a78]['list'], this['_eventId']); } _0x14cbcf[_0x38b53a(_0x412ed0._0x4876b5)](); } else _0x3d3621[_0x38b53a(_0x412ed0._0x33211f) + 'ntIds'] = []; } !$gameSystem['passiveCom' + 'monEvents'] && ($gameSystem['passiveCom' + 'monEvents'] = {}); !$gameSystem['passiveCom' + 'monEvents'][$gameMap['mapId']()] && ('XOxrB' === 'XOxrB' ? $gameSystem['passiveCom' + 'monEvents'][$gameMap['mapId']()] = {} : (_0x510b18[_0x38b53a(_0x412ed0._0x33211f) + 'ntIds']['splice'](_0x517c84, -0x43a + 0x3e7 + 0x54), _0x572ec7[_0x38b53a(0x18a) + 'ntCommonEv' + 'entInterpr' + 'eters'] && _0x27cb90[_0x38b53a(_0x412ed0._0x574427) + 'ntCommonEv' + _0x38b53a(_0x412ed0._0x49edec) + 'eters'][_0x6faba0] && _0x420d3e['_independe' + 'ntCommonEv' + 'entInterpr' + 'eters']['splice'](_0xae2c1a, 0xbf2 + 0x179f * -0x1 + 0xbae))); !$gameSystem['passiveCom' + _0x38b53a(_0x412ed0._0xc913d2)][$gameMap['mapId']()][_0x3f64fe] && ($gameSystem['passiveCom' + _0x38b53a(0x18d)][$gameMap['mapId']()][_0x3f64fe] = []); for (const _0x26995d of _0x5ee4f1) { let _0x25a8a3; if (!isNaN(_0x26995d)) { if ('uUmsk' !== _0x38b53a(0x178)) _0x25a8a3 = parseInt(_0x26995d); else { _0x4999a9['_commonEve' + 'ntIds']['push'](_0x421f3a); !_0x4c13b4['_independe' + _0x38b53a(_0x412ed0._0x522de8) + 'entInterpr' + _0x38b53a(0x180)] && (_0x15ad61['_independe' + _0x38b53a(_0x412ed0._0x522de8) + 'entInterpr' + 'eters'] = []); const _0x42c12a = new _0x156b42(); _0x42c12a[_0x38b53a(_0x412ed0._0x53d3ed)](_0x110714[_0x373ea6]['list'], _0x2b3b16), _0xa16430['_independe' + 'ntCommonEv' + _0x38b53a(0x184) + 'eters']['push'](_0x42c12a), !_0xf92048[_0x38b53a(_0x412ed0._0x3a14ee) + 'monEvents'][_0x5f4206['mapId']()][_0x58e7a5]['includes'](_0x2cef61) && _0x53fe5b['passiveCom' + 'monEvents'][_0x13204d['mapId']()][_0x55fac6][_0x38b53a(_0x412ed0._0xa0d7e8)](_0x25d713); } } else _0x25a8a3 = commonEventNameCache[_0x26995d['toLowerCas' + 'e']()]; if (!_0x25a8a3 || !$dataCommonEvents[_0x25a8a3]) continue; if (_0x12094b === _0x38b53a(0x19c)) { if (!_0x3d3621[_0x38b53a(_0x412ed0._0x58238b) + 'ntIds']['includes'](_0x25a8a3)) { _0x3d3621['_commonEve' + _0x38b53a(0x179)][_0x38b53a(0x17e)](_0x25a8a3); !_0x3d3621[_0x38b53a(_0x412ed0._0x574427) + 'ntCommonEv' + 'entInterpr' + 'eters'] && (_0x3d3621['_independe' + 'ntCommonEv' + 'entInterpr' + _0x38b53a(0x180)] = []); const _0x5256a9 = new Game_Interpreter(); _0x5256a9[_0x38b53a(0x174)]($dataCommonEvents[_0x25a8a3]['list'], _0x3f64fe), _0x3d3621['_independe' + 'ntCommonEv' + 'entInterpr' + 'eters']['push'](_0x5256a9), !$gameSystem['passiveCom' + _0x38b53a(_0x412ed0._0x13e374)][$gameMap['mapId']()][_0x3f64fe]['includes'](_0x25a8a3) && ('hgiQT' === _0x38b53a(_0x412ed0._0x5b05d2) ? _0x267762['passiveCom' + 'monEvents'][_0x5f5bf7['mapId']()][_0x1dbe1d] = [] : $gameSystem[_0x38b53a(_0x412ed0._0x29ac8c) + 'monEvents'][$gameMap[_0x38b53a(0x190)]()][_0x3f64fe]['push'](_0x25a8a3)); } } else { if (_0x12094b === 'delete') { const _0x1d1040 = _0x3d3621['_commonEve' + 'ntIds'][_0x38b53a(0x183)](_0x25a8a3); if (_0x1d1040 !== -(0x246f + -0x49 * -0x79 + -0x46ef)) { _0x3d3621['_commonEve' + _0x38b53a(_0x412ed0._0x50d782)][_0x38b53a(_0x412ed0._0x2486ee)](_0x1d1040, -0xb7f + 0x24bd + -0x193d); if (_0x3d3621[_0x38b53a(_0x412ed0._0x4b6b87) + _0x38b53a(_0x412ed0._0x522de8) + 'entInterpr' + 'eters'] && _0x3d3621['_independe' + _0x38b53a(0x189) + _0x38b53a(0x184) + _0x38b53a(_0x412ed0._0x4afc49)][_0x1d1040]) { if ('ZoDHp' !== 'ZoDHp') { const _0x22d8ab = this[_0x38b53a(_0x412ed0._0x58238b) + 'ntIds'][_0x47ffab]; _0x22d8ab && _0x420f93[_0x22d8ab] && _0x1c2a59[_0x38b53a(0x174)](_0x4dd244[_0x22d8ab]['list'], this[_0x38b53a(0x17f)]); } else _0x3d3621['_independe' + 'ntCommonEv' + 'entInterpr' + 'eters'][_0x38b53a(_0x412ed0._0xa15d7b)](_0x1d1040, 0x137 * 0x2 + -0x1 * 0x1e2 + -0x1 * 0x8b); } } if ($gameSystem[_0x38b53a(_0x412ed0._0x29ac8c) + 'monEvents'][$gameMap[_0x38b53a(0x190)]()] && $gameSystem['passiveCom' + _0x38b53a(_0x412ed0._0x5d3707)][$gameMap[_0x38b53a(_0x412ed0._0x161db6)]()][_0x3f64fe]) { const _0xa62c59 = $gameSystem['passiveCom' + 'monEvents'][$gameMap[_0x38b53a(0x190)]()][_0x3f64fe]['indexOf'](_0x25a8a3); _0xa62c59 !== -(0x15 * -0x109 + 0x1 * -0x17e5 + 0x2da3) && $gameSystem['passiveCom' + 'monEvents'][$gameMap['mapId']()][_0x3f64fe]['splice'](_0xa62c59, -0x63 * -0xf + -0x39b * -0x1 + 0x53 * -0x1d), $gameSystem['passiveCom' + 'monEvents'][$gameMap['mapId']()][_0x3f64fe]['length'] === 0x16f3 + -0xb * -0x217 + -0x14 * 0x24c && delete $gameSystem['passiveCom' + 'monEvents'][$gameMap['mapId']()][_0x3f64fe]; } } } } }); function _0x5355() { const _0x3aaf51 = ['_independe', 'kMrdn', '24koJIGu', 'monEvents', 'eComment', 'event', 'mapId', 'call', 'parameters', 'prototype', '2YltMDR', 'nEventInte', '140YlseUo', '98aOcHWA', 'ommonEvent', '905098EJHIDZ', '_commonEve', 'update', 'assign', '175716szpKcw', 'eHasPassiv', '4330eibFNS', '3227517YCJDJC', 'setup', 'monEventIn', 'passiveCom', 'rpreters', 'PryQI', 'ntIds', 'splice', '4661688pQnFwE', 'tId', 'currentPag', 'push', '_eventId', 'eters', 'forEach', '134296sYFlVs', 'indexOf', 'entInterpr', 'Notetag', '33209qHYvul', '432783YbyABy', 'mmand', 'ntCommonEv']; _0x5355 = function () { return _0x3aaf51; }; return _0x5355(); }

//==========================================================
// BREAK ANIMATION
//==========================================================

PluginManager.registerCommand(HpluginName, "BreakCharacter", function () {
	const event = $gameMap.event(this._eventId);
	if (event) {
		ScreateBreakEffectH(event);
	}
});

function SfindEventSpriteH(event) {
	const spriteset = SceneManager._scene._spriteset;
	return spriteset._characterSprites.find(
		sprite => sprite._character === event
	);
}

function ScreateBreakEffectH(event) {
	const sprite = SfindEventSpriteH(event);
	if (!sprite) return;

	const initialPos = {
		x: sprite.x,
		y: sprite.y - sprite.height,
		width: sprite.width,
		height: sprite.height
	};

	const gridSize = 5;
	const pieceWidth = initialPos.width / gridSize;
	const pieceHeight = initialPos.height / gridSize;

	const frameX = sprite._frame ? sprite._frame.x : 0;
	const frameY = sprite._frame ? sprite._frame.y : 0;

	const centerX = initialPos.x;
	const centerY = initialPos.y + initialPos.height / 2;

	const containerSprite = new Sprite();
	containerSprite.x = centerX;
	containerSprite.y = centerY;
	containerSprite.opacity = 255;

	const pieces = [];

	for (let y = 0; y < gridSize; y++) {
		for (let x = 0; x < gridSize; x++) {
			const pieceSprite = new Sprite(sprite.bitmap);
			pieceSprite.setFrame(
				frameX + x * pieceWidth,
				frameY + y * pieceHeight,
				pieceWidth,
				pieceHeight
			);
			pieceSprite.x = (x - gridSize / 2) * pieceWidth;
			pieceSprite.y = (y - gridSize / 2) * pieceHeight;

			pieces.push({
				sprite: pieceSprite,
				velocity: {
					x: (Math.random() - 0.5) * 8,
					y: (Math.random() - 0.5) * 8
				}
			});

			containerSprite.addChild(pieceSprite);
		}
	}

	brokenSprites.set(event.eventId(), {
		sprite: containerSprite,
		pieces: pieces,
		frames: 0,
		maxFrames: 50,
		initialPos: initialPos
	});

	sprite.visible = false;
	SceneManager._scene._spriteset._tilemap.addChild(containerSprite);
}

function SupdateBrokenSpritesH() {
	for (const [eventId, data] of brokenSprites.entries()) {
		data.frames++;
		data.sprite.opacity = Math.max(0, 255 * (1 - data.frames / data.maxFrames));

		data.pieces.forEach(piece => {
			piece.sprite.x += piece.velocity.x;
			piece.sprite.y += piece.velocity.y;
		});

		if (data.frames >= data.maxFrames) {
			data.pieces.forEach(p => p.sprite.destroy());
			if (data.sprite.parent) {
				data.sprite.parent.removeChild(data.sprite);
			}
			data.sprite.destroy();
			brokenSprites.delete(eventId);
		}
	}
}

const H_Scene_Map_terminate = Scene_Map.prototype.terminate;
Scene_Map.prototype.terminate = function () {
	if (this._spriteset && this._spriteset._eventHpBars) {
		const tilemap = this._spriteset._tilemap;
		if (tilemap) {
			const hpBars = this._spriteset._eventHpBars;
			for (let i = 0; i < hpBars.length; i++) {
				tilemap.removeChild(hpBars[i]);
			}
		}
		this._spriteset._eventHpBars = [];
	}
	if (ShxWeaponSpriteH && ShxWeaponSpriteH.parent) {
		ShxWeaponSpriteH.parent.removeChild(ShxWeaponSpriteH);
		ShxWeaponSpriteH.destroy();
		ShxWeaponSpriteH = null;
	}
	H_Scene_Map_terminate.call(this);
	brokenSprites.clear();
	activeEffects.clear();
};

//============================================================
// AUTO-GENERATE DROP ITEM ICON
//============================================================

Game_Map.prototype.spawnIconItemEvent = function (droppedItem, itemKind, x, y) {
	const eventId = this.getNextEventId();
	const event = new Game_SIconDropEventH(this._mapId, eventId, x, y, droppedItem, itemKind);
	this._events[eventId] = event;
	this.addEventToTagIndex(event);
	if (SceneManager._scene instanceof Scene_Map && SceneManager._scene._spriteset) {
		const sprite = new Sprite_SIconDropH(event);
		SceneManager._scene._spriteset._characterSprites.push(sprite);
		SceneManager._scene._spriteset._tilemap.addChild(sprite);
	}
	event.jumpToNearby(2, false);
	return eventId;
};

function Sprite_SIconDropH() {
	this.initialize(...arguments);
}

Sprite_SIconDropH.prototype = Object.create(Sprite_Character.prototype);
Sprite_SIconDropH.prototype.constructor = Sprite_SIconDropH;

Sprite_SIconDropH.prototype.initialize = function (character) {
	this._iconBitmapReady = false;
	Sprite_Character.prototype.initialize.call(this, character);
};

Sprite_SIconDropH.prototype.setCharacter = function (character) {
	this._character = character;
	if (character && character.isIconDropEvent) {
		this.createIconBitmap();
	}
};

Sprite_SIconDropH.prototype.createIconBitmap = function () {
	const iconIndex = this._character._droppedItem.iconIndex;
	const iconBitmap = ImageManager.loadSystem('IconSet');
	const pw = 32;
	const ph = 32;
	if (iconBitmap.isReady()) {
		this.drawIcon(iconBitmap, iconIndex, pw, ph);
	} else {
		iconBitmap.addLoadListener(() => {
			this.drawIcon(iconBitmap, iconIndex, pw, ph);
		});
	}
};

Sprite_SIconDropH.prototype.drawIcon = function (iconBitmap, iconIndex, pw, ph) {
	const sx = (iconIndex % 16) * pw;
	const sy = Math.floor(iconIndex / 16) * ph;

	this.bitmap = new Bitmap(pw, ph);
	this.bitmap.blt(iconBitmap, sx, sy, pw, ph, 0, 0);
	this.anchor.x = 0.5;
	this.anchor.y = 1;
	this._iconBitmapReady = true;
	this._frame.width = pw;
	this._frame.height = ph;
	this._frame.x = 0;
	this._frame.y = 0;
	this._refresh();
};

Sprite_SIconDropH.prototype.update = function () {
	Sprite.prototype.update.call(this);
	if (this._character && this._iconBitmapReady) {
		this.updatePosition();
		this.updateVisibility();
		this.updateOther();
	} else if (this._character && !this._iconBitmapReady) {
		Sprite_Character.prototype.update.call(this);
	}
};

Sprite_SIconDropH.prototype.updateFrame = function () {
	if (!this._iconBitmapReady) {
		Sprite_Character.prototype.updateFrame.call(this);
	}
};

Sprite_SIconDropH.prototype.characterPatternY = function () {
	return 0;
};

Sprite_SIconDropH.prototype.characterPatternX = function () {
	return 0;
};

const _Spriteset_Map_createCharacters_IconDrop = Spriteset_Map.prototype.createCharacters;
Spriteset_Map.prototype.createCharacters = function () {
	_Spriteset_Map_createCharacters_IconDrop.call(this);
	this._characterSprites.forEach((sprite, index) => {
		if (sprite._character && sprite._character.isIconDropEvent) {
			const character = sprite._character;
			this._tilemap.removeChild(sprite);
			const newSprite = new Sprite_SIconDropH(character);
			this._characterSprites[index] = newSprite;
			this._tilemap.addChild(newSprite);
		}
	});
};

function Game_SIconDropEventH() {
	this.initialize.apply(this, arguments);
}

Game_SIconDropEventH.prototype = Object.create(Game_Event.prototype);
Game_SIconDropEventH.prototype.constructor = Game_SIconDropEventH;

Game_SIconDropEventH.prototype.initialize = function (mapId, eventId, x, y, item, itemKind) {
	this._spawnX = x;
	this._spawnY = y;
	this._droppedItem = item;
	this._itemKind = itemKind;
	this.isIconDropEvent = true;
	Game_Event.prototype.initialize.call(this, mapId, eventId);
};

Game_SIconDropEventH.prototype.event = function () {
	return {
		id: this._eventId,
		name: `Item Template`,
		note: `<item drop>`,
		meta: {},
		x: this._spawnX,
		y: this._spawnY,
		pages: [{
			conditions: {
				actorId: 1, actorValid: false,
				itemId: 1, itemValid: false,
				selfSwitchCh: "A", selfSwitchValid: false,
				switch1Id: 1, switch1Valid: false,
				switch2Id: 1, switch2Valid: false,
				variableId: 1, variableValid: false,
				variableValue: 0
			},
			image: {
				tileId: 0,
				characterName: "",
				direction: 2,
				pattern: 0,
				characterIndex: 0
			},
			list: [
				{
					code: 355, indent: 0, parameters: [
						`const eventId = ${this._eventId};
                    const event = $gameMap._events[eventId];
                    if (event && event.isIconDropEvent) {
                        const item = event._droppedItem;
                        const kind = event._itemKind;
                        
                        if (kind === 1) {
                            $gameParty.gainItem(item, 1);
                        } else if (kind === 2) {
                            $gameParty.gainItem(item, 1, false);
                        } else if (kind === 3) {
                            $gameParty.gainItem(item, 1, false);
                        }

						AudioManager.playSe({
							name: pickupSFX.sfxFile || 'Item1',
							volume: Number(pickupSFX.volume || 90),
							pitch: Number(pickupSFX.pitch || 100),
							pan: 0
						});
                        
                        if (SceneManager._scene._spriteset) {
                            const spriteIndex = SceneManager._scene._spriteset._characterSprites.findIndex(s => s._character && s._character._eventId === eventId);
                            if (spriteIndex >= 0) {
                                const sprite = SceneManager._scene._spriteset._characterSprites[spriteIndex];
                                SceneManager._scene._spriteset._tilemap.removeChild(sprite);
                                SceneManager._scene._spriteset._characterSprites.splice(spriteIndex, 1);
                            }
                        }
                        
                        $gameMap.removeEventFromTagIndex(event);
                        $gameMap._events[eventId] = null;
                    }`
					]
				},
				{ code: 0, indent: 0, parameters: [] }
			],
			moveFrequency: 3,
			moveRoute: { list: [{ code: 0, parameters: [] }], repeat: true, skippable: false, wait: false },
			moveSpeed: 3,
			moveType: 0,
			priorityType: 0,
			stepAnime: false,
			through: true,
			trigger: 2,
			walkAnime: false,
			directionFix: false
		}]
	};
};

Game_SIconDropEventH.prototype.locate = function () {
	Game_Event.prototype.locate.call(this, this._spawnX, this._spawnY);
};

function Game_SBothDropEventH() {
	this.initialize.apply(this, arguments);
}
Game_SBothDropEventH.prototype = Object.create(Game_SIconDropEventH.prototype);
Game_SBothDropEventH.prototype.constructor = Game_SBothDropEventH;

Game_SBothDropEventH.prototype.initialize = function (mapId, eventId, x, y, item, itemKind) {
	this._collected = false;
	Game_SIconDropEventH.prototype.initialize.call(this, mapId, eventId, x, y, item, itemKind);
};

Game_SBothDropEventH.prototype.event = function () {
	let pages = [{
		conditions: {
			actorId: 1, actorValid: false,
			itemId: 1, itemValid: false,
			selfSwitchCh: "A", selfSwitchValid: false,
			switch1Id: 1, switch1Valid: false,
			switch2Id: 1, switch2Valid: false,
			variableId: 1, variableValid: false,
			variableValue: 0
		},
		image: { tileId: 0, characterName: "", direction: 2, pattern: 0, characterIndex: 0 },
		list: [{ code: 0, indent: 0, parameters: [] }],
		moveFrequency: 3,
		moveRoute: { list: [{ code: 0, parameters: [] }], repeat: true, skippable: false, wait: false },
		moveSpeed: 3,
		moveType: 0,
		priorityType: 0,
		stepAnime: false,
		through: true,
		trigger: 4,
		walkAnime: false,
		directionFix: false
	}];

	if ($dataTemplateMap) {
		const templateEv = $dataTemplateMap.events.find(e => e && e.name === 'Item Template');
		if (templateEv && templateEv.pages && templateEv.pages.length > 0) {
			pages = templateEv.pages.map(page => ({
				conditions: page.conditions,
				image: { tileId: 0, characterName: "", direction: 2, pattern: 0, characterIndex: 0 },
				list: page.list,
				moveFrequency: page.moveFrequency,
				moveRoute: page.moveRoute,
				moveSpeed: page.moveSpeed,
				moveType: page.moveType,
				priorityType: page.priorityType,
				stepAnime: page.stepAnime,
				through: true,
				trigger: page.trigger,
				walkAnime: page.walkAnime,
				directionFix: page.directionFix
			}));
		}
	}

	return {
		id: this._eventId,
		name: `Item Template`,
		note: `<item drop>`,
		meta: {},
		x: this._spawnX,
		y: this._spawnY,
		pages
	};
};

Game_SBothDropEventH.prototype.update = function () {
	Game_Event.prototype.update.call(this);
	if (this._collected) return;
	if ($gamePlayer.pos(this.x, this.y)) {
		this._collected = true;
		const eventId = this._eventId;
		const item = this._droppedItem;
		const kind = this._itemKind;
		if (kind === 1) $gameParty.gainItem(item, 1);
		else $gameParty.gainItem(item, 1, false);
		AudioManager.playSe({
			name: pickupSFX.sfxFile || 'Item1',
			volume: Number(pickupSFX.volume || 90),
			pitch: Number(pickupSFX.pitch || 100),
			pan: 0
		});
		if (SceneManager._scene._spriteset) {
			const spriteIndex = SceneManager._scene._spriteset._characterSprites.findIndex(s => s._character && s._character._eventId === eventId);
			if (spriteIndex >= 0) {
				const sprite = SceneManager._scene._spriteset._characterSprites[spriteIndex];
				SceneManager._scene._spriteset._tilemap.removeChild(sprite);
				SceneManager._scene._spriteset._characterSprites.splice(spriteIndex, 1);
			}
		}
		$gameMap.removeEventFromTagIndex(this);
		$gameMap._events[eventId] = null;
	}
};

Game_Map.prototype.spawnBothItemEvent = function (droppedItem, itemKind, x, y) {
	const eventId = this.getNextEventId();
	const event = new Game_SBothDropEventH(this._mapId, eventId, x, y, droppedItem, itemKind);
	this._events[eventId] = event;
	this.addEventToTagIndex(event);
	if (SceneManager._scene instanceof Scene_Map && SceneManager._scene._spriteset) {
		const sprite = new Sprite_SIconDropH(event);
		SceneManager._scene._spriteset._characterSprites.push(sprite);
		SceneManager._scene._spriteset._tilemap.addChild(sprite);
	}
	event.jumpToNearby(2, false);
	return eventId;
};

//============================================================
// SPAWN EVENTS
//============================================================

const matchEventIdentifier = (event, identifier) => {
	if (!event || !event.event) return false;
	if (!isNaN(identifier)) {
		return event.eventId() === Number(identifier);
	}

	const eventData = event.event();
	if (identifier.startsWith('<') && identifier.endsWith('>')) {
		return eventData?.note?.includes(identifier);
	}
	return eventData?.name === identifier;
};

const getTargetEventId = (identifier, context) => {
	if (identifier === 'this') {
		return context._eventId || null;
	}
	return Number(identifier) || null;
};

function Hendrix_TemplateEvent() {
	this.initialize.apply(this, arguments);
}

Hendrix_TemplateEvent.prototype = Object.create(Game_Event.prototype);
Hendrix_TemplateEvent.prototype.constructor = Hendrix_TemplateEvent;

Hendrix_TemplateEvent.prototype.initialize = function (mapId, eventId, templateEventId, x, y, saveEvent, startDegree) {
	this._spawnX = x;
	this._spawnY = y;
	this._templateEventId = templateEventId;
	this.isSpawnEvent = true;
	this.isSavedEvent = saveEvent;
	Game_Event.prototype.initialize.call(this, mapId, eventId);
	DataManager.extractMetadata(this.event());
	if (startDegree) {
		this.customRotationPoint = false;
		this.setRotation(Number(startDegree));
	}
};

Hendrix_TemplateEvent.prototype.event = function () {
	return $dataTemplateMap.events[this._templateEventId];
};

Hendrix_TemplateEvent.prototype.locate = function () {
	Game_Event.prototype.locate.call(this, this._spawnX, this._spawnY);
};

Game_Map.prototype.getNextEventId = function () {
	if (!this._nextEventId) {
		this.resetNextEventId();
	} while (this._events[this._nextEventId] || this.isPermanentEventId(this._nextEventId)) {
		this._nextEventId++;
	}
	return this._nextEventId++;
};

Game_Map.prototype.isPermanentEventId = function (eventId) {
	return $gameSystem._permanentEvents?.[this._mapId]?.[eventId];
};

Game_Map.prototype.resetNextEventId = function () {
	this._nextEventId = 1;

	if (this._events) {
		for (const id in this._events) {
			const numId = Number(id);
			if (!isNaN(numId) && numId >= this._nextEventId) {
				this._nextEventId = numId + 1;
			}
		}
	}

	if ($gameSystem._permanentEvents?.[this._mapId]) {
		for (const id in $gameSystem._permanentEvents[this._mapId]) {
			const numId = Number(id);
			if (!isNaN(numId) && numId >= this._nextEventId) {
				this._nextEventId = numId + 1;
			}
		}
	}
};

Game_Map.prototype.spawnEvent = function (templateEventId, x, y, isPermanent = false, startDegree = null) {
	if (!$dataTemplateMap?.events[templateEventId]) return null;

	const eventId = this.getNextEventId();
	const event = new Hendrix_TemplateEvent(this._mapId, eventId, templateEventId, x, y, isPermanent, startDegree);
	this._events[eventId] = event;

	const eventNote = event.event().note;
	if (eventNote && eventNote.includes('<pass>')) {
		if (!this._passEvents) {
			this.initializePassCache();
		}
		this._passEvents.add(eventId);
		if (this._passEventPositions) {
			this._passEventPositions.add(`${Math.round(x)},${Math.round(y)}`);
		}
		this.clearPassageCacheForPosition(Math.round(x), Math.round(y));
	}

	if (isPermanent) {
		if (!$gameSystem._permanentEvents[this._mapId]) {
			$gameSystem._permanentEvents[this._mapId] = {};
		}
		$gameSystem._permanentEvents[this._mapId][eventId] = { templateEventId, x, y, startDegree };
	}

	if (SceneManager._scene instanceof Scene_Map && SceneManager._scene._spriteset) {
		const sprite = new Sprite_Character(event);
		SceneManager._scene._spriteset._characterSprites.push(sprite);
		SceneManager._scene._spriteset._tilemap.addChild(sprite);
	}
	this.addEventToTagIndex(event);
	return eventId;
};

Game_Map.prototype.respawnPermanentEvents = function () {
	const permanentEvents = $gameSystem._permanentEvents[this._mapId];
	if (!permanentEvents) return;

	Object.entries(permanentEvents).forEach(([eventId, eventData]) => {
		const { templateEventId, x, y } = eventData;
		const event = new Hendrix_TemplateEvent(this._mapId, Number(eventId), templateEventId, x, y, true);
		this._events[Number(eventId)] = event;
		this.addEventToTagIndex(event);

		if (SceneManager._scene instanceof Scene_Map && SceneManager._scene._spriteset) {
			const sprite = new Sprite_Character(event);
			SceneManager._scene._spriteset._characterSprites.push(sprite);
			SceneManager._scene._spriteset._tilemap.addChild(sprite);
		}
	});
};

Spriteset_Map.prototype.unspawnEvent = function (eventId) {
	const spriteIndex = this._characterSprites.findIndex(sprite =>
		sprite._character instanceof Hendrix_TemplateEvent &&
		sprite._character._eventId === eventId
	);
	if (spriteIndex >= 0) {
		const sprite = this._characterSprites[spriteIndex];
		this._tilemap.removeChild(sprite);
		const currentIndex = this._characterSprites.indexOf(sprite);
		if (currentIndex >= 0) {
			this._characterSprites.splice(currentIndex, 1);
		}
	}
};

Game_Map.prototype.unspawnEvent = function (eventId) {
	const event = this._events[eventId];
	if (!(event instanceof Hendrix_TemplateEvent)) return;

	const eventNote = event.event().note;
	if (eventNote && eventNote.includes('<pass>')) {
		if (this._passEvents) {
			this._passEvents.delete(eventId);
		}
		if (this._passEventPositions) {
			this._passEventPositions.delete(`${event.x},${event.y}`);
		}
		this.clearPassageCacheForPosition(event.x, event.y);
	}

	if (event._characterName) {
		eventHeightCache.delete(event._characterName);
	}
	this.removeEventFromTagIndex(event);

	if ($gameSystem.passiveCommonEvents &&
		$gameSystem.passiveCommonEvents[this._mapId] &&
		$gameSystem.passiveCommonEvents[this._mapId][eventId]) {
		delete $gameSystem.passiveCommonEvents[this._mapId][eventId];
	}

	if (event._independentCommonEventInterpreters) {
		event._independentCommonEventInterpreters = [];
	}

	if (SceneManager._scene instanceof Scene_Map && SceneManager._scene._spriteset) {
		const spriteset = SceneManager._scene._spriteset;
		const hpBarIndex = spriteset._eventHpBars.findIndex(bar =>
			bar._event && bar._event._eventId === eventId
		);
		if (hpBarIndex > -1) {
			const hpBar = spriteset._eventHpBars[hpBarIndex];
			spriteset._tilemap.removeChild(hpBar);
			spriteset._eventHpBars.splice(hpBarIndex, 1);
		}
	}

	if (SceneManager._scene instanceof Scene_Map) {
		SceneManager._scene._spriteset.unspawnEvent(eventId);
	}

	['A', 'B', 'C', 'D'].forEach(letter => {
		$gameSelfSwitches.setValue([this._mapId, eventId, letter], false);
	});

	if ($dataSystem && $dataSystem.switches) {
		if (!window._cachedSelfSwitchIds) {
			window._cachedSelfSwitchIds = [];
			$dataSystem.switches.forEach((switchName, switchId) => {
				if (switchName && switchName.toLowerCase().startsWith('self switch')) {
					window._cachedSelfSwitchIds.push(switchId);
				}
			});
		}
		window._cachedSelfSwitchIds.forEach(switchId => {
			$gameSelfSwitches.setValue([this._mapId, eventId, `SW_${switchId}`], false);
		});
	}

	if ($gameSystem._permanentEvents && $gameSystem._permanentEvents[this._mapId]) {
		delete $gameSystem._permanentEvents[this._mapId][eventId];
	}

	const hpStorageKey = `Map${this._mapId}_Event${eventId}_HP`;
	if ($gameVariables._data[hpStorageKey]) {
		delete $gameVariables._data[hpStorageKey];
	}

	// === DOT MOVE SYSTEM CLEANUP ===
	if (H_DotMoveSystem) {
		if ($gameTemp && $gameTemp.mapCharactersCache && $gameTemp.mapCharactersCache()) {
			const mapCache = $gameTemp.mapCharactersCache();

			if (event && event.collisionRect) {
				const rect = event.collisionRect();
				const massRange = DotMoveSystem.MassRange.fromRect(rect);

				for (const massIdx of massRange.masses()) {
					mapCache.removeMapCharactersCache(massIdx, event);
				}
			}

			if (mapCache._cache) {
				for (let i = 0; i < mapCache._cache.length; i++) {
					if (mapCache._cache[i]) {
						mapCache._cache[i].delete(event);
						if (mapCache._cache[i].size === 0) {
							mapCache._cache[i] = null;
						}
					}
				}
			}
		}

		if ($gameTemp && $gameTemp._characterTempDatas && event) {
			$gameTemp._characterTempDatas.delete(event);
		}

		if ($gameTemp && $gameTemp._lastAllCharacters && event) {
			$gameTemp._lastAllCharacters.delete(event);
		}

		if (event) {
			if (event._moverData) {
				event._moverData.targetFar = 0;
				event._moverData.moveDeg = 0;
				event._moverData.stopping = false;
			}

			event._moved = false;
			event._moving = false;
			event._clearMovedFlagRequested = false;

			if (event.dotMoveTempData) {
				const tempData = event.dotMoveTempData();
				if (tempData && tempData.mapCharacterCacheUpdater) {
					tempData.mapCharacterCacheUpdater.removeMapCharactersCache();
					tempData.mapCharacterCacheUpdater._lastRect = null;
				}
			}
		}
	}

	this._events[eventId] = null;
};

// Regular RPG Maker events
Game_Map.prototype.removeDeletedEvents = function () {
	if (!$gameSystem._deletedMapEvents || !$gameSystem._deletedMapEvents[this._mapId]) {
		return;
	}
	$gameSystem._deletedMapEvents[this._mapId].forEach(eventId => {
		if (this._events[eventId]) {
			this._events[eventId] = null;
		}
	});
};

const _Sprite_Animation_targetSpritePosition = Sprite_Animation.prototype.targetSpritePosition;
Sprite_Animation.prototype.targetSpritePosition = function (sprite) {
	if (!sprite || !sprite.parent) {
		return new Point(this._targets[0].x, this._targets[0].y);
	}
	return _Sprite_Animation_targetSpritePosition.call(this, sprite);
};

PluginManager.registerCommand(HpluginName, "spawnEvent", function (args) {
	let eventIdentifier = args.eventId;
	if (eventIdentifier.startsWith('$game')) eventIdentifier = eval(eventIdentifier);
	const id = Number(eventIdentifier) || $dataTemplateMap.events.findIndex(e => e?.name === eventIdentifier);

	if (id <= 0) return;

	const useGridBased = args.gridBased === 'true';
	const usePixelMode = H_DotMoveSystem && !useGridBased;

	let xExp, yExp;
	if (args.position !== undefined) {
		const positionParts = args.position.split(',').map(p => p.trim());
		xExp = positionParts[0];
		yExp = positionParts[1] || positionParts[0];
	} else {
		xExp = args.x !== undefined ? args.x : 'this';
		yExp = args.y !== undefined ? args.y : 'this';
	}

	const checkForbiddenTile = (x, y, letters, checkEvents) => {
		const collisionRadius = 0.3;
		const centerX = x + 0.5;
		const centerY = y + 0.5;
		const checkPoints = [
			{ x: centerX, y: centerY },
			{ x: centerX - collisionRadius, y: centerY },
			{ x: centerX + collisionRadius, y: centerY },
			{ x: centerX, y: centerY - collisionRadius },
			{ x: centerX, y: centerY + collisionRadius },
			{ x: centerX - collisionRadius, y: centerY - collisionRadius },
			{ x: centerX + collisionRadius, y: centerY - collisionRadius },
			{ x: centerX - collisionRadius, y: centerY + collisionRadius },
			{ x: centerX + collisionRadius, y: centerY + collisionRadius }
		];

		for (const point of checkPoints) {
			const tileX = Math.floor(point.x);
			const tileY = Math.floor(point.y);

			if (checkEvents) {
				if (H_DotMoveSystem) {
					for (const event of $gameMap.events()) {
						if (!event || event.isThrough() || event._priorityType !== 1 || event._erased) {
							continue;
						}

						const eventCenterX = event.x;
						const eventCenterY = event.y;
						const distX = Math.abs(point.x - eventCenterX);
						const distY = Math.abs(point.y - eventCenterY);

						if (distX < 0.4 && distY < 0.4) {
							return true;
						}
					}
				} else {
					const hasImpassableEvent = $gameMap.eventsXy(tileX, tileY).some(event =>
						event._priorityType === 1 && !event.isThrough() && !event._erased
					);
					if (hasImpassableEvent) return true;
				}
			}

			if (letters && letters.length > 0) {
				const tiles = $gameMap.allTiles(tileX, tileY);
				const flags = $gameMap.tilesetFlags();

				const tilesetRanges = {
					'A': [[2048, 2815], [2816, 4351], [4352, 5887], [5888, 8191], [1536, 1663]],
					'A1': [[2048, 2815]],
					'A2': [[2816, 4351]],
					'A3': [[4352, 5887]],
					'A4': [[5888, 8191]],
					'A5': [[1536, 1663]],
					'B': [[0, 255]],
					'C': [[256, 511]],
					'D': [[512, 767]],
					'E': [[768, 1023]]
				};
				// Basically block all A3 A4
				if (letters.includes('A3') || letters.includes('A4')) {
					for (const tileId of tiles) {
						if (letters.includes('A3') && tileId >= 4352 && tileId <= 5887) {
							return true;
						}

						if (letters.includes('A4') && tileId >= 5888 && tileId <= 8191) {
							return true;
						}
					}
				}

				const impassableTiles = tiles.filter(tileId => (flags[tileId] & 0x0f));
				if (impassableTiles.length > 0) {
					const otherLetters = letters.filter(letter => letter !== 'A3' && letter !== 'A4');

					if (otherLetters.length > 0) {
						const isForbidden = impassableTiles.some(tileId =>
							otherLetters.some(letter => {
								const ranges = tilesetRanges[letter];
								if (!ranges) return false;

								return ranges.some(([min, max]) => tileId >= min && tileId <= max);
							})
						);

						if (isForbidden) {
							return true;
						}
					}
				}
			}
		}

		return false;
	};

	const forbiddenSettings = (() => {
		const result = { tiles: [], checkEvents: false };
		const notSpawnMatch = args.notSpawnOn?.toLowerCase()?.trim();

		if (!notSpawnMatch) return result;

		notSpawnMatch.split(/,\s*/).forEach(part => {
			if (part.includes('impassable events')) {
				result.checkEvents = true;
			} else if (part.startsWith('impassable')) {
				const tileLetters = part
					.replace('impassable', '')
					.trim()
					.split(/\s+/)
					.map(tile => tile.toUpperCase())
					.filter(tile => /^[A-E][1-5]?$/.test(tile));

				result.tiles.push(...tileLetters);
			}
		});

		return result;
	})();

	const getDirectionOffset = (direction) => {
		const offsets = {
			1: { x: -1, y: 1 },
			2: { x: 0, y: 1 },
			3: { x: 1, y: 1 },
			4: { x: -1, y: 0 },
			6: { x: 1, y: 0 },
			7: { x: -1, y: -1 },
			8: { x: 0, y: -1 },
			9: { x: 1, y: -1 }
		};
		return offsets[direction] || { x: 0, y: 0 };
	};

	const spawnIfValid = (x, y) => {
		const clampedX = Math.max(0, Math.min(x, $gameMap.width() - 1));
		const clampedY = Math.max(0, Math.min(y, $gameMap.height() - 1));
		if (!checkForbiddenTile(clampedX, clampedY, forbiddenSettings.tiles, forbiddenSettings.checkEvents)) {
			let startDegree = args.startDegree;

			if (startDegree === 'player') {
				let playerX, playerY;
				if (H_DotMoveSystem && $gamePlayer.centerPositionPoint) {
					const playerPos = $gamePlayer.centerPositionPoint();
					playerX = playerPos.x - 0.5;
					playerY = playerPos.y - 0.5;
				} else {
					playerX = $gamePlayer.x;
					playerY = $gamePlayer.y;
				}
				const dx = playerX - clampedX;
				const dy = playerY - clampedY;
				const angleRad = Math.atan2(dx, -dy);
				startDegree = String((angleRad * 180 / Math.PI + 360) % 360);
			} else if (startDegree === 'this') {
				const sourceEvent = $gameMap.event(this._eventId);
				if (sourceEvent) {
					let eventX, eventY;
					if (H_DotMoveSystem && sourceEvent.centerPositionPoint) {
						const eventPos = sourceEvent.centerPositionPoint();
						eventX = eventPos.x - 0.5;
						eventY = eventPos.y - 0.5;
					} else {
						eventX = sourceEvent.x;
						eventY = sourceEvent.y;
					}
					const dx = eventX - clampedX;
					const dy = eventY - clampedY;
					const angleRad = Math.atan2(dx, -dy);
					startDegree = String((angleRad * 180 / Math.PI + 360) % 360);
				}
			} else if (startDegree && startDegree.toLowerCase().includes('mouse or gamepad')) {
				const stickInput = checkGamepadInput();
				let baseDegree = 0;

				if (stickInput) {
					const angle = Math.atan2(stickInput.x, -stickInput.y);
					baseDegree = (angle * 180 / Math.PI);
					baseDegree = (baseDegree + 360) % 360;
				} else {
					const cursorX = $gameMap.canvasToMapX(TouchInput.x);
					const cursorY = $gameMap.canvasToMapY(TouchInput.y);
					const dx = cursorX - clampedX;
					const dy = cursorY - clampedY;
					baseDegree = Math.atan2(dy, dx) * 180 / Math.PI;
					baseDegree = (baseDegree + 90) % 360;
				}

				const operation = startDegree.toLowerCase().replace('mouse or gamepad', '').trim();
				if (operation) {
					startDegree = String(eval(`${baseDegree}${operation}`));
				} else {
					startDegree = String(baseDegree);
				}
			}

			let spawnerEnemyName = null;
			let spawnerActorId = null;
			const spawnerEvent = $gameMap.event(this._eventId);
			if (spawnerEvent) {
				if (!spawnerEvent.databaseEnemy && !spawnerEvent.databaseActor) {
					spawnerEvent.getHpValueFromNote();
				}

				if (spawnerEvent.linkedActorId) {
					spawnerActorId = spawnerEvent.linkedActorId;
				}
				else if (spawnerEvent.databaseEnemy && !spawnerEvent._isMinionActor) {
					spawnerEnemyName = spawnerEvent.databaseEnemy.name;
				}
				else if (spawnerEvent._inheritedActorId) {
					spawnerActorId = spawnerEvent._inheritedActorId;
				}
				else if (spawnerEvent._inheritedEnemyName) {
					spawnerEnemyName = spawnerEvent._inheritedEnemyName;
				}
			}

			const eventId = $gameMap.spawnEvent(id, clampedX, clampedY, args.permanent === 'true', startDegree);

			// Inherit actor data
			if (spawnerActorId && eventId) {
				const spawnedEvent = $gameMap.event(eventId);
				if (spawnedEvent) {
					const actor = $gameActors.actor(spawnerActorId);
					if (actor) {
						spawnedEvent._inheritedActorId = spawnerActorId;
						spawnedEvent._inheritedActorData = actor;
					}
				}
			}

			// Inherit enemy data
			if (spawnerEnemyName && eventId) {
				const spawnedEvent = $gameMap.event(eventId);
				if (spawnedEvent) {
					spawnedEvent._inheritedEnemyName = spawnerEnemyName;
					spawnedEvent._inheritedEnemyData = enemyNameCache[spawnerEnemyName.toLowerCase()];
				}
			}

			if (startDegree) {
				if (startDegree.toLowerCase() === 'mouse or gamepad') {
					$gameMap.event(eventId).rotateTo(startDegree);
				} else if (startDegree.startsWith('<') && startDegree.endsWith('>')) {
					$gameMap.event(eventId).rotateTo(startDegree);
				} else {
					const event = $gameMap.event(eventId);
					event.setOriginPoint('center');
					event.setCustomRotation(false);
					event.customRotationPoint = true;
					event.setRotation(Number(startDegree));
				}
			}

			if (args.turnToward) {
				const spawnedEvent = $gameMap.event(eventId);
				if (spawnedEvent) {
					SspawnTurnTorwardH(spawnedEvent, args.turnToward, this._eventId);
				}
			}

			// Child and Parent
			const attachTo = args.attachTo || 'none';
			if (attachTo !== 'none' && eventId) {
				const spawnedEvent = $gameMap.event(eventId);
				if (spawnedEvent) {
					let parentEvent = null;

					if (attachTo === 'this') {
						parentEvent = $gameMap.event(this._eventId);
					} else if (attachTo === 'player') {
						parentEvent = $gamePlayer;
					}

					if (parentEvent) {
						spawnedEvent.isPlayerChild = (parentEvent === $gamePlayer);
						spawnedEvent.theParent = parentEvent;
						spawnedEvent.wasAttached = true;

						if (spawnedEvent.isPlayerChild) {
							spawnedEvent.lastPlayerX = $gamePlayer._realX;
							spawnedEvent.lastPlayerY = $gamePlayer._realY;
						} else {
							spawnedEvent.lastParentX = parentEvent._realX;
							spawnedEvent.lastParentY = parentEvent._realY;
						}

						if (H_DotMoveSystem) {
							const parentPos = parentEvent.positionPoint();
							const eventPos = spawnedEvent.positionPoint();
							spawnedEvent.childOffsetX = eventPos.x - parentPos.x;
							spawnedEvent.childOffsetY = eventPos.y - parentPos.y;
						} else {
							spawnedEvent.childOffsetX = spawnedEvent._realX - parentEvent._realX;
							spawnedEvent.childOffsetY = spawnedEvent._realY - parentEvent._realY;
						}
					}
				}
			}
		}
	};

	if (xExp === 'cursor' || (typeof xExp === 'string' && xExp.includes('cursor'))) {
		const gridX = $gameMap.canvasToMapX(TouchInput.x);
		const gridY = $gameMap.canvasToMapY(TouchInput.y);

		if (H_DotMoveSystem && !useGridBased) {
			const mapX = TouchInput.x + $gameMap._displayX * $gameMap.tileWidth();
			const mapY = TouchInput.y + $gameMap._displayY * $gameMap.tileHeight();
			const pixelX = mapX / $gameMap.tileWidth();
			const pixelY = mapY / $gameMap.tileHeight();
			spawnIfValid(pixelX - 0.5, pixelY - 0.5);
		} else {
			spawnIfValid(gridX, gridY);
		}
	}
	else if (typeof xExp === 'string' && typeof yExp === 'string' &&
		xExp.match(/region\s+(.+)/i) && yExp.match(/region\s+(.+)/i)) {
		const xMatch = xExp.match(/region\s+(.+)/i);
		const yMatch = yExp.match(/region\s+(.+)/i);

		const RegionExpression = (expr) => {
			const regionMatch = expr.match(/(\d+)/);
			if (!regionMatch) return null;

			const regionId = parseInt(regionMatch[1]);
			const fullExpression = expr.trim();

			return { regionId, expression: fullExpression };
		};

		const xData = RegionExpression(xMatch[1]);
		const yData = RegionExpression(yMatch[1]);

		if (xData && yData && xData.regionId === yData.regionId) {
			const regionId = xData.regionId;

			for (let tileX = 0; tileX < $gameMap.width(); tileX++) {
				for (let tileY = 0; tileY < $gameMap.height(); tileY++) {
					if ($gameMap.regionId(tileX, tileY) === regionId) {
						const regionX = tileX;
						const regionY = tileY;

						let xExpression = xData.expression.replace(/\d+/, regionX.toString());
						let yExpression = yData.expression.replace(/\d+/, regionY.toString());

						const spawnX = eval(xExpression);
						const spawnY = eval(yExpression);

						if (!isNaN(spawnX) && !isNaN(spawnY) &&
							spawnX >= 0 && spawnX < $gameMap.width() &&
							spawnY >= 0 && spawnY < $gameMap.height()) {
							spawnIfValid(spawnX, spawnY);
						}
					}
				}
			}
		}
	}

	else if (typeof xExp === 'string' && typeof yExp === 'string' &&
		xExp.match(/<.*>\s*near:\s*.*/) && yExp.match(/<.*>\s*near:\s*.*/)) {
		const parseArg = (arg) => {
			const match = arg.match(/<(.*)>\s*near:\s*(.*)/);
			return {
				notetag: `<${match[1]}>`,
				source: match[2].trim()
			};
		};

		const xParsed = parseArg(xExp);
		const yParsed = parseArg(yExp);

		if (xParsed.notetag === yParsed.notetag && xParsed.source === yParsed.source) {
			const notetag = xParsed.notetag;
			const source = xParsed.source;

			let sourceX, sourceY;
			if (source === 'player') {
				if (H_DotMoveSystem && !useGridBased) {
					sourceX = $gamePlayer.centerPositionPoint().x - 0.5;
					sourceY = $gamePlayer.centerPositionPoint().y - 0.5;
				} else {
					sourceX = $gamePlayer.x;
					sourceY = $gamePlayer.y;
				}
			} else if (source === 'this') {
				const thisEvent = $gameMap.event(this._eventId);
				if (!thisEvent) return;
				if (H_DotMoveSystem && !useGridBased) {
					sourceX = thisEvent.centerPositionPoint().x - 0.5;
					sourceY = thisEvent.centerPositionPoint().y - 0.5;
				} else {
					sourceX = thisEvent.x;
					sourceY = thisEvent.y;
				}
			} else {
				const eventId = Number(source);
				const sourceEvent = $gameMap.event(eventId);
				if (sourceEvent) {
					if (H_DotMoveSystem && !useGridBased) {
						sourceX = sourceEvent.centerPositionPoint().x - 0.5;
						sourceY = sourceEvent.centerPositionPoint().y - 0.5;
					} else {
						sourceX = sourceEvent.x;
						sourceY = sourceEvent.y;
					}
				} else {
					return;
				}
			}

			let closestEvent = null;
			let minDistance = Infinity;

			if (H_DotMoveSystem && !useGridBased) {
				$gameMap.events().forEach(event => {
					if (event.event().note.includes(notetag)) {
						const eventX = event.centerPositionPoint().x - 0.5;
						const eventY = event.centerPositionPoint().y - 0.5;
						const distance = Math.sqrt(
							Math.pow(eventX - sourceX, 2) +
							Math.pow(eventY - sourceY, 2)
						);
						if (distance < minDistance) {
							closestEvent = event;
							minDistance = distance;
						}
					}
				});

				if (closestEvent) {
					const spawnX = closestEvent.centerPositionPoint().x - 0.5;
					const spawnY = closestEvent.centerPositionPoint().y - 0.5;
					spawnIfValid(spawnX, spawnY);
				}
			} else {
				// Grid-based
				$gameMap.events().forEach(event => {
					if (event.event().note.includes(notetag)) {
						const distance = Math.sqrt(
							Math.pow(event.x - sourceX, 2) +
							Math.pow(event.y - sourceY, 2)
						);
						if (distance < minDistance) {
							closestEvent = event;
							minDistance = distance;
						}
					}
				});

				if (closestEvent) {
					spawnIfValid(closestEvent.x, closestEvent.y);
				}
			}
		}
	}
	else {
		xExp = SspawnEventsShorcutH(xExp, this._eventId, 'x', usePixelMode);
		yExp = SspawnEventsShorcutH(yExp, this._eventId, 'y', usePixelMode);

		if (typeof xExp === 'string' && typeof yExp === 'string' &&
			xExp.includes('<') && yExp.includes('<')) {
			const extractNotetag = (expr) => {
				const match = expr.match(/<([^>]+)>/);
				return match ? `<${match[1]}>` : null;
			};

			const xNotetag = extractNotetag(xExp);
			const yNotetag = extractNotetag(yExp);

			if (xNotetag && yNotetag) {
				const target = findTarget(xNotetag);

				if (target) {
					let baseX, baseY;
					if (H_DotMoveSystem && !useGridBased) {
						baseX = target.centerPositionPoint().x - 0.5;
						baseY = target.centerPositionPoint().y - 0.5;
					} else {
						baseX = target.x;
						baseY = target.y;
					}

					xExp = xExp.replace(/<[^>]+>/, baseX);
					yExp = yExp.replace(/<[^>]+>/, baseY);
				} else {
					return;
				}
			}
		}

		let x, y;
		try {
			x = eval(xExp);
			y = eval(yExp);
		} catch (e) {
			console.warn("[SpawnEvent] eval error:", e.message);
			return;
		}
		spawnIfValid(x, y);
	}

	if (SceneManager._scene instanceof Scene_Map) {
		SceneManager._scene._spriteset.refreshEventHpBars();
	}
});

function Game_MaithlDynamicEvent() {
	this.initialize.apply(this, arguments);
}

Game_MaithlDynamicEvent.prototype = Object.create(Game_Event.prototype);
Game_MaithlDynamicEvent.prototype.constructor = Game_MaithlDynamicEvent;

Game_MaithlDynamicEvent.prototype.initialize = function (mapId, eventId, x, y, note, waitTime, comments, name) {
	this._spawnX = x;
	this._spawnY = y;
	this._note = note;
	this._waitTime = waitTime;
	this._comments = comments;
	this._name = name || "DynamicHitbox";
	this.isDynamicEvent = true;
	Game_Event.prototype.initialize.call(this, mapId, eventId);
};

Game_MaithlDynamicEvent.prototype.event = function () {
	let eventList = [];

	if (this._comments) {
		eventList.push({ code: 108, indent: 0, parameters: [this._comments] });
	}

	if (this._waitTime) {
		eventList.push({ code: 230, indent: 0, parameters: [Number(this._waitTime)] });
		eventList.push({
			code: 355, indent: 0, parameters: [
				`const thisEventId = ${this._eventId};
                CollisionManager?.clearCollisions(thisEventId);
                $gameMap.removeEventFromTagIndex($gameMap._events[thisEventId]);
                $gameMap._events[thisEventId] = null;`
			]
		});
	}

	eventList.push({ code: 0, indent: 0, parameters: [] });

	return {
		id: this._eventId,
		name: this._name,
		note: this._note || "",
		meta: {},
		x: this._spawnX,
		y: this._spawnY,
		pages: [{
			conditions: {
				actorId: 1, actorValid: false,
				itemId: 1, itemValid: false,
				selfSwitchCh: "A", selfSwitchValid: false,
				switch1Id: 1, switch1Valid: false,
				switch2Id: 1, switch2Valid: false,
				variableId: 1, variableValid: false,
				variableValue: 0
			},
			image: {
				tileId: 0,
				characterName: "",
				direction: 2,
				pattern: 1,
				characterIndex: 0
			},
			list: eventList,
			moveFrequency: 3,
			moveRoute: {
				list: [{ code: 0, parameters: [] }],
				repeat: true,
				skippable: false,
				wait: false
			},
			moveSpeed: 3,
			moveType: 0,
			priorityType: 0,
			stepAnime: false,
			through: true,
			trigger: 4,
			walkAnime: true
		}]
	};
};

Game_MaithlDynamicEvent.prototype.locate = function () {
	Game_Event.prototype.locate.call(this, this._spawnX, this._spawnY);
};

PluginManager.registerCommand(HpluginName, "spawnEventHitbox", function (args) {
	let xExp, yExp;

	if (args.position !== undefined) {
		const positionParts = args.position.split(',').map(p => p.trim());
		if (positionParts.length === 1) {
			xExp = positionParts[0];
			yExp = positionParts[0];
		} else {
			xExp = positionParts[0];
			yExp = positionParts[1] || positionParts[0];
		}
	}
	else if (args.x !== undefined && args.y !== undefined) {
		xExp = args.x;
		yExp = args.y;
	}
	else {
		xExp = 'this';
		yExp = 'this';
	}

	const usePixelMode = H_DotMoveSystem ? true : false;

	// <notetag> near: this/player/eventId
	const nearTagRegex = /<(.+?)>\s*near:\s*(this|player|\d+)/i;
	const xMatch = typeof xExp === 'string' ? xExp.match(nearTagRegex) : null;
	const yMatch = typeof yExp === 'string' ? yExp.match(nearTagRegex) : null;

	if (xMatch && yMatch && xMatch[1] === yMatch[1] && xMatch[2] === yMatch[2]) {
		const notetag = `<${xMatch[1]}>`;
		const sourceType = xMatch[2].toLowerCase();

		let sourceX, sourceY;
		if (sourceType === 'this') {
			const event = $gameMap.event(this._eventId);
			if (H_DotMoveSystem) {
				sourceX = event.centerPositionPoint().x - 0.5;
				sourceY = event.centerPositionPoint().y - 0.5;
			} else {
				sourceX = event.x;
				sourceY = event.y;
			}
		} else if (sourceType === 'player') {
			if (H_DotMoveSystem) {
				sourceX = $gamePlayer.centerPositionPoint().x - 0.5;
				sourceY = $gamePlayer.centerPositionPoint().y - 0.5;
			} else {
				sourceX = $gamePlayer.x;
				sourceY = $gamePlayer.y;
			}
		} else {
			const eventId = parseInt(sourceType);
			const event = $gameMap.event(eventId);
			if (event) {
				if (H_DotMoveSystem) {
					sourceX = event.centerPositionPoint().x - 0.5;
					sourceY = event.centerPositionPoint().y - 0.5;
				} else {
					sourceX = event.x;
					sourceY = event.y;
				}
			} else {
				sourceX = $gamePlayer.x;
				sourceY = $gamePlayer.y;
			}
		}

		let closestEvent = null;
		let minDistance = Infinity;

		$gameMap.events().forEach(event => {
			if (event.event().note.includes(notetag)) {
				let eventX, eventY;
				if (H_DotMoveSystem) {
					eventX = event.centerPositionPoint().x - 0.5;
					eventY = event.centerPositionPoint().y - 0.5;
				} else {
					eventX = event.x;
					eventY = event.y;
				}

				const distance = Math.sqrt(
					Math.pow(eventX - sourceX, 2) +
					Math.pow(eventY - sourceY, 2)
				);

				if (distance < minDistance) {
					minDistance = distance;
					closestEvent = event;
				}
			}
		});

		if (closestEvent) {
			if (H_DotMoveSystem) {
				xExp = closestEvent.centerPositionPoint().x - 0.5;
				yExp = closestEvent.centerPositionPoint().y - 0.5;
			} else {
				xExp = closestEvent.x;
				yExp = closestEvent.y;
			}
		}
	} else {
		xExp = SspawnEventsShorcutH(xExp, this._eventId, 'x', usePixelMode);
		yExp = SspawnEventsShorcutH(yExp, this._eventId, 'y', usePixelMode);
	}

	const x = eval(xExp);
	const y = eval(yExp);

	let rotationDegree = 0;
	if (args.rotationDegree) {
		if (args.rotationDegree === 'player') {
			let playerX, playerY;
			if (H_DotMoveSystem && $gamePlayer.centerPositionPoint) {
				playerX = $gamePlayer.centerPositionPoint().x - 0.5;
				playerY = $gamePlayer.centerPositionPoint().y - 0.5;
			} else {
				playerX = $gamePlayer.x;
				playerY = $gamePlayer.y;
			}
			const dx = playerX - x;
			const dy = playerY - y;
			const angleRad = Math.atan2(dx, -dy);
			rotationDegree = (angleRad * 180 / Math.PI + 360) % 360;
		} else if (args.rotationDegree === 'this') {
			const sourceEvent = $gameMap.event(this._eventId);
			if (sourceEvent) {
				let eventX, eventY;
				if (H_DotMoveSystem && sourceEvent.centerPositionPoint) {
					const eventPos = sourceEvent.centerPositionPoint();
					eventX = eventPos.x - 0.5;
					eventY = eventPos.y - 0.5;
				} else {
					eventX = sourceEvent.x;
					eventY = sourceEvent.y;
				}

				const dx = eventX - x;
				const dy = eventY - y;
				const angleRad = Math.atan2(dx, -dy);
				rotationDegree = (angleRad * 180 / Math.PI + 360) % 360;
			}
		} else if (args.rotationDegree === 'mouse or gamepad') {
			const stickInput = checkGamepadInput();

			if (stickInput) {
				const angle = Math.atan2(stickInput.x, -stickInput.y);
				rotationDegree = (angle * 180 / Math.PI);
				rotationDegree = (rotationDegree + 360) % 360;
			} else {
				const cursorX = $gameMap.canvasToMapX(TouchInput.x);
				const cursorY = $gameMap.canvasToMapY(TouchInput.y);
				const dx = cursorX - x;
				const dy = cursorY - y;
				rotationDegree = Math.atan2(dy, dx) * 180 / Math.PI;
				rotationDegree = (rotationDegree + 90) % 360;
			}
		} else if (args.rotationDegree.startsWith('<') && args.rotationDegree.endsWith('>')) {
			const targetEvent = findNearestTarget(args.rotationDegree, x, y);
			if (targetEvent) {
				let targetX, targetY;
				if (H_DotMoveSystem && targetEvent.centerPositionPoint) {
					const targetPos = targetEvent.centerPositionPoint();
					targetX = targetPos.x - 0.5;
					targetY = targetPos.y - 0.5;
				} else {
					targetX = targetEvent.x;
					targetY = targetEvent.y;
				}
				const dx = targetX - x;
				const dy = targetY - y;
				const angleRad = Math.atan2(dx, -dy);
				rotationDegree = (angleRad * 180 / Math.PI + 360) % 360;
			}
		} else {
			try {
				rotationDegree = eval(args.rotationDegree);
			} catch (e) {
				rotationDegree = 0;
			}
		}
	}

	let notetags = '';
	if (args.notetag) {
		if (args.notetag.includes('>, ')) {
			notetags = args.notetag.split('>, ')
				.map(tag => tag.trim() + (tag.trim().endsWith('>') ? '' : '>')).join('');
		} else {
			notetags = args.notetag;
		}
	}

	// Inherit stuff
	let spawnerEnemyName = null;
	let spawnerActorId = null;
	const spawnerEvent = $gameMap.event(this._eventId);
	if (spawnerEvent) {
		if (!spawnerEvent.databaseEnemy && !spawnerEvent.databaseActor) {
			spawnerEvent.getHpValueFromNote();
		}

		if (spawnerEvent.linkedActorId) {
			spawnerActorId = spawnerEvent.linkedActorId;
		}
		else if (spawnerEvent.databaseEnemy && !spawnerEvent._isMinionActor) {
			spawnerEnemyName = spawnerEvent.databaseEnemy.name;
		}
		else if (spawnerEvent._inheritedActorId) {
			spawnerActorId = spawnerEvent._inheritedActorId;
		}
		else if (spawnerEvent._inheritedEnemyName) {
			spawnerEnemyName = spawnerEvent._inheritedEnemyName;
		}
	}

	const eventId = $gameMap.getNextEventId();
	const event = new Game_MaithlDynamicEvent($gameMap._mapId, eventId, x, y, notetags, args.wait, args.comment, args.name);

	if (spawnerActorId) {
		const actor = $gameActors.actor(spawnerActorId);
		if (actor) {
			event._inheritedActorId = spawnerActorId;
			event._inheritedActorData = actor;
		}
	}

	if (spawnerEnemyName) {
		event._inheritedEnemyName = spawnerEnemyName;
		event._inheritedEnemyData = enemyNameCache[spawnerEnemyName.toLowerCase()];
	}

	const attachTo = args.attachTo || '';
	if (attachTo !== '' && attachTo.trim() !== '') {
		let parentEvent = null;
		const attachTarget = attachTo.trim();

		if (attachTarget === 'this') {
			parentEvent = $gameMap.event(this._eventId);
		} else if (attachTarget === 'player') {
			parentEvent = $gamePlayer;
		} else if (attachTarget.startsWith('<') && attachTarget.endsWith('>')) {
			let minDistance = Infinity;
			$gameMap.events().forEach(mapEvent => {
				if (mapEvent && mapEvent.event() && mapEvent.event().note.includes(attachTarget)) {
					const distance = Math.abs($gameMap.deltaX(mapEvent.x, event.x)) + Math.abs($gameMap.deltaY(mapEvent.y, event.y));
					if (distance < minDistance) {
						minDistance = distance;
						parentEvent = mapEvent;
					}
				}
			});
		}

		if (parentEvent) {
			event.isPlayerChild = (parentEvent === $gamePlayer);
			event.theParent = parentEvent;
			event.wasAttached = true;

			if (event.isPlayerChild) {
				event.lastPlayerX = $gamePlayer._realX;
				event.lastPlayerY = $gamePlayer._realY;
			} else {
				event.lastParentX = parentEvent._realX;
				event.lastParentY = parentEvent._realY;
			}

			if (H_DotMoveSystem) {
				const parentPos = parentEvent.positionPoint();
				const eventPos = event.positionPoint();
				event.childOffsetX = eventPos.x - parentPos.x;
				event.childOffsetY = eventPos.y - parentPos.y;
			} else {
				event.childOffsetX = event._realX - parentEvent._realX;
				event.childOffsetY = event._realY - parentEvent._realY;
			}
		}
	}

	$gameMap._events[eventId] = event;
	$gameMap.addEventToTagIndex(event);

	if (rotationDegree !== 0) {
		event.setOriginPoint('center');
		event.setCustomRotation(false);
		event.customRotationPoint = true;
		event.setRotation(Number(rotationDegree));
	}

	if (args.turnToward) {
		SspawnTurnTorwardH(event, args.turnToward, this._eventId);
	}

	return eventId;
});

PluginManager.registerCommand(HpluginName, "DestroyDynamicEvent", function (args) {
	const nearTagRegex = /<(.+?)>\s*near:\s*(this|player|\d+)/i;
	const nearMatch = args.notetag.match(nearTagRegex);

	if (nearMatch) {
		const notetag = `<${nearMatch[1]}>`;
		const sourceType = nearMatch[2].toLowerCase();

		let sourceX, sourceY;
		if (sourceType === 'this') {
			const event = $gameMap.event(this._eventId);
			sourceX = event.x;
			sourceY = event.y;
		} else if (sourceType === 'player') {
			sourceX = $gamePlayer.x;
			sourceY = $gamePlayer.y;
		} else {
			const eventId = parseInt(sourceType);
			const event = $gameMap.event(eventId);
			if (event) {
				sourceX = event.x;
				sourceY = event.y;
			} else {
				sourceX = $gamePlayer.x;
				sourceY = $gamePlayer.y;
			}
		}

		let closestEvent = null;
		let minDistance = Infinity;

		$gameMap.events().forEach(event => {
			if (!event || !event.event()) return;
			if (event.event().name !== "DynamicHitbox") return;
			if (event.event().note.includes(notetag)) {
				const distance = Math.sqrt(
					Math.pow(event.x - sourceX, 2) +
					Math.pow(event.y - sourceY, 2)
				);

				if (distance < minDistance) {
					minDistance = distance;
					closestEvent = event;
				}
			}
		});

		if (closestEvent) {
			const eventId = closestEvent.eventId();

			if (SceneManager._scene instanceof Scene_Map) {
				SceneManager._scene._spriteset?.unspawnEvent(eventId);
			}

			if (SceneManager._scene._spriteset) {
				const spriteset = SceneManager._scene._spriteset;
				const hpBarIndex = spriteset._eventHpBars?.findIndex(bar =>
					bar._event._eventId === eventId
				);
				if (hpBarIndex > -1) {
					const hpBar = spriteset._eventHpBars[hpBarIndex];
					spriteset._tilemap.removeChild(hpBar);
					spriteset._eventHpBars.splice(hpBarIndex, 1);
				}
			}

			if (CollisionManager) {
				CollisionManager.clearCollisions(eventId);
			}

			$gameMap.removeEventFromTagIndex(closestEvent);
			if ($gameMap.tagToEvents) {
				for (const [tag, eventArray] of $gameMap.tagToEvents.entries()) {
					const index = eventArray.indexOf(closestEvent);
					if (index > -1) {
						eventArray.splice(index, 1);
						if (eventArray.length === 0) {
							$gameMap.tagToEvents.delete(tag);
						}
					}
				}
			}
			setTimeout(() => {
				if ($gameMap._events[eventId]) {
					$gameMap._events[eventId] = null;
				}
				if ($dataMap && $dataMap.events && $dataMap.events[eventId]) {
					$dataMap.events[eventId] = null;
				}
			}, 50);
		}
	} else {
		const notetags = args.notetag.split(',').map(tag => {
			tag = tag.trim();
			if (!tag.startsWith('<')) tag = '<' + tag;
			if (!tag.endsWith('>')) tag = tag + '>';
			return tag;
		});

		$gameMap.events().forEach(event => {
			if (!event || !event.event()) return;

			if (event.event().name !== "DynamicHitbox") return;
			if (notetags.some(tag => event.event().note.includes(tag))) {
				const eventId = event.eventId();


				if (SceneManager._scene instanceof Scene_Map) {
					SceneManager._scene._spriteset?.unspawnEvent(eventId);
				}

				if (SceneManager._scene._spriteset) {
					const spriteset = SceneManager._scene._spriteset;
					const hpBarIndex = spriteset._eventHpBars?.findIndex(bar =>
						bar._event._eventId === eventId
					);
					if (hpBarIndex > -1) {
						const hpBar = spriteset._eventHpBars[hpBarIndex];
						spriteset._tilemap.removeChild(hpBar);
						spriteset._eventHpBars.splice(hpBarIndex, 1);
					}
				}

				if (CollisionManager) {
					CollisionManager.clearCollisions(eventId);
					delete CollisionManager.collisionData[eventId];
				}
				if ($gameSystem.collisionTimestamps) {
					for (const key in $gameSystem.collisionTimestamps) {
						if (key.includes(`-${eventId}-`)) {
							delete $gameSystem.collisionTimestamps[key];
						}
					}
				}
				if ($gameSystem.collidedOnceEvents) {
					for (const key in $gameSystem.collidedOnceEvents) {
						if (key.includes(`-${eventId}-`)) {
							delete $gameSystem.collidedOnceEvents[key];
						}
					}
				}
				$gameMap.removeEventFromTagIndex(event);
				setTimeout(() => {
					if ($gameMap._events[eventId]) {
						$gameMap._events[eventId] = null;
					}
					if ($dataMap && $dataMap.events && $dataMap.events[eventId]) {
						$dataMap.events[eventId] = null;
					}
				}, 50);
			}
		});
	}
});

PluginManager.registerCommand(HpluginName, "DestroyEvent", function (args) {
	const identifier = args.target || 'this';
	const permanent = args.permanent === 'true';
	const destroyNearby = args.destroyNearby || '';
	let sourceEvents = findTargets(identifier, this);

	if (destroyNearby && destroyNearby.trim() !== '') {
		const nearbyEvents = [];

		sourceEvents.forEach(sourceEvent => {
			let closestEvent = null;
			let minDistance = Infinity;
			const sourceX = sourceEvent.x;
			const sourceY = sourceEvent.y;

			$gameMap.events().forEach(otherEvent => {
				if (!otherEvent || otherEvent === sourceEvent) return;
				if (!(otherEvent instanceof Game_Event)) return;

				const matchesNotetag = destroyNearby.startsWith('<') &&
					destroyNearby.endsWith('>') &&
					otherEvent.event().note.includes(destroyNearby);
				const matchesName = otherEvent.event().name === destroyNearby;

				if (matchesNotetag || matchesName) {
					const distance = Math.sqrt(
						Math.pow(otherEvent.x - sourceX, 2) +
						Math.pow(otherEvent.y - sourceY, 2)
					);

					if (distance < minDistance) {
						closestEvent = otherEvent;
						minDistance = distance;
					}
				}
			});

			if (closestEvent && !nearbyEvents.includes(closestEvent)) {
				nearbyEvents.push(closestEvent);
			}
		});

		sourceEvents = nearbyEvents;
	}

	sourceEvents.forEach(event => {
		const eventId = event.eventId();
		const isSpawnedEvent = event instanceof Hendrix_TemplateEvent || event instanceof Game_MaithlDynamicEvent;

		if (isSpawnedEvent) {
			// Spawned event
			$gameMap.removeEventFromTagIndex(event);
			if (event._characterName) {
				eventHeightCache.delete(event._characterName);
			}
			if (SceneManager._scene instanceof Scene_Map) {
				SceneManager._scene._spriteset.unspawnEvent(eventId);
			}
			$gameMap.unspawnEvent(eventId);
			this.removeEventHpBar(eventId);
		} else {
			// Regular event
			const hpStorageKey = `Map${$gameMap.mapId()}_Event${eventId}_HP`;
			if ($gameVariables._data[hpStorageKey]) {
				delete $gameVariables._data[hpStorageKey];
			}

			if (permanent) {
				if (!$gameSystem._deletedMapEvents) {
					$gameSystem._deletedMapEvents = {};
				}
				if (!$gameSystem._deletedMapEvents[$gameMap._mapId]) {
					$gameSystem._deletedMapEvents[$gameMap._mapId] = [];
				}
				if (!$gameSystem._deletedMapEvents[$gameMap._mapId].includes(eventId)) {
					$gameSystem._deletedMapEvents[$gameMap._mapId].push(eventId);
				}
			}

			if (SceneManager._scene instanceof Scene_Map) {
				const spriteset = SceneManager._scene._spriteset;
				for (let i = spriteset._characterSprites.length - 1; i >= 0; i--) {
					const sprite = spriteset._characterSprites[i];
					if (sprite._character === event) {
						spriteset._tilemap.removeChild(sprite);
						spriteset._characterSprites.splice(i, 1);
						if (sprite.bitmap) {
							sprite.bitmap = null;
						}
						sprite._character = null;
					}
				}
			}

			['A', 'B', 'C', 'D'].forEach(letter => {
				$gameSelfSwitches.setValue([$gameMap._mapId, eventId, letter], false);
			});
			this.removeEventHpBar(eventId);
			if (typeof CollisionManager !== 'undefined') {
				CollisionManager.clearCollisions(eventId);
			}
			if (typeof LocalVarManager !== 'undefined' && LocalVarManager.clearEventVars) {
				LocalVarManager.clearEventVars($gameMap._mapId, eventId);
			}
			$gameMap.removeEventFromTagIndex(event);
			event.erase();
			$gameMap._events[eventId] = null;
		}
	});
});

PluginManager.registerCommand(HpluginName, "destroyEvent", function (args) {
	const targetId = getTargetEventId(args.identifier, this);

	if (targetId !== null) {
		if ($gameMap._events[targetId]) {
			const event = $gameMap._events[targetId];
			$gameMap.removeEventFromTagIndex(event);
			if (SceneManager._scene instanceof Scene_Map) {
				SceneManager._scene._spriteset.unspawnEvent(targetId);
			}
			$gameMap.unspawnEvent(targetId);
			this.removeEventHpBar(targetId);
		}
		return;
	}

	$gameMap.events().forEach(event => {
		if (!event || !(event instanceof Game_Event)) return;

		if (matchEventIdentifier(event, args.identifier)) {
			const eventId = event.eventId();
			$gameMap.removeEventFromTagIndex(event);
			if (event._characterName) {
				eventHeightCache.delete(event._characterName);
			}
			if (SceneManager._scene instanceof Scene_Map) {
				SceneManager._scene._spriteset.unspawnEvent(eventId);
			}
			$gameMap.unspawnEvent(eventId);
			this.removeEventHpBar(eventId);
		}
	});
});

PluginManager.registerCommand(HpluginName, "destroyRegularEvent", function (args) {
	const identifier = args.target;
	const permanent = args.permanent === 'true';
	const targetEvents = findTargets(identifier, this).filter(event =>
		!(event instanceof Hendrix_TemplateEvent)
	);

	targetEvents.forEach(event => {
		const eventId = event.eventId();
		const hpStorageKey = `Map${$gameMap.mapId()}_Event${eventId}_HP`;
		if ($gameVariables._data[hpStorageKey]) {
			delete $gameVariables._data[hpStorageKey];
		}

		if (permanent) {
			if (!$gameSystem._deletedMapEvents) {
				$gameSystem._deletedMapEvents = {};
			}

			if (!$gameSystem._deletedMapEvents[$gameMap._mapId]) {
				$gameSystem._deletedMapEvents[$gameMap._mapId] = [];
			}

			if (!$gameSystem._deletedMapEvents[$gameMap._mapId].includes(eventId)) {
				$gameSystem._deletedMapEvents[$gameMap._mapId].push(eventId);
			}
		}

		if (SceneManager._scene instanceof Scene_Map) {
			const spriteset = SceneManager._scene._spriteset;
			for (let i = spriteset._characterSprites.length - 1; i >= 0; i--) {
				const sprite = spriteset._characterSprites[i];
				if (sprite._character === event) {
					spriteset._tilemap.removeChild(sprite);
					spriteset._characterSprites.splice(i, 1);
					if (sprite.bitmap) {
						sprite.bitmap = null;
					}
					sprite._character = null;
				}
			}
		}

		['A', 'B', 'C', 'D'].forEach(letter => {
			$gameSelfSwitches.setValue([$gameMap._mapId, eventId, letter], false);
		});
		this.removeEventHpBar(eventId);
		if (typeof CollisionManager !== 'undefined') {
			CollisionManager.clearCollisions(eventId);
		}
		if (typeof LocalVarManager !== 'undefined' && LocalVarManager.clearEventVars) {
			LocalVarManager.clearEventVars($gameMap._mapId, eventId);
		}
		$gameMap.removeEventFromTagIndex(event);
		event.erase();
		$gameMap._events[eventId] = null;

	});
});

PluginManager.registerCommand(HpluginName, "destroyEventNear", function (args) {
	const sourceEventId = getTargetEventId(args.eventId, this);
	const sourceEvent = $gameMap.event(sourceEventId);

	if (!sourceEvent) return false;

	let nearestEventId = null;
	let minDistance = Number.MAX_VALUE;

	$gameMap.events().forEach(event => {
		if (!event || event.eventId() === sourceEventId) return;

		if (matchEventIdentifier(event, args.identifier)) {
			const distance = Math.sqrt(
				Math.pow(event.x - sourceEvent.x, 2) +
				Math.pow(event.y - sourceEvent.y, 2)
			);

			if (distance < minDistance) {
				minDistance = distance;
				nearestEventId = event.eventId();
			}
		}
	});

	if (nearestEventId !== null) {
		if (SceneManager._scene instanceof Scene_Map) {
			SceneManager._scene._spriteset.unspawnEvent(nearestEventId);
		}
		$gameMap.unspawnEvent(nearestEventId);
		this.removeEventHpBar(nearestEventId);

		return true;
	}
	return false;
});

DataManager.loadTemplateMapData = function () {
	if (StemplateMapIdH > 0) {
		this.loadDataFile('$dataTemplateMap', 'Map%1.json'.format(StemplateMapIdH.padZero(3)));
	}
};

function SloadAllMapsDataH(mapId) {
	const url = `data/Map${String(mapId).padStart(3, '0')}.json`;
	return fetch(url)
		.then(response => response.ok ? response.json() : null)
		.catch(() => null);
}

DataManager.loadTemplateMapData();

const H_Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function () {
	H_Game_System_initialize.call(this);
	this.collisionTimestamps = {};
	this._playerHitboxCollisions = {};
	this._permanentEvents = {};
	this._deletedMapEvents = {};
	this._gunData = this._gunData || {};
	this._playerPassThroughEvents = [];
};

const H_Game_Map_setup = Game_Map.prototype.setup;
Game_Map.prototype.setup = function (mapId) {
	this.eventsPaused = false;
	this.pausingEvent = null;
	passageCache = {};
	this.clearTagIndex();
	this.initializePassCache();
	this.clearCustomEventHitboxCaches();
	H_Game_Map_setup.call(this, mapId);
	if ($gameSystem.collidedOnceEvents) {
		$gameSystem.collidedOnceEvents = {};
	}
	this.resetNextEventId();
	this.platformCache = null;
	this.lastPlatformCache = 0;
	this.respawnPermanentEvents();
	this.removeDeletedEvents();
	if (this._events) {
		this._events.forEach(event => {
			if (event && !event.noHpBar) {
				event.setInitialHp();
			}
		});
	}
	if (spawnActorsAtStart) {
		setTimeout(() => {
			$gameParty.members().forEach(actor => {
				const actorName = actor.name();
				const id = $dataTemplateMap.events.findIndex(e => e?.name === actorName);
				if (id > 0) {
					$gameMap.spawnEvent(id, $gamePlayer.x, $gamePlayer.y, false);
				}
			});
		}, 50);
	}

	eventsToSpawn.forEach(identifier => {
		const idNum = Number(identifier);
		const id = !isNaN(idNum) ? idNum :
			$dataTemplateMap.events.findIndex(e => e?.name === identifier);

		if (id > 0) {
			$gameMap.spawnEvent(id, 0, 0, false);
		}
	});
	this.buildTagIndex();
	for (const key in lastHpDecrease) {
		delete lastHpDecrease[key];
	}
	const platforms = this.getPlatforms();
	platforms.forEach(platform => {
		platform.H_lastPosition = null;
		platform.attachedCharacters = new Map();
	});

	this.skipCollisionCache = {};

	if ($gameSystem.collisionTimestamps) {
		$gameSystem.collisionTimestamps = {};
	}
	if ($gameSystem.collidedOnceEvents) {
		$gameSystem.collidedOnceEvents = {};
	}
	if ($gamePlayer) {
		$gamePlayer.cachedShouldCheckFlip = undefined;
		$gamePlayer.cachedNamedEvent = undefined;
	}
	$gameMap.events().forEach(event => {
		event.cachedShouldCheckFlip = undefined;
		event.cachedNamedEvent = undefined;
	});
	this.buildPassEventPositions();
};

const H_DataManager_makeSaveContents = DataManager.makeSaveContents;
DataManager.makeSaveContents = function () {
	const contents = H_DataManager_makeSaveContents.call(this);
	contents.eventHpData = {};
	for (const key in $gameVariables._data) {
		if (key.startsWith('Map') && key.includes('_Event') && key.endsWith('_HP')) {
			contents.eventHpData[key] = $gameVariables._data[key];
		}
	}
	contents.gunData = $gameSystem._gunData;
	return contents;
};

const H_DataManager_extractSaveContents = DataManager.extractSaveContents;
DataManager.extractSaveContents = function (contents) {
	H_DataManager_extractSaveContents.call(this, contents);
	if ($gameSystem._isBeatEmUp !== undefined) {
		isBeatEmUp = $gameSystem._isBeatEmUp;
	}
	if (contents.eventHpData) {
		for (const key in contents.eventHpData) {
			$gameVariables._data[key] = contents.eventHpData[key];
		}
	}
	if ($gameMap) {
		$gameMap.clearPassageCache();
	}
	LocalVarManager.loadLocalVars();
	if (contents.gunData) {
		$gameSystem._gunData = contents.gunData;

		for (const weaponId in $gameSystem._gunData) {
			const gunData = $gameSystem._gunData[weaponId];
			if (gunData.ammoItemId) {
				gunData.ammoItem = $dataItems[gunData.ammoItemId];
			}
		}
	} else {
		$gameSystem._gunData = {};
	}
};

const H_Scene_Map_onMapLoaded = Scene_Map.prototype.onMapLoaded;
Scene_Map.prototype.onMapLoaded = function () {
	H_Scene_Map_onMapLoaded.call(this);
	if ($gameMap && $gameMap.buildTagIndex) {
		$gameMap.buildTagIndex();
	}
	if (isBeatEmUp) {
		if ($gamePlayer._direction === 2 || $gamePlayer._direction === 8) {
			$gamePlayer._direction = 6;
		}
	}
};

//============================================================
// DETECTION AND CUSTOM MOVEMENT
//============================================================

//Path finding, override default moveTowardPlayer
Game_Character.prototype.moveTowardPlayer = function () {
	const d = this.findDirectionTo($gamePlayer.x, $gamePlayer.y);
	if (d === 0) return;

	let horz = 0;
	let vert = 0;

	switch (d) {
		case 1: horz = 4; vert = 2; break;
		case 2: vert = 2; break;
		case 3: horz = 6; vert = 2; break;
		case 4: horz = 4; break;
		case 6: horz = 6; break;
		case 7: horz = 4; vert = 8; break;
		case 8: vert = 8; break;
		case 9: horz = 6; vert = 8; break;
	}

	if (horz !== 0) {
		this.setDirection(horz);
	} else {
		this.setDirection(vert);
	}

	if (horz !== 0 && vert !== 0) {
		this.moveDiagonally(horz, vert);
	} else {
		this.moveStraight(d);
	}
};

Game_Event.prototype.searchLimit = function () {
	return 10;
};

//------------------------ CHECK IN RANGE FEATURE ----------------------------------------------

const getVisionConePoints = (x, y, direction, range, fov) => {
	const tileWidth = $gameMap.tileWidth();
	const tileHeight = $gameMap.tileHeight();
	const pixelSourceX = (x + 0.5) * tileWidth;
	const pixelSourceY = (y + 0.5) * tileHeight;
	const baseAngle = (direction === 2) ? 90 : (direction === 4) ? 180 : (direction === 6) ? 0 : 270;
	const startAngle = ((baseAngle - fov / 2) * Math.PI / 180);
	const endAngle = ((baseAngle + fov / 2) * Math.PI / 180);
	const pixelRange = range * tileWidth;

	getVisionConePoints.isInCone = (targetX, targetY) => {
		const pixelTargetX = (targetX + 0.5) * tileWidth;
		const pixelTargetY = (targetY + 0.5) * tileHeight;
		const dx = pixelTargetX - pixelSourceX;
		const dy = pixelTargetY - pixelSourceY;
		const distance = Math.sqrt(dx * dx + dy * dy);
		if (distance > pixelRange) return false;
		let pointAngle = Math.atan2(dy, dx);
		if (pointAngle < 0) pointAngle += Math.PI * 2;
		let normalizedStartAngle = startAngle;
		if (normalizedStartAngle < 0) normalizedStartAngle += Math.PI * 2;
		let normalizedEndAngle = endAngle;
		if (normalizedEndAngle < 0) normalizedEndAngle += Math.PI * 2;
		if (normalizedStartAngle > normalizedEndAngle) {
			return pointAngle >= normalizedStartAngle || pointAngle <= normalizedEndAngle;
		} else {
			return pointAngle >= normalizedStartAngle && pointAngle <= normalizedEndAngle;
		}
	};

	const points = [];
	points.push({
		x: pixelSourceX,
		y: pixelSourceY
	});
	const segments = 32;
	for (let i = 0; i <= segments; i++) {
		const currentAngle = startAngle + (endAngle - startAngle) * (i / segments);
		const x = pixelSourceX + Math.cos(currentAngle) * pixelRange;
		const y = pixelSourceY + Math.sin(currentAngle) * pixelRange;
		points.push({
			x: x,
			y: y
		});
	}

	return points;
};

window.hasLineOfSight = function (x0, y0, x1, y1, blockRegion) {
	if (blockRegion <= 0) return true;

	let dx = Math.abs(x1 - x0);
	let dy = Math.abs(y1 - y0);
	let x = x0;
	let y = y0;
	let n = 1 + dx + dy;
	let x_inc = (x1 > x0) ? 1 : -1;
	let y_inc = (y1 > y0) ? 1 : -1;
	let error = dx - dy;
	dx *= 2;
	dy *= 2;

	for (; n > 0; --n) {
		if ($gameMap.regionId(x, y) === blockRegion) {
			return false;
		}
		if (error > 0) {
			x += x_inc;
			error -= dy;
		} else {
			y += y_inc;
			error += dx;
		}
	}
	return true;
};

Game_System.prototype.checkInRange = function (source, range, target, eyes = 0, blockRegion = 0, exception = null) {
	let sourceX, sourceY, sourceDirection;
	let sourceEvent;

	if (source === 'player') {
		sourceX = $gamePlayer.x;
		sourceY = $gamePlayer.y;
		sourceDirection = $gamePlayer.direction();
		sourceEvent = $gamePlayer;
	} else {
		sourceEvent = findTarget(source, this);
		if (!sourceEvent) return false;
		sourceX = sourceEvent.x;
		sourceY = sourceEvent.y;
		sourceDirection = sourceEvent.direction();
	}

	if (sourceEvent) {
		if (!sourceEvent._lastCheckRange) sourceEvent._lastCheckRange = {};
		sourceEvent._lastCheckRange.range = range;
		sourceEvent._lastCheckRange.eyes = eyes;
		sourceEvent._lastCheckRange.blockRegion = blockRegion;
	}

	// Case 1: Player
	if (target === "player") {
		const dx = Math.abs($gameMap.deltaX(sourceX, $gamePlayer.x));
		const dy = Math.abs($gameMap.deltaY(sourceY, $gamePlayer.y));
		if (dx > range || dy > range) return false;
		const distance = Math.sqrt(dx * dx + dy * dy);
		if (distance > range) return false;
		if (blockRegion > 0 && !window.hasLineOfSight(sourceX, sourceY, $gamePlayer.x, $gamePlayer.y, blockRegion))
			return false;
		if (eyes && eyes > 0) {
			getVisionConePoints(sourceX, sourceY, sourceDirection, range, eyes || 360);
			if (!getVisionConePoints.isInCone($gamePlayer.x, $gamePlayer.y)) return false;
		}
		sourceEvent._detectedEvent = $gamePlayer;
		return true;
	}
	// Case 2: This event
	else if (target === 'this') {
		const event = $gameMap.event(this._eventId);
		if (!event) return false;
		const dx = Math.abs($gameMap.deltaX(sourceX, event.x));
		const dy = Math.abs($gameMap.deltaY(sourceY, event.y));
		if (dx > range || dy > range) return false;
		const distance = Math.sqrt(dx * dx + dy * dy);
		if (distance > range) return false;
		if (blockRegion > 0 && !window.hasLineOfSight(sourceX, sourceY, event.x, event.y, blockRegion))
			return false;
		if (!eyes || eyes === 0) return true;

		getVisionConePoints(sourceX, sourceY, sourceDirection, range, eyes || 360);
		return getVisionConePoints.isInCone(event.x, event.y);
	}
	else if (target === 'passable') {
		const srcPoint = sourceEvent?.centerPositionPoint
			? sourceEvent.centerPositionPoint()
			: { x: sourceX + 0.5, y: sourceY + 0.5 };

		const searchStartX = Math.max(0, Math.floor(srcPoint.x - range));
		const searchEndX = Math.min($gameMap.width() - 1, Math.ceil(srcPoint.x + range));
		const searchStartY = Math.max(0, Math.floor(srcPoint.y - range));
		const searchEndY = Math.min($gameMap.height() - 1, Math.ceil(srcPoint.y + range));

		for (let x = searchStartX; x <= searchEndX; x++) {
			for (let y = searchStartY; y <= searchEndY; y++) {
				if (!$gameMap.isValid(x, y)) continue;

				if (!SisTilePassableH(x, y)) continue;

				const tileCenterX = x + 0.5;
				const tileCenterY = y + 0.5;
				const dx = $gameMap.deltaX(tileCenterX, srcPoint.x);
				const dy = $gameMap.deltaY(tileCenterY, srcPoint.y);
				const distance = Math.sqrt(dx * dx + dy * dy);
				if (range > 0 && distance > range) continue;

				if (blockRegion > 0 && !window.hasLineOfSight(sourceX, sourceY, x, y, blockRegion))
					continue;

				if (eyes && eyes > 0) {
					getVisionConePoints(sourceX, sourceY, sourceDirection, range, eyes);
					if (!getVisionConePoints.isInCone(x, y)) continue;
				}

				return true;
			}
		}

		return false;
	}
	// Case 3: Region
	else if (typeof target === 'string' && target.startsWith('region ')) {
		const regionId = parseInt(target.split(' ')[1]);
		if (isNaN(regionId)) return false;

		const searchStartX = Math.max(0, sourceX - range);
		const searchEndX = Math.min($gameMap.width() - 1, sourceX + range);
		const searchStartY = Math.max(0, sourceY - range);
		const searchEndY = Math.min($gameMap.height() - 1, sourceY + range);

		for (let x = searchStartX; x <= searchEndX; x++) {
			for (let y = searchStartY; y <= searchEndY; y++) {
				if ($gameMap.regionId(x, y) !== regionId) continue;

				const dx = Math.abs(sourceX - x);
				const dy = Math.abs(sourceY - y);
				if (dx > range || dy > range) continue;

				const distance = Math.sqrt(dx * dx + dy * dy);
				if (distance > range) continue;

				if (blockRegion > 0 && !window.hasLineOfSight(sourceX, sourceY, x, y, blockRegion))
					continue;

				if (eyes && eyes > 0) {
					getVisionConePoints(sourceX, sourceY, sourceDirection, range, eyes);
					if (!getVisionConePoints.isInCone(x, y)) continue;
				}

				return true;
			}
		}

		return false;
	}
	// Case 3: Tagged events
	else {
		const taggedEvents = ($gameMap.tagToEvents?.get(target)) ||
			$gameMap.events().filter(event => event && event.event() && event.event().note.includes(target));

		let nearestEvent = null;
		let nearestDistance = Infinity;

		for (const otherEvent of taggedEvents) {
			// Prevent self-detection when source is this._eventId
			if (source === otherEvent.eventId()) {
				continue;
			}
			if (exception && otherEvent.event().note.includes(exception)) {
				const currentPage = otherEvent.page();
				const hasAttackNotetag = currentPage && currentPage.list.some(command =>
					command.code === 108 && command.parameters[0].includes('<detectable>')
				);

				if (!hasAttackNotetag) continue;
			}

			const dx = Math.abs($gameMap.deltaX(sourceX, otherEvent.x));
			const dy = Math.abs($gameMap.deltaY(sourceY, otherEvent.y));
			if (dx > range || dy > range) continue;

			const distance = Math.sqrt(dx * dx + dy * dy);
			if (distance > range) continue;

			if (blockRegion > 0 && !window.hasLineOfSight(sourceX, sourceY, otherEvent.x, otherEvent.y, blockRegion))
				continue;

			if (eyes && eyes > 0) {
				getVisionConePoints(sourceX, sourceY, sourceDirection, range, eyes || 360);
				if (!getVisionConePoints.isInCone(otherEvent.x, otherEvent.y)) continue;
			}

			if (distance < nearestDistance) {
				nearestDistance = distance;
				nearestEvent = otherEvent;
			}
		}

		if (nearestEvent) {
			sourceEvent._detectedEvent = nearestEvent;
			return true;
		}

		return false;
	}
};

Game_System.prototype.isTargetInRangeAndVisible = function (sourceX, sourceY, sourceDirection, targetX, targetY, range, eyes) {
	const dx = Math.abs(targetX - sourceX);
	const dy = Math.abs(targetY - sourceY);
	if (dx > range || dy > range) return false;
	const distance = Math.sqrt(dx * dx + dy * dy);
	if (distance > range) return false;
	if (eyes) {
		switch (sourceDirection) {
			case 2:
				return targetY >= sourceY;
			case 4:
				return targetX <= sourceX;
			case 6:
				return targetX >= sourceX;
			case 8:
				return targetY <= sourceY;
		}
	}
	return true;
};

// Movement -------------------------------------------------------

Game_System.prototype.moveAroundEvent = function (eventId, notetag, maxDistance, minDistance) {
	const event = $gameMap.event(eventId);
	if (!event) return;

	let targetX = $gamePlayer.x;
	let targetY = $gamePlayer.y;

	if (notetag !== 'player') {
		const closestEvent = findNearestTarget(notetag, event.x, event.y);
		if (!closestEvent) return;
		targetX = closestEvent.x;
		targetY = closestEvent.y;
	}

	let newX, newY, distanceToNew;

	do {
		const angle = Math.random() * 2 * Math.PI;
		newX = targetX + Math.round(maxDistance * Math.cos(angle));
		newY = targetY + Math.round(maxDistance * Math.sin(angle));
		distanceToNew = Math.sqrt(Math.pow(newX - targetX, 2) + Math.pow(newY - targetY, 2));
	} while (distanceToNew < minDistance || (newX === targetX && newY === targetY) || (newX === event.x && newY === event.y));

	const horz = newX > event.x ? 6 : newX < event.x ? 4 : 0;
	const vert = newY > event.y ? 2 : newY < event.y ? 8 : 0;

	if (horz && vert) {
		event.moveDiagonally(horz, vert);
	} else if (horz) {
		event.moveStraight(horz);
	} else if (vert) {
		event.moveStraight(vert);
	}
};

Game_Character.prototype.shareDirection = function (target) {
	if (target === 'playerLockedTarget') {
		const playerTarget = $gamePlayer.getLockedTarget();
		if (!playerTarget) return;
		this.setDirection(playerTarget.direction());
		return;
	}

	if (target === 'eventLockedTarget') {
		const eventTarget = this.getLockedTarget();
		if (!eventTarget) return;
		this.setDirection(eventTarget.direction());
		return;
	}

	const targetChar = findNearestTarget(target, this.x, this.y);
	if (targetChar) {
		this.setDirection(targetChar.direction());
	}
};

// TELEPORT -------------------------------------------------------------------

Game_Character.prototype.isValidPosition = function (x, y) {
	if (x < 0 || y < 0 || x >= $gameMap.width() || y >= $gameMap.height()) {
		return false;
	}

	return $gameMap.isPassable(x, y, 2) && $gameMap.isPassable(x, y, 4) &&
		$gameMap.isPassable(x, y, 6) && $gameMap.isPassable(x, y, 8);
};

Game_Character.prototype.findNearestValidPosition = function (startX, startY) {
	if (this.isValidPosition(startX, startY)) {
		return { x: startX, y: startY };
	}

	for (let radius = 1; radius < Math.max($gameMap.width(), $gameMap.height()); radius++) {
		for (let dx = -radius; dx <= radius; dx++) {
			for (let dy = -radius; dy <= radius; dy++) {
				const newX = startX + dx;
				const newY = startY + dy;
				if (this.isValidPosition(newX, newY)) {
					return { x: newX, y: newY };
				}
			}
		}
	}
	return null;
};

Game_Character.prototype.teleportTo = function (notetag, minDistance = null, maxDistance = null) {
	const isValidForTeleport = (x, y, forbiddenTiles) => {
		if (x < 0 || y < 0 || x >= $gameMap.width() || y >= $gameMap.height()) {
			return false;
		}

		if (!forbiddenTiles) {
			return $gameMap.isPassable(x, y, 2) && $gameMap.isPassable(x, y, 4) &&
				$gameMap.isPassable(x, y, 6) && $gameMap.isPassable(x, y, 8);
		}

		const tilesetRanges = forbiddenTiles.split(' ').map(letter => {
			return {
				'A1': [[2048, 2815]],
				'A2': [[2816, 4351]],
				'A3': [[4352, 5887]],
				'A4': [[5888, 8191]],
				'A5': [[1536, 1663]],
				'B': [[0, 255]],
				'C': [[256, 511]],
				'D': [[512, 767]],
				'E': [[768, 1023]]
			}[letter];
		}).filter(range => range);

		const tiles = $gameMap.allTiles(x, y);
		const flags = $gameMap.tilesetFlags();

		return !tiles.some(tileId => {
			return tilesetRanges.some(ranges => {
				return ranges.some(([min, max]) =>
					tileId >= min && tileId <= max && (flags[tileId] & 0x0f)
				);
			});
		});
	};

	if (notetag === 'forward' && typeof minDistance === 'number') {
		let dx = 0;
		let dy = 0;

		if (this === $gamePlayer) {
			if (typeof $virtualStickController !== 'undefined' && $virtualStickController &&
				typeof $virtualStickController.deg === 'function' && $virtualStickController.deg() != null) {
				// Virtual stick
				let degree = $virtualStickController.deg();
				this.setDirection(this.convertAngleToDirection(degree));
				let rad = (degree - 90) * Math.PI / 180;
				dx = Math.sign(Math.cos(rad));
				dy = Math.sign(Math.sin(rad)) * -1;
				if (dx === 0 && dy === 0) return;

			} else {
				// Keyboard
				const isUp = Input.isPressed('up');
				const isDown = Input.isPressed('down');
				const isLeft = Input.isPressed('left');
				const isRight = Input.isPressed('right');

				if (isUp && isRight) {
					dx = 1; dy = -1;
					this.setDirection(6);
				} else if (isUp && isLeft) {
					dx = -1; dy = -1;
					this.setDirection(4);
				} else if (isDown && isRight) {
					dx = 1; dy = 1;
					this.setDirection(6);
				} else if (isDown && isLeft) {
					dx = -1; dy = 1;
					this.setDirection(4);
				} else if (isUp) {
					dy = -1;
					this.setDirection(8);
				} else if (isDown) {
					dy = 1;
					this.setDirection(2);
				} else if (isLeft) {
					dx = -1;
					this.setDirection(4);
				} else if (isRight) {
					dx = 1;
					this.setDirection(6);
				} else {
					switch (this.direction()) {
						case 8: dy = -1; break;
						case 2: dy = 1; break;
						case 4: dx = -1; break;
						case 6: dx = 1; break;
					}
				}
			}
		} else {
			switch (this.direction()) {
				case 8: dy = -1; break;
				case 2: dy = 1; break;
				case 4: dx = -1; break;
				case 6: dx = 1; break;
			}
		}

		if (dx !== 0 || dy !== 0) {
			let validX = this.x;
			let validY = this.y;

			for (let i = 1; i <= minDistance; i++) {
				const nextX = this.x + (dx * i);
				const nextY = this.y + (dy * i);

				if (isValidForTeleport(nextX, nextY, maxDistance)) {
					validX = nextX;
					validY = nextY;
				} else {
					break;
				}
			}

			if (validX !== this.x || validY !== this.y) {
				this.setPosition(validX, validY);
			}
		}
		return;
	}

	if (notetag === 'playerLockedTarget') {
		const playerTarget = $gamePlayer.getLockedTarget();
		if (!playerTarget) return;
		const validPos = this.findNearestValidPosition(playerTarget.x, playerTarget.y);
		if (validPos) {
			this.setPosition(validPos.x, validPos.y);
		}
		return;
	}

	if (notetag === 'eventLockedTarget') {
		const eventTarget = this.getLockedTarget();
		if (!eventTarget) return;
		const validPos = this.findNearestValidPosition(eventTarget.x, eventTarget.y);
		if (validPos) {
			this.setPosition(validPos.x, validPos.y);
		}
		return;
	}

	if (typeof notetag === 'number' && typeof minDistance === 'number') {
		const validPos = this.findNearestValidPosition(notetag, minDistance);
		if (validPos) {
			this.setPosition(validPos.x, validPos.y);
		}
		return;
	}

	if (minDistance === null && maxDistance === null) {
		const target = findTarget(notetag);
		if (target && this.isValidPosition(target.x, target.y)) {
			this.setPosition(target.x, target.y);
		}
		return;
	}

	let targetX = $gamePlayer.x;
	let targetY = $gamePlayer.y;

	if (notetag !== 'player') {
		const closestEvent = findNearestTarget(notetag, this.x, this.y);
		if (!closestEvent) return;
		targetX = closestEvent.x;
		targetY = closestEvent.y;
	}

	let newX, newY;
	let attempts = 50;

	do {
		const angle = Math.random() * 2 * Math.PI;
		const distance = minDistance + Math.random() * (maxDistance - minDistance);
		newX = Math.round(targetX + distance * Math.cos(angle));
		newY = Math.round(targetY + distance * Math.sin(angle));
		attempts--;
	} while (!this.isValidPosition(newX, newY) && attempts > 0);

	if (this.isValidPosition(newX, newY)) {
		this.setPosition(newX, newY);
	}
};

// Same as move to Position but this one doesn't move using Dot Move System and support perfect pathfinding
Game_Character.prototype.moveToClosest = function (notetag, perfectPathfinding = false, waitTillFinish = false, exception = null) {
	const x1 = this.x;
	const y1 = this.y;
	let closestEvent = null;
	let minDistance = Infinity;

	if (notetag === 'playerLockedTarget') {
		const playerTarget = $gamePlayer.getLockedTarget();
		if (!playerTarget) return;
		closestEvent = playerTarget;
		minDistance = Math.sqrt(Math.pow(playerTarget.x - x1, 2) + Math.pow(playerTarget.y - y1, 2));
	} else if (notetag === 'eventLockedTarget') {
		const eventTarget = this.getLockedTarget();
		if (!eventTarget) return;
		closestEvent = eventTarget;
		minDistance = Math.sqrt(Math.pow(eventTarget.x - x1, 2) + Math.pow(eventTarget.y - y1, 2));
	} else if (notetag === 'detected event' || notetag === 'detected target') {
		const detected = this._detectedEvent;
		if (!detected) return;
		closestEvent = detected;
		minDistance = Math.sqrt(Math.pow(detected.x - x1, 2) + Math.pow(detected.y - y1, 2));
	} else {
		let targets = findTargets(notetag);
		if (exception) {
			targets = targets.filter(otherEvent => {
				const currentPage = otherEvent.page();
				const hasAttackNotetag = currentPage && currentPage.list.some(command =>
					command.code === 108 && command.parameters[0].includes('<ignore>')
				);
				return !(otherEvent.event().note.includes(exception) && !hasAttackNotetag);
			});
		}

		closestEvent = findNearestTarget(notetag, this.x, this.y);
		if (closestEvent) {
			minDistance = Math.sqrt(Math.pow(closestEvent.x - x1, 2) + Math.pow(closestEvent.y - y1, 2));
		}
	}

	if (closestEvent) {
		if (waitTillFinish) {
			const dx = Math.abs($gameMap.deltaX(closestEvent.x, this.x));
			const dy = Math.abs($gameMap.deltaY(closestEvent.y, this.y));
			const steps = Math.max(dx, dy);

			const route = {
				list: [],
				repeat: this._moveRoute ? this._moveRoute.repeat : false,
				skippable: this._moveRoute ? this._moveRoute.skippable : true,
				wait: this._moveRoute ? this._moveRoute.wait : true
			};

			for (let i = 0; i < steps; i++) {
				route.list.push({
					code: 45,
					parameters: [`this.moveToClosest('${notetag}', ${perfectPathfinding})`]
				});
			}
			route.list.push({ code: 0 });

			this._moveRoute = route;
			this._moveRouteIndex = 0;
			this._moveRouteForcing = true;
		} else {
			if (perfectPathfinding) {
				const d = this.findDirectionTo(closestEvent.x, closestEvent.y);
				if (d === 0) return;

				let horz = 0;
				let vert = 0;

				switch (d) {
					case 1: horz = 4; vert = 2; break;
					case 2: vert = 2; break;
					case 3: horz = 6; vert = 2; break;
					case 4: horz = 4; break;
					case 6: horz = 6; break;
					case 7: horz = 4; vert = 8; break;
					case 8: vert = 8; break;
					case 9: horz = 6; vert = 8; break;
				}

				if (horz !== 0) {
					this.setDirection(horz);
				} else {
					this.setDirection(vert);
				}

				if (horz !== 0 && vert !== 0) {
					this.moveDiagonally(horz, vert);
				} else {
					this.moveStraight(d);
				}
			} else {
				const horz = closestEvent.x > this.x ? 6 : closestEvent.x < this.x ? 4 : 0;
				const vert = closestEvent.y > this.y ? 2 : closestEvent.y < this.y ? 8 : 0;
				if (horz && vert) {
					this.moveDiagonally(horz, vert);
				} else if (horz) {
					this.moveStraight(horz);
				} else if (vert) {
					this.moveStraight(vert);
				}
			}
		}
	}
};

// A versatile move feature. Can move to anywhere or any notetag using Dot Move System (pixel movement)
Game_Character.prototype.moveToPosition = function (targetX, targetY, rotate = false) {
	if (typeof targetY === 'boolean') {
		rotate = targetY;
		targetY = undefined;
	}

	if (targetX === 'playerLockedTarget') {
		const playerTarget = $gamePlayer.getLockedTarget();
		if (!playerTarget) return;
		if (rotate) {
			const startPoint = this.positionPoint();
			const targetPoint = this.positionPoint();
			targetPoint.x = playerTarget.x;
			targetPoint.y = playerTarget.y;
			const deg = startPoint.calcDeg(targetPoint).value;
			this.setRotation(deg);
		}
		this.moveToTargetSingleStep(playerTarget.x, playerTarget.y);
		return;
	}

	if (targetX === 'eventLockedTarget') {
		const eventTarget = this.getLockedTarget();
		if (!eventTarget) return;
		if (rotate) {
			const startPoint = this.positionPoint();
			const targetPoint = this.positionPoint();
			targetPoint.x = eventTarget.x;
			targetPoint.y = eventTarget.y;
			const deg = startPoint.calcDeg(targetPoint).value;
			this.setRotation(deg);
		}
		this.moveToTargetSingleStep(eventTarget.x, eventTarget.y);
		return;
	}

	// Case X: Comment search case
	if (typeof targetX === 'string' && targetX.startsWith('comment:')) {
		const searchComment = targetX.slice(8).trim();
		let closestEvent = null;
		let minDistance = Infinity;

		$gameMap.events().forEach(event => {
			if (!event || !event.page()) return;
			const hasComment = event.list().some(command =>
				(command.code === 108 || command.code === 408) &&
				command.parameters[0].includes(searchComment)
			);

			if (hasComment) {
				const distance = Math.sqrt(
					Math.pow(event.x - this.x, 2) +
					Math.pow(event.y - this.y, 2)
				);
				if (distance < minDistance) {
					minDistance = distance;
					closestEvent = event;
				}
			}
		});

		if (closestEvent) {
			if (rotate) {
				const startPoint = this.positionPoint();
				const targetPoint = this.positionPoint();
				targetPoint.x = closestEvent.x;
				targetPoint.y = closestEvent.y;
				const deg = startPoint.calcDeg(targetPoint).value;
				this.setRotation(deg);
			}
			this.moveToTargetContinous(closestEvent.x, closestEvent.y);
			return;
		}
		return;
	}

	if (targetX === 'mouse or gamepad') {
		const stickInput = checkGamepadInput();

		if (stickInput || checkGamepad()) {
			if (stickInput) {
				const angle = Math.atan2(stickInput.x, -stickInput.y);
				let degrees = (angle * 180 / Math.PI);
				degrees = (degrees + 360) % 360;

				if (rotate) {
					this.setOriginPoint('center');
					this.setCustomRotation(false);
					this.customRotationPoint = true;
					this.setRotation(degrees);
				}

				this.dotMoveByDeg(degrees);
			}
		} else {
			// cursor when no gamepad is connected
			const cursorX = $gameMap.canvasToMapX(TouchInput.x);
			const cursorY = $gameMap.canvasToMapY(TouchInput.y);

			const startPoint = this.positionPoint();
			const targetPoint = this.positionPoint();
			targetPoint.x = cursorX;
			targetPoint.y = cursorY;

			const targetDeg = startPoint.calcDeg(targetPoint).value;

			if (rotate) {
				this.setOriginPoint('center');
				this.setCustomRotation(false);
				this.customRotationPoint = true;
				this.setRotation(targetDeg);
			}

			const dx = targetPoint.x - startPoint.x;
			const dy = targetPoint.y - startPoint.y;
			const distance = Math.sqrt(dx * dx + dy * dy);

			if (distance > 1) {
				this.dotMoveByDeg(targetDeg);
			}
		}
		return;
	}

	// Case 2: Move forward in current rotation direction
	if (targetX === 'forward' && (targetY === 'tile' || typeof targetY === 'number')) {
		const currentRotation = this._rotation || 0;
		const deg = new DotMoveSystem.Degree(currentRotation);
		const tiles = typeof targetY === 'number' ? targetY : 1;
		this.mover().startContinuousMove(tiles, deg);
		return;
	}
	if (targetX === 'forward') {
		const currentRotation = this._rotation || 0;
		this.dotMoveByDeg(currentRotation);
		return;
	}

	// Case 3: Move to player
	if (targetX === 'player' && targetY === undefined) {
		if (rotate) {
			const startPoint = this.positionPoint();
			const targetPoint = $gamePlayer.positionPoint();
			const deg = startPoint.calcDeg(targetPoint).value;
			this.setRotation(deg);
		}
		const playerPos = $gamePlayer.positionPoint();
		this.moveToTargetSingleStep(playerPos.x, playerPos.y);
		return;
	}

	// Case 3.5: Move to a player cordination
	if (typeof targetX === 'string' && targetX.includes('player') &&
		typeof targetY === 'string' && targetY?.includes('player')) {

		const finalX = eval(targetX.replace('player', $gamePlayer.centerPositionPoint().x - 0.5));
		const finalY = eval(targetY.replace('player', $gamePlayer.centerPositionPoint().y - 0.5));

		if (rotate) {
			const startPoint = this.positionPoint();
			const targetPoint = this.positionPoint();
			targetPoint.x = finalX;
			targetPoint.y = finalY;
			const deg = startPoint.calcDeg(targetPoint).value;
			this.setRotation(deg);
		}

		this.moveToTargetContinous(finalX, finalY);
		return;
	}

	// Case 3.6: Move to detected event from checkRange
	if (targetX === 'detected event' || targetX === 'detected target') {
		const detected = this._detectedEvent;
		if (!detected) return;
		if (rotate) {
			const startPoint = this.positionPoint();
			const targetPoint = detected.positionPoint();
			const deg = startPoint.calcDeg(targetPoint).value;
			this.setRotation(deg);
		}
		const targetPos = detected.positionPoint();
		this.moveToTargetContinous(targetPos.x, targetPos.y);
		return;
	}

	// Case 4: Move to event with notetag
	if (typeof targetX === 'string' && targetX !== 'mouse or gamepad' && targetX !== 'player') {
		const closestEvent = findNearestTarget(targetX, this.x, this.y);
		if (closestEvent) {
			if (rotate) {
				const startPoint = this.positionPoint();
				const targetPoint = closestEvent.positionPoint();
				const deg = startPoint.calcDeg(targetPoint).value;
				this.setRotation(deg);
			}
			const targetPos = closestEvent.positionPoint();
			this.moveToTargetContinous(targetPos.x, targetPos.y);
		}
		return;
	}

	// Case 5: Coordinate-based movement
	if (typeof targetX === 'number' && typeof targetY === 'number') {
		if (rotate) {
			const startPoint = this.positionPoint();
			const targetPoint = this.positionPoint();
			targetPoint.x = targetX;
			targetPoint.y = targetY;
			const deg = startPoint.calcDeg(targetPoint).value;
			this.setRotation(deg);
		}
		this.moveToTargetContinous(targetX, targetY);
		return;
	}
};

Game_Event.prototype.setupLockRotation = function () {
	if (this.page()) {
		const lockRotationComment = this.list().find(command =>
			(command.code === 108 || command.code === 408) &&
			command.parameters[0].match(/<lock rotation sprite>/i)
		);
		this._lockSpriteRotation = !!lockRotationComment;
	} else {
		this._lockSpriteRotation = false;
	}
};

Game_Character.prototype.rotateTo = function (x, y, lerpFrames) {
	if (x === 'playerLockedTarget') {
		const frames = typeof y === 'number' ? y : lerpFrames;
		const playerTarget = $gamePlayer.getLockedTarget();
		if (!playerTarget) return;
		x = playerTarget.x;
		y = playerTarget.y;
		lerpFrames = frames;
	}

	if (x === 'eventLockedTarget') {
		const frames = typeof y === 'number' ? y : lerpFrames;
		const eventTarget = this.getLockedTarget();
		if (!eventTarget) return;
		x = eventTarget.x;
		y = eventTarget.y;
		lerpFrames = frames;
	}

	if (x === 'mouse or gamepad') {
		if (H_DotMoveSystem) {
			const stickInput = checkGamepadInput();
			if (stickInput || checkGamepad()) {
				if (stickInput) {
					const angle = Math.atan2(stickInput.x, -stickInput.y);
					let degrees = (angle * 180 / Math.PI);
					degrees = (degrees + 360) % 360;
					this.setOriginPoint(y || 'center');
					this.setCustomRotation(false);
					this.customRotationPoint = true;
					this._applyRotation(degrees, lerpFrames);
				}
			} else {
				const characterScreenX = this.screenX();
				const characterScreenY = this.screenY();
				const dx = TouchInput.x - characterScreenX;
				const dy = TouchInput.y - characterScreenY;
				const radians = Math.atan2(dy, dx);
				let degrees = (radians * 180 / Math.PI + 90) % 360;
				if (degrees < 0) degrees += 360;
				this.setOriginPoint(y || 'center');
				this.setCustomRotation(false);
				this.customRotationPoint = true;
				this._applyRotation(degrees, lerpFrames);
			}
			return;
		}
	}

	// Case: rotateTo('left joystick') - Rotate to left joystick direction only
	if (x === 'left joystick') {
		if (H_DotMoveSystem) {
			this.setOriginPoint(y || 'center');
			this.setCustomRotation(false);
			this.customRotationPoint = true;
			if (navigator.getGamepads && navigator.getGamepads()[0]) {
				const gamepad = navigator.getGamepads()[0];
				const leftStickX = gamepad.axes[0];
				const leftStickY = gamepad.axes[1];
				const power = Math.sqrt(leftStickX * leftStickX + leftStickY * leftStickY);
				if (power > 0.1) {
					const rad = Math.atan2(leftStickX, -leftStickY);
					let degree = rad * 180 / Math.PI;
					if (degree < 0) degree += 360;
					this._applyRotation(degree, lerpFrames);
					return;
				}
			}
			if (typeof $virtualStickController !== 'undefined' && $virtualStickController &&
				typeof $virtualStickController.deg === 'function' && $virtualStickController.deg() != null) {
				let degree = $virtualStickController.deg();
				if (degree !== null) {
					this._applyRotation(degree, lerpFrames);
					return;
				}
			}
		}
		return;
	}

	// Case: rotateTo('player moving direction') - Rotate to player's movement direction
	if (x === 'player moving direction') {
		if (H_DotMoveSystem) {
			this.setOriginPoint(y || 'center');
			this.setCustomRotation(false);
			this.customRotationPoint = true;
			if (typeof Input !== 'undefined' && Input.leftStick && navigator.getGamepads && navigator.getGamepads()[0]) {
				const [rad, power] = Input.leftStick;
				if (power > 0.1) {
					const degree = AnalogStickUtils.rad2deg(rad);
					const direction = this.convertAngleToDirection(degree);
					this.setDirection(direction);
					this._applyRotation(degree, lerpFrames);
					return;
				}
			}
			if (typeof $virtualStickController !== 'undefined' && $virtualStickController &&
				typeof $virtualStickController.deg === 'function' && $virtualStickController.deg() != null) {
				let degree = $virtualStickController.deg();
				if (degree !== null) {
					const direction = this.convertAngleToDirection(degree);
					this.setDirection(direction);
					this._applyRotation(degree, lerpFrames);
					return;
				}
			}
			const isUp = Input.isPressed('up');
			const isDown = Input.isPressed('down');
			const isLeft = Input.isPressed('left');
			const isRight = Input.isPressed('right');
			if (isUp || isDown || isLeft || isRight) {
				let degree = 0;
				if (isUp && isRight) degree = 45;
				else if (isUp && isLeft) degree = 315;
				else if (isDown && isRight) degree = 135;
				else if (isDown && isLeft) degree = 225;
				else if (isUp) degree = 0;
				else if (isRight) degree = 90;
				else if (isDown) degree = 180;
				else if (isLeft) degree = 270;
				let direction = this.convertAngleToDirection(degree);
				if (Imported.Hendrix_Animation_Solution && this.is8DirSprite && this.is8DirSprite()) {
					this.setDirection(direction);
				} else {
					if (degree >= 315 || degree < 45) this.setDirection(8);
					else if (degree >= 45 && degree < 135) this.setDirection(6);
					else if (degree >= 135 && degree < 225) this.setDirection(2);
					else this.setDirection(4);
				}
				this._applyRotation(degree, lerpFrames);
			}
			return;
		} else {
			const isUp = Input.isPressed('up');
			const isDown = Input.isPressed('down');
			const isLeft = Input.isPressed('left');
			const isRight = Input.isPressed('right');
			if (isUp || isDown || isLeft || isRight) {
				let direction = 0;
				let degree = 0;
				if (isUp && isRight) { direction = 9; degree = 45; }
				else if (isUp && isLeft) { direction = 7; degree = 315; }
				else if (isDown && isRight) { direction = 3; degree = 135; }
				else if (isDown && isLeft) { direction = 1; degree = 225; }
				else if (isUp) { direction = 8; degree = 0; }
				else if (isDown) { direction = 2; degree = 180; }
				else if (isLeft) { direction = 4; degree = 270; }
				else if (isRight) { direction = 6; degree = 90; }
				this.setDirection(direction);
				this._applyRotation(degree, lerpFrames);
			}
			return;
		}
	}

	// Case 1: rotateTo(x, y, lerpFrames)
	if (typeof x === 'number' && typeof y === 'number') {
		if (H_DotMoveSystem) {
			this.setOriginPoint('center');
			this.setCustomRotation(false);
			this.customRotationPoint = true;
			const startPoint = this.positionPoint();
			const targetPoint = this.positionPoint();
			targetPoint.x = x;
			targetPoint.y = y;
			const deg = startPoint.calcDeg(targetPoint).value;
			this._applyRotation(deg, lerpFrames);
		}
		return;
	}

	// Case 2: rotateTo(degree, null, lerpFrames)
	if (typeof x === 'number' && (y === undefined || y === null)) {
		this.setOriginPoint('center');
		this.setCustomRotation(false);
		this.customRotationPoint = true;
		this._applyRotation(x, lerpFrames);
		return;
	}

	// Case 3: rotateTo(notetag, range, lerpFrames) - Rotate to nearest notetag within range
	if (typeof x === 'string' && x !== 'player' && x !== 'mouse or gamepad') {
		const closestEvent = findNearestTarget(x, this.x, this.y, y);
		if (closestEvent) {
			if (H_DotMoveSystem) {
				this.setOriginPoint('center');
				this.setCustomRotation(false);
				this.customRotationPoint = true;
				const startPoint = this.positionPoint();
				const targetPoint = closestEvent.positionPoint();
				const deg = startPoint.calcDeg(targetPoint).value;
				this._applyRotation(deg, lerpFrames);
			}
		}
		return;
	}

	// Case 4: rotateTo('player', lerpFrames)
	if (x === 'player') {
		const frames = typeof y === 'number' ? y : lerpFrames;
		if (H_DotMoveSystem) {
			this.setOriginPoint('center');
			this.setCustomRotation(false);
			this.customRotationPoint = true;
			const startPoint = this.positionPoint();
			const targetPoint = $gamePlayer.positionPoint();
			const deg = startPoint.calcDeg(targetPoint).value;
			this._applyRotation(deg, frames);
		}
		return;
	}
};

Game_Character.prototype.turnToward = function (target, forceDirection = false, maxDistance = null) {
	const originalDirectionFix = this.isDirectionFixed();
	if (forceDirection && originalDirectionFix) {
		this.setDirectionFix(false);
	}

	if (target === 'playerLockedTarget') {
		const playerTarget = $gamePlayer.getLockedTarget();
		if (!playerTarget) {
			if (forceDirection) this.setDirectionFix(originalDirectionFix);
			return;
		}
		target = playerTarget.eventId();
	}

	if (target === 'eventLockedTarget') {
		const eventTarget = this.getLockedTarget();
		if (!eventTarget) {
			if (forceDirection) this.setDirectionFix(originalDirectionFix);
			return;
		}
		target = eventTarget.eventId();
	}

	if (target === 'mouse or gamepad') {
		const stickInput = checkGamepadInput();
		if (stickInput || checkGamepad()) {
			if (stickInput) {
				if (Math.abs(stickInput.x) > 0.1 || Math.abs(stickInput.y) > 0.1) {
					if (this.is8DirSprite && this.is8DirSprite()) {
						const angle = Math.atan2(stickInput.y, stickInput.x) * 180 / Math.PI;
						const normalizedAngle = (angle + 360) % 360;
						if (normalizedAngle >= 337.5 || normalizedAngle < 22.5) {
							this.setDirection(6);
						} else if (normalizedAngle >= 22.5 && normalizedAngle < 67.5) {
							this.setDirection(3);
						} else if (normalizedAngle >= 67.5 && normalizedAngle < 112.5) {
							this.setDirection(2);
						} else if (normalizedAngle >= 112.5 && normalizedAngle < 157.5) {
							this.setDirection(1);
						} else if (normalizedAngle >= 157.5 && normalizedAngle < 202.5) {
							this.setDirection(4);
						} else if (normalizedAngle >= 202.5 && normalizedAngle < 247.5) {
							this.setDirection(7);
						} else if (normalizedAngle >= 247.5 && normalizedAngle < 292.5) {
							this.setDirection(8);
						} else if (normalizedAngle >= 292.5 && normalizedAngle < 337.5) {
							this.setDirection(9);
						}
					} else if ((Math.abs(stickInput.x) > Math.abs(stickInput.y))) {
						this.setDirection(stickInput.x > 0 ? 6 : 4);
					} else {
						this.setDirection(stickInput.y > 0 ? 2 : 8);
					}
				}
			}
		} else {
			// cursor when no gamepad
			const cursorX = $gameMap.canvasToMapX(TouchInput.x);
			const cursorY = $gameMap.canvasToMapY(TouchInput.y);

			if (maxDistance) {
				const distance = Math.sqrt(
					Math.pow(cursorX - this.x, 2) +
					Math.pow(cursorY - this.y, 2)
				);
				if (distance > maxDistance) {
					if (forceDirection) {
						this.setDirectionFix(originalDirectionFix);
					}
					return;
				}
			}

			const dx = cursorX - this.x;
			const dy = cursorY - this.y;

			if (this.is8DirSprite && this.is8DirSprite()) {
				const angle = Math.atan2(dy, dx) * 180 / Math.PI;
				const normalizedAngle = (angle + 360) % 360;

				if (normalizedAngle >= 337.5 || normalizedAngle < 22.5) {
					this.setDirection(6);
				} else if (normalizedAngle >= 22.5 && normalizedAngle < 67.5) {
					this.setDirection(3);
				} else if (normalizedAngle >= 67.5 && normalizedAngle < 112.5) {
					this.setDirection(2);
				} else if (normalizedAngle >= 112.5 && normalizedAngle < 157.5) {
					this.setDirection(1);
				} else if (normalizedAngle >= 157.5 && normalizedAngle < 202.5) {
					this.setDirection(4);
				} else if (normalizedAngle >= 202.5 && normalizedAngle < 247.5) {
					this.setDirection(7);
				} else if (normalizedAngle >= 247.5 && normalizedAngle < 292.5) {
					this.setDirection(8);
				} else if (normalizedAngle >= 292.5 && normalizedAngle < 337.5) {
					this.setDirection(9);
				}
			} else {
				if (Math.abs(dx) > Math.abs(dy)) {
					this.setDirection(dx > 0 ? 6 : 4);
				} else {
					this.setDirection(dy > 0 ? 2 : 8);
				}
			}
		}
	} // Event ID
	else if (!isNaN(target)) {
		const eventId = Number(target);
		const event = $gameMap.event(eventId);
		if (event) {
			const distance = Math.sqrt(
				Math.pow(event.x - this.x, 2) +
				Math.pow(event.y - this.y, 2)
			);
			if (!maxDistance || distance <= maxDistance) {
				const dx = event.x - this.x;
				const dy = event.y - this.y;

				if (this.is8DirSprite && this.is8DirSprite()) {
					if (dx > 0) {
						if (dy < 0) this.setDirection(9);
						else if (dy > 0) this.setDirection(3);
						else this.setDirection(6);
					} else if (dx < 0) {
						if (dy < 0) this.setDirection(7);
						else if (dy > 0) this.setDirection(1);
						else this.setDirection(4);
					} else {
						if (dy < 0) this.setDirection(8);
						else if (dy > 0) this.setDirection(2);
					}
				} else {
					if (Math.abs(dx) > Math.abs(dy)) {
						this.setDirection(dx > 0 ? 6 : 4);
					} else {
						this.setDirection(dy > 0 ? 2 : 8);
					}
				}
			}
		}
	}
	// Notetag
	else {
		const closestEvent = findNearestTarget(target, this.x, this.y, maxDistance);

		if (closestEvent) {
			const dx = closestEvent.x - this.x;
			const dy = closestEvent.y - this.y;

			if (this.is8DirSprite && this.is8DirSprite()) {
				if (dx > 0) {
					if (dy < 0) this.setDirection(9);
					else if (dy > 0) this.setDirection(3);
					else this.setDirection(6);
				} else if (dx < 0) {
					if (dy < 0) this.setDirection(7);
					else if (dy > 0) this.setDirection(1);
					else this.setDirection(4);
				} else {
					if (dy < 0) this.setDirection(8);
					else if (dy > 0) this.setDirection(2);
				}
			} else {
				if (Math.abs(dx) > Math.abs(dy)) {
					this.setDirection(dx > 0 ? 6 : 4);
				} else {
					this.setDirection(dy > 0 ? 2 : 8);
				}
			}
		}
	}

	if (forceDirection) {
		this.setDirectionFix(true);
	}
	else if (originalDirectionFix) {
		this.setDirectionFix(true);
	}
};

window.SspawnTurnTorwardH = function (character, turnTowardArg, spawnerEventId) {
	if (!turnTowardArg) return;
	const value = turnTowardArg.trim();
	if (!value) return;
	const lower = value.toLowerCase();

	if (/^[1-8]$/.test(value)) {
		character.setDirection(Number(value));
		return;
	}

	if (lower.startsWith('same as ')) {
		const shareTarget = value.slice(8).trim();
		if (shareTarget.toLowerCase() === 'this') {
			const spawnerEvent = $gameMap.event(spawnerEventId);
			if (spawnerEvent) character.setDirection(spawnerEvent.direction());
		} else {
			character.shareDirection(shareTarget);
		}
		return;
	}

	if (lower === 'this') {
		if (spawnerEventId) character.turnToward(spawnerEventId);
		return;
	}

	if (findNearestTarget(value, character.x, character.y)) {
		character.turnToward(value);
		return;
	}

	try {
		if (!isNaN(eval(value))) {
			character.setDirection(Number(eval(value)));
		}
	} catch (e) { }
};

Game_Character.prototype.sucking = function (notetag, range, speedBoost = 4.5) {
	if (notetag === 'player') {
		const dx = $gamePlayer.x - this.x;
		const dy = $gamePlayer.y - this.y;

		if (Math.abs(dx) <= range && Math.abs(dy) <= range) {
			const distanceSquared = dx * dx + dy * dy;
			if (distanceSquared <= range * range) {
				const d4 = dx > 0 ? 4 : 6;
				const d8 = dy > 0 ? 8 : 2;

				if (dx !== 0 && dy !== 0) {
					$gamePlayer.moveDiagonally(d4, d8);
				} else if (dx !== 0) {
					$gamePlayer.moveStraight(d4);
				} else if (dy !== 0) {
					$gamePlayer.moveStraight(d8);
				}
			}
		}
		return;
	}

	const events = notetag === 'all' ? $gameMap.events() : findTargets(notetag);

	for (let i = 0; i < events.length; i++) {
		const event = events[i];
		const dx = event.x - this.x;
		const dy = event.y - this.y;

		if (Math.abs(dx) > range || Math.abs(dy) > range) continue;

		const distanceSquared = dx * dx + dy * dy;
		if (distanceSquared <= range * range) {
			const baseSpeed = event.moveSpeed();
			let speedMultiplier = 1;
			if (baseSpeed === 1) speedMultiplier = 4;
			else if (baseSpeed === 2) speedMultiplier = 3;
			else if (baseSpeed === 3) speedMultiplier = 2;

			const extraMoves = Math.floor((speedBoost * speedMultiplier) / 2);

			for (let j = 0; j <= extraMoves; j++) {
				const d4 = dx > 0 ? 4 : 6;
				const d8 = dy > 0 ? 8 : 2;

				if (dx !== 0 && dy !== 0) {
					event.moveDiagonally(d4, d8);
				} else if (dx !== 0) {
					event.moveStraight(d4);
				} else if (dy !== 0) {
					event.moveStraight(d8);
				}
			}
		}
	}
};

Game_Character.prototype.jumpToNearby = function (maxDistance, jumpOnOtherEvent = false) {
	let passableTiles = [];
	for (let dx = -maxDistance; dx <= maxDistance; dx++) {
		for (let dy = -maxDistance; dy <= maxDistance; dy++) {
			const newX = this.x + dx;
			const newY = this.y + dy;

			if ($gameMap.isValid(newX, newY) && $gameMap.isPassable(newX, newY, 5)) {
				const isTileOccupied = $gameMap.eventsXy(newX, newY).length > 0;
				if (jumpOnOtherEvent || !isTileOccupied) {
					passableTiles.push({ x: newX, y: newY });
				}
			}
		}
	}

	if (passableTiles.length > 0) {
		const randomTile = passableTiles[Math.floor(Math.random() * passableTiles.length)];
		const jumpX = randomTile.x - this.x;
		const jumpY = randomTile.y - this.y;
		this.jump(jumpX, jumpY);
	}
};

Game_Character.prototype.jumpTo = function (x, y) {
	const isBlockedTile = (tileX, tileY) => {
		if (!$gameMap.isValid(tileX, tileY)) return true;

		const tiles = $gameMap.allTiles(tileX, tileY);
		const isA3A4Tile = tiles.some(tileId =>
			(tileId >= 4352 && tileId <= 5887) || (tileId >= 5888 && tileId <= 8191)
		);

		// Basically disallow to jump to tile A3A4 ONLY if character's current position isn't A3 A4
		const currentTiles = $gameMap.allTiles(this.x, this.y);
		const isCurrentlyOnA3A4 = currentTiles.some(tileId =>
			(tileId >= 4352 && tileId <= 5887) || (tileId >= 5888 && tileId <= 8191)
		);

		if (isA3A4Tile && !isCurrentlyOnA3A4) {
			return true;
		}

		if (this.isThrough()) {
			return !$gameMap.checkPassage(tileX, tileY, 0x0f);
		}

		if (!$gameMap.isPassable(tileX, tileY, 2) ||
			!$gameMap.isPassable(tileX, tileY, 4) ||
			!$gameMap.isPassable(tileX, tileY, 6) ||
			!$gameMap.isPassable(tileX, tileY, 8)) {
			return true;
		}

		const eventsAtTile = $gameMap.eventsXy(tileX, tileY);
		return eventsAtTile.some(event =>
			event._priorityType === 1 &&
			!event.isThrough() &&
			!event.event().note.includes('<pass>')
		);
	};

	const findNearestJumpablePosition = (targetX, targetY) => {
		if (!isBlockedTile(targetX, targetY)) {
			return { x: targetX, y: targetY };
		}

		for (let radius = 1; radius <= 5; radius++) {
			const positions = [];

			for (let dx = -radius; dx <= radius; dx++) {
				positions.push({ x: targetX + dx, y: targetY - radius });
				positions.push({ x: targetX + dx, y: targetY + radius });
			}
			for (let dy = -radius + 1; dy <= radius - 1; dy++) {
				positions.push({ x: targetX - radius, y: targetY + dy });
				positions.push({ x: targetX + radius, y: targetY + dy });
			}
			positions.sort((a, b) => {
				const distA = Math.abs($gameMap.deltaX(a.x, targetX)) + Math.abs($gameMap.deltaY(a.y, targetY));
				const distB = Math.abs($gameMap.deltaX(b.x, targetX)) + Math.abs($gameMap.deltaY(b.y, targetY));
				return distA - distB;
			});
			for (const pos of positions) {
				if ($gameMap.isValid(pos.x, pos.y) && !isBlockedTile(pos.x, pos.y)) {
					return pos;
				}
			}
		}

		return { x: targetX, y: targetY };
	};

	// Case 0: jump to locked target
	if (x === 'playerLockedTarget') {
		const playerTarget = $gamePlayer.getLockedTarget();
		if (!playerTarget) return;
		x = playerTarget.x;
		y = playerTarget.y;
	}
	if (x === 'eventLockedTarget') {
		const eventTarget = this.getLockedTarget();
		if (!eventTarget) return;
		x = eventTarget.x;
		y = eventTarget.y;
	}

	// Case 0.1: jump to cursor position
	if (x === 'cursor') {
		const tileWidth = $gameMap.tileWidth();
		const tileHeight = $gameMap.tileHeight();

		const targetRealX = $gameMap.displayX() + (TouchInput.x / tileWidth) - 0.5;
		const targetRealY = $gameMap.displayY() + (TouchInput.y / tileHeight) - 0.5;

		let xDist = targetRealX - this._realX;
		let yDist = targetRealY - this._realY;

		const maxDistance = (typeof y === 'number') ? y : null;
		if (maxDistance !== null) {
			const distance = Math.sqrt(xDist * xDist + yDist * yDist);
			if (distance > maxDistance) {
				const scale = maxDistance / distance;
				xDist = xDist * scale;
				yDist = yDist * scale;
			}
		}

		this._jumpTargetX = this._realX + xDist;
		this._jumpTargetY = this._realY + yDist;

		this.jump(xDist, yDist);
		return;
	}

	// Case 0.2: jumpTo('right stick', distance)
	if (x === 'right stick' && typeof y === 'number') {
		const stickInput = checkGamepadInput();

		if (stickInput) {
			const angle = Math.atan2(stickInput.y, stickInput.x);
			const degrees = (angle * 180 / Math.PI + 360) % 360;

			const distance = y;
			const radians = (degrees * Math.PI) / 180;
			const jumpX = Math.round(Math.cos(radians) * distance);
			const jumpY = Math.round(Math.sin(radians) * distance);

			const targetX = this.x + jumpX;
			const targetY = this.y + jumpY;
			const jumpPos = findNearestJumpablePosition(targetX, targetY);

			const adjustedJumpX = jumpPos.x - this.x;
			const adjustedJumpY = jumpPos.y - this.y;

			this.jump(adjustedJumpX, adjustedJumpY);
		}
		return;
	}

	// Case 0.3: jumpTo('player moving direction', distance)
	if (x === 'player moving direction' && typeof y === 'number') {
		let degree = null;
		let hasActiveInput = false;

		if (!playerMovementDisabled && typeof Input !== 'undefined' && Input.leftStick && navigator.getGamepads && navigator.getGamepads()[0]) {
			const [rad, power] = Input.leftStick;
			if (power > 0.1) {
				hasActiveInput = true;
				degree = AnalogStickUtils.rad2deg(rad);
			}
		}

		if (!hasActiveInput && typeof $virtualStickController !== 'undefined' && $virtualStickController &&
			typeof $virtualStickController.deg === 'function' && $virtualStickController.deg() != null) {
			const virtualDeg = $virtualStickController.deg();
			if (virtualDeg !== null) {
				hasActiveInput = true;
				degree = virtualDeg;
			}
		}

		if (!hasActiveInput) {
			const isUp = Input.isPressed('up');
			const isDown = Input.isPressed('down');
			const isLeft = Input.isPressed('left');
			const isRight = Input.isPressed('right');

			if (isUp || isDown || isLeft || isRight) {
				hasActiveInput = true;

				if (isUp && isRight) degree = 45;
				else if (isUp && isLeft) degree = 315;
				else if (isDown && isRight) degree = 135;
				else if (isDown && isLeft) degree = 225;
				else if (isUp) degree = 0;
				else if (isRight) degree = 90;
				else if (isDown) degree = 180;
				else if (isLeft) degree = 270;
			}
		}

		if (hasActiveInput && degree !== null) {
			const distance = y;
			const radians = ((degree - 90) * Math.PI) / 180;
			const jumpX = Math.round(Math.cos(radians) * distance);
			const jumpY = Math.round(Math.sin(radians) * distance);

			const targetX = this.x + jumpX;
			const targetY = this.y + jumpY;
			const jumpPos = findNearestJumpablePosition(targetX, targetY);

			const adjustedJumpX = jumpPos.x - this.x;
			const adjustedJumpY = jumpPos.y - this.y;

			this.jump(adjustedJumpX, adjustedJumpY);
		}
		return;
	}

	// Case 1: jumpTo(eventId)
	if (typeof x === 'number' && y === undefined) {
		const targetEvent = $gameMap.event(x);
		if (targetEvent) {
			const targetX = targetEvent.x;
			const targetY = targetEvent.y;
			const jumpPos = findNearestJumpablePosition(targetX, targetY);

			const xDist = jumpPos.x - this.x;
			const yDist = jumpPos.y - this.y;
			this.jump(xDist, yDist);
		}
		return;
	}

	// Case 2: jumpTo(x, y)
	if (typeof x === 'number' && typeof y === 'number') {
		if (x >= 0 && x < $gameMap.width() && y >= 0 && y < $gameMap.height()) {
			const jumpPos = findNearestJumpablePosition(x, y);

			const xDist = jumpPos.x - this.x;
			const yDist = jumpPos.y - this.y;
			this.jump(xDist, yDist);
		}
		return;
	}

	// Case 3: jumpTo('player')
	if (x === 'player') {
		const targetX = $gamePlayer.x;
		const targetY = $gamePlayer.y;
		const jumpPos = findNearestJumpablePosition(targetX, targetY);

		let xDist = jumpPos.x - this.x;
		let yDist = jumpPos.y - this.y;
		if (typeof y === 'number') {
			const distance = Math.sqrt(xDist * xDist + yDist * yDist);
			if (distance > y) {
				const scale = y / distance;
				const limitedXDist = Math.round(xDist * scale);
				const limitedYDist = Math.round(yDist * scale);
				this.jump(limitedXDist, limitedYDist);
				return;
			}
		}

		this.jump(xDist, yDist);
		return;
	}

	// Case 4: jumpTo('forward'/'backward'/'away', distance)
	if ((x === 'forward' || x === 'backward' || x === 'away') && typeof y === 'number') {
		const direction = this.direction();
		let jumpX = 0;
		let jumpY = 0;

		if (x === 'away') {
			const playerX = $gamePlayer.x;
			const playerY = $gamePlayer.y;
			const deltaX = $gameMap.deltaX(this.x, playerX);
			const deltaY = $gameMap.deltaY(this.y, playerY);

			if (Math.abs(deltaX) > Math.abs(deltaY)) {
				jumpX = deltaX > 0 ? y : -y;
			} else {
				jumpY = deltaY > 0 ? y : -y;
			}

			const newDirection = Math.abs(deltaX) > Math.abs(deltaY)
				? (deltaX > 0 ? 4 : 6)
				: (deltaY > 0 ? 8 : 2);
			this.setDirection(newDirection);
		} else {
			switch (direction) {
				case 2:
					jumpY = x === 'forward' ? y : -y;
					break;
				case 4:
					jumpX = x === 'forward' ? -y : y;
					break;
				case 6:
					jumpX = x === 'forward' ? y : -y;
					break;
				case 8:
					jumpY = x === 'forward' ? -y : y;
					break;
			}
		}

		const targetX = this.x + jumpX;
		const targetY = this.y + jumpY;
		const jumpPos = findNearestJumpablePosition(targetX, targetY);
		const adjustedJumpX = jumpPos.x - this.x;
		const adjustedJumpY = jumpPos.y - this.y;

		this.jump(adjustedJumpX, adjustedJumpY);
		this.setDirection(direction);
		return;
	}

	// Case 5: jumpTo('region X')
	if (typeof x === 'string' && x.match(/^region\s+(\d+)$/i)) {
		const regionMatch = x.match(/^region\s+(\d+)$/i);
		const regionId = parseInt(regionMatch[1]);

		let nearestRegionTile = null;
		let minDistance = Infinity;

		for (let mapX = 0; mapX < $gameMap.width(); mapX++) {
			for (let mapY = 0; mapY < $gameMap.height(); mapY++) {
				if ($gameMap.regionId(mapX, mapY) === regionId) {
					const distance = Math.sqrt(
						Math.pow(mapX - this.x, 2) +
						Math.pow(mapY - this.y, 2)
					);

					if (distance < minDistance) {
						minDistance = distance;
						nearestRegionTile = { x: mapX, y: mapY };
					}
				}
			}
		}

		if (nearestRegionTile) {
			const jumpPos = findNearestJumpablePosition(nearestRegionTile.x, nearestRegionTile.y);
			const xDist = jumpPos.x - this.x;
			const yDist = jumpPos.y - this.y;
			this.jump(xDist, yDist);
		}
		return;
	}

	// Case 5: jumpTo(notetag, range)
	if (typeof x === 'string' && (y === undefined || typeof y === 'number')) {
		const closestEvent = findNearestTarget(x, this.x, this.y, y);

		if (closestEvent) {
			const jumpPos = findNearestJumpablePosition(closestEvent.x, closestEvent.y);
			const xDist = jumpPos.x - this.x;
			const yDist = jumpPos.y - this.y;
			this.jump(xDist, yDist);
		}
		return;
	}
};


const _Game_CharacterBase_updateJump = Game_CharacterBase.prototype.updateJump;
Game_CharacterBase.prototype.updateJump = function () {
	_Game_CharacterBase_updateJump.call(this);
	if (!this.isJumping() && this._jumpTargetX !== undefined) {
		this._realX = this._jumpTargetX;
		this._realY = this._jumpTargetY;
		this._x = Math.floor(this._jumpTargetX);
		this._y = Math.floor(this._jumpTargetY);
		this._jumpTargetX = undefined;
		this._jumpTargetY = undefined;
	}
};

//============================================================
// HUD ELEMENTS
//============================================================

let HUDs = JSON.parse(Hparameters['HUDs'] || '[]').map(hud => {
	const parsed = JSON.parse(hud);
	if (parsed.additionalLayers) {
		parsed.additionalLayers = JSON.parse(parsed.additionalLayers || '[]').map(layer => JSON.parse(layer));
	}
	return parsed;
});

const HUDcustomFont = loadCustomFont(Hparameters['customFontFile']);

class HHUDSpriteSheetSprite extends Sprite {
	initialize(bitmap, row, column, fps) {
		super.initialize();
		this._row = Number(row) || 1;
		this._column = Number(column) || 1;
		this._fps = Number(fps) || 60;
		this._frameIndex = 0;
		this._maxFrame = this._row * this._column;
		this._frameDelay = Math.round(60 / this._fps);
		this._frameCount = 0;
		this._frameWidth = 0;
		this._frameHeight = 0;
		this._isReady = false;
		if (bitmap) {
			this.bitmap = bitmap;
			bitmap.addLoadListener(() => {
				this._frameWidth = Math.floor(bitmap.width / this._column);
				this._frameHeight = Math.floor(bitmap.height / this._row);
				this._isReady = true;
				this._updateFrame();
			});
		}
	}

	_updateFrame() {
		if (!this._isReady) return;

		const col = this._frameIndex % this._column;
		const row = Math.floor(this._frameIndex / this._column);

		const sx = col * this._frameWidth;
		const sy = row * this._frameHeight;

		this.setFrame(sx, sy, this._frameWidth, this._frameHeight);
	}
}

function SevaluatePositionH(expression) {
	if (typeof expression !== 'string') return Number(expression);
	let processedExpression = expression
		.replace(/\bplayer\.x\b/g, '$gamePlayer.screenX()')
		.replace(/\bplayer\.y\b/g, '$gamePlayer.screenY()');

	const result = eval(processedExpression);
	return result;
}

class Hendrix_HUD {
	constructor(hudData, index) {
		this.switchID = Number(hudData.switchID);
		this.index = index;
		this.useAs = hudData.useAs || 'variable';
		this.eventHpTag = hudData.eventHpTag || '';
		this.variableID = Number(hudData.variableID);
		this.maxVariableValue = Number(hudData.maxVariableValue);
		this.currentValue = this.getCurrentValue();
		this.displayValue = this.currentValue;
		const [width, height, x, y] = (hudData.sizeAndPosition || "100, 20, (Graphics.width-100)/2, (Graphics.height-20)/2")
			.split(',')
			.map(val => val.trim());

		this.width = Number(width);
		this.height = Number(height);
		this.xExpression = x;
		this.yExpression = y;
		this.lastValidPosition = null;
		this.originalX = this.evaluateX();
		this.originalY = this.evaluateY();

		if (window.$hudPositions && window.$hudPositions[index]) {
			this.x = window.$hudPositions[index].x;
			this.y = window.$hudPositions[index].y;
		} else {
			this.x = this.originalX;
			this.y = this.originalY;
		}

		this.frameImageBack = hudData.frameImageBack;
		this.frameImage = hudData.frameImage;
		this.barColor = hudData.barColor || '#ff0000';
		this.barImage = hudData.barImage;
		this._messageFadeOpacity = 255;
		this._previousMessageState = false;
		this._fadeDuration = 15;

		this.flashDuration = 0;
		this.flashIntensity = 0;
		this.flashWhenMax = hudData.flashWhenMax === 'true';
		this.barDirection = hudData.barDirection || 'leftToRight';

		this.additionalLayers = hudData.additionalLayers || [];
		this.additionalSprites = [];

		this.displayTextType = hudData.displayTextType || 'none';
		const fontSettings = hudData.fontSettings ? JSON.parse(hudData.fontSettings) : {};
		this.variableTextSize = Number(fontSettings.size) || 0;
		this.variableTextColor = fontSettings.color || '';
		this.variableTextOutline = fontSettings.outline !== 'false';
		this.variableTextOutlineColor = fontSettings.outlineColor || '';
		this.variableTextOffsetX = Number(fontSettings.offsetX) || 0;
		this.variableTextOffsetY = Number(fontSettings.offsetY) || 0;

		this._isDragging = false;
		this._dragOffsetX = 0;
		this._dragOffsetY = 0;
		this.originalX = this.x;
		this.originalY = this.y;

		this.createHUD();
		this.updateVisibility();
	}

	evaluateX() {
		return SevaluatePositionH(this.xExpression);
	}

	evaluateY() {
		return SevaluatePositionH(this.yExpression);
	}

	getCurrentValue() {
		switch (this.useAs) {
			case 'hp':
				return $gameParty.leader() ? $gameParty.leader().hp : 0;
			case 'mp':
				return $gameParty.leader() ? $gameParty.leader().mp : 0;
			case 'exp':
				return $gameParty.leader() ? $gameParty.leader().currentExp() - $gameParty.leader().currentLevelExp() : 0;
			case 'eventhp':
				let targetEvent = $gameMap.events().find(event =>
					event && event.event().note.includes(this.eventHpTag));
				return targetEvent ? $gameMap.getCurrentEventHp(targetEvent._eventId) : 0;
			default:
				return $gameVariables.value(this.variableID);
		}
	}

	getMaxValue() {
		switch (this.useAs) {
			case 'hp':
				return $gameParty.leader() ? $gameParty.leader().mhp : 1;
			case 'mp':
				return $gameParty.leader() ? $gameParty.leader().mmp : 1;
			case 'exp':
				return $gameParty.leader() ? $gameParty.leader().nextLevelExp() - $gameParty.leader().currentLevelExp() : 1;
			case 'eventhp':
				let targetEvent = $gameMap.events().find(event =>
					event && event.event().note.includes(this.eventHpTag));
				if (!targetEvent) return 1;
				const initialHp = targetEvent.getHpValueFromNote();
				return initialHp !== null ? initialHp : 1;
			default:
				return $gameVariables.value(this.maxVariableValue);
		}
	}

	usesDynamicPosition = function () {
		const xStr = String(this.xExpression);
		const yStr = String(this.yExpression);
		return xStr.includes('player') || yStr.includes('player') ||
			xStr.includes('$game') || yStr.includes('$game');
	};

	createHUD() {
		this.container = new PIXI.Container();
		this.container.x = this.x;
		this.container.y = this.y;
		SceneManager._scene.addChild(this.container);

		const frameBackSprite = new Sprite();
		frameBackSprite.bitmap = ImageManager.loadPicture(this.frameImageBack);
		frameBackSprite.anchor.x = 0.5;
		frameBackSprite.anchor.y = 0.5;
		this.container.addChild(frameBackSprite);
		this.frameBackSprite = frameBackSprite;

		const barBitmap = new Bitmap(this.width, this.height);
		const barSprite = new Sprite(barBitmap);
		barSprite.anchor.x = 0.5;
		barSprite.anchor.y = 0.5;
		this.container.addChild(barSprite);
		this.barSprite = barSprite;

		if (this.flashWhenMax) {
			const flashSprite = new Sprite(new Bitmap(this.width, this.height));
			flashSprite.anchor.x = 0.5;
			flashSprite.anchor.y = 0.5;
			flashSprite.blendMode = PIXI.BLEND_MODES.ADD;
			this.container.addChild(flashSprite);
			this.flashSprite = flashSprite;
		}

		const frameSprite = new Sprite();
		frameSprite.bitmap = ImageManager.loadPicture(this.frameImage);
		frameSprite.anchor.x = 0.5;
		frameSprite.anchor.y = 0.5;
		this.container.addChild(frameSprite);
		this.frameSprite = frameSprite;

		if (this.additionalLayers.length > 0) {
			this.createAdditionalLayers();
		}

		if (this.displayTextType !== 'none') {
			const textSprite = new Sprite(new Bitmap(this.width, this.height));
			textSprite.anchor.x = 0.5;
			textSprite.anchor.y = 0.5;
			textSprite.x = this.variableTextOffsetX;
			textSprite.y = this.variableTextOffsetY;
			this.container.addChild(textSprite);
			this.textSprite = textSprite;
		}

		const borderThickness = 2;
		const borderColor = '#00ff00';
		const borderBitmap = new Bitmap(this.width, this.height);
		borderBitmap.fillRect(0, 0, this.width, borderThickness, borderColor);
		borderBitmap.fillRect(0, this.height - borderThickness, this.width, borderThickness, borderColor);
		borderBitmap.fillRect(0, 0, borderThickness, this.height, borderColor);
		borderBitmap.fillRect(this.width - borderThickness, 0, borderThickness, this.height, borderColor);

		const borderSprite = new Sprite(borderBitmap);
		borderSprite.anchor.x = 0.5;
		borderSprite.anchor.y = 0.5;
		borderSprite.visible = false;
		this.container.addChild(borderSprite);
		this.dragBorderSprite = borderSprite;
	}

	createAdditionalLayers() {
		this.additionalSprites = [];

		for (const layerData of this.additionalLayers) {
			if (!layerData || !layerData.image) continue;

			const row = Number(layerData.row || 0);
			const column = Number(layerData.column || 0);
			const fps = Number(layerData.fps || 60);
			const isSpritesheetAnimation = row > 0 && column > 0;

			const bitmap = ImageManager.loadPicture(layerData.image);

			let sprite;
			if (isSpritesheetAnimation) {
				sprite = new HHUDSpriteSheetSprite();
				sprite.initialize(bitmap, row, column, fps);
			} else {
				sprite = new Sprite();
				sprite.bitmap = bitmap;
			}

			sprite.anchor.x = 0.5;
			sprite.anchor.y = 0.5;
			sprite.layerData = layerData;

			sprite._isDragging = false;
			sprite._dragOffsetX = 0;
			sprite._dragOffsetY = 0;
			sprite._originalXOffset = Number(layerData.xOffset) || 0;
			sprite._originalYOffset = Number(layerData.yOffset) || 0;

			sprite._canDragAndDrop = layerData.dragAndDrop === 'true' || layerData.dragAndDrop === true;

			if (window.$hudPositions &&
				window.$hudPositions.additionalLayers &&
				window.$hudPositions.additionalLayers[this.index + '_' + layerData.image]) {
				const savedPos = window.$hudPositions.additionalLayers[`${this.index}_${layerData.image}`];
				layerData.xOffset = savedPos.xOffset;
				layerData.yOffset = savedPos.yOffset;
			}

			this.container.addChild(sprite);
			this.additionalSprites.push(sprite);
		}

		this.updateAdditionalLayerPositions();
	}

	updateAdditionalLayerPositions() {
		for (const sprite of this.additionalSprites) {
			if (!sprite || !sprite.layerData) continue;

			const xOffset = isNaN(sprite.layerData.xOffset) ?
				eval(sprite.layerData.xOffset) :
				Number(sprite.layerData.xOffset);

			const yOffset = isNaN(sprite.layerData.yOffset) ?
				eval(sprite.layerData.yOffset) :
				Number(sprite.layerData.yOffset);

			sprite.x = xOffset;
			sprite.y = yOffset;
		}
	}

	isPlayerBehind = function () {
		if (!smartHUDVisibility) return false;
		if (!this._cachedPlayerSprite) {
			this._cachedPlayerSprite = SceneManager._scene._spriteset._characterSprites.find(
				sprite => sprite._character === $gamePlayer
			);
		}
		const playerSprite = this._cachedPlayerSprite;
		if (!playerSprite) return false;
		const playerWidth = playerSprite.patternWidth ? playerSprite.patternWidth() : $gameMap.tileWidth();
		const playerHeight = playerSprite.patternHeight ? playerSprite.patternHeight() : $gameMap.tileHeight();

		const playerScreenX = $gamePlayer.screenX();
		const playerScreenY = $gamePlayer.screenY();

		const playerLeft = playerScreenX - playerWidth / 2;
		const playerRight = playerScreenX + playerWidth / 2;
		const playerTop = playerScreenY - playerHeight;
		const playerBottom = playerScreenY;

		const hudLeft = this.container.x - this.width / 2;
		const hudRight = hudLeft + this.width;
		const hudTop = this.container.y - this.height / 2;
		const hudBottom = hudTop + this.height;

		return (
			playerRight > hudLeft &&
			playerLeft < hudRight &&
			playerBottom > hudTop &&
			playerTop < hudBottom
		);
	};

	updateVisibility() {
		if (this.switchID > 0) {
			const isVisible = $gameSwitches.value(this.switchID);
			this.container.visible = isVisible;
		}
	}

	updatePosition(visibleHUDs) {
		if (SceneManager._scene._isVarBarDragMode ||
			(window.$hudPositions && window.$hudPositions[this.index])) return;

		const newX = this.evaluateX();
		const newY = this.evaluateY();

		if (newX !== 0 || newY !== 0 || !this.lastValidPosition) {
			this.lastValidPosition = {
				x: newX,
				y: newY
			};
		}

		this.originalX = newX;
		this.originalY = newY;

		let offset = 0;
		for (let i = 0; i < this.index; i++) {
			if (visibleHUDs[i] &&
				visibleHUDs[i].originalX === this.originalX &&
				visibleHUDs[i].originalY === this.originalY &&
				visibleHUDs[i].height === this.height) {
				offset += 20;
			}
		}

		this.x = this.originalX;
		this.y = this.originalY - offset;
		this.container.x = this.x;
		this.container.y = this.y;
	}

	updateDrag() {
		if (!SceneManager._scene._isVarBarDragMode ||
			!Utils.isOptionValid('test')) return;

		if (!this._isDragging) {
			for (const sprite of this.additionalSprites) {
				if (!sprite._isDragging && sprite._canDragAndDrop && TouchInput.isTriggered()) {
					const touchX = TouchInput.x;
					const touchY = TouchInput.y;
					const width = sprite._frameWidth || sprite.width;
					const height = sprite._frameHeight || sprite.height;

					const rect = new Rectangle(
						this.container.x + sprite.x - width / 2,
						this.container.y + sprite.y - height / 2,
						width,
						height
					);

					if (touchX >= rect.x && touchX <= rect.x + rect.width &&
						touchY >= rect.y && touchY <= rect.y + rect.height) {
						sprite._isDragging = true;
						sprite._dragOffsetX = sprite.x - (touchX - this.container.x);
						sprite._dragOffsetY = sprite.y - (touchY - this.container.y);
						return;
					}
				}
			}
		}

		if (!this._isDragging && TouchInput.isTriggered()) {
			const touchX = TouchInput.x;
			const touchY = TouchInput.y;
			const rect = new Rectangle(
				this.container.x - this.width / 2,
				this.container.y - this.height / 2,
				this.width,
				this.height
			);

			if (touchX >= rect.x && touchX <= rect.x + rect.width &&
				touchY >= rect.y && touchY <= rect.y + rect.height) {
				this._isDragging = true;
				this._dragOffsetX = this.container.x - touchX;
				this._dragOffsetY = this.container.y - touchY;
			}
		}

		if (this._isDragging) {
			if (TouchInput.isPressed()) {
				this.container.x = TouchInput.x + this._dragOffsetX;
				this.container.y = TouchInput.y + this._dragOffsetY;

				this.container.x = Math.max(this.width / 2, Math.min(Graphics.width - this.width / 2, this.container.x));
				this.container.y = Math.max(this.height / 2, Math.min(Graphics.height - this.height / 2, this.container.y));

				this.x = this.container.x;
				this.y = this.container.y;
			} else {
				this._isDragging = false;
				window.$hudPositions = window.$hudPositions || {};
				window.$hudPositions[this.index] = {
					x: this.x,
					y: this.y
				};
				MaithlSaveUIPositions(window.$hudPositions);
			}
		}

		for (const sprite of this.additionalSprites) {
			if (sprite._isDragging && sprite._canDragAndDrop) {
				if (TouchInput.isPressed()) {
					sprite.x = TouchInput.x - this.container.x + sprite._dragOffsetX;
					sprite.y = TouchInput.y - this.container.y + sprite._dragOffsetY;

					sprite.layerData.xOffset = sprite.x;
					sprite.layerData.yOffset = sprite.y;
				} else {
					sprite._isDragging = false;
					window.$hudPositions = window.$hudPositions || {
						additionalLayers: {}
					};
					if (!window.$hudPositions.additionalLayers) {
						window.$hudPositions.additionalLayers = {};
					}

					window.$hudPositions.additionalLayers[`${this.index}_${sprite.layerData.image}`] = {
						xOffset: sprite.x,
						yOffset: sprite.y
					};
					MaithlSaveUIPositions(window.$hudPositions);
				}
			}
		}
	}

	getDisplayText() {
		switch (this.displayTextType) {
			case 'none':
				return '';
			case 'variable':
				return `${Math.round(this.displayValue)}`;
			case 'variableMax':
				return `${Math.round(this.displayValue)}/${this.getMaxValue()}`;
			case 'playerHp':
				const leader = $gameParty.leader();
				return leader ? `${leader.hp}` : '0';
			case 'playerHpMax':
				const leaderHp = $gameParty.leader();
				return leaderHp ? `${leaderHp.hp}/${leaderHp.mhp}` : '0/0';
			case 'playerMp':
				const leaderMp = $gameParty.leader();
				return leaderMp ? `${leaderMp.mp}` : '0';
			case 'playerMpMax':
				const leaderMpMax = $gameParty.leader();
				return leaderMpMax ? `${leaderMpMax.mp}/${leaderMpMax.mmp}` : '0/0';
			case 'playerExp':
				const leaderExp = $gameParty.leader();
				return leaderExp ? `${leaderExp.currentExp() - leaderExp.currentLevelExp()}` : '0';
			case 'playerExpMax':
				const leaderExpMax = $gameParty.leader();
				return leaderExpMax ? `${leaderExpMax.currentExp() - leaderExpMax.currentLevelExp()}/${leaderExpMax.nextLevelExp() - leaderExpMax.currentLevelExp()}` : '0/0';
			case 'eventHp':
				let targetEvent = $gameMap.events().find(event =>
					event && event.event().note.includes(this.eventHpTag));
				const eventHp = targetEvent ? $gameMap.getCurrentEventHp(targetEvent._eventId) : 0;
				return `${eventHp}`;
			case 'eventHpMax':
				let targetEventMax = $gameMap.events().find(event =>
					event && event.event().note.includes(this.eventHpTag));
				if (!targetEventMax) return '0/0';
				const currentEventHp = $gameMap.getCurrentEventHp(targetEventMax._eventId) || 0;
				const maxEventHp = targetEventMax.getHpValueFromNote() || 1;
				return `${currentEventHp}/${maxEventHp}`;
			default:
				return `${Math.round(this.displayValue)}/${this.getMaxValue()}`;
		}
	}

	updateText() {
		if (!this.textSprite || this.displayTextType === 'none') return;

		const text = this.getDisplayText();
		if (text === this._lastDisplayText) return;
		this._lastDisplayText = text;

		const bitmap = this.textSprite.bitmap;
		bitmap.clear();
		bitmap.smooth = false;

		if (HUDcustomFont) {
			bitmap.fontFace = HUDcustomFont;
		}
		if (this.variableTextSize > 0) {
			bitmap.fontSize = this.variableTextSize;
		}
		if (this.variableTextColor) {
			bitmap.textColor = this.variableTextColor;
		}
		if (this.variableTextOutline) {
			bitmap.outlineWidth = 4;
			if (this.variableTextOutlineColor) {
				bitmap.outlineColor = this.variableTextOutlineColor;
			}
		}

		bitmap.drawText(text, 0, 0, this.width, this.height, 'center');
	}

	updateHUD() {
		this.updateAdditionalLayerPositions();
		for (const sprite of this.additionalSprites) {
			if (!(sprite instanceof HHUDSpriteSheetSprite) || !sprite._isReady) continue;

			sprite._frameCount++;
			if (sprite._frameCount >= sprite._frameDelay) {
				sprite._frameCount = 0;
				sprite._frameIndex = (sprite._frameIndex + 1) % sprite._maxFrame;
				sprite._updateFrame();
			}
		}
		let prevValue = this.currentValue;
		this.currentValue = Math.min(
			this.getCurrentValue(),
			this.getMaxValue()
		);
		this.displayValue = this.interpolate(this.displayValue, this.currentValue, 0.3);
		let barWidth = (this.width * this.displayValue) / this.getMaxValue();

		if (Math.abs(barWidth - (this._lastBarWidth || 0)) > 0.1) {
			this._lastBarWidth = barWidth;
			this.barSprite.bitmap.clear();

			if (this.barImage && barWidth > 0) {
				let img = ImageManager.loadPicture(this.barImage);
				if (this.barDirection === 'rightToLeft') {
					const xOffset = this.width - barWidth;
					this.barSprite.bitmap.blt(img, img.width - barWidth, 0, barWidth, img.height, xOffset, 0, barWidth, this.height);
				} else {
					this.barSprite.bitmap.blt(img, 0, 0, img.width, img.height, 0, 0, barWidth, this.height);
				}
			} else {
				if (this.barDirection === 'rightToLeft') {
					const xOffset = this.width - barWidth;
					this.barSprite.bitmap.fillRect(xOffset, 0, barWidth, this.height, this.barColor);
				} else {
					this.barSprite.bitmap.fillRect(0, 0, barWidth, this.height, this.barColor);
				}
			}
		}

		if (this.currentValue === this.getMaxValue() && prevValue !== this.currentValue) {
			this.startFlash();
		}
		this.updateFlash();
		this.updateVisibility();
		if (this.usesDynamicPosition()) {
			const newX = this.evaluateX();
			const newY = this.evaluateY();

			if (this.container.x !== newX || this.container.y !== newY) {
				this.container.x = newX;
				this.container.y = newY;
				this.x = newX;
				this.y = newY;
			}
		}
		if (hideHUDDuringMessages) {
			const isMessageVisible = $gameMessage.isBusy();
			if (this._previousMessageState !== isMessageVisible) {
				this._previousMessageState = isMessageVisible;
				if (!isMessageVisible && (this.switchID <= 0 || $gameSwitches.value(this.switchID))) {
					this.container.visible = true;
				}
			}
			const fadeStep = 255 / this._fadeDuration;

			if (isMessageVisible) {
				this._messageFadeOpacity -= fadeStep;
				if (this._messageFadeOpacity < 0) this._messageFadeOpacity = 0;
			} else {
				this._messageFadeOpacity += fadeStep;
				if (this._messageFadeOpacity > 255) this._messageFadeOpacity = 255;
			}
			if (this._messageFadeOpacity <= 0) {
				this.container.visible = false;
			}
		} else {
			this._messageFadeOpacity = 255;
		}
		if (this.container.visible) {
			const isBehindPlayer = this.isPlayerBehind();
			const messageFadeAlpha = this._messageFadeOpacity / 255;

			if (isBehindPlayer) {
				const targetAlpha = Math.min(0.3, messageFadeAlpha);
				this.container.alpha = Math.max(targetAlpha, this.container.alpha - 0.1);
			} else {
				this.container.alpha = Math.min(messageFadeAlpha, this.container.alpha + 0.1);
			}
		}
		if (this.displayTextType !== 'none') {
			this.updateText();
		}
	}

	interpolate(current, target, speed) {
		if (current < target) {
			return Math.min(current + speed * (target - current), target);
		} else {
			return Math.max(current - speed * (current - target), target);
		}
	}

	startFlash() {
		this.flashDuration = 10;
		this.flashIntensity = 180;
	}

	updateFlash() {
		if (this.flashWhenMax) {
			if (this.flashDuration > 0) {
				this.flashDuration--;
				this.flashIntensity = Math.floor((this.flashDuration / 15) * 255);

				this.flashSprite.bitmap.clear();
				this.flashSprite.bitmap.fillAll(`rgba(255, 255, 255, ${this.flashIntensity / 255})`);
				this._wasFlashing = true;
			} else {
				if (this._wasFlashing) {
					this.flashSprite.bitmap.clear();
					this._wasFlashing = false;
				}
			}
		}
	}
}

const _Scene_Map_createAllWindows = Scene_Map.prototype.createAllWindows;
Scene_Map.prototype.createAllWindows = function () {
	_Scene_Map_createAllWindows.call(this);
	this._isVarBarDragMode = false;
	this.createHuds();
};

function MaithlReadUIPositions() {
	if (Utils.isNwjs()) {
		const fs = require('fs');
		const path = require('path');
		const filePath = path.join(process.mainModule.filename, '..', 'js', 'variableBarPosition.json');
		if (fs.existsSync(filePath)) {
			try {
				const data = fs.readFileSync(filePath, 'utf8');
				return JSON.parse(data);
			} catch (e) {
				console.error('Error reading variableBarPosition.json:', e);
				return {
					additionalLayers: {}
				};
			}
		}
	}
	return {
		additionalLayers: {}
	};
}

function MaithlSaveUIPositions(positions) {
	if (Utils.isNwjs()) {
		const fs = require('fs');
		const path = require('path');
		const filePath = path.join(process.mainModule.filename, '..', 'js', 'variableBarPosition.json');
		fs.writeFileSync(filePath, JSON.stringify(positions, null, 2));
	}
}

function MaithlLoadPositionsFromFile() {
	if (!Utils.isNwjs()) {
		fetch('js/variableBarPosition.json')
			.then(response => response.json())
			.then(data => {
				window.$hudPositions = data;
				localStorage.setItem('HendrixVariableBarPositions', JSON.stringify(data));
				if (SceneManager._scene && SceneManager._scene._variableBars) {
					SceneManager._scene._variableBars.refresh();
				}
			})
			.catch(error => {
				window.$hudPositions = { additionalLayers: {} };
			});
	}
}

window.$hudPositions = MaithlReadUIPositions();
if (!Utils.isNwjs()) {
	setTimeout(MaithlLoadPositionsFromFile, 500);
}

Scene_Map.prototype.createHuds = function () {
	this.hendrixHuds = HUDs.map((hudData, index) => {
		const hud = new Hendrix_HUD(hudData, index);

		if (window.$hudPositions && window.$hudPositions[index]) {
			hud.x = window.$hudPositions[index].x;
			hud.y = window.$hudPositions[index].y;
			hud.container.x = hud.x;
			hud.container.y = hud.y;
		}

		return hud;
	});

	this.updateHudPositions();
};

Scene_Map.prototype.updateHudPositions = function () {
	const visibleHUDs = this.hendrixHuds.filter(hud => hud.container.visible);
	visibleHUDs.forEach(hud => hud.updatePosition(visibleHUDs));
};

Scene_Map.prototype.toggleHUDDragMode = function () {
	if (!Utils.isOptionValid('test')) return;

	this._isVarBarDragMode = !this._isVarBarDragMode;
	if (this.hendrixHuds) {
		this.hendrixHuds.forEach(hud => {
			if (hud.dragBorderSprite) {
				hud.dragBorderSprite.visible = this._isVarBarDragMode;
			}
		});
	}

	if (!this._isVarBarDragMode && this.hendrixHuds) {
		const positions = {};
		this.hendrixHuds.forEach(hud => {
			positions[hud.index] = {
				x: hud.x,
				y: hud.y
			};

			if (!positions.additionalLayers) positions.additionalLayers = {};
			hud.additionalSprites.forEach(sprite => {
				if (sprite.layerData) {
					positions.additionalLayers[`${hud.index}_${sprite.layerData.image}`] = {
						xOffset: sprite.x,
						yOffset: sprite.y
					};
				}
			});
		});
		window.$hudPositions = positions;
		MaithlSaveUIPositions(positions);
	}
};

Scene_Map.prototype.resetHUDPositions = function () {
	if (this.hendrixHuds) {
		this.hendrixHuds.forEach(hud => {
			const newX = hud.evaluateX();
			const newY = hud.evaluateY();

			hud.x = newX;
			hud.y = newY;
			hud.container.x = newX;
			hud.container.y = newY;

			hud.originalX = newX;
			hud.originalY = newY;

			hud.additionalSprites.forEach(sprite => {
				sprite.x = sprite._originalXOffset;
				sprite.y = sprite._originalYOffset;
				sprite.layerData.xOffset = sprite._originalXOffset;
				sprite.layerData.yOffset = sprite._originalYOffset;
			});
		});

		window.$hudPositions = {
			additionalLayers: {}
		};
		MaithlSaveUIPositions(window.$hudPositions);
	}
};

//============================================================
// DOT MOVE ADD-ON FEATURES
//============================================================

if (H_DotMoveSystem) {
	function settingPlayerCollisionRect(paramString) {
		const values = paramString.split(',').map(val => parseFloat(val.trim()));
		const width = values[0] || 1;
		const height = values[1] || 1;
		const userOffsetX = values[2] || 0;
		const userOffsetY = values[3] || 0;
		const autoCenterX = (width - 1) / 2;
		const autoCenterY = (height - 1) / 2;

		return {
			width: width,
			height: height,
			offsetX: autoCenterX - userOffsetX,
			offsetY: autoCenterY - userOffsetY
		};
	}

	const playerCollisionData = settingPlayerCollisionRect(playerCollisionRect);
	Game_Player.prototype.width = function () {
		return this._width == null ? playerCollisionData.width : this._width;
	};

	Game_Player.prototype.height = function () {
		return this._height == null ? playerCollisionData.height : this._height;
	};

	Game_Player.prototype.offsetX = function () {
		if (this._offsetX != null) return this._offsetX;
		if (this._width != null) {
			return (this._width - 1) / 2;
		}
		return playerCollisionData.offsetX;
	};

	Game_Player.prototype.offsetY = function () {
		if (this._offsetY != null) return this._offsetY;
		if (this._height != null) {
			return (this._height - 1) / 2;
		}
		return playerCollisionData.offsetY;
	};

	DotMoveSystem.CharacterDotMoveProcess.prototype.dotMoveByDeg = function (deg, dpf) {
		this._dpf = dpf;
		const distance = this.calcDistance(deg);
		const realPoint = this._character.positionPoint();

		if (this._character instanceof Game_Event) {
			const hasNoSlidingComment = this.checkNoSlidingComment();

			if (hasNoSlidingComment || !eventSliding) {
				const targetX = realPoint.x + distance.x;
				const targetY = realPoint.y + distance.y;

				let movedPoint = this.calcMovedPoint(deg.toDirection8(), distance);
				const canReachTarget = (Math.abs(movedPoint.x - targetX) < 0.01 && Math.abs(movedPoint.y - targetY) < 0.01);

				if (canReachTarget) {
					movedPoint.x = $gameMap.roundX(movedPoint.x);
					movedPoint.y = $gameMap.roundY(movedPoint.y);
					this._character.setPositionPoint(movedPoint);
					return true;
				} else {
					return false;
				}
			}
		}

		let movedPoint = this.calcMovedPoint(deg.toDirection8(), distance);
		const margin = dpf / DotMoveSystem.DotMoveUtils.MOVED_MARGIN_UNIT;
		let moved = !this.reachPoint(realPoint, movedPoint, margin);
		movedPoint.x = $gameMap.roundX(movedPoint.x);
		movedPoint.y = $gameMap.roundY(movedPoint.y);
		this._character.setPositionPoint(movedPoint);
		return moved;
	}

	DotMoveSystem.CharacterDotMoveProcess.prototype.checkNoSlidingComment = function () {
		if (!(this._character instanceof Game_Event)) { return false; }
		if (this._character._cachedNoSlidingComment !== undefined) { return this._character._cachedNoSlidingComment; }

		const page = this._character.page();
		if (!page) {
			this._character._cachedNoSlidingComment = false;
			return false;
		}

		const hasNoSlidingComment = page.list.some(command =>
			(command.code === 108 || command.code === 408) &&
			command.parameters[0].toLowerCase().includes('<no sliding>')
		);

		this._character._cachedNoSlidingComment = hasNoSlidingComment;
		return hasNoSlidingComment;
	};
}

Game_Character.prototype.dash = function (steps) {
	if (H_DotMoveSystem) {
		// Left stick
		if (typeof Input !== 'undefined' && Input.leftStick && navigator.getGamepads && navigator.getGamepads()[0]) {
			const [rad, power] = Input.leftStick;

			if (power > 0.1) {
				const degree = AnalogStickUtils.rad2deg(rad);
				const direction = this.convertAngleToDirection(degree);
				this.setDirection(direction);
				const distance = steps * this.distancePerFrame() * 3;
				const deg = new DotMoveSystemClassAlias.Degree(degree);
				this.mover().startContinuousMove(distance, deg);
				return;
			}
		}

		if (typeof $virtualStickController !== 'undefined' && $virtualStickController &&
			typeof $virtualStickController.deg === 'function' && $virtualStickController.deg() != null) {
			let degree = $virtualStickController.deg();
			const direction = this.convertAngleToDirection(degree);
			this.setDirection(direction);
			let rad = (degree - 90) * Math.PI / 180;
			let x = Math.cos(rad);
			let y = -Math.sin(rad);

			if (Math.abs(x) > 0.1 || Math.abs(y) > 0.1) {
				const distance = steps * this.distancePerFrame() * 3;
				const deg = new DotMoveSystemClassAlias.Degree(degree);
				this.mover().startContinuousMove(distance, deg);
			} else {
				const distance = steps * this.distancePerFrame() * 3;
				const deg = DotMoveSystemClassAlias.Degree.fromDirection(direction);
				this.mover().startContinuousMove(distance, deg);
			}
		}
		// Keyboard
		else {
			const isUp = Input.isPressed('up');
			const isDown = Input.isPressed('down');
			const isLeft = Input.isPressed('left');
			const isRight = Input.isPressed('right');
			let direction = null;

			if (isUp && isRight) {
				direction = 9;
				if (Imported.Hendrix_Animation_Solution &&
					this.is8DirSprite && this.is8DirSprite()) {
					this.setDirection(9);
				} else {
					this.setDirection(6);
				}
			} else if (isUp && isLeft) {
				direction = 7;
				if (Imported.Hendrix_Animation_Solution &&
					this.is8DirSprite && this.is8DirSprite()) {
					this.setDirection(7);
				} else {
					this.setDirection(4);
				}
			} else if (isDown && isRight) {
				direction = 3;
				if (Imported.Hendrix_Animation_Solution &&
					this.is8DirSprite && this.is8DirSprite()) {
					this.setDirection(3);
				} else {
					this.setDirection(6);
				}
			} else if (isDown && isLeft) {
				direction = 1;
				if (Imported.Hendrix_Animation_Solution &&
					this.is8DirSprite && this.is8DirSprite()) {
					this.setDirection(1);
				} else {
					this.setDirection(4);
				}
			} else if (isUp) {
				direction = 8;
				this.setDirection(8);
			} else if (isDown) {
				direction = 2;
				this.setDirection(2);
			} else if (isLeft) {
				direction = 4;
				this.setDirection(4);
			} else if (isRight) {
				direction = 6;
				this.setDirection(6);
			} else {
				direction = this.direction();
			}

			if (direction !== null) {
				const distance = steps * this.distancePerFrame() * 3;
				const deg = DotMoveSystemClassAlias.Degree.fromDirection(direction);
				this.mover().startContinuousMove(distance, deg);
			}
		}
	} else { return }
};

Game_Character.prototype.convertAngleToDirection = function (angle) {
	angle = ((angle % 360) + 360) % 360;
	if (Imported.Hendrix_Animation_Solution && this.is8DirSprite && this.is8DirSprite()) {
		if (angle >= 337.5 || angle < 22.5) return 8;
		if (angle >= 22.5 && angle < 67.5) return 9;
		if (angle >= 67.5 && angle < 112.5) return 6;
		if (angle >= 112.5 && angle < 157.5) return 3;
		if (angle >= 157.5 && angle < 202.5) return 2;
		if (angle >= 202.5 && angle < 247.5) return 1;
		if (angle >= 247.5 && angle < 292.5) return 4;
		if (angle >= 292.5 && angle < 337.5) return 7;
	} else {
		if (angle >= 340 || angle < 30) return 8;
		if (angle >= 30 && angle < 150) return 6;
		if (angle >= 150 && angle < 210) return 2;
		if (angle >= 210 && angle < 340) return 4;
	}

	return 2;
};

const _Scene_Map_updateScene = Scene_Map.prototype.updateScene;
Scene_Map.prototype.updateScene = function () {
	_Scene_Map_updateScene.call(this);
	if (Input.isTriggered(debugCollisionRectButton) && Utils.isOptionValid('test')) {
		showCollisionAreas = !showCollisionAreas;
	}
};

const _Spriteset_Map_createLowerLayer = Spriteset_Map.prototype.createLowerLayer;
Spriteset_Map.prototype.createLowerLayer = function () {
	_Spriteset_Map_createLowerLayer.call(this);
	this.createCollisionSprites();
};

Spriteset_Map.prototype.createCollisionSprites = function () {
	this._collisionContainer = new PIXI.Container();
	this._collisionContainer.z = 1;
	this._collisionSprites = [];
	this._tilemap.addChild(this._collisionContainer);
};

Spriteset_Map.prototype.updateCollisionSprites = function () {
	if (!this._collisionContainer) return;
	for (const sprite of this._collisionSprites) {
		this._collisionContainer.removeChild(sprite);
	}
	this._collisionSprites = [];

	if (!showCollisionAreas) return;

	for (const character of $gameMap.allCharacters()) {
		if (character instanceof Game_Follower) continue;

		const rect = character.collisionRect();
		if (!rect) continue;

		const sprite = new PIXI.Graphics();
		sprite.beginFill(0x00FF00, 0.5);

		const x = $gameMap.adjustX(rect.x) * $gameMap.tileWidth();
		const y = $gameMap.adjustY(rect.y) * $gameMap.tileHeight();
		const width = rect.width * $gameMap.tileWidth();
		const height = rect.height * $gameMap.tileHeight();

		sprite.drawRect(0, 0, width, height);
		sprite.endFill();

		sprite.x = x;
		sprite.y = y;

		this._collisionSprites.push(sprite);
		this._collisionContainer.addChild(sprite);

		if (character instanceof Game_Event) {
			const areaSprite = new PIXI.Graphics();
			areaSprite.beginFill(0x0000FF, 0.3);

			const centerX = x + width / 2;
			const centerY = y + height / 2;
			const areaWidth = character.widthArea() * $gameMap.tileWidth();
			const areaHeight = character.heightArea() * $gameMap.tileHeight();

			areaSprite.drawRect(centerX - areaWidth, centerY - areaHeight, areaWidth * 2, areaHeight * 2);
			areaSprite.endFill();

			this._collisionSprites.push(areaSprite);
			this._collisionContainer.addChild(areaSprite);
		}
	}
};

//============================================================
// SELF SWITCH
//============================================================

const processSelSwitch = function (state, comment, eventId, sourceInterpreter) {
	const mapId = $gameMap.mapId();

	// nearby <notetag>
	if (typeof eventId === 'string' && eventId.startsWith('nearby ')) {
		const tag = eventId.slice(7);
		const sourceEvent = $gameMap.event(sourceInterpreter._eventId);
		if (!sourceEvent) return;
		const nearestEvent = findNearestTarget(tag, sourceEvent.x, sourceEvent.y);
		if (nearestEvent && nearestEvent !== sourceEvent) {
			processEvent(nearestEvent, comment, state, mapId);
		}
	}
	else if (typeof eventId === 'string' && eventId.startsWith('<') && eventId.endsWith('>')) {
		$gameMap.events().forEach(event => {
			if (event && event.event().note.includes(eventId)) {
				processEvent(event, comment, state, mapId);
			}
		});
	}
	else {
		const event = $gameMap.event(eventId);
		if (event) {
			processEvent(event, comment, state, mapId);
		}
	}
};

const processEvent = function (event, comment, state, mapId) {
	const eventData = event.event();

	for (let i = 0; i < eventData.pages.length; i++) {
		const page = eventData.pages[i];
		const hasComment = page.list.some(command =>
			(command.code === 108 || command.code === 408) &&
			command.parameters[0].includes(comment)
		);

		if (hasComment) {
			// Check if page uses a switch named "self switch X"
			if (page.conditions.switch1Valid) {
				const switchName = $dataSystem.switches[page.conditions.switch1Id];
				if (switchName?.toLowerCase().startsWith('self switch')) {
					$gameSelfSwitches.setValue([mapId, event.eventId(),
						`SW_${page.conditions.switch1Id}`], state);
					event.refresh();
					return;
				}
			}

			// Check abcd self switch
			if (page.conditions.selfSwitchValid) {
				$gameSelfSwitches.setValue([mapId, event.eventId(),
					page.conditions.selfSwitchCh], state);
				event.refresh();
				return;
			}
		}
	}
};

PluginManager.registerCommand(HpluginName, "ControlSelfSwitch", function (args) {
	const eventId = args.eventId === '' || args.eventId === '0' ? this.eventId() : args.eventId;
	const state = args.state === 'true';
	processSelSwitch(state, args.comment, eventId, this);
});

const H_Game_SelfSwitches_setValue = Game_SelfSwitches.prototype.setValue;
Game_SelfSwitches.prototype.setValue = function (key, value) {
	const switchId = key[2];

	if (switchId.startsWith('SW_')) {
		const actualSwitchId = parseInt(switchId.replace('SW_', ''));
		if (!isNaN(actualSwitchId)) {
			$gameSwitches.setValue(actualSwitchId, value);
		}
	}

	H_Game_SelfSwitches_setValue.call(this, key, value);
};

const H_Game_Event_meetsConditions = Game_Event.prototype.meetsConditions;
Game_Event.prototype.meetsConditions = function (page) {
	const c = page.conditions;
	if (c.switch1Valid) {
		const switchName = $dataSystem.switches[c.switch1Id];
		if (switchName && switchName.toLowerCase().startsWith('self switch')) {
			const key = [$gameMap.mapId(), this._eventId, `SW_${c.switch1Id}`];
			if (!$gameSelfSwitches.value(key)) {
				return false;
			}
			const modifiedPage = {
				...page,
				conditions: {
					...c,
					switch1Valid: false
				}
			};
			return H_Game_Event_meetsConditions.call(this, modifiedPage);
		}
	}
	return H_Game_Event_meetsConditions.call(this, page);
};

//============================================================
// SELF VARIABLES
//============================================================

var LocalVarManager = LocalVarManager || {};
LocalVarManager.localVars = {};
window.LocalVarManager = LocalVarManager;

PluginManager.registerCommand(HpluginName, "SetValue", function (args) {
	const eventId = `${$gameMap.mapId()}_${this._eventId}`;
	const id = args.id || 'default';
	const valueStr = String(args.valueToSet);

	LocalVarManager.localVars[eventId] = LocalVarManager.localVars[eventId] || {};

	let newValue;

	if (valueStr.includes(':')) {
		const parts = valueStr.split(':');
		const min = Number(parts[0]);
		const max = Number(parts[1]);
		newValue = Math.floor(Math.random() * (max - min + 1)) + min;
	} else {
		const isPlainString = !/[+\-*/()$=<>!&|]/.test(valueStr) &&
			isNaN(Number(valueStr)) &&
			!valueStr.includes('Math.') &&
			!valueStr.includes('true') &&
			!valueStr.includes('false');

		if (isPlainString) {
			newValue = valueStr;
		} else {
			const currentValue = LocalVarManager.localVars[eventId][id] || 0;
			const startsWithOperator = /^[+\-*/]/.test(valueStr.trim());

			if (startsWithOperator) {
				const expression = `${currentValue}${valueStr}`;
				newValue = eval(expression);
			} else {
				newValue = eval(valueStr);
			}
		}
	}

	LocalVarManager.localVars[eventId][id] = newValue;
	LocalVarManager.saveLocalVars();
});

PluginManager.registerCommand(HpluginName, "ResetMapValues", function () {
	const currentMapId = $gameMap.mapId();
	const mapPrefix = `${currentMapId}_`;
	for (const key in LocalVarManager.localVars) {
		if (key.startsWith(mapPrefix)) {
			LocalVarManager.localVars[key] = {};
		}
	}
	LocalVarManager.saveLocalVars();
});

LocalVarManager.saveLocalVars = function () {
	if ($gameVariables) {
		$gameVariables.setValue(9999, JSON.stringify(LocalVarManager.localVars));
	}
};

LocalVarManager.loadLocalVars = function () {
	if ($gameVariables) {
		const savedData = $gameVariables.value(9999);
		LocalVarManager.localVars = savedData ? JSON.parse(savedData) : {};
	}
};

window.localVariable = function (eventId, id = 'default') {
	const uniqueId = `${$gameMap.mapId()}_${eventId}`;
	const varName = typeof id === 'number' ? String(id) : id;
	return LocalVarManager.localVars[uniqueId] ? (LocalVarManager.localVars[uniqueId][varName] || 0) : 0;
};

window.eventLocalVariable = function (eventId, id = 'default', direction = null) {
	let sourceX, sourceY;

	if (eventId === 'player') {
		sourceX = $gamePlayer.x;
		sourceY = $gamePlayer.y;
		if (direction) {
			switch (direction) {
				case 'front':
					switch ($gamePlayer.direction()) {
						case 2: sourceY++; break;
						case 4: sourceX--; break;
						case 6: sourceX++; break;
						case 8: sourceY--; break;
					}
					break;
				case 'behind':
					switch ($gamePlayer.direction()) {
						case 2: sourceY--; break;
						case 4: sourceX++; break;
						case 6: sourceX--; break;
						case 8: sourceY++; break;
					}
					break;
			}
		}
	} else if (typeof eventId === 'string' && eventId.startsWith('<')) {
		const nearestEvent = findNearestTarget(eventId, $gamePlayer.x, $gamePlayer.y);
		if (!nearestEvent) return undefined;
		sourceX = nearestEvent.x;
		sourceY = nearestEvent.y;
		if (direction) {
			switch (direction) {
				case 'front':
					switch (nearestEvent.direction()) {
						case 2: sourceY++; break;
						case 4: sourceX--; break;
						case 6: sourceX++; break;
						case 8: sourceY--; break;
					}
					break;
				case 'behind':
					switch (nearestEvent.direction()) {
						case 2: sourceY--; break;
						case 4: sourceX++; break;
						case 6: sourceX--; break;
						case 8: sourceY++; break;
					}
					break;
			}
		}
	} else {
		const sourceEvent = $gameMap.event(eventId);
		if (!sourceEvent) return undefined;
		sourceX = sourceEvent.x;
		sourceY = sourceEvent.y;
		if (direction) {
			switch (direction) {
				case 'front':
					switch (sourceEvent.direction()) {
						case 2: sourceY++; break;
						case 4: sourceX--; break;
						case 6: sourceX++; break;
						case 8: sourceY--; break;
					}
					break;
				case 'behind':
					switch (sourceEvent.direction()) {
						case 2: sourceY--; break;
						case 4: sourceX++; break;
						case 6: sourceX--; break;
						case 8: sourceY++; break;
					}
					break;
			}
		}
	}

	const eventsAtPosition = $gameMap.eventsXy(sourceX, sourceY);

	const otherEvents = typeof eventId === 'number' ?
		eventsAtPosition.filter(event => event.eventId() !== eventId) :
		eventsAtPosition;

	for (const event of otherEvents) {
		const uniqueId = `${$gameMap.mapId()}_${event.eventId()}`;
		const localVarValue = LocalVarManager.localVars[uniqueId] ?
			LocalVarManager.localVars[uniqueId][id] :
			undefined;

		if (localVarValue !== undefined) {
			return localVarValue;
		}
	}

	return undefined;
};

window.localPercentage = function (eventId, percentage) {
	if (eventId === 'player') {
		return Math.random() * 100 < percentage;
	}

	const uniqueId = `${$gameMap.mapId()}_${eventId}`;
	const randomValue = Math.random() * 100;

	LocalVarManager.localVars[uniqueId] = LocalVarManager.localVars[uniqueId] || {};
	LocalVarManager.localVars[uniqueId]['percentageValue'] = randomValue;

	return randomValue < percentage;
};

window.localVar = function (eventId, id = 'default') {
	const uniqueId = `${$gameMap.mapId()}_${eventId}`;
	return LocalVarManager.localVars[uniqueId] ? LocalVarManager.localVars[uniqueId][id] || 0 : 0;
};

PluginManager.registerCommand(HpluginName, "QuickSwitchVariableReset", function (args) {
	const target = args.target || 'both';
	const keyword = args.keyword?.trim() || '';

	if (!keyword) {
		return;
	}

	let switchesReset = 0;
	let variablesReset = 0;

	if (target === 'switch' || target === 'both') {
		for (let i = 1; i < $dataSystem.switches.length; i++) {
			const switchName = $dataSystem.switches[i];
			if (switchName && switchName.toLowerCase().includes(keyword.toLowerCase())) {
				$gameSwitches.setValue(i, false);
				switchesReset++;
			}
		}
	}

	if (target === 'variable' || target === 'both') {
		for (let i = 1; i < $dataSystem.variables.length; i++) {
			const variableName = $dataSystem.variables[i];
			if (variableName && variableName.toLowerCase().includes(keyword.toLowerCase())) {
				$gameVariables.setValue(i, 0);
				variablesReset++;
			}
		}
	}

	if (Utils.isOptionValid('test')) {
		console.log(`Quick Reset completed: ${switchesReset} switches, ${variablesReset} variables reset with keyword "${keyword}"`);
	}
});

PluginManager.registerCommand(HpluginName, "ResetEventPages", async function (args) {
	const targetName = String(args.eventName || '').trim();
	if (!targetName) return;

	const currentMapId = $gameMap.mapId();

	const extraSwitchKeys = [];
	$dataSystem.switches.forEach((name, switchId) => {
		if (name && /^self switch\s+/i.test(name)) {
			extraSwitchKeys.push(`SW_${switchId}`);
		}
	});

	for (let mapId = 1; mapId < $dataMapInfos.length; mapId++) {
		if (!$dataMapInfos[mapId]) continue;

		const mapData = (mapId === currentMapId) ? $dataMap : await SloadAllMapsDataH(mapId);
		if (!mapData || !mapData.events) continue;

		mapData.events.forEach(eventData => {
			if (!eventData || eventData.name !== targetName) return;

			const eventId = eventData.id;
			['A', 'B', 'C', 'D', ...extraSwitchKeys].forEach(key => {
				$gameSelfSwitches.setValue([mapId, eventId, key], false);
			});
		});
	}
});

//============================================================
// WEAPON SWING
//============================================================

PluginManager.registerCommand(HpluginName, "SwingWeapon", function (args) {
	const eventId = args.eventId === 'this' ? this._eventId : args.eventId === 'player' ? 0 : parseInt(args.eventId);
	const source = eventId === 0 ? $gamePlayer : $gameMap.event(eventId);
	if (!source) return;

	let [offsetX, offsetY] = args.offset.split(',').map(v => parseInt(v.trim()) || 0);
	const speed = parseInt(args.speed) || 20;
	const zIndex = args.zIndex || 'same';
	const style = args.style || 'clockwise';

	const visualSettings = args.visualSettings ? JSON.parse(args.visualSettings) : {};
	const traitEffect = visualSettings.traitEffect === 'true' || visualSettings.traitEffect === true;
	const traitColor = visualSettings.traitColor || '';
	const traitBlend = visualSettings.traitBlend || 'screen';
	const traitOrder = visualSettings.traitOrder || 'below';

	const sprite = new Sprite_WeaponSwing(args.weaponSprite, source, offsetX, offsetY, speed, zIndex, style, traitEffect, traitColor, traitBlend, traitOrder);
	if (SceneManager._scene._spriteset && SceneManager._scene._spriteset._tilemap) {
		SceneManager._scene._spriteset._tilemap.addChild(sprite);
	} else {
		SceneManager._scene._spriteset.addChild(sprite);
	}
});

class Sprite_WeaponSwing extends Sprite {
	constructor(weaponImage, source, offsetX, offsetY, duration, zIndex, style, traitEffect, traitColor, traitBlend, traitOrder) {
		super();
		this.bitmap = ImageManager.loadPicture(weaponImage);
		this._source = source;
		this._offsetX = offsetX;
		this._offsetY = offsetY;
		this._duration = duration;
		this._totalDuration = duration;
		this._zIndexMode = zIndex || 'same';
		this._style = style || 'clockwise';

		this._traitEffect = traitEffect !== false;
		this._traitColor = traitColor || '';
		this._traitBlend = this.getBlendMode(traitBlend || 'screen');
		this._traitOrder = traitOrder || 'below';

		this.anchor.x = 0;
		this.anchor.y = 0.5;
		this.x = source.screenX() + offsetX;
		this.y = source.screenY() + offsetY;

		this._trailSprites = [];
		this.setupTrail(duration);
		this._lastTrailRotation = null;
		this._lastTrailX = null;
		this._lastTrailY = null;

		this._frameCounter = 0;
		this.updateZIndex();
		this.setupAnimationStyle();
	}

	getBlendMode(blendName) {
		const blendModes = {
			'normal': 0,
			'add': 1,
			'multiply': 2,
			'screen': 3
		};
		return blendModes[blendName] || 0;
	}

	setupTrail(duration) {
		if (duration <= 10) {
			this._maxTrails = 100;
		} else if (duration <= 20) {
			this._maxTrails = 100;
		} else if (duration <= 40) {
			this._maxTrails = 35;
		} else {
			this._maxTrails = 20;
		}

		this._trailOpacity = 170;
		this._trailFadeSpeed = 25;
	}

	updateZIndex() {
		const sourceZ = this._source.screenZ();
		switch (this._zIndexMode) {
			case 'below':
				this.z = sourceZ - 1;
				break;
			case 'above':
				this.z = sourceZ + 1;
				break;
			case 'same':
			default:
				this.z = sourceZ;
				break;
		}
	}

	setupAnimationStyle() {
		const direction = this._source.direction();
		const toRadians = angle => (angle * Math.PI) / 180;

		if (this._style === 'thrust') {
			this.setupThrustStyle(direction, toRadians);
		} else {
			this.setupRotationStyle(direction, toRadians);
		}
	}

	setupRotationStyle(direction, toRadians) {
		let startAngle, endAngle;

		switch (direction) {
			case 2:
				startAngle = 0;
				endAngle = 180;
				break;
			case 4:
				startAngle = 270;
				endAngle = 90;
				break;
			case 6:
				this.scale.x = -1;
				startAngle = 90;
				endAngle = 270;
				break;
			case 8:
				startAngle = 180;
				endAngle = 360;
				break;
		}

		switch (this._style) {
			case 'counterclockwise':
				[startAngle, endAngle] = [endAngle, startAngle];
				break;
			case 'fullcircle':
				if (direction === 4) {
					endAngle = startAngle - 360;
				} else {
					endAngle = startAngle + 360;
				}
				break;
			case 'clockwise':
			default:
				break;
		}

		this._startAngle = toRadians(startAngle);
		this._endAngle = toRadians(endAngle);
		this.rotation = this._startAngle;
	}

	setupThrustStyle(direction, toRadians) {
		switch (direction) {
			case 2:
				this.rotation = toRadians(90);
				this._thrustDirection = { x: 0, y: 1 };
				break;
			case 4:
				this.rotation = toRadians(180);
				this._thrustDirection = { x: -1, y: 0 };
				break;
			case 6:
				this.rotation = toRadians(0);
				this._thrustDirection = { x: 1, y: 0 };
				break;
			case 8:
				this.rotation = toRadians(270);
				this._thrustDirection = { x: 0, y: -1 };
				break;
		}

		this._thrustDistance = $gameMap.tileWidth() / 1.5;
		this._startX = this._source.screenX() + this._offsetX;
		this._startY = this._source.screenY() + this._offsetY;
	}

	update() {
		super.update();
		if (this._duration > 0) {
			this._duration--;
			const progress = (this._totalDuration - this._duration) / this._totalDuration;

			if (this._style === 'thrust') {
				this.updateThrustAnimation(progress);
			} else {
				this.updateRotationAnimation(progress);
			}

			this.updateZIndex();
			this.updateMotionBlur();
		} else if (this._duration === 0) {
			if (this._style === 'thrust') {
				this.updateThrustAnimation(1.0);
			} else {
				this.rotation = this._endAngle;
				const screenX = this._source.screenX() + this._offsetX;
				const screenY = this._source.screenY() + this._offsetY;
				this.x = screenX;
				this.y = screenY;
			}

			this.updateZIndex();
			this.updateMotionBlur();
			this._duration = -1;
			this.clearMotionBlur();
			this.parent.removeChild(this);
		}
	}

	updateMotionBlur() {
		if (!this._traitEffect) return;

		this._frameCounter++;
		let trailsToCreate = 1;

		if (this._lastTrailRotation !== null) {
			const rotationDiff = Math.abs(this.rotation - this._lastTrailRotation);
			const dx = this.x - this._lastTrailX;
			const dy = this.y - this._lastTrailY;
			const distance = Math.sqrt(dx * dx + dy * dy);
			const rotationTrails = Math.ceil(rotationDiff / 0.05);
			const positionTrails = Math.ceil(distance / 2);
			trailsToCreate = Math.max(1, rotationTrails, positionTrails);
			trailsToCreate = Math.min(trailsToCreate, 10);
		}

		for (let i = 0; i < trailsToCreate; i++) {
			const t = (i + 1) / (trailsToCreate + 1);

			const trail = new Sprite();
			trail.bitmap = this.bitmap;
			trail.anchor.x = this.anchor.x;
			trail.anchor.y = this.anchor.y;

			if (this._lastTrailRotation !== null) {
				trail.x = this._lastTrailX + (this.x - this._lastTrailX) * t;
				trail.y = this._lastTrailY + (this.y - this._lastTrailY) * t;
				trail.rotation = this._lastTrailRotation + (this.rotation - this._lastTrailRotation) * t;
			} else {
				trail.x = this.x;
				trail.y = this.y;
				trail.rotation = this.rotation;
			}

			trail.scale.x = this.scale.x;
			trail.scale.y = this.scale.y;

			if (this._traitOrder === 'above') {
				trail.z = this.z + 0.1;
			} else {
				trail.z = this.z - 0.1;
			}

			trail.opacity = this._trailOpacity * (1 - t * 0.3);
			trail.blendMode = this._traitBlend;
			if (this._traitColor) {
				trail.setColorTone(this.hexToColorTone(this._traitColor));
			}
			trail._fadeSpeed = this._trailFadeSpeed;

			this._trailSprites.push(trail);
			this.parent.addChild(trail);

			while (this._trailSprites.length > this._maxTrails) {
				const oldTrail = this._trailSprites.shift();
				this.parent.removeChild(oldTrail);
			}
		}

		this._lastTrailRotation = this.rotation;
		this._lastTrailX = this.x;
		this._lastTrailY = this.y;

		for (let i = this._trailSprites.length - 1; i >= 0; i--) {
			const trail = this._trailSprites[i];

			if (this._traitOrder === 'above') {
				trail.z = this.z + 0.1;
			} else {
				trail.z = this.z - 0.1;
			}

			trail.opacity -= trail._fadeSpeed;

			if (trail.opacity <= 0) {
				this.parent.removeChild(trail);
				this._trailSprites.splice(i, 1);
			}
		}
	}

	hexToColorTone(hex) {
		hex = hex.replace('#', '');
		const r = parseInt(hex.substring(0, 2), 16);
		const g = parseInt(hex.substring(2, 4), 16);
		const b = parseInt(hex.substring(4, 6), 16);
		return [(r - 128) * 2, (g - 128) * 2, (b - 128) * 2, 0];
	}

	clearMotionBlur() {
		for (const trail of this._trailSprites) {
			if (trail.parent) {
				trail.parent.removeChild(trail);
			}
		}
		this._trailSprites = [];
	}

	updateRotationAnimation(progress) {
		this.rotation = this._startAngle + (this._endAngle - this._startAngle) * progress;

		const screenX = this._source.screenX() + this._offsetX;
		const screenY = this._source.screenY() + this._offsetY;
		this.x = screenX;
		this.y = screenY;
	}

	updateThrustAnimation(progress) {
		let thrustProgress;

		if (progress < 0.33) {
			thrustProgress = -(progress / 0.33) * 0.5;
		} else if (progress < 0.66) {
			const phase2Progress = (progress - 0.33) / 0.33;
			thrustProgress = -0.5 + (phase2Progress * 1.5);
		} else {
			const phase3Progress = (progress - 0.66) / 0.34;
			thrustProgress = 1.0 - (phase3Progress * 1.0);
		}

		const screenX = this._source.screenX() + this._offsetX;
		const screenY = this._source.screenY() + this._offsetY;

		this.x = screenX + (this._thrustDirection.x * this._thrustDistance * thrustProgress);
		this.y = screenY + (this._thrustDirection.y * this._thrustDistance * thrustProgress);
	}
}

//============================================================
// GUN AMMO SYSTEM
//============================================================

Game_System.prototype.getGunData = function (weaponId) {
	if (!this._gunData[weaponId]) {
		const weapon = $dataWeapons[weaponId];
		if (!weapon) return null;

		const capacityMatch = weapon.note.match(/<capacity:\s*(.+?)>/i);
		const ammoItemMatch = weapon.note.match(/<ammo item:\s*(.+?)>/i);
		const startingAmmoMatch = weapon.note.match(/<starting ammo:\s*(.+?)>/i);

		if (!capacityMatch || !ammoItemMatch) return null;

		const capacityStr = capacityMatch[1].trim();
		const maxCapacity = capacityStr.includes('$game') ? eval(capacityStr) : parseInt(capacityStr);

		let startingAmmo = 0;
		if (startingAmmoMatch) {
			const startingStr = startingAmmoMatch[1].trim();
			startingAmmo = startingStr.includes('$game') ? eval(startingStr) : parseInt(startingStr);
		}

		const ammoIdentifier = ammoItemMatch[1].trim();
		let ammoItem = null;

		if (!isNaN(ammoIdentifier)) {
			ammoItem = $dataItems[parseInt(ammoIdentifier)];
		} else {
			ammoItem = $dataItems.find(item => item && item.name === ammoIdentifier);
		}

		if (!ammoItem) return null;

		this._gunData[weaponId] = {
			currentAmmo: Math.min(startingAmmo, maxCapacity),
			maxCapacity: maxCapacity,
			ammoItemId: ammoItem.id,
			ammoItem: ammoItem
		};
	}

	return this._gunData[weaponId];
};

Game_System.prototype.setGunAmmo = function (weaponId, ammo) {
	const gunData = this.getGunData(weaponId);
	if (gunData) {
		gunData.currentAmmo = Math.max(0, Math.min(ammo, gunData.maxCapacity));
	}
};

Game_System.prototype.setGunCapacity = function (weaponId, capacity) {
	const gunData = this.getGunData(weaponId);
	if (gunData) {
		gunData.maxCapacity = Math.max(1, capacity);
		gunData.currentAmmo = Math.min(gunData.currentAmmo, gunData.maxCapacity);
	}
};

PluginManager.registerCommand(HpluginName, "GunAmmoControl", function (args) {
	const slotIndex = parseInt(args.slot || '0');
	const target = args.target || 'ammo';
	const valueExpr = args.value || '0';

	const weapon = $gameParty.leader().equips()[slotIndex];
	if (!weapon || !DataManager.isWeapon(weapon)) return;

	const gunData = $gameSystem.getGunData(weapon.id);
	if (!gunData) return;

	let value = 0;
	value = eval(valueExpr);

	if (target === 'ammo') {
		if (value > 0) {
			const ammoNeeded = Math.min(value, gunData.maxCapacity - gunData.currentAmmo);
			const ammoAvailable = $gameParty.numItems(gunData.ammoItem);
			const ammoToAdd = Math.min(ammoNeeded, ammoAvailable);

			if (ammoToAdd > 0) {
				$gameParty.loseItem(gunData.ammoItem, ammoToAdd);
				$gameSystem.setGunAmmo(weapon.id, gunData.currentAmmo + ammoToAdd);
			}
		} else if (value < 0) {
			const ammoToRemove = Math.min(Math.abs(value), gunData.currentAmmo);
			$gameSystem.setGunAmmo(weapon.id, gunData.currentAmmo - ammoToRemove);
		}
	} else if (target === 'capacity') {
		const newCapacity = gunData.maxCapacity + value;
		$gameSystem.setGunCapacity(weapon.id, newCapacity);
	}
});

PluginManager.registerCommand(HpluginName, "GunReload", function (args) {
	const slotIndex = parseInt(args.slot || '0');
	const weapon = $gameParty.leader().equips()[slotIndex];
	if (!weapon || !DataManager.isWeapon(weapon)) return;
	SperformGunReloadH(weapon.id);
});

function SperformGunReloadH(weaponId) {
	const gunData = $gameSystem.getGunData(weaponId);
	if (!gunData) {
		console.log("Gun Reload: No gun data found for weapon ID (You need to add note to database weapon like <ammo item: x> <capacity: x> or <starting ammo: x>", weaponId);
		return false;
	}

	if (gunData.currentAmmo >= gunData.maxCapacity) {
		return false;
	}

	const ammoNeeded = gunData.maxCapacity - gunData.currentAmmo;
	const ammoAvailable = $gameParty.numItems(gunData.ammoItem);

	if (ammoAvailable <= 0) {
		return false;
	}

	const ammoToLoad = Math.min(ammoNeeded, ammoAvailable);
	$gameParty.loseItem(gunData.ammoItem, ammoToLoad);
	$gameSystem.setGunAmmo(weaponId, gunData.currentAmmo + ammoToLoad);

	return true;
}

window.gunAmmo = function (slot = 1) {
	const weapon = $gameParty.leader().equips()[getSlotIndex(slot)];
	if (!weapon || !DataManager.isWeapon(weapon)) return 0;
	const gunData = $gameSystem.getGunData(weapon.id);
	return gunData ? gunData.currentAmmo : 0;
};

window.gunCapacity = function (slot = 1) {
	const weapon = $gameParty.leader().equips()[getSlotIndex(slot)];
	if (!weapon || !DataManager.isWeapon(weapon)) return 0;
	const gunData = $gameSystem.getGunData(weapon.id);
	return gunData ? gunData.maxCapacity : 0;
};

window.gunAmmoInInventory = function (slot = 1) {
	const weapon = $gameParty.leader().equips()[getSlotIndex(slot)];
	if (!weapon || !DataManager.isWeapon(weapon)) return 0;
	const gunData = $gameSystem.getGunData(weapon.id);
	if (!gunData || !gunData.ammoItem) return 0;
	return $gameParty.numItems(gunData.ammoItem);
};

Game_System.prototype.gunAmmo = function (slot = 1) {
	const weapon = $gameParty.leader().equips()[getSlotIndex(slot)];
	if (!weapon || !DataManager.isWeapon(weapon)) return 0;
	const gunData = this.getGunData(weapon.id);
	return gunData ? gunData.currentAmmo : 0;
};

Game_System.prototype.gunCapacity = function (slot = 1) {
	const weapon = $gameParty.leader().equips()[getSlotIndex(slot)];
	if (!weapon || !DataManager.isWeapon(weapon)) return 0;
	const gunData = this.getGunData(weapon.id);
	return gunData ? gunData.maxCapacity : 0;
};

Game_System.prototype.gunAmmoInInventory = function (slot = 1) {
	const weapon = $gameParty.leader().equips()[getSlotIndex(slot)];
	if (!weapon || !DataManager.isWeapon(weapon)) return 0;
	const gunData = this.getGunData(weapon.id);
	if (!gunData || !gunData.ammoItem) return 0;
	return $gameParty.numItems(gunData.ammoItem);
};

//============================================================
// STATES
//============================================================

function SprocessStateApplicationH(sourceEvent, targetEventId) {
	if (CollisionManager.lastEvaded || CollisionManager.lastImmunity) {
		return;
	}
	if (!sourceEvent || !sourceEvent.event) return;

	const eventNote = sourceEvent.event().note;
	const dmgMatch = eventNote.match(/<dmg:\s*(.+?)>/i);
	if (!dmgMatch) return;

	const skillName = dmgMatch[1].trim();
	const skill = skillNameCache[skillName.toLowerCase()];
	if (!skill || !skill.effects) return;

	skill.effects.forEach(effect => {
		if (effect.code === Game_Action.EFFECT_ADD_STATE) {
			const stateId = effect.dataId;
			const baseRate = effect.value1;
			const { stateRate, hasStateResist } = ScheckStateResistanceH(targetEventId, stateId, baseRate);

			if (hasStateResist) return;

			if (Math.random() < stateRate) {
				const state = $dataStates[stateId];
				if (!state) return;

				if (targetEventId === 0 || targetEventId === 'player') {
					const leader = $gameParty.leader();
					if (leader) leader.addState(stateId);
				} else {
					const stBattler = SgetBattlerForH($gameMap.event(targetEventId));
					if (stBattler) stBattler.addState(stateId);
				}

				const commonEventMatch = state.note.match(/<state common event:\s*(.+?)>/i);
				if (!commonEventMatch) return;

				const commonEventIdentifier = commonEventMatch[1].trim();
				let commonEventId;

				if (!isNaN(commonEventIdentifier)) {
					commonEventId = parseInt(commonEventIdentifier);
				} else {
					commonEventId = commonEventNameCache[commonEventIdentifier.toLowerCase()] || 0;
				}

				if (!commonEventId) return;

				if (targetEventId === 0 || targetEventId === 'player') {
					const actor = $gameParty.leader();
					if (actor) {
						actor.addState(stateId);
						if (!$gameSystem.passiveCommonEvents) {
							$gameSystem.passiveCommonEvents = {};
						}
						if (!$gameSystem.passiveCommonEvents[$gameMap.mapId()]) {
							$gameSystem.passiveCommonEvents[$gameMap.mapId()] = {};
						}
						if (!$gameSystem.passiveCommonEvents[$gameMap.mapId()]['player']) {
							$gameSystem.passiveCommonEvents[$gameMap.mapId()]['player'] = {};
						}

						if (!$gamePlayer.stateInterpreters) {
							$gamePlayer.stateInterpreters = {};
						}

						if ($gamePlayer.stateInterpreters[stateId]) {
							const interpreter = $gamePlayer.stateInterpreters[stateId];
							if (interpreter && interpreter.isRunning()) {
								return;
							}
						}

						$gameSystem.passiveCommonEvents[$gameMap.mapId()]['player'][stateId] = commonEventId;
						const interpreter = new Game_Interpreter();
						interpreter.setup($dataCommonEvents[commonEventId].list, 0);
						$gamePlayer.stateInterpreters[stateId] = interpreter;
					}
				} else {
					const targetEvent = $gameMap.event(targetEventId);
					if (targetEvent) {
						if (targetEvent.databaseActor) {
							targetEvent.databaseActor.addState(stateId);
						}
						if (!$gameSystem.passiveCommonEvents) {
							$gameSystem.passiveCommonEvents = {};
						}
						if (!$gameSystem.passiveCommonEvents[$gameMap.mapId()]) {
							$gameSystem.passiveCommonEvents[$gameMap.mapId()] = {};
						}
						if (!$gameSystem.passiveCommonEvents[$gameMap.mapId()][targetEventId]) {
							$gameSystem.passiveCommonEvents[$gameMap.mapId()][targetEventId] = {};
						}

						if (!targetEvent.stateInterpreters) {
							targetEvent.stateInterpreters = {};
						}

						if (targetEvent.stateInterpreters[stateId]) {
							const interpreter = targetEvent.stateInterpreters[stateId];
							if (interpreter && interpreter.isRunning()) {
								return;
							}
						}

						$gameSystem.passiveCommonEvents[$gameMap.mapId()][targetEventId][stateId] = commonEventId;
						const interpreter = new Game_Interpreter();
						interpreter.setup($dataCommonEvents[commonEventId].list, targetEventId);
						targetEvent.stateInterpreters[stateId] = interpreter;
					}
				}
			}
		}
	});
}

function ScheckStateResistanceH(targetEventId, stateId, baseRate = 1.0) {
	const target = (targetEventId === 0 || targetEventId === 'player')
		? $gamePlayer
		: $gameMap.event(targetEventId);
	const battler = SgetBattlerForH(target);
	if (!battler) return { stateRate: baseRate, hasStateResist: false };

	let stateRate = baseRate * battler.stateRate(stateId);
	let hasStateResist = battler.isStateResist(stateId);

	if (target !== $gamePlayer && target && target.stateInterpreters) {
		for (const activeId of Object.keys(target.stateInterpreters).map(Number)) {
			if (battler.isStateAffected(activeId)) continue;
			const activeState = $dataStates[activeId];
			if (!activeState || !activeState.traits) continue;
			if (activeState.traits.some(t => t.code === 14 && t.dataId === stateId)) {
				hasStateResist = true;
			}
			const activeRateTrait = activeState.traits.find(t => t.code === 13 && t.dataId === stateId);
			if (activeRateTrait) {
				stateRate *= activeRateTrait.value;
			}
		}
	}

	return { stateRate, hasStateResist };
}

function SprocessEnemyAttackTraitsH(sourceEvent, targetEventId) {
	const attacker = SgetBattlerForH(sourceEvent);
	if (!attacker) return;

	attacker.attackStates().forEach(stateId => {
		{
			const stateChance = attacker.attackStatesRate(stateId);
			const { stateRate, hasStateResist } = ScheckStateResistanceH(targetEventId, stateId, stateChance);

			if (hasStateResist) return;

			if (Math.random() < stateRate) {
				const state = $dataStates[stateId];
				if (!state) return;

				if (targetEventId === 0 || targetEventId === 'player') {
					const leader = $gameParty.leader();
					if (leader) leader.addState(stateId);
				} else {
					const stBattler = SgetBattlerForH($gameMap.event(targetEventId));
					if (stBattler) stBattler.addState(stateId);
				}

				const commonEventMatch = state.note.match(/<state common event:\s*(.+?)>/i);
				if (!commonEventMatch) return;

				const commonEventIdentifier = commonEventMatch[1].trim();
				let commonEventId = !isNaN(commonEventIdentifier) ?
					parseInt(commonEventIdentifier) :
					commonEventNameCache[commonEventIdentifier.toLowerCase()] || 0;

				if (!commonEventId) return;

				if (targetEventId === 0 || targetEventId === 'player') {
					const actor = $gameParty.leader();
					if (actor) {
						actor.addState(stateId);
						$gameSystem.passiveCommonEvents = $gameSystem.passiveCommonEvents || {};
						$gameSystem.passiveCommonEvents[$gameMap.mapId()] = $gameSystem.passiveCommonEvents[$gameMap.mapId()] || {};
						$gameSystem.passiveCommonEvents[$gameMap.mapId()]['player'] = $gameSystem.passiveCommonEvents[$gameMap.mapId()]['player'] || {};
						$gamePlayer.stateInterpreters = $gamePlayer.stateInterpreters || {};

						if (!$gamePlayer.stateInterpreters[stateId] || !$gamePlayer.stateInterpreters[stateId].isRunning()) {
							$gameSystem.passiveCommonEvents[$gameMap.mapId()]['player'][stateId] = commonEventId;
							const interpreter = new Game_Interpreter();
							interpreter.setup($dataCommonEvents[commonEventId].list, 0);
							$gamePlayer.stateInterpreters[stateId] = interpreter;
						}
					}
				}
				else {
					const targetEvent = $gameMap.event(targetEventId);
					if (targetEvent) {
						if (targetEvent.databaseActor) {
							targetEvent.databaseActor.addState(stateId);
						}
						$gameSystem.passiveCommonEvents = $gameSystem.passiveCommonEvents || {};
						$gameSystem.passiveCommonEvents[$gameMap.mapId()] = $gameSystem.passiveCommonEvents[$gameMap.mapId()] || {};
						$gameSystem.passiveCommonEvents[$gameMap.mapId()][targetEventId] = $gameSystem.passiveCommonEvents[$gameMap.mapId()][targetEventId] || {};
						targetEvent.stateInterpreters = targetEvent.stateInterpreters || {};

						if (!targetEvent.stateInterpreters[stateId] || !targetEvent.stateInterpreters[stateId].isRunning()) {
							$gameSystem.passiveCommonEvents[$gameMap.mapId()][targetEventId][stateId] = commonEventId;
							const interpreter = new Game_Interpreter();
							interpreter.setup($dataCommonEvents[commonEventId].list, targetEventId);
							targetEvent.stateInterpreters[stateId] = interpreter;
						}
					}
				}
			}
		}
	});
}

PluginManager.registerCommand(HpluginName, "AddState", function (args) {
	const stateId = parseInt(args.stateId);
	if (!stateId || !$dataStates[stateId]) return;

	const state = $dataStates[stateId];
	const commonEventMatch = state.note.match(/<state common event:\s*(.+?)>/i);

	let commonEventId = null;
	if (commonEventMatch) {
		const commonEventIdentifier = commonEventMatch[1].trim();
		if (!isNaN(commonEventIdentifier)) {
			commonEventId = parseInt(commonEventIdentifier);
		} else {
			commonEventId = commonEventNameCache[commonEventIdentifier.toLowerCase()] || 0;
		}
	}

	const target = args.target || 'this';
	const targets = findTargets(target, this);
	const targetCharacters = targets.map(char => ({
		id: char === $gamePlayer ? 0 : char.eventId(),
		character: char,
		actor: char === $gamePlayer ? $gameParty.leader() : null
	}));

	targetCharacters.forEach(targetData => {
		const targetId = targetData.id;
		const { stateRate, hasStateResist } = ScheckStateResistanceH(targetId, stateId);

		if (hasStateResist) return;
		if (Math.random() >= stateRate) return;

		if (targetId === 0) {
			const actor = $gameParty.leader();
			if (actor) actor.addState(stateId);
			if (actor && commonEventId) {

				if (!$gameSystem.passiveCommonEvents) {
					$gameSystem.passiveCommonEvents = {};
				}
				if (!$gameSystem.passiveCommonEvents[$gameMap.mapId()]) {
					$gameSystem.passiveCommonEvents[$gameMap.mapId()] = {};
				}
				if (!$gameSystem.passiveCommonEvents[$gameMap.mapId()]['player']) {
					$gameSystem.passiveCommonEvents[$gameMap.mapId()]['player'] = {};
				}

				if (!$gamePlayer.stateInterpreters) {
					$gamePlayer.stateInterpreters = {};
				}

				if (!$gamePlayer.stateInterpreters[stateId] || !$gamePlayer.stateInterpreters[stateId].isRunning()) {
					$gameSystem.passiveCommonEvents[$gameMap.mapId()]['player'][stateId] = commonEventId;
					const interpreter = new Game_Interpreter();
					interpreter.setup($dataCommonEvents[commonEventId].list, 0);
					$gamePlayer.stateInterpreters[stateId] = interpreter;
				}
			}
		} else {
			const targetEvent = $gameMap.event(targetId);
			if (targetEvent) {
				const evBattler = SgetBattlerForH(targetEvent);
				if (evBattler) evBattler.addState(stateId);
			}
			if (targetEvent && commonEventId) {
				if (!$gameSystem.passiveCommonEvents) {
					$gameSystem.passiveCommonEvents = {};
				}
				if (!$gameSystem.passiveCommonEvents[$gameMap.mapId()]) {
					$gameSystem.passiveCommonEvents[$gameMap.mapId()] = {};
				}
				if (!$gameSystem.passiveCommonEvents[$gameMap.mapId()][targetId]) {
					$gameSystem.passiveCommonEvents[$gameMap.mapId()][targetId] = {};
				}

				if (!targetEvent.stateInterpreters) {
					targetEvent.stateInterpreters = {};
				}

				if (!targetEvent.stateInterpreters[stateId] || !targetEvent.stateInterpreters[stateId].isRunning()) {
					$gameSystem.passiveCommonEvents[$gameMap.mapId()][targetId][stateId] = commonEventId;
					const interpreter = new Game_Interpreter();
					interpreter.setup($dataCommonEvents[commonEventId].list, targetId);
					targetEvent.stateInterpreters[stateId] = interpreter;
				}
			}
		}
	});
});

PluginManager.registerCommand(HpluginName, "RemoveState", function (args) {
	const stateId = parseInt(args.stateId);
	if (!stateId || !$dataStates[stateId]) return;

	const state = $dataStates[stateId];
	const commonEventMatch = state.note.match(/<state common event:\s*(.+?)>/i);
	let commonEventId = 0;

	if (commonEventMatch) {
		const commonEventIdentifier = commonEventMatch[1].trim();
		commonEventId = !isNaN(commonEventIdentifier) ?
			parseInt(commonEventIdentifier) :
			commonEventNameCache[commonEventIdentifier.toLowerCase()] || 0;
	}

	const callingEventId = this._eventId;

	// See who called this common event
	if (!callingEventId || callingEventId === 0) {
		// Player
		const actor = $gameParty.leader();
		if (actor && actor.isStateAffected(stateId)) {
			actor.removeState(stateId);

			if ($gameSystem.passiveCommonEvents?.[$gameMap.mapId()]?.['player']?.[stateId]) {
				delete $gameSystem.passiveCommonEvents[$gameMap.mapId()]['player'][stateId];

				if (Object.keys($gameSystem.passiveCommonEvents[$gameMap.mapId()]['player']).length === 0) {
					delete $gameSystem.passiveCommonEvents[$gameMap.mapId()]['player'];
				}
			}

			if ($gamePlayer.stateInterpreters?.[stateId]) {
				delete $gamePlayer.stateInterpreters[stateId];
			}
		}
	} else {
		// Event
		const targetEvent = $gameMap.event(callingEventId);
		if (targetEvent) {
			const evBattler = SgetBattlerForH(targetEvent);
			if (evBattler) evBattler.removeState(stateId);
			if ($gameSystem.passiveCommonEvents?.[$gameMap.mapId()]?.[callingEventId]?.[stateId]) {
				delete $gameSystem.passiveCommonEvents[$gameMap.mapId()][callingEventId][stateId];

				if (Object.keys($gameSystem.passiveCommonEvents[$gameMap.mapId()][callingEventId]).length === 0) {
					delete $gameSystem.passiveCommonEvents[$gameMap.mapId()][callingEventId];
				}
			}

			if (targetEvent.stateInterpreters?.[stateId]) {
				delete targetEvent.stateInterpreters[stateId];
			}
		}
	}
});

function findEventByLinkedActorId_StateCEH(actorId) {
	if (!$gameMap) return null;
	return $gameMap.events().find(ev => ev && ev.linkedActorId === actorId) || null;
}

const S_Game_Battler_addState_StateCEH = Game_Battler.prototype.addState;
Game_Battler.prototype.addState = function (stateId) {
	const wasAffected = this.isStateAffected(stateId);
	S_Game_Battler_addState_StateCEH.call(this, stateId);

	if (!wasAffected && this.isStateAffected(stateId) && this.isActor && this.isActor()) {
		const state = $dataStates[stateId];
		if (!state || !state.note) return;

		const commonEventMatch = state.note.match(/<state common event:\s*(.+?)>/i);
		if (!commonEventMatch) return;

		const commonEventIdentifier = commonEventMatch[1].trim();
		const commonEventId = !isNaN(commonEventIdentifier) ?
			parseInt(commonEventIdentifier) :
			commonEventNameCache[commonEventIdentifier.toLowerCase()] || 0;

		if (!commonEventId || !$dataCommonEvents[commonEventId]) return;

		if (this === $gameParty.leader()) {
			$gameSystem.passiveCommonEvents = $gameSystem.passiveCommonEvents || {};
			$gameSystem.passiveCommonEvents[$gameMap.mapId()] = $gameSystem.passiveCommonEvents[$gameMap.mapId()] || {};
			$gameSystem.passiveCommonEvents[$gameMap.mapId()]['player'] = $gameSystem.passiveCommonEvents[$gameMap.mapId()]['player'] || {};
			$gamePlayer.stateInterpreters = $gamePlayer.stateInterpreters || {};

			if (!$gamePlayer.stateInterpreters[stateId] || !$gamePlayer.stateInterpreters[stateId].isRunning()) {
				$gameSystem.passiveCommonEvents[$gameMap.mapId()]['player'][stateId] = commonEventId;
				const interpreter = new Game_Interpreter();
				interpreter.setup($dataCommonEvents[commonEventId].list, 0);
				$gamePlayer.stateInterpreters[stateId] = interpreter;
			}
		} else {
			const targetEvent = findEventByLinkedActorId_StateCEH(this.actorId());
			if (targetEvent) {
				const targetEventId = targetEvent.eventId();
				$gameSystem.passiveCommonEvents = $gameSystem.passiveCommonEvents || {};
				$gameSystem.passiveCommonEvents[$gameMap.mapId()] = $gameSystem.passiveCommonEvents[$gameMap.mapId()] || {};
				$gameSystem.passiveCommonEvents[$gameMap.mapId()][targetEventId] = $gameSystem.passiveCommonEvents[$gameMap.mapId()][targetEventId] || {};
				targetEvent.stateInterpreters = targetEvent.stateInterpreters || {};

				if (!targetEvent.stateInterpreters[stateId] || !targetEvent.stateInterpreters[stateId].isRunning()) {
					$gameSystem.passiveCommonEvents[$gameMap.mapId()][targetEventId][stateId] = commonEventId;
					const interpreter = new Game_Interpreter();
					interpreter.setup($dataCommonEvents[commonEventId].list, targetEventId);
					targetEvent.stateInterpreters[stateId] = interpreter;
				}
			}
		}
	}
};

const S_Game_Battler_removeState_StateCEH = Game_Battler.prototype.removeState;
Game_Battler.prototype.removeState = function (stateId) {
	const wasAffected = this.isStateAffected(stateId);
	S_Game_Battler_removeState_StateCEH.call(this, stateId);

	if (wasAffected && !this.isStateAffected(stateId) && this.isActor && this.isActor()) {
		if (this === $gameParty.leader()) {
			if ($gameSystem.passiveCommonEvents?.[$gameMap.mapId()]?.['player']?.[stateId]) {
				delete $gameSystem.passiveCommonEvents[$gameMap.mapId()]['player'][stateId];

				if (Object.keys($gameSystem.passiveCommonEvents[$gameMap.mapId()]['player']).length === 0) {
					delete $gameSystem.passiveCommonEvents[$gameMap.mapId()]['player'];
				}
			}

			if ($gamePlayer.stateInterpreters?.[stateId]) {
				delete $gamePlayer.stateInterpreters[stateId];
			}
		} else {
			const targetEvent = findEventByLinkedActorId_StateCEH(this.actorId());
			if (targetEvent) {
				const targetEventId = targetEvent.eventId();
				if ($gameSystem.passiveCommonEvents?.[$gameMap.mapId()]?.[targetEventId]?.[stateId]) {
					delete $gameSystem.passiveCommonEvents[$gameMap.mapId()][targetEventId][stateId];

					if (Object.keys($gameSystem.passiveCommonEvents[$gameMap.mapId()][targetEventId]).length === 0) {
						delete $gameSystem.passiveCommonEvents[$gameMap.mapId()][targetEventId];
					}
				}

				if (targetEvent.stateInterpreters?.[stateId]) {
					delete targetEvent.stateInterpreters[stateId];
				}
			}
		}
	}
};

window.hasState = function (identifier, stateId, context = null) {
	const target = findTarget(identifier, context);
	if (!target) return false;

	const resolvedStateId = !isNaN(stateId) ?
		parseInt(stateId) :
		(stateNameCache[stateId.toLowerCase()] || 0);

	if (resolvedStateId <= 0) return false;

	if (target === $gamePlayer) {
		const actor = $gameParty.leader();
		return actor ? actor.isStateAffected(resolvedStateId) : false;
	}

	const hsBattler = SgetBattlerForH(target);
	if (hsBattler && hsBattler.isStateAffected(resolvedStateId)) {
		return true;
	}

	if (target.stateInterpreters && target.stateInterpreters[resolvedStateId]) {
		return target.stateInterpreters[resolvedStateId].isRunning();
	}

	return false;
};

//============================================================
// KNOCKBACK
//============================================================

PluginManager.registerCommand(HpluginName, "Knockback", function (args) {
	const whoToKnockback = args.character || 'this';
	const target = args.from || 'player';
	const distance = Number(args.distance) || 1;
	const durationPower = args.durationPower || '30, 2';
	const waitToComplete = args.wait === 'true';
	const style = args.style || 'push';
	const parts = durationPower.split(',').map(s => s.trim());
	const duration = Number(parts[0]) || 30;
	const decelPower = Number(parts[1]) || 2;

	const characters = findTargets(whoToKnockback, this);
	if (characters.length === 0) return;

	characters.forEach(character => {
		let targetX, targetY;

		if (target === 'playerLockedTarget') {
			const playerTarget = $gamePlayer.getLockedTarget();
			if (!playerTarget) return;
			targetX = playerTarget.x;
			targetY = playerTarget.y;
		}
		else if (target === 'eventLockedTarget') {
			const eventTarget = character.getLockedTarget();
			if (!eventTarget) return;
			targetX = eventTarget.x;
			targetY = eventTarget.y;
		}
		else if (target === 'player') {
			const playerPos = $gamePlayer.positionPoint();
			targetX = playerPos.x;
			targetY = playerPos.y;
		}
		else if (!isNaN(target)) {
			const event = $gameMap.event(Number(target));
			if (!event) return;
			const eventPos = event.positionPoint();
			targetX = eventPos.x;
			targetY = eventPos.y;
		}
		else if (typeof target === 'string') {
			const searchTag = target.startsWith('<') ? target : `<${target}>`;
			let closestEvent = null;
			let minDistance = Infinity;

			$gameMap.events().forEach(event => {
				if (event.event().note.includes(searchTag)) {
					const eventPos = event.positionPoint();
					const thisPos = character.positionPoint();
					const dist = Math.sqrt(
						Math.pow($gameMap.deltaX(eventPos.x, thisPos.x), 2) +
						Math.pow($gameMap.deltaY(eventPos.y, thisPos.y), 2)
					);

					if (dist < minDistance) {
						closestEvent = event;
						minDistance = dist;
					}
				}
			});

			if (!closestEvent) return;
			const eventPos = closestEvent.positionPoint();
			targetX = eventPos.x;
			targetY = eventPos.y;
		}

		const thisPos = character.positionPoint();
		const dx = $gameMap.deltaX(thisPos.x, targetX);
		const dy = $gameMap.deltaY(thisPos.y, targetY);

		const radians = Math.atan2(dy, dx);
		let moveDegrees = (radians * 180 / Math.PI + 90) % 360;
		if (moveDegrees < 0) moveDegrees += 360;

		if (style === 'jump') {
			let jumpX = 0;
			let jumpY = 0;
			const dist = Math.round(distance);

			if (moveDegrees >= 337.5 || moveDegrees < 22.5) {
				// Up
				jumpY = -dist;
			} else if (moveDegrees >= 22.5 && moveDegrees < 67.5) {
				// Up-Right
				jumpX = dist;
				jumpY = -dist;
			} else if (moveDegrees >= 67.5 && moveDegrees < 112.5) {
				// Right
				jumpX = dist;
			} else if (moveDegrees >= 112.5 && moveDegrees < 157.5) {
				// Down-Right
				jumpX = dist;
				jumpY = dist;
			} else if (moveDegrees >= 157.5 && moveDegrees < 202.5) {
				// Down
				jumpY = dist;
			} else if (moveDegrees >= 202.5 && moveDegrees < 247.5) {
				// Down-Left
				jumpX = -dist;
				jumpY = dist;
			} else if (moveDegrees >= 247.5 && moveDegrees < 292.5) {
				// Left
				jumpX = -dist;
			} else if (moveDegrees >= 292.5 && moveDegrees < 337.5) {
				// Up-Left
				jumpX = -dist;
				jumpY = -dist;
			}

			character.jump(jumpX, jumpY);
		}
		else if (H_DotMoveSystem) {
			if (!character.knockback) {
				character.knockback = {};
			}

			const velocityMultiplier = decelPower + 1;
			const initialVelocity = (distance * velocityMultiplier) / duration;
			character.knockback.deg = moveDegrees;
			character.knockback.initialVelocity = initialVelocity;
			character.knockback.duration = duration;
			character.knockback.decelPower = decelPower;
			character.knockback.frame = 0;
			character.knockback.active = true;
			character.knockback.originalDirFixed = character.isDirectionFixed();
		}
	});

	if (waitToComplete && characters.length > 0) {
		const hasActiveKnockback = characters.some(char => char.knockback && char.knockback.active);
		if (hasActiveKnockback) {
			this.setWaitMode('knockback');
			this.knockbackWait = characters;
		}
	}
});

const _SGame_Character_updateH = Game_Character.prototype.update;
Game_Character.prototype.update = function () {
	_SGame_Character_updateH.call(this);
	this.updateLockIn();
	this.updateJumpPhysics();
	if (this.knockback && this.knockback.active && H_DotMoveSystem) {
		const data = this.knockback;
		const progress = data.frame / data.duration;
		const remainingRatio = (1 - progress);
		const dpf = data.initialVelocity * Math.pow(remainingRatio, data.decelPower);
		if (dpf > 0.003 && data.frame < data.duration) {
			const deg = new DotMoveSystem.Degree(data.deg);
			const moveProcess = new DotMoveSystem.CharacterDotMoveProcess(this);
			moveProcess.dotMoveByDeg(deg, dpf);
			data.frame++;
		} else {
			this.setDirectionFix(data.originalDirFixed);
			if (data.interpreter) {
				data.interpreter.setWaitMode('');
			}
			data.active = false;
			this.knockback = null;
		}
	}
	if (this._rotateLerp) {
		const lerp = this._rotateLerp;
		lerp.elapsed++;
		const t = Math.min(lerp.elapsed / lerp.frames, 1);
		const eased = 1 - Math.pow(1 - t, 2);
		this.setRotation(lerp.start + (lerp.target - lerp.start) * eased);
		if (t >= 1) this._rotateLerp = null;
	}
};

//============================================================
// MINOR STUFF
//============================================================

if (disableAutoGameOver) {
	Game_Party.prototype.isAllDead = function () {
		return false;
	};
}

if (soloPlayerMenu) {
	const H_Scene_Item_onItemOk = Scene_Item.prototype.onItemOk;
	Scene_Item.prototype.onItemOk = function () {
		H_Scene_Item_onItemOk.call(this);
		if ($gameParty.battleMembers().length >= 1) {
			this.onActorOk();
			this.onActorCancel();
		}
	};

	const H_Scene_Skill_onItemOk = Scene_Skill.prototype.onItemOk;
	Scene_Skill.prototype.onItemOk = function () {
		H_Scene_Skill_onItemOk.call(this);
		if ($gameParty.battleMembers().length >= 1) {
			this.onActorOk();
			this.onActorCancel();
		}
	};
}

PluginManager.registerCommand(HpluginName, "DynamicPassable", function (args) {
	const target = args.target || 'this';
	const status = args.status || 'Normal';
	const targetEvents = findTargets(target, this);

	if (!$gameSystem._playerPassThroughEvents) {
		$gameSystem._playerPassThroughEvents = [];
	}

	targetEvents.forEach(event => {
		const eventId = event.eventId();
		if (status === 'Passable') {
			if (!$gameMap._passEvents) {
				$gameMap.initializePassCache();
			}
			$gameMap.addPassEvent(eventId, event.x, event.y);
			if (!$gameSystem._playerPassThroughEvents.includes(eventId)) {
				$gameSystem._playerPassThroughEvents.push(eventId);
			}
		} else {
			if ($gameMap._passEvents) {
				$gameMap.removePassEvent(eventId, event.x, event.y);
			}
			const index = $gameSystem._playerPassThroughEvents.indexOf(eventId);
			if (index > -1) {
				$gameSystem._playerPassThroughEvents.splice(index, 1);
			}
		}
	});
});

PluginManager.registerCommand(HpluginName, "GainItemsRandomly", function (args) {
	const percentage = Number(eval(args.percentage)) || 0;
	if (Math.random() * 100 >= percentage) return;

	let itemList = [];
	try {
		itemList = JSON.parse(args.itemList || '[]');
	} catch (e) {
		return;
	}

	const pool = [];
	itemList.forEach(entryStr => {
		let entry = {};
		try {
			entry = JSON.parse(entryStr);
		} catch (e) {
			return;
		}

		const weaponId = parseInt(entry.Weapon || 0);
		const itemId = parseInt(entry.Item || 0);
		const armorId = parseInt(entry.Armor || 0);
		const weight = Math.max(1, parseInt(entry.Weight || 1));

		if (weaponId > 0 && $dataWeapons[weaponId]) pool.push({ data: $dataWeapons[weaponId], weight });
		if (itemId > 0 && $dataItems[itemId]) pool.push({ data: $dataItems[itemId], weight });
		if (armorId > 0 && $dataArmors[armorId]) pool.push({ data: $dataArmors[armorId], weight });
	});

	if (pool.length === 0) return;

	const totalWeight = pool.reduce((sum, entry) => sum + entry.weight, 0);
	let roll = Math.random() * totalWeight;
	let chosen = pool[pool.length - 1].data;

	for (const entry of pool) {
		if (roll < entry.weight) {
			chosen = entry.data;
			break;
		}
		roll -= entry.weight;
	}

	$gameParty.gainItem(chosen, 1);
});

PluginManager.registerCommand(HpluginName, "ChangePriority", function (args) {
	const priorityType = Number(args.priority);
	const targets = findTargets(args.target, this);
	for (const target of targets) {
		target.setPriorityType(priorityType);
	}
});

if (H_DotMoveSystem) {
	Game_Player.prototype.checkCollisionTargetEvent = function (x, y, d, event) {
		if ($gameSystem._playerPassThroughEvents &&
			$gameSystem._playerPassThroughEvents.includes(event.eventId())) {
			return false;
		}
		if (!event.isNormalPriority()) {
			return false;
		}
		if (this.isThrough() || event.isThrough()) {
			return false;
		}
		if (this._priorityType === 2 || event._priorityType === 2) {
			return false;
		}
		return true;
	};
}

PluginManager.registerCommand(HpluginName, "StopQueue", function () {
	const event = this.character(0);
	if (event && event instanceof Game_Event) {
		event.stopQueue();
		if (this._eventId > 0) {
			this.waitMode = '';
		}
		event._waitCount = 0;
	}
});

Game_Event.prototype.stopQueue = function () {
	this._moveRouteForcing = false;
	this._moveRoute = null;
	this._moveRouteIndex = 0;
	this.clearMovementWait();
};

Game_Event.prototype.clearMovementWait = function () {
	this._waitCount = 0;
	this._moving = false;
	this.resetStopCount();
	this.straighten();
};

PluginManager.registerCommand(HpluginName, "CycleWeapon", function (args) {
	const direction = String(args.direction || "next");
	const slotId = Number(args.slot || 0);
	const leader = $gameParty.leader();

	const items = $gameParty.allItems().filter(item =>
		leader.canEquip(item) && leader.equipSlots()[slotId] === item.etypeId
	);

	if (items.length === 0) return;

	const currentItem = leader.equips()[slotId];

	let nextItem;
	if (!currentItem) {
		nextItem = items[0];
	} else {
		const currentIndex = items.indexOf(currentItem);
		if (currentIndex === -1) {
			nextItem = items[0];
		} else {
			if (direction === "next") {
				nextItem = items[(currentIndex + 1) % items.length];
			} else {
				nextItem = items[(currentIndex - 1 + items.length) % items.length];
			}
		}
	}

	if (nextItem) {
		leader.changeEquip(slotId, nextItem);
	}
});

PluginManager.registerCommand(HpluginName, "CameraUpdate", function (args) {
	const pauseCamera = args.pauseCamera === 'true';

	if (pauseCamera) {
		$gameMap.scrollDown = function (distance) { return; };
		$gameMap.scrollLeft = function (distance) { return; };
		$gameMap.scrollRight = function (distance) { return; };
		$gameMap.scrollUp = function (distance) { return; };
	} else {
		$gameMap.scrollDown = Game_Map.prototype.scrollDown;
		$gameMap.scrollLeft = Game_Map.prototype.scrollLeft;
		$gameMap.scrollRight = Game_Map.prototype.scrollRight;
		$gameMap.scrollUp = Game_Map.prototype.scrollUp;

		const targetX = $gamePlayer.x - $gameMap.screenTileX() / 2;
		const targetY = $gamePlayer.y - $gameMap.screenTileY() / 2;
		const duration = 15;
		const dx = (targetX - $gameMap._displayX) / duration;
		const dy = (targetY - $gameMap._displayY) / duration;

		let count = 0;
		const smoothScroll = () => {
			if (count < duration) {
				$gameMap.setDisplayPos($gameMap._displayX + dx, $gameMap._displayY + dy);
				count++;
				requestAnimationFrame(smoothScroll);
			}
		};
		smoothScroll();
	}
});

if (removeFormation) {
	Window_MenuCommand.prototype.addFormationCommand = function () {
	};
}

const dashSpeedMultiplier = Number(Hparameters.dashSpeedMultiplier || 3.0);
const _Game_CharacterBase_realMoveSpeed = Game_CharacterBase.prototype.realMoveSpeed;
Game_CharacterBase.prototype.realMoveSpeed = function () {
	const originalSpeed = _Game_CharacterBase_realMoveSpeed.call(this);

	if (this instanceof Game_Player && this.isDashing()) {
		return originalSpeed * dashSpeedMultiplier / 2;
	}

	return originalSpeed;
};

Sprite_Character.prototype.showEventIdAndName = function () {
	if (this._debugText) {
		if (this._debugText.parent) {
			this._debugText.parent.removeChild(this._debugText);
		}
		this._debugText = null;
	}
	if (showHitboxes && this._character instanceof Game_Event) {
		if (!this._debugText) {
			const event = this._character;
			const eventId = event.eventId();
			const eventName = event.event().name;
			const labelText = `#${eventId}: ${eventName}`;

			const labelBitmap = new Bitmap(200, 20);
			labelBitmap.fontSize = 14;
			labelBitmap.textColor = '#FFFFFF';
			labelBitmap.outlineWidth = 3;
			labelBitmap.outlineColor = 'rgba(0, 0, 0, 0.8)';
			labelBitmap.drawText(labelText, 0, 0, 200, 20, 'center');

			this._debugText = new Sprite(labelBitmap);
			this._debugText.anchor.x = 0.5;
			this._debugText.y = -this.patternHeight() - 12;
			this._debugText.z = 9999;
			this.addChild(this._debugText);
		}
	}
};

//============================================================
// SOUND DETECTION
//============================================================

window.activeSounds = new Map();

const H_AudioManager_playSe = AudioManager.playSe;
AudioManager.playSe = function (se) {
	if (se) {
		const eventId = $gameMap._interpreter ? $gameMap._interpreter._eventId : null;
		if (eventId) {
			window.activeSounds.set(eventId, {
				volume: se.volume,
				timestamp: Graphics.frameCount
			});
		}
	}
	H_AudioManager_playSe.call(this, se);
};

const cleanupOldSounds = () => {
	const currentFrame = Graphics.frameCount;
	for (const [eventId, soundData] of window.activeSounds.entries()) {
		if (currentFrame - soundData.timestamp > 2) {
			window.activeSounds.delete(eventId);
		}
	}
};

window.checkSound = function (listenerEventId, volumeThreshold, maxRange) {
	cleanupOldSounds();
	const listenerEvent = $gameMap.event(listenerEventId);
	if (!listenerEvent) return false;
	const listenerScreenX = listenerEvent.screenX();
	const listenerScreenY = listenerEvent.screenY() - $gameMap.tileHeight() / 2;
	const maxRangeInPixels = maxRange * $gameMap.tileWidth();

	if (showHitboxes) {
		listenerEvent._lastSoundCheck = {
			centerX: listenerScreenX,
			centerY: listenerScreenY,
			radius: maxRangeInPixels,
			threshold: volumeThreshold,
			detectedSounds: []
		};
	}

	let soundDetected = false;

	for (const [sourceEventId, soundData] of window.activeSounds.entries()) {
		if (soundData.volume < volumeThreshold) continue;

		const sourceEvent = $gameMap.event(sourceEventId);
		if (!sourceEvent) continue;

		const sourceScreenX = sourceEvent.screenX();
		const sourceScreenY = sourceEvent.screenY() - $gameMap.tileHeight() / 2;

		const dx = sourceScreenX - listenerScreenX;
		const dy = sourceScreenY - listenerScreenY;
		const distance = Math.sqrt(dx * dx + dy * dy);

		if (distance <= maxRangeInPixels) {
			soundDetected = true;

			if (showHitboxes && listenerEvent._lastSoundCheck) {
				listenerEvent._lastSoundCheck.detectedSounds.push({
					x: sourceScreenX,
					y: sourceScreenY,
					volume: soundData.volume
				});
			}
		}
	}

	return soundDetected;
};

//============================================================
// EVENT EFFECTS
//============================================================

class Sprite_EventEffect extends Sprite {
	constructor(character, effect, duration, intensity, origin = 'center') {
		super();
		this._character = character;
		this._effectType = effect;
		this._duration = duration;
		this._maxDuration = duration;
		this._intensity = intensity;
		this._origin = origin;
		this._targetSprite = null;
		this._originalValues = {};
		this._rotationSprite = null;
		this._bounceSprite = null;
		this._shakeSprite = null;
		this._isSetupComplete = false;
		this.setup();
	}

	setup() {
		if (!(SceneManager._scene instanceof Scene_Map)) return;
		const spriteset = SceneManager._scene._spriteset;
		this._targetSprite = spriteset._characterSprites.find(
			sprite => sprite._character === this._character
		);

		if (!this._targetSprite) {
			this._needsRetrySetup = true;
			return;
		}

		this._isSetupComplete = true;

		this._originalValues = {
			visible: this._targetSprite.visible,
			opacity: this._targetSprite.opacity,
			x: this._targetSprite.x,
			y: this._targetSprite.y,
			scaleX: this._targetSprite.scale.x,
			scaleY: this._targetSprite.scale.y
		};

		if (this._effectType === 'spin') {
			this.setupSpinEffect();
		}
	}

	setupSpinEffect() {
		if (!this._targetSprite || !this._targetSprite.bitmap) {
			this._needsRetrySetup = true;
			return;
		}
		this._targetSprite.opacity = 0;
		this._rotationSprite = new Sprite();
		this._rotationSprite.bitmap = this._targetSprite.bitmap;

		this._rotationSprite.anchor.x = 0.5;
		switch (this._origin) {
			case 'top':
				this._rotationSprite.anchor.y = 0;
				break;
			case 'bottom':
				this._rotationSprite.anchor.y = 1;
				break;
			default:
				this._rotationSprite.anchor.y = 0.5;
		}

		this.updateFrame();
		this.updatePosition();

		const tilemap = SceneManager._scene._spriteset._tilemap;
		tilemap.addChild(this._rotationSprite);
		this.sortRotationSprite();

		this._rotationRate = 360 / this._maxDuration * this._intensity / 5;
		this._currentRotation = 0;
	}


	updateFrame(sprite) {
		if (!sprite || !this._targetSprite) return;

		const pw = this._targetSprite.patternWidth();
		const ph = this._targetSprite.patternHeight();
		const sx = (this._targetSprite.characterBlockX() + this._targetSprite.characterPatternX()) * pw;
		const sy = (this._targetSprite.characterBlockY() + this._targetSprite.characterPatternY()) * ph;

		sprite.setFrame(sx, sy, pw, ph);
	}

	updatePosition(sprite) {
		if (!sprite || !this._targetSprite) return;
		sprite.x = this._targetSprite.x;
		if (this._origin === 'center') {
			sprite.y = this._targetSprite.y - this._targetSprite.patternHeight() / 2;
		} else if (this._origin === 'top') {
			sprite.y = this._targetSprite.y - this._targetSprite.patternHeight();
		} else if (this._origin === 'bottom') {
			sprite.y = this._targetSprite.y;
		}
	}

	update() {
		if (!this._targetSprite) return false;
		if (this._duration > 0) {
			this._duration--;
			const progress = (this._maxDuration - this._duration) / this._maxDuration;

			switch (this._effectType) {
				case 'spin':
					this.updateSpinEffect();
					break;
				case 'scale':
					this.updateScaleEffect(progress);
					break;
				case 'shake':
					this.updateShakeEffect(progress);
					break;
				case 'bounce':
					this.updateBounceEffect(progress);
					break;
				case 'flash':
					this.updateFlashEffect(progress);
					break;
				case 'fade':
					this.updateFadeEffect(progress);
					break;
			}
			return true;
		} else {
			this.cleanupEffect();
			return false;
		}
	}

	updateSpinEffect() {
		if (!this._rotationSprite) return;
		this._targetSprite.opacity = 0;
		this.updateFrame(this._rotationSprite);
		this.updatePosition(this._rotationSprite);
		this.sortRotationSprite();

		this._currentRotation += this._rotationRate;
		this._rotationSprite.rotation = (this._currentRotation * Math.PI) / 180;
	}

	sortRotationSprite() {
		if (!this._rotationSprite || !this._rotationSprite.parent) return;

		const tilemap = this._rotationSprite.parent;
		const children = tilemap.children;
		const characterY = this._character.screenY();

		const rotationIndex = children.indexOf(this._rotationSprite);
		if (rotationIndex !== -1) {
			children.splice(rotationIndex, 1);
		}

		let insertIndex = children.length;
		for (let i = 0; i < children.length; i++) {
			const child = children[i];
			if (child._character && child._character.screenY() > characterY) {
				insertIndex = i;
				break;
			}
		}

		children.splice(insertIndex, 0, this._rotationSprite);
	}

	updateShakeEffect(progress) {
		if (!this._targetSprite) return;
		const remaining = 1 - progress;
		const amplitude = this._intensity * remaining;
		const shake = Math.sin(progress * 20) * amplitude;
		this._character._shakeOffsetX = shake;
		this._character._shakeOffsetY = 0;
	}

	updateBounceEffect(progress) {
		if (!this._targetSprite) return;
		const bounce = Math.abs(Math.sin(progress * Math.PI * 2)) * this._intensity;
		this._character._bounceOffsetY = -bounce;
	}

	updateFlashEffect(progress) {
		const flashIntensity = Math.sin(progress * Math.PI * 5) * (1 - progress) * 255;
		this._targetSprite.setBlendColor([255, 255, 255, flashIntensity]);
	}

	updateFadeEffect(progress) {
		let opacity = this._originalValues.opacity;

		if (progress < 0.5) {
			opacity = this._originalValues.opacity * (1 - progress * 2);
		} else {
			opacity = this._originalValues.opacity * ((progress - 0.5) * 2);
		}

		this._character.setOpacity(Math.round(opacity));
	}

	updateScaleFrame() {
		if (!this._scaleSprite || !this._targetSprite) return;
		const pw = this._targetSprite.patternWidth();
		const ph = this._targetSprite.patternHeight();
		const sx = this._targetSprite.characterBlockX() + this._targetSprite.characterPatternX() * pw;
		const sy = this._targetSprite.characterBlockY() + this._targetSprite.characterPatternY() * ph;
		this._scaleSprite.setFrame(sx, sy, pw, ph);
	}

	updateScalePosition() {
		if (!this._scaleSprite || !this._targetSprite) return;
		this._scaleSprite.x = this._targetSprite.x;
		if (this._origin === 'center') {
			this._scaleSprite.y = this._targetSprite.y - this._targetSprite.patternHeight() / 2;
		} else if (this._origin === 'top') {
			this._scaleSprite.y = this._targetSprite.y - this._targetSprite.patternHeight();
		} else if (this._origin === 'bottom') {
			this._scaleSprite.y = this._targetSprite.y;
		}
	}

	updateScaleEffect(progress) {
		if (!this._targetSprite) return;
		const scale = 1 + Math.sin(progress * Math.PI) * (this._intensity / 10);
		this._targetSprite.scale.x = scale;
		this._targetSprite.scale.y = scale;
	}

	cleanupEffect() {
		if (!this._targetSprite) return;
		if (this._effectType === 'fade') {
			this._character.setOpacity(this._originalValues.opacity);
			return;
		}
		if (this._effectType === 'shake') {
			this._character._shakeOffsetX = 0;
			this._character._shakeOffsetY = 0;
			return;
		}
		if (this._effectType === 'bounce') {
			this._character._bounceOffsetY = 0;
			return;
		}
		if (this._effectType === 'scale') {
			this._targetSprite.scale.x = this._originalValues.scaleX;
			this._targetSprite.scale.y = this._originalValues.scaleY;
			return;
		}
		if (this._effectType === 'flash') {
			this._targetSprite.setBlendColor([0, 0, 0, 0]);
		}
		if (this._effectType === 'spin') {
			if (this._rotationSprite && this._rotationSprite.parent) {
				this._rotationSprite.parent.removeChild(this._rotationSprite);
			}
			this._targetSprite.opacity = this._originalValues.opacity;
			return;
		}
	}
}

Scene_Map.prototype.updateEventEffects = function () {
	const effectsToRemove = [];
	activeEffects.forEach((effectData, characterId) => {
		const isComplete = !effectData.effect.update();
		if (isComplete) {
			effectsToRemove.push(characterId);
			if (effectData.interpreter && effectData.wait) {
				effectData.interpreter.waitMode = '';
			}
		}
	});
	effectsToRemove.forEach(id => activeEffects.delete(id));
};

PluginManager.registerCommand(HpluginName, "EventEffect", function (args) {
	const target = args.target;
	const effect = args.effect;
	const duration = parseInt(args.duration) || 60;
	const intensity = parseInt(args.intensity) || 5;
	const wait = args.wait === 'true';
	const origin = args.origin || 'center';
	const targetCharacters = findTargets(target, this);

	targetCharacters.forEach(character => {
		const characterId = character === $gamePlayer ? 'player' : character.eventId();
		if (activeEffects.has(characterId)) {
			activeEffects.get(characterId).effect.cleanupEffect();
			activeEffects.delete(characterId);
		}
		const effectSprite = new Sprite_EventEffect(character, effect, duration, intensity, origin);
		activeEffects.set(characterId, {
			effect: effectSprite,
			interpreter: this,
			wait: wait
		});
	});
	if (wait && targetCharacters.length > 0) {
		this.waitMode = 'effect';
	}
});

const H_Game_Interpreter_updateWaitMode = Game_Interpreter.prototype.updateWaitMode;
Game_Interpreter.prototype.updateWaitMode = function () {
	if (this.waitMode === 'effect') {
		const stillWaiting = Array.from(activeEffects.values()).some(
			effectData => effectData.interpreter === this && effectData.wait
		);
		if (!stillWaiting) {
			this.waitMode = '';
			return false;
		}
		return true;
	}
	if (this.waitMode === 'knockback') {
		if (this.knockbackWait) {
			const stillActive = this.knockbackWait.some(char =>
				char.knockback && char.knockback.active
			);
			if (!stillActive) {
				this.waitMode = '';
				this.knockbackWait = null;
				return false;
			}
			return true;
		}
		this.waitMode = '';
		return false;
	}
	return H_Game_Interpreter_updateWaitMode.call(this);
};

Game_Event.prototype.setupCustomProperties = function () {
	this._customHue = Number(this.event().meta.hue) || 0;
};

Sprite_Character.prototype.updateCustomProperties = function () {
	if (this._character._customHue !== undefined) {
		this.setHue(this._character._customHue);
	}
};

Sprite_Character.prototype.setHue = function (hue) {
	hue = ((hue % 360) + 360) % 360;
	if (hue > 180) hue -= 360;
	this.setColorTone([0, 0, 0, 0]);
	this._hue = hue;
	this._updateColorFilter();
};

//============================================================
// DOT MOVE ADD ON
//============================================================

const H_Game_CharacterBase_initMembers = Game_CharacterBase.prototype.initMembers;
Game_CharacterBase.prototype.initMembers = function () {
	H_Game_CharacterBase_initMembers.call(this);
	this._rotation = 0;
	this._originPoint = "center";
	this._useCustomRotation = false;
	this.lockInEnabled = false;
	this.lockInNotetag = null;
	this.lockInRange = 0;
	this.lockInTarget = null;
	this.lockInPreviousTarget = null;
	this.lockInSwitchTarget = false;
	this.lockInRunFreely = true;
	this.lockInTargetImage = '';
	this.lockInSprite = null;
	this.lockIndicatorAnim = 'pulse';
	this.lockIndicatorPos = 'above';
	this.lockInMemoryEventId = null;
	this._hasRotationCapability = false;
};

Game_CharacterBase.prototype.rotation = function () {
	if (this._useCustomRotation) {
		return this._rotation;
	}
	return this._rotation;
};

Game_CharacterBase.prototype._applyRotation = function (deg, lerpFrames) {
	if (lerpFrames && lerpFrames > 0) {
		const current = this._rotation ?? 0;
		let diff = ((deg - current) % 360 + 540) % 360 - 180;
		this._rotateLerp = {
			start: current,
			target: current + diff,
			frames: lerpFrames,
			elapsed: 0
		};
		this._waitCount = lerpFrames - 1;
	} else {
		this._rotateLerp = null;
		this.setRotation(deg);
	}
};

Game_CharacterBase.prototype.setRotation = function (deg) {
	const hadRotationCapability = this._hasRotationCapability;
	this._rotation = deg;
	this._hasRotationCapability = true;
	if (!hadRotationCapability && this._hasRotationCapability) {
		this._realY -= 0.5;  // Move up half tile when first rotated to avoid some bug I forgot about
	}
};

Game_CharacterBase.prototype.originPoint = function () {
	return this._originPoint;
};

Game_CharacterBase.prototype.setOriginPoint = function (origin) {
	this._originPoint = origin;
};

Game_CharacterBase.prototype.setCustomRotation = function (enabled) {
	this._useCustomRotation = enabled;
};

const H_Sprite_Character_updatePosition = Sprite_Character.prototype.updatePosition;
Sprite_Character.prototype.updatePosition = function () {
	H_Sprite_Character_updatePosition.call(this);

	if (this._character === $gamePlayer && (playerGraphicalOffsetX !== 0 || playerGraphicalOffsetY !== 0)) {
		this.x += playerGraphicalOffsetX;
		this.y += playerGraphicalOffsetY;
	}

	if (this._character instanceof Game_Event) {
		const event = this._character.event();
		if (event.meta && event.meta['sprite offset']) {
			if (event._cachedSpriteOffsetX === undefined) {
				const offsetString = event.meta['sprite offset'];
				const offsetMatch = offsetString.match(/(-?\d+)\s*,\s*(-?\d+)/);

				if (offsetMatch) {
					const offsetX = parseInt(offsetMatch[1]);
					const offsetY = parseInt(offsetMatch[2]);

					event._cachedSpriteOffsetX = !isNaN(offsetX) ? offsetX : 0;
					event._cachedSpriteOffsetY = !isNaN(offsetY) ? offsetY : 0;
				} else {
					event._cachedSpriteOffsetX = 0;
					event._cachedSpriteOffsetY = 0;
				}
			}

			this.x += event._cachedSpriteOffsetX;
			this.y += event._cachedSpriteOffsetY;
		}
	}

	if (this._character && this._character.customRotationPoint) {
		if (!this._character._lockSpriteRotation) {
			this.rotation = (this._character.rotation() * Math.PI) / 180;
		}
		const origin = this._character.originPoint();

		if (this._character.cachedShouldCheckFlip === undefined) {
			this._character.cachedShouldCheckFlip = origin === 'player' ||
				(!isNaN(origin)) ||
				origin.startsWith('<') ||
				$gameMap.events().some(event => event.event().name === origin);
		}

		if (this._character.cachedShouldCheckFlip && !this._character._lockSpriteRotation) {
			let currentAngle = this._character.rotation() % 360;
			if (currentAngle < 0) currentAngle += 360;

			this.scale.x = (currentAngle >= 179 && currentAngle <= 359) ? -1 : 1;
		}

		if (origin === 'player') {
			this.x = $gamePlayer.screenX();
			this.y = $gamePlayer.screenY() - 24;
		} else if (!isNaN(origin)) {
			const event = $gameMap.event(Number(origin));
			if (event) {
				this.x = event.screenX();
				this.y = event.screenY() - 24;
			}
		} else if (origin.startsWith('<')) {
			const nearest = findNearestTarget(origin, this._character.x, this._character.y);
			if (nearest) {
				this.x = nearest.screenX();
				this.y = nearest.screenY() - 24;
			}
		} else {
			if (this._character.cachedNamedEvent === undefined) {
				this._character.cachedNamedEvent = $gameMap.events().find(event => event.event().name === origin) || null;
			}
			const namedEvent = this._character.cachedNamedEvent;
			if (namedEvent) {
				this.x = namedEvent.screenX();
				this.y = namedEvent.screenY() - 24;
			} else {
				switch (origin) {
					case "top-left":
						this.anchor.x = 0;
						this.anchor.y = 0;
						break;
					case "top":
						this.anchor.x = 0.5;
						this.anchor.y = 0;
						break;
					case "top-right":
						this.anchor.x = 1;
						this.anchor.y = 0;
						break;
					case "right":
						this.anchor.x = 1;
						this.anchor.y = 0.5;
						break;
					case "bottom-right":
						this.anchor.x = 1;
						this.anchor.y = 1;
						break;
					case "bottom":
						this.anchor.x = 0.5;
						this.anchor.y = 1;
						break;
					case "bottom-left":
						this.anchor.x = 0;
						this.anchor.y = 1;
						break;
					case "left":
						this.anchor.x = 0;
						this.anchor.y = 0.5;
						break;
					case "center":
					default:
						this.anchor.x = 0.5;
						this.anchor.y = 0.5;
						break;
				}
			}
		}
	} else {
		this.rotation = 0;
	}

	if (this._character._shakeOffsetX !== undefined) {
		this.x += this._character._shakeOffsetX;
	}
	if (this._character._shakeOffsetY !== undefined) {
		this.y += this._character._shakeOffsetY;
	}
	if (this._character._bounceOffsetY !== undefined) {
		this.y += this._character._bounceOffsetY;
	}
};

if (H_DotMoveSystem) {
	//Game_CharacterBase.prototype.collisionRect = function () {
	//	const width = this.width();
	//	const height = this.height();
	//	const offsetX = (width - 1) / 2;
	//	const offsetY = (height - 1) / 2;
	//	return new DotMoveSystem.DotMoveRectangle(
	//		this._realX - offsetX,
	//		this._realY - offsetY,
	//		width,
	//		height
	//	);
	//};
	DotMoveSystem.DotMoveUtils.direction2Axis = function (direction) {
		if (direction === 4 || direction === 6) {
			return "x";
		}
		else if (direction === 8 || direction === 2) {
			return "y";
		}
		else if (direction === 9 || direction === 3 || direction === 7 || direction === 1) {
			return "y";
		}
		else {
			throw new Error(`${direction} is not found`);
		}
	};

	DotMoveSystem.CharacterMover.prototype.moveToTargetSingleStep = function (targetPoint) {
		const fromPoint = this._character.positionPoint();
		const deg = fromPoint.calcDeg(targetPoint);
		const dir = deg.toDirection4(this._character.direction());
		this.setDirection(dir);

		// Single step movement (no continuous movement)
		const moved = this.createDotMoveProcess().dotMoveByDeg(deg, this._character.distancePerFrame());
		this._character.moveCallback(moved, this._character.distancePerFrame());
	};

	// Default MoveToPlayer like Dot Move which use continous movement
	DotMoveSystem.CharacterMover.prototype.moveToTargetContinous = function (targetPoint) {
		const fromPoint = this._character.positionPoint();
		const deg = fromPoint.calcDeg(targetPoint);
		const dir = deg.toDirection4(this._character.direction());
		this.setDirection(dir);
		const targetFar = fromPoint.calcFar(targetPoint);
		this.startContinuousMove(targetFar, deg);
	};

	Game_Character.prototype.moveToTargetSingleStep = function (x, y) {
		this.mover().moveToTargetSingleStep(new DotMoveSystem.DotMovePoint(x, y));
	};

	Game_Character.prototype.moveToTargetContinous = function (x, y) {
		this.mover().moveToTargetContinous(new DotMoveSystem.DotMovePoint(x, y));
	};

	// Comment support <collisionRect: width, height, offset x, offset y>
	DotMoveSystem.EventDotMoveTempData.prototype.initialize = function (character) {
		DotMoveSystem.CharacterDotMoveTempData.prototype.initialize.call(this, character);
		const values = character.getAnnotationValues(0);

		if (values.collisionRect != null) {
			const parts = values.collisionRect.split(',').map(part => parseFloat(part.trim()));
			if (parts.length >= 2) {
				this._width = parts[0];
				this._height = parts[1];
				this._offsetX = parts.length >= 3 ? parts[2] : 0;
				this._offsetY = parts.length >= 4 ? parts[3] : 0;
			}
		} else {
			this._width = values.width != null ? parseFloat(values.width) : 1;
			this._height = values.height != null ? parseFloat(values.height) : 1;
			this._offsetX = values.offsetX != null ? parseFloat(values.offsetX) : 0;
			this._offsetY = values.offsetY != null ? parseFloat(values.offsetY) : 0;
		}

		this._widthArea = values.widthArea != null ? parseFloat(values.widthArea) : 0.5;
		this._heightArea = values.heightArea != null ? parseFloat(values.heightArea) : 0.5;
		this._slideLengthX = values.slideLengthX != null ? parseFloat(values.slideLengthX) : 0.5;
		this._slideLengthY = values.slideLengthY != null ? parseFloat(values.slideLengthY) : 0.5;
		this._eventTouchToPlayer = false;
	};

	Game_Map.prototype.allCharacters = function () {
		return new Set([$gamePlayer, ...this.events(), ...$gamePlayer.followers().data()]);
	};

	Game_Player.prototype.checkCollisionTargetCharacter = function (x, y, d, character) {
		if (character instanceof Game_Event) {
			return this.checkCollisionTargetEvent(x, y, d, character);
		}
		return false;
	};

	Game_CharacterBase.prototype.updateMapCharactersCache = function () {
		if (this instanceof Game_Vehicle) {
			return;
		}
		this.dotMoveTempData().mapCharacterCacheUpdater.updateMapCharactersCache();
	};

	// Fix issue player can trigger both event if they're standing next to each other
	Game_Player.prototype.startMapEventFront = function (x, y, d, triggers, normal, isTouch) {
		if ($gameMap.isEventRunning())
			return;
		if (isTouch && (this.isThrough() || this.isDebugThrough()))
			return;
		const dpf = this.distancePerFrame();
		// Make player only trigger the closest event to him
		const results = this.mover().checkHitCharactersStepDir(x, y, d, Game_Event);

		if (results.length > 1) {
			results.sort((a, b) => {
				const distA = this.calcFar(a.targetObject);
				const distB = this.calcFar(b.targetObject);
				return distA - distB;
			});
		}

		for (const result of results) {
			const event = result.targetObject;
			const axis = DotMoveSystem.DotMoveUtils.direction2Axis(d);
			const otherAxis = axis === "y" ? "x" : "y";

			const otherAxisLen = isTouch ? dpf * 0.75 : 0;
			if (result.getCollisionLength(otherAxis) > 0 && result.getCollisionLength(axis) >= otherAxisLen) {
				if (event.isTriggerIn(triggers) && event.isNormalPriority() === normal) {
					if (isTouch && event.isThrough())
						continue;
					event.start();
					break;
				}
			}
		}
	};
	Game_Player.prototype.startMapEvent = function (x, y, triggers, normal) {
		if ($gameMap.isEventRunning())
			return;
		const tempData = this.dotMoveTempData();
		const hasDecideTrigger = triggers.includes(0);
		for (const result of this.mover().checkHitCharacters(x, y, this._direction, Game_Event)) {
			const event = result.targetObject;
			const eventId = event.eventId();
			if (!hasDecideTrigger) {
				if (tempData.collideTriggerEventIds.includes(eventId))
					continue;
			}
			if (result.collisionLengthX() > 0 && result.collisionLengthY() > 0) {
				if (event.isTriggerIn(triggers) && event.isNormalPriority() === normal) {
					if (!hasDecideTrigger) {
						if (!tempData.collideTriggerEventIds.includes(eventId)) {
							tempData.collideTriggerEventIds.push(eventId);
						}
					}
					event.start();
					break;
				}
			}
		}
	};

	// Fix issue related to if player and event size too small (below 0.5) then trigger won't happen. Basically, removing the threshold in Dot Move
	//Game_Player.prototype.startMapEventFront = function (x, y, d, triggers, normal, isTouch) {
	//	if ($gameMap.isEventRunning())
	//		return;
	//	if (isTouch && (this.isThrough() || this.isDebugThrough()))
	//		return;
	//	const dpf = this.distancePerFrame();
	//	for (const result of this.mover().checkHitCharactersStepDir(x, y, d, Game_Event)) {
	//		const event = result.targetObject;
	//		const axis = DotMoveSystem.DotMoveUtils.direction2Axis(d);
	//		const otherAxis = axis === "y" ? "x" : "y";

	//		const otherAxisLen = isTouch ? dpf * 0.75 : 0;
	//		if (result.getCollisionLength(otherAxis) > 0 && result.getCollisionLength(axis) >= otherAxisLen) {
	//			if (event.isTriggerIn(triggers) && event.isNormalPriority() === normal) {
	//				if (isTouch && event.isThrough())
	//					continue;
	//				event.start();
	//			}
	//		}
	//	}
	//};
	//Game_Player.prototype.startMapEvent = function (x, y, triggers, normal) {
	//	if ($gameMap.isEventRunning())
	//		return;
	//	const tempData = this.dotMoveTempData();
	//	const hasDecideTrigger = triggers.includes(0);
	//	for (const result of this.mover().checkHitCharacters(x, y, this._direction, Game_Event)) {
	//		const event = result.targetObject;
	//		const eventId = event.eventId();
	//		if (!hasDecideTrigger) {
	//			if (tempData.collideTriggerEventIds.includes(eventId))
	//				continue;
	//		}
	//		if (result.collisionLengthX() > 0 && result.collisionLengthY() > 0) {
	//			if (event.isTriggerIn(triggers) && event.isNormalPriority() === normal) {
	//				if (!hasDecideTrigger) {
	//					if (!tempData.collideTriggerEventIds.includes(eventId)) {
	//						tempData.collideTriggerEventIds.push(eventId);
	//					}
	//				}
	//				event.start();
	//			}
	//		}
	//	}
	//};
};

//============================================================
// PLAYER MOVEMENT (BLOCK OR UNBLOCK)
//============================================================

let playerMovementDisabled = false;
const movementKeys = ["left", "up", "right", "down", "downLeft", "downRight", "upLeft", "upRight"];

const _heldMovementKeys = new Set();

const H_Input_onKeyDown = Input._onKeyDown;
Input._onKeyDown = function (event) {
	H_Input_onKeyDown.call(this, event);
	const keyName = this.keyMapper[event.keyCode];
	if (keyName && movementKeys.includes(keyName)) {
		_heldMovementKeys.add(keyName);
	}
};

const H_Input_onKeyUp = Input._onKeyUp;
Input._onKeyUp = function (event) {
	H_Input_onKeyUp.call(this, event);
	const keyName = this.keyMapper[event.keyCode];
	if (keyName && movementKeys.includes(keyName)) {
		_heldMovementKeys.delete(keyName);
	}
};

const H_Input_isPressed = Input.isPressed;
Input.isPressed = function (keyName) {
	if (HallInputBlocked) return false;
	if (playerMovementDisabled && movementKeys.includes(keyName)) return false;
	return H_Input_isPressed.call(this, keyName);
};

const H_Input_isRepeated = Input.isRepeated;
Input.isRepeated = function (keyName) {
	if (HallInputBlocked) return false;
	if (playerMovementDisabled && movementKeys.includes(keyName)) return false;
	return H_Input_isRepeated.call(this, keyName);
};

const H_Input_isLongPressed = Input.isLongPressed;
Input.isLongPressed = function (keyName) {
	if (HallInputBlocked) return false;
	if (playerMovementDisabled && movementKeys.includes(keyName)) return false;
	return H_Input_isLongPressed.call(this, keyName);
};

const H_TouchInput_isTriggered = TouchInput.isTriggered.bind(TouchInput);
TouchInput.isTriggered = function () {
	if (HallInputBlocked) return false;
	return H_TouchInput_isTriggered();
};

const H_TouchInput_isPressed = TouchInput.isPressed.bind(TouchInput);
TouchInput.isPressed = function () {
	if (HallInputBlocked) return false;
	return H_TouchInput_isPressed();
};

const H_TouchInput_isCancelled = TouchInput.isCancelled.bind(TouchInput);
TouchInput.isCancelled = function () {
	if (HallInputBlocked) return false;
	return H_TouchInput_isCancelled();
};

const H_Input_pollGamepads = Input._pollGamepads;
Input._pollGamepads = function () {
	if (HallInputBlocked) return;
	if (playerMovementDisabled) {
		const origCurrentState = { ...this._currentState };
		H_Input_pollGamepads.call(this);
		for (const key of movementKeys) {
			this._currentState[key] = origCurrentState[key] || false;
		}
		return;
	}
	H_Input_pollGamepads.call(this);
};

const H_Game_Player_moveByInput = Game_Player.prototype.moveByInput;
Game_Player.prototype.moveByInput = function () {
	if (playerMovementDisabled) {
		$gameTemp.clearDestination();
		return;
	}
	H_Game_Player_moveByInput.call(this);
};

PluginManager.registerCommand(HpluginName, "GameMode", args => {
	isBeatEmUp = args.gameMode === 'beatup';
	$gameSystem._isBeatEmUp = isBeatEmUp;
});

PluginManager.registerCommand(HpluginName, "ControlPlayerMovement", args => {
	const wasDisabled = playerMovementDisabled;
	playerMovementDisabled = !(args.allowMovement === 'true');

	if (playerMovementDisabled) {
		for (const key of movementKeys) {
			delete Input._currentState[key];
		}
		if (typeof AnalogStickExPluginName !== 'undefined' && Input._analogStickState) {
			Input._analogStickState = {};
		}
		$gameTemp.clearDestination();
	} else if (wasDisabled) {
		for (const key of _heldMovementKeys) {
			Input._currentState[key] = true;
		}
	}
});

PluginManager.registerCommand(HpluginName, "ControlInput", args => {
	HallInputBlocked = args.blockAllInput === 'true';
	if (HallInputBlocked) {
		Input.clear();
		TouchInput.clear();
	}
});

const H_Scene_Title_start = Scene_Title.prototype.start;
Scene_Title.prototype.start = function () {
	HallInputBlocked = false;
	H_Scene_Title_start.call(this);
};

//============================================================
// PASSABLE TILES AND EVENTS
//============================================================

let passageCache = {};

function SgenerateCacheKeyH(x, y, bit) {
	return `${x},${y},${bit}`;
}

Game_Map.prototype.initializePassCache = function () {
	if (!(this._passEvents instanceof Set)) {
		this._passEvents = new Set(Array.isArray(this._passEvents) ? this._passEvents : []);
	}
	if (!(this._allowRegions instanceof Set)) {
		this._allowRegions = new Set(Array.isArray(this._allowRegions) ? this._allowRegions : []);
	}
	if (!(this._blockRegions instanceof Set)) {
		this._blockRegions = new Set(Array.isArray(this._blockRegions) ? this._blockRegions : []);
	}
	if (!(this._passEventPositions instanceof Set)) {
		this._passEventPositions = new Set(Array.isArray(this._passEventPositions) ? this._passEventPositions : []);
	}

	if (allowRegionID > 0) { this._allowRegions.add(allowRegionID); }
	if (blockRegionID > 0) { this._blockRegions.add(blockRegionID); }

	this.events().forEach(event => {
		if (event && event.event() && event.event().note && event.event().note.includes('<pass>')) {
			this._passEvents.add(event.eventId());
			this._passEventPositions.add(`${event.x},${event.y}`);
		}
	});
};

Game_Map.prototype.hasPassEventAt = function (x, y) {
	if (!this._passEventPositions?.has) {
		this.buildPassEventPositions();
	}
	if (passableSwitch > 0 && !$gameSwitches.value(passableSwitch)) {
		return false;
	}
	return this._passEventPositions.has(`${x},${y}`);
};

Game_Map.prototype.buildPassEventPositions = function () {
	this._passEventPositions = new Set();

	if (!this._passEvents) {
		this.initializePassCache();
	}

	for (const eventId of this._passEvents) {
		const event = this.event(eventId);
		if (event && event._pageIndex >= 0) {
			this._passEventPositions.add(`${event.x},${event.y}`);
		}
	}
};

Game_Map.prototype.clearPassageCacheForPosition = function (x, y) {
	for (let bit = 1; bit <= 15; bit++) {
		const cacheKey = SgenerateCacheKeyH(x, y, bit);
		delete passageCache[cacheKey];
	}
};

Game_Map.prototype.addPassEvent = function (eventId, x, y) {
	if (!this._passEvents) {
		this.initializePassCache();
	}
	this._passEvents.add(eventId);
	if (!this._passEventPositions) {
		this._passEventPositions = new Set();
	}
	this._passEventPositions.add(`${x},${y}`);
	this.clearPassageCacheForPosition(x, y);
};

Game_Map.prototype.removePassEvent = function (eventId, x, y) {
	if (this._passEvents) {
		this._passEvents.delete(eventId);
	}
	if (this._passEventPositions) {
		this._passEventPositions.delete(`${x},${y}`);
	}
	this.clearPassageCacheForPosition(x, y);
};

const H_Game_Event_setPosition = Game_Event.prototype.setPosition;
Game_Event.prototype.setPosition = function (x, y) {
	const passOldX = this._x;
	const passOldY = this._y;
	H_Game_Event_setPosition.call(this, x, y);
	if ($gameMap._passEvents && $gameMap._passEvents.has(this._eventId)) {
		if ($gameMap._passEventPositions) {
			$gameMap._passEventPositions.delete(`${passOldX},${passOldY}`);
			$gameMap._passEventPositions.add(`${x},${y}`);
		}
		$gameMap.clearPassageCacheForPosition(passOldX, passOldY);
		$gameMap.clearPassageCacheForPosition(x, y);
	}
};

const allowRegionID = Number(Hparameters['Allow Region ID'] || 0);
Game_Map.prototype.checkPassage = function (x, y, bit) {
	const cacheKey = SgenerateCacheKeyH(x, y, bit);

	if (passageCache.hasOwnProperty(cacheKey)) {
		return passageCache[cacheKey];
	}

	if (this._allowRegions?.has(this.regionId(x, y))) {
		passageCache[cacheKey] = true;
		return true;
	}

	if (this.hasPassEventAt(x, y)) {
		passageCache[cacheKey] = true;
		return true;
	}

	const flags = this.tilesetFlags();
	const tiles = this.allTiles(x, y);

	if (passageType === 'action') {
		for (const tileId of tiles) {
			const flag = flags[tileId];
			if ((flag & 0x10) !== 0) continue;

			if ((flag & bit) === bit) {
				passageCache[cacheKey] = false;
				return false;
			}
		}

		passageCache[cacheKey] = true;
		return true;
	} else {
		for (const tileId of tiles) {
			const flag = flags[tileId];
			if ((flag & 0x10) !== 0) continue;

			if ((flag & bit) === 0) {
				passageCache[cacheKey] = true;
				return true;
			}
			if ((flag & bit) === bit) {
				passageCache[cacheKey] = false;
				return false;
			}
		}

		passageCache[cacheKey] = true;
		return true;
	}
};

const blockRegionID = Number(Hparameters['Block Region ID'] || 0);
const buildingWallBlock = (Hparameters['Building & Wall Block'] || 'false') === 'true';
const blockTarget = String(Hparameters['blockTarget'] || 'both');

const H_Game_Map_isPassable = Game_Map.prototype.isPassable;
Game_Map.prototype.isPassable = function (x, y, d) {
	if (!this._allowRegions) this.initializePassCache();
	if (this._allowRegions && this._allowRegions.has(this.regionId(x, y))) {
		return true;
	}
	if (this.hasPassEventAt(x, y)) {
		return true;
	}
	const isPlayer = this._interpreter ? this._interpreter._eventId === 0 : false;
	if (SshouldBlockPassageH(x, y, isPlayer)) {
		return false;
	}
	return H_Game_Map_isPassable.call(this, x, y, d);
};

function SshouldBlockPassageH(x, y, isPlayer) {
	if ((isPlayer && blockTarget === 'events') || (!isPlayer && blockTarget === 'player')) {
		return false;
	}

	if (blockRegionID > 0 && $gameMap.regionId(x, y) === blockRegionID) {
		return true;
	}
	if (buildingWallBlock) {
		const tiles = $gameMap.allTiles(x, y);
		const flags = $gameMap.tilesetFlags();

		for (const tileId of tiles) {
			if ((tileId >= 4352 && tileId <= 5887) || (tileId >= 5888 && tileId <= 8191)) {
				if (flags[tileId] & 0x0f) {
					return true;
				}
			}
		}
	}
	return false;
}

const H_Game_CharacterBase_isThrough = Game_CharacterBase.prototype.isThrough;
Game_CharacterBase.prototype.isThrough = function () {
	const isNormallyThrough = H_Game_CharacterBase_isThrough.call(this);
	if (this instanceof Game_Event && this._through) {
		return true;
	}
	if (isNormallyThrough && (blockRegionID > 0 || buildingWallBlock)) {
		const isPlayer = this === $gamePlayer;
		if ((isPlayer && blockTarget === 'events') || (!isPlayer && blockTarget === 'player')) {
			return isNormallyThrough;
		}
		if (this._priorityType === 2) {
			return isNormallyThrough;
		}
		const d = this.direction();
		const x2 = $gameMap.roundXWithDirection(this.x, d);
		const y2 = $gameMap.roundYWithDirection(this.y, d);
		if (SshouldBlockPassageH(x2, y2, isPlayer)) {
			return false;
		}
	}
	return isNormallyThrough;
};

if (H_DotMoveSystem) {
	const H_Game_CharacterBase_isMapPassable = Game_CharacterBase.prototype.isMapPassable;
	Game_CharacterBase.prototype.isMapPassable = function (x, y, d) {
		const x2 = $gameMap.roundXWithDirection(x, d);
		const y2 = $gameMap.roundYWithDirection(y, d);

		if ($gameMap._allowRegions && $gameMap._allowRegions.has($gameMap.regionId(x2, y2))) {
			return true;
		}

		if ($gameMap.hasPassEventAt(x2, y2)) {
			return true;
		}

		const isPlayer = this === $gamePlayer;
		if (this._priorityType !== 2 && SshouldBlockPassageH(x2, y2, isPlayer)) {
			return false;
		}

		return H_Game_CharacterBase_isMapPassable.call(this, x, y, d);
	};

	// This causes performance drop
	const H_CharacterCollisionChecker_checkPassMass = DotMoveSystem.CharacterCollisionChecker.prototype.checkPassMass;
	DotMoveSystem.CharacterCollisionChecker.prototype.checkPassMass = function (ix, iy, d) {
		if ($gameMap._allowRegions && $gameMap._allowRegions.has($gameMap.regionId(ix, iy))) {
			return true;
		}

		if ($gameMap.hasPassEventAt(ix, iy)) {
			return true;
		}

		const isPlayer = this._character === $gamePlayer;
		if (this._character._priorityType !== 2 && SshouldBlockPassageH(ix, iy, isPlayer)) {
			return false;
		}

		return H_CharacterCollisionChecker_checkPassMass.call(this, ix, iy, d);
	};
}

Game_Map.prototype.clearPassageCache = function () {
	passageCache = {};
};

//============================================================
// EVENT FRAME ANIMATION SPEED
//============================================================

const _Game_Event_initMembers = Game_Event.prototype.initMembers;
Game_Event.prototype.initMembers = function () {
	_Game_Event_initMembers.call(this);
	this._frameASpeed = null;
	this.isPlayerChild = false;
	this.childOffsetX = 0;
	this.childOffsetY = 0;
};

Game_Event.prototype.setupFrameSpeed = function () {
	if (this.page()) {
		const frameSpeed = this.extractFrameSpeedFromComment();
		this._frameASpeed = frameSpeed !== null ? frameSpeed : null;
	}
};

Game_Event.prototype.extractFrameSpeedFromComment = function () {
	const list = this.list();
	for (const command of list) {
		if (command.code === 108 || command.code === 408) {
			const regex = /<stepping speed:\s*(\d+)>/i;
			const match = regex.exec(command.parameters[0]);
			if (match) {
				return parseInt(match[1]);
			}
		}
	}
	return null;
};

Game_Event.prototype.customAnimationWait = function () {
	if (this._frameASpeed !== null) {
		return this._frameASpeed;
	} else {
		return null;
	}
};

const _Sprite_Character_updatePattern = Sprite_Character.prototype.updatePattern;
Sprite_Character.prototype.updatePattern = function () {
	if (this._character instanceof Game_Event && this._character.customAnimationWait() !== null) {
		const frameSpeed = this._character.customAnimationWait();
		this._patternCounter = (this._patternCounter + 1) % frameSpeed;
		if (this._patternCounter === 0) {
			this._character.setPattern((this._character.pattern() + 1) % this._character.maxPattern());
		}
	} else {
		_Sprite_Character_updatePattern.call(this);
	}
};

const _Game_CharacterBase_animationWait = Game_CharacterBase.prototype.animationWait;
Game_CharacterBase.prototype.animationWait = function () {
	if (this instanceof Game_Event && this.customAnimationWait() !== null) {
		return this.customAnimationWait();
	} else {
		return _Game_CharacterBase_animationWait.call(this);
	}
};

//=============================================================================
// Clickable Events
//=============================================================================

window._eventsWithOutline = new Map();

const H_Sprite_Character_initialize = Sprite_Character.prototype.initialize;
Sprite_Character.prototype.initialize = function (character) {
	H_Sprite_Character_initialize.call(this, character);
	this._outlineFilter = null;
	if (this._character instanceof Game_Event) {
		this.updateCustomProperties();
	}
};

Sprite_Character.prototype.createEventOutline = function () {
	if (!this._outlineFilter) {
		const thickness = Number(clickableOutlineSettings.Thickness || 2);
		const colorStr = String(clickableOutlineSettings.Color || '#FFFFFF').replace('#', '0x');
		const color = Number(colorStr) || 0xffff00;
		const opacity = Number(clickableOutlineSettings.Opacity !== undefined ? clickableOutlineSettings.Opacity : 255) / 255;
		this._outlineFilter = new PIXI.filters.OutlineFilter(thickness, color, 1.0, opacity);
	}
	if (!this.filters) this.filters = [];
	if (!this.filters.includes(this._outlineFilter)) {
		this.filters.push(this._outlineFilter);
	}
};

Sprite_Character.prototype.removeEventOutline = function () {
	if (!this._outlineFilter || !this.filters) return;
	this.filters = this.filters.filter(f => f !== this._outlineFilter);
	this._outlineFilter = null;
};

Sprite_Character.prototype.updateEventOutline = function () {
	if (!(this._character instanceof Game_Event)) return;

	const shouldShow = this.shouldHaveEventOutline() && this.isEventHovered();

	if (shouldShow && !this._outlineFilter) {
		this.createEventOutline();
	} else if (!shouldShow && this._outlineFilter) {
		this.removeEventOutline();
	}
};
Sprite_Character.prototype.shouldHaveEventOutline = function () {
	if (!this._character?.event) return false;

	const eventId = this._character.eventId();
	const checkInRange = (id, range) => {
		if (range === Infinity) return true;
		const dx = Math.abs($gameMap.deltaX(this._character.x, $gamePlayer.x));
		const dy = Math.abs($gameMap.deltaY(this._character.y, $gamePlayer.y));
		return dx <= range && dy <= range;
	};

	if (window._eventsWithOutline.has(eventId)) {
		return checkInRange(eventId, window._eventsWithOutline.get(eventId));
	}

	return false;
};

Sprite_Character.prototype.isEventHovered = function () {
	if (navigator.getGamepads && navigator.getGamepads()[0]) {
		const event = this._character;
		const range = window._eventsWithOutline.get(event._eventId) || 1;

		const dx = Math.abs($gameMap.deltaX(event.x, $gamePlayer.x));
		const dy = Math.abs($gameMap.deltaY(event.y, $gamePlayer.y));
		return dx <= range && dy <= range;
	}

	const screenX = this._character.screenX();
	const screenY = this._character.screenY();
	const hitbox = this._character.hitboxData();
	const touch = Imported.Hendrix_Map_Zoom ? HendrixTouchInput : TouchInput;

	return touch.x >= screenX - $gameMap.tileWidth() / 2 + hitbox.offsetX &&
		touch.x <= screenX - $gameMap.tileWidth() / 2 + hitbox.offsetX + hitbox.width * $gameMap.tileWidth() &&
		touch.y >= screenY - $gameMap.tileHeight() + hitbox.offsetY &&
		touch.y <= screenY - $gameMap.tileHeight() + hitbox.offsetY + hitbox.height * $gameMap.tileHeight();
};

Game_Event.prototype.isBeingHovered = function () {
	const screenX = this.screenX();
	const screenY = this.screenY();
	const hitbox = this.hitboxData();

	const left = screenX - $gameMap.tileWidth() / 2 + hitbox.offsetX;
	const top = screenY - $gameMap.tileHeight() + hitbox.offsetY;
	const right = left + hitbox.width * $gameMap.tileWidth();
	const bottom = top + hitbox.height * $gameMap.tileHeight();

	let range = 1;
	if (window._eventsWithOutline.has(this._eventId)) {
		range = window._eventsWithOutline.get(this._eventId);
	}
	const dx = Math.abs($gameMap.deltaX(this.x, $gamePlayer.x));
	const dy = Math.abs($gameMap.deltaY(this.y, $gamePlayer.y));
	const inRange = dx <= range && dy <= range;

	const touch = Imported.Hendrix_Map_Zoom ? HendrixTouchInput : TouchInput;
	const isOver = touch.x >= left && touch.x <= right &&
		touch.y >= top && touch.y <= bottom;

	return inRange && isOver;
};

Game_Event.prototype.setupClickable = function () {
	if (this.page()) {
		const clickableComment = this.list().find(command =>
			(command.code === 108 || command.code === 408) &&
			command.parameters[0].match(/<clickable(?::\s*(\d+))?>/i)
		);

		if (clickableComment) {
			const match = clickableComment.parameters[0].match(/<clickable(?::\s*(\d+))?>/i);
			const range = match[1] ? Number(match[1]) : 1;
			window._eventsWithOutline.set(this._eventId, range);
			this.hasOutline = true;
		} else {
			window._eventsWithOutline.delete(this._eventId);
			this.hasOutline = false;
		}
	}
}

Scene_Map.prototype.checkClickableEvents = function () {
	if ($gameMap.isEventRunning()) {
		return;
	}
	$gameMap.events().forEach(event => {
		if (!event || !event.page()) return;

		const clickableComment = event.list().find(command =>
			(command.code === 108 || command.code === 408) &&
			command.parameters[0].match(/<clickable(?::\s*(\d+))?>/i)
		);

		if (clickableComment) {
			event.isHovered = event.isBeingHovered();
			if (TouchInput.isTriggered() && event.isHovered) {
				event.start();
			}
		}
	});
};

const H_Sprite_Character_update = Sprite_Character.prototype.update;
Sprite_Character.prototype.update = function () {
	H_Sprite_Character_update.call(this);
	if (this._character.hasOutline) {
		this.updateEventOutline();
	}
	this.showEventIdAndName();
};

//============================================================
// PLATFORM
//============================================================

Game_Map.prototype.platformCache = null;
Game_Map.prototype.lastPlatformCache = 0;

const H_Game_Map_update = Game_Map.prototype.update;
Game_Map.prototype.update = function (sceneActive) {
	H_Game_Map_update.call(this, sceneActive);
	this.updatePlatforms();
	this.updatePauseState();
};

Game_Map.prototype.getPlatforms = function () {
	const currentFrame = Graphics.frameCount;
	if (!this.platformCache || currentFrame - this.lastPlatformCache >= 4) {
		this.platformCache = this.events().filter(event => {
			const note = event?.event().note;
			return note.includes('<platform');
		}).map(event => {
			const note = event.event().note;
			let size = $gameMap.tileWidth();

			if (note.match(/<platform:\s*(\d+)>/i)) {
				size = parseInt(RegExp.$1);
			}
			event.platformSize = size;
			return event;
		});
		this.lastPlatformCache = currentFrame;
	}
	return this.platformCache;
};

Game_Map.prototype.getNearestPlatform = function (character) {
	const platformList = this.getPlatforms();
	if (!platformList || platformList.length === 0) return null;

	let targetPlatform = null;
	let minSqDistance = Infinity;
	const tileW = $gameMap.tileWidth() || 48;

	for (let i = 0; i < platformList.length; i++) {
		const plat = platformList[i];
		const diffX = plat._realX - character._realX;
		const diffY = plat._realY - character._realY;
		const sqDist = (diffX * diffX) + (diffY * diffY);

		const platRange = plat.platformSize / tileW;
		const sqRange = platRange * platRange;

		if (sqDist <= sqRange && sqDist < minSqDistance) {
			minSqDistance = sqDist;
			targetPlatform = plat;
		}
	}

	return targetPlatform;
};

Game_Map.prototype.updatePlatforms = function () {
	this.getPlatforms().forEach(platform => {
		if (!platform.lastX) {
			platform.lastX = platform._realX;
			platform.lastY = platform._realY;
			return;
		}

		const deltaX = platform._realX - platform.lastX;
		const deltaY = platform._realY - platform.lastY;

		if (deltaX !== 0 || deltaY !== 0) {
			const characters = [$gamePlayer, ...this.events()];

			characters.forEach(char => {
				if (char !== platform) {
					if (this.getNearestPlatform(char) === platform) {
						char._realX += deltaX;
						char._realY += deltaY;
						char._x = Math.round(char._realX);
						char._y = Math.round(char._realY);

						char._animPlatShiftX = (char._animPlatShiftX || 0) + deltaX;
						char._animPlatShiftY = (char._animPlatShiftY || 0) + deltaY;

						if (char === $gamePlayer) {
							const mapWidth = this.width();
							const mapHeight = this.height();
							const screenWidth = this.screenTileX();
							const screenHeight = this.screenTileY();

							if (mapWidth > screenWidth) {
								this._displayX += deltaX;
								this._displayX = Math.max(0, Math.min(this._displayX, mapWidth - screenWidth));
							}

							if (mapHeight > screenHeight) {
								this._displayY += deltaY;
								this._displayY = Math.max(0, Math.min(this._displayY, mapHeight - screenHeight));
							}
						}
					}
				}
			});
		}

		platform.lastX = platform._realX;
		platform.lastY = platform._realY;
	});
};

window.onPlatform = function (identifier) {
	let character;
	if (identifier === 'player') {
		character = $gamePlayer;
	} else if (identifier === 'this') {
		const interpreter = $gameMap._interpreter;
		if (!interpreter) return false;
		character = $gameMap.event(interpreter._eventId);
	} else if (typeof identifier === 'string' && identifier.startsWith('<')) {
		character = findNearestTarget(identifier, $gamePlayer.x, $gamePlayer.y);
	} else {
		character = $gameMap.event(identifier);
	}

	if (!character) return false;

	for (const platform of $gameMap.getPlatforms()) {
		const deltaX = character._realX - platform._realX;
		const deltaY = character._realY - platform._realY;
		const platformRange = platform.platformSize / $gameMap.tileWidth();

		const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
		if (distance <= platformRange) {
			return true;
		}
	}

	return false;
};

// ================================================================
// 8 DIR - ANIMATION SOLUTION
// ================================================================

if (!Imported.Hendrix_Animation_Solution) {
	const spriteTypeCache = new Map();

	Game_CharacterBase.prototype.is8DirSprite = function () {
		if (!this._characterName) return false;
		if (spriteTypeCache.has(this._characterName)) {
			return spriteTypeCache.get(this._characterName);
		}
		const result = this._characterName.includes('8dir');
		spriteTypeCache.set(this._characterName, result);
		return result;
	};

	const _Game_CharacterBase_setDirection = Game_CharacterBase.prototype.setDirection;
	Game_CharacterBase.prototype.setDirection = function (d) {
		if (this.is8DirSprite()) {
			if ([1, 3, 7, 9].includes(d)) {
				this._direction = d;
				return;
			}
		}

		if (isBeatEmUp) {
			this._originalDirection = d;
			switch (d) {
				case 1: case 4: case 7:
					d = 4;
					break;
				case 2: case 8:
					d = (this._direction === 4) ? 4 : 6;
					break;
				case 3: case 6: case 9:
				default:
					d = 6;
					break;
			}
		}
		_Game_CharacterBase_setDirection.call(this, d);
	};

	if (H_DotMoveSystem) {
		const _Game_Character_dotMoveByDeg = Game_Character.prototype.dotMoveByDeg;
		Game_Character.prototype.dotMoveByDeg = function (deg) {
			_Game_Character_dotMoveByDeg.call(this, deg);
			if (this.is8DirSprite()) {
				const dir8 = (new DotMoveSystem.Degree(deg)).toDirection8();
				this.setDirection(dir8);
			}
		};

		const _CharacterMover_dotMoveByDirection = DotMoveSystem.CharacterMover.prototype.dotMoveByDirection;
		DotMoveSystem.CharacterMover.prototype.dotMoveByDirection = function (direction, dpf) {
			_CharacterMover_dotMoveByDirection.call(this, direction, dpf);

			const character = this._character;
			if (character && character.is8DirSprite()) {
				character.setDirection(direction);
			}
		};
	} else {
		const _Game_Player_getInputDirection = Game_Player.prototype.getInputDirection;
		Game_Player.prototype.getInputDirection = function () {
			if (this.is8DirSprite()) {
				return Input.dir8;
			} else {
				return _Game_Player_getInputDirection.call(this);
			}
		};

		const _Game_Player_executeMove = Game_Player.prototype.executeMove;
		Game_Player.prototype.executeMove = function (direction) {
			if (!this.is8DirSprite() || direction % 2 === 0) {
				_Game_Player_executeMove.call(this, direction);
			} else {
				let horz, vert;
				switch (direction) {
					case 7: horz = 4; vert = 8; break;
					case 9: horz = 6; vert = 8; break;
					case 1: horz = 4; vert = 2; break;
					case 3: horz = 6; vert = 2; break;
				}
				this.moveDiagonally(horz, vert);
			}
		};

		const _Game_CharacterBase_moveDiagonally = Game_CharacterBase.prototype.moveDiagonally;
		Game_CharacterBase.prototype.moveDiagonally = function (horz, vert) {
			_Game_CharacterBase_moveDiagonally.call(this, horz, vert);

			if (this.is8DirSprite()) {
				if (horz === 4 && vert === 8) this.setDirection(7);
				if (horz === 6 && vert === 8) this.setDirection(9);
				if (horz === 4 && vert === 2) this.setDirection(1);
				if (horz === 6 && vert === 2) this.setDirection(3);
			}

			if (isBeatEmUp) {
				if (horz === 4) {
					this._direction = 4;
				} else if (horz === 6) {
					this._direction = 6;
				}
			}
		};
	}

	const H_Sprite_Character_characterPatternY = Sprite_Character.prototype.characterPatternY;
	Sprite_Character.prototype.characterPatternY = function () {
		if (this._character && this._character.is8DirSprite()) {
			switch (this._character.direction()) {
				case 2: return 0;
				case 1: return 1;
				case 3: return 2;
				case 4: return 3;
				case 6: return 4;
				case 8: return 5;
				case 7: return 6;
				case 9: return 7;
				default: return 0;
			}
		} else {
			return H_Sprite_Character_characterPatternY.call(this);
		}
	};

	const H_Sprite_Character_patternHeight = Sprite_Character.prototype.patternHeight;
	Sprite_Character.prototype.patternHeight = function () {
		if (this._tileId > 0) {
			return $gameMap.tileHeight();
		} else if (this._character && this._character.is8DirSprite()) {
			return this.bitmap.height / 8;
		} else {
			return H_Sprite_Character_patternHeight.call(this);
		}
	};

	window.checkDirection = function (target, direction) {
		let character = null;
		if (target.toLowerCase() === 'player') {
			character = $gamePlayer;
		}
		if (!character) return false;
		return character.direction() === direction;
	};

	window.getDirection = function (target) {
		let character = null;
		if (target.toLowerCase() === 'player') {
			character = $gamePlayer;
		}
		if (!character) {
			return -1;
		}
		return character.direction();
	};
}
const Hen_Game_Player_executeMove = Game_Player.prototype.executeMove;
Game_Player.prototype.executeMove = function (direction) {
	if (isBeatEmUp) {
		const currentFacing = this._direction;
		Hen_Game_Player_executeMove.call(this, direction);

		switch (direction) {
			case 1: case 4: case 7:
				this._direction = 4;
				break;
			case 3: case 6: case 9:
				this._direction = 6;
				break;
			case 2: case 8:
				this._direction = (currentFacing === 4 || currentFacing === 6) ? currentFacing : 6;
				break;
		}
	} else {
		Hen_Game_Player_executeMove.call(this, direction);
	}
};

const Hen_Game_CharacterBase_moveStraight = Game_CharacterBase.prototype.moveStraight;
Game_CharacterBase.prototype.moveStraight = function (direction) {
	Hen_Game_CharacterBase_moveStraight.call(this, direction);

	if (isBeatEmUp) {
		switch (direction) {
			case 1:
			case 4:
			case 7:
				this._direction = 4;
				break;
			case 3:
			case 6:
			case 9:
				this._direction = 6;
				break;
			case 2:
			case 8:
				if (this._direction !== 4 && this._direction !== 6) {
					this._direction = 6;
				}
				break;
		}
	}
};

//============================================================
// JUMP
//============================================================

const jumpStateCache = new Map();

const _Game_CharacterBase_screenY = Game_CharacterBase.prototype.screenY;
Game_CharacterBase.prototype.screenY = function () {
	return _Game_CharacterBase_screenY.call(this) + (this.jumpY || 0);
};

const H_Game_Player_initMembers = Game_Player.prototype.initMembers;
Game_Player.prototype.initMembers = function () {
	H_Game_Player_initMembers.call(this);
	this._jumping = false;
	this._jumpVelocity = 0;
	this._jumpGravity = 0.4;
	this.jumpY = 0;
	this._maxJumpHeight = 0;
};

Game_CharacterBase.prototype.setupJumpProperties = function () {
	if (this.jumpY === undefined) {
		this._jumping = false;
		this._jumpVelocity = 0;
		this._jumpGravity = 0.4;
		this.jumpY = 0;
		this._maxJumpHeight = 0;
	}
};

Game_CharacterBase.prototype.updateJumpPhysics = function () {
	if (!this._jumping || this.jumpY === undefined) {
		return;
	}

	this._jumpVelocity += this._jumpGravity;
	this.jumpY += this._jumpVelocity;

	// If at peak height the change sprite priority to above player
	if (Math.abs(this.jumpY) > this._maxJumpHeight / 3) {
		this.setPriorityType(3);
	}

	// Landing
	if (this.jumpY >= 0) {
		this._jumping = false;
		this.jumpY = 0;
		this._jumpVelocity = 0;
		this.setPriorityType(this._originalPriorityType || 1);
	}
};

Game_CharacterBase.prototype.startJump = function (height, power) {
	this.setupJumpProperties();
	if (this._jumping) return;

	this._jumping = true;
	this._maxJumpHeight = height;
	this._jumpGravity = 0.4 * (power / 12);
	this._jumpVelocity = -Math.sqrt(2 * this._jumpGravity * height);
	this.jumpY = 0;

	this._originalPriorityType = this._priorityType || 1;
};

PluginManager.registerCommand(HpluginName, "PlayerJump", function (args) {
	const height = parseInt(args.height) || 30;
	const power = parseInt(args.power) || 12;
	const target = args.target || 'player';

	const targetCharacters = findTargets(target, this);
	targetCharacters.forEach(character => {
		if (character) {
			character.startJump(height, power);
		}
	});
});

let previousJumpState = false;

window.checkJump = function (target, status) {
	const targetCharacters = findTargets(target);
	return targetCharacters.some(character => {
		const characterId = character === $gamePlayer ? 'player' : character.eventId();
		const isJumping = character._jumping === true;

		let previousState = false;
		if (jumpStateCache.has(characterId)) {
			previousState = jumpStateCache.get(characterId);
		}
		jumpStateCache.set(characterId, isJumping);
		switch (status.toLowerCase()) {
			case 'jumping':
				return isJumping;

			case 'startedjump':
				return isJumping && !previousState;

			case 'landed':
				return !isJumping && previousState;

			default:
				return false;
		}
	});
};

window.playerJumping = function () {
	return $gamePlayer._jumping;
};

window.playerStartedJump = function () {
	const currentlyJumping = window.playerJumping();
	const justStarted = currentlyJumping && !previousJumpState;
	previousJumpState = currentlyJumping;
	return justStarted;
};

window.playerLanded = function () {
	const currentlyJumping = window.playerJumping();
	const justLanded = !currentlyJumping && previousJumpState;
	previousJumpState = currentlyJumping;
	return justLanded;
};

//============================================================
// BACKEND MOVEMENT ROUTE COMMAND
//============================================================

const _Game_Character_processMoveCommand = Game_Character.prototype.processMoveCommand;
Game_Character.prototype.processMoveCommand = function (command) {
	if (command.code === Game_Character.ROUTE_SCRIPT) {
		const script = command.parameters[0];
		if (script.match(/^(selfSwitch|dash|turnToward|rotateTo|setMoveSpeed|jumpToNearby|teleportTo|moveToPosition|jumpTo|dotMoveByDeg|playFrames|toFrame|shareDirection|sucking|moveToClosest|moveToTarget|lockTarget|switchLockTarget)/)) {
			eval(`this.${script}`);
			return;
		}
	}
	_Game_Character_processMoveCommand.call(this, command);
};

//============================================================
// COMMANDS CHECK
//============================================================

window.gotHit = function (eventId) {
	const damages = CollisionManager.getAndClearDamage(eventId);
	return damages && damages.length > 0;
}

window.HP = function (eventId) {
	if (eventId === 'player') {
		const leader = $gameParty.leader();
		return leader ? leader.hp : 0;
	}
	return $gameMap.getCurrentEventHp(eventId) || 0;
};

window.maxHP = function (eventId) {
	if (eventId === 'player') {
		return $gameParty.leader() ? $gameParty.leader().mhp : 0;
	}
	return $gameMap.getMaxEventHp(eventId) || 0;
};

window.hpDecreased = function (eventId) {
	const currentHp = $gameMap.getCurrentEventHp(eventId);
	if (currentHp === null) {
		return false;
	}
	if (lastHpDecrease[eventId] === undefined) {
		lastHpDecrease[eventId] = currentHp;
		return false;
	}
	if (currentHp < lastHpDecrease[eventId]) {
		lastHpDecrease[eventId] = currentHp;
		return true;
	}
	if (currentHp > lastHpDecrease[eventId]) {
		lastHpDecrease[eventId] = currentHp;
	}
	return false;
};

window.checkCollide = function (targetId, tags, collisionCooldownInFrames = 0, collisionRange = 6) {
	return $gameMap.taggedEventIsCollidingWithTargetEvent(targetId, tags, collisionCooldownInFrames, collisionRange);
};

window.shareCollide = function (targetId, tags, collisionCooldownInFrames = 0) {
	return $gameMap.shareCollidingWith(targetId, tags, collisionCooldownInFrames);
};

window.checkRange = function (source, range, target, eyes = 0, blockRegion = 0, exception = null) {
	return $gameSystem.checkInRange(source, range, target, eyes, blockRegion, exception);
};

window.checkDegree = function (target) {
	const event = target === 'player' ? $gamePlayer : findTarget(target);
	if (!event) return 0;
	return event._rotation || 0;
};

//============================================================
// FREEZE TIME
//============================================================

PluginManager.registerCommand(HpluginName, "pauseEvent", function (args) {
	if (args.pause === 'true') {
		$gameMap.pausingEvent = this._eventId;
		$gameMap.eventsPaused = true;
	} else {
		$gameMap.eventsPaused = false;
		$gameMap.pausingEvent = null;
	}
});

PluginManager.registerCommand(HpluginName, "PauseThenResume", args => {
	$gameMap.eventsPaused = true;
	$gameMap.pauseFramesLeft = parseInt(args.frames) || 60;
});

const H_Game_Player_update = Game_Player.prototype.update;
Game_Player.prototype.update = function (sceneActive) {
	if (!$gameMap.eventsPaused) {
		H_Game_Player_update.call(this, sceneActive);
	}

	const mapId = $gameMap.mapId();
	if ($gameSystem.passiveCommonEvents?.[mapId]?.['player']) {
		const storedStates = $gameSystem.passiveCommonEvents[mapId]['player'];

		if (!this.stateInterpreters) {
			this.stateInterpreters = {};
		}

		for (const stateId in storedStates) {
			const commonEventId = storedStates[stateId];

			if (!this.stateInterpreters[stateId]) {
				const interpreter = new Game_Interpreter();
				interpreter.setup($dataCommonEvents[commonEventId].list, 0);
				this.stateInterpreters[stateId] = interpreter;
			}
		}
	}

	if (this.stateInterpreters) {
		for (const stateId in this.stateInterpreters) {
			const interpreter = this.stateInterpreters[stateId];
			if (!interpreter.isRunning()) {
				const commonEventId = $gameSystem.passiveCommonEvents?.[mapId]?.['player']?.[stateId];
				if (commonEventId && $dataCommonEvents[commonEventId]) {
					interpreter.setup($dataCommonEvents[commonEventId].list, 0);
				}
			}
			interpreter.update();
		}
	}

	//--- Player as child of an event -------------------------------------
	if ($gamePlayer._parentEvent) {
		const parent = $gamePlayer._parentEvent;
		if (parent._erased || !$gameMap._events[parent._eventId]) {
			$gamePlayer._parentEvent = null;
			$gamePlayer._parentOffsetX = 0;
			$gamePlayer._parentOffsetY = 0;
		} else {
			const deltaX = parent._realX - $gamePlayer._lastParentX;
			const deltaY = parent._realY - $gamePlayer._lastParentY;
			if (deltaX !== 0 || deltaY !== 0) {
				$gamePlayer._realX += deltaX;
				$gamePlayer._realY += deltaY;
				$gamePlayer._x = Math.round($gamePlayer._realX);
				$gamePlayer._y = Math.round($gamePlayer._realY);
			}
			$gamePlayer._lastParentX = parent._realX;
			$gamePlayer._lastParentY = parent._realY;
		}
	}
	//----------------------------------------------------------------------
};

Game_Map.prototype.updatePauseState = function () {
	if (this.pauseFramesLeft > 0) {
		this.pauseFramesLeft--;
		if (this.pauseFramesLeft === 0) {
			$gameMap.eventsPaused = false;
		}
	}
};

//============================================================
// TARGET LOCK
//============================================================

PluginManager.registerCommand(HpluginName, "LockInTarget", function (args) {
	const lockCommand = args.lockCommand || 'enable';
	let notetag = args.notetag || '<enemy>';
	if (notetag.includes('$game')) {
		notetag = eval(notetag);
	}
	const range = parseInt(args.range) || 5;
	const autoSwitchTarget = args.autoSwitchTarget !== 'false';
	const runFreely = args.runFreely !== 'false';
	const targetImage = args.targetImage || '';
	const indicatorAnimation = args.indicatorAnimation || 'pulse';
	const indicatorPosition = args.indicatorPosition || 'above';

	const character = $gamePlayer;
	if (!character) return;

	if (lockCommand === 'disable') {
		if (character.lockInTarget) {
			character.lockInMemoryEventId = character.lockInTarget.eventId();
		}
		if (character.lockInSprite) {
			if (character.lockInSprite.parent) {
				character.lockInSprite.parent.removeChild(character.lockInSprite);
			}
			character.lockInSprite = null;
		}

		character.lockInEnabled = false;
		character.lockInTarget = null;
		character.lockInPreviousTarget = null;
		character.lockInNotetag = null;
		character.lockInRange = 0;
		character.lockInAutoSwitch = false;
		character.lockInTargetImage = '';
		character.lockInRunFreely = true;
		return;
	}

	if (lockCommand === 'switch') {
		if (!character.lockInEnabled) return;

		if (character.lockInTarget) {
			character.lockInPreviousTarget = character.lockInTarget;
			character.lockInTarget = null;
		}
		return;
	}

	if (lockCommand === 'enable') {
		character.lockInNotetag = notetag;
		character.lockInRange = range;
		character.lockInAutoSwitch = autoSwitchTarget;
		character.lockInRunFreely = runFreely;
		character.lockInTargetImage = targetImage;
		character.lockIndicatorAnim = indicatorAnimation;
		character.lockIndicatorPos = indicatorPosition;
		character.lockInEnabled = true;
		character.lockInTarget = null;
		character.lockInPreviousTarget = null;

		if (character.lockInMemoryEventId) {
			const rememberedEvent = $gameMap.event(character.lockInMemoryEventId);

			if (rememberedEvent &&
				rememberedEvent.event() &&
				rememberedEvent.event().note.includes(notetag)) {
				const dx = Math.abs(rememberedEvent.x - character.x);
				const dy = Math.abs(rememberedEvent.y - character.y);
				const distance = Math.sqrt(dx * dx + dy * dy);

				if (distance <= range) {
					character.lockInTarget = rememberedEvent;
				}
			}
			character.lockInMemoryEventId = null;
		}
	}
});

Game_CharacterBase.prototype.getLockedTarget = function () {
	if (!this.lockInEnabled || !this.lockInTarget) {
		return null;
	}
	if (this.lockInTarget !== $gamePlayer && (!this.lockInTarget.event || !this.lockInTarget.event())) {
		this.lockInTarget = null;
		return null;
	}
	return this.lockInTarget;
};

Game_CharacterBase.prototype.findLockInTarget = function () {
	if (!this.lockInEnabled || !this.lockInNotetag) return null;
	let currentNotetag = this.lockInNotetag;

	if (this.lockInOriginalTarget) {
		const target = eval(this.lockInOriginalTarget);
		currentNotetag = target === 'player' ? 'player' : (target.startsWith('<') && target.endsWith('>') ? target : `<${target}>`);
	}

	if (this.lockInTarget) {
		if (this.lockInTarget === $gamePlayer) {
			const dx = Math.abs($gamePlayer.x - this.x);
			const dy = Math.abs($gamePlayer.y - this.y);
			const distance = Math.sqrt(dx * dx + dy * dy);

			if (distance > this.lockInRange) {
				this.lockInTarget = null;
			} else if (!this.lockInAutoSwitch) {
				return this.lockInTarget;
			}
		} else {
			const targetStillExists = $gameMap.event(this.lockInTarget.eventId());
			if (!targetStillExists) {
				this.lockInTarget = null;
				if (this.lockInSprite) {
					if (this.lockInSprite.parent) {
						this.lockInSprite.parent.removeChild(this.lockInSprite);
					}
					this.lockInSprite = null;
				}
			} else {
				const dx = Math.abs(this.lockInTarget.x - this.x);
				const dy = Math.abs(this.lockInTarget.y - this.y);
				const distance = Math.sqrt(dx * dx + dy * dy);

				if (distance > this.lockInRange ||
					!this.lockInTarget.event() ||
					!this.lockInTarget.event().note.includes(currentNotetag)) {
					this.lockInTarget = null;
				}
				else if (!this.lockInAutoSwitch) {
					return this.lockInTarget;
				}
			}
		}
	}

	const validTargets = [];

	if (currentNotetag === 'player') {
		const dx = Math.abs($gamePlayer.x - this.x);
		const dy = Math.abs($gamePlayer.y - this.y);
		const distance = Math.sqrt(dx * dx + dy * dy);

		if (distance <= this.lockInRange) {
			validTargets.push({
				target: $gamePlayer,
				distance: distance
			});
		}
	} else {
		const targets = findTargets(currentNotetag);
		targets.forEach(event => {
			if (event === this) return;

			const dx = Math.abs(event.x - this.x);
			const dy = Math.abs(event.y - this.y);
			const distance = Math.sqrt(dx * dx + dy * dy);

			if (distance <= this.lockInRange) {
				validTargets.push({
					target: event,
					distance: distance
				});
			}
		});
	}

	validTargets.sort((a, b) => a.distance - b.distance);

	if (this.lockInPreviousTarget) {
		let currentIndex = -1;

		if (this.lockInPreviousTarget === $gamePlayer) {
			currentIndex = validTargets.findIndex(t => t.target === $gamePlayer);
		} else {
			currentIndex = validTargets.findIndex(t =>
				t.target !== $gamePlayer &&
				t.target.eventId() === this.lockInPreviousTarget.eventId()
			);
		}

		if (currentIndex !== -1) {
			const nextIndex = (currentIndex + 1) % validTargets.length;
			this.lockInPreviousTarget = null;
			return validTargets[nextIndex].target;
		}
		this.lockInPreviousTarget = null;
	}

	return validTargets.length > 0 ? validTargets[0].target : null;
};

Game_CharacterBase.prototype.updateLockIn = function () {
	if (!this.lockInEnabled) return;

	const target = this.findLockInTarget();
	const previousTarget = this.lockInTarget;
	this.lockInTarget = target;

	if (target && this.lockInTargetImage) {
		if (!this.lockInSprite || target !== previousTarget) {
			this.createTargetIndicator(target);
		}
		this.updateTargetIndicator();
	} else {
		if (this.lockInSprite) {
			if (this.lockInSprite.parent) {
				this.lockInSprite.parent.removeChild(this.lockInSprite);
			}
			this.lockInSprite = null;
		}
	}

	const shouldSkipLocking = this.lockInRunFreely &&
		this === $gamePlayer &&
		this.isDashing();

	const shouldFaceTarget = target && !shouldSkipLocking && (
		this.isMoved() || this.lockInFaceWhenIdle
	);

	if (shouldFaceTarget) {
		const targetX = target === $gamePlayer ? $gamePlayer.x : target.x;
		const targetY = target === $gamePlayer ? $gamePlayer.y : target.y;
		const dx = targetX - this.x;
		const dy = targetY - this.y;

		let newDirection = this.direction();

		if (Math.abs(dx) > Math.abs(dy)) {
			newDirection = dx > 0 ? 6 : 4;
		} else if (Math.abs(dy) > Math.abs(dx)) {
			newDirection = dy > 0 ? 2 : 8;
		} else if (dx !== 0 && dy !== 0) {
			if (this.is8DirSprite && this.is8DirSprite()) {
				if (dx > 0 && dy > 0) newDirection = 3;
				else if (dx > 0 && dy < 0) newDirection = 9;
				else if (dx < 0 && dy > 0) newDirection = 1;
				else if (dx < 0 && dy < 0) newDirection = 7;
			} else {
				newDirection = dx > 0 ? 6 : 4;
			}
		}

		if (newDirection !== this.direction()) {
			this.setDirection(newDirection);
		}
	}
};

Game_Character.prototype.lockTarget = function (target, range = 10, autoSwitch = true, faceWhenIdle = true, runFreely = true, targetImage = '', indicatorPosition = 'above', indicatorAnimation = 'pulse') {
	if (!target || target === '' || target === 'none') {
		if (this.lockInTarget) {
			this.lockInMemoryEventId = this.lockInTarget === $gamePlayer ? 'player' : this.lockInTarget.eventId();
		}
		if (this.lockInSprite) {
			if (this.lockInSprite.parent) {
				this.lockInSprite.parent.removeChild(this.lockInSprite);
			}
			this.lockInSprite = null;
		}

		this.lockInEnabled = false;
		this.lockInTarget = null;
		this.lockInPreviousTarget = null;
		this.lockInNotetag = null;
		this.lockInRange = 0;
		this.lockInAutoSwitch = false;
		this.lockInTargetImage = '';
		this.lockInRunFreely = true;
		this.lockInFaceWhenIdle = false;
		return;
	}

	if (typeof target === 'string' && target.includes('$game')) {
		this.lockInOriginalTarget = target;
		target = eval(target);
	}

	this.lockInNotetag = target === 'player' ? 'player' : (target.startsWith('<') && target.endsWith('>') ? target : `<${target}>`);
	this.lockInRange = Math.max(1, parseInt(range) || 5);
	this.lockInAutoSwitch = autoSwitch !== false;
	this.lockInRunFreely = runFreely !== false;
	this.lockInTargetImage = targetImage || '';
	this.lockIndicatorAnim = indicatorAnimation || 'pulse';
	this.lockIndicatorPos = indicatorPosition || 'above';
	this.lockInFaceWhenIdle = faceWhenIdle === true;
	this.lockInEnabled = true;
	this.lockInTarget = null;
	this.lockInPreviousTarget = null;

	if (this.lockInMemoryEventId) {
		if (this.lockInMemoryEventId === 'player' && this.lockInNotetag === 'player') {
			const dx = Math.abs($gamePlayer.x - this.x);
			const dy = Math.abs($gamePlayer.y - this.y);
			const distance = Math.sqrt(dx * dx + dy * dy);

			if (distance <= this.lockInRange) {
				this.lockInTarget = $gamePlayer;
			}
		} else if (this.lockInNotetag !== 'player') {
			const rememberedEvent = $gameMap.event(this.lockInMemoryEventId);
			if (rememberedEvent &&
				rememberedEvent.event() &&
				rememberedEvent.event().note.includes(this.lockInNotetag)) {

				const dx = Math.abs(rememberedEvent.x - this.x);
				const dy = Math.abs(rememberedEvent.y - this.y);
				const distance = Math.sqrt(dx * dx + dy * dy);

				if (distance <= this.lockInRange) {
					this.lockInTarget = rememberedEvent;
				}
			}
		}
		this.lockInMemoryEventId = null;
	}
};

Game_Character.prototype.switchLockTarget = function () {
	if (!this.lockInEnabled) return;

	if (this.lockInTarget) {
		this.lockInPreviousTarget = this.lockInTarget;
		this.lockInTarget = null;
	}
};

Game_CharacterBase.prototype.createTargetIndicator = function (target) {
	if (this.lockInSprite) {
		if (this.lockInSprite.parent) {
			this.lockInSprite.parent.removeChild(this.lockInSprite);
		}
	}

	this.lockInSprite = new Sprite();
	this.lockInSprite.bitmap = ImageManager.loadPicture(this.lockInTargetImage);
	this.lockInSprite.anchor.x = 0.5;
	this.lockInSprite.anchor.y = 0.5;
	this.lockInSprite.z = 9999;
	this.lockInSprite._animationFrame = 0;
	this.lockInSprite._animationSpeed = 3;
	this.lockInSprite._minScale = 0.7;
	this.lockInSprite._maxScale = 1.2;
	this.lockInSprite._baseY = 0;
	this.lockInSprite._moveRange = 10;

	if (SceneManager._scene instanceof Scene_Map && SceneManager._scene._spriteset) {
		SceneManager._scene._spriteset._tilemap.addChild(this.lockInSprite);
	}
};

Game_CharacterBase.prototype.updateTargetIndicator = function () {
	if (!this.lockInSprite || !this.lockInTarget) return;
	if (!this.lockInSprite.parent) {
		this.lockInSprite = null;
		return;
	}

	const baseX = this.lockInTarget.screenX();
	let baseY;
	let spriteHeight = $gameMap.tileHeight();

	if (SceneManager._scene instanceof Scene_Map && SceneManager._scene._spriteset) {
		const targetSprite = SceneManager._scene._spriteset._characterSprites.find(
			sprite => sprite._character === this.lockInTarget
		);

		if (targetSprite) {
			spriteHeight = targetSprite.patternHeight ? targetSprite.patternHeight() : spriteHeight;
		}
	}

	const position = this.lockIndicatorPos || 'above';
	switch (position) {
		case 'above':
			baseY = this.lockInTarget.screenY() - spriteHeight - 20;
			break;
		case 'middle':
			baseY = this.lockInTarget.screenY() - spriteHeight / 2;
			break;
		case 'foot':
			baseY = this.lockInTarget.screenY();
			break;
		default:
			baseY = this.lockInTarget.screenY() - spriteHeight - 20;
	}

	this.lockInSprite.x = baseX;

	const animationType = this.lockIndicatorAnim || 'pulse';
	if (animationType === 'static') {
		this.lockInSprite.y = baseY;
		this.lockInSprite.scale.x = 1;
		this.lockInSprite.scale.y = 1;
	} else {
		this.lockInSprite._animationFrame += this.lockInSprite._animationSpeed;
		const progress = Math.sin(this.lockInSprite._animationFrame * 0.1) * 0.5 + 0.5;

		if (animationType === 'pulse') {
			this.lockInSprite.y = baseY;
			const currentScale = this.lockInSprite._minScale +
				(this.lockInSprite._maxScale - this.lockInSprite._minScale) * progress;
			this.lockInSprite.scale.x = currentScale;
			this.lockInSprite.scale.y = currentScale;
		} else if (animationType === 'updown') {
			const currentY = baseY + (progress - 0.5) * this.lockInSprite._moveRange * 1.5;
			this.lockInSprite.y = currentY;
			this.lockInSprite.scale.x = 1;
			this.lockInSprite.scale.y = 1;
		}
	}
};

window.isLockingATarget = function (target) {
	const character = findTarget(target);
	return character ? (character.lockInEnabled && character.lockInTarget !== null) : false;
};


window.isBeingTargetLocked = function (targetEventId) {
	// See if target is being target locked by something
	if ($gamePlayer.lockInEnabled && $gamePlayer.lockInTarget) {
		if (targetEventId === 'player' && $gamePlayer.lockInTarget === $gamePlayer) {
			return true;
		}
		if ($gamePlayer.lockInTarget !== $gamePlayer &&
			$gamePlayer.lockInTarget.eventId &&
			$gamePlayer.lockInTarget.eventId() === targetEventId) {
			return true;
		}
	}

	return $gameMap.events().some(event => {
		if (!event || !event.lockInEnabled || !event.lockInTarget) return false;

		if (targetEventId === 'player' && event.lockInTarget === $gamePlayer) {
			return true;
		}

		if (event.lockInTarget !== $gamePlayer &&
			event.lockInTarget.eventId &&
			event.lockInTarget.eventId() === targetEventId) {
			return true;
		}

		return false;
	});
};

// ========================================================================
// WEAPON CHECKS
// ========================================================================
const getSlotIndex = (slot = 1) => {
	if (slot === 2) return 1;
	return 0;
};

window.equippedWeapon = function (search, slot = 1) {
	const weapon = $gameParty.leader().equips()[getSlotIndex(slot)];
	if (!weapon) return false;
	return !isNaN(search) ? weapon.id === Number(search) : weapon.name === search;
};

window.equippedWeaponDmg = function (slot = 1) {
	const weapon = $gameParty.leader().equips()[getSlotIndex(slot)];
	return weapon ? weapon.params[2] : null;
};

window.equippedWeaponType = function (search, slot = 1) {
	const weapon = $gameParty.leader().equips()[getSlotIndex(slot)];
	if (!weapon) return false;

	const wtypeId = weapon.wtypeId;
	if (!isNaN(search)) {
		return wtypeId === Number(search);
	}
	const weaponTypes = $dataSystem.weaponTypes;
	return weaponTypes[wtypeId] === search;
};

window.equippedWeaponNotetag = function (notetag, slot = 1) {
	const weapon = $gameParty.leader().equips()[getSlotIndex(slot)];
	if (!weapon) return null;

	const regex = new RegExp(`<${notetag}:\\s*(.+?)\\s*>`, 'i');
	const match = weapon.note.match(regex);

	if (match) {
		const value = match[1];
		return isNaN(value) ? value : Number(value);
	}
	return null;
};

window.equippedWeaponParam = function (param, slot = 1) {
	const weapon = $gameParty.leader().equips()[getSlotIndex(slot)];
	if (!weapon) return null;

	const paramMap = {
		'mhp': 0, 'hp': 0, 'maxhp': 0,
		'mmp': 1, 'mp': 1, 'maxmp': 1,
		'atk': 2, 'attack': 2,
		'def': 3, 'defense': 3,
		'mat': 4, 'matk': 4, 'magic': 4,
		'mdf': 5, 'mdef': 5,
		'agi': 6, 'spd': 6, 'speed': 6,
		'luk': 7, 'luck': 7
	};

	const paramIndex = paramMap[param.toLowerCase()];
	return paramIndex !== undefined ? weapon.params[paramIndex] : null;
};

window.equippedShield = function () {
	const shield = $gameParty.leader().equips()[1];
	if (!shield) return false;
	return shield.etypeId === 2;
};

window.equippedArmor = function (search) {
	const leader = $gameParty.leader();
	if (!leader) return false;
	const allArmors = leader.equips().slice(1);
	return allArmors.some(armor => {
		if (!armor) return false;
		return !isNaN(search) ? armor.id === Number(search) : armor.name === search;
	});
};

window.learnedSkill = function (actorIdentifier, skillIdentifier) {
	let actor;
	if (actorIdentifier === 'player') {
		actor = $gameParty.leader();
	} else if (typeof actorIdentifier === 'number') {
		actor = $gameActors.actor(actorIdentifier);
	} else if (typeof actorIdentifier === 'string') {
		actor = $gameActors._data.find(a => a && a._name === actorIdentifier);
	}

	if (!actor) return false;

	let skillId;
	if (typeof skillIdentifier === 'number') {
		skillId = skillIdentifier;
	} else if (typeof skillIdentifier === 'string') {
		const skill = skillNameCache[skillIdentifier.toLowerCase()];
		skillId = skill ? skill.id : null;
	}

	if (!skillId) return false;
	return actor.isLearnedSkill(skillId);
};

// ========================================================================
window.amount = function (type, identifier) {
	if (!['item', 'weapon', 'armor'].includes(type)) return 0;

	let item;
	if (typeof identifier === 'number') {
		switch (type) {
			case 'item':
				item = $dataItems[identifier];
				break;
			case 'weapon':
				item = $dataWeapons[identifier];
				break;
			case 'armor':
				item = $dataArmors[identifier];
				break;
		}
	} else {
		const database = type === 'item' ? $dataItems :
			type === 'weapon' ? $dataWeapons : $dataArmors;

		item = Object.values(database).find(i => i && i.name === identifier);
	}

	return item ? $gameParty.numItems(item) : 0;
};

window.notetag = function (eventIdOrTag, notetagParam) {
	// Case 1: Event with this notetag on map?
	if (typeof eventIdOrTag === 'string' && notetagParam === undefined) {
		return findTargets(eventIdOrTag).length > 0;
	}

	// Case 2: Notetag stand on top of another notetag
	if (typeof eventIdOrTag === 'string' && typeof notetagParam === 'string') {
		let searchTag = eventIdOrTag;

		if (notetagParam === 'player') {
			const searchEvents = findTargets(searchTag);
			return searchEvents.some(event => checkHitboxOverlap($gamePlayer, event));
		}

		const targetEvents = findTargets(notetagParam);
		const searchEvents = findTargets(searchTag);

		return targetEvents.some(targetEvent => {
			return searchEvents.some(searchEvent =>
				searchEvent !== targetEvent && checkHitboxOverlap(targetEvent, searchEvent)
			);
		});
	}

	// Case 3: Event with notetag at eventId's position
	if (typeof eventIdOrTag === 'string' && (typeof notetagParam === 'number' || notetagParam === 'player')) {
		const targetChar = findTarget(notetagParam);
		if (!targetChar) return false;

		const searchEvents = findTargets(eventIdOrTag);
		return searchEvents.some(event => checkHitboxOverlap(targetChar, event));
	}

	// Case 4: An event has notetag?
	const event = findTarget(eventIdOrTag);
	if (!event || !event.event()) return false;

	let searchTag = notetagParam;
	if (!searchTag.startsWith('<')) searchTag = '<' + searchTag;
	if (!searchTag.endsWith('>')) searchTag = searchTag + '>';

	return event.event().note.includes(searchTag);
};

window.setSelfSwitch = function (eventId, letter, value) {
	const actualEventId = eventId === 'this' ? this._eventId : eventId;

	if (['A', 'B', 'C', 'D'].includes(letter)) {
		$gameSelfSwitches.setValue([$gameMap.mapId(), actualEventId, letter], value);
	} else {
		const switchId = $dataSystem.switches.findIndex(name =>
			name?.toLowerCase() === `self switch ${letter.toLowerCase()}`
		);

		if (switchId > 0) {
			$gameSelfSwitches.setValue([$gameMap.mapId(), actualEventId, `SW_${switchId}`], value);
		}
	}
};

window.sucking = function (eventId, type, range = 15, speed = 5.4) {
	const target = findTarget(eventId);
	if (target && target.sucking) {
		target.sucking(type, range, speed);
	}
};

window.checkGamepad = function () { return navigator.getGamepads && navigator.getGamepads()[0] !== null; };

window.checkGamepadInput = function () {
	const gamepad = navigator.getGamepads()[0];
	if (gamepad && gamepad.connected) {
		const rightX = gamepad.axes[2];
		const rightY = gamepad.axes[3];
		if (Math.abs(rightX) > 0.1 || Math.abs(rightY) > 0.1) {
			return { x: rightX, y: rightY };
		}
	}
	return null;
};

window.isRightStickPushed = function () {
	const gamepad = navigator.getGamepads()[0];
	if (gamepad && gamepad.connected) {
		const rightX = gamepad.axes[2];
		const rightY = gamepad.axes[3];
		return Math.abs(rightX) > 0.1 || Math.abs(rightY) > 0.1;
	}
	return false;
};

Game_CharacterBase.prototype.selfSwitch = function (letter, value) { $gameSelfSwitches.setValue([$gameMap.mapId(), this._eventId, letter.toUpperCase()], value); }

window.inViewport = function (eventId, pixelRange = 5) {
	if (!$gameMap.event(eventId)) return false;
	const screenX = Math.round($gameMap.event(eventId).screenX());
	const screenY = Math.round($gameMap.event(eventId).screenY());
	return screenX >= -pixelRange &&
		screenY >= -pixelRange &&
		screenX <= Graphics.width + pixelRange &&
		screenY <= Graphics.height + pixelRange;
};

window.checkLevelUp = function () {
	if (!$gameParty.leader()) return false;
	if (lastLeaderLevel === null) {
		lastLeaderLevel = $gameParty.leader().level;
		return false;
	}
	if ($gameParty.leader().level > lastLeaderLevel) {
		lastLeaderLevel = $gameParty.leader().level;
		return true;
	}
	lastLeaderLevel = $gameParty.leader().level;
	return false;
};

window.partyLeader = function (identifier) {
	if (typeof identifier === 'number') { return $gameActors.actor(identifier); }
	return $gameActors._data.find(actor => actor && actor._name === identifier) || null;
};

window.inFrontIsImpassable = function (identifier) {
	const character = findTarget(identifier);
	if (!character) return false;
	const x2 = $gameMap.roundXWithDirection(character.x, character.direction());
	const y2 = $gameMap.roundYWithDirection(character.y, character.direction());
	if (!$gameMap.isPassable(x2, y2, character.reverseDir(character.direction()))) {
		return true;
	}
	const events = $gameMap.eventsXy(x2, y2);
	return events.some(event =>
		event._priorityType === 1 &&
		!event.isThrough() &&
		!event.event().note.includes('<pass>')
	);
};

window.checkHitboxOverlap = function (event1, event2) {
	if (!event1 || !event2) return false;

	const hitbox1 = event1.hitboxData ? event1.hitboxData() : { left: 0, right: 1, top: 0, bottom: 1 };
	const hitbox2 = event2.hitboxData ? event2.hitboxData() : { left: 0, right: 1, top: 0, bottom: 1 };

	const box1 = {
		left: event1._realX + hitbox1.left,
		right: event1._realX + hitbox1.right,
		top: event1._realY + hitbox1.top,
		bottom: event1._realY + hitbox1.bottom
	};

	const box2 = {
		left: event2._realX + hitbox2.left,
		right: event2._realX + hitbox2.right,
		top: event2._realY + hitbox2.top,
		bottom: event2._realY + hitbox2.bottom
	};

	return !(box1.right <= box2.left ||
		box1.left >= box2.right ||
		box1.bottom <= box2.top ||
		box1.top >= box2.bottom);
};

window.checkName = function (eventId, targetName) {
	// checkName("haha", eventId) - Check if event underneath eventId has name "haha"
	if (targetName !== undefined) {
		const nameToCheck = eventId;
		const sourceEventId = targetName === 'player' ? 0 : parseInt(targetName);

		const sourceEvent = sourceEventId === 0 ? $gamePlayer : $gameMap.event(sourceEventId);
		if (!sourceEvent) return false;

		const overlappingEvents = $gameMap.events().filter(e => {
			if (!e || e === sourceEvent) return false;
			return checkHitboxOverlap(sourceEvent, e);
		});

		return overlappingEvents.some(e => e.event().name === nameToCheck);
	}

	return $gameMap.event(eventId).event().name;
};

window.checkNameOnMap = function (name) { return findTargets(name).length > 0; };

window.leftStickDegree = function () {
	const gamepad = navigator.getGamepads && navigator.getGamepads()[0];
	if (!gamepad || !gamepad.connected) {
		return null;
	}
	const leftX = gamepad.axes[0];
	const leftY = gamepad.axes[1];
	if (Math.abs(leftX) < 0.1 && Math.abs(leftY) < 0.1) {
		return null;
	}
	const angle = Math.atan2(leftY, leftX);
	let degrees = (angle * 180 / Math.PI);
	degrees = (degrees + 360) % 360;
	return degrees;
};

window.isLeftStickDegree = function (targetDegree, tolerance = 0) {
	const currentDegree = window.leftStickDegree();
	if (currentDegree === null) {
		return false;
	}
	targetDegree = ((targetDegree % 360) + 360) % 360;
	let diff = Math.abs(currentDegree - targetDegree);
	if (diff > 180) {
		diff = 360 - diff;
	}
	return diff <= tolerance;
};

window.isOnTileId = function (target, tileId) {
	const character = findTarget(target);
	if (!character) return false;
	const x = character.x;
	const y = character.y;
	const tiles = $gameMap.allTiles(x, y);
	return tiles.includes(tileId);
};

window.mapCount = function (target) {
	if (!target) return 0;
	return findTargets(target).length;
};

// Convert this._eventId to this and stuff
if (easyConditionalBranch) {
	const HtranslateCache = new Map();

	const HtranslateThis = function (script) {
		if (typeof script !== 'string') return script;
		if (HtranslateCache.has(script)) return HtranslateCache.get(script);

		let result = '';
		let i = 0;
		while (i < script.length) {
			const char = script[i];
			if (char === '"' || char === "'") {
				const quote = char;
				result += char; i++;
				while (i < script.length) {
					const innerChar = script[i];
					result += innerChar;
					if (innerChar === '\\' && i + 1 < script.length) { i++; result += script[i]; i++; continue; }
					if (innerChar === quote) { i++; break; } i++;
				}
			} else {
				let token = '';
				while (i < script.length && script[i] !== '"' && script[i] !== "'") { token += script[i]; i++; }
				token = token.replace(/\bthis\b(?!\s*\.)/g, 'this._eventId');
				result += token;
			}
		}

		// to quote
		result = result.replace(/(?<!['"'])(<[a-zA-Z_][a-zA-Z0-9_]*>)(?!['"'])/g, "'$1'"); // <notetag>
		result = result.replace(/(?<!['"'])\bplayer\b(?!['"'])/g, "'player'"); // player

		HtranslateCache.set(script, result);
		return result;
	};

	// Just in Conditional Branch
	const H_Game_Interpreter_command111 = Game_Interpreter.prototype.command111;
	Game_Interpreter.prototype.command111 = function (params) {
		let result = false;
		switch (params[0]) {
			case 12:
				const script = HtranslateThis(params[1]);
				result = !!eval(script);
				break;
			default:
				return H_Game_Interpreter_command111.call(this, params);
		}
		this._branch[this._indent] = result;
		if (this._branch[this._indent] === false) {
			this.skipBranch();
		}
		return true;
	};

	//=============================================================================
	// PIXI OutlineFilter
	//=============================================================================

	if (!PIXI.filters.OutlineFilter) {
		const H_outlineFragmentShader = `
			varying vec2 vTextureCoord;
			uniform sampler2D uSampler;
			uniform vec4 filterClamp;

			uniform float uAlpha;
			uniform vec2 uThickness;
			uniform vec4 uColor;
			uniform bool uKnockout;

			const float DOUBLE_PI = 2. * 3.14159265358979323846264;
			const float ANGLE_STEP = \${angleStep};

			float outlineMaxAlphaAtPos(vec2 pos) {
				if (uThickness.x == 0. || uThickness.y == 0.) {
					return 0.;
				}

				vec4 displacedColor;
				vec2 displacedPos;
				float maxAlpha = 0.;

				for (float angle = 0.; angle <= DOUBLE_PI; angle += ANGLE_STEP) {
					displacedPos.x = vTextureCoord.x + uThickness.x * cos(angle);
					displacedPos.y = vTextureCoord.y + uThickness.y * sin(angle);
					displacedColor = texture2D(uSampler, clamp(displacedPos, filterClamp.xy, filterClamp.zw));
					maxAlpha = max(maxAlpha, displacedColor.a);
				}

				return maxAlpha;
			}

			void main(void) {
				vec4 sourceColor = texture2D(uSampler, vTextureCoord);
				vec4 contentColor = sourceColor * float(!uKnockout);
				float outlineAlpha = uAlpha * outlineMaxAlphaAtPos(vTextureCoord.xy) * (1.-sourceColor.a);
				vec4 outlineColor = vec4(vec3(uColor) * outlineAlpha, outlineAlpha);
				gl_FragColor = contentColor + outlineColor;
			}
			`;

		class H_OutlineFilter extends PIXI.Filter {
			constructor(thickness = 1, color = 0, quality = 0.1, alpha = 1, knockout = false) {
				super(
					`attribute vec2 aVertexPosition;
					attribute vec2 aTextureCoord;

					uniform mat3 projectionMatrix;

					varying vec2 vTextureCoord;

					void main(void)
					{
						gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
						vTextureCoord = aTextureCoord;
					}`,
					H_outlineFragmentShader.replace(/\$\{angleStep\}/, H_OutlineFilter.getAngleStep(quality))
				);
				this._thickness = 1;
				this._alpha = 1;
				this._knockout = false;
				this.uniforms.uThickness = new Float32Array([0, 0]);
				this.uniforms.uColor = new Float32Array([0, 0, 0, 1]);
				this.uniforms.uAlpha = alpha;
				this.uniforms.uKnockout = knockout;
				Object.assign(this, { thickness, color, quality, alpha, knockout });
			}

			static getAngleStep(quality) {
				const samples = Math.max(quality * H_OutlineFilter.MAX_SAMPLES, H_OutlineFilter.MIN_SAMPLES);
				return (2 * Math.PI / samples).toFixed(7);
			}

			apply(filterManager, input, output, clear) {
				this.uniforms.uThickness[0] = this._thickness / input._frame.width;
				this.uniforms.uThickness[1] = this._thickness / input._frame.height;
				this.uniforms.uAlpha = this._alpha;
				this.uniforms.uKnockout = this._knockout;
				filterManager.applyFilter(this, input, output, clear);
			}

			get alpha() { return this._alpha; }
			set alpha(value) { this._alpha = value; }

			get color() { return PIXI.utils.rgb2hex(this.uniforms.uColor); }
			set color(value) { PIXI.utils.hex2rgb(value, this.uniforms.uColor); }

			get knockout() { return this._knockout; }
			set knockout(value) { this._knockout = value; }

			get thickness() { return this._thickness; }
			set thickness(value) { this._thickness = value; this.padding = value; }
		}

		H_OutlineFilter.MIN_SAMPLES = 1;
		H_OutlineFilter.MAX_SAMPLES = 100;

		PIXI.filters.OutlineFilter = H_OutlineFilter;
	}
}

//=============================================================================
// ITEM GAIN NOTIFICATION
//=============================================================================

function SLocalizeH(text) {
	if (Imported.Hendrix_Localization) {
		return Hendrix_Localization(text);
	}
	return text;
}

class Maithl_Item_Notification extends Window_Base {
	constructor() {
		super(new Rectangle(0, 0, 0, Window_Base.prototype.fittingHeight(1)));
		this.loadWindowskin();
		this.contentsOpacity = 0;
		this.hide();
		this.setBackgroundType(itemGainTransparentWindow ? 2 : 0);
		this._item = null;
		this._amount = 0;
		this._displayTime = 0;
		this._itemType = "";
	}

	showNewItem(item, amount) {
		this._item = item;
		this._amount = amount;
		this._itemType = DataManager.isWeapon(item) ? "weapon" :
			DataManager.isArmor(item) ? "armor" : "item";
		this.updateWindowSize();
		this.updatePosition();
		this.show();
		this.fadeIn(16);
		this.playPopupSound();
		this._displayTime = itemGainDisplayDuration;
	}

	showNewGold(amount) {
		this._item = { name: "", iconIndex: 314 };
		this._amount = amount;
		this._itemType = "gold";
		this.updateWindowSize();
		this.updatePosition();
		this.show();
		this.fadeIn(16);
		this.playPopupSound();
		this._displayTime = itemGainDisplayDuration;
	}

	playPopupSound() {
		let soundFile;
		switch (this._itemType) {
			case "weapon": soundFile = itemGainWeaponSfx; break;
			case "armor": soundFile = itemGainArmorSfx; break;
			case "gold": soundFile = itemGainGoldSfx; break;
			default: soundFile = itemGainItemSfx;
		}
		if (soundFile) {
			AudioManager.playSe({ name: soundFile, pan: 0, pitch: itemGainSfxPitch || 100, volume: itemGainSfxVolume || 100 });
		}
	}

	updateWindowSize() {
		const iconWidth = ImageManager.iconWidth + 8;
		const padding = this.padding * 2;
		const itemNameWidth = this.textWidth(SLocalizeH(this._item.name));
		let quantityWidth = 0;

		if (this._itemType === "gold") {
			quantityWidth = this.textWidth(" + " + this._amount);
		} else if (itemGainShowQuantity && this._amount > 1) {
			quantityWidth = this.textWidth(" x" + this._amount);
		}

		const totalTextWidth = itemNameWidth + quantityWidth;
		const minWidth = Math.max(totalTextWidth + iconWidth + itemGainPadding * 2, 120);

		this.width = minWidth + padding;
		this.height = this.fittingHeight(1);
		this.createContents();
	}

	updatePosition() {
		if (itemGainDisplayAbovePlayer) {
			const player = $gamePlayer;
			const x = player.screenX() - this.width / 2;
			const y = player.screenY() - $gameMap.tileHeight() + itemGainVerticalOffset - this.height;
			this.x = x;
			this.y = y;
		} else {
			const wx = itemGainPosition[0];
			const wy = Number(itemGainPosition[1] || 0);
			if (wx === "center") {
				this.x = (Graphics.width - this.width) / 2;
			} else {
				this.x = parseInt(wx, 10);
			}
			this.y = wy;
		}
	}

	fadeIn(duration) {
		this.contentsOpacity = 0;
		this.show();
		this._fadeInDuration = duration;
	}

	fadeOut(duration) {
		this._fadeOutDuration = duration;
	}

	refresh() {
		this.contents.clear();
		const iconWidth = ImageManager.iconWidth + 8;
		const iconHeight = ImageManager.iconHeight;
		const totalWidth = this.contents.width - itemGainPadding * 2;
		const itemNameWidth = this.textWidth(SLocalizeH(this._item.name));
		let quantityWidth = 0;

		if (this._itemType === "gold") {
			quantityWidth = this.textWidth(" + " + this._amount);
		} else if (itemGainShowQuantity && this._amount > 1) {
			quantityWidth = this.textWidth(" x" + this._amount);
		}

		const totalTextWidth = itemNameWidth + quantityWidth;
		const contentWidth = iconWidth + totalTextWidth;

		let x = 0;
		switch (itemGainAlignment) {
			case "center": x = (totalWidth - contentWidth) / 2; break;
			case "right": x = totalWidth - contentWidth; break;
			default: x = 0;
		}

		const iconY = (this.innerHeight - iconHeight) / 2;
		this.drawIcon(this._itemType === "gold" ? 314 : this._item.iconIndex, x + itemGainPadding, iconY);

		this.changeTextColor(this.getColorForType(this._itemType));
		let text = SLocalizeH(this._item.name);
		if (this._itemType === "gold") {
			text = "+" + this._amount;
		} else if (itemGainShowQuantity && this._amount > 1) {
			text += " x" + this._amount;
		}

		this.drawText(text, x + iconWidth + itemGainPadding, 0, totalTextWidth, 'left');
		this.resetTextColor();
	}

	getColorForType(type) {
		const colorParam = {
			"weapon": itemGainWeaponColor,
			"armor": itemGainArmorColor,
			"gold": itemGainGoldColor,
			"item": itemGainItemColor
		}[type];

		if (colorParam && colorParam.toLowerCase() !== "default") {
			return colorParam;
		}
		return ColorManager.normalColor();
	}

	update() {
		super.update();
		if (this._fadeInDuration > 0) {
			this.contentsOpacity += 255 / this._fadeInDuration;
			if (!itemGainTransparentWindow) {
				this.opacity += 255 / this._fadeInDuration;
			}
			this._fadeInDuration--;
			this.refresh();
		} else if (this._displayTime > 0) {
			this._displayTime--;
			if (this._displayTime === 0) {
				this.fadeOut(16);
			}
		} else if (this._fadeOutDuration > 0) {
			this.contentsOpacity -= 255 / this._fadeOutDuration;
			if (!itemGainTransparentWindow) {
				this.opacity -= 255 / this._fadeOutDuration;
			}
			this._fadeOutDuration--;
			if (this._fadeOutDuration === 0) {
				this.hide();
			}
		}
	}
}

let _H_Scene_Map_createAllWindows_Popup = Scene_Map.prototype.createAllWindows;
Scene_Map.prototype.createAllWindows = function () {
	_H_Scene_Map_createAllWindows_Popup.call(this);
	if (enableItemGainNotification) {
		this._newItemPopupWindow = new Maithl_Item_Notification();
		this.addWindow(this._newItemPopupWindow);
	}
};

let _H_Game_Party_gainItem_Popup = Game_Party.prototype.gainItem;
Game_Party.prototype.gainItem = function (item, amount, includeEquip) {
	_H_Game_Party_gainItem_Popup.call(this, item, amount, includeEquip);
	if (enableItemGainNotification && SceneManager._scene instanceof Scene_Map && amount > 0) {
		if (item && SceneManager._scene._newItemPopupWindow) {
			SceneManager._scene._newItemPopupWindow.showNewItem(item, amount);
		}
	}
};

let _H_Game_Party_gainGold_Popup = Game_Party.prototype.gainGold;
Game_Party.prototype.gainGold = function (amount) {
	_H_Game_Party_gainGold_Popup.call(this, amount);
	if (enableItemGainNotification && SceneManager._scene instanceof Scene_Map && amount > 0) {
		if (SceneManager._scene._newItemPopupWindow) {
			SceneManager._scene._newItemPopupWindow.showNewGold(amount);
		}
	}
};

let _H_Scene_Map_update_Popup = Scene_Map.prototype.update;
Scene_Map.prototype.update = function () {
	_H_Scene_Map_update_Popup.call(this);
	if (this._newItemPopupWindow && itemGainDisplayAbovePlayer) {
		this._newItemPopupWindow.updatePosition();
	}
};

//=============================================================================
// INPUT SUPPORT
//=============================================================================
if (inputSupport !== 'all') {
	const H_Input_onKeyDown = Input._onKeyDown;
	Input._onKeyDown = function (event) {
		if (inputSupport === 'gamepad_only' || inputSupport === 'mouse_only') return;
		H_Input_onKeyDown.call(this, event);
	};

	const H_Input_onKeyUp = Input._onKeyUp;
	Input._onKeyUp = function (event) {
		if (inputSupport === 'gamepad_only' || inputSupport === 'mouse_only') return;
		H_Input_onKeyUp.call(this, event);
	};

	const H_Input_updateGamepadState = Input._updateGamepadState;
	Input._updateGamepadState = function (gamepad) {
		if (inputSupport === 'mouse_keyboard' || inputSupport === 'mouse_only') return;
		H_Input_updateGamepadState.call(this, gamepad);
	};

	const H_TouchInput_update = TouchInput.update;
	TouchInput.update = function () {
		if (inputSupport === 'gamepad_only') {
			this.clear();
			return;
		}
		H_TouchInput_update.call(this);
	};
}