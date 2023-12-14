
**Available Scripts**
In the project directory, you can run:
 `npm start` : Runs the app in the development mode, open http://localhost:3000 to view it in local browser
 `npm run build` : Builds the app for production to the `build` folder.

## project scope
1) listing page with a filter functionality included
2) product page with a carousal and cta buttons
3) add to cart functionality
4) remove from cart functionality
5) responsiveness (i would say around 80%)
6) toaster messages in CTA button click actions in product page

## other details
- defined routes at the top level for routing b/w homepage, listing page and product page based on id (App.js)
- defined ented a custom hook for fetching data (useFetch under utils/helpers.js)

## additional libraries used
1) "react-intersection-observer": (for implementing lazy load in listing page => in ListingPagePdCard component)
2) "react-responsive-carousel": (for implementing Product page carousal of images)
3) "@mui/material": (for having icons and cards)

`PS toasters, icons, loaders added with the help of material ui also for implmenting intersection observer used a hook for detecting whether a DOM element is inside viewport, also a carousal for implementing product page carousal`

(note : did not implement wishlist functionality due to time constraints also its should be same implementation as cart functionaility. there might be some small ui bugs here and there did not find time to fix any minor bugs, also used local state from app.js to store all info, so if you refresh the page state info would be gone)

## optimizations included
1) lazyloaded listing page with all individual product cards will be lazyloaded (using intersection observer) when it comes into the viewpot
2) used suspense and lazy together in some pd & cart section components so that the components will be imported dynamically
3) used useMemo & useCallback although had very little places where i can actually wrap and use memoize

## other possible optimizations that can be performed which are out of scope of this project
1) implement chunk level split logic in webpack
2) use throttle for CTA button clicks (here i have already restricted that a user can add only one pd to cart)
3) api level paginating data, so that data itself will be loaded only in limits not alltogether

