import {mount} from "@vue/test-utils";
import ButtonStandard from "@/components/ButtonStandard";

describe("ButtonStandard", () => {
   it("Render Label", () => {
      const wrapper = mount(ButtonStandard, {
          props: {
              label: "Test label"
          }
      });
      expect(wrapper.text()).toContain("Test label");
      expect(wrapper.classes()).toContain("typeOne");
   });

   it("Render First Class", () => {
        const wrapper = mount(ButtonStandard, {
            props: {
                label: "Test label",
                typeClass: "typeOne"
            }
        });
        expect(wrapper.classes()).toContain("typeOne");
   });

   it("Render Second Class", () => {
        const wrapper = mount(ButtonStandard, {
            props: {
                label: "Test label",
                typeClass: "typeTwo"
            }
        });
        expect(wrapper.classes()).toContain("typeTwo");
   });

   it("Render Third Class", () => {
        const wrapper = mount(ButtonStandard, {
            props: {
                label: "Test label",
                typeClass: "typeThree"
            }
        });
        expect(wrapper.classes()).toContain("typeThree");
   });

    it("Render Error Class", () => {
        const wrapper = mount(ButtonStandard, {
            props: {
                label: "Test label",
                typeClass: ""
            }
        });
        expect(wrapper.classes()).not.toContain("typeOne");
        expect(wrapper.classes()).toStrictEqual(["button"]);
    });

});
