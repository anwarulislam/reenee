import { ReeneeModule } from ".";
import { VueFire, VueFireAuth } from "vuefire";
// the file we created above with `database`, `firestore` and other exports
import { firebaseApp } from "../helpers/firebase";

export default <ReeneeModule>{
  onVueAppInit(app) {
    // app.use(VueFire, {
    //   // imported above but could also just be created here
    //   firebaseApp,
    //   modules: [
    //     // we will see other modules later on
    //     VueFireAuth(),
    //   ],
    // });
  },
};
