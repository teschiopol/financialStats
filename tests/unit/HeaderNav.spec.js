import {mount} from "@vue/test-utils";
import HeaderNav from "@/components/HeaderNav";

describe("HeaderNav", () => {
   it("Render not logged", () => {
      const wrapper = mount(HeaderNav, {
          props: {
              logged: false
          }
      });
      expect(wrapper.text()).toContain("Develop by Unicorne");
      expect(wrapper.text()).not.toContain("Logout");
   });

    it("Render logged", () => {
        const wrapper = mount(HeaderNav, {
            props: {
                logged: true
            }
        });
        expect(wrapper.text()).toContain("Logout");
        expect(wrapper.text()).not.toContain("Develop by Unicorne");
    });
});
