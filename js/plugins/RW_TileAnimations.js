/*:
 * @target MZ
 * @plugindesc v1.1.0 - Simplified and Efficient Tile Animation System for B-E Tilesets.
 * @author Reaver Workshop
 * @url https://reaver-workshop.itch.io
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 * This plugin allows you to animate tiles from B, C, D, and E tabs by 
 * synchronizing them with the native Tilemap renderer. It supports 4-layer 
 * depth, passability, collision, custom frame loops, and animation speeds.
 *
 * ============================================================================
 * Instructions
 * ============================================================================
 * 1. Prepare your tileset PNG with animation frames in sequence (Standard 
 * 16-tile width grid).
 * 2. In the plugin parameters, create a new Animation Group.
 * 3. Select the Tab (B, C, D, or E) and assign the Map IDs.
 * 4. Add the first tile of an animation to the list by specifying its X and Y 
 * coordinates in the PNG (0-15).
 *
 * Animation Directions:
 * - horizontal: Frames must be to the right of the starting tile.
 * - vertical: Frames must be below the starting tile.
 *
 * ============================================================================
 * Terms of Use (License)
 * ============================================================================
 * - Free for use in non-commercial and commercial projects.
 * - Attribution is required (Credit "Reaver Workshop").
 * - You may edit this script for personal use, but you may not redistribute 
 * or sell the script itself.
 * ============================================================================
 *
 * @param animationGroups
 * @text Animation Groups
 * @type struct<AnimGroup>[]
 * @default []
 */

/*~struct~AnimGroup:
 * @param name @text Group Name
 * @param mapIds @text Map IDs @type number[] @default []
 *
 * @param slot
 * @text Tab
 * @desc Select the tileset tab (B, C, D, or E).
 * @type select
 * @option B
 * @value B
 * @option C
 * @value C
 * @option D
 * @value D
 * @option E
 * @value E
 * @default B
 *
 * @param groupSpeed @text Default Speed @type number @default 8
 * @param list @text Animation List @type struct<TileAnim>[] @default []
 */

/*~struct~TileAnim:
 * @param name @text Name
 * @param pngX @text PNG Column (X) @type number @default 0
 * @param pngY @text PNG Row (Y) @type number @default 0
 * @param frames @text Total Frames @type number @default 4
 * @param direction @text Direction @type select @option horizontal @option vertical @default horizontal
 * @param speed @text Custom Speed (0 = Default) @type number @default 0
 */

(() => {
    "use strict";

    const pluginName = "RW_TileAnimations";
    const parameters = PluginManager.parameters(pluginName);
    const groups = JSON.parse(parameters['animationGroups'] || '[]');
    const database = {};

    const slotMap = { "B": 0, "C": 1, "D": 2, "E": 3 };

    for (const groupStr of groups) {
        const group = JSON.parse(groupStr);
        if (!group) continue;
        
        const slot = slotMap[group.slot] !== undefined ? slotMap[group.slot] : 0;
        
        if (database[slot] === undefined) database[slot] = {};

        const mapIds = JSON.parse(group.mapIds || '[]').map(id => Number(id));
        const list = JSON.parse(group.list || '[]');
        
        for (const itemStr of list) {
            const item = JSON.parse(itemStr);
            if (!item) continue;
            
            const x = Number(item.pngX);
            const y = Number(item.pngY);
            const id = (x % 8) + (y + Math.floor(x / 8) * 16) * 8;

            database[slot][id] = {
                mapIds: mapIds,
                frames: Number(item.frames),
                speed: Number(item.speed) > 0 ? Number(item.speed) : Number(group.groupSpeed),
                direction: item.direction
            };
        }
    }

    const _Tilemap_addTile = Tilemap.prototype._addTile;
    Tilemap.prototype._addTile = function(layer, tileId, x, y) {
        if (tileId > 0 && tileId < 1024) {
            const slot = Math.floor(tileId / 256);
            const id = tileId % 256;
            const config = database[slot] !== undefined ? database[slot][id] : null;

            if (config) {
                const mapId = $gameMap.mapId();
                if (config.mapIds.length === 0 || config.mapIds.includes(mapId)) {
                    const frame = Math.floor(Graphics.frameCount / config.speed) % config.frames;
                    let targetId = tileId;
                    if (config.direction === "horizontal") {
                        targetId += frame;
                    } else {
                        targetId += (frame * 8);
                    }
                    return _Tilemap_addTile.call(this, layer, targetId, x, y);
                }
            }
        }
        return _Tilemap_addTile.apply(this, arguments);
    };

    const _Spriteset_Map_update = Spriteset_Map.prototype.update;
    Spriteset_Map.prototype.update = function() {
        _Spriteset_Map_update.call(this);
        if (this._tilemap) {
            this._tilemap.refresh();
        }
    };

})();