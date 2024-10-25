"use strict";
/* import axios from 'axios';
import { useState } from 'react';
import dotenv from 'dotenv'

function API() {
    const searchGame = (query) => {
        fetch(
            "https://api.igdb.com/v4/games",
            { method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Client-ID': process.env.API_CLIENT_ID,
                'Authorization': process.env.API_AUTH_TOKEN,
              },
              body: "fields age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,collections,cover,created_at,dlcs,expanded_games,expansions,external_games,first_release_date,follows,forks,franchise,franchises,game_engines,game_localizations,game_modes,genres,hypes,involved_companies,keywords,language_supports,multiplayer_modes,name,parent_game,platforms,player_perspectives,ports,rating,rating_count,release_dates,remakes,remasters,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites;"
          })
            .then(response => {
                console.log(response.json());
            })
            .catch(err => {
                console.error(err);
            });    }
};

export default API; */ 
