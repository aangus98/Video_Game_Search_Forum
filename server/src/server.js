"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const axios_1 = __importDefault(require("axios"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.post('/api/search', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { query } = req.body;
    try {
        const response = yield axios_1.default.post('https://api.igdb.com/v4/games', `fields name, cover.image_id, aggregated_rating, first_release_date, genres.name, involved_companies.company.name ; search "${query}"; limit 1;`, {
            headers: {
                'Accept': 'application/json',
                'Client-ID': process.env.API_CLIENT_ID,
                'Authorization': process.env.API_AUTH_TOKEN,
            }
        });
        const gameData = response.data.map((_a) => {
            var { aggregated_rating, involved_companies, first_release_date, genres, cover } = _a, rest = __rest(_a, ["aggregated_rating", "involved_companies", "first_release_date", "genres", "cover"]);
            return (Object.assign(Object.assign({}, rest), { cover: `https://images.igdb.com/igdb/image/upload/t_cover_big/${cover.image_id}.jpg`, critic_score: Math.round(aggregated_rating), genres: genres.map(genreObj => genreObj.name), developers: involved_companies.map(companyObj => companyObj.company.name), release_date: first_release_date ? new Date(first_release_date * 1000).toLocaleDateString() : "Unknown" }));
        });
        res.json(gameData);
    }
    catch (error) {
        console.error('Something went horribly wrong!!!!:', error);
        res.status(500).json({ message: 'Big Ole Server Error' });
    }
}));
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
