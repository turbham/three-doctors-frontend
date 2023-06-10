<template>
  <div appear>
    <transition name="fade" appear>
      <div class="modal-overlay"></div>
    </transition>
    <transition name="pop">
      <div
        class="modal overflow-y-auto max-h-[90%] border-2 border-PaleOrange px-24"
        role="dialog"
      >
        <div class="flex flex-row items-center justify-between">
          <h2 class="text-3xl font-windsor-pro-bold text mb-5">
            Terms and Conditions of Use
          </h2>
          <button @click="$emit('closeModal')" class="text-2xl text-[#ff0000]">
            x
          </button>
        </div>
        <div class="px-8 mb-10">
          <div class="space-y-5 mb-8">
            <div>
              <h3
                class="text-2xl text-OlsoGrey font-sf-pro-display-medium mb-4"
              >
                1. Terms
              </h3>
              <p class="text-sm text-OlsoGrey">
                By accessing this Website, accessible from www.3Doktors.com, you
                are agreeing to be bound by these Website Terms and Conditions
                of Use and agree that you are responsible for the agreement with
                any applicable local laws. If you disagree with any of these
                terms, you are prohibited from accessing this site. The
                materials contained in this Website are protected by copyright
                and trade mark law.
              </p>
            </div>
            <div>
              <h3
                class="text-2xl text-OlsoGrey font-sf-pro-display-medium mb-4"
              >
                2. Use License
              </h3>
              <p class="text-sm text-OlsoGrey">
                Permission is granted to temporarily download one copy of the
                materials on 3Doktors Website for personal, non-commercial
                transitory viewing only. This is the grant of a license, not a
                transfer of title, and under this license you may not: modify or
                copy the materials; use the materials for any commercial purpose
                or for any public display; attempt to reverse engineer any
                software contained on 3Doktors Website; remove any copyright or
                other proprietary notations from the materials; or transferring
                the materials to another person or “mirror” the materials on any
                other server. This will let 3Doktors to terminate upon
                violations of any of these restrictions. Upon termination, your
                viewing right will also be terminated and you should destroy any
                downloaded materials in your possession whether it is printed or
                electronic format. These Terms of Service have been created with
                the help of the Terms Of Service Generator and the Privacy
                Policy Generator.
              </p>
            </div>
            <div>
              <h3
                class="text-2xl text-OlsoGrey font-sf-pro-display-medium mb-4"
              >
                3. Disclaimer
              </h3>
              <p class="text-sm text-OlsoGrey">
                All the materials on 3Doktors Website are provided “as is”.
                3Doktors makes no warranties, may it be expressed or implied,
                therefore negates all other warranties. Furthermore, 3Doktors
                does not make any representations concerning the accuracy or
                reliability of the use of the materials on its Website or
                otherwise relating to such materials or any sites linked to this
                Website.
              </p>
            </div>
            <div>
              <h3
                class="text-2xl text-OlsoGrey font-sf-pro-display-medium mb-4"
              >
                4. Limitations
              </h3>
              <p class="text-sm text-OlsoGrey">
                3Doktors or its suppliers will not be held accountable for any
                damages that will arise with the use or inability to use the
                materials on 3Doktors Website, even if 3Doktors or an authorized
                representative of this Website has been notified, orally or
                written, of the possibility of such damage. Some jurisdiction
                does not allow limitations on implied warranties or limitations
                of liability for incidental damages, these limitations may not
                apply to you.
              </p>
            </div>
            <div>
              <h3
                class="text-2xl text-OlsoGrey font-sf-pro-display-medium mb-4"
              >
                5. Revisions and Errata
              </h3>
              <p class="text-sm text-OlsoGrey">
                The materials appearing on 3Doktors Website may include
                technical, typographical, or photographic errors. 3Doktors will
                not promise that any of the materials in this Website are
                accurate, complete, or current. 3Doktors may change the
                materials contained on its Website at any time without notice.
                3Doktors does not make any commitment to update the materials.
              </p>
            </div>
            <div>
              <h3
                class="text-2xl text-OlsoGrey font-sf-pro-display-medium mb-4"
              >
                6. Links
              </h3>
              <p class="text-sm text-OlsoGrey">
                3Doktors has not reviewed all of the sites linked to its Website
                and is not responsible for the contents of any such linked site.
                The presence of any link does not imply endorsement by 3Doktors
                of the site. The use of any linked website is at the user’s own
                risk.
              </p>
            </div>
            <div>
              <h3
                class="text-2xl text-OlsoGrey font-sf-pro-display-medium mb-4"
              >
                7. Site Terms of Use Modifications
              </h3>
              <p class="text-sm text-OlsoGrey">
                3Doktors may revise these Terms of Use for its Website at any
                time without prior notice. By using this Website, you are
                agreeing to be bound by the current version of these Terms and
                Conditions of Use.
              </p>
            </div>
            <div>
              <h3
                class="text-2xl text-OlsoGrey font-sf-pro-display-medium mb-4"
              >
                8. Your Privacy
              </h3>
              <p class="text-sm text-OlsoGrey">
                Please read our Privacy Policy.
              </p>
            </div>
            <div>
              <h3
                class="text-2xl text-OlsoGrey font-sf-pro-display-medium mb-4"
              >
                9. Governing Law
              </h3>
              <p class="text-sm text-OlsoGrey">
                Any claim related to 3Doktors Website shall be governed by the
                laws of NG without regards to its conflict of law provisions.
              </p>
            </div>
          </div>
          <div class="space-y-5">
            <div>
              <h2 class="text-3xl font-windsor-pro-bold text mb-5">
                Legal Notice &amp; Privacy Statement
              </h2>
              <p class="text-sm text-OlsoGrey">
                Website Terms and Conditions of Use
              </p>
              <p class="text-sm text-OlsoGrey">Effective Date: January 2023</p>
              <p class="text-sm text-OlsoGrey">
                Website Terms and Conditions of Use
              </p>
              <p class="text-sm text-OlsoGrey">
                This Legal Notice & Privacy Statement ("Statement") sets forth
                the terms and conditions for the use of the website accessible
                at www.3Doktors.com ("Website"). By accessing or using the
                Website, you agree to be bound by these terms and conditions. If
                you do not agree with any part of this Statement, you must not
                access or use the Website.
              </p>
            </div>
            <div>
              <h2 class="text-3xl font-windsor-pro-bold text mb-5">
                Terms of Use
              </h2>
              <h3
                class="text-2xl text-OlsoGrey font-sf-pro-display-medium mb-4"
              >
                1.1 Acceptance of Terms
              </h3>
              <p class="text-sm text-OlsoGrey">
                By accessing this Website, you acknowledge that you have read,
                understood, and agree to be bound by these Website Terms and
                Conditions of Use ("Terms"), as well as any applicable laws and
                regulations. If you do not agree with any of these Terms, you
                are prohibited from accessing this site.
              </p>
            </div>
            <div>
              <h3
                class="text-2xl text-OlsoGrey font-sf-pro-display-medium mb-4"
              >
                1.2 Intellectual Property
              </h3>
              <p class="text-sm text-OlsoGrey">
                The materials contained on this Website, including but not
                limited to text, graphics, logos, images, audio clips, video
                clips, and software, are protected by copyright and trademark
                laws. You may only use the materials for personal,
                non-commercial transitory viewing. Modification, copying,
                distribution, or any other use of the materials for commercial
                purposes or public display is strictly prohibited without prior
                written consent from 3Doktors.
              </p>
            </div>
            <div>
              <h3
                class="text-2xl text-OlsoGrey font-sf-pro-display-medium mb-4"
              >
                1.3 License Restrictions
              </h3>
              <p class="text-sm text-OlsoGrey">
                Under the granted license, you are prohibited from:
              </p>
              <p class="text-sm text-OlsoGrey">
                Modifying or copying the materials; Using the materials for any
                commercial purpose or public display; Attempting to reverse
                engineer any software contained on the Website; Removing any
                copyright or other proprietary notations from the materials;
                Transferring the materials to another person or "mirroring" the
                materials on any other server. Violation of these license
                restrictions may result in termination of your access to the
                Website.
              </p>
            </div>
            <div>
              <h3
                class="text-2xl text-OlsoGrey font-sf-pro-display-medium mb-4"
              >
                1.4 Termination
              </h3>
              <p class="text-sm text-OlsoGrey">
                3Doktors reserves the right to terminate your access to the
                Website at any time, without prior notice, in the event of a
                violation of these Terms. Upon termination, you must destroy any
                downloaded or printed materials in your possession.
              </p>
            </div>
            <div>
              <h2 class="text-3xl font-windsor-pro-bold text mb-5">
                Disclaimer
              </h2>
              <h3
                class="text-2xl text-OlsoGrey font-sf-pro-display-medium mb-4"
              >
                2.1 Use at Your Own Risk
              </h3>
              <p class="text-sm text-OlsoGrey">
                The materials on this Website are provided "as is" without any
                warranties, whether expressed or implied. 3Doktors does not make
                any representations or warranties regarding the accuracy or
                reliability of the use of the materials on the Website or any
                sites linked to it. Any reliance you place on such materials is
                strictly at your own risk.
              </p>
            </div>
            <div>
              <h3
                class="text-2xl text-OlsoGrey font-sf-pro-display-medium mb-4"
              >
                2.2 Limitation of Liability
              </h3>
              <p class="text-sm text-OlsoGrey">
                In no event shall 3Doctors or its suppliers be liable for any
                damages arising out of the use or inability to use the materials
                on the Website, even if 3Doktors or an authorized representative
                has been notified, orally or in writing, of the possibility of
                such damage. Some jurisdictions do not allow limitations on
                implied warranties or limitations of liability for incidental
                damages, so these limitations may not apply to you.
              </p>
            </div>
            <div>
              <h2 class="text-3xl font-windsor-pro-bold text mb-5">
                Revisions and Errata
              </h2>
              <h3
                class="text-2xl text-OlsoGrey font-sf-pro-display-medium mb-4"
              >
                3.1 Accuracy of Information
              </h3>
              <p class="text-sm text-OlsoGrey">
                The materials appearing on the Website may include technical,
                typographical, or photographic errors. While 3Doktors strives to
                ensure the accuracy, completeness, and currency of the
                materials, it does not guarantee that any errors or inaccuracies
                will be corrected.
              </p>
            </div>
            <div>
              <h3
                class="text-2xl text-OlsoGrey font-sf-pro-display-medium mb-4"
              >
                3.2 Changes to Materials
              </h3>
              <p class="text-sm text-OlsoGrey">
                3Doktors may make changes to the materials contained on the
                Website at any time without prior notice. However, 3Doktors does
                not commit to updating the materials.
              </p>
            </div>
            <div>
              <h2 class="text-3xl font-windsor-pro-bold text mb-5">Links</h2>
              <h3
                class="text-2xl text-OlsoGrey font-sf-pro-display-medium mb-4"
              >
                4.1 Third-Party Websites
              </h3>
              <p class="text-sm text-OlsoGrey">
                The Website may contain links to third-party websites for your
                convenience and reference. 3Doktors does not endorse the content
                of these linked websites and is not responsible for their
                availability, accuracy, or any damages incurred from their use.
                Accessing linked websites is at your own risk.
              </p>
            </div>
            <div>
              <h2 class="text-3xl font-windsor-pro-bold text mb-5">
                Site Terms of Use Modifications
              </h2>
              <h3
                class="text-2xl text-OlsoGrey font-sf-pro-display-medium mb-4"
              >
                5.1 Amendments to Terms
              </h3>
              <p class="text-sm text-OlsoGrey">
                3Doktors reserves the right to modify or revise these Terms of
                Use at any time without prior notice. By continuing to access or
                use the Website after any revisions, you agree to be bound by
                the updated Terms.
              </p>
            </div>
            <div>
              <h2 class="text-3xl font-windsor-pro-bold text mb-5">
                Your Privacy
              </h2>
              <h3
                class="text-2xl text-OlsoGrey font-sf-pro-display-medium mb-4"
              >
                6.1 Privacy Policy
              </h3>
              <p class="text-sm text-OlsoGrey">
                To understand how we collect, use, and protect your personal
                information, please review our Privacy Policy, which is
                incorporated by reference into this Statement. Governing Law
              </p>
            </div>
            <div>
              <h2 class="text-3xl font-windsor-pro-bold text mb-5">
                Governing Law
              </h2>
              <h3
                class="text-2xl text-OlsoGrey font-sf-pro-display-medium mb-4"
              >
                7.1 Jurisdiction
              </h3>
              <p class="text-sm text-OlsoGrey">
                Any claim or dispute arising from or related to the use of the
                3Doktors Website shall be governed by the laws of NG without
                regard to its conflict of law provisions.
              </p>
              <p class="text-sm text-OlsoGrey">
                By accessing or using the Website, you acknowledge that you have
                read, understood, and agree to comply with this Legal Notice
                &amp; Privacy Statement.
              </p>
            </div>
          </div>
        </div>
        <!--  
          
            
         
            
     
           -->
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "TermsAndConditionOfUse",
  props: ["TermsAndConditionModal"],
  emits: ["closeModal"],
  data() {
    return {
      showModal: false,
    };
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 75%;
  padding: 2rem 6rem;
  background: #fff;
  z-index: 999;
  transform: none;
}

.modal-overlay {
  content: "";
  position: absolute;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 998;
  background: black;
  opacity: 0.6;
  cursor: pointer;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s linear;
}

.fade-enter,
.fade-leave-to {
  opacity: 9;
}

.pop-enter-active,
.pop-leave-active {
  transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s linear;
}

.pop-enter,
.pop-leave-to {
  opacity: 0;
  transform: scale(0.3) translateY(-50%);
}
</style>
