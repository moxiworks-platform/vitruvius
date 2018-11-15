<template>
  <section id="icons">
    <h1 class="mb-30">Icons</h1>

    <div class="v-flex">
      <div class="v-flex-item w-1/3">
        <p>
          <input type="text" name="filter-icons" id="filter-icons" placeholder="Filter Icons" v-on:keyup="filterIcons($event)" />
        </p>
      </div>
    </div>

    <div class="flex flex-wrap">
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
        <i class="icon-sort text-3xl"></i>
        <div class="text-sm pt-5">Sort</div>
        <div class="text-sm pt-5">.icon-sort</div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
        <i class="icon-down-arrow text-3xl"></i>
        <div class="text-sm pt-5">Down Arrow</div>
        <div class="text-sm pt-5">.icon-down-arrow</div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
        <i class="icon-down-chevron text-3xl"></i>
        <div class="text-sm pt-5">Down Chevron</div>
        <div class="text-sm pt-5">.icon-down-chevron</div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
        <i class="icon-left-arrow text-3xl"></i>
        <div class="text-sm pt-5">Left Arrow</div>
        <div class="text-sm pt-5">.icon-left-arrow</div>
      </div>
    </div>

    <div class="flex flex-wrap">
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
        <i class="icon-left-chevron text-3xl"></i>
        <div class="text-sm pt-5">Left Chevron</div>
        <div class="text-sm pt-5">.icon-left-chevron</div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
        <i class="icon-right-arrow text-3xl"></i>
        <div class="text-sm pt-5">Right Arrow</div>
        <div class="text-sm pt-5">.icon-right-arrow</div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
        <i class="icon-right-chevron text-3xl"></i>
        <div class="text-sm pt-5">Right Chevron</div>
        <div class="text-sm pt-5">.icon-right-chevron</div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
        <i class="icon-up-arrow text-3xl"></i>
        <div class="text-sm pt-5">Up Arrow</div>
        <div class="text-sm pt-5">.icon-up-arrow</div>
      </div>
    </div>

    <div class="flex flex-wrap">
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
        <i class="icon-up-chevron text-3xl"></i>
        <div class="text-sm pt-5">Up Chevron</div>
        <div class="text-sm pt-5">.icon-up-chevron</div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
        <i class="icon-draw text-3xl"></i>
        <div class="text-sm pt-5">Draw</div>
        <div class="text-sm pt-5">.icon-draw</div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
        <i class="icon-radius text-3xl"></i>
        <div class="text-sm pt-5">Radius</div>
        <div class="text-sm pt-5">.icon-radius</div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
        <i class="icon-location-services text-3xl"></i>
        <div class="text-sm pt-5">Location Services</div>
        <div class="text-sm pt-5">.icon-location-services</div>
      </div>
    </div>

    <div class="flex flex-wrap">
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
        <i class="icon-location-pin text-3xl"></i>
        <div class="text-sm pt-5">Location Pin</div>
        <div class="text-sm pt-5">.icon-location-pin</div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
        <i class="icon-location-pin-filled text-3xl"></i>
        <div class="text-sm pt-5">Location Pin Filled</div>
        <div class="text-sm pt-5">.icon-location-pin-filled</div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
        <i class="icon-heart text-3xl"></i>
        <div class="text-sm pt-5">Heart</div>
        <div class="text-sm pt-5">.icon-heart</div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
        <i class="icon-heart-filled text-3xl"></i>
        <div class="text-sm pt-5">Heart Filled</div>
        <div class="text-sm pt-5">.icon-heart-filled</div>
      </div>
    </div>

    <div class="flex flex-wrap">
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
        <i class="icon-heart-broken text-3xl"></i>
        <div class="text-sm pt-5">Heart Broken</div>
        <div class="text-sm pt-5">.icon-heart-broken</div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
        <i class="icon-check text-3xl"></i>
        <div class="text-sm pt-5">Check</div>
        <div class="text-sm pt-5">.icon-check</div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
        <i class="icon-check-circle text-3xl"></i>
        <div class="text-sm pt-5">Check with Circle</div>
        <div class="text-sm pt-5">.icon-check-circle</div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
        <i class="icon-close text-3xl"></i>
        <div class="text-sm pt-5">Close</div>
        <div class="text-sm pt-5">.icon-close</div>
      </div>
    </div>

    <div class="flex flex-wrap">
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
        <i class="icon-close-circle text-3xl"></i>
        <div class="text-sm pt-5">Close with Circle</div>
        <div class="text-sm pt-5">.icon-close-circle</div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
        <i class="icon-plus text-3xl"></i>
        <div class="text-sm pt-5">Plus</div>
        <div class="text-sm pt-5">.icon-plus</div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
        <i class="icon-add-circle text-3xl"></i>
        <div class="text-sm pt-5">Plus with Circle</div>
        <div class="text-sm pt-5">.icon-add-circle</div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
        <i class="icon-bell path1 text-3xl">
          <i class="icon-bell path2"></i>
        </i>
        <div class="text-sm pt-5">Bell</div>
        <div class="text-sm pt-5">.icon-bell</div>
      </div>
    </div>

    <div class="flex flex-wrap">
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
        <i class="icon-calendar text-3xl"></i>
        <div class="text-sm pt-5">Calendar</div>
        <div class="text-sm pt-5">.icon-calendar</div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
        <i class="icon-chat text-3xl"></i>
        <div class="text-sm pt-5">Chat</div>
        <div class="text-sm pt-5">.icon-chat</div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
        <i class="icon-clock text-3xl"></i>
        <div class="text-sm pt-5">Clock</div>
        <div class="text-sm pt-5">.icon-clock</div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
        <i class="icon-clock-reverse text-3xl"></i>
        <div class="text-sm pt-5">Clock Reverse</div>
        <div class="text-sm pt-5">.icon-clock-reverse</div>
      </div>
    </div>

    <div class="flex flex-wrap">
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
        <i class="icon-envelope text-3xl"></i>
        <div class="text-sm pt-5">Envelope</div>
        <div class="text-sm pt-5">.icon-envelope</div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
        <i class="icon-expand text-3xl"></i>
        <div class="text-sm pt-5">Expand</div>
        <div class="text-sm pt-5">.icon-expand</div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
        <i class="icon-external-link text-3xl"></i>
        <div class="text-sm pt-5">External Link</div>
        <div class="text-sm pt-5">.icon-external-link</div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
        <i class="icon-gear text-3xl"></i>
        <div class="text-sm pt-5">Gear</div>
        <div class="text-sm pt-5">.icon-gear</div>
      </div>
    </div>

    <div class="flex flex-wrap">
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
        <i class="icon-house text-3xl"></i>
        <div class="text-sm pt-5">House</div>
        <div class="text-sm pt-5">.icon-house</div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
        <i class="icon-info-circle text-3xl"></i>
        <div class="text-sm pt-5">Info with Circle</div>
        <div class="text-sm pt-5">.icon-info-circle</div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
        <i class="icon-layers text-3xl"></i>
        <div class="text-sm pt-5">Layers</div>
        <div class="text-sm pt-5">.icon-layers</div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
        <i class="icon-locked text-3xl"></i>
        <div class="text-sm pt-5">Locked</div>
        <div class="text-sm pt-5">.icon-locked</div>
      </div>
    </div>

    <div class="flex flex-wrap">
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
        <i class="icon-unlocked text-3xl"></i>
        <div class="text-sm pt-5">Unlocked</div>
        <div class="text-sm pt-5">.icon-unlocked</div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
        <i class="icon-magnifying-glass text-3xl"></i>
        <div class="text-sm pt-5">Magnifying Glass</div>
        <div class="text-sm pt-5">.icon-magnifying-glass</div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
        <i class="icon-money-circle text-3xl"></i>
        <div class="text-sm pt-5">Money with Circle</div>
        <div class="text-sm pt-5">.icon-money-circle</div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
        <i class="icon-more--vertical text-3xl"></i>
        <div class="text-sm pt-5">More Virtical</div>
        <div class="text-sm pt-5">.icon-more--vertical</div>
      </div>
    </div>

    <div class="flex flex-wrap">
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
        <i class="icon-no-show text-3xl"></i>
        <div class="text-sm pt-5">No Show</div>
        <div class="text-sm pt-5">.icon-no-show</div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
        <i class="icon-page text-3xl"></i>
        <div class="text-sm pt-5">Page</div>
        <div class="text-sm pt-5">.icon-page</div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
        <i class="icon-pencil text-3xl"></i>
        <div class="text-sm pt-5">Pencil</div>
        <div class="text-sm pt-5">.icon-pencil</div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
        <i class="icon-person text-3xl"></i>
        <div class="text-sm pt-5">Person</div>
        <div class="text-sm pt-5">.icon-person</div>
      </div>
    </div>

    <div class="flex flex-wrap">
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
        <i class="icon-question-circle text-3xl"></i>
        <div class="text-sm pt-5">Question with Circle</div>
        <div class="text-sm pt-5">.icon-question-circle</div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
        <i class="icon-star text-3xl"></i>
        <div class="text-sm pt-5">Star</div>
        <div class="text-sm pt-5">.icon-star</div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
        <i class="icon-pencil text-3xl"></i>
        <div class="text-sm pt-5">Pencil</div>
        <div class="text-sm pt-5">.icon-pencil</div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
        <i class="icon-trash text-3xl"></i>
        <div class="text-sm pt-5">Trash</div>
        <div class="text-sm pt-5">.icon-Trash</div>
      </div>
    </div>

    <div class="flex flex-wrap">
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
        <i class="icon-video text-3xl"></i>
        <div class="text-sm pt-5">Video</div>
        <div class="text-sm pt-5">.icon-video</div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
        <i class="icon-attention-circle text-3xl"></i>
        <div class="text-sm pt-5">Attention</div>
        <div class="text-sm pt-5">.icon-attention-circle</div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
        <i class="icon-facebook text-3xl"></i>
        <div class="text-sm pt-5">Facebook</div>
        <div class="text-sm pt-5">.icon-facebook</div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
        <i class="icon-google text-3xl"></i>
        <div class="text-sm pt-5">Google</div>
        <div class="text-sm pt-5">.icon-google</div>
      </div>
    </div>

    <div class="flex flex-wrap">
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
        <i class="icon-pinterest text-3xl"></i>
        <div class="text-sm pt-5">Pinterest</div>
        <div class="text-sm pt-5">.icon-pinterest</div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
        <i class="icon-twitter text-3xl"></i>
        <div class="text-sm pt-5">Twitter</div>
        <div class="text-sm pt-5">.icon-twitter</div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
        <i class="icon-credit-card text-3xl"></i>
        <div class="text-sm pt-5">Credit Card</div>
        <div class="text-sm pt-5">.icon-credit-card</div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
        <i class="icon-camera text-3xl"></i>
        <div class="text-sm pt-5">Camera</div>
        <div class="text-sm pt-5">.icon-camera</div>
      </div>
    </div>

    <div class="flex flex-wrap">
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
        <i class="icon-phone text-3xl"></i>
        <div class="text-sm pt-5">Phone</div>
        <div class="text-sm pt-5">.icon-phone</div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
        <i class="icon-printer text-3xl"></i>
        <div class="text-sm pt-5">Printer</div>
        <div class="text-sm pt-5">.icon-printer</div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
        <i class="icon-school-outline text-3xl"></i>
        <div class="text-sm pt-5">School Outline</div>
        <div class="text-sm pt-5">.icon-school-outline</div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
        <i class="icon-car text-3xl"></i>
        <div class="text-sm pt-5">Car</div>
        <div class="text-sm pt-5">.icon-car</div>
      </div>
    </div>

    <div class="flex flex-wrap">
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
        <i class="icon-school text-3xl"></i>
        <div class="text-sm pt-5">School</div>
        <div class="text-sm pt-5">.icon-school</div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
        <i class="icon-bath text-3xl"></i>
        <div class="text-sm pt-5">Bath</div>
        <div class="text-sm pt-5">.icon-bath</div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
        <i class="icon-bed text-3xl"></i>
        <div class="text-sm pt-5">Bed</div>
        <div class="text-sm pt-5">.icon-bed</div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
        <i class="icon-multi-family text-3xl"></i>
        <div class="text-sm pt-5">Multi-Family</div>
        <div class="text-sm pt-5">.icon-multi-family</div>
      </div>
    </div>

    <div class="flex flex-wrap">
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
        <i class="icon-condo text-3xl"></i>
        <div class="text-sm pt-5">Condo</div>
        <div class="text-sm pt-5">.icon-condo</div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
        <i class="icon-farm text-3xl"></i>
        <div class="text-sm pt-5">Farm</div>
        <div class="text-sm pt-5">.icon-farm</div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
        <i class="icon-house-property text-3xl"></i>
        <div class="text-sm pt-5">House Property</div>
        <div class="text-sm pt-5">.icon-house-property</div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
        <i class="icon-land text-3xl"></i>
        <div class="text-sm pt-5">Land</div>
        <div class="text-sm pt-5">.icon-land</div>
      </div>
    </div>

    <div class="flex flex-wrap">
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
        <i class="icon-townhouse text-3xl"></i>
        <div class="text-sm pt-5">Townhouse</div>
        <div class="text-sm pt-5">.icon-townhouse</div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
        <i class="icon-caret-down text-3xl"></i>
        <div class="text-sm pt-5">Caret Down</div>
        <div class="text-sm pt-5">.icon-caret-down</div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
        <i class="icon-caret-left text-3xl"></i>
        <div class="text-sm pt-5">Caret Left</div>
        <div class="text-sm pt-5">.icon-caret-left</div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
        <i class="icon-caret-right text-3xl"></i>
        <div class="text-sm pt-5">Caret Right</div>
        <div class="text-sm pt-5">.icon-caret-right</div>
      </div>
    </div>

    <div class="flex flex-wrap">
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
        <i class="icon-caret-up text-3xl"></i>
        <div class="text-sm pt-5">Caret Up</div>
        <div class="text-sm pt-5">.icon-caret-up</div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
        <i class="icon-sort-table-header text-3xl"></i>
        <div class="text-sm pt-5">Sort Table Header</div>
        <div class="text-sm pt-5">.icon-sort-table-header</div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
        <i class="icon-people text-3xl"></i>
        <div class="text-sm pt-5">People</div>
        <div class="text-sm pt-5">.icon-people</div>
      </div>
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
        <i class="icon-google1 text-3xl"></i>
        <div class="text-sm pt-5">Google</div>
        <div class="text-sm pt-5">.icon-google1</div>
      </div>
    </div>

    <div class="flex flex-wrap">
      <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
        <i class="icon-draft text-3xl"></i>
        <div class="text-sm pt-5">Draft</div>
        <div class="text-sm pt-5">.icon-draft</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'buttons',
  data() {
    return {
      elems: [],
    };
  },
  mounted() {
    this.elems = document.querySelectorAll('.text-sm.pt-5');
  },
  methods: {
    filterIcons(e) {
      const val = e.target.value;
      [].forEach.call(this.elems, (div) => {
        if (div.innerHTML.indexOf(val) === -1) {
          div.parentNode.style.display = 'none';
        } else {
          div.parentNode.style.display = 'block';
        }
      });
    },
  },
};
</script>
