/*:
 * @target MZ
 * @plugindesc Bring multiple animation features to RPG Maker. The animation plugin you need for every game project
 * @author Sang Hendrix
 * @url https://sanghendrix.itch.io
 *
 * @help
 * Verion 2.0.6b
 * ----------------------------------------------------------------------------
 * This RPG Maker MZ plugin brings modern game engine animation features into
 * RPG Maker. Idle/Walk/Run cycles, custom animations for characters,
 * unlimited spritesheet frames, 8 directions sprite, 1 row spritesheet,
 * display VFX on maps, and a VFX builder, this plugin has it all.
 * ----------------------------------------------------------------------------
 * MOVEMENT ROUTE SCRIPT CALL
 * | toFrame(x) |
 * Set the character image to frame x (start from 1)
 *
 * | playFrames(first frame, last frame, speed) |
 *  Example: playFrames(1, 6, 3)
 *  Play from frame 1 - 6. Each frame wait 3 frames (like Wait command)
 *  The lower the speed, the faster the animation
 * ----------------------------------------------------------------------------
 * HOW TO USE (READ THIS, IT WILL HELP YOU)
 * ----------------------------------------------------------------------------
 * ■ OPEN VFX DESIGNER
 * ---------------------------------
 * Go in-game and press the VFX Designer button assigned in plugin parameter
 * 
 * ■ PLAY VFX DESIGNED VIA THE DESIGNER
 * ---------------------------------
 * Use plugin command Show VFX in Library
 * 
 * ■ PLAY VFX ON MAP USING A SPRITESHEET
 * ---------------------------------
 * 1. Use plugin command Show VFX
 * 2. Select your spritesheet file and assign Row and Column it has
 *
 * ■ PLAY VFX ON MAP USING MULTIPLE SEPERATED IMAGES
 * ---------------------------------
 * 1. Use plugin command Show VFX
 * 2. Put your files inside pictures/frames folder
 * 3. Assign how many frames you have
 *
 * ■ PLAY CHARACTER ANIMATIONS (hoeing, dancing, sleeping, attacking, etc.)
 * ---------------------------------
 * 1. Prepare a single character sprite with name like: $hero_sleeping_f8.png.
 * This means this spritesheet has 8 frames of the hero sleeping
 * 2. Change your character graphic to $hero_sleeping_f8.png
 * 3. Inside a movement route command, use the script call: playFrames(1, 8, 3)
 * This will play from frame 1 to 8 with the wait time from each frame is 3
 * You can also call script like $gamePlayer.playFrames(1,8,3)
 * 
 * ■ CHANGE CHARACTER FRAME INDEX
 * ---------------------------------
 * 1. Do step 1 and 2 above
 * 2. Call this script: toFrame(x). X is the frame index you want your character
 * to set to
 *
 * ■ USE SINGLE ROW SPRITESHEET
 * ---------------------------------
 * Name your spritesheet as filename_fx.png
 * Example: Ice_f4.png. This means your spritesheet has 4 frames
 * 
 * ■ MIRROR/FLIP SINGLE ROW SPRITESHEET
 * ---------------------------------
 * Simply call Turn Left to no-flip, Turn Right to flip
 *
 * ■ SET UP IDLE WALK RUN FOR CHARACTERS
 * ---------------------------------
 * 1. Prepare files with name like:
 * $hero_Walk.png or $hero_Walk_fx.png (x = amount of frame)
 * $hero_Idle.png or $hero_Idle_fx.png
 * $hero_Run.png or $hero_Run_fx.png
 * 2. You can also change the keyword Walk Idle Run to something else
 * via plugin parameter, like Walk to Moving or something like that
 * 
 * ■ SET UP CUSTOM IDLE WALK RUN SPEED FOR EVENTS
 * ---------------------------------
 * Add these comments to your event:
 * <frame idle speed: 5> -> Wait 5 frames per animation frame
 * <frame walk speed: x>
 * <frame run speed: x>
 * This will override Global Frame Speed setting in parameter
 *
 * ■ SET UP 8 Directions Sprite
 * ---------------------------------
 * 1. Prepare files with name like:
 * $Hero_8dir.png or $Hero_Idle_8dir.png or $Hero_Idle_8dir_f6.png
 * 2. 8 dir spritesheet needs to follow this order:
 * Bottom (2) (look at your numpad to see the direction)
 * Bottom Left (1)
 * Bottom Right (3)
 * Left (4)
 * Right (6)
 * Up (8)
 * Up Left (7)
 * Up Right (9)
 *
 * Default RPG Maker order
 * Bottom (2)
 * Left (4)
 * Right (6)
 * Up (8)
 *
 * To check if a character is facing at a direction, use Conditional:
 * checkDirection('player'/eventId, number from numpad)
 *
 * To get character's direction, use script:
 * getDirection('player'/eventId)
 *
 * ----------------------------------------------------------------------------
 * PRELOAD
 * ----------------------------------------------------------------------------
 * Console command to see cache size in case you use preload feature:
 * PermanentImageCache.logDetailedCacheStatus();
 *
 * The larger the dimmension of the file, the higher mb it costs.
 * This cache will never be cleared to guarenteed a smooth gameplay
 * and fixed blinking issue when you change characters' images with
 * the cost of memory. On PC, most machine has above 8GB RAM, but on
 * mobiles it's still not common so pay attention to it.
 *
 * To summarize, put important stuff to subfolders and preload those
 * subfolders (best use for mobile optimization).
 * ----------------------------------------------------------------------------
 * For support, please visit Discord:
 * https://x.com/sanghendrix96
 * Discord: https://discord.gg/YKPscqHV8b
 * ----------------------------------------------------------------------------
 *
 * @param -----------s--s---s--2342-----
 * @text -----------------------
 * @default ---------------------
 * 
 * @param showDockButton
 * @text Show VFX Designer Button
 * @type boolean
 * @default true
 * @desc Show the VFX Designer button on the dock (test mode only)
 * 
 * @param -----------s--s---s-------
 * @text -----------------------
 * @default ---------------------
 *
 * @param PRELOAD
 *
 * @param -------------s--s--------
 * @text -----------------------
 * @default ---------------------
 *
 * @param Enable Preload
 * @text Enable Preload System
 * @desc Preload images. Improve performance and fix blinking issues when changing sprites (RPG Maker problem).
 * @type boolean
 * @default true
 *
 * @param Preload Folders
 * @text Image Preload Settings
 * @type struct<PreloadFolderList>
 * @desc Folders to preload. Only support preloading characters and pictures folder.
 * @default {"folders":"[\"img/pictures/Animation\",\"img/pictures/frames\",\"img/characters\"]"}
 *
 * @param -----------s--s----------
 * @text -----------------------
 * @default ---------------------
 *
 * @param BASIC SETTINGS
 *
 * @param -------------s----------
 * @text -----------------------
 * @default ---------------------
 *
 * @param Frame Keyword
 * @text Frame Keyword
 * @desc Keyword in character filename to identify frame count. Default is 'f' (e.g., _f8 means 8 frames)
 * @type string
 * @default f
 *
 * @param Frame Speed
 * @text Global Frame Speed
 * @default 1.1
 * @desc For files with extended frames (filename_fx). The higher the number, the quicker the character frames play
 *
 * @param Player Frame Modifier
 * @text Player Frame Speed
 * @type struct<PlayerFrameModifier>
 * @desc Frame speeds for player in different states. Leave empty to use Global Frame Speed
 * @default {"idleSpeed":"","walkSpeed":"","runSpeed":""}
 *
 * @param Nearest
 * @text Render Animation in Nearest
 * @desc True is best for pixel art, False is rendered for other type of arts
 * @type boolean
 * @default true
 *
 * @param -----------------------
 * @text -----------------------
 * @default ---------------------
 *
 * @param IDLE/MOVE GRAPHIC
 *
 * @param -----------------z------
 * @text -----------------------
 * @default ---------------------
 *
 * @param Enable Switch
 * @desc The feature is ON by default. To have more control over it, assign to a switch.
 * @type switch
 *
 * @param Animation Keywords
 * @text Animation Keywords
 * @type struct<AnimKeywords>
 * @desc Configure the keywords used to identify different animation states
 * @default {"walkName":"Walk","idleName":"Idle","runName":"Run"}
 *
 * @command showAnimationFromLibrary
 * @text Show VFX from Library
 * @desc Play a saved animation from the library
 *
 * @arg animationName
 * @text Animation Name
 * @desc Name of the animation saved in the library
 * @type string
 * @default
 *
 * @arg eventId
 * @text Target to Display
 * @desc The target to show the animation on. Support: eventID | player | this
 * @type string
 * @default this
 *
 * @arg loopCount
 * @text Loop Count
 * @desc Number of times the animation should loop. Write "infinite" to loop forever
 * @type string
 * @default 1
 * 
 * @arg stickMode
 * @text Stick Mode
 * @desc Animation to stay fixed at initial position instead of following the target
 * @type boolean
 * @default false
 *
 * @command showAnimatedPicture
 * @text Show VFX
 * @desc Displays an animation on an event or the player.
 *
 * @arg note
 * @text Note
 * @desc Does nothing. It's just a note incase you need it
 * @type string
 * @default
 *
 * @arg fps
 * @text FPS
 * @desc Speed of the animation in frames per second.
 * @type number
 * @min 1
 * @default 60
 *
 * @arg loopCount
 * @text Loop Count
 * @desc Number of times the animation should loop. Write "infinite" to loop forever.
 * @type string
 * @default 1
 *
 * @arg -----------------
 * @text ------------------
 * @type string
 * @default ------------------
 *
 * @arg animationSettings
 * @text Use Seperated Frames
 * @type struct<AnimationSettings>
 * @desc Display animation using seperate frame files. Leave empty if use Spritesheet.
 * @default
 *
 * @arg spritesheetSettings
 * @text Use Spritesheet
 * @type struct<SpritesheetSettings>
 * @desc Display animation using a spritesheet files. Leave empty if use Seperated Frames.
 * @default
 *
 * @arg ------------------
 * @text ------------------
 * @type string
 * @default ------------------
 *
 * @arg positionSettings
 * @text Position Settings
 * @type struct<PositionSettings>
 * @desc Settings for positioning the animation on events.
 * @default
 *
 * @arg visualSettings
 * @text Visual Settings
 * @type struct<VisualSettings>
 * @desc Visual properties like scale, opacity, and blend mode.
 * @default
 *
 * @arg transformSettings
 * @text Transform Settings
 * @type struct<FlipSettings>
 * @desc Settings for randomize property like rotating, mirror.
 * @default
 *
 * @arg bloomSettings
 * @text Bloom Settings
 * @type struct<BloomSettings>
 * @desc Settings for the bloom post-processing effect.
 * @default
 *
 * @arg soundSettings
 * @text Sound Settings
 * @type struct<SoundSettings>
 * @desc Settings for frame-specific sound effects. Most of the time you won't use this.
 * @default
 *
 * @command removeAnimation
 * @text Remove VFX
 * @desc Removes all VFX from a specific event or character.
 *
 * @arg eventId
 * @text Event ID
 * @desc The event ID to remove animations from. Use  this  for current event. Use  player  for game player.
 * @type string
 * @default this
 *
 * @arg notetag
 * @text Note/Name
 * @desc If specified, only removes VFX with this note/name. Leave empty to remove all VFX.
 * @type string
 * @default
 *
 * @arg effect
 * @text Removal Effect
 * @desc Apply an effect while removing the animation.
 * @type select
 * @option None
 * @value none
 * @option Fade Out
 * @value fadeOut
 * @option Scale Out
 * @value scaleOut
 * @default none
 *
 * @arg duration
 * @text Effect Duration
 * @desc How long the removal effect should take in frames (60 frames = ~1s). Empty = instant.
 * @type number
 * @default
 *
 * @command animationEffect
 * @text Animation Effect (Deprecated)
 * @desc Apply effects to existing animations of a target
 *
 * @arg effect
 * @text Effect
 * @desc The effect to apply to the animation.
 * @type select
 * @option Fade Out
 * @value fadeOut
 * @option Scale Out
 * @value scaleOut
 * @default fadeOut
 *
 * @arg target
 * @text Target
 * @desc The target to apply the effect to. this = current event. player = game player. Also support event ID
 * @type string
 * @default this
 *
 * @arg note
 * @text Note
 * @desc Empty = Affect all animations playing on the target. 'Something' = Affect animations with note "Something"
 * @type string
 * @default
 *
 * @arg duration
 * @text Duration
 * @desc How long the effect should take in frames (60 frames = ~1s)
 * @type number
 * @default 60
 *
 * @command frameSpeedModifier
 * @text Frame Speed Modifier
 * @desc Modify the animation frame speed multiplier during gameplay
 *
 * @arg speedValue
 * @text Speed Value
 * @desc New frame speed modifier value. Higher = faster animations
 * @type number
 * @decimals 2
 * @min 0.1
 * @default 1.1
 */
/*~struct~AnimationSettings:
 * @param baseFilename
 * @text Base Filename
 * @desc The base filename of the frames (e.g., 'Windy_').
 * @type string
 *
 * @param frameCount
 * @text Frame Count
 * @desc The amount of frames (e.g., if 40 then the plugin will understand there are files Windy_1, Windy_2,... Windy_40).
 * @type number
 * @min 1
 * @default 1
 */
/*~struct~SpritesheetSettings:
 * @param spritesheetFile
 * @text Spritesheet File
 * @desc Select spritesheet file
 * @type file
 * @dir img/pictures/
 * @default
 *
 * @param row
 * @text Number of Rows
 * @desc Number of rows in spritesheet.
 * @type number
 * @min 1
 * @default 1
 *
 * @param column
 * @text Number of Columns
 * @desc Number of columns in spritesheet.
 * @type number
 * @min 1
 * @default 1
 *
 * @param frameRange
 * @text Only Play Range
 * @desc Play only specific frame range (e.g. "1-15" plays frames 1 to 15). Leave empty to play all frames.
 * @type string
 * @default
 */

/*~struct~PositionSettings:
 * @param eventId
 * @text Event to Display
 * @desc The event to show the animation on. Support: eventID | player | this | <notetag>
 * @type string
 * @default this
 *
 * @param offsetX
 * @text Offset X
 * @desc Horizontal offset for the animation relative to the target's position.
 * @type number
 * @default 0
 * @min -9999
 *
 * @param offsetY
 * @text Offset Y
 * @desc Vertical offset for the animation relative to the target's position.
 * @type number
 * @default 0
 * @min -9999
 *
 * @param zIndex
 * @text Z-Index Layer
 * @desc 0-3: Below characters. 4-8: above characters. 9: above everything. Use  auto  to use event's z-index.
 * @type string
 * @default auto
 *
 * @param origin
 * @text Origin Point
 * @desc Sets the origin point of the animation.
 * @type select
 * @option Center
 * @value center
 * @option Top Middle
 * @value top
 * @option Bottom Center
 * @value bottom
 * @default center
 *
 * @param stickMode
 * @text Stick Mode
 * @desc If true, animation will stay fixed at initial position instead of following the target.
 * @type boolean
 * @default false
 */

/*~struct~VisualSettings:
 * @param scalePercent
 * @text Scale Percentage
 * @desc Scale of the animation in percentage.
 * @type number
 * @default 100
 * @min 0
 * @max 999
 *
 * @param opacity
 * @text Opacity
 * @desc Opacity of the animation (0-255).
 * @type number
 * @default 255
 * @min 0
 * @max 255
 *
 * @param hue
 * @text Hue
 * @desc Hue adjustment for the animation (-180 to 180).
 * @type number
 * @min -180
 * @max 180
 * @default 0
 *
 * @param blendMode
 * @text Blend Mode
 * @desc Blend mode for the animation.
 * @type select
 * @option Normal
 * @value Normal
 * @option Screen
 * @value Screen
 * @option Add
 * @value Add
 * @option Multiply
 * @value Multiply
 * @default Normal
 *
 * @param playInReverse
 * @text Play in Reverse
 * @desc If true, the animation will play backwards from end to start.
 * @type boolean
 * @default false
 */

/*~struct~FlipSettings:
 * @param flip
 * @text Flip X
 * @desc If true, the animation will be mirrored horizontally.
 * @type boolean
 * @default false
 *
 * @param flipY
 * @text Flip Y
 * @desc If true, the animation will be mirrored vertically.
 * @type boolean
 * @default false
 *
 * @param randomFlipX
 * @text Random Flip X
 * @desc If true, the animation will be randomly mirrored horizontally.
 * @type boolean
 * @default false
 *
 * @param randomFlipY
 * @text Random Flip Y
 * @desc If true, the animation will be randomly mirrored vertically.
 * @type boolean
 * @default false
 *
 * @param rotation
 * @text Rotation
 * @desc Rotation of the animation in degrees.
 * @type number
 * @default 0
 *
 * @param randomRotation
 * @text Random Rotation
 * @desc Applies random rotation to the animation
 * @type boolean
 * @default false
 *
 * @param ralkdfhowiyrmdf
 * @text ---------------------
 * @param xcvsf23
 * @text ANIMATION
 * @param asdasczxc
 * @text ---------------------
 *
 * @param openingAnimation
 * @text Opening Animation
 * @desc Apply an effect when the animation starts playing
 * @type select
 * @option None
 * @value none
 * @option Fade In
 * @value fadeIn
 * @option Scale In
 * @value scaleIn
 * @option Scale In - Width Only
 * @value scaleInWidth
 * @option Scale In - Height Only
 * @value scaleInHeight
 * @default none
 *
 * @param endingAnimation
 * @text Ending Animation
 * @desc Apply an effect when the animation is about to end (will start at the end of first loop)
 * @type select
 * @option None
 * @value none
 * @option Fade Out
 * @value fadeOut
 * @option Scale Out
 * @value scaleOut
 * @default none
 *
 * @param animationDuration
 * @text Animation Duration
 * @desc Duration for both opening and ending animation in frames (60 frames = ~1s)
 * @type number
 * @default 30
 */

/*~struct~BloomSettings:
 * @param bloomEffect
 * @text Bloom Effect
 * @desc Apply a bloom effect to the animation.
 * @type boolean
 * @default false
 *
 * @param blurAmount
 * @text Blur Amount
 * @desc Amount of blur. Control how far the blur spread.
 * @type number
 * @min 1
 * @default 15
 *
 * @param intensity
 * @text Intensity
 * @desc Intensity of the bloom effect.
 * @type number
 * @min 0
 * @default 255
 *
 * @param tintColor
 * @text Tint Color
 * @desc Tint color (hex code). Leave default if don't know what to do.
 * @type text
 * @default #FFFFFF
 */

/*~struct~SoundSettings:
 * @param sfxSettings
 * @text SFX Settings
 * @type struct<SFXSetting>[]
 * @desc Settings for playing sound effects at specific frames.
 * @default []
 */
/*~struct~SFXSetting:
 * @param frame
 * @text Frame Number
 * @type number
 * @desc The frame number at which the sound effect will play.
 * @default 1
 * @min 1
 *
 * @param sfxFile
 * @text SFX File
 * @type file
 * @dir audio/se
 * @desc The sound effect file to play.
 *
 * @param volume
 * @text Volume
 * @type number
 * @desc Volume of the sound effect (0-100).
 * @default 90
 * @min 0
 * @max 100
 *
 * @param pitch
 * @text Pitch
 * @type number
 * @desc Pitch of the sound effect (50-150).
 * @default 100
 * @min 50
 * @max 150
 */
/*~struct~PreloadFolderList:
 * @param folders
 * @text Folders to Preload
 * @type string[]
 * @desc e.g. img/characters or img/pictures or img/pictures/frames (must have if use Show Animation seperate files method)
 * @default []
 */
/*~struct~AnimKeywords:
 * @param walkName
 * @text Walk Animation Keyword
 * @type text
 * @desc Keyword in character filename to identify walking animation
 * @default Walk
 *
 * @param idleName
 * @text Idle Animation Keyword
 * @type text
 * @desc Keyword in character filename to identify idle animation
 * @default Idle
 *
 * @param runName
 * @text Run Animation Keyword
 * @type text
 * @desc Keyword in character filename to identify running animation
 * @default Run
 */
/*~struct~PlayerFrameModifier:
 * @param idleSpeed
 * @text Idle Animation Speed
 * @type number
 * @decimals 2
 * @desc Leave empty to use Global Frame Speed
 * @default
 *
 * @param walkSpeed
 * @text Walk Animation Speed
 * @type number
 * @decimals 2
 * @desc Leave empty to use Global Frame Speed
 * @default
 *
 * @param runSpeed
 * @text Run Animation Speed
 * @type number
 * @decimals 2
 * @desc Leave empty to use Global Frame Speed
 * @default
 */

var Imported = Imported || {};
Imported.Hendrix_Animation_Solution = true;

var _hxPluginMeta = (function () {
  var _sig = [83, 72].map(function (c) { return String.fromCharCode(c); }).join('');
  var _pid = 'HAS_' + _sig + '_2025';
  var _chk = _sig.charCodeAt(0) * 100 + _sig.charCodeAt(1);
  return { id: _pid, v: _chk, author: _sig };
})();

var detectedIdleGraphic = null;
var detectedWalkGraphic = null;
var detectedRunGraphic = null;

(function () {
  const pluginName = "Hendrix_Animation_Solution";
  const parameters = PluginManager.parameters(pluginName);
  const showDockButton = parameters["showDockButton"] !== "false";
  const isNearest = parameters["Nearest"] === "true";
  const enableSwitch = Number(parameters["Enable Switch"] || 0);
  const enablePreload = parameters["Enable Preload"] === "true";
  const frameKeyword = parameters["Frame Keyword"] || "f";
  const preloadSettings = parameters["Preload Folders"]
    ? JSON.parse(parameters["Preload Folders"])
    : { folders: [] };
  const animKeywordsParam = parameters["Animation Keywords"]
    ? JSON.parse(parameters["Animation Keywords"])
    : { walkName: "Walk", idleName: "Idle", runName: "Run" };
  const playerFrameModifierParam = parameters["Player Frame Modifier"]
    ? JSON.parse(parameters["Player Frame Modifier"])
    : { idleSpeed: "", walkSpeed: "", runSpeed: "" };
  let PLAYER_IDLE_SPEED = playerFrameModifierParam.idleSpeed
    ? Number(playerFrameModifierParam.idleSpeed)
    : null;
  let PLAYER_WALK_SPEED = playerFrameModifierParam.walkSpeed
    ? Number(playerFrameModifierParam.walkSpeed)
    : null;
  let PLAYER_RUN_SPEED = playerFrameModifierParam.runSpeed
    ? Number(playerFrameModifierParam.runSpeed)
    : null;
  let IDLE_KEYWORD = animKeywordsParam.idleName || "";
  let WALK_KEYWORD = animKeywordsParam.walkName || "";
  let RUN_KEYWORD = animKeywordsParam.runName || "";
  let preloadFolders = [];
  let sharedBloomFilter = null;
  let bloomFilterUsers = 0;

  const BLEND_MODES = {
    Screen: PIXI.BLEND_MODES.SCREEN,
    Add: PIXI.BLEND_MODES.ADD,
    Multiply: PIXI.BLEND_MODES.MULTIPLY,
    Normal: PIXI.BLEND_MODES.NORMAL,
  };

  try {
    preloadFolders = JSON.parse(preloadSettings.folders || "[]");
  } catch (e) {
    console.error("Error parsing preload folders:", e);
    preloadFolders = [];
  }

  class PermanentImageCache {
    static _permanentCache = {};
    static _preloadedPaths = new Set();
    static _loadingStatus = {
      total: 0,
      loaded: 0,
      failed: 0,
    };

    static load(folder, filename) {
      if (!filename) {
        return ImageManager._emptyBitmap;
      }

      filename = filename.replace(/\\/g, "/");
      const url = this._makePath(folder, filename);

      if (!enablePreload) {
        return ImageManager.loadBitmap(folder, filename);
      }

      if (!this._permanentCache[url]) {
        this._loadingStatus.total++;
        const bitmap = Bitmap.load(url);

        bitmap.addLoadListener(() => {
          if (bitmap.isError()) {
            this._loadingStatus.failed++;
            //if (Utils.isOptionValid('test')) {
            //    console.warn(`Failed to load image: ${url}`);
            //}
            // Remove from cache if failed
            delete this._permanentCache[url];
            this._preloadedPaths.delete(url);
          } else {
            this._loadingStatus.loaded++;
            //if (Utils.isOptionValid('test')) {
            //    console.log(`Loaded image: ${url}`);
            //}
          }
          this._updateLoadingProgress();
        });

        //if (Utils.isOptionValid('test')) {
        //    console.log(`Adding to cache: ${url}`);
        //}

        this._permanentCache[url] = bitmap;
        this._preloadedPaths.add(url);
      } else {
        //if (Utils.isOptionValid('test')) {
        //    console.log(`Serving from cache: ${url}`);
        //}
      }

      return this._permanentCache[url];
    }

    static _makePath(folder, filename) {
      return folder + Utils.encodeURI(filename) + ".png";
    }

    static isPreloaded(folder, filename) {
      const url = this._makePath(folder, filename);
      return this._preloadedPaths.has(url);
    }

    static _updateLoadingProgress() {
      const total = this._loadingStatus.total;
      const loaded = this._loadingStatus.loaded;
      const failed = this._loadingStatus.failed;
      const progress = (((loaded + failed) / total) * 100).toFixed(1);

      if (Utils.isOptionValid("test")) {
        console.log(
          `Preload progress: ${progress}% (${loaded} loaded, ${failed} failed, ${total} total)`
        );
      }

      if (loaded + failed === total) {
        console.log(
          `Preload complete! Successfully loaded ${loaded}/${total} images.`
        );
        if (failed > 0) {
          console.warn(`Failed to load ${failed} images.`);
        }
      }
    }

    static getLoadingStatus() {
      return { ...this._loadingStatus };
    }

    static cleanInvalidImages() {
      for (const url in this._permanentCache) {
        const bitmap = this._permanentCache[url];
        if (bitmap.isError()) {
          delete this._permanentCache[url];
          this._preloadedPaths.delete(url);
          console.warn(`Removed invalid image from permanent cache: ${url}`);
        }
      }
    }

    static getDetailedCacheInfo() {
      const details = {
        totalMemoryMB: 0,
        files: [],
        summary: {
          totalFiles: 0,
          bySize: {
            huge: { count: 0, size: 0 }, // > 16MB
            large: { count: 0, size: 0 }, // 4-16MB
            medium: { count: 0, size: 0 }, // 1-4MB
            small: { count: 0, size: 0 }, // < 1MB
          },
        },
      };

      for (const url in this._permanentCache) {
        const bitmap = this._permanentCache[url];
        if (bitmap && bitmap.baseTexture) {
          const width = bitmap.width;
          const height = bitmap.height;
          const memoryMB = (width * height * 4) / (1024 * 1024);

          details.totalMemoryMB += memoryMB;

          const fileInfo = {
            url: url,
            dimensions: `${width}x${height}`,
            memoryMB: memoryMB.toFixed(2),
          };
          details.files.push(fileInfo);

          if (memoryMB > 16) {
            details.summary.bySize.huge.count++;
            details.summary.bySize.huge.size += memoryMB;
          } else if (memoryMB > 4) {
            details.summary.bySize.large.count++;
            details.summary.bySize.large.size += memoryMB;
          } else if (memoryMB > 1) {
            details.summary.bySize.medium.count++;
            details.summary.bySize.medium.size += memoryMB;
          } else {
            details.summary.bySize.small.count++;
            details.summary.bySize.small.size += memoryMB;
          }
        }
      }

      details.summary.totalFiles = details.files.length;
      details.files.sort(
        (a, b) => parseFloat(b.memoryMB) - parseFloat(a.memoryMB)
      );

      return details;
    }

    static logDetailedCacheStatus() {
      const details = this.getDetailedCacheInfo();
      console.log(`=== Cache Analysis ===`);
      console.log(`Total Memory Usage: ${details.totalMemoryMB.toFixed(2)} MB`);
      console.log(`Total Files: ${details.summary.totalFiles}`);

      console.log("\n=== Size Categories ===");
      console.log(
        "Huge (>16MB):",
        `${details.summary.bySize.huge.count} files, ` +
        `${details.summary.bySize.huge.size.toFixed(2)} MB`
      );
      console.log(
        "Large (4-16MB):",
        `${details.summary.bySize.large.count} files, ` +
        `${details.summary.bySize.large.size.toFixed(2)} MB`
      );
      console.log(
        "Medium (1-4MB):",
        `${details.summary.bySize.medium.count} files, ` +
        `${details.summary.bySize.medium.size.toFixed(2)} MB`
      );
      console.log(
        "Small (<1MB):",
        `${details.summary.bySize.small.count} files, ` +
        `${details.summary.bySize.small.size.toFixed(2)} MB`
      );

      console.log("\n=== Top 10 Largest Files ===");
      details.files.slice(0, 10).forEach((file) => {
        console.log(`${file.url}: ${file.dimensions} - ${file.memoryMB} MB`);
      });
    }
  }

  class ImagePreloader {
    static async generateManifest() {
      if (!Utils.isNwjs()) {
        console.warn(
          "Manifest can't be generated on mobile. It'll load the generated file from Windows tho."
        );
        return;
      }

      const fs = require("fs");
      const path = require("path");
      const manifest = {};

      const getAllFiles = (dirPath, arrayOfFiles = []) => {
        const files = fs.readdirSync(dirPath);

        files.forEach((file) => {
          const fullPath = path.join(dirPath, file);
          if (fs.statSync(fullPath).isDirectory()) {
            arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
          } else {
            if (file.toLowerCase().match(/\.(png|jpg|webp)$/)) {
              const relativePath = path.relative(process.cwd(), fullPath);
              arrayOfFiles.push(relativePath);
            }
          }
        });

        return arrayOfFiles;
      };

      for (const folderPath of preloadFolders) {
        const basePath = path.join(process.cwd(), folderPath);

        try {
          if (!fs.existsSync(basePath)) {
            console.warn(`Folder not found: ${basePath}`);
            continue;
          }

          const files = getAllFiles(basePath);
          manifest[folderPath] = files.map((file) => {
            const relativePath = path.relative(folderPath, file);
            return relativePath.replace(/\.[^/.]+$/, "");
          });
        } catch (error) {
          console.error(`Error processing folder ${folderPath}:`, error);
        }
      }

      // Save manifest
      try {
        const manifestPath = path.join(process.cwd(), "manifest.json");
        fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
        console.log("Manifest generated successfully at: " + manifestPath);
      } catch (error) {
        console.error("Error saving manifest:", error);
      }
    }

    static async preloadFolder(folderPath) {
      if (Utils.isNwjs()) {
        const fs = require("fs");
        const path = require("path");
        const base = path.join(process.cwd(), folderPath);

        const getAllFiles = (dirPath, arrayOfFiles = []) => {
          const files = fs.readdirSync(dirPath);

          files.forEach((file) => {
            const fullPath = path.join(dirPath, file);
            if (fs.statSync(fullPath).isDirectory()) {
              arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
            } else {
              if (file.toLowerCase().match(/\.(png|jpg|webp)$/)) {
                arrayOfFiles.push(path.relative(base, fullPath));
              }
            }
          });

          return arrayOfFiles;
        };

        try {
          if (!fs.existsSync(base)) {
            console.warn(`Folder not found: ${base}`);
            return;
          }

          const files = getAllFiles(base);
          for (const file of files) {
            const filename = file.replace(/\.[^/.]+$/, "");
            if (!PermanentImageCache.isPreloaded(folderPath + "/", filename)) {
              PermanentImageCache.load(folderPath + "/", filename);
            }
          }
        } catch (error) {
          console.error(`Error preloading folder ${folderPath}:`, error);
        }
      } else {
        try {
          const response = await fetch("manifest.json");
          const manifest = await response.json();

          console.log("=== Manifest.json successfully loaded! ===");
          //console.log('Manifest content:', JSON.stringify(manifest, null, 2));

          const folderFiles = manifest[folderPath] || [];

          for (const filename of folderFiles) {
            if (!PermanentImageCache.isPreloaded(folderPath + "/", filename)) {
              PermanentImageCache.load(folderPath + "/", filename);
            }
          }
        } catch (error) {
          console.error(`Error loading manifest or preloading files:`, error);
        }
      }
    }

    static preloadAllConfiguredFolders() {
      for (const folder of preloadFolders) {
        this.preloadFolder(folder);
      }
    }
  }

  const _ImageManager_loadPicture = ImageManager.loadPicture;
  ImageManager.loadPicture = function (filename) {
    if (enablePreload) {
      if (!filename) return ImageManager._emptyBitmap;
      const folder = filename.split("/")[0];
      if (preloadFolders.includes(folder)) {
        return PermanentImageCache.load("img/pictures/", filename);
      }
    }
    return _ImageManager_loadPicture.call(this, filename);
  };

  // Basically just override ImageManager loadPicture and Character. Preload from other folder doesn't do anything.
  const _ImageManager_loadCharacter = ImageManager.loadCharacter;
  ImageManager.loadCharacter = function (filename) {
    if (enablePreload && preloadFolders.includes("img/characters")) {
      if (!filename) return ImageManager._emptyBitmap;
      return PermanentImageCache.load("img/characters/", filename);
    }
    return _ImageManager_loadCharacter.call(this, filename);
  };

  const _Scene_Boot_loadSystemImages = Scene_Boot.prototype.loadSystemImages;
  Scene_Boot.prototype.loadSystemImages = function () {
    _Scene_Boot_loadSystemImages.call(this);
    if (enablePreload) {
      ImagePreloader.preloadAllConfiguredFolders();
      ImagePreloader.generateManifest();
      if (Utils.isOptionValid("test")) {
        console.log("Starting image preload...");
      }
    }
  };

  const _Scene_Boot_isReady = Scene_Boot.prototype.isReady;
  Scene_Boot.prototype.isReady = function () {
    if (enablePreload) {
      // Check preload status
      const status = PermanentImageCache.getLoadingStatus();
      if (status.total > 0 && status.loaded + status.failed < status.total) {
        return false;
      }
    }
    return _Scene_Boot_isReady.call(this);
  };

  PluginManager.registerCommand(
    pluginName,
    "showAnimationFromLibrary",
    function (args) {
      const animationName = args.animationName;
      const loopCount =
        args.loopCount && args.loopCount.toLowerCase() === "infinite"
          ? Infinity
          : Number(args.loopCount || 1);
      const stickMode = String(args.stickMode) === "true";

      let eventId = args.eventId || "this";
      let targetEventId = eventId;

      if (eventId.toLowerCase() === "this") {
        targetEventId = this.eventId();
      } else if (eventId.toLowerCase() === "player") {
        targetEventId = "player";
      } else {
        targetEventId = Number(eventId);
      }

      getAnimationFromLibrary(animationName).then((animData) => {
        if (!animData) {
          return;
        }

        let target;
        if (targetEventId === "player") {
          target = $gamePlayer;
        } else {
          target = $gameMap.event(targetEventId);
        }

        if (!target) return;

        const bitmap = enablePreload
          ? PermanentImageCache.load("img/pictures/", animData.spritesheetFile)
          : ImageManager.loadPicture(animData.spritesheetFile);

        bitmap.addLoadListener(() => {
          const allFrames = AnimatedPictureManager.createSpritesheetFrames(
            bitmap,
            animData.rows,
            animData.columns
          );

          let zIndex;
          if (animData.zIndex === "auto") {
            const targetSprite =
              SceneManager._scene._spriteset.findCharacterSprite(target);
            zIndex = targetSprite ? targetSprite.z : 3;
          } else {
            zIndex = Number(animData.zIndex);
          }

          const blendMode = BLEND_MODES[animData.blendMode] || PIXI.BLEND_MODES.NORMAL;

          const rotation = animData.randomRotation
            ? Math.random() * 360
            : (animData.rotation || 0);

          const animatedPicture = new AnimatedPicture(
            allFrames,
            animData.fps || 60,
            target,
            loopCount,
            animData.offsetX || 0,
            animData.offsetY || 0,
            [],
            animData.scale || 100,
            animData.opacity || 255,
            animData.flip || false,
            animData.flipY || false,
            animData.randomFlipX || false,
            animData.randomFlipY || false,
            rotation,
            blendMode,
            zIndex,
            animData.bloomEffect || false,
            animData.blurAmount || 15,
            animData.tintColor || "#FFFFFF",
            animData.intensity || 255,
            animData.hue || 0,
            () => AnimatedPictureManager.decrementAnimationCount(targetEventId),
            bitmap,
            stickMode,
            "library_" + animationName,
            animData.playInReverse || false,
            "center",
            animData.openingAnimation || "none",
            animData.animationDuration || 30,
            animData.endingAnimation || "none"
          );

          if (SceneManager._scene instanceof Scene_Map) {
            SceneManager._scene.addAnimatedPicture(animatedPicture);
            AnimatedPictureManager.addAnimatedPicture(animatedPicture);
          }
        });
      });
    }
  );

  PluginManager.registerCommand(
    pluginName,
    "showAnimatedPicture",
    function (args) {
      const animation = JSON.parse(
        args.animationSettings || '{"baseFilename":"","frameCount":1}'
      );
      const spritesheet = JSON.parse(
        args.spritesheetSettings ||
        '{"spritesheetFile":"","row":1,"column":1,"frameRange":""}'
      );
      const position = JSON.parse(
        args.positionSettings ||
        '{"eventId":"0","offsetX":0,"offsetY":0,"zIndex":8,"origin":"center","stickMode":false}'
      );
      const visual = JSON.parse(
        args.visualSettings ||
        '{"scalePercent":100,"opacity":255,"hue":0,"blendMode":"Normal","playInReverse":false}'
      );
      const transform = JSON.parse(
        args.transformSettings ||
        '{"flip":false,"flipY":false,"randomFlipX":false,"randomFlipY":false,"rotation":0,"randomRotation":false,"openingAnimation":"none","endingAnimation":"none","animationDuration":30}'
      );
      const bloom = JSON.parse(
        args.bloomSettings ||
        '{"bloomEffect":false,"blurAmount":15,"intensity":255,"tintColor":"#FFFFFF"}'
      );
      const sound = JSON.parse(args.soundSettings || '{"sfxSettings":[]}');

      if (typeof sound.sfxSettings === 'string') {
        sound.sfxSettings = JSON.parse(sound.sfxSettings);
      }

      if (Array.isArray(sound.sfxSettings)) {
        sound.sfxSettings = sound.sfxSettings.map(sfx => {
          if (typeof sfx === 'string') {
            return JSON.parse(sfx);
          }
          return sfx;
        });
      }

      const note = args.note || "";
      let loopCount;
      if (args.loopCount && args.loopCount.toLowerCase() === "infinite") {
        loopCount = Infinity;
      } else {
        loopCount = Number(args.loopCount || 1);
      }

      let frames = [];
      let bitmap = null;

      if (enablePreload) {
        if (!spritesheet.spritesheetFile) {
          const baseFilename = String(animation.baseFilename);
          const frameCount = Number(animation.frameCount);
          for (let i = 1; i <= frameCount; i++) {
            frames.push(
              PermanentImageCache.load(
                "img/pictures/",
                `frames/${baseFilename}${i}`
              )
            );
          }
        } else {
          bitmap = PermanentImageCache.load(
            "img/pictures/",
            spritesheet.spritesheetFile
          );
        }
      } else {
        if (!spritesheet.spritesheetFile) {
          const baseFilename = String(animation.baseFilename);
          const frameCount = Number(animation.frameCount);
          for (let i = 1; i <= frameCount; i++) {
            frames.push(ImageManager.loadPicture(`frames/${baseFilename}${i}`));
          }
        } else {
          bitmap = ImageManager.loadPicture(spritesheet.spritesheetFile);
        }
      }

      let eventId = position.eventId;
      let targets = [];
      if (eventId.startsWith("<") && eventId.endsWith(">")) {
        const notetag = eventId.slice(1, -1);

        const events = $gameMap.events();
        for (let i = 0; i < events.length; i++) {
          const event = events[i];
          if (event && event.event()) {
            const eventData = event.event();
            if (eventData.note && eventData.note.includes(`<${notetag}>`)) {
              targets.push(event);
            }
          }
        }

        if (targets.length === 0) {
          return;
        }
      } else if (eventId === "0" || eventId.toLowerCase() === "this") {
        eventId = this.eventId();
        targets.push($gameMap.event(eventId));
      } else if (eventId.toLowerCase() === "player") {
        eventId = "player";
        targets.push($gamePlayer);
      } else {
        eventId = Number(eventId);
        if (!$gameMap.event(eventId)) {
          return;
        }
        targets.push($gameMap.event(eventId));
      }

      let zIndex = position.zIndex;
      if (zIndex === "auto" && targets.length > 0) {
        // Get the z-index from the target event/player
        const target = targets[0];
        if (target instanceof Game_Event || target instanceof Game_Player) {
          zIndex = target.screenZ();
        } else {
          zIndex = 3;
        }
      } else {
        zIndex = Number(position.zIndex);
      }

      const commonParams = {
        fps: Number(args.fps || 60),
        loopCount: loopCount,
        offsetX: Number(position.offsetX),
        offsetY: Number(position.offsetY),
        stickMode: String(position.stickMode) === "true",
        scalePercent: Number(visual.scalePercent),
        opacity: Number(visual.opacity),
        flip: String(transform.flip) === "true",
        flipY: String(transform.flipY) === "true",
        randomFlipX: String(transform.randomFlipX) === "true",
        randomFlipY: String(transform.randomFlipY) === "true",
        rotation:
          transform.randomRotation === "true"
            ? Math.random() * 360
            : Number(transform.rotation),
        blendMode: BLEND_MODES[visual.blendMode] || PIXI.BLEND_MODES.NORMAL,
        zIndex: zIndex,
        bloomEffect: String(bloom.bloomEffect) === "true",
        blurAmount: Number(bloom.blurAmount),
        tintColor: bloom.tintColor,
        intensity: Number(bloom.intensity),
        hue: Number(visual.hue),
        playInReverse: String(visual.playInReverse) === "true",
        sfxSettings: Array.isArray(sound.sfxSettings) ? sound.sfxSettings : [],
        origin: position.origin || "center",
        openingAnimation: transform.openingAnimation || "none",
        endingAnimation: transform.endingAnimation || "none",
        animationDuration: Number(transform.animationDuration || 30),
        frameRange: spritesheet.frameRange || "",
      };

      const handleAnimation = (frames) => {
        targets.forEach((target) => {
          const animatedPicture = new AnimatedPicture(
            frames,
            commonParams.fps,
            target,
            commonParams.loopCount,
            commonParams.offsetX,
            commonParams.offsetY,
            commonParams.sfxSettings,
            commonParams.scalePercent,
            commonParams.opacity,
            commonParams.flip,
            commonParams.flipY,
            commonParams.randomFlipX,
            commonParams.randomFlipY,
            commonParams.rotation,
            commonParams.blendMode,
            commonParams.zIndex,
            commonParams.bloomEffect,
            commonParams.blurAmount,
            commonParams.tintColor,
            commonParams.intensity,
            commonParams.hue,
            () => AnimatedPictureManager.decrementAnimationCount(eventId),
            bitmap,
            commonParams.stickMode,
            note,
            commonParams.playInReverse,
            commonParams.origin,
            commonParams.openingAnimation,
            commonParams.animationDuration,
            commonParams.endingAnimation
          );

          if (SceneManager._scene instanceof Scene_Map) {
            SceneManager._scene.addAnimatedPicture(animatedPicture);
            AnimatedPictureManager.addAnimatedPicture(animatedPicture);
          }
        });
      };

      const isSpriteTrulyReady = (callback) => {
        const spriteset = SceneManager._scene && SceneManager._scene._spriteset;

        if (!spriteset) {
          setTimeout(() => isSpriteTrulyReady(callback), 16);
          return;
        }

        const allSpritesReady = targets.every((target) => {
          const sprite = spriteset.findCharacterSprite(target);
          return sprite && sprite.bitmap && sprite.bitmap.isReady();
        });

        if (allSpritesReady) {
          callback();
        } else {
          setTimeout(() => isSpriteTrulyReady(callback), 16);
        }
      };

      if (spritesheet.spritesheetFile) {
        bitmap.addLoadListener(() => {
          let allFrames = AnimatedPictureManager.createSpritesheetFrames(
            bitmap,
            Number(spritesheet.row),
            Number(spritesheet.column)
          );

          if (
            commonParams.frameRange &&
            commonParams.frameRange.trim() !== ""
          ) {
            const rangeMatch = commonParams.frameRange.match(/^(\d+)-(\d+)$/);
            if (rangeMatch) {
              const startFrame = Number(rangeMatch[1]);
              const endFrame = Number(rangeMatch[2]);

              if (
                startFrame >= 1 &&
                endFrame >= startFrame &&
                endFrame <= allFrames.length
              ) {
                allFrames = allFrames.slice(startFrame - 1, endFrame);
              }
            }
          }

          isSpriteTrulyReady(() => handleAnimation(allFrames));
        });
      } else {
        isSpriteTrulyReady(() => handleAnimation(frames));
      }
    }
  );

  PluginManager.registerCommand(pluginName, "removeAnimation", function (args) {
    let targetEventId;

    if (args.eventId.toLowerCase() === "this") {
      targetEventId = this._eventId;
    } else if (args.eventId.toLowerCase() === "player") {
      targetEventId = $gamePlayer;
    } else {
      targetEventId = Number(args.eventId);
    }

    const animationsToRemove = AnimatedPictureManager._animatedPictures.filter(
      (pic) => {
        const targetMatches =
          pic.target ===
          (targetEventId === $gamePlayer
            ? $gamePlayer
            : $gameMap.event(targetEventId));

        if (args.notetag) {
          const exactMatch = pic.note === args.notetag;
          const libraryMatch = pic.note === "library_" + args.notetag;
          return targetMatches && (exactMatch || libraryMatch);
        }

        return targetMatches;
      }
    );

    if (
      args.effect &&
      args.effect !== "none" &&
      args.duration &&
      Number(args.duration) > 0
    ) {
      const duration = Math.max(1, Number(args.duration));

      if (args.effect === "fadeOut") {
        animationsToRemove.forEach((animation) => {
          animation.applyFadeOut(duration);
        });
      } else if (args.effect === "scaleOut") {
        animationsToRemove.forEach((animation) => {
          animation.applyScaleOut(duration);
        });
      }
    } else {
      animationsToRemove.forEach((animation) => {
        animation.dispose();
      });
    }
  });

  PluginManager.registerCommand(pluginName, "animationEffect", function (args) {
    let targetEventId;

    if (args.target.toLowerCase() === "this") {
      targetEventId = this._eventId;
    } else if (args.target.toLowerCase() === "player") {
      targetEventId = $gamePlayer;
    } else {
      targetEventId = Number(args.target);
    }

    const target =
      targetEventId === $gamePlayer
        ? $gamePlayer
        : $gameMap.event(targetEventId);
    if (!target) return;

    const animationsToEffect = AnimatedPictureManager._animatedPictures.filter(
      (pic) => {
        const targetMatches = pic.target === target;

        if (args.note && args.note.trim() !== "") {
          return targetMatches && pic.note === args.note;
        }

        return targetMatches;
      }
    );

    const duration = Math.max(1, Number(args.duration) || 60);

    if (args.effect === "fadeOut") {
      animationsToEffect.forEach((animation) => {
        animation.applyFadeOut(duration);
      });
    } else if (args.effect === "scaleOut") {
      animationsToEffect.forEach((animation) => {
        animation.applyScaleOut(duration);
      });
    }
  });

  class AnimatedPicture {
    constructor(
      frames,
      fps,
      target,
      loopCount = 1,
      offsetX = 0,
      offsetY = 0,
      sfxSettings = [],
      scalePercent = 100,
      opacity = 255,
      flip = false,
      flipY = false,
      randomFlipX = false,
      randomFlipY = false,
      rotation = 0,
      blendMode = PIXI.BLEND_MODES.NORMAL,
      zIndex = 8,
      bloomEffect = false,
      blurAmount = 4,
      tintColor = "#FFFFFF",
      intensity = 0.5,
      hue = 0,
      onCompletion,
      bitmap = null,
      stickMode = false,
      note = "",
      playInReverse = false,
      origin = "center",
      openingAnimation = "none",
      animationDuration = 30,
      endingAnimation = "none"
    ) {
      this.sprite = new Sprite();
      this.setOrigin(origin);
      if (this.sprite.texture && isNearest) {
        this.sprite.texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
      }

      this.openingAnimation = openingAnimation;
      this.endingAnimation = endingAnimation;
      this.animationDuration = Math.max(1, animationDuration);
      this.openingElapsed = 0;
      this.isPlayingOpeningAnimation = openingAnimation !== "none";
      this.isPlayingEndingAnimation = false;

      if (this.isPlayingOpeningAnimation) {
        if (openingAnimation === "fadeIn") {
          this.originalOpacity = opacity;
          opacity = 0;
        } else if (openingAnimation === "scaleIn") {
          this.originalScalePercent = scalePercent;
          scalePercent = 1;
        } else if (openingAnimation === "scaleInWidth") {
          this.originalScalePercent = scalePercent;
          scalePercent = 1;
        } else if (openingAnimation === "scaleInHeight") {
          this.originalScalePercent = scalePercent;
          scalePercent = 1;
        }
      }

      // Store the current character name/index for change detection
      if (this.target) {
        this._lastCharacterName = this.target._characterName;
        this._lastCharacterIndex = this.target._characterIndex;
      }

      this.frames = frames;
      this.fps = fps;
      this.currentFrameIndex = playInReverse ? this.frames.length - 1 : 0;
      this.frameTime = 1000 / fps;
      this.elapsedTime = 0;
      this.completedLoops = 0;
      this.loopCount = loopCount;
      this.playInReverse = playInReverse;
      this.note = note;

      this.target = target;
      this.offsetX = offsetX;
      this.offsetY = offsetY;
      this.lastKnownX = null;
      this.lastKnownY = null;
      this.stickMode = stickMode;

      this.updateTargetSprite();
      const sprite = this.targetSprite;

      if (sprite && sprite.bitmap && sprite.bitmap.isReady()) {
        this.initialSpriteWidth = sprite.width;
        this.initialSpriteHeight = sprite.height;
      } else {
        this.initialSpriteWidth = $gameMap.tileWidth();
        this.initialSpriteHeight = $gameMap.tileHeight();
      }

      this.bitmap = bitmap;
      this.flip = randomFlipX ? Math.random() < 0.5 : flip;
      this.flipY = randomFlipY ? Math.random() < 0.5 : flipY;
      this.rotation = rotation * (Math.PI / 180);
      this.sprite.blendMode = blendMode;
      this._z = zIndex;
      this.zIndex = zIndex;
      this.sfxSettings = sfxSettings;
      this.onCompletion = onCompletion;

      this.bloomEffect = bloomEffect;
      this.blurAmount = blurAmount;
      this.tintColor = tintColor;
      this.intensity = intensity;
      this.hue = hue;

      if (this.bloomEffect) {
        this.createBloomSprite();
      }

      this.applyOpacity(opacity);
      this.applyScale(scalePercent);
      this.applyRotation();
      this.applyHueEffect();
      this.updateFrame();
      this.updatePosition();
    }

    easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    }

    setOrigin(origin) {
      switch (origin) {
        case "top":
          this.sprite.anchor.set(0.5, 0);
          break;
        case "bottom":
          this.sprite.anchor.set(0.5, 1.0);
          break;
        case "center":
        default:
          this.sprite.anchor.set(0.5, 0.5);
          break;
      }

      if (this.bloomSprite) {
        this.bloomSprite.anchor = this.sprite.anchor;
      }
    }

    applyHueEffect() {
      if (this.hue !== 0) {
        this.hueFilter = new PIXI.filters.ColorMatrixFilter();
        this.hueFilter.hue(this.hue);

        this.sprite.filters = this.sprite.filters || [];
        this.sprite.filters.push(this.hueFilter);

        if (this.bloomSprite) {
          this.bloomHueFilter = new PIXI.filters.ColorMatrixFilter();
          this.bloomHueFilter.hue(this.hue);

          this.bloomSprite.filters = this.bloomSprite.filters || [];
          this.bloomSprite.filters.push(this.bloomHueFilter);
        }
      }
    }

    applyFadeOut(duration) {
      this.isFadingOut = true;
      this.fadeOutDuration = duration;
      this.fadeOutElapsed = 0;
      this.originalOpacity = this.sprite.opacity;
    }

    applyScaleOut(duration) {
      this.isScalingOut = true;
      this.scaleOutDuration = duration;
      this.scaleOutElapsed = 0;
      this.originalScaleX = this.sprite.scale.x;
      this.originalScaleY = this.sprite.scale.y;
    }

    easeOutQuad(t) {
      return t * (2 - t);
    }

    createBloomSprite() {
      if (!this.bloomSprite) {
        this.bloomSprite = new Sprite();
      }
      this.bloomSprite.anchor = this.sprite.anchor;
      this.bloomSprite.blendMode = PIXI.BLEND_MODES.SCREEN;

      if (!sharedBloomFilter) {
        sharedBloomFilter = new PIXI.filters.BlurFilter(this.blurAmount);
      } else {
        if (Math.abs(sharedBloomFilter.blur - this.blurAmount) > 0.5) {
          sharedBloomFilter.blur = this.blurAmount;
        }
      }

      bloomFilterUsers++;

      this.bloomSprite.filters = [sharedBloomFilter];

      const color = PIXI.utils.string2hex(this.tintColor);
      this.bloomSprite.tint = color;
      this.bloomSprite.alpha = this.intensity / 255;
      this.bloomSprite.z = this.sprite.z + 1;

      if (this.bitmap) {
        this.bloomSprite.bitmap = this.bitmap;
        if (this.frames && this.frames[this.currentFrameIndex]) {
          const frame = this.frames[this.currentFrameIndex];
          if (typeof frame === "object" && "x" in frame) {
            this.bloomSprite.setFrame(
              frame.x,
              frame.y,
              frame.width,
              frame.height
            );
          }
        }
      }
    }

    removeBloomSprite() {
      if (this.bloomSprite && this.bloomSprite.parent) {
        this.bloomSprite.parent.removeChild(this.bloomSprite);
        if (bloomFilterUsers > 0) {
          bloomFilterUsers--;
        }
        if (bloomFilterUsers === 0 && sharedBloomFilter) {
          sharedBloomFilter.destroy();
          sharedBloomFilter = null;
        }
      }
      this.bloomSprite = null;
    }

    applyOpacity(opacity) {
      this.sprite.opacity = opacity;
    }

    applyScale(scalePercent) {
      const scale = scalePercent / 100;
      this.sprite.scale.set(
        this.flip ? -scale : scale,
        this.flipY ? -scale : scale
      );
    }

    applyRotation() {
      this.sprite.rotation = this.rotation;
    }

    updateFrame() {
      if (
        this.frames &&
        this.frames.length > 0 &&
        this.currentFrameIndex < this.frames.length
      ) {
        const frame = this.frames[this.currentFrameIndex];

        if (this.bitmap) {
          this.sprite.bitmap = this.bitmap;
          if (
            this.sprite.bitmap &&
            this.sprite.bitmap.baseTexture &&
            isNearest
          ) {
            this.sprite.bitmap.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
          }
          this.sprite.setFrame(frame.x, frame.y, frame.width, frame.height);
          if (this.bloomEffect && this.bloomSprite) {
            this.bloomSprite.bitmap = this.bitmap;
            if (
              this.bloomSprite.bitmap &&
              this.bloomSprite.bitmap.baseTexture &&
              isNearest
            ) {
              this.bloomSprite.bitmap.baseTexture.scaleMode =
                PIXI.SCALE_MODES.NEAREST;
            }
            this.bloomSprite.setFrame(
              frame.x,
              frame.y,
              frame.width,
              frame.height
            );
          }
        } else {
          this.sprite.bitmap = frame;
          if (
            this.sprite.bitmap &&
            this.sprite.bitmap.baseTexture &&
            isNearest
          ) {
            this.sprite.bitmap.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
          }
          if (this.bloomEffect && this.bloomSprite) {
            this.bloomSprite.bitmap = frame;
            if (
              this.bloomSprite.bitmap &&
              this.bloomSprite.bitmap.baseTexture &&
              isNearest
            ) {
              this.bloomSprite.bitmap.baseTexture.scaleMode =
                PIXI.SCALE_MODES.NEAREST;
            }
          }
        }

        if (this.bloomEffect && this.bloomSprite) {
          this.bloomSprite.alpha = this.intensity / 255;
        }
      }

      for (const sfx of this.sfxSettings) {
        if (Number(sfx.frame) === this.currentFrameIndex + 1) {
          AudioManager.playSe({
            name: sfx.sfxFile,
            volume: Number(sfx.volume),
            pitch: Number(sfx.pitch),
          });
        }
      }
    }

    updatePosition() {
      if (
        this.initialSpriteWidth === $gameMap.tileWidth() &&
        this.initialSpriteHeight === $gameMap.tileHeight()
      ) {
        this.updateTargetSprite();
        const sprite = this.targetSprite;
        if (sprite && sprite.bitmap && sprite.bitmap.isReady()) {
          this.initialSpriteWidth = sprite.width;
          this.initialSpriteHeight = sprite.height;
        }
      }
      if (
        this.target &&
        (this.target._characterName !== this._lastCharacterName ||
          this.target._characterIndex !== this._lastCharacterIndex)
      ) {
        this.updateTargetSprite();
        this._lastCharacterName = this.target._characterName;
        this._lastCharacterIndex = this.target._characterIndex;
      }

      if (this.stickMode) {
        if (this.lastKnownX === null || this.lastKnownY === null) {
          const screenX = this.target.screenX();
          const screenY = this.target.screenY();
          const sprite = this.targetSprite;

          let initialX, initialY;

          let spriteOffsetX = 0;
          let spriteOffsetY = 0;
          if (sprite) {
            spriteOffsetX = sprite.x - screenX;
            spriteOffsetY = sprite.y - screenY;
          }

          if (
            Imported.Hendrix_Action_Engine &&
            sprite &&
            sprite.rotation !== 0
          ) {
            initialX = screenX + spriteOffsetX + this.offsetX;
            initialY = screenY + spriteOffsetY + this.offsetY;
          } else {
            if (sprite && (sprite.scale.x !== 1 || sprite.scale.y !== 1)) {
              const actualWidth = sprite.width * Math.abs(sprite.scale.x);
              const actualHeight = sprite.height * Math.abs(sprite.scale.y);

              const adjustedOffsetX =
                this.offsetX * (actualWidth / this.initialSpriteWidth);
              const adjustedOffsetY =
                this.offsetY * (actualHeight / this.initialSpriteHeight);

              initialX = screenX + spriteOffsetX + adjustedOffsetX;
              initialY =
                screenY + spriteOffsetY - actualHeight / 2 + adjustedOffsetY;
            } else {
              initialX = screenX + spriteOffsetX + this.offsetX * 2;
              initialY =
                screenY +
                spriteOffsetY -
                this.initialSpriteHeight / 2 +
                this.offsetY * 2;
            }
          }

          const mapDisplayX = $gameMap.displayX() * $gameMap.tileWidth();
          const mapDisplayY = $gameMap.displayY() * $gameMap.tileHeight();

          this.lastKnownX = initialX + mapDisplayX - $gameMap.tileWidth() / 2;
          this.lastKnownY = initialY + mapDisplayY - $gameMap.tileHeight() / 2;
        }

        const mapDisplayX = $gameMap.displayX() * $gameMap.tileWidth();
        const mapDisplayY = $gameMap.displayY() * $gameMap.tileHeight();
        const displayX =
          this.lastKnownX - mapDisplayX + $gameMap.tileWidth() / 2;
        const displayY =
          this.lastKnownY - mapDisplayY + $gameMap.tileHeight() / 2;

        this.sprite.x = Math.round(displayX);
        this.sprite.y = Math.round(displayY);

        if (Imported.Hendrix_Action_Engine) {
          const sprite = this.targetSprite;
          if (sprite && this.target.customRotationPoint) {
            this.sprite.rotation = this.rotation + sprite.rotation;
          }
        }

        if (this.bloomEffect && this.bloomSprite) {
          if (
            this.bloomSprite.x !== this.sprite.x ||
            this.bloomSprite.y !== this.sprite.y ||
            this.bloomSprite.rotation !== this.sprite.rotation
          ) {
            this.bloomSprite.x = this.sprite.x;
            this.bloomSprite.y = this.sprite.y;
            this.bloomSprite.scale.set(
              this.sprite.scale.x,
              this.sprite.scale.y
            );
            this.bloomSprite.rotation = this.sprite.rotation;
          }
        }
        return;
      }

      if (this.target) {
        const screenX = this.target.screenX();
        const screenY = this.target.screenY();
        const sprite = this.targetSprite;

        let newX, newY;

        let spriteOffsetX = 0;
        let spriteOffsetY = 0;
        if (sprite) {
          spriteOffsetX = sprite.x - screenX;
          spriteOffsetY = sprite.y - screenY;
        }

        if (Imported.Hendrix_Action_Engine && sprite && this.target.customRotationPoint) {
          newX = screenX + spriteOffsetX + this.offsetX;
          newY = screenY + spriteOffsetY + this.offsetY;
        } else {
          if (sprite && (sprite.scale.x !== 1 || sprite.scale.y !== 1)) {
            const actualWidth = sprite.width * Math.abs(sprite.scale.x);
            const actualHeight = sprite.height * Math.abs(sprite.scale.y);

            const adjustedOffsetX =
              this.offsetX * (actualWidth / this.initialSpriteWidth);
            const adjustedOffsetY =
              this.offsetY * (actualHeight / this.initialSpriteHeight);

            newX = screenX + spriteOffsetX + adjustedOffsetX;
            newY = screenY + spriteOffsetY - actualHeight / 2 + adjustedOffsetY;
          } else {
            newX = screenX + spriteOffsetX + this.offsetX * 2;
            newY =
              screenY +
              spriteOffsetY -
              this.initialSpriteHeight / 2 +
              this.offsetY * 2;
          }
        }

        if (Imported.Hendrix_Action_Engine && sprite && this.target.customRotationPoint) {
          const cos = Math.cos(sprite.rotation);
          const sin = Math.sin(sprite.rotation);
          const rotatedOffsetX = this.offsetX * cos - this.offsetY * sin;
          const rotatedOffsetY = this.offsetX * sin + this.offsetY * cos;

          newX = screenX + spriteOffsetX + rotatedOffsetX;
          newY = screenY + spriteOffsetY + rotatedOffsetY;

          this.sprite.rotation = this.rotation + sprite.rotation;
        } else {
          this.sprite.rotation = this.rotation;
        }

        if (
          Math.abs(this.sprite.x - newX) > 1 ||
          Math.abs(this.sprite.y - newY) > 1
        ) {
          this.sprite.x = newX;
          this.sprite.y = newY;
          this.lastKnownX = newX;
          this.lastKnownY = newY;
        }
      }

      if (this.bloomEffect && this.bloomSprite) {
        if (
          this.bloomSprite.x !== this.sprite.x ||
          this.bloomSprite.y !== this.sprite.y ||
          this.bloomSprite.rotation !== this.sprite.rotation
        ) {
          this.bloomSprite.x = this.sprite.x;
          this.bloomSprite.y = this.sprite.y;
          this.bloomSprite.scale = this.sprite.scale;
          this.bloomSprite.rotation = this.sprite.rotation;
        }
      }
    }

    updateTargetSprite() {
      if (SceneManager._scene instanceof Scene_Map && this.target) {
        this.targetSprite = SceneManager._scene._spriteset.findCharacterSprite(
          this.target
        );
        if (!this.targetSprite && this.target._characterName) {
        }
      } else {
        this.targetSprite = null;
      }
    }

    checkTargetValidity() {
      if (this.target === $gamePlayer) return true;
      if (!this.target) return false;
      return !!$gameMap.event(this.target._eventId);
    }

    update(deltaTime) {
      if (!this.isValid()) return;
      // Opening animation effects
      if (this.isPlayingOpeningAnimation) {
        this.openingElapsed += 1;
        const progress = Math.min(
          1.0,
          this.openingElapsed / this.animationDuration
        );
        const easedProgress = this.easeInOutQuad(progress);

        if (this.openingAnimation === "fadeIn") {
          const newOpacity = this.originalOpacity * easedProgress;
          this.sprite.opacity = Math.round(newOpacity);

          if (this.bloomSprite) {
            this.bloomSprite.opacity = Math.round(newOpacity);
          }
        } else if (this.openingAnimation === "scaleIn") {
          const targetScale = this.originalScalePercent / 100;
          const currentScale = targetScale * easedProgress;

          this.sprite.scale.x = this.flip ? -currentScale : currentScale;
          this.sprite.scale.y = this.flipY ? -currentScale : currentScale;

          if (this.bloomSprite) {
            this.bloomSprite.scale.x = this.sprite.scale.x;
            this.bloomSprite.scale.y = this.sprite.scale.y;
          }
        } else if (this.openingAnimation === "scaleInWidth") {
          const targetScale = this.originalScalePercent / 100;
          const currentScaleX = targetScale * easedProgress;
          const currentScaleY = targetScale;

          this.sprite.scale.x = this.flip ? -currentScaleX : currentScaleX;
          this.sprite.scale.y = this.flipY ? -currentScaleY : currentScaleY;

          if (this.bloomSprite) {
            this.bloomSprite.scale.x = this.sprite.scale.x;
            this.bloomSprite.scale.y = this.sprite.scale.y;
          }
        } else if (this.openingAnimation === "scaleInHeight") {
          const targetScale = this.originalScalePercent / 100;
          const currentScaleX = targetScale;
          const currentScaleY = targetScale * easedProgress;

          this.sprite.scale.x = this.flip ? -currentScaleX : currentScaleX;
          this.sprite.scale.y = this.flipY ? -currentScaleY : currentScaleY;

          if (this.bloomSprite) {
            this.bloomSprite.scale.x = this.sprite.scale.x;
            this.bloomSprite.scale.y = this.sprite.scale.y;
          }
        }

        if (progress >= 1.0) {
          this.isPlayingOpeningAnimation = false;
          if (this.openingAnimation === "fadeIn") {
            this.applyOpacity(this.originalOpacity);
          } else if (
            this.openingAnimation === "scaleIn" ||
            this.openingAnimation === "scaleInWidth" ||
            this.openingAnimation === "scaleInHeight"
          ) {
            this.applyScale(this.originalScalePercent);
          }
        }
      }

      // Ending animation
      if (
        !this.isPlayingEndingAnimation &&
        this.endingAnimation !== "none" &&
        this.loopCount !== Infinity
      ) {
        const totalFrames = this.frames.length;
        const currentFrame = this.playInReverse
          ? totalFrames - this.currentFrameIndex - 1
          : this.currentFrameIndex;
        const framesLeft = this.playInReverse
          ? currentFrame + 1
          : totalFrames - currentFrame;

        const framesPerSecond = 1000 / this.frameTime;
        const animationDurationInFrames = Math.ceil(
          this.animationDuration * (framesPerSecond / 60)
        );

        const isFirstLoop = this.completedLoops === 0;
        const isNearEnd = framesLeft <= animationDurationInFrames;

        if (isFirstLoop && isNearEnd) {
          this.isPlayingEndingAnimation = true;

          this.loopCount = 1;

          if (this.endingAnimation === "fadeOut") {
            this.applyFadeOut(this.animationDuration);
          } else if (this.endingAnimation === "scaleOut") {
            this.applyScaleOut(this.animationDuration);
          }
        }
      }

      // Fade out effect
      if (this.isFadingOut) {
        this.fadeOutElapsed += 1;
        const progress = this.fadeOutElapsed / this.fadeOutDuration;

        if (progress >= 1.0) {
          this.dispose();
          if (this.onCompletion) this.onCompletion();
          return;
        }

        const newOpacity = this.originalOpacity * (1 - progress);
        this.sprite.opacity = Math.round(newOpacity);

        if (this.bloomSprite) {
          this.bloomSprite.opacity = Math.round(newOpacity);
        }
      }

      // Scale out effect
      if (this.isScalingOut) {
        this.scaleOutElapsed += 1;
        const progress = this.scaleOutElapsed / this.scaleOutDuration;

        if (progress >= 1.0) {
          this.dispose();
          if (this.onCompletion) this.onCompletion();
          return;
        }

        // Easing to make the animation smoother
        const easedProgress = this.easeOutQuad(progress);
        const scaleFactor = 1 - easedProgress;

        // Scale
        const newScaleX = this.originalScaleX * scaleFactor;
        const newScaleY = this.originalScaleY * scaleFactor;
        this.sprite.scale.x =
          this.originalScaleX < 0 ? -Math.abs(newScaleX) : Math.abs(newScaleX);
        this.sprite.scale.y =
          this.originalScaleY < 0 ? -Math.abs(newScaleY) : Math.abs(newScaleY);

        if (this.bloomSprite) {
          this.bloomSprite.scale.x = this.sprite.scale.x;
          this.bloomSprite.scale.y = this.sprite.scale.y;
        }
      }

      this.elapsedTime += deltaTime;

      while (this.elapsedTime >= this.frameTime) {
        if (this.playInReverse) {
          this.currentFrameIndex--;
          if (this.currentFrameIndex < 0) {
            this.completedLoops++;
            if (
              this.loopCount !== Infinity &&
              this.completedLoops >= this.loopCount
            ) {
              this.dispose();
              if (this.onCompletion) this.onCompletion();
              return;
            }
            this.currentFrameIndex = this.frames.length - 1;
          }
        } else {
          this.currentFrameIndex++;
          if (this.currentFrameIndex >= this.frames.length) {
            this.completedLoops++;
            if (
              this.loopCount !== Infinity &&
              this.completedLoops >= this.loopCount
            ) {
              this.dispose();
              if (this.onCompletion) this.onCompletion();
              return;
            }
            this.currentFrameIndex = 0;
          }
        }
        this.elapsedTime -= this.frameTime;
        this.updateFrame();
      }

      if (this.shouldUpdatePosition()) {
        this.updatePosition();
      }
    }

    isValid() {
      if (!this.sprite || !this.sprite.parent || !this.checkTargetValidity()) {
        this.dispose();
        return false;
      }
      return true;
    }

    shouldUpdatePosition() {
      if (!this.lastKnownX || !this.lastKnownY) return true;
      const dx = this.target.screenX() - this.lastKnownX;
      const dy = this.target.screenY() - this.lastKnownY;
      return Math.abs(dx) > 1 || Math.abs(dy) > 1;
    }

    dispose() {
      if (this.sprite?.parent) {
        this.sprite.parent.removeChild(this.sprite);
        this.sprite.destroy();
      }

      if (this.bloomSprite?.parent) {
        this.bloomSprite.parent.removeChild(this.bloomSprite);
        this.bloomSprite.destroy();
      }

      if (this.hueFilter) {
        this.hueFilter.destroy();
        this.hueFilter = null;
      }

      if (this.bloomHueFilter) {
        this.bloomHueFilter.destroy();
        this.bloomHueFilter = null;
      }

      AnimatedPictureManager.removeAnimatedPicture(this);
    }
  }

  Spriteset_Map.prototype.findCharacterSprite = function (character) {
    return (
      this._characterSprites.find(
        (sprite) => sprite._character === character
      ) || null
    );
  };

  Scene_Map.prototype.addAnimatedPicture = function (animatedPicture) {
    const spritesetMap = this._spriteset;
    if (!spritesetMap) return;

    let container = spritesetMap._tilemap;
    if (!container) return;

    if (AnimatedPictureManager._batchingEnabled && animatedPicture.sprite) {
      const existingBatch =
        AnimatedPictureManager._findSimilarBatch(animatedPicture);
      if (existingBatch && existingBatch.length > 0) {
        const refSprite = existingBatch[0].sprite;
        const refIndex = container.children.indexOf(refSprite);

        if (refIndex >= 0) {
          animatedPicture.sprite.z = animatedPicture.zIndex;
          container.addChildAt(animatedPicture.sprite, refIndex + 1);

          if (animatedPicture.bloomEffect && animatedPicture.bloomSprite) {
            animatedPicture.bloomSprite.z = animatedPicture.zIndex + 1;
            container.addChildAt(animatedPicture.bloomSprite, refIndex + 2);
          }
          return;
        }
      }
    }

    if (animatedPicture.sprite) {
      animatedPicture.sprite.z = animatedPicture.zIndex;
      container.addChild(animatedPicture.sprite);
    }

    if (animatedPicture.bloomEffect && animatedPicture.bloomSprite) {
      animatedPicture.bloomSprite.z = animatedPicture.zIndex + 1;
      container.addChild(animatedPicture.bloomSprite);
    }
  };

  class AnimatedPictureManager {
    static _animationCountByEventId = new Map();
    static _animatedPicturesByEventId = new Map();
    static _animatedPictures = [];
    static _lastUpdateTime = 0;
    static _batchingEnabled = true;
    static _batchesByTexture = new Map();
    static _backupAnimations = [];
    static _batchUpdateCounter = 0;
    static _debugStats = {
      totalBatches: 0,
      totalAnimations: 0,
      batchSizes: {},
      batchByTexture: {},
      drawCallsSaved: 0,
      lastUpdateTime: 0,
      updateTimes: [],
    };

    static _collectDebugStats() {
      this._debugStats.totalBatches = 0;
      this._debugStats.totalAnimations = this._animatedPictures.length;
      this._debugStats.batchSizes = {};
      this._debugStats.batchByTexture = {};
      this._debugStats.drawCallsSaved = 0;
      for (const [batchKey, pictures] of this._batchesByTexture.entries()) {
        this._debugStats.totalBatches++;
        const size = pictures.length;
        this._debugStats.batchSizes[size] =
          (this._debugStats.batchSizes[size] || 0) + 1;
        const textureId = batchKey.split("_").slice(1).join("_");
        this._debugStats.batchByTexture[textureId] =
          (this._debugStats.batchByTexture[textureId] || 0) + size;
        if (size > 1) {
          this._debugStats.drawCallsSaved += size - 1;
        }
      }

      const currentTime = performance.now();
      if (this._debugStats.lastUpdateTime > 0) {
        const updateTime = currentTime - this._debugStats.lastUpdateTime;
        this._debugStats.updateTimes.push(updateTime);
        if (this._debugStats.updateTimes.length > 60) {
          this._debugStats.updateTimes.shift();
        }
      }
      this._debugStats.lastUpdateTime = currentTime;
    }

    static showDebugOverlay() {
      if (!this._debugOverlay) {
        this._debugOverlay = new PIXI.Container();
        this._debugText = new PIXI.Text("Batch Debug", {
          fontFamily: "Arial",
          fontSize: 14,
          fill: 0xffffff,
          stroke: 0x000000,
          strokeThickness: 4,
          align: "left",
        });
        this._debugOverlay.addChild(this._debugText);
        if (SceneManager._scene) {
          SceneManager._scene.addChild(this._debugOverlay);
        }
      }

      if (this._debugText) {
        const avgUpdateTime =
          this._debugStats.updateTimes.length > 0
            ? this._debugStats.updateTimes.reduce((a, b) => a + b, 0) /
            this._debugStats.updateTimes.length
            : 0;

        let batchSizesText = "";
        for (const [size, count] of Object.entries(
          this._debugStats.batchSizes
        ).sort((a, b) => a[0] - b[0])) {
          batchSizesText += `\n  Size ${size}: ${count} batches`;
        }

        this._debugText.text = `Batch Debug:
                Animations: ${this._debugStats.totalAnimations}
                Batches: ${this._debugStats.totalBatches}
                Draw Calls Saved: ${this._debugStats.drawCallsSaved}
                Update Time: ${avgUpdateTime.toFixed(2)}ms
                Batch Sizes: ${batchSizesText}`;
        this._debugText.x = Graphics.width - this._debugText.width - 10;
        this._debugText.y = 10;
      }
    }

    static toggleBatchVisualization() {
      this._visualizeBatches = !this._visualizeBatches;

      if (this._visualizeBatches) {
        this._highlightBatches();
      } else {
        this._removeBatchHighlights();
      }

      return this._visualizeBatches;
    }

    static _highlightBatches() {
      this._removeBatchHighlights();
      const colors = [
        0xff0000, 0x00ff00, 0x0000ff, 0xffff00, 0xff00ff, 0x00ffff,
      ];
      let colorIndex = 0;
      for (const [batchKey, pictures] of this._batchesByTexture.entries()) {
        if (pictures.length <= 1) continue;

        const batchColor = colors[colorIndex % colors.length];
        colorIndex++;

        for (const picture of pictures) {
          if (picture.sprite && picture.sprite.parent) {
            const highlight = new PIXI.Graphics();
            highlight.lineStyle(2, batchColor, 1);
            highlight.drawRect(
              -5,
              -5,
              picture.sprite.width + 10,
              picture.sprite.height + 10
            );
            highlight._isBatchHighlight = true;
            picture.sprite.parent.addChild(highlight);
            highlight.x = picture.sprite.x - picture.sprite.width / 2;
            highlight.y = picture.sprite.y - picture.sprite.height / 2;
          }
        }
      }
    }

    static _removeBatchHighlights() {
      if (
        !SceneManager._scene ||
        !SceneManager._scene._spriteset ||
        !SceneManager._scene._spriteset._tilemap
      ) {
        return;
      }
      const container = SceneManager._scene._spriteset._tilemap;
      for (let i = container.children.length - 1; i >= 0; i--) {
        const child = container.children[i];
        if (child && child._isBatchHighlight) {
          container.removeChild(child);
        }
      }
    }

    static registerDebugCommands() {
      if (Utils.isNwjs()) {
        window.showBatchStats = () => {
          console.log("===== Batch System Statistics =====");
          console.log(`Total Animations: ${this._debugStats.totalAnimations}`);
          console.log(`Total Batches: ${this._debugStats.totalBatches}`);
          console.log(`Draw Calls Saved: ${this._debugStats.drawCallsSaved}`);

          const efficiency =
            this._debugStats.totalAnimations > 0
              ? (
                (this._debugStats.drawCallsSaved /
                  this._debugStats.totalAnimations) *
                100
              ).toFixed(2)
              : 0;
          console.log(`Batching Efficiency: ${efficiency}%`);

          console.log("\nBatch Size Distribution:");
          for (const [size, count] of Object.entries(
            this._debugStats.batchSizes
          ).sort((a, b) => Number(a[0]) - Number(b[0]))) {
            console.log(`  Size ${size}: ${count} batches`);
          }

          console.log("\nUpdate Performance:");
          const avgUpdateTime =
            this._debugStats.updateTimes.length > 0
              ? this._debugStats.updateTimes.reduce((a, b) => a + b, 0) /
              this._debugStats.updateTimes.length
              : 0;
          console.log(`  Average Update Time: ${avgUpdateTime.toFixed(2)}ms`);

          return "Stats printed to console";
        };

        window.toggleBatchDebug = () => {
          this._showDebugOverlay = !this._showDebugOverlay;
          return `Batch debug overlay: ${this._showDebugOverlay ? "ON" : "OFF"
            }`;
        };

        window.toggleBatchVisualization = () => {
          const isOn = this.toggleBatchVisualization();
          return `Batch visualization: ${isOn ? "ON" : "OFF"}`;
        };
      }
    }
    static prepareBatches() {
      this._batchesByTexture.clear();
      const sortedPictures = [...this._animatedPictures].sort(
        (a, b) => a.zIndex - b.zIndex
      );
      let currentZ = null;
      let currentGroup = [];

      for (const picture of sortedPictures) {
        if (!picture.sprite || !picture.sprite.bitmap) continue;
        if (currentZ === null) {
          currentZ = picture.zIndex;
          currentGroup = [picture];
        } else if (picture.zIndex === currentZ) {
          currentGroup.push(picture);
        } else {
          this._createBatchesForGroup(currentGroup);
          currentZ = picture.zIndex;
          currentGroup = [picture];
        }
      }
      if (currentGroup.length > 0) {
        this._createBatchesForGroup(currentGroup);
      }
    }

    static _createBatchesForGroup(pictureGroup) {
      const textureGroups = new Map();

      for (const picture of pictureGroup) {
        if (!picture.sprite || !picture.sprite.bitmap) continue;
        const textureId =
          picture.sprite.bitmap._url || picture.sprite.bitmap._baseTexture.uid;
        const blendMode = picture.sprite.blendMode;
        const key = `${textureId}_${blendMode}`;
        if (!textureGroups.has(key)) {
          textureGroups.set(key, []);
        }
        textureGroups.get(key).push(picture);
      }

      for (const [textureKey, pictures] of textureGroups.entries()) {
        if (pictures.length <= 1) continue;
        const z = pictures[0].zIndex;
        const batchKey = `${z}_${textureKey}`;
        this._batchesByTexture.set(batchKey, pictures);
      }
    }

    static optimizeRendering() {
      if (!this._batchingEnabled) return;
      const startTime = performance.now();
      if (this._batchUpdateCounter++ % 10 === 0) {
        this.prepareBatches();
      }
      const scene = SceneManager._scene;
      if (!scene || !scene._spriteset || !scene._spriteset._tilemap) return;
      const container = scene._spriteset._tilemap;
      this._forceZSort(container);
      for (const [batchKey, pictures] of this._batchesByTexture.entries()) {
        if (pictures.length <= 1) continue;
        const z = parseInt(batchKey.split("_")[0]);
        this._optimizeBatchSafely(pictures, z, container);
      }

      //this._collectDebugStats();
      //if (this._showDebugOverlay) {
      //    this.showDebugOverlay();
      //}
      //this.toggleBatchVisualization();
      //const endTime = performance.now();
      //this._debugStats.lastUpdateDuration = endTime - startTime;
    }

    static initDebugSystem() {
      this._showDebugOverlay = false;
      this._visualizeBatches = false;
      this.registerDebugCommands();
    }

    static _forceZSort(container) {
      if (!container || !container.children || !container.children.length)
        return;
      const indexedChildren = container.children.map((child, index) => ({
        sprite: child,
        z: child ? child.z || 0 : 0,
        originalIndex: index,
      }));
      indexedChildren.sort((a, b) => a.z - b.z);
      container.children = indexedChildren.map((item) => item.sprite);
      container._needsSorting = false;
    }

    static _optimizeBatchSafely(pictures, zIndex, container) {
      const zLayerSprites = [];
      const zLayerIndices = [];

      for (let i = 0; i < container.children.length; i++) {
        const sprite = container.children[i];
        if (sprite && (sprite.z || 0) === zIndex) {
          zLayerSprites.push(sprite);
          zLayerIndices.push(i);
        }
      }

      if (zLayerSprites.length <= 1) return;
      const batchSprites = pictures
        .map((p) => p.sprite)
        .filter((s) => zLayerSprites.includes(s));
      if (batchSprites.length <= 1) return;
      const zLayerMap = new Map();
      zLayerSprites.forEach((sprite, idx) => {
        zLayerMap.set(sprite, zLayerIndices[idx]);
      });
      const firstBatchSpriteIndex = Math.min(
        ...batchSprites.map((s) => zLayerSprites.indexOf(s))
      );
      if (firstBatchSpriteIndex >= 0) {
        let insertIndex = firstBatchSpriteIndex;

        for (const batchSprite of batchSprites) {
          const currentIndex = zLayerSprites.indexOf(batchSprite);
          if (currentIndex !== insertIndex && currentIndex > -1) {
            zLayerSprites.splice(currentIndex, 1);
            zLayerSprites.splice(insertIndex, 0, batchSprite);
            const containerIndex = zLayerMap.get(batchSprite);
            const targetIndex = zLayerIndices[insertIndex];
            if (containerIndex !== targetIndex) {
              const tempSprite = container.children[targetIndex];
              container.children[targetIndex] = batchSprite;
              container.children[containerIndex] = tempSprite;
              zLayerMap.set(tempSprite, containerIndex);
              zLayerMap.set(batchSprite, targetIndex);
            }
          }
          insertIndex++;
        }
      }
    }

    static _findSimilarBatch(picture) {
      if (!picture.sprite || !picture.sprite.bitmap) return null;
      const textureId =
        picture.sprite.bitmap._url || picture.sprite.bitmap._baseTexture.uid;
      const blendMode = picture.sprite.blendMode;
      const z = picture.zIndex;
      const batchKey = `${z}_${textureId}_${blendMode}`;
      return this._batchesByTexture.get(batchKey);
    }

    static showAnimatedPicture(
      eventId,
      frames,
      fps,
      target,
      loopCount,
      offsetX,
      offsetY,
      sfxSettings,
      scalePercent,
      opacity,
      flip,
      flipY,
      randomFlipX,
      randomFlipY,
      rotation,
      blendMode,
      zIndex,
      bloomEffect,
      blurAmount,
      tintColor,
      intensity,
      hue,
      stickmode,
      note,
      playInReverse = false
    ) {
      const origin = "center";

      const alwaysPlaySFX =
        PluginManager.parameters(pluginName)["alwaysPlaySFX"] === "true";
      loopCount = Math.max(1, loopCount);
      let animationCount = this._animationCountByEventId.get(eventId) || 0;

      if (alwaysPlaySFX) {
        sfxSettings.forEach((sfx) => {
          AudioManager.playSe({
            name: sfx.sfxFile,
            volume: sfx.volume,
            pitch: sfx.pitch,
          });
        });
      }

      const animatedPicture = new AnimatedPicture(
        frames,
        fps,
        target,
        loopCount,
        offsetX,
        offsetY,
        sfxSettings,
        scalePercent,
        opacity,
        flip,
        flipY,
        randomFlipX,
        randomFlipY,
        rotation,
        blendMode,
        zIndex,
        bloomEffect,
        blurAmount,
        tintColor,
        intensity,
        hue,
        stickmode,
        () => this.decrementAnimationCount(eventId),
        null,
        note,
        playInReverse,
        origin
      );

      if (!animatedPicture.checkTargetValidity()) {
        animatedPicture.dispose();
        return;
      }

      if (SceneManager._scene instanceof Scene_Map) {
        SceneManager._scene.addAnimatedPicture(animatedPicture);
      }

      this.addAnimatedPicture(animatedPicture);
      this._animationCountByEventId.set(eventId, animationCount + 1);
      this._animatedPicturesByEventId.set(eventId, animatedPicture);
    }

    static createSpritesheetFrames(bitmap, rows, columns) {
      const frameWidth = Math.floor(bitmap.width / columns);
      const frameHeight = Math.floor(bitmap.height / rows);
      const frames = [];

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
          const x = col * frameWidth;
          const y = row * frameHeight;
          frames.push({ x, y, width: frameWidth, height: frameHeight });
        }
      }
      return frames;
    }

    static decrementAnimationCount(eventId) {
      let animationCount = this._animationCountByEventId.get(eventId) || 0;
      if (animationCount > 0) {
        this._animationCountByEventId.set(eventId, animationCount - 1);
      }
    }

    static addAnimatedPicture(animatedPicture) {
      this._animatedPictures.push(animatedPicture);
      const scene = SceneManager._scene;
      if (scene instanceof Scene_Map) {
        scene.addAnimatedPicture(animatedPicture);
        scene._spriteset._needsSorting = true;
      }
    }

    static removeAnimatedPicture(animatedPicture) {
      const index = this._animatedPictures.indexOf(animatedPicture);
      if (index !== -1) {
        this._animatedPictures[index] =
          this._animatedPictures[this._animatedPictures.length - 1];
        this._animatedPictures.pop();
        const scene = SceneManager._scene;
        if (scene instanceof Scene_Map) {
          scene._spriteset._needsSorting = true;
        }
      }
      if (sharedBloomFilter && this._animatedPictures.length === 0) {
        sharedBloomFilter.destroy();
        sharedBloomFilter = null;
      }
    }

    static removeAllAnimatedPictures() {
      this._animatedPictures.forEach((picture) => picture.dispose());
      this._animatedPictures = [];
      this._animationCountByEventId.clear();
      this._animatedPicturesByEventId.clear();
      bloomFilterUsers = 0;
      if (sharedBloomFilter) {
        sharedBloomFilter.destroy();
        sharedBloomFilter = null;
      }
    }

    static update(currentTime) {
      if (this._lastUpdateTime === 0) {
        this._lastUpdateTime = currentTime;
        return;
      }

      const deltaTime = currentTime - this._lastUpdateTime;
      this._lastUpdateTime = currentTime;
      this.optimizeRendering();

      for (const animatedPicture of this._animatedPictures) {
        animatedPicture.update(deltaTime);
      }
    }
  }

  const _sScene_Map_updateH = Scene_Map.prototype.update;
  Scene_Map.prototype.update = function () {
    AnimatedPictureManager.update(performance.now());
    _sScene_Map_updateH.call(this);
  };

  const _TouchInput_onMouseDown_AnimEditor = TouchInput._onMouseDown;
  TouchInput._onMouseDown = function (event) {
    if (SceneManager._scene instanceof Scene_Map && editorPreviewMode) {
      const x = Graphics.pageToCanvasX(event.pageX);
      const y = Graphics.pageToCanvasY(event.pageY);
      handleCharacterClick(x, y);
      return;
    }

    _TouchInput_onMouseDown_AnimEditor.call(this, event);
  };

  const _Scene_Map_terminate = Scene_Map.prototype.terminate;
  Scene_Map.prototype.terminate = function () {
    const nextScene = SceneManager._nextScene;
    const isGoingToMenu = nextScene && nextScene instanceof Scene_MenuBase;

    if (isGoingToMenu) {
      AnimatedPictureManager._backupAnimations =
        AnimatedPictureManager._animatedPictures.map((pic) => {
          return {
            frames: pic.frames,
            fps: pic.fps,
            target: pic.target,
            loopCount: pic.loopCount,
            offsetX: pic.offsetX,
            offsetY: pic.offsetY,
            sfxSettings: pic.sfxSettings,
            bitmap: pic.bitmap,
            stickMode: pic.stickMode,
            note: pic.note,
            playInReverse: pic.playInReverse,
            flip: pic.flip,
            flipY: pic.flipY,
            rotation: pic.rotation,
            zIndex: pic.zIndex,
            _z: pic._z,
            bloomEffect: pic.bloomEffect,
            blurAmount: pic.blurAmount,
            tintColor: pic.tintColor,
            intensity: pic.intensity,
            hue: pic.hue,
            spriteOpacity: pic.sprite.opacity,
            spriteScaleX: pic.sprite.scale.x,
            spriteScaleY: pic.sprite.scale.y,
            spriteBlendMode: pic.sprite.blendMode,
            spriteAnchorX: pic.sprite.anchor.x,
            spriteAnchorY: pic.sprite.anchor.y,
            currentFrameIndex: pic.currentFrameIndex,
            elapsedTime: pic.elapsedTime,
            completedLoops: pic.completedLoops,
            frameTime: pic.frameTime,
            lastKnownX: pic.lastKnownX,
            lastKnownY: pic.lastKnownY,
            initialSpriteWidth: pic.initialSpriteWidth,
            initialSpriteHeight: pic.initialSpriteHeight,
            openingAnimation: pic.openingAnimation,
            endingAnimation: pic.endingAnimation,
            animationDuration: pic.animationDuration,
            isPlayingOpeningAnimation: pic.isPlayingOpeningAnimation,
            openingElapsed: pic.openingElapsed,
            originalOpacity: pic.originalOpacity,
            originalScalePercent: pic.originalScalePercent,
            isPlayingEndingAnimation: pic.isPlayingEndingAnimation,
            isFadingOut: pic.isFadingOut,
            fadeOutDuration: pic.fadeOutDuration,
            fadeOutElapsed: pic.fadeOutElapsed,
            isScalingOut: pic.isScalingOut,
            scaleOutDuration: pic.scaleOutDuration,
            scaleOutElapsed: pic.scaleOutElapsed,
            originalScaleX: pic.originalScaleX,
            originalScaleY: pic.originalScaleY,
            _lastCharacterName: pic._lastCharacterName,
            _lastCharacterIndex: pic._lastCharacterIndex,
          };
        });
    } else {
      AnimatedPictureManager.removeAllAnimatedPictures();
    }

    _Scene_Map_terminate.call(this);
  };

  const _Scene_Map_createDisplayObjects =
    Scene_Map.prototype.createDisplayObjects;
  Scene_Map.prototype.createDisplayObjects = function () {
    if (
      AnimatedPictureManager._backupAnimations &&
      AnimatedPictureManager._backupAnimations.length > 0
    ) {
      const backups = AnimatedPictureManager._backupAnimations;
      AnimatedPictureManager._backupAnimations = [];

      _Scene_Map_createDisplayObjects.call(this);

      for (const backup of backups) {
        if (
          !backup.target ||
          (backup.target !== $gamePlayer &&
            !$gameMap.event(backup.target._eventId))
        ) {
          continue;
        }

        const animatedPicture = new AnimatedPicture(
          backup.frames,
          backup.fps,
          backup.target,
          backup.loopCount,
          backup.offsetX,
          backup.offsetY,
          backup.sfxSettings,
          Math.abs(backup.spriteScaleX) * 100,
          backup.spriteOpacity,
          backup.flip,
          backup.flipY,
          false,
          false,
          backup.rotation * (180 / Math.PI),
          backup.spriteBlendMode,
          backup.zIndex,
          backup.bloomEffect,
          backup.blurAmount,
          backup.tintColor,
          backup.intensity,
          backup.hue,
          () =>
            AnimatedPictureManager.decrementAnimationCount(
              backup.target === $gamePlayer ? "player" : backup.target._eventId
            ),
          backup.bitmap,
          backup.stickMode,
          backup.note,
          backup.playInReverse,
          backup.spriteAnchorY === 0
            ? "top"
            : backup.spriteAnchorY === 1
              ? "bottom"
              : "center",
          "none",
          30,
          "none"
        );

        animatedPicture.currentFrameIndex = backup.currentFrameIndex;
        animatedPicture.elapsedTime = backup.elapsedTime;
        animatedPicture.completedLoops = backup.completedLoops;
        animatedPicture.frameTime = backup.frameTime;
        animatedPicture.lastKnownX = backup.lastKnownX;
        animatedPicture.lastKnownY = backup.lastKnownY;
        animatedPicture.initialSpriteWidth = backup.initialSpriteWidth;
        animatedPicture.initialSpriteHeight = backup.initialSpriteHeight;
        animatedPicture._z = backup._z;
        animatedPicture.openingAnimation = backup.openingAnimation;
        animatedPicture.endingAnimation = backup.endingAnimation;
        animatedPicture.animationDuration = backup.animationDuration;
        animatedPicture.isPlayingOpeningAnimation =
          backup.isPlayingOpeningAnimation;
        animatedPicture.openingElapsed = backup.openingElapsed;
        animatedPicture.originalOpacity = backup.originalOpacity;
        animatedPicture.originalScalePercent = backup.originalScalePercent;
        animatedPicture.isPlayingEndingAnimation =
          backup.isPlayingEndingAnimation;
        animatedPicture.isFadingOut = backup.isFadingOut;
        animatedPicture.fadeOutDuration = backup.fadeOutDuration;
        animatedPicture.fadeOutElapsed = backup.fadeOutElapsed;
        animatedPicture.isScalingOut = backup.isScalingOut;
        animatedPicture.scaleOutDuration = backup.scaleOutDuration;
        animatedPicture.scaleOutElapsed = backup.scaleOutElapsed;
        animatedPicture.originalScaleX = backup.originalScaleX;
        animatedPicture.originalScaleY = backup.originalScaleY;
        animatedPicture._lastCharacterName = backup._lastCharacterName;
        animatedPicture._lastCharacterIndex = backup._lastCharacterIndex;

        animatedPicture.updateFrame();
        this.addAnimatedPicture(animatedPicture);
        AnimatedPictureManager.addAnimatedPicture(animatedPicture);
      }
    } else {
      _Scene_Map_createDisplayObjects.call(this);
    }
  };

  window.AnimatedPictureManager = AnimatedPictureManager;

  // ================================================================
  // EVENT/PLAYER ACTION SYSTEM
  // ================================================================

  Game_Character.prototype.toFrame = function (pattern) {
    togglePatternReset.call(this, true);
    this._originalPattern = this._pattern = pattern - 1;
    this._patternUpdated = true;
    this._stepAnime = false;
  };

  Game_Character.prototype.playFrames = function (start, end, wait, offsetX = 0, offsetY = 0) {
    this._isPlayingFrames = true;
    this._frameWait = wait;
    this._frameCount = 0;
    this._endFrame = end - 1;
    this._startFrame = start - 1;
    this._isReverse = start > end;
    this._playFramesOffsetX = offsetX;
    this._playFramesOffsetY = offsetY;
    this.toFrame(start);
  };

  window.togglePatternReset = function (disable, eventId = null) {
    const char = eventId ? $gameMap.event(eventId) : $gamePlayer;
    char._disablePatternReset = disable;
    if (!disable) char._patternUpdated = false;
  };

  const _GameBase_initMembers = Game_CharacterBase.prototype.initMembers;
  Game_CharacterBase.prototype.initMembers = function () {
    _GameBase_initMembers.call(this);
    this._frames = 3;
    this._columnIndex = 1;
    this._hxSig = 0x5348;
    this._frameSpeed = 0;
    this._lastRealX = this._realX;
    this._lastRealY = this._realY;
    this._isMoving = false;
    this._isIdleAnimating = false;
    this._idleAnimCounter = 0;
    this._autoGraphicsEnabled = false;
    this._currentAutoCharacter = null;
    this._graphicsDetected = false;
    this._detectedIdleGraphic = null;
    this._detectedWalkGraphic = null;
    this._detectedRunGraphic = null;
    this._isSingleRowSprite = false;
    this._spriteFlipped = false;
    this._playFramesOffsetX = 0;
    this._playFramesOffsetY = 0;
  };

  const Anim_Sprite_Character_updatePosition = Sprite_Character.prototype.updatePosition;
  Sprite_Character.prototype.updatePosition = function () {
    Anim_Sprite_Character_updatePosition.call(this);

    if (this._character && this._character._isPlayingFrames) {
      this.x += this._character._playFramesOffsetX || 0;
      this.y += this._character._playFramesOffsetY || 0;
    }
  };

  const alias_Game_CharacterBase_update = Game_CharacterBase.prototype.update;
  Game_CharacterBase.prototype.update = function () {
    alias_Game_CharacterBase_update.call(this);
    this.updateMovingState();
    const isFeatureEnabled =
      enableSwitch === 0 || $gameSwitches.value(enableSwitch);

    if (isFeatureEnabled && this._autoGraphicsEnabled) {
      this.updateGraphics();
    }

    if (this._isIdleAnimating && !this._isMoving && !this._moveRouteForcing) {
      const waitTime = this.animationWait();

      this._idleAnimCounter++;
      if (this._idleAnimCounter >= waitTime) {
        this._idleAnimCounter = 0;

        if (this._characterName === this._detectedIdleGraphic) {
          const frameMatch =
            this._characterName.match(new RegExp(`${frameKeyword}(\\d+)$`)) ||
            this._characterName.match(
              new RegExp(`${frameKeyword}\\((\\d+)\\)$`)
            );

          if (frameMatch) {
            const totalFrames = Number(frameMatch[1]);
            this._pattern = (this._pattern + 1) % totalFrames;
          } else {
            this._pattern = (this._pattern + 1) % 3;
          }

          this._patternUpdated = true;
        }
      }
    }
  };

  Game_CharacterBase.prototype.updateMovingState = function () {
    let diffX = this._realX - this._lastRealX;
    let diffY = this._realY - this._lastRealY;

    if (this._animPlatShiftX || this._animPlatShiftY) {
      diffX -= this._animPlatShiftX || 0;
      diffY -= this._animPlatShiftY || 0;
      this._animPlatShiftX = 0;
      this._animPlatShiftY = 0;
    }

    if (Math.abs(diffX) > 0.001 || Math.abs(diffY) > 0.001) {
      this._isMoving = true;
    } else {
      this._isMoving = false;
    }

    this._lastRealX = this._realX;
    this._lastRealY = this._realY;
  };

  Game_CharacterBase.prototype.detectIdleAndMovingGraphics = function () {
    const charName = this._characterName;
    if (!charName) return false;

    this._detectedIdleGraphic = null;
    this._detectedWalkGraphic = null;
    this._detectedRunGraphic = null;
    this._idleHasFx = false;
    this._walkHasFx = false;
    this._runHasFx = false;

    const folderPath = charName.includes("/")
      ? charName.substring(0, charName.lastIndexOf("/") + 1)
      : "";
    const nameWithoutPath = charName.split("/").pop();
    let baseName = nameWithoutPath;

    const fxRegex = new RegExp(
      `${frameKeyword}(\\d+)$|${frameKeyword}\\((\\d+)\\)$`
    );
    baseName = baseName.replace(fxRegex, "");

    let has8dir = baseName.includes("8dir");
    if (has8dir) {
      baseName = baseName.replace("8dir", "");
    }

    const keywordsToRemove = [IDLE_KEYWORD, WALK_KEYWORD, RUN_KEYWORD].filter(
      Boolean
    );
    keywordsToRemove.forEach((keyword) => {
      if (keyword && baseName.includes(keyword)) {
        baseName = baseName.replace(new RegExp(`_?${keyword}`), "");
      }
    });
    baseName = baseName.replace(/_+/g, "_").replace(/^_|_$/g, "");

    const generatePotentialFilenames = function (baseCharName, keyword) {
      if (!keyword) return [];
      let subfolder = "";
      if (folderPath && folderPath.includes("/")) {
        subfolder = folderPath.replace(/\/$/, "");
      }
      const fullBaseName = subfolder
        ? `${subfolder}/${baseCharName}`
        : baseCharName;

      const patterns = [
        `${fullBaseName}_${keyword}_${frameKeyword}`,
        `${fullBaseName}_${keyword}`,
        `${keyword}_${fullBaseName}_${frameKeyword}`,
        `${keyword}_${fullBaseName}`,
      ];

      if (subfolder) {
        patterns.push(
          `${baseCharName}_${keyword}_${frameKeyword}`,
          `${baseCharName}_${keyword}`,
          `${keyword}_${baseCharName}_${frameKeyword}`,
          `${keyword}_${baseCharName}`
        );
      }

      return patterns;
    };

    const findFile = async function (potentialFilenames) {
      // Search cache
      for (const url in PermanentImageCache._permanentCache) {
        if (url.includes("/img/characters/")) {
          const urlParts = url.split("/");
          const filename = urlParts[urlParts.length - 1].replace(".png", "");

          for (const pattern of potentialFilenames) {
            if (filename.includes(pattern)) {
              const hasFx = filename.match(fxRegex) !== null;
              return { filename, hasFx };
            }
          }
        }
      }

      // Desktop
      if (Utils.isNwjs()) {
        try {
          const fs = require("fs");
          const path = require("path");
          const baseDir = path.join(
            path.dirname(process.mainModule.filename),
            "img/characters"
          );
          let filesToCheck = [];

          if (folderPath) {
            const folderDir = path.join(baseDir, folderPath);
            if (fs.existsSync(folderDir)) {
              filesToCheck = fs
                .readdirSync(folderDir)
                .filter((file) => {
                  const ext = Utils.hasEncryptedImages() ? ".png_" : ".png";
                  return file.endsWith(ext);
                })
                .map((file) => {
                  const extLength = Utils.hasEncryptedImages() ? 5 : 4;
                  return folderPath + file.slice(0, -extLength);
                });
            }
          } else {
            filesToCheck = fs
              .readdirSync(baseDir)
              .filter((file) => {
                const ext = Utils.hasEncryptedImages() ? ".png_" : ".png";
                return file.endsWith(ext);
              })
              .map((file) => {
                const extLength = Utils.hasEncryptedImages() ? 5 : 4;
                return file.slice(0, -extLength);
              });
          }

          for (const file of filesToCheck) {
            for (const pattern of potentialFilenames) {
              if (file.includes(pattern)) {
                const hasFx = file.match(fxRegex) !== null;
                return { filename: file, hasFx };
              }
            }
          }
        } catch (error) {
          console.error("Error checking filesystem:", error);
        }
      } else {
        // Non-desktop environment, check manifest.json
        try {
          const manifestResponse = await fetch("manifest.json");
          if (manifestResponse.ok) {
            const manifest = await manifestResponse.json();
            let allCharacterFiles = [];
            if (manifest["img/characters"]) {
              allCharacterFiles = allCharacterFiles.concat(
                manifest["img/characters"].map((file) => file)
              );
            }
            for (const key in manifest) {
              if (key.startsWith("img/characters/")) {
                const subfolder = key.substring("img/characters/".length);
                allCharacterFiles = allCharacterFiles.concat(
                  manifest[key].map((file) => `${subfolder}/${file}`)
                );
              }
            }

            if (allCharacterFiles.length > 0) {
              for (const rawFile of allCharacterFiles) {
                const normalizedFile = rawFile.replace(/\\/g, "/");
                for (const pattern of potentialFilenames) {
                  if (normalizedFile.includes(pattern)) {
                    const hasFx = normalizedFile.match(fxRegex) !== null;
                    return { filename: normalizedFile, hasFx };
                  }
                }
              }
            }
          } else {
            console.warn("Failed to load manifest.json");
          }
        } catch (error) {
          console.error("Error checking manifest:", error);
        }
      }

      return null;
    };

    const detectGraphic = async function (keyword) {
      if (!keyword) return null;
      const potentialFilenames = generatePotentialFilenames(baseName, keyword);
      return await findFile(potentialFilenames);
    };

    const detectGraphicsAsync = async () => {
      if (IDLE_KEYWORD) {
        const idleResult = await detectGraphic(IDLE_KEYWORD);
        if (idleResult) {
          this._detectedIdleGraphic = idleResult.filename;
          this._idleHasFx = idleResult.hasFx;
        }
      }

      if (WALK_KEYWORD) {
        const walkResult = await detectGraphic(WALK_KEYWORD);
        if (walkResult) {
          this._detectedWalkGraphic = walkResult.filename;
          this._walkHasFx = walkResult.hasFx;
        }
      }

      if (RUN_KEYWORD) {
        const runResult = await detectGraphic(RUN_KEYWORD);
        if (runResult) {
          this._detectedRunGraphic = runResult.filename;
          this._runHasFx = runResult.hasFx;
        }
      }

      if (!this._detectedIdleGraphic && IDLE_KEYWORD) {
        this._detectedIdleGraphic = charName;
        this._idleHasFx = charName.match(fxRegex) !== null;
      }

      if (!this._detectedWalkGraphic && WALK_KEYWORD) {
        this._detectedWalkGraphic = charName;
        this._walkHasFx = charName.match(fxRegex) !== null;
      }

      if (!this._detectedRunGraphic && RUN_KEYWORD) {
        this._detectedRunGraphic = charName;
        this._runHasFx = charName.match(fxRegex) !== null;
      }

      this._graphicsDetected = true;
      return true;
    };

    detectGraphicsAsync();
    return true;
  };

  Game_CharacterBase.prototype.updateGraphics = function () {
    const currentName = this._characterName;
    const isAutoGraphic =
      (IDLE_KEYWORD && currentName.includes(IDLE_KEYWORD)) ||
      (WALK_KEYWORD && currentName.includes(WALK_KEYWORD)) ||
      (RUN_KEYWORD && currentName.includes(RUN_KEYWORD));

    if (!isAutoGraphic) {
      this._autoGraphicsEnabled = false;
      return;
    }

    if (!this._graphicsDetected) {
      this._graphicsDetected = this.detectIdleAndMovingGraphics();
      return;
    }

    let isRunning = false;
    if (this.isDashing && this.isDashing()) {
      isRunning = true;
    } else if (this instanceof Game_Follower && $gamePlayer.isDashing()) {
      isRunning = true;
    } else if (this instanceof Game_Event && this.moveSpeed() >= 5) {
      isRunning = true;
    }

    if (this._isMoving) {
      this._isIdleAnimating = false;
      if (isRunning && RUN_KEYWORD && this._detectedRunGraphic) {
        if (currentName !== this._detectedRunGraphic) {
          this.setImage(this._detectedRunGraphic, 0);
        }
      } else if (WALK_KEYWORD && this._detectedWalkGraphic) {
        if (currentName !== this._detectedWalkGraphic) {
          this.setImage(this._detectedWalkGraphic, 0);
        }
      }
      this._stepAnime = false;
    } else {
      if (IDLE_KEYWORD && this._detectedIdleGraphic) {
        if (currentName !== this._detectedIdleGraphic) {
          this.setImage(this._detectedIdleGraphic, 0);
        }
        this._isIdleAnimating = true;
        this._stepAnime = false;
      }
    }
  };

  Game_CharacterBase.prototype.pattern = function () {
    const hasFx =
      this._characterName.match(new RegExp(`${frameKeyword}\\d+$`)) ||
      this._characterName.match(new RegExp(`${frameKeyword}\\((\\d+)\\)$`));
    if (!hasFx) {
      return this._pattern;
    }
    return this._pattern < this._frames ? this._pattern : this._columnIndex;
  };

  Game_CharacterBase.prototype.updatePattern = function () {
    const hasFx =
      this._characterName.match(new RegExp(`${frameKeyword}\\d+$`)) ||
      this._characterName.match(new RegExp(`${frameKeyword}\\((\\d+)\\)$`));

    if (
      this === $gamePlayer &&
      this._autoGraphicsEnabled &&
      this._moveRouteForcing
    ) {
      this._patternUpdated = false;

      if (hasFx || this._isSingleRowSprite) {
        this._pattern =
          (this._pattern + 1) % (this._frames + this._columnIndex);
        return;
      }
    }

    if (this._patternUpdated) {
      return;
    }

    if (!this.hasStepAnime() && this._stopCount > 0) {
      this.resetPattern();
    } else {
      if (hasFx || this._isSingleRowSprite) {
        this._pattern =
          (this._pattern + 1) % (this._frames + this._columnIndex);
      } else {
        // Standard files, use RPG Maker pendulum pattern (0-1-2-1-0...)
        if (!this._animationDirection) {
          this._animationDirection = 1; // 1 = forward, -1 = backward
        }
        this._pattern += this._animationDirection;
        if (this._pattern >= 2) {
          this._pattern = 2;
          this._animationDirection = -1;
        } else if (this._pattern <= 0) {
          this._pattern = 0;
          this._animationDirection = 1;
        }
      }
    }
  };

  const SH_resetPattern = Game_CharacterBase.prototype.resetPattern;
  Game_CharacterBase.prototype.resetPattern = function () {
    if (this._isBigCharacter) {
      if (!this._disablePatternReset) this._pattern = this._originalPattern;
    } else {
      SH_resetPattern.call(this);
    }
  };

  // Make events when setup start with first frame if has fx
  const SH_Game_Event_setupPageSettings = Game_Event.prototype.setupPageSettings;
  Game_Event.prototype.setupPageSettings = function () {
    SH_Game_Event_setupPageSettings.call(this);

    this._customIdleSpeed = null;
    this._customWalkSpeed = null;
    this._customRunSpeed = null;

    if (this.page() && this.list()) {
      let comments = '';
      for (const command of this.list()) {
        if (command.code === 108 || command.code === 408) {
          comments += command.parameters[0] + '\n';
        }
      }

      const idleMatch = comments.match(/<frame idle speed:\s*(\d+)>/i);
      if (idleMatch) {
        this._customIdleSpeed = Number(idleMatch[1]);
      }

      const walkMatch = comments.match(/<frame walk speed:\s*(\d+)>/i);
      if (walkMatch) {
        this._customWalkSpeed = Number(walkMatch[1]);
      }

      const runMatch = comments.match(/<frame run speed:\s*(\d+)>/i);
      if (runMatch) {
        this._customRunSpeed = Number(runMatch[1]);
      }
    }

    const characterName = this.characterName();
    if (
      characterName &&
      (characterName.match(new RegExp(`${frameKeyword}\\d+$`)) ||
        characterName.match(new RegExp(`${frameKeyword}\\((\\d+)\\)$`)))
    ) {
      this._pattern = 0;
      this._originalPattern = 0;
    }
  };

  // Adjust the Change Image command from Set Movement Route to set pattern to 0
  // only if the filename has f<x>
  const SH_Game_CharacterBase_setImage = Game_CharacterBase.prototype.setImage;
  Game_CharacterBase.prototype.setImage = function (
    characterName,
    characterIndex
  ) {
    // Claer 8 dir cache
    if (this._characterName !== characterName) {
      spriteTypeCache.delete(this._characterName);
    }
    SH_Game_CharacterBase_setImage.call(this, characterName, characterIndex);

    if (
      characterName.match(new RegExp(`${frameKeyword}\\d+$`)) ||
      characterName.match(new RegExp(`${frameKeyword}\\((\\d+)\\)$`))
    ) {
      if (this instanceof Game_Event) {
        this._patternUpdated = false;
        this._disablePatternReset = false;
      }
      // For fx characters, set pattern to 0
      this._pattern = 0;
      this._originalPattern = 0;
    } else {
      // For normal characters, reset everything (normal rpg maker behavior)
      this._patternUpdated = false;
      this._disablePatternReset = false;
      this._pattern = 1;
      this._originalPattern = 1;
    }

    const isAutoGraphic =
      (IDLE_KEYWORD && characterName.includes(IDLE_KEYWORD)) ||
      (WALK_KEYWORD && characterName.includes(WALK_KEYWORD)) ||
      (RUN_KEYWORD && characterName.includes(RUN_KEYWORD));

    if (isAutoGraphic) {
      this._autoGraphicsEnabled = true;
      this._patternUpdated = false;
      this._disablePatternReset = false;
      const keywordPattern = new RegExp(
        [
          IDLE_KEYWORD && IDLE_KEYWORD.length > 0 ? IDLE_KEYWORD : null,
          WALK_KEYWORD && WALK_KEYWORD.length > 0 ? WALK_KEYWORD : null,
          RUN_KEYWORD && RUN_KEYWORD.length > 0 ? RUN_KEYWORD : null,
        ]
          .filter(Boolean)
          .join("|"),
        "g"
      );
      if (
        !this._currentAutoCharacter ||
        this._currentAutoCharacter !== characterName.replace(keywordPattern, "")
      ) {
        this._graphicsDetected = false;
        this._detectedIdleGraphic = null;
        this._detectedWalkGraphic = null;
        this._detectedRunGraphic = null;
        this._currentAutoCharacter = characterName.replace(keywordPattern, "");
      }
    } else {
      this._autoGraphicsEnabled = false;
      this._currentAutoCharacter = null;
    }
  };
  //__________________________________________________________________________

  const SH_Game_update = Game_Character.prototype.update;
  Game_Character.prototype.update = function () {
    SH_Game_update.call(this);
    if (this._isPlayingFrames && ++this._frameCount >= this._frameWait) {
      this._frameCount = 0;

      if (this._isReverse) {
        // Reverse playback (counting down)
        if (this._pattern >= this._endFrame) {
          if (this._pattern === this._endFrame) {
            this._isPlayingFrames = false;
            togglePatternReset.call(this, true);
          } else {
            this.toFrame(this._pattern);
          }
        }
      } else {
        // Forward playback (counting up)
        if (this._pattern <= this._endFrame) {
          if (this._pattern === this._endFrame) {
            this._isPlayingFrames = false;
            togglePatternReset.call(this, true);
          } else {
            this.toFrame(this._pattern + 2);
          }
        }
      }
    }
  };

  const SH_Game_updateRoutineMove = Game_Character.prototype.updateRoutineMove;
  Game_Character.prototype.updateRoutineMove = function () {
    return this._isPlayingFrames ? false : SH_Game_updateRoutineMove.call(this);
  };

  function getPlayerFrameSpeed(character, animationType) {
    if (character !== $gamePlayer) {
      return null;
    }

    switch (animationType) {
      case "idle":
        return PLAYER_IDLE_SPEED;
      case "walk":
        return PLAYER_WALK_SPEED;
      case "run":
        return PLAYER_RUN_SPEED;
      default:
        return null;
    }
  }

  // Animation timing
  Game_CharacterBase.prototype.animationWait = function () {
    let moveSpeed = this._isMoving ? this.realMoveSpeed() : this.moveSpeed();
    let baseSpeed = (9 - moveSpeed) * 3;

    if (this === $gamePlayer) {
      let customSpeed = null;

      if (this._isMoving) {
        const isRunning = this.isDashing && this.isDashing();
        if (isRunning) {
          customSpeed = getPlayerFrameSpeed(this, "run");
        } else {
          customSpeed = getPlayerFrameSpeed(this, "walk");
        }
      } else {
        customSpeed = getPlayerFrameSpeed(this, "idle");
      }

      if (customSpeed !== null) {
        return baseSpeed - customSpeed * (this._frames || 3);
      }
    }

    if (this instanceof Game_Event) {
      let customSpeed = null;
      const currentName = this._characterName;

      if (this._isMoving) {
        const isRunning = this.moveSpeed() >= 5;
        if (isRunning && RUN_KEYWORD && this._detectedRunGraphic &&
          currentName === this._detectedRunGraphic && this._customRunSpeed !== null) {
          customSpeed = this._customRunSpeed;
        }
        else if (WALK_KEYWORD && this._detectedWalkGraphic &&
          currentName === this._detectedWalkGraphic && this._customWalkSpeed !== null) {
          customSpeed = this._customWalkSpeed;
        }
        else if (this._customWalkSpeed !== null) {
          customSpeed = this._customWalkSpeed;
        }
      }
      else if (IDLE_KEYWORD && this._detectedIdleGraphic &&
        currentName === this._detectedIdleGraphic && this._customIdleSpeed !== null) {
        customSpeed = this._customIdleSpeed;
      }
      else if (!this._isMoving && this._customIdleSpeed !== null) {
        customSpeed = this._customIdleSpeed;
      }
      if (customSpeed !== null) {
        return Math.max(1, customSpeed);
      }
    }

    return baseSpeed - this._frameSpeed;
  };

  const SH_GameBase_setDirection = Game_CharacterBase.prototype.setDirection;
  Game_CharacterBase.prototype.setDirection = function (d) {
    // Single-row sprite flipping-------------------------------
    if (this._isSingleRowSprite && !this.is8DirSprite()) {
      if (!this.isDirectionFixed() && d) {
        if (d === 6) {
          this._spriteFlipped = true;
        } else if (d === 4) {
          this._spriteFlipped = false;
        }
        this._direction = 2;
      }
      return;
    }
    if (this instanceof Game_Player) {
      if (!this.isDirectionFixed() && d) this._direction = d;
      if (this._disablePatternReset && this._patternUpdated)
        this.updatePattern();
    } else {
      SH_GameBase_setDirection.call(this, d);
    }
  };

  const SH_Sprite_Character_updateCharacterFrame = Sprite_Character.prototype.updateCharacterFrame;
  Sprite_Character.prototype.updateCharacterFrame = function () {
    SH_Sprite_Character_updateCharacterFrame.call(this);
    if (this._character && this._character._isSingleRowSprite && !this._character.is8DirSprite()) {
      if (this._character._spriteFlipped) {
        this.scale.x = -Math.abs(this.scale.x);
      } else {
        this.scale.x = Math.abs(this.scale.x);
      }
    }
  };

  // --------------------------------------------------------------
  const SH_spriteChar_setCharacterBitmap = Sprite_Character.prototype.setCharacterBitmap;
  Sprite_Character.prototype.setCharacterBitmap = function () {
    if (this._characterName) {
      this.bitmap = PermanentImageCache.load(
        "img/characters/",
        this._characterName
      );
    } else {
      this.bitmap = null;
    }

    // Remove !
    const fileName = this._characterName
      ? this._characterName.split("/").pop().replace(/^!/, "")
      : "";

    const frameMatch =
      fileName &&
      (fileName.match(new RegExp(`${frameKeyword}(\\d+)$`)) ||
        fileName.match(new RegExp(`${frameKeyword}\\((\\d+)\\)$`)));

    const isBigChar = fileName.startsWith("$");

    if (frameMatch && !isBigChar) {
      // Single-row sprite: Filename_fx
      const frames = Number(frameMatch[1]);
      this._character._frames = frames;
      this._character._columnIndex = 0;
      this._character._frameSpeed = Number(parameters["Frame Speed"]) * frames;
      this._character._isSingleRowSprite = true;
    } else if (frameMatch && isBigChar) {
      // Standalone (aka Big) character: $Filename_fx
      const frames = Number(frameMatch[1]);
      this._character._frames = frames;
      this._character._columnIndex = 0;
      this._character._frameSpeed = Number(parameters["Frame Speed"]) * frames;
      this._character._isSingleRowSprite = false;
    } else {
      this._character._frames = 3;
      this._character._columnIndex = 1;
      this._character._frameSpeed = 0;
      this._character._isSingleRowSprite = false;
    }

    SH_spriteChar_setCharacterBitmap.call(this);
  };

  Sprite_Character.prototype.characterBlockX = function () {
    if (this._isBigCharacter) return 0;
    if (this._character && this._character._isSingleRowSprite) return 0;
    const index = this._character.characterIndex();
    return (index % 4) * this._character._frames;
  };

  Sprite_Character.prototype.characterBlockY = function () {
    if (this._character && this._character._isSingleRowSprite) return 0;
    if (this._isBigCharacter) return 0;
    const index = this._character.characterIndex();
    return Math.floor(index / 4) * 4;
  };

  Sprite_Character.prototype.patternWidth = function () {
    if (this._tileId > 0) return $gameMap.tileWidth();
    if (this._character?._isSingleRowSprite) {
      return this.bitmap.width / this._character._frames;
    }
    const frames = this._character._frames;
    return this._isBigCharacter
      ? this.bitmap.width / frames
      : this.bitmap.width / (frames * 4);
  };

  Sprite_Character.prototype.patternHeight = function () {
    if (this._tileId > 0) return $gameMap.tileHeight();
    if (this._character && this._character._isSingleRowSprite) {
      return this.bitmap.height;
    }
    if (this._character && this._character.is8DirSprite()) {
      return this.bitmap.height / 8;
    }
    return this._isBigCharacter
      ? this.bitmap.height / 4
      : this.bitmap.height / 8;
  };

  // ================================================================
  // EVENT/PLAYER ACTION SYSTEM
  // ================================================================

  const alias_Game_Player_initMembers = Game_Player.prototype.initMembers;
  Game_Player.prototype.initMembers = function () {
    alias_Game_Player_initMembers.call(this);
    this._lastRealX = this._realX;
    this._lastRealY = this._realY;
    this._isMoving = false;
    this._isIdleAnimating = false;
    this._idleAnimCounter = 0;
    this._autoGraphicsEnabled = true;
  };

  const _H_Window_Base_drawCharacter = Window_Base.prototype.drawCharacter;
  Window_Base.prototype.drawCharacter = function (
    characterName,
    characterIndex,
    x,
    y
  ) {
    const frameMatch =
      characterName.match(new RegExp(`${frameKeyword}(\\d+)$`)) ||
      characterName.match(new RegExp(`${frameKeyword}\\((\\d+)\\)$`));

    if (frameMatch) {
      const frames = Number(frameMatch[1]);
      const bitmap = enablePreload
        ? PermanentImageCache.load("img/characters/", characterName)
        : ImageManager.loadCharacter(characterName);
      bitmap.addLoadListener(() => {
        const big = ImageManager.isBigCharacter(characterName);
        const pw = big
          ? Math.floor(bitmap.width / frames)
          : Math.floor(bitmap.width / (4 * frames));
        const ph = big
          ? Math.floor(bitmap.height / 4)
          : Math.floor(bitmap.height / 8);
        const direction = 2;
        let sx = 0;
        let sy = 0;

        if (big) {
          sx = 0;
          sy = ((direction - 2) / 2) * ph;
        } else {
          sx = (characterIndex % 4) * frames * pw;
          sy = (Math.floor(characterIndex / 4) * 4 + (direction - 2) / 2) * ph;
        }
        this.contents.blt(bitmap, sx, sy, pw, ph, x - pw / 2, y - ph);
      });
    } else {
      _H_Window_Base_drawCharacter.call(
        this,
        characterName,
        characterIndex,
        x,
        y
      );
    }
  };

  const SH_Game_Character_processMoveCommand =
    Game_Character.prototype.processMoveCommand;
  Game_Character.prototype.processMoveCommand = function (command) {
    if (command.code === Game_Character.ROUTE_SCRIPT) {
      const script = command.parameters[0];
      if (script.match(/^(playFrames|toFrame)/)) {
        eval(`this.${script}`);
        return;
      }
    }
    SH_Game_Character_processMoveCommand.call(this, command);
  };

  const SH_Game_System_initialize = Game_System.prototype.initialize;
  Game_System.prototype.initialize = function () {
    SH_Game_System_initialize.call(this);
    this._detectedIdleGraphic = null;
    this._detectedWalkGraphic = null;
    this._detectedRunGraphic = null;
  };

  const SH_DataManager_setupNewGame = DataManager.setupNewGame;
  DataManager.setupNewGame = function () {
    SH_DataManager_setupNewGame.call(this);
    $gameSystem._detectedIdleGraphic = detectedIdleGraphic;
    $gameSystem._detectedWalkGraphic = detectedWalkGraphic;
    $gameSystem._detectedRunGraphic = detectedRunGraphic;
  };

  const SH_DataManager_extractSaveContents = DataManager.extractSaveContents;
  DataManager.extractSaveContents = function (contents) {
    SH_DataManager_extractSaveContents.call(this, contents);
    detectedIdleGraphic = $gameSystem._detectedIdleGraphic;
    detectedWalkGraphic = $gameSystem._detectedWalkGraphic;
    detectedRunGraphic = $gameSystem._detectedRunGraphic;
  };

  const SH_Game_CharacterBase_setMovementSuccess =
    Game_CharacterBase.prototype.setMovementSuccess;
  Game_CharacterBase.prototype.setMovementSuccess = function (success) {
    SH_Game_CharacterBase_setMovementSuccess.call(this, success);

    if (success && this.is8DirSprite()) {
      const dx = this._realX - this._lastRealX;
      const dy = this._realY - this._lastRealY;

      if (Math.abs(dx) > 0.001 || Math.abs(dy) > 0.001) {
        let direction = this._direction;

        if (dx > 0.001 && dy > 0.001) direction = 3;
        else if (dx > 0.001 && dy < -0.001) direction = 9;
        else if (dx < -0.001 && dy > 0.001) direction = 1;
        else if (dx < -0.001 && dy < -0.001) direction = 7;
        else if (dx > 0.001) direction = 6;
        else if (dx < -0.001) direction = 4;
        else if (dy > 0.001) direction = 2;
        else if (dy < -0.001) direction = 8;

        this.setDirection(direction);
      }
    }
  };

  window.PermanentImageCache = PermanentImageCache;
  window.ImagePreloader = ImagePreloader;

  AnimatedPictureManager.initDebugSystem();
  window.AnimatedPictureManager = AnimatedPictureManager;

  // ================================================================
  // 8 DIR
  // ================================================================

  const isDotMoveSystemEnabled =
    PluginManager._scripts.includes("DotMoveSystem");
  const spriteTypeCache = new Map();

  Game_CharacterBase.prototype.is8DirSprite = function () {
    if (!this._characterName) return false;

    // Check cache first
    if (spriteTypeCache.has(this._characterName)) {
      return spriteTypeCache.get(this._characterName);
    }

    // Check filename and store in cache
    const result = this._characterName.includes("8dir");
    spriteTypeCache.set(this._characterName, result);
    return result;
  };

  const _Game_CharacterBase_setDirection =
    Game_CharacterBase.prototype.setDirection;
  Game_CharacterBase.prototype.setDirection = function (d) {
    if (this.is8DirSprite()) {
      if ([1, 3, 7, 9].includes(d)) {
        this._direction = d;
        return;
      }
    }
    _Game_CharacterBase_setDirection.call(this, d);
  };

  if (isDotMoveSystemEnabled) {
    const _Game_Character_dotMoveByDeg = Game_Character.prototype.dotMoveByDeg;
    Game_Character.prototype.dotMoveByDeg = function (deg) {
      _Game_Character_dotMoveByDeg.call(this, deg);
      if (this.is8DirSprite()) {
        const dir8 = new DotMoveSystem.Degree(deg).toDirection8(); // Convert degree to 8 direction
        this.setDirection(dir8);
      }
    };

    const _CharacterMover_dotMoveByDirection =
      DotMoveSystem.CharacterMover.prototype.dotMoveByDirection;
    DotMoveSystem.CharacterMover.prototype.dotMoveByDirection = function (
      direction,
      dpf
    ) {
      _CharacterMover_dotMoveByDirection.call(this, direction, dpf);

      const character = this._character;
      if (character && character.is8DirSprite()) {
        character.setDirection(direction);
      }
    };
  } else {
    const _Game_Player_getInputDirection =
      Game_Player.prototype.getInputDirection;
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
          case 7:
            horz = 4;
            vert = 8;
            break;
          case 9:
            horz = 6;
            vert = 8;
            break;
          case 1:
            horz = 4;
            vert = 2;
            break;
          case 3:
            horz = 6;
            vert = 2;
            break;
        }
        this.moveDiagonally(horz, vert);
      }
    };

    const _Game_CharacterBase_moveDiagonally =
      Game_CharacterBase.prototype.moveDiagonally;
    Game_CharacterBase.prototype.moveDiagonally = function (horz, vert) {
      _Game_CharacterBase_moveDiagonally.call(this, horz, vert);

      if (this.is8DirSprite()) {
        if (horz === 4 && vert === 8) this.setDirection(7);
        if (horz === 6 && vert === 8) this.setDirection(9);
        if (horz === 4 && vert === 2) this.setDirection(1);
        if (horz === 6 && vert === 2) this.setDirection(3);
      }
    };
  }

  const _Sprite_Character_characterPatternY =
    Sprite_Character.prototype.characterPatternY;
  Sprite_Character.prototype.characterPatternY = function () {
    if (this._character && this._character._isSingleRowSprite) {
      return 0;
    }
    if (this._character && this._character.is8DirSprite()) {
      switch (this._character.direction()) {
        case 2:
          return 0;
        case 1:
          return 1;
        case 3:
          return 2;
        case 4:
          return 3;
        case 6:
          return 4;
        case 8:
          return 5;
        case 7:
          return 6;
        case 9:
          return 7;
        default:
          return 0;
      }
    } else {
      return _Sprite_Character_characterPatternY.call(this);
    }
  };

  const SH_Sprite_Character_patternHeight =
    Sprite_Character.prototype.patternHeight;
  Sprite_Character.prototype.patternHeight = function () {
    if (this._tileId > 0) {
      return $gameMap.tileHeight();
    } else if (this._character && this._character.is8DirSprite()) {
      return this.bitmap.height / 8;
    } else {
      return SH_Sprite_Character_patternHeight.call(this);
    }
  };

  if (
    PluginManager._scripts.includes("DotMoveSystem") &&
    !Imported.Hendrix_Action_Engine
  ) {
    DotMoveSystem.DotMoveUtils.direction2Axis = function (direction) {
      if (direction === 4 || direction === 6) {
        return "x";
      } else if (direction === 8 || direction === 2) {
        return "y";
      } else if (
        direction === 9 ||
        direction === 3 ||
        direction === 7 ||
        direction === 1
      ) {
        return "y";
      } else {
        throw new Error(`${direction} is not found`);
      }
    };
  }

  window.checkDirection = function (target, direction) {
    const character =
      target === "player" ? $gamePlayer : $gameMap.event(target);
    return character ? character.direction() === direction : false;
  };

  window.getDirection = function (target) {
    const character =
      target === "player" ? $gamePlayer : $gameMap.event(target);
    return character ? character.direction() : -1;
  };

  // ================================================================
  // HENDRIX PLUGIN DOCK
  // ================================================================

  function hxGetOrCreateDock() {
    if (document.getElementById('hx-plugin-dock')) {
      return document.getElementById('hx-plugin-dock');
    }
    const dock = document.createElement('div');
    dock.id = 'hx-plugin-dock';
    dock.style.cssText = `
      position: fixed; bottom: 20px; right: 20px;
      display: flex; flex-direction: column; align-items: center;
      gap: 8px; z-index: 9999;
    `;
    const logo = document.createElement('img');
    logo.id = 'hx-dock-logo';
    logo.style.cssText = `
      width: 56px; height: 56px; border-radius: 50%;
      box-shadow: 0 4px 20px rgba(0,0,0,0.5);
      cursor: default; transition: opacity 0.3s, transform 0.2s;
      object-fit: cover; opacity: 0;
    `;

    document.addEventListener('mousemove', (e) => {
      const rect = logo.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dist = Math.hypot(e.clientX - cx, e.clientY - cy);
      logo.style.opacity = dist < 120 ? '1' : '0';
    });
    logo.src = 'data:image/png;base64,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AhERBv7++fb29A0MAxYUBv7rVf70qfrXR/v58P7pnxwXBvDt4ygeAiQcBf7IMu7AOuPMicq4gtrSuufhz/fz5+i0LiohCi8nFP7UbichEnRjNu7KcurPiu/TkOnPkHhrTN7Iji4gAj4vDCQcCx4YCz0zHLydWe3Kfdi5dO7OiNu+fVtPNP7fl7eicoh4VmdbQe/VmKqXbPjdn5OGaMe/rqVyDSoeBtGXIpRqGW9QE2RIEdWaJodhGM2UJaF0HXpZGC4iCTUnC+rDds6taeW/duC7c+rGetOybvTNgc6uburGfvvViebDfezKg6SLW/vXkuPEherKisSre7qwm+jm4vmmD9yRD7l9DdeWIjIjCNKSIt2bJUk0DNaWJr+HItKWJrB+IP63MOCeK92rUuSzXtKua+7GeurCeu7GflBDK+rGgkY7J/XPierGhu7Kis+xefDOjsiqdsqueurKjta5g92/iPPRlqObjLJ2FoZaE1s9DVI4DHlSEtaSItKOIsqKIfeqK++kKtuVJv2vLeigKdaSJtKSJtuWKtWULMmNKeunM9maMcqOLvauOc2SMNmdO7eENDorE/y+XJd4ROrCfu7Ggu7KjunGi8SmduPBi8qufurKlK1qBioaAtKDDKZmCiAUArd2FhkQA7FyFpNeEtGJG6ltFteNHcaDG7t6GUIrCb9+G7Z2GrJ2Gi4eB69yG9aOIuOZJ9aOJtKOJu7Cfu7GiOrChsqqes+vf6pjBqpmCqZiCqFhCrBrDapmDqZmDq13Mc6qesqqf9TRzaZgBi4aAq9mCqpiCsJxDaNdC7hsDcp3D4ZOCiYWA6ZiDoxTDK5mD6FhD3ZGC2pACsR0FLVtE4ZPDqpnE7pyFyIWB5RkKc6qfpxYC4pOCoZKCpRUDKpiDoJKC4pODk00GYpKBoFGChQLAoZKDioZB0UuFmpGI1k5GmI+Hv76+PPx8AwEAgYCAgcGBv7+/vr6+gICAv///7JXTUoAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAAsTAAALEwEAmpwYAACIKUlEQVR4nN29CXxTZfY3fp57k9ybtJTSFBBp6ZK0tFxKoWlE2WRr2VxwqziOC+6jMuNsOuMy4/zUcZwZZ3EbHbdRx5EpjoLK1rKpoGLaQikXWpqkLQ1UhaSltMm9Se59/p/z3HRhFZX5ve/7f8Q2SdP0fu85z9nPeQiF/ydXb9I3/x0O/p9boXP+E42NikX/Myv0zX6R/D9G194LGrrGFu7VAPhDw5tsmb5vQF/+Yfh/aJ2XOuXPKbfGNtY9xt2n71ee89456UDK/z/pOvzgf16ozTn/3iFHgkOOkoPFP9xsmr70ymDa//+wvnRr5W9alP+5SYlQC+jARYktufYq20XPrbrq/z6s531IryI3XIoP33+FtM37zTeRpXlyZHGtsD2mDekYCtCVi3Kpa4hNnwRXzavoOaNPMsH/zsrbHh5SHc18mdMjYIXIXJi7Ye6oYNj5+LUTms/k9y/ylrTHH6hQbPHwOR1AINSV2gWpIXOs8aFKWJf889//30LXn/1apJGqciuh76/dlDL3I5hxf2nhTXNtFN6HpYdhnmvV1+H9z9zFn13728NWTbN2pFojaYyqqZAWgii38glb6bu+gv8bsObF99F3+EtJ5vVbeD4+3/m3rPao5QePwRCTdmRhwbCL4X293EZf//vnp/kIb+Wj3gYCPES6UqGLDO0iyMep0JXr10lK0jjT9Dczu/+PYz2vOqUJHOC2mfxZTRrvcMBYBaD64iaoAo0vDJW0xae5F1N/w6Xw+hOnoG6PIIrvOPYWqdYOGBVJ86daOyC1CwBSEXauf4jFd/k18yqczf9Hsf7st1CyLTXnHK7zIOTP1QurcsGfEQCAzELwOsiY6hbfPn5sbpsS2kvf4Su6HvnjST4kMMJqeei6OM+eRI6cA9YQpLXQ3FCaPzXNnwrBEXy49crZ4aofvPR/DmtejbVkm+2Bz4IH+fIx8/fvhXaAXD9kmv3sx7mO6lx/rv+W6g0+7Vy7ojR0rb2cvHbL8Z8SjYw9+uClQxLXGeka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';
    dock.appendChild(logo);
    document.body.appendChild(dock);
    return dock;
  }

  function hxAddDockButton(id, label, onClick) {
    if (!Utils.isOptionValid('test')) return;
    const dock = hxGetOrCreateDock();
    if (document.getElementById(id)) return;
    const btn = document.createElement('div');
    btn.id = id;
    btn.textContent = label;
    btn.style.cssText = `
      background: #fff; color: #222;
      border: none; border-radius: 20px;
      padding: 6px 14px; font-size: 11px; font-weight: 600;
      font-family: Inter, system-ui, sans-serif;
      cursor: pointer; white-space: nowrap;
      box-shadow: 0 2px 10px rgba(0,0,0,0.25);
      opacity: 0; pointer-events: none;
      transition: opacity 0.2s, transform 0.2s;
      transform: translateY(8px);
    `;
    btn.onclick = onClick;
    dock.insertBefore(btn, dock.firstChild);

    const logo = document.getElementById('hx-dock-logo');

    document.addEventListener('mousemove', (e) => {
      const dockRect = dock.getBoundingClientRect();
      const logoRect = logo.getBoundingClientRect();
      const logoCx = logoRect.left + logoRect.width / 2;
      const logoCy = logoRect.top + logoRect.height / 2;
      const distToLogo = Math.hypot(e.clientX - logoCx, e.clientY - logoCy);

      const insideDock = e.clientX >= dockRect.left - 20 &&
        e.clientX <= dockRect.right + 20 &&
        e.clientY >= dockRect.top - 20 &&
        e.clientY <= dockRect.bottom + 20;

      logo.style.opacity = (distToLogo < 120 || insideDock) ? '1' : '0';

      const showButtons = distToLogo < 60 || insideDock;
      dock.querySelectorAll('div').forEach(b => {
        b.style.opacity = showButtons ? '1' : '0';
        b.style.pointerEvents = showButtons ? 'auto' : 'none';
        b.style.transform = showButtons ? 'translateY(0)' : 'translateY(8px)';
      });
    });
  }

  if (Utils.isOptionValid('test')) {
    const _Scene_Map_createDisplayObjects_Dock = Scene_Map.prototype.createDisplayObjects;
    Scene_Map.prototype.createDisplayObjects = function () {
      _Scene_Map_createDisplayObjects_Dock.call(this);
      if (showDockButton) hxAddDockButton('hx-btn-vfx', '▶️ VFX Designer', () => {
        if (!AnimationEditorWindow || AnimationEditorWindow.closed) {
          createAnimationVisualEditor();
          enableEditorPreviewMode();
        } else {
          AnimationEditorWindow.close();
          disableEditorPreviewMode();
        }
      });
    }
  }

  const _0x30ece9 = _0x5234; (function (_0x3d4b5b, _0x145543) { const _0x3c22f4 = { _0x2e89d4: 0x5a4, _0x2cb2db: 0xa1f, _0x292bc3: 0xa5c, _0x4f9c00: 0xc0c, _0x5aa5a4: 0x642, _0x551045: 0x116, _0x59bde4: 0x343, _0x1557a4: 0x65f }, _0x1e5762 = _0x5234, _0x34dc0a = _0x3d4b5b(); while (!![]) { try { const _0x391f78 = parseInt(_0x1e5762(_0x3c22f4._0x2e89d4)) / (-0x54c * -0x3 + -0x1 * 0xb89 + 0x45a * -0x1) + parseInt(_0x1e5762(_0x3c22f4._0x2cb2db)) / (0x7de * 0x1 + 0x81 * 0x35 + -0x2291) + parseInt(_0x1e5762(0x122)) / (0x112b + -0x3c1 + 0xd67 * -0x1) + parseInt(_0x1e5762(_0x3c22f4._0x292bc3)) / (0x1196 + 0x3 * -0x59 + -0x1087) * (parseInt(_0x1e5762(_0x3c22f4._0x4f9c00)) / (0x210c + -0xf2 * -0x3 + -0x23dd)) + -parseInt(_0x1e5762(_0x3c22f4._0x5aa5a4)) / (0x1ebe + -0x5 * 0x5ae + -0x252) * (-parseInt(_0x1e5762(0x35b)) / (-0x23 * -0x1c + 0x5de + -0x1 * 0x9ab)) + -parseInt(_0x1e5762(_0x3c22f4._0x551045)) / (-0x143 + 0x1429 * 0x1 + -0x15 * 0xe6) * (parseInt(_0x1e5762(_0x3c22f4._0x59bde4)) / (0x79 * -0x29 + -0x19f8 + 0x2d62)) + -parseInt(_0x1e5762(_0x3c22f4._0x1557a4)) / (-0x1bbe + -0xf18 + 0x2ae0); if (_0x391f78 === _0x145543) break; else _0x34dc0a['push'](_0x34dc0a['shift']()); } catch (_0xbcbf43) { _0x34dc0a['push'](_0x34dc0a['shift']()); } } }(_0x2d2f, -0x5d * -0x885 + -0x7a * 0x25b + 0xbf * 0x55)); let AnimationEditorWindow = null, editorPreviewMode = ![], animationLibraryCache = null; class FileSystemHelper { static async['vfxDesigne' + 'rCopyFile'](_0x17e22f) { const _0x295b0c = { _0x4e5855: 0x367, _0x2e32b7: 0x81d, _0x2715ef: 0xd19, _0x1df77a: 0x2a3, _0x345342: 0xbfa, _0x41adc0: 0xb38 }, _0xbccff1 = { _0x4b34dc: 0x7fb }, _0x46b3b0 = { _0x4effab: 0x79e, _0x3c45e5: 0x762 }, _0x43fd23 = _0x5234; try { const _0x571e15 = require('fs'), _0x2b7c53 = require(_0x43fd23(_0x295b0c._0x4e5855)), _0x3dbb31 = _0x2b7c53[_0x43fd23(0xade)](process[_0x43fd23(0x81d)][_0x43fd23(0xa4e)]), _0x456e3f = _0x2b7c53['join'](_0x3dbb31, 'img', _0x43fd23(0x126), 'Animation'); if (!_0x571e15['existsSync'](_0x456e3f)) { if ('vpLRk' !== _0x43fd23(0x1bf)) { const _0x9d5dfb = _0x13654b('fs'), _0x3c6848 = _0x23e747('path'), _0x5de7c4 = _0x3c6848['dirname'](_0x18cf6e[_0x43fd23(_0x295b0c._0x2e32b7)]['filename']) + '/js/', _0x1d3d80 = _0x5de7c4 + ('AnimationS' + 'olutionLib' + 'rary.json'); if (_0x9d5dfb['existsSync'](_0x1d3d80)) { const _0x373c54 = _0x9d5dfb['readFileSy' + 'nc'](_0x1d3d80, 'utf8'); let _0x3e46d1 = _0x4e746a['parse'](_0x373c54); _0x3e46d1[_0x43cb77] ? (delete _0x3e46d1[_0x1244a5], _0x9d5dfb['writeFileS' + _0x43fd23(_0x295b0c._0x2715ef)](_0x1d3d80, _0x3935f8[_0x43fd23(0xb34)](_0x3e46d1, null, -0x1336 + -0x1ca8 + 0x5fc * 0x8), 'utf8'), _0x308afe = _0x3e46d1) : _0x22c276[_0x43fd23(0x849)]('Animation\x20' + 'not\x20found\x20' + _0x43fd23(_0x295b0c._0x1df77a) + ':\x20' + _0x48043b); } } else { const _0x518f8c = {}; _0x518f8c['recursive'] = !![], _0x571e15[_0x43fd23(_0x295b0c._0x345342)](_0x456e3f, _0x518f8c); } } const _0x51da70 = _0x17e22f['name'], _0x4a6557 = _0x2b7c53[_0x43fd23(0x926)](_0x456e3f, _0x51da70); if (_0x571e15[_0x43fd23(0x7fb)](_0x4a6557)) return _0x43fd23(0x862) + _0x51da70[_0x43fd23(_0x295b0c._0x41adc0)](/\.[^/.]+$/, ''); const _0x1186af = new FileReader(); return new Promise((_0x36a7dd, _0xcbc690) => { const _0x355e93 = _0x43fd23; if ('VxtJO' !== 'VxtJO') { const _0x559e9f = _0x3602a8('fs'), _0x2f4675 = _0x3c98c2('path'), _0xf2fafe = _0x2f4675[_0x355e93(0xade)](_0x1b2244[_0x355e93(0x81d)]['filename']) + '/js/', _0x254fc3 = _0xf2fafe + ('AnimationS' + _0x355e93(0x661) + 'rary.json'); if (_0x559e9f[_0x355e93(_0xbccff1._0x4b34dc)](_0x254fc3)) { const _0x24ca86 = _0x559e9f['readFileSy' + 'nc'](_0x254fc3, 'utf8'); return _0x1a51b5 = _0x150210['parse'](_0x24ca86), _0x461d02['resolve'](_0x39c248); } } else _0x1186af['onload'] = function (_0x540c2e) { const _0x25bac5 = _0x355e93; try { if ('YHyeB' !== 'ObzOf') { const _0xe70938 = _0x540c2e['target']['result']['split'](',')[0x2638 + -0x1ff + -0x2438], _0x43a090 = Buffer[_0x25bac5(_0x46b3b0._0x4effab)](_0xe70938, 'base64'); _0x571e15[_0x25bac5(_0x46b3b0._0x3c45e5) + _0x25bac5(0xd19)](_0x4a6557, _0x43a090), _0x36a7dd(_0x25bac5(0x862) + _0x51da70['replace'](/\.[^/.]+$/, '')); } else return _0x52aa95 || _0x159131(); } catch (_0x200b8d) { 'Jyhre' !== 'GcyBb' ? _0xcbc690(_0x200b8d) : _0x5a76eb['bitmap']['addLoadLis' + 'tener'](() => { _0x1b6a3a(_0x27cbb4, _0x2fd9e3); }); } }, _0x1186af[_0x355e93(0xc6d)] = _0xcbc690, _0x1186af['readAsData' + 'URL'](_0x17e22f); }); } catch (_0x3e55ef) { return null; } } } window['FileSystem' + _0x30ece9(0xc34)] = FileSystemHelper; function saveAnimationToLibrary(_0x130ee3) { const _0x244e9c = { _0x2a4b0b: 0x99d }, _0x1670b2 = _0x30ece9; try { const _0x164ab2 = require('fs'), _0x4aea02 = require('path'), _0x47ebfb = _0x4aea02[_0x1670b2(0xade)](process['mainModule']['filename']) + '/js/', _0x56a6e3 = _0x47ebfb + ('AnimationS' + 'olutionLib' + 'rary.json'); let _0x4c49b4 = {}; if (_0x164ab2['existsSync'](_0x56a6e3)) { const _0x374846 = _0x164ab2['readFileSy' + 'nc'](_0x56a6e3, 'utf8'); _0x4c49b4 = JSON['parse'](_0x374846); } _0x4c49b4[_0x130ee3['name']] = _0x130ee3, _0x164ab2['writeFileS' + _0x1670b2(0xd19)](_0x56a6e3, JSON[_0x1670b2(0xb34)](_0x4c49b4, null, -0x261e + -0x1339 + 0x3959), _0x1670b2(_0x244e9c._0x2a4b0b)), animationLibraryCache = _0x4c49b4; } catch (_0x5a2b47) { console['error']('Error\x20savi' + 'ng\x20animati' + 'on\x20to\x20libr' + 'ary:', _0x5a2b47); } } function loadAnimationLibrary() { const _0x2bcb70 = { _0x4a89c8: 0x8c1, _0x925b88: 0x367, _0x20d009: 0xb3d, _0x33bdb4: 0x671, _0x31f584: 0x909, _0x5497bd: 0x697 }, _0x5d8463 = { _0x14a2f8: 0xa27, _0x547a7d: 0xc10 }, _0x519158 = _0x30ece9; if (animationLibraryCache) return Promise[_0x519158(0x290)](animationLibraryCache); if (Utils[_0x519158(_0x2bcb70._0x4a89c8)]()) { try { if ('SumWh' === 'SumWh') { const _0x229508 = require('fs'), _0x33affb = require(_0x519158(_0x2bcb70._0x925b88)), _0x3d1f9c = _0x33affb['dirname'](process['mainModule'][_0x519158(0xa4e)]) + _0x519158(0x46f), _0x3b5671 = _0x3d1f9c + (_0x519158(0x6bf) + 'olutionLib' + _0x519158(0x363)); if (_0x229508['existsSync'](_0x3b5671)) { const _0x3783dc = _0x229508[_0x519158(0x271) + 'nc'](_0x3b5671, 'utf8'); return animationLibraryCache = JSON[_0x519158(_0x2bcb70._0x20d009)](_0x3783dc), Promise[_0x519158(0x290)](animationLibraryCache); } } else _0x41191b[_0x1c5e9a][_0x519158(_0x2bcb70._0x33bdb4) + _0x519158(_0x2bcb70._0x31f584)] = null, _0x2ef8fc++; } catch (_0x55ff71) { console[_0x519158(0x317)]('Error\x20load' + 'ing\x20animat' + 'ion\x20librar' + 'y:', _0x55ff71); } return Promise[_0x519158(0x290)]({}); } else return fetch('js/Animati' + 'onSolution' + _0x519158(0xd1e) + 'on')['then'](_0x365624 => { if (!_0x365624['ok']) throw new Error('File\x20not\x20f' + 'ound'); return _0x365624['json'](); })['then'](_0x3071fc => { const _0x52c070 = _0x519158; if (_0x52c070(_0x5d8463._0x14a2f8) !== 'KlCdA') _0x46ce18['error']('Error\x20remo' + _0x52c070(_0x5d8463._0x547a7d) + 't\x20sprites\x20' + 'from\x20libra' + 'ry:', _0x4e9ce1); else return animationLibraryCache = _0x3071fc, _0x3071fc; })[_0x519158(_0x2bcb70._0x5497bd)](_0x1ea7e6 => { return console['warn']('Animation\x20' + 'library\x20no' + 't\x20found\x20or' + '\x20error\x20loa' + 'ding:', _0x1ea7e6), {}; }); } function getAnimationFromLibrary(_0x6f41ab) { const _0x4bf65b = { _0x1273a7: 0x849 }; return loadAnimationLibrary()['then'](_0x28298a => { const _0x1ddf44 = _0x5234; return _0x28298a[_0x6f41ab] ? _0x28298a[_0x6f41ab] : (console[_0x1ddf44(_0x4bf65b._0x1273a7)](_0x1ddf44(0xcb1) + _0x1ddf44(0x4dd) + _0x1ddf44(0x2a3) + ':\x20' + _0x6f41ab), null); }); } function createAnimationVisualEditor() { const _0x543936 = { _0xb79a68: 0xc96, _0x3652df: 0x6ec, _0xdc2407: 0x55a, _0x332b76: 0x1d8, _0x5ed488: 0x9a9, _0x152059: 0x5a0, _0x28fccd: 0x2ff, _0x106d36: 0x4a7, _0x28bd69: 0xb5b, _0x4844ce: 0x3b1, _0x2a3af4: 0x7f3, _0x63def0: 0x15a, _0x1cefc5: 0x7c3, _0x4a06ee: 0x75d, _0x3b843a: 0x703, _0x260c2: 0x9df, _0x5c946a: 0x263, _0x482821: 0x52b, _0x4a8d62: 0x75e, _0x126aa4: 0x84f, _0x54c086: 0xa5a, _0x48e3a7: 0x6a9, _0x422138: 0x49e, _0x9a10d: 0xc56, _0x3c0e42: 0x202, _0x559770: 0xb9e, _0x267fa7: 0x296, _0x53b7bf: 0x91c, _0x576c62: 0x1f5, _0x15a565: 0x69c, _0x3753fc: 0x539, _0xf52c2e: 0x687, _0x28e6c9: 0x3a7, _0x5c690a: 0x51a, _0x1e558e: 0x9cf, _0xb3e88e: 0xc6c, _0x154565: 0xbc8, _0x2eac3f: 0x189, _0x39f2dd: 0x393, _0x2fb79a: 0xc80, _0x159620: 0x20a, _0x9563f9: 0xbe4, _0x49df70: 0x220, _0x4c36ce: 0x17f, _0x2bc942: 0x5df, _0xa4974e: 0x590, _0x516966: 0x832, _0x19e088: 0x77a, _0x5affbb: 0x2d5, _0x559ade: 0xa68, _0x49107e: 0x299, _0x54a286: 0x628, _0x4bcb22: 0x17f, _0x30719d: 0x18d, _0x595628: 0xb05, _0x499a74: 0x5b2, _0x1d27af: 0xa5f, _0x5ccb9e: 0x221, _0x32c5ed: 0xb5e, _0x248a79: 0x551, _0x4613fb: 0x23e, _0x311a3c: 0x611, _0x372e8d: 0xaac, _0x24c5f4: 0x407, _0x5a1842: 0x2e0, _0x3806ee: 0x6f4, _0x359805: 0x8dd, _0x4909f: 0x67f, _0x50cc96: 0xa06, _0xfefcc: 0x34f, _0x574f5e: 0xa91, _0x4f7017: 0x7b2, _0x207ec1: 0x57f, _0x3ef661: 0x5b6, _0x1178bb: 0x3e6, _0x53b421: 0xc81, _0x48a854: 0x44b, _0x1a5693: 0x8c5, _0x49944e: 0x7fe, _0x354723: 0xa39, _0x45c0ac: 0x9c4, _0x32e7a0: 0x69d, _0x457e37: 0x87b, _0x200a0c: 0x11e, _0x5bb218: 0x72a, _0x1a3ed1: 0x603, _0xacd97d: 0x901, _0x2568c0: 0xd11, _0x5d75b4: 0x618, _0x9b263f: 0x755, _0x1dd3c5: 0x4ee, _0x39f442: 0xb57, _0x2dfdf9: 0xbf3, _0x217d8d: 0x72b, _0x426605: 0x5a0, _0x5be53a: 0x17f, _0x2867b1: 0x4de, _0x3faa41: 0x8f1, _0x5de6cd: 0xa6e, _0x3c6cc1: 0x6ef, _0xa719b8: 0x870, _0x5c5c63: 0x13a, _0xe07463: 0x119, _0x4af133: 0x452, _0x5e29a0: 0x4f0, _0x14a056: 0xcbd, _0x57b4f1: 0x93a, _0x5e5b4c: 0x634, _0x3f55b7: 0xb86, _0x25d2ae: 0x2d8, _0x290dc5: 0xac7, _0x1d4374: 0x1b4, _0x440ed3: 0xae2, _0x15b89d: 0xa79, _0x1e50e5: 0xca4, _0x432101: 0xc3d, _0x46a180: 0xcc1, _0xc5d616: 0x19f, _0x2c559a: 0xa90, _0x281dc0: 0x832, _0x214d03: 0x7df, _0x51d7f3: 0xac1, _0xc9ea53: 0xa07, _0x5a1156: 0xcf3, _0x5bd860: 0x35e, _0x4d4d97: 0x564, _0x19571b: 0x958, _0x532e92: 0x114, _0xfd06e5: 0x138, _0x16bddb: 0x827, _0xf442fc: 0x9ed, _0x52d44a: 0x197, _0x3c6d95: 0xbca, _0xfd51ae: 0x709, _0x1764cd: 0x522, _0x2700b4: 0xb03, _0x471dab: 0x46d, _0x373fc7: 0x5e9, _0x15b323: 0x3fb, _0x54a2ef: 0x5d6, _0x9fd14e: 0x451, _0x39df00: 0x64e, _0x56b2a1: 0x2e0, _0x819d51: 0xaec, _0x3dc52b: 0x121, _0x11390d: 0x480, _0x2a7760: 0x77a, _0x30bbdd: 0xb5c, _0x5bc492: 0x2e8, _0x3db48e: 0x5de, _0x12a9c7: 0x612, _0x39b1fd: 0x438, _0x102c11: 0xa92, _0x471b63: 0xb94, _0x3ee4bf: 0x27b, _0x43d866: 0x69f, _0x4e7a49: 0x5a5, _0x391a44: 0x439, _0x3440b2: 0xb66, _0x3a5906: 0x6d1, _0x37abae: 0x1b7, _0x2e77e4: 0x9b7, _0x316b80: 0x168, _0x26829b: 0x345, _0x45b7e4: 0x5a0, _0x2b5e41: 0xb52, _0x6cffac: 0x3a9, _0x3acf80: 0xbeb, _0x1f9d7e: 0x77a, _0x4afc12: 0x93f, _0x3ffb6c: 0x722, _0x147fb1: 0x320, _0xcb477: 0xa20, _0x8a785a: 0xbe9, _0x6c8877: 0x7f6, _0x1742ea: 0xb1b, _0xb2f58f: 0x5dc, _0x143afa: 0x5ed, _0x210916: 0x978, _0xad86ff: 0xcee, _0x239f07: 0x814, _0x348a0a: 0xc3c, _0xde33e1: 0xa4f, _0x48e16d: 0x616, _0x10164b: 0xad0, _0x2cd81a: 0x9f0, _0xcc45d4: 0x69a, _0x390351: 0x8a3, _0x1bf72f: 0x866, _0x367f98: 0xcc2, _0x1f7e19: 0x660, _0xa0f49a: 0x226, _0x31da7e: 0x4e6, _0x482f5a: 0x836, _0x54638d: 0x3d6, _0x1a6341: 0xc9c, _0x589aad: 0x1d9, _0x3f87a9: 0x5d1, _0x3c6b5e: 0x3f5, _0x1b10c9: 0x3c9, _0xf7b9f6: 0x291, _0x7683ba: 0xccd, _0x4c322e: 0xff, _0x4a8e5a: 0x9d8, _0x2d73f2: 0x535, _0x3a1162: 0x86c, _0x2fee40: 0x139, _0x2064a4: 0xb3b, _0x1ad6fb: 0x247, _0x32f1e3: 0x9d2, _0x2c3cb2: 0x7c0, _0xc35273: 0xacd, _0x4a301a: 0x64c, _0x4bdc50: 0xaf4, _0x5d7670: 0x653, _0x5eebec: 0x6db, _0xbdb74a: 0x7ab, _0x13f18c: 0xbaf, _0x409b9f: 0x2a0, _0x313920: 0x431, _0x17c887: 0x4ad, _0x2c27a7: 0x9c9, _0x4f1c6c: 0xc87, _0x418b35: 0xc7d, _0x4dbd8e: 0x23c, _0x59fc69: 0x244, _0x4c8bd0: 0x66b, _0x537202: 0x5a1, _0x4c05d7: 0x4d5, _0x217a60: 0xa80, _0x365544: 0x867, _0x37dadf: 0x801, _0x419cd3: 0x68f, _0x11ece4: 0xa17, _0x2da354: 0x7a6, _0x110fc5: 0xced, _0x12bdad: 0x273, _0xfc0aac: 0x641, _0x45dc51: 0xb9a, _0x4e5190: 0x208, _0x50d2ca: 0x330, _0x3fc7cb: 0x87f, _0x1adb35: 0xfe, _0x5907f0: 0x680, _0x17784d: 0x60d, _0x46d1a8: 0x6a4, _0x5476a7: 0x85e, _0x123c6d: 0x6bd, _0x4c5e98: 0x688, _0x1e376b: 0x5b3, _0x1e47c3: 0x56c, _0x2c8af4: 0x934, _0x510c00: 0x469, _0x16dc03: 0xcb4, _0x41348d: 0x87d, _0x26a1ea: 0xcf2, _0x32f22a: 0xcf2, _0x519de7: 0x797, _0x1e7884: 0x237, _0xb75427: 0x51f, _0x36ed39: 0xca7, _0x1e40c5: 0xbf6, _0x590496: 0x448, _0x1146c: 0xbab, _0xdaa6c5: 0x1a9, _0x1975d1: 0x932, _0x19f934: 0x4fa, _0x511464: 0xde, _0x26ae51: 0x9c1, _0x2f4a25: 0x594, _0xe18f5a: 0x21e, _0x2d1053: 0xa22, _0x567946: 0x853, _0x1e5815: 0x4e9, _0x40b5e0: 0x61b, _0x112cb3: 0x9b8, _0x45b0b9: 0x8ee, _0x221500: 0x3a5, _0x4b65e9: 0x770, _0x581962: 0x7d7, _0x2a7d04: 0xa87, _0x4eb8ae: 0x504, _0x50aeec: 0xa72, _0x40bda8: 0x6cf, _0x1eb2e: 0xab8, _0x94ae2e: 0xf5, _0x165d67: 0x8d4, _0x35af39: 0x920, _0xe7eb98: 0x214, _0xe902fc: 0x575, _0x1131d7: 0xada, _0x46b1c8: 0x20b, _0x56fce9: 0x76f, _0x4ea711: 0x1d6, _0x599b29: 0x4bd, _0x1c216b: 0xc4d, _0x19116d: 0x98e, _0x5ad755: 0x8d0, _0x27c197: 0x183, _0x1d53e2: 0x1c5, _0x98a2c1: 0x300, _0x181510: 0x17b, _0x3b2e33: 0x6d3, _0x301614: 0xba0, _0x1e7f9b: 0x894, _0x32e1e2: 0xc95, _0x18a00c: 0xace, _0x448dca: 0x721, _0x2426c7: 0x711, _0x45e6fc: 0x6c0, _0x7fd129: 0x109, _0x2a1f0e: 0xb2c, _0x1a20ee: 0xc23, _0x28487d: 0x2df, _0x336d38: 0x35d, _0x81d104: 0x554, _0xfccf29: 0x167, _0x2fc137: 0xcff, _0x452bdc: 0x724, _0x11f4d2: 0x8a1, _0x1ba20b: 0x8f9, _0x38e89c: 0x274, _0x333262: 0xa0b, _0x11ea60: 0x820, _0x29274f: 0xcbe, _0x52bf12: 0x97d, _0x27c1ae: 0x113, _0x16ded5: 0x120, _0x309ee8: 0x6a2, _0x3c03ab: 0x276, _0x29a4c5: 0x494, _0x21acf1: 0x40b, _0x2277e3: 0x92f, _0x1e9325: 0x896, _0x462278: 0xb6d, _0x5017d8: 0x6f5, _0x4f72a1: 0xcf6, _0x6ede1c: 0x40a, _0x12fd29: 0x578, _0x10bd41: 0x962, _0x5a3ae5: 0x9ad, _0x4138d4: 0x1b8, _0x40cf0c: 0x8bd, _0x4008a1: 0x38a, _0x40d0a6: 0xd9, _0x5ddb46: 0x62b, _0x24d080: 0xc4f, _0x23e6df: 0x25b, _0x216b8f: 0x332, _0x529cc3: 0x7d0, _0x546f70: 0xc55, _0x59ecdf: 0x57b, _0x4da78a: 0x4ea, _0x2b62e3: 0xc18, _0x37c10f: 0xc84, _0x3a855c: 0xa1a, _0x980569: 0x4a2, _0x57d559: 0x9f9, _0x3a93b5: 0xa01, _0x5178ca: 0xce3, _0x2912a2: 0x8db, _0x62f427: 0xcb6, _0x4b09d6: 0x698, _0x52191a: 0x4f6, _0x1e5de5: 0x21c, _0x4e42d1: 0x2a6, _0x2dc000: 0x765, _0x29778e: 0x786, _0x18fe5e: 0xb22, _0x1d05ff: 0x293, _0x36b567: 0x392, _0x36106a: 0xd02, _0x47b025: 0x3a4, _0x40d1da: 0x3f6, _0x3dcbc1: 0x18b, _0x521a24: 0x7a7, _0x439b48: 0x76c, _0x23ab02: 0x379, _0x93f3b1: 0x82d, _0x365dc0: 0xc97, _0x433ed5: 0xac8, _0x3f134c: 0xbb2, _0x4760f4: 0xd27, _0x1564e2: 0x96f, _0x305f5a: 0x938, _0x322caa: 0x9b6, _0x17c6f5: 0x5c9, _0x2068d2: 0x7ce, _0x572187: 0x89e, _0x58def2: 0x7fc, _0x487cab: 0x12a, _0x3528d9: 0xa31, _0xe21611: 0x321, _0x1a650a: 0x69e, _0x44d60f: 0x6f9, _0x2dbec7: 0x83a, _0x7a4be: 0x22f, _0x27e9d1: 0xb64, _0x4dff51: 0x57a, _0x4a5f61: 0xbfe, _0x53c013: 0x42c, _0x44cab7: 0xb8f, _0x5ae041: 0x3f1, _0x51f706: 0x12e, _0x3c60dd: 0x800, _0x310ee0: 0x886, _0x66504a: 0x2c2, _0x11ed11: 0x631, _0xd5b892: 0x1ef, _0x16bcba: 0x2e1, _0x2b14cb: 0x5f9, _0x142196: 0xd1, _0x2d8ac9: 0x821, _0x42503e: 0xc4a, _0x1bea16: 0xad1, _0x1b8bd8: 0x7fa, _0x278f99: 0x351, _0x497c92: 0x672, _0x373b1f: 0x742, _0x4293d8: 0x790, _0x24b02a: 0x29d, _0x1d5d2f: 0x4cf, _0x5ea927: 0x8fa, _0x6a8e31: 0x25c, _0x99cfa8: 0x2ab, _0x20dee3: 0x354, _0x22cb57: 0xe8, _0x2a95e6: 0xc63, _0x535b81: 0x566, _0x5b4446: 0x6fb, _0x37634f: 0x7f8, _0x596e67: 0x1f0, _0x590a7d: 0x76a, _0x5ddb51: 0xa15, _0x1b706d: 0xab1, _0x2dbee9: 0x4b0, _0x142b17: 0x65e, _0x319061: 0x3ea, _0x5936ff: 0xb92, _0x245322: 0xcf8, _0x1a15bb: 0x9ae, _0x381bf2: 0x450, _0x2ce0dc: 0x613, _0x472413: 0xa5b, _0x3d507e: 0x665, _0x3d294c: 0x5f8, _0x4c8fb2: 0xad4, _0x348058: 0x19a, _0x55d06b: 0x7f2, _0x3a0f46: 0x6e0, _0x15df80: 0x36a, _0x27246b: 0xb7a, _0x2171c2: 0xcf0, _0x33a2a5: 0x77c, _0x10a988: 0x9b1, _0x4d7d15: 0x9ef, _0x17dfb5: 0x410, _0x7f644b: 0x23b, _0x2498d9: 0x706, _0x5218d4: 0x79f, _0xd38069: 0xa82, _0x557345: 0x9d5, _0x5c95f4: 0x728, _0x29e08f: 0xcaf, _0x24e491: 0x1bd, _0x770f7b: 0xf7, _0x261c3f: 0x500, _0x2ac706: 0x2be, _0x240a97: 0xca5, _0x1a33d5: 0x23a, _0x17f1c9: 0x883, _0xb3583f: 0x530, _0x58746a: 0x9af, _0x54ea3c: 0xa25, _0x1a3465: 0x4f1, _0x32ec86: 0xb83, _0x4da6d1: 0xc38, _0x307de0: 0xa08, _0x8325c9: 0x869, _0x410f3b: 0x9a8, _0x214340: 0x764, _0x340b35: 0xb82, _0x544dc2: 0xa3b, _0xcc8b: 0x4c1, _0x1e9e28: 0x7a4, _0x4f3905: 0x6b7, _0x1cd116: 0xc9d, _0x1879f7: 0x794, _0x553888: 0x5ea, _0x161321: 0x7cf, _0x2952f6: 0x318, _0x23f968: 0xbb5, _0x268e97: 0x7d5, _0x202c42: 0xd14, _0x175696: 0x5d3, _0x29cc23: 0x81a, _0x2d5596: 0x479, _0x381b9d: 0xa6a, _0x3d3f7f: 0x9d0, _0x37a153: 0x553, _0x5ae107: 0xc20, _0x54a7da: 0x976, _0x27f108: 0xa58, _0x42476e: 0x8a2, _0x28b33a: 0x355, _0x222c0e: 0xb26, _0x3e1d97: 0x21d, _0x31fa4c: 0x65a, _0x3a7102: 0x598, _0x2731c1: 0x643, _0x8df0ac: 0xb25, _0x5019c2: 0x734, _0x34f06a: 0xc77, _0xd17e05: 0x72f, _0x123f29: 0xc9e, _0x28fe36: 0xbc9, _0x475d45: 0x4a1, _0x3bc723: 0xafd, _0x1460b7: 0xcd9, _0x1f9e11: 0x816, _0x496005: 0x7b4, _0x4d900e: 0x27a, _0x2d878e: 0xce4, _0x3366ad: 0xcfc, _0x1b3d93: 0x9db, _0x4bad68: 0x4e8, _0x551ffe: 0x6c5, _0x2ea445: 0x5ee, _0x4ab6f3: 0x52c, _0x4a1362: 0x93b, _0x2bb629: 0x307, _0x39e499: 0x5c5, _0x36783f: 0x7e1, _0x48c1d6: 0x269, _0x3909dd: 0x50c, _0x433d6b: 0xb0c, _0x4536c6: 0x44d, _0x3e13a0: 0x356, _0xb2c9ca: 0x731, _0x9cbc78: 0x8f0, _0x4ec828: 0x5d5, _0x123606: 0xa30, _0x18adbd: 0x3ab, _0x34df41: 0x8a0, _0x585c96: 0x471, _0x446139: 0x283, _0x539377: 0xbbd, _0x2a916f: 0xc58, _0x5aa4af: 0x809, _0x541db8: 0xcb3, _0xe91fa: 0x144, _0x4a888b: 0x3c8, _0xf32b2e: 0xad3, _0x7011a4: 0x7c7, _0xe3e1ca: 0x74e, _0x33071d: 0x3d2, _0xfc8666: 0x13d, _0x15dae2: 0x95a, _0x1839ab: 0x295, _0x667f4a: 0xadd, _0x528067: 0x205, _0xdf7c03: 0x834, _0x24c058: 0x2a2, _0x5df3f7: 0x808, _0x1180e1: 0x383, _0x49f303: 0xa98, _0x477385: 0x147, _0x26ca7e: 0x8e1, _0x122fac: 0x857, _0x4b30f2: 0x76e, _0x5337f2: 0x601, _0x190db1: 0x842, _0x553ca0: 0x42d, _0xb0de11: 0xb77, _0xbff69b: 0x1dd, _0x27b693: 0x1e9, _0x75c1ff: 0x23f, _0x4264e0: 0x489, _0x3e582b: 0x3e0, _0x1cc765: 0x74c, _0x3b6b5e: 0x2aa, _0x3b7ab7: 0xa0d, _0x6c1c9: 0xbdd, _0x4e0d16: 0x557, _0x5be362: 0x178, _0x3fc58e: 0x445, _0x49d5e4: 0xfa, _0x346bee: 0x432, _0x463ac5: 0x465, _0x4fbeb6: 0x960, _0x265364: 0xd18, _0x38ab92: 0xba6, _0x804b5e: 0x7ca, _0x384768: 0x6eb, _0x2a7b4c: 0x3cb, _0x23d4ff: 0x779, _0x4c650d: 0x4ef, _0x295307: 0x3e1, _0x256fab: 0x3a2, _0x1965b7: 0x6c1, _0x34f379: 0xa36, _0x1e4a86: 0xafe, _0x39478e: 0xca2, _0x51ddc1: 0x50d, _0x21d7bf: 0x163, _0x50fa4e: 0xcd4, _0xea4fe2: 0x8ec, _0x11697f: 0x13e, _0x4ca4ba: 0x656, _0x507c78: 0xabb, _0x66478c: 0xbd8, _0x1bcb9d: 0xb07, _0x2b1c44: 0x233, _0x5ecdcb: 0xc40, _0x3cf6b1: 0xa71, _0x3f58d5: 0x203, _0x2446ce: 0x498, _0x42ba07: 0x87e, _0x987553: 0xb8e, _0x48917f: 0x1fe, _0xfd14dd: 0x369, _0x6b149e: 0x669, _0x2c6aad: 0x738, _0x4f3c81: 0x172, _0x1e00f2: 0xc65, _0x1e6056: 0x258, _0x3e064b: 0x9c8, _0x2bc29b: 0x2ec, _0x209d79: 0x726, _0x596c77: 0x415, _0x1c9a5b: 0xcd5, _0x121c01: 0x2cd, _0x2815be: 0x430, _0x4b5dc0: 0x9b5, _0x468e87: 0x74a, _0xbbb471: 0x65b, _0x12b9ca: 0x2cb, _0x270701: 0x5c6, _0x5c2a2b: 0x5ad, _0x1979ae: 0x4b5, _0x129ecb: 0x198, _0x1390a1: 0x103, _0x3cb945: 0x278, _0x6fb84d: 0x681, _0x21b45b: 0x875, _0x3ca0ef: 0x437, _0x561b4c: 0xbbb, _0x1e0ca5: 0xa0f, _0x116911: 0xa62, _0x7e2262: 0xd23, _0x195812: 0xae0, _0x2ab795: 0x26d, _0x506fe4: 0xabd, _0x411412: 0x941, _0x52dfdf: 0x441, _0x4ad772: 0xab9, _0x52ddce: 0xcae, _0x361054: 0x833, _0x402839: 0x8c6, _0x5b7335: 0xc7a, _0x48a7d1: 0x329, _0x35d5e3: 0x547, _0x1688ea: 0xca1, _0x54a1e3: 0x5cc, _0x423822: 0x608, _0x1ab14a: 0x1ec, _0xe38fed: 0x682, _0x396f6f: 0x933, _0x33e9f5: 0xad6, _0xdd1839: 0x9f6, _0x106c5c: 0x35a, _0x4b3178: 0x747, _0x24ab5a: 0x335, _0x5f1b12: 0x5eb, _0x11398d: 0x85f, _0x297951: 0x12c, _0x260aa6: 0xc0a, _0x1b2b33: 0x977, _0x490af5: 0x7a2, _0x5714df: 0x156, _0x28521b: 0x41e, _0x578e8b: 0x33d, _0x26b7c9: 0xcbf, _0xc3e2ee: 0x50b, _0x36adf2: 0x6b2, _0x3d17e9: 0xdb, _0x1b3e83: 0x47e, _0x5375fd: 0x388, _0x3688d1: 0x4c9, _0x470840: 0x9e0, _0x5f299e: 0xcdd, _0x21c875: 0xec, _0x5bfa79: 0x59b, _0x5b2136: 0xc0d, _0x1b88a7: 0x975, _0x2491c8: 0xc79, _0x4711d7: 0x4f8, _0x3f7f61: 0x26b, _0x455aad: 0xa2d, _0x39184f: 0xabc, _0x27ec73: 0xb6c, _0x42a9fe: 0x8b2, _0x1d6ff5: 0xc12, _0x36b38e: 0xbcd, _0x42871d: 0xa75, _0x4663d7: 0x914, _0x2d65bb: 0x33b, _0x35936c: 0x227, _0xeb008: 0xb3c, _0x51e2d7: 0x46c, _0x40ceb8: 0x62f, _0x3d1f81: 0x699, _0x37ba85: 0x90c, _0x1c0022: 0x5fe, _0x5c32fa: 0xc6a, _0x3fd29d: 0x7ef, _0xb062e1: 0x984, _0x4b864b: 0x1d3, _0x72226f: 0x323, _0x3fa558: 0x71d, _0x17a429: 0x277, _0xd41eb1: 0x815, _0x4fc944: 0x990, _0x19c923: 0xb2f, _0x30de2f: 0x68c, _0x15650f: 0x27f, _0x26ecba: 0x5f5, _0x5e5dac: 0x24a, _0x1c150d: 0x638, _0x2cc530: 0x1e6, _0x595462: 0x9fc, _0x4454e6: 0x14b, _0x1a1a07: 0x733, _0x15c71c: 0x33f, _0x929c41: 0x986, _0x250ddb: 0x294, _0x2c79d7: 0x7b6, _0x41708c: 0x758, _0xd42c04: 0x95d, _0x185658: 0xc2a, _0x4a31da: 0x83e, _0x508c8e: 0x2b7, _0x4ac8bf: 0x4dc, _0x33abd2: 0x9d3, _0x48837e: 0x253, _0x2040f7: 0xa10, _0x55602a: 0x18f, _0x51df2f: 0xb48, _0x4ffc51: 0x6e6, _0x1b0841: 0x222, _0x2cb577: 0x7e6, _0x14cb40: 0x514, _0x23e16c: 0x928, _0x8be400: 0x338, _0x50770d: 0x442, _0x36b7ba: 0xc50, _0x2779ee: 0xac5, _0x2614d8: 0x679, _0x271671: 0x134, _0x159ffa: 0x921, _0x3042b8: 0x942, _0x525e07: 0xb7d, _0x41e2a3: 0x313, _0x39470d: 0x8ac, _0x23fd52: 0x507, _0x3b5fc6: 0x359, _0x1f6bf4: 0x5ae, _0x17535a: 0x29f, _0x4edfa0: 0x2a4, _0x350d9c: 0x53a, _0x335d8e: 0x409, _0x5ac38f: 0x2f2, _0x20896d: 0x89d, _0x5709cf: 0xb65, _0x1a7663: 0xb8a, _0x4fb3ba: 0x305, _0x32729d: 0xe0, _0x36b56b: 0x371, _0x27ee6b: 0xbee, _0x57a2a7: 0xaea, _0x545779: 0x550, _0x36b8e2: 0x8cc, _0x52b50f: 0x17c, _0x27e2ea: 0xbbf, _0x52222f: 0x944, _0xac291c: 0x39d, _0x2d7a46: 0xb42, _0x524971: 0xa81, _0x263835: 0x5dd, _0xe64e1: 0xb88, _0xc3e80f: 0x712, _0x169580: 0x5bb, _0x154760: 0x312, _0x550506: 0xc04, _0x57f572: 0x15e, _0x273647: 0x30a, _0xd69eb3: 0x28a, _0x4c45bc: 0x98f, _0x3f0891: 0x4d3, _0x39a0c9: 0x784, _0x4af8df: 0xaf3, _0x2de661: 0x18a, _0x50d883: 0x243, _0x4e346e: 0xc1f, _0x989399: 0x8cb, _0x106342: 0xccc, _0xd45ea4: 0xcfb, _0x1844a9: 0x3aa, _0x1b6dd5: 0x936, _0xb29c41: 0x649, _0x2e6def: 0x463, _0x43e861: 0x970, _0x49ff3b: 0x931, _0x17337a: 0x30f, _0x26dae5: 0x8a6, _0x2ce691: 0x83d, _0x10f4a0: 0x544, _0x4c24: 0x95e, _0xc0cefd: 0x425, _0x2bc1ae: 0xa3f, _0x36aa81: 0x657, _0x2e1c02: 0x2b3, _0x512e4a: 0x5b0, _0xe4d585: 0x6ce, _0x585c41: 0x3ec, _0x14da8c: 0x7aa, _0x36febc: 0x8fd, _0xd5a8c4: 0x12b, _0x4895c2: 0x38b, _0x5bb07b: 0x844, _0x35a619: 0x9d6, _0x3130ba: 0xb32, _0x5aa175: 0x651, _0x31f528: 0x455, _0x8e7e87: 0x88d, _0x132ebd: 0x49f, _0x4ec2c8: 0x9c3, _0x4f73c2: 0x528, _0x44c341: 0x152, _0x89917b: 0x30b, _0x32211d: 0x85b, _0x1d5f0a: 0x759, _0x2a9e26: 0x41a, _0x2db20c: 0x31d, _0x200017: 0x32d, _0x59f41a: 0xbe0, _0xde23f1: 0x7a8, _0x323e8c: 0x3a0, _0x14bc5a: 0x560, _0x4862ab: 0x155, _0x272ae9: 0xa84, _0xfcd1d6: 0x689, _0x21bf9b: 0x619, _0x40cc14: 0xa61, _0x1e82cc: 0x255, _0x4e3562: 0x1e0, _0x34eb70: 0x663, _0x4eb5d8: 0x5ce, _0xc019a0: 0x4d6, _0x184bde: 0x45f, _0x324467: 0x899, _0x133eb7: 0x3af, _0xbe77ac: 0x877, _0x5450bf: 0x90b, _0x5ef161: 0xc90, _0x3a93d0: 0x966, _0x10c9c3: 0x683, _0x5b1a3a: 0x476, _0x25b25b: 0x2db, _0x2caede: 0x236, _0x3fd953: 0xcca, _0x15e76d: 0xd6, _0x41431f: 0x845, _0xd32e55: 0x574, _0x18f904: 0x79c, _0x3924be: 0x3e2, _0x2fcbab: 0x7de, _0xac0e54: 0x316, _0x121e4a: 0x60e, _0x5e18aa: 0x6c6, _0x45b603: 0x99c, _0xf3903a: 0x130, _0x4d2f19: 0xb4a, _0x692ef7: 0xb50, _0x2cd9e1: 0x8da, _0x2c3610: 0xa32, _0x1aad92: 0xbc7, _0x4b05b2: 0xc44, _0x22a0b0: 0x812, _0x5d2218: 0xbd5, _0x2e3322: 0xbda, _0x1c2f5f: 0x903, _0x16274e: 0xc7c, _0x29b1e7: 0x668, _0x2d2328: 0x1e3, _0x474886: 0x4aa, _0x2ee33e: 0xa3e, _0x145a3d: 0x967, _0x231e4e: 0xb1e, _0x3a895b: 0x89f, _0x273b0b: 0xb5f, _0x4a2209: 0xb30, _0x43b5b7: 0xbde, _0x157476: 0x5f1, _0xccfe10: 0x429, _0x2a5724: 0x282, _0x560c33: 0x381, _0xb1df03: 0x7dd, _0x7d8360: 0x915, _0x5a569a: 0xc8c, _0x2a6d1c: 0xc42, _0x560946: 0x353, _0x55cc8b: 0x9cc, _0x301273: 0x68a, _0x30e051: 0x3b4, _0x7c9d8e: 0x92d, _0x22a0b7: 0x771, _0x345332: 0xb6e, _0x5aa4ba: 0xd15, _0x5f1696: 0x270, _0x18a5bb: 0x26f, _0x1caa56: 0xb6a, _0x38d4d5: 0x68d, _0x1f82c6: 0xbdb, _0x7c9c25: 0x1f6, _0x1350c5: 0x4d8, _0x33b396: 0xa37, _0x11494a: 0x876, _0x3a8cc9: 0x38e, _0x259368: 0xb71, _0x641745: 0x4f9, _0x4354f1: 0xac4, _0x270393: 0xcbb, _0x4d80c8: 0x28c, _0x4c78a0: 0x9bd, _0x4f196a: 0x86b, _0x2a3391: 0x1a1, _0x4fe1ab: 0xbd4, _0x3bd6cf: 0x8a8, _0x988e5b: 0xbfc, _0xf8ba33: 0x59f, _0x1e16c5: 0xc91, _0x507eda: 0xc72, _0x69ec7c: 0x42e, _0x404e01: 0xcbc, _0xd37b60: 0xbf9, _0x1650f4: 0x8c7, _0x20bdce: 0xa7a, _0x999480: 0x8b5, _0x3818f0: 0x61c, _0x31dda5: 0x1e5, _0x506e45: 0x739, _0x311e44: 0xb36, _0x3db9cd: 0x200, _0x9c67cd: 0x342, _0x1e03ed: 0xcc9, _0x5c0a79: 0xc67, _0x42e46a: 0xa45, _0x5905a5: 0xcc0, _0xdcae63: 0x2cf, _0x281fb6: 0xb7f, _0x167f92: 0x98a, _0x1c3259: 0x927, _0x19643c: 0xaed, _0x136edc: 0x737, _0x197927: 0x3a8, _0x4f137a: 0xbcf, _0x5a66a5: 0x3d3, _0x124e89: 0x600, _0x5384f7: 0xe2, _0x366a05: 0x777, _0x40cc03: 0x7ba, _0x32b0bd: 0x981, _0x3ecfcd: 0xbc4, _0x4c64a9: 0xc09, _0x8c950e: 0x18c, _0x5807d4: 0x36b, _0x92c6db: 0xc08, _0x5a04eb: 0xa03, _0x16e8b5: 0x99b, _0x1bb5aa: 0xb12, _0x18b94e: 0xbef, _0x553b43: 0x5a0, _0x1bd28b: 0x707, _0x2ad99e: 0x169, _0x1f05a2: 0x892, _0x45554d: 0x40e, _0x253e79: 0xb2b, _0x2715e1: 0x45b, _0xed2032: 0x56a, _0x172d4b: 0x1c8, _0x3cc165: 0x2cf, _0x470237: 0x53b, _0x53b0de: 0x2e3, _0x41d2cd: 0x8f8, _0x52094a: 0xb53, _0x180674: 0x2ad, _0x1e49b6: 0x444, _0x536cf0: 0x69b, _0x1a5a90: 0x4fe, _0x19dd60: 0xaf5, _0x65737d: 0x7b2, _0x5c8de5: 0x43c, _0x17f81a: 0x969, _0x424ec0: 0x951, _0x582ff7: 0x1b3, _0x8a1e17: 0x70d, _0x3e9ce2: 0x5bd, _0x34de04: 0x1ff, _0x3d25be: 0xbce, _0x31db7e: 0x763, _0x3e11b0: 0x929, _0x1e912f: 0x4bc, _0x1881ce: 0x888, _0x301b3f: 0x982, _0x2a69f7: 0xa00, _0x18402f: 0x5a0, _0x5d3353: 0x48d, _0x723a1a: 0x387, _0x429bb8: 0x727, _0x385b26: 0x536, _0x3452ea: 0xb8c, _0xce4265: 0x96d, _0x3faaec: 0x5d8, _0xf8fb6e: 0xc8a, _0x221856: 0x997, _0x326942: 0xbd2, _0xe9b9d0: 0xc06, _0x3fe780: 0x8b8, _0x3fbf98: 0x70b, _0xd9a681: 0x173, _0xe85eff: 0xc45, _0x4785cc: 0x391, _0x150f1d: 0xd22, _0x1e8fd8: 0xc51, _0x1e2ef4: 0xc36, _0x3ea0ed: 0x280, _0x4a9e04: 0x5c3, _0x2bca52: 0x399, _0x360928: 0x472, _0x3bb667: 0xad0, _0x5b0539: 0x732, _0x1f7758: 0x16e, _0x26218a: 0x8df, _0x5da80d: 0xcb7, _0x102ef3: 0xa77, _0x2db11a: 0x959, _0x1e8e9e: 0xcfa, _0x524552: 0x417, _0x557a75: 0x6f3, _0x3cc704: 0x33a, _0x30970b: 0x70f, _0x472654: 0x6ed, _0x4a847f: 0x3c7, _0x32ce63: 0x496, _0x31cf50: 0x1cf, _0x16e283: 0x9ec, _0x487e4a: 0x238, _0x33859f: 0x648, _0x3bd082: 0x336, _0x513742: 0x2e9, _0x1781f0: 0x84b, _0x576a13: 0xd0e, _0x602b72: 0xcf4, _0x5b0c72: 0x818, _0x5cf1bf: 0x9be, _0x54adbc: 0xba5, _0x1dedba: 0x7ec, _0x353e40: 0x5d7, _0x51e686: 0x5a8, _0x2a19fb: 0xa9f, _0x11c3bc: 0xa77, _0x4483a5: 0xfb, _0x349e0e: 0x741, _0x44c618: 0x52d, _0x1320ac: 0x89c, _0x37c2e1: 0x788, _0x35a59e: 0xcc9, _0x230a54: 0x3d9, _0x59a0f0: 0x6de, _0x1ad94b: 0x9a3, _0x385660: 0x9c6, _0x10b9c5: 0x748, _0x358407: 0x160, _0x24b245: 0xe9, _0xb3b921: 0x893, _0x295ddc: 0x28d, _0x12e86c: 0xcf1, _0x3b58c6: 0x527, _0x4c9514: 0x68b, _0x1eb234: 0x3e8, _0x4dae8f: 0x372, _0x37ab7d: 0xca8, _0x43406d: 0x53f, _0x45c501: 0x782, _0x4d1060: 0x3cd, _0x28783c: 0x84a, _0x4e5e17: 0xd06, _0x47e47b: 0xa96, _0xa7544d: 0x51e, _0xc22078: 0xbb3, _0x145c2d: 0x4e3, _0x5a6553: 0x666, _0x110c95: 0x11d, _0x53013c: 0xa49, _0x30bd95: 0x1ca, _0x3589f3: 0xf2, _0x3ad970: 0x70c, _0x28b606: 0xbc0, _0x4bd25d: 0x5f4, _0x3d7678: 0x1b9, _0x10fe1e: 0x3c1, _0x19c79f: 0x5a0, _0x2a84da: 0x39c, _0x18083e: 0x832, _0x422b95: 0x39e, _0x515752: 0x937, _0x3a96c0: 0x754, _0x39cf2a: 0x595, _0x26659b: 0x1f1, _0xd65c28: 0x5a0, _0x5788da: 0x5df, _0x3a1fca: 0x285, _0x1a7293: 0x250, _0x131265: 0x70e, _0x119b37: 0xa8f, _0x5775b9: 0x5a0, _0x4f9d7f: 0x743, _0x43f5f9: 0xb2a, _0x293dd9: 0x52e, _0x4e97d8: 0x5c7, _0xbe2659: 0xcd2, _0x3f7a5a: 0x17e, _0x2c8dd4: 0xc6b, _0x5b3814: 0x943, _0x547aa7: 0x567, _0x2353f3: 0x9c2, _0x4d5eb5: 0xc19, _0x5f5a32: 0x81e, _0x3e1d2e: 0x361, _0x252b8a: 0x5a0, _0x5445cd: 0x8dc, _0xab96a8: 0x5a0, _0x446497: 0x940, _0x1ce565: 0x859, _0x42d1c3: 0x5ed, _0x347ad5: 0x29c, _0x3fc886: 0x62d, _0x54a34c: 0xd25, _0x1d9e0c: 0x286, _0x4050e6: 0x587, _0x3b9a08: 0xc61, _0x1fc283: 0x930, _0x33d636: 0x8ae, _0x5ca489: 0xa19, _0x5a6656: 0xc3a, _0x27ca79: 0x48a, _0x222de8: 0xcd0, _0x311cbc: 0x7cd, _0x556b5b: 0x6fc, _0xf4d612: 0x5af, _0x9e83fa: 0x573, _0x1b6d53: 0x5a0, _0x5a7091: 0xd26, _0x16e8ca: 0x640, _0x4223bc: 0x832, _0x2b2287: 0xc39, _0x4eba44: 0x52e, _0x5d6313: 0x538, _0x4cc97d: 0xc21, _0x8c7d11: 0x36c, _0x10ac4e: 0x5a0, _0x1a6093: 0x376, _0x5688d7: 0x1ba, _0x1b294a: 0x9e1, _0x1d9f23: 0x832, _0x1ba6aa: 0x73b, _0x493748: 0xee, _0x5ded4a: 0xc7e, _0x3698db: 0x14f, _0x28940c: 0x3bf, _0x22ea35: 0x1a8, _0x3b4781: 0x9bb, _0x30cd9a: 0xd16, _0x24e742: 0xab5, _0x31db8b: 0x86f, _0x15e8f6: 0x319, _0x34a85d: 0x5a0, _0x2fe959: 0xa1d, _0x199e39: 0x93d, _0x1be804: 0x1e4, _0x2d38c3: 0xe4, _0x2e8488: 0x78c, _0x51a83a: 0xa5d, _0x5d1d9c: 0x2a7, _0x56711f: 0x5a0, _0x1c4b8d: 0x5a0, _0x452ef8: 0x832, _0x56d8e3: 0x5a0, _0x233350: 0x19c, _0x427d1b: 0x5a9, _0x5f563d: 0x3d4, _0x591e68: 0x848, _0x48a95f: 0xbc3, _0x256a25: 0x4e1, _0x33b5c9: 0xa28, _0x4b7ff2: 0x5a0, _0x11c0c3: 0x9c5, _0x5b1bb3: 0x4c8, _0x349526: 0x5a0, _0x2a3e38: 0x426, _0x311f38: 0x5f3, _0x570c7c: 0x45c, _0x5c039c: 0x66f, _0x2abd07: 0x72e, _0x5803ec: 0xccf, _0x244320: 0xae9, _0x183ef0: 0x1f4, _0x3e5371: 0x5da, _0x1760d7: 0xbb9, _0x420be3: 0xcad, _0x129f81: 0x736, _0x5c359e: 0x5b9, _0x41ad35: 0x28e, _0x309967: 0xb0a, _0x5c3bc4: 0x33c, _0x4ffe1c: 0x8fe, _0x45419e: 0x67a, _0x381a1c: 0x5a2, _0x52538e: 0x6c4, _0x17d2b0: 0x78a, _0xa28da: 0x825, _0x14e94: 0x5a6, _0x1cf0c0: 0x1e8, _0x770d54: 0x509, _0x3aa460: 0x7c8, _0x10a44d: 0x4e5, _0x29447e: 0xd09, _0x7fe454: 0x7ac, _0x625304: 0x5a0, _0x53e65f: 0x832, _0x502b62: 0xc7f, _0x1c2ea7: 0xa18, _0x5d2679: 0x943, _0xbe846a: 0x5a0, _0x270c90: 0x6c7, _0x38f52d: 0x6fc, _0x19b423: 0x629, _0xe7dd5e: 0x3c5, _0x53ac4a: 0x2d4, _0x4a01e3: 0x5a0, _0x188930: 0xa51, _0x4816ec: 0xbaa, _0x16f1b8: 0x84c, _0x53a078: 0x1a2, _0x323170: 0x40d, _0x1a56fb: 0x482, _0x1bff9e: 0x5a0, _0x20dfaf: 0xad5, _0x26a308: 0xce5, _0x3a3abb: 0x3e6, _0x20e62c: 0x54a, _0x298625: 0x5a0, _0x3a1ef6: 0x5a0, _0x1153eb: 0x15a, _0x29e9c2: 0x556, _0x5a1ee1: 0x2a9, _0x570fda: 0x3c5, _0x3f0bdd: 0x750, _0x41d815: 0x5a0, _0x191c72: 0x9e5, _0x334fcb: 0x71a, _0x56a32e: 0x5a0, _0x5a36af: 0x78b, _0x172551: 0xc8b, _0x5c38ba: 0x666, _0x39e21e: 0xb90, _0x65dc3f: 0xcf, _0x38dd7c: 0x950, _0x445ba4: 0x279, _0x26c415: 0x37c, _0x2021ba: 0x36e, _0x5e04ba: 0x1c7, _0x13ecf6: 0x946, _0x1b04b8: 0xaa8, _0x3b443f: 0x71f, _0x49bdb4: 0x1b2, _0x1c6ccc: 0x20f, _0x23e002: 0x4ff, _0x44deed: 0x954, _0x157087: 0x767, _0x240535: 0x96c, _0x3c3267: 0x76b, _0x2070d6: 0xa9e, _0x356e64: 0x6b4, _0x3dbbd2: 0x39e, _0x48ad3c: 0xc57, _0x3333be: 0x47a, _0x53152e: 0xcad, _0x5c1074: 0x719, _0x37d812: 0x1fd, _0x32c4ea: 0x2dd, _0x582abc: 0x871, _0x469615: 0xb60, _0x50914f: 0xbad, _0x223854: 0x5a0, _0x559570: 0xb28, _0x42694f: 0x729, _0x6dfbb0: 0x207, _0x4af3a3: 0x2c5, _0x732d47: 0xb5d, _0x370071: 0x534, _0x3d828b: 0x8e5, _0x429158: 0xf6, _0xc98047: 0x5a0, _0x223fe1: 0x7f4, _0x21e52a: 0xcb9, _0x374120: 0x9e4, _0x15ba42: 0xb60, _0x5d8dc7: 0x5a0, _0x139871: 0x39b, _0x4af7a2: 0x337, _0x4b1e79: 0x8ca, _0x226bda: 0x6f2, _0x53c1b: 0x5a0, _0x5e4022: 0xd13, _0x36126f: 0x194, _0x2671f0: 0x5a0, _0x40d520: 0x2f3, _0xdbaa65: 0x60b, _0x1531fe: 0xd1c, _0x1fc983: 0x8ea, _0x4a3e70: 0xcb2, _0x48b6ac: 0xb3e, _0xacac72: 0x512, _0x540aba: 0x5a0, _0x73605a: 0x4be, _0x954d5e: 0x83b, _0x23baaa: 0x165, _0x26c052: 0x9de, _0x15eb0c: 0x34b, _0x491c8c: 0xc94, _0x18823a: 0xa50, _0xae89ea: 0xbf0, _0x2fccff: 0x881, _0x4e1c40: 0x39f, _0x1ff36d: 0x495, _0x8d0d4a: 0x82e, _0x232817: 0x5a0, _0x4e36ac: 0x750, _0x3f89d0: 0x666, _0x5ab450: 0xb49, _0x579c6d: 0xb0a, _0x3f4bc5: 0x3b5, _0x28a769: 0x7f0, _0x402b1b: 0x1b0, _0x2b71c4: 0x559, _0x516c49: 0x45d, _0x1aea16: 0x670, _0x4ceaa5: 0x5a0, _0x557687: 0x5a0, _0x33ed72: 0xb2e, _0x22b2a7: 0x9cb, _0x144dd5: 0x22e, _0x34a949: 0x658, _0x4eeab7: 0xa34, _0x5c6eab: 0x5ff, _0x254322: 0x62c, _0x266800: 0xc05, _0x5f2c7c: 0x2d7, _0x2620ff: 0x4ba, _0x1365e4: 0x46a, _0x2695fb: 0x1a2, _0x3dba47: 0xc75, _0x5012b0: 0xcdb, _0x45e9ad: 0xa48, _0x503997: 0x5a0, _0x1c26a9: 0xcec, _0x49ddbb: 0x76b, _0x2939ab: 0x196, _0x3784b8: 0x5a0, _0xf4b891: 0x8cd, _0x4d2de1: 0x1fb, _0x5ddfe3: 0x48a, _0x3adcde: 0x199, _0x1cf5bd: 0xb54, _0x56958d: 0x7f5, _0x5c81be: 0x2ba, _0x4400e3: 0x5a0, _0x1eb671: 0x5a0, _0xc07747: 0x48e, _0x3a0c46: 0x5a0, _0x107695: 0x5fb, _0x2c4cfe: 0x85c, _0xab54f6: 0x340, _0x2162c6: 0x9ce, _0x21cc2d: 0x802, _0x1a1dd3: 0x77d, _0x5eb596: 0x735, _0x1375a9: 0x35f, _0x2142ce: 0xad5, _0x44e02b: 0x5a0, _0x353db0: 0xf0, _0x1505aa: 0x182, _0xd25195: 0x5a0, _0x43fc83: 0xd05, _0x4e75c5: 0x5a0, _0x2baeec: 0xc92, _0x379027: 0x6f2, _0x48dead: 0x125, _0x48b4de: 0xb4f, _0x5f31d5: 0x5a0, _0x3374ec: 0x466, _0x3c92d0: 0x5a0, _0x3964f6: 0x4e7, _0x3403e6: 0x370, _0x51fb61: 0x5a0, _0x198715: 0x912, _0x4b2383: 0xbed, _0x220101: 0x885, _0x593593: 0x5a0, _0x3f0290: 0x5a0, _0x5f3f16: 0x5a0, _0x4baa81: 0x5a0, _0x1e9c6f: 0x532, _0x35e1c7: 0x5a0, _0x4b1cfb: 0xc80, _0x3b8adc: 0xc02, _0x15c88d: 0x542, _0x5ec923: 0xc86, _0x4d1af9: 0x5a0, _0xab8056: 0xc0f, _0x6993e7: 0x6d9, _0x58777a: 0x5a0, _0x26a73b: 0x955, _0x1d7c00: 0x4af, _0x4bf7b9: 0x5a0, _0x1e3e09: 0x5a0, _0x3d8309: 0x1b6, _0x515288: 0x92a, _0xc3769f: 0x5a0, _0x3056c7: 0x9a1, _0x3d2efa: 0x9e2, _0x35e895: 0x67e, _0x47bd19: 0xc4b, _0x13f3b3: 0x47b, _0x43d1ce: 0xa7c, _0x54c879: 0x3a6, _0x52d03d: 0x468, _0x120bca: 0xa24, _0x1595a2: 0x161, _0x3369ee: 0x5a0, _0x5b6a66: 0x40f, _0x2b8b25: 0x5a0, _0x175f72: 0x838, _0x32251a: 0x8bb, _0x2880ae: 0x5d9, _0x48c10f: 0x3f3, _0x28aab2: 0x5a0, _0x416259: 0xafb, _0x50c7ca: 0x7d2, _0x522cf8: 0x4a0, _0x3a7cda: 0x783, _0x50ae9e: 0x24b, _0x3739ed: 0x5a0, _0x21d1ec: 0x964, _0x573712: 0x5a0, _0x2eb7f6: 0x30c, _0x13d653: 0x843, _0x4e5c25: 0x43b, _0x49f362: 0x9aa, _0x11f242: 0xcfd, _0x418c88: 0x519, _0x4b2414: 0xc60, _0x1f4e67: 0x97f, _0x43d28d: 0x1eb, _0xe1438c: 0x4b8, _0x5d4516: 0x5a0, _0x5869f3: 0x935, _0x22bb61: 0xa44, _0x17410c: 0x3c2, _0x40eeda: 0x63a, _0x1ff953: 0x1d5, _0x27a7a9: 0x832, _0x46a55e: 0x34e, _0x2ba801: 0x352, _0x19f69c: 0x832, _0x1569e2: 0x52e, _0x310c03: 0xac2, _0x267a37: 0xa6c, _0x29e4fa: 0xce0, _0x4731b0: 0x961, _0x596ad2: 0x6b3, _0x5f1331: 0xb44, _0x384147: 0x8b1, _0x15a42c: 0x224, _0x1b835e: 0x676, _0x2d3221: 0x832, _0x6e0a4: 0x39e, _0x5760d0: 0x675, _0x278323: 0xa1c, _0x4249c3: 0x1fd, _0x4f7501: 0xc73, _0x41b76c: 0xb31, _0x58641e: 0xb13, _0x5be087: 0x15f, _0x3cc1c4: 0x623, _0x4c610a: 0x999, _0x1ed5a8: 0x89b, _0x3a8de4: 0x2f9, _0x549cbb: 0x65d, _0x342f19: 0xae5, _0x463a7c: 0x79b, _0x487125: 0x571, _0x37097c: 0x4ec, _0x40ca2f: 0x5a0, _0x20a2d8: 0x832, _0x41abe5: 0x7a5, _0x357981: 0xae8, _0xde5109: 0x91f, _0x6db0f8: 0x49a, _0x4f0454: 0x655, _0x36b7ca: 0x5a0, _0x26cb2f: 0x902, _0x404041: 0x5a0, _0x2333a3: 0x6cd, _0xeb9fe9: 0x580, _0x2427e7: 0xbea, _0x1cdb5c: 0x3c0, _0x59ca96: 0x831, _0x2b32c5: 0x4c0, _0x18edea: 0x347, _0xadb74: 0x565, _0x508d13: 0x6ae, _0x3d488c: 0x4b1, _0x18c781: 0xab0, _0x31fdf3: 0x470, _0x3ab450: 0x6f2, _0x10bdc9: 0xaa4, _0x3b9178: 0x725, _0x28acd8: 0x874, _0x20ddb4: 0x99e, _0x5d0390: 0x17a, _0x1c034c: 0x15c, _0x519d1c: 0xda, _0x4d81ff: 0x1a2, _0x1afecc: 0xcdf, _0x3a637f: 0xc71, _0x37e543: 0x791, _0x6193a8: 0x4eb, _0x46c8be: 0x674, _0x388652: 0x7eb, _0x46e20f: 0xcc5, _0x114e73: 0x839, _0x4d57bc: 0x614, _0x155168: 0x23d, _0x2a6d97: 0x5b1, _0x113763: 0xa7d, _0x2c219a: 0x957, _0x1c2dd5: 0x610, _0xb2a28: 0x16d, _0x475330: 0x413, _0x5b71e4: 0x3df, _0x43d095: 0x5e7, _0x3119ee: 0x458, _0x48f03b: 0x908, _0x5d7300: 0xfd, _0x4f92ca: 0x374, _0x35cd61: 0x1c6, _0x1ba7d8: 0x56d, _0x2a046f: 0x1f7, _0x5790eb: 0x1c0, _0x4ee889: 0xc80, _0x2dedf7: 0xb6b, _0x477858: 0x77a, _0x12daa6: 0x945, _0x5ad53c: 0x77a, _0x3b4c01: 0x210, _0x23adf9: 0x55d, _0x4550cc: 0x4db, _0x35967c: 0x832, _0x1ae0f1: 0x268, _0x1edd37: 0x872, _0x130474: 0x5a0, _0x3673ca: 0xa96, _0x4cadef: 0x153, _0x513034: 0xc43, _0x52f2da: 0x143, _0x5efdfa: 0x423, _0x2aca84: 0x887, _0xfbc4f4: 0xc14, _0x27a416: 0xb1a, _0x48bd4a: 0x5a0, _0x2b38e0: 0x45a, _0x3d6372: 0x1a5, _0xa54dd2: 0x1df, _0x146d87: 0x73e, _0x5110bd: 0x53e, _0x4b8719: 0xa53, _0x285c43: 0x5fd, _0x51afa9: 0xa76, _0x21c57d: 0x541, _0x2b0a54: 0x3ad, _0x50216d: 0x86d, _0x3f53b7: 0xc5a, _0x4b89d2: 0x91b, _0x217cc6: 0x7b3, _0x1dbb36: 0xc1a, _0x5d9607: 0x5a0, _0x4e9d33: 0x5a0, _0x24839e: 0x5e6, _0x3946cc: 0x6a7, _0x321bcb: 0x832, _0x713ca2: 0xc4b, _0x21b93d: 0x45e, _0x220632: 0x115, _0x5cb180: 0x5a0, _0x1f2aa7: 0x2eb, _0x1c7fe0: 0xab3, _0x3a1d2a: 0x5a0, _0x1396fb: 0x5a0, _0x275c39: 0x5a0, _0x3bfb46: 0x63f, _0x34c9ab: 0x832, _0x4f0079: 0xb09, _0x420f03: 0x9aa, _0x438f1e: 0xb41, _0xa746df: 0xb1d, _0x38de34: 0x4e5, _0x433101: 0x72d, _0x5173c3: 0x174, _0x243384: 0x5a0, _0x4af4bb: 0x7c1, _0x39e920: 0x832, _0x283dfc: 0xadb, _0x1283a6: 0x2d4, _0x352bbf: 0x4b2, _0x266443: 0x333, _0x1c6746: 0x1ab, _0x35855b: 0xb7e, _0x2daf4: 0x3c3, _0x16055e: 0xaf9, _0x31a85a: 0x521, _0x45e776: 0xce6, _0x3a08e5: 0x523, _0x399c61: 0x4a6, _0x134301: 0x625, _0x4c1262: 0x4ca, _0x4a53b3: 0x192, _0x39dd44: 0x43d, _0x24b7de: 0x325, _0xf3c24b: 0x576, _0x48dab0: 0xb89, _0x28fe81: 0x7ed, _0x5d5fac: 0x5a0, _0x4a7b8b: 0xbbe, _0x25a412: 0x457, _0x4a1d9e: 0x385, _0xd63684: 0xa59, _0x5147fe: 0xa33, _0x321fe4: 0x5a0, _0x520b81: 0x5a0, _0x5eec9d: 0x92a, _0x2650ad: 0x8a7, _0x4ee897: 0x811, _0x13ed1b: 0x806, _0x1b230c: 0x440, _0x1349f4: 0x9ab, _0x48d34a: 0x789, _0x2623c0: 0x597, _0x30be39: 0x9b4, _0x3319e5: 0x9e7, _0x242c30: 0x59e, _0x115b34: 0x5a3, _0x1f14b3: 0x25a, _0x32adad: 0x965, _0x27e4be: 0x5a0, _0x42b1ba: 0x5a0, _0xe8d042: 0xc02, _0x318557: 0x585, _0x256e94: 0xb02, _0x3270ae: 0x2ee, _0x3dc2f2: 0x6f1, _0x4070bb: 0x796, _0x4353ca: 0x5ab, _0x40a2f4: 0x5a0, _0x3162d0: 0x3ef, _0x3b8a6b: 0x591, _0x47d478: 0xce1, _0x49ba4f: 0x3d0, _0x599b15: 0x25f, _0x4abf13: 0x137, _0x58bba0: 0xcf9, _0x5d1ddb: 0x77a, _0x48cf48: 0x85a, _0x220a8e: 0x2b1, _0x1fbeff: 0x41f, _0x1405ef: 0x617, _0x3fa667: 0x8b7, _0x28065e: 0x45a, _0x148f1d: 0x5a0, _0x3f9f4f: 0x878, _0x345bf0: 0xcad, _0x298688: 0x54e, _0x95099: 0x6ac, _0x301962: 0x1be, _0x387dbc: 0x5a0, _0x3ad7c1: 0xb60, _0x120227: 0x917, _0x1b80aa: 0x5a0, _0x1ea66b: 0x67c, _0x49c12c: 0x17d, _0x47a4f9: 0x414, _0x199937: 0x636, _0x2fe9c3: 0xa88, _0x3b7fb0: 0x45c, _0x308e0e: 0x67c, _0xa27c49: 0x8af, _0xa51ad8: 0xb75, _0x57ef02: 0x364, _0x3ef6be: 0x6e1, _0x19168b: 0x781, _0x114459: 0x128, _0x49e23c: 0xba7, _0x3003dc: 0x8bc, _0x35a2f4: 0xbd0, _0x512685: 0x5a0, _0x5d2eb7: 0x5a0, _0x12976a: 0x2c3, _0x3c5da2: 0x5a0, _0x4599eb: 0x5a0, _0x1aa743: 0x671, _0x52aef4: 0x6e2, _0x43c9b0: 0x5a0, _0x46141e: 0x5a0, _0x215fef: 0x5a0, _0x3b89f2: 0x5a0, _0x51a401: 0x654, _0x4b8ac9: 0x19d, _0x27357c: 0x8d8, _0x7a8ff9: 0x5a0, _0x2ce6e8: 0x4f7, _0x122524: 0x5fc, _0x20c5e4: 0x223, _0x31ecaf: 0x3e6, _0x1323ff: 0x43f, _0x567827: 0x5a0, _0x58be9c: 0x9da, _0x48780e: 0x868, _0x2c00d5: 0x9dd, _0x4f1cf4: 0x5a0, _0x1b5bb0: 0x37e, _0x345c7d: 0x2c4, _0x3a91e8: 0x3ee, _0x12b2fe: 0x375, _0x87cf98: 0xabf, _0x2df9df: 0x308, _0x4b3e76: 0x540, _0x42325b: 0x1c3, _0x403f5f: 0x1fd, _0x428135: 0x4da, _0x70eec3: 0xa2c, _0xb0118f: 0x9b3, _0xe1fa26: 0x136, _0x42496d: 0x2f0, _0x945509: 0x94c, _0x39fb6a: 0x5a0, _0x1633cf: 0xaa7, _0x20f1ff: 0x5a0, _0x8ebe49: 0xc01, _0x316ee4: 0x96e, _0x4efc01: 0x6dc, _0x377de6: 0x43e, _0x21e93f: 0x8c0, _0x4127b3: 0xb21, _0x4e4dd0: 0x5a0, _0x3848ba: 0x4b9, _0x20c8a2: 0x287, _0x2617f5: 0xa45, _0xde62a5: 0x605 }, _0x30dfa8 = _0x30ece9; if (AnimationEditorWindow && !AnimationEditorWindow['closed']) { if ('JPYxD' !== _0x30dfa8(_0x543936._0xb79a68)) { AnimationEditorWindow[_0x30dfa8(0xb29)](); return; } else { const _0x49d0aa = { _0x4a5ff5: 0x4dd }; return _0x305ff3()[_0x30dfa8(_0x543936._0x3652df)](_0x5a3653 => { const _0x1dc1c9 = _0x30dfa8; return _0x5a3653[_0x1ea0a4] ? _0x5a3653[_0x1f3f43] : (_0x483ec3['warn']('Animation\x20' + _0x1dc1c9(_0x49d0aa._0x4a5ff5) + _0x1dc1c9(0x2a3) + ':\x20' + _0x2a4cae), null); }); } } AnimationEditorWindow = window['open']('about:blan' + 'k', '_blank', 'width=1000' + ',height=84' + '6'); if (AnimationEditorWindow) { AnimationEditorWindow['document'][_0x30dfa8(_0x543936._0xdc2407)]('\x0a\x20\x20\x20\x20\x20\x20\x20\x20<' + _0x30dfa8(_0x543936._0x332b76) + '\x20\x20\x20\x20\x20\x20\x20\x20<t' + 'itle>VFX\x20B' + 'uilder\x20Edi' + _0x30dfa8(_0x543936._0x5ed488) + '>\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20<style' + '>\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '*\x20{\x20box-si' + 'zing:\x20bord' + 'er-box;\x20ma' + _0x30dfa8(0x685) + 'adding:\x200;' + '\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20:root\x20{\x0a' + _0x30dfa8(_0x543936._0x152059) + _0x30dfa8(0xa47) + _0x30dfa8(_0x543936._0x28fccd) + _0x30dfa8(0xb47) + '-surface:\x20' + '#1f1f1f;\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x106d36) + '-2:\x20#29292' + _0x30dfa8(_0x543936._0x28bd69) + '\x20\x20\x20\x20\x20--sur' + 'face-3:\x20#4' + '94949;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20-' + '-text:\x20#e8' + 'e8e8;\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20--' + 'text-muted' + ':\x20#a9a9a9;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20--text-' + 'faint:\x20#55' + '5;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20--acc' + 'ent:\x20#ff98' + '00;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20--ac' + _0x30dfa8(0xc13) + _0x30dfa8(0x191) + _0x30dfa8(0x720) + ');\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x4844ce) + 'dow:\x200\x202px' + '\x2012px\x20rgba' + '(0,0,0,0.4' + ');\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20--sha' + 'dow-sm:\x200\x20' + '1px\x204px\x20rg' + 'ba(0,0,0,0' + '.3);\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20--r' + 'adius:\x2014p' + 'x;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20--rad' + 'ius-sm:\x208p' + _0x30dfa8(0x17f) + '\x20\x20\x20\x20\x20--mon' + 'o:\x20\x27Inter\x27' + ',\x20system-u' + 'i,\x20sans-se' + _0x30dfa8(_0x543936._0x2a3af4) + _0x30dfa8(_0x543936._0x63def0) + '\x20\x20\x20\x20body\x20{' + _0x30dfa8(0x832) + _0x30dfa8(_0x543936._0x1cefc5) + _0x30dfa8(0x61f) + _0x30dfa8(_0x543936._0x4a06ee) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20backgroun' + 'd:\x20var(--b' + 'g);\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20colo' + _0x30dfa8(_0x543936._0x3b843a) + 'ext);\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20mi' + _0x30dfa8(0xa7f) + '100vh;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20p' + 'adding:\x2020' + 'px;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20font' + '-size:\x2013p' + 'x;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20-webk' + 'it-font-sm' + _0x30dfa8(0xa55) + 'ntialiased' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '}\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + 'body::befo' + 're\x20{\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20con' + _0x30dfa8(_0x543936._0x260c2) + (_0x30dfa8(0x5a0) + _0x30dfa8(_0x543936._0x5c946a) + ':\x20fixed;\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20top:\x200;\x20l' + 'eft:\x200;\x20ri' + _0x30dfa8(0x501) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'height:\x2050' + 'vh;\x0a\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0xc37) + 'ground-col' + 'or:\x20#0d221' + '8;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20backg' + _0x30dfa8(_0x543936._0x482821) + 'e:\x20linear-' + 'gradient(1' + '35deg,\x20#06' + '1209\x2025%,\x20' + 'transparen' + 't\x2025%),\x20li' + 'near-gradi' + 'ent(225deg' + ',\x20#061209\x20' + '25%,\x20trans' + _0x30dfa8(0x27e) + _0x30dfa8(_0x543936._0x4a8d62) + 'gradient(4' + _0x30dfa8(0x2fe) + _0x30dfa8(_0x543936._0x126aa4) + _0x30dfa8(_0x543936._0x54c086) + '\x2025%),\x20lin' + 'ear-gradie' + _0x30dfa8(_0x543936._0x48e3a7) + _0x30dfa8(0x714) + _0x30dfa8(0x108) + '8\x2025%);\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'background' + '-position:' + '\x2039px\x200,\x203' + _0x30dfa8(_0x543936._0x422138) + ',\x200\x200;\x0a\x20\x20\x20' + _0x30dfa8(_0x543936._0x9a10d) + 'ackground-' + _0x30dfa8(0x49b) + '\x2039px;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20b' + 'ackground-' + 'repeat:\x20re' + 'peat;\x0a\x20\x20\x20\x20' + _0x30dfa8(0x8aa) + 'acity:\x200.2' + _0x30dfa8(0x6a0) + '\x20\x20\x20\x20\x20-webk' + 'it-mask-im' + _0x30dfa8(0x49c) + 'r-gradient' + '(to\x20bottom' + ',\x20black\x200%' + _0x30dfa8(_0x543936._0x3c0e42) + 'ent\x2030%);\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0xc5b) + 'ge:\x20linear' + _0x30dfa8(_0x543936._0x559770) + _0x30dfa8(0x8b4) + _0x30dfa8(_0x543936._0x267fa7) + _0x30dfa8(0x141) + 'nt\x2030%);\x0a\x20' + _0x30dfa8(_0x543936._0x152059) + '\x20pointer-e' + 'vents:\x20non' + 'e;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20z-ind' + _0x30dfa8(_0x543936._0x53b7bf) + '\x20\x20\x20\x20\x20}\x0a\x20\x20\x20' + _0x30dfa8(_0x543936._0x576c62) + ':-webkit-s' + 'crollbar\x20{' + _0x30dfa8(_0x543936._0x15a565) + 'x;\x20}\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20body::-' + 'webkit-scr' + 'ollbar-tra' + 'ck\x20{\x20backg' + 'round:\x20tra' + _0x30dfa8(0xc99) + '}\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x39a) + _0x30dfa8(_0x543936._0x3753fc) + 'bar-thumb\x20' + '{\x20backgrou' + _0x30dfa8(0x99f) + 'border-rad' + 'ius:\x203px;\x20' + '}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20.containe' + 'r,\x20h1,\x20.in') + (_0x30dfa8(_0x543936._0xf52c2e) + 'three-colu' + 'mn-layout\x20' + _0x30dfa8(_0x543936._0x28e6c9) + ':\x20relative' + ';\x20z-index:' + _0x30dfa8(_0x543936._0x5c690a) + '\x20\x20\x20\x20\x20.cont' + _0x30dfa8(_0x543936._0x1e558e) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'background' + ':\x20var(--su' + _0x30dfa8(_0x543936._0xb3e88e) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x702) + 'h:\x201220px;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20margin:' + _0x30dfa8(0x54b) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20border-ra' + _0x30dfa8(_0x543936._0x154565) + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20paddin' + _0x30dfa8(_0x543936._0x2eac3f) + _0x30dfa8(0x5a0) + _0x30dfa8(0x529) + 'w:\x20var(--s' + 'hadow);\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20' + _0x30dfa8(_0x543936._0x39f2dd) + _0x30dfa8(0xad5) + '\x20\x20\x20\x20text-a' + _0x30dfa8(0xb69) + 'er;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20font' + '-size:\x2015p' + 'x;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20font-' + _0x30dfa8(0x40c) + '0;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20color' + ':\x20var(--te' + 'xt);\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20let' + 'ter-spacin' + _0x30dfa8(0x92b) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20margin-' + 'bottom:\x200;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20}' + '\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x127) + _0x30dfa8(_0x543936._0x2fb79a) + '\x20\x20\x20\x20\x20font-' + 'size:\x2011px' + _0x30dfa8(0x77a) + _0x30dfa8(0x4df) + '\x20var(--tex' + 't-muted);\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20margin-b' + 'ottom:\x2014p' + 'x;\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x9e8) + _0x30dfa8(_0x543936._0x159620) + 'px;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20back' + _0x30dfa8(0x3b7) + _0x30dfa8(0x12f) + 'e);\x0a\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x968) + 'er-radius:' + '\x20var(--rad' + _0x30dfa8(_0x543936._0x9563f9) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0xb00) + 'n:\x20center;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x826) + _0x30dfa8(_0x543936._0x49df70) + '-shadow-sm' + ');\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20.three-c' + 'olumn-layo' + 'ut\x20{\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20dis' + 'play:\x20grid' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20grid-t' + 'emplate-co' + 'lumns:\x201fr' + '\x202fr\x201fr;\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20gap:\x2010p' + _0x30dfa8(_0x543936._0x4c36ce) + _0x30dfa8(_0x543936._0x2bc942) + _0x30dfa8(0x38d) + _0x30dfa8(0xad5)) + ('\x20\x20\x20\x20backgr' + _0x30dfa8(_0x543936._0xa4974e) + '--surface)' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20border' + '-radius:\x20v' + 'ar(--radiu' + _0x30dfa8(0x596) + '\x20\x20\x20\x20\x20\x20padd' + 'ing:\x2014px;' + _0x30dfa8(_0x543936._0x516966) + '\x20\x20\x20max-hei' + 'ght:\x20700px' + _0x30dfa8(_0x543936._0x19e088) + '\x20\x20\x20\x20overfl' + 'ow-y:\x20auto' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x5affbb) + 'adow:\x20var(' + _0x30dfa8(_0x543936._0x559ade) + 'm);\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20}\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20.column:' + ':-webkit-s' + _0x30dfa8(0x5be) + '\x20width:\x204p' + 'x;\x20}\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20.column' + '::-webkit-' + 'scrollbar-' + _0x30dfa8(_0x543936._0x49107e) + 'ckground:\x20' + 'transparen' + 't;\x20}\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20.column' + _0x30dfa8(0x7c9) + 'scrollbar-' + 'thumb\x20{\x20ba' + 'ckground:\x20' + _0x30dfa8(_0x543936._0x54a286) + 'er-radius:' + '\x202px;\x20}\x0a\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20.co' + _0x30dfa8(0x348) + _0x30dfa8(0x5a0) + '\x20\x20margin-b' + 'ottom:\x2012p' + _0x30dfa8(_0x543936._0x4bcb22) + _0x30dfa8(_0x543936._0x30719d) + ':\x20var(--te' + 'xt-muted);' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20font-si' + _0x30dfa8(0x988) + _0x30dfa8(0x5a0) + '\x20\x20font-wei' + _0x30dfa8(_0x543936._0x595628) + _0x30dfa8(_0x543936._0x152059) + _0x30dfa8(_0x543936._0x499a74) + 'pacing:\x200.' + '8px;\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20tex' + 't-transfor' + _0x30dfa8(0x98d) + 'se;\x0a\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x314) + '-align:\x20le' + _0x30dfa8(0x366) + '\x20\x20\x20\x20\x20\x20bord' + _0x30dfa8(_0x543936._0x1d27af) + _0x30dfa8(0x3f8) + '\x20var(--sur' + 'face-3);\x0a\x20' + _0x30dfa8(_0x543936._0x152059) + '\x20padding-b' + 'ottom:\x2010p' + _0x30dfa8(0x17f) + _0x30dfa8(0x3a9) + 'n-top:\x200;\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20}\x0a' + _0x30dfa8(_0x543936._0x5ccb9e) + _0x30dfa8(0x266) + '{\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x4df) + '\x20var(--tex' + 't-muted);\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x32c5ed) + _0x30dfa8(0xcdc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20font-weig' + _0x30dfa8(0x447) + _0x30dfa8(0x5a0) + '\x20letter-sp' + _0x30dfa8(0x461) + _0x30dfa8(0xa20) + '\x20\x20\x20\x20\x20\x20text' + _0x30dfa8(0x91e) + ':\x20uppercas' + _0x30dfa8(_0x543936._0x248a79)) + (_0x30dfa8(_0x543936._0x4613fb) + 'r-bottom:\x20' + '1px\x20solid\x20' + 'var(--surf' + _0x30dfa8(_0x543936._0x311a3c) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'padding-bo' + 'ttom:\x206px;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20margin:' + '\x200\x200\x2010px\x20' + _0x30dfa8(_0x543936._0x372e8d) + '\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20.section' + '-title\x20{\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x24c5f4) + 'r(--text-m' + 'uted);\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20f' + 'ont-size:\x20' + '10px;\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20fo' + _0x30dfa8(_0x543936._0x5a1842) + '\x20600;\x0a\x20\x20\x20\x20' + _0x30dfa8(0x5f4) + 'tter-spaci' + 'ng:\x200.8px;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20text-tr' + 'ansform:\x20u' + 'ppercase;\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20border-b' + 'ottom:\x201px' + '\x20solid\x20var' + _0x30dfa8(0x7c5) + '-3);\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20pad' + 'ding-botto' + _0x30dfa8(0xbd3) + _0x30dfa8(0x5a0) + _0x30dfa8(0xaa2) + '0\x2012px\x200;\x0a' + _0x30dfa8(0x5ed) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20.' + 'btn\x20{\x20bord' + 'er:\x20none;\x20' + 'border-rad' + 'ius:\x20var(-' + '-radius-sm' + ');\x20cursor:' + _0x30dfa8(0x41d) + _0x30dfa8(0xac7) + '\x2011px;\x20fon' + 't-weight:\x20' + '600;\x20font-' + _0x30dfa8(0x7b0) + _0x30dfa8(_0x543936._0x3806ee) + '\x20padding:\x20' + '8px\x2016px;\x20' + 'transition' + ':\x20opacity\x20' + _0x30dfa8(0x42a) + _0x30dfa8(_0x543936._0x359805) + 'n:hover\x20{\x20' + 'opacity:\x200' + '.85;\x20}\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20.btn-' + _0x30dfa8(0x265) + _0x30dfa8(_0x543936._0x4909f) + ':\x20var(--ac' + 'cent);\x20col' + 'or:\x20#fff;\x20' + '}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20.header\x20{' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20positio' + 'n:\x20relativ' + 'e;\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x50cc96) + _0x30dfa8(0x3f0) + _0x30dfa8(_0x543936._0xfefcc) + _0x30dfa8(_0x543936._0x574f5e) + _0x30dfa8(0xb56) + ':\x2015px;\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20}\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20.hea' + 'der\x20h1\x20{\x20f' + _0x30dfa8(_0x543936._0x4f7017) + '20px;\x20colo' + _0x30dfa8(0x703) + _0x30dfa8(0x2c1) + '-weight:\x206' + '00;\x20letter' + _0x30dfa8(0x427) + '-0.3px;\x20ma' + 'rgin-botto' + 'm:\x202px;\x20}\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20.h') + ('eader\x20p\x20{\x20' + 'color:\x20var' + '(--text-mu' + _0x30dfa8(0x3eb) + _0x30dfa8(0xa21) + _0x30dfa8(_0x543936._0x207ec1) + _0x30dfa8(0x841) + '\x20a\x20{\x20color' + ':\x20var(--ac' + 'cent);\x20tex' + 't-decorati' + 'on:\x20none;\x20' + '}\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '.header\x20a:' + 'hover\x20{\x20te' + 'xt-decorat' + 'ion:\x20under' + _0x30dfa8(0x772) + '\x20\x20\x20\x20\x20\x20.hea' + 'der-help-b' + _0x30dfa8(0x47c) + 'ion:\x20absol' + 'ute;\x20right' + ':\x200;\x20top:\x20' + _0x30dfa8(_0x543936._0x3ef661) + 'form:\x20tran' + 'slateY(-50' + '%);\x20}\x0a\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20.prev' + 'iew-canvas' + '-container' + '\x20{\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20backg' + 'round:\x20#11' + _0x30dfa8(0x63f) + '\x20\x20\x20\x20\x20borde' + 'r:\x201.5px\x20s' + 'olid\x20#333;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20border-' + 'radius:\x20va' + 'r(--radius' + _0x30dfa8(_0x543936._0x1178bb) + _0x30dfa8(0xb3f) + 'ay:\x20flex;\x0a' + _0x30dfa8(_0x543936._0x152059) + '\x20\x20align-it' + 'ems:\x20cente' + _0x30dfa8(0x8f3) + _0x30dfa8(_0x543936._0x53b421) + 'fy-content' + _0x30dfa8(_0x543936._0x48a854) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x1a5693) + 'h:\x20400px;\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x795) + 'ht:\x20350px;' + _0x30dfa8(_0x543936._0x516966) + '\x20\x20\x20width:\x20' + '100%;\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20as' + 'pect-ratio' + ':\x2016/9;\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'position:\x20' + 'relative;\x0a' + _0x30dfa8(0x5a0) + '\x20\x20overflow' + ':\x20hidden;\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20}\x0a' + _0x30dfa8(_0x543936._0x49944e) + 'elect\x20{\x20co' + 'lor:\x20var(-' + '-text)\x20!im' + 'portant;\x20f' + 'ont-family' + ':\x20var(--mo' + 'no)\x20!impor' + _0x30dfa8(_0x543936._0x354723) + '\x20\x20\x20\x20\x20\x20sele' + _0x30dfa8(0x5c8) + _0x30dfa8(_0x543936._0x45c0ac) + 'ar(--text)' + '\x20!importan' + _0x30dfa8(_0x543936._0x32e7a0) + 'und:\x20#2a2a' + '2a\x20!import' + 'ant;\x20}\x0a\x0a\x20\x20' + _0x30dfa8(0x16b) + 't[type=\x22te' + _0x30dfa8(0x44c) + '\x20\x20\x20\x20input[' + _0x30dfa8(0xa13) + 'er\x22],\x0a\x20\x20\x20\x20' + _0x30dfa8(0xe3) + 'type=\x22sear' + 'ch\x22],\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20select' + ':not([styl') + ('e*=\x22displa' + _0x30dfa8(_0x543936._0x457e37) + '\x20{\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x200a0c) + _0x30dfa8(_0x543936._0x5bb218) + '3434\x20!impo' + 'rtant;\x0a\x20\x20\x20' + _0x30dfa8(0xc56) + 'order:\x201.5' + 'px\x20solid\x20#' + _0x30dfa8(_0x543936._0x1a3ed1) + 'tant;\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20bo' + 'rder-radiu' + 's:\x20var(--r' + 'adius-sm)\x20' + '!important' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20color:' + '\x20var(--tex' + 't)\x20!import' + _0x30dfa8(_0x543936._0xacd97d) + '\x20\x20\x20\x20\x20\x20\x20fon' + _0x30dfa8(_0x543936._0x2568c0) + 'var(--mono' + _0x30dfa8(0xbc2) + 'nt;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20font' + '-size:\x2011p' + 'x\x20!importa' + 'nt;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20padd' + 'ing:\x205px\x209' + 'px\x20!import' + 'ant;\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20box' + _0x30dfa8(0x907) + 'nset\x200\x201px' + '\x203px\x20rgba(' + '0,0,0,0.2)' + '\x20!importan' + _0x30dfa8(_0x543936._0x5d75b4) + _0x30dfa8(_0x543936._0x9b263f) + 'ition:\x20bor' + 'der-color\x20' + '0.15s;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20}\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20input' + '[type=\x22tex' + 't\x22]:focus,' + _0x30dfa8(0x3ac) + 'nput[type=' + '\x22number\x22]:' + 'focus,\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20selec' + 't:focus\x20{\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20outline:' + '\x20none\x20!imp' + 'ortant;\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'border-col' + 'or:\x20var(--' + 'accent)\x20!i' + 'mportant;\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0xc24) + 'ow:\x20inset\x20' + '0\x201px\x203px\x20' + 'rgba(0,0,0' + _0x30dfa8(_0x543936._0x1dd3c5) + '0\x200\x203px\x20va' + 'r(--accent' + _0x30dfa8(0x525) + 'portant;\x0a\x20' + _0x30dfa8(0xa07) + _0x30dfa8(_0x543936._0x39f442) + _0x30dfa8(_0x543936._0x2dfdf9) + 'olor\x22]\x20{\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20backgroun' + _0x30dfa8(_0x543936._0x217d8d) + '\x20!importan' + 't;\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x23e) + 'r:\x201.5px\x20s' + 'olid\x20#444\x20' + '!important' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20border' + '-radius:\x20v' + 'ar(--radiu' + _0x30dfa8(0x449) + 'ortant;\x0a\x20\x20' + _0x30dfa8(_0x543936._0x426605) + 'cursor:\x20po' + 'inter;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20h' + 'eight:\x2040p' + _0x30dfa8(_0x543936._0x5be53a)) + ('\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20.field\x20{' + _0x30dfa8(0x4cd) + 'ttom:\x208px;' + _0x30dfa8(0x90f) + '\x20.field\x20la' + 'bel\x20{\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20di' + 'splay:\x20blo' + 'ck;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20marg' + 'in-bottom:' + _0x30dfa8(_0x543936._0x2867b1) + '\x20\x20\x20\x20\x20\x20\x20\x20fo' + 'nt-weight:' + '\x20500;\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20fo' + _0x30dfa8(0x3be) + '0px;\x0a\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x3faa41) + 'or:\x20var(--' + _0x30dfa8(_0x543936._0x5de6cd) + ');\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20lette' + 'r-spacing:' + '\x200.3px;\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20}\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20.fie' + 'ld\x20label[s' + _0x30dfa8(_0x543936._0x3c6cc1) + 'x\x22]\x20{\x20marg' + _0x30dfa8(_0x543936._0xa719b8) + '\x200;\x20}\x0a\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x5c5c63) + _0x30dfa8(0x95b) + 'e=\x22checkbo' + 'x\x22]\x20{\x20widt' + 'h:\x20auto;\x20c' + _0x30dfa8(_0x543936._0xe07463) + 'nter;\x20acce' + 'nt-color:\x20' + 'var(--acce' + _0x30dfa8(0x400) + '\x20\x20\x20\x20\x20.fiel' + 'd\x20input[ty' + 'pe=\x22range\x22' + ']\x20{\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20padd' + 'ing:\x200;\x20he' + 'ight:\x204px;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20accent-' + 'color:\x20var' + '(--accent)' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x4af133) + ':\x20none\x20!im' + _0x30dfa8(_0x543936._0x5e29a0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20box-shado' + 'w:\x20none\x20!i' + 'mportant;\x0a' + _0x30dfa8(0x5a0) + '\x20\x20backgrou' + 'nd:\x20transp' + _0x30dfa8(0x31a) + 'ortant;\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x14a056) + ':\x206px;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20}\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20.fiel' + 'd\x20input,\x20.' + _0x30dfa8(0x760) + _0x30dfa8(_0x543936._0x57b4f1) + '\x20\x20\x20\x20\x20\x20\x20wid' + _0x30dfa8(0x88e) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20padding:' + _0x30dfa8(0x7a1) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20border:\x20' + '1.5px\x20soli' + 'd\x20#444;\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x5e5b4c) + _0x30dfa8(_0x543936._0x3f55b7) + _0x30dfa8(_0x543936._0x25d2ae) + _0x30dfa8(0x3e6) + '\x20\x20\x20\x20\x20backg' + 'round:\x20#35' + _0x30dfa8(0x48f) + '\x20\x20\x20\x20\x20\x20\x20\x20co' + 'lor:\x20var(-' + _0x30dfa8(0x4c6) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x290dc5) + _0x30dfa8(0x1bb) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20f' + 'ont-family') + (':\x20var(--mo' + 'no);\x0a\x20\x20\x20\x20\x20' + _0x30dfa8(0x3fd) + _0x30dfa8(0x4b6) + _0x30dfa8(0x6ba) + _0x30dfa8(0x9ba) + 'select:foc' + _0x30dfa8(0x7e2) + _0x30dfa8(0x9a2) + 'line:\x20none' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20border' + '-color:\x20va' + _0x30dfa8(0xa8c) + ');\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20box-s' + 'hadow:\x200\x200' + _0x30dfa8(0x684) + '(--accent-' + 'soft);\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20}\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20.fiel' + _0x30dfa8(_0x543936._0x1d4374) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0xc78) + _0x30dfa8(_0x543936._0x440ed3) + '\x20\x20\x20\x20\x20\x20\x20\x20bo' + 'rder:\x20none' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20border' + _0x30dfa8(_0x543936._0x15b89d) + 'ar(--radiu' + _0x30dfa8(0xa63) + _0x30dfa8(0xccf) + _0x30dfa8(0x119) + 'nter;\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20fo' + 'nt-size:\x201' + '1px;\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20fon' + 't-weight:\x20' + _0x30dfa8(_0x543936._0x1e50e5) + _0x30dfa8(0xaa9) + 't-family:\x20' + 'var(--mono' + ');\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x9e8) + 'ng:\x208px;\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20transitio' + 'n:\x20opacity' + '\x200.15s;\x0a\x20\x20' + _0x30dfa8(_0x543936._0x432101) + '\x20\x20\x20\x20\x20\x20.fie' + _0x30dfa8(0x704) + _0x30dfa8(_0x543936._0x46a180) + 'acity:\x200.8' + '5;\x20}\x0a\x0a\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0xc5d616) + 'button\x20{\x20b' + 'ackground:' + _0x30dfa8(0x206) + 'ent);\x20colo' + 'r:\x20#fff;\x20}' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20.' + 'save-butto' + _0x30dfa8(_0x543936._0x2c559a) + 'background' + ':\x20#e68900;' + '\x20opacity:\x20' + '1;\x20}\x0a\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20.file-' + 'box\x20{\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20wi' + 'dth:\x20100%;' + _0x30dfa8(_0x543936._0x281dc0) + '\x20\x20\x20padding' + _0x30dfa8(0xbc5) + _0x30dfa8(0x17f) + '\x20\x20\x20\x20\x20backg' + 'round:\x20#35' + '3434;\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20bo' + 'rder:\x201.5p' + _0x30dfa8(0xb8b) + _0x30dfa8(_0x543936._0x214d03) + _0x30dfa8(0xc6e) + 'der-radius' + ':\x20var(--ra' + 'dius-sm);\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0xcac) + '\x20flex;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20a' + 'lign-items' + ':\x20center;\x0a' + _0x30dfa8(0x5a0) + '\x20\x20justify-' + 'content:\x20c' + _0x30dfa8(_0x543936._0x51d7f3)) + (_0x30dfa8(0xccf) + _0x30dfa8(_0x543936._0xe07463) + 'nter;\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20fo' + _0x30dfa8(0x3be) + '1px;\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20col' + 'or:\x20var(--' + 'text-muted' + ');\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20text-' + _0x30dfa8(0x3f0) + _0x30dfa8(0x34f) + '\x20\x20\x20\x20\x20\x20\x20min' + _0x30dfa8(0x51d) + '4px;\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20tra' + _0x30dfa8(0xb06) + 'order-colo' + 'r\x200.15s;\x0a\x20' + _0x30dfa8(_0x543936._0xc9ea53) + '\x20\x20\x20\x20\x20\x20\x20.fi' + _0x30dfa8(_0x543936._0x5a1156) + 'er\x20{\x20borde' + _0x30dfa8(_0x543936._0x5bd860) + 'ar(--accen' + 't);\x20color:' + '\x20var(--tex' + 't);\x20}\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20.file-' + _0x30dfa8(_0x543936._0x4d4d97) + 'le\x20{\x20borde' + 'r-style:\x20s' + 'olid;\x20bord' + 'er-color:\x20' + 'var(--acce' + _0x30dfa8(0x8bf) + _0x30dfa8(0x4d7) + 'cent);\x20fon' + 't-weight:\x20' + '600;\x20}\x0a\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20inpu' + _0x30dfa8(_0x543936._0x19571b) + 'le\x22]\x20{\x20dis' + 'play:\x20none' + ';\x20}\x0a\x0a\x20\x20\x20\x20\x20' + _0x30dfa8(0xc11) + 'y-modal\x20{\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0xcac) + '\x20none;\x0a\x20\x20\x20' + _0x30dfa8(0x3a1) + _0x30dfa8(_0x543936._0x532e92) + _0x30dfa8(0x6fa) + '\x20\x20\x20\x20\x20\x20\x20\x20to' + 'p:\x200;\x20left' + ':\x200;\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20wid' + _0x30dfa8(_0x543936._0xfd06e5) + '\x20height:\x201' + _0x30dfa8(0x6d4) + '\x20\x20\x20\x20\x20\x20\x20\x20ba' + 'ckground:\x20' + _0x30dfa8(0x3da) + _0x30dfa8(_0x543936._0x16bddb) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20z' + _0x30dfa8(_0x543936._0xf442fc) + '00;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20over' + 'flow-y:\x20au' + 'to;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20}\x0a\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x52d44a) + _0x30dfa8(0x7e3) + 'ive\x20{\x20disp' + _0x30dfa8(_0x543936._0x3c6d95) + ';\x20}\x0a\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20.librar' + 'y-content\x20' + '{\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20backgr' + 'ound:\x20var(' + '--surface-' + '2);\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20marg' + _0x30dfa8(_0x543936._0xfd51ae) + 'uto;\x0a\x20\x20\x20\x20\x20' + _0x30dfa8(0x69f) + 'ding:\x2020px' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20border' + '-radius:\x20v' + _0x30dfa8(_0x543936._0x1764cd) + 's);\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20max-' + _0x30dfa8(_0x543936._0x2700b4) + 'px;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20box-' + _0x30dfa8(0x919) + 'r(--shadow') + (');\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20.library' + _0x30dfa8(0x82b) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20display:' + '\x20flex;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20j' + 'ustify-con' + 'tent:\x20spac' + _0x30dfa8(_0x543936._0x471dab) + _0x30dfa8(_0x543936._0x516966) + _0x30dfa8(0x186) + _0x30dfa8(_0x543936._0x373fc7) + _0x30dfa8(_0x543936._0x15b323) + '\x20\x20\x20\x20\x20\x20marg' + 'in-bottom:' + '\x2020px;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20p' + 'adding-bot' + _0x30dfa8(0x569) + _0x30dfa8(0x832) + '\x20\x20\x20border-' + _0x30dfa8(0x322) + 'x\x20solid\x20va' + 'r(--surfac' + 'e-3);\x0a\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x54a2ef) + '\x20\x20\x20\x20.libra' + 'ry-header\x20' + 'h2\x20{\x20margi' + 'n:\x200;\x20colo' + _0x30dfa8(_0x543936._0x9fd14e) + 'ccent);\x20fo' + 'nt-size:\x201' + _0x30dfa8(0x48b) + 'weight:\x2060' + '0;\x20letter-' + _0x30dfa8(_0x543936._0x39df00) + '.5px;\x20}\x0a\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20.re' + 'move-sprit' + 'es-button\x20' + '{\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20backgr' + _0x30dfa8(0x590) + '--surface-' + '3);\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20colo' + 'r:\x20var(--t' + _0x30dfa8(0xb5a) + '\x20\x20\x20\x20\x20\x20\x20\x20bo' + 'rder:\x20none' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20paddin' + _0x30dfa8(0xc8f) + 'x;\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x23e) + 'r-radius:\x20' + 'var(--radi' + _0x30dfa8(0x4bb) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x179) + 'inter;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20f' + 'ont-size:\x20' + '11px;\x0a\x20\x20\x20\x20' + _0x30dfa8(0x905) + _0x30dfa8(_0x543936._0x56b2a1) + '\x20600;\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20fo' + 'nt-family:' + '\x20var(--mon' + _0x30dfa8(0x696) + '\x20\x20\x20\x20\x20\x20tran' + 'sition:\x20ba' + 'ckground\x200' + '.15s;\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20}\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20.remov' + 'e-sprites-' + 'button:hov' + 'er\x20{\x20backg' + _0x30dfa8(_0x543936._0x819d51) + '5;\x20}\x0a\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20.close' + _0x30dfa8(0x96b) + _0x30dfa8(0x832) + _0x30dfa8(_0x543936._0x3dc52b) + _0x30dfa8(0x7ea) + '1a;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20colo' + 'r:\x20#e05050' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x452) + _0x30dfa8(_0x543936._0x11390d) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'padding:\x207' + _0x30dfa8(0x22d) + _0x30dfa8(0x5a0)) + (_0x30dfa8(0xc1b) + 'dius:\x20var(' + '--radius-s' + _0x30dfa8(0x819) + '\x20\x20\x20\x20\x20\x20curs' + 'or:\x20pointe' + 'r;\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x635) + 'size:\x2011px' + _0x30dfa8(_0x543936._0x2a7760) + '\x20\x20\x20\x20font-w' + 'eight:\x20600' + _0x30dfa8(0x77a) + '\x20\x20\x20\x20font-f' + 'amily:\x20var' + _0x30dfa8(_0x543936._0x30bbdd) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x5bc492) + 'on:\x20backgr' + 'ound\x200.15s' + _0x30dfa8(_0x543936._0x2a7760) + '}\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x3db48e) + 'rary:hover' + '\x20{\x20backgro' + _0x30dfa8(_0x543936._0x12a9c7) + _0x30dfa8(_0x543936._0x39b1fd) + '\x20\x20\x20\x20\x20.libr' + 'ary-grid\x20{' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x102c11) + ':\x20grid;\x0a\x20\x20' + _0x30dfa8(_0x543936._0x426605) + 'grid-templ' + 'ate-column' + 's:\x20repeat(' + 'auto-fill,' + '\x20minmax(20' + '0px,\x201fr))' + _0x30dfa8(0x77a) + _0x30dfa8(0xc83) + '0px;\x0a\x20\x20\x20\x20\x20' + _0x30dfa8(0xa91) + _0x30dfa8(_0x543936._0x471b63) + '6px;\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20.libra' + _0x30dfa8(_0x543936._0x3ee4bf) + _0x30dfa8(0x5a0) + '\x20\x20backgrou' + 'nd:\x20var(--' + 'surface);\x0a' + _0x30dfa8(0x5a0) + '\x20\x20border:\x20' + '1.5px\x20soli' + 'd\x20var(--su' + 'rface-3);\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20border-r' + 'adius:\x20var' + '(--radius-' + 'sm);\x0a\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x43d866) + 'ding:\x2010px' + _0x30dfa8(0x77a) + _0x30dfa8(_0x543936._0x4e7a49) + _0x30dfa8(0x99b) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20transit' + 'ion:\x20borde' + _0x30dfa8(_0x543936._0x391a44) + _0x30dfa8(_0x543936._0x3440b2) + _0x30dfa8(_0x543936._0x3a5906) + 's;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20posit' + _0x30dfa8(0x9e9) + 'ive;\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20}\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20.librar' + _0x30dfa8(_0x543936._0x37abae) + _0x30dfa8(_0x543936._0x2e77e4) + 'r-color:\x20v' + _0x30dfa8(0xb4c) + 't);\x20backgr' + _0x30dfa8(0x590) + _0x30dfa8(_0x543936._0x316b80) + _0x30dfa8(0x854) + '\x20\x20\x20\x20\x20.libr' + 'ary-item-p' + _0x30dfa8(_0x543936._0x26829b) + _0x30dfa8(_0x543936._0x45b7e4) + '\x20width:\x2010' + '0%;\x0a\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0xb24) + _0x30dfa8(_0x543936._0x2b5e41) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20backgro' + 'und:\x20#111;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20border-') + ('radius:\x206p' + 'x;\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x6cffac) + 'n-bottom:\x20' + '8px;\x0a\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x3acf80) + 'play:\x20flex' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x6b1) + 'items:\x20cen' + 'ter;\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20jus' + _0x30dfa8(0x9f0) + 'nt:\x20center' + _0x30dfa8(_0x543936._0x1f9d7e) + '\x20\x20\x20\x20overfl' + 'ow:\x20hidden' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '}\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '.library-i' + 'tem-previe' + 'w\x20canvas\x20{' + _0x30dfa8(0xac3) + _0x30dfa8(_0x543936._0x4afc12) + 'xelated;\x20m' + _0x30dfa8(0x6d8) + '100%;\x20max-' + 'height:\x2010' + _0x30dfa8(0x475) + _0x30dfa8(_0x543936._0x3ffb6c) + 'ary-item-d' + 'elete\x20{\x0a\x20\x20' + _0x30dfa8(0x5a0) + 'position:\x20' + 'absolute;\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20top:\x206px' + _0x30dfa8(_0x543936._0x147fb1) + _0x30dfa8(_0x543936._0xcb477) + '\x20\x20\x20\x20\x20\x20widt' + 'h:\x2022px;\x20h' + 'eight:\x2022p' + _0x30dfa8(0x17f) + '\x20\x20\x20\x20\x20backg' + _0x30dfa8(0xc8d) + '1a1a;\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20bo' + _0x30dfa8(0xd1a) + 'solid\x20#555' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20border' + _0x30dfa8(0xb15) + _0x30dfa8(0xbf2) + '\x20\x20\x20\x20\x20\x20disp' + _0x30dfa8(_0x543936._0x8a785a) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20align-i' + 'tems:\x20cent' + 'er;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20just' + _0x30dfa8(0x6e3) + _0x30dfa8(0x9f5) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20cursor:' + '\x20pointer;\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20opacity:' + '\x200;\x0a\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x6c8877) + _0x30dfa8(_0x543936._0x1742ea) + _0x30dfa8(_0x543936._0xb2f58f) + _0x30dfa8(0xc33) + '\x20\x20\x20\x20\x20font-' + 'size:\x2011px' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20color:' + '\x20#e05050;\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20font-wei' + 'ght:\x20700;\x0a' + _0x30dfa8(_0x543936._0x143afa) + '\x20\x20\x20\x20\x20\x20\x20\x20.l' + _0x30dfa8(_0x543936._0x210916) + 'm:hover\x20.l' + 'ibrary-ite' + 'm-delete\x20{' + '\x20opacity:\x20' + '1;\x20}\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20.librar' + 'y-item-del' + _0x30dfa8(0x558) + '{\x20backgrou' + _0x30dfa8(0x284) + _0x30dfa8(0x1dc) + '\x20\x20\x20\x20.libra' + _0x30dfa8(_0x543936._0xad86ff) + 'me\x20{\x20color' + _0x30dfa8(_0x543936._0x239f07) + 'xt);\x20font-' + 'size:\x2011px') + (';\x20font-wei' + 'ght:\x20600;\x20' + 'text-align' + ':\x20center;\x20' + _0x30dfa8(0xcda) + _0x30dfa8(_0x543936._0x348a0a) + 'd;\x20}\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20.librar' + 'y-item-inf' + 'o\x20{\x20color:' + '\x20var(--tex' + 't-muted);\x20' + _0x30dfa8(0xac7) + _0x30dfa8(0xabe) + _0x30dfa8(_0x543936._0xde33e1) + 'enter;\x20mar' + _0x30dfa8(0x289) + 'px;\x20}\x0a\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20.libr' + _0x30dfa8(0xa95) + '{\x20text-ali' + 'gn:\x20center' + ';\x20padding:' + '\x2040px;\x20col' + 'or:\x20var(--' + 'text-faint' + ');\x20font-si' + 'ze:\x2013px;\x20' + _0x30dfa8(0x63d) + 'yle>\x0a</hea' + 'd>\x0a<body>\x0a' + '<div\x20class' + '=\x22header\x22>' + _0x30dfa8(_0x543936._0x48e16d) + _0x30dfa8(_0x543936._0x10164b) + '\x22display:\x20' + 'flex;\x20alig' + 'n-items:\x20c' + 'enter;\x20jus' + _0x30dfa8(_0x543936._0x2cd81a) + _0x30dfa8(0xafa) + ';\x20gap:\x2015p' + _0x30dfa8(_0x543936._0xcc45d4) + '\x20\x20\x20\x20\x20\x20\x20<im' + _0x30dfa8(_0x543936._0x390351) + ':image/png' + _0x30dfa8(_0x543936._0x1bf72f) + _0x30dfa8(_0x543936._0x367f98) + _0x30dfa8(0xb2d) + 'AAAOsAAAEu' + _0x30dfa8(0xa56) + 'VUAAAKOmlD' + 'Q1BzUkdCIE' + 'lFQzYxOTY2' + 'LTIuMQAASI' + 'mdU2dUU+kW' + 'Pffe9EJLiI' + _0x30dfa8(_0x543936._0x1f7e19) + _0x30dfa8(0x5e4) + 'ChhBgSsBdE' + 'VHBEEZGmCD' + 'Io4ICjIyBj' + _0x30dfa8(_0x543936._0xa0f49a) + 'KIqOPgKDYs' + 'b0XXGn2z5r' + '03b/aPb+21' + 'v3Pu/c7Z5w' + 'DQAkJE4mxU' + 'BSBLLJNG+n' + 'uz4xMS2cR+' + 'QIEMBLAH4P' + _0x30dfa8(0x5f2) + 'AIG+XHZOpL' + '83fAEC8PKa' + _0x30dfa8(0xd07) + 'bD/wdVvkQq' + 'A0DCAWCaQJ' + 'jDB0AKACAz' + 'TyZR6OMAwJ' + _0x30dfa8(0x6f6) + _0x30dfa8(0x7b8) + 'd+5lafYj5z' + _0x30dfa8(0x6b6) + _0x30dfa8(0xbae) + 'ewBgXa5cKA' + 'DAQgCgMFck' + _0x30dfa8(0xb01) + 'Y8SwSAvVbk' + 'Zgl5OQA4mk' + _0x30dfa8(_0x543936._0x31da7e) + _0x30dfa8(_0x543936._0x482f5a) + 'gZACRa6ld8' + '/ldcJlwoUx' + _0x30dfa8(0xd7) + '02RsM74529' + _0x30dfa8(0x4c4) + 'CmUy63AeP4' + 'MnFbC52VkS' + 'nngRwOeaP0' + _0x30dfa8(0x14d)) + ('yd7Fycnawc' + _0x30dfa8(0x212) + 'CYW3n9nziE' + _0x30dfa8(_0x543936._0x54638d) + 'xWXXA3AmAL' + 'BNX7T5lQAd' + 'awA0bn3RjH' + 'YCKBcAtF/4' + 'qh6WYl7SZD' + 'KJq61tXl6e' + _0x30dfa8(_0x543936._0x1a6341) + '/8z4C/ga/+' + 'Z6P43B/tYf' + 'sIU3jyTBlb' + _0x30dfa8(_0x543936._0x589aad) + _0x30dfa8(0x949) + 'n4f4Hyf+9T' + 'usIoUpQqlQ' + 'zBeyY0XCPJ' + _0x30dfa8(_0x543936._0x3f87a9) + 'MlG2mC0S/y' + _0x30dfa8(0xd8) + 'rgGA0fABmP' + 'NsQOUCE7Bf' + '+wDHoAKWtE' + _0x30dfa8(_0x543936._0x3c6b5e) + 'QbF5cXqjn+' + 'f+Ez5t878D' + 'LVEcOaLUT3' + _0x30dfa8(0x963) + _0x30dfa8(0x850) + 'WUgQmaoAuG' + 'YAbW4ADO4A' + 'ae4AtBEAbR' + _0x30dfa8(0x9b2) + 'VSyIOlsAoK' + 'oRg2wVaogl' + 'pogCZohf3Q' + 'AYfhBJyG83' + 'ARrsJtGIQR' + 'eAzj8BImEQ' + 'QhInSEgWgi' + 'eogxYok4IB' + 'xkJuKLhCCR' + 'SAKSjKQiYk' + 'SOLEVWI8VI' + 'KVKF1CFNyP' + 'fIIeQEchYZ' + 'QG4iQ8gY8j' + _0x30dfa8(_0x543936._0x1b10c9) + 'dVAT1BbloF' + '5oMBqNzkFT' + '0QXoYrQA3Y' + _0x30dfa8(_0x543936._0xf7b9f6) + 'PYGeR6+ig+' + 'hjdAIDjIqx' + _0x30dfa8(0x21b) + _0x30dfa8(_0x543936._0x7683ba) + 'HCvCyrF6rB' + 'Xrwnqxy9gg' + '9gR7gyPgGD' + _0x30dfa8(0xc93) + _0x30dfa8(0x215) + 'gNuCrcHlw7' + 'rgd3GTeEG8' + _0x30dfa8(0x873) + 'vCs+EB+PT8' + _0x30dfa8(_0x543936._0x4c322e) + _0x30dfa8(_0x543936._0x4a8e5a) + 'j+JYFAYBFM' + _0x30dfa8(0xa73) + '2whLCBsJ3Q' + _0x30dfa8(0x6aa) + 'aIRKIm0ZLo' + 'Tgwj8ogyYi' + 'GxkriXeIx4' + 'iThCfE2ikv' + 'RIDiQ/UiJJ' + 'TMonlZOaSU' + 'dJl0ijpEmy' + 'CtmY7EoOIw' + _0x30dfa8(0x3ba) + 'F/kCeYQ8SV' + _0x30dfa8(_0x543936._0x2d73f2) + 'dMoqSgWllX' + 'KKcofynEql' + _0x30dfa8(0x6fd) + 'UltYK6j3qG' + 'OkR9Q1OjWd' + 'C4tCSanLaR' + 'tpt2nHaT9p' + 'xOp5vQPemJ' + _0x30dfa8(_0x543936._0x3a1162) + 'J+j/5aiaFk' + 'oxSoJFBaoV' + _0x30dfa8(_0x543936._0x2fee40) + 'MlnZWNlLea' + '7yYuVy5QPK' + 'F5SfqJBVTF' + _0x30dfa8(_0x543936._0x2064a4)) + (_0x30dfa8(_0x543936._0x1ad6fb) + 'JU7VXDVLNU' + 'N6g2q55Vfa' + _0x30dfa8(_0x543936._0x32f1e3) + 'qBWo7VI7qT' + 'bMwBiGDC6D' + _0x30dfa8(0x652) + 'wwCUxTZiAz' + _0x30dfa8(_0x543936._0x2c3cb2) + 'xXV1Ofrh6r' + 'vlC9Wv2I+i' + _0x30dfa8(0x895) + _0x30dfa8(0xadf) + 'spOlO8pgin' + 'rJ/SOuXSlF' + _0x30dfa8(_0x543936._0xc35273) + 'RRptGlc13m' + 'qyNX01MzQ3' + _0x30dfa8(0x828) + 'loRWjlae3Q' + 'OqX1ZCpzqt' + 'tU/tSiqfun' + _0x30dfa8(_0x543936._0x4a301a) + _0x30dfa8(_0x543936._0x4bdc50) + '0NHV8deR6F' + 'TqnNR5osvS' + '9dRN1y3TPa' + 'o7psfQm6kn' + '0ivTO6b3iK' + '3O9mJnsivY' + 'PexxfW39AH' + _0x30dfa8(0x973) + _0x30dfa8(_0x543936._0x5d7670) + 'vBXUOKIccw' + _0x30dfa8(_0x543936._0x5eebec) + 'jPKNRoqVGL' + '0S1jsjHHOM' + '14m3Gv8SsT' + _0x30dfa8(_0x543936._0xbdb74a) + 'YPTTVMA00X' + 'm7aY3jGjm3' + _0x30dfa8(_0x543936._0x13f18c) + 'TjDnmGeYbz' + 'e/aIFaOFqk' + _0x30dfa8(0x344) + '0sRZbbLQes' + '8FYuVmKreq' + 'vr1jRrL+tc' + '6xbrIRuWTY' + 'hNvk2HzVNb' + 'I9tE2822vb' + 'Yf7BztMu0a' + '7G7bq9kH2e' + _0x30dfa8(0x6f8) + _0x30dfa8(_0x543936._0x409b9f) + '7Nb9qKaZ3T' + 'nk23nC6cvm' + 'P6DUeGY6jj' + 'Wsdux/dOzk' + _0x30dfa8(0xf3) + _0x30dfa8(0x24e) + _0x30dfa8(_0x543936._0x313920) + '7+LtssLlsM' + 'sbVydXmet+' + '19/crN0y3J' + _0x30dfa8(0x5bc) + '0TBj2N3Ane' + 'de5z44kz0z' + 'eebOmYMe+h' + '48j3qP+56G' + 'ngLPRs9RL3' + 'OvdK+9Xk+9' + '7byl3ge9X3' + _0x30dfa8(_0x543936._0x17c887) + _0x30dfa8(0xaa1) + _0x30dfa8(0x58d) + 'Bn6pfi1+4/' + '6O/kv8jwfg' + 'A4IDNgdcD9' + 'QJ5Ac2BY4H' + _0x30dfa8(_0x543936._0x2c27a7) + 'VHBVcF3w+x' + _0x30dfa8(0x9d7) + 'GhW0LvzDKe' + 'JZ7VEQZhgW' + _0x30dfa8(_0x543936._0x4f1c6c) + 'CP8xghARHl' + 'Ed8SDSPnJp' + 'ZG8UI2peVH' + 'PUy2jv6JLo' + '2zFmMfKY7l' + 'jl2KTYpthX' + 'cT5xpXGD8b' + 'bxy+LPJ2gl' + 'iBI6E4mJsY' + 'mNiROzfWdv' + 'nT2S5JhUmH' + 'RtjumchXPO' + 'ztWamzn3yD' + 'zlebx5B5Lx') + ('yXHJzcnveG' + 'G8et7E/MD5' + _0x30dfa8(0xaae) + _0x30dfa8(0x884) + 'dBeWCkdT3F' + 'NKUx6muqdu' + 'SR1L80grT3' + _0x30dfa8(0x63e) + 'A9Jr019lhG' + 'XszviYGZfZ' + 'lkXKSs46JF' + 'YTZ4h7snWz' + _0x30dfa8(_0x543936._0x418b35) + 'LBBa4Lti4Y' + 'lwZLG3OQnD' + _0x30dfa8(_0x543936._0x4dbd8e) + 'k5vJ18iHcm' + _0x30dfa8(_0x543936._0x59fc69) + 'O7BQdaF4Yd' + _0x30dfa8(_0x543936._0x4c8bd0) + _0x30dfa8(_0x543936._0x537202) + _0x30dfa8(_0x543936._0x4c05d7) + 'HVrmtaxuOb' + _0x30dfa8(_0x543936._0x217a60) + 'ClaMrPRfuW' + 'cVZVXGqp/y' + _0x30dfa8(_0x543936._0x365544) + 'vdVaBTsLJg' + _0x30dfa8(0x7bf) + _0x30dfa8(0xad7) + '1+HWidb1r5' + _0x30dfa8(0x3e4) + '0bliu+Ly4n' + _0x30dfa8(_0x543936._0x37dadf) + _0x30dfa8(_0x543936._0x419cd3) + 'wvcSrZsYmw' + _0x30dfa8(_0x543936._0x11ece4) + 'tKVUsXlw5v' + 'Cd3SXsYuKy' + 'p7sXXe1rPl' + '08trt1G2yb' + 'cNVoRUdFYa' + 'VW6qfFeVVn' + 'W12ru6rUa7' + 'Zn3Nq+2C7Z' + 'd2eO5ordWp' + 'La59u1O080' + 'adf117vUl9' + _0x30dfa8(_0x543936._0x2da354) + 'piG3q/5Xzb' + '1KjVWNz4fr' + 'd49+CeyD09' + 'Tc5NTc3azS' + _0x30dfa8(_0x543936._0x110fc5) + _0x30dfa8(0x8f4) + 'lq3VrXxmor' + '3gf75PsefZ' + _0x30dfa8(_0x543936._0x12bdad) + _0x30dfa8(0x2f5) + _0x30dfa8(_0x543936._0xfc0aac) + _0x30dfa8(0x406) + _0x30dfa8(0xa12) + _0x30dfa8(0xa9d) + 'lx92H9w9VH' + '1I+UHKUcLT' + 'j68djiYxPH' + 'JcefnEg9Md' + 'w9r/v2yfiT' + 'V3oievpPBZ' + '86c9rv9Mle' + 'r95jZ9zPHD' + '7revbQOc65' + 'jvNO59v7HP' + _0x30dfa8(_0x543936._0x45dc51) + 'p/72C84XOi' + _0x30dfa8(_0x543936._0x4e5190) + _0x30dfa8(0x16c) + '6fvhJ45fzV' + 'WVcHrsVcu3' + _0x30dfa8(0xce9) + 'hzczbz67lX' + 'tr8vbKO/g7' + 'RXdV7pbf07' + '5X/7P5z22D' + 'ToNHhnyG+u' + '5H3b89zB9+' + '/EvOL+9GCh' + '7QH5SP6o02' + 'PXR4eHjMb+' + 'zio9mPRh5L' + 'Hk8+KfxV9d' + 'eap2ZPf/jN' + '87e+8fjxkW' + 'fSZx9/3/Bc' + _0x30dfa8(0x99a) + '+ET9x7mfVy' + '8lXRa83Xe9' + _0x30dfa8(_0x543936._0x50d2ca) + 'Opn3jviu4r' + '35+64PwR/u') + ('fMz6+PFfA5' + 'jz/DT+dQEA' + _0x30dfa8(0x904) + _0x30dfa8(_0x543936._0x3fc7cb) + 'BAICBgIGCg' + 'IGBggKCgIG' + _0x30dfa8(0x835) + 'ERBv7++fb2' + _0x30dfa8(_0x543936._0x1adb35) + _0x30dfa8(0x2e5) + 'R/v58P7pnx' + 'wXBvDt4yge' + 'AiQcBf7IMu' + _0x30dfa8(_0x543936._0x5907f0) + 'gtrSuufhz/' + 'fz5+i0Lioh' + 'Ci8nFP7Ubi' + 'chEnRjNu7K' + 'curPiu/TkO' + 'nPkHhrTN7I' + 'ji4gAj4vDC' + 'QcCx4YCz0z' + 'HLydWe3Kfd' + 'i5dO7OiNu+' + _0x30dfa8(0x5ca) + 'eicoh4Vmdb' + 'Qe/VmKqXbP' + 'jdn5OGaMe/' + 'rqVyDSoeBt' + _0x30dfa8(_0x543936._0x17784d) + 'E2RIEdWaJo' + 'dhGM2UJaF0' + _0x30dfa8(_0x543936._0x46d1a8) + _0x30dfa8(_0x543936._0x5476a7) + _0x30dfa8(0xa0c) + _0x30dfa8(0x622) + 'gc6uburGfv' + _0x30dfa8(0x14a) + 'g6SLW/vXku' + 'PEherKisSr' + 'e7qwm+jm4v' + 'mmD9yRD7l9' + 'DdeWIjIjCN' + 'KSIt2bJUk0' + _0x30dfa8(_0x543936._0x123c6d) + 'KWJrB+IP63' + _0x30dfa8(_0x543936._0x4c5e98) + 'SzXtKua+7G' + 'eurCeu7Gfl' + 'BDK+rGgkY7' + _0x30dfa8(_0x543936._0x1e376b) + '7Kis+xefDO' + 'jsiqdsqueu' + 'rKjta5g92/' + _0x30dfa8(_0x543936._0x1e47c3) + 'J2FoZaE1s9' + 'DVI4DHlSEt' + 'aSItKOIsqK' + 'IfeqK++kKt' + 'uVJv2vLeig' + _0x30dfa8(_0x543936._0x2c8af4) + 'uWKtWULMmN' + 'KeunM9maMc' + 'qOLvauOc2S' + 'MNmdO7eEND' + 'orE/y+XJd4' + 'ROrCfu7Ggu' + '7KjunGi8Sm' + 'duPBi8qufu' + 'rKlK1qBioa' + 'AtKDDKZmCi' + 'AUArd2FhkQ' + 'A7FyFpNeEt' + _0x30dfa8(_0x543936._0x510c00) + 'HcaDG7t6GU' + 'IrCb9+G7Z2' + 'GrJ2Gi4eB6' + '9yG9aOIuOZ' + 'J9aOJtKOJu' + _0x30dfa8(0x647) + 'hsqqes+vf6' + _0x30dfa8(_0x543936._0x16dc03) + 'CqFhCrBrDa' + 'pmDqZmDq13' + 'Mc6qesqqf9' + _0x30dfa8(0x533) + _0x30dfa8(0x7ee) + 'JxDaNdC7hs' + 'Dcp3D4ZOCi' + _0x30dfa8(0xa89) + 'DK5mD6FhD3' + _0x30dfa8(_0x543936._0x41348d) + 'FLVtE4ZPDq' + 'pnE7pyFyIW' + _0x30dfa8(0x7e4) + _0x30dfa8(0x4a4) + 'CpRUDKpiDo' + _0x30dfa8(0x5c2) + 'GYpKBoFGCh' + _0x30dfa8(0x1ea)) + ('B0UuFmpGI1' + 'k5GmI+Hv76' + _0x30dfa8(0x9b9) + _0x30dfa8(0x412) + '/vr6+gICAv' + '///7JXTUoA' + _0x30dfa8(0x303) + '//////////' + '//////////' + '//////////' + '//////////' + _0x30dfa8(_0x543936._0x26a1ea) + '//////////' + '//////////' + '//////////' + '//////////' + '//////////' + '//////////' + '//////////' + '//////////' + '//////////' + '//////////' + '//////////' + _0x30dfa8(_0x543936._0x26a1ea) + '//////////' + _0x30dfa8(_0x543936._0x32f22a) + '//////////' + '//////////' + '//////////' + '//////////' + '//////////' + '//////////' + _0x30dfa8(0xcf2) + _0x30dfa8(_0x543936._0x32f22a) + _0x30dfa8(0xcf2) + '//////////' + '//////////' + '//////////' + '//////////' + _0x30dfa8(0xcf2) + '/////////w' + _0x30dfa8(_0x543936._0x519de7) + 'CXBIWXMAAA' + _0x30dfa8(_0x543936._0x1e7884) + 'mpwYAACIKU' + _0x30dfa8(_0x543936._0xb75427) + 'CXxTZfY3fp' + '57k9ybtJTS' + 'FBBp6ZK0tF' + 'xKoWlE2WRr' + '2VxwqziOC+' + '6jMuNsOuMy' + '4/zUcZwZZ3' + 'EbHbdRx5Ep' + 'joLK1rKpoG' + 'LaQikXWpqk' + 'LQ1UhaSltM' + 'm9Se59/p/z' + '3HRhFZX5ve' + _0x30dfa8(_0x543936._0x36ed39) + 'fu85z9nPeQ' + 'iF/ydXb9I3' + _0x30dfa8(0x249) + _0x30dfa8(_0x543936._0x1e40c5) + _0x30dfa8(_0x543936._0x590496) + '9G194LGrrG' + 'Fu7VAPhDw5' + 'tsmb5vQF/+' + 'Yfh/aJ2XOu' + 'XPKbfGNtY9' + _0x30dfa8(_0x543936._0x1146c) + '456UDK/z/p' + _0x30dfa8(_0x543936._0xdaa6c5) + 'n/3iFHgkOO' + _0x30dfa8(0x232) + '70ymDa//+w' + 'vnRr5W9alP' + '+5SYlQC+jA' + _0x30dfa8(0x485) + 'XPrbrq/z6s' + '531IryI3XI' + 'oP33+FtM37' + 'zTeRpXlyZH' + 'GtsD2mDekY' + _0x30dfa8(0x77f) + 'hNnwRXzavo' + _0x30dfa8(_0x543936._0x1975d1) + 'rbHh5SHc18' + _0x30dfa8(_0x543936._0x19f934) + 'i7Ye6oYNj5' + _0x30dfa8(_0x543936._0x511464) + '/ylrTHH6hQ' + 'bPHwOR1AIN' + 'SV2gWpIXOs' + '8aFKWJf889' + '//30LXn/1a' + _0x30dfa8(0x82f) + '/dlDL3I5hx' + _0x30dfa8(_0x543936._0x26ae51) + '6HpYdhnmvV') + (_0x30dfa8(0xa6f) + _0x30dfa8(_0x543936._0x2f4a25) + _0x30dfa8(_0x543936._0xe18f5a) + _0x30dfa8(0xa66) + _0x30dfa8(0x80a) + 'bF99F3+EtJ' + '5vVbeD4+3/' + 'm3rPao5QeP' + 'wRCTdmRhwb' + _0x30dfa8(0x487) + _0x30dfa8(_0x543936._0x2d1053) + _0x30dfa8(_0x543936._0x567946) + 'UqGLDO0iyM' + 'ep0JXr10lK' + '0jjT9Dczu/' + '+PYz2vOqUJ' + 'HOC2mfxZTR' + 'rvcMBYBaD6' + '4iaoAo0vDJ' + _0x30dfa8(_0x543936._0x1e5815) + 'w6Xw+hOnoG' + '6PIIrvOPYW' + 'qdYOGBVJ86' + _0x30dfa8(0x67d) + _0x30dfa8(_0x543936._0x40b5e0) + _0x30dfa8(0x798) + 'sf7st1CyLT' + 'XnHK7zIOTP' + '1QurcsGfEQ' + 'CAzELwOsiY' + '6hbfPn5sbp' + 'sS2kvf4Su6' + 'HvnjST4kMM' + 'Jqeei6OM+e' + 'RI6cA9YQpL' + _0x30dfa8(_0x543936._0x112cb3) + 'nwrBEXy49c' + 'rZ4aofvPR/' + _0x30dfa8(0x953) + _0x30dfa8(_0x543936._0x45b0b9) + _0x30dfa8(0xa78) + '9kmv3sx7mO' + _0x30dfa8(_0x543936._0x221500) + '0+7Vy7ojR0' + 'rb2cvHbL8Z' + '8SjYw9+uCl' + 'QxLXGekaZR' + 'A1FVnYeAB6' + 'ip5UZLv0uf' + 'ev+D9lD0/Y' + _0x30dfa8(0x13f) + 'uKF82fH3hp' + _0x30dfa8(_0x543936._0x4b65e9) + 'QKfl+uPxPg' + 'pfy8+e8WN/' + 'i16Y/dRORh' + _0x30dfa8(0xb87) + 'PizU1mUCMA' + 'XaOsiDE1lf' + '0wDSAVIJcz' + 'iUpNdMXlc6' + 'P/Z+gaGrJS' + _0x30dfa8(0x499) + _0x30dfa8(0x493) + 'FMUnuQ5fjG' + 'HPdVRDZkF1' + '+d6tu8fHuJ' + '9eubehwuEd' + '+JjYyltK/m' + '4y+Jcta6QD' + '8eFKa6Gpwb' + 'wQIzBolltr' + _0x30dfa8(_0x543936._0x581962) + 'tYAyPu/Fv4' + 'Avvu26QqJC' + 'GDmKBrmYEY' + 'V27iUVk1AG' + 'TwL2hJKeZd' + _0x30dfa8(0x80f) + 'd546y/JbYq' + 'AHSMgo7cSC' + 'TxrAsZGZFq' + _0x30dfa8(0xb7b) + 'LmD+e/eMIm' + '+C/zcC/91P' + _0x30dfa8(0x5f6) + '25uZ6UdWzQ' + _0x30dfa8(_0x543936._0x2a7d04) + '8abyTPBDbm' + '4m5EI1QDlY' + _0x30dfa8(0x4e2) + 'dXSH8k97K3' + 'xCpvrnw6fg' + 'xnjvJHulAG' + 'p0FaPx/bIQ' + 'S9GuQ0fHzv' + _0x30dfa8(_0x543936._0x4eb8ae) + 'XW9ty60YUN' + 'kA/gwOc+Hz' + _0x30dfa8(_0x543936._0x50aeec)) + ('Z7RMkDpB2L' + 'Jq43turDDr' + _0x30dfa8(_0x543936._0x40bda8) + _0x30dfa8(_0x543936._0x1eb2e) + _0x30dfa8(_0x543936._0x94ae2e) + _0x30dfa8(_0x543936._0x165d67) + 'fQ/TQlwsqT' + 'Q6fekl45r/' + _0x30dfa8(_0x543936._0x35af39) + _0x30dfa8(0x162) + '4MhQgOx2iC' + _0x30dfa8(0x101) + _0x30dfa8(_0x543936._0xe7eb98) + _0x30dfa8(_0x543936._0xe902fc) + 'bMcnuRDdtj' + _0x30dfa8(0xcc8) + _0x30dfa8(_0x543936._0x1131d7) + 'jOi6T5EWwX' + 'Q9wFGtiPxI' + _0x30dfa8(_0x543936._0x46b1c8) + 'rKx4/6ujyf' + '9LPPxSbOxP' + _0x30dfa8(_0x543936._0x56fce9) + 'Sep2lasqZN' + 'zezpUXZUvc' + '0V5OeLL67P' + '8lUDFPghxs' + 'ieCdWQC7Fc' + _0x30dfa8(_0x543936._0x4ea711) + '2rvDx10leT' + 'biiKbC8KDF' + _0x30dfa8(_0x543936._0x599b29) + '6JoKSOFUO3' + 'QNBbsG0KWB' + 'yWL78TWV42' + '4Wiv936HoE' + 'pv5m7qR0U1' + _0x30dfa8(0x8c4) + 'UJj792YTFy' + 'PxaPeVW2m2' + _0x30dfa8(_0x543936._0x1c216b) + '/X0WhIqz6F' + 'aywUYbdcNq' + '6znt75wUW/' + '/UQSBn96R2' + _0x30dfa8(0xa42) + _0x30dfa8(0x516) + 'dST4owwTb5' + 'TVs06b+OtW' + 'fIiOcucVud' + 'm28hayx70S' + _0x30dfa8(_0x543936._0x19116d) + _0x30dfa8(0x46b) + _0x30dfa8(_0x543936._0x5ad755) + '6ZjLgz/TDP' + '7Mdsg11A/b' + 'vriTc/0Z+9' + 'detM3373uO' + 'NsgT8Qo7Rk' + 'Hf10haCLEZ' + 'xgSkItTUIA' + '+aHSCt2R7k' + 'hwybdPSaV8' + '0H0/7LWP8z' + 't6Pw55/QJo' + 'cDbnsJcp1e' + 'hsQPmfM2OR' + 'r1dp9vGXW8' + 'eHjhO1dupU' + '5/U/l8r6P6' + 'GN2DWzcTtT' + 'H4YfX44N63' + _0x30dfa8(_0x543936._0x27c197) + _0x30dfa8(_0x543936._0x1d53e2) + '9Qg1iIqgNb' + 'AH+dSu1KA9' + 'mBcKJQ+Rr7' + _0x30dfa8(_0x543936._0x98a2c1) + '7TX7cyMX79' + 'FuW7g2UE6h' + '2iBXroNUGW' + _0x30dfa8(_0x543936._0x181510) + 'wx/8oH7hhr' + 'lr0lrU8jGB' + '8ioo80HMHA' + 'OUTf26N9ef' + _0x30dfa8(0x14e) + _0x30dfa8(_0x543936._0x3b2e33) + _0x30dfa8(0x692) + 'hBjMKYkRf3' + 'LA92lQgTTF' + 'ctuPJ4u+Is' + 'Yj1ve1Phz2' + '1/vbPV4Qcw' + 'LHzDAC6rzm' + 'zPbMddmQnt' + 'me1ZG3xjc9' + 'viYbBljX3G' + 'MSsAfTyceD' + 'uTy0jaWy47') + ('5+I/vLXM+9' + 'ylhjDWAeon' + 'AUTBFKZ9MQ' + 'YDYIoZ0vyp' + _0x30dfa8(0x2e2) + 'KRYcMyxGve' + _0x30dfa8(0x9a4) + 'ri5s8LCzv4' + 'WwK5x1hJ+I' + _0x30dfa8(_0x543936._0x301614) + 'pg2+uzeELq' + 'qy8OXPOu6q' + _0x30dfa8(0xcc4) + 'FF+LnRl7RR' + '8jsVSfdNmE' + 'h3FHPRhqmg' + _0x30dfa8(0x8b6) + 'rEnNZsN0SU' + _0x30dfa8(0xe1) + 'fGQ+oRLVkP' + 'VJwHW46l7F' + 'mLmTp/P+H8' + _0x30dfa8(_0x543936._0x1e7f9b) + '+5s991HtoN' + '3ZndkNmW3A' + _0x30dfa8(0x563) + 'jtjLm7ePMR' + _0x30dfa8(0x235) + 'dL4vt9OfnN' + '4J0JnZllv6' + 'VTdAJ/7G+f' + 'PIjpUvHG39' + 'uzCFpidzNg' + 'dPuSQSN4/l' + '53oXxbtjyV' + '2KCMq5XcOC' + 'pKs3YrfZgt' + 'HUjM5cKx2t' + '0ZSRK5yj6x' + '7+b+jXCbVV' + 'S2+W7+ATFp' + 'rfsEozMwHa' + 'cyGzvaysHT' + '26dmTjmDkX' + 'ch3cn6atNX' + '1pnRFZO67n' + _0x30dfa8(_0x543936._0x32e1e2) + 'Ad/NVoTAJA' + 'O+ytmr+s6e' + 'fjXp7x1h4t' + '+SjRlI5Dmq' + 'YRky1r//K8' + '95MIpGoQTP' + _0x30dfa8(_0x543936._0x18a00c) + 'U4PNWijU1f' + 'yVqXfxL7Y4' + 'unL+CzwcGL' + 'JhrtT7V2+/' + 'ZOn7Ae49Zt' + 'n3vcj2prFB' + 'y/e+WHjb4w' + 's32LjDh281' + 'OB3lMNvZ/W' + _0x30dfa8(0x29e) + _0x30dfa8(0xbe6) + _0x30dfa8(_0x543936._0x448dca) + _0x30dfa8(_0x543936._0x2426c7) + '/HKgDKYQ3s' + _0x30dfa8(0x2bd) + 'VQ9lfMWk3P' + _0x30dfa8(0xa52) + _0x30dfa8(0x6c2) + 'LbPduPIEYo' + _0x30dfa8(_0x543936._0x45e6fc) + 'SyHrBQfpvg' + _0x30dfa8(_0x543936._0x7fd129) + 'yn78XfYQv+' + 'GmzfPcvGr8' + '21GzFhoRp5' + '1pIRgmKoff' + 'e+DmH3GmoC' + _0x30dfa8(_0x543936._0x2a1f0e) + 'hyDwqfUZ9r' + _0x30dfa8(_0x543936._0x1a20ee) + 'bOctZ5mHe4' + 'eUOGZ/cHsg' + 'A2AvunB4mc' + _0x30dfa8(_0x543936._0x28487d) + 'WhPZE6C9DM' + _0x30dfa8(_0x543936._0x336d38) + 'Hv5Pd3rpJ1' + 'ssI/MWvJSV' + _0x30dfa8(_0x543936._0x81d104) + _0x30dfa8(0x3f9) + 'BX8buftKS4' + 'xP+yqEUNNI' + _0x30dfa8(0x60a) + 'c77XHgCdh5' + '5OG8rnqwp0' + 'IxpPmDdug2') + (_0x30dfa8(_0x543936._0xfccf29) + 'nrKEkulu8I' + 'lAcgs3p0nl' + 'fXm5vb8kZn' + 'ZcYy0W2rBj' + _0x30dfa8(0x302) + _0x30dfa8(_0x543936._0x2fc137) + _0x30dfa8(_0x543936._0x452bdc) + _0x30dfa8(_0x543936._0x11f4d2) + _0x30dfa8(0xbdc) + 'A2TmMicJXr' + 'w9f9/UHSN3' + _0x30dfa8(_0x543936._0x1ba20b) + 'FpoVAakBF5' + '0y97b+QRPi' + _0x30dfa8(_0x543936._0x38e89c) + 'IXUWQDDYBR' + 'hR5QFobIgP' + _0x30dfa8(0x2f4) + _0x30dfa8(0x773) + '4Oi+yumnAH' + 'mPQVoTaDws' + _0x30dfa8(0x211) + _0x30dfa8(_0x543936._0x333262) + 'MYxM+A2TOB' + 'ecz/qc3DR9' + '27xnbm/DME' + 'XfBu/btLn+' + _0x30dfa8(_0x543936._0x11ea60) + '+aWQshXUPo' + 'tuqRIn5fSD' + 'czBs5rRgZG' + '6aT22NFWxC' + '1Ln1m+/94X' + _0x30dfa8(0xcb0) + '3qITl/XF4+' + _0x30dfa8(_0x543936._0x29274f) + _0x30dfa8(0x579) + 'sED75MXVm9' + _0x30dfa8(0x775) + 'A/wFuQ5zDK' + 'mMqrY91+Gv' + _0x30dfa8(_0x543936._0x52bf12) + 'q+xvmC7qyG' + '3Nxq5G+AMs' + _0x30dfa8(0xbd6) + 'xXpo9/28zg' + _0x30dfa8(_0x543936._0x27c1ae) + 'kitj9bSnCy' + 'DI8832YNAO' + 'vF3rEnDTBu' + '28HbrhXtoR' + 'OKt0jfBwYe' + 'PY7uTDf7iE' + 'kjAAbJiL/w' + _0x30dfa8(_0x543936._0x16ded5) + _0x30dfa8(0x231) + 'yvllWzCBOz' + _0x30dfa8(0x2dc) + _0x30dfa8(_0x543936._0x309ee8) + 'LBiAwp2aoC' + _0x30dfa8(0x6b8) + 'M/RLfwvcoT' + 'SUxiiS9chk' + _0x30dfa8(_0x543936._0x3c03ab) + 'YEnxsK8rn+' + 'OGHmsWaPmm' + 'aMv/Oqs0nX' + _0x30dfa8(0x3c4) + _0x30dfa8(_0x543936._0x29a4c5) + _0x30dfa8(_0x543936._0x21acf1) + '4vf+wGdL6e' + 'H/bQzo3rek' + 'cV1L+0TgfI' + '9BlBGH+ZPx' + 'clFG7PXL8f' + '1e1a8jFMp+' + 'JLGgEw+/25' + _0x30dfa8(0xbd1) + _0x30dfa8(0x2c0) + 'jFzh0eIsv4' + 'F8HOKSz9Gm' + '8D32QJfdrg' + 'LkBaAZIDVk' + 'zechTwvm5h' + '3h7DxgzPLs' + _0x30dfa8(0x94e) + 'yxvv9Khs+i' + 'FuiQsymar+' + _0x30dfa8(0x4ae) + 'PUnBcFW5jY' + '4bwXUe5G/X' + _0x30dfa8(_0x543936._0x2277e3) + 'utSENB3fpC' + 'Fe7azxrL5z' + 'N1BH1Sudzr' + 'z42RwuxNq7' + 'f9YMWShwkJ' + 'pTHpg4SdRH' + 'f2kl7N3qWx') + ('7co0D9iDwG' + 'u4Y7nkZXub' + 'hp5FrBetnb' + 'FyVMqybXSW' + _0x30dfa8(0x2a1) + 'axxQ2gUQBT' + 'M20l0/xPjn' + 'pDXwxjz9HN' + 'uxfMR63k8A' + _0x30dfa8(_0x543936._0x1e9325) + _0x30dfa8(_0x543936._0x462278) + 'tM0buqBvwd' + _0x30dfa8(0x408) + _0x30dfa8(_0x543936._0x5017d8) + _0x30dfa8(0x32c) + _0x30dfa8(0x52a) + 'YBWCdrUHzS' + 'Y7GhL2w/ko' + _0x30dfa8(_0x543936._0x4f72a1) + 'tYX7oKMsm9' + 'm/IdnD6xhg' + 'iKiC+yr4qo' + 'iCDt4uJg69' + _0x30dfa8(_0x543936._0x6ede1c) + 'F9vvwCTALQ' + 'FEkPDPE44N' + _0x30dfa8(0xa41) + 'f1yJd3MheW' + 'vczA5lZe7d' + _0x30dfa8(_0x543936._0x12fd29) + '+Wc2M4kbGx' + 'b0V5+gO1S9' + 'm9EVHXfmsw' + 'fz/BiG6kqN' + 'C7fuDXefJa' + _0x30dfa8(_0x543936._0x10bd41) + _0x30dfa8(_0x543936._0x5a3ae5) + 'wBNBYgVkVU' + '3CsKVIygKK' + 'U7oNnc0u7v' + 'XFWe6rB09/' + 'Jvv4Qhf7Of' + 'RccZDZmuyX' + 'Wuq3LqM7fe' + '9aPb2xhfMx' + '42hJMjC9po' + 'zhewDHZy1F' + 'A8aUAsBdrk' + _0x30dfa8(_0x543936._0x4138d4) + _0x30dfa8(0x3de) + 'UAJ8any4FF' + _0x30dfa8(_0x543936._0x40cf0c) + 'OLmg3KSbVC' + '9IANCYjbSU' + _0x30dfa8(0xad9) + _0x30dfa8(_0x543936._0x4008a1) + 'Udps3pf1rz' + 'f0iq4Fjg/4' + 'W2nC9zMcXC' + 'SrA6rRRL6r' + 'epq+1Xv7WK' + '+B09jdmsmZ' + 'BdDGP7fJP3' + _0x30dfa8(0x8c3) + 'iK/snhvDO1' + 'QLJCxEPjUI' + 'wGsJzPZoyo' + _0x30dfa8(0x9ff) + _0x30dfa8(0x26c) + _0x30dfa8(0x395) + 'TiuAAg6fiF' + _0x30dfa8(_0x543936._0x40d0a6) + 'UCCV8nF9bP' + _0x30dfa8(0x242) + '+HBV3oLnX8' + _0x30dfa8(_0x543936._0x5ddb46) + '1WVMw/gAqs' + _0x30dfa8(0x515) + '27DOibcC3Z' + '9c/AYYL2/a' + 'Qy50jNz86h' + 'AIDQ+FAOKg' + _0x30dfa8(0xa14) + _0x30dfa8(0x229) + _0x30dfa8(0x609) + _0x30dfa8(0x380) + 'nTkLdMHg2c' + 'Fr8HPk6sQq' + 'ArpL3zjt7l' + _0x30dfa8(_0x543936._0x24d080) + 'WRYG0QgP4x' + 'uYn37rvb68' + '6fCxKToLNW' + _0x30dfa8(_0x543936._0x23e6df) + 'AAWZBIUxk0' + '9pEEoLpVHx' + 'sjfk5BGH7J' + 'DWjKwbKGah' + _0x30dfa8(_0x543936._0x216b8f) + _0x30dfa8(_0x543936._0x529cc3)) + ('/3Np6gW5nO' + '5VC0BUZGUA' + 'qIxQG0FR+q' + _0x30dfa8(0x170) + _0x30dfa8(_0x543936._0x546f70) + _0x30dfa8(0x4e0) + 'm1Hmh0yW8y' + 'hj9hGi3XjX' + 'suZP9OlB02' + 'anD8r8uVW5' + _0x30dfa8(_0x543936._0x59ecdf) + 'igtPe154ZY' + 'OH04unZpQC' + 'I/m3T5WIWH' + 'oJ8FJoq7gl' + _0x30dfa8(_0x543936._0x4da78a) + 't8Ny083fg+' + _0x30dfa8(_0x543936._0x2b62e3) + 'm154eWOJQw' + 'AF3A4xgQ3A' + '50DJVADAOB' + _0x30dfa8(_0x543936._0x37c10f) + 'wCOxfVzOgu' + '8tnDy0am+s' + 'qP2FLPRpkF' + 'erIddc5kdm' + '9Xubb23cuu' + 'Ui+qOfzMnF' + '++AHsDS1GT' + _0x30dfa8(0x6a3) + 'T7oZNNyvIe' + _0x30dfa8(0xb79) + '1Nh/baCBph' + _0x30dfa8(0xbe5) + 'y9Hi78TDve' + 'N3WtMPr1qy' + _0x30dfa8(0x7ff) + 'zKUAhFscSW' + _0x30dfa8(_0x543936._0x3a855c) + 'iNfSUbiqjS' + _0x30dfa8(0x7ad) + 'qbP+VfvbJY' + 'bMqfZTHiUC' + 'zIlAihQtlP' + _0x30dfa8(0x787) + _0x30dfa8(0x357) + '+xAqLa/O96' + '/76Adv3X8T' + 'atm00DAwuS' + 'OwVT1iP0Kt' + 'Pah6UMMGMs' + 'CeFkrrgPab' + '91u+C9ajw9' + _0x30dfa8(0xb40) + '5fjbo5yxO1' + 'WvQ2wsUEBE' + 'eKhZixoApF' + _0x30dfa8(_0x543936._0x980569) + '7Fx8PqGO85' + '37RDukTO49' + 'eKdmAUd1rs' + 'MIriV2761X' + 'jBw6bctB5U' + '/M88/TnfvK' + 'oLoM2jOry2' + 'yrj/523t7G' + 'aBDjEwB63Y' + '3hht4eBoPP' + 'bUZ7Apjx1J' + 'XKqfcNNiW+' + _0x30dfa8(_0x543936._0x57d559) + '8oKmApCren' + 'X+fgEILClE' + 'xjAchFelED' + 'I7AkI00Vke' + 'FHiK0F0Fgg' + 'cQ0KKW0AUH' + 'naGn++21Y6' + _0x30dfa8(0x58f) + 'wAjCfnOp/t' + _0x30dfa8(0xa67) + 'bNbyqvLgOo' + 'Yl830Xd/fd' + _0x30dfa8(_0x543936._0x3a93b5) + 'j0yy/CO7Jx' + 'XRtWUYqieQ' + _0x30dfa8(0x505) + 'sWtHx7rNHI' + _0x30dfa8(0x744) + 's8z113YVkM' + _0x30dfa8(_0x543936._0x5178ca) + 'AAObcxm31D' + 'lSNCI2SLIK' + 'HMQl4HlQKh' + _0x30dfa8(_0x543936._0x2912a2) + 'pSfr724J1j' + _0x30dfa8(_0x543936._0x62f427) + 'Ccz5rotC1j' + '195qdvqcWd' + _0x30dfa8(0xc54)) + (_0x30dfa8(_0x543936._0x4b09d6) + 'YtNDoSGkZu' + 'Cn+OKtZIPg' + 'cDxejwoNEY' + _0x30dfa8(0x570) + _0x30dfa8(_0x543936._0x52191a) + _0x30dfa8(_0x543936._0x1e5de5) + _0x30dfa8(0xbf5) + 'mKECRVJAgB' + _0x30dfa8(_0x543936._0x4e42d1) + _0x30dfa8(_0x543936._0x2dc000) + 'IhnhXRCwpQ' + 'Igo+ocalLF' + 'ry0LndT7YX' + 'PfdslEUscm' + _0x30dfa8(_0x543936._0x29778e) + 'e1ec/2BGk1' + 'OaS5xZCDGx' + 'qiFrVsHU2U' + 'OmEB3SEKqe' + _0x30dfa8(0xbd7) + _0x30dfa8(_0x543936._0x18fe5e) + _0x30dfa8(0xcd7) + 'RvjTWpfNwK' + _0x30dfa8(_0x543936._0x1d05ff) + '307jcq99VV' + _0x30dfa8(_0x543936._0x36b567) + 'UFaekDRZaE' + 'PtGsSKCqIi' + 'O+hEJapApI' + 'irArNrFBuH' + '6atf3Dm7tf' + 'YPElfztGVZ' + 'ny8furfh+9' + '+pMZ057ZBP' + 'uQpBiuYGSt' + 'TqrSF7iejf' + _0x30dfa8(0x9ca) + 'L7yzPD2qgR' + '201DxoDqba' + 'IVgcwH27HF' + 'KLvzXWo2/v' + _0x30dfa8(_0x543936._0x36106a) + 'JYd0XvGG4J' + 'iIIks2SqIo' + 'uoZiRFdCig' + 'gCgqigRipS' + 'gIDLd5r0AF' + _0x30dfa8(0xa2a) + _0x30dfa8(_0x543936._0x47b025) + _0x30dfa8(_0x543936._0x40d1da) + _0x30dfa8(0x5c0) + _0x30dfa8(_0x543936._0x3dcbc1) + 'evlalfqK6u' + _0x30dfa8(_0x543936._0x521a24) + _0x30dfa8(0x7b9) + 'Q4dMluKv8i' + 'O0NB6CITvY' + 'u4K8XS3GzM' + _0x30dfa8(_0x543936._0x439b48) + 'fiUjRnyGDI' + 'vsyEQsuXKd' + 'cGFZTADZwU' + _0x30dfa8(_0x543936._0x23ab02) + 'BoyliKCaKC' + 'Vtiuni1Xq8' + 'KMqhDS2pQm' + 'PFDtLc/lF7' + '6gUkPhvay4' + _0x30dfa8(0xbc1) + _0x30dfa8(0x419) + 'Vl1WWQtBIp' + _0x30dfa8(_0x543936._0x93f3b1) + _0x30dfa8(_0x543936._0x365dc0) + 'Xvn9Vat2hY' + '6gGLZDV9ss' + 'PzOIYXjocP' + 'EIy7el66Ku' + _0x30dfa8(0x916) + 'tuRCQUfWN4' + 'RwAxSQg1R+' + 'NEF4CIhFdA' + 'TEBVFCBazN' + 'zUsm59dHHj' + 'TTPf7ZDXr2' + _0x30dfa8(0x30e) + _0x30dfa8(0x184) + '0tvQc20aym' + 'QbUUfsgqd0' + 'DZJzOvBP7d' + 'MmTglUw8FZ' + 'DM6pXxrZHQ' + _0x30dfa8(_0x543936._0x433ed5) + 'l5mk99hdgh' + 'FZM6qdCssR' + 'QAHx7zx9JV' + '8G2xrvzeKO' + _0x30dfa8(0xa2f) + '0CJ1rY/m11' + 'bFcI+KkGPR') + ('9moySiEFRE' + _0x30dfa8(0x83f) + '5uZNaz79p2' + 'f772/cC8tg' + _0x30dfa8(0x8eb) + '/bfLVTAaA6' + _0x30dfa8(0x456) + _0x30dfa8(_0x543936._0x3f134c) + 'F5bjKGvxgR' + _0x30dfa8(_0x543936._0x4760f4) + 'gcvKyqoXV+' + 'HPysqrFyxQ' + 'rM1H4xoGiw' + _0x30dfa8(_0x543936._0x1564e2) + 'vSuND0Kw2G' + '7X7HxQSzUd' + _0x30dfa8(0x4a9) + '/bemdl+7Qp' + _0x30dfa8(0x1cc) + 'cYCKBcsf0B' + _0x30dfa8(_0x543936._0x305f5a) + 'hrDPcxSiGm' + _0x30dfa8(_0x543936._0x322caa) + 'VJfHPUGxXp' + 'pBBsozpGwV' + _0x30dfa8(_0x543936._0x17c6f5) + _0x30dfa8(_0x543936._0x2068d2) + 'XK9E4E5i/L' + _0x30dfa8(_0x543936._0x572187) + 'G+/1zBfFaf' + '4+kZayrm0P' + 'ZMJpkYaQFg' + '05yrtky+9y' + 'aW96BwQfbn' + _0x30dfa8(_0x543936._0x58def2) + '0+A90dCNo1' + _0x30dfa8(0x1e1) + _0x30dfa8(0xd0d) + '837TZnV4aS' + 'Xbl2C96oZH' + 'p+Sr4F5+db' + _0x30dfa8(0x3ff) + 'FXAPqyaib5' + 'z2+0OjOVLo' + _0x30dfa8(_0x543936._0x487cab) + 'uSmsLdhxdl' + _0x30dfa8(_0x543936._0x3528d9) + 'B+W4d14oOZ' + 'P3/mfdI8rw' + _0x30dfa8(_0x543936._0xe21611) + _0x30dfa8(0x882) + _0x30dfa8(0x3bd) + 'f8jP+f5/12' + 'e+VgwYfOK/' + 'eO+Jq96qoR' + _0x30dfa8(0x4bf) + '9L3fdk77/N' + 'thXbjFNHls' + 'FgccbfFtff' + 'XO0hXMLLJq' + 'zu4L5usU3H' + _0x30dfa8(_0x543936._0x1a650a) + 'yQ7Eqoiqa9' + 'eEx51vQe9w' + 'KF0eRbY2/h' + _0x30dfa8(_0x543936._0x44d60f) + 'o2bOmlQrgE' + _0x30dfa8(0xccb) + 'es8+B0ATvq' + _0x30dfa8(_0x543936._0x2dbec7) + 'axoNBxY1lg' + 'Mw2jK9UwYb' + '5/7uxluQsC' + _0x30dfa8(_0x543936._0x7a4be) + 'OcSExSJoIq' + 'Y1Q14H33rj' + 'QfO33K/tb7' + 'Q7sywxnsRy' + 'c6fCc7BIIa' + 'IiUq6wiyOC' + _0x30dfa8(0x6a8) + 'KIkgISIx8Z' + _0x30dfa8(0x3fe) + 'm1zff6V/BW' + 'oDRxYyml1L' + 'pij2Nsytro' + _0x30dfa8(_0x543936._0x27e9d1) + 'fdhvC2neCD' + 'pnKgtCwrKw' + 'tQIrVn3bZo' + _0x30dfa8(_0x543936._0x4dff51) + 'gvVTFt69zU' + _0x30dfa8(_0x543936._0x4a5f61) + '0Oz41cejSo' + 'd2qQGjOZIN' + 'gM9mbrkXd5' + 'jFZ/K6xb5z' + '7rKFFERaHk' + 'srIX7/rXoS' + _0x30dfa8(0x56b)) + ('DkCrHZ/jYF' + _0x30dfa8(0x1f2) + 'bumQ89zeFT' + 'zpx9m3KLU+' + '/SjMvD8ad8' + 'ki+Gg85nhx' + 'MX30ddo8Fr' + 'N4GNdFHw4y' + _0x30dfa8(_0x543936._0x53c013) + '37XkTeZT9D' + _0x30dfa8(0x37f) + _0x30dfa8(_0x543936._0x44cab7) + 'qfRdc817Kc' + 'OD0Ds0zoPd' + 'HrRHnR88Pc' + 'h5/UY83GtO' + 'nT6PY3a8Kk' + 'zYuW5XeHp4' + 'NapYbf0rF5' + 'bUmMZruwMZ' + 'rp0aOnfKef' + 'qufS3mTUnc' + 'uKTXrQnOPW' + 'ERuGdV4ZY5' + 'C2kMXLWiwp' + 'Hmgx8dHncN' + 'yWNOTTUALW' + 'fsWsXDiou2' + _0x30dfa8(0x31f) + _0x30dfa8(0xa4d) + '/9M7svQVin' + 'Fxaqq9wQUf' + '71TiPfYgb+' + 'zYIbbjRNM3' + 'oOv5q1JyiW' + 'HlC1AZK7vK' + '9i+4CkSFRu' + '+6sW0ngbwC' + 'PsPy7kazu1' + 'FUTDvl9e1V' + _0x30dfa8(0xbf8) + '+naP+i9C97' + '9o7cuJqcJ9' + 'b5VDJJz59z' + 'TWrt83l8fl' + 'VVAaoYAlWM' + 'hk6yYeuUFW' + _0x30dfa8(0xcb5) + _0x30dfa8(_0x543936._0x5ae041) + _0x30dfa8(_0x543936._0x51f706) + 'wJHfFa67zl' + '4kmoZj0qor' + _0x30dfa8(0x54f) + '+SrtH0X5hR' + 't6CmUUSIkp' + 'YVz99VWgmg' + 'uEIrdu1zaK' + 'W7SmpjDzzd' + _0x30dfa8(_0x543936._0x3c60dd) + 'dFSk9N074/' + 'Hxn39M3X5u' + 'qCVFciq8DT' + '6GNdwwsX5D' + _0x30dfa8(_0x543936._0x310ee0) + '2nzr9Bmf39' + 'ZIGMGZSC6r' + _0x30dfa8(_0x543936._0x66504a) + 'O9Z4oLbtLv' + 'De5Qj2KQGL' + 'RAFg3eeGCw' + '1fQN6JpH4h' + _0x30dfa8(_0x543936._0x11ed11) + _0x30dfa8(0x6b0) + 'QR58T/DPl5' + 'sGOfTp/q+o' + '1/04Zo5ZYX' + _0x30dfa8(0xc30) + 'qaJhYVvMtg' + _0x30dfa8(0x769) + _0x30dfa8(_0x543936._0xd5b892) + '9Y+FRiBVUF' + _0x30dfa8(0x7be) + 'dzvgvOdN+b' + 'hhGVSA8nKH' + 'hY4sthAIDQ' + 'MYeWPhFeW/' + 'd00Sh8RH5K' + _0x30dfa8(0x6e5) + _0x30dfa8(0x513) + 'NagDLTUFVE' + 'WSwpdri7Dj' + 'k1K8DBHwHs' + _0x30dfa8(_0x543936._0x16bcba) + _0x30dfa8(_0x543936._0x2b14cb) + _0x30dfa8(0x201) + _0x30dfa8(0x694) + _0x30dfa8(_0x543936._0x142196) + _0x30dfa8(0x241) + _0x30dfa8(0xaca) + _0x30dfa8(0x3e9)) + (_0x30dfa8(0x626) + 'JtnNuzTXpO' + _0x30dfa8(0x18e) + 'SGVqycXvRX' + _0x30dfa8(_0x543936._0x2d8ac9) + _0x30dfa8(0xd0a) + 'uWQx2rki05' + 'KNUNtAF01T' + _0x30dfa8(0x6a1) + 'ETv1ePfxSW' + _0x30dfa8(0x5ba) + '9GU0IIOfYB' + _0x30dfa8(_0x543936._0x42503e) + _0x30dfa8(0x2c7) + _0x30dfa8(0x77e) + 'adWQ1QBQVl' + 'ZQxtVvnWKb' + 'cTqELZDPil' + 'rLqcLLJZPy' + 'EUtQ7AQ3hd' + _0x30dfa8(0x922) + 'cDD/82pU77' + 'dj1meXLqBY' + 'samD2ELo2E' + 'hiA/Xr/bCy' + '5p5zRvRc12' + _0x30dfa8(_0x543936._0x1bea16) + '3vwF8/FIl4' + 'AlCgEbAsXw' + 'lwzhcAzLJg' + 'b6H0feeRnF' + _0x30dfa8(_0x543936._0x1b8bd8) + 'pZHM9ulmmo' + _0x30dfa8(0x22b) + 'DpToHy1scr' + 'LIKZRVL15Z' + 'VtCu3+n6y7' + 'LeIVSItFlg' + _0x30dfa8(_0x543936._0x278f99) + _0x30dfa8(_0x543936._0x497c92) + _0x30dfa8(0xa8d) + 'rOBvWyCT5t' + 'AoZARRBrCf' + 'rktVCQJ/fc' + _0x30dfa8(_0x543936._0x373b1f) + 'pX4QmA9drv' + 'fW5IJFSzLA' + 'iDQBXtzYor' + _0x30dfa8(0x22a) + 'XW1DjH/fDN' + 'iEFcwl/05W' + 'eNpgpwKujy' + 'C7WmhdecW/' + _0x30dfa8(_0x543936._0x4293d8) + 'OQGLLs6+Ww' + _0x30dfa8(0xd20) + '4l5anZnp5M' + 'XLo//WBJW/' + _0x30dfa8(0x297) + 'ufLil6SRyZ' + _0x30dfa8(_0x543936._0x24b02a) + _0x30dfa8(_0x543936._0x1d5d2f) + 'njB1fZinEU' + 'GDm3573rI5' + _0x30dfa8(_0x543936._0x5ea927) + 'e2mdlG1Kjw' + 'ZZEIRQRCQK' + 'u4YuiDvXuf' + 'Pa87XFtbW7' + _0x30dfa8(0x8e7) + 'yzQD7e/Hbv' + 'LpdQr4REFU' + _0x30dfa8(_0x543936._0x6a8e31) + '8qr6+trLq9' + 'mlZVQVk5vF' + 'hVlXXbmpnd' + _0x30dfa8(0xad2) + 'J5WRU0AQ9W' + _0x30dfa8(0x478) + '7bH52Xr7/m' + _0x30dfa8(0x8a9) + '3fEuv+1I+e' + 'XJeZwbzRRs' + 'AAiyyBQIt1' + 'QbtsftGSej' + 'Blxxs4c3Cd' + 'gTJBUObbRa' + _0x30dfa8(_0x543936._0x99cfa8) + 'wqrJUy5wu9' + '3uxedVwfZw' + _0x30dfa8(0x9ea) + _0x30dfa8(0x8a5) + _0x30dfa8(0x989) + 'nhn4fzvVU0' + 's6y8HLVs9a' + '3l5eubN2y9' + 'qKolC5VOOe' + 'a5qgub7rxs' + _0x30dfa8(0x645) + 'KCxIU2W15/') + ('eX9OaHut9d' + 'vW1IZN8xat' + '/eRGh1kpYT' + 'EyaC0oapBq' + 'MTLsghr8Vl' + 'Xmq9i5aZvt' + '0Wup4eyxTw' + _0x30dfa8(0x5e3) + 'O6/elqNr+X' + '1/rZnfx+38' + 'ypROvDwFsq' + _0x30dfa8(_0x543936._0x20dee3) + 'VVRKiqh6L6' + 'a3PLd46qLZ' + '66EcA+Coaa' + 'vLoI08f/5H' + _0x30dfa8(0xae3) + 'iu4tZtHX7f' + 'UohM6h5cZj' + 'nxAVh2/Yld' + _0x30dfa8(0x691) + _0x30dfa8(_0x543936._0x22cb57) + '8LYsMRcdFF' + _0x30dfa8(0xca9) + 'B99MO8Qiqg' + 'ZQ5frePeNW' + _0x30dfa8(_0x543936._0x2a95e6) + 'WJ9TwLzCii' + 'auKo5m/z9A' + '7RJ68AoIs+' + 'f3dXHFzo9c' + _0x30dfa8(_0x543936._0x535b81) + _0x30dfa8(0x19e) + 'oIRcvYMCuq' + 'yzatn462Ii' + 'lL+Dywed1H' + 'mRc9Sh9+51' + _0x30dfa8(_0x543936._0x5b4446) + '2elYt4AUJ6' + 'IqBlSQJMCQ' + 'S6NYK1LRCa' + _0x30dfa8(0x792) + 'VCkoja76eF' + _0x30dfa8(0x66e) + 'J8Iic1NRvC' + _0x30dfa8(0x492) + 'i3TH3J8/cO' + 'Q5z0IKkKQ9' + 'yRFSJ8tynU' + 'rq6Lhd+o9+' + _0x30dfa8(0x5f7) + 'nMzF9AzUP/' + _0x30dfa8(0x891) + _0x30dfa8(0xcab) + _0x30dfa8(_0x543936._0x37634f) + 'GcLax5lj8+' + _0x30dfa8(0xb7c) + 'n7EDeurGq7' + 'VChgkooXAH' + 'bR+Y/rvqs0' + 'LaJtqnA51v' + 'a0Nz380Pet' + '88ymomiBDD' + '5REpVGEBtl' + 'cEOd1xTjLF' + 'NvfA4WAV2s' + '6lopE95U8A' + 'KoZpFOOC+8' + '8sNqOhbKqw' + 'BzdNVlZQBz' + 'NnG68owPZX' + 'E1ukAFc+a/' + 'tCBislRcsu' + '+sYZ3d9UHq' + '7RBXsGguEX' + 'VQ0YKyejWT' + 'rGKUVMEF8U' + _0x30dfa8(0x331) + '6Cyu+WMk6d' + 'UFSy4QcvS9' + _0x30dfa8(0x4c2) + 'BinFz2ecQS' + 'B4CJK7z+N7' + 'V7lnGXD5ll' + 'aqCiqmK81e' + 'sC2A3cD++7' + '+f2mcbStCm' + 'V1O96I6moY' + 'M3fbzG6aBV' + 'CNSbGyzDay' + _0x30dfa8(0x3cf) + _0x30dfa8(0x104) + 'qgsYw+/LZw' + 'hoQY1r3Ujx' + 'kQwiC6bRWt' + '4yd9mypkj3' + '9sKHz5saXz' + 'h77EQT7zSi' + 'NVBrhBdBqX' + 'CIqiwClfjM') + ('vPOnt3+wyf' + 'rqJ3s0FyB/' + 'yyqmvECLmq' + _0x30dfa8(_0x543936._0x596e67) + '0uoy9NKrmD' + 'Sid265aN/+' + _0x30dfa8(0x98c) + 'Y9G1wHj1el' + '3wHr+b9ZmE' + 'Fwl+ITRUIS' + _0x30dfa8(_0x543936._0x590a7d) + _0x30dfa8(0x219) + '2qK8Ky53X7' + 'BJnDpv9s9i' + 'E2OfA1D8tV' + 'aQMfzNPkQW' + _0x30dfa8(0xab4) + _0x30dfa8(0xc41) + _0x30dfa8(_0x543936._0x5ddb51) + 'oReIsVFF5/' + 'Z3jTM1wh6h' + 'fKXHSoBidx' + '6G0kGwqMEF' + 'sjWTj2TVho' + '+eNZw9prvT' + 'xuKY4YAUIQ' + 'AWFDKz7e5f' + _0x30dfa8(_0x543936._0x1b706d) + _0x30dfa8(0x483) + 'f8RXu84Nxn' + '3g21GPl3uV' + _0x30dfa8(0xa23) + 'H2LyqZIXXH' + 'Kppo2evPke' + _0x30dfa8(_0x543936._0x2dbee9) + 'BAVVXTkmVd' + 'o6+s9KxbXc' + 'WC/ixFV1ad' + _0x30dfa8(0x5cf) + _0x30dfa8(0x925) + _0x30dfa8(0x8b3) + 'b1fLg1a/Hn' + 'bl9foYAXc+' + 'asxmXTB/6d' + 'mMqR0W6sZF' + 'kOh0o4/7Ls' + _0x30dfa8(0x7c2) + _0x30dfa8(0x637) + 'SE5FwDsm8h' + _0x30dfa8(0x531) + _0x30dfa8(0xc46) + '2M4vj5wEXA' + 'oke5m9/+cC' + _0x30dfa8(_0x543936._0x142b17) + 'GUrSdI1ugs' + 'UYMMbI+Vbb' + 'k+1/PHtYfy' + 'W0F9SKHiwU' + 'aFQUqMUaCA' + 'KA5uuzOkV+' + 'xECTKCERRe' + _0x30dfa8(0x856) + 'UBVEggkd5H' + _0x30dfa8(0x592) + 'qStZpCLxge' + _0x30dfa8(_0x543936._0x319061) + _0x30dfa8(0xb76) + 'IIgFFPsPCT' + 'l0a+4rzosl' + 'YxV66q2jl7' + '7pqZz0Fbb1' + 'mZUYJO6ai/' + 'wFnDmlfRPo' + 'cISiuaQ1jG' + 'gxIGBFCBNu' + 'Rczid2MSpa' + 'BflTcFpWb7' + 'guHjXipriL' + _0x30dfa8(_0x543936._0x5936ff) + _0x30dfa8(0x9dc) + _0x30dfa8(_0x543936._0x245322) + 'Z6RVS8oiKr' + 'LhnUJoyqWj' + '3cXTOgaQ3X' + _0x30dfa8(0xc4c) + 'ApW6Zu8DEf' + 'Hq2cbNiw4e' + _0x30dfa8(_0x543936._0x1a15bb) + 'OcyAaDTSx3' + 'jhImgcB7xb' + 'FBVRrFQgWx' + 'TAp6hc86a5' + 'Dl0QAUpkgj' + 'ypuBSf4gYF' + 'hZqM5ocIPs' + '3rdVV665D5' + 'ZUoX3bZqDB' + 'AFKvCT6xIG' + 'plwDUf6Oo+' + '9ta9zcBsjF') + ('UH0rwK3Vc+' + '7muRCLM6LU' + _0x30dfa8(_0x543936._0x381bf2) + 'tL+GU4bOIb' + 'FJHKoqIo2c' + 'xAZLoDRLgU' + _0x30dfa8(0x446) + 'oFFEl0md5N' + _0x30dfa8(0x6a5) + 'TFBwqRxQrR' + _0x30dfa8(0x85d) + _0x30dfa8(_0x543936._0x2ce0dc) + 'WMLskji5tL' + 'hiInVDrarK' + 'lBJFGL+X/X' + _0x30dfa8(_0x543936._0x472413) + 'bFKGvizLTL' + _0x30dfa8(_0x543936._0x3d507e) + '2MTeUAZzl7' + '0Az5wNrHm3' + 'rljxs97KmQ' + 'v8uN0kcBk5' + 'KdQdjBW5J+' + 'ETUJFihhoB' + _0x30dfa8(0xb9f) + 'SDApcoKTK4' + 'WLYdZNlVon' + 'iM7J5AZFF0' + '5UGVykONpP' + 'hUGaKWrNoG' + _0x30dfa8(_0x543936._0x3d294c) + 'TkGGgglUKN' + 'PJG/L/PAKm' + 'yYZYvpVSdF' + 'wuKzKoxF7S' + 'svPxtYm7sW' + _0x30dfa8(_0x543936._0x4c8fb2) + '4YjcXGQ52I' + _0x30dfa8(_0x543936._0x348058) + '1rM0HTKN4A' + _0x30dfa8(0x411) + 'Y1b100h+4C' + 'uRbNBZBBdI' + 'OEtU2yTxRd' + _0x30dfa8(0xae4) + _0x30dfa8(_0x543936._0x55d06b) + 'ohIIu8ehqK' + 'OyIFPwuFwS' + _0x30dfa8(_0x543936._0x3a0f46) + _0x30dfa8(_0x543936._0x15df80) + 'oifQQpbvzi' + '3JSNgyUl1G' + '89CnPgtYYW' + _0x30dfa8(0xae6) + _0x30dfa8(0x62a) + _0x30dfa8(_0x543936._0x27246b) + 'EGWATcCBqD' + 'QKikihoFbK' + _0x30dfa8(0x751) + 'aoAC+jtALL' + _0x30dfa8(_0x543936._0x2171c2) + _0x30dfa8(0xa65) + 'OInAX3cQWS' + 'CqqAIojVSF' + _0x30dfa8(0x517) + '2sQVgipe7S' + 'GlnRlOvfWz' + _0x30dfa8(_0x543936._0x33a2a5) + _0x30dfa8(0x2e6) + _0x30dfa8(_0x543936._0x10a988) + 'ZljJ1/p0PU' + _0x30dfa8(0x860) + 'qmNx2Saa7y' + _0x30dfa8(_0x543936._0x4d7d15) + 'WrKriTy/fn' + 'cc3A2srAkN' + _0x30dfa8(_0x543936._0x17dfb5) + '4o4Pa40L+V' + _0x30dfa8(_0x543936._0x7f644b) + 'WsYFQWK4Rb' + _0x30dfa8(_0x543936._0x2498d9) + 'WvQ1SI1+Gq' + 'Q4GmEEHhnL' + 'JkozWSjUZM' + _0x30dfa8(_0x543936._0x5218d4) + _0x30dfa8(0xa8e) + _0x30dfa8(0x3b3) + 'UFHt0pvHzT' + 'WaArACSX3v' + 'jYfSvbq3K/' + _0x30dfa8(0x424) + 'zf0FpXzO2M' + 'jxfkYmf5Od' + '6JotujuqBA' + _0x30dfa8(_0x543936._0xd38069) + _0x30dfa8(_0x543936._0x557345) + 'Sq+2VgGvqB' + _0x30dfa8(0x64b) + _0x30dfa8(_0x543936._0x5c95f4) + '/gYtELQXC4') + ('JZ/gEGXwCn' + 'UyoSDSZEn2' + '1EgyrQHTpH' + 'nvbdtY2FZF' + '0d6vrr4Vqp' + 'zz+ZkE22qr' + 'UceS6ONnTe' + _0x30dfa8(_0x543936._0x29e08f) + '/pX7/5E7HR' + '7e/ulvP1yx' + 'ft34Ohq/ru' + '3KH8V2Q4NI' + 'ZQV8DSD5Cl' + _0x30dfa8(0x1f8) + '7aLIIIsikS' + 'VFpIriUKBW' + 'hCXEKVPJB+' + 'LEWWoLrfNR' + 'qpIi8Hkqna' + _0x30dfa8(0x105) + 'aaRHBkmS3T' + 'UAStyyNDyk' + _0x30dfa8(_0x543936._0x24e491) + 'lAeRbwW4gD' + '241Q91C684' + _0x30dfa8(_0x543936._0x770f7b) + _0x30dfa8(0x53d) + _0x30dfa8(0x1fa) + 'kVjX6Et5Pz' + _0x30dfa8(_0x543936._0x261c3f) + _0x30dfa8(0x1db) + 'l3FIxH5BJG' + 'IFSv1F+6pi' + 'BT+5zIwwRK' + _0x30dfa8(_0x543936._0x2ac706) + 'qakURgkQ0C' + 'glSHVr6rjp' + _0x30dfa8(_0x543936._0x240a97) + 'CjWlENt9l2' + '3ciFnlrG6N' + '7Vin7/aLPr' + _0x30dfa8(0xb45) + _0x30dfa8(_0x543936._0x1a33d5) + 'ylcxd7m/3X' + 'L5oxLfzqL2' + 'yuktzLxn9Q' + 'vv3jv3Tl6A' + 'JuUwVkEMZT' + '+uRTXCutUw' + _0x30dfa8(_0x543936._0x17f1c9) + 'E2EVa8vdtS' + 'AJ+F6BciDV' + _0x30dfa8(0x7d8) + 'GQRVa5SJU6' + 'LxWJWIuh7Y' + 'hHljwUamqg' + 'poZIzpU1Wk' + 'EV+uysgA2e' + 'a0uHw1ntZe' + '0AjUfg3DNB' + _0x30dfa8(0xb14) + 'ZT29z5c/c0' + 'NjenR54Kh3' + _0x30dfa8(_0x543936._0xb3583f) + '9/mtl6HqEb' + 'FYDegTr4Tv' + 'arfG/RwvjB' + 'dFIqogenwu' + 'UXFheanoXb' + 'LcJSqyWIRI' + 'PIo6sXDKW1' + 'oxUKekVICP' + 'UBBEAg5QBC' + 'C0BMAquWWI' + 'yFAKboiR4p' + 'utM7hyI/+K' + 'qzzr1q0Lf9' + 'lcnVlVVQCk' + 'c+LZwgpgcg' + 'BkQzzbMWsu' + _0x30dfa8(_0x543936._0x58746a) + 'D2ZF25Y9dE' + 'w9KVnEqc7n' + '7s0UMjc86N' + 'b/L+kepc3C' + 'UBccrg47Ba' + 'WnY2SLJCHO' + 'pyKFEIuIXl' + 'QOl4ICKtdV' + _0x30dfa8(_0x543936._0x54ea3c) + _0x30dfa8(_0x543936._0x1a3465) + _0x30dfa8(0x204) + _0x30dfa8(_0x543936._0x32ec86) + '4fqGJQmc++' + '3kc5zWlsQC' + 'qYzxbWBUKm' + 'LzseyM7UWo' + 'Ss8hkR+IUt' + 'nG2DVlv2C+' + _0x30dfa8(0xa83)) + ('KOHmLTBZLn' + _0x30dfa8(0x79a) + 'FFHXtfzxvR' + _0x30dfa8(0xcba) + 'rCyh6J0LIk' + 'iuWpESj1yh' + _0x30dfa8(0x416) + 'mzUgCvCBVQ' + 'p3igYonXAV' + 'CILWoej+SR' + _0x30dfa8(0x923) + _0x30dfa8(0xbe3) + _0x30dfa8(_0x543936._0x4da6d1) + _0x30dfa8(_0x543936._0x307de0) + 'qlOsM8jnSK' + '31ANmtrQDZ' + 'pKXlXCs8tQ' + 'ehZu+Zkzmn' + 'vFZQMUDhA1' + _0x30dfa8(_0x543936._0x8325c9) + _0x30dfa8(_0x543936._0x410f3b) + 'ujTLsmj1rP' + 'c7o3nwPT1T' + 'UNhDLvzu2R' + _0x30dfa8(_0x543936._0x214340) + _0x30dfa8(0x602) + 'waGinyiqQi' + _0x30dfa8(0x304) + 'lYShFGrcHi' + _0x30dfa8(0x568) + 'PktIYrQps+' + _0x30dfa8(0x71c) + 'eDFnOJzh4r' + '7+Lf+GhQ7a' + _0x30dfa8(_0x543936._0x340b35) + 'C/CI9rhfA4' + _0x30dfa8(_0x543936._0x544dc2) + 'D4FHChuKVx' + 'fb/T6Zp94S' + 'Mrtxyomrwi' + 'dMNja95f/j' + 'eyPr7OW1dK' + 'cReDSmqY24' + 'uxZQ2sP0LL' + 'fwmQEqzNdK' + 'PHS2UXXeI0' + 'us+tNVSGGl' + _0x30dfa8(_0x543936._0xcc8b) + '3pe6FzBIUV' + 'Zd1ggrNyET' + 't8Gt+VPOFC' + 'v5ep2Tt2fl' + 'jo2zAvFMbH' + _0x30dfa8(0x2de) + '9sPfAWyZvS' + 'iGpcBMo4BL' + 'Vgi3btP5jb' + _0x30dfa8(0xc9b) + 'V91dCuG9ER' + 'rvcJ6X4TfT' + '3MJdhXEgE+' + 'thQp0AWtOn' + _0x30dfa8(_0x543936._0x1e9e28) + _0x30dfa8(_0x543936._0x4f3905) + 'rAogV9SaC2' + _0x30dfa8(_0x543936._0x1cd116) + 'JHxUtPafXT' + 'NmFzQZKYBq' + _0x30dfa8(_0x543936._0x1879f7) + 'eaatmHacyz' + _0x30dfa8(_0x543936._0x553888) + _0x30dfa8(_0x543936._0x161321) + _0x30dfa8(_0x543936._0x2952f6) + '9TNlgzdwEF' + 'V613iS4rIK' + 'p1XolVdfJL' + 'uS1f2dNna9' + 'ptz10CdJX2' + 'y6TvcbVbab' + 'xjrCtjzewN' + 'Fr01r56LEW' + _0x30dfa8(_0x543936._0x23f968) + _0x30dfa8(0x6dd) + _0x30dfa8(_0x543936._0x268e97) + 'ili6RsAqgb' + 'XG7ZEBCwXm' + '/zNsN2VnQV' + 'V5GTp21eWO' + 'v8Xvnzt747' + 'rl2MJ3lnj4' + _0x30dfa8(_0x543936._0x202c42) + 'mt2e2t7Tcf' + _0x30dfa8(0x581) + '61efy8CY1U' + 'Fh2eOsUlyk' + 'AdUEIADjta' + '9Zy5vTmxZv' + 'LrP8wpnnbE' + _0x30dfa8(_0x543936._0x175696) + 'pZi6G2fPsj') + ('79zy+seRdZ' + _0x30dfa8(_0x543936._0x29cc23) + _0x30dfa8(0xb10) + 'gRqQPB6QRS' + '6wZQeA2ou0' + _0x30dfa8(_0x543936._0x2d5596) + 'gGD6/oZ3qz' + 'ZhPBGgsQrK' + 'qJfO1JzgzM' + 'm1fsKfJayR' + 'yDx9H7dWyj' + 'a1Ap/pP3xu' + '6pO2cWD716' + 'ybgMPKZwwQ' + 'yeAEcCuVcB' + '8MY2MlHFk5' + 'S8d8n6pDnJ' + _0x30dfa8(_0x543936._0x381b9d) + 'gzvCra8VPu' + 'MaOTH58Be/' + 'W7PF89G7O9' + 'qXR9R1Gi2h' + '4CyVYYkPiw' + 'hAEMhyopCI' + 'Ta7xSBD2yJ' + 'hrKPUA0TKX' + 'hqsxIo4MXF' + '4NVXlmONLc' + _0x30dfa8(_0x543936._0x3d3f7f) + _0x30dfa8(0x705) + 'c+yPmzIyIb' + _0x30dfa8(0x398) + 'Rt2wxjEXtF' + '2slhREWZFL' + 'qLgcKngtGp' + '27CFAbZwLo' + 'Y84dE8ug/s' + 'Z9gZBtHGTf' + '0fqL1nHZT1' + 'nPm/7Oa9aX' + 'C+H2Q088uM' + 'lv4kTBW+Ok' + 'NQ6MxoAqeS' + 'UwY0TA7ZYl' + '2e0GqcZW43' + 'Z74sVvbbA0' + 'bWjra2Yv9+' + _0x30dfa8(_0x543936._0x37a153) + _0x30dfa8(_0x543936._0x5ae107) + _0x30dfa8(0xa02) + '9M7DOQqZ+7' + 'P/PjbyUUrZ' + 'PKKVYseG4g' + 'OJmcLYt1Ba' + _0x30dfa8(0x55b) + 'drthFDBtIS' + 'fOIf4V/8Dt' + '3McOs49vWP' + 'S20XzSvfcN' + 'ePvHmEuuoo' + '+n8yqhpBBa' + '/TlK9rYPO4' + 'PSiZ5FKoAX' + 'CHTfLjh++f' + 'OGZjHgqxi/' + _0x30dfa8(0x7d4) + '+kfcq70fYa' + _0x30dfa8(_0x543936._0x54a7da) + 'TqG5qmtMkZ' + _0x30dfa8(0x117) + _0x30dfa8(_0x543936._0x27f108) + _0x30dfa8(_0x543936._0x42476e) + _0x30dfa8(0x82a) + '5YUr0UWvnM' + '1uxWbgxGzL' + 'OBO7D7oZ+N' + _0x30dfa8(0x8d7) + 'wVtu0Zt3Lq' + '0aGBlNbrTJ' + _0x30dfa8(_0x543936._0x28b33a) + 'OFICXmdJpZ' + 'OCzRkTwpig' + 'dIMngVSWLP' + 'wzN5Yvorlx' + 'gAPReWPj4y' + _0x30dfa8(_0x543936._0x222c0e) + _0x30dfa8(0xb97) + '48/K7ZWuic' + 'O9e2f1Nhz+' + 'ZX/9Ys3fip' + 'Z84lZWNrBR' + _0x30dfa8(0x31c) + 'bM8gIHhVuh' + 'VqYD9mDLP3' + 'g47mR3Zrq7' + '/ZcvE4jJ0D' + '/A5s4exRFs' + 'cXtDfW630n' + _0x30dfa8(_0x543936._0x3e1d97) + _0x30dfa8(_0x543936._0x31fa4c)) + ('SYm7Xtc8IK' + 'ND7IEa4sb9' + '6rZG1ejNVV' + _0x30dfa8(_0x543936._0x3a7102) + _0x30dfa8(_0x543936._0x2731c1) + 'FiT30e6fIY' + 'OXX+m2LN+1' + 'k4dHso/LPe' + 'vL5A4q2z/T' + 'F+9/yx/g/D' + '+SPovm1Plt' + '+xsDD2PlUU' + _0x30dfa8(_0x543936._0x8df0ac) + 'CJIq2QKwQ9' + 'x2qbR5mVNS' + 'abQ9T7OQDf' + _0x30dfa8(0x8ad) + 'bbA622J3N2' + _0x30dfa8(_0x543936._0x5019c2) + 'YcK6Hgg+Uo' + 'laizjoC31E' + _0x30dfa8(0x27c) + 'LKPtLXk8bg' + 'DZUwO+Hwjr' + '3dU7l1qtmV' + _0x30dfa8(0x2fd) + 'vW5+TrNesO' + 'l/zgwsGcTD' + _0x30dfa8(_0x543936._0x34f06a) + 'cBlraDjb7/' + 'aqUNVnCNBx' + _0x30dfa8(_0x543936._0xd17e05) + 'k6kA0rX7Ha' + 'BRUcUkI5r9' + 'rjqhz0NVgY' + _0x30dfa8(0x620) + 'g6zbmo1fkY' + 'vbWlo//ume' + 'cXvG7Xn+jm' + 'zbOn1q4/Qt' + 'eZ5HbDGBhW' + 'R8FbICRFAB' + '1YxXkh1mbe' + _0x30dfa8(0xce2) + _0x30dfa8(0x230) + _0x30dfa8(0x4d0) + _0x30dfa8(0x267) + 'J11a8h/byH' + 'rM4WqK+7/Q' + 'zY2NT/6N7H' + 'Pn37rnuTsq' + 'a/Antc+QQo' + 'eToWC/9j1A' + _0x30dfa8(0xca6) + 'qi8eIx9lCQ' + '7Ni3FBn4SR' + _0x30dfa8(_0x543936._0x123f29) + 'hQSQTqhS/s' + 'BmGzW7Nb9+' + _0x30dfa8(_0x543936._0x28fe36) + 'zbAnOwy/Q6' + 'iFjRd8PHb7' + 'yMCVu1nCB6' + _0x30dfa8(0x36d) + '0iWguoXCCF' + 'DkYaz/RdvJ' + 'WiOJ0b01F1' + 'mTXs65ezeG' + 'YkxLxjzNfV' + 'oWn2yd2WIG' + 'qHmBgUXL7u' + 'vpmueNZrr2' + 'f2hkUbFI/c' + 'OOzzZGnmZd' + 'gntLVTqLfv' + 'zTFePiwMUF' + 'wJoQZhYyu1' + 'AAtQRfYI35' + '0q7Wlveljj' + '/tMaQSimJu' + 'DLSSXdGmH2' + _0x30dfa8(0x88c) + '7Jurtx1qYQ' + _0x30dfa8(_0x543936._0x475d45) + _0x30dfa8(0xb04) + 'NTYWxXaU1p' + _0x30dfa8(0x1a3) + 'El/mwVtyhy' + 'BSePw8krmj' + _0x30dfa8(0xba8) + 'QEk6zuiI1f' + _0x30dfa8(0x490) + 'z9u28rXXrb' + 'qxfRMBV44q' + 'liW9e8EVTl' + 'L5+iuyCOFR' + '4iLXgUtm5W' + 'sIlAJDqbhq' + 'fRIoxLx605' + 'Af/W1qfj9W') + (_0x30dfa8(_0x543936._0x3bc723) + '0/sP2w58q3' + '/7rnwuxXCj' + '+9LY80SlId' + _0x30dfa8(_0x543936._0x1460b7) + _0x30dfa8(0x24c) + _0x30dfa8(_0x543936._0x1f9e11) + _0x30dfa8(0x552) + _0x30dfa8(0x434) + 'vwZNUnL93d' + _0x30dfa8(0x11f) + '37zxArqTxy' + _0x30dfa8(_0x543936._0x496005) + _0x30dfa8(_0x543936._0x4d900e) + 'kuLPjeYy7P' + '/ra9ZQML9h' + 'dB8pLkycu+' + 'tiD2QLQ7PH' + 'tHJj2tlfzm' + '7Nhv0bhdFN' + '+21Dzzkn1j' + _0x30dfa8(_0x543936._0x2d878e) + _0x30dfa8(_0x543936._0x3366ad) + 'f7nKhwgPqc' + _0x30dfa8(_0x543936._0x1b3d93) + _0x30dfa8(0x6ca) + 'QvHTG0ZeUR' + 'TDkeGIFRAx' + 'kFUfTl6Z18' + _0x30dfa8(0x8c2) + '14AlDGt01X' + 'OrKSLVj5fL' + 'aINPPgTQJU' + _0x30dfa8(_0x543936._0x4bad68) + _0x30dfa8(_0x543936._0x551ffe) + 'OrsrIuBfuZ' + 'FeRpfs3roy' + _0x30dfa8(0x3dc) + 'o/bzVeL0Vr' + _0x30dfa8(0x55e) + 'g9mLYl5Jwo' + _0x30dfa8(0x378) + 'LEqMxkRJnT' + 'VH3+WGsI3W' + 'uD0ggc0zWd' + 'n1UPZPOIoQ' + 'mbQ1CAvkP9' + 'u6bvmncaEx' + '88O/+RouJo' + 'g1zzvzfVh+' + 'ufUEpAm03H' + _0x30dfa8(0xd2) + 'AtZ4oBdWut' + 'xBSlcUgCIW' + 'eUDELDLBDC' + 'sKY/dO36uR' + 'n38I2UwYM/' + 'OJbd6Nzk3g' + 'mNkKzS3Sri' + 'PlCyiPMlh2' + 'sp3qpKLqra' + 'jDPyfITjre' + 'gkFEj2RDqG' + 'CNmE0LR/5K' + '3TdB6xM/jJ' + 'EBOH75yqo7' + 'cJYdW9O2nR' + _0x30dfa8(0xbff) + 'fwMsX8IRBD' + _0x30dfa8(0x6cc) + 'ee7aafOIxq' + _0x30dfa8(0x80c) + _0x30dfa8(0xaa6) + _0x30dfa8(0x84d) + 'SLFyeLopuz' + 'W7XWM2hLF7' + 'cefyaws+FB' + '4zT6oVZASC' + 'v4KNwgrBYe' + 'lI2BJZzQPc' + 'owkmrgEo/v' + 'umJzjKM+ZN' + 'IME9C5rp7U' + _0x30dfa8(_0x543936._0x2ea445) + _0x30dfa8(0x897) + 'P57tctAMth' + 'SVQkCQF1PH' + 'G5q7aH4hNu' + _0x30dfa8(_0x543936._0x4ab6f3) + _0x30dfa8(_0x543936._0x4a1362) + _0x30dfa8(0x360) + 'MIRfWrP404' + '0psWxDgdt6' + _0x30dfa8(_0x543936._0x2bb629) + _0x30dfa8(_0x543936._0x39e499) + 'LrK6pQUiui' + 'svI5mTT2Sa' + 'Didt0Fbhqx' + 'QRhs4JGA2/' + _0x30dfa8(_0x543936._0x36783f)) + ('yLvm3QXQyK' + 'Qx6Hv+eXjO' + _0x30dfa8(0x633) + 'U0cCqw7Pqi' + _0x30dfa8(0xb4e) + 'EG90SDSofz' + 'D6XvuGwORF' + 'twx6LlICBG' + 'CYVSpUPEsH' + _0x30dfa8(0x983) + 'VmfGWhzTAl' + _0x30dfa8(_0x543936._0x48c1d6) + '/bJDCLToi2' + _0x30dfa8(_0x543936._0x3909dd) + 'rEQxc+VFAU' + _0x30dfa8(_0x543936._0x433d6b) + 'E2Ia2sLsz0' + 'pgjZjea70y' + '3qc8KWdaSY' + 'A6C3WkLf1b' + '7YODiiWuq2' + '84DVYTAFzw' + '0XyGEgCWoL' + '22JIpZRh04' + _0x30dfa8(_0x543936._0x4536c6) + 'X+4P078lxe' + '1C+JMpEGSc' + 'GqECcoIsoV' + 'nwS+ilqvk2' + 'a7sgRIH5G/' + _0x30dfa8(0x889) + _0x30dfa8(_0x543936._0x3e13a0) + _0x30dfa8(_0x543936._0xb2c9ca) + 'Mg6eD2CQoh' + 'KiUsZ0mQsH' + 'UILlvBujZm' + _0x30dfa8(0x2af) + 'dvUeRYhEu4' + _0x30dfa8(0x13c) + _0x30dfa8(_0x543936._0x9cbc78) + 'P9yP5o2ah9' + _0x30dfa8(0x971) + 'KX8/QdQEdW' + 'EA8CAC6zTn' + '0peZZYeESO' + _0x30dfa8(_0x543936._0x4ec828) + _0x30dfa8(_0x543936._0x123606) + _0x30dfa8(_0x543936._0x18adbd) + _0x30dfa8(0xc48) + _0x30dfa8(_0x543936._0x34df41) + 'b/8tFxOmWL' + 'WFMUWUaAoQ' + 'L25OZwnUeQ' + 'EK8nXBUxqR' + _0x30dfa8(_0x543936._0x585c96) + _0x30dfa8(0x7a0) + 'zSYTvHq96f' + 'DiRUA0IO9+' + '0lGEhlMfGz' + '92GmFMKMAr' + 'N8+8tg/mwF' + _0x30dfa8(_0x543936._0x446139) + 'AGYE1qkTtJ' + '+X/BujhqzQ' + '1EmxbJQwo9' + 'FVCUv0SgcS' + 'F0GYyN4D3K' + 'aI3j0phXWO' + 'RPUGgJl8Xt' + '6EWiZrmbsq' + '4KwG/I5WFx' + 'EjmOhpvEiz' + 'kDCgHJaZJQ' + _0x30dfa8(0x59a) + 'mt/99HD6jK' + _0x30dfa8(_0x543936._0x539377) + 'MeU18t77UP' + _0x30dfa8(0xb37) + 'VGAR67i9Cy' + _0x30dfa8(_0x543936._0x2a916f) + _0x30dfa8(0x3ca) + 'zos4ZFs/Y5' + 'wFULqCkASI' + 'msgKtyCY4f' + 'YDqWNTijQZ' + _0x30dfa8(_0x543936._0x5aa4af) + _0x30dfa8(0x9f1) + 'dl0zyTruHY' + 'AqmyotbnQK' + 'lkWBKUGU+l' + 'NbiptLG73B' + _0x30dfa8(0x3b8) + _0x30dfa8(_0x543936._0x541db8) + _0x30dfa8(0xbd9) + _0x30dfa8(0x94a) + 'cqU25IaFiD' + 'sKm3//l0WC' + 'G2mCw/holP' + 'AIyILVEL96' + '8Hm561YvSb') + ('WYhURLtdME' + 'ZpsPAmKK46' + _0x30dfa8(0x88f) + _0x30dfa8(_0x543936._0xe91fa) + 'zI+dWQQmyQ' + 'oKNA8zn/EX' + 'FKQqyicv4g' + 'XwOvddEbPU' + 'IFQ383KgBt' + _0x30dfa8(_0x543936._0x4a888b) + _0x30dfa8(0x38c) + _0x30dfa8(_0x543936._0xf32b2e) + 'vU+PzjiGrr' + 'F6tmVPBpbt' + 'xvB1xlj5wV' + 'AZeGMtWbJk' + 'CcA78M5yHQ' + 'qdxcQMMjhE' + 'yYdOiuwSFB' + _0x30dfa8(_0x543936._0x7011a4) + 'lnXhSwAloh' + _0x30dfa8(_0x543936._0xe3e1ca) + '8+bNE+bmlO' + 'haDRUURVlu' + 'zGhQlEoF1I' + 'oSNIVLmcsh' + 'eJ1CviIQzB' + 'm5wxAGqYZI' + _0x30dfa8(0x6bb) + '07925Oipu2' + _0x30dfa8(_0x543936._0x33071d) + '0I6HAXHFNC' + 'YC6dPPwUzi' + _0x30dfa8(0xafc) + '4tEJJF4CiB' + _0x30dfa8(0x459) + 'WWLWRC0QB8' + 'b/aoE6FJnl' + '7FxsHoGsst' + 'Ev8biuaZp5' + '3z5TDdapSq' + 'JIHFQGKPW5' + 'XQ63z1tXK4' + _0x30dfa8(0x402) + 'E7RxPOY1bD' + 'bWGG2TqA1q' + 'GI000vDpyL' + 'vgqWwu7AYC' + 'MdNlsUac7J' + 'kO/mM7P2MP' + _0x30dfa8(0x150) + 'RqW8lQGtx6' + '3BpE4ejKvX' + 'RJPs+m9yAL' + 'sqI0wHC2hB' + 'hdTkVUVBmz' + _0x30dfa8(0xc2c) + _0x30dfa8(_0x543936._0xfc8666) + 'stFHXlGUJF' + _0x30dfa8(_0x543936._0x15dae2) + 'VESCSrUq1F' + 'KvQOPmXRCu' + 'KQ17sHLG7Y' + 'Ea1LRII0ra' + _0x30dfa8(0xc47) + '4bJhhzU58v' + '38VD9PCG2c' + _0x30dfa8(0x991) + _0x30dfa8(0x761) + _0x30dfa8(_0x543936._0x1839ab) + _0x30dfa8(0x723) + 'qKIsbwWWW0' + '29F0VAUFhR' + 'MbZSQzpYQD' + 'qmrYrjYCF6' + 'hg2GQKFLsC' + 'yEsaimrQjs' + 'b3CyiYTYUx' + 'ATxu8LgNSc' + _0x30dfa8(0x90a) + 'q7eY5dfh+n' + 'Ez7tR3uMEz' + _0x30dfa8(0xc9a) + '+77LOvjktJ' + 'xk6heAztOe' + _0x30dfa8(0x793) + 'KoSHv5ej4x' + _0x30dfa8(0x16a) + 'wgqUVFXBmS' + 'ESSiVZAVlm' + 'EQdMt1EfVn' + 'phlEHG4jy3' + 'T5QIEYCUKE' + 'VQo9aAlyig' + '1Mkl2GVm0m' + _0x30dfa8(0x1d4) + 'k8NuG8g2GS' + '6JAZh23wxL' + _0x30dfa8(_0x543936._0x667f4a) + 'ri7jCFnbt3') + ('EbgkPgIOdR' + _0x30dfa8(0xc62) + 'Gv/1SNqMay' + _0x30dfa8(0x240) + _0x30dfa8(0x8cf) + '0p6MwhOja7' + 'iFl5+BycrE' + 'wCx2cwB5zw' + _0x30dfa8(0x8d9) + 'AEDUPjCcpw' + _0x30dfa8(0xa26) + _0x30dfa8(_0x543936._0x528067) + '4Pa4QTW37R' + 'q/csNti3Sb' + _0x30dfa8(0x803) + _0x30dfa8(_0x543936._0xdf7c03) + 'p+1POOvHrA' + _0x30dfa8(_0x543936._0x24c058) + 'AL9403L87h' + _0x30dfa8(_0x543936._0x5df3f7) + 'S/0YVJRAik' + 'xkgCWNCkFj' + 'yYe7VsQqZ3' + 'ArkkSdCvjU' + _0x30dfa8(_0x543936._0x1180e1) + 'tbmuMxgYAT' + 'y4IrvIqC9V' + 'zgFRyyVKLA' + _0x30dfa8(_0x543936._0x49f303) + 'LTCxNUmydS' + 'Y2OmsFuSqR' + 's8QKkWyzJZ' + 'to+8iOjbPY' + _0x30dfa8(0xaaa) + _0x30dfa8(0x346) + '2LgRVrXXoa' + _0x30dfa8(_0x543936._0x477385) + '9hT6Vn33S8' + '+FtrEYs2ob' + 'GEnpiXz2H1' + 'hhj7xy3KfH' + 'fUra5dzc1f' + 'rt0+N/PVu4' + _0x30dfa8(0x64d) + 'WBxClLjlmC' + 'zAWCva+qLS' + 'WqAKqreAOT' + 'iArg1DK8nu' + 'sBFb45N+t/' + 'Ed3oLGcWHR' + 'Q0Vm8Lg9bl' + 'rjjjY88eqP' + _0x30dfa8(0xb81) + 'yRsAZd8+Aq' + '6wvh66MJAi' + '45lr59D9+1' + _0x30dfa8(0x713) + _0x30dfa8(0x377) + 'gYAgKkChqn' + _0x30dfa8(_0x543936._0x26ca7e) + '1j6/cXf+xZ' + 'ntdxV+sW1b' + _0x30dfa8(0xf8) + _0x30dfa8(_0x543936._0x122fac) + '1UpwCj4QC2' + _0x30dfa8(_0x543936._0x4b30f2) + 'Hkm2gdvNUI' + 'NNltxg47v+' + '8wGp97hLgZ' + 'e5NvBAqccN' + 'NdDDfdr+yK' + _0x30dfa8(_0x543936._0x5337f2) + 'lKyBdZjl3I' + _0x30dfa8(0xb0b) + _0x30dfa8(_0x543936._0x190db1) + 'OHp5RHBQAv' + 'FUR0ugQAtw' + 'qOSkmUZZeI' + 'AlVF/91JZd' + 'f6xoa5jyy4' + '//eTn71o5c' + 'G6irferG5g' + 'XlqFrOKWpo' + 'KM5S8lkiBg' + 'UhIZrEQr5m' + 'W2U8HtKcUv' + 'LNJUavNI4X' + _0x30dfa8(0x851) + '1RjN7akBD0' + 'ilptjH1pST' + '1oXENuWeio' + _0x30dfa8(_0x543936._0x553ca0) + 'Fi5Yjvx7DA' + 'tf8GmCp68O' + '/2L+nIWmiB' + 'FqwcqH5ZKM' + 'ljvTOFKlpL' + _0x30dfa8(_0x543936._0xb0de11) + 'aP5Ld7FPJv' + 'x6EhM27pzZ') + (_0x30dfa8(_0x543936._0xbff69b) + 'uYp4vT5kQZ' + 'o2tSJQYN91' + 'wStWI1kIRq' + _0x30dfa8(_0x543936._0x27b693) + '1kg+jqSxry' + 'GXRXbGZwl8' + '7y7e6wqeGJ' + 'o5mnOAep5o' + 'oTxJOBNZw0' + _0x30dfa8(0x7e5) + 'bv6EmlcdRy' + 'ddi2Zu6CCb' + 'txH3ENTJj6' + _0x30dfa8(0x7fd) + 'RcjVmtshGn' + 'UE2cyixB96' + '7xO/h1pH7/' + _0x30dfa8(_0x543936._0x75c1ff) + _0x30dfa8(_0x543936._0x4264e0) + 'lYAhWC02Xt' + _0x30dfa8(0x47f) + 'BlC7srLaGp' + _0x30dfa8(_0x543936._0x3e582b) + 'KYVe4S+ee4' + 'vNaCpLsov8' + 'fuWF3iOnKP' + _0x30dfa8(0x50e) + _0x30dfa8(0x397) + 'S/0XbxO9ET' + _0x30dfa8(_0x543936._0x1cc765) + 'RmbvmEWhlU' + 'kJezhgVRqj' + 'SaepeDG6UJ' + _0x30dfa8(0x852) + 'JsvIsKXkH4' + 'XNmtx+7NW/' + 'THG7rbTC58' + 't0y9skJRUD' + 'nALaMeAsIr' + _0x30dfa8(0xaab) + _0x30dfa8(0xbdf) + 'sARyjbtUqg' + 'GQhVZzDCJQ' + 'U7NXu/vV83' + _0x30dfa8(0x6cb) + _0x30dfa8(0x1ed) + '/r+B1r0PVn' + 'Tz4qaNZ49R' + _0x30dfa8(_0x543936._0x3b6b5e) + 'ImpZ0utYcM' + _0x30dfa8(_0x543936._0x3b7ab7) + 'jU4FF2JjCt' + 'XoqhKhMcfI' + 'fjhRIqO6Ra' + _0x30dfa8(0x58b) + _0x30dfa8(_0x543936._0x6c1c9) + 'wujERKqlfC' + _0x30dfa8(0x8f7) + _0x30dfa8(0x84e) + 'hm4b2k3os3' + 'vcur6jtAZK' + _0x30dfa8(0x306) + _0x30dfa8(_0x543936._0x4e0d16) + _0x30dfa8(_0x543936._0x5be362) + 'bv0LGENej6' + 'CCy3mBqiZT' + 'fOKD/ku7h/' + 'u14AyyEahX' + _0x30dfa8(0x548) + 'G62laPsY1e' + _0x30dfa8(0x10f) + 'gShKmBtRcr' + _0x30dfa8(0x53c) + 'okhVRW6EHB' + 'obG3Ppcu40' + _0x30dfa8(0x309) + 'kqBU+FLDhU' + _0x30dfa8(_0x543936._0x3fc58e) + 'ZhFwBPqc3D' + _0x30dfa8(0x61a) + 'pBAren1iRF' + '3KXYZvGpA4' + _0x30dfa8(_0x543936._0x49d5e4) + '8yV/PDVUyC' + 'k9jrB9cf+Z' + 'BflEBc60+g' + 'cXb75+nOP8' + 'JXh2iyUKlu' + 'XwbvgjgVyQ' + _0x30dfa8(0x588) + _0x30dfa8(0x20e) + 'G+2DlpPb40' + 'NJi9PXkGjQ' + _0x30dfa8(_0x543936._0x346bee) + 'KI8WTthjtz' + 'NExBgiQ7wY' + 'vUdy93uD1i' + '0XJJvjyqWS' + _0x30dfa8(_0x543936._0x463ac5)) + ('TEw2sUQzFk' + 'zUlNag0Jr0' + '59kTzKiL3F' + 'SjLyy9OGMg' + '1nQSwm6DYw' + _0x30dfa8(_0x543936._0x4fbeb6) + _0x30dfa8(0x100) + 'exyYeG20Z9' + _0x30dfa8(0xb17) + 'v1DeT+QN6E' + 'WpQ5iU6bvn' + 'meqsDa6ly1' + _0x30dfa8(0xbb1) + _0x30dfa8(0xac0) + 'uz/wHEmKjJ' + _0x30dfa8(0x260) + _0x30dfa8(_0x543936._0x265364) + _0x30dfa8(_0x543936._0x38ab92) + 'UgVVUIvDhr' + 'HEBBLyMDP+' + _0x30dfa8(0x37a) + _0x30dfa8(0x822) + 'DXMCvCI/Hh' + 'yIl55sRQrb' + 'jgGbwLqiAg' + 'uBUYnuoK37' + 'vF+abK7wRz' + 'Pgo7bt15mm' + 'q3m5GANncQ' + 'gkilTnZYkl' + _0x30dfa8(_0x543936._0x804b5e) + 'BDTth0KqPW' + 'nWkVn6TFNn' + 'M52tyK2/JI' + 'nFtnnWlS0T' + _0x30dfa8(_0x543936._0x384768) + 'S7LsIJREWZ' + 'ifFUiA2zO5' + _0x30dfa8(_0x543936._0x2a7b4c) + 'jqIKQv27CT' + 'wLKd3RKzqW' + 'j7xaP6Y/5n' + _0x30dfa8(0x3cc) + 'Sm3jWYzDkL' + 'fnDBfa4f/i' + 'JUe3fl7U1T' + '3FnzHBYTlR' + 'WfQGRFhf+A' + 'LEiKQ2HNsA' + _0x30dfa8(0x14c) + _0x30dfa8(0xd10) + 'XYDEtkqCji' + _0x30dfa8(0x537) + '/VOkzMi+kg' + 'YJzGkPOC06' + 'nI6h7syjeT' + 'yRRsYaRqKQ' + 'YldDSJIyDF' + _0x30dfa8(_0x543936._0x23d4ff) + 'NxS9qkSQRM' + 'ph4oLaVui3' + _0x30dfa8(0x8b9) + 'WCxn0EFZA3' + 'TN81ZucvTl' + 'ndXAmDbfNp' + 'eFA5jVPgZw' + 'clbfcLW+YZ' + _0x30dfa8(0xb43) + '8UM2f5blPU' + 'SFlHpEFlRi' + 'T8yRB0detV' + _0x30dfa8(_0x543936._0x4c650d) + _0x30dfa8(_0x543936._0x295307) + _0x30dfa8(_0x543936._0x256fab) + 'K3hY/hEdHI' + 'O6uD0nvjB1' + 'vAlVLUiWuB' + 'CxxE0mTGhJ' + 'Nrpn3fbghZ' + '+dlqoQgyLs' + _0x30dfa8(_0x543936._0x1965b7) + 'Z0JmNiWWos' + _0x30dfa8(_0x543936._0x34f379) + '/as8jEep7N' + _0x30dfa8(0x752) + _0x30dfa8(_0x543936._0x1e4a86) + 'mAsAEvrpoJ' + _0x30dfa8(0xc22) + '8FiC6i3Kbw' + 'VSneXkFXOM' + 'cT0LZTgxRo' + _0x30dfa8(_0x543936._0x39478e) + _0x30dfa8(_0x543936._0x51ddc1) + 'me3CMDTLJc' + '+Uspjt4diN' + 'pfs+EL9Ye8' + 'YvO4IWza9f' + _0x30dfa8(_0x543936._0x21d7bf) + _0x30dfa8(_0x543936._0x50fa4e) + _0x30dfa8(0x9ac)) + ('B1yhSEAtH0' + 'w+WJW1L14z' + 'sdGHkKSGxM' + 'AI7GZ2AOD0' + _0x30dfa8(0x4f3) + _0x30dfa8(0xc70) + 'Y1sVfOjxOU' + 'Svm/fWHFl4' + 'cMLen8R5II' + _0x30dfa8(0x27d) + 'CIKsYrUbvr' + 'MBdHDbwhGk' + 'Zak7LEkAmi' + 'xJQHuPULBa' + '3QAWrWHjy/' + '9aua0hagEp' + _0x30dfa8(0x2b4) + 'rXlUibi8fM' + 'GKR2+rC2WD' + 'Z9QPBPg+zT' + _0x30dfa8(_0x543936._0xea4fe2) + _0x30dfa8(0x695) + _0x30dfa8(_0x543936._0x11697f) + 'qFIns6GsQK' + _0x30dfa8(0xc1d) + _0x30dfa8(0x9eb) + 'qAPHYjh0+n' + _0x30dfa8(_0x543936._0x4ca4ba) + 'SVWopHpZyN' + '8Yqy0B8Sqq' + 'JDi8SozXwm' + 'DFsi0WkZBt' + 'UOO2gkSfHX' + 'p9fYzGS5P1' + 'vz7wtvOv+5' + 'P+Z7cYt+gN' + '4vW2i8tajo' + _0x30dfa8(_0x543936._0x507c78) + 'cVj3dHV8hW' + _0x30dfa8(_0x543936._0x66478c) + 'YDZBQxB/iH' + 'DZyO8C/KEP' + 'YykC9kYaTh' + 'yLrRUIGF9B' + 'o4r6jAGtoC' + 'h15l1VviNT' + 'HGYqSDL2QA' + 'iSShTBJSMP' + 'KAr1OkiJLI' + 'tOkePB5qkB' + 'uTSC+8UtQe' + 'lkD9qODmHE' + 'Rz6d642aRP' + 'iFrv3PdvXf' + 'PZS2Fx19xT' + 'vXaB78GsK+' + 'm3USrFCa6l' + _0x30dfa8(_0x543936._0x1bcb9d) + 'nCFPxcYj1M' + 'bEbGgRcFop' + 'gLjEkWiSZF' + '3r+BJKZHRf' + 'lksukF2OWh' + 'FZG1tbyfpt' + 'vXfPw0+tNW' + '6J4vXiN1VV' + _0x30dfa8(_0x543936._0x2b1c44) + _0x30dfa8(_0x543936._0x5ecdcb) + _0x30dfa8(_0x543936._0x3cf6b1) + _0x30dfa8(_0x543936._0x3f58d5) + '5IphWzz/45' + 'EL7ufI9vQv' + 'XtjXlH30pm' + 'TrXDyB6GtX' + 'b4Y8wMT9WJ' + 'u7OqKN9cZj' + 'bA10XvPlej' + 'RRQUMTN/Em' + 'HCMMDdi0kZ' + 'iibPQp+zA+' + 'rFaAA4PkMm' + 'HCS5FFUV/9' + 'Kcy2mOrYQF' + _0x30dfa8(0x659) + 'rqAUGhxegg' + 'kEWEKEJh7c' + 'kiRjQsMjlc' + 'qeUgncbgni' + 'DZcXSrbbIx' + 'bgGuijsAvm' + 'j79Uvath3Q' + '1geWrVB2fU' + _0x30dfa8(_0x543936._0x2446ce) + _0x30dfa8(0x1c2) + _0x30dfa8(_0x543936._0x42ba07) + 'l6gQCOHHMQ' + _0x30dfa8(_0x543936._0x987553) + 'Unh/W/ihh5' + _0x30dfa8(_0x543936._0x48917f) + '6IuJfRv3OA') + ('Xu0JppjHRH' + _0x30dfa8(0x97e) + 'qlgA7611iS' + _0x30dfa8(0x188) + 'AcYRLYyxCJ' + 'xEYquRpIgM' + 'YY9NAsInPQ' + 'KR58ken4ze' + 'FwX+C2Fn/u' + 'fk+k+fvnk4' + 'Fu9+/Sp2QT' + '9h+7EeblvY' + _0x30dfa8(_0x543936._0xfd14dd) + 'UFIp3gSN8t' + _0x30dfa8(_0x543936._0x6b149e) + 'blWaif9b4i' + 'aSWgktEGi/' + 'cACVzpBGwq' + 'c+LBDcSsV2' + '8Lpv+kzCWI' + 'LtHlEz0OqR' + 'a8OCNFEmWV' + 'OGkNSjKnVA' + 'laNGo1HHSw' + 'sdgD8+c9Fv' + 'ETbfSiH8dv' + 'utUBkvoM6o' + '761vP++mci' + '16+8Df51Rq' + '1WZrjoJHSF' + 'w4XCP/e01C' + _0x30dfa8(_0x543936._0x2c6aad) + 'B+MEByHgOG' + _0x30dfa8(_0x543936._0x4f3c81) + 'KSuygvfMQI' + 'sVg6oieRXV' + _0x30dfa8(0x67b) + 'WH8fe+Z9I9' + 'klzHioNw4K' + 'BDZk6C4vUK' + 'UOJQZZGqkg' + 'rjMCgooQSm' + 'IJVamZCWJb' + _0x30dfa8(_0x543936._0x1e00f2) + 'aeT7+etwRK' + 'kGmfyoqLpk' + '527nzFetOb' + 'EzAus7ESsP' + '8Eb4yvWjOI' + '5trUYQTAtG' + 'BmC8hBRUFN' + _0x30dfa8(_0x543936._0x1e6056) + '4SaV8RU3+E' + _0x30dfa8(0x7a9) + 'wYmRM0y/EQ' + 'tZ4zmS5MuL' + _0x30dfa8(0x71e) + 'QyalQ2T1t0' + 'OHDaNDglK4' + 'A1rmH4ED1W' + 'qcYGkRrs6J' + _0x30dfa8(0x847) + 'H/dLK3/Nqo' + '5PMSnKt34w' + '/d4F1GaR7i' + 'JzBk2zP816' + 'ZYCJB5VFHM' + '7+OTyyJq4R' + _0x30dfa8(_0x543936._0x3e064b) + 'btkBWsDWC0' + 'ZnFdtBPwVi' + 'kgof3Q2KA4' + 'QZRkIrmwEk' + 'Bwy4qsgsxx' + _0x30dfa8(0x190) + 'JOd1kCiFGU' + 'JCoKGAZXZO' + 'LGsIQXKneD' + 'zMbyUjSZZB' + 'k87P7h1lXi' + '/wQT3avEC5' + _0x30dfa8(_0x543936._0x2bc29b) + '56xLjVx0x4' + 'SG2PZw0kV0' + _0x30dfa8(0x3ce) + 'y4BGTc8oIj' + _0x30dfa8(0xbb0) + 'eoK2/uR9wS' + 'nA6Nw15Y1N' + _0x30dfa8(_0x543936._0x209d79) + _0x30dfa8(_0x543936._0x596c77) + _0x30dfa8(_0x543936._0x1c9a5b) + 'Sl5VMtGNj/' + 'SWlC3QQZFk' + 'UBpEGSdTSA' + _0x30dfa8(0x474) + _0x30dfa8(0x8ff) + 'Jtl+SukTD6' + 'DRIrAw8jR8' + _0x30dfa8(0x1c1)) + (_0x30dfa8(0x3ae) + 'VxIOg8NYMN' + 'kuKXpV90Rj' + 'wMZt+Mk2F1' + 'BXoiHR7fu6' + _0x30dfa8(_0x543936._0x121c01) + 'NaodFn9wGn' + 'X9CrM2xAKk' + _0x30dfa8(_0x543936._0x2815be) + 'VHHdsHGf0t' + '+uo/rObKby' + 'jUccALGtCy' + 'g5Js7H7FmK' + 'oiirUONHzR' + '5wdTo2A1As' + 'HuMKpYGWoo' + _0x30dfa8(0x939) + _0x30dfa8(0xaff) + '7cahe2B5zK' + '/xpR4pEt0J' + _0x30dfa8(_0x543936._0x4b5dc0) + 'g9Divj58+h' + 'Y7ytfYvPu8' + 'RoeIlPJLlF' + 'gONoAEMnAB' + _0x30dfa8(_0x543936._0x468e87) + 'Bio4q4oVZA' + 'FVZOR8FMdE' + _0x30dfa8(0xd3) + 'gwMSoITIpX' + _0x30dfa8(0x716) + _0x30dfa8(_0x543936._0xbbb471) + 'qnKFQmQBLo' + '1sd9skpCWA' + 'XOqRJKhxIz' + 'fvpcJ4HqxS' + 'uMYNumbLcg' + 'D8vNg6G7ZH' + '3DLAZhh1zK' + 'HVp14xdgYK' + 'fyxdh/8FzK' + _0x30dfa8(0xaba) + 'xvAB6L/nXS' + 'Y3GryLmBQZ' + _0x30dfa8(0x1cb) + 'Yuo2RFKDi3' + _0x30dfa8(0xacf) + _0x30dfa8(_0x543936._0x12b9ca) + _0x30dfa8(_0x543936._0x270701) + 's15F5QvCiB' + 'qaJ4ZdXrLZ' + 'FkAk4tn1XC' + _0x30dfa8(_0x543936._0x5c2a2b) + 'WxSUX0sfhE' + _0x30dfa8(_0x543936._0x1979ae) + '72/Hnduvob' + '39iA1mQpwM' + 'x266wzwwp/' + '6ZuwNQjrox' + 'NjYG7OSG3/' + '1L/LojY2An' + _0x30dfa8(0x7c6) + 'HYmCpt04K0' + _0x30dfa8(0xb39) + _0x30dfa8(_0x543936._0x129ecb) + _0x30dfa8(_0x543936._0x1390a1) + 'mz9pNZVJuT' + _0x30dfa8(_0x543936._0x3cb945) + 'M7vL55DFJT' + '7R7RAJSE5B' + 'kiplxYscrI' + _0x30dfa8(0xc88) + 'EwN4LPzLvH' + 'q7yYb3ADyl' + _0x30dfa8(0x900) + '2dzffEsIlF' + '5qWqRJPI1y' + '7zxKxj/Vck' + '8dgGNLti2f' + _0x30dfa8(0x700) + _0x30dfa8(_0x543936._0x6fb84d) + '0C04uDPFNW' + 'oGYwNMHKQl' + _0x30dfa8(_0x543936._0x21b45b) + 'khwzHBNqAW' + _0x30dfa8(_0x543936._0x3ca0ef) + _0x30dfa8(0xc69) + 'w+JzZ9YmF5' + 'HTWPi2LVS6' + _0x30dfa8(_0x543936._0x561b4c) + _0x30dfa8(0x740) + _0x30dfa8(_0x543936._0x1e0ca5) + 'X69/glx5zV' + 'u6ZtsuyTBJ' + '+/u/HvnTGR' + 'K2AD12nEBq' + 'HMaCX37NDv' + _0x30dfa8(0xba4) + _0x30dfa8(0x477) + 'm89nG8IFOI') + ('ExKHFs0IAS' + 'YKhhN+OhUx' + _0x30dfa8(_0x543936._0x116911) + 'BKfVRxGZ1Y' + 'aVQsQgWWkO' + _0x30dfa8(_0x543936._0x7e2262) + 'YaDJ6ZWKlj' + _0x30dfa8(0x2d2) + 'lGD8kJlOtG' + _0x30dfa8(_0x543936._0x195812) + 'TTUSDl7g49' + 'Fn/pOUMfzv' + 'm/4C4Wtalg' + 'nEA6WUKncJ' + 'gw7zO916eL' + 'PRvzOAdcaT' + 'LJ6KMmnqRx' + 'bbBZT8WLkS' + 'n6rptuFLtu' + 'X45lJWGT5Q' + _0x30dfa8(0xea) + 'qUkqr4zsNQ' + _0x30dfa8(_0x543936._0x2ab795) + _0x30dfa8(0x543) + 'aNbHXC1GLh' + _0x30dfa8(_0x543936._0x506fe4) + 'mIV4JBt4Sg' + 'kDysIvEpj5' + _0x30dfa8(_0x543936._0x411412) + '2yJJdGzNDw' + _0x30dfa8(_0x543936._0x52dfdf) + '/X8rLtwUKh' + _0x30dfa8(_0x543936._0x4ad772) + 'RXmJ5+1TB2' + _0x30dfa8(_0x543936._0x52ddce) + _0x30dfa8(0xb67) + _0x30dfa8(0x58c) + 'rngADWN169' + 'YFNBLqVkYv' + '3EGoz2E6oQ' + 'b0WtG3SyA0' + 'zeUf9++Mpo' + _0x30dfa8(0x73c) + 'BLqjSYXvFV' + 'AIujQgueVo' + 'flxrLTiyVr' + _0x30dfa8(_0x543936._0x361054) + _0x30dfa8(_0x543936._0x402839) + 'tGT+3uEL3e' + 'cPY3msSfG1' + _0x30dfa8(_0x543936._0x5b7335) + 'sdn0FqdqTd' + 'O16XJW7v44' + 'f7yqS/bsVe' + 'vf04rJM/Hu' + 'wljc70R87P' + 'gopVECNcI3' + 'Hs+0wBa9I5' + '53DOLG8+Bc' + _0x30dfa8(_0x543936._0x48a7d1) + '2N/saMlc1a' + 'VaZ6nlJjK+' + 'jhUoYn0xRq' + _0x30dfa8(_0x543936._0x35d5e3) + _0x30dfa8(_0x543936._0x1688ea) + _0x30dfa8(0x107) + 'VWo2rATHva' + _0x30dfa8(_0x543936._0x54a1e3) + 'xm9Cjg5zz2' + '7InkkJJfPX' + '64TC4U1JL3' + 'ExWyx+46GT' + _0x30dfa8(_0x543936._0x423822) + 'E19W/X+QMj' + _0x30dfa8(0x55c) + '6SUePQgNOy' + _0x30dfa8(_0x543936._0x1ab14a) + _0x30dfa8(0x62e) + _0x30dfa8(_0x543936._0xe38fed) + _0x30dfa8(0x7db) + 'Ko+q1tRlm7' + 'SF+kRPLQF3' + _0x30dfa8(_0x543936._0x396f6f) + 'twND6a0T5J' + _0x30dfa8(0x2d0) + '84Ayoi9UCp' + 'G4MvjIct+t' + 'PbX4ef1w3/' + 'UsIoLPf0O5' + 'mz9AUA69YS' + 'AotXDp+8bc' + '0C8Lj0kvfP' + _0x30dfa8(0x102) + '/EalRpAuvw' + _0x30dfa8(0xae7) + 'vxN+m84sP5' + 'WioV4lCd59' + _0x30dfa8(_0x543936._0x33e9f5) + _0x30dfa8(0x4c3) + _0x30dfa8(_0x543936._0xdd1839)) + ('j3IddFKtwE' + 'qoE3WnmJqk' + _0x30dfa8(_0x543936._0x106c5c) + _0x30dfa8(0xa0e) + 'xmIO0iiwNL' + 'IaiNkdFuNP' + 'b3958fX+6C' + '+boDQiS9ye' + _0x30dfa8(0xa86) + 'XWfFZ7Ry+9' + '4VXOFLNq5E' + 'Zv3ukyHAMr' + 'NpsxgNavXw' + '/1nZ/dt17u' + _0x30dfa8(_0x543936._0x4b3178) + 'fK0CKqZm1e' + _0x30dfa8(0x118) + '4bP+/lcOT9' + '3bv/vrs9DE' + 'PG/2rO1PnC' + 'vHyT+d9UES' + 'kGAX0qZn7U' + _0x30dfa8(0xc66) + 'UsKVF9kte3' + 'xFnn9PoaJU' + '2QMVNuxTEo' + _0x30dfa8(0xc17) + '3Rhu2vVrwR' + _0x30dfa8(_0x543936._0x24ab5a) + _0x30dfa8(_0x543936._0x5f1b12) + 'CnetZx80H6' + _0x30dfa8(_0x543936._0x11398d) + 'GbYWwpmtKu' + 'NbP12Lao8L' + '4MSK9o6csC' + 'BqDfefZgWK' + 'axelsD9s4f' + _0x30dfa8(0x75c) + 'g+wmaQxMqi' + 'HUV4FlBQqI' + _0x30dfa8(_0x543936._0x297951) + _0x30dfa8(_0x543936._0x260aa6) + 'qagDQS2pdB' + _0x30dfa8(0x2fb) + _0x30dfa8(_0x543936._0x1b2b33) + _0x30dfa8(0x9ee) + 'Y108fmdqNQ' + _0x30dfa8(_0x543936._0x490af5) + 'KjkAPfUJRl' + 'h4KGfC4zuY' + 'cJp7hkwcc2' + _0x30dfa8(_0x543936._0x5714df) + 'PlZlzuiyLf' + 'Q5dVHBHCqD' + _0x30dfa8(0x66a) + _0x30dfa8(_0x543936._0x28521b) + _0x30dfa8(_0x543936._0x578e8b) + 'wISUaT0VXp' + _0x30dfa8(0x365) + 'p07AUJfQNJ' + 'rqijPnDUOa' + 'nPMVbTLZia' + 'AtntDltlkD' + 'BIEZkcj/91' + '5VUHrddryv' + 'i1mL6QIrYY' + 'hTtX9dGPcf' + 'F8W/IIzVU7' + 'cdyeVYMPFD' + '/dMp/PvvXx' + '8HDTCbcoMB' + '9W+/QJjUQu' + _0x30dfa8(0x9bf) + 'sDReVromaT' + 'rutms6411f' + 'BQq+CeRuGL' + '2SukFHHjQE' + '9Q5AocBio7' + 'vIoCzloQHU' + '5R8IkX52m7' + 'PBiQlcPYpI' + _0x30dfa8(_0x543936._0x26b7c9) + 'e9qT2zljsq' + 'bA+juxT0CW' + _0x30dfa8(_0x543936._0xc3e2ee) + 'DDLDDoSp09' + 'ugY7+QVw/R' + 'm6OjFTP1Zk' + '4ebsE93Bg+' + '/BjsbaHEFS' + '0ECUJAeIki' + 'ADVUSvKnkF' + _0x30dfa8(_0x543936._0x36adf2) + 'WGbIvFEERw' + _0x30dfa8(_0x543936._0x3d17e9) + _0x30dfa8(0xc1e) + _0x30dfa8(_0x543936._0x1b3e83) + _0x30dfa8(_0x543936._0x5375fd) + 'U5YMxxw8xM' + 'MV7Xrh7ZcP') + ('P2giClhG27' + '/0gBXcWvRv' + 'lmqYfyUHXM' + _0x30dfa8(0x6c3) + 'uoVSKb7kRu' + _0x30dfa8(_0x543936._0x3688d1) + _0x30dfa8(0x807) + _0x30dfa8(_0x543936._0x470840) + 'RUmURYX1g0' + 'gS1ohL3kqH' + _0x30dfa8(0x615) + 'U2Qny9SBAU' + 'UmHEkYuAEt' + 'mlFJpdqqKo' + _0x30dfa8(0x92e) + '28ywaeCMvI' + _0x30dfa8(_0x543936._0x5f299e) + 'XRIvrQ49ut' + _0x30dfa8(_0x543936._0x21c875) + _0x30dfa8(0x8d2) + 'FoB1c/525a' + _0x30dfa8(0x948) + 'HecCECtwvB' + 'o9w+lj9ww/' + 'hof/epLY8j' + '9nHn5j/a4C' + _0x30dfa8(0x349) + 'BVFb2KIi1h' + 'DGZEoOQKCk' + _0x30dfa8(0x910) + _0x30dfa8(_0x543936._0x5bfa79) + 'HrqDNr2ruU' + 'iFTZ6aJa4c' + _0x30dfa8(0x19b) + 'khfwuEtrwu' + _0x30dfa8(0x8d3) + '8MGD98+chK' + 'c8Q8OuMRj+' + '9wAIX3T7Ad' + _0x30dfa8(_0x543936._0x5b2136) + 'I4YzOOIByz' + 'ib/ydn6MP+' + _0x30dfa8(_0x543936._0x1b88a7) + 'KR1lTa8clq' + _0x30dfa8(_0x543936._0x2491c8) + _0x30dfa8(_0x543936._0x4711d7) + _0x30dfa8(0x55f) + 'ux78wLitPH' + 'nFQMQ0CNl1' + 'LVaTZza7YU' + _0x30dfa8(0x4c5) + '+MIVJbKYDH' + 'Lcs1bgkgIo' + 'lcTH/m+cfL' + _0x30dfa8(0xae1) + 'q6gh0tt1VL' + 'pR4ruKPx0d' + 'G5yLoJpPCT' + 'TOiM7ed5d0' + _0x30dfa8(0x890) + _0x30dfa8(_0x543936._0x3f7f61) + _0x30dfa8(0x858) + 'yLSUud8SRE' + 'mqFbONHCIK' + 'IEVU6ggoPu' + 'YCsFgqGu2S' + _0x30dfa8(_0x543936._0x455aad) + 'S4a0yErOtY' + 'YlXiOcp4Lj' + _0x30dfa8(0x185) + '9OM8IOkcxP' + 'a2ftby6jvw' + _0x30dfa8(0x50f) + _0x30dfa8(_0x543936._0x39184f) + 'kSjEx/D/dq' + '1LSOB1MP/I' + 'sGG/5c6JR3' + 'GejK9HnXuG' + '5n8qfkHdca' + 'I1PLBG+99b' + 'ep2jeDl6Yh' + _0x30dfa8(0xab6) + _0x30dfa8(0xf9) + '20Ku5aRSxa' + 'zgp5TGTC4/' + 'qWOfO1IlIz' + _0x30dfa8(_0x543936._0x27ec73) + _0x30dfa8(0x8c9) + '+pB40Apjhz' + 'vCJoo0tURh' + '/Np/vsPqpF' + 'G/7n6cf21V' + 'n/k6P7/3wJ' + 'ys1zlTTAaY' + _0x30dfa8(_0x543936._0x42a9fe) + 'nX+cJHA3Q9' + 'xVyYGCx94+' + '2l12FVkoCR' + 'MBGz6SJOHM' + _0x30dfa8(0x328)) + (_0x30dfa8(0x37d) + 'q1GP9vcLhq' + _0x30dfa8(_0x543936._0x1d6ff5) + '9J4nwMmxNk' + 'N7jDpRRrW2' + 'ombxc1DfR4' + 'I62uhQjMc4' + _0x30dfa8(0x44a) + 'Zvih+jZUru' + _0x30dfa8(_0x543936._0x36b38e) + _0x30dfa8(0xc25) + 'Qhrf2qWNUC' + _0x30dfa8(0x2ef) + 'lF7cmW6Y2s' + 'frpKqacyQW' + 'I3vhLOnOpY' + _0x30dfa8(_0x543936._0x42871d) + 'zCup5aH9Y5' + 'G735WPWDpY' + 'gsyusQ1ZIG' + '8sFXu2HuD0' + _0x30dfa8(0x757) + _0x30dfa8(0x95f) + 'tqrv7pDTcf' + _0x30dfa8(0x8b0) + _0x30dfa8(0xa57) + '/oO4L6yAwS' + 'aOzj63cgxP' + 'n/wpdCY1cu' + 'P++kbKC+YY' + '1iZKpqe3ds' + _0x30dfa8(0x708) + 'zcLyH4INtA' + 'AzZrGgxMlW' + '7LFfv33x4l' + 'lYCVOErIy1' + _0x30dfa8(_0x543936._0x4663d7) + 'G+xoNdZ6zS' + 'B1uwgQgxsn' + _0x30dfa8(_0x543936._0x2d65bb) + 'Y+F7C0UOon' + _0x30dfa8(_0x543936._0x35936c) + '+O688lFd8P' + '6rX/FKtjmq' + '951LDZAbiH' + 'bcljwsjPYm' + '3qEwcBPGm9' + '46VwAKOt8w' + '5tZm4TXSYD' + _0x30dfa8(_0x543936._0xeb008) + _0x30dfa8(_0x543936._0x51e2d7) + 'OJd36UGTsl' + _0x30dfa8(0x3b6) + 'ySbxRKsG5G' + 'LK9TBSz/8E' + _0x30dfa8(0xce8) + 'iiTVYtWSSY' + '9vmr4Oxl8d' + 'g5jNPFHDA7' + _0x30dfa8(_0x543936._0x40ceb8) + 'q3iN7+6l8S' + 'PldNXs+1eV' + _0x30dfa8(_0x543936._0x3d1f81) + 'TZSc3sZMUD' + 'elE1uDGuyA' + 'q65MJdU7dd' + _0x30dfa8(0x74f) + '2mfdZ/EDQ4' + '0Sna6aLTDw' + '5OJp9ymb8f' + _0x30dfa8(0xb91) + '0eyx72ceae' + 'GxbpWNvNDv' + _0x30dfa8(0xe7) + _0x30dfa8(0x51b) + 'AtdMLjc353' + '2HV1MY1y/K' + 'hfzgK+gry1' + _0x30dfa8(_0x543936._0x37ba85) + '7rsFES7vjZ' + 'uHd/Wd17IF' + 'vfb7AuEhT3' + 'Kv4PHaUzhm' + _0x30dfa8(0x213) + 'Rd+1cbvOK/' + 'Nrw0eHvBWn' + _0x30dfa8(0xba1) + 'mHJzaeCdjp' + '2MyewDp8TV' + _0x30dfa8(_0x543936._0x1c0022) + _0x30dfa8(_0x543936._0x5c32fa) + _0x30dfa8(0xa64) + _0x30dfa8(_0x543936._0x3fd29d) + _0x30dfa8(_0x543936._0xb062e1) + _0x30dfa8(_0x543936._0x4b864b) + 'SyaO2W6eHX' + _0x30dfa8(0x9f4) + 't6Y35nupLJ' + _0x30dfa8(_0x543936._0x72226f) + '3gQagDHIy7') + ('de0rX9Kavs' + 'CiIbK5+PM/' + 'vrsnar0oVy' + _0x30dfa8(0x1a6) + '4shFTy/IPX' + _0x30dfa8(_0x543936._0x3fa558) + 'un7/DTjdii' + '19CdK1C/Jy' + 'wYxSiXXScV' + 'gpivFCSqjP' + 'Cd6rd9Lm9n' + _0x30dfa8(0xd1b) + _0x30dfa8(0x486) + 'zmy8sK/wPz' + _0x30dfa8(0x81c) + _0x30dfa8(0x9a5) + '2ebEN5m4KH' + _0x30dfa8(0x32a) + 'xgrVup3pa6' + 'PLm02XsMSe' + _0x30dfa8(_0x543936._0x17a429) + 'zKgJUYl8Y/' + _0x30dfa8(_0x543936._0xd41eb1) + '7/pn8OxvrK' + '6RVVbFR6fX' + 'jUa3/P58Zg' + _0x30dfa8(_0x543936._0x4fc944) + 'YIRTu5OKwV' + 'SHsbvDp3w1' + '2wZSYU7i20' + '7f8QfrsKfg' + 'nVjcBl7kkG' + 'yFO5ODCYuH' + 'L9lgw/HoGK' + 'L5jaMiz8Pr' + 'C6pgbi40xR' + _0x30dfa8(_0x543936._0x19c923) + 'kjWamm8SRq' + 'vIK1Xm5KPO' + 'jEvvrp82eQ' + 'sLtuMNbwse' + _0x30dfa8(0x562) + '6ie7MuGazI' + '7mcsomxLHF' + _0x30dfa8(0x2f1) + 'Yfilhh7O5/' + 'Pdf3S46WLH' + '2PBG1ZOuHG' + 'GCzav3L3xw' + _0x30dfa8(_0x543936._0x30de2f) + _0x30dfa8(0xb4b) + 'aYFON3sQLx' + 'vgpFxsvGtD' + _0x30dfa8(_0x543936._0x15650f) + 'k7R7wgHHKa' + 'rgB6/0wbLJ' + '1p/NOtWKgX' + 'l6bAukx1/7' + 'n3PMaoGe44' + 'UKqByrjV/d' + 'KMRyV4VBuH' + 'TBM713rGyU' + _0x30dfa8(_0x543936._0x26ecba) + 'HGsbWJlcBl' + _0x30dfa8(0x49d) + 'e/lt8O57ZD' + _0x30dfa8(0x10c) + 'bUCVq8CAfp' + 'JYaHGMIIx+' + _0x30dfa8(0x2d1) + 'cfITh88gnB' + 'iL2wZhPcMj' + _0x30dfa8(_0x543936._0x5e5dac) + 'Ckw8vLSpkM' + 'veRvNU/f3G' + '6NbLh41foF' + 'T2hj2kiOUU' + 'R/8tWnRQEC' + 'GfvH4BnjJt' + '2MwwUMNyTg' + _0x30dfa8(0x13b) + 'm0CSrO5hpo' + 'dcByUxJm/Q' + 'DMqsKGdo7O' + 'XrvM9vXx/6' + _0x30dfa8(_0x543936._0x1c150d) + '6KLX9gFsWH' + 'o4HZ+3b5hr' + 'hfd/NspZ88' + 'jcO7A+6OQI' + 'jYX708BrMc' + 'TRgUxzi5Oy' + 'luk45Fh3f6' + '8V+31xWAqY' + '+PwYCB6juU' + _0x30dfa8(_0x543936._0x2cc530) + 'BjZAYxdERI' + _0x30dfa8(_0x543936._0x595462) + 'mkW+DVaImY' + 'cl5czZEI/P') + ('2JCx+JnyLS' + 'bT3I0tvYdS' + 'Jm56/+3agu' + 'MxJmDiGcy5' + '/n6sCfwHnD' + '6n2mf3xC2+' + _0x30dfa8(_0x543936._0x4454e6) + 'q6W9PUCRoz' + _0x30dfa8(0x804) + 'vDNhrBl7Ef' + 'gNv7+Mtn4g' + 'CQb4UVl+2I' + _0x30dfa8(_0x543936._0x1a1a07) + 'kMMPQImCFW' + '9Ai83TM4nt' + '4Pl21aZifg' + 't1y/RUdBZW' + _0x30dfa8(_0x543936._0x15c71c) + 'Y2V/csPQDg' + _0x30dfa8(_0x543936._0x929c41) + 'ADj+EnephN' + '0rSF3mLaFh' + _0x30dfa8(0xb18) + 'fBlwOjQ07L' + 'w1zfk2+ENW' + 'wGMNt6re3t' + 'NrPZHMbWSX' + 'MqQGN/tDk3' + _0x30dfa8(0xc16) + 'ANoNhE4M+N' + 'xv2WA8TiwN' + 'Zs6DvzMQ6f' + 'uIZuUAkFZx' + '12GRKnc0lj' + 'bGVTchRsmG' + _0x30dfa8(_0x543936._0x250ddb) + '9pRi54MkRa' + 'QwSHst94e7' + _0x30dfa8(0x3e7) + 'Xv6s4sgn6a' + _0x30dfa8(_0x543936._0x2c79d7) + _0x30dfa8(_0x543936._0x41708c) + _0x30dfa8(0x8f2) + 'CQy6jWCvG+' + 'sYLA5Rwsnd' + 'rq9AIWuwpO' + 'xmceIA5+j5' + 'lXQbaxUjs3' + 'uGUPjpym2O' + 'GBBWay27TT' + 'lvZkztddXe' + _0x30dfa8(0x52f) + '29CWk82Q5R' + 'pmPJIRQ6/4' + 'JYqcHGWvWA' + '5YLQQyV+Oo' + _0x30dfa8(0xc15) + _0x30dfa8(0x4f2) + 'iUeGen2Ueo' + 'mT0riyt8nC' + 'T8CZprI7LG' + 'HFF4MtlWI3' + 'pSR5FK7I0m' + 'WMFjjNWjAY' + '63de/BoA60' + 'cJX8VYBhkT' + 'KsiPMiiKFC' + 'VkXg76Vxy0' + '4g+zWwFa42' + 'vSvyc0Ob0+' + _0x30dfa8(_0x543936._0xd42c04) + '4kJARInN/D' + 'aRMm44EOxt' + 'RakCEC2Msi' + 'YUOlbLk7Oc' + _0x30dfa8(_0x543936._0x185658) + 'rD86s2qhUy' + '9x1NzLs3Ns' + _0x30dfa8(0x974) + '/YrXGL6YCV' + 'z7NCDl2Dfz' + 'Ybd6qJna8U' + _0x30dfa8(0x460) + 'iAEh91GhEE' + '/O4Fr9cbj1' + 'tbuO0Topih' + 'xNpiG3a0yZ' + _0x30dfa8(0x248) + 'Seqq+JrL/9' + 'FgrD8+w/Te' + 'KRcF+KhZ17' + 'KtB/rM3Qyw' + _0x30dfa8(_0x543936._0x4a31da) + 'N4sqQGGJjQ' + 'AXBQdd/aO+' + 'UadbWH0jpn' + 'nQPnEoCPIo' + 'kpBnqc4N3d' + 'vM/cZJnAy9' + 'iSJYfD2OXB') + ('5lixOQCm8c' + _0x30dfa8(_0x543936._0x508c8e) + 'zD8ejDXru9' + 'J1ltXW2WYC' + _0x30dfa8(0x288) + 'AgypSN6cAB' + 'YrXkZeuQib' + _0x30dfa8(_0x543936._0x4ac8bf) + _0x30dfa8(0xcfe) + 'Y4vYRgKQ14' + 'fSiGK0AghD' + 'pxrIhDzmkU' + '+T1N5skTmD' + '1sC0uSGwuh' + 'cGyhJCt04m' + _0x30dfa8(0x34c) + _0x30dfa8(0xb9c) + '35I5DuQ4Ll' + 'gEYsB6yk4w' + 'Auq5VcsoxY' + 'dU3jshlz63' + '30HHPA+Ntc' + _0x30dfa8(0x7b1) + '+TAnVSUB1O' + 'h1eiddgC7A' + 'OcJORzgqTG' + 'eX7vDs42gQ' + 'cbNnb3+TYY' + _0x30dfa8(0x4ac) + _0x30dfa8(0x6ff) + 'D0bHw3W/G1' + _0x30dfa8(0xb51) + 'sh05Goyx0r' + 'y8bJJHCKxd' + 'naOxAZgMWy' + 'Lwx0GrblgR' + '+prh34OOXn' + _0x30dfa8(0x97a) + 'F1pJXgGrFT' + 'GEUIGVfoI8' + 'gRf21TfxE1' + 'SsarNiZgv/' + _0x30dfa8(0x768) + 'ePTlc7TRJ/' + '07g9a78rD1' + _0x30dfa8(_0x543936._0x33abd2) + 'BFq1HE0z5W' + 'iahjIIRVFi' + '7mJiIpmBkw' + 'MOGuZdI6xW' + 'CPHSygrV6x' + 'XBQeqctVii' + _0x30dfa8(0x6c8) + 'JwpUKW1Ljg' + _0x30dfa8(_0x543936._0x48837e) + 'meNMlixWLN' + 'sMwVVSyzjj' + 'zNxZnWtp1B' + 'LPxMV/qzXO' + _0x30dfa8(0x662) + _0x30dfa8(0x422) + 'pxZ3+ZWTa0' + _0x30dfa8(_0x543936._0x2040f7) + 'wUT6opv8Pr' + 'xxZYQWUjA9' + 'loXqDgc3ox' + _0x30dfa8(_0x543936._0x55602a) + _0x30dfa8(0x362) + 'Dsanpesp3Z' + 'C67fz2Ds0C' + _0x30dfa8(_0x543936._0x51df2f) + _0x30dfa8(_0x543936._0x4ffc51) + _0x30dfa8(0x216) + 'MisFN82Oxq' + 'uP/jMcawPD' + 'b/kc2ARLDM' + '4MXnqHdMxw' + 'wI48LNpVPs' + _0x30dfa8(0x82c) + '9DRR0Og0TT' + 'RKoTZGdJJT' + 'iIFwezeSWt' + 'NTteFC7uOQ' + 'egJSVd7IA0' + _0x30dfa8(0x2b8) + 'TcnscOXrjr' + '1Jd3358H0X' + _0x30dfa8(0x57e) + 'pPirWQxMP9' + 'jBD9i3Pjuf' + 'i5qA0xe+Zz' + 'qYvlTdAFju' + _0x30dfa8(0x1ee) + 'rDhiz07bCB' + 'h1W+cc3Z2r' + _0x30dfa8(0xacb) + _0x30dfa8(_0x543936._0x1b0841) + 'cQATrsn/I7' + 'Juq3jN90zN' + _0x30dfa8(_0x543936._0x2cb577)) + ('gt2Ylflt10' + '8mXzqDnuvE' + 'ubSDayIHvJ' + 'hBK3FDMq1b' + 'XFOF1U4cZ8' + _0x30dfa8(0x89a) + 'yMrH2QArCs' + 'TanBeR0vUc' + _0x30dfa8(_0x543936._0x14cb40) + 'alCIXOYd0p' + 'naNgs+u1Ym' + 'n8q6cOKaYH' + 'j7ER+5J+32' + _0x30dfa8(0x710) + 'WtFGGBC2TA' + 'TFs9kz4yV8' + 'zCVov33ftX' + 'cIqyugkgLx' + 'Ejxd0gdQwY' + 'aplOAQAy/F' + 'w3ZEmy9Sft' + '4iVzJ8vMcE' + _0x30dfa8(0x9fe) + 'Rrp3lYZ0rn' + 'MEWZZbuFa5' + 'izzJZ/qstb' + 'x7720XV4+R' + 'kWvJ18PfxL' + 'uHAfK+g9Zo' + 'Piw2NI28/a' + 'mavJvFnqBi' + 'xmY6yLg8IZ' + '5+KiQMa24v' + _0x30dfa8(0x80b) + 'zYGWQPGRON' + _0x30dfa8(_0x543936._0x23e16c) + 'S7FY5zDoHE' + 'Zo56j4ZwWu' + 'F64eeXJ3Lb' + 'b0TXY1iZ7J' + _0x30dfa8(_0x543936._0x8be400) + _0x30dfa8(0x50a) + _0x30dfa8(0x6f0) + '5/Y58HB9sn' + _0x30dfa8(0x3dd) + 'jxCgJAnVTh' + _0x30dfa8(_0x543936._0x50770d) + _0x30dfa8(_0x543936._0x36b7ba) + 'p6a0tEBGME' + _0x30dfa8(0xa4b) + 'p5coFE8TGN' + 'ZJYViHNs10' + _0x30dfa8(_0x543936._0x2779ee) + _0x30dfa8(_0x543936._0x2614d8) + _0x30dfa8(_0x543936._0x271671) + _0x30dfa8(0x5e2) + 'rp9+xy1Ox5' + _0x30dfa8(_0x543936._0x159ffa) + 'sENfrkDfHA' + _0x30dfa8(0x6b5) + '8IIvL2diID' + 'u4JwMpyaR3' + _0x30dfa8(_0x543936._0x3042b8) + '6VtDTcsuav' + 'IM0UHEr0iY' + 'VbTh6hiE3H' + 'btr+urXh4e' + '8ANTYaKvwb' + 'TMZd7RsSfu' + 'xb2KbNBoTK' + 'Cdvzl02FDq' + 'cTIarOWgCn' + 'k3qhQvRWeL' + 'FRFMcumwON' + 'CybnmKi/Ow' + _0x30dfa8(_0x543936._0x525e07) + 'GnZPBwLARA' + '1J1gToHNYZ' + 'GzYs9FVKiB' + '7+YV3XNSe9' + 'PrPR+N+H9d' + 'DHZ1grdLI1' + 'ap2/a7FjDB' + _0x30dfa8(0x4d1) + 'fXYfZGYFe9' + 'FTza4H1/fs' + 'ratVZF+vAF' + _0x30dfa8(_0x543936._0x41e2a3) + 'lVfyem2B+L' + _0x30dfa8(0x4a3) + 'YGfIgkCAJw' + 'E7NPLFWRDg' + '7RDgm7SvTM' + 'PQAOxMSyMA' + _0x30dfa8(_0x543936._0x39470d) + 'ncgZXOppwO' + 'yOFLzrRW6M' + _0x30dfa8(0x6b9) + 'LjMfDFPJ4G' + _0x30dfa8(0x148)) + ('D23/zL2fzC' + _0x30dfa8(_0x543936._0x23fd52) + '3V6ngvEWjK' + 'o7fB6n4sXB' + 'R0AKlAuvN6' + 'X4u818EOxB' + 'nkeoTK5kBC' + 'GrLahBhqYG' + 'Rrdl9ASRs0' + _0x30dfa8(0x2c6) + 'KQhbaHzr36' + '/w6we+LRNn' + '/knK/fczYw' + 'ZtVk5PWE79' + 'hiJ+iZviQn' + 'vaxUOF1bhR' + 'mQBGLk4MHc' + 'ZfpwTogbyc' + _0x30dfa8(0x245) + _0x30dfa8(0x47d) + 'PebbMgC4XI' + _0x30dfa8(_0x543936._0x3b5fc6) + '3OT9+sl27M' + 'PPsbZ1Rle8' + _0x30dfa8(_0x543936._0x1f6bf4) + _0x30dfa8(_0x543936._0x17535a) + 'JGErc8UTI6' + 'X7qNyKgYq9' + 'O1w3D93Q6s' + 'SzPpmuqcCH' + _0x30dfa8(0x56e) + 'IBW/l5pUJ3' + _0x30dfa8(_0x543936._0x4edfa0) + _0x30dfa8(_0x543936._0x350d9c) + '0ew8ZpICGh' + 'NYXrVzWIig' + 'CdEJIfLVLc' + 'ldJ9mKsXWH' + _0x30dfa8(0xc2e) + 'TN6Pr7TQvb' + _0x30dfa8(_0x543936._0x335d8e) + _0x30dfa8(_0x543936._0x5ac38f) + _0x30dfa8(0x2f7) + 'fFQRJV4hjl' + 'J14JDX8vr4' + '/NHzEG+iZt' + 'BTIosdcPCi' + 'XZg3RIRIPk' + 'HgCaMIVyLR' + '3DgIRgGAkN' + 'I4Qbn1534t' + 'iUWB56Odqg' + '2FpbIvH2jd' + _0x30dfa8(_0x543936._0x20896d) + _0x30dfa8(_0x543936._0x5709cf) + 'wbwtkEcdiu' + '3jBlfsf7co' + 'nP53QSAIdT' + 'dDiRqsQYzS' + 'WIeYunTU46' + '1GJitAR7Rs' + _0x30dfa8(_0x543936._0x1a7663) + 'AD0agMAH+A' + 'P1lEUov0KS' + 'htKQZiREYy' + '/zcPcJF1if' + _0x30dfa8(0xca3) + _0x30dfa8(_0x543936._0x4fb3ba) + 'ZpuycSNgCP' + 'Q46ctsfgwp' + 'NZReO7SlVX' + _0x30dfa8(0x21f) + '+tgB10w6gw' + 'AVAW7BtElJ' + '+7p7IA5tdt' + _0x30dfa8(_0x543936._0x32729d) + _0x30dfa8(_0x543936._0x36b56b) + _0x30dfa8(_0x543936._0x27ee6b) + 'aQaA3q2kdU' + 'JaKA2Qj0NQ' + '2LrqJyfUsn' + _0x30dfa8(_0x543936._0x57a2a7) + '/1aWU+ZLYs' + 'U4NYYiiNlJ' + '2box+T3bUK' + 'lx3MA6l32w' + '+IdTIJ3IQC' + 'qJFyoFr1PF' + 'kDdrffF6AX' + 'y1CyZPSvq4' + 'm11PYByDFk' + 'eI9gCY8gAC' + 'eNQ8LjoEgD' + 'QDH9hM7DxA' + 'EiekpYUAQm' + _0x30dfa8(_0x543936._0x545779) + 'pqUdf4ls7l' + _0x30dfa8(_0x543936._0x36b8e2) + 'MyqfOX6VVt' + _0x30dfa8(0x44f)) + ('j7WWBp7F95' + 'KyqdCBcTL0' + 'VEsq2ZEF2L' + 'aCjQEqWJsv' + 'UcPTW9sz+i' + _0x30dfa8(_0x543936._0x52b50f) + 'ENECGSh9+b' + 'ZiZjJhhzMa' + _0x30dfa8(0x4ed) + 'KCtBCkUZNO' + '9Vf/fOD4Vp' + _0x30dfa8(0x746) + '7ZmdLHrsen' + 'jbWvtmh+nY' + 'XWqEXBKOK8' + 'T5r8beObW1' + _0x30dfa8(_0x543936._0x27e2ea) + 'US6030skJV' + 'URV8kXlJro' + 'yPaYYdoKtP' + 'BfJ2oHYIZv' + 'TEISNANYDU' + 'cUE+GQBVKs' + '3SAsCjvwek' + '+xAxpSETh7' + 'huzyFYApHj' + 'zNNY33Yd3E' + '8HU8+0B2Rg' + 'jfa9c82S6q' + _0x30dfa8(0x5e1) + _0x30dfa8(_0x543936._0x52222f) + _0x30dfa8(_0x543936._0xac291c) + 'S76wYQfPGW' + _0x30dfa8(0x75a) + 'vCjG+iwPww' + _0x30dfa8(_0x543936._0x2d7a46) + 'amL1uTrse6' + '7pUFpoGBao' + 'cNH6zDGX3f' + '2EMd7qxMlG' + 'CboiS8w4ea' + 'L4dCtzt/8a' + 'd/VchMo2Z4' + 'K8BonxWCSI' + _0x30dfa8(_0x543936._0x524971) + '1qnUyQmE5Q' + 'wYmnKhIHDj' + _0x30dfa8(_0x543936._0x263835) + _0x30dfa8(0x799) + 'nAtwIEeDyI' + '1biq+oA90M' + 'MsJvRbUdcC' + 'ZFDsagTICN' + 'hxBj5AWieQ' + _0x30dfa8(0x42b) + 'lmHieclL75' + 'N4Pk8N7aMz' + _0x30dfa8(_0x543936._0xe64e1) + 'crpn02zDGO' + 'RQszAbou9j' + 's+N7PimdPK' + 'KjpIBCBXvF' + _0x30dfa8(0x142) + 'nXq7ni8xa5' + _0x30dfa8(_0x543936._0xc3e80f) + '0lAPXdoI0G' + 'yOg/dZunGV' + _0x30dfa8(_0x543936._0x169580) + _0x30dfa8(_0x543936._0x154760) + 'SW7eEhox6S' + _0x30dfa8(0x7f1) + _0x30dfa8(_0x543936._0x550506) + 'YK8zzjc4Fu' + 'shI0v2DdaE' + _0x30dfa8(0x837) + 'WIb+vAmbIH' + _0x30dfa8(_0x543936._0x57f572) + 'wRvlDx9NpK' + '1C1eyUtwpA' + 'QGRMnVWvf0' + '0bQzRRue9M' + _0x30dfa8(0x187) + 'UPk8zpm1o7' + 'bn7UkENGjO' + 'qGe7bHPG4S' + _0x30dfa8(_0x543936._0x273647) + 'YI8Dn8UUbm' + 'doGHPwtRr4' + 'hLQ3HrsTB0' + _0x30dfa8(_0x543936._0xd69eb3) + '6TfasNM2WP' + 'XJ3gvE/gjS' + 'cSvzYHv6BT' + 'l4G1AI4QHF' + _0x30dfa8(0x2c9) + _0x30dfa8(0xb1f) + 'kmLCDz+2/P' + _0x30dfa8(0xb4d) + '14yb0B5k4h' + 'j3aGBctyF6') + ('8ZTsHrAHkx' + _0x30dfa8(_0x543936._0x4c45bc) + 'Yn3o8FAamL' + '5KAwjZ9frv' + _0x30dfa8(0x4cb) + 'BKk/pOdOs/' + '74pVm445ff' + _0x30dfa8(0xc31) + _0x30dfa8(0xa3a) + 'bIPLhz3hSh' + 'lR1ijC95gc' + '16p3hYZiC3' + 'KJhZqL3Q8p' + 'Zqe6sw+ZAO' + 'vWhjBjL6I6' + 'p4yCJhBj4r' + 'k7EHmXNHCd' + 'gPEyaw2Dvx' + 'NjiAdqYhEw' + 'Mceu+Jq/52' + '8zE657r9/Y' + 'fXHZN/3ftN' + 'mHj0S6/Enc' + '2zLf06xlgc' + 'HkiHDMyt2f' + 'GTKdYmFROu' + _0x30dfa8(0xce7) + _0x30dfa8(_0x543936._0x3f0891) + '8XVmnPObV+' + '9vWJfde0g+' + _0x30dfa8(_0x543936._0x39a0c9) + _0x30dfa8(0xc89) + 'QYUNgQd6GC' + 'AYBJ4kw2EC' + 'ELRDAE/ogG' + 'BqcoCCGVBW' + 'UYARd1p/9t' + '6Hg68y5hiY' + '4HQM1kIm+c' + '9oxdID/ivu' + '65xtSoSUjJ' + _0x30dfa8(0x75b) + _0x30dfa8(0x9e6) + _0x30dfa8(_0x543936._0x4af8df) + 'qANF8hGR54' + 'pbLueHFj4w' + _0x30dfa8(0x918) + 'fkqJzQIUcA' + 'TPYMIEEUuO' + 'kZQdCO2CEA' + 'dgqE1RfxGk' + 'R4wkMyymIC' + 'AQ0g2JPRzX' + '81jDB3PcRF' + 'LnXNPabMxT' + 'wIUj9WpPJH' + 'tcepplOvXF' + 'qZOzYwmx3J' + 'gstQrBgzBQ' + '4ssMYUGDt1' + _0x30dfa8(_0x543936._0x2de661) + _0x30dfa8(_0x543936._0x50d883) + 'cHGfumK289' + _0x30dfa8(0x5cb) + _0x30dfa8(_0x543936._0x4e346e) + 'oUAANoYIeM' + 'QIB5cenBQA' + 'bfRTDqksyu' + _0x30dfa8(_0x543936._0x989399) + 'XEvqSamEmM' + 'sliD+0zWY0' + 'ITNUwKa8ed' + _0x30dfa8(_0x543936._0x106342) + 'ds+J/DGdmG' + 'Tz7o1umczi' + 'TVwdIpQqtK' + _0x30dfa8(_0x543936._0xd45ea4) + 'Ov9ZRbM/sv' + 'hyFl+lPJhw' + 'g19ZkHCVlk' + 'PD5sMs6OIX' + '3WQl6z8VM+' + 't7nfdmRGYy' + _0x30dfa8(0x3fc) + '0JmG4vjBec' + 'tinScfkTjo' + _0x30dfa8(_0x543936._0x1844a9) + 'fWJeKyjave' + _0x30dfa8(0x275) + _0x30dfa8(0x132) + 'mw6WTrH6sc' + 'EDD9jD5BMO' + _0x30dfa8(_0x543936._0x1b6dd5) + 'iKmqsiHHeE' + '/eU+jInrZo' + _0x30dfa8(_0x543936._0xb29c41) + '48R+GP1WAz' + 'zfltUfJMZ3' + 'JY2yKMzLSc' + 'M7ob/658OD') + ('qmyThidsYU' + _0x30dfa8(_0x543936._0x2e6def) + 'TKDGxmztuH' + _0x30dfa8(0xeb) + 'vo/C6EM7mH' + 'aXThH8KjhV' + _0x30dfa8(_0x543936._0x43e861) + _0x30dfa8(_0x543936._0x49ff3b) + '+mDHkMvUpp' + '4jkJbCJCt+' + _0x30dfa8(_0x543936._0x17337a) + 'yHGsC4bpAI' + 'zNjH8i4tQ8' + 'P6BMbC+wCg' + _0x30dfa8(_0x543936._0x26dae5) + 'ef2xXrd9hi' + _0x30dfa8(0x813) + 'k8E8euaKe/' + 'cEnTdJ2JWz' + _0x30dfa8(_0x543936._0x2ce691) + '0OPcwbIpQp' + _0x30dfa8(0x715) + 'Xm3es17d9s' + _0x30dfa8(0xa9c) + '6UczuIA92A' + _0x30dfa8(_0x543936._0x10f4a0) + '5nnjOwpZfG' + 'AyAmq4lwlN' + 'MaKkAUSGLi' + _0x30dfa8(_0x543936._0x4c24) + 'OGGsGEKdQL' + _0x30dfa8(0x673) + 'Z5sbh58cK6' + 'N0Uv3Xg324' + _0x30dfa8(_0x543936._0xc0cefd) + 'hgkJX0ZHMc' + _0x30dfa8(_0x543936._0x2bc1ae) + _0x30dfa8(0x3fa) + '3hKieMl47t' + '8bdn16jXbB' + 'zh0Xq0e6er' + 'sBtAy8eA2I' + _0x30dfa8(0x26a) + 'eUGsEAGr+G' + 'C4BSKWAnR4' + 'wnWdRw2nMD' + 'qJ9wjbbb8J' + '2dhqFIhhHK' + 'a0K/AqzZOH' + 'gW5OCzM1le' + 'J+1rewWmbJ' + 'Pkwo7ZibvU' + 'ZzJl79cTTw' + '66prbioCNC' + 'XTiUzBKnVb' + '6mdO2dvJrx' + _0x30dfa8(_0x543936._0x36aa81) + '6i74IvJXJx' + '+AqGlgyBFM' + 'jCLY3hJzQi' + '2HmxCYsjj4' + 'sDgVAa/geg' + 'RybtvyCBIX' + 'bsjM/BPIyv' + _0x30dfa8(_0x543936._0x2e1c02) + _0x30dfa8(_0x543936._0x512e4a) + 'RtxhoGFLB8' + '6AWjq1BR1L' + _0x30dfa8(0x81f) + _0x30dfa8(_0x543936._0xe4d585) + _0x30dfa8(0x5d4) + '9qwGdAgAUE' + '8SOQZRN6B8' + '0jJHYQIItn' + _0x30dfa8(0xa60) + _0x30dfa8(_0x543936._0x585c41) + 'Y6dI9uetOz' + _0x30dfa8(_0x543936._0x14da8c) + 'sSiPcd0UGQ' + _0x30dfa8(0xa35) + 'Z+Lsamllsb' + _0x30dfa8(_0x543936._0x36febc) + 'rcCNxtIAVD' + _0x30dfa8(_0x543936._0xd5a8c4) + 'q0316p/WPE' + _0x30dfa8(_0x543936._0x4895c2) + 'VO02dGMbQA' + 'aGPfFxHAEi' + 'r7IzZ9FCMu' + _0x30dfa8(0x350) + 'U9/KYnRm9y' + 'QD381gd5kI' + 'E8KoY0NAo+' + '/B/oRX18Kw' + 'wimxDg/ETw' + 'c2M23VtsIk' + 'BzENUjUJe0' + _0x30dfa8(_0x543936._0x5bb07b) + 'YNVJQHCKtQ' + _0x30dfa8(_0x543936._0x35a619)) + ('G4aqVr13z8' + _0x30dfa8(0xa2e) + _0x30dfa8(0x9c7) + 'R3pCGWegKg' + _0x30dfa8(0x46e) + 'APzcAfs19i' + '7wZITlEBQq' + 'E0g7ZpoNVr' + _0x30dfa8(0x582) + 'RYGROHy05n' + 'Toz0QOa18a' + _0x30dfa8(0x686) + 'hVkIDeKNU2' + _0x30dfa8(0x94b) + '8rFNGx99lt' + 'zV8E/Fqovd' + _0x30dfa8(_0x543936._0x3130ba) + '/AdwNt4oVu' + 'g53RMzfkD2' + '8HCHRDMe5i' + '3KYZxpszjM' + 'gijQCY0tKQ' + _0x30dfa8(_0x543936._0x5aa175) + _0x30dfa8(0xcd1) + _0x30dfa8(0x9a0) + 't5CG3uU6zY' + 'w56SignPno' + 'sF9gm6WgxW' + _0x30dfa8(_0x543936._0x31f528) + _0x30dfa8(_0x543936._0x8e7e87) + 'frh0yPUPfK' + 'jweu+eIEAw' + 'CzefkYjCYz' + 'Egifkuhr1g' + '4AxiUioZcB' + '8ngZ3J6jwe' + 'N2oxBIJADV' + 'mWjAYyJDPW' + 'wDd2QtxI6Z' + 'BQ2rBhIZJW' + 'IglYEzcqMO' + 'O053B/jaGY' + 'fmCSfMHeHE' + 'd2K+S2UYN3' + _0x30dfa8(_0x543936._0x132ebd) + _0x30dfa8(_0x543936._0x4ec2c8) + 'N9SptqOV7s' + 'Moe03xlG70' + _0x30dfa8(_0x543936._0x4f73c2) + _0x30dfa8(_0x543936._0x44c341) + _0x30dfa8(0x34d) + _0x30dfa8(0xd03) + 'R8CkwfBkMw' + 'YSYVinIZvS' + 'gHhuPOBsMZ' + '9q5v2xK3Cq' + 'WEzs+vC2HK' + '3Mkb2fbG5u' + 'JtnZSMwETA' + 'ztH3QN7QBJ' + '8UKFeYP3g+' + _0x30dfa8(0xc03) + _0x30dfa8(_0x543936._0x89917b) + 'nMKrcHIYhZ' + _0x30dfa8(_0x543936._0x32211d) + '2GVdEX6qfs' + 'rExUvM08Uj' + _0x30dfa8(_0x543936._0x1d5f0a) + '10TQ0QFTZy' + 'gtDUgaDEMO' + 'Bl6rjwozAa' + '47breegJX9' + '7WQ0vU6ybN' + 'lPTrX9xqdy' + '/o31uY290N' + _0x30dfa8(_0x543936._0x2a9e26) + 'wO1Nn2rFSb' + _0x30dfa8(0x94f) + 'eeMD69W9Pe' + '0ZeOHUhCyX' + _0x30dfa8(0x584) + 'Uz44GpHJTF' + 'QaABu4aXoa' + 'G9hBfE3sWe' + _0x30dfa8(0x257) + 'Rj3NjFWo/G' + _0x30dfa8(0x25e) + '7GEovabI61' + 'HLdbT05X+d' + 'DJXbsjv66U' + 'L/zxBdD6YV' + 'lbaAiextpn' + _0x30dfa8(0x324) + _0x30dfa8(_0x543936._0x2db20c) + _0x30dfa8(0x546) + 'JBM7BXnJUq' + '2AMslwh2YM' + 'GyAF/MzjXt' + 'l8SGpiFsl+' + 'LZfUg/dFTx') + ('vLYABPmeJH' + 'ZXKCqcfgw0' + 'PPQQSiVE2s' + 'mqIoGn/KpI' + 'rJ7vGyl3qv' + '2a2LGTTzp1' + 'fPqWf5t/lx' + 'P7WLjmmQx7' + _0x30dfa8(0x829) + 'wQ/8o1tQNb' + _0x30dfa8(_0x543936._0x200017) + 'baU/BqE6ES' + _0x30dfa8(_0x543936._0x59f41a) + 'E27DF/ui2j' + 'P87EXB/j7R' + 'hyMura2AoY' + 'b2KfnNyTNM' + 'IcJwgU/yFd' + 'QzAMHvzg6Z' + _0x30dfa8(0x403) + 'OnkN/PbpJ9' + 'Ox7neu+YU3' + _0x30dfa8(0x10b) + 'HRs/G2xHWm' + 'awDijWlTW2' + 'XpPJe++s1/' + _0x30dfa8(0xc68) + _0x30dfa8(_0x543936._0xde23f1) + 'EExo2HQUqw' + 'mo+BIjLaZU' + _0x30dfa8(_0x543936._0x323e8c) + _0x30dfa8(0xb23) + _0x30dfa8(0x3f4) + 'ZWJSwJjP1j' + _0x30dfa8(0xb0f) + _0x30dfa8(_0x543936._0x14bc5a) + 'Ne7E5BMabQ' + 'AyfvvrIefn' + 'v1Zwe0PKZU' + 'PPGQOt+FYT' + 'Y2R0A+jFIE' + _0x30dfa8(_0x543936._0x4862ab) + _0x30dfa8(_0x543936._0x272ae9) + '2zUwnXDNDm' + _0x30dfa8(0x57d) + _0x30dfa8(_0x543936._0xfcd1d6) + 'ZexRw4sL9k' + 'AXYts8cLKG' + 'xrwcdqW9eh' + 'xCoRDWS6SF' + 'OvGqR4S0+v' + _0x30dfa8(0x10a) + _0x30dfa8(_0x543936._0x21bf9b) + 'VcUnfHPl/Z' + _0x30dfa8(0x90e) + _0x30dfa8(0xa85) + '5w1tkXFU4M' + 'aZRyvXf3mk' + 'Bz+ZGBEVdE' + 'r7KZiaUKVg' + '6lcyzNkxQB' + 'oGQoaWYlDO' + 'uOUa7vTRGm' + 'rWvhuSYYcU' + 'vBcp5BCkpa' + 'WFQhAyZFPo' + _0x30dfa8(_0x543936._0x40cc14) + 'Sop+rjkDaf' + 'KJ64sFCwr+' + 'DdytQZ3pnt' + _0x30dfa8(_0x543936._0x1e82cc) + 'uf4xTgmp1r' + _0x30dfa8(0x1d1) + 'GlY840haEw' + 'jIUgjylVlD' + 'hBCLCNjKEj' + 'hpnymPywo1' + 'KBWRlM49ih' + 'm70nkCBxFm' + '5YdF4HHKMg' + 'sgkkj+BRLA' + 'Gk0TQUx8MA' + '0joI3f72CQ' + 'fjnEw29YWK' + '1eMLioel/J' + '77U9uBysW/' + _0x30dfa8(_0x543936._0x4e3562) + 'iPgXOB0ikd' + 'oDe/7R17dJ' + 'faOXRP3/1n' + 'wZXBvhuiiv' + 'X/mD0PDrYi' + 'jpVYxm+iJ8' + 'eKBgIZiX9s' + 'pXTzbUWQZo' + _0x30dfa8(0x2bc) + '7YbBldH++P' + 'cxxIKTr4/8' + 'jx33SlKE+z' + 'T3z5XcuW+V') + ('m0zo1rQOdu' + 'hynEKR7vvd' + _0x30dfa8(0xcea) + '674AALrrAL' + 'Zk4MmgvBYD' + 'fq3IR4QWdc' + 'C7DggvGulA' + 'QQtj2NeGEw' + 'w9gOfJYdMi' + 'jjdyRRN9Dp' + 'o4aFvgoNSw' + 'sNE01Y94Pm' + 'P9HKGdQT1s' + _0x30dfa8(_0x543936._0x34eb70) + 'HdmnYxu2lq' + '+/cqx6VDfM' + '/UQjRhx3q3' + '1Ea331G1U3' + 'pa36sqcZr8' + _0x30dfa8(_0x543936._0x4eb5d8) + '5oQeDaJxxA' + 'wetmbhDi3o' + 'gTxjp4YykD' + 'UDedDdlsjD' + 'BhEXDSCLa1' + 'pCkNvRCmMl' + 'hvHOtLQ0LJ' + 'gIsTDAMIyd' + 'fu/cARhfh9' + 'V41+3NA4lQ' + 'XIR7oeP317' + '58QeMYkSXi' + 'oqZEJREjrg' + 'R69Yef33LV' + 'X4b0xBmOII' + 'uOGRcWNKRt' + '4gWM3yc+kw' + _0x30dfa8(_0x543936._0xc019a0) + _0x30dfa8(0x298) + 'OQgYWWRu4f' + _0x30dfa8(0x5d0) + _0x30dfa8(_0x543936._0x184bde) + 'IXRaUSbRvW' + _0x30dfa8(_0x543936._0x324467) + 'Nu1kHHy6Hr' + 'Ph2x89Rsn6' + 't68s/cebRa' + _0x30dfa8(0x58a) + _0x30dfa8(_0x543936._0x133eb7) + 'JA9arXXFf9' + _0x30dfa8(0xc53) + 'sCFYrByfa+' + 'eVhoF9v5PB' + _0x30dfa8(0xbc6) + 'zakgpCNadp' + '8zADPpiNiI' + _0x30dfa8(0x805) + 'qyUwzFhjCC' + 'CECGPBfmaC' + _0x30dfa8(0xc0e) + 'pv/XY2WOLL' + 'x6bBXQ9jHh' + 'thTpsGrYS4' + 'bhbzRQxdMX' + _0x30dfa8(0x76d) + '4MqGoSYQYU' + 'wAbfFhsJVC' + _0x30dfa8(0x326) + _0x30dfa8(_0x543936._0xbe77ac) + 'qRgYwg8mEQ' + 'SWfkVym66i' + _0x30dfa8(0xd01) + _0x30dfa8(0x66c) + 'W0YSFUryHQ' + 'yA81kjYM4H' + _0x30dfa8(_0x543936._0x5450bf) + 'sLD/mBn65l' + 'r73rqfV49J' + '1Av0t4hlQ3' + 'xs9Ij1ty9L' + _0x30dfa8(0x7e7) + 'l4FDT1hoQp' + 'qIeURE8xsj' + 'crVIKUjF4o' + 'hjxUJHkQQ8' + '5N6FPDusfs' + 'lKFe7RrjYc' + 'CQhJ25OGyp' + 'PVychjrTII' + '0F/C/4GHWK' + 'GnAvPAXUk+' + 'ocXAZzjR0c' + 'VJz+0VsLnt' + 'h47ok5SC5w' + 'UzLH3TH+L6' + 'YjA9qjL3XI' + 'rF98wJ4kCw' + _0x30dfa8(0xaaf) + 'ytPsKpakJb' + 'Cw0D8zCo23') + (_0x30dfa8(0x6da) + 'DHRA7WhaMg' + _0x30dfa8(_0x543936._0x5ef161) + 'pXZH1TrIaS' + _0x30dfa8(0x171) + '5RofPwNNtA' + _0x30dfa8(0xbbc) + 'wu+cd+YUdE' + 'sdZlQEo3g8' + 'J8cwNRCkrW' + _0x30dfa8(_0x543936._0x3a93d0) + _0x30dfa8(_0x543936._0x10c9c3) + _0x30dfa8(_0x543936._0x5b1a3a) + 'DQF01LNrIc' + 'yUeJ8TNKHB' + 'AaRkJplDDh' + 'RG76Y5quvf' + 'w2c29Oepb8' + 'KWUTy9vJ2/' + 'vNp9htFZCS' + _0x30dfa8(_0x543936._0x25b25b) + 'D+7c37bdCl' + '9HxVnIgTIg' + 'KMybPP6bUz' + _0x30dfa8(0x124) + 'SWO9KND3TD' + 'ZmLoHFQqho' + 'XFngUy8E3s' + 'R0cNh6mHBK' + 'AYX0h28lhb' + 'mhbqxO0KIe' + '2pCT30e5NP' + 'DRVOLYfZ+9' + 'fd1Kdlh+7c' + 'Wzi65TiXgE' + 'XY+Kedz7iO' + 'buPIkIEfJK' + 'NlhN65YU5o' + _0x30dfa8(0xb0d) + 'quFKRfcQCS' + _0x30dfa8(_0x543936._0x2caede) + '6NJpwd6P+q' + 'sTAa+9P1WB' + 'ACwWIKSUkW' + 'jaSFCFrD+J' + 'O0o0nWvfcd' + _0x30dfa8(0x97c) + '+WdX1mkG/6' + 'R3unl8eMCZ' + 'KGaWiUBYP2' + _0x30dfa8(0xb85) + _0x30dfa8(0x73f) + '9EAG7uP+xS' + _0x30dfa8(0x92c) + '0f2+Xx5kPw' + _0x30dfa8(0x491) + 'ykLWDWHdMB' + 'qGkMbHHt6r' + _0x30dfa8(_0x543936._0x3fd953) + 'Z+o3Y804mx' + _0x30dfa8(_0x543936._0x15e76d) + 'zGV6MseP+2' + 'OftWitco8U' + 'Q0FI1CjO4z' + 'U95uqI5iRs' + _0x30dfa8(0x4d4) + 'M74sRizdWF' + 'cIFJjCYXHG' + 'WEYipMSuAt' + _0x30dfa8(_0x543936._0x41431f) + 'aZXB54g0jY' + 'bSQqSTeelp' + 'IY3vPqycDi' + 'qcrl+d/c4M' + _0x30dfa8(0x405) + _0x30dfa8(0x9a7) + 'l3jiX1bnI+' + _0x30dfa8(0x4fb) + 'AYI+CN9oJG' + 'dQ8aM1FEhE' + 'tROfzSiHXS' + _0x30dfa8(_0x543936._0xd32e55) + '8tqwWGJPPw' + '+zIAwL+Pft' + 'fuM5l4UymC' + _0x30dfa8(_0x543936._0x18f904) + 'WT44gIeTnR' + 'oqnLY335BP' + '7Q8DmJPVK/' + 'JajLa+vnwr' + 'y9PFP+T+UO' + 'KboDNln+Be' + 'RhV7PINZSa' + 'yUPRBEkiYs' + 'ir6VsPdZGQ' + 'BDkoEWIybb' + 'cf/iXQrYMz' + 'ICxp7vSYBn' + 'YzGB6maVMG' + 'cuLYRpZjIs') + ('RMKB1cedH3' + _0x30dfa8(0x5aa) + _0x30dfa8(0xb72) + 'o7uHicQ6BM' + '2TD6cgdvk/' + 'fu39XZ052o' + 'ecWgYQqmhI' + 'NDUCazZQ+i' + 'XwMwixlSeQ' + 'lJwM7uQD2M' + 'NwlrgQ0qsj' + _0x30dfa8(_0x543936._0x3924be) + 'xC+jB0IVeO' + _0x30dfa8(0x176) + _0x30dfa8(_0x543936._0x2fcbab) + 'ycmnpaqPA1' + _0x30dfa8(0xf4) + '+570E6xcRs' + 'YAvbr6wKms' + 'uGNYcnvxU+' + 'StFoB7sd0x' + 'ip3Uyd9PRT' + 'zuiXAmi2B2' + 'gQmln9CgBO' + _0x30dfa8(0xa9b) + 'EKFRiSm61u' + '3JWMiFgGE4' + 'CMONrGbOvm' + _0x30dfa8(_0x543936._0xac0e54) + 'iWMK6WBjDi' + '3eCU/gs+xT' + 'qj+RLhIbsq' + 'Uwt8B9HuNh' + 'rH0DLM5iH8' + '96P1Y9LsnI' + '7pJh6CaViP' + 'xJwwtnqMRw' + 'EI2EczHs9I' + 'R/WJhSp9Kf' + 'QA8itGV/Dn' + 'jZh1HCS6WD' + 'wtECR2KE4G' + 'HFqIq5j6Rq' + 'UpnQgUUCax' + 'sMToH29dd/' + 'IxpWemc4zF' + 'WGd4TU+FkM' + 'Peit3I7Adx' + 'E3Ctc575+8' + '01VO/ur2Q5' + '1jTitX47qM' + _0x30dfa8(0xc1c) + 'aPQtI7eMXB' + _0x30dfa8(0x6e4) + _0x30dfa8(_0x543936._0x121e4a) + 'HWQTeH3jsD' + 'R/ifnqzwtX' + 'Q1HPesCrEl' + 'xvZqK0tqGK' + 'Ipwxc9fPMD' + '9AjaSl0Y6O' + 'oXT+yS0S4M' + _0x30dfa8(0x70a) + 'eBlndMmq6v' + 'oB8XY2iW7c' + 'kIJrQ2Cjv0' + '2DWg4VxLRy' + 'eSKEQxSor7' + 'NXTvrjOACl' + '/Pw8bvy1i0' + '028W4rds4F' + '4reHLVkIuM' + 'ugANIB09Ni' + 'OghjYRSQLm' + 'eJvYC0alg6' + _0x30dfa8(_0x543936._0x5e18aa) + 'GKXo055GN0' + '7/vUL3VuOB' + 'x89HERUgGU' + 'BH5HIKoL0E' + 'aZ2oXQFCIx' + '6f8YszgApf' + 'y8N9bJz++P' + 'umY7uxs/1y' + _0x30dfa8(0x526) + 'SPVft5mAe0' + _0x30dfa8(_0x543936._0x45b603) + 'lU7Ri7qd//' + _0x30dfa8(_0x543936._0xf3903a) + '6IY8q/2btT' + 'jiSP4jRsjk' + 'QeRqM/lAaf' + 'vBtaeyZQ4U' + 'xkE/uMw1N2' + _0x30dfa8(0x7b7) + '55PxzW4nxL' + '6TT3QYUknt' + _0x30dfa8(_0x543936._0x4d2f19) + 'J4j+psbCKi' + _0x30dfa8(_0x543936._0x692ef7)) + ('grJSOyPJw2' + _0x30dfa8(0x8a4) + 'BFoNiBQy0A' + 'ILYHXBERhp' + 'iVMgw1jcxW' + _0x30dfa8(0x7cc) + 'cEZymH2K5G' + '/LKOsPyMcB' + 'zMNbKsO5+t' + 'AYCk+29xCd' + 'FkhGwhUzMz' + _0x30dfa8(0x861) + 'SCkkmsRYXD' + _0x30dfa8(_0x543936._0x2cd9e1) + 'PLkvKtWfYU' + _0x30dfa8(0x133) + 'n4WbwsROxz' + 'aK1HCF0mj8' + _0x30dfa8(0x368) + 'Y8nGDjN3/U' + 'Uh4fQwEyW1' + _0x30dfa8(0xa3c) + 'kruPDjbaA8' + _0x30dfa8(0xb73) + 'pbXP5WY8OZ' + 'jbj5feKUeY' + 'b58w9k3IFe' + 'xe0eTeYWlH' + _0x30dfa8(_0x543936._0x2c3610) + _0x30dfa8(0xb33) + 'cIZYjdonOq' + _0x30dfa8(0xc64) + 'yYdP39L8Je' + _0x30dfa8(_0x543936._0x1aad92) + 'q57YchjIHt' + 'yQ0b9YSRPz' + _0x30dfa8(_0x543936._0x4b05b2) + 'wRRbsJba3O' + 'NFYbzdJyV4' + _0x30dfa8(0xaf7) + 'sSYEZHpO33' + 'SeTCTrfRf3' + 'DDkmht8njB' + 'BgAiZAcmN/' + 'Tm4gRIO1Wo' + 'b6TelGKmOR' + 'lrVnoD/bZP' + 'iGLBDDqrf4' + _0x30dfa8(_0x543936._0x22a0b0) + 'fMgvzWcn2j' + _0x30dfa8(_0x543936._0x5d2218) + '/lMj7t8D1s' + 'mheSaGGk0n' + 'ILUDMrg+xL' + '/vc15bKda0' + '/YwwKO7DcS' + 'lH2VW+i6ZY' + 'BhaXSjYsHQ' + _0x30dfa8(_0x543936._0x2e3322) + 'Q2lVFhMyoq' + 'jGnwWdZDCi' + 'sT6AxR0ok/' + _0x30dfa8(_0x543936._0x1c2f5f) + _0x30dfa8(0x1de) + 'D9Zg2nVb3i' + _0x30dfa8(0xa74) + '9DFuv1c+QM' + _0x30dfa8(_0x543936._0x16274e) + 'F9uDfvGYcQ' + 'r2YIrWM7Q7' + _0x30dfa8(_0x543936._0x29b1e7) + 'JRFhUrQIxL' + '7kwzxcjqwI' + _0x30dfa8(0xcf7) + 'mrdmfGbbVX' + _0x30dfa8(_0x543936._0x2d2328) + _0x30dfa8(0x38f) + 'XRz89tyIcs' + _0x30dfa8(_0x543936._0x474886) + 'KmMGGNcWej' + _0x30dfa8(0x830) + 'mdFkCQ0FHn' + 'EANqCmRDM3' + 'A9IzmFpqWl' + 'kU7szOlMC8' + _0x30dfa8(0x7d3) + _0x30dfa8(0x995) + '3Ql00A+yfd' + 'ekelfhRf4F' + 'nHeH/lg8HO' + 'Gei71CfQdx' + 'vuQLDPy8tI' + 'CdiDEBuUd8' + 'WIFEAyX4B6' + 'FAh3fxQNlE' + _0x30dfa8(_0x543936._0x2ee33e) + 'sWKcFR3SNK' + 'CUpEGa6dIp' + '27H24xtAhW' + '82Ry+xaS9t') + (_0x30dfa8(_0x543936._0x145a3d) + 'JgGL0HMD/F' + _0x30dfa8(0x96a) + _0x30dfa8(_0x543936._0x231e4e) + 'bBQSIPiMrv' + '6IY79VHIAe' + _0x30dfa8(0x701) + 'YzmNGYkcwD' + _0x30dfa8(_0x543936._0x3a895b) + _0x30dfa8(0x234) + 'vuyrh85Y13' + 'yb/YqL8dqb' + _0x30dfa8(_0x543936._0x273b0b) + _0x30dfa8(0x261) + '7oT2ZO01A7' + '92kkoQtgJG' + _0x30dfa8(_0x543936._0x4a2209) + 'ltPcRU1H74' + _0x30dfa8(0x6d5) + '5twIg3YCtO' + 'KC20lFuf8O' + 'C+AVT4plj7' + 'rXMpvPQS1K' + '19hgTTHCc4' + 'dawhYZCmGV' + _0x30dfa8(_0x543936._0x43b5b7) + 'MBHiN+5RCj' + _0x30dfa8(0x8e2) + _0x30dfa8(_0x543936._0x157476) + 'ShtNWvHKz/' + 'xkSFbzMLMv' + 'H58gfbOMy8' + _0x30dfa8(0xc49) + _0x30dfa8(_0x543936._0xccfe10) + _0x30dfa8(_0x543936._0x2a5724) + 'uH/D2o1A4p' + 'jfMjUC41G3' + 'cQS7gCR/Sg' + 'VsIxSZAMwH' + 'FjRYVAJ2DU' + 'EKHC6EufX/' + 'utoMI3p+uA' + '3/XIx3/oUw' + _0x30dfa8(_0x543936._0x560c33) + 'ABpg4gG/Zl' + _0x30dfa8(_0x543936._0xb1df03) + _0x30dfa8(0x3a3) + 'CwxuOdgFZh' + 'mkHbew48MO' + 'Vb8O+3nfHZ' + _0x30dfa8(_0x543936._0x7d8360) + _0x30dfa8(_0x543936._0x5a569a) + _0x30dfa8(_0x543936._0x2a6d1c) + 'NJ0YsNomQ2' + 'pDGGYVjYME' + 'FkVmaQgp64' + 'HTJI9EiJUM' + 'EZjEGTc61q' + 'vDMNraRhLG' + 'AYvyJz9cIE' + 'Ub8pVPg2dB' + _0x30dfa8(0x2a5) + _0x30dfa8(0x776) + 'fIX/WVkw6Y' + _0x30dfa8(_0x543936._0x560946) + _0x30dfa8(0x4cc) + _0x30dfa8(_0x543936._0x55cc8b) + 'jySLFjWCcS' + 'lG1V+tI6vU' + '8mfWOiwree' + '3dp3U1/9+D' + _0x30dfa8(_0x543936._0x301273) + 'gWInEfPDWG' + _0x30dfa8(0x6a6) + 'WwjaWWaclT' + _0x30dfa8(_0x543936._0x30e051) + _0x30dfa8(_0x543936._0x7c9d8e) + 'zbngzkyJCR' + 'eKAuq+YPkb' + 'SQ9cerh/aL' + '328BFb4lXQ' + 'dI++a1j3z8' + _0x30dfa8(0x7d6) + _0x30dfa8(0x37b) + 'DLRoMGkdKG' + 'A9rIZfFxhN' + _0x30dfa8(0x718) + 'mZ2+M97RmB' + _0x30dfa8(_0x543936._0x22a0b7) + '1Y6hH+p9X+' + _0x30dfa8(_0x543936._0x345332) + _0x30dfa8(0xaeb) + 'j//SH3rRmL' + 'Jk2Q02xsQe' + 'TAipY0zlRG' + _0x30dfa8(0xacc) + 'LemawT+8mM' + _0x30dfa8(0xa3d) + '+mfUM/d8Z6' + 'TwnbAORntD') + (_0x30dfa8(_0x543936._0x5aa4ba) + 'Wa3jfPhTnc' + '7C1ZGnPHWd' + '69z2c3dmwS' + 't//K8x9hba' + 'aUDBseZwEL' + _0x30dfa8(_0x543936._0x5f1696) + '+IdVDY75Zf' + 'oetltPzVY2' + '3ZIMgDhYfM' + 'SEr0KmNPMr' + '4/0XYEQIa+' + '+4R24OARag' + '8m8edAPJEz' + 'j18d+vOU/g' + 'O5vj1U+I5Y' + 'B6NdevCerL' + _0x30dfa8(_0x543936._0x18a5bb) + '6zOMO4B4+t' + _0x30dfa8(_0x543936._0x1caa56) + 'LSxeC2Qmm8' + '6nv7j4KPBa' + 'UjhPY6UBtP' + 'PTat/rbOD9' + 'd0UK3x3rIL' + 'Qz3nvqRi1w' + 'gufKKgiTGw' + 't6+rj7GDLz' + 'cWIwMknRyo' + '8qjdEjmHHk' + 'jPLnlJ+13n' + _0x30dfa8(0xd08) + _0x30dfa8(0x256) + '78TcweDIw2' + 'Yzu5lmilT8' + 'SS+t113LKJ' + 'nTpQeJnE/X' + _0x30dfa8(0x3f2) + 'RlhVCKWZ7j' + '5wXunEndee' + 'JaRwdrAORt' + 't14Gf6b3SM' + 'mrSxilAWK+' + 'qzFgccg0AG' + 'NSWG2iSiSq' + _0x30dfa8(0x5bf) + 'QUCooRF3H1' + _0x30dfa8(_0x543936._0x38d4d5) + 'ZwvrsXBTlx' + '58UU5O7unz' + 'X5iBlBzBHr' + 'q+UiUWcUlE' + _0x30dfa8(0xc26) + '6a/kS8l6dZ' + 'ZvVnrVO/3w' + 'hnFSicTazH' + 'sPIM+POaGw' + _0x30dfa8(0x996) + 'GG2PydSxX2' + _0x30dfa8(_0x543936._0x1f82c6) + 'ilo20x76Zg' + 'jabpq284VB' + 'VbFnBymcVa' + 'zHwoXhhwo/' + 'L/4XjAwMgG' + 'RKNoCi2VDF' + 'djYdg9dICv' + _0x30dfa8(0xb84) + _0x30dfa8(_0x543936._0x7c9c25) + 'SzBRTOOtZj' + '0QK8uWj1hq' + 'cn/LIIEffj' + 'w9IzPk4S00' + '7sQUg56Hs6' + _0x30dfa8(0x5db) + 'E1omcRKZx9' + 'rCfABahtvB' + _0x30dfa8(0x79d) + _0x30dfa8(0x9cd) + 'Ngp/Hexy9t' + 'fGv1PSO++s' + 'vABj37QOG/' + _0x30dfa8(0xc85) + 'quCdkfASZL' + 'V1wFnXBt19' + 'Rtn8CASfTf' + 'xPnfxHoKvH' + '3rzeNI+F/H' + _0x30dfa8(0x3b2) + _0x30dfa8(0xcef) + '/02UwNb/Dt' + 'bEOjnk/z7I' + 'xPr/AL1nlZ' + 'Oecg7oAAAA' + 'AElFTkSuQm' + 'CC\x20style=\x22' + 'width:\x2050p' + _0x30dfa8(0x9c0) + _0x30dfa8(_0x543936._0x1350c5) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20') + (_0x30dfa8(0x2d6) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20<h1\x20sty' + 'le=\x22margin' + ':\x200;\x22>Hend' + 'rix\x20VFX\x20De' + 'signer</h1' + _0x30dfa8(0xa45) + '\x20\x20\x20\x20\x20\x20\x20\x20<p' + _0x30dfa8(_0x543936._0x33b396) + _0x30dfa8(_0x543936._0x11494a) + '0\x200\x200;\x22>©\x20' + _0x30dfa8(0x193) + 'ng\x20Hendrix' + _0x30dfa8(0x22c) + '=\x22https://' + 'sanghendri' + 'x.itch.io\x22' + '>sanghendr' + 'ix.itch.io' + '</a></p>\x0a\x20' + _0x30dfa8(0x5a0) + '\x20</div>\x0a\x20\x20' + _0x30dfa8(0x3c6) + 'v>\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20<button\x20o' + _0x30dfa8(_0x543936._0x3a8cc9) + 'enLibrary(' + _0x30dfa8(_0x543936._0x259368) + 'btn\x20btn-pr' + 'imary\x20head' + 'er-help-bt' + 'n\x22>Animati' + 'on\x20Library' + _0x30dfa8(_0x543936._0x641745) + _0x30dfa8(0x6de) + '\x0a\x0a<div\x20cla' + _0x30dfa8(0x97b) + _0x30dfa8(_0x543936._0x4354f1) + _0x30dfa8(0x389) + '\x20<div\x20clas' + _0x30dfa8(_0x543936._0x270393) + 'xt\x22>\x0a\x20\x20\x20\x20\x20' + '\x20Click\x20on\x20' + 'an\x20event/p' + 'layer\x20to\x20p' + 'review\x20bri' + 'ng\x20them\x20to' + '\x20the\x20edito' + 'r\x20as\x20Targe' + 't\x0a\x20\x20\x20\x20</di' + 'v>\x0a\x0a\x20\x20\x20\x20<d' + 'iv\x20class=\x22' + 'three-colu' + _0x30dfa8(_0x543936._0x4d80c8) + '>\x0a\x20\x20<!--\x20L' + _0x30dfa8(_0x543936._0x4c78a0) + '\x20-->\x0a\x20\x20<di' + 'v\x20class=\x22c' + 'olumn\x22>\x0a\x20\x20' + '\x20\x20<h3>Basi' + 'c\x20Settings' + '</h3>\x0a\x0a\x20\x20\x20' + '\x20<div\x20clas' + _0x30dfa8(_0x543936._0x4f196a) + _0x30dfa8(_0x543936._0x2a3391) + 'bel>Animat' + 'ion\x20Name</' + 'label>\x0a\x20\x20\x20' + _0x30dfa8(_0x543936._0x4fe1ab) + 'type=\x22text' + '\x22\x20id=\x22anim' + 'ationNameI' + 'nput\x22\x20plac' + 'eholder=\x22E' + 'nter\x20anima' + 'tion\x20name\x22' + '>\x0a\x20\x20\x20\x20</di' + 'v>\x0a\x0a\x20\x20\x20\x20<d' + 'iv\x20class=\x22' + 'field\x22>\x0a\x20\x20' + _0x30dfa8(0x1a7) + '>Load\x20Spri' + _0x30dfa8(0xa70) + 'abel>\x0a\x20\x20\x20\x20' + '\x20\x20<div\x20cla' + _0x30dfa8(_0x543936._0x3bd6cf) + 'ox\x22\x20id=\x22fi' + 'leBox\x22\x20onc' + 'lick=\x22sele' + 'ctSpritesh' + 'eet()\x22>\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20Clic' + _0x30dfa8(0x77b) + 't\x20spritesh' + 'eet\x0a\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x988e5b) + '\x20\x20\x20<input\x20' + 'type=\x22file' + '\x22\x20id=\x22file') + ('Input\x22\x20acc' + 'ept=\x22image' + '/*\x22>\x0a\x20\x20\x20\x20<' + '/div>\x0a\x0a\x20\x20\x20' + '\x20<div\x20clas' + 's=\x22field\x22>' + '\x0a\x20\x20<div\x20st' + 'yle=\x22displ' + _0x30dfa8(_0x543936._0xf8ba33) + 'grid-templ' + 'ate-column' + 's:\x201fr\x201fr' + ';\x20gap:\x208px' + _0x30dfa8(0x254) + _0x30dfa8(0x8df) + '<label>Row' + 's</label>\x0a' + _0x30dfa8(0x1ae) + 'ut\x20type=\x22n' + 'umber\x22\x20id=' + '\x22rowInput\x22' + '\x20value=\x221\x22' + '\x20min=\x221\x22\x20m' + 'ax=\x2220\x22\x20on' + _0x30dfa8(0x3e5) + 'datePrevie' + 'w()\x22>\x0a\x20\x20\x20\x20' + '</div>\x0a\x20\x20\x20' + _0x30dfa8(0x2d6) + _0x30dfa8(_0x543936._0x1e16c5) + 'Columns</l' + 'abel>\x0a\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x507eda) + 'ype=\x22numbe' + _0x30dfa8(0xa7b) + _0x30dfa8(_0x543936._0x69ec7c) + _0x30dfa8(_0x543936._0x404e01) + _0x30dfa8(_0x543936._0xd37b60) + 'x=\x2220\x22\x20onc' + 'hange=\x22upd' + 'atePreview' + _0x30dfa8(_0x543936._0x1650f4) + '/div>\x0a\x20\x20</' + 'div>\x0a</div' + '>\x0a\x0a\x20\x20\x20\x20<di' + 'v\x20class=\x22f' + 'ield\x22>\x0a\x20\x20\x20' + '\x20\x20\x20<label\x20' + _0x30dfa8(0xbba) + _0x30dfa8(_0x543936._0x20bdce) + _0x30dfa8(_0x543936._0x999480) + 'ems:\x20cente' + 'r;\x20cursor:' + '\x20pointer;\x20' + _0x30dfa8(_0x543936._0x3818f0) + 't:\x20none;\x22>' + _0x30dfa8(_0x543936._0x48e16d) + 'input\x20type' + '=\x22checkbox' + '\x22\x20id=\x22save' + 'TargetSpri' + 'teCheckbox' + _0x30dfa8(0x180) + _0x30dfa8(_0x543936._0x31dda5) + 'th:\x20auto;\x20' + 'margin-rig' + 'ht:\x208px;\x22>' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<' + 'span>Save\x20' + 'target\x20spr' + _0x30dfa8(0x2ea) + '\x0a\x20\x20\x20\x20\x20\x20</l' + _0x30dfa8(0x8fc) + '</div>\x0a\x0a\x20\x20' + '\x20\x20<div\x20cla' + _0x30dfa8(_0x543936._0x506e45) + '\x20id=\x22autoS' + 'aveField\x22\x20' + 'style=\x22dis' + _0x30dfa8(_0x543936._0x311e44) + ';\x22>\x0a\x20\x20\x20\x20\x20\x20' + '<label\x20sty' + _0x30dfa8(_0x543936._0x3db9cd) + _0x30dfa8(0x44e) + 'lign-items' + _0x30dfa8(_0x543936._0x9c67cd) + 'cursor:\x20po' + 'inter;\x20use' + 'r-select:\x20' + 'none;\x22>\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20<inp' + _0x30dfa8(0x788) + _0x30dfa8(_0x543936._0x1e03ed) + 'd=\x22autoSav' + _0x30dfa8(_0x543936._0x5c0a79) + '\x20style=\x22wi' + 'dth:\x20auto;' + '\x20margin-ri' + 'ght:\x208px;\x22' + _0x30dfa8(_0x543936._0x42e46a)) + ('<span>Auto' + '\x20Save\x20&\x20Up' + 'date</span' + '>\x0a\x20\x20\x20\x20\x20\x20</' + _0x30dfa8(_0x543936._0x5905a5) + _0x30dfa8(_0x543936._0xdcae63) + '\x20\x20\x20<div\x20cl' + 'ass=\x22field' + _0x30dfa8(_0x543936._0x281fb6) + 'button\x20cla' + 'ss=\x22save-b' + _0x30dfa8(_0x543936._0x167f92) + 'lick=\x22save' + 'ToLibrary(' + ')\x22>Save\x20to' + '\x20Library</' + 'button>\x0a\x20\x20' + _0x30dfa8(0x53f) + '\x20</div>\x0a\x0a\x20' + '\x20<!--\x20CENT' + 'ER\x20COLUMN\x20' + _0x30dfa8(_0x543936._0x1c3259) + _0x30dfa8(_0x543936._0x19643c) + 'lumn\x22>\x0a\x20\x20\x20' + _0x30dfa8(_0x543936._0x136edc) + 'review</h3' + '>\x0a\x20\x20\x20\x20<div' + _0x30dfa8(0x106) + 'eview-canv' + _0x30dfa8(_0x543936._0x197927) + 'er\x22>\x0a\x20\x20\x20\x20\x20' + '\x20<canvas\x20i' + 'd=\x22preview' + 'Canvas\x22></' + 'canvas>\x0a\x20\x20' + '\x20\x20</div>\x0a\x20' + '\x20\x20\x20<div\x20st' + 'yle=\x22margi' + _0x30dfa8(_0x543936._0x4f137a) + 'x;\x20display' + ':\x20grid;\x20gr' + 'id-templat' + 'e-columns:' + _0x30dfa8(_0x543936._0x5a66a5) + 'gap:\x2010px;' + '\x22>\x0a\x20\x20\x20\x20\x20\x20<' + '!--\x20TRANSF' + 'ORM\x20SETTIN' + _0x30dfa8(_0x543936._0x124e89) + '\x20\x20\x20<div\x20st' + _0x30dfa8(_0x543936._0x5384f7) + _0x30dfa8(0x8f6) + 'background' + ':\x20rgba(255' + ',\x20255,\x20255' + ',\x200.03);\x20b' + 'order-radi' + 'us:\x208px;\x22>' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<' + _0x30dfa8(0xa2b) + _0x30dfa8(0xaf0) + 'le\x22>Transf' + 'orm</p>\x0a\x0a\x20' + _0x30dfa8(_0x543936._0x366a05) + 'v\x20class=\x22f' + 'ield\x22>\x0a\x20\x20\x20' + _0x30dfa8(0xba3) + _0x30dfa8(_0x543936._0x40cc03) + '\x22display:\x20' + 'flex;\x20alig' + _0x30dfa8(_0x543936._0x32b0bd) + _0x30dfa8(0x8f8) + 'sor:\x20point' + 'er;\x20user-s' + _0x30dfa8(0xc09) + 'e;\x22>\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20<in' + 'put\x20type=\x22' + 'checkbox\x22\x20' + 'id=\x22revers' + 'eCheckbox\x22' + '\x20onchange=' + '\x22updatePre' + 'view()\x22\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x511) + 'idth:\x20auto' + ';\x20margin-r' + 'ight:\x208px;' + '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20<span' + _0x30dfa8(0x667) + 'everse</sp' + 'an>\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20</labe' + 'l>\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20</div>\x0a\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20<di' + 'v\x20class=\x22f' + 'ield\x22>\x0a\x20\x20\x20') + ('\x20\x20\x20\x20\x20\x20\x20<la' + 'bel\x20style=' + '\x22display:\x20' + _0x30dfa8(_0x543936._0x3ecfcd) + 'n-items:\x20c' + 'enter;\x20cur' + 'sor:\x20point' + _0x30dfa8(0x593) + _0x30dfa8(_0x543936._0x4c64a9) + 'e;\x22>\x0a\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x8c950e) + _0x30dfa8(0xd1d) + 'checkbox\x22\x20' + _0x30dfa8(0xaf2) + 'rizontalCh' + 'eckbox\x22\x20on' + _0x30dfa8(0x3e5) + 'datePrevie' + 'w()\x22\x0a\x20\x20\x20\x20\x20' + _0x30dfa8(0x8ef) + _0x30dfa8(_0x543936._0x5807d4) + 'h:\x20auto;\x20m' + 'argin-righ' + _0x30dfa8(_0x543936._0x92c6db) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20<span>Fl' + _0x30dfa8(_0x543936._0x5a04eb) + _0x30dfa8(0xdf) + _0x30dfa8(0x832) + '\x20</label>\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20</' + 'div>\x0a\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20<div\x20c' + 'lass=\x22fiel' + _0x30dfa8(0xbe7) + '\x20\x20\x20\x20<label' + '\x20style=\x22di' + _0x30dfa8(0x315) + _0x30dfa8(0xaa3) + 'tems:\x20cent' + 'er;\x20cursor' + _0x30dfa8(_0x543936._0x16e8b5) + '\x20user-sele' + 'ct:\x20none;\x22' + _0x30dfa8(0xa45) + '\x20\x20\x20\x20<input' + '\x20type=\x22che' + 'ckbox\x22\x20id=' + _0x30dfa8(_0x543936._0x1bb5aa) + 'pHorizonta' + 'lCheckbox\x22' + _0x30dfa8(_0x543936._0x18b94e) + '\x22updatePre' + 'view()\x22\x0a\x20\x20' + _0x30dfa8(_0x543936._0x553b43) + _0x30dfa8(0x511) + _0x30dfa8(_0x543936._0x1bd28b) + ';\x20margin-r' + 'ight:\x208px;' + '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x2ad99e) + '>Random\x20Fl' + 'ip\x20Horizon' + _0x30dfa8(0xdf) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x1f05a2) + _0x30dfa8(_0x543936._0x45554d) + _0x30dfa8(0x11c) + '\x20\x20\x20\x20<div\x20c' + 'lass=\x22fiel' + _0x30dfa8(0xbe7) + '\x20\x20\x20\x20<label' + _0x30dfa8(_0x543936._0x253e79) + 'splay:\x20fle' + 'x;\x20align-i' + 'tems:\x20cent' + _0x30dfa8(_0x543936._0x2715e1) + ':\x20pointer;' + '\x20user-sele' + 'ct:\x20none;\x22' + _0x30dfa8(0xa45) + _0x30dfa8(_0x543936._0xed2032) + '\x20type=\x22che' + 'ckbox\x22\x20id=' + _0x30dfa8(_0x543936._0x172d4b) + 'calCheckbo' + 'x\x22\x20onchang' + 'e=\x22updateP' + _0x30dfa8(0x7e0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x520) + '\x22width:\x20au' + 'to;\x20margin' + '-right:\x208p' + _0x30dfa8(_0x543936._0xcc45d4) + _0x30dfa8(0x1ac) + 'an>Flip\x20Ve' + _0x30dfa8(0xa04) + 'an>\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20</labe') + ('l>\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x3cc165) + '\x20\x20\x20\x20\x20\x20\x20<di' + 'v\x20class=\x22f' + _0x30dfa8(_0x543936._0x470237) + '\x20\x20\x20\x20\x20\x20\x20<la' + _0x30dfa8(0x7ba) + _0x30dfa8(_0x543936._0x53b0de) + 'flex;\x20alig' + 'n-items:\x20c' + _0x30dfa8(_0x543936._0x41d2cd) + 'sor:\x20point' + 'er;\x20user-s' + 'elect:\x20non' + _0x30dfa8(_0x543936._0x52094a) + '\x20\x20\x20\x20\x20\x20\x20<in' + 'put\x20type=\x22' + 'checkbox\x22\x20' + _0x30dfa8(_0x543936._0x180674) + 'FlipVertic' + _0x30dfa8(_0x543936._0x1e49b6) + '\x22\x20onchange' + _0x30dfa8(_0x543936._0x536cf0) + 'eview()\x22\x0a\x20' + _0x30dfa8(0x5a0) + _0x30dfa8(_0x543936._0x1a5a90) + 'width:\x20aut' + _0x30dfa8(0x956) + 'right:\x208px' + _0x30dfa8(0x730) + '\x20\x20\x20\x20\x20\x20<spa' + 'n>Random\x20F' + 'lip\x20Vertic' + 'al</span>\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '</label>\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20</d' + 'iv>\x0a\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20<div\x20cl' + 'ass=\x22field' + _0x30dfa8(_0x543936._0x19dd60) + 'l\x20style=\x22d' + 'isplay:\x20fl' + 'ex;\x20justif' + 'y-content:' + '\x20space-bet' + 'ween;\x20alig' + _0x30dfa8(_0x543936._0x32b0bd) + 'enter;\x22>\x0a\x20' + _0x30dfa8(0x8ce) + 'otation:\x20<' + 'span\x20id=\x22r' + 'otationDis' + 'play\x22\x20styl' + 'e=\x22color:\x20' + '#FFD700;\x22>' + '0°</span><' + '/span>\x0a\x20\x20\x20' + '\x20<label\x20st' + 'yle=\x22displ' + 'ay:\x20flex;\x20' + 'align-item' + 's:\x20center;' + '\x20cursor:\x20p' + 'ointer;\x20us' + 'er-select:' + '\x20none;\x20mar' + 'gin:\x200;\x20fo' + 'nt-weight:' + '\x20normal;\x20f' + _0x30dfa8(_0x543936._0x65737d) + '11px;\x22>\x0a\x20\x20' + _0x30dfa8(_0x543936._0xed2032) + _0x30dfa8(_0x543936._0x5c8de5) + 'ckbox\x22\x20id=' + '\x22randomRot' + _0x30dfa8(_0x543936._0x17f81a) + _0x30dfa8(_0x543936._0x424ec0) + 'nge=\x22updat' + 'ePreview()' + '\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + 'style=\x22wid' + 'th:\x20auto;\x20' + 'margin-rig' + 'ht:\x204px;\x22>' + _0x30dfa8(0x624) + _0x30dfa8(_0x543936._0x582ff7) + 'ze</span>\x0a' + '\x20\x20\x20\x20</labe' + 'l>\x0a\x20\x20</lab' + _0x30dfa8(_0x543936._0x8a1e17) + 'ut\x20type=\x22r' + 'ange\x22\x20id=\x22' + 'rotationIn' + _0x30dfa8(_0x543936._0x3e9ce2) + _0x30dfa8(_0x543936._0x34de04) + _0x30dfa8(_0x543936._0x3d25be) + '0\x22\x0a\x20\x20\x20\x20oni' + 'nput=\x22upda' + 'teRotation') + ('Display();' + _0x30dfa8(_0x543936._0x31db7e) + 'view()\x22>\x0a<' + '/div>\x0a\x20\x20\x20\x20' + '\x20\x20</div>\x0a\x0a' + _0x30dfa8(_0x543936._0x3e11b0) + _0x30dfa8(_0x543936._0x1e912f) + '\x20SETTINGS\x20' + '-->\x0a\x20\x20\x20\x20\x20\x20' + '<div\x20style' + '=\x22padding:' + '\x2012px;\x20bac' + 'kground:\x20r' + 'gba(255,\x202' + '55,\x20255,\x200' + _0x30dfa8(_0x543936._0x1881ce) + 'er-radius:' + '\x208px;\x22>\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20<p\x20c' + 'lass=\x22sect' + 'ion-title\x22' + _0x30dfa8(0x4e4) + _0x30dfa8(_0x543936._0x301b3f) + '/p>\x0a\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20<div\x20cl' + 'ass=\x22field' + '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20<label>' + 'Opening\x20An' + 'imation</l' + 'abel>\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20<sel' + 'ect\x20id=\x22op' + _0x30dfa8(_0x543936._0x2a69f7) + 'tionInput\x22' + '\x20onchange=' + '\x22updatePre' + 'view()\x22>\x0a\x20' + _0x30dfa8(_0x543936._0x18402f) + '\x20<option\x20v' + 'alue=\x22none' + _0x30dfa8(0x947) + '>None</opt' + 'ion>\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20<op' + 'tion\x20value' + '=\x22fadeIn\x22>' + 'Fade\x20In</o' + 'ption>\x0a\x20\x20\x20' + _0x30dfa8(_0x543936._0x5d3353) + _0x30dfa8(_0x543936._0x723a1a) + 'ue=\x22scaleI' + _0x30dfa8(_0x543936._0x429bb8) + _0x30dfa8(0x9bc) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20<option' + '\x20value=\x22sc' + 'aleInWidth' + '\x22>Scale\x20In' + '\x20-\x20Width\x20O' + 'nly</optio' + 'n>\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x385b26) + 'on\x20value=\x22' + 'scaleInHei' + _0x30dfa8(_0x543936._0x3452ea) + '\x20In\x20-\x20Heig' + 'ht\x20Only</o' + 'ption>\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20</s' + 'elect>\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20</div' + '>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x607) + 's=\x22field\x22>' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20<label>En' + 'ding\x20Anima' + 'tion</labe' + _0x30dfa8(_0x543936._0xce4265) + '\x20\x20\x20<select' + _0x30dfa8(0xd0) + 'gAnimation' + _0x30dfa8(_0x543936._0x3faaec) + 'hange=\x22upd' + 'atePreview' + _0x30dfa8(_0x543936._0xf8fb6e) + '\x20\x20\x20\x20\x20\x20\x20<op' + _0x30dfa8(_0x543936._0x221856) + _0x30dfa8(0xd04) + 'lected>Non' + _0x30dfa8(_0x543936._0x326942) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a7) + '\x20value=\x22fa' + 'deOut\x22>Fad' + 'e\x20Out</opt' + 'ion>\x0a\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0xe9b9d0) + 'tion\x20value') + (_0x30dfa8(_0x543936._0x3fe780) + '\x22>Scale\x20Ou' + 't</option>' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20</select>' + _0x30dfa8(_0x543936._0x48e16d) + '/div>\x0a\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20<div\x20' + 'class=\x22fie' + 'ld\x22>\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20<labe' + 'l>Animatio' + 'n\x20Duration' + '\x20(frames)<' + '/label>\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20<i' + 'nput\x20type=' + '\x22number\x22\x20i' + _0x30dfa8(0xbb6) + 'onDuration' + 'Input\x22\x20val' + 'ue=\x2230\x22\x20mi' + _0x30dfa8(_0x543936._0x3fbf98) + _0x30dfa8(0x281) + 'ange=\x22upda' + 'tePreview(' + _0x30dfa8(0x32e) + _0x30dfa8(_0x543936._0xd9a681) + _0x30dfa8(_0x543936._0xe85eff) + '-size:\x2010p' + 'x;\x20color:\x20' + '#aaa;\x20marg' + 'in-top:\x202p' + 'x;\x22>60\x20fra' + 'mes\x20≈\x201\x20se' + 'cond</div>' + _0x30dfa8(_0x543936._0x48e16d) + '/div>\x0a\x20\x20\x20\x20' + _0x30dfa8(0x53f) + '\x20\x20\x20</div>\x0a' + _0x30dfa8(_0x543936._0x4785cc) + '\x20\x20<!--\x20RIG' + 'HT\x20COLUMN\x20' + '-->\x0a\x20\x20<div' + '\x20class=\x22co' + 'lumn\x22>\x0a\x20\x20\x20' + '\x20<h3>Visua' + _0x30dfa8(_0x543936._0x150f1d) + '</h3>\x0a\x0a\x20\x20\x20' + '\x20<div\x20clas' + _0x30dfa8(0x86b) + '\x0a\x20\x20\x20\x20\x20\x20<la' + 'bel>Animat' + 'ion\x20Speed\x20' + '(FPS)</lab' + _0x30dfa8(_0x543936._0x1e8fd8) + _0x30dfa8(_0x543936._0x1e2ef4) + _0x30dfa8(0x865) + '\x20id=\x22fpsIn' + 'put\x22\x20value' + '=\x2260\x22\x20min=' + _0x30dfa8(_0x543936._0x3ea0ed) + _0x30dfa8(_0x543936._0x4a9e04) + _0x30dfa8(0x57c) + 'review()\x22>' + _0x30dfa8(_0x543936._0x2bca52) + '>\x0a\x0a\x20\x20\x20\x20<di' + 'v\x20class=\x22f' + _0x30dfa8(_0x543936._0x360928) + _0x30dfa8(_0x543936._0x3bb667) + '\x22display:\x20' + 'grid;\x20grid' + '-template-' + 'columns:\x201' + 'fr\x201fr;\x20ga' + 'p:\x208px;\x22>\x0a' + '\x20\x20\x20\x20<div>\x0a' + '\x20\x20\x20\x20\x20\x20<lab' + 'el>Scale\x20(' + '%)</label>' + '\x0a\x20\x20\x20\x20\x20\x20<in' + 'put\x20type=\x22' + _0x30dfa8(0xc52) + '=\x22scaleInp' + 'ut\x22\x20value=' + '\x22100\x22\x20min=' + _0x30dfa8(0x2bf) + '500\x22\x20oncha' + _0x30dfa8(_0x543936._0x5b0539) + 'ePreview()' + _0x30dfa8(0x2fa) + _0x30dfa8(_0x543936._0x1f7758) + _0x30dfa8(_0x543936._0x26218a) + '<label>Opa' + 'city\x20(0-25' + '5)</label>' + '\x0a\x20\x20\x20\x20\x20\x20<in' + 'put\x20type=\x22' + 'number\x22\x20id' + '=\x22opacityI') + ('nput\x22\x20valu' + 'e=\x22255\x22\x20mi' + 'n=\x220\x22\x20max=' + '\x22255\x22\x20onch' + _0x30dfa8(0x417) + 'tePreview(' + ')\x22>\x0a\x20\x20\x20\x20</' + 'div>\x0a\x20\x20</d' + 'iv>\x0a</div>' + _0x30dfa8(_0x543936._0x5da80d) + '\x20class=\x22fi' + _0x30dfa8(0x5b5) + '\x20\x20<label>H' + _0x30dfa8(0xaf6) + 'id=\x22hueDis' + 'play\x22\x20styl' + 'e=\x22color:\x20' + '#FFD700;\x22>' + '0°</span><' + '/label>\x0a\x20\x20' + '\x20\x20\x20\x20<input' + _0x30dfa8(0xc5f) + 'ge\x22\x20id=\x22hu' + 'eInput\x22\x20va' + 'lue=\x220\x22\x20mi' + 'n=\x22-180\x22\x20m' + 'ax=\x22180\x22\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20oni' + 'nput=\x22upda' + _0x30dfa8(0x810) + 'ay();\x20upda' + 'tePreview(' + ')\x22>\x0a\x20\x20\x20\x20</' + _0x30dfa8(0x11c) + _0x30dfa8(_0x543936._0x102ef3) + '=\x22field\x22>\x0a' + _0x30dfa8(_0x543936._0x2db11a) + 'el>Blend\x20M' + _0x30dfa8(0x561) + _0x30dfa8(_0x543936._0x1e8e9e) + 'elect\x20id=\x22' + _0x30dfa8(0x2b6) + 'nput\x22\x20onch' + _0x30dfa8(_0x543936._0x524552) + 'tePreview(' + ')\x22>\x0a\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x557a75) + _0x30dfa8(_0x543936._0x3cc704) + 'mal\x22\x20selec' + 'ted>Normal' + '</option>\x0a' + _0x30dfa8(_0x543936._0x30970b) + _0x30dfa8(_0x543936._0x472654) + 'e=\x22Screen\x22' + '>Screen</o' + 'ption>\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20<opti' + 'on\x20value=\x22' + 'Add\x22>Add</' + 'option>\x0a\x20\x20' + _0x30dfa8(_0x543936._0x4a847f) + 'ion\x20value=' + _0x30dfa8(0xb35) + _0x30dfa8(0x209) + '/option>\x0a\x20' + '\x20\x20\x20\x20\x20</sel' + 'ect>\x0a\x20\x20\x20\x20<' + '/div>\x0a\x0a\x20\x20\x20' + '\x20<div\x20clas' + 's=\x22field\x22>' + '\x0a\x20\x20\x20\x20\x20\x20<la' + 'bel>Z-Inde' + _0x30dfa8(0xa8a) + '\x20\x20\x20\x20\x20\x20<sel' + 'ect\x20id=\x22zI' + 'ndexInput\x22' + _0x30dfa8(0xbef) + '\x22updatePre' + 'view()\x22>\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20<op' + _0x30dfa8(_0x543936._0x221856) + '=\x22auto\x22\x20se' + 'lected>Aut' + _0x30dfa8(_0x543936._0x32ce63) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<' + 'option\x20val' + _0x30dfa8(_0x543936._0x31cf50) + '\x20Far\x20Backg' + 'round</opt' + _0x30dfa8(_0x543936._0x16e283) + '\x20\x20\x20<option' + '\x20value=\x222\x22' + _0x30dfa8(_0x543936._0x487e4a) + _0x30dfa8(0x123) + _0x30dfa8(_0x543936._0x16e283) + _0x30dfa8(0x5a7) + _0x30dfa8(_0x543936._0x33859f) + '>3\x20-\x20Behin' + 'd\x20Tiles</o' + 'ption>\x0a\x20\x20\x20') + ('\x20\x20\x20\x20\x20<opti' + _0x30dfa8(0xcce) + '4\x22>4\x20-\x20Bel' + _0x30dfa8(0x9fd) + 'ers</optio' + 'n>\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20<option\x20v' + 'alue=\x225\x22>5' + _0x30dfa8(_0x543936._0x3bd082) + _0x30dfa8(_0x543936._0x513742) + 's</option>' + _0x30dfa8(_0x543936._0x48e16d) + 'option\x20val' + 'ue=\x226\x22>6\x20-' + '\x20Above\x20Cha' + 'racters</o' + 'ption>\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20<opti' + 'on\x20value=\x22' + _0x30dfa8(0x906) + _0x30dfa8(0xab7) + 'ing</optio' + 'n>\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20<option\x20v' + 'alue=\x228\x22>8' + '\x20-\x20Top\x20Lay' + 'er</option' + _0x30dfa8(0x3e8) + 'select>\x0a\x20\x20' + _0x30dfa8(_0x543936._0x4785cc) + '\x20\x20\x20\x20<div\x20c' + _0x30dfa8(0xc27) + 'd\x22>\x0a\x20<div\x20' + 'class=\x22fie' + 'ld\x22>\x0a\x20\x20<di' + _0x30dfa8(_0x543936._0x1781f0) + 'isplay:\x20gr' + _0x30dfa8(_0x543936._0x576a13) + 'emplate-co' + _0x30dfa8(0x8ab) + '\x201fr;\x20gap:' + '\x208px;\x22>\x0a\x20\x20' + '\x20\x20<div>\x0a\x20\x20' + '\x20\x20\x20\x20<label' + _0x30dfa8(_0x543936._0x602b72) + '/label>\x0a\x20\x20' + '\x20\x20\x20\x20<input' + '\x20type=\x22num' + _0x30dfa8(0x78d) + _0x30dfa8(0xb9d) + _0x30dfa8(_0x543936._0x5b0c72) + _0x30dfa8(_0x543936._0x5cf1bf) + '99\x22\x20max=\x229' + '99\x22\x20onchan' + 'ge=\x22update' + 'Preview()\x22' + '>\x0a\x20\x20\x20\x20</di' + 'v>\x0a\x20\x20\x20\x20<di' + _0x30dfa8(_0x543936._0x54adbc) + 'label>Offs' + 'et\x20Y</labe' + _0x30dfa8(_0x543936._0x1dedba) + 'input\x20type' + '=\x22number\x22\x20' + 'id=\x22offset' + _0x30dfa8(_0x543936._0x353e40) + _0x30dfa8(0x677) + 'n=\x22-999\x22\x20m' + 'ax=\x22999\x22\x20o' + 'nchange=\x22u' + _0x30dfa8(0x16f) + 'ew()\x22>\x0a\x20\x20\x20' + '\x20</div>\x0a\x20\x20' + '</div>\x0a</d' + _0x30dfa8(_0x543936._0x51e686) + '!--\x20BLOOM\x20' + 'SETTINGS\x20-' + '->\x0a\x20\x20\x20\x20<di' + 'v\x20style=\x22m' + 'argin-top:' + '\x2015px;\x20pad' + 'ding:\x2012px' + ';\x20backgrou' + 'nd:\x20rgba(2' + _0x30dfa8(0x61e) + '55,\x200.03);' + _0x30dfa8(0xc1b) + 'dius:\x208px;' + '\x22>\x0a\x20\x20\x20\x20\x20\x20<' + _0x30dfa8(0xa2b) + 'ection-tit' + _0x30dfa8(_0x543936._0x2a19fb) + 'Settings</' + _0x30dfa8(0x93c) + _0x30dfa8(_0x543936._0x11c3bc) + _0x30dfa8(_0x543936._0x4483a5) + '\x20\x20\x20\x20\x20\x20\x20\x20<l' + 'abel\x20style' + '=\x22display:' + _0x30dfa8(0xc82)) + ('gn-items:\x20' + _0x30dfa8(_0x543936._0x349e0e) + _0x30dfa8(_0x543936._0x44c618) + 'ter;\x20user-' + _0x30dfa8(_0x543936._0x1320ac) + 'ne;\x22>\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20<inp' + _0x30dfa8(_0x543936._0x37c2e1) + _0x30dfa8(_0x543936._0x35a59e) + 'd=\x22bloomCh' + 'eckbox\x22\x20on' + _0x30dfa8(0x3e5) + 'datePrevie' + 'w()\x22\x0a\x20\x20\x20\x20\x20' + _0x30dfa8(0xa09) + 'le=\x22width:' + _0x30dfa8(_0x543936._0x230a54) + 'gin-right:' + '\x208px;\x22>\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20<s' + 'pan>Enable' + '\x20Bloom\x20Eff' + 'ect</span>' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<' + _0x30dfa8(0xa7e) + _0x30dfa8(_0x543936._0x59a0f0) + '\x0a\x0a\x20\x20\x20\x20\x20\x20<d' + _0x30dfa8(_0x543936._0x1ad94b) + 'field\x22>\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20<lab' + 'el>Blur\x20Am' + 'ount</labe' + 'l>\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x385660) + _0x30dfa8(_0x543936._0x10b9c5) + '\x22\x20id=\x22blur' + _0x30dfa8(0x6ab) + 't\x22\x20value=\x22' + '15\x22\x20min=\x221' + _0x30dfa8(0x524) + '\x20onchange=' + '\x22updatePre' + 'view()\x22>\x0a\x20' + _0x30dfa8(_0x543936._0x358407) + '>\x0a\x0a\x20\x20\x20\x20\x20\x20<' + _0x30dfa8(_0x543936._0x24b245) + '\x22field\x22>\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20<la' + 'bel>Intens' + _0x30dfa8(0x146) + _0x30dfa8(0xbac) + _0x30dfa8(0xc9f) + 'nput\x20type=' + _0x30dfa8(_0x543936._0xb3b921) + 'd=\x22intensi' + 'tyInput\x22\x20v' + 'alue=\x22255\x22' + '\x20min=\x220\x22\x20m' + _0x30dfa8(_0x543936._0x295ddc) + 'nchange=\x22u' + _0x30dfa8(0x16f) + _0x30dfa8(_0x543936._0x12e86c) + '\x20\x20\x20</div>\x0a' + '\x0a\x20\x20\x20\x20\x20\x20<di' + 'v\x20class=\x22f' + 'ield\x22>\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20<labe' + _0x30dfa8(_0x543936._0x3b58c6) + 'or</label>' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<' + _0x30dfa8(0x9e3) + '=\x22color\x22\x20i' + 'd=\x22tintCol' + 'orInput\x22\x20v' + _0x30dfa8(0xd24) + 'FFF\x22\x20oncha' + _0x30dfa8(0x732) + 'ePreview()' + _0x30dfa8(_0x543936._0x4c9514) + '\x20\x20style=\x22h' + 'eight:\x2040p' + 'x;\x20cursor:' + '\x20pointer;\x22' + _0x30dfa8(_0x543936._0x1eb234) + 'div>\x0a\x20\x20\x20\x20<' + '/div>\x0a\x20\x20</' + 'div>\x0a</div' + _0x30dfa8(0xb80) + 'id=\x22librar' + 'yModal\x22\x20cl' + 'ass=\x22libra' + _0x30dfa8(0x164) + '\x0a\x20\x20\x20\x20<div\x20' + 'class=\x22lib' + 'rary-conte' + 'nt\x22>\x0a\x20\x20\x20\x20\x20' + '\x20<div\x20clas' + 's=\x22library' + '-header\x22>\x0a' + _0x30dfa8(0x5cd)) + ('2>Animatio' + 'n\x20Library<' + _0x30dfa8(0xbb7) + '\x20\x20\x20<div\x20st' + 'yle=\x22displ' + 'ay:\x20flex;\x20' + 'gap:\x2010px;' + '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20<button' + '\x20class=\x22re' + 'move-sprit' + 'es-button\x22' + '\x20onclick=\x22' + 'removeAllT' + 'argetSprit' + 'es()\x22>\x0a\x20\x20\x20' + _0x30dfa8(0x94d) + 'emove\x20All\x20' + 'Target\x20Spr' + _0x30dfa8(0x311) + '\x20\x20\x20\x20\x20\x20\x20<di' + 'v\x20style=\x22f' + 'ont-size:\x20' + '10px;\x20font' + _0x30dfa8(0x7af) + _0x30dfa8(_0x543936._0x4dae8f) + 'gin-top:\x202' + 'px;\x22>Help\x20' + _0x30dfa8(0xb20) + _0x30dfa8(0x95c) + 'tings\x20file' + '\x20size\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20</' + 'div>\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20</but' + 'ton>\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20<butt' + 'on\x20class=\x22' + 'close-libr' + 'ary\x22\x20oncli' + 'ck=\x22closeL' + _0x30dfa8(_0x543936._0x37ab7d) + '✕\x20Close</b' + 'utton>\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20</div' + _0x30dfa8(0x3e8) + _0x30dfa8(0x7d1) + _0x30dfa8(0x111) + 'libraryGri' + 'd\x22\x20class=\x22' + _0x30dfa8(0x4b7) + 'id\x22>\x0a\x20\x20\x20\x20\x20' + '\x20</div>\x0a\x20\x20' + _0x30dfa8(_0x543936._0x43406d) + '\x20</div>\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '<script>\x0a\x20' + _0x30dfa8(0x5a0) + _0x30dfa8(0xa8b) + _0x30dfa8(0xca0) + 'as\x20=\x20null;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20let' + '\x20previewCt' + 'x\x20=\x20null;\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20let\x20' + _0x30dfa8(_0x543936._0x45c501) + 'itesheet\x20=' + _0x30dfa8(_0x543936._0x4d1060) + _0x30dfa8(_0x543936._0x152059) + '\x20\x20\x20let\x20ani' + _0x30dfa8(0x11b) + 'e\x20=\x200;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20let\x20las' + _0x30dfa8(_0x543936._0x28783c) + _0x30dfa8(0x195) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0xed) + _0x30dfa8(_0x543936._0x4e5e17) + 'false;\x0a\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x20let\x20cha' + 'racterSpri' + 'te\x20=\x20null;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x47e47b) + _0x30dfa8(0xe4) + 'SpriteWidt' + 'h\x20=\x200;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0xa7544d) + _0x30dfa8(0xc7b) + 'teHeight\x20=' + _0x30dfa8(0x74b) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0xc22078) + 'terSpriteR' + _0x30dfa8(_0x543936._0x145c2d)) + ('\x200;\x0a\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + 'let\x20charac' + 'terSpriteR' + 'ealHeight\x20' + _0x30dfa8(0x21a) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0xc74) + 'cterSprite' + 'TileWidth\x20' + _0x30dfa8(0x780) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20let\x20char' + _0x30dfa8(_0x543936._0x5a6553) + _0x30dfa8(0xc3e) + 't\x20=\x2048;\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20let\x20is' + _0x30dfa8(_0x543936._0x110c95) + 'imation\x20=\x20' + _0x30dfa8(0x3ed) + _0x30dfa8(_0x543936._0x45b7e4) + '\x20\x20\x20let\x20dra' + 'gStartX\x20=\x20' + '0;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20l' + 'et\x20dragSta' + _0x30dfa8(_0x543936._0x53013c) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20let\x20d' + _0x30dfa8(0xbb8) + '\x20=\x200;\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20let\x20drag' + 'OffsetY\x20=\x20' + '0;\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x9da) + 'et\x20current' + 'RandomFlip' + _0x30dfa8(_0x543936._0x30bd95) + _0x30dfa8(0x832) + '\x20\x20\x20\x20\x20\x20\x20let' + '\x20currentRa' + _0x30dfa8(0x940) + 'on\x20=\x200;\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x3589f3) + _0x30dfa8(_0x543936._0x3ad970) + 'Counter\x20=\x20' + '0;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20l' + 'et\x20opening' + _0x30dfa8(_0x543936._0x28b606) + 'rogress\x20=\x20' + _0x30dfa8(0xaac) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20l' + _0x30dfa8(0x239) + 'nimationPr' + 'ogress\x20=\x200' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x4bd25d) + _0x30dfa8(_0x543936._0x3d7678) + _0x30dfa8(_0x543936._0x10fe1e) + 'im\x20=\x20false' + _0x30dfa8(0x77a) + '\x20\x20\x20\x20\x20\x20\x20\x20le' + _0x30dfa8(0x1b9) + 'gEndingAni' + 'm\x20=\x20false;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x47e47b) + '\x20animation' + _0x30dfa8(0x6d7) + '=\x200;\x0a\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x19c79f) + _0x30dfa8(_0x543936._0x2a84da) + 'aveTimeout' + '\x20=\x20null;\x0a\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20func' + 'tion\x20updat' + 'eRotationD' + 'isplay()\x20{' + _0x30dfa8(_0x543936._0x18083e) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20const\x20rot' + 'ationValue' + '\x20=\x20documen' + _0x30dfa8(_0x543936._0x422b95) + 'ntById(\x27ro' + 'tationInpu' + 't\x27)?.value' + '\x20||\x200;\x0a\x20\x20\x20' + _0x30dfa8(_0x543936._0x152059) + '\x20\x20\x20\x20\x20\x20\x20con' + _0x30dfa8(_0x543936._0x515752) + _0x30dfa8(_0x543936._0x3a96c0) + '\x20document.' + 'getElement' + _0x30dfa8(_0x543936._0x39cf2a)) + (_0x30dfa8(0xa54) + 'y\x27);\x0a\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20if\x20(r' + 'otationDis' + 'play)\x20{\x0a\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20rotation' + 'Display.te' + _0x30dfa8(0x864) + '=\x20rotation' + _0x30dfa8(_0x543936._0x26659b) + '\x27;\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x18402f) + '\x20\x20\x20}\x0a\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0xd65c28) + _0x30dfa8(_0x543936._0x5788da) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'function\x20u' + 'pdateRando' + 'mValues()\x20' + '{\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x3a1fca) + 'dateCounte' + _0x30dfa8(_0x543936._0x1a7293) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20if\x20(r' + _0x30dfa8(_0x543936._0x131265) + 'eCounter\x20>' + '=\x2010)\x20{\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20randomUp' + _0x30dfa8(_0x543936._0x119b37) + 'r\x20=\x200;\x0a\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x5775b9) + '\x20\x20\x20\x20\x20\x20cons' + 't\x20randomFl' + _0x30dfa8(_0x543936._0x4f9d7f) + 'al\x20=\x20docum' + _0x30dfa8(_0x543936._0x43f5f9) + _0x30dfa8(_0x543936._0x293dd9) + _0x30dfa8(_0x543936._0x4e97d8) + 'Horizontal' + 'Checkbox\x27)' + '?.checked\x20' + '||\x20false;\x0a' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x3c5) + 'randomFlip' + 'Vertical\x20=' + '\x20document.' + 'getElement' + _0x30dfa8(_0x543936._0xbe2659) + 'omFlipVert' + _0x30dfa8(_0x543936._0x3f7a5a) + 'ox\x27)?.chec' + 'ked\x20||\x20fal' + 'se;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20co' + _0x30dfa8(_0x543936._0x2c8dd4) + 'Rotation\x20=' + _0x30dfa8(0x6be) + _0x30dfa8(_0x543936._0x5b3814) + 'ById(\x27rand' + _0x30dfa8(0x80d) + 'Checkbox\x27)' + '?.checked\x20' + '||\x20false;\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x547aa7) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x2353f3) + 'f\x20(randomF' + 'lipHorizon' + 'tal)\x20{\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20curre' + 'ntRandomFl' + _0x30dfa8(_0x543936._0x4d5eb5) + '.random()\x20' + '<\x200.5;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20}\x20else\x20{\x0a' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x154) + 'rrentRando' + 'mFlipX\x20=\x20f' + 'alse;\x0a\x20\x20\x20\x20') + ('\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '}\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x898) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x5f5a32) + 'mFlipVerti' + 'cal)\x20{\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x3e1d2e) + 'ntRandomFl' + 'ipY\x20=\x20Math' + '.random()\x20' + _0x30dfa8(0x2b5) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x252b8a) + '\x20}\x20else\x20{\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x553b43) + '\x20\x20\x20\x20\x20\x20\x20\x20cu' + 'rrentRando' + _0x30dfa8(0xac6) + _0x30dfa8(_0x543936._0x5445cd) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '}\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20' + _0x30dfa8(0x5a0) + _0x30dfa8(_0x543936._0xab96a8) + '\x20if\x20(rando' + 'mRotation)' + _0x30dfa8(0xc80) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0xab96a8) + '\x20currentRa' + _0x30dfa8(_0x543936._0x446497) + 'on\x20=\x20Math.' + 'random()\x20*' + '\x20360;\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x2d3) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0xa97) + _0x30dfa8(0x181) + _0x30dfa8(_0x543936._0x1ce565) + '\x200;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x42d1c3) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + '}\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20}\x0a' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x347ad5) + _0x30dfa8(_0x543936._0x3fc886) + '\x20=\x20functio' + 'n()\x20{\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20prev' + _0x30dfa8(0xcc3) + '=\x20document' + '.getElemen' + 'tById(\x27pre' + 'viewCanvas' + _0x30dfa8(0x5a9) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x54a34c) + 'wCtx\x20=\x20pre' + 'viewCanvas' + _0x30dfa8(_0x543936._0x1d9e0c) + _0x30dfa8(0x644) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x3a1) + _0x30dfa8(0x7ae) + 'imageSmoot' + _0x30dfa8(0xc07) + _0x30dfa8(_0x543936._0x4050e6) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x3b9a08) + 'ntainer\x20=\x20' + 'previewCan' + _0x30dfa8(0x433) + _0x30dfa8(_0x543936._0x1fc283) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20c' + 'onst\x20conta' + 'inerWidth\x20' + _0x30dfa8(_0x543936._0x33d636) + 'r.clientWi' + 'dth\x20-\x2040;\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20') + ('\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'const\x20cont' + _0x30dfa8(0x327) + 't\x20=\x20contai' + _0x30dfa8(_0x543936._0x5ca489) + _0x30dfa8(_0x543936._0x5a6656) + '0;\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x19c79f) + _0x30dfa8(_0x543936._0x27ca79) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0xd25) + 'wCanvas.wi' + 'dth\x20=\x20Math' + '.min(conta' + _0x30dfa8(0xbe8) + '\x20400);\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20pre' + 'viewCanvas' + '.height\x20=\x20' + 'Math.min(c' + 'ontainerHe' + 'ight,\x20300)' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x71a) + _0x30dfa8(_0x543936._0xab96a8) + '\x20\x20\x20preview' + 'Canvas.add' + 'EventListe' + 'ner(\x27mouse' + _0x30dfa8(0x6f7) + 'anvasMouse' + 'Down);\x0a\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20\x20pre' + 'viewCanvas' + _0x30dfa8(0x987) + 'istener(\x27m' + 'ousemove\x27,' + _0x30dfa8(_0x543936._0x222de8) + 'ouseMove);' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20previewCa' + _0x30dfa8(0xb3a) + _0x30dfa8(_0x543936._0x311cbc) + 'r(\x27mouseup' + '\x27,\x20onCanva' + 'sMouseUp);' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20previewCa' + 'nvas.addEv' + 'entListene' + 'r(\x27mousele' + _0x30dfa8(0x745) + 'nvasMouseU' + 'p);\x0a\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x556b5b) + '\x20animNameI' + 'nput\x20=\x20doc' + _0x30dfa8(0x5b7) + _0x30dfa8(0xbea) + '(\x27animatio' + _0x30dfa8(0x586) + '\x27);\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20if\x20(an' + 'imNameInpu' + 't)\x20{\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x4c8) + 'nimNameInp' + _0x30dfa8(0x3d5) + 'tListener(' + '\x27input\x27,\x20u' + _0x30dfa8(0x83c) + 'aveVisibil' + 'ity);\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20}\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20};\x0a\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20functi' + 'on\x20onCanva' + _0x30dfa8(_0x543936._0xf4d612) + '(e)\x20{\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0xb54) + _0x30dfa8(0x26e) + 'ritesheet)' + _0x30dfa8(_0x543936._0x9e83fa) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a' + _0x30dfa8(_0x543936._0x1b6d53) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'const\x20rect') + ('\x20=\x20preview' + _0x30dfa8(_0x543936._0x5a7091) + _0x30dfa8(0x48c) + 'ientRect()' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20dragStar' + 'tX\x20=\x20e.cli' + 'entX\x20-\x20rec' + _0x30dfa8(_0x543936._0x16e8ca) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20dr' + 'agStartY\x20=' + '\x20e.clientY' + '\x20-\x20rect.to' + 'p;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20isDragg' + _0x30dfa8(0x1d2) + 'on\x20=\x20true;' + _0x30dfa8(_0x543936._0x4223bc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20const\x20of' + 'fsetXInput' + _0x30dfa8(0x4fc) + 't.getEleme' + 'ntById(\x27of' + 'fsetXInput' + '\x27);\x0a\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x426605) + '\x20\x20\x20\x20const\x20' + _0x30dfa8(_0x543936._0x2b2287) + 'ut\x20=\x20docum' + 'ent.getEle' + _0x30dfa8(_0x543936._0x4eba44) + 'offsetYInp' + 'ut\x27);\x0a\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x45b7e4) + '\x20\x20\x20\x20\x20\x20drag' + 'OffsetX\x20=\x20' + 'parseInt(o' + 'ffsetXInpu' + 't.value)\x20|' + '|\x200;\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x246) + 'ffsetY\x20=\x20p' + 'arseInt(of' + 'fsetYInput' + _0x30dfa8(_0x543936._0x5d6313) + '\x200;\x0a\x0a\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + _0x30dfa8(_0x543936._0x4cc97d) + 'erAutoSave' + '();\x0a\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + '}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20f' + _0x30dfa8(0x61d) + 'CanvasMous' + _0x30dfa8(0x555) + _0x30dfa8(0x832) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20if\x20(!isDr' + 'aggingAnim' + 'ation\x20||\x20!' + 'currentSpr' + 'itesheet)\x20' + 'return;\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20c' + _0x30dfa8(0x41b) + '=\x20previewC' + 'anvas.getB' + _0x30dfa8(_0x543936._0x8c7d11) + _0x30dfa8(0x8d1) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x20d) + _0x30dfa8(0x6e9) + _0x30dfa8(0x65c) + 'rect.left;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x10ac4e) + '\x20const\x20cur' + 'rentY\x20=\x20e.' + 'clientY\x20-\x20' + 'rect.top;\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20const\x20del' + 'taX\x20=\x20curr' + _0x30dfa8(_0x543936._0x1a6093) + _0x30dfa8(_0x543936._0x5688d7)) + ('\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20c' + 'onst\x20delta' + 'Y\x20=\x20curren' + _0x30dfa8(0x7c4) + 'tartY;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x1b294a) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0xc5c) + 'nst\x20newOff' + 'setX\x20=\x20dra' + 'gOffsetX\x20+' + '\x20Math.roun' + 'd(deltaX);' + _0x30dfa8(_0x543936._0x1d9f23) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x1ba6aa) + 'OffsetY\x20=\x20' + 'dragOffset' + 'Y\x20+\x20Math.r' + _0x30dfa8(_0x543936._0x493748) + _0x30dfa8(_0x543936._0x5ded4a) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20const' + _0x30dfa8(_0x543936._0x3698db) + 'put\x20=\x20docu' + 'ment.getEl' + 'ementById(' + '\x27offsetXIn' + 'put\x27);\x0a\x20\x20\x20' + _0x30dfa8(_0x543936._0xd65c28) + '\x20\x20\x20\x20\x20\x20\x20con' + _0x30dfa8(0xcaa) + 'Input\x20=\x20do' + 'cument.get' + 'ElementByI' + 'd(\x27offsetY' + 'Input\x27);\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'if\x20(offset' + 'XInput)\x20of' + 'fsetXInput' + '.value\x20=\x20n' + 'ewOffsetX;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20if\x20(offse' + 'tYInput)\x20o' + _0x30dfa8(0x639) + 't.value\x20=\x20' + 'newOffsetY' + _0x30dfa8(0x77a) + _0x30dfa8(0x5ed) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20fun' + 'ction\x20onCa' + 'nvasMouseU' + 'p()\x20{\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20if\x20(' + 'isDragging' + _0x30dfa8(_0x543936._0x28940c) + _0x30dfa8(0xc80) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20isD' + 'raggingAni' + 'mation\x20=\x20f' + 'alse;\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20const' + '\x20offsetXIn' + 'put\x20=\x20docu' + 'ment.getEl' + 'ementById(' + '\x27offsetXIn' + _0x30dfa8(_0x543936._0x22ea35) + _0x30dfa8(0x5a0) + _0x30dfa8(_0x543936._0x10ac4e) + '\x20const\x20off' + 'setYInput\x20' + _0x30dfa8(_0x543936._0x3b4781) + '.getElemen' + 'tById(\x27off' + 'setYInput\x27' + _0x30dfa8(0x3e6) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20dra' + 'gOffsetX\x20=' + '\x20parseInt(' + 'offsetXInp' + 'ut.value)\x20') + ('||\x200;\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + 'dragOffset' + 'Y\x20=\x20parseI' + 'nt(offsetY' + 'Input.valu' + _0x30dfa8(_0x543936._0x30cd9a) + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20}' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x519) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x484) + 'ow.setChar' + _0x30dfa8(0x666) + 'e\x20=\x20functi' + 'on(dataUrl' + ',\x20width,\x20h' + 'eight,\x20rea' + _0x30dfa8(_0x543936._0x24e742) + 'alHeight,\x20' + _0x30dfa8(_0x543936._0x31db8b) + '\x20tileHeigh' + _0x30dfa8(_0x543936._0x15e8f6) + _0x30dfa8(0xb46) + _0x30dfa8(0x8d5) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20const\x20' + 'img\x20=\x20new\x20' + 'Image();\x0a\x20' + _0x30dfa8(_0x543936._0x34a85d) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20i' + _0x30dfa8(0xa4a) + _0x30dfa8(_0x543936._0x2fe959) + '()\x20{\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20c' + 'haracterSp' + 'rite\x20=\x20img' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x73a) + _0x30dfa8(0x666) + 'eWidth\x20=\x20w' + _0x30dfa8(0x2da) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'characterS' + 'priteHeigh' + 't\x20=\x20height' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x73a) + 'acterSprit' + 'eRealWidth' + _0x30dfa8(0x31e) + 'th\x20||\x20widt' + 'h;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20cha' + 'racterSpri' + 'teRealHeig' + _0x30dfa8(_0x543936._0x199e39) + 'eight\x20||\x20h' + _0x30dfa8(_0x543936._0x1be804) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x10ac4e) + _0x30dfa8(_0x543936._0x2d38c3) + 'SpriteTile' + _0x30dfa8(0x310) + 'leWidth\x20||' + '\x2048;\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20c' + 'haracterSp' + 'riteTileHe' + 'ight\x20=\x20til' + _0x30dfa8(_0x543936._0x2e8488) + '\x2048;\x0a\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x18402f) + _0x30dfa8(0x3c5) + 'zIndexSele' + 'ct\x20=\x20docum' + 'ent.getEle' + _0x30dfa8(0x52e) + 'zIndexInpu' + _0x30dfa8(_0x543936._0x51a83a) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x9c2) + _0x30dfa8(0xc76) + _0x30dfa8(_0x543936._0x5d1d9c) + 'haracterPr' + _0x30dfa8(0xa9a) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x56711f) + '\x20\x20\x20\x20\x20\x20\x20\x20zI') + ('ndexSelect' + '.value\x20=\x20c' + 'haracterPr' + 'iority;\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20}\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x1c4b8d) + '\x20\x20\x20if\x20(!is' + 'Animating)' + '\x20{\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20isAnimati' + 'ng\x20=\x20true;' + _0x30dfa8(_0x543936._0x452ef8) + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20a' + 'nimatePrev' + 'iew();\x0a\x20\x20\x20' + _0x30dfa8(_0x543936._0x10ac4e) + _0x30dfa8(0x5a0) + '\x20}\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x56d8e3) + '\x20\x20\x20};\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20img.' + 'src\x20=\x20data' + 'Url;\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20};\x0a\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20function\x20' + 'selectSpri' + 'tesheet()\x20' + _0x30dfa8(0xad5) + '\x20\x20\x20\x20\x20\x20\x20\x20co' + 'nst\x20fileIn' + _0x30dfa8(_0x543936._0x233350) + 'ment.getEl' + 'ementById(' + '\x27fileInput' + _0x30dfa8(_0x543936._0x427d1b) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'fileInput.' + _0x30dfa8(_0x543936._0x5f563d) + '\x20async\x20fun' + 'ction(e)\x20{' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20if\x20' + '(e.target.' + 'files\x20&&\x20e' + _0x30dfa8(_0x543936._0x591e68) + 'les[0])\x20{\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20cons' + _0x30dfa8(0x577) + '.target.fi' + 'les[0];\x0a\x0a\x20' + _0x30dfa8(0x5a0) + _0x30dfa8(0x4a5) + _0x30dfa8(0x4ce) + _0x30dfa8(0x4ec) + 'ow.opener.' + _0x30dfa8(0xb59) + _0x30dfa8(0x1bc) + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20cons' + 't\x20relative' + _0x30dfa8(_0x543936._0x48a95f) + 'it\x20window.' + 'opener.Fil' + 'eSystemHel' + 'per.vfxDes' + _0x30dfa8(_0x543936._0x256a25) + _0x30dfa8(_0x543936._0x33b5c9) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0xc4b) + '(relativeP' + 'ath)\x20{\x0a\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x20updateF' + _0x30dfa8(0x5b4) + '(relativeP' + 'ath);}\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20const\x20re' + 'ader\x20=\x20new' + '\x20FileReade' + 'r();\x0a\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x4b7ff2) + '\x20reader.on' + 'load\x20=\x20fun' + 'ction(even' + _0x30dfa8(0x30d)) + ('\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20const\x20img' + '\x20=\x20new\x20Ima' + 'ge();\x0a\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20img.onlo' + 'ad\x20=\x20funct' + _0x30dfa8(_0x543936._0x11c0c3) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20curren' + 'tSpriteshe' + 'et\x20=\x20img;\x0a' + _0x30dfa8(0x832) + '\x20\x20\x20\x20\x20\x20\x20if\x20' + '(!isAnimat' + _0x30dfa8(0xc4e) + _0x30dfa8(0x5a0) + '\x20\x20\x20isAnima' + 'ting\x20=\x20tru' + 'e;\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x5b1bb3) + 'nimatePrev' + _0x30dfa8(0x2b0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20}\x0a\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x349526) + '\x20};\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x2a3e38) + 'event.targ' + 'et.result;' + _0x30dfa8(0x832) + '\x20\x20\x20\x20\x20\x20\x20};\x0a' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20read' + _0x30dfa8(0x2e7) + 'ataURL(fil' + _0x30dfa8(_0x543936._0x311f38) + _0x30dfa8(0x5a0) + '}\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20};' + _0x30dfa8(0x832) + '\x20\x20\x20\x20\x20\x20\x20fil' + 'eInput.cli' + 'ck();\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20}\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x66f) + 'ction\x20upda' + _0x30dfa8(0xa40) + 'lay(fileNa' + 'me)\x20{\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20const\x20fi' + _0x30dfa8(0x51c) + _0x30dfa8(_0x543936._0x570c7c) + _0x30dfa8(0x443) + 'd(\x27fileBox' + '\x27);\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'if\x20(fileBo' + 'x)\x20{\x0a\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20fileBox.t' + 'extContent' + '\x20=\x20fileNam' + 'e;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20f' + 'ileBox.cla' + 'ssList.add' + '(\x27has-file' + '\x27);\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '}\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20}\x0a' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x5c039c) + _0x30dfa8(_0x543936._0x2abd07) + 'atePreview' + '()\x20{\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20const\x20cur' + 'rentTime\x20=' + _0x30dfa8(0x129) + ');\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x5803ec) + 'onst\x20fps\x20=' + _0x30dfa8(0xd29) + 'document.g' + _0x30dfa8(0x67c) + 'yId(\x27fpsIn' + _0x30dfa8(_0x543936._0x244320) + 'e)\x20||\x2010;\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20cons' + 't\x20frameDel' + 'ay\x20=\x201000\x20' + '/\x20fps;\x0a\x0a\x20\x20') + (_0x30dfa8(0x5a0) + '\x20\x20\x20\x20if\x20(cu' + _0x30dfa8(0x87c) + '-\x20lastFram' + 'eTime\x20>=\x20f' + 'rameDelay)' + '\x20{\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x183ef0) + 'rawPreview' + 'Frame();\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20lastF' + 'rameTime\x20=' + '\x20currentTi' + 'me;\x0a\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0xd65c28) + '}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20r' + _0x30dfa8(0x78e) + _0x30dfa8(_0x543936._0x3e5371) + '(animatePr' + 'eview);\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x1760d7) + 'n\x20drawPrev' + 'iewFrame()' + '\x20{\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20c' + _0x30dfa8(0x72c) + '\x20=\x20parseIn' + 't(document' + _0x30dfa8(_0x543936._0x420be3) + 'tById(\x27sca' + _0x30dfa8(_0x543936._0x129f81) + 'value)\x20/\x201' + '00\x20||\x201;\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20const' + _0x30dfa8(0xd1f) + 'ue\x20=\x20docum' + 'ent.getEle' + 'mentById(\x27' + _0x30dfa8(0x9f8) + 't\x27)?.value' + '\x20||\x20\x27auto\x27' + _0x30dfa8(0x77a) + _0x30dfa8(0xc5c) + _0x30dfa8(0x71b) + _0x30dfa8(_0x543936._0x5c359e) + 'alue\x20===\x20\x27' + _0x30dfa8(_0x543936._0x41ad35) + ':\x20parseInt' + '(zIndexVal' + _0x30dfa8(0x7bc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0xe5) + 'tx.clearRe' + 'ct(0,\x200,\x20p' + _0x30dfa8(0xca0) + 'as.width,\x20' + 'previewCan' + _0x30dfa8(_0x543936._0x309967) + ');\x0a\x0a\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + 'if\x20(zIndex' + '\x20===\x205)\x20{\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20draw' + 'WithYSorti' + 'ng(scale);' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x4b9) + _0x30dfa8(_0x543936._0x5c3bc4) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20const\x20dr' + 'awCharacte' + 'rFirst\x20=\x20z' + 'Index\x20>=\x205' + ';\x0a\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x2353f3) + 'f\x20(drawCha' + _0x30dfa8(_0x543936._0x4ffe1c) + 't)\x20{\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20drawChara' + _0x30dfa8(0x556) + 'scale);\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20drawAn' + 'imationLay' + _0x30dfa8(_0x543936._0x45419e) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20}\x20e' + 'lse\x20{\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20drawAnim' + 'ationLayer' + _0x30dfa8(_0x543936._0x381a1c)) + ('\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20drawC' + 'haracterLa' + 'yer(scale)' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5ed) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20}\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20' + _0x30dfa8(_0x543936._0x252b8a) + _0x30dfa8(0xbb9) + _0x30dfa8(_0x543936._0x52538e) + _0x30dfa8(_0x543936._0x17d2b0) + _0x30dfa8(_0x543936._0xa28da) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x14e94) + '\x20(!charact' + _0x30dfa8(_0x543936._0x1cf0c0) + _0x30dfa8(_0x543936._0x770d54) + 'Spriteshee' + _0x30dfa8(_0x543936._0x3aa460) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x4fd) + _0x30dfa8(0xd09) + 'ht\x20=\x20chara' + 'cterSprite' + 'Height\x20*\x20s' + 'cale;\x0a\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x56d8e3) + _0x30dfa8(_0x543936._0x10a44d) + 't\x20charY\x20=\x20' + _0x30dfa8(0xa05) + 'nvas.heigh' + 't\x20-\x20charDr' + _0x30dfa8(0x11a) + '/\x202;\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20const' + '\x20character' + 'BottomY\x20=\x20' + 'charY\x20+\x20ch' + _0x30dfa8(_0x543936._0x29447e) + _0x30dfa8(_0x543936._0x7fe454) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x625304) + '\x20\x20\x20\x20\x20let\x20a' + 'nimationBo' + 'ttomY\x20=\x200;' + _0x30dfa8(_0x543936._0x53e65f) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20if\x20(curre' + 'ntSpritesh' + 'eet)\x20{\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20const\x20row' + _0x30dfa8(_0x543936._0x502b62) + 'nt(documen' + _0x30dfa8(0x39e) + _0x30dfa8(_0x543936._0x1c2ea7) + 'wInput\x27).v' + 'alue)\x20||\x201' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20cons' + 't\x20columns\x20' + _0x30dfa8(0x8de) + '(document.' + _0x30dfa8(_0x543936._0x5d2679) + 'ById(\x27colu' + 'mnInput\x27).' + 'value)\x20||\x20' + _0x30dfa8(0x63f) + _0x30dfa8(_0x543936._0xbe846a) + '\x20\x20\x20\x20\x20\x20\x20con' + 'st\x20offsetY' + _0x30dfa8(0xb78) + 't(document' + '.getElemen' + 'tById(\x27off' + 'setYInput\x27' + _0x30dfa8(_0x543936._0x270c90) + '||\x200;\x0a\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x553b43) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x53e65f) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x38f52d) + '\x20frameWidt' + 'h\x20=\x20curren' + 'tSpriteshe' + _0x30dfa8(_0x543936._0x19b423) + '\x20columns;\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0)) + (_0x30dfa8(_0x543936._0xe7dd5e) + _0x30dfa8(_0x543936._0x53ac4a) + 't\x20=\x20curren' + 'tSpriteshe' + 'et.height\x20' + '/\x20rows;\x0a\x20\x20' + _0x30dfa8(_0x543936._0x18402f) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20const\x20dr' + 'awHeight\x20=' + '\x20frameHeig' + 'ht\x20*\x20scale' + _0x30dfa8(0x77a) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20const\x20cha' + 'rDrawWidth' + '\x20=\x20charact' + _0x30dfa8(0x7e8) + 'dth\x20*\x20scal' + 'e;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20con' + 'st\x20screenY' + '\x20=\x20charY\x20+' + '\x20charDrawH' + 'eight\x20-\x20(c' + 'harDrawHei' + 'ght\x20/\x202);\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x567) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0xccf) + 'onst\x20gameO' + _0x30dfa8(0x2c8) + 'ffsetY\x20*\x202' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x4a01e3) + '\x20\x20\x20\x20\x20\x20cons' + _0x30dfa8(_0x543936._0x188930) + 'ale\x20=\x20char' + 'DrawWidth\x20' + '/\x20characte' + 'rSpriteRea' + 'lWidth;\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20const\x20ca' + _0x30dfa8(_0x543936._0x4816ec) + _0x30dfa8(_0x543936._0x16f1b8) + 'fsetY\x20*\x20ca' + _0x30dfa8(0x508) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x4a01e3) + _0x30dfa8(_0x543936._0x53a078) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'const\x20anim' + 'Y\x20=\x20screen' + _0x30dfa8(_0x543936._0x323170) + 'eight\x20/\x202)' + '\x20+\x20canvasO' + _0x30dfa8(0xc5e) + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x7f9) + _0x30dfa8(_0x543936._0x1a56fb) + _0x30dfa8(0x621) + 'rawHeight;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20}\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20//\x20Y-s' + 'orting\x0a\x20\x20\x20' + _0x30dfa8(_0x543936._0x1bff9e) + '\x20\x20\x20\x20\x20\x20\x20if\x20' + _0x30dfa8(0xd5) + 'ritesheet\x20' + _0x30dfa8(0xb55) + 'onBottomY\x20' + '<\x20characte' + 'rBottomY)\x20' + _0x30dfa8(_0x543936._0x20dfaf) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20draw' + _0x30dfa8(_0x543936._0x26a308) + 'ayer(scale' + _0x30dfa8(_0x543936._0x3a3abb) + _0x30dfa8(_0x543936._0x56711f) + _0x30dfa8(0x774) + 'wCharacter' + 'Layer(scal' + 'e);\x0a\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0)) + (_0x30dfa8(_0x543936._0x20e62c) + '\x20{\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20dra' + 'wCharacter' + 'Layer(scal' + 'e);\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20if' + '\x20(currentS' + 'pritesheet' + ')\x20{\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20drawAnim' + _0x30dfa8(0x279) + _0x30dfa8(_0x543936._0x381a1c) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x298625) + '\x20\x20\x20}\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20}\x0a\x20\x20\x20' + _0x30dfa8(_0x543936._0x3a1ef6) + _0x30dfa8(_0x543936._0x1153eb) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20function' + '\x20drawChara' + _0x30dfa8(_0x543936._0x29e9c2) + _0x30dfa8(_0x543936._0x5a1ee1) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20if\x20' + '(!characte' + _0x30dfa8(0x880) + 'eturn;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x53a078) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x570fda) + _0x30dfa8(_0x543936._0x3f0bdd) + 'dth\x20=\x20char' + _0x30dfa8(0x666) + 'eWidth;\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20cons' + 't\x20charDraw' + 'Height\x20=\x20c' + 'haracterSp' + 'riteHeight' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x5775b9) + 'const\x20char' + 'X\x20=\x20(previ' + 'ewCanvas.w' + 'idth\x20-\x20cha' + _0x30dfa8(0xb49) + _0x30dfa8(0xa29) + _0x30dfa8(_0x543936._0x41d815) + '\x20\x20\x20\x20\x20const' + '\x20charY\x20=\x20(' + _0x30dfa8(_0x543936._0x191c72) + 'vas.height' + _0x30dfa8(0x1ce) + 'wHeight)\x20/' + '\x202;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x334fcb) + _0x30dfa8(_0x543936._0x56a32e) + _0x30dfa8(_0x543936._0x5a36af) + 'x.drawImag' + 'e(\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20chara' + _0x30dfa8(_0x543936._0x172551) + ',\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x200,\x200,\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x298625) + '\x20\x20characte' + 'rSpriteWid' + 'th,\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20char' + _0x30dfa8(_0x543936._0x5c38ba) + 'eHeight,\x0a\x20' + _0x30dfa8(_0x543936._0x4a01e3) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x39e21e) + 'arY,\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x60f) + 'rDrawWidth' + ',\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x10ac4e) + '\x20\x20\x20\x20charDr' + _0x30dfa8(_0x543936._0x65dc3f) + _0x30dfa8(0x5a0) + _0x30dfa8(_0x543936._0x38dd7c) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20') + (_0x30dfa8(0x5a0) + '\x20\x20\x20functio' + 'n\x20drawAnim' + _0x30dfa8(_0x543936._0x445ba4) + _0x30dfa8(_0x543936._0x26c415) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20if' + '\x20(!current' + _0x30dfa8(_0x543936._0x2021ba) + _0x30dfa8(0x7c8) + _0x30dfa8(0x832) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a' + _0x30dfa8(_0x543936._0x3a1ef6) + '\x20\x20\x20\x20\x20\x20\x20\x20up' + 'dateRandom' + 'Values();\x0a' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20con' + 'st\x20rows\x20=\x20' + 'parseInt(d' + 'ocument.ge' + 'tElementBy' + 'Id(\x27rowInp' + 'ut\x27).value' + _0x30dfa8(0x7bb) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20cons' + 't\x20columns\x20' + '=\x20parseInt' + '(document.' + 'getElement' + _0x30dfa8(_0x543936._0x5e04ba) + _0x30dfa8(0x74d) + _0x30dfa8(_0x543936._0x13ecf6) + '1;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20const\x20off' + 'setX\x20=\x20par' + 'seInt(docu' + _0x30dfa8(_0x543936._0x1b04b8) + 'ementById(' + _0x30dfa8(0xcde) + _0x30dfa8(_0x543936._0x3b443f) + _0x30dfa8(_0x543936._0x49bdb4) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20co' + 'nst\x20offset' + 'Y\x20=\x20parseI' + 'nt(documen' + 't.getEleme' + 'ntById(\x27of' + 'fsetYInput' + '\x27)?.value)' + _0x30dfa8(_0x543936._0x1c6ccc) + _0x30dfa8(0x5a0) + _0x30dfa8(0x6fc) + '\x20opacity\x20=' + '\x20parseInt(' + 'document.g' + 'etElementB' + _0x30dfa8(_0x543936._0x23e002) + _0x30dfa8(_0x543936._0x44deed) + '.value)\x20||' + '\x20255;\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20const\x20' + 'hue\x20=\x20pars' + 'eInt(docum' + 'ent.getEle' + _0x30dfa8(_0x543936._0x4eba44) + 'hueInput\x27)' + _0x30dfa8(0xc00) + '|\x200;\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x262) + 'lendMode\x20=' + '\x20document.' + 'getElement' + 'ById(\x27blen' + 'dModeInput' + '\x27)?.value\x20' + '||\x20\x27Normal' + '\x27;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20const\x20fli' + _0x30dfa8(0x76b) + _0x30dfa8(0xb6f) + _0x30dfa8(0x390) + 'entById(\x27f' + _0x30dfa8(0x177) + 'talCheckbo' + _0x30dfa8(_0x543936._0x157087) + 'ed\x20||\x20fals' + 'e;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20const\x20fli' + 'pVertical\x20' + '=\x20document') + ('.getElemen' + _0x30dfa8(0x1b5) + 'pVerticalC' + _0x30dfa8(_0x543936._0x240535) + '.checked\x20|' + '|\x20false;\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x9aa) + 'st\x20randomF' + 'lipHorizon' + 'tal\x20=\x20docu' + 'ment.getEl' + 'ementById(' + '\x27randomFli' + _0x30dfa8(_0x543936._0x3c3267) + 'lCheckbox\x27' + _0x30dfa8(0x43a) + '\x20||\x20false;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0xccf) + 'onst\x20rando' + 'mFlipVerti' + 'cal\x20=\x20docu' + 'ment.getEl' + 'ementById(' + '\x27randomFli' + _0x30dfa8(0x110) + 'heckbox\x27)?' + '.checked\x20|' + '|\x20false;\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20con' + 'st\x20rotatio' + _0x30dfa8(0x80e) + _0x30dfa8(_0x543936._0x2070d6) + _0x30dfa8(0x39e) + 'ntById(\x27ro' + _0x30dfa8(_0x543936._0x356e64) + _0x30dfa8(0x1ad) + ')\x20||\x200;\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20cons' + 't\x20randomRo' + 'tation\x20=\x20d' + 'ocument.ge' + _0x30dfa8(0xa0a) + 'Id(\x27random' + 'RotationCh' + _0x30dfa8(0x2e4) + _0x30dfa8(0xf1) + '\x20false;\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20cons' + 't\x20reverse\x20' + '=\x20document' + _0x30dfa8(_0x543936._0x420be3) + _0x30dfa8(0x54e) + 'erseCheckb' + 'ox\x27)?.chec' + 'ked\x20||\x20fal' + 'se;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20const\x20bl' + 'oomEnabled' + '\x20=\x20documen' + _0x30dfa8(_0x543936._0x3dbbd2) + _0x30dfa8(0xdc) + 'oomCheckbo' + 'x\x27)?.check' + _0x30dfa8(_0x543936._0x48ad3c) + 'e;\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + _0x30dfa8(_0x543936._0x3333be) + 'rAmount\x20=\x20' + 'parseInt(d' + 'ocument.ge' + 'tElementBy' + 'Id(\x27blurAm' + 'ountInput\x27' + ')?.value)\x20' + '||\x2015;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20const' + '\x20intensity' + '\x20=\x20parseIn' + 't(document' + _0x30dfa8(_0x543936._0x53152e) + 'tById(\x27int' + _0x30dfa8(_0x543936._0x5c1074) + 't\x27)?.value' + _0x30dfa8(0x358) + _0x30dfa8(_0x543936._0x3a1ef6) + '\x20\x20\x20\x20\x20\x20\x20\x20co' + 'nst\x20tintCo' + 'lor\x20=\x20docu' + 'ment.getEl' + _0x30dfa8(_0x543936._0x37d812) + _0x30dfa8(_0x543936._0x32c4ea) + 'Input\x27)?.v' + _0x30dfa8(_0x543936._0x582abc)) + ('FFFFFF\x27;\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20con' + 'st\x20opening' + 'Animation\x20' + '=\x20document' + '.getElemen' + _0x30dfa8(0x583) + _0x30dfa8(0x879) + 'ionInput\x27)' + '?.value\x20||' + '\x20\x27none\x27;\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20con' + _0x30dfa8(0x29b) + 'nimation\x20=' + '\x20document.' + 'getElement' + 'ById(\x27endi' + 'ngAnimatio' + 'nInput\x27)?.' + 'value\x20||\x20\x27' + 'none\x27;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20const' + '\x20animation' + 'Duration\x20=' + '\x20parseInt(' + _0x30dfa8(_0x543936._0x469615) + _0x30dfa8(0x67c) + 'yId(\x27anima' + _0x30dfa8(0x60c) + _0x30dfa8(_0x543936._0x50914f) + '.value)\x20||' + '\x2030;\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x223854) + '\x20\x20const\x20fr' + 'ameWidth\x20=' + '\x20currentSp' + 'ritesheet.' + _0x30dfa8(_0x543936._0x559570) + _0x30dfa8(_0x543936._0x42694f) + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20const' + '\x20frameHeig' + 'ht\x20=\x20curre' + 'ntSpritesh' + 'eet.height' + _0x30dfa8(0x1cd) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x9aa) + 'st\x20totalFr' + _0x30dfa8(_0x543936._0x6dfbb0) + _0x30dfa8(_0x543936._0x4af3a3) + 's;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x732d47) + 'gAnimation' + '\x20!==\x20\x27none' + '\x27\x20&&\x20!isPl' + _0x30dfa8(_0x543936._0x370071) + 'ngAnim\x20&&\x20' + _0x30dfa8(0x1b1) + _0x30dfa8(_0x543936._0x3d828b) + _0x30dfa8(_0x543936._0x429158) + 'ionLoopCou' + 'nt\x20===\x200)\x20' + _0x30dfa8(0xad5) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20isPlay' + 'ingOpening' + 'Anim\x20=\x20tru' + 'e;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20openi' + 'ngAnimatio' + 'nProgress\x20' + '=\x200;\x0a\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0xc98047) + '\x20\x20\x20}\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20if\x20(isPl' + _0x30dfa8(0x534) + _0x30dfa8(0x75f) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + _0x30dfa8(_0x543936._0x223fe1) + 'nimationPr' + 'ogress++;\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20if\x20(open' + 'ingAnimati' + 'onProgress') + ('\x20>=\x20animat' + 'ionDuratio' + 'n)\x20{\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20isPlaying' + 'OpeningAni' + 'm\x20=\x20false;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20}\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20}\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20if\x20(endi' + 'ngAnimatio' + 'n\x20!==\x20\x27non' + 'e\x27\x20&&\x20!isP' + 'layingEndi' + 'ngAnim)\x20{\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x21e52a) + 'amesLeft\x20=' + '\x20reverse\x20?' + '\x20animation' + 'Frame\x20+\x201\x20' + _0x30dfa8(_0x543936._0x374120) + 'mes\x20-\x20anim' + 'ationFrame' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20if\x20(fr' + 'amesLeft\x20<' + '=\x20animatio' + _0x30dfa8(0x678) + '/\x20(1000\x20/\x20' + _0x30dfa8(0x88a) + _0x30dfa8(_0x543936._0x15ba42) + 'etElementB' + 'yId(\x27fpsIn' + 'put\x27).valu' + 'e)\x20||\x2060)\x20' + '*\x2060))\x20{\x0a\x20' + _0x30dfa8(_0x543936._0x5d8dc7) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20isPla' + 'yingEnding' + 'Anim\x20=\x20tru' + 'e;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20e' + 'ndingAnima' + _0x30dfa8(0xaf1) + _0x30dfa8(_0x543936._0x139871) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '}\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '}\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x5775b9) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20i' + 'f\x20(isPlayi' + 'ngEndingAn' + _0x30dfa8(_0x543936._0x4af7a2) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0xa16) + 'dingAnimat' + 'ionProgres' + 's++;\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20}\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x48a) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20let\x20fina' + _0x30dfa8(0x2ce) + '\x20opacity;\x0a' + _0x30dfa8(_0x543936._0x41d815) + '\x20\x20\x20\x20\x20\x20\x20\x20le' + _0x30dfa8(0xc2b) + 'le\x20=\x20scale' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x1b6d53) + 'let\x20scaleX' + _0x30dfa8(0xb9b) + _0x30dfa8(0x5a0) + _0x30dfa8(_0x543936._0x4b1e79) + 'aleY\x20=\x201;\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x226bda) + _0x30dfa8(_0x543936._0x53c1b) + '\x20\x20\x20\x20\x20\x20\x20if\x20' + '(isPlaying' + 'OpeningAni' + 'm)\x20{\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20') + (_0x30dfa8(0x9aa) + 'st\x20progres' + 's\x20=\x20openin' + _0x30dfa8(_0x543936._0x5e4022) + _0x30dfa8(_0x543936._0x36126f) + '\x20animation' + 'Duration;\x0a' + _0x30dfa8(_0x543936._0x2671f0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20const\x20ea' + _0x30dfa8(_0x543936._0x40d520) + _0x30dfa8(_0x543936._0xdbaa65) + 'ss\x20<\x200.5\x20?' + '\x202\x20*\x20progr' + 'ess\x20*\x20prog' + _0x30dfa8(_0x543936._0x1531fe) + '\x20Math.pow(' + '-2\x20*\x20progr' + 'ess\x20+\x202,\x202' + ')\x20/\x202;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a' + _0x30dfa8(_0x543936._0x53c1b) + _0x30dfa8(0x5a0) + '\x20\x20if\x20(open' + 'ingAnimati' + _0x30dfa8(0x149) + _0x30dfa8(0xaef) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20final' + 'Opacity\x20=\x20' + _0x30dfa8(0x627) + 'easedProgr' + 'ess;\x0a\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20\x20}\x20e' + 'lse\x20if\x20(op' + _0x30dfa8(_0x543936._0x2a69f7) + 'tion\x20===\x20\x27' + 'scaleIn\x27)\x20' + '{\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20fi' + 'nalScale\x20=' + '\x20scale\x20*\x20e' + 'asedProgre' + 'ss;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x1fc983) + _0x30dfa8(_0x543936._0x4a3e70) + _0x30dfa8(0x879) + 'ion\x20===\x20\x27s' + 'caleInWidt' + 'h\x27)\x20{\x0a\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x48b6ac) + '\x20easedProg' + 'ress;\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x15b) + '\x201;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20}\x20el' + 'se\x20if\x20(ope' + 'ningAnimat' + 'ion\x20===\x20\x27s' + _0x30dfa8(0x7b5) + 'ht\x27)\x20{\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20scaleX\x20' + _0x30dfa8(_0x543936._0xacac72) + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20scaleY\x20=\x20' + 'easedProgr' + 'ess;\x0a\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x53c1b) + '\x20\x20\x20\x20\x20\x20\x20}\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0xa07) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20' + _0x30dfa8(_0x543936._0x540aba) + '\x20\x20\x20\x20\x20\x20if\x20(' + _0x30dfa8(_0x543936._0x73605a) + _0x30dfa8(_0x543936._0x954d5e) + _0x30dfa8(_0x543936._0x2fb79a) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20const' + _0x30dfa8(0xb62) + '=\x20endingAn' + 'imationPro' + 'gress\x20/\x20an' + _0x30dfa8(_0x543936._0x23baaa) + 'ation;\x0a\x20\x20\x20' + _0x30dfa8(_0x543936._0x1c4b8d)) + ('\x20\x20\x20\x20\x20\x20\x20\x20\x20c' + 'onst\x20eased' + _0x30dfa8(0x8ba) + _0x30dfa8(_0x543936._0x26c052) + _0x30dfa8(0xab2) + '\x20?\x202\x20*\x20pro' + 'gress\x20*\x20pr' + 'ogress\x20:\x201' + '\x20-\x20Math.po' + 'w(-2\x20*\x20pro' + 'gress\x20+\x202,' + '\x202)\x20/\x202);\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x71a) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20if\x20(e' + _0x30dfa8(0x7f7) + 'tion\x20===\x20\x27' + _0x30dfa8(0x9d9) + '{\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20fi' + _0x30dfa8(_0x543936._0x15eb0c) + '\x20=\x20opacity' + _0x30dfa8(0xa5e) + _0x30dfa8(0x453) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '}\x20else\x20if\x20' + '(endingAni' + _0x30dfa8(_0x543936._0x491c8c) + '\x20\x27scaleOut' + _0x30dfa8(0x394) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0xb8d) + _0x30dfa8(0x24f) + _0x30dfa8(_0x543936._0x18823a) + _0x30dfa8(_0x543936._0xae89ea) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x2fccff) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20}' + _0x30dfa8(0x832) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20le' + 't\x20displayF' + _0x30dfa8(_0x543936._0x4e1c40) + _0x30dfa8(0x5c4) + 'talFrames\x20' + '-\x201\x20-\x20anim' + _0x30dfa8(0x5da) + ')\x20:\x20animat' + 'ionFrame;\x0a' + _0x30dfa8(_0x543936._0x18402f) + '\x20\x20\x20\x20\x20\x20\x20\x20co' + 'nst\x20curren' + 'tCol\x20=\x20dis' + 'playFrame\x20' + '%\x20columns;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20c' + 'onst\x20curre' + 'ntRow\x20=\x20Ma' + _0x30dfa8(_0x543936._0x1ff36d) + 'isplayFram' + 'e\x20/\x20column' + 's);\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20const\x20dra' + 'wWidth\x20=\x20f' + 'rameWidth\x20' + '*\x20finalSca' + _0x30dfa8(_0x543936._0x8d0d4a) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20const\x20dr' + 'awHeight\x20=' + '\x20frameHeig' + _0x30dfa8(0xd00) + _0x30dfa8(0x945) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x232817) + '\x20\x20\x20\x20const\x20' + _0x30dfa8(_0x543936._0x4e36ac) + 'dth\x20=\x20char' + _0x30dfa8(_0x543936._0x3f89d0) + 'eWidth;\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x10a44d) + 't\x20charDraw' + 'Height\x20=\x20c' + _0x30dfa8(0x693) + 'riteHeight' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20') + ('const\x20char' + 'X\x20=\x20(previ' + 'ewCanvas.w' + 'idth\x20-\x20cha' + _0x30dfa8(_0x543936._0x5ab450) + ')\x20/\x202;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20const' + '\x20charY\x20=\x20(' + 'previewCan' + _0x30dfa8(_0x543936._0x579c6d) + _0x30dfa8(0x1ce) + 'wHeight)\x20/' + '\x202;\x0a\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20const\x20cen' + 'terX\x20=\x20cha' + _0x30dfa8(_0x543936._0x3f4bc5) + 'DrawWidth\x20' + '/\x202)\x20+\x20off' + 'setX;\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x3c5) + 'centerY\x20=\x20' + _0x30dfa8(0x3f7) + _0x30dfa8(0x5ec) + 'ght\x20/\x202)\x20+' + _0x30dfa8(0x68e) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20con' + _0x30dfa8(_0x543936._0x28a769) + 'me\x20=\x20(ctx,' + '\x20applyBloo' + _0x30dfa8(_0x543936._0x402b1b) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'ctx.save()' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0xc4b) + '(applyBloo' + 'm)\x20{\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x2b71c4) + _0x30dfa8(_0x543936._0x516c49) + 'intensity\x20' + '/\x20255)\x20*\x20(' + 'finalOpaci' + _0x30dfa8(_0x543936._0x1aea16) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x20}\x20else\x20' + '{\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x62c) + _0x30dfa8(0x63c) + 'pha\x20=\x20fina' + _0x30dfa8(0x25d) + '\x20255;\x0a\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x4ceaa5) + _0x30dfa8(0x5ed) + _0x30dfa8(_0x543936._0x557687) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20const' + '\x20blendMode' + 's\x20=\x20{\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x33ed72) + ':\x20\x27source-' + 'over\x27,\x0a\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x7da) + _0x30dfa8(_0x543936._0x22b2a7) + '\x27,\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x144dd5) + 'Add\x27:\x20\x27lig' + _0x30dfa8(0x251) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x157) + 'ly\x27:\x20\x27mult' + _0x30dfa8(_0x543936._0x34a949) + _0x30dfa8(_0x543936._0x45b7e4) + _0x30dfa8(_0x543936._0x4eeab7) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x1c4b8d) + '\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20') + ('\x20\x20\x20\x20\x20\x20if\x20(' + 'applyBloom' + ')\x20{\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x5c6eab) + _0x30dfa8(0x159) + 'peration\x20=' + '\x20\x27screen\x27;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x56711f) + '\x20\x20\x20}\x20else\x20' + '{\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x254322) + 'x.globalCo' + _0x30dfa8(_0x543936._0x266800) + 'ration\x20=\x20b' + _0x30dfa8(_0x543936._0x5f2c7c) + _0x30dfa8(_0x543936._0x2620ff) + '\x20||\x20\x27sourc' + _0x30dfa8(_0x543936._0x1365e4) + _0x30dfa8(_0x543936._0x4ceaa5) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20}\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x2695fb) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20ct' + 'x.translat' + _0x30dfa8(0x5c1) + '\x20centerY);' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20cons' + _0x30dfa8(_0x543936._0x3dba47) + 'ation\x20=\x20ra' + 'ndomRotati' + 'on\x20?\x20curre' + _0x30dfa8(_0x543936._0x5012b0) + 'tation\x20:\x20r' + _0x30dfa8(_0x543936._0x45e9ad) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20if\x20(final' + 'Rotation\x20!' + '==\x200)\x20{\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + _0x30dfa8(0x690) + 'tate(final' + _0x30dfa8(0x325) + '\x20Math.PI\x20/' + '\x20180);\x0a\x20\x20\x20' + _0x30dfa8(_0x543936._0x503997) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20}' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20let\x20' + _0x30dfa8(_0x543936._0x1c26a9) + '\x20=\x20flipHor' + _0x30dfa8(0x2d9) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x349526) + '\x20let\x20final' + 'FlipY\x20=\x20fl' + _0x30dfa8(0xb95) + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x252b8a) + '\x20\x20\x20\x20\x20\x20\x20if\x20' + '(randomFli' + _0x30dfa8(_0x543936._0x49ddbb) + 'l)\x20{\x0a\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20finalFlip' + _0x30dfa8(0x86e) + 'tRandomFli' + _0x30dfa8(_0x543936._0x2939ab) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0xc3d) + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'if\x20(random' + 'FlipVertic' + _0x30dfa8(0x9f2) + _0x30dfa8(_0x543936._0x3784b8) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20finalFli' + 'pY\x20=\x20curre' + 'ntRandomFl' + 'ipY;\x0a\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20\x20}\x0a\x20') + (_0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x885) + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20let\x20ef' + 'fectiveSca' + 'leX\x20=\x20(fin' + 'alFlipX\x20?\x20' + _0x30dfa8(_0x543936._0xf4b891) + '(openingAn' + 'imation\x20==' + '=\x20\x27scaleIn' + _0x30dfa8(0x36f) + 'isPlayingO' + 'peningAnim' + '\x20?\x20scaleX\x20' + ':\x201);\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20le' + 't\x20effectiv' + 'eScaleY\x20=\x20' + '(finalFlip' + 'Y\x20?\x20-1\x20:\x201' + ')\x20*\x20(openi' + 'ngAnimatio' + 'n\x20===\x20\x27sca' + _0x30dfa8(0x7bd) + '\x27\x20&&\x20isPla' + 'yingOpenin' + _0x30dfa8(_0x543936._0x4d2de1) + 'aleY\x20:\x201);' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x5ddfe3) + _0x30dfa8(_0x543936._0x10ac4e) + '\x20\x20\x20\x20\x20\x20ctx.' + 'scale(effe' + _0x30dfa8(_0x543936._0x3adcde) + _0x30dfa8(0x2ca) + 'veScaleY);' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x1cf5bd) + _0x30dfa8(_0x543936._0x56958d) + '||\x20applyBl' + _0x30dfa8(_0x543936._0x5c81be) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x4400e3) + '\x20\x20\x20const\x20t' + 'empCanvas\x20' + '=\x20document' + '.createEle' + 'ment(\x27canv' + _0x30dfa8(0x404) + _0x30dfa8(_0x543936._0x1eb671) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20tempCanv' + 'as.width\x20=' + '\x20frameWidt' + 'h;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20t' + 'empCanvas.' + 'height\x20=\x20f' + 'rameHeight' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20co' + 'nst\x20tempCt' + 'x\x20=\x20tempCa' + _0x30dfa8(_0x543936._0xc07747) + _0x30dfa8(0x502) + ');\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x3a0c46) + '\x20\x20\x20\x20\x20\x20temp' + _0x30dfa8(0x4b3) + 'age(\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20curre' + 'ntSpritesh' + _0x30dfa8(_0x543936._0x107695) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x361) + 'ntCol\x20*\x20fr' + _0x30dfa8(0x90d) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x9d4) + '\x20*\x20frameHe' + 'ight,\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20') + (_0x30dfa8(0x9f7) + 'eWidth,\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x2c4cfe) + 'ameHeight,' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0xab54f6) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20\x20fra' + 'meWidth,\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x2162c6) + 'rameHeight' + _0x30dfa8(0x832) + _0x30dfa8(0x5a0) + _0x30dfa8(0x950) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + _0x30dfa8(0x898) + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20const\x20i' + _0x30dfa8(0xc3b) + '\x20tempCtx.g' + _0x30dfa8(0x785) + 'a(0,\x200,\x20fr' + _0x30dfa8(_0x543936._0x21cc2d) + _0x30dfa8(0x2d4) + 't);\x0a\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x4400e3) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'const\x20data' + _0x30dfa8(_0x543936._0x1a1dd3) + _0x30dfa8(0x131) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x7cb) + 'R\x20=\x20255,\x20t' + 'intG\x20=\x20255' + ',\x20tintB\x20=\x20' + '255;\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x5eb596) + 'Bloom\x20&&\x20t' + _0x30dfa8(_0x543936._0x1375a9) + _0x30dfa8(_0x543936._0x2142ce) + _0x30dfa8(_0x543936._0x19c79f) + _0x30dfa8(_0x543936._0x44e02b) + '\x20\x20const\x20he' + _0x30dfa8(_0x543936._0x353db0) + 'lor.replac' + 'e(\x27#\x27,\x20\x27\x27)' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x625304) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20tintR\x20=\x20' + 'parseInt(h' + _0x30dfa8(0x3db) + _0x30dfa8(_0x543936._0x1505aa) + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0xd25195) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x4d9) + 'parseInt(h' + 'ex.substr(' + '2,\x202),\x2016)' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20tintB\x20=\x20' + 'parseInt(h' + 'ex.substr(' + _0x30dfa8(_0x543936._0x43fc83) + _0x30dfa8(0x77a) + _0x30dfa8(_0x543936._0x1c4b8d) + _0x30dfa8(0x5ed) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x898) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20const\x20h' + _0x30dfa8(0x1c9) + '=\x20hue\x20*\x20Ma' + 'th.PI\x20/\x2018' + '0;\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20for\x20') + ('(let\x20i\x20=\x200' + _0x30dfa8(0x428) + '.length;\x20i' + '\x20+=\x204)\x20{\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x4ceaa5) + _0x30dfa8(0x9da) + 'et\x20r\x20=\x20dat' + 'a[i];\x0a\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x4e75c5) + _0x30dfa8(_0x543936._0x1eb671) + _0x30dfa8(0x25a) + _0x30dfa8(_0x543936._0x2baeec) + '\x20+\x201];\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20let' + '\x20b\x20=\x20data[' + _0x30dfa8(0x497) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x379027) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20i' + 'f\x20(hue\x20!==' + '\x200)\x20{\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'const\x20max\x20' + _0x30dfa8(_0x543936._0x48dead) + '(r,\x20g,\x20b)\x20' + '/\x20255;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20const\x20min' + _0x30dfa8(_0x543936._0x48b4de) + 'n(r,\x20g,\x20b)' + '\x20/\x20255;\x0a\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20let\x20h,\x20s' + ',\x20l\x20=\x20(max' + '\x20+\x20min)\x20/\x20' + '2;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x9e1) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0xbe846a) + _0x30dfa8(0x5a0) + '\x20\x20if\x20(max\x20' + '===\x20min)\x20{' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + _0x30dfa8(_0x543936._0x5f31d5) + _0x30dfa8(_0x543936._0x3374ec) + _0x30dfa8(0xc32) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x54a) + '\x20{\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x3c92d0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x3964f6) + _0x30dfa8(_0x543936._0x3403e6) + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x51fb61) + _0x30dfa8(_0x543936._0x198715) + '5\x20?\x20d\x20/\x20(2' + _0x30dfa8(_0x543936._0x4b2383) + _0x30dfa8(0xc3f) + '(max\x20+\x20min' + _0x30dfa8(0x3e6) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x220101) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x593593) + 'switch\x20(ma' + 'x)\x20{\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20cas' + 'e\x20r\x20/\x20255:' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20h\x20=') + (_0x30dfa8(0x753) + '\x20-\x20b\x20/\x20255' + ')\x20/\x20d\x20+\x20(g' + '\x20<\x20b\x20?\x206\x20:' + '\x200))\x20/\x206;\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20brea' + 'k;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x1bff9e) + '\x20\x20\x20\x20\x20case\x20' + 'g\x20/\x20255:\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x9ab) + '(b\x20/\x20255\x20-' + '\x20r\x20/\x20255)\x20' + '/\x20d\x20+\x202)\x20/' + '\x206;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + _0x30dfa8(_0x543936._0x1c4b8d) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'break;\x0a\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x3f0290) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20c' + 'ase\x20b\x20/\x2025' + '5:\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20h' + '\x20=\x20((r\x20/\x202' + '55\x20-\x20g\x20/\x202' + '55)\x20/\x20d\x20+\x20' + '4)\x20/\x206;\x0a\x20\x20' + _0x30dfa8(_0x543936._0x232817) + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20break;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20}' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20}\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0xbe846a) + '\x20\x20\x20\x20\x20\x20h\x20=\x20' + '(h\x20+\x20hueRa' + _0x30dfa8(0x467) + '\x20*\x20Math.PI' + '))\x20%\x201;\x0a\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20if\x20(h\x20<\x20' + '0)\x20h\x20+=\x201;' + _0x30dfa8(0x832) + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x1a2) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x5f3f16) + _0x30dfa8(_0x543936._0x4baa81) + _0x30dfa8(_0x543936._0x1e9c6f) + ',\x20b2;\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'if\x20(s\x20===\x20' + '0)\x20{\x0a\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20r2\x20=\x20g2' + '\x20=\x20b2\x20=\x20l;' + _0x30dfa8(0x832) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20}\x20els' + 'e\x20{\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x35e1c7) + _0x30dfa8(0x5a0)) + (_0x30dfa8(0x924) + 'e2rgb\x20=\x20(p' + ',\x20q,\x20t)\x20=>' + _0x30dfa8(_0x543936._0x4b1cfb) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x3b8adc) + '\x20<\x200)\x20t\x20+=' + '\x201;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20if\x20(' + _0x30dfa8(0x3d8) + _0x30dfa8(_0x543936._0xacac72) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20if\x20' + '(t\x20<\x201/6)\x20' + 'return\x20p\x20+' + _0x30dfa8(0xc8e) + '\x206\x20*\x20t;\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'if\x20(t\x20<\x201/' + '2)\x20return\x20' + _0x30dfa8(_0x543936._0x15c88d) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20if\x20(t' + _0x30dfa8(_0x543936._0x5ec923) + 'turn\x20p\x20+\x20(' + 'q\x20-\x20p)\x20*\x20(' + '2/3\x20-\x20t)\x20*' + '\x206;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x298625) + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20retu' + _0x30dfa8(0xa1e) + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20};\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0xbe846a) + '\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x4d1af9) + _0x30dfa8(_0x543936._0x223854) + '\x20\x20\x20\x20const\x20' + 'q\x20=\x20l\x20<\x200.' + _0x30dfa8(_0x543936._0xab8056) + '\x20+\x20s)\x20:\x20l\x20' + '+\x20s\x20-\x20l\x20*\x20' + 's;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x6993e7) + '\x202\x20*\x20l\x20-\x20q' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x58777a) + _0x30dfa8(0x396) + _0x30dfa8(_0x543936._0x26a73b) + '\x20+\x201/3);\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20g2\x20' + '=\x20hue2rgb(' + 'p,\x20q,\x20h);\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20b2' + '\x20=\x20hue2rgb' + '(p,\x20q,\x20h\x20-' + _0x30dfa8(_0x543936._0x1d7c00) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x4bf7b9) + '\x20}\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x4bf7b9) + _0x30dfa8(0x9e1) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20r\x20=\x20r2\x20*' + '\x20255;\x0a\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x1e3e09)) + ('\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'g\x20=\x20g2\x20*\x202' + '55;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20\x20\x20b\x20' + '=\x20b2\x20*\x20255' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20}\x0a\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + _0x30dfa8(_0x543936._0xd65c28) + '\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x1a5) + 'pplyBloom)' + _0x30dfa8(0xc80) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20\x20r\x20=' + _0x30dfa8(_0x543936._0x3d8309) + 'R)\x20/\x20255;\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x1b6d53) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20g\x20=\x20(g' + '\x20*\x20tintG)\x20' + _0x30dfa8(_0x543936._0x515288) + _0x30dfa8(_0x543936._0xc3769f) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x5775b9) + '\x20b\x20=\x20(b\x20*\x20' + _0x30dfa8(_0x543936._0x3056c7) + '55;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5d6) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x3d2efa) + 'a[i]\x20=\x20r;\x0a' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'data[i\x20+\x201' + _0x30dfa8(0x4c7) + _0x30dfa8(_0x543936._0x625304) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20dat' + 'a[i\x20+\x202]\x20=' + '\x20b;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '}\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x3c92d0) + _0x30dfa8(0xafb) + 'tx.putImag' + 'eData(imag' + _0x30dfa8(_0x543936._0x35e895) + _0x30dfa8(0xaa7) + _0x30dfa8(0x5a0) + _0x30dfa8(0x5a0) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x47bd19) + _0x30dfa8(0x1fc) + _0x30dfa8(_0x543936._0x13f3b3) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20const' + '\x20blurredCa' + 'nvas\x20=\x20doc' + 'ument.crea' + 'teElement(' + _0x30dfa8(_0x543936._0x43d1ce) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x1e3e09) + _0x30dfa8(0x5a0) + _0x30dfa8(_0x543936._0x54c879) + _0x30dfa8(_0x543936._0x52d03d) + _0x30dfa8(0x9fb) + 'dth\x20+\x20(blu' + 'rAmount\x20*\x20' + '4);\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x56a32e) + '\x20\x20\x20\x20blurre' + 'dCanvas.he' + 'ight\x20=\x20fra' + _0x30dfa8(_0x543936._0x120bca) + _0x30dfa8(_0x543936._0x1595a2)) + ('nt\x20*\x204);\x0a\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20c' + 'onst\x20blurr' + 'edCtx\x20=\x20bl' + 'urredCanva' + 's.getConte' + 'xt(\x272d\x27);\x0a' + _0x30dfa8(_0x543936._0x4ceaa5) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x3369ee) + 'blurredCtx' + '.filter\x20=\x20' + '\x27blur(\x27\x20+\x20' + 'blurAmount' + '\x20+\x20\x27px)\x27;\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x3784b8) + _0x30dfa8(0x15d) + '.drawImage' + '(tempCanva' + 's,\x20blurAmo' + _0x30dfa8(0x20c) + 'lurAmount\x20' + _0x30dfa8(_0x543936._0x5b6a66) + _0x30dfa8(0x5a0) + _0x30dfa8(_0x543936._0x2b8b25) + _0x30dfa8(0x898) + _0x30dfa8(_0x543936._0x45b7e4) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20ctx' + '.drawImage' + '(\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + _0x30dfa8(_0x543936._0x175f72) + _0x30dfa8(0x8be) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20-draw' + _0x30dfa8(_0x543936._0x32251a) + '-\x20(blurAmo' + _0x30dfa8(_0x543936._0x2880ae) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20-drawH' + 'eight\x20/\x202\x20' + '-\x20(blurAmo' + _0x30dfa8(0x5d9) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x48c10f) + 'dth\x20+\x20(blu' + 'rAmount\x20*\x20' + '4),\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x593593) + _0x30dfa8(0x145) + _0x30dfa8(0x421) + '\x20(blurAmou' + _0x30dfa8(0x506) + _0x30dfa8(0x5a0) + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20\x20\x20);' + _0x30dfa8(_0x543936._0x516966) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x4b9) + 'lse\x20{\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x572) + 'drawImage(' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x28aab2) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x416259) + 'anvas,\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20-drawWidt' + 'h\x20/\x202,\x0a\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20-drawHeig' + 'ht\x20/\x202,\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20drawWidt' + 'h,\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + _0x30dfa8(0x774)) + (_0x30dfa8(0xbec) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x50c7ca) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20}\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20}\x20else\x20{\x0a' + _0x30dfa8(0x5a0) + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20ctx.' + 'drawImage(' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20currentSp' + 'ritesheet,' + _0x30dfa8(_0x543936._0x53e65f) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20currentCo' + 'l\x20*\x20frameW' + 'idth,\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x522cf8) + _0x30dfa8(0x112) + 'rameHeight' + ',\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x3a7cda) + 'th,\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x50ae9e) + 'eight,\x0a\x20\x20\x20' + _0x30dfa8(_0x543936._0x3739ed) + _0x30dfa8(_0x543936._0x5d8dc7) + '\x20\x20\x20\x20\x20\x20\x20-dr' + 'awWidth\x20/\x20' + _0x30dfa8(_0x543936._0x21d1ec) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20-drawHe' + 'ight\x20/\x202,\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x557687) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0xcd8) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + _0x30dfa8(_0x543936._0x5775b9) + '\x20drawHeigh' + 't\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20);' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20}\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20' + _0x30dfa8(_0x543936._0x1e3e09) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'ctx.restor' + 'e();\x0a\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x573712) + '\x20\x20\x20};\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20if\x20(blo' + _0x30dfa8(_0x543936._0x2eb7f6) + '\x20{drawFram' + 'e(previewC' + 'tx,\x20true);' + _0x30dfa8(0x12d) + _0x30dfa8(0x5a0) + 'drawFrame(' + _0x30dfa8(_0x543936._0x13d653) + ',\x20false);\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20an' + 'imationFra' + 'me\x20=\x20(anim' + 'ationFrame' + _0x30dfa8(0x980) + 'talFrames;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20i' + _0x30dfa8(0xc2f) + 'onFrame\x20==' + '=\x200)\x20{\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20a' + 'nimationLo' + 'opCount++;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20') + ('\x20\x20\x20\x20\x20\x20\x20\x20\x20}' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20functi' + 'on\x20saveToL' + _0x30dfa8(_0x543936._0x4e5c25) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x49f362) + 'st\x20animati' + 'onName\x20=\x20d' + 'ocument.ge' + 'tElementBy' + 'Id(\x27animat' + _0x30dfa8(0xb68) + 'ut\x27)?.valu' + 'e.trim();\x0a' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20if\x20' + '(!animatio' + 'nName)\x20{\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20alert' + _0x30dfa8(_0x543936._0x11f242) + _0x30dfa8(0x749) + 'imation\x20na' + 'me!\x27);\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20return;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x418c88) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20if\x20(' + '!currentSp' + 'ritesheet)' + '\x20{\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20a' + 'lert(\x27Plea' + _0x30dfa8(_0x543936._0x4b2414) + _0x30dfa8(_0x543936._0x1f4e67) + 't\x20first!\x27)' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20re' + _0x30dfa8(_0x543936._0x43d28d) + _0x30dfa8(0x5a0) + '\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20const\x20fil' + 'eBox\x20=\x20doc' + 'ument.getE' + _0x30dfa8(0xbea) + '(\x27fileBox\x27' + ');\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0xccf) + _0x30dfa8(_0x543936._0xe1438c) + 'ame\x20=\x20file' + 'Box.textCo' + 'ntent;\x0a\x0a\x20\x20' + _0x30dfa8(_0x543936._0x5d4516) + '\x20\x20\x20\x20if\x20(fi' + 'leName\x20===' + '\x20\x27Click\x20to' + _0x30dfa8(0x2bb) + 'ritesheet\x27' + ')\x20{\x0a\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x1e3e09) + 'alert(\x27Ple' + 'ase\x20load\x20a' + _0x30dfa8(_0x543936._0x5869f3) + 'et\x20first!\x27' + ');\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20r' + _0x30dfa8(_0x543936._0x22bb61) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x17410c) + 'itorOffset' + _0x30dfa8(0x9f3) + 'nt(documen' + 't.getEleme' + 'ntById(\x27of' + 'fsetXInput' + '\x27)?.value)' + '\x20||\x200;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20const\x20e' + _0x30dfa8(0xfc) + 'tY\x20=\x20parse' + _0x30dfa8(0x401) + 'nt.getElem' + 'entById(\x27o' + 'ffsetYInpu' + _0x30dfa8(0x1ad) + ')\x20||\x200;\x0a\x20\x20' + _0x30dfa8(_0x543936._0xd25195) + _0x30dfa8(0x3c5) + 'saveTarget' + _0x30dfa8(_0x543936._0x40eeda) + 'ocument.ge') + ('tElementBy' + _0x30dfa8(0xa11) + 'rgetSprite' + 'Checkbox\x27)' + _0x30dfa8(_0x543936._0x1ff953) + _0x30dfa8(0x488) + _0x30dfa8(0x832) + _0x30dfa8(_0x543936._0x49f362) + 'st\x20animati' + 'onData\x20=\x20{' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20nam' + _0x30dfa8(0x33e) + 'onName,\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20sprite' + 'sheetFile:' + '\x20fileName,' + _0x30dfa8(_0x543936._0x27a7a9) + _0x30dfa8(0x5e8) + 's:\x20parseIn' + 't(document' + '.getElemen' + _0x30dfa8(_0x543936._0x46a55e) + 'Input\x27).va' + _0x30dfa8(_0x543936._0x2ba801) + _0x30dfa8(_0x543936._0x19f69c) + '\x20\x20\x20\x20\x20\x20\x20col' + _0x30dfa8(0xd0b) + 'eInt(docum' + 'ent.getEle' + _0x30dfa8(_0x543936._0x1569e2) + 'columnInpu' + 't\x27).value)' + '\x20||\x201,\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x91a) + _0x30dfa8(_0x543936._0x310c03) + 'ument.getE' + 'lementById' + '(\x27fpsInput' + '\x27).value)\x20' + '||\x2060,\x0a\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x20scale:\x20' + _0x30dfa8(0x31b) + _0x30dfa8(_0x543936._0x267a37) + 'tElementBy' + _0x30dfa8(0x823) + 'nput\x27).val' + _0x30dfa8(_0x543936._0x29e4fa) + ',\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20op' + 'acity:\x20par' + _0x30dfa8(_0x543936._0x4731b0) + 'ment.getEl' + _0x30dfa8(0x1fd) + '\x27opacityIn' + _0x30dfa8(0x71f) + 'ue)\x20||\x20255' + _0x30dfa8(0x79b) + _0x30dfa8(_0x543936._0x596ad2) + 'e:\x20parseIn' + _0x30dfa8(0xb96) + '.getElemen' + 'tById(\x27hue' + 'Input\x27)?.v' + _0x30dfa8(_0x543936._0x5f1331) + _0x30dfa8(0x79b) + _0x30dfa8(0x228) + 'endMode:\x20d' + 'ocument.ge' + 'tElementBy' + _0x30dfa8(0xcd3) + _0x30dfa8(0x972) + '?.value\x20||' + _0x30dfa8(0x56f) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20pla' + 'yInReverse' + ':\x20document' + '.getElemen' + 'tById(\x27rev' + _0x30dfa8(0xbb4) + _0x30dfa8(0x646) + 'ked\x20||\x20fal' + 'se,\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x992) + 'ment.getEl' + 'ementById(' + _0x30dfa8(0x1af) + 'ontalCheck' + 'box\x27)?.che' + 'cked\x20||\x20fa' + 'lse,\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20flipY:\x20do' + 'cument.get' + 'ElementByI') + (_0x30dfa8(0x510) + 'ticalCheck' + 'box\x27)?.che' + 'cked\x20||\x20fa' + _0x30dfa8(_0x543936._0x384147) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x4d2) + 'pX:\x20docume' + 'nt.getElem' + _0x30dfa8(_0x543936._0x15a42c) + 'andomFlipH' + 'orizontalC' + _0x30dfa8(_0x543936._0x240535) + '.checked\x20|' + '|\x20false,\x0a\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20rando' + 'mFlipY:\x20do' + 'cument.get' + 'ElementByI' + 'd(\x27randomF' + 'lipVertica' + 'lCheckbox\x27' + ')?.checked' + _0x30dfa8(_0x543936._0x1b835e) + _0x30dfa8(_0x543936._0x2d3221) + '\x20\x20\x20\x20\x20\x20\x20rot' + 'ation:\x20par' + 'seInt(docu' + 'ment.getEl' + 'ementById(' + '\x27rotationI' + 'nput\x27)?.va' + 'lue)\x20||\x200,' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20ran' + 'domRotatio' + _0x30dfa8(0x6d2) + _0x30dfa8(_0x543936._0x6e0a4) + 'ntById(\x27ra' + _0x30dfa8(_0x543936._0x446497) + 'onCheckbox' + _0x30dfa8(_0x543936._0x5760d0) + 'd\x20||\x20false' + ',\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20op' + 'eningAnima' + _0x30dfa8(_0x543936._0x278323) + 'ment.getEl' + 'ementById(' + '\x27openingAn' + 'imationInp' + _0x30dfa8(0xaa0) + 'e\x20||\x20\x27none' + '\x27,\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20e' + 'ndingAnima' + _0x30dfa8(_0x543936._0x278323) + _0x30dfa8(0xaa8) + _0x30dfa8(_0x543936._0x4249c3) + '\x27endingAni' + _0x30dfa8(0x5f0) + _0x30dfa8(0x1ad) + '\x20||\x20\x27none\x27' + ',\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20an' + 'imationDur' + _0x30dfa8(0x8e3) + 'seInt(docu' + 'ment.getEl' + 'ementById(' + _0x30dfa8(0x2b2) + 'DurationIn' + 'put\x27)?.val' + 'ue)\x20||\x2030,' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x4f7501) + 'omEffect:\x20' + 'document.g' + 'etElementB' + _0x30dfa8(_0x543936._0x41b76c) + 'Checkbox\x27)' + '?.checked\x20' + '||\x20false,\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20blur' + 'Amount:\x20pa' + _0x30dfa8(_0x543936._0x310c03) + _0x30dfa8(0x5b7) + 'lementById' + '(\x27blurAmou' + _0x30dfa8(_0x543936._0x58641e) + '.value)\x20||' + _0x30dfa8(_0x543936._0x5be087) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20intensity' + ':\x20parseInt' + _0x30dfa8(_0x543936._0x3cc1c4) + 'getElement' + 'ById(\x27inte') + (_0x30dfa8(_0x543936._0x4c610a) + '\x27)?.value)' + _0x30dfa8(_0x543936._0x1ed5a8) + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20tintC' + 'olor:\x20docu' + _0x30dfa8(0xaa8) + 'ementById(' + '\x27tintColor' + 'Input\x27)?.v' + 'alue\x20||\x20\x27#' + 'FFFFFF\x27,\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20zInde' + 'x:\x20documen' + 't.getEleme' + _0x30dfa8(0x28b) + _0x30dfa8(0x5b8) + ')?.value\x20|' + '|\x20\x27auto\x27,\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x3a8de4) + 'etX:\x20Math.' + 'round(edit' + _0x30dfa8(_0x543936._0x549cbb) + '/\x202),\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20offsetY:' + '\x20Math.roun' + _0x30dfa8(_0x543936._0x342f19) + 'fsetY\x20/\x202)' + _0x30dfa8(_0x543936._0x463a7c) + '\x20\x20\x20\x20\x20\x20\x20\x20ch' + 'aracterSpr' + 'ite:\x20(save' + 'TargetSpri' + 'te\x20&&\x20char' + 'acterSprit' + _0x30dfa8(0x3d1) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20dataUrl' + _0x30dfa8(0x571) + 'rSprite.sr' + 'c,\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20w' + 'idth:\x20char' + _0x30dfa8(_0x543936._0x3f89d0) + 'eWidth,\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x462) + _0x30dfa8(_0x543936._0x487125) + _0x30dfa8(0x34a) + _0x30dfa8(0xd12) + _0x30dfa8(_0x543936._0x593593) + '}\x20:\x20null\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20};\x0a\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20if\x20(w' + _0x30dfa8(0x4ce) + _0x30dfa8(_0x543936._0x37097c) + 'ow.opener.' + 'saveAnimat' + _0x30dfa8(0x5ac) + 'ry)\x20{\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20window.o' + 'pener.save' + 'AnimationT' + _0x30dfa8(0x59c) + 'nimationDa' + 'ta);\x0a\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x40ca2f) + '\x20}\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20}' + _0x30dfa8(_0x543936._0x20a2d8) + '\x20\x20\x20\x20\x20\x20\x20let' + '\x20libraryAn' + _0x30dfa8(_0x543936._0x41abe5) + '\x20{};\x0a\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x357981) + _0x30dfa8(_0x543936._0xde5109) + 'nLibrary()' + '\x20{\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20c' + 'onst\x20modal' + '\x20=\x20documen' + 't.getEleme' + 'ntById(\x27li' + 'braryModal' + '\x27);\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'modal.clas' + 'sList.add(' + _0x30dfa8(_0x543936._0x6db0f8) + '\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20if' + '\x20(window.o' + 'pener\x20&&\x20w') + ('indow.open' + 'er.loadAni' + 'mationLibr' + 'ary)\x20{\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x4f0454) + _0x30dfa8(_0x543936._0x36b7ca) + '\x20\x20\x20\x20\x20libra' + _0x30dfa8(_0x543936._0x26cb2f) + 'ns\x20=\x20await' + '\x20window.op' + 'ener.loadA' + 'nimationLi' + 'brary();\x0a\x20' + _0x30dfa8(_0x543936._0x404041) + '\x20\x20\x20\x20\x20displ' + 'ayLibrary(' + ');\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20}' + '\x20catch\x20(er' + _0x30dfa8(_0x543936._0x2333a3) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20console' + '.error(\x27Er' + _0x30dfa8(_0x543936._0xeb9fe9) + 'g\x20library:' + _0x30dfa8(0x93e) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20doc' + 'ument.getE' + _0x30dfa8(_0x543936._0x2427e7) + '(\x27libraryG' + _0x30dfa8(_0x543936._0x1cdb5c) + 'rHTML\x20=\x20\x27<' + 'div\x20class=' + '\x22library-e' + _0x30dfa8(_0x543936._0x59ca96) + 'r\x20loading\x20' + _0x30dfa8(_0x543936._0x2b32c5) + 'iv>\x27;\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20}}}\x0a\x0afun' + 'ction\x20clos' + 'eLibrary()' + '\x20{\x0a\x20\x20\x20\x20con' + _0x30dfa8(0xb93) + '\x20document.' + 'getElement' + _0x30dfa8(_0x543936._0x18edea) + 'aryModal\x27)' + ';\x0a\x20\x20\x20\x20moda' + 'l.classLis' + 't.remove(\x27' + 'active\x27);\x0a' + '}\x0a\x0afunctio' + _0x30dfa8(_0x543936._0xadb74) + 'ibrary()\x20{' + '\x0a\x20\x20\x20\x20const' + '\x20grid\x20=\x20do' + 'cument.get' + _0x30dfa8(0x443) + _0x30dfa8(_0x543936._0x508d13) + 'Grid\x27);\x0a\x20\x20' + '\x20\x20\x0a\x20\x20\x20\x20if\x20' + '(Object.ke' + 'ys(library' + 'Animations' + ').length\x20=' + '==\x200)\x20{\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20retu' + _0x30dfa8(_0x543936._0x3d488c) + '\x20\x20\x20\x20\x0a\x20\x20\x20\x20g' + _0x30dfa8(_0x543936._0x18c781) + 'TML\x20=\x20\x27\x27;\x0a' + '\x20\x20\x20\x20\x0a\x20\x20\x20\x20f' + 'or\x20(const\x20' + '[name,\x20ani' + 'mData]\x20of\x20' + 'Object.ent' + _0x30dfa8(_0x543936._0x31fdf3) + 'ryAnimatio' + 'ns))\x20{\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20const' + '\x20item\x20=\x20do' + 'cument.cre' + 'ateElement' + '(\x27div\x27);\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20ite' + 'm.classNam' + 'e\x20=\x20\x27libra' + 'ry-item\x27;\x0a' + _0x30dfa8(_0x543936._0x3ab450) + '\x20\x20\x20\x20\x20\x20\x20con' + _0x30dfa8(_0x543936._0x10bdc9) + _0x30dfa8(0xd4) + 'ent.create' + 'Element(\x27d' + _0x30dfa8(_0x543936._0x3b9178) + '\x20\x20\x20\x20delete' + 'Btn.classN') + ('ame\x20=\x20\x27lib' + 'rary-item-' + _0x30dfa8(_0x543936._0x28acd8) + _0x30dfa8(_0x543936._0x20ddb4) + _0x30dfa8(_0x543936._0x5d0390) + 'erHTML\x20=\x20\x27' + '✕\x27;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20deleteBt' + _0x30dfa8(_0x543936._0x1c034c) + _0x30dfa8(_0x543936._0x519d1c) + 'imation\x27;\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20de' + 'leteBtn.on' + _0x30dfa8(0xb19) + ')\x20=>\x20{\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20e' + '.stopPropa' + 'gation();\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20deleteAn' + 'imationFro' + 'mLibrary(n' + 'ame);\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20};\x0a\x20\x20\x20' + _0x30dfa8(_0x543936._0x4d81ff) + '\x20\x20\x20\x20item.o' + 'nclick\x20=\x20(' + _0x30dfa8(_0x543936._0x1afecc) + 'nimationFr' + _0x30dfa8(_0x543936._0x3a637f) + 'name,\x20anim' + _0x30dfa8(_0x543936._0x37e543) + '\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20const\x20' + 'preview\x20=\x20' + _0x30dfa8(0x7d9) + 'reateEleme' + 'nt(\x27div\x27);' + _0x30dfa8(_0x543936._0x6193a8) + _0x30dfa8(0x339) + 'ssName\x20=\x20\x27' + _0x30dfa8(0x54d) + 'em-preview' + _0x30dfa8(_0x543936._0x46c8be) + _0x30dfa8(0x885) + _0x30dfa8(0xb63) + 'as\x20=\x20docum' + 'ent.create' + 'Element(\x27c' + 'anvas\x27);\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20can' + 'vas.width\x20' + '=\x20180;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20canva' + 's.height\x20=' + _0x30dfa8(_0x543936._0x388652) + '\x20\x20\x20\x20previe' + 'w.appendCh' + _0x30dfa8(0x373) + ');\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + 'const\x20item' + _0x30dfa8(0xb08) + 'ument.crea' + _0x30dfa8(_0x543936._0x46e20f) + '\x27div\x27);\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20item' + 'Name.class' + 'Name\x20=\x20\x27li' + _0x30dfa8(_0x543936._0x114e73) + '-name\x27;\x0a\x20\x20' + _0x30dfa8(_0x543936._0x4d57bc) + 'Name.textC' + _0x30dfa8(0x41c) + 'ame;\x0a\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x27ca79) + '\x20\x20const\x20it' + 'emInfo\x20=\x20d' + 'ocument.cr' + _0x30dfa8(_0x543936._0x155168) + _0x30dfa8(0x6d6) + _0x30dfa8(_0x543936._0x2a6d97) + 'emInfo.cla' + _0x30dfa8(_0x543936._0x113763) + 'library-it' + _0x30dfa8(_0x543936._0x2c219a) + '\x20\x20\x20\x20\x20\x20\x20\x20it' + _0x30dfa8(_0x543936._0x1c2dd5) + 'tContent\x20=' + _0x30dfa8(0x6e1) + 'rows\x20+\x20\x27x\x27' + _0x30dfa8(0xb1c) + 'a.columns\x20' + '+\x20\x27\x20|\x20\x27\x20+\x20' + 'animData.f' + 'ps\x20+\x20\x27\x20FPS' + '\x27;\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x220101) + 'item.appen' + 'dChild(del') + (_0x30dfa8(_0x543936._0xb2a28) + '\x20\x20\x20\x20\x20\x20\x20ite' + 'm.appendCh' + 'ild(previe' + 'w);\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20item.app' + 'endChild(i' + 'temName);\x0a' + _0x30dfa8(_0x543936._0x2a6d97) + 'em.appendC' + 'hild(itemI' + 'nfo);\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20grid.a' + _0x30dfa8(0x2fc) + '(item);\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20' + _0x30dfa8(0xadc) + _0x30dfa8(_0x543936._0x475330) + _0x30dfa8(_0x543936._0x5b71e4) + _0x30dfa8(_0x543936._0x43d095) + 'a);\x0a\x20\x20\x20\x20}\x0a' + '}\x0a\x0afunctio' + _0x30dfa8(0x6e7) + 'imationFro' + _0x30dfa8(0x158) + _0x30dfa8(_0x543936._0x3119ee) + 'me)\x20{\x0a\x20\x20\x20\x20' + 'delete\x20lib' + 'raryAnimat' + 'ions[anima' + 'tionName];' + '\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x48f03b) + '.opener\x20&&' + '\x20window.op' + 'ener.delet' + 'eAnimation' + 'FromLibrar' + 'y)\x20{\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20window.' + 'opener.del' + _0x30dfa8(0x6e8) + 'onFromLibr' + 'ary(animat' + _0x30dfa8(_0x543936._0x5d7300) + '\x20\x20\x20\x20}\x0a\x20\x20\x20\x20' + 'displayLib' + 'rary();\x0a}\x0a' + _0x30dfa8(0x64f) + 'startLibra' + 'ryPreview(' + _0x30dfa8(_0x543936._0x4f92ca) + 'imData)\x20{\x0a' + '\x20\x20\x20\x20const\x20' + _0x30dfa8(_0x543936._0x35cd61) + 'as.getCont' + 'ext(\x272d\x27);' + '\x0a\x20\x20\x20\x20ctx.i' + 'mageSmooth' + _0x30dfa8(0x979) + '\x20=\x20false;\x0a' + _0x30dfa8(_0x543936._0x1ba7d8) + 'et\x20charact' + 'erImg\x20=\x20nu' + 'll;\x0a\x20\x20\x20\x20if' + '\x20(animData' + '.character' + _0x30dfa8(_0x543936._0x2a046f) + 'animData.c' + _0x30dfa8(0x693) + 'rite.dataU' + 'rl)\x20{\x0a\x20\x20\x20\x20' + _0x30dfa8(0x1a0) + 'terImg\x20=\x20n' + 'ew\x20Image()' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x382) + _0x30dfa8(_0x543936._0x5790eb) + _0x30dfa8(0xc35) + _0x30dfa8(0x64a) + 'ite.dataUr' + 'l;\x0a\x20\x20\x20\x20}\x0a\x20' + '\x20\x20\x20\x0a\x20\x20\x20\x20co' + _0x30dfa8(0x252) + 'new\x20Image(' + ');\x0a\x20\x20\x20\x20img' + '.onload\x20=\x20' + 'function()' + _0x30dfa8(_0x543936._0x4ee889) + _0x30dfa8(0x454) + '\x20=\x200;\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20const\x20' + 'totalFrame' + 's\x20=\x20animDa' + 'ta.rows\x20*\x20' + 'animData.c' + 'olumns;\x0a\x20\x20' + _0x30dfa8(_0x543936._0x10a44d) + _0x30dfa8(0xbfb) + 'th\x20=\x20img.w') + ('idth\x20/\x20ani' + 'mData.colu' + 'mns;\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20const\x20f' + 'rameHeight' + '\x20=\x20img.hei' + 'ght\x20/\x20anim' + 'Data.rows;' + _0x30dfa8(0xa94) + _0x30dfa8(0xc5c) + 'nst\x20previe' + _0x30dfa8(_0x543936._0x2dedf7) + 'animData.s' + _0x30dfa8(0xa4c) + ')\x20*\x200.6;\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20con' + 'st\x20drawWid' + 'th\x20=\x20frame' + 'Width\x20*\x20pr' + 'eviewScale' + _0x30dfa8(_0x543936._0x477858) + 'const\x20draw' + 'Height\x20=\x20f' + 'rameHeight' + '\x20*\x20preview' + _0x30dfa8(_0x543936._0x12daa6) + _0x30dfa8(_0x543936._0x2695fb) + _0x30dfa8(0xf2) + 'ndomFlipX\x20' + '=\x20false;\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20let' + '\x20randomFli' + 'pY\x20=\x20false' + _0x30dfa8(_0x543936._0x5ad53c) + _0x30dfa8(_0x543936._0x3b4c01) + 'Rotation\x20=' + '\x200;\x0a\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x23adf9) + _0x30dfa8(0x4f5) + '=\x200;\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20function' + '\x20animate()' + '\x20{\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x73d) + 'learRect(0' + ',\x200,\x20canva' + 's.width,\x20c' + _0x30dfa8(_0x543936._0x4550cc) + 'ht);\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'randomCoun' + 'ter++;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20i' + 'f\x20(randomC' + 'ounter\x20>=\x20' + '10)\x20{\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20randomCo' + 'unter\x20=\x200;' + _0x30dfa8(_0x543936._0x35967c) + '\x20\x20\x20\x20\x20\x20\x20if\x20' + '(animData.' + _0x30dfa8(0x5c7) + 'X)\x20randomF' + 'lipX\x20=\x20Mat' + _0x30dfa8(0x217) + '\x20<\x200.5;\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20if\x20(an' + _0x30dfa8(0xbfd) + 'domFlipY)\x20' + _0x30dfa8(_0x543936._0x4e97d8) + 'Y\x20=\x20Math.r' + 'andom()\x20<\x20' + _0x30dfa8(_0x543936._0x1ae0f1) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x1edd37) + _0x30dfa8(0x81b) + 'Rotation)\x20' + 'randomRota' + 'tion\x20=\x20Mat' + _0x30dfa8(0x217) + '\x20*\x20360;\x0a\x20\x20' + _0x30dfa8(_0x543936._0x130474) + '}\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x3673ca) + '\x20charCente' + 'rX\x20=\x20canva' + 's.width\x20/\x20' + _0x30dfa8(_0x543936._0x4cadef) + '\x20\x20\x20\x20\x20let\x20c' + 'harCenterY' + '\x20=\x20canvas.' + 'height\x20/\x202' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x567) + _0x30dfa8(_0x543936._0x47bd19)) + ('(character' + 'Img\x20&&\x20cha' + _0x30dfa8(0x2cc) + 'complete)\x20' + '{\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20co' + 'nst\x20charSc' + 'ale\x20=\x200.6;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20con' + 'st\x20charWid' + 'th\x20=\x20animD' + 'ata.charac' + 'terSprite.' + 'width\x20*\x20ch' + 'arScale;\x0a\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20const' + '\x20charHeigh' + 't\x20=\x20animDa' + 'ta.charact' + 'erSprite.h' + 'eight\x20*\x20ch' + _0x30dfa8(0x78f) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20const' + _0x30dfa8(0xb99) + 'canvas.wid' + 'th\x20-\x20charW' + 'idth)\x20/\x202;' + _0x30dfa8(_0x543936._0x20a2d8) + _0x30dfa8(_0x543936._0x49f362) + 'st\x20charY\x20=' + '\x20(canvas.h' + 'eight\x20-\x20ch' + _0x30dfa8(_0x543936._0x513034) + _0x30dfa8(0x2f8) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20ct' + 'x.drawImag' + 'e(characte' + _0x30dfa8(_0x543936._0x52f2da) + 'X,\x20charY,\x20' + 'charWidth,' + '\x20charHeigh' + 't);\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20cha' + 'rCenterX\x20=' + '\x20charX\x20+\x20c' + 'harWidth\x20/' + '\x202;\x0a\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + 'charCenter' + 'Y\x20=\x20charY\x20' + '+\x20charHeig' + 'ht\x20/\x202;\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '}\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x567) + _0x30dfa8(0xa96) + '\x20displayFr' + 'ame\x20=\x20anim' + 'Data.playI' + 'nReverse\x20?' + _0x30dfa8(_0x543936._0x5efdfa) + 'mes\x20-\x201\x20-\x20' + 'frame)\x20:\x20f' + 'rame;\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20co' + _0x30dfa8(_0x543936._0x2aca84) + 'displayFra' + 'me\x20%\x20animD' + 'ata.column' + 's;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20const' + '\x20row\x20=\x20Mat' + 'h.floor(di' + _0x30dfa8(0x9b0) + '\x20/\x20animDat' + 'a.columns)' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x547aa7) + '\x20\x20\x20\x20\x20\x20\x20con' + 'st\x20preview' + 'OffsetX\x20=\x20' + '(animData.' + 'offsetX\x20*\x20' + '2)\x20*\x200.6;\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20const\x20pr' + _0x30dfa8(0x1e2) + 'tY\x20=\x20(anim' + 'Data.offse' + 'tY\x20*\x202)\x20*\x20' + '0.6;\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20' + _0x30dfa8(0x5a0)) + (_0x30dfa8(_0x543936._0xfbc4f4) + 'X\x20=\x20charCe' + 'nterX\x20+\x20pr' + 'eviewOffse' + _0x30dfa8(0x8d6) + '\x20\x20\x20\x20\x20\x20cons' + _0x30dfa8(0xd0f) + 'charCenter' + 'Y\x20+\x20previe' + 'wOffsetY;\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x334fcb) + '\x20\x20\x20\x20\x20const' + '\x20finalWidt' + 'h\x20=\x20drawWi' + _0x30dfa8(_0x543936._0x27a416) + '\x20\x20\x20\x20\x20\x20\x20con' + 'st\x20finalHe' + 'ight\x20=\x20dra' + 'wHeight;\x0a\x20' + _0x30dfa8(_0x543936._0x48bd4a) + '\x20const\x20fin' + 'alOpacity\x20' + _0x30dfa8(_0x543936._0x2b38e0) + '.opacity\x20|' + '|\x20255;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20c' + 'onst\x20hue\x20=' + '\x20animData.' + 'hue\x20||\x200;\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x334fcb) + _0x30dfa8(_0x543936._0x3d6372) + 'nimData.bl' + 'oomEffect)' + '\x20{\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20c' + 'tx.save();' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x42f) + _0x30dfa8(0x9fa) + _0x30dfa8(_0x543936._0xa54dd2) + _0x30dfa8(0xaee) + 'nsity\x20||\x202' + '55)\x20/\x20255)' + '\x20*\x20(finalO' + 'pacity\x20/\x202' + '55);\x0a\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x19c79f) + _0x30dfa8(_0x543936._0x2b71c4) + 'lComposite' + 'Operation\x20' + '=\x20\x27screen\x27' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20ct' + 'x.translat' + _0x30dfa8(_0x543936._0x146d87) + _0x30dfa8(_0x543936._0x5110bd) + _0x30dfa8(0x5a0) + '\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'const\x20fina' + 'lRotation\x20' + '=\x20animData' + _0x30dfa8(_0x543936._0x4b8719) + 'ation\x20?\x20ra' + _0x30dfa8(0x940) + 'on\x20:\x20(anim' + _0x30dfa8(0x10d) + 'ion\x20||\x200);' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20if\x20' + '(finalRota' + 'tion\x20!==\x200' + ')\x20{\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20ctx.ro' + 'tate(final' + 'Rotation\x20*' + _0x30dfa8(0x420) + '\x20180);\x0a\x20\x20\x20' + _0x30dfa8(_0x543936._0x34a85d) + '\x20\x20\x20}\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0xc5c) + _0x30dfa8(_0x543936._0x285c43) + 'lipX\x20=\x20ani' + 'mData.rand' + 'omFlipX\x20?\x20' + 'randomFlip' + 'X\x20:\x20(animD' + 'ata.flip\x20|' + _0x30dfa8(_0x543936._0x51afa9) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20cons' + 't\x20finalFli' + 'pY\x20=\x20animD' + 'ata.random' + 'FlipY\x20?\x20ra') + ('ndomFlipY\x20' + _0x30dfa8(0x135) + 'a.flipY\x20||' + _0x30dfa8(_0x543936._0x21c57d) + _0x30dfa8(_0x543936._0x130474) + _0x30dfa8(_0x543936._0x2b0a54) + 'cale(final' + 'FlipX\x20?\x20-1' + _0x30dfa8(_0x543936._0x50216d) + 'lFlipY\x20?\x20-' + '1\x20:\x201);\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20const\x20blo' + 'omCanvas\x20=' + '\x20document.' + 'createElem' + _0x30dfa8(0x66d) + 's\x27);\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0xc29) + _0x30dfa8(_0x543936._0x3f53b7) + _0x30dfa8(_0x543936._0x4b89d2) + _0x30dfa8(_0x543936._0x217cc6) + _0x30dfa8(0xc56) + 'loomCanvas' + '.height\x20=\x20' + 'frameHeigh' + _0x30dfa8(0x618) + _0x30dfa8(_0x543936._0x5803ec) + 'onst\x20bloom' + _0x30dfa8(_0x543936._0x1dbb36) + 'mCanvas.ge' + 'tContext(\x27' + _0x30dfa8(0x1e7) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20bloomCtx' + _0x30dfa8(0xa46) + '(img,\x20col\x20' + '*\x20frameWid' + 'th,\x20row\x20*\x20' + 'frameHeigh' + 't,\x20frameWi' + 'dth,\x20frame' + 'Height,\x200,' + '\x200,\x20frameW' + 'idth,\x20fram' + 'eHeight);\x0a' + _0x30dfa8(_0x543936._0x5d9607) + '\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20if\x20(hue' + '\x20!==\x200)\x20{\x0a' + _0x30dfa8(_0x543936._0x4e9d33) + _0x30dfa8(_0x543936._0x1c4b8d) + 'const\x20imag' + 'eData\x20=\x20bl' + 'oomCtx.get' + 'ImageData(' + '0,\x200,\x20fram' + 'eWidth,\x20fr' + _0x30dfa8(0x334) + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20const\x20da' + 'ta\x20=\x20image' + 'Data.data;' + _0x30dfa8(0x832) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20const\x20hue' + _0x30dfa8(_0x543936._0x24839e) + _0x30dfa8(0x418) + _0x30dfa8(_0x543936._0x3946cc) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x220101) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20for\x20(let' + '\x20i\x20=\x200;\x20i\x20' + _0x30dfa8(0xbf7) + 'gth;\x20i\x20+=\x20' + '4)\x20{\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x9da) + 'et\x20r\x20=\x20dat' + 'a[i];\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'let\x20g\x20=\x20da' + _0x30dfa8(0xa6d) + _0x30dfa8(_0x543936._0x321bcb) + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20let\x20b' + '\x20=\x20data[i\x20' + '+\x202];\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x832) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20') + ('\x20\x20\x20\x20\x20const' + '\x20max\x20=\x20Mat' + _0x30dfa8(0x8e4) + ',\x20b)\x20/\x20255' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20cons' + _0x30dfa8(0x855) + 'th.min(r,\x20' + _0x30dfa8(0xaa5) + '5;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0xa96) + '\x20h,\x20s,\x20l\x20=' + _0x30dfa8(0xa99) + 'n)\x20/\x202;\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + _0x30dfa8(_0x543936._0x713ca2) + _0x30dfa8(0x8ed) + 'in)\x20{\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20h\x20=\x20s\x20' + '=\x200;\x0a\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + _0x30dfa8(_0x543936._0x2fccff) + '\x20else\x20{\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20cons' + 't\x20d\x20=\x20max\x20' + '-\x20min;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x998) + '\x20>\x200.5\x20?\x20d' + '\x20/\x20(2\x20-\x20ma' + 'x\x20-\x20min)\x20:' + '\x20d\x20/\x20(max\x20' + '+\x20min);\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20' + _0x30dfa8(_0x543936._0x5f3f16) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x21b93d) + _0x30dfa8(_0x543936._0x220632) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x5cb180) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20case\x20r\x20/' + _0x30dfa8(_0x543936._0x1f2aa7) + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20h\x20=\x20((g\x20' + _0x30dfa8(0x6d0) + '/\x20255)\x20/\x20d' + '\x20+\x20(g\x20<\x20b\x20' + '?\x206\x20:\x200))\x20' + '/\x206;\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20break;\x0a\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + _0x30dfa8(_0x543936._0x1c7fe0) + '55:\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'h\x20=\x20((b\x20/\x20' + '255\x20-\x20r\x20/\x20' + _0x30dfa8(0x2a8) + _0x30dfa8(0x717) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x3a1d2a) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20break' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x1396fb) + '\x20\x20\x20\x20case\x20b' + '\x20/\x20255:\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20h\x20=\x20((' + 'r\x20/\x20255\x20-\x20' + 'g\x20/\x20255)\x20/' + '\x20d\x20+\x204)\x20/\x20' + '6;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20b') + ('reak;\x0a\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x1c4b8d) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5d6) + _0x30dfa8(_0x543936._0x36b7ca) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '}\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x275c39) + '\x20h\x20=\x20(h\x20+\x20' + 'hueRadians' + _0x30dfa8(0xdd) + _0x30dfa8(0x589) + _0x30dfa8(_0x543936._0x3bfb46) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x47bd19) + _0x30dfa8(0x6bc) + '+=\x201;\x0a\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x34c9ab) + _0x30dfa8(_0x543936._0x232817) + _0x30dfa8(_0x543936._0x4f0079) + '2,\x20g2,\x20b2;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20if\x20(s' + '\x20===\x200)\x20{\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20r2' + '\x20=\x20g2\x20=\x20b2' + _0x30dfa8(0x140) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x4400e3) + _0x30dfa8(0x2d3) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x420f03) + _0x30dfa8(0x3bc) + '\x20=\x20(p,\x20q,\x20' + _0x30dfa8(0x7dc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x5d9607) + _0x30dfa8(0x5a0) + _0x30dfa8(0xb11) + '\x20t\x20+=\x201;\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20if\x20(t\x20>\x201' + _0x30dfa8(0x985) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x438f1e) + '1/6)\x20retur' + 'n\x20p\x20+\x20(q\x20-' + '\x20p)\x20*\x206\x20*\x20' + 't;\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x1c4b8d) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20if\x20(t' + _0x30dfa8(_0x543936._0xa746df) + 'turn\x20q;\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5ef) + _0x30dfa8(0x91d) + _0x30dfa8(0xc98) + ')\x20*\x20(2/3\x20-' + '\x20t)\x20*\x206;\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x56711f) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20return\x20p;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x275c39) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20}' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x321bcb) + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20c' + 'onst\x20q\x20=\x20l' + '\x20<\x200.5\x20?\x20l' + '\x20*\x20(1\x20+\x20s)' + '\x20:\x20l\x20+\x20s\x20-' + '\x20l\x20*\x20s;\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x38de34) + 't\x20p\x20=\x202\x20*\x20' + 'l\x20-\x20q;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20') + ('\x20\x20\x20\x20\x20r2\x20=\x20' + _0x30dfa8(_0x543936._0x433101) + '\x20q,\x20h\x20+\x201/' + _0x30dfa8(_0x543936._0x5173c3) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20g2\x20=\x20hue' + '2rgb(p,\x20q,' + _0x30dfa8(0x473) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20b2\x20=\x20hu' + 'e2rgb(p,\x20q' + ',\x20h\x20-\x201/3)' + _0x30dfa8(_0x543936._0x1f9d7e) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20}\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20dat' + 'a[i]\x20=\x20r2\x20' + _0x30dfa8(0x8e9) + _0x30dfa8(_0x543936._0x243384) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20data[i\x20+\x20' + '1]\x20=\x20g2\x20*\x20' + '255;\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20d' + _0x30dfa8(_0x543936._0x4af4bb) + '\x20=\x20b2\x20*\x2025' + _0x30dfa8(0x6a0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20}\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x435) + 'mCtx.putIm' + _0x30dfa8(0x632) + 'ageData,\x200' + ',\x200);\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x3ef) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x39e920) + '\x20\x20\x20\x20\x20\x20\x20con' + 'st\x20blurCan' + 'vas\x20=\x20docu' + 'ment.creat' + 'eElement(\x27' + 'canvas\x27);\x0a' + _0x30dfa8(_0x543936._0x5775b9) + '\x20\x20\x20\x20\x20\x20cons' + 't\x20blur\x20=\x20a' + 'nimData.bl' + 'urAmount\x20|' + _0x30dfa8(0xad8) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20blurCanv' + 'as.width\x20=' + '\x20frameWidt' + 'h\x20+\x20blur\x20*' + '\x204;\x0a\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x44e02b) + 'blurCanvas' + _0x30dfa8(_0x543936._0x283dfc) + _0x30dfa8(_0x543936._0x1283a6) + 't\x20+\x20blur\x20*' + '\x204;\x0a\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + _0x30dfa8(_0x543936._0x352bbf) + _0x30dfa8(_0x543936._0x266443) + 'Canvas.get' + 'Context(\x272' + 'd\x27);\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x1c6746) + 'ilter\x20=\x20\x27b' + 'lur(\x27\x20+\x20bl' + 'ur\x20+\x20\x27px)\x27' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20bl' + 'urCtx.draw' + _0x30dfa8(_0x543936._0x35855b) + 'mCanvas,\x20b' + 'lur\x20*\x202,\x20b' + 'lur\x20*\x202);\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x20ctx.dra' + 'wImage(blu' + 'rCanvas,\x20-' + 'finalWidth' + '\x20/\x202\x20-\x20blu' + 'r\x20*\x202,\x20-fi' + 'nalHeight\x20') + ('/\x202\x20-\x20blur' + _0x30dfa8(_0x543936._0x2daf4) + _0x30dfa8(0xac9) + _0x30dfa8(_0x543936._0x16055e) + 'inalHeight' + '\x20+\x20blur\x20*\x20' + '4);\x0a\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x2b8b25) + _0x30dfa8(0x259) + 'e();\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20}\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x885) + _0x30dfa8(_0x543936._0x31a85a) + _0x30dfa8(0x911) + '\x20\x20\x20\x20\x20\x20\x20\x20ct' + 'x.globalAl' + 'pha\x20=\x20fina' + 'lOpacity\x20/' + '\x20255;\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x45e776) + 'ndModes\x20=\x20' + _0x30dfa8(0xad5) + '\x20\x20\x20\x20\x20\x20\x20\x20\x27N' + 'ormal\x27:\x20\x27s' + 'ource-over' + _0x30dfa8(_0x543936._0x3a08e5) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27' + 'Screen\x27:\x20\x27' + _0x30dfa8(0x9a6) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x27Add\x27' + ':\x20\x27lighter' + '\x27,\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27' + 'Multiply\x27:' + '\x20\x27multiply' + '\x27\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x399c61) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20c' + 'tx.globalC' + 'ompositeOp' + 'eration\x20=\x20' + 'blendModes' + '[animData.' + 'blendMode]' + _0x30dfa8(_0x543936._0x134301) + 'e-over\x27;\x0a\x20' + _0x30dfa8(0x5a0) + '\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20ctx.tr' + 'anslate(an' + _0x30dfa8(_0x543936._0x4c1262) + ');\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20co' + 'nst\x20finalR' + 'otation\x20=\x20' + 'animData.r' + 'andomRotat' + 'ion\x20?\x20rand' + _0x30dfa8(0x80d) + '\x20:\x20(animDa' + _0x30dfa8(_0x543936._0x4a53b3) + _0x30dfa8(0x913) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20if\x20(final' + 'Rotation\x20!' + _0x30dfa8(_0x543936._0x39dd44) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20ctx.ro' + 'tate(final' + _0x30dfa8(_0x543936._0x24b7de) + '\x20Math.PI\x20/' + '\x20180);\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20}' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20cons' + 't\x20finalFli' + 'pX\x20=\x20animD' + 'ata.random' + 'FlipX\x20?\x20ra' + _0x30dfa8(0x59d) + ':\x20(animDat' + _0x30dfa8(0xa43) + 'false);\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0xb16) + 'lFlipY\x20=\x20a' + _0x30dfa8(0x1d0) + 'ndomFlipY\x20' + '?\x20randomFl' + 'ipY\x20:\x20(ani' + 'mData.flip' + 'Y\x20||\x20false' + ');\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20ctx.s') + ('cale(final' + 'FlipX\x20?\x20-1' + '\x20:\x201,\x20fina' + 'lFlipY\x20?\x20-' + _0x30dfa8(_0x543936._0xf3c24b) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x832) + _0x30dfa8(0x272) + '\x20!==\x200)\x20{\x0a' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20cons' + 't\x20tempCanv' + 'as\x20=\x20docum' + 'ent.create' + 'Element(\x27c' + _0x30dfa8(0x175) + _0x30dfa8(_0x543936._0xbe846a) + '\x20\x20\x20\x20\x20tempC' + 'anvas.widt' + 'h\x20=\x20frameW' + 'idth;\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20tempCanv' + 'as.height\x20' + '=\x20frameHei' + 'ght;\x0a\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + _0x30dfa8(0x654) + _0x30dfa8(_0x543936._0x48dab0) + 'pCanvas.ge' + 'tContext(\x27' + '2d\x27);\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20tempCtx.' + 'drawImage(' + 'img,\x20col\x20*' + _0x30dfa8(_0x543936._0x4b89d2) + _0x30dfa8(0x63b) + 'rameHeight' + _0x30dfa8(_0x543936._0x28fe81) + 'th,\x20frameH' + _0x30dfa8(0xbe2) + '0,\x20frameWi' + _0x30dfa8(0xc28) + 'Height);\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x1a2) + _0x30dfa8(_0x543936._0x5d5fac) + _0x30dfa8(0x32b) + _0x30dfa8(0xa38) + 'tempCtx.ge' + _0x30dfa8(0xc2d) + '(0,\x200,\x20fra' + 'meWidth,\x20f' + _0x30dfa8(0x650) + ');\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20c' + _0x30dfa8(0x3b9) + '=\x20imageDat' + _0x30dfa8(0x778) + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20const\x20' + _0x30dfa8(_0x543936._0x4a7b8b) + '\x20=\x20hue\x20*\x20M' + 'ath.PI\x20/\x201' + '80;\x0a\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20for' + '\x20(let\x20i\x20=\x20' + '0;\x20i\x20<\x20dat' + 'a.length;\x20' + _0x30dfa8(_0x543936._0x25a412) + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x4a1d9e) + 'ta[i];\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20let' + '\x20g\x20=\x20data[' + 'i\x20+\x201];\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20le' + _0x30dfa8(_0x543936._0xd63684) + _0x30dfa8(_0x543936._0x5147fe) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x264) + _0x30dfa8(_0x543936._0x321fe4) + _0x30dfa8(_0x543936._0x520b81) + _0x30dfa8(0x545) + '=\x20Math.max' + '(r,\x20g,\x20b)\x20' + _0x30dfa8(_0x543936._0x5eec9d) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20con' + 'st\x20min\x20=\x20M' + 'ath.min(r,' + '\x20g,\x20b)\x20/\x202' + '55;\x0a\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x503997)) + (_0x30dfa8(_0x543936._0x2650ad) + '\x20s,\x20l\x20=\x20(m' + 'ax\x20+\x20min)\x20' + _0x30dfa8(0x2f8) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x1cf5bd) + 'max\x20===\x20mi' + 'n)\x20{\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20h' + '\x20=\x20s\x20=\x200;\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x4ceaa5) + '}\x20else\x20{\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20const\x20d' + '\x20=\x20max\x20-\x20m' + _0x30dfa8(_0x543936._0x4ee897) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20s\x20' + '=\x20l\x20>\x200.5\x20' + '?\x20d\x20/\x20(2\x20-' + '\x20max\x20-\x20min' + ')\x20:\x20d\x20/\x20(m' + _0x30dfa8(0x1d7) + _0x30dfa8(_0x543936._0x34c9ab) + _0x30dfa8(_0x543936._0x520b81) + '\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + 'switch\x20(ma' + _0x30dfa8(_0x543936._0x13ed1b) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20case\x20r\x20' + '/\x20255:\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x5f31d5) + _0x30dfa8(0x466) + _0x30dfa8(_0x543936._0x1b230c) + '55\x20-\x20b\x20/\x202' + '55)\x20/\x20d\x20+\x20' + '(g\x20<\x20b\x20?\x206' + '\x20:\x200))\x20/\x206' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20break;' + _0x30dfa8(0x832) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20c' + 'ase\x20g\x20/\x2025' + '5:\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x1349f4) + '(b\x20/\x20255\x20-' + '\x20r\x20/\x20255)\x20' + '/\x20d\x20+\x202)\x20/' + _0x30dfa8(_0x543936._0x48d34a) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x2623c0) + 'k;\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20case\x20b\x20/\x20' + _0x30dfa8(_0x543936._0x30be39) + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20h\x20=' + '\x20((r\x20/\x20255' + '\x20-\x20g\x20/\x20255' + ')\x20/\x20d\x20+\x204)' + _0x30dfa8(_0x543936._0x3319e5) + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x242c30) + 'eak;\x0a\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20}' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x90f) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0xbe846a) + '\x20\x20\x20\x20h\x20=\x20(h' + '\x20+\x20hueRadi' + _0x30dfa8(0x5d2) + _0x30dfa8(_0x543936._0x115b34) + '\x20%\x201;\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20if\x20(' + 'h\x20<\x200)\x20h\x20+' + '=\x201;\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20') + ('\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x1f14b3) + 'r2,\x20g2,\x20b2' + _0x30dfa8(0x77a) + _0x30dfa8(0x5a0) + '\x20\x20if\x20(s\x20==' + '=\x200)\x20{\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20r2\x20=\x20g2\x20=' + _0x30dfa8(_0x543936._0x32adad) + _0x30dfa8(_0x543936._0x27e4be) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20}' + '\x20else\x20{\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20const\x20hu' + 'e2rgb\x20=\x20(p' + ',\x20q,\x20t)\x20=>' + '\x20{\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x846) + ')\x20t\x20+=\x201;\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x557687) + '\x20\x20\x20\x20\x20\x20\x20\x20if' + '\x20(t\x20>\x201)\x20t' + '\x20-=\x201;\x0a\x20\x20\x20' + _0x30dfa8(_0x543936._0x42b1ba) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0xe8d042) + _0x30dfa8(_0x543936._0x318557) + _0x30dfa8(0xbcc) + _0x30dfa8(_0x543936._0x256e94) + '\x20*\x20t;\x0a\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x298625) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20if\x20(t\x20' + '<\x201/2)\x20ret' + 'urn\x20q;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20if\x20(t' + '\x20<\x202/3)\x20re' + 'turn\x20p\x20+\x20(' + 'q\x20-\x20p)\x20*\x20(' + '2/3\x20-\x20t)\x20*' + _0x30dfa8(_0x543936._0x48d34a) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20return\x20p' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + _0x30dfa8(0x8e8) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x34a85d) + '\x20\x20\x20\x20\x20\x20\x20\x20co' + _0x30dfa8(_0x543936._0x3270ae) + _0x30dfa8(_0x543936._0x3dc2f2) + '*\x20(1\x20+\x20s)\x20' + ':\x20l\x20+\x20s\x20-\x20' + 'l\x20*\x20s;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x6d9) + '\x202\x20*\x20l\x20-\x20q' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + _0x30dfa8(_0x543936._0x4070bb) + '\x20hue2rgb(p' + ',\x20q,\x20h\x20+\x201' + _0x30dfa8(0x2ae) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x4353ca) + '2\x20=\x20hue2rg' + 'b(p,\x20q,\x20h)' + _0x30dfa8(0x77a) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x3d7) + '\x20hue2rgb(p' + ',\x20q,\x20h\x20-\x201' + '/3);\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20}\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20da' + 'ta[i]\x20=\x20r2' + '\x20*\x20255;\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x606) + _0x30dfa8(0xba9) + _0x30dfa8(0xb70) + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0)) + ('\x20\x20data[i\x20+' + '\x202]\x20=\x20b2\x20*' + '\x20255;\x0a\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x40a2f4) + _0x30dfa8(_0x543936._0x3162d0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20tem' + 'pCtx.putIm' + 'ageData(im' + 'ageData,\x200' + ',\x200);\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20ctx.draw' + _0x30dfa8(0xa6b) + _0x30dfa8(_0x543936._0x3b8a6b) + _0x30dfa8(_0x543936._0x47d478) + _0x30dfa8(0x4b4) + _0x30dfa8(0x604) + _0x30dfa8(0x3bb) + 'dth,\x20final' + 'Height);\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20}\x20else\x20{\x0a' + _0x30dfa8(_0x543936._0x27e4be) + '\x20\x20\x20\x20\x20\x20ctx.' + _0x30dfa8(0x7a3) + _0x30dfa8(_0x543936._0x49ba4f) + '\x20frameWidt' + 'h,\x20row\x20*\x20f' + 'rameHeight' + ',\x20frameWid' + 'th,\x20frameH' + 'eight,\x20-fi' + _0x30dfa8(0x549) + _0x30dfa8(0xb58) + _0x30dfa8(_0x543936._0x599b15) + ',\x20finalWid' + _0x30dfa8(_0x543936._0x4abf13) + _0x30dfa8(_0x543936._0x58bba0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '}\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x547aa7) + '\x20\x20\x20\x20\x20\x20\x20ctx' + _0x30dfa8(0x993) + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20fra' + 'me\x20=\x20(fram' + 'e\x20+\x201)\x20%\x20t' + 'otalFrames' + _0x30dfa8(_0x543936._0x5d1ddb) + '}\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20s' + 'etInterval' + '(animate,\x20' + '1000\x20/\x20Mat' + _0x30dfa8(0xb0e) + 'Data.fps,\x20' + '30));\x0a\x20\x20\x20\x20' + '};\x0a\x20\x20\x20\x20\x0a\x20\x20' + '\x20\x20if\x20(wind' + 'ow.opener\x20' + '&&\x20window.' + _0x30dfa8(0x58e) + _0x30dfa8(0x8e0) + '\x20{\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x654) + _0x30dfa8(0x464) + 'window.ope' + _0x30dfa8(0x19d) + 'anager.loa' + 'dPicture(a' + 'nimData.sp' + 'ritesheetF' + 'ile);\x0a\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x48cf48) + 'mpBitmap\x20&' + _0x30dfa8(_0x543936._0x220a8e) + 'ap._url)\x20{' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x1fbeff) + '\x20=\x20tempBit' + 'map._url;\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20}\x0a' + '\x20\x20\x20\x20}\x0a}\x0a\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0xcb8) + 'ion\x20loadAn' + 'imationFro' + 'mLibrary(n' + _0x30dfa8(0xb27) + 'ata)\x20{\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20clo' + 'seLibrary(' + ');\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20const\x20i' + 'mg\x20=\x20new\x20I') + ('mage();\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20im' + _0x30dfa8(0x630) + '\x20function(' + _0x30dfa8(0x8d5) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20cu' + 'rrentSprit' + 'esheet\x20=\x20i' + 'mg;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20do' + _0x30dfa8(0x45c) + 'ElementByI' + 'd(\x27animati' + 'onNameInpu' + _0x30dfa8(0x6ea) + _0x30dfa8(_0x543936._0x1405ef) + _0x30dfa8(_0x543936._0x40a2f4) + _0x30dfa8(0x5a0) + _0x30dfa8(_0x543936._0x3fa667) + '.getElemen' + 'tById(\x27row' + _0x30dfa8(0x17d) + 'lue\x20=\x20anim' + 'Data.rows;' + _0x30dfa8(_0x543936._0x281dc0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0xba2) + 'ent.getEle' + 'mentById(\x27' + 'columnInpu' + 't\x27).value\x20' + '=\x20animData' + '.columns;\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20docume' + 'nt.getElem' + 'entById(\x27f' + 'psInput\x27).' + 'value\x20=\x20an' + 'imData.fps' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20docu' + 'ment.getEl' + 'ementById(' + '\x27scaleInpu' + 't\x27).value\x20' + _0x30dfa8(_0x543936._0x28065e) + '.scale;\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20document' + '.getElemen' + 'tById(\x27opa' + _0x30dfa8(0x5e5) + ').value\x20=\x20' + 'animData.o' + 'pacity\x20||\x20' + '255;\x0a\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x148f1d) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20d' + 'ocument.ge' + 'tElementBy' + 'Id(\x27hueInp' + 'ut\x27).value' + _0x30dfa8(_0x543936._0x3f9f4f) + 'a.hue\x20||\x200' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20docu' + 'ment.getEl' + _0x30dfa8(0x1fd) + '\x27blendMode' + 'Input\x27).va' + _0x30dfa8(0x414) + 'Data.blend' + 'Mode\x20||\x20\x27N' + 'ormal\x27;\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20document' + _0x30dfa8(_0x543936._0x345bf0) + _0x30dfa8(_0x543936._0x298688) + 'erseCheckb' + _0x30dfa8(_0x543936._0x95099) + 'ed\x20=\x20animD' + 'ata.playIn' + 'Reverse\x20||' + _0x30dfa8(_0x543936._0x301962) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20document' + '.getElemen' + _0x30dfa8(0x1b5) + _0x30dfa8(0x76b) + 'lCheckbox\x27') + (').checked\x20' + '=\x20animData' + _0x30dfa8(0x32f) + 'alse;\x0a\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x387dbc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x3ad7c1) + 'etElementB' + _0x30dfa8(0x386) + 'erticalChe' + 'ckbox\x27).ch' + _0x30dfa8(0x8f5) + 'imData.fli' + 'pY\x20||\x20fals' + 'e;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x120227) + 'ument.getE' + 'lementById' + '(\x27randomFl' + 'ipHorizont' + 'alCheckbox' + _0x30dfa8(0x8e6) + '\x20=\x20animDat' + _0x30dfa8(0x4ab) + 'ipX\x20||\x20fal' + 'se;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20do' + 'cument.get' + _0x30dfa8(0x443) + 'd(\x27randomF' + 'lipVertica' + 'lCheckbox\x27' + ').checked\x20' + '=\x20animData' + '.randomFli' + 'pY\x20||\x20fals' + 'e;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20doc' + _0x30dfa8(0x5b7) + 'lementById' + '(\x27rotation' + _0x30dfa8(0x17d) + _0x30dfa8(0x414) + 'Data.rotat' + 'ion\x20||\x200;\x0a' + _0x30dfa8(_0x543936._0x1b80aa) + _0x30dfa8(_0x543936._0x19c79f) + '\x20\x20\x20\x20docume' + 'nt.getElem' + _0x30dfa8(0x224) + 'andomRotat' + _0x30dfa8(0x2b9) + 'x\x27).checke' + 'd\x20=\x20animDa' + 'ta.randomR' + 'otation\x20||' + '\x20false;\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20document' + '.getElemen' + 'tById(\x27ope' + _0x30dfa8(0x879) + 'ionInput\x27)' + '.value\x20=\x20a' + 'nimData.op' + 'eningAnima' + 'tion\x20||\x20\x27n' + 'one\x27;\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'document.g' + _0x30dfa8(_0x543936._0x1ea66b) + 'yId(\x27endin' + _0x30dfa8(0xd13) + _0x30dfa8(_0x543936._0x49c12c) + _0x30dfa8(_0x543936._0x47a4f9) + 'Data.endin' + 'gAnimation' + '\x20||\x20\x27none\x27' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20docu' + _0x30dfa8(_0x543936._0x1b04b8) + 'ementById(' + '\x27animation' + _0x30dfa8(0x863) + 'put\x27).valu' + 'e\x20=\x20animDa' + 'ta.animati' + 'onDuration' + '\x20||\x2030;\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20document' + _0x30dfa8(0xcad) + _0x30dfa8(0x292)) + (_0x30dfa8(_0x543936._0x199937) + '\x27).checked' + '\x20=\x20animDat' + 'a.bloomEff' + 'ect\x20||\x20fal' + _0x30dfa8(_0x543936._0x2fe9c3) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20do' + _0x30dfa8(_0x543936._0x3b7fb0) + 'ElementByI' + 'd(\x27blurAmo' + 'untInput\x27)' + '.value\x20=\x20a' + _0x30dfa8(0xb74) + 'urAmount\x20|' + '|\x2015;\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'document.g' + _0x30dfa8(_0x543936._0x308e0e) + 'yId(\x27inten' + _0x30dfa8(_0x543936._0xa27c49) + _0x30dfa8(_0x543936._0xa51ad8) + 'animData.i' + 'ntensity\x20|' + '|\x20255;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x6be) + 'getElement' + 'ById(\x27tint' + _0x30dfa8(0x6df) + _0x30dfa8(_0x543936._0x57ef02) + _0x30dfa8(_0x543936._0x3ef6be) + 'tintColor\x20' + '||\x20\x27#FFFFF' + 'F\x27;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x19168b) + 'cument.get' + _0x30dfa8(0x443) + _0x30dfa8(_0x543936._0x114459) + _0x30dfa8(0x6fe) + 'ue\x20=\x20animD' + 'ata.zIndex' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20docu' + 'ment.getEl' + 'ementById(' + '\x27offsetXIn' + 'put\x27).valu' + _0x30dfa8(0xd0c) + _0x30dfa8(_0x543936._0x49e23c) + '\x20*\x202;\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'document.g' + 'etElementB' + 'yId(\x27offse' + 'tYInput\x27).' + 'value\x20=\x20an' + _0x30dfa8(_0x543936._0x3003dc) + _0x30dfa8(0x341) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x547aa7) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20u' + 'pdateHueDi' + 'splay();\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x20updateR' + _0x30dfa8(_0x543936._0x35a2f4) + 'play();\x0a\x20\x20' + _0x30dfa8(_0x543936._0x512685) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20updateAu' + 'toSaveVisi' + _0x30dfa8(0x1f3) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x567) + _0x30dfa8(0x5a0) + _0x30dfa8(0x9c2) + 'f\x20(animDat' + 'a.characte' + _0x30dfa8(0x87a) + _0x30dfa8(_0x543936._0x3ef6be) + 'characterS' + _0x30dfa8(0xcf5) + _0x30dfa8(0xcc6) + _0x30dfa8(_0x543936._0x5d2eb7) + _0x30dfa8(_0x543936._0x58777a) + '\x20\x20\x20\x20\x20const' + _0x30dfa8(0x481) + _0x30dfa8(_0x543936._0x12976a) + '();\x0a\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0)) + (_0x30dfa8(_0x543936._0x3369ee) + _0x30dfa8(0x3b0) + 'onload\x20=\x20f' + 'unction()\x20' + '{\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20charac' + 'terSprite\x20' + '=\x20charImg;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20charact' + 'erSpriteWi' + 'dth\x20=\x20anim' + _0x30dfa8(0x664) + 'cterSprite' + '.width;\x0a\x20\x20' + _0x30dfa8(_0x543936._0x3c5da2) + _0x30dfa8(_0x543936._0x4599eb) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x1aa743) + 'priteHeigh' + _0x30dfa8(0x1aa) + 'ta.charact' + 'erSprite.h' + _0x30dfa8(_0x543936._0x1be804) + _0x30dfa8(_0x543936._0x56d8e3) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x264) + _0x30dfa8(_0x543936._0x5775b9) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0xcd6) + 'nimating)\x20' + '{\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20is' + 'Animating\x20' + _0x30dfa8(_0x543936._0x52aef4) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x43c9b0) + _0x30dfa8(_0x543936._0x46141e) + '\x20\x20\x20\x20animat' + 'ePreview()' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20}\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20};\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x215fef) + '\x20\x20\x20\x20\x20charI' + _0x30dfa8(0x1c0) + 'nimData.ch' + 'aracterSpr' + 'ite.dataUr' + _0x30dfa8(0x1c4) + _0x30dfa8(_0x543936._0x43c9b0) + '\x20\x20\x20\x20\x20\x20\x20}\x0a\x20' + _0x30dfa8(_0x543936._0x3b89f2) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20up' + _0x30dfa8(0x301) + 'splay(anim' + 'Data.sprit' + 'esheetFile' + ');\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0xcd6) + _0x30dfa8(0xceb) + '{\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'isAnimatin' + _0x30dfa8(0xbf4) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20an' + 'imatePrevi' + 'ew();\x0a\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x5d2eb7) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '}\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20};\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0xb54) + _0x30dfa8(0xd17)) + ('ner\x20&&\x20win' + 'dow.opener' + '.ImageMana' + 'ger)\x20{\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x5d4516) + _0x30dfa8(_0x543936._0x51a401) + 'pBitmap\x20=\x20' + _0x30dfa8(0xd17) + _0x30dfa8(_0x543936._0x4b8ac9) + 'anager.loa' + 'dPicture(a' + 'nimData.sp' + _0x30dfa8(0x1f9) + 'ile);\x0a\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + _0x30dfa8(0x5a0) + 'if\x20(tempBi' + 'tmap\x20&&\x20te' + _0x30dfa8(_0x543936._0x27357c) + 'url)\x20{\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x7a8ff9) + '\x20\x20\x20\x20\x20img.s' + 'rc\x20=\x20tempB' + 'itmap._url' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20}\x0a\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20\x20\x20}\x0a' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20docum' + 'ent.addEve' + 'ntListener' + _0x30dfa8(_0x543936._0x2ce6e8) + 'function(e' + 'vent)\x20{\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20co' + 'nst\x20modal\x20' + '=\x20document' + '.getElemen' + 'tById(\x27lib' + _0x30dfa8(_0x543936._0x122524) + ');\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20if\x20(eve' + 'nt.target\x20' + '===\x20modal)' + '\x20{\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20clo' + _0x30dfa8(_0x543936._0x20c5e4) + _0x30dfa8(_0x543936._0x31ecaf) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20}\x0a\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20});\x0a\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20function' + '\x20removeAll' + 'TargetSpri' + 'tes()\x20{\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20co' + 'nst\x20sprite' + 'Count\x20=\x20Ob' + _0x30dfa8(0x599) + 's(libraryA' + 'nimations)' + '.filter(an' + 'im\x20=>\x20anim' + '.character' + _0x30dfa8(_0x543936._0x1323ff) + 'ngth;\x0a\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20' + _0x30dfa8(0x5a0) + _0x30dfa8(_0x543936._0x713ca2) + '(spriteCou' + 'nt\x20===\x200)\x20' + 'return;\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20' + _0x30dfa8(_0x543936._0x567827) + _0x30dfa8(_0x543936._0x58be9c) + _0x30dfa8(_0x543936._0x48780e) + 'Count\x20=\x200;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20for\x20(cons' + _0x30dfa8(0x503) + _0x30dfa8(0x29a) + 'f\x20Object.e' + 'ntries(lib' + 'raryAnimat' + _0x30dfa8(_0x543936._0x2c00d5)) + ('\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20if\x20(ani' + _0x30dfa8(0x5e0) + 'acterSprit' + 'e)\x20{\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x20animDat' + 'a.characte' + 'rSprite\x20=\x20' + 'null;\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20remove' + 'dCount++;\x0a' + _0x30dfa8(_0x543936._0x4f1cf4) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20}\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20}\x0a\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20i' + 'f\x20(window.' + 'opener\x20&&\x20' + 'window.ope' + 'ner.remove' + _0x30dfa8(_0x543936._0x1b5bb0) + 'pritesFrom' + _0x30dfa8(0x5fa) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20windo' + 'w.opener.r' + 'emoveAllTa' + 'rgetSprite' + 'sFromLibra' + _0x30dfa8(_0x543936._0x345c7d) + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20}\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20d' + 'isplayLibr' + _0x30dfa8(0x1a4) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20function' + '\x20updateHue' + _0x30dfa8(0xd28) + _0x30dfa8(0xad5) + _0x30dfa8(_0x543936._0xc3769f) + '\x20\x20const\x20hu' + 'eValue\x20=\x20d' + 'ocument.ge' + 'tElementBy' + 'Id(\x27hueInp' + _0x30dfa8(0xaa0) + 'e\x20||\x200;\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20co' + 'nst\x20hueDis' + _0x30dfa8(_0x543936._0x3a91e8) + 'ument.getE' + 'lementById' + '(\x27hueDispl' + 'ay\x27);\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20if\x20(' + _0x30dfa8(0xc5d) + ')\x20{\x0a\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x298625) + '\x20\x20\x20\x20\x20\x20\x20\x20hu' + 'eDisplay.t' + _0x30dfa8(_0x543936._0x12b2fe) + _0x30dfa8(0xaad) + 'e\x20+\x20\x27°\x27;\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20}' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x10e) + 'tion\x20updat' + _0x30dfa8(_0x543936._0x87cf98) + '\x20{\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20trigger' + 'AutoSave()' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20}\x0a' + _0x30dfa8(_0x543936._0x321bcb) + '\x20\x20\x20\x20\x20\x20\x20fun' + 'ction\x20trig' + _0x30dfa8(_0x543936._0x2df9df) + 'e()\x20{\x0a\x20\x20\x20\x20') + ('\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20const\x20' + _0x30dfa8(_0x543936._0x4b3e76) + _0x30dfa8(_0x543936._0x42325b) + 'ment.getEl' + _0x30dfa8(_0x543936._0x403f5f) + '\x27autoSaveF' + 'ield\x27);\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20cons' + 't\x20autoSave' + 'Enabled\x20=\x20' + _0x30dfa8(_0x543936._0x15ba42) + _0x30dfa8(0x67c) + _0x30dfa8(0xa1b) + _0x30dfa8(_0x543936._0x428135) + 'x\x27)?.check' + 'ed\x20||\x20fals' + _0x30dfa8(0x551) + _0x30dfa8(0x5a0) + '\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + 'if\x20(!autoS' + 'aveField\x20|' + '|\x20autoSave' + 'Field.styl' + 'e.display\x20' + '===\x20\x27none\x27' + '\x20||\x20!autoS' + _0x30dfa8(_0x543936._0x70eec3) + _0x30dfa8(0x98b) + _0x30dfa8(_0x543936._0x1d9f23) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20c' + 'onst\x20anima' + 'tionName\x20=' + '\x20document.' + _0x30dfa8(0x943) + 'ById(\x27anim' + 'ationNameI' + _0x30dfa8(0x8c8) + 'lue.trim()' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x28aab2) + 'if\x20(!anima' + 'tionName)\x20' + 'return;\x0a\x0a\x20' + _0x30dfa8(_0x543936._0x298625) + '\x20\x20\x20\x20\x20\x20\x20if\x20' + '(window.op' + 'ener\x20&&\x20wi' + 'ndow.opene' + 'r.loadAnim' + _0x30dfa8(_0x543936._0xb0118f) + _0x30dfa8(0xb61) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20wi' + 'ndow.opene' + 'r.loadAnim' + 'ationLibra' + 'ry().then(' + '(library)\x20' + _0x30dfa8(0xbe1) + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20if\x20(libra' + 'ry\x20&&\x20libr' + _0x30dfa8(0xb98) + 'ionName])\x20' + _0x30dfa8(0xad5) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20if\x20(auto' + _0x30dfa8(_0x543936._0xe1fa26) + 't)\x20{\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x4e9d33) + _0x30dfa8(0xccf) + _0x30dfa8(0x24d) + _0x30dfa8(_0x543936._0x42496d) + _0x30dfa8(0xbf1) + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '}\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + '\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20autoSav' + _0x30dfa8(_0x543936._0x945509) + _0x30dfa8(0x824) + _0x30dfa8(0xc6f) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20saveTo' + 'Library(tr' + 'ue);\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20') + (_0x30dfa8(_0x543936._0x39fb6a) + '\x20\x20\x20\x20\x20},\x2010' + _0x30dfa8(_0x543936._0x1633cf) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x34a85d) + '}\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20});\x0a\x20\x20' + _0x30dfa8(_0x543936._0x20f1ff) + '\x20\x20\x20\x20\x20\x20}\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x88b) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20f' + 'unction\x20up' + 'dateAutoSa' + _0x30dfa8(_0x543936._0x8ebe49) + _0x30dfa8(0x2ed) + _0x30dfa8(_0x543936._0x48bd4a) + '\x20\x20\x20const\x20a' + _0x30dfa8(_0x543936._0x316ee4) + 'ld\x20=\x20docum' + 'ent.getEle' + 'mentById(\x27' + 'autoSaveFi' + _0x30dfa8(_0x543936._0x4efc01) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20const\x20a' + 'nimationNa' + 'me\x20=\x20docum' + 'ent.getEle' + 'mentById(\x27' + 'animationN' + _0x30dfa8(_0x543936._0x377de6) + '?.value.tr' + 'im();\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x71a) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20i' + 'f\x20(!animat' + 'ionName\x20||' + '\x20!autoSave' + _0x30dfa8(0xe6) + _0x30dfa8(_0x543936._0x46141e) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20i' + 'f\x20(autoSav' + 'eField)\x20au' + _0x30dfa8(0x166) + 'd.style.di' + _0x30dfa8(0x518) + 'one\x27;\x0a\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + _0x30dfa8(0x3e3) + 'rn;\x0a\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0x5a0) + _0x30dfa8(0x12d) + _0x30dfa8(_0x543936._0x3ab450) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20if\x20(w' + 'indow.open' + 'er\x20&&\x20wind' + _0x30dfa8(_0x543936._0x21e93f) + 'loadAnimat' + 'ionLibrary' + ')\x20{\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x4127b3) + '.opener.lo' + 'adAnimatio' + 'nLibrary()' + '.then((lib' + 'rary)\x20=>\x20{' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20if\x20(l' + 'ibrary\x20&&\x20' + 'library[an' + 'imationNam' + _0x30dfa8(0x8fb) + _0x30dfa8(0x5a0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20autoSa' + 'veField.st' + 'yle.displa' + 'y\x20=\x20\x27block' + '\x27;\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x4e4dd0) + _0x30dfa8(_0x543936._0x3848ba) + 'lse\x20{\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(_0x543936._0x20c8a2) + _0x30dfa8(0x28f) + 'yle.displa' + 'y\x20=\x20\x27none\x27' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x30dfa8(0xc3d) + _0x30dfa8(0x5a0) + _0x30dfa8(0x151) + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20') + (_0x30dfa8(0x5ed) + _0x30dfa8(0x5a0) + '\x20\x20}\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20</sc' + 'ript>\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20</body' + _0x30dfa8(_0x543936._0x2617f5))), AnimationEditorWindow[_0x30dfa8(_0x543936._0xde62a5)]['close'](); const _0x594625 = setInterval(() => { AnimationEditorWindow && AnimationEditorWindow['closed'] && (clearInterval(_0x594625), disableEditorPreviewMode()); }, 0x5 * 0x1e7 + 0x2574 * 0x1 + -0x1f5 * 0x17); } } function enableEditorPreviewMode() { editorPreviewMode = !![], selectedCharacterForPreview = null, hxSetAlwaysRun(!![]); } function _0x5234(_0x50c844, _0x39854a) { _0x50c844 = _0x50c844 - (-0x170a + -0x3f5 * -0x3 + 0xbfa); const _0x363193 = _0x2d2f(); let _0x460592 = _0x363193[_0x50c844]; return _0x460592; } function disableEditorPreviewMode() { editorPreviewMode = ![], selectedCharacterForPreview = null, hxSetAlwaysRun(![]); } function handleCharacterClick(_0x44b425, _0x15b4b8) { const _0x5a5795 = { _0x490420: 0x766, _0x462391: 0x817, _0x35f7e0: 0x1da, _0xc0b7e1: 0x6ee }, _0x4011d4 = _0x30ece9; if (!editorPreviewMode || !SceneManager['_scene']['_spriteset']) return; const _0x5df4fd = getCharacterAtPosition(_0x44b425, _0x15b4b8); if (_0x5df4fd) { if ('JInJT' !== 'KTcxd') { selectedCharacterForPreview = _0x5df4fd; if (AnimationEditorWindow && !AnimationEditorWindow[_0x4011d4(_0x5a5795._0x490420)]) { const _0x17830d = SceneManager['_scene'][_0x4011d4(0xd21)]['_character' + _0x4011d4(_0x5a5795._0x462391)][_0x4011d4(0xa69)](_0x26942d => _0x26942d[_0x4011d4(0x4a8)] === _0x5df4fd); if (_0x17830d && _0x17830d['bitmap'] && _0x17830d[_0x4011d4(_0x5a5795._0x35f7e0)]['isReady']()) sendCharacterSpriteToEditor(_0x17830d, _0x5df4fd); else _0x17830d && _0x17830d['bitmap'] && (_0x4011d4(_0x5a5795._0xc0b7e1) !== _0x4011d4(_0x5a5795._0xc0b7e1) ? _0x89af27 = _0x469717 : _0x17830d[_0x4011d4(0x1da)]['addLoadLis' + 'tener'](() => { sendCharacterSpriteToEditor(_0x17830d, _0x5df4fd); })); } } else _0x2472fe['setCharact' + 'erSprite'](_0x4fc1ac, _0x581a48, _0x281f30, _0x3f1d9d, _0x57567d, _0x5a55fb, _0x43c8f6, _0xe99fd0); } } function deleteAnimationFromLibrary(_0x529efe) { const _0xdd4129 = { _0x18d97d: 0xb3d, _0x314923: 0x762, _0x169044: 0x2a3, _0x8ab48c: 0x840, _0x34fcaa: 0xbcb, _0x4b57cd: 0xc0b }, _0x25082b = _0x30ece9; if (!Utils['isNwjs']()) return; try { const _0x34fcce = require('fs'), _0x242874 = require('path'), _0x75baec = _0x242874[_0x25082b(0xade)](process['mainModule']['filename']) + '/js/', _0x2105c2 = _0x75baec + ('AnimationS' + 'olutionLib' + 'rary.json'); if (_0x34fcce['existsSync'](_0x2105c2)) { const _0x512381 = _0x34fcce['readFileSy' + 'nc'](_0x2105c2, 'utf8'); let _0x3df5b5 = JSON[_0x25082b(_0xdd4129._0x18d97d)](_0x512381); _0x3df5b5[_0x529efe] ? 'sbUqy' !== 'BASNG' ? (delete _0x3df5b5[_0x529efe], _0x34fcce[_0x25082b(_0xdd4129._0x314923) + 'ync'](_0x2105c2, JSON['stringify'](_0x3df5b5, null, 0x1c81 + -0x12bf + -0x9c0), 'utf8'), animationLibraryCache = _0x3df5b5) : (_0x334686 = !![], _0x97da29 = null, _0x34be36(!![])) : console['warn']('Animation\x20' + _0x25082b(0x4dd) + _0x25082b(_0xdd4129._0x169044) + ':\x20' + _0x529efe); } } catch (_0x27b026) { if (_0x25082b(_0xdd4129._0x8ab48c) === _0x25082b(_0xdd4129._0x34fcaa)) return 'Animation/' + _0x2e6bb0['replace'](/\.[^/.]+$/, ''); else console['error']('Error\x20dele' + 'ting\x20anima' + _0x25082b(_0xdd4129._0x4b57cd) + 'library:', _0x27b026); } } function removeAllTargetSpritesFromLibrary() { const _0xd75057 = { _0x526d80: 0x54c, _0x507b96: 0xade, _0x342bf1: 0xc10, _0x3458d2: 0x994 }, _0xc79d26 = _0x30ece9; if (!Utils['isNwjs']()) return; try { if ('YaIIq' !== _0xc79d26(_0xd75057._0x526d80)) return _0x245906[_0x4fd57c]; else { const _0x54daad = require('fs'), _0x2115e7 = require(_0xc79d26(0x367)), _0x2e15ae = _0x2115e7[_0xc79d26(_0xd75057._0x507b96)](process['mainModule']['filename']) + _0xc79d26(0x46f), _0x43e67f = _0x2e15ae + ('AnimationS' + 'olutionLib' + 'rary.json'); if (_0x54daad['existsSync'](_0x43e67f)) { const _0xf8d137 = _0x54daad['readFileSy' + 'nc'](_0x43e67f, 'utf8'); let _0x593de4 = JSON[_0xc79d26(0xb3d)](_0xf8d137), _0x226eb2 = -0x313 + 0x47 * -0x1d + 0xb1e; for (const _0x6a3f7d in _0x593de4) { _0x593de4[_0x6a3f7d]['characterS' + 'prite'] && (_0x593de4[_0x6a3f7d][_0xc79d26(0x671) + 'prite'] = null, _0x226eb2++); } _0x54daad['writeFileS' + 'ync'](_0x43e67f, JSON[_0xc79d26(0xb34)](_0x593de4, null, 0xbfd + -0x1ba9 * 0x1 + -0x1be * -0x9), 'utf8'), animationLibraryCache = _0x593de4; } } } catch (_0x3088a8) { console['error']('Error\x20remo' + _0xc79d26(_0xd75057._0x342bf1) + 't\x20sprites\x20' + 'from\x20libra' + _0xc79d26(_0xd75057._0x3458d2), _0x3088a8); } } window['removeAllT' + _0x30ece9(0xaf8) + 'esFromLibr' + _0x30ece9(0xa93)] = removeAllTargetSpritesFromLibrary; function sendCharacterSpriteToEditor(_0x17cc5b, _0x430c3d) { const _0x25f808 = { _0x137587: 0x7e9, _0x1f3e10: 0xc59, _0x22a5b1: 0x6ad, _0x27bd28: 0x6af, _0x218050: 0x756, _0x403262: 0x218, _0x5c8e8e: 0x35c, _0x59cdbe: 0x6c9, _0x117ff0: 0x35c }, _0x42a2cf = _0x30ece9; if (!_0x17cc5b || !_0x17cc5b['bitmap'] || !AnimationEditorWindow) return; const _0xed4c79 = _0x17cc5b['bitmap'], _0x250daa = document['createElem' + _0x42a2cf(_0x25f808._0x137587)]('canvas'), _0x34e513 = _0x250daa['getContext']('2d'), _0x19db39 = _0x17cc5b['patternWid' + 'th'](), _0x2d2267 = _0x17cc5b['patternHei' + _0x42a2cf(_0x25f808._0x1f3e10)](), _0x34b8b4 = _0x19db39, _0x1945bc = _0x2d2267, _0x52a1ab = $gameMap[_0x42a2cf(_0x25f808._0x22a5b1)](), _0x1d0dd1 = $gameMap['tileHeight'](); let _0x13574d = -0x1 * 0x7c8 + -0x2304 + -0x2acd * -0x1; if (_0x430c3d['_priorityT' + 'ype'] !== undefined) switch (_0x430c3d['_priorityT' + 'ype']) { case 0x463 * -0x6 + -0x26ba + -0x2 * -0x2086: _0x13574d = 0x229 * 0x11 + -0x22e2 + -0x1d3; break; case 0x198e + -0x1e9e + 0x511: _0x13574d = -0x12ce + 0x1865 + -0x592; break; case 0x73 * -0x1a + -0x391 + 0xb * 0x163: _0x13574d = -0x1c80 + -0x1 * -0x148b + 0xe3 * 0x9; break; default: _0x13574d = 0xd02 * -0x3 + 0xa65 * -0x1 + 0x3170; break; } else _0x13574d = -0x437 + 0x89 * 0x2b + -0x12c7; let _0x1beffa, _0x1b136a; if (_0x17cc5b[_0x42a2cf(_0x25f808._0x27bd28) + _0x42a2cf(_0x25f808._0x218050)]) _0x1beffa = 0x2161 + -0x1ec7 + 0x6f * -0x6, _0x1b136a = 0x90c + 0x127d * -0x1 + 0x971; else { const _0x43d459 = _0x430c3d['_character' + _0x42a2cf(_0x25f808._0x403262)] || 0x2 * 0xbc5 + -0x1ab5 + 0x1 * 0x32b, _0x24fca2 = _0x430c3d['_frames'] || 0xabf + -0x3 * -0x7db + 0xb6f * -0x3, _0x50e4da = _0x43d459 % (-0x1 * -0x84f + -0x250 * -0xb + -0xb * 0x311) * _0x24fca2, _0x25cc85 = Math['floor'](_0x43d459 / (-0x71 + 0x1 * -0x214b + 0x21c0)) * (0x6 * -0x5ab + 0x686 + 0x1b80); _0x1beffa = _0x50e4da * _0x19db39, _0x1b136a = _0x25cc85 * _0x2d2267; } _0x250daa[_0x42a2cf(_0x25f808._0x5c8e8e)] = _0x19db39, _0x250daa[_0x42a2cf(0x384)] = _0x2d2267; const _0x374687 = document['createElem' + 'ent']('canvas'), _0x474f28 = _0x374687[_0x42a2cf(_0x25f808._0x59cdbe)]('2d'); _0x374687[_0x42a2cf(0x35c)] = _0xed4c79[_0x42a2cf(_0x25f808._0x117ff0)], _0x374687[_0x42a2cf(0x384)] = _0xed4c79['height'], _0x474f28[_0x42a2cf(0x86a)](_0xed4c79['_canvas'] || _0xed4c79['_image'], -0x885 + 0x1 * 0x8e9 + -0x19 * 0x4, 0x335 * -0x1 + -0xc92 + 0x7 * 0x241), _0x34e513[_0x42a2cf(0x86a)](_0x374687, _0x1beffa, _0x1b136a, _0x19db39, _0x2d2267, -0x163b * -0x1 + -0x71 * -0x10 + -0x1d4b, -0x1e72 + 0x2378 + -0x506, _0x19db39, _0x2d2267); const _0x57ffc0 = _0x250daa['toDataURL'](); AnimationEditorWindow && !AnimationEditorWindow['closed'] && AnimationEditorWindow['setCharact' + 'erSprite'](_0x57ffc0, _0x19db39, _0x2d2267, _0x34b8b4, _0x1945bc, _0x52a1ab, _0x1d0dd1, _0x13574d); } function getCharacterAtPosition(_0x39798d, _0x96ba96) { const _0x4b9c48 = { _0xd5fbb5: 0x436, _0x14544b: 0x436, _0x19023a: 0x4a8, _0x57886e: 0x35c, _0x4c0f27: 0x909 }, _0x219d2c = _0x30ece9; if (!SceneManager[_0x219d2c(_0x4b9c48._0xd5fbb5)] || !SceneManager[_0x219d2c(_0x4b9c48._0x14544b)]['_spriteset']) return null; const _0x47b669 = SceneManager[_0x219d2c(_0x4b9c48._0xd5fbb5)]['_spriteset'][_0x219d2c(_0x4b9c48._0x19023a) + 'Sprites']; for (let _0x24bdf7 = _0x47b669['length'] - (0xf69 + -0x10c3 + 0x15b); _0x24bdf7 >= 0xca * -0x7 + -0x30 * 0xae + -0x202 * -0x13; _0x24bdf7--) { if ('SOPfa' === 'SOPfa') { const _0x2c7217 = _0x47b669[_0x24bdf7]; if (!_0x2c7217['_character']) continue; const _0x22f8b0 = {}; _0x22f8b0['left'] = _0x2c7217['x'] - _0x2c7217['width'] / (-0x1e25 + -0x22c7 * -0x1 + 0x8 * -0x94), _0x22f8b0['right'] = _0x2c7217['x'] + _0x2c7217[_0x219d2c(_0x4b9c48._0x57886e)] / (-0xaf2 + -0x1a8e + 0x2582), _0x22f8b0['top'] = _0x2c7217['y'] - _0x2c7217['height'], _0x22f8b0['bottom'] = _0x2c7217['y']; const _0x2d9b1d = _0x22f8b0; if (_0x39798d >= _0x2d9b1d['left'] && _0x39798d <= _0x2d9b1d['right'] && _0x96ba96 >= _0x2d9b1d[_0x219d2c(0x4f4)] && _0x96ba96 <= _0x2d9b1d['bottom']) return _0x2c7217['_character']; } else _0x5821c4[_0x15b1ab]['characterS' + _0x219d2c(_0x4b9c48._0x4c0f27)] && (_0x1a5cf5[_0x229d08][_0x219d2c(0x671) + 'prite'] = null, _0x4bcd7b++); } return null; } let _hxAlwaysRun = ![]; function hxSetAlwaysRun(_0x58a7f5) { _hxAlwaysRun = _0x58a7f5; } if (Object['getOwnProp' + _0x30ece9(0x952) + 'ptor'](document, _0x30ece9(0x9d1))?.[_0x30ece9(0xcc7) + 'le'] !== ![]) { const _hxOriginalHasFocus = document[_0x30ece9(0x9d1)]['bind'](document); Object['defineProp' + 'erty'](document, 'hasFocus', { 'value': function () { return _hxAlwaysRun || _hxOriginalHasFocus(); }, 'writable': ![], 'configurable': !![] }); } window[_0x30ece9(0x225) + _0x30ece9(0x2f6) + 'ary'] = getAnimationFromLibrary, window['saveAnimat' + _0x30ece9(0x5ac) + 'ry'] = saveAnimationToLibrary, window['loadAnimat' + 'ionLibrary'] = loadAnimationLibrary, window['deleteAnim' + 'ationFromL' + _0x30ece9(0x2ac)] = deleteAnimationFromLibrary, window[_0x30ece9(0xef)] = _hxPluginMeta; function _0x2d2f() { const _0x3dad37 = ['alue)\x20||\x200', 'ttDD4OPP1h', 'erPriority', '\x20\x20\x20\x20\x20\x20\x20\x20\x20-', 'fAR4uvv3FS', 'rDrawWidth', 'nuePsCmoYa', 'UJrHfk9oou', 'ar(--accen', 'Od+6x+ILyW', '1heWGE+XLw', '\x20=\x20Math.mi', 'iVKXaioL5F', 'IACAHNZlIU', 'ht:\x20120px;', 'e;\x22>\x0a\x20\x20\x20\x20\x20', '\x20\x20\x20\x20\x20\x20if\x20(', '&&\x20animati', 'gin-bottom', '\x20\x20\x20\x20\x20\x20\x20inp', '\x202,\x20-final', 'FileSystem', 'ext);\x0a\x20\x20\x20\x20', '9;\x0a\x20\x20\x20\x20\x20\x20\x20', '(--mono);\x0a', 'if\x20(openin', '\x20\x20font-siz', '8M8hq22uPy', 'document.g', 'ry)\x20{\x0a\x20\x20\x20\x20', '\x20progress\x20', 'const\x20canv', 'DosKINAonX', 'jvfLoONgEa', '15s,\x20backg', 'Ms++onQU0/', 'ionNameInp', 'lign:\x20cent', 'KnlAQyUsyD', 'wScale\x20=\x20(', 'OYJJA9auwB', 'Lvvp3ZUX6d', 'Vt+RRt8GKX', 'l\x20=\x20docume', '=\x20g2\x20*\x20255', ')\x22\x20class=\x22', 'eHV6LP2RTK', 'WDKwsHSeZk', 'nimData.bl', ').value\x20=\x20', 'VyWrCrhE6n', 'g4j28J2n8i', '\x20=\x20parseIn', 'ChMAoPQCqG', 'RqLpVZ9Y5X', '9jR/UlK4tW', 'M35WTgPLuB', 'OKAeypSPDR', 'Image(bloo', '\x22>\x0a\x20\x20\x20\x20\x20\x20<', '>\x0a\x0a\x20\x20<div\x20', 'T3aITNIPnj', 'mp2dCRCfDw', 'qcz9ZMb7j7', 'x5VfiXw7dA', 'eubnYtJOpe', 'ius:\x20var(-', 'sdxjPyX6vj', 'r1eNCyXQ2j', 'pCtx\x20=\x20tem', 'AEwVnGE7aC', 'x\x20dashed\x20#', 'ght\x22>Scale', '\x20finalScal', 'HCCMVNEMlk', 'tWUB6jMSNu', '\x20charX,\x20ch', 'HKArTNt06k', 'E8lmFrxhex', 'st\x20modal\x20=', 'gin-top:\x201', 'ipVertical', 't(document', 'wk//zK5U+8', 'ary[animat', '\x20charX\x20=\x20(', 'sO/uT408F+', '\x20=\x201;\x0a\x20\x20\x20\x20', 'fACr5PyOdI', 'ffsetXInpu', '-gradient(', 'Ik/YtfrLKZ', 'A97lepjury', 'WIhs+A3chI', '\x20\x20\x20\x20\x20docum', '\x20\x20\x20\x20\x20\x20\x20<la', 'yNQU7a53BZ', 'v>\x0a\x20\x20\x20\x20\x20\x20<', '4dUEGQr3lL', 'ta.offsetX', 'kO7239h7bo', 'ta[i\x20+\x201]\x20', 'nvasOffset', 'xt2n71ee89', ')</label>\x0a', 'onInput\x27)?', 'jizRJBlkDB', 'mYLTCrN7ti', 'n6xuGQ+NqG', 'OMaUzYOUKt', 'utGpuVlYlh', 'let\x20charac', 'erseCheckb', '7su6+U1fNo', 'd=\x22animati', '/h2>\x0a\x20\x20\x20\x20\x20', 'ragOffsetX', '\x20\x20\x20functio', 'style=\x22dis', 'L2kHUz4OaV', 'STtqV4xOLK', 'lbpnN/Pjx3', 'hueRadians', 'AxxeICVeAr', 'AnimationP', '0Ac3/s1Emr', ')\x20!importa', 'Path\x20=\x20awa', 'flex;\x20alig', ':\x2010px\x2012p', 'bWNkQQZs4B', 'k+YeMNvvKE', 'dius:\x2020px', 'vZkA2kZUTh', 'lay:\x20block', 'rSHAv', 'turn\x20p\x20+\x20(', 'jx1JRCyayN', '0\x22\x20max=\x2236', 'n-top:\x2015p', 'otationDis', 'EIPcXMDwDe', 'e</option>', 'm:\x208px;\x0a\x20\x20', '\x20\x20\x20<input\x20', 'MQr8TKDCGc', 'hFVs4EiNK5', 'sRueBOjqCg', 'OUUDIia6vb', 'VIXZO5l9P3', 'voby12CK9O', 'jDuRnsX5TM', 'gfRTlcxhC3', 'th4tn4dczC', 'R/Zg8mLA97', 's1VLKV1ril', 'Q8z2G0oYSj', '=>\x20{\x0a\x20\x20\x20\x20\x20', 'eight,\x200,\x20', 'lkzr47B1qH', 'ius-sm);\x0a\x20', 'YHYTOFI9x+', 'XhHopWYNQm', 'd\x22>\x0a\x20\x20\x20\x20\x20\x20', 'inerWidth,', 'lay:\x20flex;', 'lementById', '\x20\x20\x20\x20\x20\x20\x20dis', 'wHeight\x0a\x20\x20', '\x20-\x20max\x20-\x20m', '8fjM/SMjLy', '\x20onchange=', 'gress;\x0a\x20\x20\x20', 'Timeout);\x0a', '0%;\x0a\x20\x20\x20\x20\x20\x20', 'ut[type=\x22c', 'g\x20=\x20true;\x0a', 'hdr33oM7td', 'P+E42NikX/', '<\x20data.len', 'S4dw7v+sEI', 'min=\x221\x22\x20ma', 'mkdirSync', 't\x20frameWid', '</div>\x0a\x20\x20\x20', 'imData.ran', 'srik5WicZe', '4sQaznPP2P', '?.value)\x20|', 'veVisibili', '\x20\x20\x20\x20\x20if\x20(t', 'c02DXmyyN4', 'rRzAuW5h+r', 'mpositeOpe', '\x20\x20\x20\x20\x20\x20\x20<op', 'hingEnable', 't:\x208px;\x22>\x0a', 'elect:\x20non', 'JQhSxJtZjv', 'tion\x20from\x20', '14430GSTfEj', 'atm5NgYKjf', 'g0jMQXvjJo', '5\x20?\x20l\x20*\x20(1', 'ving\x20targe', '\x20\x20\x20.librar', 'iaiTDzZtSl', 'cent-soft:', 'const\x20anim', 'GBP2gWXjv9', 'F/cks/nAj3', 'bglLhsMShM', '+KtWzhSxfP', 'ipX\x20=\x20Math', 'Ctx\x20=\x20bloo', '\x20border-ra', '9KMt7DayfJ', 'VPbYNdmICt', 'aQQWwEJ5uc', 'xIIERSMCyT', 'w1FDln132U', '\x20\x20\x20\x20\x20trigg', 'YY4XqWGPA6', 'RQEFKIxVr6', '\x20\x20box-shad', 'c8f+wbian8', 'WTAwSpJNe2', 'lass=\x22fiel', 'dth,\x20frame', '\x20bloomCanv', '2TcfqLi8Fg', 't\x20finalSca', '6RWKIigUcD', 'tImageData', 'jqsLz2r+ln', 'f\x20(animati', 'Uksf27PCek', 'Xasev7b6v6', '\x20=\x20s\x20=\x200;\x0a', 's;\x0a\x20\x20\x20\x20\x20\x20\x20', 'Helper', 'nimData.ch', '<input\x20typ', '\x20\x20\x20\x20\x20\x20back', 'y528TsbMqy', 'offsetYInp', 'Height\x20-\x204', 'mageData\x20=', '\x20break-wor', '\x20\x20\x20\x20\x20\x20}\x0a\x20\x20', 'eTileHeigh', 'in)\x20:\x20d\x20/\x20', 'pohREZNykW', '/uZd3Pac+c', '7CU71GN5N/', 'arHeight)\x20', 'bo7Zz4nbY3', 'tyle=\x22font', '54197Unjc1', '3ijUXt9aPN', 'rEnRulOxDb', 'o3mIlnp3AP', 'rsrCt3fKLg', '\x20\x20\x20\x20\x20\x20\x20if\x20', 'H6B4sbzsPq', 'qeaQY2Fzrj', 'ing)\x20{\x0a\x20\x20\x20', 'FDAnTm/t78', 'odFTlt3k9L', 'el>\x0a\x20\x20\x20\x20\x20\x20', 'number\x22\x20id', 'mOuhfQjtCQ', 'UovKoZbaHN', 'f/NktvX+qQ', '\x20\x20\x20\x20\x20\x20\x20\x20\x20b', 'ed\x20||\x20fals', '9b0k/U4wDD', 'ght', 'as.width\x20=', '\x20\x20mask-ima', '\x20\x20\x20\x20\x20\x20\x20\x20co', 'hueDisplay', 'ffsetY;\x0a\x20\x20', '\x20type=\x22ran', 'se\x20load\x20a\x20', '\x20\x20const\x20co', '6ffTU/7Jpx', 'Wscs2zTPTP', '5nxv5EBzpH', '3mY95nK3pg', 'RglEh2HdOF', 'eCheckbox\x22', 'pUQacoYcYc', 'pqISt0KtDx', 'Xec81J6nT9', 'nst\x20random', 'rface-2);\x0a', 'onerror', '\x20\x20\x20\x20\x20\x20\x20bor', 't(()\x20=>\x20{\x0a', 'iCk00ek0Go', 'omLibrary(', '\x20\x20<input\x20t', '\x20\x20\x20\x20\x20\x20\x20blo', '\x20let\x20chara', 't\x20finalRot', 'f\x20(zIndexS', 'U47+6lKA9F', '\x20\x20\x20width:\x20', 'IhBnEY4bkB', 'f5+Zo7e2ja', 'racterSpri', 'FE3KnfbErp', 'F2YPSCwlhZ', 'Y);\x0a\x20\x20\x20\x20\x20\x20', 's\x20=\x20parseI', '\x20{\x0a\x20\x20\x20\x20\x20\x20\x20', '\x20\x20\x20\x20\x20justi', '\x20flex;\x20ali', '\x20\x20\x20\x20gap:\x201', 'n/d6gqQIGC', 'g/VkeFmU6t', '\x20<\x202/3)\x20re', 'Fbwu6Gm4Yv', 'XdgLMkkKoG', 'DqGgCNBtKx', '()\x22>\x0a\x20\x20\x20\x20\x20', 'cterSprite', 'TekEF2HnPf', 'round:\x20#3a', '\x20(q\x20-\x20p)\x20*', 'g:\x207px\x2014p', 'HnPfTVzof1', '\x20\x20\x20<label>', 'g\x20=\x20data[i', 'g2zhrnhgvA', 'mation\x20===', 'J3lOP3P4yq', 'pMqoi', '47+h9uaoQn', 'p\x20+\x20(q\x20-\x20p', 'nsparent;\x20', 'Mc5ZItWmUT', 'x9WHfyoSZC', 'jUjIt1E09A', 'OatQYLOiUZ', 'JOLFwCAGnF', '\x20\x20\x20\x20\x20\x20\x20\x20<i', 'reviewCanv', 'eMHhA6eAkW', 'wmCIhq6c7C', 'OFB1UBzxg2', '600;\x0a\x20\x20\x20\x20\x20', 'q1iXpYdkPY', 'dNmfFNAFbT', '/7f8Q2SdP0', 'ibrary()\x22>', 'ctoW3ZFMxN', 'st\x20offsetY', 'AYoKC6Wqe+', '\x20\x20display:', '.getElemen', 'GYz1haX9nk', 'dUCKNmXfjY', 'zipd+ankUq', 'Animation\x20', 'se\x20if\x20(ope', 'DhpIwRxfvR', 'pjBqpmCqZi', '3zoKwRgJRV', 'WaCq3/lx+A', '\x0a\x0a\x20\x20\x20\x20<div', '\x20\x20\x20\x20\x20funct', '\x20\x20const\x20fr', 'jHj5eW1BCH', 's=\x22info-te', 'value=\x221\x22\x20', 'margin-top', 'Fd6Lvl7z+u', '2Jc1LqlmRF', 'label>\x0a\x20\x20\x20', 'hover\x20{\x20op', 'BORw0KGgoA', 'iewCanvas\x20', 'YgRlP0ZngO', 'teElement(', 'Url)\x20{\x0a\x20\x20\x20', 'configurab', 'tpyZNd+YHL', 'heckbox\x22\x20i', 'PHI6rNwpoS', 'LAQtd/2m6b', 'T/eNzIlhQ3', 'wMS8RSMCm2', 'on\x20value=\x22', '\x20\x20\x20\x20\x20\x20\x20\x20\x20c', '\x20onCanvasM', 'D2/jo2sais', 'ById(\x27rand', 'Id(\x27blendM', 'wNYvHMzEfZ', 'BSEoP5pMEh', '\x20\x20if\x20(!isA', 'IHTZwRIur4', 'drawWidth,', 'CuASjLxgGR', 'word-wrap:', 'ntRandomRo', 'e:\x2010px;\x0a\x20', 'uWWZuiUPSI', '\x27offsetXIn', ')\x20=>\x20loadA', 'ue)\x20||\x20100', 'inalWidth\x20', 'J2d5htWCiN', 'KPTJXVUoal', 'Ima8v85UMe', 'AnimationL', '\x20const\x20ble', 'Jci/FU5BpJ', 'rg+Bwk2aGI', 'E96frgDcGN', '8zO0FnU46e', 'nimating)\x20', 'finalFlipX', 'UtaIu8ZWxv', 'ry-item-na', 'dx/m9gPXPE', '1Vqs6ZIrVE', 'ew()\x22>\x0a\x20\x20\x20', '//////////', 'le-box:hov', '>Offset\x20X<', 'prite.data', 'qvJ86T+qPY', '8v+ejMkcI3', 'vr9Ez3Onwq', 'eight);\x0a\x20\x20', '>\x0a\x20\x20\x20\x20\x20\x20<s', '3Q04Xg+PJ8', 'JDp4HT6QcO', '(\x27Please\x20e', 'XuDKbCyaqn', '7c/NbDf7o+', 'ht\x20*\x20final', 'iakYeRbzOA', '/Q+JiCAiay', 'tagmEHFiUp', '=\x22none\x22\x20se', '4,\x202),\x2016)', 'imating\x20=\x20', '4gS4bB0Qzm', 'z1wBlr3wkp', 'arDrawHeig', 'NNe74l1q3W', 'umns:\x20pars', 'e\x20=\x20animDa', 'YVSyqbDjRn', 'id;\x20grid-t', 't\x20animY\x20=\x20', 'LIPkU6goib', 't-family:\x20', 'ght\x0a\x20\x20\x20\x20\x20\x20', 'gAnimation', 'nfVvfzHSnA', 'G8PAWpEHSW', 'e)\x20||\x200;\x0a\x20', 'window.ope', 'BTGvxKrDKY', 'ync', 'rder:\x201px\x20', 'h8+xu/Hv5R', 'ress\x20:\x201\x20-', 'put\x20type=\x22', 'Library.js', '\x20zIndexVal', 'TfM2hSQFX7', '_spriteset', 'l\x20Settings', 'INMprXMfMu', 'alue=\x22#FFF', '\x20\x20\x20\x20previe', 'Canvas.get', 'Pe3jptBeGR', 'Display()\x20', '\x20parseInt(', 'awHeight\x0a\x20', '\x20id=\x22endin', '2SFjdKZ2wo', 'mH4OkKKbNs', 'MzdFPF/ZLl', 'tn\x20=\x20docum', '(currentSp', 'yZWFw9dEDN', 'TFzZYskopS', 'cT/2Han/B5', 'CBQIEoggLQ', '\x27Delete\x20an', 'LBeF5YSdV+', 'ntById(\x27bl', '\x20/\x20(2\x20*\x20Ma', '+LUTms/k9y', 'tal</span>', 'AgaMrSAJpB', 'ZkfnPYhGRZ', 'yle=\x22paddi', '\x20\x20\x20\x20input[', '\x20character', '\x20\x20previewC', 'Field)\x20{\x0a\x20', 'FVsL4Ue6YE', '+70xEzQg2J', 'div\x20class=', 'jMhqMIEVIw', 'Lcs3P0Pqjx', '5c6WjAwAaV', '\x20\x20let\x20isAn', 'ound(delta', '_hxAnimSig', 'x\x20=\x20tintCo', 'checked\x20||', '\x20\x20\x20\x20let\x20ra', '5Sp1anMWcj', 'MxcMsMmz51', 'h3ScM/DJHb', '\x20&&\x20animat', 'ywkq+PS/DK', 's89cgezgZK', 'CBGw6BKrMI', 'uBPKW2SKxu', '=\x22field\x22>\x0a', 'ditorOffse', 'ionName);\x0a', '9A0MAxYUBv', 'Xn4Qvx5fhG', 'T4IJ+q5m7+', '9r1tf7HI4s', 'P20kfNCa7z', 'MKIniBjNVb', 'cN6+VTv7ww', 'i3aYUCTvAV', '\x20class=\x22pr', 'FKGFQGDtyA', '5%,\x20#0d221', 'g+cK1FIWWY', 'B9eMb0yc+A', '8+M/25/MNw', '3AS77h7RoZ', 'Data.rotat', '\x20\x20\x20\x20\x20\x20func', '6uWszue0H1', 'pVerticalC', '\x20<div\x20id=\x22', 'entRow\x20*\x20f', 'OkpYVGo4zi', 'osition:\x20f', 'h\x20(max)\x20{\x0a', '8VHEZBn', 'w/JluqWss7', 'ztyF4Svc0x', 'ursor:\x20poi', 'awHeight)\x20', 'mationFram', 'div>\x0a\x0a\x20\x20\x20\x20', 'DraggingAn', '\x20\x20\x20\x20\x20backg', 'Pncru9jY7P', 'CsABHn441r', '\x20\x20\x20backgro', '72357yBQFiP', 'round</opt', 'bxOA7zo2yI', '=\x20Math.max', 'pictures', '.info-text', 'd(\x27zIndexI', '\x20Date.now(', '+GJ5NKGIFc', 'aiKINXBeW8', 'RTWY5WHKhb', '}\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'v/sr1H52E0', 'r(--surfac', 'wdXvwWA9Kd', 'ta.data;\x0a\x20', 'caSxh9yGmP', 'fjw4Q/6wGo', 'Z9SgdvKV4V', ':\x20(animDat', 'SaveTimeou', 'th,\x20finalH', 'th:\x20100vw;', 'St1K50Semp', '\x20\x20\x20\x20.field', 'mvpFBCdWgQ', 'D85dbhtqGs', 'NTQgXJib+i', '66NrFH2igt', '0/K+/NisTx', '\x20=\x20l;\x0a\x20\x20\x20\x20', '\x20transpare', 'S6jXW0GIQI', 'rImg,\x20char', '6Non8qvwno', '\x20\x20\x20\x20\x20\x20\x20\x20dr', 'ity\x20(0-255', 'usZ8M13wRh', 'A925jDCwkn', 'on\x20===\x20\x27fa', 'vViebDfezK', 'ggq9iU2FAY', '5sOcJcP8iC', 'FN0Vt2oC/X', 'sW23dLTmB5', '\x20offsetXIn', 'Hneix7FY/5', '\x20\x20\x20\x20\x20\x20\x20\x20})', 'ATvINPzTvJ', '2;\x0a\x20\x20\x20\x20\x20\x20\x20', '\x20\x20\x20\x20\x20\x20\x20\x20cu', 'h8/Y41m2zn', 'G5uNbfY2Y7', '\x20\x20\x20\x27Multip', 'mLibrary(a', 'CompositeO', '\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20', '\x20\x20scaleY\x20=', 'n.title\x20=\x20', 'blurredCtx', '4hEIeu8DN0', '\x2015,\x0a\x20\x20\x20\x20\x20', '\x20\x20\x20\x20\x20</div', '\x20(blurAmou', '5Ubvso80AM', 't266jjnfQT', 'ry-modal\x22>', 'imationDur', 'toSaveFiel', 'xaJH114PZx', '--surface-', '\x20\x20\x20\x20\x20<span', 'UIgPWzVPaB', '\x20\x20\x20\x20\x20\x20inpu', '9JLHpROXfS', 'eteBtn);\x0a\x20', 'iv>\x0a\x20\x20\x20\x20<d', 'pdatePrevi', 'DK+KARlIaG', 'DV45MP4n/H', 'gj2JUQoQSn', '\x20\x20\x20\x20<div\x20s', '3);\x0a\x20\x20\x20\x20\x20\x20', 'anvas\x27);\x0a\x20', '/oEIcWwngL', 'lipHorizon', 'wk/8p6zjmr', 'cursor:\x20po', 'eteBtn.inn', 'jKfP7Mtva9', 'UvK+vEHVpf', 'Input\x27).va', 'icalCheckb', 'x;\x0a\x20\x20\x20\x20\x20\x20\x20', '\x22\x20checked\x20', 'rentRandom', '0,\x202),\x2016)', 'X3l32YPxqH', 'i4/lzpw86u', 'w2aow8YaEW', '\x20\x20\x20align-i', 'wvD4fto/OQ', 'CTJV4BZBl0', 'g:\x2018px;\x0a\x20', 'VIfXWVFbiU', 'bMxrKv8EdI', '\x20\x20\x20\x20\x20\x20\x20<in', '\x20\x20\x20\x20\x20color', 'w+qJt1ovfQ', 'Hy+oFGeMUF', 'EPkkmF9EYg', '\x20rgba(255,', 'ta.rotatio', '2026\x20by\x20Sa', 'Progress\x20/', '\x20=\x200;\x0a\x20\x20\x20\x20', 'pX;\x0a\x20\x20\x20\x20\x20\x20', '\x20\x20.library', 'AgcHOryK5P', 'ctiveScale', 'RY2KC3PF6K', 'Sx4V0YBHaz', 'put\x20=\x20docu', 'ner.ImageM', 'Z/9YPO77s6', '\x20\x20\x20\x20.save-', '\x20\x20\x20\x20charac', '\x0a\x20\x20\x20\x20\x20\x20<la', '\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20', 'DUg2jzvM5L', 'ary();\x0a\x20\x20\x20', '\x20\x20\x20\x20\x20if\x20(a', '+GmFHmhYp9', '\x20\x20\x20\x20<label', 'put\x27);\x0a\x20\x20\x20', 'Ovzgf16ozT', 't\x20=\x20animDa', '\x20blurCtx.f', '\x20\x20\x20\x20\x20\x20\x20<sp', 't\x27)?.value', '\x20\x20\x20\x20\x20\x20<inp', '\x27flipHoriz', 'm)\x20=>\x20{\x0a\x20\x20', 'animationF', 'ue)\x20||\x200;\x0a', 'an>Randomi', 'd\x20button\x20{', 'tById(\x27fli', '\x20(r\x20*\x20tint', 'y-item:hov', 'Zw4mC0FK7G', 't\x20isPlayin', 'gStartX;\x0a\x20', '\x2011px;\x0a\x20\x20\x20', 'Helper)\x20{\x0a', 'yVte3ohGcR', '\x20false;\x0a\x20\x20', 'vpLRk', 'mg.src\x20=\x20a', 'NeXniZl2RO', 'GsI8tSt/sx', 'eld\x20=\x20docu', 'l;\x0a\x20\x20\x20\x20\x20\x20\x20', 'XgL1gjwFg5', 'ctx\x20=\x20canv', 'ById(\x27colu', '\x22flipVerti', 'ueRadians\x20', 'Y\x20=\x20false;', 'G2UAJEP+Av', 'Lynv3VX4Pm', '\x20/\x20rows;\x0a\x20', '\x20-\x20charDra', 'ue=\x221\x22>1\x20-', 'nimData.ra', 'n3pj5uf3jz', 'ingAnimati', 'punh/Pue+A', 'IaeMDjAQ/I', '?.checked\x20', '3M0ZueAPZL', 'ax\x20+\x20min);', 'head>\x0a\x20\x20\x20\x20', '0Td+dma2XM', 'bitmap', 'Has/BID4+H', '0;\x20}\x0a\x0a\x20\x20\x20\x20', 'MXcRhyYuxh', '4VzpiuA877', 'ha\x20=\x20((ani', '/MeFusko+e', 'YcJBNCW/Fd', 'eviewOffse', 'lYOJt+8zvx', 'eight;\x0a\x20\x20\x20', 'style=\x22wid', 'HGBnbcpWzA', '2d\x27);\x0a\x20\x20\x20\x20', 'erSprite\x20&', 'ldmbgOEma4', 'QLAoZKDioZ', 'turn;\x0a\x20\x20\x20\x20', 'YX8Bx31xKL', 'WWu7/FRQIT', 'BJQNDESKEu', '2SdWrq/p+v', 'S3rj/wEHjH', 'Value\x20+\x20\x27°', 'oUNStREam+', 'bility();\x0a', '\x20\x20\x20\x20\x20\x20\x20\x20\x20d', '\x20\x20\x20\x20\x20body:', '/ecfwKLBmd', 'Sprite\x20&&\x20', 'o4qzObiiJB', 'ritesheetF', 'iHjZac74O9', 'gAnim\x20?\x20sc', '(applyBloo', 'ementById(', 'woVdN0Bl5g', '=\x220\x22\x20min=\x22', 'le=\x22displa', '0tI9134tUi', ',\x20transpar', 'MNWPTL+c2f', '2HwW0DdwRo', 'hEAE1hGaMS', '\x20var(--acc', 'ames\x20=\x20row', '+6XOwamDFw', '>Multiply<', 'ng:\x208px\x2014', 'HHV1KDqUdf', 'unt\x20*\x202,\x20b', '\x20const\x20cur', 'ApHaNKCUUM', '\x20||\x200;\x0a\x20\x20\x20', 'let\x20random', 'C3PtmWZHdW', 'b+q0b918u/', 'G1P6sRwTCP', 'MPvLoBo3ba', 'xeD4uAW45b', 'MRbeFx8uP9', 'h.random()', 'Index', 'y/AigU7wQl', '=\x200;\x0a\x20\x20\x20\x20\x20', 'MH3MGuNgXC', '1ggooFBY8d', 'h9fiAlXcXq', 'pFojaYyqqZ', 'VU1DqdJeiR', 'dow:\x20var(-', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20.', 'pSuex5EYdK', 'seLibrary(', 'entById(\x27r', 'getAnimati', 'RRQLg2LvAz', 'gaoMI/N1Of', '\x20\x20\x20\x20\x20\x20\x20\x20bl', 'hpDKHa0aUF', 'xgUerOnt9f', '9bEgiav1BV', '\x20-\x20<a\x20href', 'px\x2014px;\x0a\x20', '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x27', 'FIo3DNXo1f', 'YICuFCIW/a', '0rP8e/jyMe', 'koPFP9xsmr', 'lvgISASjpw', 'E+IISxwxCs', '2dvq8lfd6j', 'MvIAUjKM6l', 'sTAAALEwEA', '>2\x20-\x20Backg', 'et\x20endingA', 'xJR0tuhqh/', 'QAaViqzYCy', 'k5nTKmTCLr', 'eateElemen', '\x20\x20\x20\x20\x20borde', 'qutuzmbOHN', '8/toPyZOvq', 'Ipoy7+qZdv', 'YCywVVlw7p', 'grqAgllNQV', 'fmVue+zovN', 'oh77F2HSty', '\x20\x20\x20\x20\x20dragO', 'KodUrqtMqD', 'JblmWks0Lu', '/x0O/p9boX', '+Ubn/Guk/T', '\x20\x20\x20\x20frameH', 'vD7XW4aov5', 'learTimeou', '52TnGufrHC', 'e\x20=\x20scale\x20', 'r++;\x0a\x20\x20\x20\x20\x20', 'hter\x27,\x0a\x20\x20\x20', 'nst\x20img\x20=\x20', 'Fdc2WSWAGk', ';\x22>\x0a\x20\x20\x20\x20<d', 'rOADI9+J7A', 'nA2sxwSwlx', '8hkgoIeL78', 'EQLUhWCYcs', 'ctx.restor', '\x20\x20\x20\x20\x20\x20let\x20', '2unzkJWZQj', 'FSEKC655f8', 'lOpacity\x20/', 'IS3ESIreOv', 'Height\x20/\x202', '+Zm5O8M+f5', 'm9uPsGb7+U', '\x20\x20\x20const\x20b', '\x20\x20position', '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a', 'primary\x20{\x20', 'column\x20h4\x20', '8DlmjY8Jb4', '0.5;\x0a\x20\x20\x20\x20\x20', 'iHjs5gKwCX', 'HWnE5JGm4X', 'Nb/B6hP75H', 'xo/j112/kO', '+YJ+EcXxEl', '!currentSp', '7EaZ9y5duK', '7Fq++ywghe', 'readFileSy', '\x20\x20\x20if\x20(hue', '/8/bX9wfu7', '+VDwZTwa4F', 'sPTHz+KZe8', 'daeidzPBhL', 'miVxnBbnrK', 'E8f0uWBcUp', 'ationLayer', 'IagP2RKy+N', 'ry-item\x20{\x0a', 'tF8HyPR2sj', '2iChguF0Vw', 'parent\x2025%', 'mMj7OpE6U1', '\x221\x22\x20max=\x226', '\x22300\x22\x20onch', 'xwBZN0NKIh', 'oOS5YviYpg', 'nd:\x20#4a202', '\x20\x20randomUp', '.getContex', '\x20\x20\x20\x20autoSa', 'k074jgMmJp', 'gin-top:\x203', 'D1zW9iG9b1', 'ntById(\x27zI', 'mn-layout\x22', 'ax=\x22255\x22\x20o', 'auto\x27\x20?\x205\x20', 'veField.st', 'resolve', 'hWoPXoXrQd', 'tById(\x27blo', 'EhFxRypAr3', 'vHSgqokcHt', 'rnWIxLTnx+', '\x20black\x200%,', 'BDD3CnDol6', 'bksQ5TNkNP', 'track\x20{\x20ba', 'nimData]\x20o', 'st\x20endingA', '\x20\x20\x20\x20\x20\x20\x20win', '/hAU3g/fDu', '+PvjR26h9u', 'R32o/PNUx+', 'wHeodrgyjT', 'OY55vyKA+q', 'z+ZI57wira', 'in\x20library', 'SyQdyYnBKh', '1E2qW/aRtE', 'oQfSiHCkSf', 'elect\x20&&\x20c', '255)\x20/\x20d\x20+', 'scale)\x20{\x0a\x20', 'bzihsuOqEr', '4a4uyF0P66', 'ibrary', 'id=\x22random', '/3);\x0a\x20\x20\x20\x20\x20', '7oPNAzCx/v', 'iew();\x0a\x20\x20\x20', '&\x20tempBitm', '\x27animation', 'HYpcd3qkse', 'zJno469ane', '<\x200.5;\x0a\x20\x20\x20', 'blendModeI', 'LiJ08Syh+0', 'XqPw6egA2m', 'ionCheckbo', 'oom)\x20{\x0a\x20\x20\x20', '\x20select\x20sp', 'qjXBrG/Dp0', 'XW1QjBsYIE', 'ZPlq+f77LT', '\x2210\x22\x20max=\x22', 'Tme6syry4O', 'ext);\x20font', 'AvPqbecaxp', '\x20new\x20Image', 'ry();\x0a\x20\x20\x20\x20', 's\x20*\x20column', 'N4aht+OXzL', 'AnyJQKtRMW', 'ffsetY\x20=\x20o', 'JXXeijrsn5', 'X,\x20effecti', 'rHjtx6/SJa', 'racterImg.', 'Ax23cXnXdO', 'lOpacity\x20=', '\x20</div>\x0a\x0a\x20', 'YhkBDNmoZN', 'AkilETfQMg', 'vAjGFhCWPC', '}\x20else\x20{\x0a\x20', 'frameHeigh', '\x20\x20\x20\x20box-sh', '\x20<div>\x0a\x20\x20\x20', 'lendModes[', '-radius-sm', 'izontal;\x0a\x20', 'idth;\x0a\x20\x20\x20\x20', 'WiYOqt7vo/', 'GfrpBn5Kqx', '\x27tintColor', 'x5dZh3IUDY', 'iTPsbBZZCJ', 'nt-weight:', 'WWJx7FrffS', 'qnAkzqdCV9', '\x22display:\x20', 'eckbox\x27)?.', '7rVf70qfrX', '5vj4mSHniy', 'er.readAsD', '\x20\x20transiti', '\x20Character', 'ite</span>', '\x20255:\x0a\x20\x20\x20\x20', '+b/FZhwwUA', 'ty()\x20{\x0a\x20\x20\x20', 'nst\x20q\x20=\x20l\x20', 'hAomnhaPOE', 't(autoSave', 'wmuE+Bu5L/', '6oqc9Uyvyq', 'sedProgres', 'zju7PBzire', 'D3AOtP5g/E', 'onFromLibr', 'pVSdZfWrOC', '/\x202;\x0a\x20\x20\x20\x20\x20', '\x20\x20\x20\x20\x20\x20offs', '\x22>\x0a\x20\x20\x20\x20</d', 'AcgRLZJfXp', 'ppendChild', '9+/uFrO+/4', '5deg,\x20#061', 'e3a2f;\x0a\x20\x20\x20', 'FddBIj6mxi', 'dateFileDi', 'MzfzPRKMJV', 'AAEAdFJOU/', '0BnxMAatyS', '8H9fvbqkrb', 'ayaH5ZaLxL', 'thMuHaH/8w', 'gerAutoSav', 'OEg0SQIBW5', 'Gog9LtwTyg', 'tGgcuuEAAE', 'omEnabled)', 't)\x20{\x0a\x20\x20\x20\x20\x20', '+h5qtVr1yw', 'BdAGWYDMGu', 'Width\x20=\x20ti', 'ites\x0a\x20\x20\x20\x20\x20', 'gWIKuRk8hX', '4UQ4iPlyU2', '\x20\x20\x20\x20\x20\x20text', 'splay:\x20fle', 'JYsCTSPDQi', 'error', 'Z+SeH3SAbc', 't,\x20charact', 'arent\x20!imp', 'parseInt(d', 'FUqdLRKAMQ', 'yF91UJZy9E', '\x20=\x20realWid', 'ls1dX15dkA', ';\x20right:\x206', 'qAOmOFTaSg', 'bottom:\x201p', '7Yes/VlxyA', 'oGS3Rk0whs', 'Rotation\x20*', 'Y7kb2RKslB', 'ainerHeigh', 'MaYZ8DKuq8', 'IXof9X3KBR', 'uU+3EmheTi', '\x20\x20const\x20im', 'zYcAYEQcQj', '2PXm/ZtTjl', ')\x22>\x0a\x20\x20\x20\x20\x20\x20', '.flip\x20||\x20f', '5w3vS+jXs7', 'mWRze9u9ZZ', 'CkAi5zUPsU', 'Ctx\x20=\x20blur', 'ameHeight)', 'jd+pud1Els', '\x20-\x20Same\x20as', 'im)\x20{\x0a\x20\x20\x20\x20', '5tbvonRi3S', 'review.cla', 'value=\x22Nor', 'HM3+GDOOFw', 'lse\x20{\x0a\x20\x20\x20\x20', 'YGJ9bKL8bz', 'e:\x20animati', 'qf2Q4a4LgN', '\x200,\x200,\x0a\x20\x20\x20', 'setY\x20*\x202;\x0a', ':\x20center;\x20', '484281fKxqUT', 'WVRbXLBELZ', 'review\x20{\x0a\x20', '8Lj3LD9K+h', 'ById(\x27libr', 'lumn\x20h3\x20{\x0a', '9N0wgujDuh', 'rSpriteHei', 'nalOpacity', 'dv209fnZg1', 'CXrsAEkeNH', 'tById(\x27row', 'ter;\x0a\x20\x20\x20\x20\x20', 'RVWzIAn4xm', '1R8Bhg4/eN', 'lue)\x20||\x201,', 'xQM+LR83cn', 'li5gzfOIxT', 'DFkTgICqFo', '7M9tz2KhDK', '7brLn+rPmt', ')\x20||\x20255;\x0a', 'vSmUYB8Auh', 'PiwVx9Eaie', '7bKEfDA', 'width', 'CRC5C5Nxfd', 'r-color:\x20v', 'intColor)\x20', 'ABQtR0nF9o', '\x20\x20\x20\x20\x20curre', 'ed1yloTcJo', 'rary.json', '\x27).value\x20=', 'bEAPQHGxwl', 'ft;\x0a\x20\x20\x20\x20\x20\x20', 'path', '5WevOzOocC', 'tc2nF+FhCw', '0Tpr//+Drm', 'tyle=\x22widt', 'oundingCli', 'RaIoIqO6Gk', 'Spriteshee', 'Width\x27\x20&&\x20', '\x20max\x20-\x20min', 'o7jJDIcNNS', 'ormal;\x20mar', 'ild(canvas', 'canvas,\x20an', 'extContent', 'entX\x20-\x20dra', 'IVBAnL2QVH', 'iaULRckiqd', 'Sw8bIhjhR0', 'wxaFQ5lro8', 'zZ63HuB1YQ', '(scale)\x20{\x0a', 'EpvEW1KL1X', 'AllTargetS', 'w2Kf/kL+nS', 'KP35WuKxYP', 'uDf9iXaj3G', 'characterI', 'uLm5ZeO6dR', 'height', 'let\x20r\x20=\x20da', 'yId(\x27flipV', 'option\x20val', 'U67HKXerDh', '<div>\x0a\x0a\x20\x20\x20', '0ggrxkheY0', 'eSd92igt6L', '5jYRzqKHrX', '\x20\x20.column\x20', 'nclick=\x22op', 'e9DDTqRqDI', 'nt.getElem', '\x20\x20</div>\x0a\x0a', 'CooKIMooNA', '\x20\x20\x20\x20\x20\x20\x20h1\x20', '\x27)\x20{\x0a\x20\x20\x20\x20\x20', 'NNiiBJCjRC', 'r2\x20=\x20hue2r', '/pVA9AkLF3', 's9e0zj+bnr', '\x0a\x20\x20\x20\x20</div', 'body::-web', 'ss\x20=\x200;\x0a\x20\x20', '\x20let\x20autoS', 'cq4wwCNjEe', 't.getEleme', 'rame\x20=\x20rev', 'Db1qZNGR0v', '\x20\x20\x20\x20\x20\x20\x20\x20\x20p', 'AT8ahgSVwb', 'GPs/FzOozI', 'zCxNwbpp/b', '6lx/rv+W6g', '\x20blurredCa', '{\x20position', 'as-contain', '\x20\x20\x20\x20\x20margi', 'LD4eYLjt0N', 'l5qN7XCl2P', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20i', '\x20\x20\x20\x20\x20ctx.s', 'Ny/TTFfy+6', 'iumNbFidPu', '\x20\x20charImg.', '\x20\x20\x20\x20\x20--sha', '+d/G+jV4/1', '43oduHlz2P', 'skdiwzIbpw', 'rX\x20+\x20(char', '4z/QfHn3lk', 'ground:\x20va', '7kYFSt4AGQ', 'onst\x20data\x20', 'vIi8gl5AZy', '2,\x20finalWi', 'st\x20hue2rgb', 'c14YatLsjE', 'nt-size:\x201', 'Animation)', 'rid\x27).inne', 'gOpeningAn', '\x20\x20const\x20ed', '\x20*\x202,\x20fina', 'q1aNITd/VL', '\x20\x20\x20\x20const\x20', '\x20\x20\x20\x20\x20\x20</di', '\x20\x20\x20\x20\x20\x20<opt', 'zexGYl763u', 'vyFsVQGspE', 'Eohi+ZZhWv', 'h6WtYJIGlg', 'smM549scyD', '\x20null;\x0a\x20\x20\x20', '+RmoV1wDTD', 'xgbPPmehzW', 'img,\x20col\x20*', 'e)\x20?\x20{\x0a\x20\x20\x20', 'U2tN/h3RWy', '\x201fr\x201fr;\x20', 'onchange\x20=', 'ut.addEven', '+eIay+L9pf', '\x20\x20\x20\x20\x20\x20b2\x20=', 't\x20>\x201)\x20t\x20-', '\x20auto;\x20mar', 'rgba(0,0,0', 'ex.substr(', 'cJkK0zHdsn', '/mQKbEBwDi', 'nNyMTIu/Yg', 'view(canva', 'DMH8w37Syt', 'e78sYQ6npQ', '/ZjILrgBFg', '\x20\x20\x20\x20\x20\x20retu', '+2vnL9hyJB', 'change=\x22up', ');\x0a\x20\x20\x20\x20\x20\x20\x20', 'rv7a0onD+K', '>\x0a\x20\x20\x20\x20\x20\x20</', 'nxMGbRNk6f', 'ygumNT5krW', 'ted);\x20font', 'BLB4IFAcPc', 'false;\x0a\x20\x20\x20', 'play\x20=\x20doc', '\x20\x20}\x0a\x20\x20\x20\x20\x20\x20', 'align:\x20cen', 'V5dDGWTR89', 'Kz6bM4MQeT', '\x20\x20\x20\x20drawWi', 'EtbBBPu8BG', 'Ph+h++hZBj', '/VuL9KJeno', 'charY\x20+\x20(c', '\x201px\x20solid', 'Cb47f8Z0Hz', 'BNtTZ5wUGd', 'er;\x0a\x20\x20\x20\x20\x20\x20', 'p7meZxGtoS', '\x20\x20\x20}\x0a\x20\x20\x20\x20\x20', 'b65c/5dP/2', '1S0kiY+YBK', 'nt);\x20}\x0a\x20\x20\x20', 'Int(docume', 'BKllcIxAWq', '+Nxqq8Yw8L', 'as\x27);\x0a\x20\x20\x20\x20', 'E7bdxHL+oK', 'fVH7eEdax2', '\x20color:\x20va', 'FqDK1UzOJp', 'mao5XgJnw/', '0c+/Lh697Q', 'i3/66rStr3', 'weight:\x2060', 'Y\x20-\x20(drawH', '\x20\x20\x20\x20\x20\x20\x20\x20</', '*\x202);\x0a\x20\x20\x20\x20', 'QSH2aAU3Ni', 'RRVbXWIjdd', 'YCAgcGBv7+', 'LibraryPre', 'lue\x20=\x20anim', 'IItSAYgol7', 'QWT1Ti8Qcb', 'ange=\x22upda', 'hue\x20*\x20Math', 'p3y08gXtsp', 'qaUDgmyObi', 'onst\x20rect\x20', 'ontent\x20=\x20n', '\x20pointer;\x20', 'ghG+/RPJhL', '\x20\x20\x20img.src', '\x20Math.PI\x20/', 'awHeight\x20+', '9E1aw3ly0A', '\x20(totalFra', 't/exTzzvdq', '/p3C89flmF', 'img.src\x20=\x20', '-spacing:\x20', ';\x20i\x20<\x20data', '+8Hep5eyJT', '0.15s;\x20}\x0a\x20', 'ENGil76/Pw', '4W9Zd62ZEY', 'cjtjnypLXr', 'umnInput\x22\x20', '\x20\x20\x20\x20\x20\x20\x20ctx', 'rSzLCEUEWU', 'YnnLOBc8YF', 'muOu9WfAtj', 'vas.parent', '0y7iKOLk8Q', '\x20\x20\x20\x20\x20\x20bloo', '_scene', 'NrxLtkeaJo', '20;\x20}\x0a\x0a\x20\x20\x20', 'r-color\x200.', ')?.checked', 'ibrary()\x20{', '\x20type=\x22che', '==\x200)\x20{\x0a\x20\x20', 'ameInput\x27)', 'Sprite).le', '\x20=\x20((g\x20/\x202', 'QMp58VrFzN', 'RTPYMPlXq2', 'ElementByI', 'alCheckbox', 'UXKoFKjAg4', 'pgB6tbKEeT', 'ht:\x20600;\x0a\x20', 'Myv0zX6R/D', 's-sm)\x20!imp', '0rCjTN8DOa', ':\x20center;\x0a', 'xt\x22],\x0a\x20\x20\x20\x20', 'nRvYwZz+GX', 'y:\x20flex;\x20a', 'seeOXCXLZL', 'am6x6h1nBe', 'r:\x20var(--a', '\x20\x20\x20\x20border', 'ogress;\x0a\x20\x20', '\x20let\x20frame', 'ZpGTzCQYHW', 'v+BCSP/cnm', 'i\x20+=\x204)\x20{\x0a', 'nimationNa', 'iiv9jDuvIV', '=\x20animData', 'er;\x20cursor', 'cument.get', 'lAlpha\x20=\x20(', '\x20\x20\x20\x20\x20switc', '7QZViYSbni', 'j39VvFRIAa', 'acing:\x200.8', '\x20\x20\x20\x20height', 'aIYzAcarvs', 'pBitmap\x20=\x20', 'NyacSGqpNZ', '\x20\x20\x20\x20\x20\x20\x20\x20\x20h', 'dians\x20/\x20(2', 'nvas.width', 'GJG6ltFteN', 'e-over\x27;\x0a\x20', 'wdR1JMMSI+', 'mZyeEnsMQx', 'e-between;', 'GeC0oRDA4H', '/js/', 'ries(libra', 'ES3YPJItJt', 'ield\x22>\x0a\x20\x20<', '\x20h);\x0a\x20\x20\x20\x20\x20', 'pO7BUEChXe', '0%;\x20}\x0a\x0a\x20\x20\x20', 'hCkSWQx7MF', 'djav7xX90V', 'P+mg9N2PE9', 'a2ESkMpZKH', '\x20const\x20blu', 'm)\x20{\x0a\x20\x20\x20\x20\x20', 'tn\x20{\x20posit', '/ZMnYoYRuX', 'iJL5PKrBxQ', 'PYvShFS6G0', ':\x20none;\x0a\x20\x20', '\x20charImg\x20=', 'nBottomY\x20=', 'JCk+EcS9Ju', '\x20\x20\x20\x20\x20\x20wind', 'RYktufYq20', '+jOGkTIXJU', 'CL4X293EZf', '||\x20false;\x0a', 'un6Nnj7cE4', '\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20', '4px;\x20font-', 'BoundingCl', '\x20\x20\x20\x20\x20\x20\x20\x20\x20<', 'nvas.getCo', '3434;\x0a\x20\x20\x20\x20', '9q7ddSlhhY', 'ZYgQR7EBht', 'YGiohQJRpT', 'Czn9Ey1+Fj', '91x1wK9jFp', 'th.floor(d', 'o</option>', 'i\x20+\x202];\x0a\x20\x20', 'zxD7y8DI/Q', 'uyYng+6+jR', '\x27active\x27);', 'size:\x2039px', 'age:\x20linea', 'PDbY16LHIX', '9px\x200,\x200\x200', 'jQIe4/+DNw', '\x20\x20\x20\x20\x20\x20curr', 'YminlBdgIG', 'oUw4YCAkVM', '3XT0o60mIn', 'xYC4pOCoZK', '\x20\x20\x20\x20\x20if\x20(w', '\x20\x20\x20\x20};\x0a\x20\x20\x20', '\x20--surface', '_character', '3f30a9+Wh8', '8kkAMMEoMM', 'a.randomFl', '37L84Ktndt', 'Fducu4x30w', 'W1QCuQ6fSt', '\x201/3);\x0a\x20\x20\x20', 'bESRFUV0Ua', 'rn;\x0a\x20\x20\x20\x20}\x0a', 'const\x20blur', 'Ctx.drawIm', '/\x202,\x20-fina', 'EuuJMAXEb0', '\x20\x20\x20.field\x20', 'library-gr', 'onst\x20fileN', '\x20\x20\x20\x20\x20\x20\x20}\x20e', 'blendMode]', 'us-sm);\x0a\x20\x20', '\x20ANIMATION', 'xgRwf71hUx', 'isPlayingE', 'hRxMIuMBI6', 'library</d', 'LqAWuyFt3/', 'BGQKIFYotS', '3W0w5ZOvyL', '7FhcMOEOZl', 'mls4M2j/Ge', '-text);\x0a\x20\x20', ']\x20=\x20g;\x0a\x20\x20\x20', '\x20\x20\x20\x20\x20\x20\x20\x20\x20a', 'FMN2w2fuH7', 'imX,\x20animY', '/3PWhdg9N7', 'kDzgNwSfsv', '\x20margin-bo', 'indow.open', 'sq+B9lR3yD', '8/+ePdl7z3', 'tx3zestTWb', '\x20randomFli', 'QSdRfPlU3J', 'lkDDpAV2Ib', '6S7qX6S1ct', 'doxtvRA+A3', ':\x20var(--ac', '\x20auto;\x22>\x0a\x20', '\x20\x20tintG\x20=\x20', 'aveCheckbo', 'anvas.heig', 'O0ssckMg5M', 'not\x20found\x20', '\x203px;\x0a\x20\x20\x20\x20', '\x20\x20\x20\x20color:', 'r1fyiP6n7B', 'ignerCopyF', '+Pl/VTrihb', 'ealWidth\x20=', '>Animation', '\x20\x20\x20\x20\x20\x20cons', 'KXCflpADg7', '\x20const\x20d\x20=', 'x15ESJgC2P', 'W0xae5F1N/', '1aF9Tbg2ng', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20p', 'er\x20&&\x20wind', 'UAmnfug5cR', ',0.04),\x200\x20', 'dbVFxnihML', 'portant;\x0a\x20', '0U1kGXx1aA', 'Hb06cIXlbF', 'ZJCLHGyGNI', 'top', 'omCounter\x20', 'xr2RQm+bYV', '(\x27click\x27,\x20', 'opzkRgnncD', '</button>\x0a', 'mdMjYIXIXJ', '/8kKLqSBgP', '\x20=\x20documen', '\x20\x20const\x20ch', '\x20\x20\x20style=\x22', 'yId(\x27opaci', 'fjwQVzY6zw', 'ght:\x200;\x0a\x20\x20', 'ntext(\x272d\x27', 't\x20[name,\x20a', 'outR9P0v0n', 'haksbejwCV', 'nt\x20*\x204)\x0a\x20\x20', 'ua2voFOKlA', 'nvasScale;', '&\x20!current', 'uZ/mDjSw2o', 'KSkWFdjF6a', 'aZYs1Lljsw', '2C62KQ0WBk', 'iZ/PnxWA0e', 'YEFWNEPDGg', 'd(\x27flipVer', '\x20\x20style=\x22w', '=\x201;\x0a\x20\x20\x20\x20\x20', 'MfDtsIrhyf', 'xIkMbg8CL4', 'x/Whf6AKaN', 'oN0QUhAEe1', 'ElAUmXhdcp', 'splay\x20=\x20\x27n', '\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a', '\x201;\x20}\x0a\x0a\x20\x20\x20', 'NnaprxAG+7', 'leBox\x20=\x20do', '-height:\x204', '\x20\x20\x20let\x20cha', 'lEQVR4nN29', '\x20\x20\x20\x20style=', '\x20\x20\x20\x20ctx.sa', 'ar(--radiu', '\x27,\x0a\x20\x20\x20\x20\x20\x20\x20', '\x22\x20max=\x2250\x22', '-soft)\x20!im', 'dEfmDlVHr7', 'l>Tint\x20Col', 'NZn5xzIy9i', '\x20box-shado', 'AMHlwV+pgj', 'round-imag', '0ko+F0EGSS', 'rsor:\x20poin', 'mentById(\x27', 'ZgrLd9V6zC', '8xfA8UPjM9', 'VUdSi1Dt2r', 'let\x20r2,\x20g2', 'TRzaZgBi4a', 'ayingOpeni', 'GlmFLcKdGU', '\x20\x20\x20\x20\x20<opti', 'yXxHfB83/u', '.value)\x20||', 'kit-scroll', 'yCGMgL2hOE', 'ield\x22>\x0a\x20\x20\x20', 'wVKKIqvMip', '9CYe7MOIdn', 'nimY);\x0a\x20\x20\x20', '\x20\x20</div>\x0a\x20', 'autoSaveFi', '\x20false);\x0a\x20', 'q;\x0a\x20\x20\x20\x20\x20\x20\x20', 'i0ZITZWC7a', '1dQKEb6o3r', 'const\x20max\x20', 'Nkga7FlsOp', 'AYi1OCRcIq', 'eu7oW//ewe', 'nalWidth\x20/', '\x20\x20\x20\x20}\x20else', '\x200\x20auto;\x0a\x20', 'YaIIq', 'library-it', 'tById(\x27rev', 'CLydXw62yd', 'kQGjaM2K5a', 'e;\x0a\x20\x20\x20\x20\x20\x20\x20', 'g2lMFx+cEh', 'pbUp3Z+y4L', '2y/B2tF+BM', 'eMove(e)\x20{', 'cterLayer(', 'CVeCQr0OeW', 'ete:hover\x20', '\x20ctx.globa', 'write', '92TPj7BSFF', 'gXHXmn/2B8', '\x20\x20let\x20rand', '7zy9lE3yBt', 'jqoRRCfzN2', 'O2f/D07FNg', 'ode</label', 'VsJ2IdeiT7', '2Z6Z3QCck7', 'box.has-fi', 'n\x20displayL', 'qKq863OPr0', '\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20', 'le/NaYwzNI', 'tom:\x2015px;', '\x20\x20\x20\x20<input', 'sijFWTIl8Q', 'iPPRlqObjL', '\x20\x20\x20\x20\x0a\x20\x20\x20\x20l', 'AEKdSqkXBA', '\x20\x27Normal\x27,', 'HGKa8dxrH3', ':\x20characte', '\x20\x20\x20\x20\x20\x20ctx.', '\x20return;\x0a\x20', 'hYdsczYAcA', '7fwIocnOvP', '1\x20:\x201);\x0a\x20\x20', 't\x20file\x20=\x20e', 'xHTc5fNV72', 'uKIFyQn19Q', 'G/ieN7WhX4', '/tystvkEfQ', 'e=\x22updateP', '79ugGXbkNm', 'X+2u+G9cJN', 'x;\x20}\x0a\x20\x20\x20\x20\x20', 'ror\x20loadin', 'HvskhPc8Hx', 'cCuDEAn85d', 'tById(\x27ope', '0P+MR1Hu4m', '\x20<\x201/6)\x20re', 'nNameInput', 'd\x20=\x20false;', 'W8CxQAtrZG', 'th.PI))\x20%\x20', 'HZjGA6mJjf', 'bD4XqSynMb', 'nLk4qy2rra', 'XfGN8q33t+', 'opener.Ima', 'tIE3ABmZ6F', 'ound:\x20var(', 'Canvas,\x20-f', '0qgigTxsSA', 'er;\x20user-s', '3728NWTbN2', 'ById(\x27rota', 's);\x0a\x20\x20\x20\x20\x20\x20', '\x20\x20\x20\x20\x20\x20brea', 'NiW698/vn3', 'ject.value', 'EvLo4hpXiN', 'rEUD0a3WEN', 'oLibrary(a', 'ndomFlipX\x20', '\x20\x20\x20\x20\x20\x20\x20\x20br', 'ay:\x20grid;\x20', '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '9lv87RLcEv', '(scale);\x0a\x20', '\x20Math.PI))', '55701iTDuSE', '\x20\x20\x20\x20cursor', '\x20\x20\x20\x20\x20\x20\x20\x20if', '\x20\x20\x20<option', 'iv>\x0a\x0a\x20\x20\x20\x20<', '\x27);\x0a\x20\x20\x20\x20\x20\x20', 'n8Ov0cAsOk', '\x20\x20\x20\x20\x20\x20\x20\x20\x20g', 'ionToLibra', 'YRAcFY3Rau', 'O8O/vYLNui', 'sMouseDown', 'nbFsrujttM', '\x20\x20\x20\x20\x20\x20\x20\x20it', '\x20\x20letter-s', 'J/XPierGhu', 'ileDisplay', 'eld\x22>\x0a\x20\x20\x20\x20', '50%;\x20trans', 'ument.getE', 'ndexInput\x27', '\x20=\x20zIndexV', 'wZixtruWek', 'mHZwUQOGh5', 'rdHs4wnSGc', 'put\x22\x20value', 'crollbar\x20{', 'nv3n3u/Zfx', 'Ewkb5mjMcB', 'e(centerX,', 'JKC4pODk00', '0\x22\x20onchang', 'erse\x20?\x20(to', 'PWWX+piFj6', '6wUQVVEG2Y', 'randomFlip', 'ct\x20option\x20', 'U3bJnZNEqd', 'fVtPNP7fl7', 'Lp7/rC9t5D', 'g3/Pbg9OCv', '\x20\x20\x20\x20\x20\x20\x20\x20<h', '/OsCUccOSV', 'lZW/ZtozbW', 'A+PsTQAaeu', 'E4lc3NFgtE', 'ans\x20/\x20(2\x20*', '3LRj5WFXyY', 'OkcZq3dTY3', 'xPTDQpIipb', '\x20\x20\x20\x20}\x0a\x20\x20\x20\x20', 'YInput\x22\x20va', 'Input\x22\x20onc', 'unt\x20*\x202),\x0a', 'ationFrame', 'FWDaQ6th4r', 'acity\x200.15', 'EtCMTnzZgK', '.close-lib', '\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20', 'mData.char', 'l9Ye9jCMuh', '31WnJMN/WT', 'eq3/MBHEqK', 'Cb1Ir6ISkw', 'cityInput\x27', 'Radians\x20=\x20', 's,\x20animDat', '\x20\x20\x20\x20\x20\x20\x20row', 'tems:\x20cent', 'Pxs8PHZlxf', 'xPj03PJT/u', 'harDrawHei', '\x20\x20\x20\x20\x20\x20\x20\x20}\x0a', '8iGQf6LjdW', 'if\x20(t\x20<\x202/', 'mationInpu', 'UNlhaEzHML', 'FzJKFRftEA', 'e);\x0a\x20\x20\x20\x20\x20\x20', '\x20\x20\x20\x20\x20\x20\x20\x20le', 'Auey0zEBuD', '/yL6WOzL+O', 'eXPmnnWbmU', 'sYG4oMRJ3B', '2/cvnWsaGU', 'Library)\x20{', 'eet,\x0a\x20\x20\x20\x20\x20', 'raryModal\x27', 'nst\x20finalF', '+w6aQrc/Sn', 'ctx.global', 'GS\x20-->\x0a\x20\x20\x20', 'BhVAOrd/tJ', 'hzJJXKDuoE', '444\x20!impor', 'lHeight\x20/\x20', 'document', '\x20\x20\x20\x20\x20\x20\x20\x20da', '\x20<div\x20clas', 'VQ+cdJ2/nW', 'DFPgS3FoMI', 'B0m/5IN/7N', 's\x20=\x20progre', 'tionDurati', 'GXIpRqGW9Q', 'cjjXooBhK6', '\x20\x20\x20\x20\x20\x20\x20cha', 'emInfo.tex', 'ace-3);\x0a\x20\x20', 'und:\x20#4a20', 'A4Ypq/rqhC', '\x20\x20\x20\x20\x20\x20item', 'hMPMvUZaR8', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<', '=\x20name;\x0a\x20\x20', 't;\x0a\x20\x20\x20\x20\x20\x20\x20', 'OgHsTY+eiP', 'Ymogo/si20', 'EXauf4jFd/', 'user-selec', 'unction\x20on', '55,\x20255,\x202', 'mily:\x20var(', 'q08e/nN88Z', '\x20animY\x20+\x20d', 'rGetOybvTN', '(document.', '\x0a\x20\x20\x20\x20\x20\x20<sp', '\x20||\x20\x27sourc', '4wUsMsHkJs', 'opacity\x20*\x20', '#444;\x20bord', 'et.width\x20/', '/i2yeVMd5X', 'rw50JZGVOk', '\x20\x20\x20\x20\x20\x20\x20\x20ct', 'dow.onload', 'x7t/WW19pa', 'h5nlN1md80', 'g.onload\x20=', 'v5BtXQJ6Ii', 'ageData(im', '5r7IWoycjy', 'border-rad', '\x20\x20\x20\x20\x20font-', 'omCheckbox', 'fbIIOYo0i1', 'TwN8cKkJl9', 'ffsetYInpu', 'Sprite\x20=\x20d', 'h,\x20row\x20*\x20f', 'x.globalAl', '}\x0a\x20\x20\x20\x20</st', 'si4oqqRM/S', '1;\x0a\x20\x20\x20\x20\x20\x20\x20', 't.left;\x0a\x20\x20', 'PNQcbBonak', '1283406IrkzDN', 'v1z1zNrG+w', 't(\x272d\x27);\x0a\x20', 'y6pee3fPB/', 'ox\x27)?.chec', '7Cfu7GiOrC', '\x20value=\x223\x22', 'uZSHnN/T/l', 'aracterSpr', 'BBRH5QBFmR', '3tJGtS20I7', 'afY5oDGtIa', 'spacing:\x200', '\x0afunction\x20', 'rameHeight', 'ssPSQqEQns', 'z1jNaGCcYo', 'galBjEG+QZ', '\x20const\x20tem', '\x20\x20\x20try\x20{\x0a\x20', 'FvavaYWsdu', 'tDvhVhk7zn', 'iply\x27\x0a\x20\x20\x20\x20', '4ZKnyKKKF6', 'wl8booOKHO', 'WRqCLOQ6pz', 'clientX\x20-\x20', 'orOffsetX\x20', '3XRquNiAxq', '3517880bsRspQ', 'CU0HtVIIBI', 'olutionLib', 'evz2eYcEYg', 'mwsvtx6Nzj', 'Data.chara', 'aXQfOdWxZu', 'acterSprit', '>Play\x20in\x20R', 'wRWBjLxmSI', 'W9lkZOy9R0', 'KsoxlwwOrb', '8ii0XrF40u', 'QLxPnCaPEd', 'ent(\x27canva', 'zN3Ufrnr34', '\x20\x20\x20\x20\x20\x20\x20fun', 'ty\x20/\x20255);', 'characterS', 'n3ozu6oxqf', '8iSe6xW/rn', '\x27;\x0a\x20\x20\x20\x20\x20\x20\x20', '\x27)?.checke', '\x20||\x20false,', 'lue=\x220\x22\x20mi', 'nDuration\x20', 'J/dqBubfLH', 'er(scale);', 'gVX7UEviZP', 'etElementB', 'daOyC1CwBS', 'eData,\x200,\x20', 'background', '7AOuPMicq4', 'soZTOvENJn', 'uPiP10ZNTW', 'Xwl/L2JWho', '\x200\x203px\x20var', 'rgin:\x200;\x20p', 'mYPjckQNww', 'fo-text,\x20.', 'MOCeK92rUu', 'bzG3uX6c2+', 'XjkAh2tc1M', '\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'dx7gEngX0O', 'B+Mgjod0cK', '\x20offsetY;\x0a', 'TcU3HzembO', '\x20\x20\x20\x20ctx.ro', 'omeIlTdPM6', 'qF1HwYTQup', 'haracterSp', 'QsX2rbXU1U', 'J4CnDseSUA', 'o);\x0a\x20\x20\x20\x20\x20\x20', 'catch', '3/j6pssbrG', 'ciMtcU0DC0', 'x;\x22>\x0a\x20\x20\x20\x20\x20', '=\x22updatePr', '\x20width:\x206p', 't;\x20backgro', 'VXpLyqC2hC', '\x20\x20\x20\x20\x20\x20\x20pad', '5;\x0a\x20\x20\x20\x20\x20\x20\x20', '0i+OkI1jd/', 'b4punbuKZb', 'ZXteO+DyNP', 'HXpZGC4iCT', 'WThBQGaXKw', '0pQ6cZ8W1G', '.PI\x20/\x20180;', 'KO4q2vur/Q', 'nt(315deg,', 'RjhOGCAMEy', 'AmountInpu', 'ox\x27).check', 'tileWidth', 'd(\x27library', '_isBigChar', '6bqzYinU6E', '\x20\x20\x20\x20align-', 'AV1aPA+JnV', '\x20\x20\x20\x20\x20\x20\x20\x20hu', 'tationInpu', '193Kpsi7KZ', 'TwUXZIkFAK', 'VoNgHeAW+F', 'kTYebZgUfr', 'QVy7c5yv5+', 'input:focu', 'EgXQmJW0Yu', '(h\x20<\x200)\x20h\x20', 'DNaWJr+HIt', '\x20document.', 'AnimationS', 'QA/n75A+W4', 'VesnbF+uOT', '9uD6AJX5V4', 'X8dYDjLcax', 'n\x20drawWith', 'GIdwe8TGbE', 'En85jINQIs', ')?.value)\x20', 'jM3iywn1Vi', 'getContext', 'YZ3GGwRlDD', 'iPRKVSqxTf', 'YIZuKxDhjb', 'ror)\x20{\x0a\x20\x20\x20', 'v/8Mkfh1Xs', '3n3nDt19uK', '/\x20255\x20-\x20b\x20', 'round\x200.15', 'n:\x20documen', 'UHvoweI2o6', '00vh;\x0a\x20\x20\x20\x20', 'qBE3R47Jwz', 't(\x27div\x27);\x0a', 'LoopCount\x20', 'ax-width:\x20', '\x20const\x20p\x20=', 'GmXFA4UTGP', 'xbDMsNtw3E', 'eld\x27);\x0a\x20\x20\x20', 'VdMlHlB8zh', '\x20\x20\x20\x20</div>', 'ColorInput', 'Dzaw1gCUhk', '\x20animData.', '=\x20true;\x0a\x20\x20', 'ify-conten', '0oHhR1SXxQ', 'Zq9ozkrJv5', '+fqpsbAGLT', 'n\x20deleteAn', 'eteAnimati', 'rentX\x20=\x20e.', 't\x27).value\x20', 'NSKc4ANQY0', 'then', 'ption\x20valu', 'EFmos', 'tyle*=\x22fle', '2ThkGR+iQO', '<\x200.5\x20?\x20l\x20', '\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20', '\x20\x20<option\x20', 'r(--mono);', '7rfewHbzVY', 'yfoeAoTsGl', 'down\x27,\x20onC', 'fbd9n/7mDh', 'ryd+T6msKV', 'ixed;\x0a\x20\x20\x20\x20', 'iP5uTrDHlY', '\x20\x20\x20\x20\x20const', 'GlBdqBFUEX', 'nput\x27).val', 'x72qtzYjAc', '7wqAc7ciZq', 'rSeIRWspRr', '\x20\x20max-widt', 'r:\x20var(--t', 'ld\x20button:', 'cB6xpo/h+6', 'r12igohKWA', 'idth:\x20auto', '/65OSXfeyK', 'in:\x2050px\x20a', '9n9IP1QM+7', 'n=\x221\x22\x20max=', 'ndomUpdate', 'el>\x0a\x20\x20<inp', 'andomUpdat', '\x20\x20\x20\x20\x20\x20\x20\x20<o', '5lXACvZ2aY', 'r+Y/oVuHMi', 'oG1o4RAbPz', 'rUr9mNSJoB', '\x20#061209\x202', 'PqRc/UIeEV', 'qDikl4iiSg', '\x202)\x20/\x206;\x0a\x20', 'DE2DlE7hyL', 'ensityInpu', '\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20', 'nst\x20zIndex', 'C3v5hy/9wy', '09F1uxevcg', 'AZUlrwKyT6', 'put\x27)?.val', '152,0,0.15', 'kAIbSAifbq', '\x20\x20\x20\x20\x20.libr', 'dduOS+diq7', '257eCtvmVJ', 'iv\x27);\x0a\x20\x20\x20\x20', 'DwXiUcoSyC', 'n\x22>Scale\x20I', 'XSrmvIj5U6', 'lumns;\x0a\x20\x20\x20', 'round:\x20#35', 'd:\x20#2a2a2a', 'onst\x20scale', 'hue2rgb(p,', 'ction\x20anim', 'th1sc8V3PR', ';\x22>\x0a\x20\x20\x20\x20\x20\x20', 'Mp9Ss++eS6', 'nge=\x22updat', 'GWKx4Yfzoc', 'OODuA7Pzfl', '\x20if\x20(apply', 'leInput\x27).', '\x20<h3>VFX\x20P', 'Xaz6G2YMKX', 'ss=\x22field\x22', '\x20\x20\x20\x20\x20\x20char', '\x20const\x20new', '5vi8PBLTsa', '\x20\x20\x20\x20\x20ctx.c', 'e(animX,\x20a', 'vEjNvgzKLx', 'TE9vh19Kca', 'center;\x20cu', 'kHp1Xj13jb', 'ipHorizont', 'YtsbVvwlQi', 'ave\x27,\x20onCa', 'a+7TqIhz/6', '2r2uZYKvwi', 'pe=\x22number', 'nter\x20an\x20an', 'W+JcYoNRmH', '\x200;\x0a\x20\x20\x20\x20\x20\x20', 'xDHaGhe3fb', 'mnInput\x27).', 'A3m8flzBFM', 'OXTZna0Aw7', 'charDrawWi', 'Fks5r6px8U', 'ZZWXrOifro', '\x20((g\x20/\x20255', 'nDisplay\x20=', '\x20\x20\x20\x20\x20trans', 'acter', 'HXWBIIvTbs', 'Gxb48iTj9a', 'KAHk4izUOg', 'nNcJzLXFMU', 'XNgc4yyJcA', 'xRAaZvnLOF', '--mono);\x0a\x20', '),\x20linear-', 'ngAnim)\x20{\x0a', 'field\x20sele', 'wiZs/3deYF', 'writeFileS', '\x20updatePre', 'RVUEyVcrAP', 'yugqigAF2a', 'closed', 'x\x27)?.check', 'l8CtmJ6p/f', 'KzEBeGUQBG', 'GoHgH11IJE', 'pHorizonta', '5+kzr46r/Z', 'rfRt++qWa3', 'Ssn445NZTw', 'Z/VYUm6M92', 'b3t74gf+ck', 'jKReBx9H/w', 'line;\x20}\x0a\x20\x20', 'cFym97rs0H', '\x20\x20\x20\x20\x20\x20\x20dra', 'RqAF8ZQFmu', 'rbzmAUshuc', '\x20\x20\x20\x20\x20\x20\x20<di', 'a.data;\x0a\x20\x20', 'n26g1lIKUB', ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'k\x20to\x20selec', 'Hbx8JMRjYH', '\x20=\x20imageDa', 'Thlavm4331', 'CtCVi3Kpa4', '=\x2048;\x0a\x20\x20\x20\x20', '\x20\x20\x20\x20\x20\x20\x20\x20do', 'currentSpr', '\x20\x20frameWid', 'ehSh2jNAgw', 'etImageDat', 'MsGe2v9vvB', 'xXNnbi1/Zj', 'ut\x20type=\x22c', '\x206;\x0a\x20\x20\x20\x20\x20\x20', 'YSorting(s', '\x20previewCt', 'eHeight\x20||', 'ber\x22\x20id=\x22o', 'equestAnim', 'arScale;\x0a\x20', 'MmIflAystZ', 'Data);\x0a\x20\x20\x20', 'I4qSCSAvdS', '0KuOcEUp4E', 'KNu04fxPfo', '\x20\x20min-heig', '\x20\x20\x20\x20\x20\x20r2\x20=', 'BT9wclAAAA', 'k18yqczf9H', 'H3fzuEMz7C', 'r+g989srzS', ',\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'D3YvxlWAiG', 'aW8n+a+Eso', 'from', 'DT8nUxfF0W', '11UZ8lS877', '\x205px\x209px;\x0a', 'phbu/9c0db', 'drawImage(', 'D2+4YrciSn', 'imations\x20=', '+S7CrtxdDx', 'RtBlK4mTS7', 'ymJSeELQ8p', 'RFrvDIiuQV', 'FIzKCG+LSe', 'U5M4k7UmHS', 'ht;\x0a\x20\x20\x20\x20\x20\x20', '1hyKb1GB55', 'reviewCtx.', '-weight:\x20n', 'family:\x20va', '5vb8a9WvFK', 'ont-size:\x20', 'h;\x0a\x20\x20\x20\x20\x20\x20\x20', 'zQmCCjFz2p', 'caleInHeig', 'ZZsGzyTEr4', 'A+cbkzCXUD', '8QmJAKiGgq', 'qk8p2wnUfF', 'bel\x20style=', ')\x20||\x201;\x0a\x20\x20', 'ue);\x0a\x0a\x20\x20\x20\x20', 'leInHeight', '1dVYWuzb7Z', 'eI3/mpZCpU', 'nVnM/I7Zzx', 'ata[i\x20+\x202]', '2SZJRaYE0V', '\x20\x20\x20font-fa', 'tY\x20-\x20dragS', '(--surface', 'Hy/8bDYZBb', 'kEB2oLNt+g', 't)\x20return;', '::-webkit-', 'B4s4+TCUCI', '\x20\x20let\x20tint', 'hWib8bPDOo', 'entListene', 'Vxa37Gben6', 'n7xvDAt2KQ', '34x5FbzgJd', 'div>\x0a\x20\x20\x20\x20\x20', '\x20\x20\x20\x20\x20\x20\x20\x20);', 'XJFX/MT/1G', 'ZmEfqLuKWs', 'LZWQlOxaXU', 'FxSp+KSPjm', 'Z9xw2k1L/k', 'y7NaOBNVZV', 'document.c', '\x20\x20\x20\x27Screen', 'MbvdAaJbNb', 't)\x20=>\x20{\x0a\x20\x20', 'bziT0cGXZN', '/s8gd8Inv5', '555;\x0a\x20\x20\x20\x20\x20', 'review()\x22\x0a', '3QHeN3T0AM', 'us\x20{\x0a\x20\x20\x20\x20\x20', '-modal.act', 'B5RkKc6qfp', 'ZyGs2Tiy0P', 'CqY9eCdYOw', 'V/0Yuhl9GB', 'erSpriteWi', 'ent', 'und:\x20#3a1a', '\x20100;\x0a\x20\x20\x20\x20', 'l>\x0a\x20\x20\x20\x20\x20\x20<', ',\x20frameWid', 'Aq9mCqpiCs', 'q9tC0czYlN', 'st\x20drawFra', 'jZwD7leSvP', 'fnywJdKVFB', 'rif;\x0a\x20\x20\x20\x20\x20', '\x20\x20openingA', 'hue\x20!==\x200\x20', '\x20\x20\x20\x20\x20\x20tran', 'ndingAnima', 'v3xg4i9/fj', '\x20\x20animatio', '0xn8SsSrHW', 'existsSync', '37/bghG2oL', 'KmpFVKxFHn', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20s', '9MAcKHmLB6', 'mMXrLS1ko9', 'cb+BvOfWP/', 'ameWidth,\x20', 'Lq/bMPcukR', '0lhKNFEfI7', 'BOPjON5bFp', 'x)\x20{\x0a\x20\x20\x20\x20\x20', '6Jp6j3FU/e', 'x4bDyILlln', 'WdvKuxPf7F', '6bu+gv8bsO', 'wUSWuNLVLP', 'xB1sNqNM5h', 'omRotation', 'n\x20=\x20parseI', 'b/EV2S19l1', 'teHueDispl', 'in;\x0a\x20\x20\x20\x20\x20\x20', 'LLNJRYkE2P', 'l/VbJSepg2', ':\x20var(--te', 'WN59bDvdKS', '7YB1bDKU1k', 'Sprites', 't\x22\x20value=\x22', 'm);\x0a\x20\x20\x20\x20\x20\x20', 'vXbWzecHiK', 'ata.random', 'O38JTwuxcw', 'mainModule', '\x20if\x20(rando', '0SvWAnGZY+', 'PFj/oZg2/t', 'iHiDdrDr4a', 'jA4AZd5biY', 'Id(\x27scaleI', '\x20setTimeou', 'cale)\x20{\x0a\x20\x20', '\x20\x20\x20box-sha', ',0.8);\x0a\x20\x20\x20', 'a3Zo3tXCaV', 'VsJ15fCMTX', 'hsLY5wSBRh', '-header\x20{\x0a', '1jXZOD0Vpw', 'W00LM2376n', 'le;\x0a\x20\x20\x20\x20\x20\x20', 'pJGqciuh76', 'mDQRJk8koV', 'mpty\x22>Erro', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20', '1IzFEdhyBL', 'LwlNa4PRML', 'AgYLBAYGAh', 'AKBJoyO5AL', 'R6sy7YdJtN', '\x20\x20\x20\x20\x20\x20blur', 'brary-item', 'G1HJgJXNbm', 'ndingAnim)', 'pdateAutoS', 'SSmN6JIuJs', '9MsnMB04wP', 'Z+WWkExUfi', 'TICah', '\x20\x20\x20.header', '6CDSJh4Whc', 'previewCtx', 'I/ABD/Kh1N', '/J3p2BM9YM', '\x20if\x20(t\x20<\x200', 'DBRtrBtayL', '.target.fi', 'warn', 'tFrameTime', 'v\x20style=\x22d', 'Y\x20=\x20gameOf', '87mS3VsPrT', 'Iag/wY6/ew', '209\x2025%,\x20t', '/XynWEvAAw', 'hjapyXJA8j', 'UgIr04iiqE', 'Wj3gYCPES6', '2);\x20}\x0a\x0a\x20\x20\x20', 't\x20min\x20=\x20Ma', 'JVSNPvCkwy', 'W4tQ1OfOCV', 'DqSd/UmWTr', 'Rotation\x20=', '\x20\x20\x20\x20if\x20(te', '1b4rQSZlj+', '\x20\x20\x20\x20\x20\x20\x20\x20fr', 'Q0S3YSjXKa', 'UnC+rDds6t', 'IV1+zRIBLf', '7Xv6r+Uds0', 'Fgry8I8JDC', 'Animation/', 'DurationIn', 'xtContent\x20', 'e=\x22number\x22', ';base64,iV', '7fJL81+sjl', 'et\x20removed', 'GJm2bNrH44', 'drawImage', 's=\x22field\x22>', 'dBl9I72Jfp', '\x20:\x201,\x20fina', 'X\x20=\x20curren', 'tileWidth,', 'in-bottom:', 'alue\x20||\x20\x27#', '\x20if\x20(animD', 'd9wNPx2nhL', 'delete\x27;\x0a\x20', 'YCz3PN3u1H', 'rgin:\x205px\x20', 'bXMKgjYUCf', '\x20=\x20animDat', 'ningAnimat', 'rSprite\x20&&', 'y:\x20none\x22])', 'rrentTime\x20', 'ZGC2pACsR0', 'EtaoKI2Nio', 'AAAP///ykc', 'rSprite)\x20r', '\x20\x20\x20\x20\x20\x20\x20\x20\x20}', 'sWz/M/qMbX', 'BLfigAXcJU', '5jgaegTDAm', '\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'aVt2dWDaQn', 'nst\x20col\x20=\x20', '.03);\x20bord', 'dV9+Vo5/zP', '(parseInt(', '\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20', 'B0fs+ceRUX', 'nNZkFfk1mP', 'th:\x20100%;\x0a', 'VlUoKYQSkw', 'ThLp1ecWZ0', 's3Xa5raxrM', '\x20</label>\x0a', '\x22number\x22\x20i', 'zf47JwWgE6', 'ALY5mwAlmZ', '3ETw2Vm+uo', 'ZJJPB5Yg1i', '\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20', 'RYGpDQMLg0', 'qic9hFkhiS', '\x20||\x20255,\x0a\x20', 'select:\x20no', 'c57VdM3HKu', 'XGvxZrHkY8', 'HZOVYcLjY7', 'j+0pb6n9wK', 'Y68VplcVbF', 'L7hlQpSdhf', 'g\x20src=data', '54cSI2Y+9J', 'aLejnA2EaR', 'BwB3qwHVBF', '\x20\x20\x20\x20let\x20h,', 'ss=\x22file-b', 'gyIp73Pv28', '\x20\x20\x20\x20\x20\x20\x20\x20op', 'lumns:\x201fr', 'I25KW/yHQX', 'HQKA7Slb2G', '=\x20containe', 'sityInput\x27', 'BpJx3RpnIK', 'lse,\x0a\x20\x20\x20\x20\x20', 'GNf1IwMOy2', 'Vy2w6T+Fs4', 'to\x20bottom,', ';\x20align-it', 'd9q57uVwpQ', '\x20\x20document', '=\x22scaleOut', 'bv9stvOS3U', 'Progress\x20=', 'Width\x20/\x202\x20', 'imData.off', 'p+1dnBuujj', 'redCanvas,', 'nt);\x20color', 'ow.opener.', 'isNwjs', 'Ec9Zh5OvfR', '3yi0eHGpbx', 'f66JZl+wgA', '\x20\x20min-widt', 'KbYkQUg+As', '()\x22>\x0a\x20\x20\x20\x20<', 'nput\x27)?.va', 'aaUbqg8foe', '\x20\x20\x20\x20let\x20sc', 'MVVjh8kEDa', 'Z/LxIyyYy2', '-1\x20:\x201)\x20*\x20', '\x20\x20\x20<span>R', '8Po/mvGjE2', 'Huy9ekR49+', 'entRect();', 'FcRt/OA/w5', 'CeyIm71t7w', 'khFEeJZ4yq', ')\x20{\x0a\x20\x20\x20\x20\x20\x20', 'tX;\x0a\x20\x20\x20\x20\x20\x20', '2/P872zhXz', 'mpBitmap._', 'SFHZgZRMeI', 'DImhT6AGHK', 'pLTO9k7Ovz', 'alse;\x0a\x20\x20\x20\x20', '\x20\x20\x20\x20\x20\x20\x20.bt', '=\x20parseInt', 'iv>\x0a\x20\x20\x20\x20\x20\x20', 'geManager)', 'FdgiITgVga', 'k66+0xhtpm', 'ation:\x20par', 'h.max(r,\x20g', 'rame\x20===\x200', '\x27).checked', 's//Gyh78Fx', '\x20\x20\x20\x20\x20\x20};\x0a\x20', '*\x20255;\x0a\x20\x20\x20', '\x20\x20\x20\x20\x20\x20}\x20el', 'e/n2T2c3rn', 'QAxLF1gIDy', '(max\x20===\x20m', '2Bz4IH+fIx', '\x20\x20\x20\x20\x20\x20\x20\x20\x20s', 'OjINHIOeBO', '\x20\x20\x20\x20\x20\x20\x20col', 'vLkJ0vrBdI', 'r;\x0a\x20\x20\x20\x20\x20\x20\x20', '0t6L3/l819', 'ecked\x20=\x20an', 'ng:\x2012px;\x20', '7C1GJkxjWe', 'enter;\x20cur', 'jyA6nwZpoR', 'Sc3FLXT1WL', 'e])\x20{\x0a\x20\x20\x20\x20', 'abel>\x0a\x20\x20\x20\x20', '9sXyIs2v8Z', 'racterFirs', 'BqaUsGC44G', '6k//ESmbT1', 'ant;\x0a\x20\x20\x20\x20\x20', 'ryAnimatio', 'fPEuZeMlZw', 'AAMAUExURQ', '\x20\x20\x20\x20\x20\x20\x20\x20fo', '7\x22>7\x20-\x20Abo', '-shadow:\x20i', 'if\x20(window', 'prite', 'w+onpiDOTx', 'uTpdOdYXxy', '/5K/9b6xHa', 'ameWidth,\x0a', 'to5o4VNTLS', '\x20}\x0a\x20\x20\x20\x20\x20\x20\x20', 'qlE2du1eD+', 've();\x0a\x20\x20\x20\x20', 's\x20=\x20l\x20>\x200.', 'n\x20||\x200);\x0a\x20', '3KxhE4xKYV', 'V72cW3lPX3', '0k+3VPxLBy', '\x20\x20\x20\x20\x20\x20\x20doc', 'rXJfoO6SOH', 'shadow:\x20va', '\x20\x20\x20fps:\x20pa', '\x20frameWidt', 'ex:\x200;\x0a\x20\x20\x20', '3)\x20return\x20', '-transform', 'nction\x20ope', '97Aegc9+Lh', '9kroWy2SiU', '7876ZyB9KM', 'pUiNOxo9f2', '\x20\x20const\x20hu', 'UsqloNZXO8', 'join', '-->\x0a\x20\x20<div', 'JTg0DC9k0K', '\x20\x20\x20\x20\x20\x20<!--', '/\x20255;\x0a\x20\x20\x20', 'g:\x20-0.3px;', 'r5k7qPsQcT', 'gya9d+m8SK', 'ohuItgO0Aj', 'LOj6QC44qv', 'Element;\x0a\x20', 'mLN6lzN25I', 'OaNPMsH/zs', 'A2NgIFiuJz', 'KdaSJtKSJt', '\x20spriteshe', 'MyC+ZnFTZM', 'st\x20rotatio', 'S0kDKEB432', '2occfQLuqc', 'ct\x20{\x0a\x20\x20\x20\x20\x20', 'FecLigVkTK', 'p>\x0a\x0a\x20\x20\x20\x20\x20\x20', 'ht\x20=\x20realH', '\x27,\x20error);', 'dering:\x20pi', 'ndomRotati', 'P9x98T/TbD', 'IEvDzcp2LN', 'getElement', 'IQWQuYYRFe', 'Scale;\x0a\x20\x20\x20', 'value)\x20||\x20', '\x22\x20selected', 'Vz1gES9ucA', 'rOkfD4Qrb1', 'Pv5yV0zn9f', '4W1sk49cap', 'eTimeout\x20=', '\x20\x20\x20\x20\x20\x20\x20\x20\x20R', '0fU/zzgWXB', 'p5lobVt76V', '\x20\x20\x20\x20\x20\x20\x20);\x0a', 'box\x22\x20oncha', 'ertyDescri', 'DmtejbVkm+', 'tyInput\x27)?', 'gb(p,\x20q,\x20h', 'o;\x20margin-', 'em-info\x27;\x0a', 't[type=\x22fi', '\x20\x20\x20\x20\x20\x20<lab', '+D5KkTPUsc', '\x20input[typ', 'mation\x20set', 'oOB1OqnTyY', 'xAEL0+AgFm', 'K7JqXBTAEn', 'ibwBqNLJm9', 'seInt(docu', 'y9cRj12gt5', 'ncyGg2Xy7N', '2,\x0a\x20\x20\x20\x20\x20\x20\x20', '\x20b2\x20=\x20l;\x0a\x20', 'viTq4JUIlA', 'Axithgt0nB', '\x20\x20\x20\x20\x20\x20bord', 'ationCheck', 'SKQy744Nl8', '-library\x20{', 'heckbox\x27)?', 'l>\x0a\x20\x20\x20\x20\x20\x20\x20', 'utoSaveFie', '9P/XzFX/S4', '1evF8fA+cJ', 'ad2qRAuubt', 'odeInput\x27)', '25fp1+v/6k', 'KCUSkrW/Mc', '9dBgrBe9cT', 'bgu2O96J15', '1DBg6QDmly', 'ibrary-ite', 'ingEnabled', 'CCyyviTvVR', 'ss=\x22contai', 'OeVmhdPwcN', 'uutt76zPPp', 'WK+naJXFkh', 'spriteshee', '\x20+\x201)\x20%\x20to', 'n-items:\x20c', '\x20Settings<', 'dCExET8VUe', 'UEazpspAd9', ')\x20t\x20-=\x201;\x0a', 'wws2Ep1AdQ', '.addEventL', 'ze:\x2010px;\x0a', 'ogiiBLov65', 'utton\x22\x20onc', ')\x20return;\x0a', 'fCQqql1OK6', 'm:\x20upperca', 'JsGtsE4LNE', 'uNzWrvastg', '9BQSc4hYNZ', 'derpnmvXBy', 'flip:\x20docu', '.restore()', 'ry:', 'UOEbzZYzFO', '4eHM6DxloT', 'tion\x20value', '\x20\x20\x20\x20\x20s\x20=\x20l', 'nsityInput', '8/nuF9NfdE', ':\x20pointer;', 'h4wWKeaHG7', 'utf8', '\x20\x20\x20\x20\x20\x20\x20del', 'nd:\x20#444;\x20', '7dpjZmifWH', 'tintB)\x20/\x202', '\x20\x20\x20\x20\x20\x20\x20out', 'iv\x20class=\x22', '/+q4SNTZw7', '/kxAM5UTDF', 'screen\x27,\x0a\x20', 'UnlbGRVH2B', 'K0LeWzx++5', 'tor</title', '\x20\x20\x20\x20\x20\x20\x20con', '\x20\x20\x20\x20\x20h\x20=\x20(', 'HuxUc4gpkf', 'Do4QEiECgC', 'xh3Q6vkQkA', 'DxAGeKo1Gw', 'splayFrame', 'xlV7VvldV2', 'kABzgQ9pkA', 'ationLibra', '255:\x0a\x20\x20\x20\x20\x20', 'N7HxG1+/3u', 'dkFszBF0rb', 'er\x20{\x20borde', 'XQ3FCaPzXN', '+PPx8AwEAg', 's,\x20.field\x20', '=\x20document', 'n</option>', 'EFT\x20COLUMN', '0\x22\x20min=\x22-9', 'wDmNMp5i5a', 'x;\x20height:', 'f2nhTXNtFN', '\x20\x20\x20\x20\x20\x20\x20\x20\x20i', 'ztwGkvXidP', '{\x20color:\x20v', 'ion()\x20{\x0a\x20\x20', '\x20<input\x20ty', 'HuH3DBS+MB', 'kHC6OaWX7f', 'OQctC+oJpg', 'xaC0EojQB/', '\x27:\x20\x27screen', '3afoWKk29E', 'wqfom0XACs', '\x20\x20\x20\x20\x20\x20\x20\x20\x20f', 'ainer\x20{\x0a\x20\x20', 'xtUQ+BXb3m', 'hasFocus', 'hGVDNR81UT', '+0YZWDYWUq', 'currentRow', '6JUwVEHWqx', '3hPzzy7LB7', 'CJGGdIWioU', '/EH8KfxV/A', 'fadeOut\x27)\x20', '\x20\x20\x20\x20\x20\x20\x20\x20\x20l', 'uGtN2ljNFg', '2gVtQ0IkEF', 'ions))\x20{\x0a\x20', '\x201\x20-\x20(prog', 'tent:\x20\x27\x27;\x0a', 'DVvgrCBPsD', '\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20', '\x20\x20\x20\x20\x20\x20\x20dat', 'input\x20type', ':\x20totalFra', 'previewCan', 'V3/xD4a2vu', '\x20/\x206;\x0a\x20\x20\x20\x20', '\x20\x20\x20\x20\x20paddi', 'ion:\x20relat', '4fs5yyjayN', 'YBWAesgE+R', 'ion>\x0a\x20\x20\x20\x20\x20', '-index:\x2010', 'XOsuqtVy95', 'unMKk+XiKD', 'tify-conte', 'rxYnmmS6vj', 'al)\x20{\x0a\x20\x20\x20\x20', 'X\x20=\x20parseI', 'r+cBmKcZGe', 't:\x20center;', 'PXRQR1iP2W', '\x20\x20\x20\x20\x20\x20fram', 'zIndexInpu', 'OdYj1nl7h3', '.globalAlp', '\x20=\x20frameWi', 'aJ3I2H2Wb8', 'ow\x20Charact', 'kM5IE0gN22', 'Ttf3zprMjh', 'eningAnima', 'O/SghBSzFN', 'Tgzr2fdaWn', 'ip\x20Horizon', 'rtical</sp', '(previewCa', '\x20\x20\x20\x20\x20text-', '\x20\x20\x20\x20\x20\x20\x20}\x0a\x20', '4vb4xB13FJ', '\x20\x20\x20\x20\x20\x20\x20sty', 'tElementBy', 'LX5vpzY+25', 'aeW/duC7c+', 'kTtgm1AmYg', 'i4k/pQYIEJ', 'w1gBrJotP3', 'xk0AcVN2a9', 'Id(\x27saveTa', 'BnQufAoaBD', 'type=\x22numb', '7YzCCj4WxO', 'k4cRegqqBC', '\x20\x20\x20\x20\x20\x20\x20\x20en', 'Sbzp2maPzX', 'ntById(\x27ro', 'ner.client', 'KjRqUiO+rI', 'yId(\x27autoS', 'tion:\x20docu', '=\x20function', 'rn\x20p;\x0a\x20\x20\x20\x20', '445492ZrXhlo', 'px;\x0a\x20\x20\x20\x20\x20\x20', '-size:\x2011p', '//vnp/kIb+', '0sXlHCPkxl', 'meHeight\x20+', 'dKTiCKItMS', 'NREWjk0M2y', 'KlCdA', 'ile(file);', ')\x20/\x202;\x0a\x20\x20\x20', 'yplFtKpA/H', 'p\x20class=\x22s', 'aveEnabled', 'oogVtT6Wdn', 'A862B/tq1P', 'e0zUOdV73J', 'EGUHU5EO8D', 'OWhcUKmo8r', 'UpCBmfRlQv', '[i\x20+\x202];\x0a\x20', '\x20\x20\x20\x20\x20\x20\x20\x20};', 'z1xLq1/S2n', 'aCxQ+XE3wM', '\x20style=\x22ma', 'ageData\x20=\x20', 'tant;\x20}\x0a\x20\x20', '+Y0zT66o4i', '27hVI50TvC', 'A85bw6am/K', 'XTknqHjVKM', 'ByoBvr2Ljk', 'gAkRt8bBFH', 'teFileDisp', '89Kdz4JwHr', 'rXqH7RZEim', 'a.flip\x20||\x20', 'eturn;\x0a\x20\x20\x20', '>\x0a\x20\x20\x20\x20\x20\x20\x20\x20', '.drawImage', '\x20\x20--bg:\x20#1', 'otation;\x0a\x20', 'rtY\x20=\x200;\x0a\x20', 'mg.onload\x20', '6DAFoAECpS', 'cale\x20/\x20100', 'lVpAydAMj3', 'filename', 't-align:\x20c', '*\x20easedPro', 't\x20canvasSc', 'OtYeiz/35g', '.randomRot', 'tionDispla', 'oothing:\x20a', 'CAMAAABYhh', 'd19MBfHL/7', 'dc/ISbMn1W', 't\x20b\x20=\x20data', 'ransparent', 'lrbLdnaXjD', '48ilqWvc', 't\x27);\x0a\x20\x20\x20\x20\x20', '\x20*\x20easedPr', 'er-bottom:', 'm5HnMVJKM3', 'q1Gw5C54/U', 'iKSadPA3/+', 's-sm);\x0a\x20\x20\x20', 'KxAt4lYy8k', 'XGJKRSAUqd', 'AWgii38glb', 'HoZg5wNkWf', '--shadow-s', 'find', 'v/cMOMCxes', 'Image(temp', 'ocument.ge', 'ta[i\x20+\x201];', 'text-muted', '1+H9z9zFn1', 'tesheet</l', 'ltbgJ3lqtk', 'jAATn51bng', 'Cc6EAEICIZ', 'epS+7uSdSm', 'LEeMXjnWye', '|\x20false);\x0a', '<div\x20class', '8/fvhXaAXD', '-radius:\x20v', 'play:\x20flex', 'r\x22\x20id=\x22col', '\x27canvas\x27);', 'ssName\x20=\x20\x27', '/label>\x0a\x20\x20', 'n-height:\x20', 'J8/vLuFYYr', 'Z29feOfU1s', 'cWNshm452m', 'lbJzQwDlaK', 'QrMSRyPpsB', 'yoz143MhkH', 'Xz3StOC+qG', 'QzZEJmLoAv', 'se;\x0a\x20\x20\x20\x20\x20\x20', 'YWA6ZiDoxT', 'x</label>\x0a', '\x20\x20\x20\x20\x20let\x20p', 'r(--accent', '/uftDVd9O7', 'oqQ+fuxVth', 'dateCounte', 'n:hover\x20{\x20', '\x20\x20\x20\x20\x20\x20\x20mar', '\x20\x20\x20display', 'ary', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a', 'ary-empty\x20', '\x20\x20\x20\x20\x20\x20\x20let', '\x20\x20\x20\x20\x20\x20\x20cur', 'Epk6fSpQhY', '\x20(max\x20+\x20mi', 'iority)\x20{\x0a', 'vLID1GMWLm', 'jSkb/alq0m', '3V1uXQd/tP', 'nt(documen', 'le\x22>Bloom\x20', 'ut\x27)?.valu', 'H3+fIp9+Xz', 'margin:\x200\x20', 'x;\x20align-i', 'st\x20deleteB', 'g,\x20b)\x20/\x2025', 'i4pTkCswxi', '0);\x0a\x20\x20\x20\x20\x20\x20', 'ment.getEl', '\x20\x20\x20\x20\x20\x20\x20fon', '47YRYPSPka', '2kRtlw3AKk', '0;\x0a\x20\x20\x20\x20\x20\x20\x20', '\x20=\x20hueValu', 'NfPH+Vz+Nv', 'MqiB+I5Gck', 'rid.innerH', 'ePF0WPC2WV', 'ress\x20<\x200.5', 'case\x20g\x20/\x202', '8fdlIitCLH', 'lWidth,\x20re', 'IOTku4sEYx', 've\x20Everyth', 'QOpGak6gOL', 'BqBI/u3r9/', '25qV9s2/su', '2pnXQVsPzz', '1YmLFHghqo', 'R3g1whK+bC', '\x2010px;\x20tex', 'ePreview()', 'ECNEppXbIE', 'enter;\x0a\x20\x20\x20', 'rseInt(doc', '\x20image-ren', 'ner\x22>\x0a\x20\x20\x20\x20', '7+2xvpt1/G', 'mFlipY\x20=\x20f', 'font-size:', '93p0nk+DEL', 'lWidth\x20+\x20b', 'K4MCFE9Aqp', 'h0mg3BbjwM', 'I1weDY3Mo2', 'caUzU8NYQa', 'UPDeLb0Wjm', 'CJyKD6J09f', 'div\x20style=', 'N2+Kz/r86T', 'NPvFaiCZ70', 'vWbgxUmnn9', '/+ahUXc5Yr', '{\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'WFmnBUxR1M', 'Jp4fW1bmtr', '|\x2015;\x0a\x20\x20\x20\x20', 'HeDDZ4rYmA', 'blim3XOZ7X', '.height\x20=\x20', '\x20\x20\x20\x20\x20start', '9hSN/8eej+', 'dirname', 'rBLWftY11t', 'Zy+Ol34Nrb', '2y+58PpN2Q', '100%;\x0a\x20\x20\x20\x20', '3HzfrUzHoj', 'MnKq1wFSLT', 'd(editorOf', 'i+DBUu3yMf', 'sceUugE8/O', '\x20\x20async\x20fu', 'put\x27).valu', '0wYzBW5mYt', 'wHrP1ou+Dp', 'round:\x20#55', '\x20class=\x22co', 'mData.inte', 'deIn\x27)\x20{\x0a\x20', 'ection-tit', 'tionProgre', 'id=\x22flipHo', '8tKYESTBdR', 'WXaO/S7tOe', '\x22>\x0a\x20\x20<labe', 'ue:\x20<span\x20', 'RGfnSmUOFM', 'argetSprit', 'lur\x20*\x204,\x20f', 'nt:\x20center', '\x20\x20\x20\x20\x20tempC', 'zDumKBbwBa', '1Lb7W/Xorr', 'tFPokGfSab', 'O6Y+vOOMwG', '\x20text-alig', 'zAPArgCAUa', 'q\x20-\x20p)\x20*\x206', 'width:\x20900', '3iolhZTU4V', 'ght:\x20600;\x0a', 'nsition:\x20b', 'uHnZ+4FBD0', 'Name\x20=\x20doc', '\x20\x20\x20\x20\x20let\x20r', 'vas.height', 'WZH/VeHx0g', 'UEVZCgzuuk', 'TH9oTOwabi', 'h.min(anim', 'ej0NCHeZdm', 'TmPgVIEsJ5', 'if\x20(t\x20<\x200)', '\x22randomFli', 'ntInput\x27)?', 'CmeCVT4Mvn', '-radius:\x205', 'const\x20fina', 'gS2lK8/paP', 'jUrW7YFCWP', 'click\x20=\x20(e', 'dth;\x0a\x20\x20\x20\x20\x20', 'sition:\x20op', '\x20+\x20animDat', '\x20<\x201/2)\x20re', 'xgNWeMeizr', 'SdPiHzqnAc', 'reduce\x20ani', '\x20\x20\x20\x20window', 'ZRFM9i6bvG', 'izgm7Gzkbx', '\x20\x20\x20\x20\x20\x20heig', 'kdZJItaaCC', 'L3Tv9sz4id', 'ame,\x20animD', 'width\x20/\x20co', 'focus', 'ent.getEle', '\x20style=\x22di', 'kOND0Idvxn', 'AAANSUhEUg', '\x20\x20\x27Normal\x27', 'AYudGF2xMc', 'FTgqopSRzY', 'yId(\x27bloom', 'UIw2HbtMA9', 'jTf6xOPUOo', 'stringify', '\x22Multiply\x22', 'play:\x20none', 'bx4Mue3HLo', 'replace', 'CWCDSCa7ev', 'nvas.addEv', 'S4KjyV5SrV', 'R4T4zr0kLv', 'parse', '\x20\x20scaleX\x20=', '\x20\x20\x20\x20\x20displ', '9YVmiD8B7y', '\x20\x20if\x20(t\x20<\x20', 'hGQidHtAAj', '6YpXI3sJyk']; _0x2d2f = function () { return _0x3dad37; }; return _0x2d2f(); }
})();