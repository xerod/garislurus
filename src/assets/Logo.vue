<template>
  <svg
    width="564"
    height="564"
    viewBox="0 0 564 564"
    :class="!this.color ? 'text-white' : this.color"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="99" y="188.689" width="167" height="42" class="fill-current" />
    <rect
      x="325"
      y="188.689"
      width="187"
      height="42"
      transform="rotate(90 325 188.689)"
      class="fill-current"
    />
    <path
      d="M470.704 188.287L353.26 305.732L323.973 276.445L412.131 188.287L470.704 188.287Z"
      class="fill-current"
    />
    <path
      d="M482 375.282L364.555 257.837L335.269 287.124L423.427 375.282L482 375.282Z"
      class="fill-current"
    />
    <rect x="99" y="261.689" width="167" height="41" class="fill-current" />
    <rect x="99" y="333.689" width="167" height="42" class="fill-current" />
    <rect
      x="99"
      y="375.689"
      width="114"
      height="41"
      transform="rotate(-90 99 375.689)"
      class="fill-current"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M282 524C148.347 524 40 415.653 40 282C40 148.347 148.347 40 282 40C370.993 40 448.766 88.036 490.805 159.594C499.071 148.83 511.844 141.708 526.302 141.05C477.55 56.7324 386.4 -4.56349e-06 282 0C126.256 6.8078e-06 -6.8078e-06 126.256 0 282C6.8078e-06 437.744 126.256 564 282 564C437.744 564 564 437.744 564 282C564 262.638 562.049 243.731 558.332 225.466C550.178 232.054 539.8 236 528.5 236C525.411 236 522.391 235.705 519.467 235.142C522.441 250.302 524 265.969 524 282C524 415.653 415.653 524 282 524ZM515.531 218.309C519.504 220.04 523.89 221 528.5 221C538.996 221 548.331 216.024 554.273 208.302C549.407 190.283 542.8 172.978 534.644 156.58C532.654 156.199 530.6 156 528.5 156C515.446 156 504.19 163.696 499.021 174.799C505.855 188.608 511.41 203.163 515.531 218.309Z"
      class="fill-current"
    />
    <circle
      cx="528.5"
      cy="188.5"
      r="32.5"
      class="fill-current"
      :class="!this.subcolor ? 'text-gray-500' : this.subcolor"
    />
  </svg>
</template>

<script>
export default {
  props: {
    color: String,
    subcolor: String,
  },
};
</script>

<style></style>
