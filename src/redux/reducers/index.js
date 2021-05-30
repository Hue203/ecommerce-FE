import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import blogReducer from "./blog.reducer";
import productReducer from "./product.reducer";
import routeReducer from "./route.reducer";
import userReducer from "./user.reducer";
import packageReducer from "./package.reducer";
import reviewReducer from "./review.reducer";
import orderReducer from "./order.reducer";

export default combineReducers({
  auth: authReducer,
  product: productReducer,
  route: routeReducer,
  user: userReducer,
  blog: blogReducer,
  package: packageReducer,
  review: reviewReducer,
  order: orderReducer,
});
