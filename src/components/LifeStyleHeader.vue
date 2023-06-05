<template>
  <div class="life-bg">
    <div
      class="min-h-[calc(65vh-80px)] md:min-h-[calc(100vh-80px)] flex flex-row items-end space-x-4"
    >
      <div class="w-[35%] md:w-[10%]">
        <div class="w-full grid grid-rows-2 gap-y-4">
          <div class="bg-GreyCloud row-span-2 h-[25vh] md:h-[55vh]">
            <img
              src="../assets/images/ima-1.png"
              class="h-full w-full"
              alt=""
            />
          </div>
          <div class="bg-GreyCloud h-[10vh] md:h-[20vh]">
            <img
              src="../assets/images/ima-6.png"
              class="h-full w-full "
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="grow">
        <div class="flex flex-col space-y-4">
          <div
            class="font-windsor-pro-black text-white text-center text-3xl md:text-5xl"
          >
            <h3>LIFESTYLE (COMING SOON)</h3>
          </div>
          <p class="text-center">
             Elevate your style with innovative,<br />
                fashion-forward clothing accessories.
          </p>
          <div class="flex flex-row space-x-4">
            <div class="w-full bg-GreyCloud">
              <img
                src="../assets/images/ima-2.png"
                class="h-full w-full"
                alt=""
              />
            </div>
            <div class="w-full mt-16 bg-GreyCloud">
              <img
                src="../assets/images/ima-3.png"
                class="h-full w-full"
                alt=""
              />
            </div>
            <div class="w-full mt-16 bg-GreyCloud">
              <img
                src="../assets/images/ima-4.png"
                class="h-full w-full"
                alt=""
              />
            </div>
            <div class="w-full bg-GreyCloud">
              <img
                src="../assets/images/ima-2.png"
                class="h-full w-full"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div class="w-[35%] md:w-[10%] flex justify-end">
        <div class="grid grid-rows-2 w-full">
          <div class="bg-GreyCloud row-span-2 h-[25vh] md:h-[55vh]">
            <img
              src="../assets/images/ima-5.png"
              class="h-full w-full"
              alt=""
            />
          </div>
          <div class="bg-GreyCloud h-[10vh] md:h-[20vh]">
            <img
              src="../assets/images/ima-6.png"
              class="h-full w-full"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LifeStyleHeader",
};
</script>
