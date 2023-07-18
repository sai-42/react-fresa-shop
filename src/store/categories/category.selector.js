import { createSelector } from 'reselect';

const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;

      if (!title) {
        console.error('A category does not have a title:', category);
        return acc;
      }
      
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);
