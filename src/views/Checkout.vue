<template>
  <div>
    <Navbar />
    <div class="container mx-auto my-12">
      <p class="text-center text-lg md:text-2xl mb-8">Checkout</p>
      <div
        class="flex flex-col space-y-4 lg:space-y-0 lg:flex-row items-start lg:space-x-28 mb-10"
      >
        <div class="w-full lg:w-[55%] space-y-10">
          <p class="ext-lg md:text-2xl mb-2">Delivery Options</p>
          <div class="space-y-6">
            <div class="flex flex-row items-center space-x-4 mb-8">
              <div
                class="w-1/2 flex justify-center border-2 border-black p-4 rounded-xl"
              >
                Lawal
              </div>
              <div
                class="w-1/2 flex justify-center border-2 border-black p-4 rounded-xl"
              >
                Lawal
              </div>
            </div>
            <div class="grid grid-cols-2 gap-6">
              <input
                type="text"
                name=""
                id=""
                class="w-full border border-black rounded-xl p-3"
              />

              <input
                type="text"
                name=""
                id=""
                class="w-full border border-black rounded-xl p-3"
              />
              <input
                type="text"
                name=""
                id=""
                class="col-span-2 w-full border border-black rounded-xl p-3"
              />
              <input
                type="text"
                name=""
                id=""
                class="col-span-2 w-full border border-black rounded-xl p-3"
              />
            </div>
            <div class="grid grid-cols-3 gap-6">
              <input
                type="text"
                name=""
                id=""
                class="col-span-1 w-full border border-black rounded-xl p-3"
              />
              <input
                type="text"
                name=""
                id=""
                class="col-span-1 w-full border border-black rounded-xl p-3"
              />
              <input
                type="text"
                name=""
                id=""
                class="col-span-1 w-full border border-black rounded-xl p-3"
              />
            </div>
            <div class="grid grid-cols-2 gap-6">
              <input
                type="text"
                name=""
                id=""
                class="w-full border border-black rounded-xl p-3"
              />

              <input
                type="text"
                name=""
                id=""
                class="w-full border border-black rounded-xl p-3"
              />
            </div>
          </div>
        </div>
        <div class="w-full lg:w-[28%] space-y-10">
          <div class="flex flex-row items-center justify-between">
            <p class="ext-lg md:text-2xl mb-2">In your cart</p>
            <p class="text-xs font-semibold underline">edit</p>
          </div>
          <div class="space-y-10">
            <div class="text-base font-light space-y-1.5">
              <div class="flex flex-row items-center justify-between">
                <p>Subtotal</p>
                <p>$300.00</p>
              </div>
              <div class="flex flex-row items-center justify-between">
                <p>Estimated Shipping</p>
                <p>$5.00</p>
              </div>
              <div class="flex flex-row items-center justify-between mb-8">
                <p>Estimated Tax</p>
                <p></p>
              </div>
            </div>
            <div
              class="flex flex-row items-center justify-between font-semibold"
            >
              <p>Total</p>
              <p>$305.00</p>
            </div>
            <p class="font-semibold">Arrives by Thu,Apr 20</p>
            <div class="flex flex-row items-start space-x-10">
              <div class="w-32 h-32 bg-GreyCloud rounded-2xl relative">
                <img
                  src="https://lawal-akande.netlify.app/images/profilepic.jpeg"
                  class="h-full object-cover rounded-2xl"
                  alt=""
                />
                <div class="absolute top-4 right-4">
                  <img src="../assets/icons/fi_small_heart.svg" alt="" />
                </div>
              </div>
              <div class="space-y-3">
                <p>3 Doctors smoking filter</p>
                <div class="text-GreyChateau text-xs lg:text-sm space-x-3">
                  <span>Size</span>
                  <span>8mm</span>
                </div>
                <div class="flex flex-row items-center space-x-4">
                  <button class="flex bg-Platinum px-2 rounded-lg">-</button>
                  <span class="text-SpunPearl text-[12px]">0</span>
                  <button class="flex bg-Platinum px-2 rounded-lg">+</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <button class="bg-Platinum text-black rounded-xl px-4 py-3 w-fit">
          Save and continue
        </button>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Checkout",
  components: {
    Navbar,
    Footer,
  },
};
</script>
