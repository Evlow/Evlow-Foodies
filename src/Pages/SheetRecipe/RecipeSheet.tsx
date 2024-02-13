import React, { useState } from 'react';
import { Recipe } from '../../Models/recipe';


export default function RecipeSheet() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  return (
    <div className="content-intro-recipe-sheet">
      <div className="paragraphe-recipe-sheet">
        <h3 className="h3-recipe-sheet">{}</h3>
      </div>
      {/* ... autres éléments du modèle */}
      <article className="content-article">
        <section className="section-preparations">
          <div className="bloc-title">
            <div className="ovale">
              <h4 className="title-flex">
                <img
                  className="preparations"
                  src="/assets/picture/preparation.svg"
                  alt="image préparation"
                />
                Préparations
              </h4>
            </div>
          </div>
          <ul>
            {/* {[1, 2, 3, 4, 5, 6].map((index) => (
              <li key={index}>
                {recipe[`preparation${index}`] && (
                  <>
                    <span className="list-number">{index}.</span>{' '}
                    {recipe[`preparation${index}`]}
                  </>
                )}
              </li>
            ))} */}
          </ul>
        </section>
      </article>
    </div>
  );
}
