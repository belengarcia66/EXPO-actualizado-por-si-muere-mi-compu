/*:
 * @target MZ
 * @plugindesc Create Hotbar on the screen using drag-n-drop
 * @author Sang Hendrix
 * @url https://sanghendrix.itch.io
 * 
 * @help
 * Version 2.0.7
 * For support, please reach out:
 * Discord: https://discord.gg/YKPscqHV8b
 * Patreon: https://www.patreon.com/SangHendrix
 * ----------------------------------------------------------------------------
 * This RPG Maker MZ plugin helps you easily create a hotbar/quick-use slot UI
 * in realtime
 * ----------------------------------------------------------------------------
 * HOW TO USE
 * ----------------------------------------------------------------------------
 * Playtest game > Click the bottom-right button on screen > Play around!
 * Create a Grid first, then select that grid and create slots. Use your mouse
 * to drag grid or slots anywhere on screen.
 * ----------------------------------------------------------------------------
 * 
 * ■■ SLOTS PARAMETER EXPLAINATION ■■
 * 
 * - Slot Name:         When equipping an item or a skill, it'll
 *                      display a list of slot and this name will appear on the list
 * - Button Text:       A text to display on the slot, can be a keyboard/gamepad button
 * - Special Behavior:  
 *   + Display Equipped Weapon: This slot will automatically display equipped weapon
 *   + Display Equipped Shield: Same but for shield
 *   + Item Slot Only: This slot will only avaiable for Items
 *   + Skill Slot Only: Same but for Skills
 * 
 *   + Example:  Slot Name: Slot 1
 *               Button Text: Q (keyboard), RB (gamepad) (optional)
 *               Special Behavior: none
 *            -> When gamepad is connected, Button Text shows RB
 * 
 * ■■ ITEM/WEAPON/SKILL/ARMOR NOTETAG ■■
 * 
 * <slot text: x, (optional: offset x, y)>   # Display a text on a slot that contains this item
 * <slot image: x>                           # Use custom image from folder pictures/slotUI
 * <slot cooldown: seconds, show number?>    # Set cooldown for this item
 * <slot disallow>                           # Disallow the item to be equipped to any slot
 * 
 * Example: <slot text: haha> or <slot text: haha, 0, -30>
 *          <slot image: Potion>
 *          <slot cooldown: 5> or <slot cooldown: 5, false> (not showing countdown)
 * 
 * ----------------------------------------------------------------------------
 * TERMS OF USE
 * ----------------------------------------------------------------------------
 * https://www.rpgmakeractioncombat.com/p/sang-hendrixs-rpg-maker-plugin-terms-of.html
 * ----------------------------------------------------------------------------
 * @command aa
 * @text ---------------------------------
 * 
 * @command ---c
 * @text ■ GENERAL USES
 * 
 * @command aaa
 * @text ---------------------------------
 * 
 * @command HotbarInputStatus
 * @text Hotbar Input Status
 * @desc Allow or disable player hotbar input
  * 
 * @arg Status
 * @type boolean
 * @text Allow Hotbar Input
 * @desc Allow player to use hotbar
 * @default true
 * 
 * @command LockSlot
 * @text Lock/Unlock Slot
 * @desc Lock or unlock a slot to prevent equipping/unequipping items
 * 
 * @arg SlotName
 * @type string
 * @text Slot Name
 * @desc The name of the slot to lock/unlock
 * 
 * @arg Lock
 * @type boolean
 * @text Lock Slot
 * @desc True: Lock. False: Unlock
 * @default true
 * 
 * @command UseSelectedSlot
 * @text Gamepad  | Use Selected Slot
 * @desc Uses whatever item or skill is equipped in the currently selected slot
 * 
 * @command UseSlot
 * @text Keyboard | Use a Slot
 * @desc Uses whatever item or skill is equipped in the specified slot
 * 
 * @arg Name
 * @type text
 * @text Slot Name
 * @desc The name of the slot to use
 * 
 * @command aax
 * @text ---------------------------------
 * 
 * @command ---v
 * @text ■ ONLY FOR MANUAL USES
 * 
 * @command aaax
 * @text ---------------------------------
 * 
 * @command SetSkill
 * @text Push to Slot
 * @desc Put something to a slot. Can be an item, a weapon or a skill.
 * 
 * @arg Name
 * @type text
 * @text Slot Name
 * @desc The name of the slot to set
 * 
 * @arg skillId
 * @type skill
 * @text Skill
 * @desc The skill to set in this slot
 * @default 0
 * 
 * @arg itemId
 * @type item
 * @text Item
 * @desc The item to set in this slot
 * @default 0
 * 
 * @arg weaponId
 * @type weapon
 * @text Weapon
 * @desc The weapon to set in this slot
 * @default 0
 * 
 * @command RemoveFromSlot
 * @text Remove from Slot
 * @desc Removes whatever is in the specified slot
 * 
 * @arg Name
 * @type text
 * @text Slot Name
 * @desc The name of the slot to clear
 * 
 * @command PushNextStuff
 * @text Keyboard |  Push Next Available Item
 * @desc Pushes the next available weapon/shield/item/skill to the specified slot
 * 
 * @arg Name
 * @type text
 * @text Slot Name
 * @desc The name of the slot to push to
 * 
 * @arg Type
 * @type select
 * @option Weapon
 * @option Shield
 * @option Item
 * @option Skill
 * @text Item Type
 * @desc Type of item to push to the slot
 * 
 * @command GamepadPushNextStuff
 * @text Gamepad  |  Push Next Available Item
 * @desc Pushes the next available weapon/shield/item/skill to the currently selected slot
 * 
 * @arg Type
 * @type select
 * @option Weapon
 * @option Shield
 * @option Item
 * @option Skill
 * @text Item Type
 * @desc Type of item to push to the selected slot
 * 
 * @command AllowItemUse
 * @text Allow/Disallow Things Use
 * @desc Control whether specific items, weapons, armors, or skills can be used in the hotbar
 * 
 * @arg TargetType
 * @type select
 * @option Item
 * @value item
 * @option Weapon
 * @value weapon
 * @option Armor
 * @value armor
 * @option Skill
 * @value skill
 * @text Target Type
 * @desc Type of item to allow/disallow
 * @default item
 * 
 * @arg TargetIdName
 * @type text
 * @text Target ID/Name
 * @desc ID or Name of the item, weapon, armor, or skill. Support expressions.
 * @default 1
 * 
 * @arg Status
 * @type boolean
 * @text Allow Use
 * @desc True: Allow use in hotbar. False: Disallow use in hotbar
 * @default true
 * 
 * @param showHotbarButton
 * @text Show Hotbar Button
 * @type boolean
 * @desc Show the button to open the Hotbar visual editor. Turns off automatically on deployment.
 * @default true
 * 
 * @param 5cccccxcxczxczxc
 * @text --------------------------
 * @default --------------------------
 * 
 * @param deszco1wcc
 * @text ■ SLOT SETTINGS
 * 
 * @param 6cc
 * @text --------------------------
 * @default --------------------------
 * 
 * @param GamepadCursorImage
 * @text Gamepad Cursor Image
 * @type file
 * @dir img/system
 * @desc Image to use as cursor when using gamepad
 * @default
 * 
 * @param EmptySlotIcon
 * @text Empty Slot Icon
 * @type icon
 * @desc The icon for unoccupied slot in window slot selection.
 * @default 16
 * 
 * @param GamepadUseSlotButton
 * @text Gamepad Use Slot Button
 * @type select
 * @option None
 * @value none
 * @option A
 * @value A
 * @option B
 * @value B
 * @option X
 * @value X
 * @option Y
 * @value Y
 * @option LB
 * @value LB
 * @option RB
 * @value RB
 * @option LT
 * @value LT
 * @option RT
 * @value RT
 * @option Back
 * @value Back
 * @option Start
 * @value Start
 * @desc Gamepad button to use the currently selected slot
 * @default A
 * 
 * @param TouchInput
 * @text Touch Input
 * @type boolean
 * @desc Allow players to touch/click slots to use item from that slot
 * @default false
 * 
 * @param AllowEquipNonUsable
 * @text Equip Non-usable Stuff
 * @type boolean
 * @desc Allow equipping skills/items that are not usable in menu to hotbar slots
 * @default true
 * 
 * @param PartyMembersHotbar
 * @text Party Members Hotbar
 * @parent SlotSettings
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Allow each party members to have unique hotbar slots for equipping skills.
 * @default true
 * 
 * @param 1z
 * @text --------------------------
 * @default --------------------------
 * 
 * @param deszco1
 * @text ■ VISIBILITY SETTINGS
 * 
 * @param 2zz
 * @text --------------------------
 * @default --------------------------
 * 
 * @param VisibilitySwitch
 * @text UI Visibility Switch
 * @type switch
 * @desc If ON, UI will be visible. If OFF, UI will be hidden. 0 to always ON.
 * @default 0
 * 
 * @param hideWhenOnPlayer
 * @text Hide UI when On Player
 * @type boolean
 * @desc Fade UI when the player is behind it
 * @default true
 * 
 * @param HideUIduringMessage
 * @text Hide UI during Message
 * @type boolean
 * @desc Fade UI when a message window is open
 * @default true
 * 
 * @param ShowZeroQuantity
 * @text Show Zero Quantity
 * @type boolean
 * @desc Show quantity even when it's zero
 * @default false
 * 
 * @param UnequipEmptyItems
 * @text Unequip Empty Items
 * @type boolean
 * @desc Unequip items when their quantity reaches zero
 * @default true
 * 
 * @param 3z
 * @text --------------------------
 * @default --------------------------
 * 
 * @param deszco1wz
 * @text ■ TEXT ON SLOT
 * 
 * @param 4zz
 * @text --------------------------
 * @default --------------------------
 * 
 * @param ShowItemQuantity
 * @text Show Item Quantity
 * @type boolean
 * @desc Shows the quantity of items in slots
 * @default true
 * 
 * @param QuantityTextOffsetY
 * @text Quantity Text Height
 * @type number
 * @min -9999
 * @desc Vertical offset for the quantity text
 * @default 0
 * 
 * @param ShowManaCost
 * @text Show Mana Cost
 * @type boolean
 * @desc Show mana/MP cost if the slot is equipped with a skill
 * @default false
 * 
 * @param ManaCostHeight
 * @text Mana Cost Height
 * @type number
 * @min -9999
 * @desc Vertical offset for the mana cost text
 * @default 0
 * 
 * @param 3zxcxewr
 * @text --------------------------
 * @default --------------------------
 * 
 * @param deszco1wz23412edsd
 * @text ■ BUTTON ICON REPLACEMENT
 * 
 * @param 4zzxcxbsdf
 * @text --------------------------
 * @default --------------------------
 * 
 * @param IconReplacements
 * @text Icon Replacements
 * @type struct<IconReplacement>[]
 * @desc Replace button text with icons
 * @default []
 * 
 * @param IconMaxSize
 * @text Icon Size
 * @type number
 * @desc Size for button icons
 * @default 24
 * 
 * @param 3zxcqwe123
 * @text --------------------------
 * @default --------------------------
 * 
 * @param deszco1wzcv
 * @text ■ WINDOW SETTINGS
 * 
 * @param 4zzdd
 * @text --------------------------
 * @default --------------------------
 * 
 * @param WindowSelectionSize
 * @text Window Size
 * @type string
 * @desc Format: Width, number of commands show by default. This window will show when you assign item/skill to hotbar.
 * @default 400, 8
 * 
 * @param UseNowText
 * @text Use Now Text
 * @type string
 * @desc Text to display for the "Use Now" option in slot selection window
 * @default Use Now
 * 
 * @param EmptySlotText
 * @text Empty Slot Text
 * @type string
 * @desc Text to display for empty slots in slot selection window
 * @default Empty
 * 
 * @param 7xczz
 * @text --------------------------
 * @default --------------------------
 * 
 * @param deszco1wx
 * @text ■ FONT SETTINGS
 * 
 * @param 8xczz
 * @text --------------------------
 * @default --------------------------
 * 
 * @param FontSettings
 * @text Font Settings
 * @type struct<FontSettings>
 * @desc Font settings for UI text
 */
/*~struct~FontSettings:
 * @param FontFile
 * @text Font File
 * @type string
 * @desc Custom font file (.ttf, .otf) from fonts folder. Leave blank to use default.
 * @default
 * 
 * @param FontSize
 * @text Font Size
 * @type number
 * @desc Font size for UI text. Leave at 0 to use default game setting.
 * @default
 * 
 * @param FontColor
 * @text Font Color
 * @type text
 * @desc Hex color code for text (e.g., #ffffff). Leave blank to use default.
 * @default 
 * 
 * @param OutlineColor
 * @text Font Outline Color
 * @type text
 * @desc Hex color code for text outline (e.g., #000000). Leave blank to use default.
 * @default 
 * 
 * @param TextShadow
 * @text Use Text Shadow
 * @type boolean
 * @desc Use text shadow instead of outline
 * @default false
*/

/*~struct~AdditionalTextDisplay:
 * @param TextToDisplay
 * @text Text to Display
 * @type text
 * @desc Expression to evaluate for text display. Example: $gameVariables.value(1) or 'hello'
 * @default
 * 
 * @param SlotName
 * @text Display at
 * @type text
 * @desc Display at a slot name
 * @default
 * 
 * @param Offset
 * @text Position Offset
 * @type text
 * @desc X,Y offset from default position (format: x, y)
 * @default 0, 0
 * 
 * @param Condition
 * @text Display Condition
 * @type text
 * @desc Condition that must be met to show text. Leave blank to always show.
 * @default
 */
/*~struct~IconReplacement:
 * @param ButtonName
 * @text Button Name
 * @type text
 * @desc The button name to replace with an icon (e.g., "Left Click", "Q", "RB")
 * @default Left Click
 * 
 * @param Icon
 * @text Icon Index
 * @type icon
 * @desc The icon to display instead of the button text
 * @default 1
 */

var Imported = Imported || {};
Imported.Hendrix_Hotbar_Creator = true;

(() => {
    const pluginName = "Hendrix_Hotbar_Creator";
    const parameters = PluginManager.parameters(pluginName);
    const visibilitySwitchId = Number(parameters.VisibilitySwitch || 0);
    const hideUIduringMessage = parameters.HideUIduringMessage === 'true';
    const showItemQuantity = parameters.ShowItemQuantity === 'true';
    const showZeroQuantity = parameters.ShowZeroQuantity === 'true';
    const unequipEmptyItems = parameters.UnequipEmptyItems === 'true';
    const quantityTextOffsetY = Number(parameters.QuantityTextOffsetY || 0);
    const showManaCost = parameters.ShowManaCost === 'true';
    const manaCostHeight = Number(parameters.ManaCostHeight || 0);
    const gamepadCursorImage = parameters.GamepadCursorImage;
    const emptySlotIcon = Number(parameters.EmptySlotIcon || 0);
    const windowSizeStr = parameters.WindowSelectionSize || '400, 500';
    const enableTouchInput = parameters.TouchInput === 'true';
    const useNowText = parameters.UseNowText || 'Use Now';
    const emptySlotText = parameters.EmptySlotText || 'Empty';
    const [windowWidth, visibleCommands] = windowSizeStr.split(',').map(s => Number(s.trim()));
    const iconReplacements = JSON.parse(parameters.IconReplacements || '[]').map(replacement => { const parsed = JSON.parse(replacement); return { buttonName: parsed.ButtonName.toLowerCase(), iconIndex: Number(parsed.Icon || 1) } });
    const iconMaxSize = Number(parameters.IconMaxSize || 24);
    const additionalTextDisplays = JSON.parse(parameters.AdditionalTextDisplays || '[]').map(display => { const parsed = JSON.parse(display); const offset = (parsed.Offset || '0, 0').split(',').map(v => Number(v.trim())); return { textToDisplay: parsed.TextToDisplay, slotName: parsed.SlotName, offsetX: offset[0], offsetY: offset[1], condition: parsed.Condition } });
    const fontSettings = parameters.FontSettings ? JSON.parse(parameters.FontSettings) : {};
    const fontSize = Number(fontSettings.FontSize || 0);
    const fontColor = fontSettings.FontColor || '';
    const outlineColor = fontSettings.OutlineColor || '';
    const useTextShadow = fontSettings.TextShadow === 'true';
    const allowEquipNonUsable = parameters.AllowEquipNonUsable === 'true';
    const partyMembersHotbar = parameters['PartyMembersHotbar'] !== 'false';
    const hideWhenOnPlayer = parameters['hideWhenOnPlayer'] !== 'false';
    const showHotbarButton = parameters['showHotbarButton'] !== 'false';
    const SNAP_THRESHOLD = 5;
    let isHotbarInitializing = false;
    let hotbarInputEnabled = true;
    const _lockedSlots = new Set();
    let gridSettings = [];
    function readUIPositions() {
        if (Utils.isNwjs()) {
            const fs = require('fs');
            const path = require('path');
            const filePath = path.join(process.mainModule.filename, '..', 'js', 'HotbarConfig.json');
            if (fs.existsSync(filePath)) {
                const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
                return data.positions || {};
            }
        }
        return {};
    }

    function saveHotbarPositions(positions) {
        if (Utils.isNwjs()) {
            const fs = require('fs');
            const path = require('path');
            const filePath = path.join(process.mainModule.filename, '..', 'js', 'HotbarConfig.json');

            let configData = { grids: [], positions: {} };
            if (fs.existsSync(filePath)) {
                configData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            }

            configData.positions = positions;

            fs.writeFileSync(filePath, JSON.stringify(configData, null, 2));
        }
    }

    function loadPositionsFromFile() {
        if (!Utils.isNwjs()) {
            fetch('js/HotbarConfig.json')
                .then(response => response.json())
                .then(data => {
                    window.$uiPositions = data.positions || {};
                    localStorage.setItem('HendrixHotbarPositions', JSON.stringify(data.positions || {}));
                    if (SceneManager._scene && SceneManager._scene._skillUI) {
                        SceneManager._scene._skillUI._slots.forEach((slot, name) => {
                            if (data.positions && data.positions[name]) {
                                slot.x = data.positions[name].x;
                                slot.y = data.positions[name].y;
                            }
                        });
                    }
                })
        }
    }

    window.$uiPositions = readUIPositions();
    if (!Utils.isNwjs()) {
        setTimeout(loadPositionsFromFile, 500);
    }

    function isItemDisallowed(item) {
        if (!item || !item.note) return false;
        return item.note.includes('<slot disallow>');
    }

    function canUseSlot(slotName) {
        if (!SceneManager._scene._skillUI || $gameMessage.isBusy() || $gameMap.isEventRunning()) return false;
        if (!hotbarInputEnabled) return false;
        const slot = SceneManager._scene._skillUI._slots.get(slotName);
        if (!slot) return false;
        if (slot._bounceDuration > 0) return false;
        const slotData = _slotData.get(slotName);
        if (!slotData) return false;
        if (isOnGlobalCooldown(slotData.type, slotData.id)) return false;
        return true;
    }

    const loadCustomFont = (fontFile) => {
        if (!fontFile) return null;

        const fontFace = fontFile.split('.')[0];
        const fontPath = `fonts/${fontFile}`;

        try {
            if (window.FontFace) {
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
        } catch (e) {
            console.error('Error loading font:', e);
        }

        return fontFace;
    };

    const customFontFace = loadCustomFont(fontSettings.FontFile);

    const applyFontSettings = (bitmap) => {
        if (fontSize > 0) bitmap.fontSize = fontSize;
        if (Utils.RPGMAKER_NAME === "MV") {
            bitmap.fontFace = customFontFace || 'GameFont';
        } else {
            bitmap.fontFace = customFontFace || $gameSystem.mainFontFace();
        }
        bitmap.smooth = false;
        if (fontColor) {
            bitmap.textColor = fontColor;
        } else {
            if (Utils.RPGMAKER_NAME === "MV") {
                bitmap.textColor = '#ffffff';
            } else {
                bitmap.textColor = ColorManager.normalColor();
            }
        }
        if (useTextShadow) {
            bitmap.outlineWidth = 0;
            bitmap._drawTextShadow = true;
        } else {
            bitmap._drawTextShadow = false;
            bitmap.outlineWidth = 4;
            if (outlineColor) {
                bitmap.outlineColor = outlineColor;
            } else {
                bitmap.outlineColor = 'rgba(0, 0, 0, 0.8)';
            }
        }
    };

    if (!Imported.Hendrix_Keyboard_Gamepad) {
        window.GamepadButtons = {
            'A': 0,
            'B': 1,
            'X': 2,
            'Y': 3,
            'LB': 4,
            'RB': 5,
            'Back': 8,
            'Start': 9,
            'LS-Press': 10,
            'RS-Press': 11,
            'Up': 12,
            'Down': 13,
            'Left': 14,
            'Right': 15,
            'LT': 6,
            'RT': 7
        };
    }

    const charToKeyCode = {
        'backspace': 8, 'tab': 9, 'enter': 13, 'shift': 16, 'ctrl': 17, 'alt': 18, 'pause': 19, 'capslock': 20,
        'esc': 27, 'space': 32, 'pageup': 33, 'pagedown': 34, 'end': 35, 'home': 36, 'left': 37, 'up': 38,
        'right': 39, 'down': 40, 'insert': 45, 'delete': 46, '0': 48, '1': 49, '2': 50, '3': 51, '4': 52,
        '5': 53, '6': 54, '7': 55, '8': 56, '9': 57, 'a': 65, 'b': 66, 'c': 67, 'd': 68, 'e': 69, 'f': 70,
        'g': 71, 'h': 72, 'i': 73, 'j': 74, 'k': 75, 'l': 76, 'm': 77, 'n': 78, 'o': 79, 'p': 80, 'q': 81,
        'r': 82, 's': 83, 't': 84, 'u': 85, 'v': 86, 'w': 87, 'x': 88, 'y': 89, 'z': 90, 'windows': 91,
        'numpad0': 96, 'numpad1': 97, 'numpad2': 98, 'numpad3': 99, 'numpad4': 100, 'numpad5': 101,
        'numpad6': 102, 'numpad7': 103, 'numpad8': 104, 'numpad9': 105, 'multiply': 106, 'add': 107,
        'subtract': 109, 'decimalpoint': 110, 'divide': 111, 'f1': 112, 'f2': 113, 'f3': 114, 'f4': 115,
        'f5': 116, 'f6': 117, 'f7': 118, 'f8': 119, 'f9': 120, 'f10': 121, 'f11': 122, 'f12': 123,
        'numlock': 144, 'scrolllock': 145, 'semicolon': 186, 'equals': 187, 'comma': 188, 'dash': 189,
        'period': 190, 'forwardslash': 191, 'graveaccent': 192, 'openbracket': 219, 'backslash': 220,
        'closebracket': 221, 'singlequote': 222
    };

    const initializeKeyMapping = function () {
        if (Imported.Hendrix_Keyboard_Gamepad) {
            return;
        }

        Input.gamepadMapper = {
            ...Input.gamepadMapper,
            12: 'up',
            13: 'down',
            14: 'left',
            15: 'right'
        };

        const mappedKeys = new Set();

        gridSettings.forEach(grid => {
            grid.Slots.forEach(slot => {
                const slotConfig = typeof slot === 'object' ? slot : JSON.parse(slot);
                if (slotConfig.Button) {
                    const [keyboardBtn, gamepadBtn] = slotConfig.Button.split(',').map(b => b.trim());

                    if (keyboardBtn) {
                        const keyboardBtnLower = keyboardBtn.toLowerCase();
                        if (charToKeyCode.hasOwnProperty(keyboardBtnLower)) {
                            const keyCode = charToKeyCode[keyboardBtnLower];
                            if (!mappedKeys.has(keyCode)) {
                                Input.keyMapper[keyCode] = keyboardBtnLower;
                                mappedKeys.add(keyCode);
                            }
                        }
                    }

                    if (gamepadBtn && GamepadButtons.hasOwnProperty(gamepadBtn)) {
                        const buttonCode = GamepadButtons[gamepadBtn];
                        Input.gamepadMapper[buttonCode] = keyboardBtn.toLowerCase();
                    }
                }
            });
        });
    };

    function extractCooldown(notes) {
        const match = /<slot cooldown:\s*(\d+)(?:\s*,\s*(true|false))?\s*>/i.exec(notes);
        if (!match) return { duration: 0, showTimer: true };

        const duration = parseInt(match[1]);
        const showTimer = match[2] ? match[2].toLowerCase() === 'true' : true;

        return { duration, showTimer };
    }

    function getGlobalCooldownKey(type, id) {
        return `${type}_${id}`;
    }

    function isOnGlobalCooldown(type, id) {
        const key = getGlobalCooldownKey(type, id);
        const remainingFrames = _globalCooldowns.get(key);
        return remainingFrames && remainingFrames > 0;
    }

    function setGlobalCooldown(type, id, duration, showTimer) {
        const key = getGlobalCooldownKey(type, id);
        const frames = Math.floor(duration * 60);
        _globalCooldowns.set(key, frames);

        ALL_AVAILABLE_SLOTS.forEach(slotData => {
            const slot = slotData.slot;
            const data = _slotData.get(slotData.name);
            if (data && data.type === type && data.id === id) {
                _cooldownStates.set(slotData.name, {
                    duration: duration,
                    total: duration,
                    showTimer: showTimer
                });
                SceneManager._scene._skillUI.startCooldown(slotData.name, duration, showTimer);
            }
        });
    }

    function updateGlobalCooldowns() {
        for (const [key, frames] of _globalCooldowns.entries()) {
            if (frames <= 0) {
                _globalCooldowns.delete(key);
            }
        }
    }

    //-----------------------------------------------------------------------------

    const _slotData = new Map();
    const _cooldownStates = new Map();
    const _globalCooldowns = new Map();
    const ALL_AVAILABLE_SLOTS = [];

    const _Game_System_initialize = Game_System.prototype.initialize;
    Game_System.prototype.initialize = function () {
        _Game_System_initialize.call(this);
        this._uiSlotData = {};
        this._slotPositions = {};
    };

    ConfigManager.slotPositions = {};

    const _ConfigManager_makeData = ConfigManager.makeData;
    ConfigManager.makeData = function () {
        const config = _ConfigManager_makeData.call(this);
        config.slotPositions = this.slotPositions;
        return config;
    };

    const _ConfigManager_applyData = ConfigManager.applyData;
    ConfigManager.applyData = function (config) {
        _ConfigManager_applyData.call(this, config);
        this.slotPositions = config.slotPositions || {};
    };

    //-----------------------------------------------------------------------------
    //-----------------------------------------------------------------------------

    function Sprite_SkillSlot() {
        this.initialize(...arguments);
    }

    Sprite_SkillSlot.prototype = Object.create(Sprite.prototype);
    Sprite_SkillSlot.prototype.constructor = Sprite_SkillSlot;

    Sprite_SkillSlot.prototype.initialize = function (config) {
        Sprite.prototype.initialize.call(this);
        if (!config.Name || config.Name.trim() === '') {
            if (config.Button) {
                const buttonParts = config.Button.split(',').map(b => b.trim());
                if (buttonParts.length > 1) {
                    config.Name = `Slot ${buttonParts[0]}, Slot ${buttonParts[1]}`;
                } else {
                    config.Name = `Slot ${buttonParts[0]}`;
                }
            } else {
                if (Imported.Hendrix_Localization) {
                    config.Name = Hendrix_Localization(emptySlotText) + " " + Hendrix_Localization("Slot");
                } else {
                    config.Name = emptySlotText + " Slot";
                }
            }
        }

        const nameConfig = config.Name.split(',').map(n => n.trim());
        this._keyboardName = nameConfig[0];

        config.Name = this._keyboardName;
        this._config = config;
        this._skillId = 0;
        this._iconIndex = 0;
        this._itemQuantity = 0;
        this._skillManaCost = 0;
        this._lastItemId = null;
        this._lastItemType = null;
        this.anchor.x = 0.5;
        this.anchor.y = 0.5;

        this._flashDuration = 0;
        this._flashColor = [0, 0, 0, 0];

        this._cooldownContainer = new PIXI.Container();
        this.addChild(this._cooldownContainer);

        this._cooldownDuration = 0;
        this._cooldownTotal = 0;
        this._inCooldown = false;
        this._bounceDuration = 0;

        this._touching = false;
        this._touchHandler = this.handleTouch.bind(this);
        this.on('touchstart', this._touchHandler);
        this.on('click', this._touchHandler);
        this.on('mouseover', this._touchHandler);

        const specialBehavior = this._config.SpecialBehavior || 'none';
        if (
            (specialBehavior === 'none' ||
                specialBehavior === 'item_only' ||
                specialBehavior === 'skill_only') &&
            !ALL_AVAILABLE_SLOTS.some(slot => slot.name === config.Name)
        ) {
            ALL_AVAILABLE_SLOTS.push({
                name: config.Name,
                slot: this,
                specialBehavior: specialBehavior
            });
        }

        this.createBackground();
        this.createIcon();
        this.createButtonText();
        if (showItemQuantity) {
            this.createQuantityText();
        }
        if (showManaCost) {
            this.createManaCostText();
        }

        const slotData = _slotData.get(this._config.Name);
        if (slotData) {
            this._lastItemId = slotData.id;
            this._lastItemType = slotData.type;
        }
        this.createAdditionalTexts();
        this.initializeDrag();
    };

    Sprite_SkillSlot.prototype.initializeDrag = function () {
        this._isDragging = false;
        this._dragOffsetX = 0;
        this._dragOffsetY = 0;
    };

    Sprite_SkillSlot.prototype.getZIndex = function () {
        if (!this.parent) return 0;
        return this.parent.children.indexOf(this);
    };

    Sprite_SkillSlot.prototype.updateDrag = function () {
        if (!SceneManager._scene._isDragMode || !Utils.isOptionValid('test')) return;

        if (currentSelectedGrid !== null) {
            const selGrid = gridSettings[currentSelectedGrid];
            if (selGrid && selGrid.Slots) {
                const slotName = this._config.Name.split(',')[0].trim();
                const belongsToSelected = selGrid.Slots.some(s => s.Name.split(',')[0].trim() === slotName);
                if (!belongsToSelected) return;
            }
        } else {
            return;
        }

        if (!this._isDragging && TouchInput.isTriggered()) {
            const touchX = TouchInput.x;
            const touchY = TouchInput.y;
            const slotRect = new Rectangle(
                this.x - this.width / 2,
                this.y - this.height / 2,
                this.width,
                this.height
            );

            if (touchX >= slotRect.x && touchX <= slotRect.x + slotRect.width &&
                touchY >= slotRect.y && touchY <= slotRect.y + slotRect.height) {

                let topmostSlot = this;
                let highestZ = this.getZIndex();

                if (SceneManager._scene._skillUI) {
                    SceneManager._scene._skillUI._slots.forEach((otherSlot) => {
                        if (otherSlot === this) return;

                        const otherRect = new Rectangle(
                            otherSlot.x - otherSlot.width / 2,
                            otherSlot.y - otherSlot.height / 2,
                            otherSlot.width,
                            otherSlot.height
                        );

                        if (touchX >= otherRect.x && touchX <= otherRect.x + otherRect.width &&
                            touchY >= otherRect.y && touchY <= otherRect.y + otherRect.height) {

                            const otherZ = otherSlot.getZIndex();
                            if (otherZ > highestZ) {
                                topmostSlot = otherSlot;
                                highestZ = otherZ;
                            }
                        }
                    });
                }

                if (topmostSlot !== this) return;

                this._isDragging = true;
                this._dragOffsetX = this.x - touchX;
                this._dragOffsetY = this.y - touchY;
            }
        }

        if (this._isDragging) {
            if (TouchInput.isPressed()) {
                let newX = TouchInput.x + this._dragOffsetX;
                let newY = TouchInput.y + this._dragOffsetY;

                const snapResult = calculateSnapPosition(this, newX, newY);
                newX = snapResult.x;
                newY = snapResult.y;

                this.x = Math.max(this.width / 2, Math.min(Graphics.width - this.width / 2, newX));
                this.y = Math.max(this.height / 2, Math.min(Graphics.height - this.height / 2, newY));
            } else {
                this._isDragging = false;
                SnapIndicatorManager.hideAll();

                if (!window.$uiPositions) window.$uiPositions = {};
                window.$uiPositions[this._config.Name] = {
                    x: this.x,
                    y: this.y
                };
            }
        }
    };

    Scene_Map.prototype.resetSlotPositions = function () {
        if (!this._skillUI) return;

        gridSettings.forEach(grid => {
            const rows = (grid.RowColumn || '1, 1').toString().split(',').map(v => Number(v.trim()));
            const cols = rows.length > 1 ? rows[1] : rows[0];
            const padding = Number(grid.Padding) || 4;
            const defaultPosition = (grid.Position || '0, 0').split(',').map(v => eval(v.trim()));
            const gridX = defaultPosition[0] || 0;
            const gridY = defaultPosition[1] || 0;

            if (this._skillUI._gridBackgrounds) {
                const gridBg = this._skillUI._gridBackgrounds.find(bg => bg._grid === grid);
                if (gridBg) {
                    gridBg.x = gridX;
                    gridBg.y = gridY;
                }
            }

            const firstSlot = this._skillUI._slots.get(grid.Slots[0].Name);
            if (!firstSlot) return;

            const width = firstSlot.width;
            const height = firstSlot.height;
            const gridWidth = (cols - 1) * (width + padding) + width;
            const gridHeight = (rows[0] - 1) * (height + padding) + height;
            const centerX = gridX - (gridWidth / 2) + (width / 2);
            const centerY = gridY - (gridHeight / 2) + (height / 2);

            grid.Slots.forEach((slotConfig, i) => {
                const slot = this._skillUI._slots.get(slotConfig.Name);
                if (slot) {
                    const row = Math.floor(i / cols);
                    const col = i % cols;
                    slot.x = centerX + (col * width) + (col * padding);
                    slot.y = centerY + (row * height) + (row * padding);
                }
            });
        });

        window.$uiPositions = {};
        saveHotbarPositions({});
    };

    Sprite_SkillSlot.prototype.handleTouch = function () {
        if (SceneManager._scene && SceneManager._scene._skillUI) {
            const ui = SceneManager._scene._skillUI;

            for (let i = 0; i < ui._gamepadGrids.length; i++) {
                const grid = ui._gamepadGrids[i];
                const slotIndex = grid.slots.findIndex(slot => slot.Name === this._config.Name);

                if (slotIndex !== -1) {
                    ui._gamepadCursor._currentGridIndex = i;
                    ui._gamepadCursor._currentSlotIndex = slotIndex;
                    ui.updateCursorTarget();
                    break;
                }
            }
        }
    };

    Sprite_SkillSlot.prototype.useSlotContents = function () {
        if (SceneManager._scene._isDragMode) return;
        if ($gameMessage.isBusy() || $gameMap.isEventRunning()) return;
        if (!hotbarInputEnabled) return;
        if (this._bounceDuration > 0) return;

        const slotData = _slotData.get(this._config.Name);
        if (!slotData) return;

        if (isItemDisallowedByCommand(slotData.type, slotData.id)) {
            return;
        }

        if (isOnGlobalCooldown(slotData.type, slotData.id)) {
            SoundManager.playBuzzer();
            return;
        }

        const actor = $gameParty.leader();
        let success = false;
        let cooldownData = { duration: 0, showTimer: true };

        switch (slotData.type) {
            case 'skill':
                const skill = $dataSkills[slotData.id];
                if (skill) {
                    const mpCost = actor.skillMpCost(skill);
                    if (actor.mp >= mpCost && actor.canUse(skill)) {
                        actor.gainMp(-mpCost);

                        if (skill.scope === 11) {
                            const action = new Game_Action(actor);
                            action.setSkill(slotData.id);
                            action.setTarget(actor.index());
                            action.apply(actor);
                        }

                        if (skill.effects) {
                            const commonEventEffect = skill.effects.find(effect => effect.code === 44);
                            if (commonEventEffect && $gameMap._interpreter) {
                                $gameMap._interpreter.clear();
                                $gameMap._interpreter.setup($dataCommonEvents[commonEventEffect.dataId].list);
                            }
                        }
                        cooldownData = extractCooldown(skill.note);
                        success = true;
                    } else {
                    }
                }
                break;

            case 'item':
                const item = $dataItems[slotData.id];
                if (item && $gameParty.hasItem(item) && actor.canUse(item)) {
                    if (item.effects) {
                        const commonEventEffect = item.effects.find(effect => effect.code === 44);
                        if (commonEventEffect && $gameMap._interpreter) {
                            $gameMap._interpreter.clear();
                            $gameMap._interpreter.setup($dataCommonEvents[commonEventEffect.dataId].list);
                        }
                    }
                    actor.useItem(item);

                    const action = new Game_Action(actor);
                    action.setItemObject(item);
                    action.setTarget(actor.index());
                    action.apply(actor);

                    cooldownData = extractCooldown(item.note);
                    success = true;

                    if (!$gameParty.hasItem(item) && unequipEmptyItems) {
                        this.setSkill(0, 0);
                        _slotData.delete(this._config.Name);
                        saveToSystem();
                    }
                } else {
                }
                break;

            case 'weapon':
                const weapon = $dataWeapons[slotData.id];
                if (weapon) {
                    cooldownData = extractCooldown(weapon.note);
                    success = true;
                }
                break;

            case 'armor':
                const armor = $dataArmors[slotData.id];
                if (armor) {
                    cooldownData = extractCooldown(armor.note);
                    success = true;
                }
                break;
        }

        if (success) {
            $gameParty.members().forEach(member => member.refresh());
            SceneManager._scene._skillUI.flashSlot(this._config.Name);

            if (cooldownData.duration > 0) {
                setGlobalCooldown(slotData.type, slotData.id, cooldownData.duration, cooldownData.showTimer);
            }
        }
    };

    Sprite_SkillSlot.prototype.isPointInside = function (x, y) {
        const slotRect = new Rectangle(
            this.x - this.width / 2,
            this.y - this.height / 2,
            this.width,
            this.height
        );

        return x >= slotRect.x && x <= slotRect.x + slotRect.width &&
            y >= slotRect.y && y <= slotRect.y + slotRect.height;
    };

    Spriteset_SkillUI.prototype.destroy = function () {
        Sprite.prototype.destroy.call(this);

        this._slots.forEach(slot => {
            slot.off('touchstart', slot._touchHandler);
            slot.off('click', slot._touchHandler);
            slot.off('mouseover', slot._touchHandler);
        });
    };

    Sprite_SkillSlot.prototype.createQuantityText = function () {
        this._quantitySprite = new Sprite();
        this._quantitySprite.bitmap = new Bitmap(96, 32);
        this._quantitySprite.anchor.x = 0.5;
        this._quantitySprite.y = 1;
        this.addChild(this._quantitySprite);

        if (this._config.BackgroundImage) {
            const bitmap = ImageManager.loadSystem(this._config.BackgroundImage);
            bitmap.addLoadListener(() => this.positionQuantityText());
        } else {
            this.positionQuantityText();
        }
    };

    Sprite_SkillSlot.prototype.positionQuantityText = function () {
        if (this._config.BackgroundImage) {
            const bitmap = ImageManager.loadSystem(this._config.BackgroundImage);
            this._quantitySprite.y = -bitmap.height / 2 + quantityTextOffsetY;
        } else {
            this._quantitySprite.y += -48 + quantityTextOffsetY;
        }
    };

    Sprite_SkillSlot.prototype.refreshQuantity = function () {
        if (!showItemQuantity) return;

        const data = _slotData.get(this._config.Name);
        if (!data) {
            if (this._quantitySprite) {
                this._quantitySprite.bitmap.clear();
            }
            return;
        }

        let quantity = 0;
        if (data.type === 'item') {
            const item = $dataItems[data.id];
            if (item) {
                quantity = $gameParty.numItems(item);
            }
        }

        if (this._itemQuantity !== quantity) {
            this._itemQuantity = quantity;
            this._quantitySprite.bitmap.clear();
            if (quantity > 0 || showZeroQuantity) {
                applyFontSettings(this._quantitySprite.bitmap);
                this._quantitySprite.bitmap.drawText(quantity.toString(), 0, 0, 96, 32, 'center');
            }
        }
    };

    Sprite_SkillSlot.prototype.createManaCostText = function () {
        this._manaCostSprite = new Sprite();
        this._manaCostSprite.bitmap = new Bitmap(96, 32);
        this._manaCostSprite.anchor.x = 0.5;
        this._manaCostSprite.y = 1;
        this.addChild(this._manaCostSprite);

        if (this._config.BackgroundImage) {
            const bitmap = ImageManager.loadSystem(this._config.BackgroundImage);
            bitmap.addLoadListener(() => this.positionManaCostText());
        } else {
            this.positionManaCostText();
        }
    };

    Sprite_SkillSlot.prototype.positionManaCostText = function () {
        if (this._config.BackgroundImage) {
            const bitmap = ImageManager.loadSystem(this._config.BackgroundImage);
            this._manaCostSprite.y = -bitmap.height / 2 + manaCostHeight;
        } else {
            this._manaCostSprite.y += -48 + manaCostHeight;
        }
    };

    Sprite_SkillSlot.prototype.refreshManaCost = function () {
        if (!showManaCost) return;

        const data = _slotData.get(this._config.Name);
        if (!data) {
            if (this._manaCostSprite) {
                this._manaCostSprite.bitmap.clear();
            }
            return;
        }

        let manaCost = 0;
        if (data.type === 'skill') {
            const skill = $dataSkills[data.id];
            if (skill) {
                manaCost = skill.mpCost;
            }
        }

        if (this._skillManaCost !== manaCost) {
            this._skillManaCost = manaCost;
            this._manaCostSprite.bitmap.clear();
            if (manaCost > 0) {
                applyFontSettings(this._manaCostSprite.bitmap);
                this._manaCostSprite.bitmap.drawText(manaCost.toString(), 0, 0, 96, 32, 'center');
            }
        }
    };

    Sprite_SkillSlot.prototype.update = function () {
        this.refreshQuantity();
        this.refreshManaCost();
        this.updateAdditionalTexts();
        this.updateFlash();
        this.updateCooldown();
        this.updateDrag();
    };

    Sprite_SkillSlot.prototype.createButtonText = function () {
        this._buttonSprite = new Sprite();
        this._buttonSprite.bitmap = new Bitmap(128, 32);
        this._buttonSprite.anchor.x = 0.5;
        this._buttonSprite.anchor.y = 0.5;
        this.addChild(this._buttonSprite);
        if (this._config.BackgroundImage) {
            const bitmap = ImageManager.loadSystem(this._config.BackgroundImage);
            bitmap.addLoadListener(() => this.positionButtonText());
        } else {
            this.positionButtonText();
        }
        this.refreshButtonText();
    };

    Sprite_SkillSlot.prototype.positionButtonText = function () {
        if (this._config.BackgroundImage) {
            const bitmap = ImageManager.loadSystem(this._config.BackgroundImage);
            this._buttonSprite.y = bitmap.height / 2;
        }
        const offsetY = Number(this._config.TextOffsetY || 0);
        this._buttonSprite.y += offsetY;
    };

    Sprite_SkillSlot.prototype.refreshButtonText = function () {
        if (this._config.Button) {
            const buttons = this._config.Button.split(',').map(b => b.trim());
            const isGamepadMode = navigator.getGamepads && navigator.getGamepads()[0];

            let buttonText = '';

            if (Imported.Hendrix_Keyboard_Gamepad) {
                const slotName = this._config.Name.split(',')[0].trim();
                const actionName = slotName.replace('Slot ', '').toLowerCase();

                if (isGamepadMode) {
                    const keyboardButtonText = buttons[0].toLowerCase();

                    const hasGamepadButton = buttons.length > 1 && buttons[1] && buttons[1].trim() !== '';

                    if (!hasGamepadButton) {
                        if (typeof detectGamepadType === 'function') {
                            detectGamepadType();
                        }

                        if (window.HendrixGamepad && window.HendrixGamepad.getGamepadButtonForAction) {
                            buttonText = window.HendrixGamepad.getGamepadButtonForAction(keyboardButtonText);
                        }

                        if (!buttonText) {
                            buttonText = window.HendrixGamepad.getGamepadButtonForAction(actionName);
                        }
                    } else {
                        if (window.HendrixGamepad && window.HendrixGamepad.getGamepadButtonForAction) {
                            buttonText = window.HendrixGamepad.getGamepadButtonForAction(keyboardButtonText);
                        }

                        if (!buttonText) {
                            buttonText = window.HendrixGamepad.getGamepadButtonForAction(actionName);
                        }

                        if (!buttonText) buttonText = buttons[1];
                    }
                } else {
                    const originalButtonText = buttons[0].toLowerCase();

                    if (window.HendrixGamepad && window.HendrixGamepad.getKeyboardKeyForAction) {
                        buttonText = window.HendrixGamepad.getKeyboardKeyForAction(originalButtonText);
                    }

                    if (!buttonText) {
                        buttonText = window.HendrixGamepad.getKeyboardKeyForAction(actionName);
                    }

                    if (!buttonText) buttonText = buttons[0];
                }
            } else {
                buttonText = isGamepadMode ?
                    (buttons.length > 1 ? buttons[1] : '') :
                    buttons[0];

                if (isGamepadMode && buttons.length > 1) {
                    const gamepadButton = buttons[1];
                    if (GamepadButtons[gamepadButton]) {
                        const buttonCode = GamepadButtons[gamepadButton];
                        Input.gamepadMapper[buttonCode] = buttons[0].toLowerCase();
                    }
                } else {
                    const keyboardButton = buttons[0].toLowerCase();
                    if (charToKeyCode[keyboardButton]) {
                        const keyCode = charToKeyCode[keyboardButton];
                        Input.keyMapper[keyCode] = keyboardButton;
                    }
                }
            }

            const cacheKey = buttonText + '_' + !!isGamepadMode;
            if (this._lastButtonTextCache === cacheKey) return;
            this._lastButtonTextCache = cacheKey;

            const replacement = iconReplacements.find(r =>
                r.buttonName === buttonText.toLowerCase()
            );

            if (replacement) {
                this._buttonSprite.bitmap.clear();

                if (!this._buttonIconSprite) {
                    this._buttonIconSprite = new Sprite();
                    this._buttonIconSprite.bitmap = ImageManager.loadSystem('IconSet');
                    this._buttonIconSprite.anchor.x = 0.5;
                    this._buttonIconSprite.anchor.y = 0.5;
                    this._buttonIconSprite.bitmap.smooth = false;
                    this.addChild(this._buttonIconSprite);

                    if (this._config.BackgroundImage) {
                        const bitmap = ImageManager.loadSystem(this._config.BackgroundImage);
                        bitmap.addLoadListener(() => {
                            this._buttonIconSprite.y = bitmap.height / 2;
                            const offsetY = Number(this._config.TextOffsetY || 0);
                            this._buttonIconSprite.y += offsetY;
                        });
                    } else {
                        const offsetY = Number(this._config.TextOffsetY || 0);
                        this._buttonIconSprite.y += offsetY;
                    }
                }

                const iconIndex = replacement.iconIndex;
                const pw = ImageManager.iconWidth;
                const ph = ImageManager.iconHeight;
                const sx = (iconIndex % 16) * pw;
                const sy = Math.floor(iconIndex / 16) * ph;
                this._buttonIconSprite.setFrame(sx, sy, pw, ph);
                this._buttonIconSprite.visible = true;

                const scale = Math.min(iconMaxSize / pw, iconMaxSize / ph);
                this._buttonIconSprite.scale.x = scale;
                this._buttonIconSprite.scale.y = scale;
            } else {
                if (this._buttonIconSprite) {
                    this._buttonIconSprite.visible = false;
                }

                buttonText = buttonText.toUpperCase();
                this._buttonSprite.bitmap.clear();
                applyFontSettings(this._buttonSprite.bitmap);
                this._buttonSprite.bitmap.drawText(buttonText, 0, 0, 128, 32, 'center');
            }
        }
    };

    const extractSlotTextTags = (notesString) => {
        const results = [];
        const regex = /<slot text:\s*(.+?)(?:\s*,\s*(-?\d+)\s*,\s*(-?\d+))?\s*>/g;
        let match;

        while (match = regex.exec(notesString)) {
            results.push({
                text: match[1],
                offsetX: Number(match[2] || 0),
                offsetY: Number(match[3] || 0)
            });
        }

        return results;
    };

    Sprite_SkillSlot.prototype.createAdditionalTexts = function () {
        if (this._additionalTextSprites) {
            for (const sprite of this._additionalTextSprites.values()) {
                if (sprite.parent) {
                    sprite.parent.removeChild(sprite);
                }
            }
        }
        this._additionalTextSprites = new Map();
        let allDisplays = [];

        const parameterDisplays = additionalTextDisplays.filter(display => {
            if (display.slotName === this._config.Name) {
                return true;
            }

            const slotData = _slotData.get(this._config.Name);
            if (!slotData) return false;

            const slotNameLower = display.slotName.toLowerCase();

            if (slotData.type === 'weapon') {
                const weapon = $dataWeapons[slotData.id];
                if (!weapon) return false;

                if (slotNameLower.startsWith('weapon type:')) {
                    const targetType = display.slotName.split(':')[1].trim().toLowerCase();
                    const weaponTypeName = $dataSystem.weaponTypes[weapon.wtypeId].toLowerCase();
                    return weaponTypeName === targetType;
                }

                if (slotNameLower.startsWith('weapon name:')) {
                    const targetName = display.slotName.split(':')[1].trim().toLowerCase();
                    return weapon.name.toLowerCase() === targetName;
                }

                if (slotNameLower.startsWith('weapon id:')) {
                    const targetId = Number(display.slotName.split(':')[1].trim());
                    return weapon.id === targetId;
                }
            }

            if (slotData.type === 'armor') {
                const armor = $dataArmors[slotData.id];
                if (!armor) return false;

                if (slotNameLower.startsWith('armor type:')) {
                    const targetType = display.slotName.split(':')[1].trim().toLowerCase();
                    const armorTypeName = $dataSystem.armorTypes[armor.atypeId].toLowerCase();
                    return armorTypeName === targetType;
                }

                if (slotNameLower.startsWith('equipment type:')) {
                    const targetType = display.slotName.split(':')[1].trim().toLowerCase();
                    const equipTypeName = $dataSystem.equipTypes[armor.etypeId].toLowerCase();
                    return equipTypeName === targetType;
                }

                if (slotNameLower.startsWith('armor name:')) {
                    const targetName = display.slotName.split(':')[1].trim().toLowerCase();
                    return armor.name.toLowerCase() === targetName;
                }

                if (slotNameLower.startsWith('armor id:')) {
                    const targetId = Number(display.slotName.split(':')[1].trim());
                    return armor.id === targetId;
                }
            }

            if (slotData.type === 'skill') {
                const skill = $dataSkills[slotData.id];
                if (!skill) return false;

                if (slotNameLower.startsWith('skill name:')) {
                    const targetName = display.slotName.split(':')[1].trim().toLowerCase();
                    return skill.name.toLowerCase() === targetName;
                }

                if (slotNameLower.startsWith('skill id:')) {
                    const targetId = Number(display.slotName.split(':')[1].trim());
                    return skill.id === targetId;
                }

                if (slotNameLower.startsWith('skill type:')) {
                    const targetType = display.slotName.split(':')[1].trim().toLowerCase();
                    const skillTypeName = $dataSystem.skillTypes[skill.stypeId].toLowerCase();
                    return skillTypeName === targetType;
                }

                if (slotNameLower.startsWith('skill element:')) {
                    const targetElement = display.slotName.split(':')[1].trim().toLowerCase();
                    if (skill.damage && skill.damage.elementId > 0) {
                        const elementName = $dataSystem.elements[skill.damage.elementId].toLowerCase();
                        return elementName === targetElement;
                    }
                    return false;
                }
            }

            if (slotData.type === 'item') {
                const item = $dataItems[slotData.id];
                if (!item) return false;

                if (slotNameLower.startsWith('item name:')) {
                    const targetName = display.slotName.split(':')[1].trim().toLowerCase();
                    return item.name.toLowerCase() === targetName;
                }

                if (slotNameLower.startsWith('item id:')) {
                    const targetId = Number(display.slotName.split(':')[1].trim());
                    return item.id === targetId;
                }
            }

            return false;
        });

        allDisplays = [...parameterDisplays];

        const slotData = _slotData.get(this._config.Name);
        if (slotData) {
            let item;
            switch (slotData.type) {
                case 'weapon':
                    item = $dataWeapons[slotData.id];
                    break;
                case 'skill':
                    item = $dataSkills[slotData.id];
                    break;
                case 'item':
                    item = $dataItems[slotData.id];
                    break;
                case 'armor':
                    item = $dataArmors[slotData.id];
                    break;
            }

            if (item && item.note) {
                const notetagDisplays = extractSlotTextTags(item.note).map(tag => ({
                    textToDisplay: tag.text,
                    slotName: this._config.Name,
                    offsetX: tag.offsetX,
                    offsetY: tag.offsetY
                }));
                allDisplays = [...allDisplays, ...notetagDisplays];
            }
        }

        if (this._config.BackgroundImage) {
            const bitmap = ImageManager.loadSystem(this._config.BackgroundImage);
            bitmap.addLoadListener(() => this.positionAdditionalTexts(allDisplays));
        } else {
            this.positionAdditionalTexts(allDisplays);
        }
    };

    Sprite_SkillSlot.prototype.positionAdditionalTexts = function (slotDisplays) {
        for (const display of slotDisplays) {
            const sprite = new Sprite();
            sprite.bitmap = new Bitmap(96, 20);
            sprite.anchor.x = 0.5;

            if (this._config.BackgroundImage) {
                const bitmap = ImageManager.loadSystem(this._config.BackgroundImage);
                sprite.y = -bitmap.height / 2;
            } else {
                sprite.y = -48;
            }

            sprite.x += display.offsetX;
            sprite.y += display.offsetY;

            this.addChild(sprite);
            this._additionalTextSprites.set(display, sprite);
        }
    };

    Sprite_SkillSlot.prototype.updateAdditionalTexts = function () {
        const slotData = _slotData.get(this._config.Name);
        const currentId = slotData ? slotData.id : null;
        const currentType = slotData ? slotData.type : null;

        if (this._lastItemId !== currentId || this._lastItemType !== currentType) {
            this._lastItemId = currentId;
            this._lastItemType = currentType;
            this.createAdditionalTexts();
            return;
        }

        for (const [display, sprite] of this._additionalTextSprites.entries()) {
            let text = display.textToDisplay;
            if (text.includes('$game') || text.includes('eval(')) {
                text = eval(text);
            }

            if (sprite._currentText !== text) {
                sprite._currentText = text;
                sprite.bitmap.clear();
                applyFontSettings(sprite.bitmap);
                sprite.bitmap.drawText(String(text), 0, 0, 96, 20, 'center');
            }
        }
    };

    Sprite_SkillSlot.prototype.createBackground = function () {
        if (this._config.BackgroundImage) {
            this.bitmap = ImageManager.loadSystem(this._config.BackgroundImage);
        } else {
            this.bitmap = new Bitmap(48, 48);
            this.bitmap.fillRect(0, 0, 48, 48, 'rgba(0,0,0,0.5)');
        }
    };

    Sprite_SkillSlot.prototype.createIcon = function () {
        this._iconSprite = new Sprite();
        this._iconSprite.bitmap = ImageManager.loadSystem('IconSet');
        this._iconSprite.anchor.x = 0.5;
        this._iconSprite.anchor.y = 0.5;
        this.addChild(this._iconSprite);
        this._iconSprite.visible = false;

        this._customImageSprite = new Sprite();
        this._customImageSprite.anchor.x = 0.5;
        this._customImageSprite.anchor.y = 0.5;
        this.addChild(this._customImageSprite);
        this._customImageSprite.visible = false;
    };

    Sprite_SkillSlot.prototype.setSkill = function (skillId, iconIndex, quantity = 0) {
        this._skillId = skillId;
        this._iconIndex = iconIndex;

        this._iconSprite.visible = false;
        this._customImageSprite.visible = false;

        if (this._skillId > 0) {
            let item;
            const slotData = _slotData.get(this._config.Name);

            if (slotData) {
                switch (slotData.type) {
                    case 'skill':
                        item = $dataSkills[this._skillId];
                        break;
                    case 'item':
                        item = $dataItems[this._skillId];
                        break;
                    case 'weapon':
                        item = $dataWeapons[this._skillId];
                        break;
                    case 'armor':
                        item = $dataArmors[this._skillId];
                        break;
                }
            }

            if (item) {
                const notedata = item.note.split(/[\r\n]+/);
                let customImage = '';

                for (const line of notedata) {
                    if (line.match(/<slot image:\s*(.+)>/i)) {
                        customImage = RegExp.$1.trim();
                        break;
                    }
                }

                if (customImage) {
                    this._iconSprite.visible = false;
                    this._isUsingCustomImage = true;

                    const bitmap = ImageManager.loadBitmap('img/pictures/slotUI/', customImage);
                    bitmap.addLoadListener(() => {
                        if (!this._customImageSprite || !this.parent) return;

                        if (bitmap.width === 0 || bitmap.height === 0) {
                            this._isUsingCustomImage = false;
                            this._iconSprite.visible = true;
                            this.refreshIcon();
                            return;
                        }

                        this._customImageSprite.bitmap = bitmap;
                        this._customImageSprite.visible = true;
                        this._customImageSprite.scale.x = 1;
                        this._customImageSprite.scale.y = 1;
                    });
                } else {
                    this._customImageSprite.visible = false;
                    this._isUsingCustomImage = false;
                    this._iconSprite.visible = true;
                    this.refreshIcon();
                }

                if (slotData.type === 'item' && showItemQuantity) {
                    this.refreshQuantity(quantity);
                }
            }
        }
    };

    Sprite_SkillSlot.prototype.refreshIcon = function () {
        const pw = 32;
        const ph = 32;
        if (Utils.RPGMAKER_NAME === "MV") {
            const sx = (this._iconIndex % 16) * pw;
            const sy = Math.floor(this._iconIndex / 16) * ph;
            this._iconSprite.setFrame(sx, sy, pw, ph);
        } else {
            const pw = ImageManager.iconWidth;
            const ph = ImageManager.iconHeight;
            const sx = (this._iconIndex % 16) * pw;
            const sy = Math.floor(this._iconIndex / 16) * ph;
            this._iconSprite.setFrame(sx, sy, pw, ph);
        }
    };

    //-----------------------------------------------------------------------------
    //-----------------------------------------------------------------------------

    function Spriteset_SkillUI() {
        this.initialize(...arguments);
    }

    Spriteset_SkillUI.prototype = Object.create(Sprite.prototype);
    Spriteset_SkillUI.prototype.constructor = Spriteset_SkillUI;

    Spriteset_SkillUI.prototype.initialize = function () {
        Sprite.prototype.initialize.call(this);
        this._slots = new Map();
        this._fadeOpacity = 255;
        this._playerFadeOpacity = 1;
        this._gamepadGrids = [];
        this.createGrids();
        this.createGamepadCursor();
    };

    Spriteset_SkillUI.prototype.createGamepadCursor = function () {
        this._gamepadCursor = new Sprite();
        if (gamepadCursorImage) {
            this._gamepadCursor.bitmap = ImageManager.loadSystem(gamepadCursorImage);
            this._gamepadCursor.bitmap.addLoadListener(() => {
                this.initializeGamepadCursor();
            });
        } else {
            this._gamepadCursor.bitmap = new Bitmap(48, 48);
            const ctx = this._gamepadCursor.bitmap._context;
            ctx.strokeStyle = 'white';
            ctx.lineWidth = 2;
            ctx.strokeRect(0, 0, 48, 48);
            this.initializeGamepadCursor();
        }
    };

    Spriteset_SkillUI.prototype.initializeGamepadCursor = function () {
        this._gamepadCursor.anchor.x = 0.5;
        this._gamepadCursor.anchor.y = 0.5;
        this._gamepadCursor._targetSlot = null;
        this._gamepadCursor._currentGridIndex = -1;
        this._gamepadCursor._currentSlotIndex = -1;
        this.addChild(this._gamepadCursor);
        this._gamepadCursor.visible = false;

        if (this._gamepadGrids.length > 0) {
            this._gamepadCursor._currentGridIndex = 0;
            this._gamepadCursor._currentSlotIndex = 0;
            this.updateCursorTarget();
        }
    };

    Spriteset_SkillUI.prototype.update = function () {
        Sprite.prototype.update.call(this);

        const isVisible = visibilitySwitchId === 0 || $gameSwitches.value(visibilitySwitchId);
        this.visible = isVisible;

        if (isVisible) {
            if (hideUIduringMessage) {
                this.updateVisibility();
            }
            if (this._gridBackgrounds) {
                this.updateGridDragging();
            }
            this.updatePlayerOverlapFade();
        }
        this.updateGamepadNavigation();
    };

    Spriteset_SkillUI.prototype.updateGridDragging = function () {
        if (!SceneManager._scene._isDragMode || !Utils.isOptionValid('test')) return;

        let slotBeingDragged = false;
        this._slots.forEach(slot => {
            if (slot._isDragging) {
                slotBeingDragged = true;
            }
        });

        if (slotBeingDragged) return;

        this._gridBackgrounds.forEach(background => {
            if (!background._isDragging && TouchInput.isTriggered() && background.visible) {
                const touchX = TouchInput.x;
                const touchY = TouchInput.y;

                let clickingOnSlot = false;
                background._gridSlots = background._gridSlots || [];

                background._gridSlots.forEach(slot => {
                    const slotRect = new Rectangle(
                        slot.x - slot.width / 2,
                        slot.y - slot.height / 2,
                        slot.width,
                        slot.height
                    );

                    if (touchX >= slotRect.x && touchX <= slotRect.x + slotRect.width &&
                        touchY >= slotRect.y && touchY <= slotRect.y + slotRect.height) {
                        clickingOnSlot = true;
                    }
                });

                if (!clickingOnSlot) {
                    const gridRect = new Rectangle(
                        background.x - background.width / 2,
                        background.y - background.height / 2,
                        background.width,
                        background.height
                    );

                    if (touchX >= gridRect.x && touchX <= gridRect.x + gridRect.width &&
                        touchY >= gridRect.y && touchY <= gridRect.y + gridRect.height) {
                        background._isDragging = true;
                        background._dragOffsetX = background.x - touchX;
                        background._dragOffsetY = background.y - touchY;

                        if (!background._gridSlots || background._gridSlots.length === 0) {
                            background._gridSlots = [];
                            if (background._grid && background._grid.Slots) {
                                background._grid.Slots.forEach(slotConfig => {
                                    const slot = this._slots.get(typeof slotConfig === 'string' ? slotConfig : slotConfig.Name);
                                    if (slot) {
                                        background._gridSlots.push(slot);
                                    }
                                });
                            }
                        }

                        background._gridSlots.forEach(slot => {
                            slot._gridOffsetX = slot.x - background.x;
                            slot._gridOffsetY = slot.y - background.y;
                        });
                    }
                }
            }

            if (background._isDragging) {
                if (TouchInput.isPressed()) {
                    let newX = TouchInput.x + background._dragOffsetX;
                    let newY = TouchInput.y + background._dragOffsetY;

                    const gridRect = {
                        width: background.width,
                        height: background.height,
                        left: newX - background.width / 2,
                        right: newX + background.width / 2,
                        top: newY - background.height / 2,
                        bottom: newY + background.height / 2,
                        centerX: newX,
                        centerY: newY
                    };

                    const snapPoints = {
                        x: [0, Graphics.boxWidth / 2, Graphics.boxWidth],
                        y: [0, Graphics.boxHeight / 2, Graphics.boxHeight]
                    };

                    this._gridBackgrounds.forEach(otherBackground => {
                        if (otherBackground === background) return;

                        const otherRect = {
                            left: otherBackground.x - otherBackground.width / 2,
                            right: otherBackground.x + otherBackground.width / 2,
                            top: otherBackground.y - otherBackground.height / 2,
                            bottom: otherBackground.y + otherBackground.height / 2,
                            centerX: otherBackground.x,
                            centerY: otherBackground.y
                        };

                        snapPoints.x.push(otherRect.left, otherRect.right, otherRect.centerX);
                        snapPoints.y.push(otherRect.top, otherRect.bottom, otherRect.centerY);
                    });

                    for (const x of snapPoints.x) {
                        if (Math.abs(gridRect.left - x) < SNAP_THRESHOLD) {
                            newX = x + background.width / 2;
                            SnapIndicatorManager.show('slot_vertical', x);
                            break;
                        }
                        if (Math.abs(gridRect.right - x) < SNAP_THRESHOLD) {
                            newX = x - background.width / 2;
                            SnapIndicatorManager.show('slot_vertical', x);
                            break;
                        }
                        if (Math.abs(gridRect.centerX - x) < SNAP_THRESHOLD) {
                            newX = x;
                            SnapIndicatorManager.show('slot_vertical', x);
                            break;
                        }
                    }

                    for (const y of snapPoints.y) {
                        if (Math.abs(gridRect.top - y) < SNAP_THRESHOLD) {
                            newY = y + background.height / 2;
                            SnapIndicatorManager.show('slot_horizontal', y);
                            break;
                        }
                        if (Math.abs(gridRect.bottom - y) < SNAP_THRESHOLD) {
                            newY = y - background.height / 2;
                            SnapIndicatorManager.show('slot_horizontal', y);
                            break;
                        }
                        if (Math.abs(gridRect.centerY - y) < SNAP_THRESHOLD) {
                            newY = y;
                            SnapIndicatorManager.show('slot_horizontal', y);
                            break;
                        }
                    }

                    background.x = Math.max(background.width / 2,
                        Math.min(Graphics.width - background.width / 2, newX));
                    background.y = Math.max(background.height / 2,
                        Math.min(Graphics.height - background.height / 2, newY));

                    background._gridSlots.forEach(slot => {
                        slot.x = background.x + slot._gridOffsetX;
                        slot.y = background.y + slot._gridOffsetY;
                    });
                } else {
                    background._isDragging = false;
                    SnapIndicatorManager.hideAll();

                    const currentPositions = window.$uiPositions || {};
                    if (background._grid && background._grid.Slots && background._grid.Slots.length > 0) {
                        const firstSlot = background._grid.Slots[0];
                        let gridKey = 'grid_unknown';

                        if (typeof firstSlot === 'string') {
                            gridKey = 'grid_' + firstSlot;
                        } else if (firstSlot.Name) {
                            gridKey = 'grid_' + firstSlot.Name.split(',')[0].trim();
                        }

                        currentPositions[gridKey] = {
                            x: background.x,
                            y: background.y
                        };
                    }

                    background._gridSlots.forEach(slot => {
                        currentPositions[slot._config.Name] = {
                            x: slot.x,
                            y: slot.y
                        };
                    });

                    window.$uiPositions = currentPositions;
                    saveHotbarPositions(currentPositions);
                }
            }
        });
    };

    Spriteset_SkillUI.prototype.updateGamepadNavigation = function () {
        if (this._gamepadGrids.length === 0) {
            this._gamepadCursor.visible = false;
            return;
        }

        const isGamepadConnected = navigator.getGamepads && navigator.getGamepads()[0];
        this._gamepadCursor.visible = !!isGamepadConnected;

        if (!isGamepadConnected) return;

        this._gamepadCursor.visible = true;
        let moveRight, moveLeft, moveDown, moveUp;

        const gamepad = navigator.getGamepads()[0];
        if (Utils.RPGMAKER_NAME === "MV") {
            const isButtonPressed = (index) => {
                if (!gamepad.buttons[index]) return false;
                if (typeof gamepad.buttons[index] === 'object') {
                    return gamepad.buttons[index].pressed;
                }
                return gamepad.buttons[index] === 1;
            };

            moveRight = isButtonPressed(15);
            moveLeft = isButtonPressed(14);
            moveDown = isButtonPressed(13);
            moveUp = isButtonPressed(12);
        } else {
            moveRight = gamepad.buttons[15] && gamepad.buttons[15].pressed;
            moveLeft = gamepad.buttons[14] && gamepad.buttons[14].pressed;
            moveDown = gamepad.buttons[13] && gamepad.buttons[13].pressed;
            moveUp = gamepad.buttons[12] && gamepad.buttons[12].pressed;
        }

        if (!this._lastMoveTime) this._lastMoveTime = 0;
        const currentTime = Date.now();
        if (currentTime - this._lastMoveTime < 200) return;

        const currentGrid = this._gamepadGrids[this._gamepadCursor._currentGridIndex];
        if (!currentGrid) return;

        let newIndex = this._gamepadCursor._currentSlotIndex;
        const cols = currentGrid.cols;

        if (moveRight && newIndex % cols < cols - 1) {
            newIndex++;
            this._lastMoveTime = currentTime;
        } else if (moveLeft && newIndex % cols > 0) {
            newIndex--;
            this._lastMoveTime = currentTime;
        } else if (moveDown && newIndex + cols < currentGrid.slots.length) {
            newIndex += cols;
            this._lastMoveTime = currentTime;
        } else if (moveUp && newIndex - cols >= 0) {
            newIndex -= cols;
            this._lastMoveTime = currentTime;
        }

        if (newIndex !== this._gamepadCursor._currentSlotIndex) {
            this._gamepadCursor._currentSlotIndex = newIndex;
            this.updateCursorTarget();
        }
    };

    const _Game_Player_getInputDirection = Game_Player.prototype.getInputDirection;
    Game_Player.prototype.getInputDirection = function () {
        const gamepad = navigator.getGamepads && navigator.getGamepads()[0];
        if (gamepad) {
            const scene = SceneManager._scene;
            if (scene._skillUI && scene._skillUI._gamepadGrids.length > 0) {
                if (Utils.RPGMAKER_NAME === "MV") {
                    const isButtonPressed = (index) => {
                        if (!gamepad.buttons[index]) return false;
                        if (typeof gamepad.buttons[index] === 'object') {
                            return gamepad.buttons[index].pressed;
                        }
                        return gamepad.buttons[index] === 1;
                    };

                    if (isButtonPressed(12) || isButtonPressed(13) ||
                        isButtonPressed(14) || isButtonPressed(15)) {
                        return 0;  // Block player movement only when using D-pad
                    }
                } else {
                    if ((gamepad.buttons[12] && gamepad.buttons[12].pressed) ||
                        (gamepad.buttons[13] && gamepad.buttons[13].pressed) ||
                        (gamepad.buttons[14] && gamepad.buttons[14].pressed) ||
                        (gamepad.buttons[15] && gamepad.buttons[15].pressed)) {
                        return 0;
                    }
                }
            }
        }
        return _Game_Player_getInputDirection.call(this);
    };

    Spriteset_SkillUI.prototype.updateCursorTarget = function () {
        const currentGrid = this._gamepadGrids[this._gamepadCursor._currentGridIndex];
        if (!currentGrid) return;

        const slotConfig = currentGrid.slots[this._gamepadCursor._currentSlotIndex];
        if (!slotConfig) return;

        const slot = this._slots.get(slotConfig.Name);
        if (slot) {
            this._gamepadCursor._targetSlot = slot;
            this._gamepadCursor.visible = true;
            this._gamepadCursor.x = slot.x;
            this._gamepadCursor.y = slot.y;
        }
    };

    Spriteset_SkillUI.prototype.updateVisibility = function () {
        if ($gameMessage.isBusy()) {
            this._fadeOpacity = Math.max(0, this._fadeOpacity - 30);
        } else {
            this._fadeOpacity = Math.min(255, this._fadeOpacity + 30);
        }
    };

    Spriteset_SkillUI.prototype.isPlayerBehindHotbar = function () {
        if (!hideWhenOnPlayer) return false;
        if (!SceneManager._scene._spriteset) return false;

        const playerSprite = SceneManager._scene._spriteset._characterSprites.find(
            sprite => sprite._character === $gamePlayer
        );
        if (!playerSprite) return false;

        const playerWidth = playerSprite.patternWidth ? playerSprite.patternWidth() : $gameMap.tileWidth();
        const playerHeight = playerSprite.patternHeight ? playerSprite.patternHeight() : $gameMap.tileHeight();

        const playerLeft = $gamePlayer.screenX() - playerWidth / 2;
        const playerRight = $gamePlayer.screenX() + playerWidth / 2;
        const playerTop = $gamePlayer.screenY() - playerHeight;
        const playerBottom = $gamePlayer.screenY();

        if (!this._gridBackgrounds) return false;

        return this._gridBackgrounds.some(bg => {
            const halfW = bg.width / 2;
            const halfH = bg.height / 2;
            const bgLeft = bg.x - halfW;
            const bgRight = bg.x + halfW;
            const bgTop = bg.y - halfH;
            const bgBottom = bg.y + halfH;

            return (
                playerRight > bgLeft &&
                playerLeft < bgRight &&
                playerBottom > bgTop &&
                playerTop < bgBottom
            );
        });
    };

    Spriteset_SkillUI.prototype.updatePlayerOverlapFade = function () {
        if (hideWhenOnPlayer) {
            const target = this.isPlayerBehindHotbar() ? 0.3 : 1.0;
            const step = 0.05;

            if (this._playerFadeOpacity < target) {
                this._playerFadeOpacity = Math.min(target, this._playerFadeOpacity + step);
            } else if (this._playerFadeOpacity > target) {
                this._playerFadeOpacity = Math.max(target, this._playerFadeOpacity - step);
            }
        }

        this.alpha = this._playerFadeOpacity * (this._fadeOpacity / 255);
    };

    Spriteset_SkillUI.prototype.createGrids = function () {
        for (const grid of gridSettings) {
            this.createGridBackground(grid);
            this.createGridSlots(grid);
        }
        this._gamepadGrids = gridSettings.filter(grid => {
            return grid.ControllableViaGamepad === 'true';
        }).map((grid, index) => {
            const slots = grid.Slots;
            const rowCol = (grid.RowColumn || '1, 1').toString();
            let rows = 1, cols = 1;
            if (rowCol.includes(',')) {
                [rows, cols] = rowCol.split(',').map(v => Number(v.trim()));
            } else {
                rows = cols = Number(rowCol.trim());
            }
            return {
                slots,
                rows,
                cols,
                index
            };
        });
    };

    Spriteset_SkillUI.prototype.createGridSlots = function (grid) {
        let rows = 1, cols = 1;
        const rowColConfig = (grid.RowColumn || '1, 1').toString();
        if (rowColConfig.includes(',')) {
            [rows, cols] = rowColConfig.split(',').map(v => Number(v.trim()));
        } else {
            rows = cols = Number(rowColConfig.trim());
        }

        const padding = Number(grid.Padding) || 4;
        let defaultPosition = (grid.Position || '0, 0').split(',').map(v => eval(v.trim()));

        if (!grid.Slots || grid.Slots.length === 0) {
            return;
        }

        const firstSlotKeyboardName = grid.Slots[0].Name.split(',')[0].trim();
        if (window.$uiPositions && window.$uiPositions['grid_' + firstSlotKeyboardName]) {
            defaultPosition = [
                window.$uiPositions['grid_' + firstSlotKeyboardName].x,
                window.$uiPositions['grid_' + firstSlotKeyboardName].y
            ];
        }

        const gridX = defaultPosition[0] || 0;
        const gridY = defaultPosition[1] || 0;

        if (grid.Slots.length === 0) return;

        const firstSlot = new Sprite_SkillSlot(grid.Slots[0], grid.Type);

        firstSlot.bitmap.addLoadListener(() => {
            const slotWidth = firstSlot.bitmap.width;
            const slotHeight = firstSlot.bitmap.height;

            const gridWidth = (cols - 1) * (slotWidth + padding) + slotWidth;
            const gridHeight = (rows - 1) * (slotHeight + padding) + slotHeight;
            const centerX = gridX - (gridWidth / 2) + (slotWidth / 2);
            const centerY = gridY - (gridHeight / 2) + (slotHeight / 2);

            if (window.$uiPositions[firstSlotKeyboardName]) {
                firstSlot.x = window.$uiPositions[firstSlotKeyboardName].x;
                firstSlot.y = window.$uiPositions[firstSlotKeyboardName].y;
            } else {
                firstSlot.x = centerX;
                firstSlot.y = centerY;
            }

            this._slots.set(firstSlotKeyboardName, firstSlot);
            this.addChild(firstSlot);

            for (let i = 1; i < grid.Slots.length; i++) {
                const slotConfig = grid.Slots[i];
                const slot = new Sprite_SkillSlot(slotConfig, grid.Type);

                const slotKeyboardName = slotConfig.Name.split(',')[0].trim();
                if (window.$uiPositions[slotKeyboardName]) {
                    slot.x = window.$uiPositions[slotKeyboardName].x;
                    slot.y = window.$uiPositions[slotKeyboardName].y;
                } else {
                    const row = Math.floor(i / cols);
                    const col = i % cols;
                    slot.x = centerX + (col * slotWidth) + (col * padding);
                    slot.y = centerY + (row * slotHeight) + (row * padding);
                }

                this._slots.set(slotKeyboardName, slot);
                this.addChild(slot);
            }
        });
    };

    Spriteset_SkillUI.prototype.createGridBackground = function (grid) {
        let position;
        if (grid.Slots && grid.Slots.length > 0) {
            const firstSlotKeyboardName = grid.Slots[0].Name.split(',')[0].trim();
            if (window.$uiPositions && window.$uiPositions['grid_' + firstSlotKeyboardName]) {
                position = [
                    window.$uiPositions['grid_' + firstSlotKeyboardName].x,
                    window.$uiPositions['grid_' + firstSlotKeyboardName].y
                ];
            } else {
                position = (grid.Position || '0, 0').split(',').map(v => eval(v.trim()));
            }
        } else {
            position = (grid.Position || '0, 0').split(',').map(v => eval(v.trim()));
        }

        if (grid.BackgroundImage) {
            const background = new Sprite();
            background.bitmap = ImageManager.loadSystem(grid.BackgroundImage);

            background.x = position[0] || 0;
            background.y = position[1] || 0;
            background.anchor.x = 0.5;
            background.anchor.y = 0.5;

            background._isDragging = false;
            background._dragOffsetX = 0;
            background._dragOffsetY = 0;
            background._gridSlots = [];
            background._grid = grid;
            background._isPlaceholder = false;

            this.addChild(background);
            this._gridBackgrounds = this._gridBackgrounds || [];
            this._gridBackgrounds.push(background);
        } else {
            const rowCol = (grid.RowColumn || '2, 5').split(',').map(v => parseInt(v.trim()));
            const rows = rowCol[0] || 2;
            const columns = rowCol.length === 2 ? rowCol[1] : rowCol[0];
            const padding = parseInt(grid.Padding) || 10;
            const slotSize = 64;

            const gridWidth = (columns * slotSize) + ((columns - 1) * padding);
            const gridHeight = (rows * slotSize) + ((rows - 1) * padding);

            const background = new Sprite();
            background.bitmap = new Bitmap(gridWidth + 20, gridHeight + 20);

            const ctx = background.bitmap.context;
            ctx.strokeStyle = 'rgba(255, 215, 0, 0.9)';
            ctx.fillStyle = 'rgba(255, 215, 0, 0.25)';
            ctx.lineWidth = 4;
            ctx.setLineDash([12, 6]);

            ctx.fillRect(0, 0, gridWidth + 20, gridHeight + 20);
            ctx.strokeRect(0, 0, gridWidth + 20, gridHeight + 20);

            ctx.font = 'bold 20px Arial';
            ctx.fillStyle = 'rgba(255, 215, 0, 1.0)';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('Grid ' + (this._gridBackgrounds ? this._gridBackgrounds.length + 1 : 1),
                (gridWidth + 20) / 2, (gridHeight + 20) / 2);

            background.x = position[0] || 0;
            background.y = position[1] || 0;
            background.anchor.x = 0.5;
            background.anchor.y = 0.5;

            background._isDragging = false;
            background._dragOffsetX = 0;
            background._dragOffsetY = 0;
            background._gridSlots = [];
            background._grid = grid;
            background._isPlaceholder = true;

            background.visible = editorMode;

            this.addChild(background);
            this._gridBackgrounds = this._gridBackgrounds || [];
            this._gridBackgrounds.push(background);
        }
    };

    Spriteset_SkillUI.prototype.createBackground = function () {
        if (gridSettings.BackgroundImage) {
            this._background = new Sprite();
            this._background.bitmap = ImageManager.loadSystem(gridSettings.BackgroundImage);
            this.addChild(this._background);
        }
    };

    Spriteset_SkillUI.prototype.createSlots = function () {
        const rows = parseInt(gridSettings.Rows) || 1;
        const cols = parseInt(gridSettings.Columns) || 4;
        const padding = parseInt(gridSettings.Padding) || 4;

        for (let i = 0; i < slotsConfig.length; i++) {
            const config = slotsConfig[i];
            const slot = new Sprite_SkillSlot(config);
            const row = Math.floor(i / cols);
            const col = i % cols;
            slot.x = col * (40 + padding);
            slot.y = row * (40 + padding);
            this._slots.set(config.Name, slot);
            this.addChild(slot);
        }
    };

    Spriteset_SkillUI.prototype.setSkill = function (slotName, skillId, itemId, weaponId) {
        if (_lockedSlots.has(slotName)) { return; }
        const slot = this._slots.get(slotName);
        if (slot) {
            if (skillId > 0) {
                const skill = $dataSkills[skillId];
                if (skill) {
                    slot.setSkill(skillId, skill.iconIndex);
                    _slotData.set(slot._config.Name, { type: 'skill', id: skillId });
                }
            }
            else if (itemId > 0) {
                const item = $dataItems[itemId];
                if (item) {
                    slot.setSkill(itemId, item.iconIndex);
                    _slotData.set(slot._config.Name, { type: 'item', id: itemId });
                }
            }
            else if (weaponId > 0) {
                const weapon = $dataWeapons[weaponId];
                if (weapon) {
                    slot.setSkill(weaponId, weapon.iconIndex);
                    _slotData.set(slot._config.Name, { type: 'weapon', id: weaponId });
                }
            }
            saveToSystem();
        }
    };

    Spriteset_SkillUI.prototype.refreshSlots = function () {
        for (const [slotName, data] of _slotData.entries()) {
            const slot = this._slots.get(slotName);
            if (slot) {
                switch (data.type) {
                    case 'skill':
                        const skill = $dataSkills[data.id];
                        if (skill) slot.setSkill(data.id, skill.iconIndex);
                        break;
                    case 'item':
                        const item = $dataItems[data.id];
                        if (item) slot.setSkill(data.id, item.iconIndex);
                        break;
                    case 'weapon':
                        const weapon = $dataWeapons[data.id];
                        if (weapon) slot.setSkill(data.id, weapon.iconIndex);
                        break;
                    case 'armor':
                        const armor = $dataArmors[data.id];
                        if (armor) slot.setSkill(data.id, armor.iconIndex);
                        break;
                }
            }
        }
    };

    Spriteset_SkillUI.prototype.refreshSlotsVisual = function () {
        for (const [slotName, data] of _slotData.entries()) {
            const slot = this._slots.get(slotName);
            if (slot && !slot._inCooldown) {
                switch (data.type) {
                    case 'skill':
                        const skill = $dataSkills[data.id];
                        if (skill) slot.setSkill(data.id, skill.iconIndex);
                        break;
                    case 'item':
                        const item = $dataItems[data.id];
                        if (item) slot.setSkill(data.id, item.iconIndex);
                        break;
                    case 'weapon':
                        const weapon = $dataWeapons[data.id];
                        if (weapon) slot.setSkill(data.id, weapon.iconIndex);
                        break;
                    case 'armor':
                        const armor = $dataArmors[data.id];
                        if (armor) slot.setSkill(data.id, armor.iconIndex);
                        break;
                }
            }
        }
    };

    Spriteset_SkillUI.prototype.getEmptySlot = function (type) {
        for (const [name, slot] of this._slots.entries()) {
            if (!_slotData.has(name) && slot._gridType === type) {
                return name;
            }
        }
        return null;
    };

    Spriteset_SkillUI.prototype.refreshSpecialSlots = function () {
        for (const [slotName, slot] of this._slots.entries()) {
            const specialBehavior = slot._config.SpecialBehavior || 'none';
            if (specialBehavior === 'display_weapon') {
                const actor = $gameParty.leader();
                const equipSlot = actor._equips[0];
                const currentData = _slotData.get(slotName);

                if (!equipSlot || equipSlot._itemId === 0) {
                    if (currentData) {
                        slot.setSkill(0, 0);
                        _slotData.delete(slotName);
                    }
                    continue;
                }

                if (currentData && currentData.id === equipSlot._itemId) continue;

                const weapon = $dataWeapons[equipSlot._itemId];
                if (weapon) {
                    slot.setSkill(weapon.id, weapon.iconIndex);
                    _slotData.set(slotName, { type: 'weapon', id: weapon.id });
                }
            }
            else if (specialBehavior === 'display_shield') {
                const actor = $gameParty.leader();
                const equipSlot = actor._equips[1];
                const currentData = _slotData.get(slotName);

                if (!equipSlot || equipSlot._itemId === 0) {
                    if (currentData) {
                        slot.setSkill(0, 0);
                        _slotData.delete(slotName);
                    }
                    continue;
                }

                if (currentData && currentData.id === equipSlot._itemId) continue;

                const shield = equipSlot._dataClass === 'weapon' ?
                    $dataWeapons[equipSlot._itemId] :
                    $dataArmors[equipSlot._itemId];

                if (shield) {
                    slot.setSkill(shield.id, shield.iconIndex);
                    _slotData.set(slotName, {
                        type: equipSlot._dataClass,
                        id: shield.id
                    });
                }
            }
        }
        saveToSystem();
    };

    //-----------------------------------------------------------------------------
    //-----------------------------------------------------------------------------

    const saveToSystem = function () {
        $gameSystem._uiSlotData = {};
        _slotData.forEach((value, key) => {
            $gameSystem._uiSlotData[key] = value;
        });
        $gameSystem._lockedSlots = Array.from(_lockedSlots);
    };

    if (typeof hxGetOrCreateDock !== 'function') {
        window.hxGetOrCreateDock = function () {
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
            logo.src = 'data:image/png;base64,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AhERBv7++fb29A0MAxYUBv7rVf70qfrXR/v58P7pnxwXBvDt4ygeAiQcBf7IMu7AOuPMicq4gtrSuufhz/fz5+i0LiohCi8nFP7UbichEnRjNu7KcurPiu/TkOnPkHhrTN7Iji4gAj4vDCQcCx4YCz0zHLydWe3Kfdi5dO7OiNu+fVtPNP7fl7eicoh4VmdbQe/VmKqXbPjdn5OGaMe/rqVyDSoeBtGXIpRqGW9QE2RIEdWaJodhGM2UJaF0HXpZGC4iCTUnC+rDds6taeW/duC7c+rGetOybvTNgc6uburGfvvViebDfezKg6SLW/vXkuPEherKisSre7qwm+jm4vmmD9yRD7l9DdeWIjIjCNKSIt2bJUk0DNaWJr+HItKWJrB+IP63MOCeK92rUuSzXtKua+7GeurCeu7GflBDK+rGgkY7J/XPierGhu7Kis+xefDOjsiqdsqueurKjta5g92/iPPRlqObjLJ2FoZaE1s9DVI4DHlSEtaSItKOIsqKIfeqK++kKtuVJv2vLeigKdaSJtKSJtuWKtWULMmNKeunM9maMcqOLvauOc2SMNmdO7eENDorE/y+XJd4ROrCfu7Ggu7KjunGi8SmduPBi8qufurKlK1qBioaAtKDDKZmCiAUArd2FhkQA7FyFpNeEtGJG6ltFteNHcaDG7t6GUIrCb9+G7Z2GrJ2Gi4eB69yG9aOIuOZJ9aOJtKOJu7Cfu7GiOrChsqqes+vf6pjBqpmCqZiCqFhCrBrDapmDqZmDq13Mc6qesqqf9TRzaZgBi4aAq9mCqpiCsJxDaNdC7hsDcp3D4ZOCiYWA6ZiDoxTDK5mD6FhD3ZGC2pACsR0FLVtE4ZPDqpnE7pyFyIWB5RkKc6qfpxYC4pOCoZKCpRUDKpiDoJKC4pODk00GYpKBoFGChQLAoZKDioZB0UuFmpGI1k5GmI+Hv76+PPx8AwEAgYCAgcGBv7+/vr6+gICAv///7JXTUoAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAAsTAAALEwEAmpwYAACIKUlEQVR4nN29CXxTZfY3fp57k9ybtJTSFBBp6ZK0tFxKoWlE2WRr2VxwqziOC+6jMuNsOuMy4/zUcZwZZ3EbHbdRx5EpjoLK1rKpoGLaQikXWpqkLQ1UhaSltMm9Se59/p/z3HRhFZX5ve/7f8Q2SdP0fu85z9nPeQiF/ydXb9I3/x0O/p9boXP+E42NikX/Myv0zX6R/D9G194LGrrGFu7VAPhDw5tsmb5vQF/+Yfh/aJ2XOuXPKbfGNtY9xt2n71ee89456UDK/z/pOvzgf16ozTn/3iFHgkOOkoPFP9xsmr70ymDa//+wvnRr5W9alP+5SYlQC+jARYktufYq20XPrbrq/z6s531IryI3XIoP33+FtM37zTeRpXlyZHGtsD2mDekYCtCVi3Kpa4hNnwRXzavoOaNPMsH/zsrbHh5SHc18mdMjYIXIXJi7Ye6oYNj5+LUTms/k9y/ylrTHH6hQbPHwOR1AINSV2gWpIXOs8aFKWJf889//30LXn/1apJGqciuh76/dlDL3I5hxf2nhTXNtFN6HpYdhnmvV1+H9z9zFn13728NWTbN2pFojaYyqqZAWgii38glb6bu+gv8bsObF99F3+EtJ5vVbeD4+3/m3rPao5QePwRCTdmRhwbCL4X293EZf//vnp/kIb+Wj3gYCPES6UqGLDO0iyMep0JXr10lK0jjT9Dczu/+PYz2vOqUJHOC2mfxZTRrvcMBYBaD64iaoAo0vDJW0xae5F1N/w6Xw+hOnoG6PIIrvOPYWqdYOGBVJ86daOyC1CwBSEXauf4jFd/k18yqczf9Hsf7st1CyLTXnHK7zIOTP1QurcsGfEQCAzELwOsiY6hbfPn5sbpsS2kvf4Su6HvnjST4kMMJqeei6OM+eRI6cA9YQpLXQ3FCaPzXNnwrBEXy49crZ4aofvPR/DmtejbVkm+2Bz4IH+fIx8/fvhXaAXD9kmv3sx7mO6lx/rv+W6g0+7Vy7ojR0rb2cvHbL8Z8SjYw9+uClQxLXGeka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';
            dock.appendChild(logo);
            document.body.appendChild(dock);

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
            return dock;
        };

        window.hxAddDockButton = function (id, label, onClick) {
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
        };
    }

    const _Scene_Map_createDisplayObjects_Hotbar = Scene_Map.prototype.createDisplayObjects;
    Scene_Map.prototype.createDisplayObjects = function () {
        _Scene_Map_createDisplayObjects_Hotbar.call(this);
        if (typeof hxAddDockButton === 'function' && showHotbarButton) {
            hxAddDockButton('hx-btn-hotbar', '⏹️ Hotbar Creator', () => {
                createHotbarVisualEditor();
            });
        }
    };

    const _Scene_Map_createAllWindows = Scene_Map.prototype.createAllWindows;
    Scene_Map.prototype.createAllWindows = function () {
        _Scene_Map_createAllWindows.call(this);
        reloadGridSettings(false);
        this.createSkillUI();
    };

    Scene_Map.prototype.createSkillUI = function () {
        this._skillUI = new Spriteset_SkillUI();
        this.addChild(this._skillUI);
        _slotData.clear();

        if ($gameSystem._uiSlotData) {
            Object.entries($gameSystem._uiSlotData).forEach(([key, value]) => {
                if (value.type === 'item' || value.type === 'weapon' || value.type === 'armor') {
                    _slotData.set(key, value);
                }
            });
        }

        if (partyMembersHotbar) {
            const leader = $gameParty.leader();
            const leaderId = leader ? leader.actorId() : 0;
            const actorData = leaderId && $gameSystem._actorHotbarData
                ? $gameSystem._actorHotbarData[leaderId]
                : null;
            if (actorData) {
                Object.entries(actorData).forEach(([key, value]) => {
                    if (value.type === 'skill') _slotData.set(key, value);
                });
            }
        } else {
            if ($gameSystem._uiSlotData) {
                Object.entries($gameSystem._uiSlotData).forEach(([key, value]) => {
                    if (value.type === 'skill') _slotData.set(key, value);
                });
            }
        }

        this._lastLeaderId = $gameParty.leader() ? $gameParty.leader().actorId() : 0;
        this._skillUI.refreshSlots();

        this._skillUI.refreshSlots();
    };

    Scene_Map.prototype.toggleDragMode = function () {
        if (!Utils.isOptionValid('test')) return;

        this._isDragMode = !this._isDragMode;
        if (!this._isDragMode) {
            SnapIndicatorManager.hideAll();
        }
        if (this._isDragMode) {
            window.$uiPositions = readUIPositions();
        } else {
            const currentPositions = {};

            this._skillUI._slots.forEach((slot, name) => {
                currentPositions[name] = {
                    x: slot.x,
                    y: slot.y
                };
            });

            if (this._skillUI._gridBackgrounds) {
                this._skillUI._gridBackgrounds.forEach(bg => {
                    if (bg._grid.Slots && bg._grid.Slots.length > 0) {
                        const firstSlotKeyboardName = bg._grid.Slots[0].Name.split(',')[0].trim();
                        currentPositions['grid_' + firstSlotKeyboardName] = {
                            x: bg.x,
                            y: bg.y
                        };
                    }
                });
            }

            saveHotbarPositions(currentPositions);
        }
    };

    const _Scene_Map_initialize = Scene_Map.prototype.initialize;
    Scene_Map.prototype.initialize = function () {
        _Scene_Map_initialize.call(this);
    };

    const _Scene_Map_update = Scene_Map.prototype.update;
    Scene_Map.prototype.update = function () {
        _Scene_Map_update.call(this);
        if (this._skillUI && enableTouchInput && TouchInput.isTriggered() && !this._isDragMode) {
            const touchX = TouchInput.x;
            const touchY = TouchInput.y;

            this._skillUI._slots.forEach((slot, slotName) => {
                if (slot.isPointInside(touchX, touchY)) {
                    if (slot._bounceDuration > 0) return;
                    slot.useSlotContents();
                }
            });
        }

        if (this._skillUI) {
            this._skillUI.update();
            this._skillUI.refreshSpecialSlots();
            if (Graphics.frameCount % 4 === 0) {
                this._skillUI.refreshSlotsVisual();
            }
            for (const slot of this._skillUI._slots.values()) {
                slot.refreshButtonText();
            }
            for (const [key, frames] of _globalCooldowns.entries()) {
                if (frames > 0) {
                    _globalCooldowns.set(key, frames - 1);
                }
            }
            updateGlobalCooldowns();

            if (partyMembersHotbar) {
                const currentLeaderId = $gameParty.leader() ? $gameParty.leader().actorId() : 0;
                if (currentLeaderId !== this._lastLeaderId) {
                    this._lastLeaderId = currentLeaderId;

                    _slotData.clear();

                    if ($gameSystem._uiSlotData) {
                        Object.entries($gameSystem._uiSlotData).forEach(([key, value]) => {
                            if (value.type === 'item' || value.type === 'weapon' || value.type === 'armor') {
                                _slotData.set(key, value);
                            }
                        });
                    }

                    const actorData = currentLeaderId && $gameSystem._actorHotbarData
                        ? $gameSystem._actorHotbarData[currentLeaderId]
                        : null;
                    if (actorData) {
                        Object.entries(actorData).forEach(([key, value]) => {
                            if (value.type === 'skill') _slotData.set(key, value);
                        });
                    }

                    this._skillUI._slots.forEach((slot, slotName) => {
                        if (!_slotData.has(slotName)) slot.setSkill(0, 0);
                    });

                    this._skillUI.refreshSlots();
                }
            }
        }
    };

    //-----------------------------------------------------------------------------
    //-----------------------------------------------------------------------------

    function Window_SkillSlotSelect() {
        this.initialize(...arguments);
    }

    Window_SkillSlotSelect.prototype = Object.create(Window_Command.prototype);
    Window_SkillSlotSelect.prototype.constructor = Window_SkillSlotSelect;

    Window_SkillSlotSelect.prototype.initialize = function (rect) {
        if (Utils.RPGMAKER_NAME === "MV") {
            Window_Command.prototype.initialize.call(this, rect.x, rect.y);
            this.width = rect.width;
            this.height = rect.height;
        } else {
            Window_Command.prototype.initialize.call(this, rect);
        }
        this._skill = null;
        this.deactivate();
        this.hide();
    };

    Window_SkillSlotSelect.prototype.setSkill = function (skill) {
        this._skill = skill;
        this.refresh();
    };

    Window_SkillSlotSelect.prototype.setActor = function (actor) {
        this._actorId = actor ? actor.actorId() : 0;
    };

    Window_SkillSlotSelect.prototype.getSlotDataForActor = function (slotName) {
        if (this._actorId && this._actorId > 0) {
            const actorData = $gameSystem._actorHotbarData && $gameSystem._actorHotbarData[this._actorId];
            if (actorData) return actorData[slotName] || null;
            return null;
        }
        return _slotData.get(slotName) || null;
    };

    Window_SkillSlotSelect.prototype.makeCommandList = function () {
        if (Imported.Hendrix_Localization) {
            this.addCommand(Hendrix_Localization(useNowText), 'use_now', hotbarInputEnabled);
        } else {
            this.addCommand(useNowText, 'use_now', hotbarInputEnabled);
        }

        const isSkillScene = SceneManager._scene instanceof Scene_Skill;
        const isItemScene = SceneManager._scene instanceof Scene_Item;

        this._availableSlots = ALL_AVAILABLE_SLOTS.filter(slotData => {
            const specialBehavior = slotData.specialBehavior || 'none';
            return specialBehavior === 'none' ||
                (isSkillScene && specialBehavior === 'skill_only') ||
                (isItemScene && specialBehavior === 'item_only');
        });

        this._availableSlots.forEach(slotData => {
            this.addCommand(slotData.name, 'slot', true, slotData.name);
        });
    };

    Window_SkillSlotSelect.prototype.drawItem = function (index) {
        if (Utils.RPGMAKER_NAME === "MV") {
            var rect = this.itemRectForText(index);
            const command = this._list[index];

            if (command.symbol === 'use_now') {
                this.changePaintOpacity(command.enabled);
                this.drawText(command.name, rect.x, rect.y, rect.width, 'center');
                return;
            }

            if (command.symbol === 'separator') {
                this.changePaintOpacity(true);
                this.drawText(command.name, rect.x, rect.y, rect.width, 'center');
                return;
            }

            var slotData = this._availableSlots[index - 1];
            var slot = slotData.slot;
            var data = _slotData.get(slotData.name);

            var iconIndex = emptySlotIcon;
            if (data) {
                var item;
                switch (data.type) {
                    case 'skill':
                        item = $dataSkills[data.id];
                        break;
                    case 'item':
                        item = $dataItems[data.id];
                        break;
                    case 'weapon':
                        item = $dataWeapons[data.id];
                        break;
                    case 'armor':
                        item = $dataArmors[data.id];
                        break;
                }
                if (item) {
                    iconIndex = item.iconIndex;
                }
            }
            this.drawIcon(iconIndex, rect.x, rect.y);

            var displayName;
            if (Imported.Hendrix_Keyboard_Gamepad) {
                const slotName = slot._config.Name.split(',')[0].trim();
                const actionName = slotName.replace('Slot ', '').toLowerCase();
                const isGamepadMode = navigator.getGamepads && navigator.getGamepads()[0];

                let currentButton = '';
                if (isGamepadMode) {
                    for (const buttonName in GamepadButtons) {
                        const buttonCode = GamepadButtons[buttonName];
                        if (Input.gamepadMapper[buttonCode] === actionName) {
                            currentButton = buttonName;
                            break;
                        }
                    }
                } else {
                    for (const keyCode in Input.keyMapper) {
                        if (Input.keyMapper[keyCode] === actionName) {
                            for (const keyName in charToKeyCode) {
                                if (charToKeyCode[keyName] == keyCode) {
                                    currentButton = keyName;
                                    break;
                                }
                            }
                            break;
                        }
                    }
                }

                displayName = currentButton ? `Slot ${currentButton.toUpperCase()}` : slot._keyboardName;
            } else {
                displayName = slot._keyboardName;
            }

            var nameX = rect.x + 40;
            this.changeTextColor(this.normalColor());
            this.drawText(displayName, nameX, rect.y, 120);

            var itemName = emptySlotText;
            if (Imported.Hendrix_Localization) {
                itemName = Hendrix_Localization(emptySlotText);
            }
            if (data && item) {
                itemName = item.name;
                this.changeTextColor(this.textColor(14));
            } else {
                this.changeTextColor(this.normalColor());
            }
            this.drawText(itemName, nameX + 115, rect.y, 200);

        } else {
            let rect = this.itemLineRect(index);
            const command = this._list[index];

            if (command.symbol === 'use_now') {
                this.changePaintOpacity(command.enabled);
                this.drawText(command.name, rect.x, rect.y, rect.width, 'center');
                return;
            }

            if (command.symbol === 'separator') {
                this.changePaintOpacity(true);
                this.drawText(command.name, rect.x, rect.y, rect.width, 'center');
                return;
            }

            const slotData = this._availableSlots[index - 1];
            const slot = slotData.slot;
            const data = this.getSlotDataForActor(slotData.name);
            let iconIndex = emptySlotIcon;
            let itemName = emptySlotText;
            if (Imported.Hendrix_Localization) {
                itemName = Hendrix_Localization(emptySlotText);
            }

            if (data) {
                let item;
                switch (data.type) {
                    case 'skill':
                        item = $dataSkills[data.id];
                        break;
                    case 'item':
                        item = $dataItems[data.id];
                        break;
                    case 'weapon':
                        item = $dataWeapons[data.id];
                        break;
                    case 'armor':
                        item = $dataArmors[data.id];
                        break;
                }
                if (item) {
                    iconIndex = item.iconIndex;
                    itemName = item.name;
                }
            }

            this.drawIcon(iconIndex, rect.x, rect.y);
            const iconPadding = ImageManager.iconWidth + 4;
            const baseX = rect.x + iconPadding;

            let displayName;
            if (Imported.Hendrix_Keyboard_Gamepad) {
                const slotName = slot._config.Name.split(',')[0].trim();
                const actionName = slotName.replace('Slot ', '').toLowerCase();
                const isGamepadMode = navigator.getGamepads && navigator.getGamepads()[0];

                let currentButton = '';
                if (isGamepadMode) {
                    for (const buttonName in GamepadButtons) {
                        const buttonCode = GamepadButtons[buttonName];
                        if (Input.gamepadMapper[buttonCode] === actionName) {
                            currentButton = buttonName;
                            break;
                        }
                    }
                } else {
                    for (const keyCode in Input.keyMapper) {
                        if (Input.keyMapper[keyCode] === actionName) {
                            for (const keyName in charToKeyCode) {
                                if (charToKeyCode[keyName] == keyCode) {
                                    currentButton = keyName;
                                    break;
                                }
                            }
                            break;
                        }
                    }
                }

                displayName = currentButton ? `Slot ${currentButton.toUpperCase()}` : slot._keyboardName;
            } else {
                displayName = slot._keyboardName;
            }

            this.drawText(displayName, baseX, rect.y);

            const textX = baseX + this.textWidth(displayName + " ");
            if (data) {
                this.changeTextColor(ColorManager.textColor(14));
                this.drawText(itemName, textX, rect.y);
                this.resetTextColor();
            } else {
                this.drawText(itemName, textX, rect.y);
            }
        }
    };

    //-----------------------------------------------------------------------------
    //-----------------------------------------------------------------------------

    const _Window_SkillList_isCurrentItemEnabled = Window_SkillList.prototype.isCurrentItemEnabled;
    Window_SkillList.prototype.isCurrentItemEnabled = function () {
        if (SceneManager._scene instanceof Scene_Skill) {
            return true;
        }
        return _Window_SkillList_isCurrentItemEnabled.call(this);
    };

    const _Scene_Skill_create = Scene_Skill.prototype.create;
    Scene_Skill.prototype.create = function () {
        _Scene_Skill_create.call(this);
        this.createSlotSelectWindow();
    };

    Scene_Skill.prototype.createSlotSelectWindow = function () {
        const rect = this.slotSelectWindowRect();
        this._slotSelectWindow = new Window_SkillSlotSelect(rect);
        this._slotSelectWindow.setHandler('ok', this.onSlotSelectOk.bind(this));
        this._slotSelectWindow.setHandler('cancel', this.onSlotSelectCancel.bind(this));
        this.addWindow(this._slotSelectWindow);
    };

    Scene_Skill.prototype.slotSelectWindowRect = function () {
        const ww = windowWidth || 400;
        const wh = this.calcWindowHeight(visibleCommands || 6, true);
        const wx = (Graphics.boxWidth - ww) / 2;
        const wy = (Graphics.boxHeight - wh) / 2;
        return new Rectangle(wx, wy, ww, wh);
    };


    Scene_Skill.prototype.onItemOk = function () {
        this._slotSelectWindow.setActor(this.actor());
        if (!this.item()) {
            SoundManager.playBuzzer();
            this._itemWindow.activate();
            return;
        }

        if (!allowEquipNonUsable && !this.actor().canUse(this.item())) {
            SoundManager.playBuzzer();
            this._itemWindow.activate();
            return;
        }

        this._slotSelectWindow.setSkill(this.item());
        this._slotSelectWindow.show();
        this._slotSelectWindow.activate();
        this._slotSelectWindow.select(0);
        this._itemWindow.deactivate();
        this._slotSelectWindow.refresh();
    };

    Scene_Skill.prototype.onSlotSelectOk = function () {
        if (this._slotSelectWindow.currentSymbol() === 'use_now') {
            const skill = this.item();
            if (this.actor().canUse(skill)) {
                if (this.itemTargetsValid()) {
                    this._slotSelectWindow.hide();
                    this._slotSelectWindow.deactivate();
                    if (Imported.Hendrix_Action_Engine && typeof soloPlayerMenu !== 'undefined' && soloPlayerMenu) {
                        this.determineItem();
                        this.onActorOk();
                        this.onActorCancel();
                        return;
                    }
                    this.determineItem();
                } else {
                    SoundManager.playBuzzer();
                }
            } else {
                SoundManager.playBuzzer();
                this._slotSelectWindow.activate();
            }
            return;
        }

        const item = this.item();
        if (isItemDisallowed(item)) {
            SoundManager.playBuzzer();
            this._itemWindow.deactivate();
            this._slotSelectWindow.activate();
            return;
        }

        const slotName = this._slotSelectWindow.currentExt();
        const skillId = this.item().id;

        if (_lockedSlots.has(slotName)) {
            SoundManager.playBuzzer();
            this._slotSelectWindow.activate();
            return;
        }

        const slot = ALL_AVAILABLE_SLOTS.find(s => s.name === slotName);
        if (slot) {
            if (partyMembersHotbar) {
                const actorId = this._slotSelectWindow._actorId || ($gameParty.leader() ? $gameParty.leader().actorId() : 0);
                const leaderId = $gameParty.leader() ? $gameParty.leader().actorId() : 0;
                if (!$gameSystem._actorHotbarData) $gameSystem._actorHotbarData = {};
                if (!$gameSystem._actorHotbarData[actorId]) $gameSystem._actorHotbarData[actorId] = {};
                $gameSystem._actorHotbarData[actorId][slotName] = { type: 'skill', id: skillId };
                if (actorId === leaderId) {
                    slot.slot.setSkill(skillId, this.item().iconIndex);
                    _slotData.set(slotName, { type: 'skill', id: skillId });
                }
            } else {
                slot.slot.setSkill(skillId, this.item().iconIndex);
                _slotData.set(slotName, { type: 'skill', id: skillId });
            }
            saveToSystem();
        }

        this.onSlotSelectCancel();
        this._itemWindow.activate();
    };

    Scene_Skill.prototype.onSlotSelectCancel = function () {
        this._slotSelectWindow.hide();
        this._slotSelectWindow.deactivate();
        this._itemWindow.activate();
    };

    const _Scene_Item_create = Scene_Item.prototype.create;
    Scene_Item.prototype.create = function () {
        isHotbarInitializing = true;
        _Scene_Item_create.call(this);
        isHotbarInitializing = false;
    };

    Scene_Item.prototype.createSlotSelectWindow = function () {
        const rect = this.slotSelectWindowRect();
        this._slotSelectWindow = new Window_SkillSlotSelect(rect);
        this._slotSelectWindow.setHandler('ok', this.onSlotSelectOk.bind(this));
        this._slotSelectWindow.setHandler('cancel', this.onSlotSelectCancel.bind(this));
        this.addWindow(this._slotSelectWindow);
    };

    Scene_Item.prototype.slotSelectWindowRect = function () {
        const ww = windowWidth || 400;
        const wh = this.calcWindowHeight(visibleCommands || 6, true);
        const wx = (Graphics.boxWidth - ww) / 2;
        const wy = (Graphics.boxHeight - wh) / 2;
        return new Rectangle(wx, wy, ww, wh);
    };

    const _Scene_Item_onItemOk = Scene_Item.prototype.onItemOk;
    Scene_Item.prototype.onItemOk = function () {
        if (isHotbarInitializing) {
            _Scene_Item_onItemOk.call(this);
            return;
        }

        if (!allowEquipNonUsable && !$gameParty.leader().canUse(this.item())) {
            _Scene_Item_onItemOk.call(this);
            return;
        }

        if (!this._slotSelectWindow) {
            this.createSlotSelectWindow();
        }

        if (this._slotSelectWindow) {
            this._slotSelectWindow.setSkill(this.item());
            this._slotSelectWindow.show();
            this._slotSelectWindow.activate();
            this._slotSelectWindow.select(0);
            this._itemWindow.deactivate();
            this._slotSelectWindow.refresh();
        } else {
            _Scene_Item_onItemOk.call(this);
        }
    };

    Scene_Item.prototype.itemTargetsValid = function () {
        const item = this.item();
        if (!item) return false;
        return item.scope === 0 || $gameParty.members().length > 0;
    };

    Scene_Skill.prototype.itemTargetsValid = function () {
        const item = this.item();
        if (!item) return false;
        return item.scope === 0 || this.actor().isSkillWtypeOk(item);
    };

    Scene_Item.prototype.onSlotSelectOk = function () {
        if (this._slotSelectWindow.currentSymbol() === 'use_now') {
            if (this.itemTargetsValid()) {
                this._slotSelectWindow.hide();
                this._slotSelectWindow.deactivate();
                if (Imported.Hendrix_Action_Engine && typeof soloPlayerMenu !== 'undefined' && soloPlayerMenu) {
                    this.determineItem();
                    this.onActorOk();
                    this.onActorCancel();
                    return;
                }
                this.determineItem();
            } else {
                SoundManager.playBuzzer();
            }
            return;
        }

        const item = this.item();
        if (isItemDisallowed(item)) {
            SoundManager.playBuzzer();
            this._itemWindow.activate();
            this._slotSelectWindow.activate();
            return;
        }

        const slotName = this._slotSelectWindow.currentExt();
        const itemId = this.item().id;

        if (_lockedSlots.has(slotName)) {
            SoundManager.playBuzzer();
            this._itemWindow.activate();
            this._slotSelectWindow.activate();
            return;
        }

        const slot = ALL_AVAILABLE_SLOTS.find(s => s.name === slotName);
        if (slot) {
            slot.slot.setSkill(itemId, this.item().iconIndex);
            _slotData.set(slotName, { type: 'item', id: itemId });
            saveToSystem();
        }

        this.onSlotSelectCancel();
        this._itemWindow.activate();
    };

    Scene_Item.prototype.onSlotSelectCancel = function () {
        this._slotSelectWindow.hide();
        this._slotSelectWindow.deactivate();
        this._itemWindow.activate();
    };

    //-----------------------------------------------------------------------------
    //-----------------------------------------------------------------------------

    Sprite_SkillSlot.prototype.startFlash = function () {
        const targetSprite = this._customImageSprite.visible ? this._customImageSprite : this._iconSprite;
        this._flashDuration = 15;
        this._flashColor = [255, 255, 255, 255];
        targetSprite._flashDuration = 15;
    };

    Sprite_SkillSlot.prototype.updateFlash = function () {
        if (this._flashDuration > 0) {
            const targetSprite = this._customImageSprite.visible ? this._customImageSprite : this._iconSprite;
            const d = this._flashDuration--;
            this._flashColor[3] = (d / 15) * 255;
            targetSprite.setBlendColor(this._flashColor);
        }
    };

    Spriteset_SkillUI.prototype.flashSlot = function (slotName) {
        const slot = this._slots.get(slotName);
        if (slot && _slotData.has(slotName)) {
            slot.startFlash();
        }
    };

    Sprite_SkillSlot.prototype.startCooldown = function (seconds, showTimer = false) {
        const targetSprite = this._customImageSprite.visible ? this._customImageSprite : this._iconSprite;
        if (!targetSprite || !targetSprite.bitmap) return;

        const loadListener = () => {
            if (!this.parent) return;

            this._cooldownDuration = seconds;
            this._cooldownTotal = seconds;
            this._inCooldown = true;
            this._showTimer = showTimer;

            if (this._showTimer) {
                if (!this._timerSprite) {
                    this._timerSprite = new Sprite();
                    this._timerSprite.bitmap = new Bitmap(48, 32);
                    this._timerSprite.anchor.x = 0.5;
                    this._timerSprite.anchor.y = 0.5;
                    this.addChild(this._timerSprite);
                }
            }

            _cooldownStates.set(this._config.Name, {
                duration: seconds,
                total: seconds,
                showTimer: showTimer
            });

            this.createCooldownEffect();
        };

        if (targetSprite.bitmap.isReady()) {
            loadListener();
        } else {
            targetSprite.bitmap.addLoadListener(loadListener);
        }
    };

    const _Scene_Map_start = Scene_Map.prototype.start;
    Scene_Map.prototype.start = function () {
        _Scene_Map_start.call(this);
        if (this._skillUI && visibilitySwitchId !== 0) {
            this._skillUI.visible = $gameSwitches.value(visibilitySwitchId);
        }
        if (this._skillUI) {
            for (const [slotName, cooldownData] of _cooldownStates.entries()) {
                const slot = this._skillUI._slots.get(slotName);
                if (slot) {
                    slot._cooldownDuration = cooldownData.duration;
                    slot._cooldownTotal = cooldownData.total;
                    slot._inCooldown = true;
                    slot._showTimer = cooldownData.showTimer;
                    slot.createCooldownEffect();

                    if (cooldownData.showTimer) {
                        slot._timerSprite = new Sprite();
                        slot._timerSprite.bitmap = new Bitmap(48, 32);
                        slot._timerSprite.anchor.x = 0.5;
                        slot._timerSprite.anchor.y = 0.5;
                        slot.addChild(slot._timerSprite);
                    }
                }
            }
        }
        if (this._skillUI && this._skillUI._gamepadGrids.length > 0) {
            this._skillUI.initializeGamepadCursor();
            if (!navigator.getGamepads || !navigator.getGamepads()[0]) {
                this._skillUI._gamepadCursor.visible = false;
            }
        }
    };

    Sprite_SkillSlot.prototype.createCooldownEffect = function () {
        const targetSprite = this._isUsingCustomImage ? this._customImageSprite : this._iconSprite;
        if (!targetSprite || !targetSprite.visible) return;

        this._originalScale = {
            x: targetSprite.scale.x,
            y: targetSprite.scale.y
        };

        const setupCooldown = () => {
            this._grayscaleClone = new PIXI.Sprite(targetSprite.texture);
            this._grayscaleClone.anchor = targetSprite.anchor;
            this._grayscaleClone.scale = targetSprite.scale;
            this._grayscaleClone.x = targetSprite.x;
            this._grayscaleClone.y = targetSprite.y;
            this._grayscaleClone.filters = [new PIXI.filters.ColorMatrixFilter()];
            this._grayscaleClone.filters[0].desaturate();
            this._coloredClone = new PIXI.Sprite(targetSprite.texture);
            this._coloredClone.anchor = targetSprite.anchor;
            this._coloredClone.scale = targetSprite.scale;
            this._coloredClone.x = targetSprite.x;
            this._coloredClone.y = targetSprite.y;
            this._cooldownContainer.removeChildren();
            this._cooldownContainer.addChild(this._grayscaleClone);
            this._cooldownContainer.addChild(this._coloredClone);
            this._colorMask = new PIXI.Graphics();
            this._cooldownContainer.addChild(this._colorMask);
            this._coloredClone.mask = this._colorMask;
            targetSprite.visible = false;
        };

        if (this._isUsingCustomImage && !targetSprite.bitmap.isReady()) {
            targetSprite.bitmap.addLoadListener(setupCooldown);
        } else {
            setupCooldown();
        }
    };

    Sprite_SkillSlot.prototype.cleanupCooldownEffects = function () {
        const targetSprite = this._isUsingCustomImage ? this._customImageSprite : this._iconSprite;

        if (this._grayscaleClone) {
            this._cooldownContainer.removeChild(this._grayscaleClone);
            this._grayscaleClone.destroy();
            this._grayscaleClone = null;
        }

        if (this._coloredClone) {
            this._cooldownContainer.removeChild(this._coloredClone);
            this._coloredClone.destroy();
            this._coloredClone = null;
        }

        if (this._colorMask) {
            this._cooldownContainer.removeChild(this._colorMask);
            this._colorMask.destroy();
            this._colorMask = null;
        }

        targetSprite.visible = true;

        this._cooldownContainer.removeChildren();
    };

    Sprite_SkillSlot.prototype.updateCooldown = function () {
        if (!this._inCooldown && this._bounceDuration === 0) return;

        if (this._inCooldown) {
            const key = getGlobalCooldownKey(this._lastItemType, this._lastItemId);
            const remainingFrames = _globalCooldowns.get(key);

            if (!remainingFrames || remainingFrames <= 0) {
                this._inCooldown = false;
                this._bounceDuration = 20;

                if (this._timerSprite) {
                    this.removeChild(this._timerSprite);
                    this._timerSprite = null;
                }

                _cooldownStates.delete(this._config.Name);
                this.cleanupCooldownEffects();
                return;
            }

            const progress = 1 - (remainingFrames / (this._cooldownTotal * 60));

            if (this._showTimer && this._timerSprite) {
                this._timerSprite.bitmap.clear();
                applyFontSettings(this._timerSprite.bitmap);
                const timeText = Math.ceil(remainingFrames / 60).toString();
                this._timerSprite.bitmap.drawText(timeText, 0, 0, 48, 32, 'center');
            }

            const targetSprite = this._isUsingCustomImage ? this._customImageSprite : this._iconSprite;
            if (targetSprite && this._colorMask) {
                const height = this._isUsingCustomImage ? targetSprite.height * targetSprite.scale.y : targetSprite.height;
                const width = this._isUsingCustomImage ? targetSprite.width * targetSprite.scale.x : targetSprite.width;
                const maskHeight = height * progress;

                this._colorMask.clear();
                this._colorMask.beginFill(0xFFFFFF);

                const x = targetSprite.x - (width * targetSprite.anchor.x);
                const y = targetSprite.y + height - maskHeight - (height * targetSprite.anchor.y);

                this._colorMask.drawRect(x, y, width, maskHeight);
                this._colorMask.endFill();
            }
        }

        if (this._bounceDuration > 0) {
            this._bounceDuration--;
            const bounceProgress = this._bounceDuration / 20;
            const bounceScale = 1 + Math.sin(bounceProgress * Math.PI) * (this._isUsingCustomImage ? 0.3 : 0.3);

            const targetSprite = this._isUsingCustomImage ? this._customImageSprite : this._iconSprite;
            if (targetSprite && this._originalScale) {
                targetSprite.scale.x = this._originalScale.x * bounceScale;
                targetSprite.scale.y = this._originalScale.y * bounceScale;

                if (this._bounceDuration === 0) {
                    targetSprite.scale.x = this._originalScale.x;
                    targetSprite.scale.y = this._originalScale.y;
                    this._originalScale = null;
                }
            }
        }
    };

    Sprite_SkillSlot.prototype.startCooldown = function (seconds, showTimer = false) {
        const data = _slotData.get(this._config.Name);
        if (data) {
            this._lastItemType = data.type;
            this._lastItemId = data.id;
        }

        const targetSprite = this._customImageSprite.visible ? this._customImageSprite : this._iconSprite;
        if (!targetSprite || !targetSprite.bitmap) return;

        const loadListener = () => {
            if (!this.parent) return;

            this._cooldownTotal = seconds;
            this._inCooldown = true;
            this._showTimer = showTimer;

            if (this._showTimer) {
                if (!this._timerSprite) {
                    this._timerSprite = new Sprite();
                    this._timerSprite.bitmap = new Bitmap(48, 32);
                    this._timerSprite.anchor.x = 0.5;
                    this._timerSprite.anchor.y = 0.5;
                    this.addChild(this._timerSprite);
                }
            }

            this.createCooldownEffect();
        };

        if (targetSprite.bitmap.isReady()) {
            loadListener();
        } else {
            targetSprite.bitmap.addLoadListener(loadListener);
        }
    };

    Spriteset_SkillUI.prototype.startCooldown = function (slotName, seconds, showTimer) {
        const slot = this._slots.get(slotName);
        if (slot && _slotData.has(slotName)) {
            slot.startCooldown(seconds, showTimer);
        }
    };

    //-----------------------------------------------------------------------------
    //-----------------------------------------------------------------------------

    function Sprite_GamepadCursor() {
        this.initialize(...arguments);
    }

    Sprite_GamepadCursor.prototype = Object.create(Sprite.prototype);
    Sprite_GamepadCursor.prototype.constructor = Sprite_GamepadCursor;

    Sprite_GamepadCursor.prototype.initialize = function () {
        Sprite.prototype.initialize.call(this);
        this._targetSlot = null;
        this._currentGrid = null;
        this._currentGridIndex = -1;
        this._currentSlotIndex = -1;
        this.createCursor();
    };

    Sprite_GamepadCursor.prototype.createCursor = function () {
        if (gamepadCursorImage) {
            this.bitmap = ImageManager.loadSystem(gamepadCursorImage);
        } else {
            this.bitmap = new Bitmap(40, 40);
            const ctx = this.bitmap._context;
            ctx.strokeStyle = 'white';
            ctx.lineWidth = 2;
            ctx.strokeRect(0, 0, 38, 38);
        }
        this.anchor.x = 0.5;
        this.anchor.y = 0.5;
        this.visible = false;
    };

    Sprite_GamepadCursor.prototype.update = function () {
        Sprite.prototype.update.call(this);
        if (!this._targetSlot || !navigator.getGamepads || !navigator.getGamepads()[0]) {
            this.visible = false;
            return;
        }
        this.visible = true;
        this.x = this._targetSlot.x;
        this.y = this._targetSlot.y;
    };

    //-----------------------------------------------------------------------------
    //-----------------------------------------------------------------------------

    if (Utils.RPGMAKER_NAME === "MZ") {
        PluginManager.registerCommand(pluginName, "LockSlot", function (args) {
            const slotName = args.SlotName;
            const shouldLock = args.Lock === 'true';

            if (shouldLock) {
                _lockedSlots.add(slotName);
            } else {
                _lockedSlots.delete(slotName);
            }
        });

        PluginManager.registerCommand(pluginName, "HotbarInputStatus", function (args) {
            hotbarInputEnabled = args.Status === 'true';
        });

        PluginManager.registerCommand(pluginName, "SetSkill", function (args) {
            if (SceneManager._scene._skillUI) {
                SceneManager._scene._skillUI.setSkill(
                    args.Name,
                    Number(args.skillId || 0),
                    Number(args.itemId || 0),
                    Number(args.weaponId || 0)
                );
            }
        });

        PluginManager.registerCommand(pluginName, "RemoveFromSlot", function (args) {
            if (SceneManager._scene._skillUI) {
                const slot = SceneManager._scene._skillUI._slots.get(args.Name);
                if (slot) {
                    slot.setSkill(0, 0);
                    _slotData.delete(args.Name);
                    saveToSystem();
                }
            }
        });

        PluginManager.registerCommand(pluginName, "UseSlot", function (args) {
            if (!canUseSlot(args.Name)) return;

            const slotData = _slotData.get(args.Name);
            if (!slotData) return;

            const actor = $gameParty.leader();
            let success = false;
            let cooldownData = { duration: 0, showTimer: true };

            switch (slotData.type) {
                case 'skill':
                    const skill = $dataSkills[slotData.id];
                    if (skill) {
                        const mpCost = actor.skillMpCost(skill);
                        if (actor.mp >= mpCost && actor.canUse(skill)) {
                            actor.gainMp(-mpCost);

                            if (skill.scope === 11) {
                                const action = new Game_Action(actor);
                                action.setSkill(slotData.id);
                                action.setTarget(actor.index());
                                action.apply(actor);
                            }

                            if (skill.effects) {
                                const commonEventEffect = skill.effects.find(effect => effect.code === 44);
                                if (commonEventEffect && $gameMap._interpreter) {
                                    $gameMap._interpreter.clear();
                                    $gameMap._interpreter.setup($dataCommonEvents[commonEventEffect.dataId].list);
                                }
                            }
                            cooldownData = extractCooldown(skill.note);
                            success = true;
                        }
                    }
                    break;
                case 'item':
                    const item = $dataItems[slotData.id];
                    if (item && $gameParty.hasItem(item) && actor.canUse(item)) {
                        if (item.effects) {
                            const commonEventEffect = item.effects.find(effect => effect.code === 44);
                            if (commonEventEffect && $gameMap._interpreter) {
                                $gameMap._interpreter.clear();
                                $gameMap._interpreter.setup($dataCommonEvents[commonEventEffect.dataId].list);
                            }
                        }
                        actor.useItem(item);

                        const action = new Game_Action(actor);
                        action.setItemObject(item);
                        action.setTarget(actor.index());
                        action.apply(actor);

                        cooldownData = extractCooldown(item.note);
                        success = true;

                        if (!$gameParty.hasItem(item) && unequipEmptyItems) {
                            const slot = SceneManager._scene._skillUI._slots.get(args.Name);
                            if (slot) {
                                slot.setSkill(0, 0);
                                _slotData.delete(args.Name);
                                saveToSystem();
                            }
                        }
                    }
                    break;
                case 'weapon':
                    const weapon = $dataWeapons[slotData.id];
                    if (weapon) {
                        cooldownData = extractCooldown(weapon.note);
                        success = true;
                    }
                    break;
            }

            if (success) {
                $gameParty.members().forEach(member => member.refresh());
                SceneManager._scene._skillUI.flashSlot(args.Name);

                if (cooldownData.duration > 0) {
                    setGlobalCooldown(slotData.type, slotData.id, cooldownData.duration, cooldownData.showTimer);
                }
            }
        });

        PluginManager.registerCommand(pluginName, "UseSelectedSlot", function (args) {
            if (!SceneManager._scene._skillUI || $gameMessage.isBusy() || $gameMap.isEventRunning()) return;

            const ui = SceneManager._scene._skillUI;
            if (!ui._gamepadCursor._targetSlot) return;

            const currentGrid = ui._gamepadGrids[ui._gamepadCursor._currentGridIndex];
            if (!currentGrid) return;

            const slotConfig = currentGrid.slots[ui._gamepadCursor._currentSlotIndex];
            if (!slotConfig) return;

            const slotName = slotConfig.Name;
            const slot = ui._slots.get(slotName);

            if (slot && slot._bounceDuration > 0) return;

            if (!canUseSlot(slotName)) return;

            const slotData = _slotData.get(slotName);
            if (!slotData) return;

            if (isItemDisallowedByCommand(slotData.type, slotData.id)) {
                return;
            }

            const actor = $gameParty.leader();
            let success = false;
            let cooldownData = { duration: 0, showTimer: true };

            switch (slotData.type) {
                case 'skill':
                    const skill = $dataSkills[slotData.id];
                    if (skill) {
                        const mpCost = actor.skillMpCost(skill);
                        if (actor.mp >= mpCost && actor.canUse(skill)) {
                            actor.gainMp(-mpCost);

                            if (skill.scope === 11) {
                                const action = new Game_Action(actor);
                                action.setSkill(slotData.id);
                                action.setTarget(actor.index());
                                action.apply(actor);
                            }

                            if (skill.effects) {
                                const commonEventEffect = skill.effects.find(effect => effect.code === 44);
                                if (commonEventEffect && $gameMap._interpreter) {
                                    $gameMap._interpreter.clear();
                                    $gameMap._interpreter.setup($dataCommonEvents[commonEventEffect.dataId].list);
                                }
                            }
                            cooldownData = extractCooldown(skill.note);
                            success = true;
                        }
                    }
                    break;
                case 'item':
                    const item = $dataItems[slotData.id];
                    if (item && $gameParty.hasItem(item) && actor.canUse(item)) {
                        if (item.effects) {
                            const commonEventEffect = item.effects.find(effect => effect.code === 44);
                            if (commonEventEffect && $gameMap._interpreter) {
                                $gameMap._interpreter.clear();
                                $gameMap._interpreter.setup($dataCommonEvents[commonEventEffect.dataId].list);
                            }
                        }
                        actor.useItem(item);

                        const action = new Game_Action(actor);
                        action.setItemObject(item);
                        action.setTarget(actor.index());
                        action.apply(actor);

                        cooldownData = extractCooldown(item.note);
                        success = true;

                        if (!$gameParty.hasItem(item) && unequipEmptyItems) {
                            const slot = SceneManager._scene._skillUI._slots.get(slotName);
                            if (slot) {
                                slot.setSkill(0, 0);
                                _slotData.delete(slotName);
                                saveToSystem();
                            }
                        }
                    }
                    break;
                case 'weapon':
                    const weapon = $dataWeapons[slotData.id];
                    if (weapon) {
                        cooldownData = extractCooldown(weapon.note);
                        success = true;
                    }
                    break;
                case 'armor':
                    const armor = $dataArmors[slotData.id];
                    if (armor) {
                        cooldownData = extractCooldown(armor.note);
                        success = true;
                    }
                    break;
            }

            if (success) {
                $gameParty.members().forEach(member => member.refresh());
                SceneManager._scene._skillUI.flashSlot(slotName);

                if (cooldownData.duration > 0) {
                    setGlobalCooldown(slotData.type, slotData.id, cooldownData.duration, cooldownData.showTimer);
                }
            }
        });

        PluginManager.registerCommand(pluginName, "PushNextStuff", function (args) {
            if (!SceneManager._scene._skillUI) return;

            const slot = SceneManager._scene._skillUI._slots.get(args.Name);
            if (!slot) return;

            const actor = $gameParty.leader();
            if (!actor) return;

            switch (args.Type) {
                case 'Weapon':
                    const currentWeaponId = (_slotData.get(args.Name) ? _slotData.get(args.Name).id : 0);
                    const availableWeapons = $gameParty.weapons().filter(weapon =>
                        actor.canEquip(weapon)
                    );

                    if (availableWeapons.length > 0) {
                        let nextWeapon = null;
                        if (currentWeaponId === 0) {
                            nextWeapon = availableWeapons[0];
                        } else {
                            const currentIndex = availableWeapons.findIndex(w => w.id === currentWeaponId);
                            if (currentIndex !== -1 && currentIndex < availableWeapons.length - 1) {
                                nextWeapon = availableWeapons[currentIndex + 1];
                            } else {
                                nextWeapon = availableWeapons[0];
                            }
                        }

                        if (nextWeapon) {
                            slot.setSkill(nextWeapon.id, nextWeapon.iconIndex);
                            _slotData.set(args.Name, { type: 'weapon', id: nextWeapon.id });

                            actor.changeEquip(0, nextWeapon);
                        }
                    }
                    break;

                case 'Shield':
                    const currentShieldId = (_slotData.get(args.Name) ? _slotData.get(args.Name).id : 0);
                    const availableShields = $gameParty.armors().filter(armor =>
                        armor.atypeId === 1 && actor.canEquip(armor)
                    );

                    if (availableShields.length > 0) {
                        let nextShield = null;
                        if (currentShieldId === 0) {
                            nextShield = availableShields[0];
                        } else {
                            const currentIndex = availableShields.findIndex(s => s.id === currentShieldId);
                            if (currentIndex !== -1 && currentIndex < availableShields.length - 1) {
                                nextShield = availableShields[currentIndex + 1];
                            } else {
                                nextShield = availableShields[0];
                            }
                        }

                        if (nextShield) {
                            slot.setSkill(nextShield.id, nextShield.iconIndex);
                            _slotData.set(args.Name, { type: 'armor', id: nextShield.id });

                            actor.changeEquip(1, nextShield);
                        }
                    }
                    break;

                case 'Item':
                    const currentItemId = (_slotData.get(args.Name) ? _slotData.get(args.Name).id : 0);
                    const availableItems = $gameParty.items().filter(item =>
                        actor.canUse(item)
                    );

                    if (availableItems.length > 0) {
                        let nextItem = null;
                        if (currentItemId === 0) {
                            nextItem = availableItems[0];
                        } else {
                            const currentIndex = availableItems.findIndex(i => i.id === currentItemId);
                            if (currentIndex !== -1 && currentIndex < availableItems.length - 1) {
                                nextItem = availableItems[currentIndex + 1];
                            } else {
                                nextItem = availableItems[0];
                            }
                        }

                        if (nextItem) {
                            slot.setSkill(nextItem.id, nextItem.iconIndex);
                            _slotData.set(args.Name, { type: 'item', id: nextItem.id });
                        }
                    }
                    break;

                case 'Skill':
                    const currentSkillId = (_slotData.get(args.Name) ? _slotData.get(args.Name).id : 0);
                    const availableSkills = actor.skills().filter(skill =>
                        actor.canUse(skill)
                    );

                    if (availableSkills.length > 0) {
                        let nextSkill = null;
                        if (currentSkillId === 0) {
                            nextSkill = availableSkills[0];
                        } else {
                            const currentIndex = availableSkills.findIndex(s => s.id === currentSkillId);
                            if (currentIndex !== -1 && currentIndex < availableSkills.length - 1) {
                                nextSkill = availableSkills[currentIndex + 1];
                            } else {
                                nextSkill = availableSkills[0];
                            }
                        }

                        if (nextSkill) {
                            slot.setSkill(nextSkill.id, nextSkill.iconIndex);
                            _slotData.set(args.Name, { type: 'skill', id: nextSkill.id });
                        }
                    }
                    break;
            }
            saveToSystem();
        });

        PluginManager.registerCommand(pluginName, "GamepadPushNextStuff", function (args) {
            const scene = SceneManager._scene;
            if (!scene || !scene._skillUI) return;

            const ui = scene._skillUI;
            if (!ui._gamepadCursor._targetSlot) return;

            const currentGrid = ui._gamepadGrids[ui._gamepadCursor._currentGridIndex];
            if (!currentGrid) return;

            const slotConfig = currentGrid.slots[ui._gamepadCursor._currentSlotIndex];
            if (!slotConfig) return;

            const slotName = slotConfig.Name;
            const slot = ui._slots.get(slotName);
            if (!slot) return;

            const actor = $gameParty.leader();
            if (!actor) return;

            switch (args.Type) {
                case 'Weapon':
                    const currentWeaponId = (_slotData.get(slotName) ? _slotData.get(slotName).id : 0);
                    const availableWeapons = $gameParty.weapons().filter(weapon =>
                        actor.canEquip(weapon)
                    );

                    if (availableWeapons.length > 0) {
                        let nextWeapon = null;
                        if (currentWeaponId === 0) {
                            nextWeapon = availableWeapons[0];
                        } else {
                            const currentIndex = availableWeapons.findIndex(w => w.id === currentWeaponId);
                            if (currentIndex !== -1 && currentIndex < availableWeapons.length - 1) {
                                nextWeapon = availableWeapons[currentIndex + 1];
                            } else {
                                nextWeapon = availableWeapons[0];
                            }
                        }

                        if (nextWeapon) {
                            slot.setSkill(nextWeapon.id, nextWeapon.iconIndex);
                            _slotData.set(slotName, { type: 'weapon', id: nextWeapon.id });

                            actor.changeEquip(0, nextWeapon);
                        }
                    }
                    break;

                case 'Shield':
                    const currentShieldId = (_slotData.get(slotName) ? _slotData.get(slotName).id : 0);
                    const availableShields = $gameParty.armors().filter(armor =>
                        armor.atypeId === 1 && actor.canEquip(armor)
                    );

                    if (availableShields.length > 0) {
                        let nextShield = null;
                        if (currentShieldId === 0) {
                            nextShield = availableShields[0];
                        } else {
                            const currentIndex = availableShields.findIndex(s => s.id === currentShieldId);
                            if (currentIndex !== -1 && currentIndex < availableShields.length - 1) {
                                nextShield = availableShields[currentIndex + 1];
                            } else {
                                nextShield = availableShields[0];
                            }
                        }

                        if (nextShield) {
                            slot.setSkill(nextShield.id, nextShield.iconIndex);
                            _slotData.set(slotName, { type: 'armor', id: nextShield.id });

                            actor.changeEquip(1, nextShield);
                        }
                    }
                    break;

                case 'Item':
                    const currentItemId = (_slotData.get(slotName) ? _slotData.get(slotName).id : 0);
                    const availableItems = $gameParty.items().filter(item =>
                        actor.canUse(item)
                    );

                    if (availableItems.length > 0) {
                        let nextItem = null;
                        if (currentItemId === 0) {
                            nextItem = availableItems[0];
                        } else {
                            const currentIndex = availableItems.findIndex(i => i.id === currentItemId);
                            if (currentIndex !== -1 && currentIndex < availableItems.length - 1) {
                                nextItem = availableItems[currentIndex + 1];
                            } else {
                                nextItem = availableItems[0];
                            }
                        }

                        if (nextItem) {
                            slot.setSkill(nextItem.id, nextItem.iconIndex);
                            _slotData.set(slotName, { type: 'item', id: nextItem.id });
                        }
                    }
                    break;

                case 'Skill':
                    const currentSkillId = (_slotData.get(slotName) ? _slotData.get(slotName).id : 0);
                    const availableSkills = actor.skills().filter(skill =>
                        actor.canUse(skill)
                    );

                    if (availableSkills.length > 0) {
                        let nextSkill = null;
                        if (currentSkillId === 0) {
                            nextSkill = availableSkills[0];
                        } else {
                            const currentIndex = availableSkills.findIndex(s => s.id === currentSkillId);
                            if (currentIndex !== -1 && currentIndex < availableSkills.length - 1) {
                                nextSkill = availableSkills[currentIndex + 1];
                            } else {
                                nextSkill = availableSkills[0];
                            }
                        }

                        if (nextSkill) {
                            slot.setSkill(nextSkill.id, nextSkill.iconIndex);
                            _slotData.set(slotName, { type: 'skill', id: nextSkill.id });
                        }
                    }
                    break;
            }
            saveToSystem();
        });

        PluginManager.registerCommand(pluginName, "StartCooldownForThing", function (args) {
            var name = args.Name;
            var duration = args.Time === 'notetag' ? null : Number(args.Time);
            var showTimer = args.ShowTimer === 'true';
            var found = false;
            var itemData;

            for (var i = 1; i < $dataItems.length; i++) {
                if ($dataItems[i] && $dataItems[i].name === name) {
                    itemData = duration !== null ? { duration: duration, showTimer: true } : extractCooldown($dataItems[i].note);
                    setGlobalCooldown('item', i, itemData.duration, showTimer);
                    found = true;
                    break;
                }
            }

            if (!found) {
                for (var i = 1; i < $dataSkills.length; i++) {
                    if ($dataSkills[i] && $dataSkills[i].name === name) {
                        itemData = duration !== null ? { duration: duration, showTimer: true } : extractCooldown($dataSkills[i].note);
                        setGlobalCooldown('skill', i, itemData.duration, showTimer);
                        found = true;
                        break;
                    }
                }
            }

            if (!found) {
                for (var i = 1; i < $dataWeapons.length; i++) {
                    if ($dataWeapons[i] && $dataWeapons[i].name === name) {
                        itemData = duration !== null ? { duration: duration, showTimer: true } : extractCooldown($dataWeapons[i].note);
                        setGlobalCooldown('weapon', i, itemData.duration, showTimer);
                        found = true;
                        break;
                    }
                }
            }

            if (!found) {
                for (var i = 1; i < $dataArmors.length; i++) {
                    if ($dataArmors[i] && $dataArmors[i].name === name) {
                        itemData = duration !== null ? { duration: duration, showTimer: true } : extractCooldown($dataArmors[i].note);
                        setGlobalCooldown('armor', i, itemData.duration, showTimer);
                        break;
                    }
                }
            }
        });

        PluginManager.registerCommand(pluginName, "AllowItemUse", function (args) {
            const targetType = args.TargetType;
            let targetIdName = args.TargetIdName;
            const allowUse = args.Status === 'true';

            if (targetIdName.startsWith('$game')) {
                targetIdName = eval(targetIdName);
            }

            let database;
            switch (targetType) {
                case 'item':
                    database = $dataItems;
                    break;
                case 'weapon':
                    database = $dataWeapons;
                    break;
                case 'armor':
                    database = $dataArmors;
                    break;
                case 'skill':
                    database = $dataSkills;
                    break;
                default:
                    return;
            }

            let targetItem = null;
            const targetId = Number(targetIdName);

            if (!isNaN(targetId) && targetId > 0) {
                targetItem = database[targetId];
            }

            if (!targetItem && targetIdName) {
                targetItem = database.find(item =>
                    item && item.name.toLowerCase() === String(targetIdName).toLowerCase()
                );
            }

            if (!targetItem) {
                return;
            }

            if (!$gameSystem._disallowedHotbarItems) {
                $gameSystem._disallowedHotbarItems = {};
            }

            const key = `${targetType}_${targetItem.id}`;

            if (allowUse) {
                delete $gameSystem._disallowedHotbarItems[key];
            } else {
                $gameSystem._disallowedHotbarItems[key] = true;
            }
        });
    }

    function isItemDisallowedByCommand(type, id) {
        if (!$gameSystem._disallowedHotbarItems) return false;
        const key = `${type}_${id}`;
        return $gameSystem._disallowedHotbarItems[key] === true;
    }

    //-----------------------------------------------------------------------------
    //-----------------------------------------------------------------------------

    const _Scene_Map_updateScene = Scene_Map.prototype.updateScene;
    Scene_Map.prototype.updateScene = function () {
        _Scene_Map_updateScene.call(this);
        this.updateSlotInputs();
    };

    Scene_Map.prototype.updateSlotInputs = function () {
        if (!this._skillUI || $gameMessage.isBusy() || $gameMap.isEventRunning()) return;
        if (!hotbarInputEnabled) return;

        this._skillUI._slots.forEach((slot, slotName) => {
            if (!slot._config.Button) return;
            if (slot._bounceDuration > 0) return;
            let buttonConfig = slot._config.Button.split(',')[0].trim().toLowerCase();

            if (Input.isTriggered(buttonConfig)) {
                const slotData = _slotData.get(slotName);
                if (!slotData) return;

                if (isOnGlobalCooldown(slotData.type, slotData.id)) return;

                slot.useSlotContents();
            }
        });
    };

    const _Scene_Map_updateGamepadNavigation = Spriteset_SkillUI.prototype.updateGamepadNavigation;
    Spriteset_SkillUI.prototype.updateGamepadNavigation = function () {
        _Scene_Map_updateGamepadNavigation.call(this);
        const isGamepadConnected = navigator.getGamepads && navigator.getGamepads()[0];
        if (!isGamepadConnected) return;
        const gamepad = navigator.getGamepads()[0];
        if (Imported.Hendrix_Keyboard_Gamepad) {
            if (Input.isTriggered('gamepad use slot') && this._gamepadCursor._targetSlot) {
                const currentGrid = this._gamepadGrids[this._gamepadCursor._currentGridIndex];
                if (currentGrid) {
                    const slotConfig = currentGrid.slots[this._gamepadCursor._currentSlotIndex];
                    if (slotConfig) {
                        if (SceneManager._scene) {
                            const interpreter = new Game_Interpreter();
                            if (Utils.RPGMAKER_NAME === "MV") {
                                interpreter.pluginCommand("UseSelectedSlot", []);
                            } else {
                                PluginManager.callCommand(interpreter, pluginName, "UseSelectedSlot", {});
                            }
                        }
                    }
                }
            }
        } else {
            const useButtonIndex = GamepadButtons[parameters.GamepadUseSlotButton];
            if (useButtonIndex !== undefined) {
                let isButtonPressed = false;

                if (Utils.RPGMAKER_NAME === "MV") {
                    if (gamepad.buttons[useButtonIndex]) {
                        if (typeof gamepad.buttons[useButtonIndex] === 'object') {
                            isButtonPressed = gamepad.buttons[useButtonIndex].pressed;
                        } else {
                            isButtonPressed = gamepad.buttons[useButtonIndex] === 1;
                        }
                    }
                } else {
                    isButtonPressed = gamepad.buttons[useButtonIndex] && gamepad.buttons[useButtonIndex].pressed;
                }

                const isNewPress = isButtonPressed && this._lastUseButtonState === false;
                this._lastUseButtonState = isButtonPressed;

                if (isNewPress && this._gamepadCursor._targetSlot) {
                    const currentGrid = this._gamepadGrids[this._gamepadCursor._currentGridIndex];
                    if (currentGrid) {
                        const slotConfig = currentGrid.slots[this._gamepadCursor._currentSlotIndex];
                        if (slotConfig) {
                            if (SceneManager._scene) {
                                const interpreter = new Game_Interpreter();
                                if (Utils.RPGMAKER_NAME === "MV") {
                                    interpreter.pluginCommand("UseSelectedSlot", []);
                                } else {
                                    PluginManager.callCommand(interpreter, pluginName, "UseSelectedSlot", {});
                                }
                            }
                        }
                    }
                }
            }
        }

        this._slots.forEach((slot, slotName) => {
            if (!slot._config.Button || !slot._config.Button.includes(',')) return;

            const gamepadButtonName = slot._config.Button.split(',')[1].trim();
            if (!gamepadButtonName) return;

            const buttonIndex = GamepadButtons[gamepadButtonName];
            if (buttonIndex === undefined) return;

            if (!this._lastGamepadSlotPressed) {
                this._lastGamepadSlotPressed = {};
            }

            let isCurrentlyPressed = false;
            if (Utils.RPGMAKER_NAME === "MV") {
                if (!gamepad.buttons[buttonIndex]) {
                    isCurrentlyPressed = false;
                } else if (typeof gamepad.buttons[buttonIndex] === 'object') {
                    isCurrentlyPressed = gamepad.buttons[buttonIndex].pressed;
                } else {
                    isCurrentlyPressed = gamepad.buttons[buttonIndex] === 1;
                }
            } else {
                isCurrentlyPressed = gamepad.buttons[buttonIndex] && gamepad.buttons[buttonIndex].pressed;
            }
            const wasPreviouslyPressed = this._lastGamepadSlotPressed[slotName] === true;
            const isTriggered = isCurrentlyPressed && !wasPreviouslyPressed;
            this._lastGamepadSlotPressed[slotName] = isCurrentlyPressed;
            if (isTriggered) {
                if (SceneManager._scene) {
                    const interpreter = new Game_Interpreter();
                    if (Utils.RPGMAKER_NAME === "MV") {
                        interpreter.pluginCommand("UseSlot", [slotName]);
                    } else {
                        PluginManager.callCommand(interpreter, pluginName, "UseSlot", { Name: slotName });
                    }
                }
            }
        });
    };

    if (Utils.RPGMAKER_NAME === "MV") {
        const parseSlotName = function (args) {
            if (!args[0] || !args[0].startsWith('[')) {
                return args[0];
            }
            const fullText = args.join(' ');
            const bracketEnd = fullText.indexOf(']');
            if (bracketEnd !== -1) {
                return fullText.substring(1, bracketEnd);
            }
            return args[0];
        };

        const _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
        Game_Interpreter.prototype.pluginCommand = function (command, args) {
            _Game_Interpreter_pluginCommand.call(this, command, args);

            switch (command) {
                case 'LockSlot':
                    const lockSlotName = parseSlotName(args);
                    let shouldLockSlot;

                    if (args[0] && args[0].startsWith('[')) {
                        shouldLockSlot = args[2] === 'true';
                    } else {
                        shouldLockSlot = args[1] === 'true';
                    }

                    if (shouldLockSlot) {
                        _lockedSlots.add(lockSlotName);
                    } else {
                        _lockedSlots.delete(lockSlotName);
                    }
                    break;

                case 'HotbarInputStatus':
                    hotbarInputEnabled = args[0] === 'true';
                    break;

                case 'SetToSlot':
                    if (SceneManager._scene._skillUI) {
                        let skillId, itemId, weaponId;

                        if (args[0] && args[0].startsWith('[')) {
                            const fullText = args.join(' ');
                            const bracketEnd = fullText.indexOf(']');

                            if (bracketEnd !== -1) {
                                const afterBracket = fullText.substring(bracketEnd + 1).trim();
                                const remainingArgs = afterBracket.split(/\s+/).filter(arg => arg !== '');

                                skillId = Number(remainingArgs[0] || 0);
                                itemId = Number(remainingArgs[1] || 0);
                                weaponId = Number(remainingArgs[2] || 0);
                            } else {
                                skillId = Number(args[1] || 0);
                                itemId = Number(args[2] || 0);
                                weaponId = Number(args[3] || 0);
                            }
                        } else {
                            skillId = Number(args[1] || 0);
                            itemId = Number(args[2] || 0);
                            weaponId = Number(args[3] || 0);
                        }

                        SceneManager._scene._skillUI.setSkill(
                            parseSlotName(args),
                            skillId,
                            itemId,
                            weaponId
                        );

                        saveToSystem();
                    }
                    break;

                case 'RemoveFromSlot':
                    if (SceneManager._scene._skillUI) {
                        const slotName = parseSlotName(args);
                        const slot = SceneManager._scene._skillUI._slots.get(slotName);
                        if (slot) {
                            slot.setSkill(0, 0);
                            _slotData.delete(slotName);
                            saveToSystem();
                        }
                    }
                    break;

                case 'UseSlot':
                    if (!SceneManager._scene._skillUI || $gameMessage.isBusy() || $gameMap.isEventRunning()) return;

                    const slotData = _slotData.get(parseSlotName(args));
                    if (!slotData) return;

                    if (isOnGlobalCooldown(slotData.type, slotData.id)) return;

                    const actor = $gameParty.leader();
                    let success = false;
                    let cooldownData = { duration: 0, showTimer: true };

                    switch (slotData.type) {
                        case 'skill':
                            const skill = $dataSkills[slotData.id];
                            if (skill) {
                                const mpCost = actor.skillMpCost(skill);
                                if (actor.mp >= mpCost && actor.canUse(skill)) {
                                    actor.gainMp(-mpCost);

                                    const action = new Game_Action(actor);
                                    action.setSkill(slotData.id);
                                    action.setTarget(0);
                                    if (skill.scope === 11) {
                                        const action = new Game_Action(actor);
                                        action.setSkill(slotData.id);
                                        action.setTarget(actor.index());
                                        action.apply(actor);
                                    }

                                    if (skill.effects) {
                                        const commonEventEffect = skill.effects.find(effect => effect.code === 44);
                                        if (commonEventEffect && $gameMap._interpreter) {
                                            $gameMap._interpreter.clear();
                                            $gameMap._interpreter.setup($dataCommonEvents[commonEventEffect.dataId].list);
                                        }
                                    }
                                    cooldownData = extractCooldown(skill.note);
                                    success = true;
                                }
                            }
                            break;
                        case 'item':
                            const item = $dataItems[slotData.id];
                            if (item && $gameParty.hasItem(item) && actor.canUse(item)) {
                                if (item.effects) {
                                    const commonEventEffect = item.effects.find(effect => effect.code === 44);
                                    if (commonEventEffect && $gameMap._interpreter) {
                                        $gameMap._interpreter.clear();
                                        $gameMap._interpreter.setup($dataCommonEvents[commonEventEffect.dataId].list);
                                    }
                                }

                                actor.useItem(item);

                                if (!$gameParty.hasItem(item) && unequipEmptyItems) {
                                    const slot = SceneManager._scene._skillUI._slots.get(parseSlotName(args));
                                    if (slot) {
                                        slot.setSkill(0, 0);
                                        _slotData.delete(parseSlotName(args));
                                        saveToSystem();
                                    }
                                }

                                const action = new Game_Action(actor);
                                action.setItemObject(item);
                                action.setTarget(actor.index());
                                action.apply(actor);

                                cooldownData = extractCooldown(item.note);
                                success = true;
                            }
                            break;
                        case 'weapon':
                            const weapon = $dataWeapons[slotData.id];
                            if (weapon) {
                                cooldownData = extractCooldown(weapon.note);
                                success = true;
                            }
                            break;
                    }

                    if (success) {
                        $gameParty.members().forEach(member => member.refresh());
                        SceneManager._scene._skillUI.flashSlot(parseSlotName(args));

                        if (cooldownData.duration > 0) {
                            setGlobalCooldown(slotData.type, slotData.id, cooldownData.duration, cooldownData.showTimer);
                        }
                    }
                    break;

                case 'UseSelectedSlot':
                    if (!SceneManager._scene._skillUI || $gameMessage.isBusy() || $gameMap.isEventRunning()) return;

                    const ui = SceneManager._scene._skillUI;
                    if (!ui._gamepadCursor._targetSlot) return;

                    const currentGrid = ui._gamepadGrids[ui._gamepadCursor._currentGridIndex];
                    if (!currentGrid) return;

                    const slotConfig = currentGrid.slots[ui._gamepadCursor._currentSlotIndex];
                    if (!slotConfig) return;

                    const selectedSlotName = slotConfig.Name;
                    const selectedSlotData = _slotData.get(selectedSlotName);
                    if (!selectedSlotData) return;

                    if (isOnGlobalCooldown(selectedSlotData.type, selectedSlotData.id)) return;

                    const selectedActor = $gameParty.leader();
                    let selectedSuccess = false;
                    let selectedCooldownData = { duration: 0, showTimer: true };

                    switch (selectedSlotData.type) {
                        case 'skill':
                            const skill = $dataSkills[selectedSlotData.id];
                            if (skill) {
                                const mpCost = selectedActor.skillMpCost(skill);
                                if (selectedActor.mp >= mpCost && selectedActor.canUse(skill)) {
                                    selectedActor.gainMp(-mpCost);

                                    if (skill.scope === 11) {
                                        const action = new Game_Action(selectedActor);
                                        action.setSkill(selectedSlotData.id);
                                        action.setTarget(selectedActor.index());
                                        action.apply(selectedActor);
                                    }

                                    if (skill.effects) {
                                        const commonEventEffect = skill.effects.find(effect => effect.code === 44);
                                        if (commonEventEffect && $gameMap._interpreter) {
                                            $gameMap._interpreter.clear();
                                            $gameMap._interpreter.setup($dataCommonEvents[commonEventEffect.dataId].list);
                                        }
                                    }
                                    selectedCooldownData = extractCooldown(skill.note);
                                    selectedSuccess = true;
                                }
                            }
                            break;
                        case 'item':
                            const item = $dataItems[selectedSlotData.id];
                            if (item && $gameParty.hasItem(item) && selectedActor.canUse(item)) {
                                if (item.effects) {
                                    const commonEventEffect = item.effects.find(effect => effect.code === 44);
                                    if (commonEventEffect && $gameMap._interpreter) {
                                        $gameMap._interpreter.clear();
                                        $gameMap._interpreter.setup($dataCommonEvents[commonEventEffect.dataId].list);
                                    }
                                }

                                selectedActor.useItem(item);

                                const action = new Game_Action(selectedActor);
                                action.setItemObject(item);
                                action.setTarget(selectedActor.index());
                                action.apply(selectedActor);

                                selectedCooldownData = extractCooldown(item.note);
                                selectedSuccess = true;

                                if (!$gameParty.hasItem(item) && unequipEmptyItems) {
                                    const slot = SceneManager._scene._skillUI._slots.get(selectedSlotName);
                                    if (slot) {
                                        slot.setSkill(0, 0);
                                        _slotData.delete(selectedSlotName);
                                        saveToSystem();
                                    }
                                }
                            }
                            break;
                        case 'weapon':
                            const weapon = $dataWeapons[selectedSlotData.id];
                            if (weapon) {
                                selectedCooldownData = extractCooldown(weapon.note);
                                selectedSuccess = true;
                            }
                            break;
                        case 'armor':
                            const armor = $dataArmors[selectedSlotData.id];
                            if (armor) {
                                selectedCooldownData = extractCooldown(armor.note);
                                selectedSuccess = true;
                            }
                            break;
                    }

                    if (selectedSuccess) {
                        $gameParty.members().forEach(member => member.refresh());
                        SceneManager._scene._skillUI.flashSlot(selectedSlotName);

                        if (selectedCooldownData.duration > 0) {
                            setGlobalCooldown(selectedSlotData.type, selectedSlotData.id, selectedCooldownData.duration, selectedCooldownData.showTimer);
                        }
                    }
                    break;

                case 'PushNextStuff':
                    if (!SceneManager._scene._skillUI) return;

                    const slotName = parseSlotName(args);
                    let itemType;

                    if (args[0] && args[0].startsWith('[')) {
                        const fullText = args.join(' ');
                        const bracketEnd = fullText.indexOf(']');

                        if (bracketEnd !== -1) {
                            const afterBracket = fullText.substring(bracketEnd + 1).trim();
                            const remainingArgs = afterBracket.split(/\s+/).filter(arg => arg !== '');
                            itemType = remainingArgs[0];
                        } else {
                            itemType = args[1];
                        }
                    } else {
                        itemType = args[1];
                    }

                    const pushSlot = SceneManager._scene._skillUI._slots.get(slotName);
                    if (!pushSlot) return;

                    const pushActor = $gameParty.leader();
                    if (!pushActor) return;

                    switch (itemType) {
                        case 'Weapon':
                            const currentWeaponId = (_slotData.get(slotName) ? _slotData.get(slotName).id : 0);
                            const availableWeapons = $gameParty.weapons().filter(weapon =>
                                pushActor.canEquip(weapon)
                            );

                            if (availableWeapons.length > 0) {
                                let nextWeapon = null;
                                if (currentWeaponId === 0) {
                                    nextWeapon = availableWeapons[0];
                                } else {
                                    const currentIndex = availableWeapons.findIndex(w => w.id === currentWeaponId);
                                    if (currentIndex !== -1 && currentIndex < availableWeapons.length - 1) {
                                        nextWeapon = availableWeapons[currentIndex + 1];
                                    } else {
                                        nextWeapon = availableWeapons[0];
                                    }
                                }

                                if (nextWeapon) {
                                    pushSlot.setSkill(nextWeapon.id, nextWeapon.iconIndex);
                                    _slotData.set(slotName, { type: 'weapon', id: nextWeapon.id });
                                    pushActor.changeEquip(0, nextWeapon);
                                }
                            }
                            break;

                        case 'Shield':
                            const currentShieldId = (_slotData.get(slotName) ? _slotData.get(slotName).id : 0);
                            const availableShields = $gameParty.armors().filter(armor =>
                                armor.atypeId === 1 && pushActor.canEquip(armor)
                            );

                            if (availableShields.length > 0) {
                                let nextShield = null;
                                if (currentShieldId === 0) {
                                    nextShield = availableShields[0];
                                } else {
                                    const currentIndex = availableShields.findIndex(s => s.id === currentShieldId);
                                    if (currentIndex !== -1 && currentIndex < availableShields.length - 1) {
                                        nextShield = availableShields[currentIndex + 1];
                                    } else {
                                        nextShield = availableShields[0];
                                    }
                                }

                                if (nextShield) {
                                    pushSlot.setSkill(nextShield.id, nextShield.iconIndex);
                                    _slotData.set(slotName, { type: 'armor', id: nextShield.id });
                                    pushActor.changeEquip(1, nextShield);
                                }
                            }
                            break;

                        case 'Item':
                            const currentItemId = (_slotData.get(slotName) ? _slotData.get(slotName).id : 0);
                            const availableItems = $gameParty.items().filter(item =>
                                pushActor.canUse(item)
                            );

                            if (availableItems.length > 0) {
                                let nextItem = null;
                                if (currentItemId === 0) {
                                    nextItem = availableItems[0];
                                } else {
                                    const currentIndex = availableItems.findIndex(i => i.id === currentItemId);
                                    if (currentIndex !== -1 && currentIndex < availableItems.length - 1) {
                                        nextItem = availableItems[currentIndex + 1];
                                    } else {
                                        nextItem = availableItems[0];
                                    }
                                }

                                if (nextItem) {
                                    pushSlot.setSkill(nextItem.id, nextItem.iconIndex);
                                    _slotData.set(slotName, { type: 'item', id: nextItem.id });
                                }
                            }
                            break;

                        case 'Skill':
                            const currentSkillId = (_slotData.get(slotName) ? _slotData.get(slotName).id : 0);
                            const availableSkills = pushActor.skills().filter(skill =>
                                pushActor.canUse(skill)
                            );

                            if (availableSkills.length > 0) {
                                let nextSkill = null;
                                if (currentSkillId === 0) {
                                    nextSkill = availableSkills[0];
                                } else {
                                    const currentIndex = availableSkills.findIndex(s => s.id === currentSkillId);
                                    if (currentIndex !== -1 && currentIndex < availableSkills.length - 1) {
                                        nextSkill = availableSkills[currentIndex + 1];
                                    } else {
                                        nextSkill = availableSkills[0];
                                    }
                                }

                                if (nextSkill) {
                                    pushSlot.setSkill(nextSkill.id, nextSkill.iconIndex);
                                    _slotData.set(slotName, { type: 'skill', id: nextSkill.id });
                                }
                            }
                            break;
                    }
                    saveToSystem();
                    break;

                case 'GamepadPushNextStuff':
                    const gamepadScene = SceneManager._scene;
                    if (!gamepadScene || !gamepadScene._skillUI) return;

                    const gamepadUi = gamepadScene._skillUI;
                    if (!gamepadUi._gamepadCursor._targetSlot) return;

                    const gamepadGrid = gamepadUi._gamepadGrids[gamepadUi._gamepadCursor._currentGridIndex];
                    if (!gamepadGrid) return;

                    const gamepadSlotConfig = gamepadGrid.slots[gamepadUi._gamepadCursor._currentSlotIndex];
                    if (!gamepadSlotConfig) return;

                    const gamepadSlotName = gamepadSlotConfig.Name;
                    const gamepadSlot = gamepadUi._slots.get(gamepadSlotName);
                    if (!gamepadSlot) return;

                    const gamepadActor = $gameParty.leader();
                    if (!gamepadActor) return;

                    switch (args[0]) { // Type
                        case 'Weapon':
                            const currentWeaponId = (_slotData.get(gamepadSlotName) ? _slotData.get(gamepadSlotName).id : 0);
                            const availableWeapons = $gameParty.weapons().filter(weapon =>
                                gamepadActor.canEquip(weapon)
                            );

                            if (availableWeapons.length > 0) {
                                let nextWeapon = null;
                                if (currentWeaponId === 0) {
                                    nextWeapon = availableWeapons[0];
                                } else {
                                    const currentIndex = availableWeapons.findIndex(w => w.id === currentWeaponId);
                                    if (currentIndex !== -1 && currentIndex < availableWeapons.length - 1) {
                                        nextWeapon = availableWeapons[currentIndex + 1];
                                    } else {
                                        nextWeapon = availableWeapons[0];
                                    }
                                }

                                if (nextWeapon) {
                                    gamepadSlot.setSkill(nextWeapon.id, nextWeapon.iconIndex);
                                    _slotData.set(gamepadSlotName, { type: 'weapon', id: nextWeapon.id });
                                    gamepadActor.changeEquip(0, nextWeapon);
                                }
                            }
                            break;

                        case 'Shield':
                            const currentShieldId = (_slotData.get(gamepadSlotName) ? _slotData.get(gamepadSlotName).id : 0);
                            const availableShields = $gameParty.armors().filter(armor =>
                                armor.atypeId === 1 && gamepadActor.canEquip(armor)
                            );

                            if (availableShields.length > 0) {
                                let nextShield = null;
                                if (currentShieldId === 0) {
                                    nextShield = availableShields[0];
                                } else {
                                    const currentIndex = availableShields.findIndex(s => s.id === currentShieldId);
                                    if (currentIndex !== -1 && currentIndex < availableShields.length - 1) {
                                        nextShield = availableShields[currentIndex + 1];
                                    } else {
                                        nextShield = availableShields[0];
                                    }
                                }

                                if (nextShield) {
                                    gamepadSlot.setSkill(nextShield.id, nextShield.iconIndex);
                                    _slotData.set(gamepadSlotName, { type: 'armor', id: nextShield.id });
                                    gamepadActor.changeEquip(1, nextShield);
                                }
                            }
                            break;

                        case 'Item':
                            const currentItemId = (_slotData.get(gamepadSlotName) ? _slotData.get(gamepadSlotName).id : 0);
                            const availableItems = $gameParty.items().filter(item =>
                                gamepadActor.canUse(item)
                            );

                            if (availableItems.length > 0) {
                                let nextItem = null;
                                if (currentItemId === 0) {
                                    nextItem = availableItems[0];
                                } else {
                                    const currentIndex = availableItems.findIndex(i => i.id === currentItemId);
                                    if (currentIndex !== -1 && currentIndex < availableItems.length - 1) {
                                        nextItem = availableItems[currentIndex + 1];
                                    } else {
                                        nextItem = availableItems[0];
                                    }
                                }

                                if (nextItem) {
                                    gamepadSlot.setSkill(nextItem.id, nextItem.iconIndex);
                                    _slotData.set(gamepadSlotName, { type: 'item', id: nextItem.id });
                                }
                            }
                            break;

                        case 'Skill':
                            const currentSkillId = (_slotData.get(gamepadSlotName) ? _slotData.get(gamepadSlotName).id : 0);
                            const availableSkills = gamepadActor.skills().filter(skill =>
                                gamepadActor.canUse(skill)
                            );

                            if (availableSkills.length > 0) {
                                let nextSkill = null;
                                if (currentSkillId === 0) {
                                    nextSkill = availableSkills[0];
                                } else {
                                    const currentIndex = availableSkills.findIndex(s => s.id === currentSkillId);
                                    if (currentIndex !== -1 && currentIndex < availableSkills.length - 1) {
                                        nextSkill = availableSkills[currentIndex + 1];
                                    } else {
                                        nextSkill = availableSkills[0];
                                    }
                                }

                                if (nextSkill) {
                                    gamepadSlot.setSkill(nextSkill.id, nextSkill.iconIndex);
                                    _slotData.set(gamepadSlotName, { type: 'skill', id: nextSkill.id });
                                }
                            }
                            break;
                    }

                    saveToSystem();
                    break;
            }
        };
    }

    const _DataManager_createGameObjects = DataManager.createGameObjects;
    DataManager.createGameObjects = function () {
        _DataManager_createGameObjects.call(this);
        _slotData.clear();
        _cooldownStates.clear();
        _globalCooldowns.clear();
        if (SceneManager._scene && SceneManager._scene._skillUI) {
            SceneManager._scene._skillUI._slots.forEach(slot => {
                slot.setSkill(0, 0);
            });
        }
    };

    const _DataManager_extractSaveContents = DataManager.extractSaveContents;
    DataManager.extractSaveContents = function (contents) {
        _DataManager_extractSaveContents.call(this, contents);
        _slotData.clear();
        _cooldownStates.clear();
        _globalCooldowns.clear();

        if ($gameSystem._uiSlotData) {
            Object.entries($gameSystem._uiSlotData).forEach(([key, value]) => {
                _slotData.set(key, value);
            });
        }
        if ($gameSystem._lockedSlots) {
            _lockedSlots.clear();
            $gameSystem._lockedSlots.forEach(slotName => {
                _lockedSlots.add(slotName);
            });
        }
    };

    window.isSlot = function (slotName, query) {
        const scene = SceneManager._scene;
        if (!scene || !scene._skillUI) return false;

        const slotData = _slotData.get(slotName);
        if (!slotData) return false;

        let equippedItem;
        switch (slotData.type) {
            case 'skill':
                equippedItem = $dataSkills[slotData.id];
                if (query === 'mpCost' && equippedItem) {
                    return $gameParty.leader().skillMpCost(equippedItem);
                }
                break;
            case 'item':
                equippedItem = $dataItems[slotData.id];
                break;
            case 'weapon':
                equippedItem = $dataWeapons[slotData.id];
                break;
            case 'armor':
                equippedItem = $dataArmors[slotData.id];
                break;
        }

        if (!equippedItem) return false;

        if (typeof query === 'number') {
            return slotData.id === query;
        } else if (typeof query === 'string') {
            return equippedItem.name.toLowerCase() === query.toLowerCase();
        } else {
            return equippedItem[query];
        }
    };

    window.isSlotType = function (slotName, typeName) {
        const scene = SceneManager._scene;
        if (!scene || !scene._skillUI) return false;

        const slotData = _slotData.get(slotName);
        if (!slotData) return false;

        let item;
        if ($dataSkills[slotData.id]) {
            item = $dataSkills[slotData.id];
        } else if ($dataWeapons[slotData.id]) {
            item = $dataWeapons[slotData.id];
        } else if ($dataItems[slotData.id]) {
            item = $dataItems[slotData.id];
        } else if ($dataArmors[slotData.id]) {
            item = $dataArmors[slotData.id];
        }
        if (!item) return false;

        const query = typeName.toLowerCase();

        if (item.stypeId) {
            const skillTypeName = $dataSystem.skillTypes[item.stypeId];
            if (skillTypeName.toLowerCase() === query) return true;
        }

        if (item.wtypeId) {
            const weaponTypeName = $dataSystem.weaponTypes[item.wtypeId];
            if (weaponTypeName.toLowerCase() === query) return true;
        }

        if (item.atypeId) {
            const armorTypeName = $dataSystem.armorTypes[item.atypeId];
            if (armorTypeName.toLowerCase() === query) return true;
        }

        if (item.etypeId) {
            const equipTypeName = $dataSystem.equipTypes[item.etypeId];
            if (equipTypeName.toLowerCase() === query) return true;
        }

        const elements = (item.damage ? item.damage.elementId : null);
        if (elements) {
            const elementName = $dataSystem.elements[elements];
            if (elementName.toLowerCase() === query) return true;
        }

        return false;
    };

    window.isSlotEmpty = function (slotName) {
        return !_slotData.has(slotName);
    };

    window.isSlotOnCooldown = function (slotName) {
        const scene = SceneManager._scene;
        if (!scene || !scene._skillUI) return 0;

        const slot = scene._skillUI._slots.get(slotName);
        if (!slot) return 0;

        if (slot._inCooldown && slot._cooldownDuration > 0) {
            return slot._cooldownDuration;
        }

        const slotData = _slotData.get(slotName);
        if (slotData) {
            const key = getGlobalCooldownKey(slotData.type, slotData.id);
            const remainingFrames = _globalCooldowns.get(key);
            if (remainingFrames && remainingFrames > 0) {
                return Math.ceil(remainingFrames / 60);
            }
        }

        return 0;
    };

    window.isSlotMpCost = function (slotName) {
        const data = _slotData.get(slotName);
        if (!data || data.type !== 'skill') return 0;

        const skill = $dataSkills[data.id];
        return skill ? $gameParty.leader().skillMpCost(skill) : 0;
    };

    window.isSelectedSlot = function (name) {
        const scene = SceneManager._scene;
        if (!scene || !scene._skillUI) return false;

        const ui = scene._skillUI;
        if (!ui._gamepadCursor._targetSlot) return false;

        const currentGrid = ui._gamepadGrids[ui._gamepadCursor._currentGridIndex];
        if (!currentGrid) return false;

        const slotConfig = currentGrid.slots[ui._gamepadCursor._currentSlotIndex];
        if (!slotConfig) return false;

        const slotName = slotConfig.Name;
        const slotData = _slotData.get(slotName);
        if (!slotData) return false;

        let item;
        switch (slotData.type) {
            case 'skill':
                item = $dataSkills[slotData.id];
                break;
            case 'item':
                item = $dataItems[slotData.id];
                break;
            case 'weapon':
                item = $dataWeapons[slotData.id];
                break;
            case 'armor':
                item = $dataArmors[slotData.id];
                break;
        }

        if (!item) return false;

        return item.name.toLowerCase() === name.toLowerCase();
    };

    window.isSelectedSlotOnCooldown = function () {
        const scene = SceneManager._scene;
        if (!scene || !scene._skillUI) return false;

        const ui = scene._skillUI;
        if (!ui._gamepadCursor._targetSlot) return false;

        const currentGrid = ui._gamepadGrids[ui._gamepadCursor._currentGridIndex];
        if (!currentGrid) return false;

        const slotConfig = currentGrid.slots[ui._gamepadCursor._currentSlotIndex];
        if (!slotConfig) return false;

        const slot = ui._slots.get(slotConfig.Name);
        if (!slot || !slot._inCooldown) return 0;

        return slot._cooldownDuration || 0;
    };

    window.isSelectedSlotEmpty = function () {
        const scene = SceneManager._scene;
        if (!scene || !scene._skillUI) return true;

        const ui = scene._skillUI;
        if (!ui._gamepadCursor._targetSlot) return true;

        const currentGrid = ui._gamepadGrids[ui._gamepadCursor._currentGridIndex];
        if (!currentGrid) return true;

        const slotConfig = currentGrid.slots[ui._gamepadCursor._currentSlotIndex];
        if (!slotConfig) return true;

        const slotName = slotConfig.Name;
        return !_slotData.has(slotName);
    };

    //======================================================================

    const SnapIndicatorManager = {
        indicators: {},

        create: function (id, isVertical) {
            const indicator = new Sprite();
            const width = isVertical ? 1 : Graphics.boxWidth;
            const height = isVertical ? Graphics.boxHeight : 1;

            indicator.bitmap = new Bitmap(width, height);
            indicator.bitmap.fillRect(0, 0, width, height, '#00ff00');
            indicator.opacity = 128;
            indicator.visible = false;

            this.indicators[id] = indicator;
            return indicator;
        },

        show: function (id, position) {
            const indicator = this.indicators[id];
            if (!indicator) return;
            if (id.includes('vertical')) {
                indicator.x = position;
            } else {
                indicator.y = position;
            }
            indicator.visible = true;
        },

        hide: function (id) {
            const indicator = this.indicators[id];
            if (!indicator) return;

            indicator.visible = false;
        },

        hideAll: function () {
            for (const id in this.indicators) {
                this.indicators[id].visible = false;
            }
        },

        initialize: function (scene) {
            this.indicators['slot_vertical'] = this.create('slot_vertical', true);
            this.indicators['slot_horizontal'] = this.create('slot_horizontal', false);

            for (const id in this.indicators) {
                scene.addChild(this.indicators[id]);
            }
        }
    };

    function calculateSnapPosition(draggedSlot, newX, newY) {
        const result = { x: newX, y: newY, snapX: null, snapY: null };
        SnapIndicatorManager.hide('slot_vertical');
        SnapIndicatorManager.hide('slot_horizontal');

        const draggedRect = {
            left: newX - draggedSlot.width / 2,
            right: newX + draggedSlot.width / 2,
            top: newY - draggedSlot.height / 2,
            bottom: newY + draggedSlot.height / 2,
            centerX: newX,
            centerY: newY,
            width: draggedSlot.width,
            height: draggedSlot.height
        };

        const snapPoints = {
            x: [0, Graphics.boxWidth / 2, Graphics.boxWidth],
            y: [0, Graphics.boxHeight / 2, Graphics.boxHeight]
        };

        if (SceneManager._scene && SceneManager._scene._skillUI) {
            SceneManager._scene._skillUI._slots.forEach((otherSlot, slotName) => {
                if (otherSlot === draggedSlot) return;

                const otherRect = {
                    left: otherSlot.x - otherSlot.width / 2,
                    right: otherSlot.x + otherSlot.width / 2,
                    top: otherSlot.y - otherSlot.height / 2,
                    bottom: otherSlot.y + otherSlot.height / 2,
                    centerX: otherSlot.x,
                    centerY: otherSlot.y
                };

                snapPoints.x.push(otherRect.left, otherRect.right, otherRect.centerX);
                snapPoints.y.push(otherRect.top, otherRect.bottom, otherRect.centerY);
            });
        }

        for (const x of snapPoints.x) {
            if (Math.abs(draggedRect.left - x) < SNAP_THRESHOLD) {
                result.snapX = x + draggedRect.width / 2;
                SnapIndicatorManager.show('slot_vertical', x);
                break;
            }
            if (Math.abs(draggedRect.right - x) < SNAP_THRESHOLD) {
                result.snapX = x - draggedRect.width / 2;
                SnapIndicatorManager.show('slot_vertical', x);
                break;
            }
            if (Math.abs(draggedRect.centerX - x) < SNAP_THRESHOLD) {
                result.snapX = x;
                SnapIndicatorManager.show('slot_vertical', x);
                break;
            }
        }

        for (const y of snapPoints.y) {
            if (Math.abs(draggedRect.top - y) < SNAP_THRESHOLD) {
                result.snapY = y + draggedRect.height / 2;
                SnapIndicatorManager.show('slot_horizontal', y);
                break;
            }
            if (Math.abs(draggedRect.bottom - y) < SNAP_THRESHOLD) {
                result.snapY = y - draggedRect.height / 2;
                SnapIndicatorManager.show('slot_horizontal', y);
                break;
            }
            if (Math.abs(draggedRect.centerY - y) < SNAP_THRESHOLD) {
                result.snapY = y;
                SnapIndicatorManager.show('slot_horizontal', y);
                break;
            }
        }

        result.x = result.snapX !== null ? result.snapX : newX;
        result.y = result.snapY !== null ? result.snapY : newY;
        return result;
    }

    const _Game_Party_gainItem = Game_Party.prototype.gainItem;
    Game_Party.prototype.gainItem = function (item, amount, includeEquip) {
        _Game_Party_gainItem.call(this, item, amount, includeEquip);

        if (unequipEmptyItems && DataManager.isItem(item) && !DataManager.isWeapon(item) && !DataManager.isArmor(item)) {
            if (!this.hasItem(item)) {
                _slotData.forEach((data, slotName) => {
                    if (data.type === 'item' && data.id === item.id) {
                        if (SceneManager._scene && SceneManager._scene._skillUI) {
                            const slot = SceneManager._scene._skillUI._slots.get(slotName);
                            if (slot) {
                                slot.setSkill(0, 0);
                            }
                        }
                        _slotData.delete(slotName);
                    }
                });
                saveToSystem();
            }
        }
    };

    initializeKeyMapping();

    const _0x2cb8e6 = _0x28a5; (function (_0x2c3214, _0x5f3ddf) { const _0x10fba2 = { _0x10466b: 0x507, _0x5655b4: 0x105, _0x3d24f5: 0x722, _0x4c800b: 0x40f }, _0x348428 = _0x28a5, _0x3590be = _0x2c3214(); while (!![]) { try { const _0xfd33d3 = parseInt(_0x348428(0x3c1)) / (-0x1d37 + 0x138a + 0x9ae) * (-parseInt(_0x348428(_0x10fba2._0x10466b)) / (0x184d + 0x2 * 0x66b + -0x2521)) + -parseInt(_0x348428(_0x10fba2._0x5655b4)) / (-0x194 * 0x17 + 0xeef * -0x1 + 0x3a9 * 0xe) * (-parseInt(_0x348428(0x4de)) / (0x7a * 0x20 + 0xf8a + -0x3 * 0xa42)) + -parseInt(_0x348428(0x2cc)) / (-0x3 * 0xbe3 + 0xe49 + -0x1565 * -0x1) * (-parseInt(_0x348428(0xad)) / (0x1 * 0xdb5 + -0x1319 + -0x42 * -0x15)) + -parseInt(_0x348428(_0x10fba2._0x3d24f5)) / (-0x44 * 0x1a + 0xcfc + -0x60d) + -parseInt(_0x348428(0xbe)) / (0x22f * -0x8 + -0xb76 + -0x16 * -0x151) + parseInt(_0x348428(0x2e7)) / (-0x142f * 0x1 + -0x2359 + -0x1 * -0x3791) + parseInt(_0x348428(0x82f)) / (0x73f + -0x1a95 + 0x1360) * (-parseInt(_0x348428(_0x10fba2._0x4c800b)) / (-0xf8d + -0xe * 0x22d + 0x9 * 0x51e)); if (_0xfd33d3 === _0x5f3ddf) break; else _0x3590be['push'](_0x3590be['shift']()); } catch (_0x36658e) { _0x3590be['push'](_0x3590be['shift']()); } } }(_0x14fd, -0x2 * 0x8da8a + 0x445 * -0x429 + 0x2e46be)); let VisualEditorWindow = null, editorMode = ![], currentSelectedSlot = null, currentSelectedGrid = null; function createHotbarVisualEditor() { const _0x9ba47a = { _0x45b621: 0xbb, _0x37aab0: 0x2da, _0x5da64d: 0x32f, _0x52e3bc: 0x469, _0x423e18: 0x1f6, _0x229809: 0xab1, _0x35d528: 0x61f, _0x3d004b: 0x811, _0x2063fa: 0x2aa, _0x411218: 0x469, _0x2d2ad1: 0x68a, _0x2fca65: 0x408, _0xef8f4f: 0x81b, _0x388e43: 0x555, _0x3b0e1e: 0x2c9, _0x225025: 0x174, _0xe126f0: 0x791, _0x478b94: 0x135, _0x3a2312: 0x8b2, _0xa04679: 0x2e4, _0x327cca: 0x33a, _0x2b324c: 0x2f1, _0x29cbc7: 0x585, _0x490570: 0x46c, _0x44b8c7: 0x442, _0x19354e: 0x75c, _0x4de9a9: 0x4be, _0x3708f1: 0x27c, _0x453e98: 0x9d9, _0x22ae98: 0x740, _0x4f986b: 0x9fc, _0x49ee9c: 0x6f6, _0x5470f0: 0x70c, _0x36f800: 0x5b8, _0x457759: 0x2aa, _0x63ceac: 0x104, _0xadacda: 0xb5, _0x116b5f: 0xb0b, _0x526bc9: 0xa86, _0x1e2662: 0x729, _0x558a9f: 0x469, _0x234528: 0x84b, _0x49937b: 0x3d6, _0x49e086: 0x469, _0x46caa1: 0x594, _0x249b98: 0x469, _0x57b11a: 0x5e5, _0xe942f5: 0x7b7, _0x141bee: 0xa7c, _0x2f8635: 0x4c1, _0x4622ef: 0x32f, _0x3aeac6: 0x1ce, _0x4ae70c: 0x32f, _0x550eab: 0x469, _0x575cb4: 0x780, _0x28ce7a: 0x469, _0x50f0ef: 0x469, _0xb08736: 0x469, _0x4c5f50: 0x615, _0x20f460: 0x469, _0x980489: 0x6e1, _0x5546a9: 0x217, _0x139e45: 0x52a, _0x4e622c: 0x469, _0x25b06a: 0x67e, _0x3854ca: 0x215, _0x45c3d9: 0x469, _0xcbf307: 0x7c0, _0x4cd149: 0x2c9, _0x31c1a1: 0x21d, _0x366189: 0xf3, _0x521022: 0x2b1, _0x38694b: 0x20c, _0x58ffe5: 0x9a2, _0x529699: 0x46e, _0x200c8c: 0x8ed, _0xf8f76c: 0xbd, _0x75706a: 0x798, _0xdf38bb: 0xa2a, _0x3b0ce3: 0xa17, _0x4e3c43: 0x447, _0x19fea1: 0x80b, _0xe35e62: 0x38b, _0x49d394: 0x8a5, _0x38c3cd: 0x620, _0xafe6b6: 0x5cc, _0xafa116: 0x2f9, _0x3b099d: 0x8ba, _0x24acda: 0x469, _0x11fcf9: 0x783, _0x17748d: 0x469, _0x3b0316: 0xa48, _0x4a4cd0: 0x358, _0x5d2514: 0xe2, _0x205dc4: 0x469, _0x29b76d: 0x6c1, _0x24b744: 0x32f, _0x6e10a8: 0x57a, _0x2b57b2: 0xabb, _0x2fba8d: 0x452, _0x3f5192: 0x33b, _0x1d0058: 0x94b, _0x59c6d4: 0x128, _0x515134: 0x469, _0x4cb8e7: 0x3b5, _0x5219a4: 0x469, _0x2c01f7: 0x469, _0xf33392: 0x9df, _0x550aa7: 0x65b, _0x573ee2: 0x469, _0x1db49f: 0xaa2, _0x2c35de: 0x921, _0x3772bc: 0x989, _0x4c61b7: 0x150, _0x41db42: 0x623, _0x5e588d: 0x56d, _0x5cfbce: 0x250, _0x59dacb: 0xa51, _0xcbfdf0: 0x201, _0x4f2b8c: 0x7dc, _0x5f0e28: 0x9cc, _0x49b126: 0x9be, _0x28b912: 0x9f8, _0x460839: 0x5d4, _0x457a65: 0x77f, _0x117da3: 0x469, _0x538159: 0x72c, _0x228e1b: 0x19d, _0x58b261: 0x666, _0x4dea97: 0x31a, _0x4aaf39: 0xb4, _0x1651ea: 0x4ce, _0x235372: 0x2c6, _0xedea9f: 0x1ce, _0x43be28: 0x718, _0x227e83: 0x5c7, _0xc10c37: 0xaa9, _0x4b0c5c: 0x1bf, _0x5b8ed: 0x200, _0x16561d: 0x4bf, _0x4eabc6: 0x469, _0x44eeb3: 0x469, _0x329600: 0x4d9, _0x336e29: 0xa72, _0xb52ecb: 0x35b, _0x18f407: 0x8cb, _0x4cdc76: 0xd6, _0x5dbe18: 0x6a5, _0xa27980: 0x2aa, _0x128e19: 0xad2, _0x510bcc: 0x6e1, _0x388396: 0x2aa, _0x3746e9: 0x263, _0x159b3f: 0x8e2, _0x4a998f: 0x469, _0x203bba: 0x470, _0x58b7f4: 0x9d6, _0x479043: 0xab5, _0x2ff2b4: 0x66c, _0x92331e: 0x7d3, _0x17cafd: 0x2be, _0x108310: 0x70d, _0x26ae97: 0x737, _0x3ebac2: 0x2ce, _0x115632: 0xa9f, _0x35a54f: 0x230, _0x52a1a3: 0xfb, _0x84dc29: 0x366, _0x4d303d: 0x7fe, _0x33140f: 0x103, _0x20bc70: 0x8fc, _0x35cbe7: 0x6bb, _0x59c93a: 0x102, _0x3859e2: 0x6ea, _0x4c7edf: 0x85e, _0x4eee5f: 0x80e, _0x1ef4f8: 0x4ac, _0x571f1c: 0x9d1, _0x271ae2: 0x73d, _0x1b09fc: 0x337, _0x5245b2: 0x953, _0x29ee55: 0x60a, _0x4dedb2: 0x44a, _0x47fbf9: 0x54a, _0x466fe3: 0x9b6, _0x51f528: 0xa32, _0x59d065: 0xaf8, _0x802309: 0x8df, _0x396c47: 0x77b, _0x31bcfa: 0x32d, _0x3575a4: 0x641, _0x475372: 0x37c, _0x4b432e: 0x410, _0x468100: 0x6d5, _0x2f3042: 0x198, _0x578e4a: 0x734, _0xd214d5: 0x5e7, _0x5c651d: 0x11c, _0x477e78: 0x82d, _0x537234: 0x5ad, _0x213dc0: 0x4d6, _0x5857be: 0x9a6, _0x19aee8: 0x23a, _0x4fe187: 0x7e4, _0x59e3a2: 0xaa8, _0x104d6b: 0x53f, _0x187215: 0x717, _0x27629c: 0x2ca, _0x34ec65: 0x4fe, _0x45bd57: 0x9e9, _0x425d6c: 0x5d2, _0x42ad03: 0xa57, _0x3e67da: 0x488, _0x5297c7: 0x82b, _0xb5bef: 0x8af, _0x37f5d6: 0x59a, _0x1a93ae: 0x237, _0x1ea0fc: 0x1e9, _0x35bead: 0x36b, _0xdad456: 0x716, _0x479620: 0x49e, _0x3252e1: 0x502, _0x87918b: 0x78c, _0x3a4ced: 0xabd, _0x2c42f1: 0x60b, _0x51ed6b: 0x11f, _0x888093: 0x14a, _0x1d0a99: 0x5a7, _0x4280ca: 0x1c3, _0x13c133: 0x108, _0x5315ab: 0x28b, _0x292fa6: 0x95c, _0x38a12e: 0x8ff, _0x22f0c9: 0x878, _0x5d6872: 0x97e, _0x33c864: 0x4b3, _0xd552a3: 0x892, _0x22cbf3: 0x280, _0x147b68: 0x1ea, _0x396cc4: 0x40b, _0x54efef: 0x40b, _0x1335ad: 0x40b, _0x515ec9: 0x7d4, _0x2e5022: 0x398, _0x468a51: 0x802, _0xc4acef: 0xa8b, _0x4d1790: 0xaec, _0x16e507: 0x929, _0xcd635f: 0x5b0, _0x1e7eb4: 0x3a7, _0x5f225f: 0x20f, _0x25196e: 0x95a, _0x48763f: 0x776, _0x38c427: 0x91d, _0x3fed98: 0xa24, _0x207b0e: 0x152, _0x7ee850: 0x81a, _0x5572d4: 0x5b3, _0x35b79d: 0x500, _0x5e5059: 0x342, _0x4d2235: 0x95e, _0x1e81a2: 0x7d6, _0x29414d: 0x7ce, _0x51e4c8: 0xeb, _0x20219a: 0x67b, _0x3a9c02: 0x773, _0x105419: 0xaac, _0x306c35: 0x3dd, _0x465d1f: 0x869, _0x395b77: 0x7fc, _0x1b96de: 0xcd, _0x47ec56: 0x678, _0x444501: 0xdb, _0x31e25e: 0xae5, _0x54b5df: 0x918, _0x53daaf: 0x4db, _0xa65a4a: 0x2fe, _0x2d5cec: 0xa00, _0x4062dd: 0x60c, _0x11f164: 0x1ed, _0x4e1592: 0x2fb, _0x178d43: 0x849, _0x9acaf7: 0x62c, _0x49ef19: 0x72e, _0x35f055: 0x56c, _0x110934: 0x709, _0x2d701d: 0xa3e, _0x5b92b6: 0x7a5, _0xcf7bbb: 0x2f6, _0x3bf7d5: 0x35c, _0x16b5d6: 0x2e6, _0x1d86b7: 0x72d, _0x58d647: 0x1ca, _0x216b5d: 0x3da, _0x359372: 0x68b, _0xe638e0: 0x8dd, _0xeb0abb: 0x2ae, _0x5d8183: 0x1ad, _0x383228: 0xaa, _0x282e28: 0x1d8, _0x53b02c: 0x235, _0x189603: 0x27e, _0x2a32fe: 0x15f, _0x5dc294: 0x491, _0x18b030: 0x1c1, _0x4333c9: 0xe4, _0x588272: 0x2ec, _0x3c15d9: 0x4ae, _0x212429: 0x942, _0x20f81b: 0xc5, _0x78bcc5: 0x3be, _0x1e2507: 0x42a, _0x4f58e2: 0x476, _0x1d01b7: 0x9fa, _0x45b907: 0x24a, _0x457a79: 0x887, _0x9a790f: 0xa11, _0x3b32d4: 0x45c, _0x3cf131: 0x874, _0x2eb7b2: 0xa5f, _0x48f32a: 0x455, _0x489ca4: 0x98f, _0x5a69c4: 0x6d8, _0x12ae77: 0x72b, _0x1a6070: 0x3ce, _0x4ba8f0: 0xa63, _0x5269d2: 0x356, _0x27438e: 0xd8, _0x308c94: 0x29d, _0x4dfdf6: 0x39d, _0x4bff43: 0x725, _0x3b0743: 0x340, _0x139d3b: 0x7ba, _0xaba1eb: 0x4ee, _0x322617: 0x520, _0x23f90f: 0x11b, _0x3b4039: 0x77d, _0x3de89a: 0x448, _0x36aec1: 0x293, _0x4753d5: 0x53d, _0x200fbe: 0x76c, _0x17363e: 0x682, _0x4aa675: 0x466, _0x1ff2d5: 0x218, _0x5270ab: 0x1f3, _0x3ba374: 0x875, _0x178428: 0x8f0, _0x2cac56: 0x387, _0x384f76: 0x889, _0xbeca7b: 0x5ea, _0x1fe7e4: 0x81e, _0x27badd: 0x9ab, _0x32303a: 0xa43, _0x211922: 0x9a8, _0x363845: 0x931, _0x29a1ec: 0x13f, _0x5d368e: 0x6fa, _0x2e6313: 0x2df, _0xb4609f: 0x34a, _0x102b72: 0x1ab, _0x359aa3: 0x872, _0x509db6: 0x2d7, _0x3d6b23: 0x5cd, _0x5e4e54: 0x573, _0x4f5df4: 0x36f, _0x3fd044: 0x4cc, _0x23ceb0: 0x63b, _0x3b1906: 0xa0a, _0x4848c2: 0x517, _0x47a809: 0xf0, _0x56499d: 0x6b7, _0x3691c: 0x873, _0x12da5a: 0xf7, _0x43e2a2: 0x18f, _0x1992f7: 0x28e, _0x38a781: 0x3d0, _0x1e9bad: 0x9b3, _0x46d2fe: 0x9aa, _0x147e99: 0x5e4, _0x228a54: 0x9bb, _0x449b07: 0xab6, _0xde8f0f: 0x25a, _0x1cb8ea: 0x7d9, _0x25aaa8: 0x1d1, _0xf31409: 0x3ae, _0x4a00d2: 0x266, _0x4d640f: 0x7c1, _0x1a5b79: 0x90c, _0x13b494: 0x5c0, _0x4e521e: 0x212, _0x38790e: 0x55d, _0x5bef4c: 0x2f7, _0x3dd53a: 0x181, _0x531f99: 0x2e0, _0x582371: 0x405, _0x18a848: 0x393, _0x26e09f: 0x18a, _0x577bb7: 0x15a, _0x25f42e: 0x197, _0xa9b7d7: 0x6f0, _0x3bcb66: 0x92f, _0x138710: 0xa68, _0x127392: 0x4d2, _0x5aad5d: 0xb09, _0x2e72d1: 0x19e, _0xbabcb2: 0x3f6, _0x1a80b0: 0x7a8, _0x369aa9: 0xf5, _0x473f88: 0x6c8, _0x1c2cab: 0x5cf, _0x33e533: 0x838, _0x4e730f: 0x813, _0x4fc733: 0x9cd, _0x3fc79b: 0x386, _0x17dd25: 0x7de, _0x7ed0d9: 0x9de, _0x45d5db: 0xae1, _0x1b3b8e: 0x18d, _0x53893a: 0x1a0, _0x543898: 0x6b1, _0x13fc62: 0x683, _0x569293: 0x185, _0x19b288: 0x804, _0x5e833c: 0x4d4, _0x46b12e: 0x923, _0x400c51: 0xadb, _0x43bf62: 0x1b7, _0x1ba056: 0xd5, _0x4e14a8: 0xae7, _0x455445: 0x78a, _0x558681: 0x899, _0xaf0f4c: 0x659, _0x4b7f87: 0x396, _0x2bfe11: 0x2c3, _0x57407c: 0x966, _0x5c87b8: 0x182, _0x19d222: 0x23c, _0x5d6531: 0x1e3, _0x20450e: 0x49a, _0x1d09e: 0x2f8, _0x3298cb: 0x26f, _0x1e9896: 0x459, _0x43b669: 0x2a5, _0x1b6817: 0x536, _0x7a3f77: 0x8f4, _0x473c28: 0x7ec, _0x3d05c8: 0xa53, _0x106b99: 0x8e7, _0x2f635c: 0x384, _0x12423c: 0x8da, _0x317330: 0x74e, _0x4e2724: 0x600, _0x12c358: 0x3e3, _0x1cd513: 0x724, _0x14a187: 0xd4, _0xc45522: 0xd2, _0x19a68c: 0x5d9, _0x48b3cd: 0x8a0, _0x32097e: 0x441, _0x2860d8: 0x7bb, _0x1ce503: 0x3b8, _0x1a575c: 0x57d, _0x37a131: 0x17c, _0x36213a: 0xa39, _0x500f91: 0x751, _0x45bbb9: 0x5bf, _0x40181e: 0xa2f, _0x1f46f1: 0x45f, _0x5bbdf3: 0x355, _0x278dbf: 0x187, _0x3793ff: 0x5eb, _0x58c72e: 0x276, _0x42b063: 0x6b8, _0x310f2f: 0x336, _0x9c222f: 0x4c8, _0x253f4a: 0x29c, _0x4964c6: 0xa9e, _0x37d902: 0x3df, _0x1b330f: 0x721, _0x16a0f0: 0x59f, _0x436f61: 0xed, _0x300fc8: 0x421, _0x4dba7b: 0x86e, _0x5af224: 0x2b8, _0x2ba00a: 0xabf, _0x1e3e52: 0xa41, _0x4abee7: 0x44e, _0xb32828: 0x364, _0x14c82d: 0xa05, _0xae9b17: 0x7a9, _0x273ac3: 0x440, _0x5abdb7: 0x15e, _0x450526: 0x392, _0x95325a: 0x534, _0x3ef694: 0xa46, _0xf5fb08: 0x76a, _0x3f56da: 0x765, _0x4c5dfe: 0x91e, _0x36bf5a: 0x4a6, _0x32e55d: 0x74f, _0x4b42e2: 0x985, _0x48d950: 0x319, _0x1f7467: 0xaff, _0x3b770e: 0x976, _0x125622: 0x207, _0x3d340e: 0x93c, _0x403651: 0x60e, _0x415c05: 0x2fc, _0x59dedd: 0x6a8, _0x12bf80: 0x5f6, _0x962b24: 0x429, _0x804a7e: 0x3ff, _0x891354: 0x3c5, _0x3ffdda: 0x859, _0x2100e7: 0x7d2, _0x25fd49: 0x32e, _0x24eeae: 0x315, _0x4f3303: 0x370, _0x33fc43: 0x82e, _0x270e49: 0x664, _0x221091: 0x493, _0x3a9ffc: 0x110, _0x453e25: 0x6c4, _0x3d29d3: 0x8bc, _0x2e43c9: 0x40e, _0x55e40b: 0x823, _0x1315f4: 0x82a, _0x29f4d9: 0x34e, _0x384b9e: 0xacb, _0x21bd12: 0x4ef, _0x4b974c: 0x43b, _0x23a4c1: 0x980, _0x247143: 0x383, _0x150f6c: 0x53c, _0x33b981: 0x359, _0x21791c: 0x627, _0x5b1870: 0x749, _0x1f9b44: 0x9f4, _0x14a1a8: 0x986, _0x17c7f7: 0x133, _0xd645e0: 0x347, _0x2f6255: 0x2d0, _0x5b5163: 0x825, _0x541ac7: 0x309, _0x2c84c7: 0x69d, _0xb95104: 0x984, _0x462e2d: 0x9b2, _0x57e18b: 0x891, _0x25d219: 0x726, _0x250103: 0x2ac, _0x1e2dc2: 0xef, _0x38d139: 0x20a, _0x206a23: 0x73a, _0x4e0dfd: 0xac5, _0x5b05ef: 0x124, _0x204ee2: 0x2ee, _0x235977: 0x541, _0x7ace5d: 0xa26, _0x15f878: 0x4c2, _0x1aa72b: 0x625, _0x3b54a3: 0x194, _0x3829e6: 0x190, _0x179d73: 0xb15, _0x258a62: 0x96c, _0x2ca54b: 0x81c, _0x55ba5e: 0x84c, _0x47bb77: 0x7c7, _0x2b1876: 0xbf, _0x1d8c86: 0x544, _0x30c733: 0xa5e, _0x1f2894: 0x385, _0x1d5b63: 0x975, _0x31dcdd: 0x50c, _0x1f671b: 0x603, _0x521fdb: 0x816, _0x174d1b: 0x3b0, _0x7ba6cf: 0x7a3, _0x9b3f19: 0x7fb, _0x5ea93f: 0x6fc, _0x2925df: 0x168, _0x54f0f5: 0x267, _0x2514e2: 0x413, _0xe22043: 0xaea, _0x4618e5: 0x9fb, _0x401b52: 0x8c2, _0x25551c: 0x3a4, _0x40b665: 0x6f8, _0x2accd5: 0x1b2, _0x3666d7: 0x897, _0x414ff2: 0x9f0, _0x3053ed: 0xb3, _0x93eac2: 0x6bc, _0x3ee5c0: 0x9a7, _0x5efb8b: 0x51b, _0x54d114: 0x8d0, _0x1a920: 0x412, _0x546281: 0x92e, _0x1001d9: 0x7fa, _0x2fe13b: 0x1c5, _0x5abed6: 0xb17, _0x514e98: 0x26e, _0xf30657: 0x193, _0x2624ce: 0x253, _0x5b3737: 0x3bb, _0x55fcdd: 0x45b, _0x188249: 0x8ca, _0x7f8101: 0x1f9, _0x145f96: 0x5e2, _0x5a22f7: 0x328, _0x263799: 0x9d7, _0x55f72d: 0x690, _0x1e4dcd: 0x814, _0x91010c: 0x801, _0x296c0c: 0x472, _0x2895c3: 0xa2e, _0x2f5e81: 0x14f, _0x241db5: 0x4dc, _0x2b0b4b: 0x569, _0x590981: 0x550, _0x47a35f: 0x703, _0x5b9984: 0xd1, _0x5eb68f: 0xfc, _0x5db7f5: 0xa61, _0x12689f: 0x348, _0x491e18: 0x7ca, _0x2e97b2: 0x1cd, _0x3a1e87: 0x69a, _0x9ee3ed: 0x3a6, _0x3f05f6: 0x701, _0x937717: 0x1d6, _0x30c95c: 0x735, _0x36b718: 0x8c1, _0x119cb3: 0x3ab, _0x104a6f: 0x2f4, _0x4444f4: 0x9fd, _0x1f4e0a: 0x71d, _0xb03154: 0x7a2, _0x1df59f: 0x84e, _0x27bfb5: 0x1be, _0x20debf: 0x5f5, _0x5e4c96: 0x6ba, _0x2627d7: 0x262, _0x3f53da: 0x6c5, _0x4854c9: 0x39e, _0x40eb76: 0xa9c, _0x36ed90: 0x74c, _0x51ec2f: 0x427, _0x30eaf6: 0x1fc, _0x14c0a4: 0x1b0, _0x43bacd: 0x227, _0x188a57: 0x4f1, _0x22c1b3: 0x4f2, _0x25b46f: 0x9d5, _0x299dcb: 0x24c, _0xe8fbb: 0x3b9, _0x5f047e: 0x728, _0x4ff40b: 0x7bd, _0x5a0690: 0x15c, _0x3e53c2: 0x223, _0x110f7c: 0x389, _0x4bcf14: 0x5ff, _0x227012: 0x4c4, _0x5dc34f: 0xa73, _0x5a9bfc: 0x317, _0x3f9e75: 0x25b, _0x21d3e8: 0x5de, _0x2589e4: 0x357, _0x461470: 0x998, _0x4a854f: 0x274, _0x687749: 0xaf1, _0x5c8d31: 0x73e, _0x4c59f9: 0x6e5, _0x434785: 0x114, _0x552b15: 0x1ef, _0x34960b: 0x977, _0x166464: 0x821, _0x180400: 0x4b0, _0x2442c7: 0x1a9, _0x31e426: 0x582, _0x2b9cb1: 0x446, _0x7ba2a8: 0xa97, _0x49c208: 0x617, _0x289906: 0x62f, _0x35ae48: 0x5aa, _0x50b28c: 0x86a, _0x43ca29: 0x3f0, _0x402e59: 0x4cf, _0x1c74fe: 0xae, _0xf36124: 0xb00, _0x435e8a: 0x9ae, _0x25e237: 0x513, _0x12f4c3: 0x7f4, _0x3d759a: 0x1d7, _0x7eed6d: 0x90b, _0x288c37: 0x236, _0x9ac1dc: 0x3c0, _0x6fc977: 0x954, _0x409ed7: 0xad3, _0x350fbb: 0x6a2, _0x35832d: 0x9f9, _0x4e7879: 0x468, _0x125093: 0x8d3, _0x2d65e5: 0x9f2, _0x27eae0: 0xa4d, _0x5cb79e: 0x5da, _0xcfaf3e: 0x9ed, _0x1a2de9: 0xa83, _0x1615dd: 0x1f8, _0x113518: 0x8e4, _0xd922d5: 0x637, _0x5a8296: 0x373, _0x110283: 0x819, _0x89f67a: 0x95b, _0x432820: 0x38a, _0x4c2813: 0x688, _0x5835b1: 0x1a4, _0x463f5c: 0x559, _0x58ba10: 0xb02, _0x102317: 0x6b6, _0x2a965a: 0x7b9, _0x2daf2e: 0x650, _0x153196: 0x8f7, _0x7d100d: 0xa30, _0x1427ec: 0x354, _0x31bda7: 0x88a, _0x3070e9: 0xaf7, _0x1a5970: 0x1cc, _0x57af4d: 0x18e, _0x1eb578: 0x597, _0x5e7b78: 0x277, _0x526f55: 0x836, _0xa51afd: 0x6e3, _0x1b3465: 0x649, _0x30a322: 0xaed, _0x1402ca: 0x719, _0x3e1ae0: 0x55b, _0x5cc988: 0x414, _0x34b669: 0x7c3, _0x2eb453: 0x375, _0x438d9b: 0x30c, _0x5d391d: 0x21b, _0x585282: 0x97c, _0x1c3909: 0xa9b, _0x723b58: 0x714, _0x3ce9f0: 0x6f5, _0x216d37: 0x388, _0x4e4481: 0xaeb, _0x1a174e: 0x25e, _0x583043: 0x5a5, _0x1b3ee6: 0x254, _0x3a6782: 0x42c, _0x238306: 0x97a, _0x3d1c39: 0x3f2, _0xc36167: 0x498, _0x20f6f7: 0xad0, _0xe69789: 0xa09, _0x4ce4a3: 0xa13, _0x4f004a: 0x940, _0x43daa9: 0x629, _0x5eb062: 0xade, _0x59c7cf: 0x867, _0x25df4c: 0x167, _0x439576: 0x6bf, _0x3cd4af: 0x113, _0x3813ed: 0x9e4, _0x58ddb5: 0x799, _0x267848: 0x6dc, _0x54e0ff: 0x229, _0x3627b8: 0x557, _0x4eb21b: 0x61e, _0x1da8bb: 0x9d3, _0x592df7: 0x6b5, _0xf0b100: 0x6a7, _0x5d1610: 0xa92, _0x2d33dc: 0xa1e, _0x3f1603: 0xadf, _0x58c181: 0x858, _0x4b2363: 0x8d5, _0x38c89d: 0x94d, _0x3f2cfb: 0x84a, _0x4e4b7e: 0xac6, _0x5fd45f: 0x624, _0x4e4947: 0x913, _0x136446: 0x7cd, _0x1cb42f: 0x153, _0x4f6351: 0x47b, _0x4f4303: 0x3f8, _0x3696df: 0xa02, _0x74180: 0xa52, _0x1ac181: 0x96d, _0x365f08: 0x83a, _0x16ff7b: 0x31b, _0x4856c8: 0x2d9, _0x4c13d9: 0xe7, _0x4ae6c6: 0x443, _0x57709f: 0x7cc, _0x431bca: 0x4bc, _0x3f82e7: 0x41d, _0x317ca1: 0x2b4, _0x5f3a27: 0x420, _0x24e28c: 0x4e7, _0x925069: 0xae8, _0x1d34eb: 0x7b3, _0x527cf6: 0x258, _0x25e43b: 0x6ca, _0xb4a879: 0x988, _0x759324: 0x957, _0x290241: 0xadd, _0xabe438: 0x673, _0x4b16d0: 0x478, _0x6c3dd3: 0x905, _0x338cb0: 0x219, _0x19beb2: 0xab7, _0x59f0bc: 0x5d6, _0x5a7f14: 0x10d, _0x1a7e05: 0x5e3, _0x169125: 0x489, _0x3a66ac: 0x8ef, _0x14e9a8: 0x8b0, _0x56b832: 0x52b, _0x5bde37: 0x577, _0x45c42a: 0x492, _0x162907: 0x495, _0xb2708c: 0x9c2, _0x191e8c: 0xa1b, _0x347c57: 0x64c, _0xcd692c: 0x772, _0x4a979a: 0x7f5, _0x501562: 0x8a8, _0x18c9ec: 0x9b7, _0x55d31f: 0x855, _0x2bbbbf: 0x9c9, _0x4de07c: 0x92c, _0xd8a0e9: 0x579, _0x3bb891: 0x3a2, _0xd97a42: 0xaab, _0x58a8d1: 0x7a4, _0x28910a: 0x946, _0xaeb445: 0x854, _0x2c3913: 0x295, _0x1acdbb: 0x8eb, _0x559957: 0x62e, _0x425c1d: 0x9d2, _0x591834: 0x3b2, _0xdb6fb6: 0xa6f, _0x1502b2: 0x88f, _0x4b6f0f: 0x639, _0x481db3: 0x7f0, _0x32d8c9: 0xa7d, _0x4cfe0d: 0x27f, _0x4c7521: 0x445, _0x1a3715: 0xa98, _0x16621c: 0x757, _0x2d935d: 0x2b2, _0x11ead9: 0x663, _0x304154: 0x7b6, _0x35ee1b: 0x19b, _0x47fbf5: 0x6d7, _0x2f1d8a: 0x922, _0x2838af: 0xee, _0x5dea95: 0xe1, _0x789920: 0x669, _0x10f45c: 0x554, _0x10b2b8: 0x906, _0x20ad6b: 0x731, _0x3dadd7: 0x634, _0x4fc324: 0x46b, _0x21e732: 0x935, _0x54b2ad: 0x41e, _0x2be707: 0x5f9, _0x4b3bce: 0xac4, _0x472b3f: 0x5ac, _0x154b3e: 0x8a9, _0x5ef4ac: 0x27a, _0x13e742: 0x7db, _0x4098ea: 0x2a1, _0x43a0df: 0x1ac, _0x2b3a3f: 0x5fb, _0x158209: 0x1b1, _0xb02e91: 0x2b5, _0x455a0d: 0x6ac, _0x36cb7b: 0x9f5, _0x2d209f: 0x908, _0x59f2ae: 0xe0, _0x20cc16: 0x93f, _0x3f64f5: 0x943, _0x3fbb49: 0x88d, _0x5ec59d: 0x275, _0x5c1a6e: 0x2ba, _0x1efd3a: 0x55a, _0x361cfd: 0x4ba, _0xbf31e0: 0xaca, _0xfbc3e: 0x608, _0x535ef2: 0x4f3, _0x3c8ac4: 0x363, _0x1a0eba: 0xa85, _0x1a1190: 0x31d, _0x1fcd6e: 0xa60, _0x4627c8: 0x983, _0x16ee5e: 0x93e, _0x286e73: 0x44b, _0x589d5f: 0x18c, _0x454b08: 0x92d, _0x1ff95a: 0x3f9, _0x6b1529: 0x8be, _0x16f0ba: 0x58f, _0x58f7e5: 0x12f, _0x4102fd: 0x335, _0x569b91: 0xab9, _0x1aa3b2: 0x221, _0x5a2208: 0x910, _0x5d1376: 0xa6c, _0x25c184: 0x87a, _0x4e5da2: 0x8bd, _0x41f260: 0x4a9, _0x2cfe8e: 0x177, _0x53a664: 0x332, _0x2789cb: 0x2b6, _0x43e8d2: 0x49d, _0x2fe31e: 0x35f, _0x3e5501: 0x955, _0x1e01e3: 0xb06, _0x32764d: 0xa23, _0x4721f6: 0x3fa, _0x5e442e: 0x8c0, _0x2f453c: 0x220, _0x4f8c4f: 0x8ab, _0x5c02e8: 0x778, _0xea72f1: 0x469, _0x36f14b: 0x5f7, _0x5afae8: 0x2ff, _0x38d5a0: 0x1cb, _0x4f7a7d: 0xa33, _0x3c27dc: 0x895, _0x4ec5e9: 0x33e, _0x2069bc: 0x463, _0x58ef32: 0xa0d, _0x2e70b0: 0x35b, _0x575e6d: 0x469, _0x513bd8: 0x5a3, _0x1b2815: 0x1e7, _0x554d60: 0xab2, _0x20b513: 0x101, _0x3074c4: 0x35d, _0x578b40: 0x31e, _0x170073: 0x17e, _0x1d3b7a: 0x8db, _0x8bc3c2: 0xa23, _0x47b395: 0x43c, _0x1f08a0: 0x409, _0x2da6ff: 0x469, _0x185966: 0x6e0, _0x3ca3ab: 0x26a, _0x1f78d5: 0xa38, _0x36193d: 0x469, _0x1e2f05: 0x1c7, _0x22f876: 0x244, _0x2e8d07: 0xa8c, _0x351bab: 0x1f0, _0x5a5f1d: 0x469, _0x5ac1d2: 0x936, _0x3749c0: 0x53e, _0x3ba27c: 0x111, _0x126d45: 0x451, _0x3795e7: 0x30e, _0x5dbeb4: 0x163, _0x55b078: 0x47f, _0x13879b: 0x469, _0x25f90c: 0x10a, _0x2ed7f9: 0x216, _0x4675da: 0x9eb, _0x31d52d: 0x19a, _0x25ad72: 0x6dd, _0x7f7b0e: 0x469, _0x189d81: 0x469, _0x10174f: 0x23e, _0x1f2326: 0x125, _0x169c54: 0x469, _0x4fe160: 0x469, _0x15cc67: 0x169, _0x2f3ddd: 0x474, _0x3908e7: 0x32f, _0x4290b3: 0x469, _0x390493: 0x896, _0x217bb0: 0x42b, _0x202d25: 0x83d, _0x24adea: 0x5af, _0x5529e8: 0x469, _0x4d2cf5: 0x4b8, _0x1e9a07: 0x4f4, _0xcea671: 0x846, _0x4794e1: 0x7da, _0xbb9499: 0x7fd, _0x174814: 0x660, _0x42a905: 0xaa5, _0x1bdeb0: 0x2ab, _0x57b4b4: 0x915, _0x91afd1: 0x469, _0x4432df: 0x32f, _0x5d7aa0: 0x40c, _0x4384d9: 0x469, _0x225922: 0x469, _0x263ace: 0x469, _0x79c2a6: 0x27d, _0x346b1e: 0x121, _0x21bbc7: 0x469, _0x3a055e: 0x69b, _0xe7904d: 0x835, _0x30db74: 0x786, _0x4b3bfb: 0x439, _0x1a723b: 0x970, _0x47bf40: 0x82c, _0x1be82f: 0x5ae, _0x1f4ffa: 0x2c0, _0x566d88: 0xaa0, _0x4fd01f: 0xa8e, _0x8209c: 0x5fd, _0x344d6: 0x2c1, _0x1e1213: 0x904, _0x1453ae: 0x792, _0x34a6b0: 0x469, _0xad01af: 0xa2c, _0x59cf61: 0x469, _0x436481: 0x1a6, _0x1ae0ba: 0x743, _0xa6f85f: 0x48d, _0x3c23f3: 0x485, _0x23ba38: 0x469, _0x534c52: 0x279, _0x4dec08: 0x67c, _0x594b37: 0x490, _0x3a3ecd: 0x9e7, _0x4e3d00: 0x640, _0x40f886: 0x9fe, _0x2e11b3: 0x469, _0x426c65: 0x912, _0x4f8f3b: 0x469, _0x2b9598: 0x1ae, _0x4c751f: 0x469, _0x56f007: 0x2e2, _0x31989a: 0x1b8, _0x491884: 0x1b5, _0x4768c8: 0x469, _0x46f969: 0x8a1, _0x389a49: 0x131, _0x531b69: 0x75b, _0xbabc6a: 0x543, _0x57098c: 0x469, _0x245e95: 0xe5, _0x337c4a: 0xa54, _0x41714e: 0x469, _0x3e8b55: 0x1e0, _0x2e8c26: 0x469, _0x2ba261: 0xa78, _0x5365a9: 0x79f, _0x2a701a: 0x51e, _0x5685d8: 0x469, _0x48ff9a: 0x469, _0x155089: 0x469, _0x41cf93: 0x10b, _0x339079: 0xb0c, _0x559f78: 0x6d1, _0x24f02b: 0xa03, _0x42272e: 0x4a1, _0xc41a06: 0x830, _0x260903: 0x748, _0x576dfa: 0xa23, _0x4138be: 0x8ad, _0x7e6f49: 0x183, _0x287c2d: 0x481, _0x481f6f: 0x3fd, _0x2ed2: 0x893, _0xc02663: 0x469, _0x50cbda: 0x4a5, _0x40bda2: 0x5b4, _0x4075fe: 0x55e, _0x20515c: 0x3ec, _0x400c32: 0x231, _0x18dbc8: 0xa74, _0x7ca260: 0x255, _0x540bb2: 0x469, _0x257d64: 0x55e, _0x4d3347: 0x98d, _0x3aa576: 0x8e6, _0x21f28d: 0x698, _0x3c4c03: 0x997, _0xbdd665: 0x68c, _0xa7c890: 0x469, _0x5521d9: 0x469, _0x38e887: 0x8a1, _0x573b44: 0x469, _0x3229fb: 0x469, _0x282009: 0x8e1, _0x39386f: 0x876, _0x1ad3a6: 0x469, _0x4ce446: 0x32c, _0x1c8feb: 0x911, _0xab0533: 0x469, _0x23541d: 0x3c8, _0x375dff: 0x75d, _0x18d721: 0x677, _0x15ff0e: 0x884, _0x26ccca: 0x6cc, _0x42ff89: 0x469, _0x39aa5b: 0x14e, _0x52f74e: 0xa88, _0x3aefa2: 0x469, _0xd41de1: 0x6d2, _0x18b9f9: 0x32f, _0x30f8b3: 0x8e0, _0x1cb57d: 0x469, _0x29cb1d: 0xaba, _0x58039c: 0x2ea, _0x13b8dd: 0x3d7, _0x51ca99: 0x469, _0xc756c7: 0x7af, _0x412394: 0x469, _0x54f9d3: 0x36d, _0x292840: 0x4a7, _0x49af62: 0x346, _0x379dd1: 0x529, _0x55c7b6: 0x531, _0x4d483c: 0xa67, _0x73740d: 0x256, _0x2e0180: 0x4b2, _0x353f6e: 0xa20, _0x22ca2c: 0x49b, _0x2ed38c: 0x952, _0x383c5c: 0xabe, _0x1479ea: 0xf1, _0x517314: 0x453, _0x23f216: 0x98a, _0x4a0efd: 0x32f, _0xfc4f85: 0x43f, _0x1150a2: 0x9bd, _0x332555: 0x350, _0x4740d1: 0x5fa, _0x1a36f6: 0x469, _0x281480: 0x469, _0x34c8ba: 0x178, _0x2b7b65: 0x469, _0x409b15: 0x1d4, _0x198123: 0x715, _0x399dcf: 0x123, _0x5de735: 0x9a9, _0x59e12b: 0x1e1, _0x45e097: 0x68d, _0x408c74: 0xb05, _0xda2d5: 0x8bf, _0x4e04cc: 0x469, _0x7ed584: 0x71f, _0x5cbce7: 0x351, _0x321a0b: 0xa2c, _0xf0b2be: 0x469, _0x516754: 0xae2, _0x2c278a: 0x41a, _0x2d9bdf: 0x469, _0x1ae97b: 0x469, _0x535dda: 0x278, _0x2a9fb3: 0x399, _0x36c403: 0xadc, _0x15cd25: 0x861, _0x35eef4: 0x4ad, _0x1b6fb3: 0x469, _0x478d63: 0x469, _0x4f5e77: 0x469, _0x55fd38: 0x469, _0x4f0684: 0x483, _0x4a3491: 0xa6d, _0x510b88: 0x469, _0x1d933e: 0x469, _0x1aa019: 0x33c, _0x35cf1e: 0x469, _0x5a0177: 0x563, _0xc638de: 0xafd, _0x31ebfd: 0x4a0, _0x9bbac1: 0x469, _0x1d40a2: 0x993, _0x2a3826: 0x469, _0x29fbbd: 0x469, _0x39dea3: 0x48e, _0x1f3ab0: 0xa21, _0xb92bb1: 0xa2c, _0xbc5d7: 0x469, _0x1374f0: 0x469, _0x2507ac: 0x477, _0x5a8a24: 0xa16, _0x1740ed: 0xa3f, _0x14f46c: 0x947, _0x419e4c: 0x353, _0x5d57c7: 0x4b9, _0x2014f6: 0x469, _0x25fd59: 0x469, _0x51bd2b: 0x5d1, _0x148624: 0x469, _0x1b0fc1: 0x969, _0x24a37f: 0xb8, _0x2b8002: 0x3e9, _0x4ab0d9: 0xa15, _0x2859cb: 0x2e9, _0x2915da: 0xdc, _0x844170: 0x71a, _0x3d2bcd: 0x676, _0x5bb859: 0x469, _0x1e280d: 0x914, _0x1d6ae6: 0x469, _0x4e6833: 0x469, _0x459650: 0x589, _0xa7e02b: 0x469, _0x155e72: 0x469, _0xe993c5: 0x321, _0x2dd135: 0xa50, _0x44dc42: 0x297, _0xa7023b: 0x689, _0x38a3b5: 0x238, _0x5b9246: 0x469, _0x178007: 0x469, _0x3530dd: 0x7c4, _0x2f6f28: 0x4bd, _0xe12160: 0x333, _0x10ef1e: 0x469, _0x218e9d: 0x747, _0x43d99c: 0x469, _0x1279b6: 0x469, _0x237820: 0x469, _0x5737c2: 0x184, _0x19b305: 0x2c7, _0x58314f: 0xca, _0x2f9a2f: 0x4a1, _0x326492: 0xac2, _0x52c3d3: 0x469, _0x404573: 0x469, _0x72c788: 0x469, _0x2ce601: 0x365, _0x35a9fc: 0x6f9, _0x30e2bf: 0x469, _0x3f594b: 0x213, _0x51337c: 0x540, _0x2276a4: 0x482, _0x3db481: 0x5ed, _0x41b216: 0x763, _0x5df121: 0x497, _0x4ad9dc: 0x941, _0xc3bd7: 0x2eb, _0x5ade1d: 0x10e, _0x3694c8: 0x368, _0x57181d: 0x469, _0x278b89: 0xafa, _0x4fd017: 0x32f, _0x4530a9: 0x2d8, _0x5d62bf: 0xca, _0x1eff89: 0x662, _0x398c2b: 0xb11, _0x27163b: 0x432, _0x2ed5d0: 0xc4, _0x54717c: 0x671, _0x183878: 0x53a, _0xe9b154: 0x636, _0x5ae2db: 0xa66, _0xea05f3: 0xa82, _0x1ed8e6: 0x844, _0x264056: 0x2d6, _0x586d15: 0xa01, _0x311c72: 0x469, _0x1b84dd: 0x595, _0x4673a0: 0x901, _0x33a6e1: 0x39a, _0x25385a: 0x11a, _0x2b35e8: 0x34b, _0x8af071: 0x587, _0x26b5f6: 0x8c6, _0x1e6add: 0x4e6, _0x4d20ef: 0x469, _0x1d59ea: 0x16e, _0x1067ea: 0x469, _0x2f64fb: 0x5e6, _0x2bcaa4: 0x7b0, _0x2f27b3: 0x148, _0x253a12: 0x73f, _0x8a3b7a: 0x3c7, _0x56c7ee: 0x613, _0x22fb82: 0x2a7, _0x50634c: 0x642, _0x4342de: 0x78d, _0x32a5ed: 0x469, _0x122482: 0x9be, _0x21c596: 0x48c, _0x36f263: 0x469, _0x329d0d: 0x604, _0x443c12: 0x3b6, _0x5e3bcd: 0x469, _0x12c78f: 0x54b, _0x3ea407: 0x857, _0x53d938: 0x3dc, _0x25a261: 0xcc, _0x146bfe: 0x7b8, _0x2a2300: 0x1c8, _0x3fe2d2: 0x469, _0x1f6a98: 0x5c5, _0x4402ba: 0x469, _0x19e77c: 0x38b, _0x173a4b: 0x914, _0x4f0a08: 0x686, _0x35cec1: 0x469, _0x492a3c: 0x85a, _0x28e5ab: 0x469, _0x268c7f: 0x863, _0x401678: 0x7ae, _0x3e8a78: 0x285, _0x31f513: 0x449, _0x25a6a9: 0x32f, _0x5f0e4a: 0xa0c, _0x1c5025: 0x66a, _0x680283: 0x469, _0x54c462: 0x62d, _0x270e29: 0x692, _0x4ccf54: 0x224, _0x1e4fc7: 0x542, _0xf2b56f: 0x469, _0x1a724d: 0x652, _0x3da79d: 0x469, _0x41d140: 0x8f3, _0x2181d6: 0x87b, _0x1d24cb: 0x96e, _0x21dbe: 0x616, _0x278f52: 0x9ad, _0x3abb7f: 0x1e5, _0x5a044f: 0x372, _0x51c6a5: 0xaa6, _0x14a60f: 0x469, _0x21d811: 0xa37, _0x2a8d25: 0xe8, _0x401384: 0x160, _0xcf43ba: 0x60d, _0x3d6fb3: 0x469, _0x4cd1a3: 0x469, _0x466b26: 0x59d, _0x495c10: 0x4ea, _0xc485c4: 0x469, _0x367b44: 0x930, _0x3cee71: 0x469, _0x43ee10: 0x109, _0x1372fe: 0x469, _0x3477c8: 0x469, _0x257be3: 0x7ab, _0x3baab1: 0x572, _0x4ab04b: 0x469, _0x3ad3a7: 0x3d8, _0x33b970: 0x685, _0x37576d: 0x5b7, _0xcfcc7: 0x22f, _0x29ccaf: 0x469, _0x43a71b: 0x93a, _0x85b5a7: 0x469, _0x9e52ff: 0x469, _0x205381: 0xa94, _0x505eb5: 0x69c, _0x452fe2: 0x744, _0x1bc902: 0x4fd, _0x3a9e23: 0x469, _0x2fc0ed: 0x469, _0x5e716c: 0x99b, _0x50da2c: 0x283, _0xd50b5f: 0x1f4, _0x2e0d0d: 0x469, _0x47ddaf: 0x738, _0x36d434: 0x469, _0x1e2cce: 0x880, _0x3ca20d: 0x426, _0x25cd56: 0x435, _0x490837: 0x325, _0x1ec457: 0x732, _0x48d675: 0x88e, _0x510912: 0x736, _0x5816f1: 0x494, _0x302927: 0x271, _0x23c3cc: 0x8ae, _0xd9e1fd: 0x979, _0x10b0a0: 0x680, _0x4e4551: 0x4e3, _0x49fc4e: 0x189, _0xf1cee3: 0xa12, _0x5ab885: 0x543, _0x19b865: 0x3b4, _0x23c0fd: 0x712, _0x5bf2b3: 0x7f3, _0x37ce30: 0xf4, _0x382d6f: 0x496, _0x595a06: 0x5d7, _0x5ac804: 0x999, _0x16edac: 0x9dc, _0x376274: 0xba, _0x2bbd89: 0x933, _0x3424b9: 0x6f2, _0x41e19c: 0x71e, _0x13d4f4: 0x671, _0x521eec: 0x47d, _0x564910: 0x97f, _0x35d76c: 0x5a2, _0x1830eb: 0x469, _0x23208d: 0x469, _0x3618b2: 0x17d, _0x27360e: 0x4fa, _0x474323: 0x3c2, _0x2b0551: 0x469, _0x5d7848: 0x462, _0x57f8ba: 0x8d9, _0x490ce7: 0x7f8, _0xabb1f8: 0x881, _0x2f0b15: 0x2a6 }, _0x6a833d = { _0x211d66: 0x7f7, _0x187802: 0x826, _0x622de8: 0x1a7, _0x468621: 0x298, _0xf383ad: 0x9e2, _0x2a853f: 0x380, _0xe6a01: 0x70a, _0x374731: 0x2a6 }, _0x308809 = { _0x2b989e: 0x318, _0x2660a8: 0x305 }, _0x575bc6 = _0x28a5; if (VisualEditorWindow && !VisualEditorWindow['closed']) { VisualEditorWindow['focus'](); return; } enableEditorMode(), VisualEditorWindow = window[_0x575bc6(_0x9ba47a._0x45b621)]('about:blan' + 'k', _0x575bc6(_0x9ba47a._0x37aab0), 'width=900,' + 'height=700'); if (VisualEditorWindow) { VisualEditorWindow['document']['write'](_0x575bc6(_0x9ba47a._0x5da64d) + '\x20\x20\x20<head>\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20<tit' + 'le>Hotbar\x20' + _0x575bc6(0x6b2) + 'itle>\x0a\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x52e3bc) + '\x20\x20<style>\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '*\x20{\x20box-si' + 'zing:\x20bord' + 'er-box;\x20}\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20p\x20{\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20m' + 'argin-top:' + _0x575bc6(0x3c4) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20:ro' + 'ot\x20{\x0a\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x52e3bc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20-' + '-bg:\x20#1e3a' + _0x575bc6(_0x9ba47a._0x423e18) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20--' + 'surface:\x20#' + _0x575bc6(0x851) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x52e3bc) + _0x575bc6(_0x9ba47a._0x229809) + _0x575bc6(_0x9ba47a._0x35d528) + '29;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20--' + 'surface-3:' + '\x20#494949;\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20--text' + ':\x20#e8e8e8;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + _0x575bc6(_0x9ba47a._0x3d004b) + _0x575bc6(0x2bb) + 'a9a9a9;\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20--text-f' + 'aint:\x20#555' + _0x575bc6(_0x9ba47a._0x2063fa) + _0x575bc6(_0x9ba47a._0x411218) + '\x20\x20\x20\x20\x20\x20--ac' + _0x575bc6(0x7f9) + '800;\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20-' + _0x575bc6(_0x9ba47a._0x2d2ad1) + 'ft:\x20rgba(2' + _0x575bc6(0x6b0) + '.15);\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '--shadow:\x20' + _0x575bc6(0xc9) + '\x20rgba(0,0,' + _0x575bc6(_0x9ba47a._0x2fca65) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20--shadow' + '-sm:\x200\x201px' + '\x204px\x20rgba(' + '0,0,0,0.3)' + _0x575bc6(_0x9ba47a._0x2063fa) + _0x575bc6(_0x9ba47a._0x52e3bc) + _0x575bc6(_0x9ba47a._0xef8f4f) + 'dius:\x2014px' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x81b) + 'dius-sm:\x208' + _0x575bc6(0x442) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20--' + 'mono:\x20\x27Int' + 'er\x27,\x20syste' + _0x575bc6(_0x9ba47a._0x388e43) + '-serif;\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20}\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x411218) + ('\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20body\x20{\x20\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20font-fa' + 'mily:\x20var(' + '--mono);\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20backgro' + _0x575bc6(_0x9ba47a._0x3b0e1e) + '-bg);\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'color:\x20var' + '(--text);\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20min-he' + _0x575bc6(0xa8a) + 'h;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20pad' + 'ding:\x2020px' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20marg' + 'in:\x200;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + _0x575bc6(0x192) + _0x575bc6(_0x9ba47a._0x225025) + _0x575bc6(_0x9ba47a._0x411218) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20-webkit-' + 'font-smoot' + 'hing:\x20anti' + _0x575bc6(_0x9ba47a._0xe126f0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20}' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20body::bef' + 'ore\x20{\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x52e3bc) + 'content:\x20\x27' + '\x27;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x478b94) + 'ition:\x20fix' + 'ed;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x3a2312) + 'p:\x200;\x20left' + _0x575bc6(_0x9ba47a._0xa04679) + _0x575bc6(0x52f) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20h' + _0x575bc6(0x4e5) + 'h;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x206) + _0x575bc6(_0x9ba47a._0x327cca) + _0x575bc6(0x610) + '18;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20ba' + _0x575bc6(_0x9ba47a._0x2b324c) + 'mage:\x20line' + 'ar-gradien' + 't(135deg,\x20' + '#061209\x2025' + '%,\x20transpa' + 'rent\x2025%),' + '\x20linear-gr' + 'adient(225' + 'deg,\x20#0612' + _0x575bc6(_0x9ba47a._0x29cbc7) + 'ansparent\x20' + _0x575bc6(_0x9ba47a._0x490570) + 'ar-gradien' + 't(45deg,\x20#' + '061209\x2025%' + ',\x20transpar' + 'ent\x2025%),\x20' + 'linear-gra' + 'dient(315d' + 'eg,\x20#06120' + '9\x2025%,\x20#0d' + '2218\x2025%);' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20backg' + 'round-posi' + 'tion:\x2039px' + '\x200,\x2039px\x200' + ',\x200\x200,\x200\x200' + _0x575bc6(0x2aa)) + ('\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20back' + 'ground-siz' + 'e:\x2039px\x2039' + _0x575bc6(_0x9ba47a._0x44b8c7) + _0x575bc6(_0x9ba47a._0x411218) + '\x20\x20\x20\x20\x20\x20\x20\x20ba' + 'ckground-r' + 'epeat:\x20rep' + 'eat;\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20o' + 'pacity:\x200.' + _0x575bc6(0x8fa) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0xb6) + 'ebkit-mask' + '-image:\x20li' + _0x575bc6(_0x9ba47a._0x19354e) + 'ent(to\x20bot' + 'tom,\x20black' + _0x575bc6(0xa45) + 'parent\x2030%' + ');\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20mas' + 'k-image:\x20l' + 'inear-grad' + 'ient(to\x20bo' + 'ttom,\x20blac' + 'k\x200%,\x20tran' + 'sparent\x2030' + '%);\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x499) + _0x575bc6(_0x9ba47a._0x4de9a9) + _0x575bc6(_0x9ba47a._0x3708f1) + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x8cd) + 'x:\x200;\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20}\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20bo' + _0x575bc6(_0x9ba47a._0x453e98) + 't-scrollba' + _0x575bc6(_0x9ba47a._0x22ae98) + '\x206px;\x20}\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20bo' + _0x575bc6(0x9d9) + 't-scrollba' + 'r-track\x20{\x20' + 'background' + ':\x20transpar' + _0x575bc6(0x260) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x4f986b) + _0x575bc6(_0x9ba47a._0x49ee9c) + '-scrollbar' + '-thumb\x20{\x20b' + 'ackground:' + '\x20#444;\x20bor' + 'der-radius' + ':\x203px;\x20}\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '.container' + ',\x20h1,\x20.hin' + 't,\x20.main-c' + _0x575bc6(_0x9ba47a._0x5470f0) + _0x575bc6(0x5ce) + _0x575bc6(_0x9ba47a._0x36f800) + '-index:\x201;' + '\x20}\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20.conta' + _0x575bc6(0x1dd) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20backgrou' + 'nd:\x20var(--' + _0x575bc6(0xa48) + _0x575bc6(_0x9ba47a._0x457759) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x63ceac) + _0x575bc6(_0x9ba47a._0xadacda) + '0px;\x0a\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x52e3bc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20m' + 'argin:\x200\x20a' + 'uto;\x0a\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x52e3bc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20b' + 'order-radi') + (_0x575bc6(0xa10) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0xad2) + 'g:\x2018px;\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x116b5f) + 'dow:\x20var(-' + '-shadow);\x0a' + _0x575bc6(0x469) + _0x575bc6(_0x9ba47a._0x52e3bc) + '}\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20.header' + _0x575bc6(0x32c) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20pos' + 'ition:\x20rel' + _0x575bc6(_0x9ba47a._0x526bc9) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20text-alig' + _0x575bc6(_0x9ba47a._0x1e2662) + _0x575bc6(0x32f) + _0x575bc6(_0x9ba47a._0x558a9f) + '\x20\x20\x20\x20\x20margi' + 'n-bottom:\x20' + _0x575bc6(_0x9ba47a._0x234528) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20h' + '1\x20{\x20\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20t' + 'ext-align:' + '\x20center;\x0a\x20' + _0x575bc6(_0x9ba47a._0x411218) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20font-si' + 'ze:\x2020px;\x0a' + _0x575bc6(_0x9ba47a._0x558a9f) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x49937b) + 'eight:\x20600' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20colo' + _0x575bc6(0x50a) + _0x575bc6(0x1c0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x52e3bc) + _0x575bc6(0xad5) + 'cing:\x20-0.3' + 'px;\x0a\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x49e086) + '\x20\x20\x20\x20\x20\x20\x20\x20ma' + 'rgin-botto' + _0x575bc6(_0x9ba47a._0x46caa1) + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20}\x0a' + _0x575bc6(0x469) + _0x575bc6(0x469) + _0x575bc6(0x32f) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20.credit\x20{' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20text-' + _0x575bc6(0x85d) + _0x575bc6(0x45e) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + 'color:\x20var' + '(--text-mu' + 'ted);\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'font-size:' + _0x575bc6(0x6e9) + _0x575bc6(_0x9ba47a._0x249b98) + '\x20\x20\x20\x20\x20\x20\x20}\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x884) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x249b98) + _0x575bc6(_0x9ba47a._0x57b11a) + '{\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20colo' + 'r:\x20var(--a' + _0x575bc6(_0x9ba47a._0xe942f5) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20text-dec' + 'oration:\x20n' + 'one;\x20\x0a\x20\x20\x20\x20') + ('\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x128) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0xd6) + _0x575bc6(0x314) + 'over\x20{\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x679) + 'ration:\x20un' + _0x575bc6(0x78f) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x141bee) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20.hint\x20{\x0a' + _0x575bc6(_0x9ba47a._0x249b98) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x2f8635) + 'ize:\x2011px;' + _0x575bc6(_0x9ba47a._0x4622ef) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20color' + _0x575bc6(_0x9ba47a._0x3aeac6) + 'xt-muted);' + _0x575bc6(_0x9ba47a._0x4ae70c) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20margi' + 'n-bottom:\x20' + '14px;\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'padding:\x208' + 'px\x2014px;\x0a\x20' + _0x575bc6(_0x9ba47a._0x550eab) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x96f) + 'und:\x20var(-' + '-surface);' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20borde' + 'r-radius:\x20' + 'var(--radi' + _0x575bc6(0x862) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20text-ali' + 'gn:\x20center' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20box-' + 'shadow:\x20va' + _0x575bc6(_0x9ba47a._0x575cb4) + '-sm);\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0xa71) + _0x575bc6(_0x9ba47a._0x28ce7a) + _0x575bc6(0x852) + _0x575bc6(0x469) + _0x575bc6(0xd6) + 'toolbar\x20{\x0a' + _0x575bc6(_0x9ba47a._0x249b98) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20displa' + 'y:\x20flex;\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20gap:\x2010' + _0x575bc6(_0x9ba47a._0x44b8c7) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20ma' + 'rgin-botto' + _0x575bc6(0x88c) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20justify' + '-content:\x20' + 'center;\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20flex-wra' + 'p:\x20wrap;\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x326) + _0x575bc6(0x83e) + 'e;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20z-i' + 'ndex:\x201;\x0a\x20' + _0x575bc6(_0x9ba47a._0x411218) + _0x575bc6(0xa7c) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20.toolbar') + ('-btn\x20{\x0a\x20\x20\x20' + _0x575bc6(0x469) + _0x575bc6(_0x9ba47a._0x249b98) + '\x20border:\x20n' + _0x575bc6(0x5dd) + _0x575bc6(_0x9ba47a._0x50f0ef) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20b' + 'order-radi' + _0x575bc6(0x2a0) + 'radius-sm)' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0xb08736) + _0x575bc6(_0x9ba47a._0x4c5f50) + 'or:\x20pointe' + 'r;\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x20f460) + _0x575bc6(0xa51) + _0x575bc6(_0x9ba47a._0x980489) + 'px;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20fo' + 'nt-weight:' + '\x20600;\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'font-famil' + _0x575bc6(0x771) + _0x575bc6(_0x9ba47a._0x5546a9) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'padding:\x208' + 'px\x2016px;\x0a\x20' + _0x575bc6(0x469) + _0x575bc6(_0x9ba47a._0xb08736) + '\x20\x20\x20transit' + 'ion:\x20opaci' + 'ty\x200.15s;\x0a' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20backgr' + 'ound:\x20var(' + '--accent);' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20color' + ':\x20#fff;\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x368) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x32f) + _0x575bc6(_0x9ba47a._0x52e3bc) + '\x20.toolbar-' + 'btn:hover\x20' + '{\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20opac' + _0x575bc6(_0x9ba47a._0x139e45) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20}\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x4e622c) + '\x20\x20\x20\x20.toolb' + _0x575bc6(_0x9ba47a._0x25b06a) + 'ive\x20{\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'background' + ':\x20var(--ac' + _0x575bc6(0x1d9) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20color:\x20#f' + _0x575bc6(_0x9ba47a._0x3854ca) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20op' + 'acity:\x200.7' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20}\x0a\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + _0x575bc6(0x755) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20.main' + '-content\x20{' + _0x575bc6(_0x9ba47a._0x4ae70c) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20displ' + 'ay:\x20flex;\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x28ce7a) + '\x20\x20\x20\x20gap:\x201' + '5px;\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x213) + _0x575bc6(0x469) + _0x575bc6(0x677) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20') + ('\x20\x20\x20\x20\x20\x20\x20\x20.s' + 'idebar\x20{\x0a\x20' + _0x575bc6(_0x9ba47a._0x45c3d9) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0xa40) + '280px;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0xb08736) + _0x575bc6(0x924) + _0x575bc6(0x3aa) + 'urface);\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0xcbf307) + 'radius:\x20va' + _0x575bc6(0xa29) + _0x575bc6(0x65f) + _0x575bc6(0x469) + _0x575bc6(0x8a5) + 'ding:\x2014px' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20box-' + _0x575bc6(0x7e2) + 'r(--shadow' + '-sm);\x0a\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20}\x0a\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20.' + 'content-pa' + 'nel\x20{\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x705) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x4e622c) + _0x575bc6(0x96f) + _0x575bc6(_0x9ba47a._0x4cd149) + _0x575bc6(_0x9ba47a._0x31c1a1) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + _0x575bc6(_0x9ba47a._0x366189) + 'r-radius:\x20' + 'var(--radi' + _0x575bc6(_0x9ba47a._0x521022) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20p' + 'adding:\x2014' + 'px;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20bo' + _0x575bc6(0x665) + _0x575bc6(_0x9ba47a._0x38694b) + 'ow-sm);\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x368) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20.section-' + _0x575bc6(_0x9ba47a._0x58ffe5) + '{\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x971) + _0x575bc6(_0x9ba47a._0x529699) + _0x575bc6(_0x9ba47a._0x200c8c) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x31a) + _0x575bc6(0x94c) + _0x575bc6(0x774) + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0xd7) + '\x2010px;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20font-weig' + _0x575bc6(_0x9ba47a._0xf8f76c) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0xb08736) + _0x575bc6(_0x9ba47a._0x75706a) + _0x575bc6(0x162) + _0x575bc6(0x526) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x2f3) + 'form:\x20uppe' + 'rcase;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0xdf38bb) + 'n:\x20left;\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x7c0)) + (_0x575bc6(_0x9ba47a._0x3b0ce3) + 'x\x20solid\x20va' + 'r(--surfac' + _0x575bc6(0x2c2) + _0x575bc6(_0x9ba47a._0x52e3bc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x4b1) + _0x575bc6(_0x9ba47a._0x4e3c43) + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20.scro' + _0x575bc6(_0x9ba47a._0x19fea1) + _0x575bc6(0x752) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20ma' + 'x-height:\x20' + '500px;\x0a\x20\x20\x20' + _0x575bc6(0x469) + _0x575bc6(_0x9ba47a._0x52e3bc) + '\x20overflow-' + 'y:\x20auto;\x0a\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20overflo' + 'w-x:\x20hidde' + _0x575bc6(_0x9ba47a._0xe35e62) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x49d394) + _0x575bc6(_0x9ba47a._0x38c3cd) + _0x575bc6(0xe9) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '.scrollabl' + 'e-list::-w' + 'ebkit-scro' + 'llbar\x20{\x20wi' + _0x575bc6(_0x9ba47a._0xafe6b6) + '}\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20.scrolla' + 'ble-list::' + _0x575bc6(0x166) + _0x575bc6(_0x9ba47a._0xafa116) + 'ack\x20{\x20back' + 'ground:\x20tr' + _0x575bc6(_0x9ba47a._0x3b099d) + '\x20}\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x75f) + 'able-list:' + ':-webkit-s' + _0x575bc6(0x3b3) + 'humb\x20{\x20bac' + 'kground:\x20#' + _0x575bc6(0x829) + 'r-radius:\x20' + '2px;\x20}\x0a\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x24acda) + '\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20' + _0x575bc6(_0x9ba47a._0x28ce7a) + '\x20\x20\x20\x20\x20\x20\x20\x20.l' + 'ist-item\x20{' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20displ' + 'ay:\x20flex;\x0a' + _0x575bc6(_0x9ba47a._0xb08736) + _0x575bc6(0x469) + _0x575bc6(0x3f1) + 'items:\x20cen' + _0x575bc6(_0x9ba47a._0x11fcf9) + _0x575bc6(_0x9ba47a._0x17748d) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20m' + 'argin-bott' + _0x575bc6(0xd0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20padding' + ':\x2010px;\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20backgrou' + 'nd:\x20var(--' + _0x575bc6(_0x9ba47a._0x3b0316) + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20bord' + 'er:\x201.5px\x20' + 'solid\x20var(' + '--surface-' + '3);\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20bo' + _0x575bc6(_0x9ba47a._0x4a4cd0) + 's:\x20var(--r' + 'adius-sm);') + ('\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x5d2514) + 'r:\x20pointer' + _0x575bc6(_0x9ba47a._0x2063fa) + _0x575bc6(_0x9ba47a._0x205dc4) + '\x20\x20\x20\x20\x20\x20tran' + 'sition:\x20bo' + 'rder-color' + '\x200.15s,\x20ba' + 'ckground\x200' + '.15s;\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20}\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20.' + 'list-item:' + 'hover\x20{\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20border-c' + 'olor:\x20var(' + '--accent);' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20backg' + 'round:\x20var' + '(--surface' + '-2);\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20}\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20.l' + 'ist-item.a' + 'ctive\x20{\x0a\x20\x20' + _0x575bc6(0x469) + _0x575bc6(_0x9ba47a._0x411218) + _0x575bc6(_0x9ba47a._0x29b76d) + 'olor:\x20var(' + '--accent);' + _0x575bc6(_0x9ba47a._0x24b744) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x6e10a8) + 'round:\x20var' + '(--surface' + '-3);\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x213) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x2b57b2) + 'ist-item-n' + 'ame\x20{\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'flex:\x201;\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x2fba8d) + 'var(--text' + ');\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20fon' + 't-size:\x2011' + 'px;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x3f5192) + 'nt-weight:' + _0x575bc6(_0x9ba47a._0x1d0058) + _0x575bc6(0x469) + _0x575bc6(_0x9ba47a._0x59c6d4) + _0x575bc6(_0x9ba47a._0x515134) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20.' + _0x575bc6(0xfa) + 't-btn\x20{\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + _0x575bc6(_0x9ba47a._0x4cb8e7) + '2px;\x0a\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20h' + 'eight:\x2022p' + 'x;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x206) + 'kground:\x20#' + '3a1a1a;\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + _0x575bc6(0xac8) + _0x575bc6(0x511) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x28ce7a) + '\x20\x20border:\x20' + '1px\x20solid\x20') + ('#555;\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x5219a4) + 'border-rad' + 'ius:\x2050%;\x0a' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20cursor' + _0x575bc6(0x158) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x2c01f7) + '\x20\x20\x20\x20\x20font-' + 'weight:\x2070' + '0;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20fon' + 't-size:\x2011' + 'px;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20tr' + 'ansition:\x20' + 'background' + _0x575bc6(_0x9ba47a._0xf33392) + _0x575bc6(0x469) + _0x575bc6(_0x9ba47a._0x45c3d9) + '\x20\x20display:' + '\x20flex;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20align-ite' + _0x575bc6(_0x9ba47a._0x550aa7) + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x573ee2) + _0x575bc6(_0x9ba47a._0x1db49f) + 'ify-conten' + 't:\x20center;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20margi' + _0x575bc6(0xb13) + 'x;\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + _0x575bc6(_0x9ba47a._0x2c35de) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20.del' + _0x575bc6(_0x9ba47a._0x3772bc) + 'tn:hover\x20{' + _0x575bc6(0x32f) + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20backg' + 'round:\x20#4a' + _0x575bc6(_0x9ba47a._0x4c61b7) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x128) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20.' + 'add-slot-b' + 'tn\x20{\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20w' + 'idth:\x2022px' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x24e) + 'ht:\x2022px;\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20backgr' + 'ound:\x20var(' + '--surface-' + '3);\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20co' + 'lor:\x20var(-' + _0x575bc6(_0x9ba47a._0x41db42) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20border:\x20' + '1px\x20solid\x20' + _0x575bc6(_0x9ba47a._0x5e588d) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'border-rad' + 'ius:\x2050%;\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20cursor' + ':\x20pointer;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20font-' + _0x575bc6(_0x9ba47a._0x5cfbce) + '0;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x59dacb) + 't-size:\x2014' + 'px;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20tr' + 'ansition:\x20') + (_0x575bc6(0x99f) + _0x575bc6(_0x9ba47a._0xcbfdf0) + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20d' + 'isplay:\x20fl' + 'ex;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20al' + _0x575bc6(_0x9ba47a._0x4f2b8c) + '\x20center;\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20justify' + '-content:\x20' + 'center;\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x5f0e28) + '\x200;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20tr' + 'ansform:\x20t' + 'ranslateY(' + '-2px);\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x49b126) + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '.add-slot-' + 'btn:hover\x20' + _0x575bc6(0x256) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20opac' + 'ity:\x200.85;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20}\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20.field' + _0x575bc6(0x5b9) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x28b912) + _0x575bc6(0x56e) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x550eab) + _0x575bc6(_0x9ba47a._0x460839) + 'plate-colu' + 'mns:\x201fr\x201' + 'fr;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x8c7) + 'p:\x2010px;\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20margin-' + 'bottom:\x2012' + 'px;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20}\x0a\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20.fi' + 'eld\x20{\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'background' + _0x575bc6(0x756) + _0x575bc6(_0x9ba47a._0x457a65) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20p' + _0x575bc6(0x784) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x117da3) + '\x20\x20\x20\x20\x20borde' + 'r:\x20none;\x0a\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20margin-' + _0x575bc6(0x508) + 'x;\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20}\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20.fie' + _0x575bc6(_0x9ba47a._0x538159) + 'dth\x20{\x0a\x20\x20\x20\x20' + _0x575bc6(0x469) + _0x575bc6(0x469) + _0x575bc6(0x699) + 'n:\x201\x20/\x20-1;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20}\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20') + ('\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20.field' + '\x20label\x20{\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x9f8) + ':\x20block;\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20margin-' + 'bottom:\x203p' + _0x575bc6(_0x9ba47a._0x228e1b) + _0x575bc6(0x469) + _0x575bc6(0xa51) + _0x575bc6(0x28a) + _0x575bc6(_0x9ba47a._0x58b261) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0xa8) + 'ont-size:\x20' + _0x575bc6(0x6d3) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x4dea97) + _0x575bc6(0x94c) + _0x575bc6(0x774) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'letter-spa' + 'cing:\x200.3p' + 'x;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20}\x0a\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + _0x575bc6(0x7af) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x84f) + 'ld\x20input,\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '.field\x20sel' + _0x575bc6(0x3e7) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + 'width:\x20100' + _0x575bc6(_0x9ba47a._0x4aaf39) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20pad' + 'ding:\x205px\x20' + '9px\x20!impor' + 'tant;\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x566) + '5px\x20solid\x20' + _0x575bc6(_0x9ba47a._0x1651ea) + _0x575bc6(0x661) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + _0x575bc6(_0x9ba47a._0x235372) + 'dius:\x20var(' + '--radius-s' + 'm)\x20!import' + 'ant;\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20b' + 'ackground:' + '\x20#353434\x20!' + _0x575bc6(0x341) + _0x575bc6(0x32f) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20color' + _0x575bc6(_0x9ba47a._0xedea9f) + 'xt)\x20!impor' + _0x575bc6(0x885) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'font-size:' + _0x575bc6(0x464) + 'ortant;\x0a\x20\x20' + _0x575bc6(_0x9ba47a._0x28ce7a) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20font-fam' + 'ily:\x20var(-' + '-mono)\x20!im' + _0x575bc6(0x240) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20box-sha' + 'dow:\x20inset' + '\x200\x201px\x203px' + '\x20rgba(0,0,' + '0,0.2)\x20!im' + 'portant;\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20transit' + 'ion:\x20borde' + _0x575bc6(0x55c) + '15s;\x0a\x20\x20\x20\x20\x20') + ('\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20}\x0a\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20' + _0x575bc6(_0x9ba47a._0x52e3bc) + '\x20\x20\x20\x20\x20\x20\x20\x20.f' + _0x575bc6(0x5cb) + _0x575bc6(_0x9ba47a._0x43be28) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20.f' + 'ield\x20selec' + _0x575bc6(_0x9ba47a._0x227e83) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20outlin' + _0x575bc6(_0x9ba47a._0xc10c37) + 'mportant;\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x945) + '-color:\x20va' + 'r(--accent' + _0x575bc6(0x69e) + 'nt;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20bo' + _0x575bc6(0x665) + 'inset\x200\x201p' + _0x575bc6(_0x9ba47a._0x4b0c5c) + '(0,0,0,0.0' + '4),\x200\x200\x200\x20' + '3px\x20var(--' + _0x575bc6(_0x9ba47a._0x5b8ed) + 't)\x20!import' + 'ant;\x0a\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20}\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x677) + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20.e' + 'mpty-state' + '\x20{\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20tex' + _0x575bc6(_0x9ba47a._0x16561d) + 'enter;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20padding:\x20' + _0x575bc6(0x6a3) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x31a) + '(--text-fa' + 'int);\x0a\x20\x20\x20\x20' + _0x575bc6(0x469) + _0x575bc6(_0x9ba47a._0x28ce7a) + _0x575bc6(0xd7) + '\x2013px;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20}\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x884) + _0x575bc6(_0x9ba47a._0x4eabc6) + _0x575bc6(_0x9ba47a._0x44eeb3) + _0x575bc6(_0x9ba47a._0x329600) + '{\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x263) + '-size:\x2011p' + 'x;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x336e29) + 'or:\x20var(--' + 'text-muted' + ');\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x49d394) + 'ding:\x208px\x20' + _0x575bc6(0x6df) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0xb52ecb) + _0x575bc6(_0x9ba47a._0x18f407) + 'rface);\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20border-r' + 'adius:\x20var' + '(--radius-' + 'sm);\x0a\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20b' + 'ox-shadow:' + '\x20var(--sha' + 'dow-sm);\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20margin-') + ('bottom:\x2015' + 'px;\x0a\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20li' + _0x575bc6(0x865) + '\x201.5;\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'border:\x201p' + 'x\x20solid\x20va' + 'r(--surfac' + 'e-3);\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20}\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x4cdc76) + _0x575bc6(_0x9ba47a._0x5dbe18) + 'n\x20{\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20ba' + 'ckground:\x20' + 'var(--acce' + 'nt);\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20c' + 'olor:\x20#fff' + _0x575bc6(_0x9ba47a._0xa27980) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20bord' + 'er:\x20none;\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x128e19) + 'g:\x207px\x2016p' + 'x;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20fon' + _0x575bc6(_0x9ba47a._0x510bcc) + _0x575bc6(_0x9ba47a._0x44b8c7) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20bo' + 'rder-radiu' + 's:\x2020px;\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20cursor:' + '\x20pointer;\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20font-w' + 'eight:\x20500' + _0x575bc6(_0x9ba47a._0x388396) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x3746e9) + '-family:\x20v' + _0x575bc6(_0x9ba47a._0x159b3f) + _0x575bc6(0x2aa) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20tran' + 'sition:\x20op' + _0x575bc6(0x720) + 's;\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x4a998f) + '\x20\x20\x20}\x0a\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x515134) + '\x20\x20\x20\x20\x20.save' + '-button:ho' + 'ver\x20{\x20opac' + 'ity:\x200.85;' + '\x20}\x0a</style' + '>\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20</head' + '>\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20<body>' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20<di' + 'v\x20class=\x22h' + _0x575bc6(0x702) + 'le=\x22margin' + '-top:\x2015px' + ';\x22>\x0a\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x20f460) + '\x20\x20\x20\x20\x20\x20\x20\x20<d' + 'iv\x20style=\x22' + 'display:\x20f' + 'lex;\x20align' + '-items:\x20ce' + 'nter;\x20just' + 'ify-conten' + 't:\x20center;' + _0x575bc6(0xafc) + _0x575bc6(_0x9ba47a._0x203bba) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20<img' + _0x575bc6(0x2dd) + ':image/png' + ';base64,iV') + ('BORw0KGgoA' + 'AAANSUhEUg' + 'AAAOsAAAEu' + _0x575bc6(_0x9ba47a._0x58b7f4) + 'VUAAAKOmlD' + _0x575bc6(0x609) + 'lFQzYxOTY2' + _0x575bc6(_0x9ba47a._0x479043) + _0x575bc6(_0x9ba47a._0x2ff2b4) + _0x575bc6(0x9b4) + 'CU0HtVIIBI' + 'Cb1Ir6ISkw' + _0x575bc6(_0x9ba47a._0x92331e) + _0x575bc6(_0x9ba47a._0x17cafd) + 'Io4ICjIyBj' + 'RRQLg2LvAz' + 'KIqOPgKDYs' + 'b0XXGn2z5r' + '03b/aPb+21' + 'v3Pu/c7Z5w' + _0x575bc6(0x13d) + 'BSBLLJNG+n' + 'uz4xMS2cR+' + 'QIEMBLAH4P' + 'FzJKFRftEA' + 'AIG+XHZOpL' + '83fAEC8PKa' + '4gS4bB0Qzm' + 'bD/wdVvkQq' + _0x575bc6(0x5e0) + 'jDB0AKACAz' + _0x575bc6(_0x9ba47a._0x108310) + 'yfoeAoTsGl' + _0x575bc6(0x6b4) + 'd+5lafYj5z' + 'TwUXZIkFAK' + 'jizRJBlkDB' + 'ewBgXa5cKA' + 'DAQgCgMFck' + 'zAPArgCAUa' + 'Y8SwSAvVbk' + _0x575bc6(_0x9ba47a._0x26ae97) + _0x575bc6(_0x9ba47a._0x3ebac2) + _0x575bc6(0x9c4) + 'gZACRa6ld8' + '/ldcJlwoUx' + _0x575bc6(_0x9ba47a._0x115632) + _0x575bc6(_0x9ba47a._0x35a54f) + '7FhcMOEOZl' + _0x575bc6(0xa1c) + _0x575bc6(_0x9ba47a._0x52a1a3) + 'nngRwOeaP0' + 'FN0Vt2oC/X' + 'yd7Fycnawc' + 'b+q0b918u/' + 'CYW3n9nziE' + '+eIay+L9pf' + _0x575bc6(_0x9ba47a._0x84dc29) + _0x575bc6(0x2bd) + _0x575bc6(_0x9ba47a._0x4d303d) + _0x575bc6(_0x9ba47a._0x33140f) + 'qh6WYl7SZD' + 'KJq61tXl6e' + _0x575bc6(_0x9ba47a._0x20bc70) + '/8z4C/ga/+' + 'Z6P43B/tYf' + 'sIU3jyTBlb' + '0Td+dma2XM' + 'rOkfD4Qrb1' + 'n4f4Hyf+9T' + 'usIoUpQqlQ' + _0x575bc6(_0x9ba47a._0x35cbe7) + _0x575bc6(_0x9ba47a._0x59c93a) + 'MlG2mC0S/y' + 'cT/2Han/B5' + _0x575bc6(_0x9ba47a._0x3859e2) + 'NsQOUCE7Bf' + '+wDHoAKWtE' + 'Ph+h++hZBj' + 'QbF5cXqjn+' + 'f+Ez5t878D' + 'LVEcOaLUT3' + 'ncyGg2Xy7N' + '/XynWEvAAw' + 'WUgQmaoAuG' + 'YAbW4ADO4A' + 'ae4AtBEAbR' + 'kABzgQ9pkA' + 'VSyIOlsAoK' + 'oRg2wVaogl' + 'pogCZohf3Q' + 'AYfhBJyG83' + 'ARrsJtGIQR' + _0x575bc6(0x764) + _0x575bc6(0x90f) + 'eogxYok4IB' + 'xkJuKLhCCR' + 'SAKSjKQiYk' + 'SOLEVWI8VI' + 'KVKF1CFNyP') + ('fIIeQEchYZ' + 'QG4iQ8gY8j' + 'vyFsVQGspE' + 'dVAT1BbloF' + '5oMBqNzkFT' + _0x575bc6(_0x9ba47a._0x4c7edf) + _0x575bc6(0x2d5) + _0x575bc6(_0x9ba47a._0x4eee5f) + 'hjdAIDjIqx' + 'MH3MGuNgXC' + _0x575bc6(0x8dc) + 'HCvCyrF6rB' + 'Xrwnqxy9gg' + '9gR7gyPgGD' + _0x575bc6(0xab0) + 'xeD4uAW45b' + 'gNuCrcHlw7' + _0x575bc6(0x35e) + _0x575bc6(0x658) + 'vCs+EB+PT8' + 'Xn4Qvx5fhG' + '/EH8KfxV/A' + _0x575bc6(_0x9ba47a._0x1ef4f8) + _0x575bc6(_0x9ba47a._0x571f1c) + '2whLCBsJ3Q' + 'RjhOGCAMEy' + 'aIRKIm0ZLo' + 'Tgwj8ogyYi' + 'GxkriXeIx4' + _0x575bc6(0xb16) + 'RIDiQ/UiJJ' + _0x575bc6(_0x9ba47a._0x271ae2) + _0x575bc6(0x91c) + 'CtmY7EoOIw' + _0x575bc6(_0x9ba47a._0x1b09fc) + 'F/kCeYQ8SV' + _0x575bc6(_0x9ba47a._0x5245b2) + _0x575bc6(_0x9ba47a._0x29ee55) + 'KKcofynEql' + _0x575bc6(0x1c9) + 'UltYK6j3qG' + 'OkR9Q1OjWd' + 'C4tCSanLaR' + _0x575bc6(0x2ed) + 'xOp5vQPemJ' + _0x575bc6(_0x9ba47a._0x4dedb2) + _0x575bc6(0x7eb) + _0x575bc6(_0x9ba47a._0x47fbf9) + 'St1K50Semp' + 'MlnZWNlLea' + '7yYuVy5QPK' + _0x575bc6(0x962) + _0x575bc6(_0x9ba47a._0x466fe3) + 'KodUrqtMqD' + 'JU7VXDVLNU' + _0x575bc6(_0x9ba47a._0x51f528) + 'hGVDNR81UT' + _0x575bc6(_0x9ba47a._0x59d065) + _0x575bc6(0x3db) + 'z1jNaGCcYo' + _0x575bc6(0x8b8) + 'nVnM/I7Zzx' + _0x575bc6(_0x9ba47a._0x802309) + 'vlC9Wv2I+i' + 'ALY5mwAlmZ' + 'rBLWftY11t' + 'spOlO8pgin' + _0x575bc6(_0x9ba47a._0x396c47) + _0x575bc6(0x8fd) + 'RRptGlc13m' + _0x575bc6(0x4e9) + 'a3Zo3tXCaV' + 'loRWjlae3Q' + 'OqX1ZCpzqt' + 'tU/tSiqfun' + _0x575bc6(0x606) + 'WXaO/S7tOe' + '0NHV8deR6F' + 'TqnNR5osvS' + '9dRN1y3TPa' + 'o7psfQm6kn' + '0ivTO6b3iK' + '3O9mJnsivY' + 'PexxfW39AH' + '25fp1+v/6k' + _0x575bc6(_0x9ba47a._0x31bcfa) + _0x575bc6(_0x9ba47a._0x3575a4) + 'xbDMsNtw3E' + _0x575bc6(0xac) + '0S1jsjHHOM' + _0x575bc6(_0x9ba47a._0x475372) + 'U5M4k7UmHS' + 'YPTTVMA00X' + _0x575bc6(0x568) + 'mYLTCrN7ti' + 'TjDnmGeYbz' + 'e/aIFaOFqk' + 'WVRbXLBELZ' + '0sRZbbLQes' + '8FYuVmKreq') + ('vr1jRrL+tc' + _0x575bc6(0x7ff) + 'hNvk2HzVNb' + _0x575bc6(_0x9ba47a._0x4b432e) + 'Yf7BztMu0a' + '7G7bq9kH2e' + _0x575bc6(_0x9ba47a._0x468100) + 'wHeodrgyjT' + '7Nb9qKaZ3T' + _0x575bc6(_0x9ba47a._0x2f3042) + _0x575bc6(0x16b) + _0x575bc6(0x996) + '5Sp1anMWcj' + '52TnGufrHC' + 'YnnLOBc8YF' + _0x575bc6(_0x9ba47a._0x578e4a) + 'sbVydXmet+' + '19/crN0y3J' + _0x575bc6(0x20b) + '0TBj2N3Ane' + 'de5z44kz0z' + 'eebOmYMe+h' + '48j3qP+56G' + 'ngLPRs9RL3' + 'OvdK+9Xk+9' + '7byl3ge9X3' + 'Fducu4x30w' + 'H3+fIp9+Xz' + 'XfGN8q33t+' + 'Bn6pfi1+4/' + '6O/kv8jwfg' + _0x575bc6(0x9a3) + 'QJ5Ac2BY4H' + 'OQctC+oJpg' + 'VHBVcF3w+x' + 'CJGGdIWioU' + _0x575bc6(_0x9ba47a._0xd214d5) + 'JZ7VEQZhgW' + _0x575bc6(_0x9ba47a._0x5c651d) + _0x575bc6(_0x9ba47a._0x477e78) + 'Ed8SDSPnJp' + _0x575bc6(0x1ff) + 'PUy2jv6JLo' + '2zFmMfKY7l' + _0x575bc6(_0x9ba47a._0x537234) + 'cT5xpXGD8b' + 'bxy+LPJ2gl' + 'iBI6E4mJsY' + 'mNiROzfWdv' + _0x575bc6(0x73b) + 'RtjumchXPO' + _0x575bc6(0x407) + _0x575bc6(0x5c3) + 'yXHJzcnveG' + 'G8et7E/MD5' + 'NfPH+Vz+Nv' + '5jgaegTDAm' + 'dBeWCkdT3F' + 'NKUx6muqdu' + _0x575bc6(0x6ef) + 'si4oqqRM/S' + _0x575bc6(_0x9ba47a._0x213dc0) + _0x575bc6(_0x9ba47a._0x5857be) + 'lkXKSs46JF' + _0x575bc6(0x4d7) + 'F2YPSCwlhZ' + 'LBBa4Lti4Y' + _0x575bc6(_0x9ba47a._0x19aee8) + 'k5nTKmTCLr' + 'k5vJ18iHcm' + _0x575bc6(_0x9ba47a._0x4fe187) + 'O7BQdaF4Yd' + '8ii0XrF40u' + _0x575bc6(_0x9ba47a._0x59e3a2) + '6S7qX6S1ct' + 'HVrmtaxuOb' + _0x575bc6(_0x9ba47a._0x104d6b) + 'ClaMrPRfuW' + 'cVZVXGqp/y' + '7fJL81+sjl' + 'vdVaBTsLJg' + 'eI3/mpZCpU' + 'Jp4fW1bmtr' + '1+HWidb1r5' + '+2vnL9hyJB' + '0bliu+Ly4n' + 'cb+BvOfWP/' + _0x575bc6(_0x9ba47a._0x187215) + 'wvcSrZsYmw' + 'Sbzp2maPzX' + 'tKVUsXlw5v' + _0x575bc6(0x3c6) + 'p7sXXe1rPl' + '08trt1G2yb' + 'cNVoRUdFYa' + 'VW6qfFeVVn' + _0x575bc6(0x122) + 'Zn3Nq+2C7Z' + 'd2eO5ordWp' + _0x575bc6(_0x9ba47a._0x27629c)) + ('adf117vUl9' + _0x575bc6(_0x9ba47a._0x34ec65) + 'piG3q/5Xzb' + '1KjVWNz4fr' + _0x575bc6(_0x9ba47a._0x45bd57) + _0x575bc6(0x1fb) + _0x575bc6(_0x9ba47a._0x425d6c) + '0t6L3/l819' + _0x575bc6(_0x9ba47a._0x42ad03) + '3gf75PsefZ' + _0x575bc6(0xc0) + 'D3AOtP5g/E' + 'PNQcbBonak' + 'fVH7eEdax2' + 'BnQufAoaBD' + '3V1uXQd/tP' + 'lx92H9w9VH' + '1I+UHKUcLT' + 'j68djiYxPH' + 'JcefnEg9Md' + 'w9r/v2yfiT' + 'V3oievpPBZ' + '86c9rv9Mle' + _0x575bc6(0x6f7) + '7revbQOc65' + 'jvNO59v7HP' + 'sO/uT408F+' + 'p/72C84XOi' + '+6XOwamDFw' + _0x575bc6(0x4a8) + '6fvhJ45fzV' + 'WVcHrsVcu3' + 'E96frgDcGN' + 'hzczbz67lX' + 'tr8vbKO/g7' + _0x575bc6(_0x9ba47a._0x3e67da) + '5X/7P5z22D' + 'ToNHhnyG+u' + '5H3b89zB9+' + '/EvOL+9GCh' + '7QH5SP6o02' + _0x575bc6(0x6ee) + _0x575bc6(_0x9ba47a._0x5297c7) + _0x575bc6(_0x9ba47a._0xb5bef) + _0x575bc6(0x51c) + _0x575bc6(_0x9ba47a._0x37f5d6) + 'fSZx9/3/Bc' + _0x575bc6(_0x9ba47a._0x1a93ae) + '+ET9x7mfVy' + _0x575bc6(0x741) + '5w3vS+jXs7' + _0x575bc6(0x12a) + _0x575bc6(0x7c8) + _0x575bc6(_0x9ba47a._0x1ea0fc) + _0x575bc6(0x805) + 'AAMAUExURQ' + _0x575bc6(0xaf3) + 'BAICBgIGCg' + _0x575bc6(_0x9ba47a._0x35bead) + 'AgYLBAYGAh' + _0x575bc6(0x61c) + '9A0MAxYUBv' + '7rVf70qfrX' + 'R/v58P7pnx' + 'wXBvDt4yge' + 'AiQcBf7IMu' + '7AOuPMicq4' + 'gtrSuufhz/' + 'fz5+i0Lioh' + _0x575bc6(_0x9ba47a._0xdad456) + 'chEnRjNu7K' + _0x575bc6(_0x9ba47a._0x479620) + 'nPkHhrTN7I' + _0x575bc6(_0x9ba47a._0x3252e1) + _0x575bc6(_0x9ba47a._0x87918b) + 'HLydWe3Kfd' + _0x575bc6(_0x9ba47a._0x3a4ced) + _0x575bc6(0x58b) + 'eicoh4Vmdb' + _0x575bc6(_0x9ba47a._0x2c42f1) + 'jdn5OGaMe/' + 'rqVyDSoeBt' + _0x575bc6(_0x9ba47a._0x51ed6b) + _0x575bc6(_0x9ba47a._0x888093) + 'dhGM2UJaF0' + 'HXpZGC4iCT' + 'UnC+rDds6t' + 'aeW/duC7c+' + 'rGetOybvTN' + _0x575bc6(0xa59) + 'vViebDfezK' + _0x575bc6(_0x9ba47a._0x1d0a99) + 'PEherKisSr' + 'e7qwm+jm4v' + _0x575bc6(_0x9ba47a._0x4280ca) + _0x575bc6(0x9bc) + 'KSIt2bJUk0' + 'DNaWJr+HIt' + 'KWJrB+IP63' + _0x575bc6(_0x9ba47a._0x13c133)) + ('SzXtKua+7G' + 'eurCeu7Gfl' + 'BDK+rGgkY7' + 'J/XPierGhu' + '7Kis+xefDO' + _0x575bc6(0x51a) + 'rKjta5g92/' + 'iPPRlqObjL' + 'J2FoZaE1s9' + _0x575bc6(0x9b8) + 'aSItKOIsqK' + 'IfeqK++kKt' + 'uVJv2vLeig' + _0x575bc6(0xa84) + _0x575bc6(_0x9ba47a._0x5315ab) + _0x575bc6(0xaf2) + _0x575bc6(_0x9ba47a._0x292fa6) + 'MNmdO7eEND' + _0x575bc6(0x828) + 'ROrCfu7Ggu' + '7KjunGi8Sm' + _0x575bc6(0x14d) + 'rKlK1qBioa' + 'AtKDDKZmCi' + 'AUArd2FhkQ' + 'A7FyFpNeEt' + 'GJG6ltFteN' + 'HcaDG7t6GU' + 'IrCb9+G7Z2' + 'GrJ2Gi4eB6' + _0x575bc6(_0x9ba47a._0x38a12e) + _0x575bc6(0x79d) + '7Cfu7GiOrC' + 'hsqqes+vf6' + 'pjBqpmCqZi' + 'CqFhCrBrDa' + _0x575bc6(_0x9ba47a._0x22f0c9) + 'Mc6qesqqf9' + _0x575bc6(0x733) + _0x575bc6(_0x9ba47a._0x5d6872) + 'JxDaNdC7hs' + 'Dcp3D4ZOCi' + 'YWA6ZiDoxT' + 'DK5mD6FhD3' + 'ZGC2pACsR0' + _0x575bc6(0x107) + _0x575bc6(_0x9ba47a._0x33c864) + 'B5RkKc6qfp' + 'xYC4pOCoZK' + 'CpRUDKpiDo' + _0x575bc6(_0x9ba47a._0xd552a3) + _0x575bc6(_0x9ba47a._0x22cbf3) + 'QLAoZKDioZ' + _0x575bc6(0x90d) + 'k5GmI+Hv76' + '+PPx8AwEAg' + 'YCAgcGBv7+' + _0x575bc6(_0x9ba47a._0x147b68) + '///7JXTUoA' + 'AAEAdFJOU/' + '//////////' + '//////////' + _0x575bc6(_0x9ba47a._0x396cc4) + '//////////' + '//////////' + '//////////' + _0x575bc6(_0x9ba47a._0x54efef) + _0x575bc6(_0x9ba47a._0x54efef) + _0x575bc6(0x40b) + '//////////' + _0x575bc6(_0x9ba47a._0x1335ad) + '//////////' + '//////////' + '//////////' + '//////////' + '//////////' + _0x575bc6(0x40b) + '//////////' + '//////////' + _0x575bc6(0x40b) + '//////////' + _0x575bc6(0x40b) + '//////////' + '//////////' + '//////////' + '//////////' + _0x575bc6(0x40b) + '//////////' + _0x575bc6(0x40b) + _0x575bc6(0x40b) + _0x575bc6(_0x9ba47a._0x1335ad) + '//////////' + '//////////' + '/////////w' + 'BT9wclAAAA' + 'CXBIWXMAAA' + 'sTAAALEwEA' + 'mpwYAACIKU' + _0x575bc6(_0x9ba47a._0x515ec9) + _0x575bc6(_0x9ba47a._0x2e5022)) + ('57k9ybtJTS' + 'FBBp6ZK0tF' + 'xKoWlE2WRr' + '2VxwqziOC+' + _0x575bc6(_0x9ba47a._0x468a51) + '4/zUcZwZZ3' + 'EbHbdRx5Ep' + 'joLK1rKpoG' + 'LaQikXWpqk' + 'LQ1UhaSltM' + 'm9Se59/p/z' + '3HRhFZX5ve' + '/7f8Q2SdP0' + 'fu85z9nPeQ' + 'iF/ydXb9I3' + '/x0O/p9boX' + 'P+E42NikX/' + 'Myv0zX6R/D' + '9G194LGrrG' + 'Fu7VAPhDw5' + 'tsmb5vQF/+' + 'Yfh/aJ2XOu' + 'XPKbfGNtY9' + 'xt2n71ee89' + _0x575bc6(0x397) + 'Ovzgf16ozT' + _0x575bc6(0x9c7) + 'koPFP9xsmr' + '70ymDa//+w' + _0x575bc6(0x866) + _0x575bc6(_0x9ba47a._0xc4acef) + 'RYktufYq20' + 'XPrbrq/z6s' + _0x575bc6(0x868) + 'oP33+FtM37' + 'zTeRpXlyZH' + 'GtsD2mDekY' + 'CtCVi3Kpa4' + _0x575bc6(_0x9ba47a._0x4d1790) + 'OaNPMsH/zs' + _0x575bc6(0x6b9) + 'mdMjYIXIXJ' + 'i7Ye6oYNj5' + '+LUTms/k9y' + '/ylrTHH6hQ' + 'bPHwOR1AIN' + 'SV2gWpIXOs' + '8aFKWJf889' + '//30LXn/1a' + 'pJGqciuh76' + _0x575bc6(0x2b7) + 'f2nhTXNtFN' + '6HpYdhnmvV' + '1+H9z9zFn1' + _0x575bc6(0x39b) + 'pFojaYyqqZ' + 'AWgii38glb' + _0x575bc6(0x79b) + 'bF99F3+EtJ' + '5vVbeD4+3/' + _0x575bc6(0x287) + _0x575bc6(0x26d) + 'CL4X293EZf' + '//vnp/kIb+' + _0x575bc6(_0x9ba47a._0x16e507) + 'UqGLDO0iyM' + 'ep0JXr10lK' + _0x575bc6(0x9ec) + _0x575bc6(0x630) + _0x575bc6(_0x9ba47a._0xcd635f) + 'rvcMBYBaD6' + _0x575bc6(0x85b) + 'W0xae5F1N/' + 'w6Xw+hOnoG' + '6PIIrvOPYW' + 'qdYOGBVJ86' + 'daOyC1CwBS' + 'EXauf4jFd/' + 'k18yqczf9H' + 'sf7st1CyLT' + _0x575bc6(0x4bb) + _0x575bc6(_0x9ba47a._0x1e7eb4) + 'CAzELwOsiY' + '6hbfPn5sbp' + 'sS2kvf4Su6' + 'HvnjST4kMM' + _0x575bc6(_0x9ba47a._0x5f225f) + _0x575bc6(_0x9ba47a._0x25196e) + 'XQ3FCaPzXN' + 'nwrBEXy49c' + 'rZ4aofvPR/' + 'DmtejbVkm+' + '2Bz4IH+fIx' + '8/fvhXaAXD' + '9kmv3sx7mO' + '6lx/rv+W6g' + '0+7Vy7ojR0' + 'rb2cvHbL8Z' + '8SjYw9+uCl' + 'QxLXGekaZR') + ('A1FVnYeAB6' + 'ip5UZLv0uf' + 'ev+D9lD0/Y' + '0/K+/NisTx' + _0x575bc6(_0x9ba47a._0x48763f) + 'b3t74gf+ck' + 'QKfl+uPxPg' + _0x575bc6(_0x9ba47a._0x38c427) + 'i16Y/dRORh' + 'sdxjPyX6vj' + _0x575bc6(_0x9ba47a._0x3fed98) + _0x575bc6(_0x9ba47a._0x207b0e) + '0wDSAVIJcz' + 'iUpNdMXlc6' + 'P/Z+gaGrJS' + 'uyYng+6+jR' + _0x575bc6(0x2b9) + 'FMUnuQ5fjG' + _0x575bc6(0xab8) + '+d6tu8fHuJ' + '9eubehwuEd' + '+JjYyltK/m' + _0x575bc6(0xada) + _0x575bc6(0x2cb) + 'wQIzBolltr' + 'Z9xw2k1L/k' + _0x575bc6(_0x9ba47a._0x7ee850) + _0x575bc6(_0x9ba47a._0x5572d4) + 'GDmKBrmYEY' + _0x575bc6(_0x9ba47a._0x35b79d) + 'TwL2hJKeZd' + 'b/EV2S19l1' + 'd546y/JbYq' + 'AHSMgo7cSC' + 'TxrAsZGZFq' + _0x575bc6(0x1ba) + 'LmD+e/eMIm' + '+C/zcC/91P' + _0x575bc6(_0x9ba47a._0x5e5059) + '25uZ6UdWzQ' + _0x575bc6(0x7b4) + _0x575bc6(0x7bc) + _0x575bc6(0x3ed) + '+Pl/VTrihb' + 'dXSH8k97K3' + 'xCpvrnw6fg' + _0x575bc6(_0x9ba47a._0x4d2235) + _0x575bc6(_0x9ba47a._0x1e81a2) + 'S9GuQ0fHzv' + 'outR9P0v0n' + 'XW9ty60YUN' + 'kA/gwOc+Hz' + _0x575bc6(_0x9ba47a._0x29414d) + 'Z7RMkDpB2L' + _0x575bc6(_0x9ba47a._0x51e4c8) + '3n3nDt19uK' + 'QOpGak6gOL' + 'h3ScM/DJHb' + 'khFEeJZ4yq' + 'fQ/TQlwsqT' + 'Q6fekl45r/' + _0x575bc6(0x306) + '5Ubvso80AM' + _0x575bc6(_0x9ba47a._0x20219a) + _0x575bc6(_0x9ba47a._0x3a9c02) + 'MPvLoBo3ba' + '7fwIocnOvP' + _0x575bc6(0x37e) + 'tpyZNd+YHL' + 'blim3XOZ7X' + _0x575bc6(_0x9ba47a._0x105419) + 'Q9wFGtiPxI' + _0x575bc6(_0x9ba47a._0x306c35) + 'rKx4/6ujyf' + _0x575bc6(_0x9ba47a._0x465d1f) + 'Z/VYUm6M92' + _0x575bc6(0x4ff) + _0x575bc6(0x5d5) + '0V5OeLL67P' + '8lUDFPghxs' + 'ieCdWQC7Fc' + '3M0ZueAPZL' + _0x575bc6(0x877) + 'biiKbC8KDF' + 'xgRwf71hUx' + '6JoKSOFUO3' + 'QNBbsG0KWB' + _0x575bc6(_0x9ba47a._0x395b77) + _0x575bc6(_0x9ba47a._0x1b96de) + 'pv5m7qR0U1' + 'f66JZl+wgA' + _0x575bc6(0x161) + 'PxaPeVW2m2' + _0x575bc6(_0x9ba47a._0x47ec56) + '/X0WhIqz6F' + 'aywUYbdcNq' + '6znt75wUW/' + '/UQSBn96R2' + 'rXqH7RZEim' + _0x575bc6(_0x9ba47a._0x444501)) + ('dST4owwTb5' + 'TVs06b+OtW' + _0x575bc6(_0x9ba47a._0x31e25e) + 'm28hayx70S' + _0x575bc6(0x2db) + 'wdR1JMMSI+' + 'Huy9ekR49+' + '6ZjLgz/TDP' + _0x575bc6(0x919) + 'vriTc/0Z+9' + 'detM3373uO' + 'NsgT8Qo7Rk' + 'Hf10haCLEZ' + 'xgSkItTUIA' + '+aHSCt2R7k' + 'hwybdPSaV8' + '0H0/7LWP8z' + 't6Pw55/QJo' + 'cDbnsJcp1e' + 'hsQPmfM2OR' + 'r1dp9vGXW8' + _0x575bc6(_0x9ba47a._0x54b5df) + '5/U/l8r6P6' + 'GN2DWzcTtT' + _0x575bc6(_0x9ba47a._0x53daaf) + 'X3l32YPxqH' + 'XgL1gjwFg5' + _0x575bc6(0x86c) + _0x575bc6(_0x9ba47a._0xa65a4a) + 'mBcKJQ+Rr7' + _0x575bc6(_0x9ba47a._0x2d5cec) + _0x575bc6(_0x9ba47a._0x4062dd) + _0x575bc6(0x76e) + _0x575bc6(_0x9ba47a._0x11f164) + _0x575bc6(_0x9ba47a._0x4e1592) + _0x575bc6(_0x9ba47a._0x178d43) + 'lr0lrU8jGB' + '8ioo80HMHA' + _0x575bc6(_0x9ba47a._0x9acaf7) + 'sW23dLTmB5' + 'UHvoweI2o6' + 'qF1HwYTQup' + 'hBjMKYkRf3' + 'LA92lQgTTF' + _0x575bc6(_0x9ba47a._0x49ef19) + _0x575bc6(0x1a2) + _0x575bc6(0x415) + 'LHzDAC6rzm' + 'zPbMddmQnt' + _0x575bc6(_0x9ba47a._0x35f055) + _0x575bc6(0x4cb) + _0x575bc6(_0x9ba47a._0x110934) + 'uTy0jaWy47' + '5+I/vLXM+9' + 'ylhjDWAeon' + 'AUTBFKZ9MQ' + 'YDYIoZ0vyp' + 'qnAkzqdCV9' + 'KRYcMyxGve' + '/+q4SNTZw7' + 'ri5s8LCzv4' + 'WwK5x1hJ+I' + 'A97lepjury' + 'pg2+uzeELq' + 'qy8OXPOu6q' + _0x575bc6(_0x9ba47a._0x2d701d) + 'FF+LnRl7RR' + _0x575bc6(_0x9ba47a._0x5b92b6) + 'h3FHPRhqmg' + 'd9q57uVwpQ' + 'rEnNZsN0SU' + _0x575bc6(_0x9ba47a._0xcf7bbb) + 'fGQ+oRLVkP' + 'VJwHW46l7F' + 'mLmTp/P+H8' + 'zf47JwWgE6' + '+5s991HtoN' + '3ZndkNmW3A' + _0x575bc6(0x233) + 'jtjLm7ePMR' + '2dvq8lfd6j' + 'dL4vt9OfnN' + '4J0JnZllv6' + 'VTdAJ/7G+f' + 'PIjpUvHG39' + _0x575bc6(0x2e1) + 'dPuSQSN4/l' + _0x575bc6(_0x9ba47a._0x3bf7d5) + '2KCMq5XcOC' + 'pKs3YrfZgt' + 'HUjM5cKx2t' + _0x575bc6(_0x9ba47a._0x16b5d6) + '7+b+jXCbVV' + 'S2+W7+ATFp' + 'rfsEozMwHa' + 'cyGzvaysHT' + _0x575bc6(0x30f) + 'ch3cn6atNX' + _0x575bc6(0x33f) + 'J3lOP3P4yq') + ('Ad/NVoTAJA' + _0x575bc6(_0x9ba47a._0x1d86b7) + 'fjXp7x1h4t' + '+SjRlI5Dmq' + 'YRky1r//K8' + '95MIpGoQTP' + _0x575bc6(0x2de) + 'U4PNWijU1f' + _0x575bc6(0x22c) + _0x575bc6(0x6cb) + _0x575bc6(_0x9ba47a._0x58d647) + 'ZOn7Ae49Zt' + 'n3vcj2prFB' + 'y/e+WHjb4w' + _0x575bc6(0x646) + 'OB3lMNvZ/W' + '+PvjR26h9u' + 'XhHopWYNQm' + 'kAIbSAifbq' + _0x575bc6(0x5bc) + _0x575bc6(0x39f) + 'XW1QjBsYIE' + _0x575bc6(_0x9ba47a._0x216b5d) + _0x575bc6(_0x9ba47a._0x359372) + '9uD6AJX5V4' + 'LbPduPIEYo' + _0x575bc6(_0x9ba47a._0xe638e0) + _0x575bc6(_0x9ba47a._0xeb0abb) + 'g+cK1FIWWY' + 'yn78XfYQv+' + 'GmzfPcvGr8' + _0x575bc6(0x63d) + _0x575bc6(0x939) + 'e+DmH3GmoC' + 'kOND0Idvxn' + 'hyDwqfUZ9r' + 'RQEFKIxVr6' + 'bOctZ5mHe4' + _0x575bc6(0x10c) + _0x575bc6(0x6bd) + 'iTPsbBZZCJ' + 'WhPZE6C9DM' + 'CRC5C5Nxfd' + 'Hv5Pd3rpJ1' + 'ssI/MWvJSV' + '2y/B2tF+BM' + 'Cb47f8Z0Hz' + 'BX8buftKS4' + _0x575bc6(0x68e) + 'B0m/5IN/7N' + 'c77XHgCdh5' + '5OG8rnqwp0' + 'IxpPmDdug2' + _0x575bc6(_0x9ba47a._0x5d8183) + 'nrKEkulu8I' + 'lAcgs3p0nl' + 'fXm5vb8kZn' + 'ZcYy0W2rBj' + 'MzfzPRKMJV' + '7c/NbDf7o+' + _0x575bc6(_0x9ba47a._0x383228) + _0x575bc6(0x97d) + 'gfRTlcxhC3' + 'A2TmMicJXr' + 'w9f9/UHSN3' + 'jyA6nwZpoR' + 'FpoVAakBF5' + '0y97b+QRPi' + '+VDwZTwa4F' + 'IXUWQDDYBR' + _0x575bc6(_0x9ba47a._0x282e28) + 'zju7PBzire' + _0x575bc6(0x672) + '4Oi+yumnAH' + 'mPQVoTaDws' + 'C3PtmWZHdW' + 'LX5vpzY+25' + 'MYxM+A2TOB' + _0x575bc6(_0x9ba47a._0x53b02c) + _0x575bc6(0x79e) + 'XfBu/btLn+' + _0x575bc6(_0x9ba47a._0x189603) + '+aWQshXUPo' + _0x575bc6(_0x9ba47a._0x2a32fe) + 'czBs5rRgZG' + '6aT22NFWxC' + '1Ln1m+/94X' + 'zipd+ankUq' + '3qITl/XF4+' + 'Fd6Lvl7z+u' + 'uKIFyQn19Q' + _0x575bc6(0xa64) + 'RqAF8ZQFmu' + 'A/wFuQ5zDK' + 'mMqrY91+Gv' + 'uutt76zPPp' + 'q+xvmC7qyG' + _0x575bc6(_0x9ba47a._0x5dc294) + _0x575bc6(0x883) + 'xXpo9/28zg') + ('OkpYVGo4zi' + _0x575bc6(0x376) + 'DI8832YNAO' + 'vF3rEnDTBu' + '28HbrhXtoR' + 'OKt0jfBwYe' + 'PY7uTDf7iE' + _0x575bc6(_0x9ba47a._0x18b030) + _0x575bc6(_0x9ba47a._0x4333c9) + '0rP8e/jyMe' + 'yvllWzCBOz' + 'GfrpBn5Kqx' + 'b4punbuKZb' + 'LBiAwp2aoC' + 'kTYebZgUfr' + _0x575bc6(_0x9ba47a._0x588272) + 'SUxiiS9chk' + 'daeidzPBhL' + _0x575bc6(_0x9ba47a._0x3c15d9) + 'OGHmsWaPmm' + _0x575bc6(_0x9ba47a._0x212429) + _0x575bc6(0x390) + '91x1wK9jFp' + 'i3/66rStr3' + _0x575bc6(0x3d4) + _0x575bc6(_0x9ba47a._0x20f81b) + 'cV1L+0TgfI' + '9BlBGH+ZPx' + 'clFG7PXL8f' + '1e1a8jFMp+' + 'JLGgEw+/25' + 'EIPcXMDwDe' + 'Tme6syry4O' + 'jFzh0eIsv4' + 'F8HOKSz9Gm' + '8D32QJfdrg' + 'LkBaAZIDVk' + 'zechTwvm5h' + _0x575bc6(_0x9ba47a._0x78bcc5) + _0x575bc6(_0x9ba47a._0x1e2507) + 'yxvv9Khs+i' + 'FuiQsymar+' + 'W1QCuQ6fSt' + _0x575bc6(_0x9ba47a._0x4f58e2) + '4bwXUe5G/X' + _0x575bc6(_0x9ba47a._0x1d01b7) + 'utSENB3fpC' + 'Fe7azxrL5z' + 'N1BH1Sudzr' + 'z42RwuxNq7' + 'f9YMWShwkJ' + 'pTHpg4SdRH' + 'f2kl7N3qWx' + '7co0D9iDwG' + 'u4Y7nkZXub' + _0x575bc6(_0x9ba47a._0x45b907) + 'FyVMqybXSW' + 'OY55vyKA+q' + 'axxQ2gUQBT' + 'M20l0/xPjn' + 'pDXwxjz9HN' + 'uxfMR63k8A' + '3ETw2Vm+uo' + 'Lvvp3ZUX6d' + _0x575bc6(_0x9ba47a._0x457a79) + 'FqDK1UzOJp' + '7rfewHbzVY' + 'zYcAYEQcQj' + 'AMHlwV+pgj' + 'YBWCdrUHzS' + 'Y7GhL2w/ko' + _0x575bc6(0x72a) + _0x575bc6(_0x9ba47a._0x9a790f) + 'm/IdnD6xhg' + _0x575bc6(_0x9ba47a._0x3b32d4) + 'iCDt4uJg69' + _0x575bc6(0x7cb) + 'F9vvwCTALQ' + 'FEkPDPE44N' + '89Kdz4JwHr' + _0x575bc6(_0x9ba47a._0x3cf131) + 'vczA5lZe7d' + 'xHTc5fNV72' + _0x575bc6(_0x9ba47a._0x2eb7b2) + 'b0V5+gO1S9' + _0x575bc6(_0x9ba47a._0x48f32a) + 'fz/BiG6kqN' + 'C7fuDXefJa' + _0x575bc6(0x3e2) + 'Do4QEiECgC' + _0x575bc6(0x607) + _0x575bc6(_0x9ba47a._0x489ca4) + _0x575bc6(_0x9ba47a._0x5a69c4) + 'XFWe6rB09/' + 'Jvv4Qhf7Of' + _0x575bc6(_0x9ba47a._0x12ae77) + 'Wuq3LqM7fe' + '9aPb2xhfMx' + '42hJMjC9po' + 'zhewDHZy1F') + ('A8aUAsBdrk' + 'Zw4mC0FK7G' + _0x575bc6(_0x9ba47a._0x1a6070) + _0x575bc6(_0x9ba47a._0x4ba8f0) + 'p+1dnBuujj' + 'OLmg3KSbVC' + '9IANCYjbSU' + 'HeDDZ4rYmA' + _0x575bc6(0x803) + 'Udps3pf1rz' + _0x575bc6(0x762) + _0x575bc6(0x9db) + 'SrA6rRRL6r' + 'epq+1Xv7WK' + '+B09jdmsmZ' + _0x575bc6(_0x9ba47a._0x5269d2) + '3yi0eHGpbx' + 'iK/snhvDO1' + 'QLJCxEPjUI' + 'wGsJzPZoyo' + 'Ttf3zprMjh' + 'xo/j112/kO' + 'NNiiBJCjRC' + 'TiuAAg6fiF' + 'CBQIEoggLQ' + 'UCCV8nF9bP' + 'YCywVVlw7p' + '+HBV3oLnX8' + _0x575bc6(_0x9ba47a._0x27438e) + _0x575bc6(_0x9ba47a._0x308c94) + 'x/Whf6AKaN' + _0x575bc6(_0x9ba47a._0x4dfdf6) + '9c/AYYL2/a' + 'Qy50jNz86h' + 'AIDQ+FAOKg' + _0x575bc6(0x73c) + _0x575bc6(0xa96) + 'DFPgS3FoMI' + _0x575bc6(_0x9ba47a._0x4bff43) + 'nTkLdMHg2c' + _0x575bc6(0x621) + _0x575bc6(_0x9ba47a._0x3b0743) + 'FDAnTm/t78' + 'WRYG0QgP4x' + 'uYn37rvb68' + '6fCxKToLNW' + _0x575bc6(0x1a3) + 'AAWZBIUxk0' + '9pEEoLpVHx' + 'sjfk5BGH7J' + 'DWjKwbKGah' + _0x575bc6(_0x9ba47a._0x139d3b) + '34x5FbzgJd' + _0x575bc6(0xb01) + '5VC0BUZGUA' + 'qIxQG0FR+q' + 'DK+KARlIaG' + 'f/NktvX+qQ' + 'r1fyiP6n7B' + 'm1Hmh0yW8y' + _0x575bc6(_0x9ba47a._0xaba1eb) + 'suZP9OlB02' + 'anD8r8uVW5' + '/tystvkEfQ' + _0x575bc6(0x465) + _0x575bc6(0xb07) + 'I/m3T5WIWH' + 'oJ8FJoq7gl' + '1aF9Tbg2ng' + _0x575bc6(_0x9ba47a._0x322617) + '+KtWzhSxfP' + 'm154eWOJQw' + _0x575bc6(_0x9ba47a._0x23f90f) + _0x575bc6(_0x9ba47a._0x3b4039) + 'n/d6gqQIGC' + _0x575bc6(_0x9ba47a._0x3de89a) + _0x575bc6(0x4ed) + 'qP2FLPRpkF' + 'erIddc5kdm' + _0x575bc6(0xa4b) + _0x575bc6(0x270) + '++AHsDS1GT' + 'ZXteO+DyNP' + 'T7oZNNyvIe' + 'ChMAoPQCqG' + '1Nh/baCBph' + 'YHYTOFI9x+' + 'y9Hi78TDve' + 'N3WtMPr1qy' + '9MAcKHmLB6' + 'zKUAhFscSW' + 'KjRqUiO+rI' + 'iNfSUbiqjS' + '1hyKb1GB55' + 'qbP+VfvbJY' + 'bMqfZTHiUC' + 'zIlAihQtlP' + _0x575bc6(0x590) + '7brLn+rPmt' + '+xAqLa/O96') + (_0x575bc6(0x8b4) + 'atm00DAwuS' + 'OwVT1iP0Kt' + _0x575bc6(_0x9ba47a._0x36aec1) + _0x575bc6(_0x9ba47a._0x4753d5) + '91u+C9ajw9' + '9YVmiD8B7y' + '5fjbo5yxO1' + _0x575bc6(0x204) + 'eKhZixoApF' + 'oUw4YCAkVM' + _0x575bc6(0x78e) + '37RDukTO49' + 'eKdmAUd1rs' + 'MIriV2761X' + 'jBw6bctB5U' + _0x575bc6(0x323) + _0x575bc6(0x243) + 'yrj/523t7G' + _0x575bc6(_0x9ba47a._0x200fbe) + '3hht4eBoPP' + _0x575bc6(0x55f) + 'XKqfcNNiW+' + _0x575bc6(_0x9ba47a._0x17363e) + '8oKmApCren' + _0x575bc6(0x13a) + 'xjAchFelED' + 'I7AkI00Vke' + 'FHiK0F0Fgg' + 'cQ0KKW0AUH' + _0x575bc6(_0x9ba47a._0x4aa675) + 'tIE3ABmZ6F' + 'wAjCfnOp/t' + 'HoZg5wNkWf' + _0x575bc6(_0x9ba47a._0x1ff2d5) + 'Yl830Xd/fd' + 'O/SghBSzFN' + 'j0yy/CO7Jx' + 'XRtWUYqieQ' + 'haksbejwCV' + 'sWtHx7rNHI' + 'YtsbVvwlQi' + _0x575bc6(_0x9ba47a._0x5270ab) + 'KPTJXVUoal' + 'AAObcxm31D' + 'lSNCI2SLIK' + 'HMQl4HlQKh' + 'pLTO9k7Ovz' + 'pSfr724J1j' + 'WaCq3/lx+A' + _0x575bc6(_0x9ba47a._0x3ba374) + '195qdvqcWd' + 'UovKoZbaHN' + '3/j6pssbrG' + _0x575bc6(_0x9ba47a._0x178428) + _0x575bc6(0x2e3) + _0x575bc6(_0x9ba47a._0x2cac56) + _0x575bc6(0x903) + 'xr2RQm+bYV' + '1ggooFBY8d' + 'hdr33oM7td' + _0x575bc6(_0x9ba47a._0x384f76) + _0x575bc6(0x817) + 'yugqigAF2a' + 'IhnhXRCwpQ' + 'Igo+ocalLF' + _0x575bc6(0x47c) + 'PfdslEUscm' + 'MsGe2v9vvB' + _0x575bc6(0x4a2) + 'OaS5xZCDGx' + _0x575bc6(0xaf0) + _0x575bc6(_0x9ba47a._0xbeca7b) + _0x575bc6(0xac1) + 'ZRFM9i6bvG' + _0x575bc6(_0x9ba47a._0x1fe7e4) + 'RvjTWpfNwK' + 'EhFxRypAr3' + '307jcq99VV' + 'CooKIMooNA' + 'UFaekDRZaE' + 'PtGsSKCqIi' + 'O+hEJapApI' + _0x575bc6(0xab) + '6atf3Dm7tf' + 'YPElfztGVZ' + 'ny8furfh+9' + _0x575bc6(0x1ee) + _0x575bc6(_0x9ba47a._0x27badd) + 'TqrSF7iejf' + 'xaC0EojQB/' + 'L7yzPD2qgR' + '201DxoDqba' + 'IVgcwH27HF' + _0x575bc6(0x64f) + '/Q+JiCAiay' + 'JYd0XvGG4J' + 'iIIks2SqIo' + 'uoZiRFdCig' + _0x575bc6(_0x9ba47a._0x32303a)) + (_0x575bc6(_0x9ba47a._0x211922) + 'yplFtKpA/H' + _0x575bc6(_0x9ba47a._0x363845) + _0x575bc6(0x820) + 'Ewkb5mjMcB' + _0x575bc6(0x403) + 'evlalfqK6u' + _0x575bc6(0x51f) + 'qk8p2wnUfF' + _0x575bc6(0x512) + 'O0NB6CITvY' + 'u4K8XS3GzM' + '5+kzr46r/Z' + 'fiUjRnyGDI' + 'vsyEQsuXKd' + 'cGFZTADZwU' + 'Sw8bIhjhR0' + 'BoyliKCaKC' + 'Vtiuni1Xq8' + _0x575bc6(_0x9ba47a._0x29a1ec) + 'PFDtLc/lF7' + _0x575bc6(0x9f3) + '0Ac3/s1Emr' + 'p3y08gXtsp' + 'Vl1WWQtBIp' + _0x575bc6(_0x9ba47a._0x5d368e) + '47+h9uaoQn' + 'Xvn9Vat2hY' + _0x575bc6(0x3f4) + 'PzOIYXjocP' + 'EIy7el66Ku' + _0x575bc6(_0x9ba47a._0x2e6313) + 'tuRCQUfWN4' + 'RwAxSQg1R+' + 'NEF4CIhFdA' + _0x575bc6(0x191) + 'zUsm59dHHj' + 'TTPf7ZDXr2' + _0x575bc6(_0x9ba47a._0xb4609f) + 'i4/lzpw86u' + '0tvQc20aym' + 'QbUUfsgqd0' + 'DZJzOvBP7d' + _0x575bc6(_0x9ba47a._0x102b72) + _0x575bc6(0x4f8) + '93p0nk+DEL' + 'l5mk99hdgh' + 'FZM6qdCssR' + 'QAHx7zx9JV' + _0x575bc6(0x8a7) + _0x575bc6(0x2ad) + '0CJ1rY/m11' + 'bFcI+KkGPR' + '9moySiEFRE' + 'Z+WWkExUfi' + '5uZNaz79p2' + 'f772/cC8tg' + 'e/n2T2c3rn' + _0x575bc6(_0x9ba47a._0x359aa3) + 'v+BCSP/cnm' + 'utGpuVlYlh' + 'F5bjKGvxgR' + 'Pe3jptBeGR' + _0x575bc6(_0x9ba47a._0x509db6) + 'HPysqrFyxQ' + 'rM1H4xoGiw' + '9P/XzFX/S4' + _0x575bc6(_0x9ba47a._0x3d6b23) + '7X7HxQSzUd' + '3f30a9+Wh8' + _0x575bc6(_0x9ba47a._0x5e4e54) + _0x575bc6(0x29b) + 'cYCKBcsf0B' + 'S0kDKEB432' + _0x575bc6(_0x9ba47a._0x4f5df4) + 'dkFszBF0rb' + _0x575bc6(_0x9ba47a._0x3fd044) + 'pBBsozpGwV' + _0x575bc6(0x471) + _0x575bc6(_0x9ba47a._0x23ceb0) + 'XK9E4E5i/L' + _0x575bc6(_0x9ba47a._0x3b1906) + 'G+/1zBfFaf' + '4+kZayrm0P' + 'ZMJpkYaQFg' + _0x575bc6(0x264) + 'aW96BwQfbn' + '37/bghG2oL' + _0x575bc6(0x98e) + 'YcJBNCW/Fd' + 'YVSyqbDjRn' + _0x575bc6(0xa25) + 'Xbl2C96oZH' + 'p+Sr4F5+db' + '1S0kiY+YBK' + 'FXAPqyaib5' + 'z2+0OjOVLo' + _0x575bc6(0x1bb) + 'uSmsLdhxdl' + _0x575bc6(_0x9ba47a._0x4848c2)) + (_0x575bc6(0x9ac) + _0x575bc6(_0x9ba47a._0x47a809) + _0x575bc6(0x12c) + 'sWz/M/qMbX' + _0x575bc6(0x48a) + 'f8jP+f5/12' + 'e+VgwYfOK/' + 'eO+Jq96qoR' + 'hRxMIuMBI6' + '9L3fdk77/N' + _0x575bc6(_0x9ba47a._0x56499d) + 'FgccbfFtff' + 'XO0hXMLLJq' + 'zu4L5usU3H' + _0x575bc6(_0x9ba47a._0x3691c) + 'yQ7Eqoiqa9' + _0x575bc6(0x454) + 'KF0eRbY2/h' + 'ryd+T6msKV' + 'o2bOmlQrgE' + 'LAQtd/2m6b' + 'es8+B0ATvq' + 'G1HJgJXNbm' + _0x575bc6(_0x9ba47a._0x12da5a) + _0x575bc6(0x788) + '5/7uxluQsC' + _0x575bc6(0x1de) + 'OcSExSJoIq' + 'Y1Q14H33rj' + 'QfO33K/tb7' + 'Q7sywxnsRy' + 'c6fCc7BIIa' + 'IiUq6wiyOC' + 'KO4q2vur/Q' + _0x575bc6(_0x9ba47a._0x43e2a2) + 'b65c/5dP/2' + 'm1zff6V/BW' + 'oDRxYyml1L' + _0x575bc6(0x39c) + 'DosKINAonX' + _0x575bc6(_0x9ba47a._0x1992f7) + 'pnKgtCwrKw' + _0x575bc6(0x97b) + _0x575bc6(_0x9ba47a._0x38a781) + 'gvVTFt69zU' + 'srik5WicZe' + '0Oz41cejSo' + 'd2qQGjOZIN' + _0x575bc6(_0x9ba47a._0x1e9bad) + 'jFZ/K6xb5z' + '7rKFFERaHk' + _0x575bc6(_0x9ba47a._0x46d2fe) + 'sijFWTIl8Q' + 'DkCrHZ/jYF' + 'oUNStREam+' + 'bumQ89zeFT' + _0x575bc6(_0x9ba47a._0x147e99) + '/SjMvD8ad8' + 'ki+Gg85nhx' + 'MX30ddo8Fr' + _0x575bc6(0x9ce) + '4W9Zd62ZEY' + '37XkTeZT9D' + _0x575bc6(0x750) + 'tWUB6jMSNu' + 'qfRdc817Kc' + 'OD0Ds0zoPd' + 'HrRHnR88Pc' + 'h5/UY83GtO' + 'nT6PY3a8Kk' + 'zYuW5XeHp4' + 'NapYbf0rF5' + _0x575bc6(_0x9ba47a._0x228a54) + 'rp0aOnfKef' + 'qufS3mTUnc' + 'uKTXrQnOPW' + 'ERuGdV4ZY5' + _0x575bc6(_0x9ba47a._0x449b07) + _0x575bc6(0x66e) + 'yWNOTTUALW' + _0x575bc6(0x308) + 'ls1dX15dkA' + _0x575bc6(_0x9ba47a._0xde8f0f) + '/9M7svQVin' + 'Fxaqq9wQUf' + '71TiPfYgb+' + 'zYIbbjRNM3' + 'oOv5q1JyiW' + 'HlC1AZK7vK' + '9i+4CkSFRu' + '+6sW0ngbwC' + 'PsPy7kazu1' + 'FUTDvl9e1V' + _0x575bc6(_0x9ba47a._0x1cb8ea) + '+naP+i9C97' + _0x575bc6(0x239) + 'b5VDJJz59z' + 'TWrt83l8fl' + _0x575bc6(0x8fb) + 'hk6yYeuUFW') + ('3zoKwRgJRV' + _0x575bc6(_0x9ba47a._0x25aaa8) + 'v/sr1H52E0' + 'wJHfFa67zl' + '4kmoZj0qor' + _0x575bc6(0x644) + '+SrtH0X5hR' + _0x575bc6(_0x9ba47a._0xf31409) + _0x575bc6(0x565) + 'uEIrdu1zaK' + _0x575bc6(_0x9ba47a._0x4a00d2) + 'mMXrLS1ko9' + 'dFSk9N074/' + 'Hxn39M3X5u' + 'qCVFciq8DT' + '6GNdwwsX5D' + 'aVt2dWDaQn' + '2nzr9Bmf39' + 'ZIGMGZSC6r' + 'AvPqbecaxp' + 'O9Z4oLbtLv' + 'De5Qj2KQGL' + 'RAFg3eeGCw' + '1fQN6JpH4h' + 'v5BtXQJ6Ii' + _0x575bc6(0x6be) + 'QR58T/DPl5' + 'sGOfTp/q+o' + _0x575bc6(_0x9ba47a._0x4d640f) + 'Uksf27PCek' + 'qaJhYVvMtg' + _0x575bc6(0x927) + '2SdWrq/p+v' + '9Y+FRiBVUF' + '1dVYWuzb7Z' + 'dzvgvOdN+b' + 'hhGVSA8nKH' + 'hY4sthAIDQ' + _0x575bc6(0x5e8) + 'd00Sh8RH5K' + _0x575bc6(_0x9ba47a._0x1a5b79) + 'MfDtsIrhyf' + 'NagDLTUFVE' + 'WSwpdri7Dj' + 'k1K8DBHwHs' + 'WWJx7FrffS' + '2/cvnWsaGU' + '0tI9134tUi' + 'QsX2rbXU1U' + '2SFjdKZ2wo' + 'Ipoy7+qZdv' + 'K4MCFE9Aqp' + 'nxMGbRNk6f' + '4wUsMsHkJs' + 'JtnNuzTXpO' + 'w+qJt1ovfQ' + 'SGVqycXvRX' + _0x575bc6(0xb03) + 'NNe74l1q3W' + 'uWQx2rki05' + 'KNUNtAF01T' + '0i+OkI1jd/' + _0x575bc6(0x5fe) + 'wZixtruWek' + _0x575bc6(_0x9ba47a._0x13b494) + 'rsrCt3fKLg' + 'AnyJQKtRMW' + 'Thlavm4331' + 'adWQ1QBQVl' + 'ZQxtVvnWKb' + 'cTqELZDPil' + 'rLqcLLJZPy' + _0x575bc6(_0x9ba47a._0x4e521e) + '7876ZyB9KM' + _0x575bc6(0x89f) + _0x575bc6(0xcf) + _0x575bc6(_0x9ba47a._0x38790e) + _0x575bc6(_0x9ba47a._0x5bef4c) + _0x575bc6(_0x9ba47a._0x3dd53a) + 'N2+Kz/r86T' + '3vwF8/FIl4' + _0x575bc6(_0x9ba47a._0x531f99) + _0x575bc6(_0x9ba47a._0x582371) + 'b6H0feeRnF' + '0xn8SsSrHW' + 'pZHM9ulmmo' + '9bEgiav1BV' + 'DpToHy1scr' + 'LIKZRVL15Z' + _0x575bc6(0x259) + _0x575bc6(0x827) + '1R8Bhg4/eN' + 'n3ozu6oxqf' + '/uftDVd9O7' + _0x575bc6(_0x9ba47a._0x18a848) + _0x575bc6(_0x9ba47a._0x26e09f) + 'rktVCQJ/fc' + _0x575bc6(_0x9ba47a._0x577bb7) + 'pX4QmA9drv' + 'fW5IJFSzLA') + ('iDQBXtzYor' + 'xgUerOnt9f' + 'XW1DjH/fDN' + 'iEFcwl/05W' + 'eNpgpwKujy' + 'C7WmhdecW/' + 'MmIflAystZ' + 'OQGLLs6+Ww' + _0x575bc6(_0x9ba47a._0x25f42e) + '4l5anZnp5M' + _0x575bc6(_0x9ba47a._0xa9b7d7) + _0x575bc6(0x12d) + 'ufLil6SRyZ' + '/hAU3g/fDu' + 'sq+B9lR3yD' + 'njB1fZinEU' + 'GDm3573rI5' + 'Sc3FLXT1WL' + _0x575bc6(_0x9ba47a._0x3bcb66) + 'ZZEIRQRCQK' + _0x575bc6(_0x9ba47a._0x138710) + _0x575bc6(_0x9ba47a._0x127392) + 's//Gyh78Fx' + 'yzQD7e/Hbv' + 'LpdQr4REFU' + 'FSEKC655f8' + '8qr6+trLq9' + _0x575bc6(0x882) + 'hVlXXbmpnd' + 'NPvFaiCZ70' + 'J5WRU0AQ9W' + _0x575bc6(0x282) + _0x575bc6(0x4f6) + 'gyIp73Pv28' + _0x575bc6(_0x9ba47a._0x5aad5d) + 'XJeZwbzRRs' + _0x575bc6(_0x9ba47a._0x2e72d1) + _0x575bc6(0x879) + _0x575bc6(_0x9ba47a._0xbabcb2) + 'gTJBUObbRa' + '4a4uyF0P66' + 'wqrJUy5wu9' + '3uxedVwfZw' + _0x575bc6(_0x9ba47a._0x1a80b0) + 'aLejnA2EaR' + _0x575bc6(_0x9ba47a._0x369aa9) + 'nhn4fzvVU0' + 's6y8HLVs9a' + '3l5eubN2y9' + 'qKolC5VOOe' + 'a5qgub7rxs' + 'y6pee3fPB/' + 'KCxIU2W15/' + 'eX9OaHut9d' + 'vW1IZN8xat' + _0x575bc6(0x119) + 'EyaC0oapBq' + _0x575bc6(0x80c) + 'Xmq9i5aZvt' + _0x575bc6(_0x9ba47a._0x473f88) + 'eq3/MBHEqK' + 'O6/elqNr+X' + _0x575bc6(_0x9ba47a._0x1c2cab) + 'ypROvDwFsq' + 'li5gzfOIxT' + 'VVRKiqh6L6' + 'a3PLd46qLZ' + '66EcA+Coaa' + 'vLoI08f/5H' + '3HzfrUzHoj' + 'iu4tZtHX7f' + 'UohM6h5cZj' + 'nxAVh2/Yld' + _0x575bc6(0x3ca) + '+70xEzQg2J' + '8LYsMRcdFF' + 'ctoW3ZFMxN' + 'B99MO8Qiqg' + 'ZQ5frePeNW' + 'Wscs2zTPTP' + 'WJ9TwLzCii' + _0x575bc6(_0x9ba47a._0x33e533) + '7RJ68AoIs+' + 'f3dXHFzo9c' + 'qKq863OPr0' + 'Z/9YPO77s6' + 'oIRcvYMCuq' + 'yzatn462Ii' + _0x575bc6(0xa34) + 'mRc9Sh9+51' + 'iP5uTrDHlY' + '2elYt4AUJ6' + 'IqBlSQJMCQ' + 'S6NYK1LRCa' + 'I4qSCSAvdS' + _0x575bc6(0x30b) + 'zN3Ufrnr34' + _0x575bc6(_0x9ba47a._0x4e730f) + 'YGiohQJRpT' + _0x575bc6(_0x9ba47a._0x4fc733)) + ('Q5z0IKkKQ9' + 'yRFSJ8tynU' + 'rq6Lhd+o9+' + 'eXPmnnWbmU' + 'nMzF9AzUP/' + 's3Xa5raxrM' + 'AYoKC6Wqe+' + 'v3xg4i9/fj' + _0x575bc6(0x2d3) + 'M35WTgPLuB' + 'n7EDeurGq7' + _0x575bc6(_0x9ba47a._0x3fc79b) + _0x575bc6(0xf2) + 'LaJtqnA51v' + 'a0Nz380Pet' + '88ymomiBDD' + '5REpVGEBtl' + _0x575bc6(_0x9ba47a._0x17dd25) + 'NvfA4WAV2s' + '6lopE95U8A' + 'KoZpFOOC+8' + '8sNqOhbKqw' + 'BzdNVlZQBz' + 'NnG68owPZX' + 'E1ukAFc+a/' + 'tCBislRcsu' + '+sYZ3d9UHq' + '7RBXsGguEX' + 'VQ0YKyejWT' + 'rGKUVMEF8U' + 'mWRze9u9ZZ' + _0x575bc6(0x54f) + 'UFSy4QcvS9' + _0x575bc6(_0x9ba47a._0x7ed0d9) + _0x575bc6(_0x9ba47a._0x45d5db) + 'B4CJK7z+N7' + 'V7lnGXD5ll' + 'aqCiqmK81e' + 'sC2A3cD++7' + '+f2mcbStCm' + _0x575bc6(_0x9ba47a._0x1b3b8e) + 'M3fbzG6aBV' + 'CNSbGyzDay' + 'xgbPPmehzW' + 'cN6+VTv7ww' + 'qgsYw+/LZw' + 'hoQY1r3Ujx' + _0x575bc6(_0x9ba47a._0x53893a) + _0x575bc6(0x545) + '9sKHz5saXz' + 'h77EQT7zSi' + 'NVBrhBdBqX' + 'CIqiwClfjM' + 'vPOnt3+wyf' + _0x575bc6(0x995) + 'yyqmvECLmq' + 'S3rj/wEHjH' + '0uoy9NKrmD' + _0x575bc6(_0x9ba47a._0x543898) + 'fCQqql1OK6' + _0x575bc6(_0x9ba47a._0x13fc62) + '3wHr+b9ZmE' + _0x575bc6(0x4ab) + 'GoHgH11IJE' + 'y/AigU7wQl' + '2qK8Ky53X7' + _0x575bc6(0x992) + _0x575bc6(0x450) + 'aQMfzNPkQW' + '8fdlIitCLH' + _0x575bc6(_0x9ba47a._0x569293) + 'k4cRegqqBC' + 'oReIsVFF5/' + _0x575bc6(_0x9ba47a._0x19b288) + _0x575bc6(0x245) + _0x575bc6(_0x9ba47a._0x5e833c) + 'sjWTj2TVho' + '+eNZw9prvT' + 'xuKY4YAUIQ' + 'AWFDKz7e5f' + _0x575bc6(0xb0f) + _0x575bc6(0x575) + 'f8RXu84Nxn' + _0x575bc6(0x5a8) + '0sXlHCPkxl' + 'H2LyqZIXXH' + 'Kppo2evPke' + _0x575bc6(0x605) + 'BAVVXTkmVd' + _0x575bc6(0x71c) + _0x575bc6(0x1e4) + 'lZW/ZtozbW' + 'UsqloNZXO8' + 'Vy2w6T+Fs4' + _0x575bc6(0x322) + 'bl9foYAXc+' + 'asxmXTB/6d' + 'mMqR0W6sZF' + _0x575bc6(0x5fc) + '2SZJRaYE0V') + ('fbIIOYo0i1' + 'SE5FwDsm8h' + 'VUdSi1Dt2r' + _0x575bc6(_0x9ba47a._0x46b12e) + _0x575bc6(_0x9ba47a._0x400c51) + 'oke5m9/+cC' + '3XRquNiAxq' + 'GUrSdI1ugs' + _0x575bc6(0x6f1) + 'k+1/PHtYfy' + 'W0F9SKHiwU' + 'aFQUqMUaCA' + 'KA5uuzOkV+' + _0x575bc6(_0x9ba47a._0x43bf62) + 'JVSNPvCkwy' + _0x575bc6(_0x9ba47a._0x1ba056) + '0qgigTxsSA' + 'qStZpCLxge' + 'ygumNT5krW' + 'VyWrCrhE6n' + 'IIgFFPsPCT' + 'l0a+4rzosl' + _0x575bc6(0xac7) + _0x575bc6(0x5d3) + 'mZUYJO6ai/' + 'wFnDmlfRPo' + 'cISiuaQ1jG' + 'gxIGBFCBNu' + _0x575bc6(_0x9ba47a._0x4e14a8) + 'BflTcFpWb7' + _0x575bc6(_0x9ba47a._0x455445) + 'E8lmFrxhex' + '2gVtQ0IkEF' + _0x575bc6(_0x9ba47a._0x558681) + _0x575bc6(0x1e6) + _0x575bc6(0x3b7) + '3cXTOgaQ3X' + 'H6B4sbzsPq' + 'ApW6Zu8DEf' + 'Hq2cbNiw4e' + 'xh3Q6vkQkA' + 'OcyAaDTSx3' + _0x575bc6(_0x9ba47a._0xaf0f4c) + 'FBVRrFQgWx' + _0x575bc6(_0x9ba47a._0x4b7f87) + _0x575bc6(0x38f) + 'ypuBSf4gYF' + 'hZqM5ocIPs' + '3rdVV665D5' + 'ZUoX3bZqDB' + 'AFKvCT6xIG' + 'plwDUf6Oo+' + '9ta9zcBsjF' + 'UH0rwK3Vc+' + '7muRCLM6LU' + 'am6x6h1nBe' + _0x575bc6(0x26b) + _0x575bc6(_0x9ba47a._0x2bfe11) + _0x575bc6(_0x9ba47a._0x57407c) + 'pgB6tbKEeT' + 'oFFEl0md5N' + 'WThBQGaXKw' + 'TFBwqRxQrR' + 'Q0S3YSjXKa' + _0x575bc6(_0x9ba47a._0x5c87b8) + _0x575bc6(_0x9ba47a._0x19d222) + 'hiInVDrarK' + 'lBJFGL+X/X' + _0x575bc6(_0x9ba47a._0x5d6531) + 'bFKGvizLTL' + 'aXQfOdWxZu' + '2MTeUAZzl7' + '0Az5wNrHm3' + 'rljxs97KmQ' + 'v8uN0kcBk5' + _0x575bc6(_0x9ba47a._0x20450e) + 'ETUJFihhoB' + 'Ik/YtfrLKZ' + 'SDApcoKTK4' + _0x575bc6(0x2f5) + 'iM7J5AZFF0' + '5UGVykONpP' + 'hUGaKWrNoG' + _0x575bc6(0x63e) + _0x575bc6(_0x9ba47a._0x1d09e) + 'PJG/L/PAKm' + 'yYZYvpVSdF' + _0x575bc6(0x583) + 'svPxtYm7sW' + _0x575bc6(0xb0d) + '4YjcXGQ52I' + 'RY2KC3PF6K' + '1rM0HTKN4A' + 'RRVbXWIjdd' + 'Y1b100h+4C' + 'uRbNBZBBdI' + _0x575bc6(0x42d) + 'MnKq1wFSLT' + _0x575bc6(_0x9ba47a._0x3298cb) + 'ohIIu8ehqK') + (_0x575bc6(0x327) + 'Dzaw1gCUhk' + '0Tpr//+Drm' + 'oifQQpbvzi' + _0x575bc6(_0x9ba47a._0x1e9896) + '89CnPgtYYW' + _0x575bc6(_0x9ba47a._0x43b669) + '/i2yeVMd5X' + 'RqLpVZ9Y5X' + 'EGWATcCBqD' + 'QKikihoFbK' + 'Fks5r6px8U' + 'aoAC+jtALL' + _0x575bc6(0x1f7) + 'XGJKRSAUqd' + 'OInAX3cQWS' + 'CqqAIojVSF' + 'ElAUmXhdcp' + _0x575bc6(_0x9ba47a._0x1b6817) + 'GlnRlOvfWz' + 'Hbx8JMRjYH' + '5vj4mSHniy' + 'xlV7VvldV2' + 'ZljJ1/p0PU' + '7Xv6r+Uds0' + 'qmNx2Saa7y' + 'unMKk+XiKD' + _0x575bc6(0x549) + _0x575bc6(0x34f) + 'QSH2aAU3Ni' + _0x575bc6(_0x9ba47a._0x7a3f77) + 'QAaViqzYCy' + _0x575bc6(0x596) + 'r12igohKWA' + _0x575bc6(_0x9ba47a._0x473c28) + _0x575bc6(0x694) + 'JkozWSjUZM' + _0x575bc6(_0x9ba47a._0x3d05c8) + 'oqQ+fuxVth' + _0x575bc6(0x753) + 'UFHt0pvHzT' + 'WaArACSX3v' + _0x575bc6(_0x9ba47a._0x106b99) + 't/exTzzvdq' + 'zf0FpXzO2M' + _0x575bc6(_0x9ba47a._0x2f635c) + '6JotujuqBA' + 'cWNshm452m' + '6JUwVEHWqx' + 'Sq+2VgGvqB' + 'BBRH5QBFmR' + 'XSrmvIj5U6' + '/gYtELQXC4' + 'JZ/gEGXwCn' + 'UyoSDSZEn2' + '1EgyrQHTpH' + _0x575bc6(0x643) + '0d6vrr4Vqp' + _0x575bc6(_0x9ba47a._0x12423c) + 'UceS6ONnTe' + 'dUCKNmXfjY' + '/pX7/5E7HR' + '7e/ulvP1yx' + 'ft34Ohq/ru' + '3KH8V2Q4NI' + _0x575bc6(0x172) + 'o4qzObiiJB' + '7aLIIIsikS' + 'VFpIriUKBW' + _0x575bc6(0x7b2) + 'LEWWoLrfNR' + 'qpIi8Hkqna' + 'i3aYUCTvAV' + 'aaRHBkmS3T' + 'UAStyyNDyk' + 'yVte3ohGcR' + 'lAeRbwW4gD' + _0x575bc6(0x564) + 'ywkq+PS/DK' + '9CYe7MOIdn' + 'iHjZac74O9' + _0x575bc6(_0x9ba47a._0x317330) + 'fjwQVzY6zw' + 'Has/BID4+H' + 'l3FIxH5BJG' + _0x575bc6(0xa47) + 'BT+5zIwwRK' + 'ZPlq+f77LT' + 'qakURgkQ0C' + _0x575bc6(_0x9ba47a._0x4e2724) + _0x575bc6(0x5d0) + 'CjWlENt9l2' + '3ciFnlrG6N' + '7Vin7/aLPr' + _0x575bc6(0x430) + 'xJR0tuhqh/' + 'ylcxd7m/3X' + 'L5oxLfzqL2' + _0x575bc6(0x503) + _0x575bc6(_0x9ba47a._0x12c358)) + ('JuUwVkEMZT' + '+uRTXCutUw' + _0x575bc6(0x6fb) + _0x575bc6(0xac3) + 'AJ+F6BciDV' + 'y7NaOBNVZV' + 'GQRVa5SJU6' + 'LxWJWIuh7Y' + _0x575bc6(0x758) + 'poZIzpU1Wk' + 'EV+uysgA2e' + 'a0uHw1ntZe' + _0x575bc6(_0x9ba47a._0x1cd513) + 'CmeCVT4Mvn' + _0x575bc6(0x402) + 'NjenR54Kh3' + '8xfA8UPjM9' + _0x575bc6(_0x9ba47a._0x14a187) + 'FYDegTr4Tv' + 'arfG/RwvjB' + _0x575bc6(0x8ea) + _0x575bc6(0x58d) + 'LcJSqyWIRI' + _0x575bc6(_0x9ba47a._0xc45522) + _0x575bc6(_0x9ba47a._0x19a68c) + 'UBBEAg5QBC' + _0x575bc6(0x601) + 'yFAKboiR4p' + _0x575bc6(0xa3d) + 'qzzr1q0Lf9' + 'lcnVlVVQCk' + 'c+LZwgpgcg' + 'BkQzzbMWsu' + 'DxAGeKo1Gw' + 'D2ZF25Y9dE' + 'w9KVnEqc7n' + '7s0UMjc86N' + 'b/L+kepc3C' + 'UBccrg47Ba' + 'WnY2SLJCHO' + _0x575bc6(_0x9ba47a._0x48b3cd) + 'QOl4ICKtdV' + 'dKTiCKItMS' + '0U1kGXx1aA' + '2HwW0DdwRo' + _0x575bc6(0x4e2) + '4fqGJQmc++' + '3kc5zWlsQC' + _0x575bc6(_0x9ba47a._0x32097e) + 'LzseyM7UWo' + 'Ss8hkR+IUt' + 'nG2DVlv2C+' + _0x575bc6(0x525) + 'KOHmLTBZLn' + _0x575bc6(_0x9ba47a._0x2860d8) + 'FFHXtfzxvR' + 'jHj5eW1BCH' + 'rCyh6J0LIk' + 'iuWpESj1yh' + 'QWT1Ti8Qcb' + 'mzUgCvCBVQ' + _0x575bc6(_0x9ba47a._0x1ce503) + 'CILWoej+SR' + _0x575bc6(_0x9ba47a._0x1a575c) + 'lkzr47B1qH' + 'y528TsbMqy' + '4vb4xB13FJ' + 'qlOsM8jnSK' + '31ANmtrQDZ' + _0x575bc6(0x17b) + 'ehZu+Zkzmn' + 'vFZQMUDhA1' + 'GJm2bNrH44' + _0x575bc6(0xb1) + 'ujTLsmj1rP' + _0x575bc6(0x8b1) + 'UNhDLvzu2R' + _0x575bc6(_0x9ba47a._0x37a131) + 'hzJJXKDuoE' + 'waGinyiqQi' + '0BnxMAatyS' + 'lYShFGrcHi' + 'le/NaYwzNI' + _0x575bc6(0x9d8) + 'C3v5hy/9wy' + _0x575bc6(0x6de) + '7+Lf+GhQ7a' + 'mp2dCRCfDw' + 'C/CI9rhfA4' + _0x575bc6(0xdf) + 'D4FHChuKVx' + 'fb/T6Zp94S' + 'Mrtxyomrwi' + _0x575bc6(_0x9ba47a._0x36213a) + 'eyPr7OW1dK' + 'cReDSmqY24' + 'uxZQ2sP0LL' + _0x575bc6(_0x9ba47a._0x500f91) + _0x575bc6(_0x9ba47a._0x45bbb9) + 'us+tNVSGGl') + ('LqAWuyFt3/' + '3pe6FzBIUV' + _0x575bc6(_0x9ba47a._0x40181e) + 't8Gt+VPOFC' + 'v5ep2Tt2fl' + 'jo2zAvFMbH' + 'x5dZh3IUDY' + '9sPfAWyZvS' + _0x575bc6(_0x9ba47a._0x1f46f1) + _0x575bc6(0x379) + 'x9WHfyoSZC' + 'V91dCuG9ER' + 'rvcJ6X4TfT' + '3MJdhXEgE+' + 'thQp0AWtOn' + 'D2+4YrciSn' + _0x575bc6(0x437) + 'rAogV9SaC2' + _0x575bc6(_0x9ba47a._0x5bbdf3) + 'JHxUtPafXT' + 'NmFzQZKYBq' + 'KNu04fxPfo' + 'eaatmHacyz' + 'Pxs8PHZlxf' + 'n7xvDAt2KQ' + 'Z+SeH3SAbc' + _0x575bc6(_0x9ba47a._0x278dbf) + _0x575bc6(_0x9ba47a._0x3793ff) + 'p1XolVdfJL' + 'uS1f2dNna9' + _0x575bc6(_0x9ba47a._0x58c72e) + 'y6TvcbVbab' + 'xjrCtjzewN' + 'Fr01r56LEW' + '7su6+U1fNo' + 'VdMlHlB8zh' + _0x575bc6(_0x9ba47a._0x42b063) + 'ili6RsAqgb' + _0x575bc6(_0x9ba47a._0x310f2f) + '/zNsN2VnQV' + 'V5GTp21eWO' + 'v8Xvnzt747' + 'rl2MJ3lnj4' + 'nfVvfzHSnA' + 'mt2e2t7Tcf' + 'HvskhPc8Hx' + '61efy8CY1U' + 'Fh2eOsUlyk' + _0x575bc6(0x79a) + '9Zy5vTmxZv' + _0x575bc6(0xa49) + _0x575bc6(0x65e) + 'pZi6G2fPsj' + _0x575bc6(0x9ea) + 'vXbWzecHiK' + 'TmPgVIEsJ5' + 'gRqQPB6QRS' + '6wZQeA2ou0' + _0x575bc6(0x46a) + 'gGD6/oZ3qz' + 'ZhPBGgsQrK' + 'qJfO1JzgzM' + _0x575bc6(_0x9ba47a._0x9c222f) + 'yDx9H7dWyj' + 'a1Ap/pP3xu' + '6pO2cWD716' + 'ybgMPKZwwQ' + 'yeAEcCuVcB' + _0x575bc6(_0x9ba47a._0x253f4a) + _0x575bc6(_0x9ba47a._0x4964c6) + 'v/cMOMCxes' + 'gzvCra8VPu' + 'MaOTH58Be/' + 'W7PF89G7O9' + 'qXR9R1Gi2h' + _0x575bc6(0x22d) + _0x575bc6(0xac0) + 'Ta7xSBD2yJ' + _0x575bc6(_0x9ba47a._0x37d902) + 'hqsxIo4MXF' + '4NVXlmONLc' + 'xtUQ+BXb3m' + _0x575bc6(_0x9ba47a._0x1b330f) + _0x575bc6(_0x9ba47a._0x16a0f0) + 's9e0zj+bnr' + 'Rt2wxjEXtF' + _0x575bc6(0x8c5) + _0x575bc6(0x330) + '27CFAbZwLo' + _0x575bc6(0x202) + _0x575bc6(_0x9ba47a._0x436f61) + '0fqL1nHZT1' + _0x575bc6(0x515) + 'C+H2Q088uM' + 'lv4kTBW+Ok' + 'NQ6MxoAqeS' + 'UwY0TA7ZYl' + '2e0GqcZW43' + 'Z74sVvbbA0' + 'bWjra2Yv9+') + (_0x575bc6(_0x9ba47a._0x300fc8) + 'w1FDln132U' + 'Tgzr2fdaWn' + '9M7DOQqZ+7' + _0x575bc6(_0x9ba47a._0x4dba7b) + _0x575bc6(_0x9ba47a._0x5af224) + 'OJmcLYt1Ba' + '92TPj7BSFF' + 'drthFDBtIS' + _0x575bc6(0x5ab) + '3McOs49vWP' + 'S20XzSvfcN' + 'ePvHmEuuoo' + _0x575bc6(0x6f4) + _0x575bc6(0x136) + 'PSiZ5FKoAX' + 'CHTfLjh++f' + 'OGZjHgqxi/' + 'ZmEfqLuKWs' + '+kfcq70fYa' + 'bgu2O96J15' + 'TqG5qmtMkZ' + _0x575bc6(_0x9ba47a._0x2ba00a) + _0x575bc6(0x17a) + 'L7hlQpSdhf' + 'hsLY5wSBRh' + '5YUr0UWvnM' + '1uxWbgxGzL' + 'OBO7D7oZ+N' + '2/P872zhXz' + _0x575bc6(0x228) + '0aGBlNbrTJ' + _0x575bc6(_0x9ba47a._0x1e3e52) + 'OFICXmdJpZ' + 'OCzRkTwpig' + 'dIMngVSWLP' + 'wzN5Yvorlx' + 'gAPReWPj4y' + _0x575bc6(_0x9ba47a._0x4abee7) + 'wk//zK5U+8' + '48/K7ZWuic' + _0x575bc6(_0x9ba47a._0xb32828) + _0x575bc6(0x164) + 'Z84lZWNrBR' + 'FUqdLRKAMQ' + _0x575bc6(0xa65) + 'VqYD9mDLP3' + 'g47mR3Zrq7' + '/ZcvE4jJ0D' + '/A5s4exRFs' + 'cXtDfW630n' + 'h9fiAlXcXq' + _0x575bc6(_0x9ba47a._0x14c82d) + 'SYm7Xtc8IK' + _0x575bc6(0x67f) + '6rZG1ejNVV' + _0x575bc6(0xa0b) + _0x575bc6(_0x9ba47a._0xae9b17) + 'FiT30e6fIY' + _0x575bc6(0x9e5) + _0x575bc6(_0x9ba47a._0x273ac3) + 'vL5A4q2z/T' + _0x575bc6(0x80a) + '+SPovm1Plt' + '+xsDD2PlUU' + 'kdZJItaaCC' + 'CJIq2QKwQ9' + _0x575bc6(0x96b) + _0x575bc6(_0x9ba47a._0x5abdb7) + 'HQKA7Slb2G' + _0x575bc6(0x6c9) + 'OODuA7Pzfl' + _0x575bc6(0xa7a) + _0x575bc6(_0x9ba47a._0x450526) + 'tF8HyPR2sj' + 'LKPtLXk8bg' + 'DZUwO+Hwjr' + '3dU7l1qtmV' + _0x575bc6(0x514) + _0x575bc6(_0x9ba47a._0x95325a) + 'l/zgwsGcTD' + 'U47+6lKA9F' + 'cBlraDjb7/' + 'aqUNVnCNBx' + 'th1sc8V3PR' + _0x575bc6(0x958) + _0x575bc6(0x2d1) + 'rjqhz0NVgY' + _0x575bc6(_0x9ba47a._0x3ef694) + 'g6zbmo1fkY' + _0x575bc6(_0x9ba47a._0xf5fb08) + _0x575bc6(0x50f) + 'zbOn1q4/Qt' + 'eZ5HbDGBhW' + 'R8FbICRFAB' + '1YxXkh1mbe' + 'J2d5htWCiN' + _0x575bc6(_0x9ba47a._0x3f56da) + '8/+ePdl7z3' + _0x575bc6(0x139)) + ('J11a8h/byH' + 'rM4WqK+7/Q' + 'zY2NT/6N7H' + 'Pn37rnuTsq' + 'a/Antc+QQo' + 'eToWC/9j1A' + _0x575bc6(_0x9ba47a._0x4c5dfe) + _0x575bc6(0xa18) + '7Ni3FBn4SR' + 'JOLFwCAGnF' + 'hQSQTqhS/s' + 'BmGzW7Nb9+' + 'vZkA2kZUTh' + 'zbAnOwy/Q6' + _0x575bc6(0xafe) + _0x575bc6(_0x9ba47a._0x36bf5a) + 'RaIoIqO6Gk' + '0iWguoXCCF' + 'DkYaz/RdvJ' + 'WiOJ0b01F1' + _0x575bc6(0x831) + 'YkxLxjzNfV' + 'oWn2yd2WIG' + _0x575bc6(_0x9ba47a._0x32e55d) + 'vpmueNZrr2' + _0x575bc6(0x85c) + 'OOzzZGnmZd' + 'gntLVTqLfv' + 'zTFePiwMUF' + _0x575bc6(_0x9ba47a._0x4b42e2) + 'AAtQRfYI35' + '0q7Wlveljj' + _0x575bc6(0x7d7) + _0x575bc6(0x7cf) + _0x575bc6(_0x9ba47a._0x48d950) + '7Jurtx1qYQ' + 'YminlBdgIG' + '3iolhZTU4V' + 'NTYWxXaU1p' + _0x575bc6(0x487) + _0x575bc6(0xa4e) + 'BSePw8krmj' + _0x575bc6(_0x9ba47a._0x1f7467) + 'QEk6zuiI1f' + '9q7ddSlhhY' + _0x575bc6(0x36a) + 'qxfRMBV44q' + _0x575bc6(0x567) + 'L5+iuyCOFR' + '4iLXgUtm5W' + 'sIlAJDqbhq' + _0x575bc6(_0x9ba47a._0x3b770e) + 'Af/W1qfj9W' + _0x575bc6(0x9bf) + '0/sP2w58q3' + '/7rnwuxXCj' + _0x575bc6(0x7e0) + 'CuASjLxgGR' + 'vD7XW4aov5' + '7YB1bDKU1k' + _0x575bc6(_0x9ba47a._0x125622) + '0y7iKOLk8Q' + _0x575bc6(_0x9ba47a._0x3d340e) + _0x575bc6(_0x9ba47a._0x403651) + '37zxArqTxy' + 'zQmCCjFz2p' + _0x575bc6(_0x9ba47a._0x415c05) + 'kuLPjeYy7P' + _0x575bc6(0x479) + 'dB8pLkycu+' + 'tiD2QLQ7PH' + 'tHJj2tlfzm' + '7Nhv0bhdFN' + '+21Dzzkn1j' + _0x575bc6(_0x9ba47a._0x59dedd) + 'JDp4HT6QcO' + _0x575bc6(_0x9ba47a._0x12bf80) + _0x575bc6(0xaa7) + _0x575bc6(0x3d5) + 'QvHTG0ZeUR' + _0x575bc6(0xfe) + 'kFUfTl6Z18' + 'Ec9Zh5OvfR' + '14AlDGt01X' + 'OrKSLVj5fL' + 'aINPPgTQJU' + 'x15ESJgC2P' + 'GIdwe8TGbE' + 'OrsrIuBfuZ' + 'FeRpfs3roy' + 'cJkK0zHdsn' + 'o/bzVeL0Vr' + '7zy9lE3yBt' + _0x575bc6(_0x9ba47a._0x962b24) + 'iaULRckiqd' + 'LEqMxkRJnT' + 'VH3+WGsI3W' + 'uD0ggc0zWd' + 'n1UPZPOIoQ' + _0x575bc6(0x978)) + ('u6bvmncaEx' + '88O/+RouJo' + 'g1zzvzfVh+' + 'ufUEpAm03H' + 'mH4OkKKbNs' + _0x575bc6(_0x9ba47a._0x804a7e) + 'xBSlcUgCIW' + 'eUDELDLBDC' + 'sKY/dO36uR' + _0x575bc6(_0x9ba47a._0x891354) + 'OJbd6Nzk3g' + 'mNkKzS3Sri' + 'PlCyiPMlh2' + 'sp3qpKLqra' + 'jDPyfITjre' + _0x575bc6(_0x9ba47a._0x3ffdda) + 'CNmE0LR/5K' + _0x575bc6(0x52e) + 'EBOH75yqo7' + 'cJYdW9O2nR' + _0x575bc6(0x67d) + 'fwMsX8IRBD' + 'YIZuKxDhjb' + 'ee7aafOIxq' + 'xB1sNqNM5h' + 'i4pTkCswxi' + '87mS3VsPrT' + 'SLFyeLopuz' + 'W7XWM2hLF7' + _0x575bc6(0x708) + '4zT6oVZASC' + _0x575bc6(0x361) + _0x575bc6(_0x9ba47a._0x2100e7) + 'owkmrgEo/v' + 'umJzjKM+ZN' + 'IME9C5rp7U' + '8iGQf6LjdW' + 'ZJJPB5Yg1i' + _0x575bc6(0x438) + 'SVQkCQF1PH' + _0x575bc6(0xaee) + _0x575bc6(0x6ec) + _0x575bc6(_0x9ba47a._0x25fd49) + 'ABQtR0nF9o' + 'MIRfWrP404' + '0psWxDgdt6' + _0x575bc6(0x8b5) + 'PWWX+piFj6' + 'LrK6pQUiui' + 'svI5mTT2Sa' + 'Didt0Fbhqx' + 'QRhs4JGA2/' + '3QHeN3T0AM' + 'yLvm3QXQyK' + 'Qx6Hv+eXjO' + '5r7IWoycjy' + _0x575bc6(0x981) + '1heWGE+XLw' + 'EG90SDSofz' + _0x575bc6(0x770) + _0x575bc6(0x3fe) + 'CYVSpUPEsH' + 'dCExET8VUe' + 'VmfGWhzTAl' + _0x575bc6(0xa42) + '/bJDCLToi2' + 'aZYs1Lljsw' + 'rEQxc+VFAU' + _0x575bc6(_0x9ba47a._0x24eeae) + _0x575bc6(0x35a) + _0x575bc6(0x506) + _0x575bc6(0x261) + 'A6C3WkLf1b' + '7YODiiWuq2' + _0x575bc6(0x63c) + '0XyGEgCWoL' + '22JIpZRh04' + 'nRvYwZz+GX' + 'X+4P078lxe' + '1C+JMpEGSc' + 'GqECcoIsoV' + 'nwS+ilqvk2' + 'a7sgRIH5G/' + _0x575bc6(0x695) + '7M9tz2KhDK' + 'Mp9Ss++eS6' + _0x575bc6(0x25d) + 'KiUsZ0mQsH' + _0x575bc6(_0x9ba47a._0x4f3303) + '7oPNAzCx/v' + 'dvUeRYhEu4' + 'D85dbhtqGs' + 'OjINHIOeBO' + _0x575bc6(0xa0f) + 'ad2qRAuubt' + _0x575bc6(0xb2) + 'EA8CAC6zTn' + _0x575bc6(_0x9ba47a._0x33fc43) + 'xPTDQpIipb' + 'EGUHU5EO8D') + ('l5qN7XCl2P' + _0x575bc6(_0x9ba47a._0x270e49) + 'j+0pb6n9wK' + 'b/8tFxOmWL' + 'WFMUWUaAoQ' + _0x575bc6(_0x9ba47a._0x221091) + _0x575bc6(0x64b) + 'ES3YPJItJt' + '11UZ8lS877' + 'zSYTvHq96f' + 'DiRUA0IO9+' + '0lGEhlMfGz' + _0x575bc6(0x257) + 'N8+8tg/mwF' + _0x575bc6(_0x9ba47a._0x3a9ffc) + 'AGYE1qkTtJ' + '+X/BujhqzQ' + '1EmxbJQwo9' + _0x575bc6(_0x9ba47a._0x453e25) + 'F0GYyN4D3K' + _0x575bc6(0x159) + 'RPUGgJl8Xt' + '6EWiZrmbsq' + '4KwG/I5WFx' + _0x575bc6(0x23f) + 'kDCgHJaZJQ' + _0x575bc6(0x775) + 'mt/99HD6jK' + 'lbpnN/Pjx3' + 'MeU18t77UP' + 'bx4Mue3HLo' + _0x575bc6(_0x9ba47a._0x3d29d3) + '9b0k/U4wDD' + 'Eohi+ZZhWv' + 'zos4ZFs/Y5' + _0x575bc6(_0x9ba47a._0x2e43c9) + 'msgKtyCY4f' + _0x575bc6(_0x9ba47a._0x55e40b) + 'WdvKuxPf7F' + _0x575bc6(_0x9ba47a._0x1315f4) + 'dl0zyTruHY' + _0x575bc6(0x8fe) + _0x575bc6(0x800) + 'NbiptLG73B' + '7kYFSt4AGQ' + _0x575bc6(0x400) + _0x575bc6(0x87d) + 'Pv5yV0zn9f' + 'cqU25IaFiD' + _0x575bc6(0xe6) + 'G2mCw/holP' + 'AIyILVEL96' + '8Hm561YvSb' + 'WYhURLtdME' + 'ZpsPAmKK46' + 'VlUoKYQSkw' + '6Non8qvwno' + 'zI+dWQQmyQ' + 'oKNA8zn/EX' + 'FKQqyicv4g' + 'XwOvddEbPU' + 'IFQ383KgBt' + 'zexGYl763u' + '5jYRzqKHrX' + 'vWbgxUmnn9' + 'vU+PzjiGrr' + _0x575bc6(_0x9ba47a._0x29f4d9) + _0x575bc6(_0x9ba47a._0x384b9e) + _0x575bc6(0x6b3) + _0x575bc6(0x818) + 'qdxcQMMjhE' + _0x575bc6(0x112) + _0x575bc6(0x22b) + _0x575bc6(_0x9ba47a._0x21bd12) + 'A3m8flzBFM' + '8+bNE+bmlO' + _0x575bc6(0x134) + 'zGhQlEoF1I' + _0x575bc6(_0x9ba47a._0x4b974c) + _0x575bc6(0x4f7) + 'm5wxAGqYZI' + 'EgXQmJW0Yu' + '07925Oipu2' + 'U2tN/h3RWy' + '0I6HAXHFNC' + 'YC6dPPwUzi' + 'zDumKBbwBa' + _0x575bc6(_0x9ba47a._0x23a4c1) + 'iiv9jDuvIV' + 'WWLWRC0QB8' + 'b/aoE6FJnl' + '7FxsHoGsst' + _0x575bc6(_0x9ba47a._0x247143) + _0x575bc6(0x77a) + 'JIHFQGKPW5' + 'XQ63z1tXK4' + 'BKllcIxAWq' + 'E7RxPOY1bD' + 'bWGG2TqA1q' + 'GI000vDpyL') + ('vgqWwu7AYC' + _0x575bc6(0x145) + 'kO/mM7P2MP' + _0x575bc6(0xda) + 'RqW8lQGtx6' + '3BpE4ejKvX' + 'RJPs+m9yAL' + 'sqI0wHC2hB' + 'hdTkVUVBmz' + '6RWKIigUcD' + 'NTQgXJib+i' + 'stFHXlGUJF' + _0x575bc6(_0x9ba47a._0x150f6c) + 'VESCSrUq1F' + _0x575bc6(_0x9ba47a._0x33b981) + 'KQ17sHLG7Y' + _0x575bc6(0x6ed) + '3ijUXt9aPN' + _0x575bc6(_0x9ba47a._0x21791c) + '38VD9PCG2c' + 'derpnmvXBy' + 'wiZs/3deYF' + 'rnWIxLTnx+' + 'dduOS+diq7' + _0x575bc6(0x118) + '29F0VAUFhR' + _0x575bc6(0xa4f) + 'qmrYrjYCF6' + 'hg2GQKFLsC' + 'yEsaimrQjs' + 'b3CyiYTYUx' + 'ATxu8LgNSc' + 'w+onpiDOTx' + _0x575bc6(0x3d9) + 'Ez7tR3uMEz' + _0x575bc6(_0x9ba47a._0x5b1870) + '+77LOvjktJ' + 'xk6heAztOe' + '0KuOcEUp4E' + _0x575bc6(0x516) + _0x575bc6(0x576) + _0x575bc6(0x106) + 'ESSiVZAVlm' + 'EQdMt1EfVn' + 'phlEHG4jy3' + 'T5QIEYCUKE' + 'VQo9aAlyig' + '1Mkl2GVm0m' + _0x575bc6(_0x9ba47a._0x1f9b44) + _0x575bc6(_0x9ba47a._0x14a1a8) + '6JAZh23wxL' + '9hSN/8eej+' + 'ri7jCFnbt3' + _0x575bc6(_0x9ba47a._0x17c7f7) + '6ffTU/7Jpx' + 'Gv/1SNqMay' + _0x575bc6(0xa58) + '8Po/mvGjE2' + '0p6MwhOja7' + 'iFl5+BycrE' + 'wCx2cwB5zw' + 'SFHZgZRMeI' + _0x575bc6(_0x9ba47a._0xd645e0) + 'NREWjk0M2y' + 'hEAE1hGaMS' + '4Pa4QTW37R' + 'q/csNti3Sb' + 'Lq/bMPcukR' + 'LwlNa4PRML' + _0x575bc6(0x5a9) + 'z+ZI57wira' + 'AL9403L87h' + 'x4bDyILlln' + 'S/0YVJRAik' + 'xkgCWNCkFj' + _0x575bc6(0x704) + 'ArkkSdCvjU' + 'uLm5ZeO6dR' + _0x575bc6(_0x9ba47a._0x2f6255) + _0x575bc6(0xaaf) + 'zgFRyyVKLA' + 'Epk6fSpQhY' + _0x575bc6(0x57e) + 'Y2OmsFuSqR' + _0x575bc6(_0x9ba47a._0x5b5163) + 'to+8iOjbPY' + '47YRYPSPka' + '8Lj3LD9K+h' + _0x575bc6(_0x9ba47a._0x541ac7) + 'usZ8M13wRh' + '9hT6Vn33S8' + _0x575bc6(0x89a) + _0x575bc6(_0x9ba47a._0x2c84c7) + _0x575bc6(0x3ef) + 'fUra5dzc1f' + 'rt0+N/PVu4' + 'afY5oDGtIa' + _0x575bc6(0xaf6) + 'zAWCva+qLS' + 'WqAKqreAOT') + ('iArg1DK8nu' + 'sBFb45N+t/' + _0x575bc6(_0x9ba47a._0xb95104) + 'Q0Vm8Lg9bl' + 'rjjjY88eqP' + 'T3aITNIPnj' + 'yRsAZd8+Aq' + '6wvh66MJAi' + '45lr59D9+1' + 'rUr9mNSJoB' + 'IVBAnL2QVH' + 'gYAgKkChqn' + 'FdgiITgVga' + '1j6/cXf+xZ' + _0x575bc6(_0x9ba47a._0x462e2d) + 's89cgezgZK' + _0x575bc6(_0x9ba47a._0x57e18b) + _0x575bc6(_0x9ba47a._0x25d219) + _0x575bc6(_0x9ba47a._0x250103) + 'Hkm2gdvNUI' + 'NNltxg47v+' + '8wGp97hLgZ' + 'e5NvBAqccN' + _0x575bc6(_0x9ba47a._0x1e2dc2) + 'BhVAOrd/tJ' + 'lKyBdZjl3I' + _0x575bc6(_0x9ba47a._0x38d139) + '6CDSJh4Whc' + 'OHp5RHBQAv' + 'FUR0ugQAtw' + _0x575bc6(_0x9ba47a._0x206a23) + 'AlVF/91JZd' + 'f6xoa5jyy4' + '//eTn71o5c' + 'G6irferG5g' + 'XlqFrOKWpo' + 'KM5S8lkiBg' + 'UhIZrEQr5m' + _0x575bc6(_0x9ba47a._0x4e0dfd) + _0x575bc6(0x28f) + _0x575bc6(0x289) + _0x575bc6(_0x9ba47a._0x5b05ef) + 'ilptjH1pST' + '1oXENuWeio' + 'cjtjnypLXr' + 'Fi5Yjvx7DA' + 'tf8GmCp68O' + '/2L+nIWmiB' + 'FqwcqH5ZKM' + 'ljvTOFKlpL' + 'g4j28J2n8i' + 'aP5Ld7FPJv' + _0x575bc6(_0x9ba47a._0x204ee2) + 'MXcRhyYuxh' + _0x575bc6(_0x9ba47a._0x235977) + 'o2tSJQYN91' + 'wStWI1kIRq' + 'ldmbgOEma4' + '1kg+jqSxry' + _0x575bc6(0x7d0) + '7y7e6wqeGJ' + 'o5mnOAep5o' + _0x575bc6(0x52d) + 'ZyGs2Tiy0P' + 'bv6EmlcdRy' + 'ddi2Zu6CCb' + 'txH3ENTJj6' + 'KmpFVKxFHn' + _0x575bc6(0x54d) + 'UE2cyixB96' + _0x575bc6(0x19f) + 'qutuzmbOHN' + _0x575bc6(_0x9ba47a._0x7ace5d) + 'lYAhWC02Xt' + 'PYvShFS6G0' + 'BlC7srLaGp' + 'DMH8w37Syt' + _0x575bc6(0x98c) + 'vNaCpLsov8' + 'fuWF3iOnKP' + _0x575bc6(0x622) + '/pVA9AkLF3' + 'S/0XbxO9ET' + 'xDHaGhe3fb' + _0x575bc6(_0x9ba47a._0x15f878) + _0x575bc6(_0x9ba47a._0x1aa72b) + 'SaepeDG6UJ' + 'UgIr04iiqE' + 'JsvIsKXkH4' + 'XNmtx+7NW/' + _0x575bc6(0x8d4) + 't0y9skJRUD' + _0x575bc6(0xad4) + '2kRtlw3AKk' + 's1VLKV1ril' + 'sARyjbtUqg' + 'GQhVZzDCJQ' + _0x575bc6(0x93d) + 'iPRKVSqxTf' + 'WWu7/FRQIT') + ('/r+B1r0PVn' + 'Tz4qaNZ49R' + _0x575bc6(_0x9ba47a._0x3b54a3) + _0x575bc6(_0x9ba47a._0x3829e6) + _0x575bc6(_0x9ba47a._0x179d73) + 'jU4FF2JjCt' + 'XoqhKhMcfI' + 'fjhRIqO6Ra' + 'bD4XqSynMb' + 'th4tn4dczC' + 'wujERKqlfC' + '7C1GJkxjWe' + 'Iag/wY6/ew' + 'hm4b2k3os3' + _0x575bc6(_0x9ba47a._0x258a62) + 'ayaH5ZaLxL' + 'CVeCQr0OeW' + 'wk/8p6zjmr' + _0x575bc6(_0x9ba47a._0x2ca54b) + 'CCy3mBqiZT' + _0x575bc6(0x29f) + 'u14AyyEahX' + 'eu7oW//ewe' + 'G62laPsY1e' + '6uWszue0H1' + 'gShKmBtRcr' + _0x575bc6(0xa5a) + 'okhVRW6EHB' + _0x575bc6(_0x9ba47a._0x55ba5e) + _0x575bc6(0x9c6) + _0x575bc6(0x7a0) + 'UXKoFKjAg4' + 'ZhFwBPqc3D' + _0x575bc6(_0x9ba47a._0x47bb77) + 'pBAren1iRF' + '3KXYZvGpA4' + 'uBPKW2SKxu' + '8yV/PDVUyC' + 'k9jrB9cf+Z' + _0x575bc6(0x313) + 'cXb75+nOP8' + _0x575bc6(_0x9ba47a._0x2b1876) + 'XwbvgjgVyQ' + _0x575bc6(0x707) + 'ApHaNKCUUM' + 'G+2DlpPb40' + 'NJi9PXkGjQ' + _0x575bc6(0xa2b) + 'KI8WTthjtz' + 'NExBgiQ7wY' + _0x575bc6(_0x9ba47a._0x1d8c86) + '0XJJvjyqWS' + 'NyacSGqpNZ' + 'TEw2sUQzFk' + 'zUlNag0Jr0' + _0x575bc6(_0x9ba47a._0x30c733) + 'SjLyy9OGMg' + '1nQSwm6DYw' + 'ibwBqNLJm9' + 'T4IJ+q5m7+' + _0x575bc6(_0x9ba47a._0x1f2894) + 'gS2lK8/paP' + 'v1DeT+QN6E' + 'WpQ5iU6bvn' + 'meqsDa6ly1' + 'OMaUzYOUKt' + _0x575bc6(_0x9ba47a._0x1d5b63) + 'uz/wHEmKjJ' + '+Zm5O8M+f5' + 'BTGvxKrDKY' + '4dUEGQr3lL' + 'UgVVUIvDhr' + 'HEBBLyMDP+' + 'wxaFQ5lro8' + 'jA4AZd5biY' + _0x575bc6(_0x9ba47a._0x31dcdd) + 'yIl55sRQrb' + 'jgGbwLqiAg' + 'uBUYnuoK37' + 'vF+abK7wRz' + 'Pgo7bt15mm' + 'q3m5GANncQ' + 'gkilTnZYkl' + 'B4s4+TCUCI' + _0x575bc6(_0x9ba47a._0x1f671b) + 'nWkVn6TFNn' + 'M52tyK2/JI' + 'nFtnnWlS0T' + 'NSKc4ANQY0' + 'S7LsIJREWZ' + 'ifFUiA2zO5' + 'h6WtYJIGlg' + _0x575bc6(_0x9ba47a._0x521fdb) + _0x575bc6(0x558) + 'j7xaP6Y/5n' + _0x575bc6(0x98b) + 'Sm3jWYzDkL' + _0x575bc6(_0x9ba47a._0x174d1b) + 'JUe3fl7U1T' + '3FnzHBYTlR') + (_0x575bc6(_0x9ba47a._0x7ba6cf) + 'LEiKQ2HNsA' + _0x575bc6(_0x9ba47a._0x9b3f19) + 'LIPkU6goib' + 'XYDEtkqCji' + 'yXxHfB83/u' + '/VOkzMi+kg' + _0x575bc6(0x32b) + 'nI6h7syjeT' + 'yRRsYaRqKQ' + 'YldDSJIyDF' + _0x575bc6(0x509) + 'NxS9qkSQRM' + _0x575bc6(0xa3c) + 'bv9stvOS3U' + _0x575bc6(_0x9ba47a._0x5ea93f) + 'TN81ZucvTl' + 'ndXAmDbfNp' + 'eFA5jVPgZw' + 'clbfcLW+YZ' + _0x575bc6(_0x9ba47a._0x2925df) + '8UM2f5blPU' + 'SFlHpEFlRi' + 'T8yRB0detV' + 'dbVFxnihML' + _0x575bc6(0x961) + _0x575bc6(0x537) + _0x575bc6(_0x9ba47a._0x54f0f5) + 'O6uD0nvjB1' + _0x575bc6(0x2d4) + 'CxxE0mTGhJ' + _0x575bc6(_0x9ba47a._0x2514e2) + '+dlqoQgyLs' + _0x575bc6(0x588) + _0x575bc6(0x61b) + 'aCxQ+XE3wM' + _0x575bc6(0x99e) + 'ZZWXrOifro' + 'tFPokGfSab' + 'mAsAEvrpoJ' + _0x575bc6(0x1c2) + _0x575bc6(_0x9ba47a._0xe22043) + 'VSneXkFXOM' + 'cT0LZTgxRo' + 'wmCIhq6c7C' + _0x575bc6(0x611) + 'me3CMDTLJc' + _0x575bc6(0xb9) + 'pfs+EL9Ye8' + 'YvO4IWza9f' + _0x575bc6(_0x9ba47a._0x4618e5) + _0x575bc6(0x37f) + 'HuxUc4gpkf' + 'B1yhSEAtH0' + 'w+WJW1L14z' + 'sdGHkKSGxM' + 'AI7GZ2AOD0' + 'ZJCLHGyGNI' + _0x575bc6(_0x9ba47a._0x401b52) + 'Y1sVfOjxOU' + 'Svm/fWHFl4' + 'cMLen8R5II' + '2iChguF0Vw' + 'CIKsYrUbvr' + 'MBdHDbwhGk' + 'Zak7LEkAmi' + _0x575bc6(0x631) + '3QAWrWHjy/' + '9aua0hagEp' + 'zJno469ane' + 'rXlUibi8fM' + 'GKR2+rC2WD' + 'Z9QPBPg+zT' + 'QAxLF1gIDy' + 'J4CnDseSUA' + _0x575bc6(_0x9ba47a._0x25551c) + 'qFIns6GsQK' + 'VPbYNdmICt' + 'YBWAesgE+R' + 'qAPHYjh0+n' + _0x575bc6(0x37b) + 'SVWopHpZyN' + '8Yqy0B8Sqq' + 'JDi8SozXwm' + _0x575bc6(_0x9ba47a._0x40b665) + 'UOO2gkSfHX' + 'p9fYzGS5P1' + 'vz7wtvOv+5' + _0x575bc6(0x99d) + '4vW2i8tajo' + _0x575bc6(_0x9ba47a._0x2accd5) + 'cVj3dHV8hW' + _0x575bc6(0x619) + 'YDZBQxB/iH' + 'DZyO8C/KEP' + _0x575bc6(0x56b) + _0x575bc6(_0x9ba47a._0x3666d7) + _0x575bc6(0x8f2) + _0x575bc6(_0x9ba47a._0x414ff2) + _0x575bc6(0x30d)) + ('iSShTBJSMP' + 'KAr1OkiJLI' + _0x575bc6(_0x9ba47a._0x3053ed) + 'uTSC+8UtQe' + 'lkD9qODmHE' + 'Rz6d642aRP' + 'iFrv3PdvXf' + 'PZS2Fx19xT' + 'vXaB78GsK+' + 'm3USrFCa6l' + 'uHnZ+4FBD0' + _0x575bc6(0x581) + 'bEbGgRcFop' + 'gLjEkWiSZF' + _0x575bc6(_0x9ba47a._0x93eac2) + 'lksukF2OWh' + _0x575bc6(0x247) + 'vXfPw0+tNW' + _0x575bc6(0x2f2) + 'lvgISASjpw' + _0x575bc6(0x593) + 'ltbgJ3lqtk' + _0x575bc6(_0x9ba47a._0x3ee5c0) + _0x575bc6(_0x9ba47a._0x5efb8b) + 'EL7ufI9vQv' + _0x575bc6(0x633) + 'TrXDyB6GtX' + 'b4Y8wMT9WJ' + _0x575bc6(0x5b2) + 'bA10XvPlej' + _0x575bc6(_0x9ba47a._0x54d114) + 'HCMMDdi0kZ' + 'iibPQp+zA+' + 'rFaAA4PkMm' + _0x575bc6(0x2f0) + 'Kcy2mOrYQF' + _0x575bc6(0xa6a) + 'rqAUGhxegg' + 'kEWEKEJh7c' + _0x575bc6(_0x9ba47a._0x1a920) + 'qeUgncbgni' + 'DZcXSrbbIx' + 'bgGuijsAvm' + _0x575bc6(_0x9ba47a._0x546281) + '1geWrVB2fU' + 'zxD7y8DI/Q' + 'GsI8tSt/sx' + _0x575bc6(0x2cf) + 'l6gQCOHHMQ' + _0x575bc6(_0x9ba47a._0x1001d9) + 'Unh/W/ihh5' + 'woVdN0Bl5g' + '6IuJfRv3OA' + 'Xu0JppjHRH' + 'WK+naJXFkh' + 'qlgA7611iS' + 'CTJV4BZBl0' + 'AcYRLYyxCJ' + _0x575bc6(_0x9ba47a._0x2fe13b) + _0x575bc6(0x21f) + 'KR58ken4ze' + 'FwX+C2Fn/u' + 'fk+k+fvnk4' + 'Fu9+/Sp2QT' + _0x575bc6(_0x9ba47a._0x5abed6) + 'tc2nF+FhCw' + _0x575bc6(0xf6) + _0x575bc6(_0x9ba47a._0x514e98) + 'blWaif9b4i' + 'aSWgktEGi/' + _0x575bc6(_0x9ba47a._0xf30657) + _0x575bc6(_0x9ba47a._0x2624ce) + _0x575bc6(_0x9ba47a._0x5b3737) + 'LtHlEz0OqR' + 'a8OCNFEmWV' + 'OGkNSjKnVA' + 'laNGo1HHSw' + 'sdgD8+c9Fv' + 'ETbfSiH8dv' + 'utUBkvoM6o' + _0x575bc6(_0x9ba47a._0x55fcdd) + '16+8Df51Rq' + '1WZrjoJHSF' + _0x575bc6(_0x9ba47a._0x188249) + 'Xaz6G2YMKX' + 'B+MEByHgOG' + 'gj2JUQoQSn' + _0x575bc6(_0x9ba47a._0x7f8101) + _0x575bc6(_0x9ba47a._0x145f96) + 'gVX7UEviZP' + 'WH8fe+Z9I9' + 'klzHioNw4K' + 'BDZk6C4vUK' + _0x575bc6(_0x9ba47a._0x5a22f7) + 'rjMCgooQSm' + _0x575bc6(_0x9ba47a._0x263799) + '3mY95nK3pg' + _0x575bc6(_0x9ba47a._0x55f72d) + 'kGmfyoqLpk' + '527nzFetOb') + ('EzAus7ESsP' + '8Eb4yvWjOI' + '5trUYQTAtG' + _0x575bc6(_0x9ba47a._0x1e4dcd) + 'EQLUhWCYcs' + _0x575bc6(0xa07) + 'RFrvDIiuQV' + 'wYmRM0y/EQ' + 'tZ4zmS5MuL' + 'AZUlrwKyT6' + 'QyalQ2T1t0' + 'OHDaNDglK4' + _0x575bc6(_0x9ba47a._0x91010c) + _0x575bc6(_0x9ba47a._0x296c0c) + _0x575bc6(_0x9ba47a._0x2895c3) + 'H/dLK3/Nqo' + _0x575bc6(0x225) + _0x575bc6(0x2c8) + _0x575bc6(_0x9ba47a._0x2f5e81) + _0x575bc6(_0x9ba47a._0x241db5) + '7+OTyyJq4R' + _0x575bc6(_0x9ba47a._0x2b0b4b) + _0x575bc6(_0x9ba47a._0x590981) + 'ZnFdtBPwVi' + 'kgof3Q2KA4' + 'QZRkIrmwEk' + 'Bwy4qsgsxx' + 'EPkkmF9EYg' + 'JOd1kCiFGU' + 'JCoKGAZXZO' + 'LGsIQXKneD' + 'zMbyUjSZZB' + _0x575bc6(_0x9ba47a._0x47a35f) + '/wQT3avEC5' + '+b/FZhwwUA' + '56xLjVx0x4' + _0x575bc6(0x143) + '+RmoV1wDTD' + _0x575bc6(0x6aa) + _0x575bc6(_0x9ba47a._0x5b9984) + 'eoK2/uR9wS' + 'nA6Nw15Y1N' + 'DwXiUcoSyC' + _0x575bc6(0x546) + 'BSEoP5pMEh' + 'Sl5VMtGNj/' + _0x575bc6(_0x9ba47a._0x5eb68f) + 'UBpEGSdTSA' + 'pO7BUEChXe' + _0x575bc6(_0x9ba47a._0x5db7f5) + 'Jtl+SukTD6' + _0x575bc6(0x5f0) + 'NeXniZl2RO' + 'Ny/TTFfy+6' + 'VxIOg8NYMN' + 'kuKXpV90Rj' + _0x575bc6(_0x9ba47a._0x12689f) + 'BXoiHR7fu6' + _0x575bc6(_0x9ba47a._0x491e18) + 'NaodFn9wGn' + _0x575bc6(_0x9ba47a._0x2e97b2) + 'rSzLCEUEWU' + 'VHHdsHGf0t' + _0x575bc6(0x822) + 'jUccALGtCy' + 'g5Js7H7FmK' + _0x575bc6(0x8c4) + '5wdTo2A1As' + 'HuMKpYGWoo' + '2occfQLuqc' + 'O6Y+vOOMwG' + '7cahe2B5zK' + '/xpR4pEt0J' + _0x575bc6(0x210) + 'g9Divj58+h' + 'Y7ytfYvPu8' + 'RoeIlPJLlF' + 'gONoAEMnAB' + 'W+JcYoNRmH' + _0x575bc6(0xa4c) + 'FVZOR8FMdE' + 'MzdFPF/ZLl' + 'gwMSoITIpX' + 'qDikl4iiSg' + _0x575bc6(0x1ec) + 'qnKFQmQBLo' + '1sd9skpCWA' + 'XOqRJKhxIz' + _0x575bc6(_0x9ba47a._0x3a1e87) + _0x575bc6(0x934) + 'D8vNg6G7ZH' + '3DLAZhh1zK' + 'HVp14xdgYK' + _0x575bc6(0x72f) + '25qV9s2/su' + 'xvAB6L/nXS' + 'Y3GryLmBQZ' + 'G2UAJEP+Av' + 'Yuo2RFKDi3' + 'CJyKD6J09f') + ('rHjtx6/SJa' + '6wUQVVEG2Y' + 's15F5QvCiB' + _0x575bc6(_0x9ba47a._0x9ee3ed) + 'FkAk4tn1XC' + _0x575bc6(0x25f) + 'WxSUX0sfhE' + 'EuuJMAXEb0' + '72/Hnduvob' + _0x575bc6(0x251) + 'x266wzwwp/' + '6ZuwNQjrox' + _0x575bc6(0x23b) + '1L/LojY2An' + 'Hy/8bDYZBb' + 'HYmCpt04K0' + 'CWCDSCa7ev' + 'AgcHOryK5P' + 'MKIniBjNVb' + _0x575bc6(0x7c5) + _0x575bc6(_0x9ba47a._0x3f05f6) + 'M7vL55DFJT' + '7R7RAJSE5B' + 'kiplxYscrI' + 'XdgLMkkKoG' + _0x575bc6(0x59b) + 'q7yYb3ADyl' + _0x575bc6(_0x9ba47a._0x937717) + _0x575bc6(0x928) + '5qWqRJPI1y' + '7zxKxj/Vck' + _0x575bc6(_0x9ba47a._0x30c95c) + _0x575bc6(_0x9ba47a._0x36b718) + _0x575bc6(0x456) + _0x575bc6(_0x9ba47a._0x119cb3) + _0x575bc6(0x43e) + 'YCz3PN3u1H' + 'khwzHBNqAW' + 'NrxLtkeaJo' + 'pqISt0KtDx' + _0x575bc6(_0x9ba47a._0x104a6f) + 'HTWPi2LVS6' + _0x575bc6(0x700) + _0x575bc6(0x65c) + 'w1gBrJotP3' + 'X69/glx5zV' + 'u6ZtsuyTBJ' + _0x575bc6(0x3a8) + 'K2AD12nEBq' + 'HMaCX37NDv' + 'yNQU7a53BZ' + 'djav7xX90V' + _0x575bc6(_0x9ba47a._0x4444f4) + _0x575bc6(_0x9ba47a._0x1f4e0a) + 'YKhhN+OhUx' + _0x575bc6(_0x9ba47a._0xb03154) + _0x575bc6(_0x9ba47a._0x1df59f) + 'aVQsQgWWkO' + 'INMprXMfMu' + _0x575bc6(0x89b) + 'vAjGFhCWPC' + _0x575bc6(0x367) + 'Zy+Ol34Nrb' + _0x575bc6(0x1bd) + 'Fn/pOUMfzv' + 'm/4C4Wtalg' + 'nEA6WUKncJ' + 'gw7zO916eL' + 'PRvzOAdcaT' + 'LJ6KMmnqRx' + _0x575bc6(_0x9ba47a._0x27bfb5) + _0x575bc6(0x320) + 'X45lJWGT5Q' + 'jMhqMIEVIw' + _0x575bc6(_0x9ba47a._0x20debf) + '+YJ+EcXxEl' + 'i0ZITZWC7a' + _0x575bc6(_0x9ba47a._0x5e4c96) + 'R3g1whK+bC' + 'mIV4JBt4Sg' + _0x575bc6(_0x9ba47a._0x2627d7) + 'P9x98T/TbD' + '2yJJdGzNDw' + 'QMp58VrFzN' + '/X8rLtwUKh' + 'BqBI/u3r9/' + 'RXmJ5+1TB2' + 'GYz1haX9nk' + 'Ms++onQU0/' + 'nLk4qy2rra' + _0x575bc6(0x5a6) + _0x575bc6(0x88b) + '3EGoz2E6oQ' + _0x575bc6(_0x9ba47a._0x3f53da) + 'zeUf9++Mpo' + '5vi8PBLTsa' + 'BLqjSYXvFV' + 'AIujQgueVo' + 'flxrLTiyVr' + '1IzFEdhyBL') + ('KbYkQUg+As' + 'tGT+3uEL3e' + _0x575bc6(_0x9ba47a._0x4854c9) + 'f5+Zo7e2ja' + _0x575bc6(0x3cd) + 'O16XJW7v44' + _0x575bc6(_0x9ba47a._0x40eb76) + 'vf04rJM/Hu' + 'wljc70R87P' + 'gopVECNcI3' + _0x575bc6(_0x9ba47a._0x36ed90) + '53DOLG8+Bc' + _0x575bc6(0x175) + _0x575bc6(0xa70) + 'VaZ6nlJjK+' + _0x575bc6(_0x9ba47a._0x51ec2f) + 'AYi1OCRcIq' + 'eMHhA6eAkW' + 'FKGFQGDtyA' + 'VWo2rATHva' + 'g3/Pbg9OCv' + 'xm9Cjg5zz2' + _0x575bc6(_0x9ba47a._0x30eaf6) + '64TC4U1JL3' + 'ExWyx+46GT' + 'VQ+cdJ2/nW' + 'E19W/X+QMj' + 'gXHXmn/2B8' + '6SUePQgNOy' + 'YX8Bx31xKL' + 'x7t/WW19pa' + 'uPiP10ZNTW' + _0x575bc6(0xad9) + _0x575bc6(0x5e9) + _0x575bc6(0x28d) + 'A2NgIFiuJz' + 'twND6a0T5J' + 'YhkBDNmoZN' + '84Ayoi9UCp' + 'G4MvjIct+t' + 'PbX4ef1w3/' + _0x575bc6(0x43d) + 'mz9AUA69YS' + 'AotXDp+8bc' + '0C8Lj0kvfP' + _0x575bc6(_0x9ba47a._0x14c0a4) + '/EalRpAuvw' + 'sceUugE8/O' + 'vxN+m84sP5' + 'WioV4lCd59' + _0x575bc6(0x602) + '3W0w5ZOvyL' + _0x575bc6(0x994) + 'j3IddFKtwE' + 'qoE3WnmJqk' + 'PiwVx9Eaie' + 'i4k/pQYIEJ' + _0x575bc6(0x504) + 'IaiNkdFuNP' + 'b3958fX+6C' + '+boDQiS9ye' + _0x575bc6(_0x9ba47a._0x43bacd) + 'XWfFZ7Ry+9' + '4VXOFLNq5E' + 'Zv3ukyHAMr' + _0x575bc6(_0x9ba47a._0x188a57) + '/1nZ/dt17u' + '2r2uZYKvwi' + _0x575bc6(0x657) + _0x575bc6(0x1da) + '4bP+/lcOT9' + '3bv/vrs9DE' + 'PG/2rO1PnC' + 'vHyT+d9UES' + _0x575bc6(_0x9ba47a._0x22c1b3) + 'RglEh2HdOF' + 'UsKVF9kte3' + 'xFnn9PoaJU' + _0x575bc6(0x963) + 'bglLhsMShM' + '3Rhu2vVrwR' + 'jd+pud1Els' + 'xPj03PJT/u' + 'CnetZx80H6' + _0x575bc6(_0x9ba47a._0x25b46f) + 'GbYWwpmtKu' + 'NbP12Lao8L' + '4MSK9o6csC' + _0x575bc6(_0x9ba47a._0x299dcb) + 'axelsD9s4f' + _0x575bc6(0x17f) + 'g+wmaQxMqi' + 'HUV4FlBQqI' + 'RTWY5WHKhb' + 'JQhSxJtZjv' + 'qagDQS2pdB' + 'AcgRLZJfXp' + '1DBg6QDmly' + 'XOsuqtVy95' + 'Y108fmdqNQ') + ('phbu/9c0db' + 'KjkAPfUJRl' + 'h4KGfC4zuY' + 'cJp7hkwcc2' + _0x575bc6(_0x9ba47a._0xe8fbb) + 'PlZlzuiyLf' + _0x575bc6(0x9c8) + 'KsoxlwwOrb' + 'ghG+/RPJhL' + _0x575bc6(0xb7) + 'wISUaT0VXp' + 'bEAPQHGxwl' + 'p07AUJfQNJ' + _0x575bc6(0x461) + 'nPMVbTLZia' + 'AtntDltlkD' + 'BIEZkcj/91' + '5VUHrddryv' + _0x575bc6(0xb08) + 'hTtX9dGPcf' + 'F8W/IIzVU7' + 'cdyeVYMPFD' + '/dMp/PvvXx' + _0x575bc6(0x807) + _0x575bc6(0xa06) + 'wDmNMp5i5a' + 'sDReVromaT' + 'rutms6411f' + _0x575bc6(_0x9ba47a._0x5f047e) + '2SukFHHjQE' + _0x575bc6(0x8e8) + _0x575bc6(0x457) + '5R8IkX52m7' + _0x575bc6(0xa55) + '2Jc1LqlmRF' + 'e9qT2zljsq' + _0x575bc6(0x523) + _0x575bc6(_0x9ba47a._0x4ff40b) + 'DDLDDoSp09' + _0x575bc6(0x1f5) + 'm6OjFTP1Zk' + '4ebsE93Bg+' + _0x575bc6(_0x9ba47a._0x5a0690) + _0x575bc6(0x31c) + 'ADVUSvKnkF' + _0x575bc6(_0x9ba47a._0x3e53c2) + 'WGbIvFEERw' + 'LBeF5YSdV+' + _0x575bc6(0x2b0) + _0x575bc6(_0x9ba47a._0x110f7c) + 'U67HKXerDh' + _0x575bc6(0x19c) + 'MV7Xrh7ZcP' + 'P2giClhG27' + '/0gBXcWvRv' + 'lmqYfyUHXM' + 'X8dYDjLcax' + 'uoVSKb7kRu' + _0x575bc6(0x374) + '6Jp6j3FU/e' + _0x575bc6(_0x9ba47a._0x4bcf14) + 'RUmURYX1g0' + 'gS1ohL3kqH' + 'hMPMvUZaR8' + 'U2Qny9SBAU' + 'UmHEkYuAEt' + _0x575bc6(0x8f5) + 'ohuItgO0Aj' + '28ywaeCMvI' + 'uWWZuiUPSI' + _0x575bc6(0xa31) + '5c6WjAwAaV' + 'FcRt/OA/w5' + 'FoB1c/525a' + 'Vz1gES9ucA' + 'HecCECtwvB' + 'o9w+lj9ww/' + 'hof/epLY8j' + '9nHn5j/a4C' + '9N0wgujDuh' + 'BVFb2KIi1h' + 'DGZEoOQKCk' + 'qlE2du1eD+' + 'rEUD0a3WEN' + _0x575bc6(_0x9ba47a._0x227012) + 'iFTZ6aJa4c' + 'Sx4V0YBHaz' + 'khfwuEtrwu' + 'CeyIm71t7w' + '8MGD98+chK' + 'c8Q8OuMRj+' + '9wAIX3T7Ad' + _0x575bc6(0x86d) + 'I4YzOOIByz' + 'ib/ydn6MP+' + '9dBgrBe9cT' + 'KR1lTa8clq' + _0x575bc6(_0x9ba47a._0x5dc34f) + 'opzkRgnncD' + _0x575bc6(_0x9ba47a._0x5a9bfc)) + ('ux78wLitPH' + _0x575bc6(_0x9ba47a._0x3f9e75) + _0x575bc6(_0x9ba47a._0x21d3e8) + _0x575bc6(_0x9ba47a._0x2589e4) + '+MIVJbKYDH' + 'Lcs1bgkgIo' + 'lcTH/m+cfL' + _0x575bc6(_0x9ba47a._0x461470) + _0x575bc6(0x4d1) + 'pR4ruKPx0d' + 'G5yLoJpPCT' + 'TOiM7ed5d0' + _0x575bc6(0x3d2) + _0x575bc6(_0x9ba47a._0x4a854f) + 'DqSd/UmWTr' + 'yLSUud8SRE' + 'mqFbONHCIK' + 'IEVU6ggoPu' + _0x575bc6(0x3af) + 'oogVtT6Wdn' + _0x575bc6(0x9cb) + 'YlXiOcp4Lj' + 'w2aow8YaEW' + '9OM8IOkcxP' + 'a2ftby6jvw' + 'YEFWNEPDGg' + '1YmLFHghqo' + 'kSjEx/D/dq' + _0x575bc6(0x742) + _0x575bc6(_0x9ba47a._0x687749) + _0x575bc6(_0x9ba47a._0x5c8d31) + _0x575bc6(_0x9ba47a._0x4c59f9) + 'I1PLBG+99b' + 'ep2jeDl6Yh' + 'IOTku4sEYx' + _0x575bc6(_0x9ba47a._0x434785) + _0x575bc6(0x793) + 'zgp5TGTC4/' + _0x575bc6(0x1aa) + _0x575bc6(0x3d3) + 'aaUbqg8foe' + '+pB40Apjhz' + 'vCJoo0tURh' + '/Np/vsPqpF' + 'G/7n6cf21V' + 'n/k6P7/3wJ' + 'ys1zlTTAaY' + 'GNf1IwMOy2' + 'nX+cJHA3Q9' + 'xVyYGCx94+' + _0x575bc6(_0x9ba47a._0x552b15) + 'MBGz6SJOHM' + 'MaYZ8DKuq8' + _0x575bc6(0x1d2) + _0x575bc6(0x834) + 'iaiTDzZtSl' + '9J4nwMmxNk' + _0x575bc6(_0x9ba47a._0x34960b) + 'ombxc1DfR4' + 'I62uhQjMc4' + _0x575bc6(0x242) + 'Zvih+jZUru' + 'jx1JRCyayN' + 'c8f+wbian8' + 'Qhrf2qWNUC' + 'hAomnhaPOE' + _0x575bc6(_0x9ba47a._0x166464) + _0x575bc6(0x9af) + _0x575bc6(0x2cd) + 'LEeMXjnWye' + _0x575bc6(_0x9ba47a._0x180400) + _0x575bc6(0x49f) + 'gsyusQ1ZIG' + _0x575bc6(0xaf9) + 'HXWBIIvTbs' + 'K7JqXBTAEn' + _0x575bc6(0x739) + 'BpJx3RpnIK' + 'd19MBfHL/7' + _0x575bc6(0xb0a) + 'aOzj63cgxP' + 'n/wpdCY1cu' + 'P++kbKC+YY' + '1iZKpqe3ds' + _0x575bc6(_0x9ba47a._0x2442c7) + 'zcLyH4INtA' + 'AzZrGgxMlW' + '7LFfv33x4l' + 'lYCVOErIy1' + _0x575bc6(_0x9ba47a._0x31e426) + _0x575bc6(_0x9ba47a._0x2b9cb1) + _0x575bc6(0xa89) + 'HM3+GDOOFw' + 'Y+F7C0UOon' + 'gaoMI/N1Of' + '+O688lFd8P' + _0x575bc6(0x64a) + _0x575bc6(_0x9ba47a._0x7ba2a8) + 'bcljwsjPYm' + '3qEwcBPGm9') + (_0x575bc6(0x9ff) + '5tZm4TXSYD' + _0x575bc6(_0x9ba47a._0x49c208) + 'mZyeEnsMQx' + _0x575bc6(0x8d1) + '4z/QfHn3lk' + 'ySbxRKsG5G' + _0x575bc6(_0x9ba47a._0x289906) + 'rg+Bwk2aGI' + 'iiTVYtWSSY' + _0x575bc6(_0x9ba47a._0x35ae48) + 'g5jNPFHDA7' + 'h5nlN1md80' + _0x575bc6(0x50e) + 'PldNXs+1eV' + 'ciMtcU0DC0' + 'TZSc3sZMUD' + 'elE1uDGuyA' + 'q65MJdU7dd' + 'OXTZna0Aw7' + _0x575bc6(_0x9ba47a._0x50b28c) + _0x575bc6(0x338) + '5OJp9ymb8f' + 'HKArTNt06k' + '0eyx72ceae' + 'GxbpWNvNDv' + 'FVsL4Ue6YE' + 'NnaprxAG+7' + 'AtdMLjc353' + '2HV1MY1y/K' + 'hfzgK+gry1' + '/5K/9b6xHa' + '7rsFES7vjZ' + 'uHd/Wd17IF' + _0x575bc6(0x79c) + _0x575bc6(0x5ba) + _0x575bc6(0x34d) + _0x575bc6(0x8d7) + _0x575bc6(_0x9ba47a._0x43ca29) + 'WIhs+A3chI' + 'mHJzaeCdjp' + '2MyewDp8TV' + '+w6aQrc/Sn' + 'Xec81J6nT9' + _0x575bc6(_0x9ba47a._0x402e59) + 'q9tC0czYlN' + 'UEazpspAd9' + 'punh/Pue+A' + _0x575bc6(0x782) + _0x575bc6(_0x9ba47a._0x1c74fe) + 't6Y35nupLJ' + '7Yes/VlxyA' + '3gQagDHIy7' + _0x575bc6(_0x9ba47a._0xf36124) + 'CiIbK5+PM/' + _0x575bc6(0x777) + _0x575bc6(_0x9ba47a._0x435e8a) + _0x575bc6(0xad1) + _0x575bc6(_0x9ba47a._0x25e237) + 'un7/DTjdii' + '19CdK1C/Jy' + 'wYxSiXXScV' + 'gpivFCSqjP' + 'Cd6rd9Lm9n' + 'h8+xu/Hv5R' + '+jOGkTIXJU' + 'zmy8sK/wPz' + _0x575bc6(_0x9ba47a._0x12f4c3) + _0x575bc6(_0x9ba47a._0x3d759a) + '2ebEN5m4KH' + 'uU+3EmheTi' + _0x575bc6(0x9ef) + 'PLm02XsMSe' + _0x575bc6(_0x9ba47a._0x7eed6d) + _0x575bc6(0x3a1) + 'WN59bDvdKS' + _0x575bc6(0x812) + _0x575bc6(0x34c) + 'jUa3/P58Zg' + '9BQSc4hYNZ' + 'YIRTu5OKwV' + _0x575bc6(0x769) + '2wZSYU7i20' + '7f8QfrsKfg' + 'nVjcBl7kkG' + _0x575bc6(0xa36) + 'L9lgw/HoGK' + 'L5jaMiz8Pr' + 'C6pgbi40xR' + _0x575bc6(_0x9ba47a._0x288c37) + 'kjWamm8SRq' + 'vIK1Xm5KPO' + _0x575bc6(0x3e5) + 'sLtuMNbwse' + 'VsJ2IdeiT7' + '6ie7MuGazI' + _0x575bc6(0x47e) + 'wmuE+Bu5L/' + 'Yfilhh7O5/' + 'Pdf3S46WLH') + ('2PBG1ZOuHG' + 'GCzav3L3xw' + 'dx7gEngX0O' + 'UJrHfk9oou' + _0x575bc6(0x291) + _0x575bc6(0x4fc) + 'mMj7OpE6U1' + 'k7R7wgHHKa' + 'rgB6/0wbLJ' + _0x575bc6(0x18b) + _0x575bc6(0x5dc) + _0x575bc6(_0x9ba47a._0x9ac1dc) + 'UKqByrjV/d' + _0x575bc6(_0x9ba47a._0x6fc977) + 'TBM713rGyU' + 'Auey0zEBuD' + 'HGsbWJlcBl' + 'PDbY16LHIX' + 'e/lt8O57ZD' + '3AS77h7RoZ' + _0x575bc6(0xa1a) + _0x575bc6(_0x9ba47a._0x409ed7) + 'AkilETfQMg' + 'cfITh88gnB' + 'iL2wZhPcMj' + '+Ubn/Guk/T' + _0x575bc6(_0x9ba47a._0x350fbb) + 'veRvNU/f3G' + '6NbLh41foF' + _0x575bc6(0x74a) + _0x575bc6(0x864) + 'GfvH4BnjJt' + '2MwwUMNyTg' + _0x575bc6(0x38c) + 'm0CSrO5hpo' + 'dcByUxJm/Q' + _0x575bc6(_0x9ba47a._0x35832d) + 'XrvM9vXx/6' + 'TwN8cKkJl9' + _0x575bc6(0x6e4) + 'o4HZ+3b5hr' + 'hfd/NspZ88' + 'jcO7A+6OQI' + 'jYX708BrMc' + 'TRgUxzi5Oy' + 'luk45Fh3f6' + _0x575bc6(_0x9ba47a._0x4e7879) + '+PwYCB6juU' + 'HGBnbcpWzA' + 'BjZAYxdERI' + _0x575bc6(_0x9ba47a._0x125093) + 'mkW+DVaImY' + _0x575bc6(_0x9ba47a._0x2d65e5) + '2JCx+JnyLS' + _0x575bc6(_0x9ba47a._0x27eae0) + 'Jm56/+3agu' + 'MxJmDiGcy5' + _0x575bc6(0x9e3) + '6n2mf3xC2+' + 'ggq9iU2FAY' + 'q6W9PUCRoz' + '0lhKNFEfI7' + 'vDNhrBl7Ef' + _0x575bc6(_0x9ba47a._0x5cb79e) + 'CQb4UVl+2I' + 'GWKx4Yfzoc' + _0x575bc6(0x848) + '9Ai83TM4nt' + '4Pl21aZifg' + 't1y/RUdBZW' + 'qf2Q4a4LgN' + _0x575bc6(_0x9ba47a._0xcfaf3e) + 'wws2Ep1AdQ' + 'ADj+EnephN' + '0rSF3mLaFh' + 'jUrW7YFCWP' + 'fBlwOjQ07L' + 'w1zfk2+ENW' + 'wGMNt6re3t' + 'NrPZHMbWSX' + 'MqQGN/tDk3' + _0x575bc6(_0x9ba47a._0x1a2de9) + _0x575bc6(0x96a) + 'xv2WA8TiwN' + 'Zs6DvzMQ6f' + 'uIZuUAkFZx' + '12GRKnc0lj' + 'bGVTchRsmG' + _0x575bc6(_0x9ba47a._0x1615dd) + '9pRi54MkRa' + 'QwSHst94e7' + 'rv7a0onD+K' + 'Xv6s4sgn6a' + _0x575bc6(0x8e9) + _0x575bc6(0x5f8) + _0x575bc6(0x5b1) + 'CQy6jWCvG+' + _0x575bc6(0x871) + _0x575bc6(0x7ed) + 'xmceIA5+j5') + (_0x575bc6(_0x9ba47a._0x113518) + _0x575bc6(0x203) + 'GBBWay27TT' + 'lvZkztddXe' + 'ZgrLd9V6zC' + _0x575bc6(0x8f6) + 'pmPJIRQ6/4' + _0x575bc6(_0x9ba47a._0xd922d5) + '5YLQQyV+Oo' + 'GBP2gWXjv9' + 'Hb06cIXlbF' + _0x575bc6(0x344) + 'mT0riyt8nC' + 'T8CZprI7LG' + _0x575bc6(0x4dd) + 'pSR5FK7I0m' + 'WMFjjNWjAY' + '63de/BoA60' + 'cJX8VYBhkT' + _0x575bc6(0x94f) + 'VkXg76Vxy0' + '4g+zWwFa42' + 'vSvyc0Ob0+' + 'oOB1OqnTyY' + _0x575bc6(0x7d8) + 'aRMm44EOxt' + 'RakCEC2Msi' + _0x575bc6(_0x9ba47a._0x5a8296) + '2TcfqLi8Fg' + 'rD86s2qhUy' + '9x1NzLs3Ns' + 'KCUSkrW/Mc' + '/YrXGL6YCV' + _0x575bc6(0x76b) + 'Ybd6qJna8U' + _0x575bc6(_0x9ba47a._0x110283) + 'iAEh91GhEE' + _0x575bc6(_0x9ba47a._0x89f67a) + 'tbuO0Topih' + 'xNpiG3a0yZ' + 'JblmWks0Lu' + 'Seqq+JrL/9' + _0x575bc6(0x4a4) + 'KRcF+KhZ17' + _0x575bc6(0x11d) + '9MsnMB04wP' + 'N4sqQGGJjQ' + 'AXBQdd/aO+' + _0x575bc6(0x730) + 'nQPnEoCPIo' + _0x575bc6(_0x9ba47a._0x432820) + 'vM/cZJnAy9' + 'iSJYfD2OXB' + '5lixOQCm8c' + 'LiJ08Syh+0' + 'zD8ejDXru9' + 'J1ltXW2WYC' + _0x575bc6(0x5f1) + _0x575bc6(0x824) + 'YrXkZeuQib' + 'O0ssckMg5M' + 'XuDKbCyaqn' + 'Y4vYRgKQ14' + 'fSiGK0AghD' + 'pxrIhDzmkU' + '+T1N5skTmD' + _0x575bc6(0x20d) + _0x575bc6(0x964) + 'dv209fnZg1' + _0x575bc6(0x32a) + '35I5DuQ4Ll' + 'gEYsB6yk4w' + _0x575bc6(0x944) + 'dU3jshlz63' + '30HHPA+Ntc' + '5vb8a9WvFK' + '+TAnVSUB1O' + 'h1eiddgC7A' + 'OcJORzgqTG' + _0x575bc6(0x6cd) + _0x575bc6(0x329) + '37L84Ktndt' + 'x72qtzYjAc' + 'D0bHw3W/G1' + 'IACAHNZlIU' + 'sh05Goyx0r' + 'y8bJJHCKxd' + _0x575bc6(_0x9ba47a._0x4c2813) + 'Lwx0GrblgR' + '+prh34OOXn' + 'CCyyviTvVR' + 'F1pJXgGrFT' + 'GEUIGVfoI8' + _0x575bc6(0x9ba) + _0x575bc6(_0x9ba47a._0x5835b1) + 'l8CtmJ6p/f' + _0x575bc6(0x6a4) + '07g9a78rD1' + '+0YZWDYWUq' + 'BFq1HE0z5W') + ('iahjIIRVFi' + '7mJiIpmBkw' + 'MOGuZdI6xW' + 'CPHSygrV6x' + _0x575bc6(0x331) + 'jM3iywn1Vi' + _0x575bc6(0x5c9) + _0x575bc6(0x130) + 'meNMlixWLN' + 'sMwVVSyzjj' + _0x575bc6(0x938) + 'LPxMV/qzXO' + 'evz2eYcEYg' + '9E1aw3ly0A' + 'pxZ3+ZWTa0' + _0x575bc6(_0x9ba47a._0x463f5c) + _0x575bc6(0xaa3) + 'xxZYQWUjA9' + 'loXqDgc3ox' + 'Hy+oFGeMUF' + 'ed1yloTcJo' + 'Dsanpesp3Z' + 'C67fz2Ds0C' + _0x575bc6(_0x9ba47a._0x58ba10) + '+fqpsbAGLT' + 'MRbeFx8uP9' + 'MisFN82Oxq' + 'uP/jMcawPD' + 'b/kc2ARLDM' + '4MXnqHdMxw' + 'wI48LNpVPs' + '1jXZOD0Vpw' + _0x575bc6(_0x9ba47a._0x102317) + 'RKoTZGdJJT' + 'iIFwezeSWt' + _0x575bc6(_0x9ba47a._0x2a965a) + 'egJSVd7IA0' + 'XqPw6egA2m' + 'TcnscOXrjr' + _0x575bc6(_0x9ba47a._0x2daf2e) + 'X+2u+G9cJN' + 'pPirWQxMP9' + 'jBD9i3Pjuf' + 'i5qA0xe+Zz' + 'qYvlTdAFju' + 'BJQNDESKEu' + 'rDhiz07bCB' + 'h1W+cc3Z2r' + _0x575bc6(_0x9ba47a._0x153196) + 'pSuex5EYdK' + 'cQATrsn/I7' + 'Juq3jN90zN' + _0x575bc6(_0x9ba47a._0x7d100d) + 'gt2Ylflt10' + _0x575bc6(_0x9ba47a._0x1427ec) + 'ubSDayIHvJ' + 'hBK3FDMq1b' + 'XFOF1U4cZ8' + _0x575bc6(_0x9ba47a._0x31bda7) + 'yMrH2QArCs' + _0x575bc6(_0x9ba47a._0x3070e9) + _0x575bc6(_0x9ba47a._0x1a5970) + _0x575bc6(0x401) + 'naNgs+u1Ym' + 'n8q6cOKaYH' + 'j7ER+5J+32' + _0x575bc6(0x956) + 'WtFGGBC2TA' + _0x575bc6(0x37a) + _0x575bc6(_0x9ba47a._0x57af4d) + 'cIqyugkgLx' + _0x575bc6(_0x9ba47a._0x1eb578) + 'aplOAQAy/F' + 'w3ZEmy9Sft' + '4iVzJ8vMcE' + _0x575bc6(0xa0e) + 'Rrp3lYZ0rn' + _0x575bc6(_0x9ba47a._0x5e7b78) + 'izzJZ/qstb' + _0x575bc6(0x2a4) + _0x575bc6(0x69f) + _0x575bc6(0x926) + 'Piw2NI28/a' + _0x575bc6(_0x9ba47a._0x526f55) + _0x575bc6(_0x9ba47a._0xa51afd) + _0x575bc6(0x473) + _0x575bc6(_0x9ba47a._0x1b3465) + 'zYGWQPGRON' + 'JTg0DC9k0K' + _0x575bc6(_0x9ba47a._0x30a322) + 'Zo56j4ZwWu' + _0x575bc6(_0x9ba47a._0x1402ca) + _0x575bc6(_0x9ba47a._0x3e1ae0) + _0x575bc6(0x681) + 'uZ/mDjSw2o' + '2ThkGR+iQO' + _0x575bc6(0x418) + '/mQKbEBwDi' + 'jxCgJAnVTh' + _0x575bc6(_0x9ba47a._0x5cc988)) + ('odFTlt3k9L' + 'p6a0tEBGME' + '6DAFoAECpS' + 'p5coFE8TGN' + 'ZJYViHNs10' + '7+2xvpt1/G' + _0x575bc6(0x7ea) + _0x575bc6(_0x9ba47a._0x34b669) + '31WnJMN/WT' + 'rp9+xy1Ox5' + '9kroWy2SiU' + 'sENfrkDfHA' + '193Kpsi7KZ' + '8IIvL2diID' + _0x575bc6(_0x9ba47a._0x2eb453) + _0x575bc6(_0x9ba47a._0x438d9b) + _0x575bc6(_0x9ba47a._0x5d391d) + _0x575bc6(0x860) + 'VbTh6hiE3H' + 'btr+urXh4e' + '8ANTYaKvwb' + _0x575bc6(0xa3b) + 'xb2KbNBoTK' + _0x575bc6(0x9e1) + 'cTIarOWgCn' + _0x575bc6(0x6f3) + 'FRFMcumwON' + 'CybnmKi/Ow' + 'OKAeypSPDR' + 'GnZPBwLARA' + '1J1gToHNYZ' + 'GzYs9FVKiB' + _0x575bc6(0x1db) + 'PrPR+N+H9d' + _0x575bc6(0x902) + 'ap2/a7FjDB' + 'tx3zestTWb' + 'fXYfZGYFe9' + 'FTza4H1/fs' + 'ratVZF+vAF' + '4UQ4iPlyU2' + 'lVfyem2B+L' + '3XT0o60mIn' + 'YGfIgkCAJw' + 'E7NPLFWRDg' + '7RDgm7SvTM' + _0x575bc6(0x100) + 'I25KW/yHQX' + 'ncgZXOppwO' + _0x575bc6(_0x9ba47a._0x585282) + 'QVy7c5yv5+' + 'LjMfDFPJ4G' + 'A925jDCwkn' + 'D23/zL2fzC' + 'ua2voFOKlA' + '3V6ngvEWjK' + 'o7fB6n4sXB' + _0x575bc6(_0x9ba47a._0x1c3909) + 'X4u818EOxB' + 'nkeoTK5kBC' + 'GrLahBhqYG' + _0x575bc6(_0x9ba47a._0x723b58) + _0x575bc6(_0x9ba47a._0x3ce9f0) + 'KQhbaHzr36' + _0x575bc6(0x3ad) + _0x575bc6(0x6e6) + 'ZtVk5PWE79' + _0x575bc6(0x303) + 'vaxUOF1bhR' + _0x575bc6(_0x9ba47a._0x216d37) + 'ZfpwTogbyc' + 'oh77F2HSty' + '/ZMnYoYRuX' + 'PebbMgC4XI' + _0x575bc6(_0x9ba47a._0x4e4481) + _0x575bc6(_0x9ba47a._0x1a174e) + _0x575bc6(0x91a) + _0x575bc6(_0x9ba47a._0x583043) + _0x575bc6(0x486) + 'JGErc8UTI6' + 'X7qNyKgYq9' + 'O1w3D93Q6s' + 'SzPpmuqcCH' + _0x575bc6(0x180) + _0x575bc6(_0x9ba47a._0x1b3ee6) + 'SyQdyYnBKh' + _0x575bc6(0x815) + '0ew8ZpICGh' + 'NYXrVzWIig' + _0x575bc6(_0x9ba47a._0x3a6782) + _0x575bc6(0xf8) + 'jqsLz2r+ln' + 'TN6Pr7TQvb' + 'mao5XgJnw/' + _0x575bc6(0x4d3) + _0x575bc6(0xae9) + 'fFQRJV4hjl' + 'J14JDX8vr4' + '/NHzEG+iZt' + _0x575bc6(0x16c)) + ('XZg3RIRIPk' + 'HgCaMIVyLR' + '3DgIRgGAkN' + _0x575bc6(0x4c9) + 'iUWB56Odqg' + '2FpbIvH2jd' + _0x575bc6(0xc2) + 'jvfLoONgEa' + 'wbwtkEcdiu' + '3jBlfsf7co' + _0x575bc6(0xa1d) + _0x575bc6(0x3a0) + 'WIeYunTU46' + '1GJitAR7Rs' + _0x575bc6(0x65a) + 'AD0agMAH+A' + 'P1lEUov0KS' + 'htKQZiREYy' + '/zcPcJF1if' + 'OFB1UBzxg2' + '8H9fvbqkrb' + 'ZpuycSNgCP' + 'Q46ctsfgwp' + 'NZReO7SlVX' + 'VU1DqdJeiR' + '+tgB10w6gw' + _0x575bc6(_0x9ba47a._0x238306) + '+7p7IA5tdt' + 'AgaMrSAJpB' + _0x575bc6(0x89e) + _0x575bc6(_0x9ba47a._0x3d1c39) + 'aQaA3q2kdU' + 'JaKA2Qj0NQ' + '2LrqJyfUsn' + '0wYzBW5mYt' + '/1aWU+ZLYs' + 'U4NYYiiNlJ' + _0x575bc6(0x57b) + _0x575bc6(_0x9ba47a._0xc36167) + '+IdTIJ3IQC' + 'qJFyoFr1PF' + 'kDdrffF6AX' + 'y1CyZPSvq4' + _0x575bc6(_0x9ba47a._0x20f6f7) + 'eI9gCY8gAC' + 'eNQ8LjoEgD' + _0x575bc6(_0x9ba47a._0xe69789) + 'EiekpYUAQm' + _0x575bc6(_0x9ba47a._0x4ce4a3) + _0x575bc6(_0x9ba47a._0x4f004a) + 'Z/LxIyyYy2' + 'MyqfOX6VVt' + 'seeOXCXLZL' + 'j7WWBp7F95' + _0x575bc6(0xa75) + _0x575bc6(_0x9ba47a._0x43daa9) + _0x575bc6(0x6e8) + 'UcPTW9sz+i' + 'UvK+vEHVpf' + 'ENECGSh9+b' + 'ZiZjJhhzMa' + _0x575bc6(0x75a) + _0x575bc6(_0x9ba47a._0x5eb062) + '9Vf/fOD4Vp' + _0x575bc6(0x4c5) + '7ZmdLHrsen' + 'jbWvtmh+nY' + 'XWqEXBKOK8' + 'T5r8beObW1' + 'AxxeICVeAr' + 'US6030skJV' + _0x575bc6(0x7bf) + 'yPaYYdoKtP' + _0x575bc6(_0x9ba47a._0x59c7cf) + 'TEISNANYDU' + _0x575bc6(_0x9ba47a._0x25df4c) + '3SAsCjvwek' + _0x575bc6(0x7be) + 'huzyFYApHj' + 'zNNY33Yd3E' + '8HU8+0B2Rg' + _0x575bc6(0x3a9) + 'l9Ye9jCMuh' + 'IQWQuYYRFe' + 'cq4wwCNjEe' + 'S76wYQfPGW' + _0x575bc6(0x75e) + 'vCjG+iwPww' + 'hGQidHtAAj' + 'amL1uTrse6' + '7pUFpoGBao' + 'cNH6zDGX3f' + '2EMd7qxMlG' + 'CboiS8w4ea' + _0x575bc6(_0x9ba47a._0x439576) + 'd/VchMo2Z4' + 'K8BonxWCSI' + 'Z29feOfU1s' + '1qnUyQmE5Q' + _0x575bc6(_0x9ba47a._0x3cd4af)) + ('EtCMTnzZgK' + 'H3fzuEMz7C' + 'nAtwIEeDyI' + _0x575bc6(0x598) + _0x575bc6(0xa99) + 'ZFDsagTICN' + 'hxBj5AWieQ' + _0x575bc6(0x302) + 'lmHieclL75' + _0x575bc6(0x406) + 'r1eNCyXQ2j' + _0x575bc6(0xb10) + _0x575bc6(0x246) + 's+N7PimdPK' + 'KjpIBCBXvF' + 'S6jXW0GIQI' + _0x575bc6(_0x9ba47a._0x3813ed) + 'oG1o4RAbPz' + '0lAPXdoI0G' + 'yOg/dZunGV' + 'mHZwUQOGh5' + 'gWIKuRk8hX' + _0x575bc6(0x155) + 'jZwD7leSvP' + _0x575bc6(_0x9ba47a._0x58ddb5) + 'YK8zzjc4Fu' + 'shI0v2DdaE' + 'R6sy7YdJtN' + 'WIb+vAmbIH' + '4hEIeu8DN0' + 'wRvlDx9NpK' + '1C1eyUtwpA' + _0x575bc6(_0x9ba47a._0x267848) + '0bQzRRue9M' + 'wvD4fto/OQ' + 'UPk8zpm1o7' + 'bn7UkENGjO' + 'qGe7bHPG4S' + 'Gog9LtwTyg' + _0x575bc6(0x6e2) + 'doGHPwtRr4' + 'hLQ3HrsTB0' + _0x575bc6(_0x9ba47a._0x54e0ff) + '6TfasNM2WP' + 'XJ3gvE/gjS' + _0x575bc6(0xd3) + 'l4G1AI4QHF' + 'JXXeijrsn5' + 'SdPiHzqnAc' + 'kmLCDz+2/P' + _0x575bc6(0x965) + _0x575bc6(_0x9ba47a._0x3627b8) + _0x575bc6(0x6fd) + '8ZTsHrAHkx' + _0x575bc6(0x2fd) + _0x575bc6(_0x9ba47a._0x4eb21b) + '5KAwjZ9frv' + '/3PWhdg9N7' + _0x575bc6(_0x9ba47a._0x1da8bb) + '74pVm445ff' + 'Xasev7b6v6' + '+Y0zT66o4i' + 'bIPLhz3hSh' + 'lR1ijC95gc' + _0x575bc6(_0x9ba47a._0x592df7) + 'KJhZqL3Q8p' + 'Zqe6sw+ZAO' + 'vWhjBjL6I6' + _0x575bc6(0x655) + 'k7EHmXNHCd' + 'gPEyaw2Dvx' + 'NjiAdqYhEw' + 'Mceu+Jq/52' + '8zE657r9/Y' + 'fXHZN/3ftN' + 'mHj0S6/Enc' + _0x575bc6(_0x9ba47a._0xf0b100) + _0x575bc6(_0x9ba47a._0x5d1610) + 'GTKdYmFROu' + 'Jci/FU5BpJ' + 'QSdRfPlU3J' + '8XVmnPObV+' + _0x575bc6(0x4e1) + _0x575bc6(_0x9ba47a._0x2d33dc) + 'DqGgCNBtKx' + 'QYUNgQd6GC' + 'AYBJ4kw2EC' + 'ELRDAE/ogG' + 'BqcoCCGVBW' + 'UYARd1p/9t' + _0x575bc6(0x3e0) + '4HQM1kIm+c' + '9oxdID/ivu' + '65xtSoSUjJ' + _0x575bc6(0x31f) + _0x575bc6(0x5a4) + _0x575bc6(0x94a) + 'qANF8hGR54' + _0x575bc6(_0x9ba47a._0x3f1603) + 'rXJfoO6SOH') + ('fkqJzQIUcA' + 'TPYMIEEUuO' + _0x575bc6(0xcb) + 'dgqE1RfxGk' + _0x575bc6(_0x9ba47a._0x58c181) + 'AQ0g2JPRzX' + '81jDB3PcRF' + 'LnXNPabMxT' + 'wIUj9WpPJH' + _0x575bc6(0x74d) + 'qZOzYwmx3J' + 'gstQrBgzBQ' + _0x575bc6(0x794) + _0x575bc6(0x795) + 'grqAgllNQV' + 'cHGfumK289' + 'Lp7/rC9t5D' + _0x575bc6(0x898) + 'oUAANoYIeM' + 'QIB5cenBQA' + 'bfRTDqksyu' + 'MVVjh8kEDa' + 'XEvqSamEmM' + _0x575bc6(_0x9ba47a._0x4b2363) + 'ITNUwKa8ed' + 'T/eNzIlhQ3' + 'ds+J/DGdmG' + 'Tz7o1umczi' + 'TVwdIpQqtK' + '3Q04Xg+PJ8' + 'Ov9ZRbM/sv' + 'hyFl+lPJhw' + 'g19ZkHCVlk' + 'PD5sMs6OIX' + _0x575bc6(0xc3) + 't7nfdmRGYy' + 'p7meZxGtoS' + '0JmG4vjBec' + _0x575bc6(0x1a5) + 'LD4eYLjt0N' + 'fWJeKyjave' + _0x575bc6(0x2ef) + 'caSxh9yGmP' + 'mw6WTrH6sc' + 'EDD9jD5BMO' + 'MyC+ZnFTZM' + 'iKmqsiHHeE' + '/eU+jInrZo' + _0x575bc6(_0x9ba47a._0x38c89d) + '48R+GP1WAz' + _0x575bc6(_0x9ba47a._0x3f2cfb) + 'JY2yKMzLSc' + _0x575bc6(0x311) + 'qmyThidsYU' + _0x575bc6(0x249) + _0x575bc6(0xaf4) + _0x575bc6(_0x9ba47a._0x4e4b7e) + 'vo/C6EM7mH' + 'aXThH8KjhV' + '1evF8fA+cJ' + 'mLN6lzN25I' + _0x575bc6(_0x9ba47a._0x5fd45f) + '4jkJbCJCt+' + 'BdAGWYDMGu' + 'yHGsC4bpAI' + 'zNjH8i4tQ8' + 'P6BMbC+wCg' + 'BwB3qwHVBF' + _0x575bc6(0x932) + _0x575bc6(0x8cf) + _0x575bc6(_0x9ba47a._0x4e4947) + 'cEnTdJ2JWz' + 'SSmN6JIuJs' + '0OPcwbIpQp' + 'PqRc/UIeEV' + 'Xm3es17d9s' + 'jSkb/alq0m' + '6UczuIA92A' + '1dQKEb6o3r' + '5nnjOwpZfG' + 'AyAmq4lwlN' + 'MaKkAUSGLi' + _0x575bc6(0x310) + 'OGGsGEKdQL' + '8iSe6xW/rn' + 'Z5sbh58cK6' + _0x575bc6(_0x9ba47a._0x136446) + '/p3C89flmF' + 'hgkJX0ZHMc' + 'gAkRt8bBFH' + _0x575bc6(_0x9ba47a._0x1cb42f) + '3hKieMl47t' + '8bdn16jXbB' + 'zh0Xq0e6er' + 'sBtAy8eA2I' + 'HWnE5JGm4X' + 'eUGsEAGr+G' + 'C4BSKWAnR4' + 'wnWdRw2nMD' + 'qJ9wjbbb8J') + ('2dhqFIhhHK' + 'a0K/AqzZOH' + 'gW5OCzM1le' + _0x575bc6(0x286) + 'Pkwo7ZibvU' + 'ZzJl79cTTw' + _0x575bc6(_0x9ba47a._0x4f6351) + 'XTiUzBKnVb' + '6mdO2dvJrx' + _0x575bc6(_0x9ba47a._0x4f4303) + '6i74IvJXJx' + _0x575bc6(0x369) + 'jCLY3hJzQi' + '2HmxCYsjj4' + 'sDgVAa/geg' + 'RybtvyCBIX' + 'bsjM/BPIyv' + 'HYpcd3qkse' + 'nbFsrujttM' + 'RtxhoGFLB8' + '6AWjq1BR1L' + '0SvWAnGZY+' + 'v/8Mkfh1Xs' + 'OkcZq3dTY3' + '9qwGdAgAUE' + _0x575bc6(0x66f) + _0x575bc6(0xa9a) + 'm5HnMVJKM3' + 'BLB4IFAcPc' + 'Y6dI9uetOz' + _0x575bc6(_0x9ba47a._0x3696df) + 'sSiPcd0UGQ' + _0x575bc6(0x157) + _0x575bc6(_0x9ba47a._0x74180) + _0x575bc6(0x7dd) + 'rcCNxtIAVD' + 'aiKINXBeW8' + 'q0316p/WPE' + _0x575bc6(0x9b9) + 'VO02dGMbQA' + 'aGPfFxHAEi' + _0x575bc6(_0x9ba47a._0x1ac181) + _0x575bc6(_0x9ba47a._0x365f08) + 'U9/KYnRm9y' + 'QD381gd5kI' + 'E8KoY0NAo+' + '/B/oRX18Kw' + 'wimxDg/ETw' + 'c2M23VtsIk' + 'BzENUjUJe0' + _0x575bc6(0x6a0) + 'YNVJQHCKtQ' + '3hPzzy7LB7' + 'G4aqVr13z8' + 'A862B/tq1P' + 'HuH3DBS+MB' + _0x575bc6(_0x9ba47a._0x16ff7b) + _0x575bc6(_0x9ba47a._0x4856c8) + 'APzcAfs19i' + '7wZITlEBQq' + 'E0g7ZpoNVr' + 'cCuDEAn85d' + _0x575bc6(0x81d) + 'Toz0QOa18a' + 'mYPjckQNww' + 'hVkIDeKNU2' + '4W1sk49cap' + '8rFNGx99lt' + 'zV8E/Fqovd' + 'UIw2HbtMA9' + '/AdwNt4oVu' + 'g53RMzfkD2' + '8HCHRDMe5i' + _0x575bc6(_0x9ba47a._0x4c13d9) + 'gijQCY0tKQ' + 'ssPSQqEQns' + 'D2/jo2sais' + '7dpjZmifWH' + 't5CG3uU6zY' + 'w56SignPno' + _0x575bc6(0x419) + 'ZpGTzCQYHW' + _0x575bc6(0x888) + _0x575bc6(0x444) + _0x575bc6(_0x9ba47a._0x4ae6c6) + 'CzefkYjCYz' + 'Egifkuhr1g' + '4AxiUioZcB' + '8ngZ3J6jwe' + 'N2oxBIJADV' + 'mWjAYyJDPW' + 'wDd2QtxI6Z' + 'BQ2rBhIZJW' + 'IglYEzcqMO' + 'O053B/jaGY' + 'fmCSfMHeHE' + 'd2K+S2UYN3' + _0x575bc6(_0x9ba47a._0x57709f) + 'ztwGkvXidP' + 'N9SptqOV7s') + ('Moe03xlG70' + _0x575bc6(0x59e) + 'ATvINPzTvJ' + 'CXrsAEkeNH' + 'tagmEHFiUp' + _0x575bc6(0x51d) + _0x575bc6(_0x9ba47a._0x431bca) + _0x575bc6(_0x9ba47a._0x3f82e7) + _0x575bc6(_0x9ba47a._0x317ca1) + 'WEzs+vC2HK' + '3Mkb2fbG5u' + 'JtnZSMwETA' + 'ztH3QN7QBJ' + '8UKFeYP3g+' + 'c02DXmyyN4' + 'tGgcuuEAAE' + _0x575bc6(0x3a3) + '1b4rQSZlj+' + '2GVdEX6qfs' + 'rExUvM08Uj' + 'KAHk4izUOg' + '10TQ0QFTZy' + _0x575bc6(_0x9ba47a._0x5f3a27) + 'Bl6rjwozAa' + '47breegJX9' + '7WQ0vU6ybN' + 'lPTrX9xqdy' + '/o31uY290N' + 'qaUDgmyObi' + 'wO1Nn2rFSb' + 'p5lobVt76V' + _0x575bc6(_0x9ba47a._0x24e28c) + _0x575bc6(_0x9ba47a._0x925069) + '0P+MR1Hu4m' + 'Uz44GpHJTF' + 'QaABu4aXoa' + 'G9hBfE3sWe' + '8hkgoIeL78' + 'Rj3NjFWo/G' + 'IS3ESIreOv' + '7GEovabI61' + _0x575bc6(0x790) + 'DJXbsjv66U' + 'L/zxBdD6YV' + 'lbaAiextpn' + 'oGS3Rk0whs' + _0x575bc6(_0x9ba47a._0x1d34eb) + 'Nkga7FlsOp' + 'JBM7BXnJUq' + _0x575bc6(0x7d5) + 'GyAF/MzjXt' + _0x575bc6(_0x9ba47a._0x527cf6) + 'LZfUg/dFTx' + 'vLYABPmeJH' + _0x575bc6(0x54e) + 'PPQQSiVE2s' + 'mqIoGn/KpI' + 'rJ7vGyl3qv' + _0x575bc6(_0x9ba47a._0x25e43b) + 'fPqWf5t/lx' + _0x575bc6(_0x9ba47a._0xb4a879) + _0x575bc6(0x6c6) + _0x575bc6(0x3e6) + '2PXm/ZtTjl' + _0x575bc6(0x5f3) + _0x575bc6(_0x9ba47a._0x759324) + _0x575bc6(_0x9ba47a._0x290241) + _0x575bc6(0x987) + _0x575bc6(0x3e8) + 'b2KfnNyTNM' + _0x575bc6(0x651) + 'QzAMHvzg6Z' + _0x575bc6(0x62a) + _0x575bc6(_0x9ba47a._0xabe438) + 'Ox7neu+YU3' + _0x575bc6(0xa5c) + _0x575bc6(0x208) + 'awDijWlTW2' + 'XpPJe++s1/' + 'pUQacoYcYc' + 'ymJSeELQ8p' + 'EExo2HQUqw' + 'mo+BIjLaZU' + 'Db1qZNGR0v' + _0x575bc6(_0x9ba47a._0x4b16d0) + 'EtbBBPu8BG' + 'ZWJSwJjP1j' + 'ej0NCHeZdm' + 'O2f/D07FNg' + 'Ne7E5BMabQ' + _0x575bc6(_0x9ba47a._0x6c3dd3) + 'v1Zwe0PKZU' + 'PPGQOt+FYT' + 'Y2R0A+jFIE' + 'h8/Y41m2zn' + 'QrMSRyPpsB' + _0x575bc6(0x5be) + '79ugGXbkNm' + _0x575bc6(0x433) + 'ZexRw4sL9k') + ('AXYts8cLKG' + 'xrwcdqW9eh' + _0x575bc6(0x9d4) + 'OvGqR4S0+v' + 'B9eMb0yc+A' + 'OgHsTY+eiP' + 'VcUnfHPl/Z' + 'to5o4VNTLS' + 'yoz143MhkH' + '5w1tkXFU4M' + 'aZRyvXf3mk' + 'Bz+ZGBEVdE' + 'r7KZiaUKVg' + '6lcyzNkxQB' + 'oGQoaWYlDO' + 'uOUa7vTRGm' + 'rWvhuSYYcU' + _0x575bc6(0x26c) + _0x575bc6(0x5f2) + _0x575bc6(_0x9ba47a._0x338cb0) + 'Sop+rjkDaf' + 'KJ64sFCwr+' + 'DdytQZ3pnt' + 'rOADI9+J7A' + _0x575bc6(0x56a) + _0x575bc6(_0x9ba47a._0x19beb2) + _0x575bc6(_0x9ba47a._0x59f0bc) + 'jIUgjylVlD' + 'hBCLCNjKEj' + _0x575bc6(_0x9ba47a._0x5a7f14) + 'KBWRlM49ih' + _0x575bc6(0x8c9) + '5YdF4HHKMg' + _0x575bc6(_0x9ba47a._0x1a7e05) + 'Gk0TQUx8MA' + '0joI3f72CQ' + 'fjnEw29YWK' + _0x575bc6(0x23d) + '77U9uBysW/' + _0x575bc6(0x612) + 'iPgXOB0ikd' + _0x575bc6(_0x9ba47a._0x169125) + _0x575bc6(_0x9ba47a._0x3a66ac) + 'wZXBvhuiiv' + 'X/mD0PDrYi' + 'jpVYxm+iJ8' + 'eKBgIZiX9s' + _0x575bc6(0x810) + 'qjXBrG/Dp0' + _0x575bc6(0x760) + 'cxxIKTr4/8' + _0x575bc6(_0x9ba47a._0x14e9a8) + 'T3z5XcuW+V' + _0x575bc6(_0x9ba47a._0x56b832) + _0x575bc6(0x24b) + _0x575bc6(0x539) + '674AALrrAL' + 'Zk4MmgvBYD' + _0x575bc6(_0x9ba47a._0x5bde37) + 'C7DggvGulA' + _0x575bc6(0xabc) + 'w9gOfJYdMi' + 'jjdyRRN9Dp' + _0x575bc6(_0x9ba47a._0x45c42a) + 'sNE01Y94Pm' + 'P9HKGdQT1s' + 'mwsvtx6Nzj' + _0x575bc6(0x6c0) + '+/cqx6VDfM' + '/UQjRhx3q3' + '1Ea331G1U3' + 'pa36sqcZr8' + _0x575bc6(0x7c2) + '5oQeDaJxxA' + 'wetmbhDi3o' + _0x575bc6(0x4b7) + 'UDedDdlsjD' + 'BhEXDSCLa1' + 'pCkNvRCmMl' + 'hvHOtLQ0LJ' + 'gIsTDAMIyd' + 'fu/cARhfh9' + 'V41+3NA4lQ' + 'XIR7oeP317' + '58QeMYkSXi' + 'oqZEJREjrg' + 'R69Yef33LV' + 'X4b0xBmOII' + 'uOGRcWNKRt' + '4gWM3yc+kw' + _0x575bc6(0x93b) + 'bksQ5TNkNP' + 'OQgYWWRu4f' + 'A+PsTQAaeu' + '7QZViYSbni' + 'IXRaUSbRvW' + 'RYGpDQMLg0' + _0x575bc6(_0x9ba47a._0x162907) + _0x575bc6(0xaae) + _0x575bc6(0x129)) + ('HZjGA6mJjf' + 'iumNbFidPu' + 'JA9arXXFf9' + 'mOuhfQjtCQ' + 'sCFYrByfa+' + _0x575bc6(_0x9ba47a._0xb2708c) + 'bWNkQQZs4B' + 'zakgpCNadp' + '8zADPpiNiI' + _0x575bc6(_0x9ba47a._0x191e8c) + 'qyUwzFhjCC' + _0x575bc6(0x170) + _0x575bc6(0x5d8) + 'pv/XY2WOLL' + _0x575bc6(0x9b5) + 'thTpsGrYS4' + 'bhbzRQxdMX' + 'rfRt++qWa3' + '4MqGoSYQYU' + _0x575bc6(_0x9ba47a._0x347c57) + _0x575bc6(_0x9ba47a._0xcd692c) + 'bXMKgjYUCf' + 'qRgYwg8mEQ' + 'SWfkVym66i' + 'iakYeRbzOA' + _0x575bc6(_0x9ba47a._0x4a979a) + 'W0YSFUryHQ' + 'yA81kjYM4H' + _0x575bc6(0x991) + 'sLD/mBn65l' + 'r73rqfV49J' + '1Av0t4hlQ3' + 'xs9Ij1ty9L' + 'V/0Yuhl9GB' + _0x575bc6(_0x9ba47a._0x501562) + 'qIeURE8xsj' + 'crVIKUjF4o' + _0x575bc6(_0x9ba47a._0x18c9ec) + _0x575bc6(_0x9ba47a._0x55d31f) + 'lKFe7RrjYc' + 'CQhJ25OGyp' + 'PVychjrTII' + _0x575bc6(0x120) + 'GnAvPAXUk+' + 'ocXAZzjR0c' + 'VJz+0VsLnt' + _0x575bc6(_0x9ba47a._0x2bbbbf) + 'UzLH3TH+L6' + 'YjA9qjL3XI' + 'rF98wJ4kCw' + 'MqiB+I5Gck' + 'ytPsKpakJb' + 'Cw0D8zCo23' + 'GmXFA4UTGP' + 'DHRA7WhaMg' + 'HnPfTVzof1' + _0x575bc6(0x30a) + 'DV45MP4n/H' + '5RofPwNNtA' + 'STtqV4xOLK' + 'wu+cd+YUdE' + _0x575bc6(_0x9ba47a._0x4de07c) + 'J8cwNRCkrW' + 'viTq4JUIlA' + 'Xwl/L2JWho' + 'hCkSWQx7MF' + 'DQF01LNrIc' + 'yUeJ8TNKHB' + _0x575bc6(_0x9ba47a._0xd8a0e9) + 'RG76Y5quvf' + 'w2c29Oepb8' + 'KWUTy9vJ2/' + 'vNp9htFZCS' + 'WiYOqt7vo/' + 'D+7c37bdCl' + '9HxVnIgTIg' + 'KMybPP6bUz' + 'bxOA7zo2yI' + 'SWO9KND3TD' + _0x575bc6(_0x9ba47a._0x3bb891) + 'XFngUy8E3s' + 'R0cNh6mHBK' + 'AYX0h28lhb' + _0x575bc6(_0x9ba47a._0xd97a42) + '2pCT30e5NP' + _0x575bc6(0x9f6) + 'fd1Kdlh+7c' + 'Wzi65TiXgE' + 'XY+Kedz7iO' + 'buPIkIEfJK' + 'NlhN65YU5o' + _0x575bc6(0xaa1) + _0x575bc6(0x56f) + 'MvIAUjKM6l' + '6NJpwd6P+q' + 'sTAa+9P1WB' + 'ACwWIKSUkW' + _0x575bc6(0x38e) + _0x575bc6(_0x9ba47a._0x58a8d1) + 'OeVmhdPwcN') + ('+WdX1mkG/6' + _0x575bc6(_0x9ba47a._0x28910a) + _0x575bc6(_0x9ba47a._0xaeb445) + _0x575bc6(0x4c3) + 'vEjNvgzKLx' + _0x575bc6(_0x9ba47a._0x2c3913) + 'r5k7qPsQcT' + _0x575bc6(_0x9ba47a._0x1acdbb) + 'ZYgQR7EBht' + _0x575bc6(0x8a6) + 'qGkMbHHt6r' + 'PHI6rNwpoS' + 'Z+o3Y804mx' + 'yZWFw9dEDN' + _0x575bc6(_0x9ba47a._0x559957) + 'OftWitco8U' + 'Q0FI1CjO4z' + 'U95uqI5iRs' + 'lkDDpAV2Ib' + 'M74sRizdWF' + 'cIFJjCYXHG' + 'WEYipMSuAt' + '/J3p2BM9YM' + 'aZXB54g0jY' + 'bSQqSTeelp' + 'IY3vPqycDi' + 'qcrl+d/c4M' + 'E7bdxHL+oK' + 'UnlbGRVH2B' + 'l3jiX1bnI+' + '/8kKLqSBgP' + 'AYI+CN9oJG' + _0x575bc6(_0x9ba47a._0x425c1d) + 'tROfzSiHXS' + _0x575bc6(0x5ca) + _0x575bc6(_0x9ba47a._0x591834) + _0x575bc6(_0x9ba47a._0xdb6fb6) + _0x575bc6(0x460) + 'D3YvxlWAiG' + 'WT44gIeTnR' + 'oqnLY335BP' + '7Q8DmJPVK/' + 'JajLa+vnwr' + 'y9PFP+T+UO' + _0x575bc6(_0x9ba47a._0x1502b2) + _0x575bc6(0x301) + _0x575bc6(_0x9ba47a._0x4b6f0f) + _0x575bc6(_0x9ba47a._0x481db3) + 'BDkoEWIybb' + 'cf/iXQrYMz' + _0x575bc6(_0x9ba47a._0x32d8c9) + 'YzGB6maVMG' + 'cuLYRpZjIs' + 'RMKB1cedH3' + 'n8Ov0cAsOk' + 'eHV6LP2RTK' + 'o7uHicQ6BM' + '2TD6cgdvk/' + 'fu39XZ052o' + 'ecWgYQqmhI' + _0x575bc6(0x4fb) + _0x575bc6(0x76d) + 'lJwM7uQD2M' + 'NwlrgQ0qsj' + _0x575bc6(0x78b) + _0x575bc6(_0x9ba47a._0x4cfe0d) + '/oEIcWwngL' + '/s8gd8Inv5' + _0x575bc6(0x670) + 'MxcMsMmz51' + _0x575bc6(_0x9ba47a._0x4c7521) + 'YAvbr6wKms' + _0x575bc6(_0x9ba47a._0x1a3715) + 'StFoB7sd0x' + 'ip3Uyd9PRT' + 'zuiXAmi2B2' + _0x575bc6(_0x9ba47a._0x16621c) + _0x575bc6(_0x9ba47a._0x2d935d) + 'EKFRiSm61u' + '3JWMiFgGE4' + 'CMONrGbOvm' + _0x575bc6(_0x9ba47a._0x11ead9) + 'iWMK6WBjDi' + '3eCU/gs+xT' + 'qj+RLhIbsq' + 'Uwt8B9HuNh' + 'rH0DLM5iH8' + '96P1Y9LsnI' + '7pJh6CaViP' + 'xJwwtnqMRw' + 'EI2EczHs9I' + 'R/WJhSp9Kf' + 'QA8itGV/Dn' + 'jZh1HCS6WD' + 'wtECR2KE4G' + 'HFqIq5j6Rq' + 'UpnQgUUCax' + 'sMToH29dd/' + 'IxpWemc4zF' + _0x575bc6(_0x9ba47a._0x304154)) + (_0x575bc6(0x8b6) + _0x575bc6(_0x9ba47a._0x35ee1b) + _0x575bc6(_0x9ba47a._0x47fbf5) + _0x575bc6(_0x9ba47a._0x2f1d8a) + '9KMt7DayfJ' + 'aPQtI7eMXB' + '0oHhR1SXxQ' + 'cjjXooBhK6' + 'HWQTeH3jsD' + 'R/ifnqzwtX' + 'Q1HPesCrEl' + _0x575bc6(_0x9ba47a._0x2838af) + 'Ipwxc9fPMD' + _0x575bc6(_0x9ba47a._0x5dea95) + 'oXT+yS0S4M' + '9n9IP1QM+7' + 'eBlndMmq6v' + 'oB8XY2iW7c' + 'kIJrQ2Cjv0' + '2DWg4VxLRy' + _0x575bc6(_0x9ba47a._0x789920) + 'NXTvrjOACl' + '/Pw8bvy1i0' + '028W4rds4F' + _0x575bc6(0x29a) + 'ugANIB09Ni' + 'OghjYRSQLm' + 'eJvYC0alg6' + 'En85jINQIs' + 'GKXo055GN0' + _0x575bc6(_0x9ba47a._0x10f45c) + 'x89HERUgGU' + 'BH5HIKoL0E' + 'aZ2oXQFCIx' + '6f8YszgApf' + 'y8N9bJz++P' + _0x575bc6(_0x9ba47a._0x10b2b8) + _0x575bc6(0x40d) + _0x575bc6(_0x9ba47a._0x20ad6b) + _0x575bc6(_0x9ba47a._0x3dadd7) + 'lU7Ri7qd//' + 'wdXvwWA9Kd' + '6IY8q/2btT' + 'jiSP4jRsjk' + _0x575bc6(_0x9ba47a._0x4fc324) + 'vBtaeyZQ4U' + _0x575bc6(0x1af) + 'A+cbkzCXUD' + '55PxzW4nxL' + _0x575bc6(0x7aa) + _0x575bc6(0x527) + _0x575bc6(0x4f0) + 'iVKXaioL5F' + 'grJSOyPJw2' + _0x575bc6(0x377) + 'BFoNiBQy0A' + 'ILYHXBERhp' + _0x575bc6(0x5c6) + _0x575bc6(_0x9ba47a._0x21e732) + 'cEZymH2K5G' + '/LKOsPyMcB' + 'zMNbKsO5+t' + 'AYCk+29xCd' + 'FkhGwhUzMz' + _0x575bc6(0x580) + 'SCkkmsRYXD' + _0x575bc6(0x186) + 'PLkvKtWfYU' + 'fjw4Q/6wGo' + 'n4WbwsROxz' + _0x575bc6(_0x9ba47a._0x54b2ad) + '5WevOzOocC' + 'Y8nGDjN3/U' + _0x575bc6(_0x9ba47a._0x2be707) + 'A85bw6am/K' + _0x575bc6(_0x9ba47a._0x4b3bce) + _0x575bc6(_0x9ba47a._0x472b3f) + _0x575bc6(_0x9ba47a._0x154b3e) + 'jbj5feKUeY' + _0x575bc6(0xd9) + 'xe0eTeYWlH' + 'UpCBmfRlQv' + 'jTf6xOPUOo' + 'cIZYjdonOq' + _0x575bc6(_0x9ba47a._0x5ef4ac) + _0x575bc6(0x205) + 'k+YeMNvvKE' + 'q57YchjIHt' + 'yQ0b9YSRPz' + 'bo7Zz4nbY3' + 'wRRbsJba3O' + 'NFYbzdJyV4' + 'RGfnSmUOFM' + 'sSYEZHpO33' + 'SeTCTrfRf3' + 'DDkmht8njB' + 'BgAiZAcmN/' + _0x575bc6(0x3ac) + _0x575bc6(0x7ad) + 'lrVnoD/bZP') + ('iGLBDDqrf4' + 'LLNJRYkE2P' + 'fMgvzWcn2j' + 'MQr8TKDCGc' + '/lMj7t8D1s' + 'mheSaGGk0n' + 'ILUDMrg+xL' + _0x575bc6(_0x9ba47a._0x13e742) + _0x575bc6(_0x9ba47a._0x4098ea) + 'lH2VW+i6ZY' + 'BhaXSjYsHQ' + 'voby12CK9O' + 'Q2lVFhMyoq' + 'jGnwWdZDCi' + 'sT6AxR0ok/' + 'fPEuZeMlZw' + '4VzpiuA877' + _0x575bc6(0x1d3) + 'epS+7uSdSm' + '9DFuv1c+QM' + 'FE3KnfbErp' + _0x575bc6(0x2fa) + 'r2YIrWM7Q7' + _0x575bc6(0x7ef) + 'JRFhUrQIxL' + '7kwzxcjqwI' + _0x575bc6(0x132) + 'mrdmfGbbVX' + 'lYOJt+8zvx' + 'e9DDTqRqDI' + 'XRz89tyIcs' + '8kkAMMEoMM' + _0x575bc6(0x618) + 'mDQRJk8koV' + 'mdFkCQ0FHn' + _0x575bc6(_0x9ba47a._0x43a0df) + _0x575bc6(_0x9ba47a._0x2b3a3f) + 'kU7szOlMC8' + 'XJFX/MT/1G' + 'UOEbzZYzFO' + '3Ql00A+yfd' + _0x575bc6(_0x9ba47a._0x158209) + 'nHeH/lg8HO' + 'Gei71CfQdx' + _0x575bc6(0x59c) + _0x575bc6(_0x9ba47a._0xb02e91) + _0x575bc6(0x74b) + _0x575bc6(_0x9ba47a._0x455a0d) + 'ByoBvr2Ljk' + 'sWKcFR3SNK' + 'CUpEGa6dIp' + _0x575bc6(0x480) + _0x575bc6(_0x9ba47a._0x36cb7b) + _0x575bc6(_0x9ba47a._0x2d209f) + 'JgGL0HMD/F' + 'SKQy744Nl8' + 'xgNWeMeizr' + 'bBQSIPiMrv' + _0x575bc6(_0x9ba47a._0x59f2ae) + _0x575bc6(0x9c5) + 'YzmNGYkcwD' + 'HZOVYcLjY7' + _0x575bc6(_0x9ba47a._0x20cc16) + _0x575bc6(_0x9ba47a._0x3f64f5) + _0x575bc6(_0x9ba47a._0x3fbb49) + '8M8hq22uPy' + _0x575bc6(0x21c) + _0x575bc6(0xa1f) + '92kkoQtgJG' + 'FTgqopSRzY' + _0x575bc6(0x41c) + 'qBE3R47Jwz' + '5twIg3YCtO' + 'KC20lFuf8O' + _0x575bc6(_0x9ba47a._0x5ec59d) + _0x575bc6(_0x9ba47a._0x5c1a6e) + '19hgTTHCc4' + 'dawhYZCmGV' + _0x575bc6(_0x9ba47a._0x1efd3a) + _0x575bc6(_0x9ba47a._0x361cfd) + 'k66+0xhtpm' + 'UNlhaEzHML' + 'ShtNWvHKz/' + 'xkSFbzMLMv' + 'H58gfbOMy8' + 'o3mIlnp3AP' + '+8Hep5eyJT' + _0x575bc6(_0x9ba47a._0xbf31e0) + 'uH/D2o1A4p' + 'jfMjUC41G3' + 'cQS7gCR/Sg' + 'VsIxSZAMwH' + 'FjRYVAJ2DU' + 'EKHC6EufX/' + 'utoMI3p+uA' + '3/XIx3/oUw' + 'uDf9iXaj3G' + 'ABpg4gG/Zl' + 'bziT0cGXZN' + 'GPs/FzOozI') + ('CwxuOdgFZh' + 'mkHbew48MO' + 'Vb8O+3nfHZ' + 'V72cW3lPX3' + 'TekEF2HnPf' + '7CU71GN5N/' + _0x575bc6(_0x9ba47a._0xfbc3e) + _0x575bc6(_0x9ba47a._0x535ef2) + _0x575bc6(_0x9ba47a._0x3c8ac4) + _0x575bc6(_0x9ba47a._0x1a0eba) + 'EZjEGTc61q' + 'vDMNraRhLG' + 'AYvyJz9cIE' + 'Ub8pVPg2dB' + '1E2qW/aRtE' + 'rbzmAUshuc' + _0x575bc6(0x234) + 'xQM+LR83cn' + 'kDzgNwSfsv' + _0x575bc6(_0x9ba47a._0x1a1190) + 'jySLFjWCcS' + _0x575bc6(0x147) + '8mfWOiwree' + '3dp3U1/9+D' + _0x575bc6(0x653) + 'gWInEfPDWG' + '0pQ6cZ8W1G' + 'WwjaWWaclT' + 'skdiwzIbpw' + _0x575bc6(0x416) + 'zbngzkyJCR' + _0x575bc6(0x840) + _0x575bc6(0xa80) + '328BFb4lXQ' + 'dI++a1j3z8' + _0x575bc6(0x6a1) + 'zZ63HuB1YQ' + 'DLRoMGkdKG' + _0x575bc6(0x7e9) + 'DE2DlE7hyL' + 'mZ2+M97RmB' + 'jKReBx9H/w' + '1Y6hH+p9X+' + 'Vt+RRt8GKX' + 'wHrP1ou+Dp' + _0x575bc6(_0x9ba47a._0x1fcd6e) + _0x575bc6(_0x9ba47a._0x4627c8) + 'TAipY0zlRG' + 'I1weDY3Mo2' + 'LemawT+8mM' + _0x575bc6(_0x9ba47a._0x16ee5e) + _0x575bc6(_0x9ba47a._0x286e73) + _0x575bc6(_0x9ba47a._0x589d5f) + 'G8PAWpEHSW' + 'Wa3jfPhTnc' + '7C1ZGnPHWd' + _0x575bc6(_0x9ba47a._0x454b08) + _0x575bc6(0x22e) + 'aUDBseZwEL' + _0x575bc6(_0x9ba47a._0x1ff95a) + '+IdVDY75Zf' + 'oetltPzVY2' + '3ZIMgDhYfM' + 'SEr0KmNPMr' + '4/0XYEQIa+' + '+4R24OARag' + _0x575bc6(_0x9ba47a._0x6b1529) + 'j18d+vOU/g' + _0x575bc6(_0x9ba47a._0x16f0ba) + _0x575bc6(0x27b) + '7EaZ9y5duK' + '6zOMO4B4+t' + _0x575bc6(_0x9ba47a._0x58f7e5) + 'LSxeC2Qmm8' + '6nv7j4KPBa' + 'UjhPY6UBtP' + 'PTat/rbOD9' + 'd0UK3x3rIL' + _0x575bc6(_0x9ba47a._0x4102fd) + 'gufKKgiTGw' + 't6+rj7GDLz' + _0x575bc6(0x8cc) + '8qjdEjmHHk' + _0x575bc6(0x9ee) + 'z1wBlr3wkp' + _0x575bc6(_0x9ba47a._0x569b91) + _0x575bc6(0x6ad) + 'Yzu5lmilT8' + 'SS+t113LKJ' + _0x575bc6(_0x9ba47a._0x1aa3b2) + 'Kz6bM4MQeT' + 'RlhVCKWZ7j' + '5wXunEndee' + 'JaRwdrAORt' + 't14Gf6b3SM' + 'mrSxilAWK+' + 'qzFgccg0AG' + 'NSWG2iSiSq' + _0x575bc6(0x8c3) + 'QUCooRF3H1') + ('B+Mgjod0cK' + 'ZwvrsXBTlx' + _0x575bc6(_0x9ba47a._0x5a2208) + _0x575bc6(_0x9ba47a._0x5d1376) + 'q+UiUWcUlE' + 'WTAwSpJNe2' + _0x575bc6(_0x9ba47a._0x25c184) + 'ZvVnrVO/3w' + _0x575bc6(_0x9ba47a._0x4e5da2) + 'sPIM+POaGw' + '4eHM6DxloT' + _0x575bc6(0x312) + 'jDuRnsX5TM' + 'ilo20x76Zg' + 'jabpq284VB' + _0x575bc6(_0x9ba47a._0x41f260) + 'zHwoXhhwo/' + _0x575bc6(_0x9ba47a._0x2cfe8e) + _0x575bc6(_0x9ba47a._0x53a664) + 'djYdg9dICv' + 'x5VfiXw7dA' + '/ecfwKLBmd' + 'SzBRTOOtZj' + _0x575bc6(0x920) + 'cn/LIIEffj' + 'w9IzPk4S00' + '7sQUg56Hs6' + _0x575bc6(0xa27) + 'E1omcRKZx9' + _0x575bc6(_0x9ba47a._0x2789cb) + _0x575bc6(_0x9ba47a._0x43e8d2) + _0x575bc6(0x797) + 'Ngp/Hexy9t' + 'fGv1PSO++s' + _0x575bc6(0x837) + 'g/VkeFmU6t' + _0x575bc6(0x553) + _0x575bc6(0x6d9) + 'Rtn8CASfTf' + _0x575bc6(_0x9ba47a._0x2fe31e) + _0x575bc6(_0x9ba47a._0x3e5501) + '+d/G+jV4/1' + 'dx/m9gPXPE' + '/02UwNb/Dt' + 'bEOjnk/z7I' + _0x575bc6(0x6d6) + 'Oecg7oAAAA' + _0x575bc6(0x7b1) + 'CC\x22\x20alt=\x22L' + 'ogo\x22\x20style' + _0x575bc6(_0x9ba47a._0x1e01e3) + _0x575bc6(0x436) + 't:\x20auto;\x22>' + _0x575bc6(0x32f) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x32764d) + 'div>\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20<h1' + '\x20style=\x22ma' + 'rgin:\x200;\x22>' + _0x575bc6(_0x9ba47a._0x4721f6) + 'tbar\x20Build' + 'er</h1>\x0a\x20\x20' + _0x575bc6(0x469) + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x5e442e) + 'credit\x22>©\x20' + _0x575bc6(_0x9ba47a._0x2f453c) + _0x575bc6(_0x9ba47a._0x4f8c4f) + '\x20-\x20<a\x20href' + _0x575bc6(0x423) + 'sanghendri' + _0x575bc6(0x7f1) + '>sanghendr' + 'ix.itch.io' + _0x575bc6(_0x9ba47a._0x5c02e8) + _0x575bc6(_0x9ba47a._0xea72f1) + _0x575bc6(_0x9ba47a._0x49e086) + '\x20\x20\x20\x20\x20\x20\x20</d' + 'iv>\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20</' + 'div>\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20</div>\x0a\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20<div\x20' + 'class=\x22con' + _0x575bc6(0x693) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0xa23) + 'div\x20class=' + '\x22hint\x22\x20sty' + _0x575bc6(_0x9ba47a._0x36f14b) + _0x575bc6(0x3eb) + _0x575bc6(_0x9ba47a._0x5afae8) + ':\x20center;\x20') + ('justify-co' + 'ntent:\x20spa' + 'ce-between' + _0x575bc6(0x470) + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20<d' + 'iv\x20style=\x22' + _0x575bc6(0x3b1) + _0x575bc6(0x1e2) + _0x575bc6(0x188) + _0x575bc6(0x4aa) + _0x575bc6(0x886) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20<but' + 'ton\x20class=' + _0x575bc6(0x7f6) + _0x575bc6(0x684) + 'k=\x22window.' + 'open(\x27http' + _0x575bc6(_0x9ba47a._0x38d5a0) + _0x575bc6(0x4c7) + '.io/hotbar' + _0x575bc6(0xa93) + 'pg-maker-m' + 'v-mz-plugi' + 'n\x27,\x20\x27_blan' + 'k\x27)\x22\x20title' + _0x575bc6(0xa8f) + 'torials\x22\x20s' + _0x575bc6(_0x9ba47a._0x4f7a7d) + 'ground:\x20#f' + 'f0000;\x20pad' + 'ding:\x206px\x20' + '10px;\x22>▶\x20T' + 'utorials</' + 'button>\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x746) + _0x575bc6(_0x9ba47a._0x3c27dc) + '\x22save-butt' + 'on\x22\x20onclic' + _0x575bc6(0x745) + _0x575bc6(_0x9ba47a._0x4ec5e9) + _0x575bc6(_0x9ba47a._0x2069bc) + 'd.com/invi' + 'te/YKPscqH' + _0x575bc6(_0x9ba47a._0x58ef32) + 'ank\x27)\x22\x20tit' + _0x575bc6(0xae3) + _0x575bc6(0x9a0) + _0x575bc6(_0x9ba47a._0x2e70b0) + _0x575bc6(0xad6) + '\x20padding:\x20' + '6px\x2010px;\x22' + '>Discord\x20S' + 'upport</bu' + 'tton>\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '</div>\x0a\x20\x20\x20' + _0x575bc6(0x469) + _0x575bc6(_0x9ba47a._0x411218) + _0x575bc6(0x779) + 'e=\x22text-al' + 'ign:\x20right' + ';\x22>\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20Click\x20an' + _0x575bc6(0xa6e) + 'r\x20slot\x20sho' + 'wn\x20in-game' + '\x20to\x20adjust' + '\x20position\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x550eab) + '\x20\x20\x20\x20</div>' + _0x575bc6(0x32f) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20</div>\x0a\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0xa23) + 'div\x20class=' + '\x22toolbar\x22\x20' + 'style=\x22dis' + 'play:\x20none' + _0x575bc6(_0x9ba47a._0x203bba) + _0x575bc6(_0x9ba47a._0x575e6d) + _0x575bc6(_0x9ba47a._0x513bd8) + _0x575bc6(0x5c1) + 'for\x20now\x20-\x20' + 'functional' + 'ity\x20kept\x20f' + 'or\x20future\x20' + 'use\x20-->\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x52e3bc) + _0x575bc6(_0x9ba47a._0x1b2815)) + ('class=\x22too' + _0x575bc6(0x42e) + 'onclick=\x22r' + 'esetPositi' + 'ons()\x22\x20tit' + _0x575bc6(_0x9ba47a._0x554d60) + 'all\x20slots\x20' + 'to\x20default' + '\x20positions' + _0x575bc6(0xa95) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20↺\x20Reset\x20P' + _0x575bc6(0x533) + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20</butto' + 'n>\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x20b513) + _0x575bc6(0x32f) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20<div\x20clas' + 's=\x22main-co' + _0x575bc6(0x766) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x3074c4) + _0x575bc6(0x796) + _0x575bc6(_0x9ba47a._0x578b40) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20<div\x20cla' + 'ss=\x22sectio' + _0x575bc6(0x362) + 'style=\x22dis' + 'play:\x20flex' + ';\x20align-it' + _0x575bc6(_0x9ba47a._0x170073) + _0x575bc6(0x3ba) + '-content:\x20' + _0x575bc6(_0x9ba47a._0x1d3b7a) + 'een;\x22>\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + _0x575bc6(_0x9ba47a._0x8bc3c2) + 'h3\x20style=\x22' + 'margin:\x200;' + '\x22>Hotbar\x20G' + _0x575bc6(0x8e5) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20<button\x20' + _0x575bc6(0x696) + _0x575bc6(0x5b5) + '\x20onclick=\x22' + _0x575bc6(0x91f) + _0x575bc6(_0x9ba47a._0x47b395) + 'le=\x22Create' + '\x20a\x20new\x20gri' + 'd\x22>\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '+\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20</butt' + _0x575bc6(_0x9ba47a._0x1f08a0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20</div>\x0a\x20' + _0x575bc6(_0x9ba47a._0x2da6ff) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20<di' + 'v\x20id=\x22grid' + 'sList\x22\x20cla' + 'ss=\x22scroll' + 'able-list\x22' + '></div>\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20<div\x20' + _0x575bc6(_0x9ba47a._0x185966) + 'tion-heade' + 'r\x22\x20style=\x22' + 'display:\x20f' + _0x575bc6(0xa19) + '-items:\x20ce' + _0x575bc6(0x638) + 'ify-conten' + 't:\x20space-b' + 'etween;\x20ma' + 'rgin-top:\x20' + '20px;\x22>\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20') + ('\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '<h3\x20style=' + '\x22margin:\x200' + ';\x22>Slots</' + 'h3>\x0a\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20<but' + _0x575bc6(_0x9ba47a._0x3c27dc) + '\x22add-slot-' + _0x575bc6(_0x9ba47a._0x3ca3ab) + 'ck=\x22instan' + 'tCreateSlo' + 't()\x22\x20title' + _0x575bc6(0xaf5) + _0x575bc6(_0x9ba47a._0x1f78d5) + '>\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20+\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20</button' + _0x575bc6(0xa2c) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '</div>\x0a\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20<div\x20' + 'id=\x22slotsL' + 'ist\x22\x20class' + '=\x22scrollab' + _0x575bc6(0x648) + '/div>\x0a\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x17748d) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0xf9) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x36193d) + _0x575bc6(0x35d) + 'ss=\x22conten' + 't-panel\x22>\x0a' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20<d' + 'iv\x20id=\x22slo' + _0x575bc6(_0x9ba47a._0x1e2f05) + 'style=\x22dis' + 'play:\x20none' + _0x575bc6(0x66d) + _0x575bc6(_0x9ba47a._0x22f876) + 'x;\x22>\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20<h3' + _0x575bc6(_0x9ba47a._0x2e8d07) + 'rgin-top:\x20' + _0x575bc6(_0x9ba47a._0x351bab) + _0x575bc6(0x7a7) + _0x575bc6(0x5c4) + _0x575bc6(0x90e) + _0x575bc6(_0x9ba47a._0x5a5f1d) + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '<div\x20id=\x22p' + _0x575bc6(_0x9ba47a._0x5ac1d2) + _0x575bc6(0x7f2) + 'le=\x22\x0a\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + _0x575bc6(0x469) + _0x575bc6(0x469) + _0x575bc6(0xa9) + _0x575bc6(_0x9ba47a._0x3749c0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x3ba27c) + 'ems:\x20cente' + 'r;\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x20f460) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x126d45) + 'ustify-con' + _0x575bc6(0x856) + 'er;\x0a\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x515134) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'background' + ':\x20rgba(0,\x20' + _0x575bc6(_0x9ba47a._0x3795e7) + _0x575bc6(0x2aa) + _0x575bc6(_0x9ba47a._0x117da3) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20bo' + _0x575bc6(0x13c) + _0x575bc6(_0x9ba47a._0x5dbeb4)) + (_0x575bc6(_0x9ba47a._0x55b078) + _0x575bc6(0x560) + _0x575bc6(0x469) + _0x575bc6(_0x9ba47a._0x13879b) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20bord' + _0x575bc6(_0x9ba47a._0x25f90c) + _0x575bc6(0x656) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + _0x575bc6(0x469) + _0x575bc6(0x9cc) + _0x575bc6(0x138) + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x20f460) + '\x20\x20\x20min-hei' + _0x575bc6(0xa3a) + _0x575bc6(0x2aa) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x22>\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20<div\x20id' + '=\x22previewS' + 'lot\x22\x20style' + '=\x22\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x50f0ef) + '\x20\x20\x20positio' + 'n:\x20relativ' + _0x575bc6(0x7c6) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20display' + ':\x20inline-b' + _0x575bc6(_0x9ba47a._0x2ed7f9) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x22>\x0a\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x50f0ef) + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20<img\x20' + _0x575bc6(0x561) + 'wBg\x22\x20style' + _0x575bc6(_0x9ba47a._0x4675da) + _0x575bc6(_0x9ba47a._0x31d52d) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x25ad72) + 'previewTex' + 't\x22\x20style=\x22' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20posit' + 'ion:\x20absol' + _0x575bc6(0x761) + _0x575bc6(_0x9ba47a._0x573ee2) + _0x575bc6(_0x9ba47a._0x7f7b0e) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20t' + 'op:\x2050%;\x0a\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x189d81) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x1a1) + _0x575bc6(_0x9ba47a._0x10174f) + _0x575bc6(_0x9ba47a._0x2c01f7) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20tr' + _0x575bc6(_0x9ba47a._0x1f2326) + 'ranslate(-' + _0x575bc6(0x6e7) + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x169c54) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x515134) + _0x575bc6(0x324) + _0x575bc6(0x9a4) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x4fe160) + _0x575bc6(0x4c1) + 'ize:\x2018px;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20') + (_0x575bc6(_0x9ba47a._0x36193d) + '\x20\x20\x20\x20\x20font-' + 'weight:\x20bo' + 'ld;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20te' + _0x575bc6(_0x9ba47a._0x15cc67) + '\x202px\x202px\x204' + 'px\x20rgba(0,' + '0,0,0.8);\x0a' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20white-' + _0x575bc6(_0x9ba47a._0x2f3ddd) + 'rap;\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x22></d' + 'iv>\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x428) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x2c01f7) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20<' + '/div>\x0a\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20</div>' + _0x575bc6(_0x9ba47a._0x3908e7) + _0x575bc6(_0x9ba47a._0x4290b3) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20<' + 'h3\x20style=\x22' + 'margin-top' + ':\x200;\x22>Slot' + '\x20Propertie' + _0x575bc6(_0x9ba47a._0x390493) + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20<div\x20' + _0x575bc6(_0x9ba47a._0x217bb0) + _0x575bc6(0x68f) + _0x575bc6(0xa2c) + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x202d25) + 'lass=\x22empt' + 'y-state\x22>\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20Sele' + _0x575bc6(_0x9ba47a._0x24adea) + 'to\x20view\x20it' + 's\x20properti' + 'es\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20</div' + _0x575bc6(0xa2c) + _0x575bc6(_0x9ba47a._0x5529e8) + _0x575bc6(0x469) + '</div>\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20</div>\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20</' + _0x575bc6(_0x9ba47a._0x4d2cf5) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x1e9a07) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0xcea671) + 'pt>\x0a\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x52e3bc) + '\x20\x20\x20\x20let\x20cu' + 'rrentGrid\x20' + '=\x20null;\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x4794e1) + _0x575bc6(0x141) + _0x575bc6(0x960) + ';\x0a\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20functio' + 'n\x20selectGr' + 'id(index)\x20' + '{\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20curr' + 'entGrid\x20=\x20' + 'index;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469)) + (_0x575bc6(0x781) + 'ot\x20=\x20null;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x575e6d) + '\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'document.q' + 'uerySelect' + 'orAll(\x27#gr' + _0x575bc6(0xa4a) + 'ist-item\x27)' + _0x575bc6(_0x9ba47a._0xbb9499) + _0x575bc6(0x52c) + _0x575bc6(_0x9ba47a._0x45c3d9) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20ite' + 'm.classLis' + 't.remove(\x27' + _0x575bc6(_0x9ba47a._0x174814) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20});\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20const\x20el' + _0x575bc6(0x786) + 'cument.get' + 'ElementByI' + 'd(\x27grid_\x27\x20' + '+\x20index);\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20if\x20(el' + 'ement)\x20ele' + 'ment.class' + _0x575bc6(0x1df) + 'active\x27);\x0a' + _0x575bc6(0x32f) + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20if\x20(w' + _0x575bc6(_0x9ba47a._0x42a905) + _0x575bc6(_0x9ba47a._0x1bdeb0) + 'ow.opener.' + _0x575bc6(_0x9ba47a._0x57b4b4) + 'ots)\x20{\x0a\x20\x20\x20' + _0x575bc6(0x469) + _0x575bc6(_0x9ba47a._0x91afd1) + '\x20\x20\x20\x20\x20windo' + 'w.opener.l' + 'oadGridSlo' + 'ts(index);' + _0x575bc6(_0x9ba47a._0x4432df) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x78d) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20if\x20(wind' + 'ow.opener\x20' + '&&\x20window.' + 'opener.hig' + _0x575bc6(_0x9ba47a._0x5d7aa0) + ')\x20{\x0a\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x4384d9) + _0x575bc6(_0x9ba47a._0x225922) + _0x575bc6(0x6d0) + 'pener.high' + 'lightGrid(' + _0x575bc6(0x121) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x263ace) + '\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20i' + 'f\x20(window.' + 'opener\x20&&\x20' + 'window.ope' + _0x575bc6(_0x9ba47a._0x79c2a6) + 'ctAllSlots' + _0x575bc6(0x6d2) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20window.o' + 'pener.dese' + _0x575bc6(0xc6) + _0x575bc6(0xa28) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0xfd) + 'wGridInfo(' + _0x575bc6(_0x9ba47a._0x346b1e) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20}\x0a' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x21bbc7) + '\x20function\x20' + _0x575bc6(_0x9ba47a._0x3a055e) + '(slotName)') + ('\x20{\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20cur' + 'rentSlot\x20=' + '\x20slotName;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + 'document.q' + 'uerySelect' + 'orAll(\x27#sl' + _0x575bc6(_0x9ba47a._0xe7904d) + 'ist-item\x27)' + '.forEach(i' + 'tem\x20=>\x20{\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x8de) + 'm.classLis' + _0x575bc6(0x268) + 'active\x27);\x0a' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20});\x0a\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20const\x20el' + _0x575bc6(_0x9ba47a._0x30db74) + 'cument.get' + _0x575bc6(_0x9ba47a._0x4b3bfb) + _0x575bc6(_0x9ba47a._0x1a723b) + '+\x20slotName' + '.replace(/' + '[^a-zA-Z0-' + _0x575bc6(0x4d5) + ');\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20if\x20' + _0x575bc6(_0x9ba47a._0x47bf40) + 'element.cl' + _0x575bc6(_0x9ba47a._0x1be82f) + _0x575bc6(_0x9ba47a._0x1f4ffa) + ');\x0a\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20if' + '\x20(window.o' + 'pener\x20&&\x20w' + _0x575bc6(0xaa5) + 'er.selectS' + 'lotInGame)' + '\x20{\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + _0x575bc6(_0x9ba47a._0x5529e8) + '\x20window.op' + 'ener.selec' + _0x575bc6(0x937) + 'e(slotName' + ');\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20showSl' + 'otProperti' + 'es(slotNam' + 'e);\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x91afd1) + _0x575bc6(_0x9ba47a._0x566d88) + 'ction\x20show' + 'GridInfo(i' + 'ndex)\x20{\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20const\x20pa' + _0x575bc6(0xab4) + 'ment.getEl' + _0x575bc6(_0x9ba47a._0x4fd01f) + _0x575bc6(_0x9ba47a._0x8209c) + 'sPanel\x27);\x0a' + _0x575bc6(0x469) + _0x575bc6(0x469) + '\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20i' + 'f\x20(window.' + _0x575bc6(0xbc) + 'window.ope' + _0x575bc6(0x7e3) + _0x575bc6(0x2a2) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x344d6) + 'st\x20info\x20=\x20' + 'window.ope' + 'ner.getGri' + 'dInfo(inde') + ('x);\x0a\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x1e1213) + ')\x20{\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20pane' + _0x575bc6(_0x9ba47a._0x1453ae) + 'L\x20=\x20`\x0a\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20<div\x20cla' + _0x575bc6(0x2a3) + _0x575bc6(0x628) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x34a6b0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20<d' + 'iv\x20class=\x22' + 'field\x20full' + _0x575bc6(0xdd) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20<label\x20' + 'style=\x22dis' + 'play:\x20flex' + ';\x20align-it' + 'ems:\x20cente' + _0x575bc6(0x273) + _0x575bc6(0x7ee) + _0x575bc6(_0x9ba47a._0xad01af) + _0x575bc6(_0x9ba47a._0x59cf61) + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '<input\x20typ' + 'e=\x22checkbo' + 'x\x22\x20id=\x22gri' + _0x575bc6(0xde) + 'ntrollable' + _0x575bc6(0x7e8) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20${' + _0x575bc6(_0x9ba47a._0x436481) + 'adControll' + 'able\x20?\x20\x27ch' + 'ecked\x27\x20:\x20\x27' + '\x27}\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20on' + 'change=\x22up' + 'dateGridGa' + 'mepadContr' + 'ollable(th' + 'is.checked' + ')\x22\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x515134) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x1ae0ba) + _0x575bc6(0x4c6) + 'n-right:\x208' + 'px;\x20width:' + '\x2018px;\x20hei' + 'ght:\x2018px;' + _0x575bc6(_0x9ba47a._0xa6f85f) + _0x575bc6(0x3cb) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x558a9f) + _0x575bc6(_0x9ba47a._0x3c23f3) + 'pan>Gamepa' + 'd\x20Controll' + 'able</span' + '>\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20</la' + 'bel>\x0a\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20</div' + _0x575bc6(_0x9ba47a._0xad01af) + _0x575bc6(_0x9ba47a._0x4a998f) + _0x575bc6(_0x9ba47a._0x23ba38) + '\x20\x20\x20\x20\x20\x20\x20\x20</') + ('div>\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20<hr\x20style' + '=\x22border:\x20' + 'none;\x20bord' + _0x575bc6(_0x9ba47a._0x534c52) + 'x\x20solid\x20rg' + _0x575bc6(0x12b) + ',255,0.1);' + '\x20margin:\x202' + _0x575bc6(_0x9ba47a._0x4dec08) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x594b37) + 'tyle=\x22marg' + 'in:\x200\x200\x2010' + _0x575bc6(0x1f1) + 'd\x20Backgrou' + 'nd</h3>\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x4e622c) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x83d) + _0x575bc6(_0x9ba47a._0x3a3ecd) + 'd-group\x22>\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '<div\x20class' + '=\x22field\x20fu' + 'll-width\x22>' + _0x575bc6(0x32f) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20<labe' + 'l>Backgrou' + 'nd\x20Image</' + _0x575bc6(0x5b6) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20<div\x20styl' + 'e=\x22display' + ':\x20flex;\x20ga' + 'p:\x205px;\x22>\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x4e3d00) + 'nput\x20type=' + '\x22text\x22\x20id=' + _0x575bc6(0xce) + _0x575bc6(_0x9ba47a._0x40f886) + '\x22\x20value=\x22$' + '{info.back' + 'groundImag' + 'e\x20||\x20\x27\x27}\x22\x20' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x2e11b3) + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20plac' + 'eholder=\x22I' + _0x575bc6(_0x9ba47a._0x426c65) + 'ame\x20(witho' + 'ut\x20extensi' + _0x575bc6(0x7e5) + _0x575bc6(_0x9ba47a._0x4f8f3b) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'onchange=\x22' + _0x575bc6(0x697) + _0x575bc6(_0x9ba47a._0x2b9598) + 'Image(this' + '.value)\x22\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x7f7b0e) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x4c751f) + _0x575bc6(_0x9ba47a._0x56f007) + '\x22flex:\x201;\x22' + '>\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x573ee2) + _0x575bc6(0x469) + _0x575bc6(0x22a) + _0x575bc6(0x64e) + _0x575bc6(0x5ee)) + (_0x575bc6(_0x9ba47a._0x31989a) + 'ectGridBac' + 'kgroundIma' + _0x575bc6(_0x9ba47a._0x491884) + _0x575bc6(_0x9ba47a._0x4768c8) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x46f969) + _0x575bc6(_0x9ba47a._0x389a49) + 'px\x2015px;\x20m' + 'in-width:\x20' + 'auto;\x22>\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '📁\x20Browse\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x45c3d9) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20</b' + _0x575bc6(0x165) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x531b69) + 'on\x20class=\x22' + 'toolbar-bt' + 'n\x22\x20onclick' + '=\x22removeGr' + 'idBackgrou' + 'ndImage()\x22' + _0x575bc6(_0x9ba47a._0xbabc6a) + _0x575bc6(0x469) + _0x575bc6(_0x9ba47a._0x57098c) + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20st' + 'yle=\x22paddi' + _0x575bc6(_0x9ba47a._0x245e95) + 'px;\x20min-wi' + 'dth:\x20auto;' + '\x20backgroun' + 'd:\x20#d32f2f' + ';\x22\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x249b98) + _0x575bc6(_0x9ba47a._0x36193d) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20t' + _0x575bc6(_0x9ba47a._0x337c4a) + 've\x20backgro' + 'und\x20image\x22' + '>\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + _0x575bc6(_0x9ba47a._0x41714e) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20✕\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + _0x575bc6(_0x9ba47a._0x3e8b55) + 'on>\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20</' + 'div>\x0a\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x2e8c26) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20<' + 'div\x20style=' + _0x575bc6(_0x9ba47a._0x2ba261) + 'p:\x205px;\x22>\x0a' + _0x575bc6(0x469) + _0x575bc6(_0x9ba47a._0x23ba38) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x548) + 'utton\x20clas' + _0x575bc6(_0x9ba47a._0x5365a9) + '-btn\x22\x20oncl' + _0x575bc6(0x4da) + _0x575bc6(_0x9ba47a._0x2a701a) + _0x575bc6(0xa5d) + 'on()\x22\x20\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x5685d8) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + _0x575bc6(0x469) + '\x20\x20\x20style=\x22') + ('width:\x20100' + '%;\x20padding' + ':\x208px;\x22\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x48ff9a) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20title=' + '\x22Center\x20gr' + 'id\x20to\x20slot' + 's\x22>\x0a\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x155089) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20Rese' + 't\x20Grid\x20Pos' + 'ition\x0a\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20</butt' + 'on>\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + _0x575bc6(_0x9ba47a._0x155089) + _0x575bc6(_0x9ba47a._0x41cf93) + 'div>\x0a\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20<' + 'input\x20type' + '=\x22file\x22\x20id' + '=\x22gridBgIm' + _0x575bc6(_0x9ba47a._0x339079) + 'ut\x22\x20accept' + '=\x22.png\x22\x20\x0a\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + _0x575bc6(_0x9ba47a._0x559f78) + 'play:\x20none' + ';\x22\x20onchang' + _0x575bc6(_0x9ba47a._0x24f02b) + 'ridBackgro' + _0x575bc6(_0x9ba47a._0x42272e) + 'le(this)\x22>' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20</div>\x0a\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0xc41a06) + _0x575bc6(_0x9ba47a._0x260903) + 'field\x22\x20sty' + 'le=\x22flex:\x20' + _0x575bc6(0x1bc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x576dfa) + _0x575bc6(0x44d) + 'tion\x20X</la' + _0x575bc6(_0x9ba47a._0x4138be) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20<' + _0x575bc6(_0x9ba47a._0x7e6f49) + _0x575bc6(_0x9ba47a._0x287c2d) + 'id=\x22gridPo' + _0x575bc6(_0x9ba47a._0x481f6f) + _0x575bc6(_0x9ba47a._0x2ed2) + 'sitionX\x20||' + '\x200}\x22\x20\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20onc' + 'hange=\x22upd' + 'ateGridPos' + 'ition(\x27x\x27,' + '\x20this.valu' + 'e)\x22>\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20</div' + '>\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + _0x575bc6(_0x9ba47a._0x4a998f)) + (_0x575bc6(_0x9ba47a._0xc02663) + '\x20\x20<div\x20cla' + 'ss=\x22field\x22' + _0x575bc6(0x9b1) + 'ex:\x201;\x22>\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20<label>' + _0x575bc6(_0x9ba47a._0x50cbda) + _0x575bc6(_0x9ba47a._0x40bda2) + _0x575bc6(0x469) + _0x575bc6(_0x9ba47a._0x4c751f) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20<input\x20' + 'type=\x22numb' + _0x575bc6(_0x9ba47a._0x4075fe) + 'idPosY\x22\x20va' + 'lue=\x22${inf' + 'o.position' + _0x575bc6(0x9a1) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x34a6b0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + _0x575bc6(0x292) + _0x575bc6(0x94e) + 'dPosition(' + '\x27y\x27,\x20this.' + 'value)\x22>\x0a\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20<' + '/div>\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x249b98) + _0x575bc6(_0x9ba47a._0x20515c) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0xc02663) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20<hr\x20s' + _0x575bc6(_0x9ba47a._0x400c32) + 'er:\x20none;\x20' + 'border-top' + _0x575bc6(0x4f9) + 'd\x20rgba(255' + _0x575bc6(0x63f) + _0x575bc6(0x4af) + 'n:\x2020px\x200;' + '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20<' + _0x575bc6(0x70f) + 'margin:\x200\x20' + _0x575bc6(_0x9ba47a._0x18dbc8) + _0x575bc6(_0x9ba47a._0x7ca260) + 'ngement</h' + '3>\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x2da6ff) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0xa23) + 'div\x20class=' + '\x22field-gro' + 'up\x22>\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20<div\x20' + 'class=\x22fie' + 'ld\x22>\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x540bb2) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20<' + 'label>Rows' + '</label>\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x2e8c26) + _0x575bc6(_0x9ba47a._0x50f0ef) + '\x20\x20\x20<input\x20' + 'type=\x22numb' + _0x575bc6(_0x9ba47a._0x257d64) + 'idRows\x22\x20va' + 'lue=\x22${inf' + _0x575bc6(0xaf) + _0x575bc6(0x284) + _0x575bc6(0x789) + _0x575bc6(0xa2c) + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x3ec) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20') + ('\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20<' + 'div\x20class=' + _0x575bc6(_0x9ba47a._0x4d3347) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x711) + 'Columns</l' + _0x575bc6(0x6c2) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '<input\x20typ' + 'e=\x22number\x22' + _0x575bc6(0x80d) + 'olumns\x22\x20va' + _0x575bc6(_0x9ba47a._0x3aa576) + 'o.columns\x20' + '||\x205}\x22\x20min' + '=\x221\x22\x20max=\x22' + _0x575bc6(_0x9ba47a._0x21f28d) + _0x575bc6(_0x9ba47a._0x49e086) + _0x575bc6(_0x9ba47a._0x23ba38) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x8ec) + '>\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x35d) + 'ss=\x22field\x20' + 'full-width' + '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x3c4c03) + 'bel>Paddin' + _0x575bc6(0x214) + _0x575bc6(_0x9ba47a._0xb08736) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0xbdd665) + _0x575bc6(0x5a1) + 'ber\x22\x20id=\x22g' + 'ridPadding' + '\x22\x20value=\x22$' + '{info.padd' + 'ing\x20||\x2010}' + '\x22\x20min=\x220\x22\x20' + 'max=\x22100\x22>' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0xa7c890) + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20</div>\x0a\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20<d' + 'iv\x20class=\x22' + _0x575bc6(0x2e5) + '-width\x22>\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20<button' + '\x20class=\x22to' + 'olbar-btn\x22' + '\x20onclick=\x22' + 'arrangeGri' + 'dSlots()\x22\x20' + _0x575bc6(0x32f) + _0x575bc6(0x469) + _0x575bc6(_0x9ba47a._0x5521d9) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x38e887) + 'width:\x20100' + '%;\x20padding' + ':\x2012px;\x22>\x0a' + _0x575bc6(0x469) + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20Ar' + _0x575bc6(0x9d0) + 's\x20to\x20Grid\x0a' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x45c3d9) + _0x575bc6(_0x9ba47a._0x573b44) + '\x20\x20\x20\x20</butt' + 'on>\x0a\x20\x20\x20\x20\x20\x20') + (_0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x3229fb) + '\x20\x20\x20\x20</div>' + _0x575bc6(_0x9ba47a._0x4432df) + _0x575bc6(_0x9ba47a._0x558a9f) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20</d' + 'iv>\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20`;\x0a\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x282009) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x39386f) + _0x575bc6(_0x9ba47a._0x1ad3a6) + '\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x148) + 'nction\x20upd' + _0x575bc6(0x4d0) + '(slotName)' + _0x575bc6(_0x9ba47a._0x4ce446) + _0x575bc6(0x469) + _0x575bc6(0x2c1) + 'st\x20preview' + _0x575bc6(_0x9ba47a._0x1c8feb) + 'cument.get' + 'ElementByI' + 'd(\x27slotPre' + 'view\x27);\x0a\x20\x20' + _0x575bc6(_0x9ba47a._0xab0533) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20const\x20pr' + 'eviewBg\x20=\x20' + 'document.g' + 'etElementB' + 'yId(\x27previ' + 'ewBg\x27);\x0a\x20\x20' + _0x575bc6(_0x9ba47a._0x249b98) + _0x575bc6(_0x9ba47a._0x36193d) + '\x20\x20const\x20pr' + _0x575bc6(0x8b3) + _0x575bc6(_0x9ba47a._0x23541d) + _0x575bc6(_0x9ba47a._0x375dff) + 'tById(\x27pre' + 'viewText\x27)' + _0x575bc6(_0x9ba47a._0x2063fa) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20cons' + 't\x20previewS' + 'lot\x20=\x20docu' + 'ment.getEl' + 'ementById(' + '\x27previewSl' + 'ot\x27);\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20if\x20(!' + 'window.ope' + _0x575bc6(0x77e) + 'n;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x18d721) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20const\x20fu' + 'llConfig\x20=' + '\x20window.op' + 'ener.getFu' + 'llSlotConf' + 'ig\x20?\x20windo' + 'w.opener.g' + 'etFullSlot' + 'Config(slo' + 'tName)\x20:\x20n' + 'ull;\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x15ff0e) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20if\x20(!f' + _0x575bc6(_0x9ba47a._0x26ccca) + '\x20{\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x42ff89) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20previewPa' + 'nel.style.' + 'display\x20=\x20' + _0x575bc6(0x1b6) + _0x575bc6(_0x9ba47a._0x573b44) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20retu' + _0x575bc6(_0x9ba47a._0x39aa5b) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20') + ('\x20\x20\x20\x20\x20\x20\x20\x20}\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x755) + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20p' + _0x575bc6(_0x9ba47a._0x52f74e) + 'l.style.di' + 'splay\x20=\x20\x27b' + 'lock\x27;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20cons' + 't\x20offsetY\x20' + '=\x20parseInt' + '(fullConfi' + 'g.TextOffs' + 'etY)\x20||\x200;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'if\x20(fullCo' + 'nfig.Backg' + 'roundImage' + ')\x20{\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20previewB' + 'g.src\x20=\x20\x27i' + 'mg/system/' + '\x27\x20+\x20fullCo' + 'nfig.Backg' + 'roundImage' + '\x20+\x20\x27.png\x27;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x48ff9a) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20p' + 'reviewBg.s' + 'tyle.displ' + 'ay\x20=\x20\x27bloc' + 'k\x27;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x3aefa2) + '\x20\x20previewB' + 'g.onload\x20=' + '\x20function(' + _0x575bc6(_0x9ba47a._0xd41de1) + _0x575bc6(_0x9ba47a._0x59cf61) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20prev' + 'iewSlot.st' + 'yle.width\x20' + _0x575bc6(0x522) + 'th\x20+\x20\x27px\x27;' + _0x575bc6(_0x9ba47a._0x18b9f9) + _0x575bc6(_0x9ba47a._0x34a6b0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20preview' + _0x575bc6(_0x9ba47a._0x30f8b3) + _0x575bc6(0x46f) + _0x575bc6(0x9b0) + _0x575bc6(0x8bb) + _0x575bc6(_0x9ba47a._0x20f460) + _0x575bc6(_0x9ba47a._0x1cb57d) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20const' + '\x20textY\x20=\x20t' + 'his.height' + '\x20+\x20offsetY' + ';\x20\x20//\x20Bott' + 'om\x20of\x20bg\x20+' + '\x20offset\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'previewTex' + 't.style.to' + _0x575bc6(_0x9ba47a._0x29cb1d) + '+\x20\x27px\x27;\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x58039c) + _0x575bc6(0x50b) + 'ft\x20=\x20\x2750%\x27' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20previe' + 'wText.styl' + _0x575bc6(0x6db) + 'm\x20=\x20\x27trans' + 'late(-50%,') + ('\x20-50%)\x27;\x20\x20' + '//\x20-50%\x20Y\x20' + 'to\x20center\x20' + 'the\x20text\x20s' + 'prite\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20};\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20}\x20else\x20{\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20pr' + _0x575bc6(0xa90) + _0x575bc6(0x1b9) + 'y\x20=\x20\x27none\x27' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'previewSlo' + 't.style.wi' + 'dth\x20=\x20\x2748p' + 'x\x27;\x0a\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + _0x575bc6(_0x9ba47a._0x4f8f3b) + _0x575bc6(_0x9ba47a._0x13b8dd) + 'lot.style.' + _0x575bc6(0x156) + '48px\x27;\x0a\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x4a998f) + _0x575bc6(_0x9ba47a._0x51ca99) + _0x575bc6(_0x9ba47a._0xc756c7) + _0x575bc6(_0x9ba47a._0x412394) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x54f9d3) + _0x575bc6(0x9dd) + _0x575bc6(_0x9ba47a._0x292840) + ';\x20\x20//\x20Cent' + _0x575bc6(0x842) + _0x575bc6(0x16d) + 'fset\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20preview' + 'Text.style' + _0x575bc6(0x382) + 'tY\x20+\x20\x27px\x27;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20p' + 'reviewText' + '.style.lef' + 't\x20=\x20\x2750%\x27;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x49af62) + 'reviewText' + _0x575bc6(0xa14) + 'nsform\x20=\x20\x27' + 'translate(' + '-50%,\x20-50%' + _0x575bc6(0x586) + '0%\x20Y\x20to\x20ce' + _0x575bc6(0x6fe) + 'ext\x20sprite' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20}\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x379dd1) + 't\x20buttons\x20' + '=\x20fullConf' + 'ig.Button.' + _0x575bc6(_0x9ba47a._0x55c7b6) + '.map(b\x20=>\x20' + 'b.trim());' + _0x575bc6(0x32f) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20previ' + 'ewText.tex' + 'tContent\x20=' + '\x20buttons[0' + ']\x20||\x20\x27\x27;\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20}' + '\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x573b44) + '\x20\x20function' + '\x20showSlotP' + _0x575bc6(_0x9ba47a._0x4d483c) + _0x575bc6(0x6c3) + _0x575bc6(_0x9ba47a._0x73740d) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20cons' + 't\x20panel\x20=\x20' + _0x575bc6(0x584)) + ('etElementB' + _0x575bc6(0x47a) + 'rtiesPanel' + '\x27);\x0a\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x52e3bc) + _0x575bc6(0x852) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20if\x20(win' + 'dow.opener' + '\x20&&\x20window' + '.opener.ge' + 'tSlotPrope' + 'rties)\x20{\x0a\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20con' + 'st\x20props\x20=' + '\x20window.op' + _0x575bc6(_0x9ba47a._0x2e0180) + _0x575bc6(_0x9ba47a._0x353f6e) + 'es(slotNam' + 'e);\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + _0x575bc6(0xa7b) + 's)\x20{\x0a\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x263ace) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20con' + _0x575bc6(_0x9ba47a._0x22ca2c) + 'fig\x20=\x20wind' + 'ow.opener.' + 'getFullSlo' + 'tConfig\x20?\x20' + 'window.ope' + _0x575bc6(_0x9ba47a._0x2ed38c) + _0x575bc6(_0x9ba47a._0x383c5c) + 'g(slotName' + ')\x20:\x20null;\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x189d81) + '\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20const' + _0x575bc6(0x209) + 'ullConfig\x20' + '?\x20fullConf' + 'ig.Name.sp' + 'lit(\x27,\x27).m' + _0x575bc6(_0x9ba47a._0x1479ea) + 'trim())\x20:\x20' + '[slotName,' + '\x20\x27\x27];\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20co' + 'nst\x20button' + 's\x20=\x20fullCo' + _0x575bc6(0x1eb) + 'lConfig.Bu' + _0x575bc6(_0x9ba47a._0x517314) + '(\x27,\x27).map(' + 'b\x20=>\x20b.tri' + 'm())\x20:\x20[pr' + _0x575bc6(_0x9ba47a._0x23f216) + 'Text,\x20\x27\x27];' + _0x575bc6(_0x9ba47a._0x4a0efd) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0xc8) + _0x575bc6(_0x9ba47a._0x7f7b0e) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20pane' + 'l.dataset.' + 'originalSl' + 'otName\x20=\x20s' + 'lotName;\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20panel.dat' + _0x575bc6(_0x9ba47a._0xfc4f85) + _0x575bc6(_0x9ba47a._0x1150a2) + '\x20=\x20slotNam' + 'e;\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + _0x575bc6(0x469) + _0x575bc6(0x7af) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20pa' + 'nel.innerH' + 'TML\x20=\x20`\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + _0x575bc6(0x83d)) + ('lass=\x22fiel' + 'd-group\x22>\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '<div\x20class' + _0x575bc6(_0x9ba47a._0x332555) + _0x575bc6(_0x9ba47a._0x4740d1) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20<labe' + 'l>Slot\x20Nam' + 'e</label>\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x3aefa2) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20<input' + '\x20type=\x22tex' + _0x575bc6(0x9cf) + _0x575bc6(0x982) + 'alue=\x22${na' + 'mes[0]\x20||\x20' + 'slotName}\x22' + '\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x1a36f6) + _0x575bc6(_0x9ba47a._0x281480) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x34c8ba) + 'e=\x22updateS' + 'lotPropert' + 'ySafe(\x27nam' + 'eKb\x27,\x20this' + '.value)\x22>\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x36193d) + '</div>\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x2b7b65) + '\x20\x20\x20\x20\x20\x20\x20<di' + 'v\x20class=\x22f' + _0x575bc6(_0x9ba47a._0x409b15) + _0x575bc6(_0x9ba47a._0x198123) + _0x575bc6(_0x9ba47a._0x52e3bc) + _0x575bc6(_0x9ba47a._0x515134) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20<label>T' + 'ext\x20Shown\x20' + 'on\x20Slot\x20(K' + 'eyboard)</' + 'label>\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x727) + 'pe=\x22text\x22\x20' + 'id=\x22slotBu' + 'ttonKb\x22\x20va' + 'lue=\x22${but' + _0x575bc6(0xb04) + '\x20\x27\x27}\x22\x20\x0a\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0xb08736) + '\x20\x20\x20\x20\x20\x20\x20\x20on' + 'change=\x22up' + 'dateSlotPr' + 'opertySafe' + '(\x27buttonKb' + '\x27,\x20this.va' + _0x575bc6(_0x9ba47a._0x399dcf) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x5a5f1d) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20</d' + _0x575bc6(_0x9ba47a._0x5de735) + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20<div\x20c' + 'lass=\x22fiel' + 'd\x20full-wid' + _0x575bc6(_0x9ba47a._0x59e12b) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20<' + 'label>Text' + _0x575bc6(_0x9ba47a._0x45e097) + 'Slot\x20(Game') + ('pad)\x20-\x20Opt' + 'ional</lab' + 'el>\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0xb08736) + '\x20\x20\x20\x20\x20\x20\x20\x20<i' + _0x575bc6(_0x9ba47a._0x408c74) + '\x22text\x22\x20id=' + '\x22slotButto' + 'nGp\x22\x20value' + '=\x22${button' + 's[1]\x20||\x20\x27\x27' + _0x575bc6(_0x9ba47a._0xda2d5) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x1a36f6) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x4e04cc) + '\x20\x20\x20\x20\x20place' + 'holder=\x22Le' + _0x575bc6(0x144) + _0x575bc6(_0x9ba47a._0x7ed584) + 'ng\x20gamepad' + '\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20onchang' + _0x575bc6(_0x9ba47a._0x5cbce7) + 'lotPropert' + 'ySafe(\x27but' + 'tonGp\x27,\x20th' + 'is.value)\x22' + _0x575bc6(_0x9ba47a._0x321a0b) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20</div>\x0a\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20<' + _0x575bc6(0xae6) + '\x22field\x22>\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20<label>' + 'Position\x20X' + _0x575bc6(0x5b4) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x4e622c) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20<input\x20' + 'type=\x22numb' + 'er\x22\x20id=\x22po' + 'sX\x22\x20value=' + '\x22${Math.ro' + 'und(props.' + _0x575bc6(0x3ea) + _0x575bc6(0x32f) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20onchange' + '=\x22updateSl' + 'otPosition' + '(\x27x\x27,\x20pars' + _0x575bc6(0x574) + 'value))\x22>\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x44eeb3) + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '</div>\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20<di' + 'v\x20class=\x22f' + 'ield\x22>\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0xf0b2be) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20<label>Po' + _0x575bc6(_0x9ba47a._0x516754) + 'label>\x0a\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x4eabc6) + '\x20<input\x20ty' + 'pe=\x22number' + '\x22\x20id=\x22posY' + '\x22\x20value=\x22$') + ('{Math.roun' + _0x575bc6(_0x9ba47a._0x2c278a) + '||\x200)}\x22\x20\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'onchange=\x22' + _0x575bc6(0x318) + 'Position(\x27' + _0x575bc6(0x269) + _0x575bc6(0x4a3) + 'lue))\x22>\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x2d9bdf) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20</' + _0x575bc6(0x4b8) + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x1ae97b) + '\x20\x20\x20\x20\x20<div\x20' + 'class=\x22fie' + 'ld\x20full-wi' + 'dth\x22>\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x535dda) + 'kground\x20Im' + _0x575bc6(_0x9ba47a._0x2a9fb3) + '>\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20<div' + '\x20style=\x22di' + 'splay:\x20fle' + _0x575bc6(_0x9ba47a._0x36c403) + 'x;\x22>\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0xf0b2be) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20<input\x20' + 'type=\x22text' + _0x575bc6(_0x9ba47a._0x15cd25) + _0x575bc6(_0x9ba47a._0x35eef4) + _0x575bc6(0x833) + 'llConfig\x20?' + '\x20fullConfi' + 'g.Backgrou' + 'ndImage\x20:\x20' + '\x27\x27}\x22\x20\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20placehold' + 'er=\x22Image\x20' + 'filename\x20(' + _0x575bc6(0x15d) + _0x575bc6(0x50d) + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x91afd1) + _0x575bc6(_0x9ba47a._0x1b6fb3) + '\x20\x20\x20\x20\x20oncha' + _0x575bc6(0x71b) + 'eSlotPrope' + 'rtySafe(\x27b' + 'ackgroundI' + _0x575bc6(0x951) + 's.value)\x22\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x723) + '=\x22flex:\x201;' + '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x478d63) + _0x575bc6(_0x9ba47a._0x5521d9) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20<button\x20c' + 'lass=\x22tool' + 'bar-btn\x22\x20o' + 'nclick=\x22se' + 'lectBackgr' + 'oundImage(' + _0x575bc6(0x635) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x4f5e77)) + (_0x575bc6(_0x9ba47a._0x55fd38) + _0x575bc6(_0x9ba47a._0xc02663) + 'style=\x22pad' + 'ding:\x205px\x20' + _0x575bc6(0x90a) + 'width:\x20aut' + 'o;\x22>\x0a\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20📁\x20B' + 'rowse\x0a\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x3e8b55) + 'on>\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20<button\x20' + _0x575bc6(0x909) + 'lbar-btn\x22\x20' + 'onclick=\x22r' + _0x575bc6(0x3f3) + 'ackgroundI' + _0x575bc6(0x518) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x723) + '=\x22padding:' + _0x575bc6(_0x9ba47a._0x4f0684) + _0x575bc6(0x3a5) + ':\x20auto;\x20ba' + _0x575bc6(_0x9ba47a._0x4a3491) + '#d32f2f;\x22\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20titl' + 'e=\x22Remove\x20' + 'background' + '\x20image\x22>\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x510b88) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20✕\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x3aefa2) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20</button>' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x169c54) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x1d933e) + '\x20\x20\x20\x20\x20</div' + _0x575bc6(_0x9ba47a._0x321a0b) + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20<inp' + _0x575bc6(_0x9ba47a._0x1aa019) + 'ile\x22\x20id=\x22b' + 'gImageFile' + 'Input\x22\x20acc' + 'ept=\x22.png\x22' + '\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x35cf1e) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20style=\x22' + _0x575bc6(0x8a3) + 'one;\x22\x20onch' + 'ange=\x22hand' + _0x575bc6(_0x9ba47a._0x5a0177) + 'ndImageFil' + 'e(this)\x22>\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x17748d) + _0x575bc6(0x428) + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20<di' + 'v\x20class=\x22f' + 'ield\x22>\x0a\x20\x20\x20') + ('\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x45c3d9) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x95d) + 'tton\x20Text\x20' + 'Offset\x20Y</' + 'label>\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20<input\x20ty' + 'pe=\x22number' + '\x22\x20id=\x22slot' + 'TextOffset' + _0x575bc6(0x8ee) + '{fullConfi' + _0x575bc6(0x967) + 'nfig.TextO' + 'ffsetY\x20:\x200' + '}\x22\x20\x0a\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x155089) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + _0x575bc6(_0x9ba47a._0x5219a4) + '\x20\x20\x20\x20\x20oncha' + 'nge=\x22updat' + _0x575bc6(_0x9ba47a._0xc638de) + 'rtySafe(\x27t' + 'extOffsetY' + '\x27,\x20this.va' + 'lue)\x22>\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20</d' + 'iv>\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0xc02663) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20<div\x20c' + _0x575bc6(0x9e7) + _0x575bc6(0x894) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x299) + _0x575bc6(0x41b) + 'al\x20Behavio' + _0x575bc6(_0x9ba47a._0x31ebfd) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20<selec' + 't\x20id=\x22slot' + 'SpecialBeh' + 'avior\x22\x20\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x9bbac1) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x1d40a2) + 'updateSlot' + _0x575bc6(0x853) + _0x575bc6(0x667) + 'lBehavior\x27' + ',\x20this.val' + 'ue)\x22>\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x2a3826) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20<optio' + _0x575bc6(0x307) + _0x575bc6(0x8f1) + 'ullConfig\x20' + '||\x20fullCon' + 'fig.Specia' + 'lBehavior\x20' + _0x575bc6(0x12e) + ')\x20?\x20\x27selec' + _0x575bc6(0x8ce) + _0x575bc6(0x532) + _0x575bc6(0x3fb) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x41714e) + _0x575bc6(_0x9ba47a._0x4e04cc) + _0x575bc6(_0x9ba47a._0x29fbbd) + '\x20\x20\x20<option' + '\x20value=\x22di' + _0x575bc6(0x925) + 'on\x22\x20${(ful' + _0x575bc6(_0x9ba47a._0x39dea3) + '\x20fullConfi' + 'g.SpecialB' + 'ehavior\x20==' + '=\x20\x27display') + ('_weapon\x27)\x20' + _0x575bc6(_0x9ba47a._0x1f3ab0) + 'd\x27\x20:\x20\x27\x27}>D' + _0x575bc6(0x2c4) + 'ipped\x20Weap' + 'on</option' + _0x575bc6(_0x9ba47a._0xb92bb1) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '<option\x20va' + 'lue=\x22displ' + 'ay_shield\x22' + '\x20${(fullCo' + 'nfig\x20&&\x20fu' + 'llConfig.S' + 'pecialBeha' + 'vior\x20===\x20\x27' + _0x575bc6(0x706) + 'ield\x27)\x20?\x20\x27' + 'selected\x27\x20' + ':\x20\x27\x27}>Disp' + _0x575bc6(0xacc) + 'ed\x20Shield<' + _0x575bc6(0x20e) + _0x575bc6(_0x9ba47a._0xbc5d7) + _0x575bc6(_0x9ba47a._0x44eeb3) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x1374f0) + '\x20\x20\x20\x20\x20\x20\x20<op' + 'tion\x20value' + _0x575bc6(0x146) + _0x575bc6(_0x9ba47a._0x2507ac) + 'Config\x20&&\x20' + _0x575bc6(_0x9ba47a._0x5a8a24) + '.SpecialBe' + 'havior\x20===' + _0x575bc6(0x547) + _0x575bc6(_0x9ba47a._0x1740ed) + 'ected\x27\x20:\x20\x27' + '\x27}>Item\x20Sl' + 'ot\x20Only</o' + _0x575bc6(0x36e) + _0x575bc6(_0x9ba47a._0x205dc4) + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x14f46c) + 'on\x20value=\x22' + 'skill_only' + _0x575bc6(0x349) + 'onfig\x20&&\x20f' + 'ullConfig.' + _0x575bc6(0x787) + _0x575bc6(0x973) + _0x575bc6(_0x9ba47a._0x419e4c) + 'y\x27)\x20?\x20\x27sel' + 'ected\x27\x20:\x20\x27' + '\x27}>Skill\x20S' + 'lot\x20Only</' + 'option>\x0a\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x5d57c7) + '>\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x2014f6) + _0x575bc6(_0x9ba47a._0x25fd59) + '\x20\x20</div>\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x8ec) + '>\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20`;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + _0x575bc6(0x578) + 'eview(slot' + _0x575bc6(_0x9ba47a._0x51bd2b) + _0x575bc6(0x469) + _0x575bc6(_0x9ba47a._0x148624) + '\x20\x20\x20\x20\x20}\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x9bbac1) + _0x575bc6(_0x9ba47a._0x1b0fc1) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x2c35de) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20func' + 'tion\x20updat') + ('eSlotPrope' + 'rtySafe(pr' + 'operty,\x20va' + _0x575bc6(_0x9ba47a._0x24a37f) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x36193d) + '\x20const\x20pan' + 'el\x20=\x20docum' + 'ent.getEle' + _0x575bc6(0x5bd) + _0x575bc6(0x767) + _0x575bc6(0x87f) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20const\x20c' + 'urrentName' + _0x575bc6(_0x9ba47a._0x2b8002) + _0x575bc6(0x86b) + 'rentSlotNa' + _0x575bc6(0x42f) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20if\x20(win' + 'dow.opener' + _0x575bc6(_0x9ba47a._0x4ab0d9) + '.opener.up' + _0x575bc6(_0x9ba47a._0x2859cb) + 'operty)\x20{\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20co' + 'nst\x20result' + '\x20=\x20window.' + 'opener.upd' + 'ateSlotPro' + _0x575bc6(_0x9ba47a._0x2915da) + 'entGrid,\x20c' + 'urrentName' + _0x575bc6(0x81f) + ',\x20value);\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x7f7b0e) + '\x20\x20\x20\x20\x20\x20\x20if\x20' + '(property\x20' + _0x575bc6(0x95f) + 'b\x27\x20&&\x20resu' + 'lt\x20&&\x20resu' + _0x575bc6(_0x9ba47a._0x844170) + _0x575bc6(0x6d2) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x475) + 'l.dataset.' + 'currentSlo' + 'tName\x20=\x20re' + 'sult.newNa' + 'me;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20curr' + 'entSlot\x20=\x20' + _0x575bc6(_0x9ba47a._0x3d2bcd) + 'Name;\x20//\x20U' + 'pdate\x20curr' + 'ent\x20slot\x20r' + 'eference\x0a\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x5bb859) + '\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20if\x20(wi' + _0x575bc6(0x57f) + _0x575bc6(_0x9ba47a._0x1e280d) + 'w.opener.l' + 'oadGridSlo' + 'ts)\x20{\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20window.o' + 'pener.load' + 'GridSlots(' + 'currentGri' + 'd);\x0a\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x51ca99) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20}\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + _0x575bc6(0x32f) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20') + (_0x575bc6(0x360) + 'review(res' + 'ult.newNam' + 'e);\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20}\x20else\x20{' + _0x575bc6(0x32f) + _0x575bc6(_0x9ba47a._0x1d6ae6) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20updateP' + 'review(cur' + 'rentName);' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20}' + _0x575bc6(0x32f) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x213) + _0x575bc6(0x469) + _0x575bc6(_0x9ba47a._0x49b126) + _0x575bc6(_0x9ba47a._0x4e6833) + _0x575bc6(0x469) + 'function\x20u' + _0x575bc6(0x1fe) + 'osition(ax' + 'is,\x20value)' + '\x20{\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20if\x20' + '(window.op' + _0x575bc6(_0x9ba47a._0x459650) + 'ndow.opene' + 'r.updateSl' + 'otPosition' + '\x20&&\x20curren' + 'tSlot)\x20{\x0a\x20' + _0x575bc6(_0x9ba47a._0xa7e02b) + _0x575bc6(_0x9ba47a._0x155e72) + '\x20\x20\x20\x20\x20\x20\x20win' + 'dow.opener' + _0x575bc6(0x1fa) + 'tPosition(' + 'currentSlo' + 't,\x20axis,\x20v' + _0x575bc6(_0x9ba47a._0xe993c5) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20}\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x2c35de) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20func' + 'tion\x20insta' + 'ntCreateSl' + 'ot()\x20{\x0a\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20if\x20(curre' + 'ntGrid\x20===' + _0x575bc6(_0x9ba47a._0x2dd135) + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20ale' + _0x575bc6(_0x9ba47a._0x44dc42) + _0x575bc6(_0x9ba47a._0xa7023b) + 'grid\x20first' + '!\x27);\x0a\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x1374f0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20return;' + _0x575bc6(0x32f) + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20' + _0x575bc6(0x469) + _0x575bc6(0x469) + '\x20\x20const\x20ex' + _0x575bc6(0x33d) + 's\x20=\x20docume' + _0x575bc6(0x948) + 'lectorAll(' + _0x575bc6(0x36c) + 't\x20.list-it' + 'em\x27).lengt' + 'h;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x344d6) + 'st\x20slotNum' + 'ber\x20=\x20exis' + 'tingSlots\x20' + '+\x201;\x0a\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + 'const\x20slot' + _0x575bc6(_0x9ba47a._0x38a3b5) + _0x575bc6(0x32f) + _0x575bc6(_0x9ba47a._0x5b9246) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20n' + 'ame:\x20\x27New\x20' + 'Slot\x20\x27\x20+\x20s') + ('lotNumber,' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x5f4) + _0x575bc6(0x199) + 'y\x27\x20+\x20slotN' + 'umber,\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x178007) + '\x20\x20\x20\x20\x20x:\x2040' + '0,\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x412394) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20y:\x20300,\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20bac' + _0x575bc6(0xa66) + 'ge:\x20\x27\x27,\x0a\x20\x20' + _0x575bc6(0x469) + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20text' + _0x575bc6(_0x9ba47a._0x3530dd) + ',\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x2f6f28) + _0x575bc6(_0x9ba47a._0xe12160) + 'ne\x27\x0a\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x10ef1e) + '\x20\x20\x20\x20\x20\x20\x20\x20};' + '\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x1d933e) + '\x20\x20\x20\x20\x20\x20if\x20(' + _0x575bc6(_0x9ba47a._0x218e9d) + 'ner\x20&&\x20win' + 'dow.opener' + '.createNew' + 'Slot)\x20{\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x43d99c) + '\x20\x20\x20\x20\x20\x20wind' + 'ow.opener.' + 'createNewS' + 'lot(curren' + 'tGrid,\x20slo' + 'tConfig);\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x1279b6) + '\x20\x20\x20\x20}\x0a\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x237820) + '\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20f' + _0x575bc6(_0x9ba47a._0x5737c2) + _0x575bc6(_0x9ba47a._0x19b305) + 'oundImage(' + ')\x20{\x0a\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x5a5f1d) + '\x20\x20\x20\x20\x20\x20\x20\x20co' + 'nst\x20fileIn' + _0x575bc6(0x7b5) + _0x575bc6(0xcc) + _0x575bc6(0xa8e) + '\x27bgImageFi' + 'leInput\x27);' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20if\x20(f' + 'ileInput)\x20' + '{\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x58314f) + 'click();\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20}\x0a\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20fu' + _0x575bc6(0xb11) + 'dleBackgro' + _0x575bc6(_0x9ba47a._0x2f9a2f) + 'le(input)\x20' + '{\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20if\x20(' + '!input.fil' + _0x575bc6(0x241) + 'ut.files[0' + '])\x20return;' + '\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20cons' + 't\x20file\x20=\x20i' + _0x575bc6(_0x9ba47a._0x326492) + '[0];\x0a\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x52c3d3)) + ('\x20\x20\x20\x20\x20\x20\x20\x20\x20c' + 'onst\x20reade' + 'r\x20=\x20new\x20Fi' + 'leReader()' + ';\x0a\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20rea' + 'der.onload' + '\x20=\x20functio' + 'n(e)\x20{\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20const' + '\x20fileData\x20' + '=\x20e.target' + '.result;\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x2c1) + 'st\x20fileNam' + 'e\x20=\x20file.n' + _0x575bc6(0x6c7) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x404573) + '\x20\x20\x20\x20if\x20(wi' + 'ndow.opene' + _0x575bc6(_0x9ba47a._0x1e280d) + 'w.opener.c' + 'opyBackgro' + _0x575bc6(0x89c) + '{\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x72c788) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20window' + _0x575bc6(0x5df) + 'pyBackgrou' + 'ndImage(fi' + _0x575bc6(_0x9ba47a._0x2ce601) + 'leName,\x20fu' + _0x575bc6(0x15b) + _0x575bc6(0x3bc) + 'eNameWitho' + 'utExt)\x20{\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20if\x20(s' + 'uccess)\x20{\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'const\x20bgIm' + 'ageInput\x20=' + '\x20document.' + 'getElement' + 'ById(\x27slot' + _0x575bc6(_0x9ba47a._0x35a9fc) + _0x575bc6(0x32f) + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20if\x20(bgIma' + 'geInput)\x20{' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x2da6ff) + '\x20\x20\x20\x20\x20bgIma' + 'geInput.va' + 'lue\x20=\x20imag' + 'eNameWitho' + 'utExt;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x30e2bf) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20updateSlo' + _0x575bc6(0x8f9) + 'afe(\x27backg' + _0x575bc6(_0x9ba47a._0x40f886) + _0x575bc6(0x371) + 'meWithoutE' + _0x575bc6(0xafb) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x3f594b) + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20}\x20else\x20' + _0x575bc6(_0x9ba47a._0x73740d) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20alert(\x27F' + _0x575bc6(_0x9ba47a._0x51337c) + 'opy\x20backgr' + 'ound\x20image') + ('\x20file.\x27);\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20}\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '});\x0a\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + _0x575bc6(0x469) + '\x20\x20}\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20};' + '\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20read' + 'er.readAsD' + _0x575bc6(0x1cf) + 'e);\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20input.v' + 'alue\x20=\x20\x27\x27;' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x2276a4) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20functi' + 'on\x20arrange' + 'GridSlots(' + ')\x20{\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20if' + '\x20(currentG' + _0x575bc6(_0x9ba47a._0x3db481) + 'll)\x20{\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x41b216) + '\x27Please\x20se' + 'lect\x20a\x20gri' + _0x575bc6(0x21e) + _0x575bc6(0x2aa) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x70e) + _0x575bc6(_0x9ba47a._0x2e11b3) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x671) + 'onst\x20rows\x20' + '=\x20parseInt' + '(document.' + 'getElement' + 'ById(\x27grid' + _0x575bc6(0x334) + 'ue)\x20||\x202;\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20const\x20' + 'columns\x20=\x20' + 'parseInt(d' + 'ocument.ge' + 'tElementBy' + 'Id(\x27gridCo' + 'lumns\x27).va' + _0x575bc6(_0x9ba47a._0x5df121) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20const' + '\x20padding\x20=' + _0x575bc6(0x304) + 'document.g' + 'etElementB' + 'yId(\x27gridP' + _0x575bc6(0x232) + 'alue)\x20||\x201' + '0;\x0a\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20if' + '\x20(window.o' + 'pener\x20&&\x20w' + 'indow.open' + _0x575bc6(_0x9ba47a._0x4ad9dc) + _0x575bc6(_0x9ba47a._0xc3bd7) + '\x20{\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x30e2bf) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20window.op' + 'ener.arran' + 'geGridSlot' + _0x575bc6(_0x9ba47a._0x5ade1d) + 'rid,\x20{\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20r') + ('ows:\x20rows,' + _0x575bc6(0x32f) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20columns' + ':\x20columns,' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20padding' + ':\x20padding\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20})' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0xa71) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x3694c8) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20function\x20' + 'selectGrid' + 'Background' + 'Image()\x20{\x0a' + _0x575bc6(_0x9ba47a._0x57181d) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20const\x20' + 'fileInput\x20' + '=\x20document' + '.getElemen' + _0x575bc6(_0x9ba47a._0x278b89) + 'dBgImageFi' + 'leInput\x27);' + _0x575bc6(_0x9ba47a._0x4fd017) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20if\x20(f' + _0x575bc6(_0x9ba47a._0x4530a9) + '{\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x5d62bf) + _0x575bc6(_0x9ba47a._0x1eff89) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20}\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20fu' + _0x575bc6(_0x9ba47a._0x398c2b) + 'dleGridBac' + _0x575bc6(0xa66) + 'geFile(inp' + 'ut)\x20{\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'if\x20(!input' + _0x575bc6(_0x9ba47a._0x27163b) + '!input.fil' + 'es[0])\x20ret' + 'urn;\x0a\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + 'const\x20file' + '\x20=\x20input.f' + 'iles[0];\x0a\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20const\x20r' + _0x575bc6(0x434) + 'w\x20FileRead' + 'er();\x0a\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20reader.on' + _0x575bc6(_0x9ba47a._0x2ed5d0) + 'ction(e)\x20{' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x54717c) + 'onst\x20fileD' + 'ata\x20=\x20e.ta' + 'rget.resul' + 't;\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x183878) + 'eName\x20=\x20fi' + 'le.name;\x0a\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20if' + '\x20(window.o' + 'pener\x20&&\x20w' + 'indow.open' + _0x575bc6(_0x9ba47a._0xe9b154) + _0x575bc6(_0x9ba47a._0x5ae2db) + _0x575bc6(0xab3) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20') + (_0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20wi' + _0x575bc6(0x57f) + 'r.copyBack' + 'groundImag' + 'e(fileData' + _0x575bc6(_0x9ba47a._0xea05f3) + ',\x20function' + '(success,\x20' + _0x575bc6(_0x9ba47a._0x1ed8e6) + _0x575bc6(0x70b) + '\x20{\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x264056) + _0x575bc6(_0x9ba47a._0x586d15) + ')\x20{\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20const\x20' + _0x575bc6(0x7df) + 'ut\x20=\x20docum' + 'ent.getEle' + 'mentById(\x27' + 'gridBackgr' + _0x575bc6(0x806) + ');\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x311c72) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20if\x20(bgI' + _0x575bc6(0x45d) + '\x20{\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20bgI' + 'mageInput.' + 'value\x20=\x20im' + _0x575bc6(_0x9ba47a._0x1b84dd) + 'houtExt;\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20updateG' + 'ridBackgro' + 'undImage(i' + _0x575bc6(0x83c) + 'thoutExt);' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x1b0fc1) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20}' + _0x575bc6(0x8d8) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20al' + 'ert(\x27Faile' + 'd\x20to\x20copy\x20' + _0x575bc6(0x35b) + '\x20image\x20fil' + 'e.\x27);\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x4673a0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20});\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20}\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20};\x0a\x0a\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20reader.r' + _0x575bc6(0xa7e) + 'RL(file);\x0a' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20input.' + 'value\x20=\x20\x27\x27' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20funct' + _0x575bc6(_0x9ba47a._0x33a6e1) + _0x575bc6(_0x9ba47a._0x2a701a) + _0x575bc6(_0x9ba47a._0x25385a) + 'imageName)') + (_0x575bc6(0x32c) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x2b35e8) + _0x575bc6(_0x9ba47a._0x8af071) + 'id\x20===\x20nul' + 'l)\x20return;' + '\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20if\x20(' + _0x575bc6(0x747) + 'ner\x20&&\x20win' + _0x575bc6(0x222) + '.updateGri' + 'dBackgroun' + 'dImage)\x20{\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x1b6fb3) + '\x20\x20\x20\x20\x20\x20\x20\x20wi' + 'ndow.opene' + 'r.updateGr' + 'idBackgrou' + _0x575bc6(_0x9ba47a._0x26b5f6) + _0x575bc6(_0x9ba47a._0x1e6add) + '\x20imageName' + ');\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x148624) + '\x20\x20\x20\x20\x20\x20\x20}\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20}' + '\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x224) + '\x20removeGri' + _0x575bc6(0x8a2) + _0x575bc6(0xa22) + _0x575bc6(0x32f) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20if\x20(c' + _0x575bc6(0x501) + _0x575bc6(0x272) + '\x20return;\x0a\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x4d20ef) + _0x575bc6(0x36d) + 'bgImageInp' + _0x575bc6(0x140) + _0x575bc6(_0x9ba47a._0x1d59ea) + 'mentById(\x27' + 'gridBackgr' + 'oundImage\x27' + _0x575bc6(0x65f) + _0x575bc6(_0x9ba47a._0x1067ea) + _0x575bc6(0x34b) + '(bgImageIn' + _0x575bc6(_0x9ba47a._0x2f64fb) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20bgIma' + _0x575bc6(0x1dc) + 'lue\x20=\x20\x27\x27;\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x2bcaa4) + 'dateGridBa' + 'ckgroundIm' + _0x575bc6(0x7a1) + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x39386f) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x78d) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x2f27b3) + 'nction\x20upd' + _0x575bc6(0x176) + 'ition(axis' + ',\x20value)\x20{' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20if\x20(c' + 'urrentGrid' + '\x20===\x20null)' + '\x20{\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20alert(\x27Pl' + 'ease\x20selec' + 't\x20a\x20grid\x20f' + _0x575bc6(_0x9ba47a._0x253a12) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20ret' + _0x575bc6(_0x9ba47a._0x8a3b7a) + _0x575bc6(_0x9ba47a._0x1ae97b) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20}' + '\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20cons' + 't\x20numValue' + '\x20=\x20parseFl') + (_0x575bc6(_0x9ba47a._0x56c7ee) + '\x20||\x200;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20if\x20(windo' + _0x575bc6(_0x9ba47a._0x22fb82) + _0x575bc6(_0x9ba47a._0x50634c) + 'pener.upda' + _0x575bc6(0x9f1) + 'tion)\x20{\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20wind' + 'ow.opener.' + 'updateGrid' + 'Position(c' + 'urrentGrid' + ',\x20axis,\x20nu' + 'mValue);\x0a\x20' + _0x575bc6(_0x9ba47a._0x21bbc7) + _0x575bc6(_0x9ba47a._0xa7e02b) + '\x20\x20\x20}\x0a\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x4d20ef) + _0x575bc6(_0x9ba47a._0x4342de) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20fu' + 'nction\x20res' + 'etGridBack' + 'groundPosi' + 'tion()\x20{\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20if\x20(cur' + 'rentGrid\x20=' + '==\x20null)\x20{' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x907) + 'lert(\x27Plea' + 'se\x20select\x20' + _0x575bc6(0x294) + 'st!\x27);\x0a\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x32a5ed) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x4e0) + 'n;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x122482) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20if\x20(wi' + 'ndow.opene' + _0x575bc6(0x914) + 'w.opener.r' + _0x575bc6(0x3e1) + 'ckgroundPo' + 'sition)\x20{\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20wi' + _0x575bc6(0x57f) + 'r.resetGri' + 'dBackgroun' + 'dPosition(' + 'currentGri' + 'd);\x0a\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + _0x575bc6(0x368) + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20functio' + _0x575bc6(0x6cf) + 'idGamepadC' + _0x575bc6(0x839) + _0x575bc6(_0x9ba47a._0x21c596) + 'llable)\x20{\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x36f263) + '\x20\x20\x20\x20if\x20(cu' + 'rrentGrid\x20' + _0x575bc6(_0x9ba47a._0x329d0d) + 'return;\x0a\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x1a8) + 'dow.opener' + _0x575bc6(0xa15) + _0x575bc6(_0x9ba47a._0x443c12) + _0x575bc6(0x6af) + 'mepadContr' + 'ollable)\x20{' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x5e3bcd) + _0x575bc6(0x61a) + 'indow.open' + 'er.updateG' + 'ridGamepad' + _0x575bc6(_0x9ba47a._0x12c78f)) + (_0x575bc6(_0x9ba47a._0x3ea407) + _0x575bc6(0x45a) + _0x575bc6(_0x9ba47a._0x53d938) + ');\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20}\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x141bee) + '\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20function' + '\x20removeSlo' + 'tBackgroun' + 'dImage()\x20{' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20const' + '\x20bgImageIn' + 'put\x20=\x20docu' + _0x575bc6(_0x9ba47a._0x25a261) + _0x575bc6(0xa8e) + '\x27slotBgIma' + _0x575bc6(_0x9ba47a._0x146bfe) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'if\x20(bgImag' + _0x575bc6(_0x9ba47a._0x2a2300) + _0x575bc6(_0x9ba47a._0x3fe2d2) + _0x575bc6(_0x9ba47a._0x13879b) + '\x20\x20\x20\x20\x20\x20\x20\x20bg' + 'ImageInput' + _0x575bc6(0xa5b) + _0x575bc6(0x4b4) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20updateSlo' + _0x575bc6(0x8f9) + 'afe(\x27backg' + 'roundImage' + _0x575bc6(0x3bf) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x4673a0) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x1374f0) + '\x20\x20\x20\x20\x20\x20\x20fun' + _0x575bc6(_0x9ba47a._0x1f6a98) + 'teSlot(slo' + 'tName)\x20{\x0a\x20' + _0x575bc6(_0x9ba47a._0x4402ba) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20if\x20(cur' + 'rentGrid\x20=' + '==\x20null)\x20{' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x21bbc7) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20a' + 'lert(\x27No\x20g' + _0x575bc6(0x1fd) + 'ed!\x27);\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20retur' + _0x575bc6(_0x9ba47a._0x19e77c) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20if\x20(wi' + 'ndow.opene' + _0x575bc6(_0x9ba47a._0x173a4b) + 'w.opener.d' + _0x575bc6(_0x9ba47a._0x4f0a08) + _0x575bc6(0x32c) + _0x575bc6(0x469) + _0x575bc6(_0x9ba47a._0x35cec1) + '\x20window.op' + 'ener.delet' + _0x575bc6(0x173) + _0x575bc6(0x9da) + 'lotName);\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + _0x575bc6(_0x9ba47a._0x492a3c) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20' + _0x575bc6(_0x9ba47a._0x28e5ab) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20f' + _0x575bc6(_0x9ba47a._0x268c7f) + 'eateNewGri' + 'd()\x20{\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'if\x20(window' + _0x575bc6(_0x9ba47a._0x401678) + _0x575bc6(_0x9ba47a._0x3e8a78) + _0x575bc6(0xb0e) + 'eNewGrid)\x20' + _0x575bc6(_0x9ba47a._0x73740d)) + ('\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'window.ope' + 'ner.create' + 'NewGrid();' + _0x575bc6(_0x9ba47a._0x5da64d) + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20}\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x49b126) + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'function\x20d' + 'eleteGrid(' + 'gridIndex)' + '\x20{\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x2b35e8) + _0x575bc6(_0x9ba47a._0x31f513) + _0x575bc6(0x589) + 'ndow.opene' + _0x575bc6(0x808) + _0x575bc6(0x99a) + _0x575bc6(_0x9ba47a._0xea72f1) + _0x575bc6(0x469) + '\x20\x20\x20\x20window' + '.opener.de' + 'leteGrid(g' + 'ridIndex);' + _0x575bc6(0x32f) + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20}\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a' + _0x575bc6(_0x9ba47a._0x25a6a9) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20function\x20' + 'resetPosit' + 'ions()\x20{\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20if\x20(con' + 'firm(\x27Rese' + _0x575bc6(0x2d2) + _0x575bc6(0x7ac) + '\x20to\x20defaul' + 't?\x20This\x20ca' + _0x575bc6(_0x9ba47a._0x5f0e4a) + _0x575bc6(_0x9ba47a._0x1c5025) + _0x575bc6(_0x9ba47a._0x4fd017) + _0x575bc6(_0x9ba47a._0x680283) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20i' + 'f\x20(window.' + 'opener\x20&&\x20' + _0x575bc6(0x747) + 'ner.resetA' + 'llPosition' + _0x575bc6(0xe3) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20win' + 'dow.opener' + '.resetAllP' + 'ositions()' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20alert(' + '\x27Positions' + '\x20reset!\x20Th' + _0x575bc6(_0x9ba47a._0x54c462) + 'l\x20reload.\x27' + ');\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20}\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20}\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20}' + _0x575bc6(_0x9ba47a._0x270e29) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x4ccf54) + '\x20updateGri' + _0x575bc6(_0x9ba47a._0x1e4fc7) + 'Active)\x20{\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0xf2b56f) + '}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20functio' + 'n\x20updateSn' + _0x575bc6(0x8a4) + 'sActive)\x20{' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20window' + '.updateGri') + ('dsList\x20=\x20f' + 'unction(gr' + _0x575bc6(_0x9ba47a._0x1a724d) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20const\x20lis' + 't\x20=\x20docume' + 'nt.getElem' + 'entById(\x27g' + 'ridsList\x27)' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x3da79d) + '\x20\x20\x20\x20\x20\x20if\x20(' + '!grids\x20||\x20' + _0x575bc6(_0x9ba47a._0x41d140) + 'th\x20===\x200)\x20' + '{\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'list.inner' + 'HTML\x20=\x20\x27<d' + 'iv\x20class=\x22' + _0x575bc6(0x3e4) + _0x575bc6(_0x9ba47a._0x2181d6) + 's\x20configur' + 'ed\x20in\x20plug' + 'in\x20paramet' + 'ers</div>\x27' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + 'return;\x0a\x20\x20' + _0x575bc6(_0x9ba47a._0x28ce7a) + _0x575bc6(_0x9ba47a._0x1b6fb3) + '\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20l' + _0x575bc6(_0x9ba47a._0x1d24cb) + 'TML\x20=\x20\x27\x27;\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20grids.' + 'forEach((g' + _0x575bc6(_0x9ba47a._0x21dbe) + _0x575bc6(_0x9ba47a._0x278f52) + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x8b7) + '\x20item\x20=\x20do' + _0x575bc6(0x46d) + _0x575bc6(_0x9ba47a._0x3abb7f) + _0x575bc6(0x626) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x8de) + 'm.classNam' + 'e\x20=\x20\x27list-' + 'item\x27\x20+\x20(i' + 'ndex\x20===\x20c' + 'urrentGrid' + _0x575bc6(0x645) + 'e\x27\x20:\x20\x27\x27);\x0a' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20it' + 'em.id\x20=\x20\x27g' + 'rid_\x27\x20+\x20in' + _0x575bc6(_0x9ba47a._0x5a044f) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20item.on' + _0x575bc6(0x850) + '\x20=>\x20select' + 'Grid(index' + ');\x0a\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20const\x20na' + 'me\x20=\x20docum' + 'ent.create' + 'Element(\x27d' + _0x575bc6(_0x9ba47a._0x51c6a5) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x14a60f) + '\x20\x20\x20\x20name.c' + _0x575bc6(_0x9ba47a._0x21d811) + '\x20\x27list-ite' + _0x575bc6(_0x9ba47a._0x2a8d25) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + _0x575bc6(_0x9ba47a._0x401384) + 'e.textCont' + 'ent\x20=\x20`Gri' + 'd\x20#${index' + '\x20+\x201}\x20(${g' + 'rid.slotCo' + _0x575bc6(0x9e0) + ')`;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20') + (_0x575bc6(_0x9ba47a._0xcf43ba) + 'le.flex\x20=\x20' + '\x271\x27;\x0a\x0a\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x3d6fb3) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20const\x20' + 'deleteBtn\x20' + '=\x20document' + '.createEle' + 'ment(\x27butt' + 'on\x27);\x0a\x20\x20\x20\x20' + _0x575bc6(0x469) + _0x575bc6(_0x9ba47a._0x4cd1a3) + _0x575bc6(_0x9ba47a._0x466b26) + 'Btn.textCo' + 'ntent\x20=\x20\x27✕' + '\x27;\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20deleteBtn' + _0x575bc6(0x87c) + '\x20=\x20\x27delete' + '-slot-btn\x27' + _0x575bc6(_0x9ba47a._0x457759) + _0x575bc6(_0x9ba47a._0x50f0ef) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x495c10) + 'title\x20=\x20\x27D' + 'elete\x20this' + '\x20grid\x27;\x0a\x20\x20' + _0x575bc6(_0x9ba47a._0x2c01f7) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x126) + 'teBtn.oncl' + 'ick\x20=\x20(e)\x20' + '=>\x20{\x0a\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0xc485c4) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20e.s' + 'topPropaga' + _0x575bc6(_0x9ba47a._0x367b44) + _0x575bc6(_0x9ba47a._0x3cee71) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x43ee10) + '(index);\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x1372fe) + '\x20\x20\x20\x20\x20\x20\x20};\x0a' + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20i' + 'tem.append' + 'Child(name' + _0x575bc6(0x65f) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x3477c8) + '\x20item.appe' + 'ndChild(de' + 'leteBtn);\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x35cf1e) + _0x575bc6(_0x9ba47a._0x257be3) + _0x575bc6(_0x9ba47a._0x3baab1) + 'hild(item)' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x3fc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0xaa4) + _0x575bc6(_0x9ba47a._0x4ab04b) + '\x20\x20\x20\x20window' + '.updateSlo' + _0x575bc6(_0x9ba47a._0x3ad3a7) + _0x575bc6(_0x9ba47a._0x33b970) + 'ots)\x20{\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20const\x20lis' + 't\x20=\x20docume' + 'nt.getElem' + 'entById(\x27s' + 'lotsList\x27)' + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x37576d) + _0x575bc6(_0x9ba47a._0xcfcc7) + 'd\x20===\x20null' + ')\x20{\x0a\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x29ccaf) + _0x575bc6(0x469) + '\x20\x20list.inn' + _0x575bc6(0x65d) + '<div\x20class' + '=\x22empty-st' + _0x575bc6(_0x9ba47a._0x43a71b) + 't\x20a\x20grid\x20f' + _0x575bc6(0xaad) + '\x27;\x0a\x20\x20\x20\x20\x20\x20\x20') + (_0x575bc6(_0x9ba47a._0x85b5a7) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x339) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20}\x0a\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20i' + 'f\x20(!slots\x20' + _0x575bc6(0x9e8) + 'ength\x20===\x20' + '0)\x20{\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x9e52ff) + '\x20\x20\x20list.in' + _0x575bc6(_0x9ba47a._0x205381) + _0x575bc6(_0x9ba47a._0x505eb5) + _0x575bc6(0x83b) + _0x575bc6(_0x9ba47a._0x452fe2) + 'lots\x20in\x20th' + 'is\x20grid</d' + 'iv>\x27;\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x9e6) + ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x128) + _0x575bc6(_0x9ba47a._0x24acda) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x1bc902) + 'nerHTML\x20=\x20' + '\x27\x27;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x9ca) + _0x575bc6(0x968) + 'h(slot\x20=>\x20' + '{\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x785) + '\x20=\x20documen' + 't.createEl' + 'ement(\x27div' + '\x27);\x0a\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20const\x20sa' + 'feId\x20=\x20slo' + 't.name.rep' + 'lace(/[^a-' + 'zA-Z0-9]/g' + ',\x20\x27_\x27);\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x558a9f) + '\x20\x20\x20\x20\x20\x20item' + _0x575bc6(0x87c) + '\x20=\x20\x27list-i' + 'tem\x27\x20+\x20(sl' + 'ot.name\x20==' + '=\x20currentS' + 'lot\x20?\x20\x27\x20ac' + 'tive\x27\x20:\x20\x27\x27' + ');\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20item.id\x20=' + '\x20\x27slot_\x27\x20+' + '\x20safeId;\x0a\x20' + _0x575bc6(_0x9ba47a._0x3a9e23) + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20ite' + _0x575bc6(0x710) + _0x575bc6(0x654) + _0x575bc6(0x900) + 'lot.name);' + '\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x2fc0ed) + 'const\x20name' + '\x20=\x20documen' + _0x575bc6(_0x9ba47a._0x5e716c) + 'ement(\x27div' + '\x27);\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20name.cla' + _0x575bc6(0x530) + _0x575bc6(_0x9ba47a._0x50da2c) + 'name\x27;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20name.' + 'textConten' + 't\x20=\x20slot.n' + 'ame;\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20name.st' + 'yle.flex\x20=') + ('\x20\x271\x27;\x0a\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20const' + '\x20deleteBtn' + '\x20=\x20documen' + 't.createEl' + 'ement(\x27but' + _0x575bc6(0xa91) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20delet' + 'eBtn.textC' + _0x575bc6(_0x9ba47a._0xd50b5f) + '✕\x27;\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20deleteBt' + 'n.classNam' + 'e\x20=\x20\x27delet' + 'e-slot-btn' + '\x27;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20deleteBtn' + '.title\x20=\x20\x27' + 'Delete\x20thi' + 's\x20slot\x27;\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x2e0d0d) + '\x20\x20\x20\x20\x20\x20\x20del' + _0x575bc6(0x974) + 'lick\x20=\x20(e)' + _0x575bc6(_0x9ba47a._0x47ddaf) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20e.' + 'stopPropag' + 'ation();\x0a\x20' + _0x575bc6(_0x9ba47a._0xb08736) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x36d434) + _0x575bc6(_0x9ba47a._0x1e2cce) + _0x575bc6(0x171) + 'e);\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + _0x575bc6(0x949) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20item.a' + 'ppendChild' + _0x575bc6(0x4df) + _0x575bc6(_0x9ba47a._0x237820) + _0x575bc6(0x469) + _0x575bc6(_0x9ba47a._0x3ca20d) + '.appendChi' + _0x575bc6(_0x9ba47a._0x25cd56) + _0x575bc6(_0x9ba47a._0x490837) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20list.ap' + 'pendChild(' + _0x575bc6(0x424) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20});\x0a\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20};\x0a\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20w' + 'indow.upda' + 'teSlotPosi' + 'tionFields' + '\x20=\x20functio' + 'n(slotName' + ',\x20x,\x20y)\x20{\x0a' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0xa81) + _0x575bc6(_0x9ba47a._0x1ec457) + '\x20currentSl' + _0x575bc6(_0x9ba47a._0x48d675) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20const\x20' + 'posXInput\x20' + '=\x20document' + '.getElemen' + 'tById(\x27pos' + 'X\x27);\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x196) + _0x575bc6(_0x9ba47a._0x510912) + '\x20document.' + 'getElement' + 'ById(\x27posY' + '\x27);\x0a\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469)) + (_0x575bc6(0x469) + '\x20\x20if\x20(posX' + 'Input)\x20pos' + 'XInput.val' + _0x575bc6(0x592) + _0x575bc6(0x58e) + _0x575bc6(_0x9ba47a._0x3229fb) + _0x575bc6(_0x9ba47a._0x42ff89) + _0x575bc6(0x6f2) + '\x20(posYInpu' + _0x575bc6(_0x9ba47a._0x5816f1) + _0x575bc6(0x510) + _0x575bc6(_0x9ba47a._0x302927) + _0x575bc6(_0x9ba47a._0x23c3cc) + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x5a2) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20};\x0a\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20wind' + _0x575bc6(0x61d) + 'lotFromGam' + _0x575bc6(_0x9ba47a._0xd9e1fd) + _0x575bc6(0xa6b) + _0x575bc6(0x154) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x2d6) + 'f\x20(window.' + 'opener\x20&&\x20' + _0x575bc6(0x747) + _0x575bc6(_0x9ba47a._0x10b0a0) + 'idForSlot)' + '\x20{\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20const\x20gri' + 'dIndex\x20=\x20w' + 'indow.open' + _0x575bc6(_0x9ba47a._0x4e4551) + _0x575bc6(_0x9ba47a._0x49fc4e) + 'lotName);\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x6f2) + _0x575bc6(_0x9ba47a._0xf1cee3) + 'x\x20!==\x20null' + _0x575bc6(0x1e8) + 'dex\x20!==\x20cu' + 'rrentGrid)' + '\x20{\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + _0x575bc6(0x1c6) + 'tGrid(grid' + 'Index);\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20}\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20}\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20current' + _0x575bc6(0x57c) + 'tName;\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x5ab885) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x647) + 'ment.query' + 'SelectorAl' + _0x575bc6(_0x9ba47a._0x19b865) + 'ist\x20.list-' + _0x575bc6(0x570) + 'Each(item\x20' + _0x575bc6(0x6ff) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20item.cl' + 'assList.re' + 'move(\x27acti' + 've\x27);\x0a\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '});\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20co' + _0x575bc6(_0x9ba47a._0x23c0fd) + 't\x20=\x20docume' + _0x575bc6(_0x9ba47a._0x5bf2b3) + _0x575bc6(0x290) + 'lot_\x27\x20+\x20sl' + 'otName.rep' + 'lace(/[^a-' + 'zA-Z0-9]/g') + (',\x20\x27_\x27));\x0a\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20if\x20(ele' + 'ment)\x20{\x0a\x20\x20' + _0x575bc6(_0x9ba47a._0x2e11b3) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x7c9) + _0x575bc6(_0x9ba47a._0x37ce30) + _0x575bc6(0x668) + 'ctive\x27);\x0a\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20ele' + _0x575bc6(_0x9ba47a._0x382d6f) + _0x575bc6(0x195) + _0x575bc6(_0x9ba47a._0x595a06) + _0x575bc6(_0x9ba47a._0x5ac804) + _0x575bc6(0x5e1) + _0x575bc6(0x5a0) + ');\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x9be) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20showSl' + 'otProperti' + 'es(slotNam' + 'e);\x0a\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20};\x0a\x0a\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20do' + _0x575bc6(_0x9ba47a._0x16edac) + 'EventListe' + 'ner(\x27DOMCo' + _0x575bc6(0x84d) + _0x575bc6(_0x9ba47a._0x376274) + 'on()\x20{\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20document.' + 'addEventLi' + 'stener(\x27wh' + 'eel\x27,\x20func' + _0x575bc6(_0x9ba47a._0x2bbd89) + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x3424b9) + '\x20(e.target' + _0x575bc6(0xec) + '\x27number\x27)\x20' + '{\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x591) + 'entDefault' + '();\x0a\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + _0x575bc6(0x469) + _0x575bc6(_0x9ba47a._0x41e19c) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20c' + _0x575bc6(0x352) + _0x575bc6(0x538) + 't;\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20const' + '\x20step\x20=\x20pa' + 'rseFloat(i' + 'nput.step)' + '\x20||\x201;\x0a\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x13d4f4) + 'onst\x20curre' + 'ntValue\x20=\x20' + 'parseFloat' + '(input.val' + 'ue)\x20||\x200;\x0a' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x29fbbd) + '\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20if\x20(e' + _0x575bc6(_0x9ba47a._0x521eec) + '0)\x20{\x0a\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20input.val' + _0x575bc6(0x391) + 'ntValue\x20+\x20' + _0x575bc6(_0x9ba47a._0x564910) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469)) + ('\x20\x20\x20\x20\x20\x20\x20\x20}\x20' + 'else\x20{\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20input.v' + _0x575bc6(0x99c) + _0x575bc6(0x60f) + _0x575bc6(0x6a6) + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x35d76c) + _0x575bc6(0x469) + _0x575bc6(_0x9ba47a._0x1830eb) + '\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x23208d) + _0x575bc6(0x34b) + '(input.min' + _0x575bc6(0x1c4) + '\x20parseFloa' + 't(input.va' + 'lue)\x20<\x20par' + 'seFloat(in' + 'put.min))\x20' + '{\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x469) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20in' + 'put.value\x20' + _0x575bc6(_0x9ba47a._0x3618b2) + 'n;\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x213) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x264056) + 'f\x20(input.m' + 'ax\x20!==\x20\x27\x27\x20' + '&&\x20parseFl' + 'oat(input.' + _0x575bc6(_0x9ba47a._0x27360e) + _0x575bc6(_0x9ba47a._0x474323) + 'input.max)' + ')\x20{\x0a\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x2b0551) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x5d7848) + 'e\x20=\x20input.' + _0x575bc6(_0x9ba47a._0x57f8ba) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x8e1) + _0x575bc6(_0x9ba47a._0x4e04cc) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x5b9246) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20input.' + 'dispatchEv' + 'ent(new\x20Ev' + 'ent(\x27chang' + 'e\x27,\x20{\x20bubb' + 'les:\x20true\x20' + '}));\x0a\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x5bb859) + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20}\x0a\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x141bee) + _0x575bc6(0x76f) + 'e:\x20false\x20}' + ');\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20});\x0a\x20\x20\x20' + '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(0x614) + 't>\x0a\x20\x20\x20\x20\x20\x20\x20' + '\x20\x20\x20\x20\x20</bod' + 'y>\x0a\x20\x20\x20\x20\x20\x20\x20' + _0x575bc6(_0x9ba47a._0x490ce7))), VisualEditorWindow['document']['close'](), window[_0x575bc6(_0x9ba47a._0xabb1f8) + 'UIPosition' + 's'] = function (_0x4023aa) { const _0x2ccf2f = _0x575bc6; if ('ZJyuH' === 'ZJyuH') { saveHotbarPositions(_0x4023aa); if (VisualEditorWindow && !VisualEditorWindow['closed'] && _0x4023aa) { if ('zKBBr' !== _0x2ccf2f(0x847)) _0xe346aa['y'] = _0x1eacdc; else for (const _0x5f2564 in _0x4023aa) { const _0x49d486 = _0x4023aa[_0x5f2564]; _0x49d486 && VisualEditorWindow[_0x2ccf2f(_0x308809._0x2b989e) + 'PositionFi' + _0x2ccf2f(0x21a)] && VisualEditorWindow[_0x2ccf2f(0x318) + 'PositionFi' + 'elds'](_0x5f2564, _0x49d486['x'], _0x49d486['y']); } } } else { const _0x570a0d = _0x11a085(_0x57bb88[_0x2ccf2f(0x484)][_0x2ccf2f(_0x308809._0x2660a8) + 'Y'] || 0x1 * -0x1547 + -0x17c9 + 0x2d10); _0x19681a[_0x2ccf2f(0x7e1) + 'ite']['y'] = -0x81d + 0xa3f * 0x1 + 0x7 * -0x4e + _0x570a0d; } }, setTimeout(() => { updateEditorLists(); }, -0x640 + 0x1053 + -0x9af); const _0x295400 = setInterval(() => { VisualEditorWindow && VisualEditorWindow['closed'] && (clearInterval(_0x295400), clearInterval(_0x5e4214), disableEditorMode()); }, 0x6 * 0x7c + 0x6 * -0x481 + 0x2 * 0xd09); let _0x2a822b = SceneManager[_0x575bc6(_0x9ba47a._0x2f0b15)]; const _0x5e4214 = setInterval(() => { const _0x57f7c2 = { _0x41f995: 0x2a6, _0x1be6fb: 0x826, _0x219081: 0x381, _0x2fb1df: 0x422, _0xbefe95: 0x10f, _0x5051e4: 0x318 }, _0x4048f1 = { _0x3ba3d4: 0xa8d }, _0x3c413f = _0x575bc6; if (VisualEditorWindow && !VisualEditorWindow['closed']) { if ('nKSGX' !== _0x3c413f(_0x6a833d._0x211d66)) { const _0x25b4d9 = _0x5cb69d['_scene'][_0x3c413f(_0x6a833d._0x187802)]; let _0xd27d4e = _0x25b4d9['_slots']['get'](_0x2027b3); if (!_0xd27d4e) _0xd27d4e = new _0xb1739b(_0x30a448), _0xd27d4e['x'] = _0x114773['x'], _0xd27d4e['y'] = _0x3b4a09['y'], _0x25b4d9['_slots']['set'](_0x22edc5, _0xd27d4e), _0x25b4d9['addChild'](_0xd27d4e); else { _0xd27d4e['_config'] = _0x30a4f9, _0xd27d4e['x'] = _0x289c7c['x'], _0xd27d4e['y'] = _0x2f3741['y']; if (_0xd27d4e['createBack' + _0x3c413f(_0x6a833d._0x622de8)]) _0xd27d4e['createBack' + 'ground'](); if (_0xd27d4e['positionBu' + _0x3c413f(_0x6a833d._0x468621)]) _0xd27d4e['positionBu' + 'ttonText'](); if (_0xd27d4e['refreshBut' + _0x3c413f(_0x6a833d._0xf383ad)]) _0xd27d4e[_0x3c413f(_0x6a833d._0x2a853f) + 'tonText'](); } if (_0x25b4d9['_gridBackg' + 'rounds'] && _0x25b4d9['_gridBackg' + _0x3c413f(_0x6a833d._0xe6a01)][_0x10bb05]) { const _0x3c26e0 = _0x25b4d9['_gridBackg' + 'rounds'][_0x345582]; _0x3c26e0['_grid'] = _0x400f1e[_0x3c413f(0xa9d)][_0x44380f], _0x3c26e0['_gridSlots'] = []; } } else { if (SceneManager[_0x3c413f(_0x6a833d._0x374731)] !== _0x2a822b) { _0x2a822b = SceneManager['_scene']; const _0x724979 = (_0x323806 = 0x11 * -0x102 + -0x2027 + -0x25 * -0x155) => { const _0x565dc5 = { _0xc28d9c: 0x92a, _0x44b1ea: 0x318 }, _0x3dd346 = _0x3c413f; if ('cKeyS' !== 'ImDFn') { if (_0x323806 > 0xe5 * -0x3 + 0x1224 + -0xf66) return; if (editorMode && SceneManager['_scene'] && SceneManager['_scene']['_skillUI']) SceneManager[_0x3dd346(_0x57f7c2._0x41f995)][_0x3dd346(_0x57f7c2._0x1be6fb)][_0x3dd346(_0x57f7c2._0x219081) + _0x3dd346(0x70a)] && SceneManager['_scene']['_skillUI']['_gridBackg' + 'rounds']['forEach'](_0x206ba4 => { const _0x303ae0 = _0x3dd346; if ('oQXGG' !== 'jRbRw') _0x206ba4['_isPlaceho' + 'lder'] && (_0x206ba4[_0x303ae0(_0x4048f1._0x3ba3d4)] = !![]); else return; }), SceneManager[_0x3dd346(0x2a6)]['toggleDrag' + 'Mode'] && !SceneManager['_scene']['_isDragMod' + 'e'] && SceneManager['_scene']['toggleDrag' + _0x3dd346(0x40a)](), window['saveHotbar' + _0x3dd346(0x4cd) + 's'] && (window['saveHotbar' + 'UIPosition' + 's'] = function (_0x2edb30) { const _0x1850af = _0x3dd346; saveHotbarPositions(_0x2edb30); if (VisualEditorWindow && !VisualEditorWindow['closed'] && _0x2edb30) for (const _0x3a0e7b in _0x2edb30) { const _0x36f4dc = _0x2edb30[_0x3a0e7b]; _0x36f4dc && VisualEditorWindow['updateSlot' + _0x1850af(_0x565dc5._0xc28d9c) + 'elds'] && VisualEditorWindow[_0x1850af(_0x565dc5._0x44b1ea) + 'PositionFi' + 'elds'](_0x3a0e7b, _0x36f4dc['x'], _0x36f4dc['y']); } }); else { if (_0x3dd346(_0x57f7c2._0x2fb1df) !== 'UjGZG') setTimeout(() => _0x724979(_0x323806 + (-0x18d9 + 0xece * -0x1 + 0x27a8)), 0x1968 + -0x133 * 0x18 + 0x3c4); else return; } } else { _0xdd3ca3(_0x5aef1a); if (_0x828b52 && !_0x827ca0[_0x3dd346(_0x57f7c2._0xbefe95)] && _0xeb0478) for (const _0xbb0e5b in _0x2e8c56) { const _0xc8834 = _0x54ab15[_0xbb0e5b]; _0xc8834 && _0x2fdcef[_0x3dd346(_0x57f7c2._0x5051e4) + 'PositionFi' + _0x3dd346(0x21a)] && _0x2053df['updateSlot' + 'PositionFi' + 'elds'](_0xbb0e5b, _0xc8834['x'], _0xc8834['y']); } } }; _0x724979(); } } } }, 0xf0b * 0x2 + -0x186c + 0x26 * -0x19); } } function enableEditorMode() { const _0x29ba92 = { _0x16992b: 0x142, _0x152d24: 0x826 }, _0x2060ff = { _0x102328: 0x467, _0x471ad7: 0x2a6 }, _0x53e81b = { _0x521869: 0xa8d }, _0x47c7b9 = _0x28a5; editorMode = !![], ConfigManager[_0x47c7b9(_0x29ba92._0x16992b)] = !![]; if (SceneManager['_scene'] && SceneManager['_scene']['_skillUI'] && SceneManager[_0x47c7b9(0x2a6)]['_skillUI']['_gridBackg' + 'rounds']) { if ('OctAf' === 'OctAf') SceneManager['_scene'][_0x47c7b9(_0x29ba92._0x152d24)][_0x47c7b9(0x381) + 'rounds']['forEach'](_0x6ccc6c => { const _0x28166e = _0x47c7b9; 'riFuJ' !== _0x28166e(0x674) ? _0x11b314['positions'] = {} : _0x6ccc6c['_isPlaceho' + 'lder'] && (_0x6ccc6c[_0x28166e(_0x53e81b._0x521869)] = ![]); }); else try { const _0x4f1b2b = _0x3e7c37('fs'), _0x462778 = _0x2dc1b4(); if (_0x4f1b2b['existsSync'](_0x462778)) { const _0x11d053 = _0x335472(); _0x1567d9 = _0x11d053['grids'] || []; } } catch (_0x25ba67) { _0x5c366d[_0x47c7b9(0x127)](_0x47c7b9(0x6a9) + 'ting\x20edito' + 'r\x20lists:', _0x25ba67); } } const _0x10276b = (_0x39af35 = -0xbbd + -0x11b5 + 0x1d72) => { const _0x682bca = { _0x291158: 0xa8d }, _0x2ed8be = _0x47c7b9; if (_0x39af35 > -0x22b2 + -0x3 * 0x6b9 + 0x36e7 * 0x1) { console['error']('[Visual\x20Ed' + _0x2ed8be(0x117) + _0x2ed8be(_0x2060ff._0x102328) + _0x2ed8be(0xa62) + 'de\x20after\x20m' + _0x2ed8be(0x28c) + 'tempts'); return; } SceneManager[_0x2ed8be(0x2a6)] && SceneManager['_scene']['_skillUI'] && SceneManager[_0x2ed8be(0x2a6)]['toggleDrag' + 'Mode'] ? (!SceneManager['_scene']['_isDragMod' + 'e'] && SceneManager['_scene']['toggleDrag' + 'Mode'](), SceneManager[_0x2ed8be(_0x2060ff._0x471ad7)][_0x2ed8be(0x826)]['_gridBackg' + 'rounds'] && SceneManager['_scene']['_skillUI'][_0x2ed8be(0x381) + 'rounds'][_0x2ed8be(0x87e)](_0x3c2551 => { const _0x852ba6 = _0x2ed8be; _0x3c2551['_isPlaceho' + 'lder'] && (_0x3c2551[_0x852ba6(_0x682bca._0x291158)] = !![]); })) : setTimeout(() => _0x10276b(_0x39af35 + (-0x1cd0 * -0x1 + 0x1fa2 + -0x1 * 0x3c71)), -0x15bf + 0x152 * -0x3 + 0x1a19); }; _0x10276b(); } function disableEditorMode() { const _0x1dc6dc = { _0x3ebc0e: 0x2a6, _0x4c9658: 0x826, _0x2e7434: 0xc7, _0xb1d1a3: 0x5bb, _0x29ca88: 0x5bb, _0x2d519d: 0x5ef }, _0x1843b8 = { _0x1bf119: 0x425 }, _0x26731e = _0x28a5; editorMode = ![], ConfigManager['alwaysRun'] = ![], currentSelectedGrid = null, SceneManager['_scene'] && SceneManager['_scene'][_0x26731e(0x826)] && SceneManager[_0x26731e(_0x1dc6dc._0x3ebc0e)]['_skillUI']['_gridBackg' + 'rounds'] && SceneManager['_scene'][_0x26731e(_0x1dc6dc._0x4c9658)]['_gridBackg' + 'rounds']['forEach'](_0x122603 => { const _0x16e256 = _0x26731e; _0x16e256(0x116) === 'JDLGh' ? (_0x416226[_0x16e256(_0x1843b8._0x1bf119)][_0x584284] = _0x8951b4[_0x16e256(_0x1843b8._0x1bf119)][_0x42cbd2], delete _0x383495['positions'][_0x2fea0c], _0x3f79a9(_0x488e86)) : _0x122603['_isPlaceho' + _0x16e256(0x92b)] && (_0x122603['visible'] = ![]); }), window['deselectAl' + _0x26731e(0xace)] && window['deselectAl' + 'lSlots'](), window[_0x26731e(_0x1dc6dc._0x2e7434) + _0x26731e(0x5bb)] && (window['_gridHighl' + _0x26731e(_0x1dc6dc._0xb1d1a3)][_0x26731e(0x300)] && window['_gridHighl' + _0x26731e(_0x1dc6dc._0x29ca88)][_0x26731e(0x300)][_0x26731e(0x2b3) + 'd'](window['_gridHighl' + _0x26731e(_0x1dc6dc._0xb1d1a3)]), window['_gridHighl' + 'ightSprite'] = null), SceneManager['_scene'] && SceneManager['_scene'][_0x26731e(_0x1dc6dc._0x2d519d) + 'Mode'] && (SceneManager[_0x26731e(_0x1dc6dc._0x3ebc0e)]['_isDragMod' + 'e'] && (_0x26731e(0x916) === 'uqHmK' ? _0x16ebeb(_0x17f7b8, _0x74d24f) : SceneManager['_scene'][_0x26731e(0x5ef) + 'Mode']())); } window['loadGridSl' + _0x2cb8e6(0x4ca)] = function (_0x35209e) { const _0x5e928a = { _0x49fc6c: 0x2a6, _0x63dd19: 0x6ae, _0x32b6f8: 0x77c, _0x2e1b7c: 0x754, _0x347f74: 0xa7f, _0x1dea4e: 0x3de }, _0x33fb2d = { _0x3e3b8b: 0x151 }, _0xa94f7c = _0x2cb8e6; if (!SceneManager[_0xa94f7c(_0x5e928a._0x49fc6c)] || !SceneManager['_scene']['_skillUI']) return; let _0x5cf604 = []; if (Utils[_0xa94f7c(_0x5e928a._0x63dd19)]()) try { if ('SBrtE' !== 'fWDsX') { const _0x3fe357 = require('fs'), _0x1bb349 = getConfigPath(); if (_0x3fe357[_0xa94f7c(0x959)](_0x1bb349)) { const _0xccefc4 = loadConfigFile(); _0x5cf604 = _0xccefc4['grids'] || []; } } else _0x288255['goto'](_0x4b0e97[_0xa94f7c(_0x5e928a._0x49fc6c)]['constructo' + 'r']); } catch (_0x59b0cb) { if (_0xa94f7c(_0x5e928a._0x32b6f8) === 'JmSwG') { _0x41b203[_0xa94f7c(0x127)](_0xa94f7c(0xb12) + 'itor]\x20Scen' + _0xa94f7c(_0x5e928a._0x2e1b7c) + 'UI\x20not\x20ava' + _0xa94f7c(0x85f)); return; } else console['error']('Error\x20load' + 'ing\x20grid\x20s' + 'lots:', _0x59b0cb); } else { } if (!_0x5cf604 || _0x35209e >= _0x5cf604['length']) { VisualEditorWindow && !VisualEditorWindow['closed'] && VisualEditorWindow['updateSlot' + 'sList']([]); return; } const _0x39658b = _0x5cf604[_0x35209e], _0x4abe77 = _0x39658b[_0xa94f7c(_0x5e928a._0x347f74)] ? _0x39658b['Slots'][_0xa94f7c(_0x5e928a._0x1dea4e)](_0x4abf99 => { const _0x1d9a3c = _0xa94f7c, _0x2dce5d = (_0x4abf99[_0x1d9a3c(_0x33fb2d._0x3e3b8b)] || '')[_0x1d9a3c(0x950)](','), _0xea64fa = (_0x4abf99['Button'] || '')['split'](','); return { 'name': _0x2dce5d[-0x6a1 + -0x45e + -0xaff * -0x1]['trim'](), 'buttonText': _0xea64fa[0xf6e + 0x1c54 + -0x2bc2]['trim']() }; }) : []; currentSelectedGrid = _0x35209e, VisualEditorWindow && !VisualEditorWindow['closed'] && VisualEditorWindow['updateSlot' + _0xa94f7c(0x43a)](_0x4abe77); }, window['getGridInf' + 'o'] = function (_0x1210bf) { const _0x2b8758 = { _0x32f8e1: 0x14b, _0x32d0eb: 0x950, _0x31207d: 0xa7f, _0x22c745: 0x3bd, _0x41d3bd: 0x6da, _0x17ea8a: 0xacd }, _0x5ce849 = _0x2cb8e6; let _0x1b3b77 = []; if (Utils['isNwjs']()) try { if (_0x5ce849(_0x2b8758._0x32f8e1) !== 'gOtYg') _0x1fc29c['positions'][_0x2bf4a8]['x'] = _0x4b6d5e; else { const _0x539516 = require('fs'), _0x839250 = getConfigPath(); if (_0x539516['existsSync'](_0x839250)) { const _0x4dd3f6 = loadConfigFile(); _0x1b3b77 = _0x4dd3f6['grids'] || []; } } } catch (_0x3e9795) { console['error']('Error\x20load' + _0x5ce849(0xa69) + 'nfo:', _0x3e9795); } else { } if (!_0x1b3b77 || _0x1210bf >= _0x1b3b77['length']) return null; const _0x3482de = _0x1b3b77[_0x1210bf], _0x59c25e = (_0x3482de['RowColumn'] || '2,\x205')['split'](',')[_0x5ce849(0x3de)](_0x42a4f4 => parseInt(_0x42a4f4['trim']())), _0x18f2bf = _0x59c25e[-0x1a4e + 0x733 + 0x131b * 0x1] || -0x13d7 + -0x1a61 * -0x1 + -0x1 * 0x688, _0x1f67e5 = _0x59c25e['length'] === -0x1a09 + -0xf7a + 0x2985 ? _0x59c25e[0x3 * 0x6ab + -0x2 * -0x49d + -0x1d3a] : _0x59c25e[-0x1 * -0x1fc2 + 0x124 * -0x19 + 0x5 * -0xa6], _0xd1d07f = parseInt(_0x3482de['Padding']) || -0x1501 + -0x1e53 + 0x5 * 0xa46, _0x4699d3 = _0x18f2bf + '×' + _0x1f67e5; let _0x48e65d = -0x3 * -0xbb3 + 0x913 * 0x1 + 0x2 * -0x1616, _0x1a8393 = 0x1786 + 0x22c4 + 0x6 * -0x9b7; if (_0x3482de['Slots'] && _0x3482de[_0x5ce849(0xa7f)]['length'] > 0x24c2 + 0x12 * -0x95 + -0x2 * 0xd24) { const _0x5b90dc = _0x3482de['Slots'][-0x1325 + 0x31 * 0x1d + 0xd98]['Name'][_0x5ce849(_0x2b8758._0x32d0eb)](',')[-0x6 * 0x3af + -0xddd + 0x23f7]['trim'](), _0xb46d28 = _0x5ce849(0x9c1) + _0x5b90dc; if (window['$uiPositio' + 'ns'] && window['$uiPositio' + 'ns'][_0xb46d28]) _0x48e65d = window['$uiPositio' + 'ns'][_0xb46d28]['x'], _0x1a8393 = window['$uiPositio' + 'ns'][_0xb46d28]['y']; else { const _0x209a26 = (_0x3482de[_0x5ce849(0x809)] || '0,\x200')['split'](',')['map'](_0x101e21 => eval(_0x101e21['trim']())); _0x48e65d = _0x209a26[0x1 * 0x1cc1 + -0x26b7 + 0x9f6] || -0x1 * 0xab0 + -0x1e3 + 0xc93, _0x1a8393 = _0x209a26[0xe26 + -0x22df + -0x14ba * -0x1] || -0xd77 * -0x1 + -0x726 * -0x5 + 0xdd * -0x39; } } const _0xa878dd = {}; return _0xa878dd['slotCount'] = _0x3482de[_0x5ce849(_0x2b8758._0x31207d)] ? _0x3482de['Slots']['length'] : -0x3 * 0x2b9 + -0x1b31 * -0x1 + -0x1306, _0xa878dd[_0x5ce849(0x7d1)] = _0x4699d3, _0xa878dd[_0x5ce849(0x115)] = _0x18f2bf, _0xa878dd['columns'] = _0x1f67e5, _0xa878dd[_0x5ce849(_0x2b8758._0x22c745)] = _0xd1d07f, _0xa878dd[_0x5ce849(0x8f8) + _0x5ce849(_0x2b8758._0x41d3bd)] = _0x3482de['Controllab' + 'leViaGamep' + 'ad'] === _0x5ce849(_0x2b8758._0x17ea8a), _0xa878dd['background' + 'Image'] = _0x3482de['Background' + 'Image'] || '', _0xa878dd['positionX'] = _0x48e65d, _0xa878dd['positionY'] = _0x1a8393, _0xa878dd; }, window['getSlotPro' + 'perties'] = function (_0xcfe17) { const _0x58df8e = { _0x69f741: 0x2a6, _0x4c6b2e: 0x3c3, _0x29c479: 0xa9d, _0x4bb034: 0x127, _0xee3e37: 0x535, _0x16e86b: 0x3c9, _0x3f1908: 0xa7f, _0x554e38: 0x950 }, _0x39111a = _0x2cb8e6; if (!SceneManager['_scene'] || !SceneManager[_0x39111a(_0x58df8e._0x69f741)]['_skillUI']) return null; const _0x28e66e = SceneManager['_scene']['_skillUI']['_slots']['get'](_0xcfe17); if (!_0x28e66e) return null; let _0x6a3e3e = '', _0x314508 = []; if (Utils['isNwjs']()) try { if ('oTqIe' === 'oTqIe') { const _0x219f62 = require('fs'), _0x801615 = getConfigPath(); if (_0x219f62['existsSync'](_0x801615)) { if ('lZPQD' === _0x39111a(_0x58df8e._0x4c6b2e)) { const _0x291c01 = loadConfigFile(); _0x314508 = _0x291c01[_0x39111a(_0x58df8e._0x29c479)] || []; } else _0x44ebb3[_0x39111a(_0x58df8e._0x4bb034)](_0x39111a(0x6a9) + _0x39111a(0x5db) + _0x39111a(_0x58df8e._0xee3e37), _0x3adfa3); } } else { const _0x49bb84 = _0x19159c(); _0x3f69f9 = _0x49bb84['grids'] || []; } } catch (_0x20468c) { console['error']('Error\x20load' + _0x39111a(_0x58df8e._0x16e86b) + 'roperties:', _0x20468c); } else { } for (const _0x2953ca of _0x314508) { if (_0x2953ca['Slots']) for (const _0x4ec906 of _0x2953ca[_0x39111a(_0x58df8e._0x3f1908)]) { const _0x4487e3 = (_0x4ec906['Name'] || '')['split'](','); if (_0x4487e3[0x5 * -0x19f + -0x1fdf + 0x27fa][_0x39111a(0x11e)]() === _0xcfe17) { const _0x250bc6 = (_0x4ec906['Button'] || '')[_0x39111a(_0x58df8e._0x554e38)](','); _0x6a3e3e = _0x250bc6[-0x25c5 + 0x3b2 * -0x5 + 0x383f]['trim'](); break; } } if (_0x6a3e3e) break; } const _0x1b91e0 = {}; return _0x1b91e0['x'] = _0x28e66e['x'], _0x1b91e0['y'] = _0x28e66e['y'], _0x1b91e0['buttonText'] = _0x6a3e3e, _0x1b91e0; }, window['getFullSlo' + 'tConfig'] = function (_0x1acb50) { const _0x339f8d = { _0x2f74be: 0xa7f, _0xf30d00: 0x11e }, _0x5f1b49 = _0x2cb8e6; if (!Utils[_0x5f1b49(0x6ae)]()) return null; try { const _0x111e0d = require('fs'), _0x425696 = getConfigPath(); if (_0x111e0d[_0x5f1b49(0x959)](_0x425696)) { const _0x2f0b09 = loadConfigFile(), _0x3d04c5 = _0x2f0b09['grids'] || []; for (const _0x11c92c of _0x3d04c5) { if (_0x11c92c[_0x5f1b49(0xa7f)]) for (const _0x311672 of _0x11c92c[_0x5f1b49(_0x339f8d._0x2f74be)]) { const _0x135a0f = (_0x311672[_0x5f1b49(0x151)] || '')['split'](','); if (_0x135a0f[0x20 * 0x11c + -0x19ba + -0x9c6][_0x5f1b49(_0x339f8d._0xf30d00)]() === _0x1acb50) return _0x311672; } } } } catch (_0x17b914) { console['error']('Error\x20gett' + 'ing\x20full\x20s' + 'lot\x20config' + ':', _0x17b914); } return null; }, window[_0x2cb8e6(0x318) + 'Property'] = function (_0x20b8d1, _0x44baa7, _0x4631cd, _0x30143a) { const _0x37837c = { _0x4acac5: 0x632, _0xb85e82: 0xa7f, _0x410fec: 0x127, _0x217211: 0x53b, _0x2f9478: 0x296, _0x31b8b4: 0xea, _0xb11210: 0x950, _0x2f59ba: 0x67a, _0x2e2ad3: 0x48f, _0x39d980: 0x4bd, _0x21808b: 0x411, _0x5dde49: 0x950, _0x428a14: 0x425, _0x40a757: 0xaef, _0x36fd14: 0x484, _0x480c49: 0x826, _0x56bc48: 0x9e2, _0x3cd647: 0x8ac, _0x36ba70: 0xa35, _0x4db927: 0x759, _0x227bc6: 0x9c0, _0x49c6e5: 0x6a9 }, _0x3d0e4f = { _0x2f1a3a: 0x11e }, _0x147c0a = _0x2cb8e6; if (!Utils['isNwjs']()) return alert('Editing\x20sl' + 'ots\x20only\x20w' + _0x147c0a(_0x37837c._0x4acac5) + '.js\x20(test\x20' + 'mode\x20in\x20de' + 'sktop)'), null; try { const _0x5da85c = require('fs'), _0x56ce72 = getConfigPath(); if (!_0x5da85c['existsSync'](_0x56ce72)) return alert('Config\x20fil' + 'e\x20not\x20foun' + 'd!'), null; const _0x328f4e = loadConfigFile(), _0x3daa1b = _0x328f4e['grids'][_0x20b8d1]; if (!_0x3daa1b || !_0x3daa1b['Slots']) { if ('KRZyT' === 'KRZyT') return alert('Grid\x20or\x20sl' + 'ots\x20not\x20fo' + 'und!'), null; else _0x3dc1af['parent'] && _0x325a97['parent']['removeChil' + 'd'](_0x758cc5), _0x151def[_0x147c0a(0x2a6)]['_skillUI']['_slots'][_0x147c0a(0x62b)](_0xfc20f5); } const _0x303399 = _0x3daa1b[_0x147c0a(_0x37837c._0xb85e82)]['findIndex'](_0x18720a => { const _0x208e6c = _0x147c0a, _0x475a28 = _0x18720a['Name']['split'](',')[-0x4eb * 0x5 + 0x19ac + -0x1 * 0x115][_0x208e6c(_0x3d0e4f._0x2f1a3a)](); return _0x475a28 === _0x44baa7; }); if (_0x303399 === -(0x44 * -0x31 + -0xbca * 0x3 + 0x3063)) return console[_0x147c0a(_0x37837c._0x410fec)](_0x147c0a(0x519) + _0x147c0a(_0x37837c._0x217211), _0x44baa7), alert(_0x147c0a(0x519) + 'ound:\x20' + _0x44baa7 + ('.\x20The\x20page' + '\x20will\x20relo' + 'ad.')), SceneManager['goto'](SceneManager['_scene'][_0x147c0a(_0x37837c._0x2f9478) + 'r']), null; const _0x320c65 = _0x3daa1b[_0x147c0a(0xa7f)][_0x303399]; let _0x1283fd = _0x320c65[_0x147c0a(0x151)]['split'](',')[0x1318 + -0x209d + 0xd85]['trim'](), _0x2a64ed = _0x1283fd; switch (_0x4631cd) { case 'nameKb': const _0x1b8935 = _0x320c65['Name']['split'](',')['map'](_0x45cb07 => _0x45cb07['trim']()); _0x1b8935[0x1 * -0x2323 + -0x951 + 0x4 * 0xb1d] = _0x30143a, _0x320c65['Name'] = _0x1b8935['join'](',\x20'), _0x2a64ed = _0x30143a; break; case 'buttonKb': const _0x4b24e1 = _0x320c65[_0x147c0a(_0x37837c._0x31b8b4)]['split'](',')['map'](_0x25534d => _0x25534d['trim']()); _0x4b24e1[-0x1f40 + 0x1c1 + 0x1d7f] = _0x30143a, _0x320c65['Button'] = _0x4b24e1['join'](',\x20'); break; case 'buttonGp': const _0x381883 = _0x320c65['Button'][_0x147c0a(_0x37837c._0xb11210)](',')[_0x147c0a(0x3de)](_0x35fcf6 => _0x35fcf6[_0x147c0a(0x11e)]()); if (_0x30143a) _0x381883[-0x7f1 * -0x3 + -0xa52 * -0x1 + -0x2e * 0xbe] = _0x30143a; else _0x381883[_0x147c0a(_0x37837c._0x2f59ba)] > -0x83 * 0x3d + -0x3af * 0x9 + 0x405f && _0x381883[_0x147c0a(0xac9)](-0xced + -0x2e4 + 0xfd2, 0x4cb * -0x5 + 0x1b07 + -0x30f); _0x320c65['Button'] = _0x381883['join'](',\x20'); break; case _0x147c0a(0x35b) + 'Image': _0x320c65['Background' + _0x147c0a(_0x37837c._0x2e2ad3)] = _0x30143a; break; case 'textOffset' + 'Y': _0x320c65['TextOffset' + 'Y'] = _0x30143a['toString'](); break; case _0x147c0a(_0x37837c._0x39d980) + 'avior': _0x320c65['SpecialBeh' + 'avior'] = _0x30143a; break; }saveConfigFile(_0x328f4e); if (_0x4631cd === 'nameKb' && _0x1283fd !== _0x2a64ed) { if (!_0x328f4e['positions']) { if (_0x147c0a(_0x37837c._0x21808b) === _0x147c0a(0x505)) { const _0x282fb2 = _0x231bdd[_0x147c0a(0x151)][_0x147c0a(_0x37837c._0x5dde49)](',')[0x1c80 + 0x1 * 0x689 + -0x2309]['trim'](); return _0x282fb2 === _0x378e93; } else _0x328f4e['positions'] = {}; } _0x328f4e[_0x147c0a(_0x37837c._0x428a14)][_0x1283fd] && (_0x328f4e[_0x147c0a(_0x37837c._0x428a14)][_0x2a64ed] = _0x328f4e['positions'][_0x1283fd], delete _0x328f4e['positions'][_0x1283fd], saveConfigFile(_0x328f4e)); window[_0x147c0a(0xaef) + 'ns'] && window[_0x147c0a(_0x37837c._0x40a757) + 'ns'][_0x1283fd] && (window['$uiPositio' + 'ns'][_0x2a64ed] = window[_0x147c0a(0xaef) + 'ns'][_0x1283fd], delete window['$uiPositio' + 'ns'][_0x1283fd]); const _0x2b9a7b = _slotData['get'](_0x1283fd); _0x2b9a7b && ('rXhYO' === 'rXhYO' ? (_slotData['set'](_0x2a64ed, _0x2b9a7b), _slotData['delete'](_0x1283fd)) : _0x2581b7[_0x147c0a(0xaef) + 'ns'] = {}); if (SceneManager['_scene'] && SceneManager['_scene']['_skillUI']) { if ('pvHlX' !== _0x147c0a(0x417)) { const _0x5855a6 = {}; _0x5855a6['x'] = _0xa11e82, _0x5855a6['y'] = _0x12dcf7, _0x20ac5a['$uiPositio' + 'ns'][_0x1174ac] = _0x5855a6; } else { const _0x36c7f6 = SceneManager['_scene']['_skillUI']['_slots']['get'](_0x1283fd); if (_0x36c7f6) { if ('XxBFz' !== _0x147c0a(0x8aa)) return; else { _0x36c7f6[_0x147c0a(_0x37837c._0x36fd14)][_0x147c0a(0x151)] = _0x2a64ed, _0x36c7f6[_0x147c0a(0x41f) + 'ame'] = _0x2a64ed, SceneManager[_0x147c0a(0x2a6)][_0x147c0a(_0x37837c._0x480c49)]['_slots']['delete'](_0x1283fd), SceneManager['_scene']['_skillUI']['_slots']['set'](_0x2a64ed, _0x36c7f6); if (_0x36c7f6['refreshBut' + _0x147c0a(_0x37837c._0x56bc48)]) { if ('KOWWl' === 'vSAcF') return _0x444844['parse'](_0x421a7d['readFileSy' + 'nc'](_0x38c943, 'utf8')); else _0x36c7f6['refreshBut' + 'tonText'](); } VisualEditorWindow && !VisualEditorWindow['closed'] && ('yCcXu' !== 'Bifuu' ? VisualEditorWindow['selectSlot' + _0x147c0a(_0x37837c._0x3cd647)] && VisualEditorWindow['selectSlot' + 'FromGame'](_0x2a64ed) : _0xf32175[_0x147c0a(_0x37837c._0x36ba70) + 'nSprite']['y'] = 0x2 * -0xa31 + 0x5eb + 0xe77); } } } } } const _0x347e20 = _0x4631cd === _0x147c0a(_0x37837c._0x4db927) && _0x1283fd !== _0x2a64ed ? _0x2a64ed : _0x44baa7; if (_0x4631cd === _0x147c0a(0x248) || _0x4631cd === _0x147c0a(_0x37837c._0x227bc6)) updateSlotButtonText(_0x347e20); else { if (_0x4631cd === _0x147c0a(0x394) + 'Y') updateSlotTextOffset(_0x347e20, parseInt(_0x30143a) || 0x10 * 0x65 + 0x6b7 + 0x29b * -0x5); else { if (_0x4631cd === 'background' + _0x147c0a(_0x37837c._0x2e2ad3)) updateSlotBackgroundImage(_0x347e20, _0x30143a); else _0x4631cd === 'specialBeh' + _0x147c0a(0x58c) && ('AMsfy' !== _0x147c0a(0x2bf) ? updateSlotSpecialBehavior(_0x347e20, _0x30143a) : _0x4a75fd['Slots']['push'](_0x10e1e1)); } } const _0x3d244c = {}; _0x3d244c['newName'] = _0x2a64ed; const _0x627275 = {}; return _0x627275['newName'] = _0x1283fd, _0x4631cd === 'nameKb' ? _0x3d244c : _0x627275; } catch (_0xdae1f5) { if (_0x147c0a(0xae4) === 'GVKMS') return console[_0x147c0a(0x127)]('Error\x20upda' + _0x147c0a(0x1d0) + _0x147c0a(0x395), _0xdae1f5), alert(_0x147c0a(_0x37837c._0x49c6e5) + 'ting\x20prope' + 'rty:\x20' + _0xdae1f5['message']), null; else { const _0x76764d = _0x9a4003['_gridBackg' + _0x147c0a(0x70a)][_0x474e02]; _0x76764d['x'] = _0x1fcb31, _0x76764d['y'] = _0x222b96; } } }; function updateSlotTextOffset(_0x2f15ae, _0x4f9c8e) { const _0x443b30 = { _0x393382: 0x7e1, _0x47b8ab: 0x484, _0x5443a4: 0x48f, _0x5ee1ea: 0x137, _0x3d3d1c: 0xa08, _0x13375d: 0x1f2, _0x1fe112: 0x5c8, _0x25c965: 0xa8d, _0x1c2de8: 0x1ae, _0x2ab523: 0xa35 }, _0x49fa64 = _0x2cb8e6; if (!SceneManager['_scene'] || !SceneManager[_0x49fa64(0x2a6)]['_skillUI']) return; const _0x4a46d9 = SceneManager['_scene']['_skillUI']['_slots'][_0x49fa64(0xc1)](_0x2f15ae); if (!_0x4a46d9) return; if (_0x4a46d9[_0x49fa64(_0x443b30._0x393382) + 'ite']) { if (_0x4a46d9[_0x49fa64(_0x443b30._0x47b8ab)] && _0x4a46d9['_config']['Background' + 'Image']) { const _0x5bfa76 = ImageManager[_0x49fa64(0x713)](_0x4a46d9[_0x49fa64(0x484)]['Background' + _0x49fa64(_0x443b30._0x5443a4)]); _0x4a46d9['_buttonSpr' + _0x49fa64(_0x443b30._0x5ee1ea)]['y'] = _0x5bfa76[_0x49fa64(0x288)] / (0x12ef + -0x3 * -0x324 + -0x1 * 0x1c59); } else _0x4a46d9['_buttonSpr' + 'ite']['y'] = -0x1d * 0x139 + 0x17 * -0xda + 0x370b; _0x4a46d9[_0x49fa64(_0x443b30._0x393382) + 'ite']['y'] += _0x4f9c8e; } if (_0x4a46d9['_buttonIco' + 'nSprite']) { if (_0x49fa64(0x556) === _0x49fa64(0x691)) { const _0x31cd82 = _0xa247f4['_scene']['_skillUI']['_gridBackg' + _0x49fa64(0x70a)]; if (_0x31cd82 && _0x31cd82[_0x17f86a]) { const _0x418750 = _0x31cd82[_0x5efd5b]; _0x418750['_grid'] = _0x57f894['grids'][_0x20c763]; if (_0x418750['_isPlaceho' + 'lder']) { const _0x11e22b = _0x49fc0e * _0x2f7d9d + (_0x4c8d68 - (0x2054 * -0x1 + 0x129a + -0x5 * -0x2bf)) * _0x555bb5, _0x1701ba = _0x4c8e77 * _0x4f6679 + (_0x8cda8b - (-0x16a8 + -0xe8c + 0x2535)) * _0x432da4, _0x760191 = new _0xa2f268(_0x11e22b + (-0x4ca * 0x3 + 0x21b3 + -0x1341), _0x1701ba + (0x4aa + 0x43f * 0x9 + -0x2acd)), _0x161c9b = _0x760191[_0x49fa64(_0x443b30._0x3d3d1c)]; _0x161c9b['strokeStyl' + 'e'] = 'rgba(255,\x20' + _0x49fa64(0x24f) + '9)', _0x161c9b['fillStyle'] = 'rgba(255,\x20' + '215,\x200,\x200.' + _0x49fa64(0x2e8), _0x161c9b['lineWidth'] = 0x687 * -0x3 + 0xf50 + 0x449, _0x161c9b['setLineDas' + 'h']([-0x25fa + -0x1a0a + 0x4010, 0x10c3 * -0x2 + 0x207 * 0x9 + 0xf4d * 0x1]), _0x161c9b['fillRect'](-0xf2d + 0x980 + 0x5ad, 0x13 * -0xce + -0x17 * -0x193 + -0xf * 0x165, _0x11e22b + (-0x1fc3 + -0x1757 + -0xe * -0x3f1), _0x1701ba + (0xfd7 * -0x1 + 0x1be5 * -0x1 + -0x2bd * -0x10)), _0x161c9b[_0x49fa64(0x521)](0x20ec + 0x1794 + -0x71 * 0x80, -0x1 * -0x1d69 + -0x1154 + -0xc15, _0x11e22b + (-0xb2f * -0x2 + -0xca4 * -0x3 + -0x3c36), _0x1701ba + (0x89b + -0x811 + -0x76)), _0x161c9b['font'] = _0x49fa64(0xa79) + 'Arial', _0x161c9b['fillStyle'] = 'rgba(255,\x20' + _0x49fa64(0x58a) + '0)', _0x161c9b[_0x49fa64(_0x443b30._0x13375d)] = 'center', _0x161c9b[_0x49fa64(_0x443b30._0x1fe112) + 'ne'] = 'middle', _0x161c9b['fillText']('Grid\x20' + (_0x5e7065 + (0x79 * -0x1 + 0x14c7 + -0x144d)), (_0x11e22b + (-0x1271 * -0x2 + 0x1 * -0xbc1 + -0x190d)) / (0x3ad + -0x1414 + 0x1069 * 0x1), (_0x1701ba + (-0x2297 + -0x1 * 0x1e0b + -0x2 * -0x205b)) / (0xd11 * -0x2 + 0xce * -0x20 + 0x1b * 0x1ec)), _0x418750[_0x49fa64(_0x443b30._0x25c965)] = ![], _0x418750['bitmap'] = _0x760191, _0x418750['visible'] = !![]; } } } else { if (_0x4a46d9['_config'] && _0x4a46d9[_0x49fa64(0x484)]['Background' + _0x49fa64(0x48f)]) { const _0x29aa76 = ImageManager['loadSystem'](_0x4a46d9['_config'][_0x49fa64(_0x443b30._0x1c2de8) + 'Image']); _0x4a46d9[_0x49fa64(_0x443b30._0x2ab523) + _0x49fa64(0x14c)]['y'] = _0x29aa76[_0x49fa64(0x288)] / (0x178 + -0xdb2 + 0xc3c); } else _0x4a46d9['_buttonIco' + 'nSprite']['y'] = -0x18df * 0x1 + 0xcbb + 0xc24; _0x4a46d9['_buttonIco' + 'nSprite']['y'] += _0x4f9c8e; } } } function updateSlotButtonText(_0x16c2e2) { const _0xe3f0ca = { _0x26607e: 0x2a6, _0x135634: 0x826, _0x27c20a: 0x2a6, _0x391d75: 0x826, _0x136735: 0x6ae, _0x3f87a3: 0xa7f, _0x58e17a: 0x151, _0x20af45: 0x151, _0x157d9c: 0x127, _0x5dc7e5: 0x535 }, _0x7a1729 = _0x2cb8e6; if (!SceneManager[_0x7a1729(_0xe3f0ca._0x26607e)] || !SceneManager['_scene'][_0x7a1729(_0xe3f0ca._0x135634)]) return; const _0x1b292f = SceneManager[_0x7a1729(_0xe3f0ca._0x27c20a)][_0x7a1729(_0xe3f0ca._0x391d75)]['_slots']['get'](_0x16c2e2); if (!_0x1b292f) return; if (Utils[_0x7a1729(_0xe3f0ca._0x136735)]()) try { const _0x3c7b36 = require('fs'), _0x42637c = getConfigPath(); if (_0x3c7b36['existsSync'](_0x42637c)) { const _0x4b3b57 = loadConfigFile(), _0x2e5b9c = _0x4b3b57['grids'] || []; for (const _0x184e40 of _0x2e5b9c) { if (_0x184e40['Slots']) for (const _0xb000f2 of _0x184e40[_0x7a1729(_0xe3f0ca._0x3f87a3)]) { const _0x286ef2 = _0xb000f2[_0x7a1729(_0xe3f0ca._0x58e17a)][_0x7a1729(0x950)](',')[0x1 * -0x1f67 + -0x1c78 + 0x3bdf][_0x7a1729(0x11e)](); if (_0x286ef2 === _0x16c2e2) { _0x1b292f[_0x7a1729(0x484)]['Button'] = _0xb000f2['Button'], _0x1b292f['_config'][_0x7a1729(0x151)] = _0xb000f2[_0x7a1729(_0xe3f0ca._0x20af45)]; _0x1b292f['refreshBut' + 'tonText'] && _0x1b292f['refreshBut' + 'tonText'](); return; } } } } } catch (_0x14b2e6) { console[_0x7a1729(_0xe3f0ca._0x157d9c)]('Error\x20upda' + _0x7a1729(0x5db) + _0x7a1729(_0xe3f0ca._0x5dc7e5), _0x14b2e6); } } function updateSlotBackgroundImage(_0x560b2c, _0x3191b6) { const _0x581012 = { _0x21bba5: 0xff, _0x265378: 0x127, _0x15b504: 0x69b, _0x4eb935: 0x8ac, _0x3c9f8b: 0xc1, _0x4b1f15: 0x91b, _0xfdcf3a: 0x91b, _0x49da11: 0x990 }, _0x5c0323 = _0x2cb8e6; if (!SceneManager['_scene'] || !SceneManager['_scene']['_skillUI']) { if ('KZTOt' !== _0x5c0323(_0x581012._0x21bba5)) { console[_0x5c0323(_0x581012._0x265378)]('[Visual\x20Ed' + _0x5c0323(0x2af) + 'e\x20or\x20skill' + 'UI\x20not\x20ava' + _0x5c0323(0x85f)); return; } else _0x3468e0[_0x5c0323(_0x581012._0x15b504) + _0x5c0323(_0x581012._0x4eb935)](_0x3ab6fd); } const _0x56b9de = SceneManager['_scene']['_skillUI']['_slots'][_0x5c0323(_0x581012._0x3c9f8b)](_0x560b2c); if (!_0x56b9de) { console['error'](_0x5c0323(0xb12) + 'itor]\x20Slot' + '\x20not\x20found' + ':', _0x560b2c); return; } if (_0x56b9de['_config']) { if ('cYGXI' !== 'cYGXI') return _0x4e90a9['error']('[Visual\x20Ed' + _0x5c0323(0x2af) + _0x5c0323(0x6ce) + 'UI\x20not\x20rea' + 'dy'), ![]; else _0x56b9de['_config']['Background' + _0x5c0323(0x48f)] = _0x3191b6; } if (_0x3191b6 && _0x3191b6['trim']() !== '') _0x56b9de['bitmap'] = ImageManager[_0x5c0323(0x713)](_0x3191b6), _0x56b9de['bitmap']['addLoadLis' + 'tener'](() => { const _0x3ed3a3 = _0x5c0323; if (_0x56b9de['_buttonSpr' + 'ite']) { const _0x4e0bc9 = Number(_0x56b9de['_config']['TextOffset' + 'Y'] || -0x15e * -0x19 + -0x11a * 0x1 + -0x2114); _0x56b9de[_0x3ed3a3(0x7e1) + 'ite']['y'] = _0x56b9de['bitmap']['height'] / (-0x20b9 * 0x1 + -0x82 + -0x1 * -0x213d) + _0x4e0bc9; } }); else { _0x56b9de[_0x5c0323(_0x581012._0x4b1f15)] = new Bitmap(-0x55 * -0x4d + -0xe56 + -0xb0b, 0x1 * 0xc75 + 0x141 + 0x482 * -0x3), _0x56b9de[_0x5c0323(_0x581012._0xfdcf3a)]['fillRect'](-0x2 * -0x515 + -0x1 * 0xc82 + -0x1e * -0x14, -0xc * 0x92 + -0x9 * 0x2f + -0x3 * -0x2d5, -0x24b * -0xe + 0x4 * -0x574 + -0xa1a, -0x17e6 * 0x1 + 0x3ca + 0x2 * 0xa26, 'rgba(0,0,0' + ',0.5)'); if (_0x56b9de[_0x5c0323(0x7e1) + 'ite']) { if (_0x5c0323(_0x581012._0x49da11) === 'zLxba') _0x24460e['$uiPositio' + 'ns'][_0x1d68f0]['x'] = _0x2e1e6f; else { const _0x19c98f = Number(_0x56b9de['_config']['TextOffset' + 'Y'] || -0x1fa5 * -0x1 + -0x1135 * 0x1 + -0xe70); _0x56b9de['_buttonSpr' + 'ite']['y'] = 0x1f63 + 0x5cf * 0x3 + -0x30d0 + _0x19c98f; } } } } function updateSlotSpecialBehavior(_0x557e44, _0x1368fd) { const _0x73acdb = { _0x5a78ec: 0x2a6, _0x2a09dd: 0xc1, _0x1ec919: 0x58c }, _0x356f25 = _0x2cb8e6; if (!SceneManager[_0x356f25(_0x73acdb._0x5a78ec)] || !SceneManager[_0x356f25(0x2a6)]['_skillUI']) return; const _0x1e77e6 = SceneManager[_0x356f25(0x2a6)]['_skillUI']['_slots'][_0x356f25(_0x73acdb._0x2a09dd)](_0x557e44); if (!_0x1e77e6) return; _0x1e77e6['_config'] && (_0x1e77e6[_0x356f25(0x484)]['SpecialBeh' + _0x356f25(_0x73acdb._0x1ec919)] = _0x1368fd), _0x1e77e6['refresh'] && _0x1e77e6['refresh'](); } window[_0x2cb8e6(0x318) + 'Position'] = function (_0x3404c1, _0x1fb390, _0x9aa01c) { if (!SceneManager['_scene'] || !SceneManager['_scene']['_skillUI']) return; const _0x87ebb9 = SceneManager['_scene']['_skillUI']['_slots']['get'](_0x3404c1); if (!_0x87ebb9) return; if (_0x1fb390 === 'x') _0x87ebb9['x'] = _0x9aa01c; else _0x1fb390 === 'y' && (_0x87ebb9['y'] = _0x9aa01c); saveSlotPosition(_0x3404c1, _0x87ebb9['x'], _0x87ebb9['y']); }, window['selectSlot' + 'InGame'] = function (_0x71a66a) { const _0x5223ff = { _0x5930a8: 0x2a6, _0x8c65e: 0x826, _0x3eac95: 0xb0 }, _0x14ff6c = { _0x5abd99: 0x2b3, _0x305aad: 0xa08, _0x41a8a9: 0xaaa, _0x2edc8c: 0x8e3, _0x8d4b1: 0x2bc }, _0x330005 = _0x2cb8e6; if (!SceneManager[_0x330005(_0x5223ff._0x5930a8)] || !SceneManager[_0x330005(0x2a6)][_0x330005(0x826)]) return; currentSelectedSlot = _0x71a66a, SceneManager['_scene'][_0x330005(_0x5223ff._0x8c65e)][_0x330005(_0x5223ff._0x3eac95)]['forEach']((_0x16e577, _0x2b8ad4) => { const _0x1de169 = _0x330005; _0x16e577['_editorGlo' + 'w'] && (_0x16e577[_0x1de169(_0x14ff6c._0x5abd99) + 'd'](_0x16e577['_editorGlo' + 'w']), _0x16e577['_editorGlo' + 'w'] = null); if (_0x2b8ad4 === _0x71a66a) { _0x16e577['_editorGlo' + 'w'] = new Sprite(); const _0x42f457 = new Bitmap(_0x16e577['width'] + (-0x31c * 0x4 + -0x128b + 0x1f0f) || 0xe62 + -0x58c + 0x16 * -0x63, _0x16e577['height'] + (-0x1 * 0xe37 + -0x1 * -0x314 + 0xb37) || 0x1d7e + 0x15d5 + -0x32ff), _0x1be9ad = _0x42f457[_0x1de169(_0x14ff6c._0x305aad)], _0x5b3784 = _0x42f457['width'], _0x247a9b = _0x42f457['height']; for (let _0x15f79e = -0x15 * -0x61 + -0x5c2 + -0x233; _0x15f79e < 0x1354 + -0x1a7 * 0x9 + 0x8e * -0x8; _0x15f79e++) { const _0x2f2593 = 0x1 * 0x925 + 0x2652 + -0x2f77 * 0x1 + 0.3 - _0x15f79e * (-0x13b8 + 0x168d + -0x1 * 0x2d5 + 0.05), _0x1c1c1f = _0x15f79e * (0x1 * -0x13ab + 0x17f6 * -0x1 + 0x13 * 0x24c); _0x1be9ad['strokeStyl' + 'e'] = 'rgba(255,\x20' + '215,\x200,\x20' + _0x2f2593 + ')', _0x1be9ad['lineWidth'] = 0x1acb * 0x1 + 0x147b + -0x2f43, _0x1be9ad['strokeRect'](_0x1c1c1f, _0x1c1c1f, _0x5b3784 - _0x1c1c1f * (0xc24 + -0x15cf + 0x9ad), _0x247a9b - _0x1c1c1f * (0x57 * -0x15 + -0x266 * -0xe + -0x1a6f)); } _0x16e577[_0x1de169(_0x14ff6c._0x41a8a9) + 'w']['bitmap'] = _0x42f457, _0x16e577[_0x1de169(0xaaa) + 'w']['anchor']['x'] = 0x4af + 0x2590 + -0x69 * 0x67 + 0.5, _0x16e577['_editorGlo' + 'w'][_0x1de169(_0x14ff6c._0x2edc8c)]['y'] = -0x158e + 0x25bc + 0x102e * -0x1 + 0.5, _0x16e577['_editorGlo' + 'w']['x'] = 0xf56 + 0x1433 + 0x2389 * -0x1, _0x16e577['_editorGlo' + 'w']['y'] = -0x12a3 + 0x18ca + -0x627, _0x16e577[_0x1de169(_0x14ff6c._0x8d4b1)](_0x16e577['_editorGlo' + 'w'], -0x1 * 0x116 + -0x64d * 0x5 + 0x2097); } }); }, window['deselectAl' + 'lSlots'] = function () { const _0x1b973c = { _0x2b151a: 0x87e }, _0x2bc259 = _0x2cb8e6; if (!SceneManager['_scene'] || !SceneManager[_0x2bc259(0x2a6)][_0x2bc259(0x826)]) return; currentSelectedSlot = null, SceneManager['_scene']['_skillUI']['_slots'][_0x2bc259(_0x1b973c._0x2b151a)]((_0x7bbe25, _0x333151) => { const _0x280137 = _0x2bc259; 'xQXyH' !== _0x280137(0x2a9) ? (_0xaff948['removeChil' + 'd'](_0x581ffe['_editorGlo' + 'w']), _0x53ba49['_editorGlo' + 'w'] = null) : _0x7bbe25['_editorGlo' + 'w'] && (_0x7bbe25['removeChil' + 'd'](_0x7bbe25['_editorGlo' + 'w']), _0x7bbe25['_editorGlo' + 'w'] = null); }); }, window['forceEnabl' + 'eDragMode'] = function () { const _0x3e2137 = { _0x1bd4fc: 0x127, _0x4379b8: 0xb12, _0x46dde3: 0x6ce, _0x42c46c: 0x83f }, _0x375feb = _0x2cb8e6; if (!SceneManager['_scene'] || !SceneManager['_scene']['_skillUI']) return console[_0x375feb(_0x3e2137._0x1bd4fc)](_0x375feb(_0x3e2137._0x4379b8) + 'itor]\x20Scen' + _0x375feb(_0x3e2137._0x46dde3) + 'UI\x20not\x20rea' + 'dy'), ![]; if (!SceneManager['_scene'][_0x375feb(0x5ef) + 'Mode']) return console['error'](_0x375feb(_0x3e2137._0x4379b8) + _0x375feb(0x3f7) + _0x375feb(_0x3e2137._0x42c46c) + '\x20not\x20avail' + _0x375feb(0x8b9)), ![]; if (SceneManager['_scene']['_isDragMod' + 'e']) return !![]; return SceneManager['_scene']['toggleDrag' + 'Mode'](), !![]; }, window['highlightG' + 'rid'] = function (_0x6a1ef6) { const _0x42a1b4 = { _0x4a34cf: 0x2a6 }, _0x540f12 = _0x2cb8e6; if (!SceneManager['_scene'] || !SceneManager[_0x540f12(_0x42a1b4._0x4a34cf)]['_skillUI']) return; const _0x1802cc = SceneManager['_scene']['_skillUI']['_gridBackg' + 'rounds']; if (!_0x1802cc) return; _0x1802cc['forEach']((_0x3edf42, _0x2200a1) => { _0x3edf42['_isPlaceho' + 'lder'] && (_0x3edf42['visible'] = _0x2200a1 === _0x6a1ef6); }); }, window['updateEdit' + 'orLists'] = function () { const _0x54c77e = { _0x1a3989: 0x10f, _0x600e17: 0x6ae, _0x746dfa: 0xae0, _0x5667f9: 0x345, _0x3b48bf: 0x832 }, _0x146612 = _0x2cb8e6; if (!VisualEditorWindow || VisualEditorWindow[_0x146612(_0x54c77e._0x1a3989)]) return; let _0x2daaf0 = []; if (Utils[_0x146612(_0x54c77e._0x600e17)]()) try { const _0x544490 = require('fs'), _0x262dcb = getConfigPath(); if (_0x544490['existsSync'](_0x262dcb)) { const _0x133dbb = loadConfigFile(); _0x2daaf0 = _0x133dbb['grids'] || []; } } catch (_0x2966de) { 'SrHYV' !== _0x146612(_0x54c77e._0x746dfa) ? (_0x403d5a[_0x146612(0x44f)](_0x3b8129, _0x4ae9e9), _0x1dec14['delete'](_0x4564ae)) : console['error']('Error\x20upda' + 'ting\x20edito' + 'r\x20lists:', _0x2966de); } const _0x402617 = _0x2daaf0['map'](_0x61c35e => ({ 'slotCount': _0x61c35e['Slots'] ? _0x61c35e['Slots']['length'] : -0xdb7 * -0x1 + 0x1f66 + -0x1 * 0x2d1d })); VisualEditorWindow[_0x146612(0x697) + 'sList'](_0x402617), currentSelectedGrid !== null && (_0x146612(_0x54c77e._0x5667f9) !== _0x146612(_0x54c77e._0x3b48bf) ? window['loadGridSl' + 'ots'](currentSelectedGrid) : _0x1c0a0e['Slots'][_0x258ef2] = _0x909d21); }, window['findGridFo' + _0x2cb8e6(0x2a8)] = function (_0x346de8) { const _0x23c5ea = { _0x2f2b75: 0x959, _0x510cc0: 0xa77, _0x556365: 0xa9d, _0xfdd903: 0x950 }, _0x3cbfe3 = _0x2cb8e6; let _0x17b431 = []; if (Utils['isNwjs']()) try { const _0x1fc796 = require('fs'), _0x28be1c = getConfigPath(); if (_0x1fc796[_0x3cbfe3(_0x23c5ea._0x2f2b75)](_0x28be1c)) { if (_0x3cbfe3(_0x23c5ea._0x510cc0) === _0x3cbfe3(0xa77)) { const _0x1a2461 = loadConfigFile(); _0x17b431 = _0x1a2461[_0x3cbfe3(_0x23c5ea._0x556365)] || []; } else _0x2583b0['updateSlot' + 'PositionFi' + 'elds'](_0x54b7c5, _0x5511d4['x'], _0x2a7404['y']); } } catch (_0x27fb8a) { return console[_0x3cbfe3(0x127)]('Error\x20find' + 'ing\x20grid\x20f' + 'or\x20slot:', _0x27fb8a), null; } for (let _0x8da2a8 = 0x1dda + -0x11b * -0x11 + -0x30a5; _0x8da2a8 < _0x17b431['length']; _0x8da2a8++) { const _0x5f26be = _0x17b431[_0x8da2a8]; if (_0x5f26be['Slots']) for (const _0xb20b9f of _0x5f26be['Slots']) { if ('JKkqt' === 'JKkqt') { const _0x3bb8b2 = _0xb20b9f['Name'][_0x3cbfe3(_0x23c5ea._0xfdd903)](',')[-0x337 * 0x3 + -0x124 * 0x8 + 0x12c5]['trim'](); if (_0x3bb8b2 === _0x346de8) return _0x8da2a8; } else _0x89a06d(_0x3cbfe3(0x6a9) + 'ting\x20backg' + _0x3cbfe3(0x431) + _0x59c546[_0x3cbfe3(0x1d5)]); } } return null; }, window['copyBackgr' + 'oundImage'] = function (_0xc245aa, _0x23dbf6, _0x1c3aa1) { const _0x516bcc = { _0x3717f4: 0x7e7, _0x3fbb78: 0xaef, _0x5df671: 0xaef, _0x2d9cb0: 0x950 }, _0x403b67 = _0x2cb8e6; try { if ('EJVno' !== _0x403b67(_0x516bcc._0x3717f4)) _0xc3b1fa[_0x403b67(0x2a6)]['toggleDrag' + 'Mode'](); else { const _0x59dc96 = require('fs'), _0x53762b = require('path'), _0x24b5e4 = getProjectRoot(), _0x27e148 = _0x53762b['join'](_0x24b5e4, 'img', 'system'); if (!_0x59dc96['existsSync'](_0x27e148)) { if (_0x403b67(0x528) === 'msFez') { const _0x2ef358 = _0x25e507['Slots'][0x3 * 0xcc5 + -0x5c9 + -0x2086 * 0x1]['Name']['split'](',')[0x17c1 + -0x25 * -0x52 + -0x71f * 0x5][_0x403b67(0x11e)](), _0x586faa = 'grid_' + _0x2ef358; if (_0x45bd9c['$uiPositio' + 'ns'] && _0x10132e[_0x403b67(_0x516bcc._0x3fbb78) + 'ns'][_0x586faa]) _0x46b21d = _0x26c666[_0x403b67(0xaef) + 'ns'][_0x586faa]['x'], _0x525a57 = _0x3424c3[_0x403b67(_0x516bcc._0x5df671) + 'ns'][_0x586faa]['y']; else { const _0x542fff = (_0x5996bf['Position'] || '0,\x200')[_0x403b67(_0x516bcc._0x2d9cb0)](',')['map'](_0xf45148 => _0x461a0c(_0xf45148['trim']())); _0x17311f = _0x542fff[-0x1 * 0x1ba7 + 0x26c7 + 0x10 * -0xb2] || 0x157f + -0x94 * 0x3d + 0xdc5, _0x3e8db0 = _0x542fff[0x1b4e + -0x609 * -0x2 + -0x275f] || 0xac7 * 0x2 + 0x7f4 + 0x1d82 * -0x1; } } else { const _0x403375 = {}; _0x403375['recursive'] = !![], _0x59dc96['mkdirSync'](_0x27e148, _0x403375); } } const _0x33fabf = _0x23dbf6['replace'](/\.[^/.]+$/, ''), _0x3bd069 = _0x53762b[_0x403b67(0x343)](_0x23dbf6)[_0x403b67(0x9f7) + 'e'](), _0x174109 = _0x53762b['join'](_0x27e148, _0x23dbf6), _0x1f8f8c = _0xc245aa['replace'](/^data:image\/\w+;base64,/, ''), _0x571a9c = Buffer['from'](_0x1f8f8c, 'base64'); _0x59dc96['writeFileS' + 'ync'](_0x174109, _0x571a9c), _0x1c3aa1(!![], _0x33fabf); } } catch (_0x1dab1a) { console[_0x403b67(0x127)]('Error\x20copy' + 'ing\x20backgr' + 'ound\x20image' + ':', _0x1dab1a), _0x1c3aa1(![], null); } }, window['arrangeGri' + _0x2cb8e6(0x66b)] = function (_0x53b61a, _0x5c6ccb) { const _0x5819b8 = { _0x12e696: 0xa7f, _0x4fee20: 0x458, _0x3e34b5: 0x9c1, _0x2e86d5: 0x950, _0xb11edd: 0x3cc, _0x2a6d19: 0x425, _0x58ed50: 0x2a6, _0x35044f: 0x826, _0xd5a6fc: 0xa76, _0x293f3e: 0x2a6, _0x5267af: 0x63a, _0x3537a2: 0xa9d, _0x44468b: 0xacf, _0x2897e0: 0x3f5, _0x8f4425: 0x5c8, _0x10875f: 0x38d, _0x3552c1: 0xa8d, _0x3cbf20: 0x10f, _0x1cf245: 0x127 }, _0x33feb1 = _0x2cb8e6; try { const _0x1f0d72 = loadConfigFile(); if (!_0x1f0d72) return; const _0x2f3f63 = _0x1f0d72[_0x33feb1(0xa9d)][_0x53b61a]; if (!_0x2f3f63 || !_0x2f3f63[_0x33feb1(_0x5819b8._0x12e696)]) { if (_0x33feb1(0x4ec) === 'ktZXV') return; else _0x15a937[_0x33feb1(0xaef) + 'ns'][_0x5318d9] = _0x42c7ba[_0x33feb1(0xaef) + 'ns'][_0x403022], delete _0x4cd85c['$uiPositio' + 'ns'][_0x5650e2]; } const _0x43d1d4 = _0x2f3f63['Slots']['map'](_0x50d7f6 => _0x50d7f6[_0x33feb1(0x151)]['split'](',')[-0x89e + -0x1dd4 + 0x2672][_0x33feb1(0x11e)]()), _0x406f95 = 0xe4e + 0x33 * 0x5e + 0x4 * -0x832, _0x24a909 = _0x5c6ccb['padding'] || 0x150 * 0x19 + 0x7 * 0xc9 + -0x1 * 0x2645, _0x328ba9 = _0x5c6ccb[_0x33feb1(0x179)] || 0x1bd4 + 0x1025 * 0x1 + -0x184 * 0x1d, _0x5b21e1 = _0x5c6ccb['rows'] || 0x28 + -0x1391 + 0x1 * 0x136b; _0x2f3f63[_0x33feb1(_0x5819b8._0x4fee20)] = _0x5b21e1 + ',\x20' + _0x328ba9, _0x2f3f63[_0x33feb1(0x3cf)] = _0x24a909['toString'](); const _0x5bcea4 = (_0x406f95 + _0x24a909) * _0x328ba9 - _0x24a909, _0x5aa02f = (_0x406f95 + _0x24a909) * _0x5b21e1 - _0x24a909; let _0x141987 = -0x9cf * 0x1 + -0x12a3 + 0x1c72, _0x389f17 = 0x1 * 0x27 + 0x9ec + 0x1 * -0xa13; if (_0x2f3f63['Slots']['length'] > -0x13a0 + 0x121 + -0x3b3 * -0x5) { if ('mcCEH' === 'brcUt') _0x36e337['_buttonSpr' + 'ite']['y'] = -0x1563 + 0x123 * 0x2 + 0x131d; else { const _0xee61c9 = _0x2f3f63['Slots'][-0x556 * -0x1 + -0xbe9 + 0x693]['Name']['split'](',')[-0x9ec + -0x97f * 0x1 + 0x136b][_0x33feb1(0x11e)](), _0x1204de = _0x33feb1(_0x5819b8._0x3e34b5) + _0xee61c9; if (window[_0x33feb1(0xaef) + 'ns'] && window['$uiPositio' + 'ns'][_0x1204de]) _0x141987 = window['$uiPositio' + 'ns'][_0x1204de]['x'], _0x389f17 = window['$uiPositio' + 'ns'][_0x1204de]['y']; else { if (_0x1f0d72['positions'] && _0x1f0d72[_0x33feb1(0x425)][_0x1204de]) _0x141987 = _0x1f0d72['positions'][_0x1204de]['x'], _0x389f17 = _0x1f0d72['positions'][_0x1204de]['y']; else { const _0x24ae53 = (_0x2f3f63[_0x33feb1(0x809)] || '0,\x200')[_0x33feb1(_0x5819b8._0x2e86d5)](',')[_0x33feb1(0x3de)](_0x48a913 => eval(_0x48a913['trim']())); _0x141987 = _0x24ae53[-0x2 * 0x97d + 0x1535 * 0x1 + -0x23b * 0x1] || Graphics[_0x33feb1(0x16f)] / (-0x5ad + 0x1446 + -0xf9 * 0xf), _0x389f17 = _0x24ae53[0x5e3 * 0x5 + 0x91f * 0x4 + -0x11e * 0x3b] || Graphics['boxHeight'] / (-0x1e5c + -0x6ff * 0x2 + 0x14e * 0x22); } } } } const _0x70fe4d = Math['round'](_0x141987 - _0x5bcea4 / (0x11 * 0x16b + -0x10af + -0x76a) + _0x406f95 / (0x1df9 * 0x1 + 0x1321 + -0x3118)), _0x58ca33 = Math['round'](_0x389f17 - _0x5aa02f / (0x2632 + 0x1d72 + -0x16 * 0x313) + _0x406f95 / (0xb97 + -0x7f4 + -0x3a1 * 0x1)); if (!_0x1f0d72['positions']) { if ('sKixV' === 'aGPsh') { _0x2e7ee6(_0x33feb1(_0x5819b8._0xb11edd) + 'e\x20not\x20foun' + 'd!'); return; } else _0x1f0d72[_0x33feb1(_0x5819b8._0x2a6d19)] = {}; } let _0x16853a = -0x15e6 * 0x1 + -0x895 + -0x1 * -0x1e7b, _0x45202b = 0x1 * 0xc0e + -0x1fe3 * -0x1 + 0x647 * -0x7; for (let _0xfe478f = 0x1 * -0x65d + -0x1d38 + -0x2395 * -0x1; _0xfe478f < _0x43d1d4['length']; _0xfe478f++) { const _0x38a67f = _0x43d1d4[_0xfe478f], _0x443976 = _0x70fe4d + _0x45202b * (_0x406f95 + _0x24a909), _0x3fd29e = _0x58ca33 + _0x16853a * (_0x406f95 + _0x24a909), _0x50ff45 = {}; _0x50ff45['x'] = _0x443976, _0x50ff45['y'] = _0x3fd29e, _0x1f0d72['positions'][_0x38a67f] = _0x50ff45; if (window[_0x33feb1(0xaef) + 'ns']) { const _0xb15090 = {}; _0xb15090['x'] = _0x443976, _0xb15090['y'] = _0x3fd29e, window['$uiPositio' + 'ns'][_0x38a67f] = _0xb15090; } if (SceneManager['_scene'] && SceneManager[_0x33feb1(_0x5819b8._0x58ed50)][_0x33feb1(_0x5819b8._0x35044f)]) { if ('xBtev' !== 'xBtev') { if (!_0x388839['isNwjs']()) return null; const _0x1ff4eb = _0x5992b4(_0x33feb1(_0x5819b8._0xd5a6fc)); return _0x1ff4eb[_0x33feb1(0x316)](_0x180954['mainModule']['filename']) + '/js/'; } else { const _0x3d554d = SceneManager[_0x33feb1(_0x5819b8._0x293f3e)]['_skillUI']['_slots']['get'](_0x38a67f); _0x3d554d && (_0x3d554d['x'] = _0x443976, _0x3d554d['y'] = _0x3fd29e); } } _0x45202b++, _0x45202b >= _0x328ba9 && (_0x45202b = -0x1ae0 + -0x344 * -0x6 + -0x8 * -0xe9, _0x16853a++); } saveConfigFile(_0x1f0d72); window['highlightG' + 'rid'] && ('FUbLR' === 'khetH' ? (_0x334c59 = _0x487294['grids'] || [], _0x7d9323 && _0x46a108['_scene'] && _0x26401b['_scene'][_0x33feb1(_0x5819b8._0x35044f)] && _0x2ea7a7['goto'](_0x36d6a4['_scene']['constructo' + 'r'])) : window[_0x33feb1(_0x5819b8._0x5267af) + _0x33feb1(0x13b)](_0x53b61a)); gridSettings[_0x53b61a] = _0x1f0d72['grids'][_0x53b61a]; if (SceneManager[_0x33feb1(_0x5819b8._0x293f3e)] && SceneManager['_scene']['_skillUI']) { if (_0x33feb1(0xa87) === 'htcEY') _0x28d250['updateEdit' + 'orLists'](); else { const _0x1b3b83 = SceneManager['_scene'][_0x33feb1(0x826)][_0x33feb1(0x381) + 'rounds']; if (_0x1b3b83 && _0x1b3b83[_0x53b61a]) { const _0x3966e6 = _0x1b3b83[_0x53b61a]; _0x3966e6['_grid'] = _0x1f0d72[_0x33feb1(_0x5819b8._0x3537a2)][_0x53b61a]; if (_0x3966e6['_isPlaceho' + 'lder']) { const _0x35d95e = _0x328ba9 * _0x406f95 + (_0x328ba9 - (-0x3 * -0xbd7 + -0x6bc * 0x4 + 0x3 * -0x2dc)) * _0x24a909, _0x43618f = _0x5b21e1 * _0x406f95 + (_0x5b21e1 - (0x138 * -0x1c + 0xbf7 + -0xb15 * -0x2)) * _0x24a909, _0x216ad6 = new Bitmap(_0x35d95e + (-0xc * -0x23c + 0x194f + -0x340b), _0x43618f + (-0xa * 0x18c + 0x3 * -0x222 + 0x15f2)), _0x5469cd = _0x216ad6[_0x33feb1(0xa08)]; _0x5469cd['strokeStyl' + 'e'] = 'rgba(255,\x20' + _0x33feb1(0x24f) + '9)', _0x5469cd['fillStyle'] = 'rgba(255,\x20' + '215,\x200,\x200.' + _0x33feb1(0x2e8), _0x5469cd['lineWidth'] = 0x2233 + 0x141b * -0x1 + -0xe14, _0x5469cd['setLineDas' + 'h']([0x16c9 * -0x1 + 0x16 * 0xd + 0x15b7, 0x2 * 0x513 + 0xb6c + -0x158c]), _0x5469cd['fillRect'](0xcfd * 0x1 + 0x220d + 0x2f0a * -0x1, 0x2ca + -0x2577 + -0xb * -0x327, _0x35d95e + (-0x1 * 0x6ba + 0x11 * -0xa1 + 0x117f * 0x1), _0x43618f + (-0x209c + -0x3f * 0x45 + 0x31ab)), _0x5469cd['strokeRect'](0x2de + -0x18b * 0x13 + -0x3 * -0x8d1, -0x19ec + -0x9e * -0xb + 0x1322, _0x35d95e + (-0x9d7 * 0x1 + -0x1f6a + 0x2955), _0x43618f + (-0x29 * 0xab + -0x2f0 + 0xb5 * 0x2b)), _0x5469cd[_0x33feb1(_0x5819b8._0x44468b)] = 'bold\x2020px\x20' + 'Arial', _0x5469cd['fillStyle'] = _0x33feb1(_0x5819b8._0x2897e0) + '215,\x200,\x201.' + '0)', _0x5469cd['textAlign'] = 'center', _0x5469cd[_0x33feb1(_0x5819b8._0x8f4425) + 'ne'] = 'middle', _0x5469cd[_0x33feb1(0x86f)](_0x33feb1(_0x5819b8._0x10875f) + (_0x53b61a + (0x25b6 + -0x5 * 0x1b1 + -0x1d40)), (_0x35d95e + (0x1d37 * -0x1 + -0x6c4 + -0x240f * -0x1)) / (-0x921 + 0x60e * -0x1 + -0x1 * -0xf31), (_0x43618f + (-0x115c + -0x372 * 0xb + 0x3756)) / (0xf9f + -0x1de2 + 0xe45)), _0x3966e6[_0x33feb1(_0x5819b8._0x3552c1)] = ![], _0x3966e6['bitmap'] = _0x216ad6, _0x3966e6['visible'] = !![]; } } } } VisualEditorWindow && !VisualEditorWindow[_0x33feb1(_0x5819b8._0x3cbf20)] && window['updateEdit' + 'orLists'](); } catch (_0x195aad) { 'IwePs' === 'VsMBP' ? _0x39e2dd[_0x33feb1(_0x5819b8._0x1cf245)]('Error\x20load' + 'ing\x20slot\x20p' + 'roperties:', _0x186da2) : alert('Error\x20arra' + 'nging\x20slot' + 's:\x20' + _0x195aad['message']); } }, window['updateGrid' + 'Background' + 'Image'] = function (_0x12bb2d, _0x5bc2fe) { const _0x58dbb3 = { _0x467067: 0x2a6, _0x3f40e4: 0x950, _0x322687: 0x2b3, _0x2078ff: 0x713, _0x4b8c4c: 0xa7f, _0x13ad78: 0x151, _0x2e6bcf: 0xaef, _0x3b4917: 0x381, _0xeccfde: 0x70a, _0x119a04: 0x890, _0x3d650f: 0x1d5 }, _0x47233e = _0x2cb8e6; try { const _0x383852 = loadConfigFile(); if (!_0x383852) return; const _0x54ec45 = _0x383852[_0x47233e(0xa9d)][_0x12bb2d]; if (!_0x54ec45) { if ('Vwepg' !== _0x47233e(0x378)) return; else _0x489907['error']('Error\x20copy' + 'ing\x20backgr' + 'ound\x20image' + ':', _0xaed61f), _0x29fc(![], null); } _0x54ec45['Background' + 'Image'] = _0x5bc2fe, saveConfigFile(_0x383852); if (SceneManager['_scene'] && SceneManager[_0x47233e(_0x58dbb3._0x467067)]['_skillUI']) { const _0x422db = SceneManager['_scene'][_0x47233e(0x826)]; if (_0x422db['_gridBackg' + 'rounds'] && _0x422db['_gridBackg' + _0x47233e(0x70a)][_0x12bb2d]) { const _0x57ae51 = _0x422db['_gridBackg' + 'rounds'][_0x12bb2d]; if (_0x5bc2fe) { if ('YqBRs' === _0x47233e(0x64d)) _0x57ae51[_0x47233e(0x91b)] = ImageManager['loadSystem'](_0x5bc2fe); else return _0x2020df['writeFileS' + 'ync'](_0x38dc0f, _0x1a242b[_0x47233e(0x845)](_0x2ef64c, null, 0x215e + 0x53d * -0x4 + -0xc68), _0x47233e(0x552)), !![]; } else { if ('WpgDN' === 'XGRzm') { const _0x2e8243 = (_0x1a243d['Name'] || '')[_0x47233e(_0x58dbb3._0x3f40e4)](','); if (_0x2e8243[0x2 * -0xc91 + -0x1396 + 0x2cb8]['trim']() === _0x178245) return _0x32566a; } else _0x57ae51['parent'] && _0x57ae51['parent'][_0x47233e(_0x58dbb3._0x322687) + 'd'](_0x57ae51), _0x57ae51['bitmap'] && (_0x57ae51['bitmap'] = null), delete _0x422db['_gridBackg' + 'rounds'][_0x12bb2d]; } } else { if (_0x5bc2fe) { const _0x246d93 = new Sprite(); _0x246d93['bitmap'] = ImageManager[_0x47233e(_0x58dbb3._0x2078ff)](_0x5bc2fe); if (_0x54ec45[_0x47233e(_0x58dbb3._0x4b8c4c)] && _0x54ec45[_0x47233e(0xa7f)]['length'] > 0x545 * -0x1 + 0x216e + -0x1c29) { const _0x4faa23 = _0x54ec45['Slots'][-0x2a * 0xb1 + 0x2bf * -0x4 + -0x5e * -0x6d][_0x47233e(_0x58dbb3._0x13ad78)]['split'](',')[-0x108b + 0x1348 + -0x2bd]['trim'](); window['$uiPositio' + 'ns'] && window['$uiPositio' + 'ns'][_0x4faa23] && (_0x246d93['x'] = window[_0x47233e(_0x58dbb3._0x2e6bcf) + 'ns'][_0x4faa23]['x'], _0x246d93['y'] = window[_0x47233e(_0x58dbb3._0x2e6bcf) + 'ns'][_0x4faa23]['y']); } _0x246d93['anchor']['x'] = 0xfeb + -0x25e9 + -0x5 * -0x466 + 0.5, _0x246d93['anchor']['y'] = 0xe3 * -0x7 + 0x3 + 0x632 + 0.5, _0x422db['addChildAt'](_0x246d93, 0x12 * 0x18d + -0x344 + -0x18a6), !_0x422db['_gridBackg' + 'rounds'] && (_0x422db[_0x47233e(_0x58dbb3._0x3b4917) + _0x47233e(_0x58dbb3._0xeccfde)] = []), _0x422db[_0x47233e(0x381) + 'rounds'][_0x12bb2d] = _0x246d93; } } } } catch (_0x32f1d2) { if ('EafRa' !== 'EafRa') { const _0x494374 = { _0x1b1c3f: 0x687, _0xe8a2d: 0x524 }, _0xa962ac = { _0xebb901: 0x2a6 }; return _0x1fbfaa('js/HotbarC' + _0x47233e(0x25c))['then'](_0x2f4d55 => _0x2f4d55['json']())['then'](_0x6e32fe => { const _0x583cf2 = _0x47233e; _0x24f5c3 = _0x6e32fe['grids'] || [], _0x4d016c && _0x540dfe[_0x583cf2(_0xa962ac._0xebb901)] && _0xf1820d['_scene']['_skillUI'] && _0x4fb604[_0x583cf2(0x3d1)](_0x425229[_0x583cf2(_0xa962ac._0xebb901)]['constructo' + 'r']); })['catch'](_0x35bff3 => { const _0x59b3a4 = _0x47233e; _0x4aa740['error'](_0x59b3a4(_0x494374._0x1b1c3f) + 'ailed\x20to\x20l' + 'oad\x20Hotbar' + _0x59b3a4(_0x494374._0xe8a2d) + 'n:', _0x35bff3); }), !![]; } else alert('Error\x20upda' + _0x47233e(_0x58dbb3._0x119a04) + _0x47233e(0x431) + _0x32f1d2[_0x47233e(_0x58dbb3._0x3d650f)]); } }, window[_0x2cb8e6(0x89d) + _0x2cb8e6(0x44c) + 'osition'] = function (_0xd8f38b) { const _0x148622 = { _0x207b08: 0x2a6, _0x25368a: 0x381, _0x143855: 0x4b6, _0x352313: 0x1d5 }, _0x2021cd = { _0x48e29f: 0x37d }, _0x9d63c0 = { _0x175bec: 0x425, _0xfe10a3: 0xaef, _0x6e09e8: 0x562, _0x15b2d8: 0x826, _0x5a10e3: 0x10f }, _0x350313 = _0x2cb8e6; try { const _0x54e5d9 = loadConfigFile(); if (!_0x54e5d9) return; const _0x3a5ab3 = _0x54e5d9['grids'][_0xd8f38b]; if (!_0x3a5ab3 || !_0x3a5ab3['Slots'] || _0x3a5ab3['Slots']['length'] === -0x2f * -0xb2 + 0x9 * -0x445 + 0x5bf) { if ('guIAy' === 'guIAy') return; else _0x566900[_0x350313(0xa8d)] = ![]; } !_0x54e5d9['positions'] && (_0x54e5d9['positions'] = {}); const _0x3cdc2e = []; _0x3a5ab3['Slots']['forEach'](_0x359c4a => { const _0x57adf8 = _0x350313, _0x348866 = _0x359c4a['Name']['split'](',')[-0x1027 + 0x12b7 + -0xa4 * 0x4][_0x57adf8(0x11e)](); if (_0x54e5d9[_0x57adf8(_0x9d63c0._0x175bec)][_0x348866]) _0x3cdc2e['push'](_0x54e5d9['positions'][_0x348866]); else { if (window[_0x57adf8(_0x9d63c0._0xfe10a3) + 'ns'] && window['$uiPositio' + 'ns'][_0x348866]) { if ('EFtZK' === _0x57adf8(_0x9d63c0._0x6e09e8)) { if (!_0x338f89[_0x57adf8(0x2a6)] || !_0x4b5958['_scene']['_skillUI']) return ![]; for (const [_0x428d53, _0x25d1e6] of _0x13da5b['_scene'][_0x57adf8(_0x9d63c0._0x15b2d8)]['_slots']) { const _0x1667f4 = _0x25d1e6['width'] || 0x1 * 0x2476 + 0x136c + -0x37a2, _0x2056ae = _0x25d1e6[_0x57adf8(0x288)] || 0x1058 + -0x3 * 0x90b + 0x235 * 0x5; if (_0x45d897 >= _0x25d1e6['x'] - _0x1667f4 / (-0xd73 * -0x2 + 0x1cbb + 0x379f * -0x1) && _0x2db6e9 <= _0x25d1e6['x'] + _0x1667f4 / (0x15 * -0x59 + 0x1390 + -0x1 * 0xc41) && _0x503de1 >= _0x25d1e6['y'] - _0x2056ae / (0x1 * 0xef5 + -0x395 + 0x123 * -0xa) && _0x295358 <= _0x25d1e6['y'] + _0x2056ae / (0x399 + -0x9ff + 0x668)) return _0x380f9b = _0x428d53, _0x36c711[_0x57adf8(0x69b) + 'InGame'](_0x428d53), _0x9cdd66 && !_0x5e5991[_0x57adf8(_0x9d63c0._0x5a10e3)] && _0x2d90df['selectSlot' + 'FromGame'](_0x428d53), !![]; } return ![]; } else _0x3cdc2e['push'](window['$uiPositio' + 'ns'][_0x348866]); } } }); if (_0x3cdc2e['length'] === 0x752 * -0x1 + 0x15fb + 0x1 * -0xea9) return; let _0x50d1ec = -0x1097 + -0x26a1 * -0x1 + 0xd9 * -0x1a, _0x4ec3d0 = -0xac7 + -0x2279 + 0x2d40; _0x3cdc2e[_0x350313(0x87e)](_0x2da278 => { const _0xf3ffc1 = _0x350313; 'dtOJZ' === _0xf3ffc1(_0x2021cd._0x48e29f) ? (_0x50d1ec += _0x2da278['x'], _0x4ec3d0 += _0x2da278['y']) : _0xf42d08[_0xf3ffc1(0x127)]('Error\x20dele' + 'ting\x20slot:', _0x1393bb); }); const _0x383a93 = Math['round'](_0x50d1ec / _0x3cdc2e['length']), _0x41ef96 = Math['round'](_0x4ec3d0 / _0x3cdc2e['length']), _0x183487 = 'grid_' + _0x3a5ab3['Slots'][-0x75c + 0x3f4 * -0x2 + 0xf44 * 0x1][_0x350313(0x151)]['split'](',')[0x3 * -0xa7 + -0x2 * 0xbe9 + -0x1 * -0x19c7]['trim'](), _0x4a6b96 = {}; _0x4a6b96['x'] = _0x383a93, _0x4a6b96['y'] = _0x41ef96, _0x54e5d9['positions'][_0x183487] = _0x4a6b96, saveConfigFile(_0x54e5d9); if (window['$uiPositio' + 'ns']) { const _0x15609e = {}; _0x15609e['x'] = _0x383a93, _0x15609e['y'] = _0x41ef96, window['$uiPositio' + 'ns'][_0x183487] = _0x15609e; } if (SceneManager[_0x350313(_0x148622._0x207b08)] && SceneManager['_scene']['_skillUI']) { const _0x3840a2 = SceneManager['_scene']['_skillUI']; if (_0x3840a2['_gridBackg' + 'rounds'] && _0x3840a2['_gridBackg' + 'rounds'][_0xd8f38b]) { const _0x29b385 = _0x3840a2[_0x350313(_0x148622._0x25368a) + 'rounds'][_0xd8f38b]; _0x29b385['x'] = _0x383a93, _0x29b385['y'] = _0x41ef96; } } if (VisualEditorWindow && !VisualEditorWindow['closed']) { const _0x4e3b75 = VisualEditorWindow[_0x350313(0x8d6)]['getElement' + _0x350313(_0x148622._0x143855)]('gridPosX'), _0x480e12 = VisualEditorWindow['document']['getElement' + 'ById'](_0x350313(0x281)); if (_0x4e3b75) _0x4e3b75['value'] = _0x383a93; if (_0x480e12) _0x480e12['value'] = _0x41ef96; } } catch (_0x2ab13d) { alert(_0x350313(0x571) + _0x350313(0x870) + 'tion:\x20' + _0x2ab13d[_0x350313(_0x148622._0x352313)]); } }, window['updateGrid' + 'Position'] = function (_0x23906e, _0x533263, _0x386bc9) { const _0x155236 = { _0x3fa901: 0xa9d, _0x48d214: 0x67a, _0x3cc99b: 0xa7f, _0x1b6206: 0x425, _0x1ff9fd: 0x6ab, _0xc76aad: 0x11e, _0xf1708b: 0xaef, _0x1da6c9: 0x381, _0x2ab2ec: 0x70a, _0x23440e: 0x7a6, _0x53bcb1: 0x7e6, _0x3c4c27: 0x843, _0x33831c: 0x1b3, _0x4dbee8: 0x226 }, _0x4911cc = _0x2cb8e6; try { const _0x588617 = loadConfigFile(); if (!_0x588617) return; const _0x55e2f3 = _0x588617[_0x4911cc(_0x155236._0x3fa901)][_0x23906e]; if (!_0x55e2f3 || !_0x55e2f3[_0x4911cc(0xa7f)] || _0x55e2f3[_0x4911cc(0xa7f)][_0x4911cc(_0x155236._0x48d214)] === 0x4b + 0x1db2 + -0x1dfd * 0x1) return; !_0x588617['positions'] && (_0x588617['positions'] = {}); const _0x2c441f = _0x4911cc(0x9c1) + _0x55e2f3[_0x4911cc(_0x155236._0x3cc99b)][0x25 * -0xd1 + -0x7e6 * 0x3 + 0x35e7 * 0x1]['Name']['split'](',')[-0xdba + 0x196 * 0x16 + -0x152a]['trim'](); if (!_0x588617[_0x4911cc(0x425)][_0x2c441f]) { const _0x168fba = {}; _0x168fba['x'] = 0x0, _0x168fba['y'] = 0x0, _0x588617[_0x4911cc(_0x155236._0x1b6206)][_0x2c441f] = _0x168fba; } if (_0x533263 === 'x') { if ('czPAB' === 'czPAB') _0x588617['positions'][_0x2c441f]['x'] = _0x386bc9; else { if (!_0x2d4657['$uiPositio' + 'ns']) return; _0x363ec1['$uiPositio' + 'ns'] = {}, _0x33408e({}), _0x2d1a8e['goto'](_0x5ce28e['_scene']['constructo' + 'r']); } } else _0x533263 === 'y' && (_0x588617['positions'][_0x2c441f]['y'] = _0x386bc9); saveConfigFile(_0x588617); if (window['$uiPositio' + 'ns']) { if (_0x4911cc(_0x155236._0x1ff9fd) !== 'klESi') { const _0x1bb6dc = _0x57472c[_0x4dfb94]; if (_0x1bb6dc[_0x4911cc(_0x155236._0x3cc99b)]) for (const _0x4d2d93 of _0x1bb6dc['Slots']) { const _0x5a1ef7 = _0x4d2d93['Name'][_0x4911cc(0x950)](',')[0x640 + -0x1 * -0x26ef + -0x2d2f][_0x4911cc(_0x155236._0xc76aad)](); if (_0x5a1ef7 === _0x4e3b1d) return _0x4ad768; } } else { if (!window[_0x4911cc(_0x155236._0xf1708b) + 'ns'][_0x2c441f]) { if ('PkvVS' === 'iVLzM') _0x2cd255['splice'](-0x18fc * 0x1 + 0x77 + -0x1 * -0x1886, -0x20d5 + -0x1247 + 0x1 * 0x331d); else { const _0x311cdf = {}; _0x311cdf['x'] = 0x0, _0x311cdf['y'] = 0x0, window['$uiPositio' + 'ns'][_0x2c441f] = _0x311cdf; } } if (_0x533263 === 'x') window['$uiPositio' + 'ns'][_0x2c441f]['x'] = _0x386bc9; else _0x533263 === 'y' && (window[_0x4911cc(0xaef) + 'ns'][_0x2c441f]['y'] = _0x386bc9); } } if (SceneManager['_scene'] && SceneManager['_scene']['_skillUI']) { const _0xb55342 = SceneManager['_scene']['_skillUI']; if (_0xb55342['_gridBackg' + 'rounds'] && _0xb55342[_0x4911cc(_0x155236._0x1da6c9) + 'rounds'][_0x23906e]) { if ('eLtev' !== 'kQQZr') { const _0x2eb91b = _0xb55342['_gridBackg' + _0x4911cc(_0x155236._0x2ab2ec)][_0x23906e]; if (_0x533263 === 'x') _0x2eb91b['x'] = _0x386bc9; else _0x533263 === 'y' && (_0x2eb91b['y'] = _0x386bc9); } else _0x5581d4[_0x4911cc(0x380) + _0x4911cc(0x9e2)](); } } if (VisualEditorWindow && !VisualEditorWindow['closed']) { const _0x2757ce = VisualEditorWindow['document'][_0x4911cc(_0x155236._0x23440e) + _0x4911cc(0x4b6)](_0x4911cc(_0x155236._0x53bcb1)), _0x21c0bc = VisualEditorWindow[_0x4911cc(0x8d6)]['getElement' + 'ById'](_0x4911cc(0x281)); _0x2757ce && _0x533263 === 'x' && (_0x4911cc(_0x155236._0x3c4c27) === 'VGPRd' ? _0x2757ce[_0x4911cc(_0x155236._0x33831c)] = _0x386bc9 : (_0x28149f = new _0x3d0ce4(_0x446982), _0x2bb1ce['x'] = _0x258fcd['x'], _0xf1e78a['y'] = _0xbdf124['y'], _0x24e6ab['_slots'][_0x4911cc(0x44f)](_0x2fa980, _0x5cb67b), _0x5f19d6['addChild'](_0x242e4d))), _0x21c0bc && _0x533263 === 'y' && (_0x21c0bc[_0x4911cc(_0x155236._0x33831c)] = _0x386bc9); } } catch (_0x54bf63) { alert('Error\x20upda' + 'ting\x20grid\x20' + _0x4911cc(_0x155236._0x4dbee8) + _0x54bf63['message']); } }, window[_0x2cb8e6(0x4b5)] = function (_0x52e9e9, _0x2f7eff) { const _0x16004a = { _0x255b27: 0xa9d, _0x57fbc0: 0xaef, _0x5811c5: 0x265, _0x4564b6: 0xa9d, _0x48d9ba: 0x62b, _0x2aa192: 0x826, _0x48d1c5: 0x300, _0xf7af3: 0x826 }, _0x41e5e7 = { _0xeb1a8e: 0x151, _0x326883: 0x950 }, _0x39f573 = _0x2cb8e6; try { const _0x18497b = loadConfigFile(); if (!_0x18497b) { if ('QArVX' !== 'QArVX') _0x1af5c0['error'](_0x39f573(0x8d2) + 'ting\x20grid:', _0x9ab273), _0x3de8b3('Error\x20dele' + 'ting\x20grid:' + '\x20' + _0x3903eb['message']); else return; } const _0x4275a4 = _0x18497b[_0x39f573(_0x16004a._0x255b27)][_0x52e9e9]; if (!_0x4275a4 || !_0x4275a4['Slots']) return; const _0x57d6ea = _0x4275a4['Slots'][_0x39f573(0x9c3)](_0x25f1cf => { const _0x4da1e3 = _0x39f573, _0x4349ab = _0x25f1cf[_0x4da1e3(_0x41e5e7._0xeb1a8e)][_0x4da1e3(_0x41e5e7._0x326883)](',')[-0x9d2 + -0xf5f + 0x1931]['trim'](); return _0x4349ab === _0x2f7eff; }); if (_0x57d6ea === -(-0x11b * -0x11 + -0x298 + -0x1032)) return; _0x4275a4['Slots'][_0x39f573(0xac9)](_0x57d6ea, 0x1085 + -0x1 * -0x125d + -0x22e1); _0x18497b['positions'] && _0x18497b['positions'][_0x2f7eff] && delete _0x18497b['positions'][_0x2f7eff]; saveConfigFile(_0x18497b); window['$uiPositio' + 'ns'] && window[_0x39f573(_0x16004a._0x57fbc0) + 'ns'][_0x2f7eff] && delete window[_0x39f573(_0x16004a._0x57fbc0) + 'ns'][_0x2f7eff]; if (_slotData && _slotData['has'](_0x2f7eff)) { if (_0x39f573(_0x16004a._0x5811c5) === 'FehXs') { const _0x2e49f9 = _0x402c4f(); _0x3fe8c5 = _0x2e49f9[_0x39f573(_0x16004a._0x4564b6)] || []; } else _slotData[_0x39f573(_0x16004a._0x48d9ba)](_0x2f7eff); } if (SceneManager['_scene'] && SceneManager['_scene'][_0x39f573(_0x16004a._0x2aa192)]) { const _0x3488b5 = SceneManager['_scene'][_0x39f573(_0x16004a._0x2aa192)]['_slots'][_0x39f573(0xc1)](_0x2f7eff); _0x3488b5 && (_0x3488b5['parent'] && _0x3488b5[_0x39f573(_0x16004a._0x48d1c5)]['removeChil' + 'd'](_0x3488b5), SceneManager[_0x39f573(0x2a6)][_0x39f573(_0x16004a._0xf7af3)][_0x39f573(0xb0)][_0x39f573(0x62b)](_0x2f7eff)); } VisualEditorWindow && !VisualEditorWindow['closed'] && window[_0x39f573(0x915) + 'ots'](_0x52e9e9); } catch (_0x532c0f) { console['error']('Error\x20dele' + 'ting\x20slot:', _0x532c0f); } }, window[_0x2cb8e6(0x91f) + 'rid'] = function () { const _0xfd8d85 = { _0x2997b6: 0x6ae, _0x3b2a97: 0x92b, _0x7e2e5b: 0xa7f, _0x57c3b6: 0xaef }, _0xbd6e0d = _0x2cb8e6; if (!Utils[_0xbd6e0d(_0xfd8d85._0x2997b6)]()) { if (_0xbd6e0d(0x841) !== 'WzomE') return; else _0x40914f[_0xbd6e0d(0x149) + _0xbd6e0d(_0xfd8d85._0x3b2a97)] && (_0x53f69e['visible'] = !![]); } try { const _0x450b5f = loadConfigFile(); if (!_0x450b5f) return; const _0x34caef = {}; _0x34caef[_0xbd6e0d(_0xfd8d85._0x7e2e5b)] = [], _0x34caef['Controllab' + _0xbd6e0d(0x2c5) + 'ad'] = _0xbd6e0d(0xacd), _0x34caef['Background' + 'Image'] = ''; const _0xaa0fde = _0x34caef; _0x450b5f['grids']['push'](_0xaa0fde), saveConfigFile(_0x450b5f), VisualEditorWindow && !VisualEditorWindow['closed'] && (_0xbd6e0d(0x211) === 'AUXIS' ? (_0x59ddbd = _0x11b41c[_0xbd6e0d(0xaef) + 'ns'][_0x2fc225]['x'], _0x574e4e = _0xbeb119[_0xbd6e0d(_0xfd8d85._0x57c3b6) + 'ns'][_0x580f09]['y']) : window['updateEdit' + 'orLists']()); } catch (_0x142ba0) { console['error']('Error\x20crea' + 'ting\x20grid:', _0x142ba0); } }, window['deleteGrid'] = function (_0x5550fd) { const _0x2c9d55 = { _0x478b8b: 0xac9, _0x2e76f5: 0x67a, _0x2938a2: 0x425, _0x3afda4: 0x87e, _0x2f4ef3: 0x2a6, _0x3ec563: 0x2a6, _0x12f6af: 0x381, _0x22b0ab: 0x2b3, _0x569198: 0x826, _0x27a0c9: 0x7a6, _0x47bc77: 0x4f5, _0x49e96d: 0x675, _0x2dbcf8: 0x6eb, _0x29cef6: 0xa56, _0x16c190: 0x551 }, _0xd7720a = { _0xe7e371: 0xa7f, _0x1bb938: 0x54b, _0x29b706: 0xa9d, _0x2bbf51: 0x48b, _0x1d58d5: 0x2a6, _0x2fe183: 0xb0, _0x1937cd: 0x62b }, _0x28bb0b = { _0x2fcf7b: 0x252 }, _0x369314 = _0x2cb8e6; if (!Utils['isNwjs']()) return; try { const _0x1c792b = loadConfigFile(); if (!_0x1c792b) { alert('Config\x20fil' + 'e\x20not\x20foun' + 'd!'); return; } const _0x5a2828 = _0x1c792b['grids'][_0x5550fd]; if (!_0x5a2828) { alert('Grid\x20not\x20f' + _0x369314(0x49c)); return; } const _0x585089 = _0x5a2828['Slots'] ? _0x5a2828['Slots']['map'](_0xda3bbe => _0xda3bbe['Name']['split'](',')[-0x158f * -0x1 + -0x12c6 + -0x17 * 0x1f][_0x369314(0x11e)]()) : []; _0x1c792b['grids'][_0x369314(_0x2c9d55._0x478b8b)](_0x5550fd, 0xf7 * 0x21 + 0x23db + -0x43b1); if (_0x1c792b['positions'] && _0x585089['length'] > -0x59e + -0x2d4 + -0x872 * -0x1) { _0x585089['forEach'](_0x531480 => { _0x1c792b['positions'][_0x531480] && delete _0x1c792b['positions'][_0x531480]; }); if (_0x585089[_0x369314(_0x2c9d55._0x2e76f5)] > -0x7c1 + -0x22ba + 0x2a7b) { const _0x271470 = 'grid_' + _0x585089[0x1e2e + 0xad3 + -0x2901]; _0x1c792b['positions'][_0x271470] && delete _0x1c792b[_0x369314(_0x2c9d55._0x2938a2)][_0x271470]; } } saveConfigFile(_0x1c792b), _0x585089[_0x369314(_0x2c9d55._0x3afda4)](_0x5ab18b => { const _0x459deb = _0x369314; window['$uiPositio' + 'ns'] && window['$uiPositio' + 'ns'][_0x5ab18b] && delete window['$uiPositio' + 'ns'][_0x5ab18b], _slotData && _slotData[_0x459deb(0x4eb)](_0x5ab18b) && ('NhCcA' === _0x459deb(_0x28bb0b._0x2fcf7b) ? _0x27d01d['value'] = _0x31bdee : _slotData[_0x459deb(0x62b)](_0x5ab18b)); }); if (SceneManager['_scene'] && SceneManager[_0x369314(_0x2c9d55._0x2f4ef3)]['_skillUI']) { if ('SKoKb' === 'DrhGi') _0x633d1d = _0x48a112['positions'][_0x4453e8]['x'], _0x8308e2 = _0x3fb361['positions'][_0x2b7d9f]['y']; else { _0x585089['forEach'](_0x6fd403 => { const _0x80cbb4 = _0x369314; if (_0x80cbb4(0xa04) !== 'ElHke') { const _0x1dddf4 = _0xf35069(); if (!_0x1dddf4) return; const _0x123f75 = {}; _0x123f75[_0x80cbb4(_0xd7720a._0xe7e371)] = [], _0x123f75[_0x80cbb4(_0xd7720a._0x1bb938) + 'leViaGamep' + 'ad'] = 'true', _0x123f75['Background' + 'Image'] = ''; const _0x24a745 = _0x123f75; _0x1dddf4[_0x80cbb4(_0xd7720a._0x29b706)][_0x80cbb4(0x5c2)](_0x24a745), _0x5d436b(_0x1dddf4), _0x4c6fcf && !_0xe7d7ac[_0x80cbb4(0x10f)] && _0x4615b8[_0x80cbb4(_0xd7720a._0x2bbf51) + 'orLists'](); } else { const _0x2abe90 = SceneManager[_0x80cbb4(_0xd7720a._0x1d58d5)]['_skillUI']['_slots']['get'](_0x6fd403); _0x2abe90 && (_0x2abe90[_0x80cbb4(0x300)] && _0x2abe90['parent']['removeChil' + 'd'](_0x2abe90), SceneManager['_scene']['_skillUI'][_0x80cbb4(_0xd7720a._0x2fe183)][_0x80cbb4(_0xd7720a._0x1937cd)](_0x6fd403)); } }); if (SceneManager[_0x369314(_0x2c9d55._0x3ec563)]['_skillUI'][_0x369314(_0x2c9d55._0x12f6af) + 'rounds'] && SceneManager['_scene']['_skillUI']['_gridBackg' + 'rounds'][_0x5550fd]) { const _0x234747 = SceneManager['_scene'][_0x369314(0x826)]['_gridBackg' + 'rounds'][_0x5550fd]; _0x234747 && _0x234747['parent'] && _0x234747['parent'][_0x369314(_0x2c9d55._0x22b0ab) + 'd'](_0x234747), delete SceneManager['_scene'][_0x369314(_0x2c9d55._0x569198)]['_gridBackg' + 'rounds'][_0x5550fd]; } } } if (VisualEditorWindow && !VisualEditorWindow['closed']) { window[_0x369314(0x48b) + 'orLists'](); const _0x450e10 = VisualEditorWindow['document'][_0x369314(_0x2c9d55._0x27a0c9) + 'ById'](_0x369314(0x767) + 'Panel'); _0x450e10 && (_0x450e10['innerHTML'] = '<div\x20class' + _0x369314(_0x2c9d55._0x47bc77) + _0x369314(_0x2c9d55._0x49e96d) + 'deleted.\x20S' + 'elect\x20anot' + _0x369314(0x80f) + 'o\x20edit.</d' + 'iv>'); const _0x2cfdfe = VisualEditorWindow[_0x369314(0x8d6)][_0x369314(0x7a6) + _0x369314(0x4b6)](_0x369314(_0x2c9d55._0x2dbcf8) + 'w'); _0x2cfdfe && (_0x2cfdfe[_0x369314(0x1b4)][_0x369314(_0x2c9d55._0x29cef6)] = 'none'); } } catch (_0x4b5aa7) { console[_0x369314(0x127)](_0x369314(0x8d2) + 'ting\x20grid:', _0x4b5aa7), alert('Error\x20dele' + _0x369314(_0x2c9d55._0x16c190) + '\x20' + _0x4b5aa7['message']); } }, window[_0x2cb8e6(0x697) + 'GamepadCon' + _0x2cb8e6(0x6da)] = function (_0x585cdb, _0x14f80c) { const _0x46df18 = _0x2cb8e6; if (!Utils['isNwjs']()) return; try { const _0x425fb7 = loadConfigFile(); if (!_0x425fb7 || !_0x425fb7[_0x46df18(0xa9d)]) return; const _0x20c893 = _0x425fb7['grids'][_0x585cdb]; if (!_0x20c893) return; _0x20c893[_0x46df18(0x54b) + 'leViaGamep' + 'ad'] = _0x14f80c ? 'true' : 'false', saveConfigFile(_0x425fb7); } catch (_0x4029e4) { } }, window[_0x2cb8e6(0x4e4) + 'sitions'] = function () { const _0x3b46ed = { _0x7ec2f6: 0xaef }, _0x58c5c7 = _0x2cb8e6; if (!window[_0x58c5c7(_0x3b46ed._0x7ec2f6) + 'ns']) return; window['$uiPositio' + 'ns'] = {}, saveHotbarPositions({}), SceneManager['goto'](SceneManager['_scene']['constructo' + 'r']); }, window['createNewS' + _0x2cb8e6(0x29e)] = function (_0x229a9d, _0x3fae79) { const _0x4576ff = { _0x1b0884: 0xa7f, _0x3ffea0: 0x404, _0x20ec1a: 0x318, _0xdfd2c5: 0x425, _0x442039: 0x6ae, _0x33d7dd: 0x425, _0xda3b61: 0x2a6, _0x4e4569: 0x5ec, _0xddf2da: 0xad7, _0x2e967f: 0x1a7, _0x3cd174: 0x127, _0x12b257: 0x70a, _0x322cdf: 0x381 }, _0x168ad3 = _0x2cb8e6; try { const _0x359511 = loadConfigFile(); if (!_0x359511 || !_0x359511['grids'][_0x229a9d]) { alert(_0x168ad3(0x13e) + 'id\x20index!'); return; } const _0x5b7021 = _0x3fae79['name']['split'](',')[0x26b3 + -0x56 * 0x6b + -0x2f * 0xf]['trim'](), _0x373141 = _0x359511['grids'][_0x229a9d]; if (!_0x373141['Slots']) _0x373141['Slots'] = []; const _0x30f086 = _0x373141[_0x168ad3(_0x4576ff._0x1b0884)]['findIndex'](_0x17dc60 => { const _0x536a59 = _0x168ad3, _0x521116 = _0x17dc60['Name'][_0x536a59(0x950)](',')[0x20 * 0x2b + -0x54 * 0x1 + -0x50c]['trim'](); return _0x521116 === _0x5b7021; }), _0x3b8331 = { 'Name': _0x3fae79['name'], 'BackgroundImage': _0x3fae79['background' + 'Image'] || '', 'Button': _0x3fae79['button'], 'TextOffsetY': _0x3fae79['textOffset' + 'Y']['toString'](), 'SpecialBehavior': _0x3fae79['specialBeh' + 'avior'] }; _0x30f086 >= 0xb09 + -0x1292 * -0x1 + 0x1 * -0x1d9b ? _0x373141['Slots'][_0x30f086] = _0x3b8331 : _0x373141['Slots']['push'](_0x3b8331); if (!_0x359511['positions']) { if (_0x168ad3(_0x4576ff._0x3ffea0) === _0x168ad3(_0x4576ff._0x3ffea0)) _0x359511['positions'] = {}; else { const _0x281454 = _0x414135[_0x4946e4]; _0x281454 && _0x1d69a7[_0x168ad3(_0x4576ff._0x20ec1a) + 'PositionFi' + 'elds'] && _0x41fdec[_0x168ad3(_0x4576ff._0x20ec1a) + 'PositionFi' + 'elds'](_0x2c2c0d, _0x281454['x'], _0x281454['y']); } } const _0x595459 = {}; _0x595459['x'] = _0x3fae79['x'], _0x595459['y'] = _0x3fae79['y'], _0x359511[_0x168ad3(_0x4576ff._0xdfd2c5)][_0x5b7021] = _0x595459, saveConfigFile(_0x359511); if (!window['$uiPositio' + 'ns']) { if ('EacPI' !== 'BbNwa') window['$uiPositio' + 'ns'] = {}; else { if (!_0x5c41d3[_0x168ad3(_0x4576ff._0x442039)]()) return null; const _0x4c51f9 = _0x16c6ac('fs'), _0x1aeb8b = _0x1418fb(); try { if (_0x4c51f9[_0x168ad3(0x959)](_0x1aeb8b)) return _0x437325[_0x168ad3(0x4d8)](_0x4c51f9['readFileSy' + 'nc'](_0x1aeb8b, 'utf8')); } catch (_0x6d3656) { _0x50dc01['error']('[Hotbar]\x20E' + 'rror\x20loadi' + 'ng\x20config:', _0x6d3656); } const _0x271935 = {}; return _0x271935['grids'] = [], _0x271935[_0x168ad3(_0x4576ff._0x33d7dd)] = {}, _0x271935; } } const _0x41bc4d = {}; _0x41bc4d['x'] = _0x3fae79['x'], _0x41bc4d['y'] = _0x3fae79['y'], window['$uiPositio' + 'ns'][_0x5b7021] = _0x41bc4d; if (SceneManager[_0x168ad3(0x2a6)] && SceneManager['_scene']['_skillUI']) { const _0xa6ba9c = SceneManager[_0x168ad3(_0x4576ff._0xda3b61)]['_skillUI']; let _0x4a4e13 = _0xa6ba9c['_slots']['get'](_0x5b7021); if (!_0x4a4e13) _0x4a4e13 = new Sprite_SkillSlot(_0x3b8331), _0x4a4e13['x'] = _0x3fae79['x'], _0x4a4e13['y'] = _0x3fae79['y'], _0xa6ba9c['_slots'][_0x168ad3(0x44f)](_0x5b7021, _0x4a4e13), _0xa6ba9c[_0x168ad3(_0x4576ff._0x4e4569)](_0x4a4e13); else { _0x4a4e13['_config'] = _0x3b8331, _0x4a4e13['x'] = _0x3fae79['x'], _0x4a4e13['y'] = _0x3fae79['y']; if (_0x4a4e13['createBack' + 'ground']) _0x4a4e13[_0x168ad3(_0x4576ff._0xddf2da) + _0x168ad3(_0x4576ff._0x2e967f)](); if (_0x4a4e13[_0x168ad3(0x917) + 'ttonText']) _0x4a4e13['positionBu' + 'ttonText'](); if (_0x4a4e13['refreshBut' + _0x168ad3(0x9e2)]) _0x4a4e13[_0x168ad3(0x380) + 'tonText'](); } if (_0xa6ba9c['_gridBackg' + _0x168ad3(0x70a)] && _0xa6ba9c[_0x168ad3(0x381) + 'rounds'][_0x229a9d]) { if ('WCGhz' !== 'WCGhz') return _0x48f034[_0x168ad3(_0x4576ff._0x3cd174)]('[Hotbar]\x20E' + _0x168ad3(0x8c8) + 'g\x20config:', _0x381959), ![]; else { const _0x234162 = _0xa6ba9c['_gridBackg' + _0x168ad3(_0x4576ff._0x12b257)][_0x229a9d]; _0x234162['_grid'] = _0x359511['grids'][_0x229a9d], _0x234162['_gridSlots'] = []; } } } VisualEditorWindow && !VisualEditorWindow['closed'] && window['updateEdit' + 'orLists'](); } catch (_0x13433c) { if (_0x168ad3(0xa44) !== 'zdbpl') { const _0x1226b0 = _0x138761[_0x168ad3(_0x4576ff._0x322cdf) + 'rounds'][_0x181e3a]; _0x1226b0[_0x168ad3(0x4c0)] = _0x14cf90['grids'][_0x1c3102], _0x1226b0['_gridSlots'] = []; } else console['error']('Error\x20crea' + 'ting\x20slot:', _0x13433c); } }; function saveSlotPosition(_0x374ffd, _0x144d22, _0x5ccebb) { const _0x58bfb7 = { _0x55b12e: 0xaef }, _0x45706a = _0x2cb8e6; !window['$uiPositio' + 'ns'] && (window[_0x45706a(_0x58bfb7._0x55b12e) + 'ns'] = {}); const _0x5ac2f5 = {}; _0x5ac2f5['x'] = _0x144d22, _0x5ac2f5['y'] = _0x5ccebb, window[_0x45706a(0xaef) + 'ns'][_0x374ffd] = _0x5ac2f5, window[_0x45706a(0x881) + 'UIPosition' + 's'] && window[_0x45706a(0x881) + 'Positions'](window['$uiPositio' + 'ns']); } let clickStartPos = null, clickStartTime = -0x12 * -0x1ca + -0x233 * -0x11 + -0x4597; const DRAG_THRESHOLD = 0x778 * -0x1 + 0x15d6 + -0xe59, _TouchInput_onMouseDown_VisualEditor = TouchInput['_onMouseDo' + 'wn']; TouchInput['_onMouseDo' + 'wn'] = function (_0x37f48e) { const _0x4e1298 = { _0x3153f2: 0xad8 }, _0x2e96be = _0x2cb8e6; if (editorMode && SceneManager['_scene'] instanceof Scene_Map) { const _0x1e5fbc = Graphics['pageToCanv' + 'asX'](_0x37f48e['pageX']), _0x17f18c = Graphics['pageToCanv' + 'asY'](_0x37f48e['pageY']), _0x21d287 = {}; _0x21d287['x'] = _0x1e5fbc, _0x21d287['y'] = _0x17f18c, clickStartPos = _0x21d287, clickStartTime = Date['now'](); } _TouchInput_onMouseDown_VisualEditor[_0x2e96be(_0x4e1298._0x3153f2)](this, _0x37f48e); }; const _TouchInput_onMouseUp_VisualEditor = TouchInput['_onMouseUp']; TouchInput[_0x2cb8e6(0x599)] = function (_0x3ee5aa) { const _0x323cea = { _0x805e02: 0x6d4 }, _0x45087b = _0x2cb8e6; if (editorMode && SceneManager[_0x45087b(0x2a6)] instanceof Scene_Map && clickStartPos) { const _0x3b35da = Graphics['pageToCanv' + 'asX'](_0x3ee5aa[_0x45087b(_0x323cea._0x805e02)]), _0x4f41c7 = Graphics['pageToCanv' + 'asY'](_0x3ee5aa[_0x45087b(0x3ee)]), _0x2b8a19 = Date['now']() - clickStartTime, _0xcca5f3 = _0x3b35da - clickStartPos['x'], _0x3e328e = _0x4f41c7 - clickStartPos['y'], _0xf0ded6 = Math['sqrt'](_0xcca5f3 * _0xcca5f3 + _0x3e328e * _0x3e328e); _0xf0ded6 < DRAG_THRESHOLD && _0x2b8a19 < 0x1 * 0x1d98 + -0xe86 + -0xd1e * 0x1 && trySelectSlotAtPosition(_0x3b35da, _0x4f41c7), clickStartPos = null; } _TouchInput_onMouseUp_VisualEditor['call'](this, _0x3ee5aa); }; function trySelectSlotAtPosition(_0x17996c, _0x4645ba) { const _0x5898b4 = { _0x46866f: 0x826, _0x5c8950: 0x2a6, _0x28d5ac: 0x69b }, _0xd3e53 = _0x2cb8e6; if (!SceneManager['_scene'] || !SceneManager['_scene'][_0xd3e53(_0x5898b4._0x46866f)]) return ![]; for (const [_0x2b298a, _0x24c8f6] of SceneManager[_0xd3e53(_0x5898b4._0x5c8950)]['_skillUI']['_slots']) { const _0x20af47 = _0x24c8f6['width'] || 0x24b3 + -0xbb7 + 0x18bc * -0x1, _0x3a7e22 = _0x24c8f6['height'] || -0x21b + -0x1 * 0x23ca + 0x2625; if (_0x17996c >= _0x24c8f6['x'] - _0x20af47 / (-0x1dda + 0x3 * -0x926 + 0x394e) && _0x17996c <= _0x24c8f6['x'] + _0x20af47 / (0x25a0 + -0x14b2 + 0x72 * -0x26) && _0x4645ba >= _0x24c8f6['y'] - _0x3a7e22 / (0x158c + 0x20b5 + 0x363f * -0x1) && _0x4645ba <= _0x24c8f6['y'] + _0x3a7e22 / (0x7e3 * 0x4 + 0x71 * -0x42 + -0x268)) return currentSelectedSlot = _0x2b298a, window['selectSlot' + 'InGame'](_0x2b298a), VisualEditorWindow && !VisualEditorWindow['closed'] && VisualEditorWindow[_0xd3e53(_0x5898b4._0x28d5ac) + 'FromGame'](_0x2b298a), !![]; } return ![]; } if (Object['getOwnProp' + 'ertyDescri' + _0x2cb8e6(0x768)](document, 'hasFocus')?.['configurab' + 'le'] !== ![]) { const originalHasFocus = document['hasFocus']['bind'](document); Object[_0x2cb8e6(0x24d) + 'erty'](document, 'hasFocus', { 'value': function () { return ConfigManager['alwaysRun'] || originalHasFocus(); }, 'writable': ![], 'configurable': !![] }); } function _0x14fd() { const _0x409750 = ['ght:\x20100px', 'TMZd7RsSfu', 'ph4oLaVui3', 'utM7hyI/+K', 'YgRlP0ZngO', 'y\x27)\x20?\x20\x27sel', '\x20\x20\x20width:\x20', 'DFkTgICqFo', 'iHjs5gKwCX', 'gCgqigRipS', 'zdbpl', '\x200%,\x20trans', 'q08e/nN88Z', 'IFSv1F+6pi', 'surface-2)', 'LrP8wpnnbE', 'idsList\x20.l', '9Xubb23cuu', 'Bio4q4oVZA', 'bT3I0tvYdS', 'El/mwVtyhy', 'MbZSQzpYQD', '\x20null)\x20{\x0a\x20', '\x20\x20\x20\x20\x20\x20\x20fon', 'Z+Lsamllsb', 'DT8nUxfF0W', 'itle=\x22Remo', 'PBiQlcPYpI', 'display', 'lq3VrXxmor', '8/toPyZOvq', 'gc6uburGfv', 'wVKKIqvMip', '.value\x20=\x20\x27', '8+M/25/MNw', 'oundPositi', '59kTzKiL3F', '+Wc2M4kbGx', 'j//SH3rRmL', 'BqaUsGC44G', 'le\x20drag\x20mo', 'UAJ8any4FF', 'sED75MXVm9', 'bM8gIHhVuh', 'kgroundIma', 'roperties(', 'u4YuiDvXuf', 'ing\x20grid\x20i', '4ZKnyKKKF6', 'on(slotNam', 'X5iBlBzBHr', 'ckground:\x20', 'd\x20drag\x20you', '+zIAwL+Pft', '2N/saMlc1a', '\x20\x20\x20\x20\x20\x20}\x0a\x20\x20', '\x20\x20\x20\x20\x20\x20\x20col', 'IhBnEY4bkB', '0\x2010px\x200;\x22', 'KyqdCBcTL0', 'path', 'MtTIJ', '\x22margin-to', 'bold\x2020px\x20', 'YcK6Hgg+Uo', '\x20\x20if\x20(prop', '\x20\x20\x20\x20\x20\x20\x20\x20\x20}', 'ICxp7vSYBn', 'eadAsDataU', 'Slots', 'SQ9cerh/aL', '\x20\x20\x20\x20if\x20(sl', ',\x20fileName', 'F/cks/nAj3', 'KdaSJtKSJt', 'HTJI9EiJUM', 'ative;\x0a\x20\x20\x20', 'DoDPN', 'reviewPane', 'B1uwgQgxsn', 'ight:\x20100v', '+5SYlQC+jA', '\x20style=\x22ma', 'visible', 'ementById(', '=\x22Video\x20Tu', 'eviewBg.st', 'ton\x27);\x0a\x20\x20\x20', 'HkiHDMyt2f', '-creator-r', 'nerHTML\x20=\x20', '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20', 'hpDKHa0aUF', '951LDZAbiH', 'uGNYcnvxU+', 'MsJvRbUdcC', '0jJHYQIItn', 'R0AKlAuvN6', 'f7yqS/bsVe', 'grids', 'S8d8n6pDnJ', 'TFzZYskopS', '\x20\x20\x20\x20\x20\x20\x20fun', 'TH9oTOwabi', '\x20\x20\x20\x20\x20\x20just', 'wUT6opv8Pr', '};\x0a\x0a\x20\x20\x20\x20\x20\x20', 'indow.open', 'iv\x27);\x0a\x20\x20\x20\x20', 'uGtN2ljNFg', '9lv87RLcEv', 'e:\x20none\x20!i', '_editorGlo', 'mhbqxO0KIe', 'jOi6T5EWwX', 'irst</div>', 'Ph2x89Rsn6', 'y4IrvIqC9V', 'g2zhrnhgvA', '\x20\x20--surfac', 'le=\x22Reset\x20', 'ge)\x20{\x0a\x20\x20\x20\x20', 'nel\x20=\x20docu', 'LTIuMQAASI', 'C2kMXLWiwp', 'n3pj5uf3jz', 'HPdVRDZkF1', 'nA2sxwSwlx', 'p\x20=\x20textY\x20', '\x20\x20\x20\x20\x20\x20\x20\x20.l', 'QQtj2NeGEw', 'i5dO7OiNu+', 'lSlotConfi', 'w/JluqWss7', 'hAEMhyopCI', 'sRueBOjqCg', 'nput.files', 'E2EVa8vdtS', 'kruPDjbaA8', 'W2U8HtKcUv', 'Lcs3P0Pqjx', 'YxV66q2jl7', '\x20\x20color:\x20#', 'splice', 'xwBZN0NKIh', 'xvB1xlj5wV', 'lay\x20Equipp', 'true', 'lSlots', 'font', 'm11PYByDFk', '4shFTy/IPX', '\x20\x20\x20\x20paddin', 'JYaHGMIIx+', 'nALaMeAsIr', 'letter-spa', ':\x20#5865F2;', 'createBack', 'call', 'MbvdAaJbNb', '4y+Jcta6QD', '2M4vj5wEXA', 'x;\x20gap:\x205p', 'E27DF/ui2j', 'KCtBCkUZNO', 'pbLueHFj4w', 'SrHYV', 'BinFz2ecQS', 'sition\x20Y</', 'le=\x22Discor', 'GVKMS', 'fIiOcucVud', 'div\x20class=', 'Rczid2MSpa', '0ZeOHUhCyX', 'pVSdZfWrOC', '8FiC6i3Kbw', 'vSmUYB8Auh', 'hNnwRXzavo', 'S7FY5zDoHE', 'G5q7aH4hNu', '$uiPositio', 'qiFrVsHU2U', 'sGG/5c6JR3', 'KeunM9maMc', 'AAAP///ykc', 'TKDGxmztuH', '=\x22Create\x20a', 'WBxClLjlmC', 'TanBeR0vUc', 'qBWo7VI7qT', '8sFXu2HuD0', 'tById(\x27gri', 'xt);\x0a\x20\x20\x20\x20\x20', '\x20gap:\x2015px', 'eSlotPrope', 'iFjRd8PHb7', 'kO7239h7bo', 'de0rX9Kavs', '/3Np6gW5nO', 'fAR4uvv3FS', 'iHiDdrDr4a', 'tons[0]\x20||', 'nput\x20type=', '=\x22width:\x205', 'OH04unZpQC', 'i1mL6QIrYY', '3fEuv+1I+e', '/oO4L6yAwS', '\x20\x20\x20box-sha', 'ageFileInp', '/+ahUXc5Yr', 'ener.creat', 'ePF0WPC2WV', 'crpn02zDGO', 'nction\x20han', '[Visual\x20Ed', 'n-left:\x208p', 'xWgHU', 'kTtgm1AmYg', 'iThCfE2ikv', '9h+7EeblvY', '\x20\x20\x20\x20\x20\x20\x20\x20\x20f', '\x20display:\x20', '257eCtvmVJ', 'irArNrFBuH', 'jPKNRoqVGL', '5097954aTzdcg', 'r+cBmKcZGe', 'o.rows\x20||\x20', '_slots', 'K0LeWzx++5', 'KX8/QdQEdW', 'tOkePB5qkB', '%;\x0a\x20\x20\x20\x20\x20\x20\x20', 'width:\x20122', '\x20\x20\x20\x20\x20\x20\x20\x20-w', 'YGJ9bKL8bz', 'lue)\x20{\x0a\x20\x20\x20', '+Uspjt4diN', 'd\x27,\x20functi', 'open', 'opener\x20&&\x20', 'ht:\x20600;\x0a\x20', '3738888GPwAwl', 'JXh2iyUKlu', '/8/bX9wfu7', 'get', 'c57VdM3HKu', '3WQl6z8VM+', 'load\x20=\x20fun', 'H/bQzo3rek', 'lectAllSlo', '_gridHighl', '\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20', '0\x202px\x2012px', 'fileInput.', 'kZQdCO2CEA', 'ment.getEl', '4Wiv936HoE', '\x22gridBackg', 'dj1meXLqBY', 'om:\x208px;\x0a\x20', 'n6xuGQ+NqG', 'PIo6sXDKW1', 'cSvzYHv6BT', '9/mtl6HqEb', 'UBVEggkd5H', '\x20\x20\x20\x20\x20\x20\x20\x20\x20.', 'font-size:', 'rw50JZGVOk', 'b58w9k3IFe', 'Hneix7FY/5', 'oN0QUhAEe1', 'perty(curr', '-width\x22>\x0a\x20', 'dGamepadCo', '27hVI50TvC', '6IY79VHIAe', '9AjaSl0Y6O', '\x20\x20\x20\x20\x20curso', 's)\x20{\x0a\x20\x20\x20\x20\x20', 'CsABHn441r', 'ng:\x205px\x2015', 'sKm3//l0WC', '3KYZxpszjM', 'm-name\x27;\x0a\x20', ':\x205px;\x0a\x20\x20\x20', 'Button', 'Jq43turDDr', '.type\x20===\x20', 'Z9gZBtHGTf', 'xvZqK0tqGK', 'NdDDfdr+yK', 'P3/mfdI8rw', 'ap(n\x20=>\x20n.', 'bR+Y/rvqs0', '\x20\x20\x20\x20\x20borde', 'ent.classL', 'ogiiBLov65', 'UFIp3gSN8t', 'axoNBxY1lg', 'ldJ9mKsXWH', '</div>\x0a\x0a\x20\x20', 'delete-slo', 'MnFbC52VkS', 'SWlC3QQZFk', '\x20\x20\x20\x20\x20\x20\x20sho', 'TDkeGIFRAx', 'gNELT', 'PQAOxMSyMA', '\x20\x20\x20</div>\x0a', 'E4lc3NFgtE', 'YCKBcAtF/4', '\x20\x20\x20\x20\x20\x20max-', '4198569RETjSY', 'wgqUVFXBmS', 'FLVtE4ZPDq', 'MOCeK92rUu', 'deleteGrid', 'er-radius:', '\x20\x20\x20\x20\x20\x20\x20\x20</', 'eUOGZ/cHsg', 'hpnymPywo1', 's(currentG', 'closed', 'oOS5YviYpg', '\x20\x20align-it', 'yYdOiuwSFB', 'wYmnKhIHDj', 'CBGw6BKrMI', 'rows', 'PEsxe', 'itor]\x20Fail', 'qKIsbwWWW0', '/eRGh1kpYT', 'oundImage(', 'AF3A4xgQ3A', 'Fbwu6Gm4Yv', 'KtB/rM3Qyw', 'trim', 'GXIpRqGW9Q', '0F/C/4GHWK', 'index);\x0a\x20\x20', 'W12ru6rUa7', 'lue)\x22>\x0a\x20\x20\x20', '1RjN7akBD0', 'ansform:\x20t', '\x20\x20\x20\x20\x20\x20dele', 'error', '\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20', 't68s/cebRa', 'Opn3jviu4r', 'ba(255,255', 'qAOmOFTaSg', 'BDD3CnDol6', '===\x20\x27none\x27', 'KnlAQyUsyD', 'Fdc2WSWAGk', 'padding:\x205', '8v+ejMkcI3', 'EbgkPgIOdR', 'haDRUURVlu', '\x20\x20\x20\x20\x20\x20\x20pos', '/TlK9rYPO4', 'ite', '\x2020px;\x0a\x20\x20\x20', '8DlmjY8Jb4', 'X+fgEILClE', 'rid', 'rder:\x202px\x20', 'DQAkJE4mxU', 'Invalid\x20gr', 'KMqhDS2pQm', 'ut\x20=\x20docum', 't\x20currentS', 'alwaysRun', 'SG2PZw0kV0', 'ave\x20empty\x20', 'MdNlsUac7J', '=\x22item_onl', 'lG1V+tI6vU', '\x20\x20\x20\x20\x20\x20\x20\x20fu', '_isPlaceho', 'E2RIEdWaJo', 'gOtYg', 'nSprite', 'duPBi8qufu', 'rn;\x0a\x20\x20\x20\x20\x20\x20', 'JzBk2zP816', '2020;\x0a\x20\x20\x20\x20', 'Name', 'XaOsiDE1lf', 'BNtTZ5wUGd', 'e)\x20{\x0a\x20\x20\x20\x20\x20', 'SW7eEhox6S', 'height\x20=\x20\x27', 'z1xLq1/S2n', ':\x20pointer;', 'aI3j0phXWO', 'kHp1Xj13jb', 'nction(suc', '/BjsbaHEFS', 'without\x20ex', 'abQ9T7OQDf', 'tuqRIn5fSD', '\x20\x20\x20\x20\x20\x20\x20nam', 'UJj792YTFy', 'spacing:\x200', 'solid\x20rgba', 'ZX/9Ys3fip', 'utton>\x0a\x20\x20\x20', '-webkit-sc', 'cUE+GQBVKs', '6YpXI3sJyk', 'xt-shadow:', 'filename', 'P6DUeGY6jj', 'BTIosdcPCi', '\x20slot\x20+\x20of', 'ent.getEle', 'boxWidth', 'CECGPBfmaC', 't(slot.nam', 'ZQV8DSD5Cl', 'eSlot(curr', ':\x2013px;\x0a\x20\x20', 'IXof9X3KBR', 'ateGridPos', 'L/4XjAwMgG', '\x20\x20\x20onchang', 'columns', 'dc/ISbMn1W', 'pKXlXCs8tQ', 'RVUEyVcrAP', '=\x20input.mi', 'ems:\x20cente', 'xRAaZvnLOF', 'AEKdSqkXBA', '5p5zRvRc12', 'A4Ypq/rqhC', 'input\x20type', 'unction\x20se', '/uZd3Pac+c', 'DImhT6AGHK', '9TNlgzdwEF', '5px;\x20align', 'dForSlot(s', 'AoZARRBrCf', '1p/NOtWKgX', 'TwnbAORntD', 'V1O96I6moY', 'zCVov33ftX', 'KIkgISIx8Z', 'ImpZ0utYcM', 'TEBVFCBazN', '\x20font-size', 'cACVzpBGwq', 'bzihsuOqEr', 'lIntoView(', '\x20\x20\x20const\x20p', 'TfM2hSQFX7', 'nk23nC6cvm', 'utton:\x20\x27Ke', '\x20none;\x22\x20/>', 'E3Ctc575+8', 'U5YMxxw8xM', 'x;\x0a\x20\x20\x20\x20\x20\x20\x20', 'AAiyyBQIt1', '7xO/h1pH7/', 'kQwiC6bRWt', '\x20\x20\x20left:\x205', 'Yj1ve1Phz2', '2unzkJWZQj', 'SsarNiZgv/', 'tinScfkTjo', 'info.gamep', 'ground', '\x20\x20\x20if\x20(win', '/65OSXfeyK', 'qWOfO1IlIz', 'MmTglUw8FZ', 'EANqCmRDM3', 'xaJH114PZx', 'Background', 'xkE/uMw1N2', 'P20kfNCa7z', 'ekelfhRf4F', '2pnXQVsPzz', 'value', 'style', 'ge()\x22\x20\x0a\x20\x20\x20', '\x27none\x27;\x0a\x20\x20', 'xECTKCERRe', 'click=\x22sel', 'yle.displa', '9jR/UlK4tW', '+GJ5NKGIFc', '1;\x22>\x0a\x20\x20\x20\x20\x20', 'TTUSDl7g49', 'bbBZT8WLkS', 'x\x203px\x20rgba', 'ext);\x0a\x20\x20\x20\x20', 'kjAAbJiL/w', 'YY4XqWGPA6', 'mmD9yRD7l9', '\x20!==\x20\x27\x27\x20&&', 'xEYquRpIgM', '\x20\x20\x20\x20\x20selec', 'tPreview\x22\x20', 'eInput)\x20{\x0a', 'GlBdqBFUEX', 'JhrtT7V2+/', 's://sanghe', 'xIkMbg8CL4', 'X9CrM2xAKk', ':\x20var(--te', 'ataURL(fil', 'ting\x20slot\x20', 'V5dDGWTR89', 'EpvEW1KL1X', 'D9Zg2nVb3i', 'ield\x20full-', 'message', '6k//ESmbT1', '/kxAM5UTDF', 'hR5QFobIgP', 'cent);\x0a\x20\x20\x20', 'ztyF4Svc0x', '7+YV3XNSe9', 'geInput.va', 'iner\x20{\x20\x0a\x20\x20', 'FIo3DNXo1f', 'List.add(\x27', '\x20\x20\x20\x20</butt', 'th\x22>\x0a\x20\x20\x20\x20\x20', 'lex;\x20gap:\x20', 'lrbLdnaXjD', 'WC/ixFV1ad', 'ateElement', 'Z6RVS8oiKr', '\x20\x20<button\x20', '\x20&&\x20gridIn', 'fMz6+PFfA5', '/vr6+gICAv', 'nfig\x20?\x20ful', 'WRqCLOQ6pz', '2iBXroNUGW', '+pMZ057ZBP', '2l12FVkoCR', '0;\x20margin-', 'px\x200;\x22>Gri', 'textAlign', 's8z113YVkM', 'ontent\x20=\x20\x27', 'ugY7+QVw/R', '2f;\x0a\x20\x20\x20\x20\x20\x20', '1Vqs6ZIrVE', 'vHSgqokcHt', 'KSuygvfMQI', '.updateSlo', 'Tc5NTc3azS', '7InkkJJfPX', 'rid\x20select', 'pdateSlotP', 'ZG8UI2peVH', 'accent-sof', '15s;\x0a\x20\x20\x20\x20\x20', 'Y84dE8ug/s', 'uGUPjpym2O', 'WvQ2wsUEBE', 'yYdP39L8Je', '\x20\x20\x20\x20\x20\x20\x20bac', 'g2lMFx+cEh', 'HRs/G2xHWm', '\x20names\x20=\x20f', 'WZH/VeHx0g', 'rdHs4wnSGc', 'var(--shad', '1sC0uSGwuh', '/option>\x0a\x20', 'Jqeei6OM+e', 'N7HxG1+/3u', 'mADMU', 'EUtQ7AQ3hd', '\x20\x20\x20\x20\x20}\x0a\x20\x20\x20', 'g</label>\x0a', 'ff;\x0a\x20\x20\x20\x20\x20\x20', 'lock;\x0a\x20\x20\x20\x20', 'ono);\x0a\x20\x20\x20\x20', 'bNbyqvLgOo', 'q1Gw5C54/U', 'elds', '6VtDTcsuav', 'm9uPsGb7+U', '-surface);', 'd\x20first!\x27)', 'YY9NAsInPQ', '2026\x20by\x20Sa', 'nTpQeJnE/X', 'dow.opener', 'AV1aPA+JnV', '\x20\x20function', '5PMSnKt34w', 'position:\x20', 'Xz3StOC+qG', 'wVtu0Zt3Lq', 'D1zW9iG9b1', '<button\x20cl', 'kEB2oLNt+g', 'yVqXfxL7Y4', '4CyVYYkPiw', 't//K8x9hba', 'currentGri', '02RsM74529', 'tyle=\x22bord', 'adding\x27).v', '2Z6Z3QCck7', 'fIX/WVkw6Y', 'ecz/qc3DR9', 'AYudGF2xMc', '8/nuF9NfdE', 'Config\x20=\x20{', '9o7cuJqcJ9', 'lwZLG3OQnD', 'NjYG7OSG3/', 'WMLskji5tL', '1eMLioel/J', '0%;\x0a\x20\x20\x20\x20\x20\x20', 'EjmOhpvEiz', 'portant;\x0a\x20', 'es\x20||\x20!inp', '0rCjTN8DOa', 'oLoM2jOry2', 'ottom:\x2020p', 'fKXHSoBidx', 'RQszAbou9j', 'FZG1tbyfpt', 'buttonKb', 'aIYzAcarvs', 'hp5FrBetnb', 'hynEKR7vvd', 'BqDfefZgWK', 'defineProp', '\x20\x20\x20\x20\x20\x20heig', '215,\x200,\x200.', 'weight:\x2070', '39iA1mQpwM', 'UeVFb', 'c+LBDcSsV2', 'IBW/l5pUJ3', '>Grid\x20Arra', '{\x0a\x20\x20\x20\x20\x20\x20\x20\x20', '92GmFMKMAr', 'l8SGpiFsl+', 'VtCu3+n6y7', 'lVpAydAMj3', 'nFQMQ0CNl1', 'onfig.json', 'Mg6eD2CQoh', '3OT9+sl27M', 'YRAcFY3Rau', 'ent;\x20}\x0a\x20\x20\x20', '3qc8KWdaSY', 'kDysIvEpj5', '\x20\x20\x20\x20\x20\x20font', '05yrtky+9y', 'XBmRn', 'W7SmpjDzzd', 'K3hY/hEdHI', 't.remove(\x27', 'y\x27,\x20parseI', 'btn\x22\x20oncli', 'tL+GU4bOIb', 'vBcp5BCkpa', 'wRCTdmRhwb', 'W9lkZOy9R0', 'fnywJdKVFB', 'Ui+qOfzMnF', '\x20Math.roun', '\x20===\x20null)', 'r;\x20cursor:', 'Nb/B6hP75H', 'C+AVT4plj7', 'ptz10CdJX2', 'MEWZZbuFa5', '<label>Bac', 'er-top:\x201p', '5nxv5EBzpH', 'B6NdevCerL', 'ts:\x20none;\x0a', 'ner.desele', 'PFj/oZg2/t', 'xC+jB0IVeO', 'GYpKBoFGCh', 'gridPosY', 'P+mg9N2PE9', 'list-item-', '2}\x22\x20min=\x221', '\x20window.op', 'J+1rewWmbJ', 'm3rPao5QeP', 'height', 'hjapyXJA8j', 't-weight:\x20', 'uWKtWULMmN', 'ultiple\x20at', 'SF+kRPLQF3', 'fdhvC2neCD', 'LNJUavNI4X', 'entById(\x27s', 'aYFON3sQLx', '\x20onchange=', 'Pah6UMMGMs', 'a\x20grid\x20fir', '9EAG7uP+xS', 'constructo', 'rt(\x27Please', 'ttonText', '\x20\x20\x20\x20\x20\x20\x20\x20<l', '4reHLVkIuM', 'Lynv3VX4Pm', '8MY2MlHFk5', '1WVMw/gAqs', 'lot', 'fOKD/ku7h/', 'us:\x20var(--', '/YwwKO7DcS', 'dInfo)\x20{\x0a\x20', 'ss=\x22field-', 'x7720XV4+R', 'i+DBUu3yMf', '_scene', 'w.opener\x20&', 'rSlot', 'xQXyH', ';\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'er\x20&&\x20wind', 'Ssn445NZTw', 'e0zUOdV73J', 'SyHrBQfpvg', 'itor]\x20Scen', 'aQQWwEJ5uc', 'us);\x0a\x20\x20\x20\x20\x20', 'vLID1GMWLm', 'removeChil', '9q5v2xK3Cq', 'CdiDEBuUd8', 'rCfABahtvB', '/dlDL3I5hx', 'PKKVYseG4g', 'Czn9Ey1+Fj', 'rXMpvPQS1K', 't-muted:\x20#', 'addChildAt', 'BNX7T5lQAd', 'VHBEEZGmCD', 'cPfzn', 'd(\x27active\x27', '\x20\x20\x20\x20\x20\x20\x20con', 'e-3);\x0a\x20\x20\x20\x20', 'FJHKoqIo2c', 'isplay\x20Equ', 'leViaGamep', '\x20border-ra', 'lectBackgr', '/d4F1GaR7i', 'und:\x20var(-', 'La59u1O080', '8eFKa6Gpwb', '5jrsCUz', 'I3vhLOnOpY', 'KXCflpADg7', 'EtaoKI2Nio', 'tbmuMxgYAT', 'BRUcUkI5r9', 't\x20all\x20slot', 'GcLax5lj8+', 'vAlVLUiWuB', 'hWoPXoXrQd', '\x20\x20\x20\x20\x20\x20\x20\x20\x20i', 'gcvKyqoXV+', 'ileInput)\x20', 'GeC0oRDA4H', '_blank', 'JsGtsE4LNE', 'mainModule', '\x20src=\x22data', 'UPDeLb0Wjm', '0k+3VPxLBy', 'AlCgEbAsXw', 'uzCFpidzNg', '\x20\x20\x20\x20style=', 'Cn+OKtZIPg', ':\x200;\x20right', 'field\x20full', '0ZSRK5yj6x', '10193643gfzfjx', '25)', 'dateSlotPr', 'previewTex', 'GridSlots)', 'M/RLfwvcoT', 'tpt2nHaT9p', 'x6EhM27pzZ', 'sPTHz+KZe8', 'HCS5FFUV/9', 'ckground-i', '6J4vXiN1VV', 'text-trans', 'w+JzZ9YmF5', 'WLYdZNlVon', 'ZkfnPYhGRZ', 'hiA/Xr/bCy', 'TkGGgglUKN', 'rollbar-tr', 'F9uDfvGYcQ', 'jKfP7Mtva9', 'IagP2RKy+N', 'uNzWrvastg', 'AH+dSu1KA9', 'lign-items', 'parent', 'RhV7PINZSa', 'ENGil76/Pw', 'hiJ+iZviQn', '\x20parseInt(', 'TextOffset', '97Aegc9+Lh', 'n\x20value=\x22n', 'fsWsXDiou2', '2LgRVrXXoa', 'pXZH1TrIaS', 'VCkoja76eF', 'IEvDzcp2LN', 'HGYqSDL2QA', '0,\x200,\x200.3)', '26dmTjmDkX', 'xAEL0+AgFm', 'M7ob/658OD', 'GG2PydSxX2', 'BflEBc60+g', 'credit\x20a:h', 'UEVZCgzuuk', 'dirname', 'jqoRRCfzN2', 'updateSlot', 'B0fs+ceRUX', 'color:\x20var', 'R3pCGWegKg', '0ECUJAeIki', '3afoWKk29E', 'r\x22>\x0a\x20\x20\x20\x20\x20\x20', 'XNgc4yyJcA', 'n6rptuFLtu', 'alue);\x0a\x20\x20\x20', 'b1fLg1a/Hn', '/M88/TnfvK', '\x20\x20\x20\x20\x20\x20colo', 'tn);\x0a\x20\x20\x20\x20\x20', '\x20\x20\x20positio', 'OyIFPwuFwS', 'UOJQZZGqkg', 'cbNnb3+TYY', 'fACr5PyOdI', 'YJzGkPOC06', '\x20{\x0a\x20\x20\x20\x20\x20\x20\x20', 'galBjEG+QZ', 'FecLigVkTK', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'qLgcKngtGp', 'XBQeqctVii', 'RKNoCi2VDF', 'avior:\x20\x27no', 'Rows\x27).val', 'Qz3nvqRi1w', 'XG7ZEBCwXm', 'vIi8gl5AZy', '0Sna6aLTDw', '\x20return;\x0a\x20', 'kground-co', '\x20\x20\x20\x20\x20\x20\x20\x20fo', 'ut\x20type=\x22f', 'istingSlot', 'open(\x27http', '1pnRFZO67n', 'ArpL3zjt7l', 'important;', '/yL6WOzL+O', 'extname', 'iUeGen2Ueo', 'cWEDk', '\x20\x20\x20\x20\x20\x20\x20\x20\x20p', 'AEDUPjCcpw', 'wMZt+Mk2F1', '\x22\x20${(fullC', '+h5qtVr1yw', '\x20\x20\x20\x20\x20\x20\x20if\x20', '6RVVbFR6fX', 'G1P6sRwTCP', 'F6tmVPBpbt', 'cc3A2srAkN', '=\x22field\x20fu', 'e=\x22updateS', 'onst\x20input', '\x27skill_onl', '8mXzqDnuvE', 'OatQYLOiUZ', 'BdDGP7fJP3', 'mls4M2j/Ge', 'rder-radiu', 'KvQOPmXRCu', 'E2Ia2sLsz0', 'background', '53oXxbtjyV', '\x20\x20<div\x20cla', 'rgd3GTeEG8', 'xPnfxHoKvH', '\x20\x20\x20updateP', 'v4KNwgrBYe', 'n-header\x22\x20', 'FkVmaQgp64', 'O9e2f1Nhz+', 'leData,\x20fi', 'xWXXA3AmAL', 'lGD8kJlOtG', '\x20\x20\x20\x20\x20\x20\x20\x20}\x0a', '+AqGlgyBFM', 'z9u28rXXrb', 'IGBggKCgIG', '\x27#slotsLis', '\x20\x20\x20\x20const\x20', 'ption>\x0a\x20\x20\x20', 'hrDPcxSiGm', 'UILlvBujZm', '\x27,\x20imageNa', 'dex;\x0a\x20\x20\x20\x20\x20', 'YUOlbLk7Oc', 'FMN2w2fuH7', 'u4JwMpyaR3', 'kitj9bSnCy', '54cSI2Y+9J', 'PfQjO', 'Vgi3btP5jb', 'TFs9kz4yV8', 'FvavaYWsdu', '14m3Gv8SsT', 'dtOJZ', 'bMcnuRDdtj', 'wNYvHMzEfZ', 'refreshBut', '_gridBackg', '.top\x20=\x20tex', 'Ev8biuaZp5', 'jxfkYmf5Od', 'exyYeG20Z9', 'VChgkooXAH', 'cDxejwoNEY', 'mQBGLk4MHc', 'iJL5PKrBxQ', 'kpBnqc4N3d', 'n;\x0a\x20\x20\x20\x20\x20\x20\x20', 'mvpFBCdWgQ', 'Grid\x20', 'jaSFCFrD+J', 'Dl0QAUpkgj', 'q1aNITd/VL', 'ue\x20=\x20curre', 'laizjoC31E', 'rOBvWyCT5t', 'textOffset', 'property:', 'TAp6hc86a5', '456UDK/z/p', 'CXxTZfY3fp', 'age</label', 'ion\x20update', '3728NWTbN2', 'pij2Nsytro', '27DOibcC3Z', 'cPY3msSfG1', '/HKgDKYQ3s', 'dDiRqsQYzS', 'zKgJUYl8Y/', 'ZmLoHFQqho', 'nMKrcHIYhZ', '66NrFH2igt', '\x20min-width', 'qaJ4ZdXrLZ', '1QurcsGfEQ', '+/u/HvnTGR', 'jfa9c82S6q', 'd:\x20var(--s', '0C04uDPFNW', 'Tm4gRIO1Wo', '/w6we+LRNn', 't6CmUUSIkp', 'YCsFgqGu2S', 'fnDBfa4f/i', 'display:\x20f', '8tqwWGJPPw', 'crollbar-t', 'l(\x27#slotsL', '\x20\x20width:\x202', '.opener.up', 'LhnUJoyqWj', 'p3igYonXAV', 'G5uNbfY2Y7', 'r;\x20justify', '8Lpv+kzCWI', 'cess,\x20imag', 'padding', '3h7DxgzPLs', '\x27,\x20\x27\x27);\x0a\x20\x20', 'n3PMaoGe44', '1057514EIndez', 'arseFloat(', 'lZPQD', '\x200;\x0a\x20\x20\x20\x20\x20\x20', 'n38I2UwYM/', 'Cd3SXsYuKy', 'urn;\x0a\x20\x20\x20\x20\x20', '=\x20document', 'ing\x20slot\x20p', 'omeIlTdPM6', 'ointer;\x22>\x0a', 'Config\x20fil', 'sdn0FqdqTd', 'nNyMTIu/Yg', 'Padding', 'G/ieN7WhX4', 'goto', 'ThLp1ecWZ0', 'OYJJA9auwB', '4vf+wGdL6e', 'YZ3GGwRlDD', '\x20\x20\x20\x20font-w', '\x20\x20previewS', 'tsList\x20=\x20f', 'q7eY5dfh+n', 'VQ9lfMWk3P', 'bMwBiGDC6D', 'ntrollable', 'HHV1KDqUdf', 'map', 'hrKPUA0TKX', '6Hg68y5hiY', 'esetGridBa', 'y9cRj12gt5', 'vv3jv3Tl6A', 'empty-stat', 'jEvvrp82eQ', 'wQ/8o1tQNb', 'ect\x20{\x0a\x20\x20\x20\x20', 'hyMura2AoY', '\x20=\x20panel.d', 'x\x20||\x200)}\x22\x20', 'y:\x20flex;\x20a', '\x20\x20</div>\x0a\x20', '4m5EI1QDlY', 'pageY', 'hhj7xy3KfH', 'Nrw0eHvBWn', '\x20\x20\x20\x20align-', '8fjM/SMjLy', 'emoveSlotB', '6gGLZDV9ss', 'rgba(255,\x20', 'Blxxs4c3Cd', 'itor]\x20togg', 'tDvhVhk7zn', '7Fq++ywghe', 'Hendrix\x20Ho', 'ion>\x0a\x20\x20\x20\x20\x20', '\x20\x20\x20\x20\x20\x20});\x0a', 'sX\x22\x20value=', 'twx6LlICBG', 'AtZ4oBdWut', 'DhpIwRxfvR', 'alCIXOYd0p', 'ZT29z5c/c0', 'bMxrKv8EdI', 'HllOi', 'lwzhcAzLJg', 'N4Pk8N7aMz', 'ztWamzn3yD', '0,0.4);\x0a\x20\x20', 'on>\x0a\x20\x20\x20\x20\x20\x20', 'Mode', '//////////', 'hlightGrid', 'dEfmDlVHr7', 'wFULqCkASI', '751729dcVdTA', 'I9tE2822vb', 'LEjFl', 'kiRjQsMjlc', 'Nrpn3fbghZ', 'RTPYMPlXq2', '1/vbPV4Qcw', 'gya9d+m8SK', 'pvHlX', '5/Y58HB9sn', 'sF9gm6WgxW', 'd(props.y\x20', 'abel>Speci', 'ltPcRU1H74', 'gHhuPOBsMZ', 'aK1HCF0mj8', '_keyboardN', 'gtDUgaDEMO', 'pbUp3Z+y4L', 'bOdQn', '=\x22https://', 'item);\x0a\x20\x20\x20', 'positions', '\x20\x20\x20\x20\x20\x20item', 'jhUoYn0xRq', '</div>\x0a\x20\x20\x20', 'g9mLYl5Jwo', '0fU/zzgWXB', 'id=\x22proper', 'CdEJIfLVLc', 'OEtU2yTxRd', 'lbar-btn\x22\x20', 'me;\x0a\x20\x20\x20\x20\x20\x20', 'ttDD4OPP1h', 'round:\x20', '.files\x20||\x20', 'bzG3uX6c2+', 'eader\x20=\x20ne', 'ld(deleteB', '0px;\x20heigh', 'VoNgHeAW+F', 'P57tctAMth', 'ElementByI', 'sList', 'oSNIVLmcsh', 'rid()\x22\x20tit', 'UsIoLPf0O5', 'oGYwNMHKQl', 'aset.curre', 'k4dHso/LPe', 'qYzxbWBUKm', 'px;\x0a\x20\x20\x20\x20\x20\x20', 'jweu+eIEAw', 'frh0yPUPfK', '+570E6xcRs', 'G+xoNdZ6zS', 'ttom:\x2010px', 'wCOxfVzOgu', '(window.op', 'dBl9I72Jfp', '+mfUM/d8Z6', 'ackgroundP', 'label>Posi', 'L3Tv9sz4id', 'set', 'E2OfA1D8tV', '\x20\x20\x20\x20\x20\x20\x20\x20\x20j', '\x20\x20\x20color:\x20', 'tton.split', 'eEx51vQe9w', 'm9EVHXfmsw', 'soZTOvENJn', 'vIoCzloQHU', 'RowColumn', '3JSNgyUl1G', 'Grid,\x20isCo', '761vP++mci', 'iKiC+yr4qo', 'mageInput)', 'ter;\x20\x0a\x20\x20\x20\x20', 'iGpcBMo4BL', 'fuM5l4UymC', 'rqijPnDUOa', 'input.valu', 's://discor', '\x2011px\x20!imp', 'igtPe154ZY', 'naGn++21Y6', 'ed\x20to\x20enab', '8V+31xWAqY', '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'a2ESkMpZKH', 'QeRqM/lAaf', '25%),\x20line', 'cument.cre', 'in:\x200\x200\x2012', '.height\x20=\x20', ';\x22>\x0a\x20\x20\x20\x20\x20\x20', 'U3bJnZNEqd', 'qcYGkRrs6J', '5+KiQMa24v', 'space:\x20now', '\x20\x20\x20\x20\x20\x20pane', 'PUnBcFW5jY', 'y\x22\x20${(full', 'izgm7Gzkbx', '/ra9ZQML9h', 'yId(\x27prope', '66prbioCNC', 'ry0LndT7YX', '.deltaY\x20<\x20', '7mcsomxLHF', '(255,\x20215,', '27H24xtAhW', '=\x22number\x22\x20', '\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20', '\x205px\x2015px;', '_config', '\x20\x20\x20\x20\x20\x20\x20\x20<s', 'R32o/PNUx+', 'DUg2jzvM5L', 'RXdV7pbf07', 'oDe/7R17dJ', 'c14YatLsjE', 'updateEdit', 'e(isContro', '\x20cursor:\x20p', 'lConfig\x20&&', 'Image', '\x20\x20\x20\x20\x20<h3\x20s', '3Nxq5G+AMs', 'o4aFvgoNSw', 'L25OZwnUeQ', 't)\x20posYInp', 'Nu1kHHy6Hr', 'ment.scrol', 'lue)\x20||\x205;', 'lx3MA6l32w', '\x20\x20\x20\x20\x20\x20\x20\x20po', 'KdQdjBW5J+', 'st\x20fullCon', 'ound!', 'aW8n+a+Eso', 'curPiu/TkO', 'G735WPWDpY', 'r</label>\x0a', 'undImageFi', 'e1ec/2BGk1', 'nt(this.va', 'FgrD8+w/Te', 'Position\x20Y', 'yMCVu1nCB6', '\x20+\x20offsetY', '9JLHpROXfS', 'VbFnBymcVa', '-items:\x20ce', 'Fwl+ITRUIS', 'j+JYFAYBFM', 'BgImage\x22\x20v', 'YEnxsK8rn+', '.1);\x20margi', 'zCup5aH9Y5', 'padding-bo', 'ener.getSl', 'pnE7pyFyIW', '\x27;\x0a\x20\x20\x20\x20\x20\x20\x20', 'deleteSlot', 'ById', 'gTxjp4YykD', 'div>\x0a\x20\x20\x20\x20\x20', '\x20\x20</select', 'MBHiN+5RCj', 'XnHK7zIOTP', 'YSYVinIZvS', 'specialBeh', 'inter-even', 't-align:\x20c', '_grid', '\x20\x20\x20\x20font-s', 'RmbvmEWhlU', 'eubnYtJOpe', 'HrqDNr2ruU', 'a+7TqIhz/6', 'yle=\x22margi', 'ndrix.itch', 'm1fsKfJayR', 'I4Qbn1534t', 'ots', 'viYbBljX3G', 'VJfHPUGxXp', 'UIPosition', '#444\x20!impo', 'KxAt4lYy8k', 'atePreview', 'q6gh0tt1VL', 'Pa87XFtbW7', '6oqc9Uyvyq', '6G0kGwqMEF', '9]/g,\x20\x27_\x27)', 'A9Jr019lhG', 'YTZ4h7snWz', 'parse', '.info-box\x20', 'ick=\x22reset', 'H4YfX44N63', 'ZYCJB5VFHM', 'HFF4MtlWI3', '4eMGXfV', '(name);\x0a\x20\x20', '\x20\x20\x20\x20\x20retur', '9vWJfde0g+', 'qcz9ZMb7j7', 'er.findGri', 'resetAllPo', 'eight:\x2050v', 'rrentGrid,', 'eeMD69W9Pe', 'then', 'qyNX01MzQ3', 'deleteBtn.', 'has', 'ktZXV', '8tnDy0am+s', 'hj9hGi3XjX', 'lnXhSwAloh', 'J4j+psbCKi', 'NpsxgNavXw', 'kGAX0qZn7U', 'pDGGYVjYME', '\x20</div>\x0a\x0a\x20', '=\x22empty-st', '7bH52Xr7/m', 'eJ1CviIQzB', 'DM6pXxrZHQ', ':\x201px\x20soli', 'value)\x20>\x20p', 'NDUCazZQ+i', 'vgpFxsvGtD', '\x20\x20\x20list.in', '+S7CrtxdDx', 'Sep2lasqZN', 'V27iUVk1AG', 'urrentGrid', 'ji4gAj4vDC', 'yuktzLxn9Q', 'xmIO0iiwNL', 'RNOrq', 'pgjZjea70y', '2IZilcY', 'bottom:\x208p', 'n26g1lIKUB', 'r:\x20var(--t', 't.style.le', 'DXMCvCI/Hh', 'tension)\x22\x0a', 'q3iN7+6l8S', 'cXvG7Xn+jm', 'ut.value\x20=', 'e05050;\x0a\x20\x20', 'Q4dMluKv8i', '09F1uxevcg', '9+/uFrO+/4', 'nPm/7Oa9aX', 'KoSHv5ej4x', 'OWhcUKmo8r', 'mage()\x22\x20\x0a\x20', 'Slot\x20not\x20f', 'jsiqdsqueu', '5IphWzz/45', 'eap2ZPf/jN', 'R8CkwfBkMw', 'GridBackgr', 'RtBlK4mTS7', 't8Ny083fg+', 'strokeRect', '=\x20this.wid', 'bA+juxT0CW', 'Config.jso', 'lbJzQwDlaK', '.8px;\x0a\x20\x20\x20\x20', 'nuePsCmoYa', 'lTjvg', '\x20\x20\x20\x20\x20\x20cons', 'ity:\x200.85;', 'm0zo1rQOdu', 'tem\x20=>\x20{\x0a\x20', 'oTxJOBNZw0', '3TdB6xM/jJ', ':\x200;\x0a\x20\x20\x20\x20\x20', 'ssName\x20=\x20\x27', 'split(\x27,\x27)', '>None</opt', 'ositions\x0a\x20', 'vW5+TrNesO', 'n\x20text:', '2sQVgipe7S', 'AT8ahgSVwb', '\x20=\x20e.targe', '8zO0FnU46e', '\x20const\x20fil', 'ound:', '+D5KkTPUsc', 'CeFkrrgPab', 'flex;\x0a\x20\x20\x20\x20', 'J8/vLuFYYr', 'ailed\x20to\x20c', 'uYp4vT5kQZ', 'dButton(is', '\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'vUdy93uD1i', '4yd9mypkj3', 'IItSAYgol7', '\x20\x27item_onl', '\x20\x20\x20\x20\x20\x20\x20\x20<b', 'WrKriTy/fn', 'oxSoJFBaoV', 'Controllab', 'ailed\x20to\x20l', 'RcjVmtshGn', 'ZXKCqcfgw0', '6Cyu+WMk6d', 'btkBWsDWC0', 'ting\x20grid:', 'utf8', 'quCdkfASZL', '7/vUL3VuOB', 'm-ui,\x20sans', 'YfRQb', '14yb0B5k4h', 'wLKd3RKzqW', 'xk0AcVN2a9', 'R/Zg8mLA97', 'b0TXY1iZ7J', 'r-color\x200.', 'samD2ELo2E', 'er\x22\x20id=\x22gr', 'bUZ7Apjx1J', '\x200,\x200.3);\x0a', 'id=\x22previe', 'tVzpY', 'leBackgrou', '241Q91C684', 'YVz99VWgmg', 'border:\x201.', 'liW9e8EVTl', 'm7aY3jGjm3', 'kHC6OaWX7f', 'uf4xTgmp1r', 'YykC9kYaTh', 'me1ZG3xjc9', '#555;\x0a\x20\x20\x20\x20', ':\x20grid;\x0a\x20\x20', 'quFKRfcQCS', 'item\x27).for', 'Error\x20rese', 'st.appendC', '/bemdl+7Qp', 'eInt(this.', 'JCk+EcS9Ju', 'UIgPWzVPaB', 'fq3IR4QWdc', '\x20\x20updatePr', 'AaRkJplDDh', '\x20\x20\x20\x20\x20backg', '2box+T3bUK', 'Slot\x20=\x20slo', 'pUiNOxo9f2', 'LTCxNUmydS', 'ndow.opene', 'Fgry8I8JDC', 'nCFPxcYj1M', '3KxhE4xKYV', 'wuKzKoxF7S', 'document.g', '09\x2025%,\x20tr', ')\x27;\x20\x20//\x20-5', '(currentGr', 'VesnbF+uOT', 'ener\x20&&\x20wi', '215,\x200,\x201.', 'fVtPNP7fl7', 'avior', 'UXFheanoXb', 'round(x);\x0a', 'O5vj1U+I5Y', 'xXNnbi1/Zj', '\x20\x20\x20\x20e.prev', 'ue\x20=\x20Math.', 'pohREZNykW', 'm:\x202px;\x0a\x20\x20', 'ageNameWit', 'WsYFQWK4Rb', 'Ejxd0gdQwY', '1biq+oA90M', '_onMouseUp', '87e+8fjxkW', 'EwN4LPzLvH', 'vuQLDPy8tI', '\x20\x20\x20\x20delete', 'NZn5xzIy9i', 'c+yPmzIyIb', 'nearest\x27\x20}', '\x20type=\x22num', '}\x0a\x20\x20\x20\x20\x20\x20\x20\x20', '\x20\x20\x20\x20\x20\x20\x20\x20<!', 'V3/xD4a2vu', 'O8O/vYLNui', 'rngADWN169', 'g6SLW/vXku', '3g21GPl3uV', 'p+1POOvHrA', '9vmr4Oxl8d', 'fOIf4V/8Dt', 'WDKwsHSeZk', 'jl2KTYpthX', 'assList.ad', 'ct\x20a\x20slot\x20', 'HOC2mfxZTR', 'vLkJ0vrBdI', 'u7OqKN9cZj', 'Avvu26QqJC', '</label>\x0a\x20', '-slot-btn\x22', 'label>\x0a\x20\x20\x20', '\x20\x20\x20\x20\x20\x20if\x20(', 'elative;\x20z', '-group\x20{\x0a\x20', 'Kv4PHaUzhm', 'ightSprite', 'r+Y/oVuHMi', 'mentById(\x27', '2zUwnXDNDm', 'PHS2UXXeI0', '9GU0IIOfYB', '--\x20Hidden\x20', 'push', 'zlebx5B5Lx', 'px;\x22>Previ', 'ction\x20dele', 'iVMgw1jcxW', 't:focus\x20{\x0a', 'textBaseli', 'JwpUKW1Ljg', 'hYdsczYAcA', 'ield\x20input', 'dth:\x204px;\x20', 'vSuND0Kw2G', 'osition:\x20r', '1/rZnfx+38', 'q1iXpYdkPY', 'Name);\x0a\x20\x20\x20', 'UtaIu8ZWxv', '7pqZz0Fbb1', '\x20\x20grid-tem', 'zezpUXZUvc', 'GlY840haEw', '{\x20behavior', 'g0jMQXvjJo', 'oxUKekVICP', 'gNv7+Mtn4g', 'ting\x20butto', 'l6bAukx1/7', 'one;\x0a\x20\x20\x20\x20\x20', 'LVaTZza7YU', '.opener.co', 'A0DCAWCaQJ', ',\x20block:\x20\x27', 'sVg6oieRXV', 'sgkkj+BRLA', 'zpx9m3KLU+', '.credit\x20a\x20', 'put)\x20{\x0a\x20\x20\x20', 'GhW0LvzDKe', 'MYeWPhFeW/', 'Ko+q1tRlm7', 'OmEB3SEKqe', 'V613iS4rIK', 'addChild', 'rid\x20===\x20nu', 'ar-btn\x22\x20on', 'toggleDrag', 'DRIrAw8jR8', 'k074jgMmJp', 'WFQhAyZFPo', 'baU/BqE6ES', '\x20\x20\x20\x20\x20\x20\x20\x20\x20b', 'qUkqr4zsNQ', 'f7nKhwgPqc', 'le=\x22displa', 'Gxb48iTj9a', 'Uh4fQwEyW1', 'll-width\x22>', 'A9IzmFpqWl', 'kOh0o4/7Ls', '\x27propertie', 'ETv1ePfxSW', 'DVvgrCBPsD', 'glSHVr6rjp', 'C0BMAquWWI', 'WFmnBUxR1M', 'BDTth0KqPW', '===\x20null)\x20', 'bESRFUV0Ua', '3tJGtS20I7', 'wBNBYgVkVU', 'NJ0YsNomQ2', 'Q1BzUkdCIE', 'dMoqSgWllX', 'Qe/VmKqXbP', '7TX7cyMX79', '\x20\x20name.sty', 'Pncru9jY7P', 'rentValue\x20', 'lor:\x20#0d22', '2C62KQ0WBk', '/MeFusko+e', 'oat(value)', '\x20\x20\x20</scrip', '\x20\x20\x20\x20\x20\x20curs', 'rid,\x20index', 'R4T4zr0kLv', 'KmMGGNcWej', 'OUUDIia6vb', '\x20\x20\x20\x20\x20\x20\x20\x20\x20w', 'Z0JmNiWWos', 'ERBv7++fb2', 'ow.selectS', 'Yn3o8FAamL', 'e-2:\x20#2929', 'ding-right', 'Fr8HPk6sQq', 'iZ/PnxWA0e', '-text);\x0a\x20\x20', '+mDHkMvUpp', 'kJezhgVRqj', '(\x27div\x27);\x0a\x20', '4bJhhzU58v', 'group\x22>\x0a\x20\x20', 'VEsq2ZEF2L', '+Nxqq8Yw8L', 'delete', 'OUTf26N9ef', 'e\x20game\x20wil', 'zGV6MseP+2', 'LK9TBSz/8E', '+PYz2vOqUJ', 'xJQHuPULBa', 'orks\x20in\x20NW', 'XtjXlH30pm', 'h4wWKeaHG7', ')\x22\x20\x0a\x20\x20\x20\x20\x20\x20', 'er.copyBac', 'JYqcHGWvWA', 'nter;\x20just', 'yUPRBEkiYs', 'highlightG', 'Vxa37Gben6', '84DVYTAFzw', '21GzFhoRp5', 'sYG4oMRJ3B', ',255,255,0', '\x20\x20\x20\x20\x20\x20\x20\x20<i', 'vBXUOKIccw', '&\x20window.o', 'nvbdtY2FZF', 'CLydXw62yd', '\x20?\x20\x27\x20activ', 's32LjDh281', '\x20\x20\x20\x20\x20\x20docu', 'le-list\x22><', 'wUSWuNLVLP', '6rX/FKtjmq', 'EK8nXBUxqR', 'wAbfFhsJVC', 'YqBRs', 'ass=\x22toolb', 'KLvzXWo2/v', '1Jd3358H0X', 'IcJwgU/yFd', 'ids)\x20{\x0a\x20\x20\x20', 'XjkAh2tc1M', '=\x20()\x20=>\x20se', 'p4yCJhBj4r', '\x208px;\x0a\x20\x20\x20\x20', 'fK0CKqZm1e', 'd9wNPx2nhL', 'jhImgcB7xb', 'AEwVnGE7aC', 'ms:\x20center', 'TE9vh19Kca', 'erHTML\x20=\x20\x27', '3LRj5WFXyY', ');\x0a\x20\x20\x20\x20\x20\x20\x20', 'active\x27);\x0a', 'rtant;\x0a\x20\x20\x20', 'click();\x0a\x20', 'JYsCTSPDQi', 'rEnRulOxDb', 'x-shadow:\x20', '500;\x0a\x20\x20\x20\x20\x20', 'fe(\x27specia', 'ist.add(\x27a', 'eSKEQxSor7', 'done!\x27))\x20{', 'dSlots', 'mdU2dUU+kW', ';\x20margin-b', 'Hmgx8dHncN', '8SOQZRN6B8', 'ycmnpaqPA1', '\x20\x20\x20\x20\x20\x20\x20\x20\x20c', 'cFym97rs0H', 'OnkN/PbpJ9', 'riFuJ', 'ate\x22>Grid\x20', 'result.new', '\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20', 'qeaQY2Fzrj', '\x20text-deco', 'length', '4MhQgOx2iC', '0px\x200;\x22>\x0a\x20', '4sQaznPP2P', 'ar-btn.act', 'ND7IEa4sb9', 'ner.findGr', '5tbvonRi3S', 'OdYj1nl7h3', 'Y9G1wHj1el', 'on\x22\x20onclic', 'unction(sl', 'eleteSlot)', '[Hotbar]\x20F', 'naOxAZgMWy', '\x20select\x20a\x20', '-accent-so', 'OtYeiz/35g', '\x20\x20\x20\x20<input', '\x20Shown\x20on\x20', 'xP+yqEUNNI', 'tiesPanel\x22', 'aeT7+etwRK', 'lNAKm', '\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'tainer\x22>\x0a\x20', 'Q4GmEEHhnL', 'dV9+Vo5/zP', 'class=\x22add', 'updateGrid', '20\x22>\x0a\x20\x20\x20\x20\x20', 'grid-colum', 'fvpcJ4HqxS', 'selectSlot', '\x27<div\x20clas', 'GEnpiXz2H1', ')\x20!importa', 'kWvJ18PfxL', 'I/ABD/Kh1N', 'FxSp+KSPjm', 'Ckw8vLSpkM', '40px;\x0a\x20\x20\x20\x20', 'ePTlc7TRJ/', 'save-butto', '-\x20step;\x0a\x20\x20', '2zLf06xlgc', 'Ima8v85UMe', 'Error\x20upda', 'y4BGTc8oIj', 'klESi', 'FAh3fxQNlE', '78TcweDIw2', 'isNwjs', 'dateGridGa', '55,152,0,0', 'Sid265aN/+', 'Builder</t', 'AZeGMtWbJk', '8QmJAKiGgq', '16p3hYZiC3', '9DRR0Og0TT', 'thXbjFNHls', 'LZWQlOxaXU', 'rbHh5SHc18', 'aNbHXC1GLh', 'zBeyY0XCPJ', '3r+BJKZHRf', 'A2AvunB4mc', '6bqzYinU6E', 'L4dCtzt/8a', 'HdmnYxu2lq', '\x20\x20border-c', 'abel>\x0a\x20\x20\x20\x20', 'slotName)\x20', 'FVCUv0SgcS', 'b0WtG3SyA0', 'VsJ15fCMTX', 'ame;\x0a\x0a\x20\x20\x20\x20', '0Wup4eyxTw', 'bbA622J3N2', '2a2LGTTzp1', 'unL+CzwcGL', 'ullConfig)', 'eX7vDs42gQ', 'e\x20or\x20Skill', 'n\x20updateGr', '\x20\x20window.o', 'style=\x22dis', ')\x20{\x0a\x20\x20\x20\x20\x20\x20', '10px;\x0a\x20\x20\x20\x20', 'pageX', 'fbd9n/7mDh', 'xPr/AL1nlZ', '01VO/ur2Q5', 'U7oNnc0u7v', 'V1wFnXBt19', 'trollable', 'e.transfor', 'QGRMnVWvf0', '\x20<div\x20id=\x22', 'eDFnOJzh4r', '14px;\x0a\x20\x20\x20\x20', 'class=\x22sec', 't-size:\x2011', 'YI8Dn8UUbm', 'xmY6yLg8IZ', '6KLX9gFsWH', '5n8qfkHdca', '/knK/fczYw', '50%,\x20-50%)', 'aCjQEqWJsv', '\x2011px;\x0a\x20\x20\x20', 'rgGA0fABmP', 'slotPrevie', '0ko+F0EGSS', 'Ea1LRII0ra', 'PXR4eHjMb+', 'SR1L80grT3', 'XLo//WBJW/', 'UYMMbI+Vbb', '\x20\x20\x20\x20\x20\x20\x20\x20if', 'k3qhQvRWeL', '+n8yqhpBBa', 'N4aht+OXzL', 'y::-webkit', 'r95jZ9zPHD', 'DFsi0WkZBt', 'BgImage\x27);', 'W00LM2376n', 'BLfigAXcJU', 'WCxn0EFZA3', 'j3aGBctyF6', 'nter\x20the\x20t', '=>\x20{\x0a\x20\x20\x20\x20\x20', 'L2kHUz4OaV', 'E8f0uWBcUp', 'eader\x22\x20sty', 'k87P7h1lXi', 'yYe7VsQqZ3', 'flex:\x201;\x0a\x20', 'display_sh', 'W8CxQAtrZG', 'cefyaws+FB', 'MSsAfTyceD', 'rounds', 'ithoutExt)', 'ontent\x20{\x20p', 'TyZR6OMAwJ', 'return;\x0a\x20\x20', 'h3\x20style=\x22', 'm.onclick\x20', '\x20\x20\x20<label>', 'nst\x20elemen', 'loadSystem', 'Rrdl9ASRs0', 'width\x22>\x0a\x20\x20', 'Ci8nFP7Ubi', 'TcU3HzembO', ':focus,\x0a\x20\x20', 'F64eeXJ3Lb', 'lt.newName', 'nge=\x22updat', 'o6+s9KxbXc', 'ExKHFs0IAS', '\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20', 'if\x20not\x20usi', 'acity\x200.15', 'cB6xpo/h+6', '6605648CbafZN', '\x20\x20\x20\x20\x20style', '0AjUfg3DNB', 'KP35WuKxYP', '1UpwCj4QC2', '\x20<input\x20ty', 'BQq+CeRuGL', 'n:\x20center;', 'qvJ86T+qPY', 'RccZDZmuyX', 'ld.full-wi', 'O+ytmr+s6e', 'ctuPJ4u+Is', 'fyxdh/8FzK', 'UadbWH0jpn', 'SPVft5mAe0', 'otName\x20===', 'TRzaZgBi4a', '7+LtssLlsM', '8dgGNLti2f', 'osYInput\x20=', 'Zgl5OQA4mk', '\x20=>\x20{\x0a\x20\x20\x20\x20', 'tqrv7pDTcf', 'qOSkmUZZeI', 'nT2S5JhUmH', '7YzCCj4WxO', 'TMonlZOaSU', 'GejK9HnXuG', 'irst!\x27);\x0a\x20', 'r\x20{\x20width:', '8lXRa83Xe9', '1LSOB1MP/I', '\x20\x20\x20\x20\x20\x20\x20\x20st', 'tate\x22>No\x20s', 'k=\x22window.', '\x20\x20\x20\x20\x20\x20<but', 'window.ope', 'iv\x20class=\x22', 'Mc5ZItWmUT', 'T2hj2kiOUU', 'WIFEAyX4B6', 'Hs+0wBa9I5', 'tcepplOvXF', 'kVjX6Et5Pz', 'qHmBgUXL7u', 'w2Kf/kL+nS', 'fwmQEqzNdK', 't\x20{\x0a\x20\x20\x20\x20\x20\x20', '43oduHlz2P', 'e\x20or\x20skill', '\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20', ':\x20transpar', 'gQmln9CgBO', 'hHljwUamqg', 'nameKb', 'UAmnfug5cR', '\x20\x20\x20\x20\x20<butt', 'near-gradi', '.getElemen', 'nNcJzLXFMU', '\x20\x20\x20.scroll', '7YbBldH++P', 'ute;\x0a\x20\x20\x20\x20\x20', 'f0iq4Fjg/4', '\x20\x20\x20\x20alert(', 'eAzj8BImEQ', 'YICuFCIW/a', 'ntent\x22>\x0a\x20\x20', 'properties', 'ptor', 'SHsbvDp3w1', 'vbWlo//ume', 'z7NCDl2Dfz', 'aBDjEwB63Y', 'XwMwixlSeQ', 'FuW7g2UE6h', ',\x20{\x20passiv', 'D6XvuGwORF', 'y:\x20var(--m', 'Y7kb2RKslB', '9r1tf7HI4s', 'ted);\x0a\x20\x20\x20\x20', 'EvLo4hpXiN', 'uKF82fH3hp', 'vrsnar0oVy', '</a></p>\x0a\x20', '\x20<div\x20styl', '3z5TDdapSq', 'rJ/SOuXSlF', 'SQxbp', '50DJVADAOB', 'ner)\x20retur', 'ent;\x0a\x20\x20\x20\x20\x20', 'r(--shadow', '\x20currentSl', 'SyaO2W6eHX', 'ter;\x0a\x20\x20\x20\x20\x20', 'adding:\x200;', 'const\x20item', 'ement\x20=\x20do', 'SpecialBeh', 'Mw2jK9UwYb', '\x22\x20max=\x2220\x22', 'guHjXipriL', '/ZjILrgBFg', 'QcCx4YCz0z', '\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20', '7Fx8PqGO85', 'derline;\x0a\x20', 'HLdbT05X+d', 'aliased;\x0a\x20', 'l.innerHTM', '20Ku5aRSxa', '4ssMYUGDt1', 'VIfXWVFbiU', 'ss=\x22sideba', 'wqfom0XACs', '\x20\x20\x20letter-', 'rRzAuW5h+r', 'AdUEIADjta', '6bu+gv8bsO', 'vfb7AuEhT3', 'J9aOJtKOJu', '27xnbm/DME', 's=\x22toolbar', 'kqBU+FLDhU', 'age(\x27\x27);\x0a\x20', 'iKSadPA3/+', 'WfQGRFhf+A', 'O0o0nWvfcd', '8jsVSfdNmE', 'getElement', 'bottom:\x2010', '4fs5yyjayN', 'v1z1zNrG+w', '6TT3QYUknt', '\x20\x20\x20\x20\x20\x20\x20\x20li', '\x20positions', 'b6TelGKmOR', '.opener\x20&&', '\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20', '\x20\x20\x20\x20\x20\x20\x20\x20up', 'AElFTkSuQm', 'hCXEKVPJB+', 'yF91UJZy9E', 'QzZEJmLoAv', 'put\x20=\x20docu', 'WGd4TU+FkM', 'ccent);\x0a\x20\x20', 'ge\x27);\x0a\x20\x20\x20\x20', 'NTteFC7uOQ', 'CkAi5zUPsU', 'r+g989srzS', '8abyTPBDbm', 'KSkWFdjF6a', '+xAxpSETh7', 'URV8kXlJro', '\x20\x20\x20border-', '1/04Zo5ZYX', '/OsCUccOSV', 'Z9SgdvKV4V', 'OffsetY:\x200', 'mz9pNZVJuT', 'e;\x0a\x20\x20\x20\x20\x20\x20\x20', 'Ymogo/si20', '35+64PwR/u', '\x20\x20\x20\x20\x20\x20elem', 'Ax23cXnXdO', '0c+/Lh697Q', 'jQIe4/+DNw', 'N0Uv3Xg324', 'jAATn51bng', 'DLSSXdGmH2', 'GXRXbGZwl8', 'layout', 'lI2BJZzQPc', 'ChhBgSsBdE', 'lEQVR4nN29', '2AMslwh2YM', 'p0FaPx/bIQ', '/tMaQSimJu', '4kJARInN/D', 'S4dw7v+sEI', '\x20\x20\x20\x20\x20\x20\x20\x20le', '/vc15bKda0', 'ign-items:', '9sXyIs2v8Z', 'cEOd1xTjLF', 'bgImageInp', '+9LY80SlId', '_buttonSpr', 'shadow:\x20va', 'ner.getGri', 'fmVue+zovN', 'on)\x22\x0a\x20\x20\x20\x20\x20', 'gridPosX', 'EJVno', '\x22\x20\x0a\x20\x20\x20\x20\x20\x20\x20', 'A9rIZfFxhN', 'J/dqBubfLH', 'J+j/5aiaFk', 'WvQ1SI1+Gq', 'rq9AIWuwpO', '\x20pointer;\x22', 'wRWBjLxmSI', 'ir6VsPdZGQ', 'x.itch.io\x22', 'ainer\x22\x20sty', 'nt.getElem', 'O38JTwuxcw', 'QLxPnCaPEd', '\x22save-butt', 'nKSGX', '\x20\x20\x20\x20\x20', 'cent:\x20#ff9', 'HCCMVNEMlk', '5sOcJcP8iC', 'yWL78TWV42', '.forEach(i', 'awA0bn3RjH', '6xbrIRuWTY', 'lkWBKUGU+l', 'A1rmH4ED1W', '6jMuNsOuMy', '0ggrxkheY0', 'Z3jTM1wh6h', 'jz/DT+dQEA', 'oundImage\x27', '8HDTCbcoMB', 'r.deleteGr', 'Position', 'F+9/yx/g/D', 'llable-lis', 'MTLsghr8Vl', '\x20id=\x22gridC', 'PYGeR6+ig+', 'her\x20grid\x20t', 'pXTzbUWQZo', '\x20\x20\x20\x20\x20--tex', '7/pn8OxvrK', 'J8Iic1NRvC', 'BmC8hBRUFN', 'yCGMgL2hOE', 'jqIKQv27CT', 'oQfSiHCkSf', 'CcA78M5yHQ', 'j39VvFRIAa', 'tYAyPu/Fv4', '\x20\x20\x20\x20\x20\x20--ra', 'bv0LGENej6', 'RYGROHy05n', 'IHTZwRIur4', ',\x20property', '/VuL9KJeno', 'lF7cmW6Y2s', '+uo/rObKby', 'YDqWNTijQZ', 'AgypSN6cAB', 's8QKkWyzJZ', '_skillUI', 'LeIVSItFlg', 'orE/y+XJd4', '444;\x20borde', 'rxYnmmS6vj', 'zio9mPRh5L', '(element)\x20', 'CP8xghARHl', '0peZZYeESO', '30GHIPfs', '\x20\x20\x20\x20\x20\x20\x20\x20<d', 'mTXs65ezeG', 'fHnlG', 'alue=\x22${fu', 'q1GP9vcLhq', 'otsList\x20.l', 'mavJvFnqBi', 'vABj37QOG/', 'auKo5m/z9A', 'ontrollabl', 'RVWzIAn4xm', 's=\x22empty-s', 'mageNameWi', '\x20\x20\x20\x20<div\x20c', 'n:\x20relativ', 'leDragMode', 'eKAuq+YPkb', 'HeEMj', 'er\x20of\x2048px', 'VGPRd', 'imageNameW', 'stringify', '\x20\x20\x20\x20\x20<scri', 'zKBBr', 'kMMPQImCFW', 'wx/8oH7hhr', 'zfltUfJMZ3', '15px;\x0a\x20\x20\x20\x20', 'obG3Ppcu40', 'ntentLoade', 'BKfVRxGZ1Y', '\x20\x20\x20\x20\x20\x20.fie', 'click\x20=\x20()', '1f1f1f;\x0a\x20\x20', '\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20', 'PropertySa', 'KGaWiUBYP2', '5N6FPDusfs', 'tent:\x20cent', 'le(current', 'R4wkMyymIC', 'gkFEj2RDqG', '\x20\x20\x20\x20}\x0a\x20\x20\x20\x20', '4iaoAo0vDJ', 'f2hkUbFI/c', 'align:\x20cen', '0QXoYrQA3Y', 'ilable', 'IM0UHEr0iY', '\x22\x20id=\x22slot', 'us-sm);\x0a\x20\x20', 'unction\x20cr', 'R/8tWnRQEC', 'ne-height:', 'vnRr5W9alP', 'BfJ2oHYIZv', '531IryI3XI', '9LPPxSbOxP', '2mfdZ/EDQ4', 'ataset.cur', '9Qg1iIqgNb', 'atm5NgYKjf', 'P/PjbyUUrZ', 'fillText', 'tting\x20posi', 'sYLA5Rwsnd', '/bfLVTAaA6', 'VXpLyqC2hC', 'f1yJd3MheW', 'Ccz5rotC1j', '\x20\x20\x20}\x0a\x20\x20\x20\x20\x20', '2rvDx10leT', 'pmDqZmDq13', 'QbtsftGSej', '6a/kS8l6dZ', 'e\x22>No\x20grid', '.className', 'VIXZO5l9P3', 'forEach', 'Panel\x27);\x0a\x20', '\x20deleteSlo', 'saveHotbar', 'mlZVQVk5vF', 'hFVs4EiNK5', '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a', 'tant;\x0a\x20\x20\x20\x20', 'nter;\x22>\x0a\x20\x20', 'tM0buqBvwd', 'nNZkFfk1mP', 'mKECRVJAgB', 'qic9hFkhiS', 'YFNBLqVkYv', 'm:\x2015px;\x0a\x20', 'yb/YqL8dqb', 'ot)\x20{\x0a\x20\x20\x20\x20', 'KboDNln+Be', 'ting\x20backg', 'W4tQ1OfOCV', 'JKC4pODk00', '\x22${info.po', 'd\x22>\x0a\x20\x20\x20\x20\x20\x20', 'ton\x20class=', 's</h3>\x0a\x20\x20\x20', 'yLrRUIGF9B', 'xIIERSMCyT', 'vr9Ez3Onwq', '+FtrEYs2ob', 'YaDJ6ZWKlj', 'undImage)\x20', 'resetGridB', 'o7jJDIcNNS', 'cDD/82pU77', 'pyKFEIuIXl', '\x20\x20\x20style=\x22', 'dBackgroun', 'display:\x20n', 'apButton(i', '\x20\x20\x20\x20\x20\x20\x20pad', 'ykLWDWHdMB', '8G2xrvzeKO', 'l4FDT1hoQp', 'pbXP5WY8OZ', 'XxBFz', 'ng\x20Hendrix', 'FromGame', 'bel>\x0a\x20\x20\x20\x20\x20', 'd(y);\x0a\x20\x20\x20\x20', 'Hk8+KfxV9d', 'jx33SlKE+z', 'c7o3nwPT1T', '\x20\x20\x20\x20\x20\x20\x20\x20to', 'eviewText\x20', '/76Adv3X8T', 'thMuHaH/8w', 'Peit3I7Adx', '\x20\x20\x20\x20\x20const', 'wwCUxTZiAz', 'able', 'ansparent;', 't\x20+\x20\x27px\x27;\x0a', 'VGAR67i9Cy', 'hnFSicTazH', '8m8edAPJEz', '}\x22\x20\x0a\x20\x20\x20\x20\x20\x20', '<p\x20class=\x22', '7wqAc7ciZq', 'iCk00ek0Go', 'nv3n3u/Zfx', 'oiirUONHzR', '2slhREWZFL', 'ndImage(cu', '\x20\x20\x20\x20\x20\x20\x20\x20ga', 'rror\x20savin', 'm70nkCBxFm', 'w4XCP/e01C', ':\x20var(--su', 'cWIwMknRyo', '\x20\x20\x20\x20z-inde', 'ted\x27\x20:\x20\x27\x27}', 'l/VbJSepg2', 'RRQUMTN/Em', 'OJd36UGTsl', 'Error\x20dele', 'aJ3I2H2Wb8', 'THG7rbTC58', 'sliD+0zWY0', 'document', 'Rd+1cbvOK/', '\x20else\x20{\x0a\x20\x20', 'max;\x0a\x20\x20\x20\x20\x20', 'zz+ZkE22qr', 'space-betw', 'wMS8RSMCm2', 'QA/n75A+W4', '\x20\x20\x20\x20\x20\x20\x20ite', 'xXV1Ofrh6r', 'Slot.style', '\x20\x20\x20\x20\x20\x20\x20}\x0a\x20', 'ar(--mono)', 'anchor', 'lXQbaxUjs3', 'rids</h3>\x0a', 'lue=\x22${inf', 'jYfSvbq3K/', '9Q5AocBio7', 'ZZsGzyTEr4', 'dFIqogenwu', '0f2+Xx5kPw', '\x20\x20\x20\x20\x20</div', 'px\x200;\x0a\x20\x20\x20\x20', '\x22\x20value=\x22$', 'faOXRP3/1n', 'YtNDoSGkZu', 'one\x22\x20${(!f', 'o4r6jAGtoC', 'grids.leng', '4o4Pa40L+V', 'mlFJpdqqKo', '29CWk82Q5R', 'h0mg3BbjwM', 'gamepadCon', 'tPropertyS', '25;\x0a\x20\x20\x20\x20\x20\x20', 'VVAaoYAlWM', 'jUjIt1E09A', 'caUzU8NYQa', 'AqmyotbnQK', '9yG9aOIuOZ', 'lectSlot(s', '\x20\x20}\x0a\x20\x20\x20\x20\x20\x20', 'DHZ1grdLI1', 'HGKa8dxrH3', '\x20\x20if\x20(info', 'AyfvvrIefn', 'umY7uxs/1y', '\x20\x20\x20\x20\x20\x20\x20\x20\x20a', 'Axithgt0nB', 'class=\x22too', '15px;\x20min-', 'miVxnBbnrK', 'Zq9ozkrJv5', 'B0UuFmpGI1', 'ew</h3>\x0a\x20\x20', 'QhInSEgWgi', '58UU5O7unz', 'Panel\x20=\x20do', 'mage\x20filen', 'k8E8euaKe/', 'r\x20&&\x20windo', 'loadGridSl', 'XLdWv', 'positionBu', 'eHjhO1dupU', '7Mdsg11A/b', 'PPsbZ1Rle8', 'bitmap', 'dJl0ijpEmy', 'pfy8+e8WN/', 'dNmfFNAFbT', 'createNewG', '0QK8uWj1hq', '\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20', '1jTitX47qM', '54197Unjc1', '\x20backgroun', 'splay_weap', 'uHAfK+g9Zo', 'KzEBeGUQBG', '2dzffEsIlF', 'Wj3gYCPES6', 'PositionFi', 'lder', 'sdZlQEo3g8', '69z2c3dmwS', 'j79Uvath3Q', 'e2mdlG1Kjw', 'tion();\x0a\x20\x20', 'zCxNwbpp/b', 'ef2xXrd9hi', 'tion(e)\x20{\x0a', 'uMYNumbLcg', 'hWib8bPDOo', 'reviewCont', 'tSlotInGam', 'zNxZnWtp1B', '1pIRgmKoff', 'ate\x22>Selec', 'doxtvRA+A3', 'vwZNUnL93d', 'U7NXu/vV83', 'XTknqHjVKM', 'E+IISxwxCs', 'pqUdf4ls7l', 'er.arrange', 'aMv/Oqs0nX', 'vuyrh85Y13', 'Auq5VcsoxY', '\x20\x20\x20\x20border', 'R3unl8eMCZ', '\x20\x20\x20\x20\x20<opti', 'nt.querySe', '\x20\x20};\x0a\x0a\x20\x20\x20\x20', '8tKYESTBdR', '\x20600;\x0a\x20\x20\x20\x20', '(--text-mu', 'uZSHnN/T/l', '\x22updateGri', 'KsiPMiiKFC', 'split', 'mage\x27,\x20thi', 'ner.getFul', 'GlmFLcKdGU', 'KMRyV4VBuH', '3rzeNI+F/H', '5lXACvZ2aY', 'Q8z2G0oYSj', 'k6kA0rX7Ha', 'existsSync', 'RI6cA9YQpL', '/O4Fr9cbj1', 'qOLvauOc2S', '\x20<label>Bu', 'xnjvJHulAG', '===\x20\x27nameK', 'lot\x20=\x20null', 'e78sYQ6npQ', 'F5SfqJBVTF', '2QMVNuxTEo', 'cGyhJCt04m', 'Od+6x+ILyW', 'xAZLoDRLgU', 'g\x20?\x20fullCo', 'ots.forEac', '\x20}\x0a\x20\x20\x20\x20\x20\x20\x20', 'ANoNhE4M+N', 'x2qbR5mVNS', 'vcur6jtAZK', 'r7IzZ9FCMu', 'ist.innerH', '\x20\x20\x20backgro', 'd(\x27slot_\x27\x20', '\x20\x20\x20\x20\x20\x20marg', 'rror\x20loadi', 'avior\x20===\x20', 'eteBtn.onc', 'ECNEppXbIE', 'fRIoxLx605', 'N7jDpRRrW2', 'mbQ1CAvkP9', 'e\x20=\x20functi', 'AVAW7BtElJ', 'tQIrVn3bZo', 'yOFLzrRW6M', 'Y68VplcVbF', 'Aq9mCqpiCs', 'step;\x0a\x20\x20\x20\x20', '4tEJJF4CiB', 'U0cCqw7Pqi', 'tNameKb\x22\x20v', 'Jk2Q02xsQe', 'Ed3oLGcWHR', 'wJoQZhYyu1', 'k8NuG8g2GS', 'P87EXB/j7R', 'P7WLjmmQx7', 'ete-slot-b', 'ops.button', 'smM549scyD', 'KYVe4S+ee4', '\x22field\x22>\x0a\x20', '0+A90dCNo1', '3CsKVIygKK', 'adHvD', 'uTpdOdYXxy', 'BJnDpv9s9i', 'onchange=\x22', 'PXRQR1iP2W', 'rqJ3s0FyB/', 'Wsdux/dOzk', '\x20\x20\x20\x20\x20\x20\x20<la', '2y+58PpN2Q', ':\x20\x27smooth\x27', 'id)\x20{\x0a\x20\x20\x20\x20', 't.createEl', 'alue\x20=\x20cur', 'P+Z7cYt+gN', '/as8jEep7N', 'opacity\x200.', 'd\x22\x20style=\x22', 'Y\x20||\x200}\x22\x20\x0a', 'header\x20h3\x20', 'A4IDNgdcD9', 'r:\x20white;\x0a', 'sqrt', 'XszviYGZfZ', 'MNWPTL+c2f', 'gIDLd5r0AF', 'iv>\x0a\x20\x20\x20\x20\x20\x20', 'srIX7/rXoS', 'uQpBiuYGSt', 'B+W4d14oOZ', ')\x20=>\x20{\x0a\x20\x20\x20', '+GmFHmhYp9', 'frpKqacyQW', 'this.heigh', '\x20style=\x22fl', 'ntdxV+sW1b', 'gM9mbrkXd5', 'Pffe9EJLiI', 'x6bBXQ9jHh', 'S4KjyV5SrV', 'hjxUJHkQQ8', 'DVI4DHlSEt', 'eSd92igt6L', 'gRf21TfxE1', 'bUmMZruwMZ', 'DdeWIjIjCN', 'ntSlotName', '\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a', '1Lb7W/Xorr', 'buttonGp', 'grid_', 'eVhoF9v5PB', 'findIndex', 'AKBJoyO5AL', 'rSeIRWspRr', 'OEg0SQIBW5', 'n/3iFHgkOO', 'Q5dVHBHCqD', 'h47ok5SC5w', '\x20\x20\x20\x20\x20\x20\x20\x20sl', 'S4a0yErOtY', '\x20\x20padding:', 'i3TH3J8/cO', 'N4GNdFHw4y', 't\x22\x20id=\x22slo', 'range\x20Slot', 'Cc6EAEICIZ', 'dQ8aM1FEhE', 'BKk/pOdOs/', 'xCoRDWS6SF', 'IV1+zRIBLf', 'CAMAAABYhh', 'IJVamZCWJb', 'PktIYrQps+', 'dy::-webki', 'entGrid,\x20s', 'W2nC9zMcXC', 'cument.add', 'textY\x20=\x2024', 'BGQKIFYotS', '\x200.15s;\x0a\x20\x20', 'unt}\x20slots', 'Cdvzl02FDq', 'tonText', '/n6sCfwHnD', 'nXq7ni8xa5', 'OXX+m2LN+1', '\x20\x20\x20\x20return', 'lass=\x22fiel', '||\x20slots.l', 'd49+CeyD09', '79zy+seRdZ', '=\x22display:', '0jjT9Dczu/', 'Y2V/csPQDg', 'jPLnlJ+13n', 'xgrVup3pa6', 'h15l1VviNT', 'teGridPosi', 'cl5czZEI/P', '6gUkPhvay4', 'IaeMDjAQ/I', '82Ry+xaS9t', 'DRVOLYfZ+9', 'toLowerCas', '\x20\x20\x20display', 'DMqsKGdo7O', 'LOj6QC44qv', 't266jjnfQT', '\x20\x20\x20\x20\x20\x20\x20bod', 'm89nG8IFOI', 'roundImage', '46VwAKOt8w', 'FddBIj6mxi', 'f\x20(success', 'FIzKCG+LSe', 'e=\x22handleG', 'ElHke', 'wl8booOKHO', '9W+/QJjUQu', '4SaV8RU3+E', 'context', 'QDH9hM7DxA', 'XGvxZrHkY8', 'NiW698/vn3', 'nnot\x20be\x20un', 'V8b\x27,\x20\x27_bl', 'kM5IE0gN22', 'P9yP5o2ah9', 'us:\x2020px;\x0a', 'tYX7oKMsm9', '\x20(gridInde', 'kQGjaM2K5a', '.style.tra', '\x20&&\x20window', 'fullConfig', 'bottom:\x201p', 'qi8eIx9lCQ', 'lex;\x20align', 'bUCVq8CAfp', 'BOPjON5bFp', 'CmUy63AeP4', 'nP53QSAIdT', 'ehSh2jNAgw', '7oT2ZO01A7', 'otProperti', '?\x20\x27selecte', 'dImage()\x20{', '\x20\x20\x20\x20\x20\x20\x20\x20\x20<', 'PizU1mUCMA', '837TZnV4aS', 'un6Nnj7cE4', 'FWDaQ6th4r', 'ts();\x0a\x20\x20\x20\x20', 'r(--radius', '\x20text-alig', 'muOu9WfAtj', '>\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'HotbarConf', 'DBRtrBtayL', 'Zd1ggrNyET', 'CqY9eCdYOw', 'XRIvrQ49ut', 'N6g2q55Vfa', 'tyle=\x22back', 'lL+Dywed1H', '_buttonIco', 'yFO5ODCYuH', 'lassName\x20=', '\x20new\x20slot\x22', 'dMNja95f/j']; _0x14fd = function () { return _0x409750; }; return _0x14fd(); } function getConfigPath() { const _0x2e0c6c = { _0x1d43b8: 0x6ae, _0x230215: 0x16a }, _0x132b42 = _0x2cb8e6; if (!Utils[_0x132b42(_0x2e0c6c._0x1d43b8)]()) return null; const _0x457ce9 = require('path'), _0xb44de7 = _0x457ce9[_0x132b42(0x316)](process['mainModule'][_0x132b42(_0x2e0c6c._0x230215)]) + '/js/'; return _0x457ce9['join'](_0xb44de7, _0x132b42(0xa2d) + 'ig.json'); } function getProjectRoot() { const _0x24c194 = { _0x3ab897: 0x6ae, _0x3112ac: 0x16a }, _0x391e65 = _0x2cb8e6; if (!Utils[_0x391e65(_0x24c194._0x3ab897)]()) return null; const _0x500086 = require('path'); return _0x500086['dirname'](process['mainModule'][_0x391e65(_0x24c194._0x3112ac)]); } function getJsPath() { const _0x117460 = { _0x5f0972: 0x2dc, _0x51b119: 0x16a }, _0xb88256 = _0x2cb8e6; if (!Utils[_0xb88256(0x6ae)]()) return null; const _0x212fb8 = require('path'); return _0x212fb8['dirname'](process[_0xb88256(_0x117460._0x5f0972)][_0xb88256(_0x117460._0x51b119)]) + '/js/'; } function loadConfigFile() { const _0xce9566 = { _0x375028: 0x972 }, _0x2e1101 = _0x2cb8e6; if (!Utils['isNwjs']()) return null; const _0xfdd06 = require('fs'), _0x21e5b8 = getConfigPath(); try { if (_0xfdd06['existsSync'](_0x21e5b8)) return JSON[_0x2e1101(0x4d8)](_0xfdd06['readFileSy' + 'nc'](_0x21e5b8, 'utf8')); } catch (_0x1b07ba) { console['error']('[Hotbar]\x20E' + _0x2e1101(_0xce9566._0x375028) + 'ng\x20config:', _0x1b07ba); } const _0x1a417a = {}; return _0x1a417a['grids'] = [], _0x1a417a[_0x2e1101(0x425)] = {}, _0x1a417a; } function saveConfigFile(_0x61154b) { const _0x383994 = _0x2cb8e6; if (!Utils[_0x383994(0x6ae)]()) return ![]; const _0x1ee3c0 = require('fs'), _0x739bfa = getConfigPath(); try { return _0x1ee3c0['writeFileS' + 'ync'](_0x739bfa, JSON[_0x383994(0x845)](_0x61154b, null, -0xf * 0xe2 + 0x20f + 0xb31), _0x383994(0x552)), !![]; } catch (_0x5d160a) { return console['error']('[Hotbar]\x20E' + 'rror\x20savin' + 'g\x20config:', _0x5d160a), ![]; } } function _0x28a5(_0xaea9d0, _0x3397d6) { _0xaea9d0 = _0xaea9d0 - (-0x176f + -0x7ab + 0x21e * 0xf); const _0x143e72 = _0x14fd(); let _0x48b806 = _0x143e72[_0xaea9d0]; return _0x48b806; } function reloadGridSettings(_0x579a47 = ![]) { const _0x440e19 = { _0x41ecfe: 0x2a6, _0x5a7976: 0xb14, _0x207f97: 0x2a6, _0x9413fb: 0x6d4, _0x20df32: 0x3ee, _0x207de3: 0x9a5, _0xcebd81: 0x3d1 }, _0x655292 = _0x2cb8e6; if (Utils['isNwjs']()) { const _0x2b2acb = loadConfigFile(); if (_0x2b2acb) return gridSettings = _0x2b2acb['grids'] || [], !![]; } else return fetch('js/HotbarC' + 'onfig.json')['then'](_0x432984 => _0x432984['json']())[_0x655292(0x4e8)](_0x8025b8 => { const _0x16a04d = _0x655292; gridSettings = _0x8025b8['grids'] || []; if (_0x579a47 && SceneManager[_0x16a04d(_0x440e19._0x41ecfe)] && SceneManager['_scene']['_skillUI']) { if (_0x16a04d(_0x440e19._0x5a7976) !== 'xWgHU') { if (_0x4a20d4 && _0xa4d00f[_0x16a04d(_0x440e19._0x207f97)] instanceof _0xac3359 && _0x572e62) { const _0x3b018b = _0x370e07['pageToCanv' + 'asX'](_0x356407[_0x16a04d(_0x440e19._0x9413fb)]), _0xdb44ca = _0x316a78['pageToCanv' + 'asY'](_0x29cd7e[_0x16a04d(_0x440e19._0x20df32)]), _0x3a7a8b = _0x1d259a['now']() - _0x4b9db0, _0x3d71d2 = _0x3b018b - _0x27c42d['x'], _0x1945c4 = _0xdb44ca - _0x20f8e6['y'], _0x1b221d = _0x997353[_0x16a04d(_0x440e19._0x207de3)](_0x3d71d2 * _0x3d71d2 + _0x1945c4 * _0x1945c4); _0x1b221d < _0x525676 && _0x3a7a8b < -0xfc3 + 0x224a * 0x1 + 0x1 * -0x1093 && _0x2a296d(_0x3b018b, _0xdb44ca), _0x3caf0d = null; } _0x2be36a['call'](this, _0x2b25a1); } else SceneManager[_0x16a04d(_0x440e19._0xcebd81)](SceneManager['_scene'][_0x16a04d(0x296) + 'r']); } })['catch'](_0x418243 => { const _0x11c512 = _0x655292; console['error']('[Hotbar]\x20F' + _0x11c512(0x54c) + 'oad\x20Hotbar' + 'Config.jso' + 'n:', _0x418243); }), !![]; return ![]; } reloadGridSettings(![]);
})();