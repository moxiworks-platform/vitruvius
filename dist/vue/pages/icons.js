const Icons = {
  template: /*html*/`
    <div class="inner-container">
      <h2>Icons</h2>

      <div class="v-flex">
        <div class="v-flex-item w-1/3">
          <p>
            <vp-input type="text" label="Filter Icons" name="filter-icons" id="filter-icons" v-on:keyup="filterIcons($event)"></vp-input>
          </p>
        </div>
      </div>

      <div class="flex flex-wrap">
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
          <i class="v-icon-sort text-3xl"></i>
          <div class="text-sm pt-5">Sort</div>
          <div class="text-sm pt-5">.v-icon-sort</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
          <i class="v-icon-down-arrow text-3xl"></i>
          <div class="text-sm pt-5">Down Arrow</div>
          <div class="text-sm pt-5">.v-icon-down-arrow</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
          <i class="v-icon-down-chevron text-3xl"></i>
          <div class="text-sm pt-5">Down Chevron</div>
          <div class="text-sm pt-5">.v-icon-down-chevron</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
          <i class="v-icon-left-arrow text-3xl"></i>
          <div class="text-sm pt-5">Left Arrow</div>
          <div class="text-sm pt-5">.v-icon-left-arrow</div>
        </div>
      </div>

      <div class="flex flex-wrap">
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
          <i class="v-icon-left-chevron text-3xl"></i>
          <div class="text-sm pt-5">Left Chevron</div>
          <div class="text-sm pt-5">.v-icon-left-chevron</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
          <i class="v-icon-right-arrow text-3xl"></i>
          <div class="text-sm pt-5">Right Arrow</div>
          <div class="text-sm pt-5">.v-icon-right-arrow</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
          <i class="v-icon-right-chevron text-3xl"></i>
          <div class="text-sm pt-5">Right Chevron</div>
          <div class="text-sm pt-5">.v-icon-right-chevron</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
          <i class="v-icon-up-arrow text-3xl"></i>
          <div class="text-sm pt-5">Up Arrow</div>
          <div class="text-sm pt-5">.v-icon-up-arrow</div>
        </div>
      </div>

      <div class="flex flex-wrap">
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
          <i class="v-icon-up-chevron text-3xl"></i>
          <div class="text-sm pt-5">Up Chevron</div>
          <div class="text-sm pt-5">.v-icon-up-chevron</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
          <i class="v-icon-draw text-3xl"></i>
          <div class="text-sm pt-5">Draw</div>
          <div class="text-sm pt-5">.v-icon-draw</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
          <i class="v-icon-radius text-3xl"></i>
          <div class="text-sm pt-5">Radius</div>
          <div class="text-sm pt-5">.v-icon-radius</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
          <i class="v-icon-location-services text-3xl"></i>
          <div class="text-sm pt-5">Location Services</div>
          <div class="text-sm pt-5">.v-icon-location-services</div>
        </div>
      </div>

      <div class="flex flex-wrap">
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
          <i class="v-icon-location-pin text-3xl"></i>
          <div class="text-sm pt-5">Location Pin</div>
          <div class="text-sm pt-5">.v-icon-location-pin</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
          <i class="v-icon-location-pin-filled text-3xl"></i>
          <div class="text-sm pt-5">Location Pin Filled</div>
          <div class="text-sm pt-5">.v-icon-location-pin-filled</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
          <i class="v-icon-heart text-3xl"></i>
          <div class="text-sm pt-5">Heart</div>
          <div class="text-sm pt-5">.v-icon-heart</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
          <i class="v-icon-heart-filled text-3xl"></i>
          <div class="text-sm pt-5">Heart Filled</div>
          <div class="text-sm pt-5">.v-icon-heart-filled</div>
        </div>
      </div>

      <div class="flex flex-wrap">
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
          <i class="v-icon-heart-broken text-3xl"></i>
          <div class="text-sm pt-5">Heart Broken</div>
          <div class="text-sm pt-5">.v-icon-heart-broken</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
          <i class="v-icon-check text-3xl"></i>
          <div class="text-sm pt-5">Check</div>
          <div class="text-sm pt-5">.v-icon-check</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
          <i class="v-icon-check-circle text-3xl"></i>
          <div class="text-sm pt-5">Check with Circle</div>
          <div class="text-sm pt-5">.v-icon-check-circle</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
          <i class="v-icon-close text-3xl"></i>
          <div class="text-sm pt-5">Close</div>
          <div class="text-sm pt-5">.v-icon-close</div>
        </div>
      </div>

      <div class="flex flex-wrap">
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
          <i class="v-icon-close-circle text-3xl"></i>
          <div class="text-sm pt-5">Close with Circle</div>
          <div class="text-sm pt-5">.v-icon-close-circle</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
          <i class="v-icon-plus text-3xl"></i>
          <div class="text-sm pt-5">Plus</div>
          <div class="text-sm pt-5">.v-icon-plus</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
          <i class="v-icon-add-circle text-3xl"></i>
          <div class="text-sm pt-5">Plus with Circle</div>
          <div class="text-sm pt-5">.v-icon-add-circle</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
          <i class="v-icon-bell path1 text-3xl">
            <i class="v-icon-bell path2"></i>
          </i>
          <div class="text-sm pt-5">Bell</div>
          <div class="text-sm pt-5">.v-icon-bell</div>
        </div>
      </div>

      <div class="flex flex-wrap">
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
          <i class="v-icon-calendar text-3xl"></i>
          <div class="text-sm pt-5">Calendar</div>
          <div class="text-sm pt-5">.v-icon-calendar</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
          <i class="v-icon-chat text-3xl"></i>
          <div class="text-sm pt-5">Chat</div>
          <div class="text-sm pt-5">.v-icon-chat</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
          <i class="v-icon-clock text-3xl"></i>
          <div class="text-sm pt-5">Clock</div>
          <div class="text-sm pt-5">.v-icon-clock</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
          <i class="v-icon-clock-reverse text-3xl"></i>
          <div class="text-sm pt-5">Clock Reverse</div>
          <div class="text-sm pt-5">.v-icon-clock-reverse</div>
        </div>
      </div>

      <div class="flex flex-wrap">
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
          <i class="v-icon-envelope text-3xl"></i>
          <div class="text-sm pt-5">Envelope</div>
          <div class="text-sm pt-5">.v-icon-envelope</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
          <i class="v-icon-expand text-3xl"></i>
          <div class="text-sm pt-5">Expand</div>
          <div class="text-sm pt-5">.v-icon-expand</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
          <i class="v-icon-external-link text-3xl"></i>
          <div class="text-sm pt-5">External Link</div>
          <div class="text-sm pt-5">.v-icon-external-link</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
          <i class="v-icon-gear text-3xl"></i>
          <div class="text-sm pt-5">Gear</div>
          <div class="text-sm pt-5">.v-icon-gear</div>
        </div>
      </div>

      <div class="flex flex-wrap">
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
          <i class="v-icon-house text-3xl"></i>
          <div class="text-sm pt-5">House</div>
          <div class="text-sm pt-5">.v-icon-house</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
          <i class="v-icon-info-circle text-3xl"></i>
          <div class="text-sm pt-5">Info with Circle</div>
          <div class="text-sm pt-5">.v-icon-info-circle</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
          <i class="v-icon-layers text-3xl"></i>
          <div class="text-sm pt-5">Layers</div>
          <div class="text-sm pt-5">.v-icon-layers</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
          <i class="v-icon-locked text-3xl"></i>
          <div class="text-sm pt-5">Locked</div>
          <div class="text-sm pt-5">.v-icon-locked</div>
        </div>
      </div>

      <div class="flex flex-wrap">
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
          <i class="v-icon-unlocked text-3xl"></i>
          <div class="text-sm pt-5">Unlocked</div>
          <div class="text-sm pt-5">.v-icon-unlocked</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
          <i class="v-icon-magnifying-glass text-3xl"></i>
          <div class="text-sm pt-5">Magnifying Glass</div>
          <div class="text-sm pt-5">.v-icon-magnifying-glass</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
          <i class="v-icon-money-circle text-3xl"></i>
          <div class="text-sm pt-5">Money with Circle</div>
          <div class="text-sm pt-5">.v-icon-money-circle</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
          <i class="v-icon-more--vertical text-3xl"></i>
          <div class="text-sm pt-5">More Virtical</div>
          <div class="text-sm pt-5">.v-icon-more--vertical</div>
        </div>
      </div>

      <div class="flex flex-wrap">
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
          <i class="v-icon-no-show text-3xl"></i>
          <div class="text-sm pt-5">No Show</div>
          <div class="text-sm pt-5">.v-icon-no-show</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
          <i class="v-icon-page text-3xl"></i>
          <div class="text-sm pt-5">Page</div>
          <div class="text-sm pt-5">.v-icon-page</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
          <i class="v-icon-pencil text-3xl"></i>
          <div class="text-sm pt-5">Pencil</div>
          <div class="text-sm pt-5">.v-icon-pencil</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
          <i class="v-icon-person text-3xl"></i>
          <div class="text-sm pt-5">Person</div>
          <div class="text-sm pt-5">.v-icon-person</div>
        </div>
      </div>

      <div class="flex flex-wrap">
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
          <i class="v-icon-question-circle text-3xl"></i>
          <div class="text-sm pt-5">Question with Circle</div>
          <div class="text-sm pt-5">.v-icon-question-circle</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
          <i class="v-icon-star text-3xl"></i>
          <div class="text-sm pt-5">Star</div>
          <div class="text-sm pt-5">.v-icon-star</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
          <i class="v-icon-pencil text-3xl"></i>
          <div class="text-sm pt-5">Pencil</div>
          <div class="text-sm pt-5">.v-icon-pencil</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
          <i class="v-icon-trash text-3xl"></i>
          <div class="text-sm pt-5">Trash</div>
          <div class="text-sm pt-5">.v-icon-Trash</div>
        </div>
      </div>

      <div class="flex flex-wrap">
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
          <i class="v-icon-video text-3xl"></i>
          <div class="text-sm pt-5">Video</div>
          <div class="text-sm pt-5">.v-icon-video</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
          <i class="v-icon-attention-circle text-3xl"></i>
          <div class="text-sm pt-5">Attention</div>
          <div class="text-sm pt-5">.v-icon-attention-circle</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
          <i class="v-icon-facebook text-3xl"></i>
          <div class="text-sm pt-5">Facebook</div>
          <div class="text-sm pt-5">.v-icon-facebook</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
          <i class="v-icon-google text-3xl"></i>
          <div class="text-sm pt-5">Google</div>
          <div class="text-sm pt-5">.v-icon-google</div>
        </div>
      </div>

      <div class="flex flex-wrap">
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
          <i class="v-icon-pinterest text-3xl"></i>
          <div class="text-sm pt-5">Pinterest</div>
          <div class="text-sm pt-5">.v-icon-pinterest</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
          <i class="v-icon-twitter text-3xl"></i>
          <div class="text-sm pt-5">Twitter</div>
          <div class="text-sm pt-5">.v-icon-twitter</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
          <i class="v-icon-credit-card text-3xl"></i>
          <div class="text-sm pt-5">Credit Card</div>
          <div class="text-sm pt-5">.v-icon-credit-card</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
          <i class="v-icon-camera text-3xl"></i>
          <div class="text-sm pt-5">Camera</div>
          <div class="text-sm pt-5">.v-icon-camera</div>
        </div>
      </div>

      <div class="flex flex-wrap">
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
          <i class="v-icon-phone text-3xl"></i>
          <div class="text-sm pt-5">Phone</div>
          <div class="text-sm pt-5">.v-icon-phone</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
          <i class="v-icon-printer text-3xl"></i>
          <div class="text-sm pt-5">Printer</div>
          <div class="text-sm pt-5">.v-icon-printer</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
          <i class="v-icon-school-outline text-3xl"></i>
          <div class="text-sm pt-5">School Outline</div>
          <div class="text-sm pt-5">.v-icon-school-outline</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
          <i class="v-icon-car text-3xl"></i>
          <div class="text-sm pt-5">Car</div>
          <div class="text-sm pt-5">.v-icon-car</div>
        </div>
      </div>

      <div class="flex flex-wrap">
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
          <i class="v-icon-school text-3xl"></i>
          <div class="text-sm pt-5">School</div>
          <div class="text-sm pt-5">.v-icon-school</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
          <i class="v-icon-bath text-3xl"></i>
          <div class="text-sm pt-5">Bath</div>
          <div class="text-sm pt-5">.v-icon-bath</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
          <i class="v-icon-bed text-3xl"></i>
          <div class="text-sm pt-5">Bed</div>
          <div class="text-sm pt-5">.v-icon-bed</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
          <i class="v-icon-multi-family text-3xl"></i>
          <div class="text-sm pt-5">Multi-Family</div>
          <div class="text-sm pt-5">.v-icon-multi-family</div>
        </div>
      </div>

      <div class="flex flex-wrap">
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
          <i class="v-icon-condo text-3xl"></i>
          <div class="text-sm pt-5">Condo</div>
          <div class="text-sm pt-5">.v-icon-condo</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
          <i class="v-icon-farm text-3xl"></i>
          <div class="text-sm pt-5">Farm</div>
          <div class="text-sm pt-5">.v-icon-farm</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
          <i class="v-icon-house-property text-3xl"></i>
          <div class="text-sm pt-5">House Property</div>
          <div class="text-sm pt-5">.v-icon-house-property</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
          <i class="v-icon-land text-3xl"></i>
          <div class="text-sm pt-5">Land</div>
          <div class="text-sm pt-5">.v-icon-land</div>
        </div>
      </div>

      <div class="flex flex-wrap">
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
          <i class="v-icon-townhouse text-3xl"></i>
          <div class="text-sm pt-5">Townhouse</div>
          <div class="text-sm pt-5">.v-icon-townhouse</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
          <i class="v-icon-caret-down text-3xl"></i>
          <div class="text-sm pt-5">Caret Down</div>
          <div class="text-sm pt-5">.v-icon-caret-down</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
          <i class="v-icon-caret-left text-3xl"></i>
          <div class="text-sm pt-5">Caret Left</div>
          <div class="text-sm pt-5">.v-icon-caret-left</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
          <i class="v-icon-caret-right text-3xl"></i>
          <div class="text-sm pt-5">Caret Right</div>
          <div class="text-sm pt-5">.v-icon-caret-right</div>
        </div>
      </div>

      <div class="flex flex-wrap">
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
          <i class="v-icon-caret-up text-3xl"></i>
          <div class="text-sm pt-5">Caret Up</div>
          <div class="text-sm pt-5">.v-icon-caret-up</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
          <i class="v-icon-sort-table-header text-3xl"></i>
          <div class="text-sm pt-5">Sort Table Header</div>
          <div class="text-sm pt-5">.v-icon-sort-table-header</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
          <i class="v-icon-people text-3xl"></i>
          <div class="text-sm pt-5">People</div>
          <div class="text-sm pt-5">.v-icon-people</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
          <i class="v-icon-google1 text-3xl"></i>
          <div class="text-sm pt-5">Google</div>
          <div class="text-sm pt-5">.v-icon-google1</div>
        </div>
      </div>

      <div class="flex flex-wrap">
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
          <i class="v-icon-draft text-3xl"></i>
          <div class="text-sm pt-5">Draft</div>
          <div class="text-sm pt-5">.v-icon-draft</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
          <i class="v-icon-play-circle text-3xl"></i>
          <div class="text-sm pt-5">Play</div>
          <div class="text-sm pt-5">.v-icon-play-circle</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
          <i class="v-icon-map text-3xl"></i>
          <div class="text-sm pt-5">Map</div>
          <div class="text-sm pt-5">.v-icon-map</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
          <i class="v-icon-signature text-3xl"></i>
          <div class="text-sm pt-5">Signature</div>
          <div class="text-sm pt-5">.v-icon-signature</div>
        </div>
      </div>

      <div class="flex flex-wrap">
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
          <i class="v-icon-activity text-3xl"></i>
          <div class="text-sm pt-5">Activity</div>
          <div class="text-sm pt-5">.v-icon-activity</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
          <i class="v-icon-blogger text-3xl"></i>
          <div class="text-sm pt-5">Activity</div>
          <div class="text-sm pt-5">.v-icon-blogger</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
          <i class="v-icon-instagram text-3xl"></i>
          <div class="text-sm pt-5">Instagram</div>
          <div class="text-sm pt-5">.v-icon-instagram</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
          <i class="v-icon-youtube text-3xl"></i>
          <div class="text-sm pt-5">YouTube</div>
          <div class="text-sm pt-5">.v-icon-youtube</div>
        </div>
      </div>

      <div class="flex flex-wrap">
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
          <i class="v-icon-filter text-3xl"></i>
          <div class="text-sm pt-5">Filter</div>
          <div class="text-sm pt-5">.v-icon-filter</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
          <i class="v-icon-linkedin text-3xl"></i>
          <div class="text-sm pt-5">LinkedIn</div>
          <div class="text-sm pt-5">.v-icon-linkedin</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
          <i class="v-icon-log-activity text-3xl"></i>
          <div class="text-sm pt-5">Activity</div>
          <div class="text-sm pt-5">.v-icon-log-activity</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
          <i class="v-icon-search text-3xl"></i>
          <div class="text-sm pt-5">Search</div>
          <div class="text-sm pt-5">.v-icon-search</div>
        </div>
      </div>

      <div class="flex flex-wrap">
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
          <i class="v-icon-phone1 text-3xl"></i>
          <div class="text-sm pt-5">Phone</div>
          <div class="text-sm pt-5">.v-icon-phone1</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
          <i class="v-icon-sync text-3xl"></i>
          <div class="text-sm pt-5">Sync</div>
          <div class="text-sm pt-5">.v-icon-sync</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-30 p-15 text-center mb-4">
          <i class="v-icon-add-people text-3xl"></i>
          <div class="text-sm pt-5">Add People</div>
          <div class="text-sm pt-5">.v-icon-add-people</div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 bg-cn-15 p-15 text-center mb-4">
          <i class="v-icon-facebook-alt text-3xl"></i>
          <div class="text-sm pt-5">Facebook</div>
          <div class="text-sm pt-5">.v-icon-facebook-alt</div>
        </div>
      </div>

    </div>
  `,
  mounted() {
    this.elems = document.querySelectorAll('.text-sm.pt-5');
  },
  methods: {
    filterIcons(e) {
      const val = e.target.value;
      [].forEach.call(this.elems, (div) => {
        if (div.innerHTML.indexOf(val.toLowerCase()) === -1) {
          div.parentNode.style.display = 'none';
        } else {
          div.parentNode.style.display = 'block';
        }
      });
    }
  }
}
