"use strict";

// DEPENDENCIES
// ------------
// External

// Local
let overrides = require("../resources/overrides");
let util = require("../common/util");


// CONSTANTS
// ---------
const ID_FLAG = "boardgame";
const BOARD_GAME_GEEK_URL = "https://boardgamegeek.com";

const DEFAULT_COVER_ART_FILE_PATH = "/images/board-games/UNTITLED/missing-artwork.png";
const DEFAULT_COVER_ART_URL = "https://boardgamegeek.com"; // image
const DEFAULT_ID = ID_FLAG + "DEFAULT"; // "boardgame" + objectid
const DEFAULT_IN_WISHLIST = false;
const DEFAULT_RATING = "N/A"; // stats.rating.value
const DEFAULT_TITLE = "Untitled"; // name.$t
const DEFAULT_YEAR_PUBLISHED = 0; // yearpublished


/**
 * Builder to assist converting BoardGameGeek's "thing" object into Shelf's
 * own, internal board game object. Besides ignoring fields Shelf doesn't care
 * about and choosing saner names and flat organization, there are some nice
 * transformations and data manipulations that are handled by this builder as
 * well (for example, mapping "noisy" titles or incorrect creator names to the
 * desired overrides, when appropriate).
 *
 * Example Shelf board game:
 *
 *     {
 *        "_id" : "boardgame68448",
 *        "addedOn" : 1562437378992,
 *        "boardGameGeekUrl" : "https://boardgamegeek.com/boardgame/68448",
 *        "coverArtFilePath" : "/images/board-games/boardgame68448/board-game-cover-art.jpg",
 *        "covertArtUrl" : "https://cf.geekdo-images.com/original/img/3DP_RW5lTX0WrV67s8qi8CsiXoQ=/0x0/pic860217.jpg",
 *        "inWishlist" : false,
 *        "rating" : 8,
 *        "sortTitle" : "7 WONDERS",
 *        "title" : "7 Wonders",
 *        "yearPublished" : 2010
 *     }
 *
 */
class Builder {

    /**
     * Sets all "settable" fields for the pending new board game to it's
     * default values.
     */
    constructor() {
        this._id = DEFAULT_ID;
        this.boardGameGeekUrl = BOARD_GAME_GEEK_URL;
        this.coverArtFilePath = DEFAULT_COVER_ART_FILE_PATH;
        this.covertArtUrl = DEFAULT_COVER_ART_URL;
        this.inWishlist = DEFAULT_IN_WISHLIST;
        this.rating = this._standardizeToShelfRating(DEFAULT_RATING);
        this.sortTitle = util.getSortText(DEFAULT_TITLE);
        this.title = DEFAULT_TITLE;
        this.yearPublished = DEFAULT_YEAR_PUBLISHED;
    }

    /**
     * ==============
     * PUBLIC METHODS
     * ==============
     */

    /**
     * Builds and returns the Shelf board game. Board game attributes not set
     * in the builder by the caller prior to this call will use their default
     * values.
     *
     * @return boardGame Shelf board game appropriate for wider Shelf use. Can
     *                   be written to Mongo as-is.
     */
    build() {
        let now = Date.now();
        return {
            _id : this._id,
            addedOn : now,
            boardGameGeekUrl : this.boardGameGeekUrl,
            coverArtFilePath : this.coverArtFilePath,
            covertArtUrl : this.covertArtUrl,
            inWishlist : this.inWishlist,
            rating : this.rating,
            sortTitle : this.sortTitle,
            title : this.title,
            yearPublished : this.yearPublished
        };
    }

    setId(id) {
        this._id = ID_FLAG + id;
        this.boardGameGeekUrl = BOARD_GAME_GEEK_URL + "/boardgame/" + id;
    }
    setCoverArtFilePath(coverArtFilePath) {
        this.coverArtFilePath = coverArtFilePath;
    }
    setCoverArtUrl(covertArtUrl) {
        this.covertArtUrl = covertArtUrl;
    }
    setInWishlist(inWishlist) {
        this.inWishlist = inWishlist;
    }
    setRating(rating) {
        this.rating = rating;
    }
    setTitle(title) {
        /**
         * Some of the titles Discogs has may be overly complicated or noisy.
         * In case of situations like that, the desired, simplified name can
         * be used instead by mapping the "bad" title to the desired
         * replacement title in the overrides file
         */
        if (overrides.boardGames.replacements.titles[title]) {
            this.title = overrides.boardGames.replacements.titles[title];
        } else {
            this.title = title;
        }

        this.sortTitle = util.getSortText(this.title);
    }
    setYearPublished(yearPublished) {
        this.yearPublished = yearPublished;
    }

    /**
     * ===============
     * PRIVATE METHODS
     * ===============
     */

    /**
     * BoardGameGeek uses a 10-star rating sceme, Shelf uses 5. Compress all
     * ratings down to a rounded-down 5-star rating system.
     */
    _standardizeToShelfRating(boardGameGeekRating) {
        if (boardGameGeekRating > 0) {
            return boardGameGeekRating / 2;
        } else {
            return -1;
        }
    }

}

module.exports = Builder;