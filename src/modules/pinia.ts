import { createPinia } from "pinia";
import { ReeneeModule } from ".";

export default <ReeneeModule>{
  onVueAppInit(app) {
    const pinia = createPinia();
    app.use(pinia);
  },
};
