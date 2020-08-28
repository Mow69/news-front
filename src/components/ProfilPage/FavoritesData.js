import React from 'react';
import "../../App.css";
import { FAVORITE_CATEGORY, FAVORITE_SOURCE } from '../../utils/constants';

const FavoritesData = ({ favorites }) => {

    return (
        <div className="row w-100 d-flex justify-content-center mt-5">
            <div className="col-md-4">
                <h2 className="text-center text-info">Mes favoris</h2>
                <h4 className="text-primary">Catégories</h4>
                <ul>
                    {favorites.map((favoris, index) => {
                        if (favoris["@type"] === FAVORITE_CATEGORY) {
                            return <li>{favoris.category.name}</li>
                        }
                        return null;
                    })
                    }
                </ul>

                <h4 className="text-primary">Sources</h4>
                <ul>
                    {favorites.map((favoris, index) => {
                        if (favoris["@type"] === FAVORITE_SOURCE) {
                            return <li>{favoris.source.name}</li>
                        }
                        return null;
                    })
                    }
                </ul>
            </div>
        </div>
    )
}

export default FavoritesData;