import React from 'react';
import { Svg, Path, G, Rect, Defs, RadialGradient, ClipPath, Stop } from 'react-native-svg';

const FrameHome = () => {
  return (
<Svg width="334" height="118" viewBox="0 0 334 118" fill="none">
<G clipPath="url(#clip0_30_175)">
<Rect width="334" height="118" rx="30" fill="#42C83C"/>
<Path fillRule="evenodd" clipRule="evenodd" d="M334.516 -61.6635C327.755 -54.9191 319.36 -45.6737 316.702 -35.1802C315.871 -31.901 315.6 -28.4986 316.113 -25.0129C315.553 -22.5455 315.316 -20.0106 315.496 -17.4251C315.429 -17.1865 315.365 -16.9472 315.304 -16.7073C314.832 -14.8432 314.541 -12.9393 314.472 -11.0028C314.153 -10.0971 313.873 -9.18081 313.639 -8.25481C313.569 -7.97766 313.502 -7.69964 313.44 -7.42076C307.277 -0.994805 300.58 7.21779 298.258 16.3824C296.927 21.6383 297.033 27.211 299.503 32.9354C301.972 38.6571 306.794 44.5081 314.854 50.338C333.631 63.9195 351.102 64.6009 364.506 65.1236C365.751 65.1721 366.96 65.2193 368.133 65.2753C375.053 65.606 380.594 66.2445 384.45 69.1875C388.286 72.115 390.528 77.3906 390.641 87.1987L391.23 87.2126C391.117 77.3553 388.866 71.8574 384.812 68.763C380.778 65.684 375.033 65.052 368.142 64.7227C366.967 64.6666 365.757 64.6193 364.513 64.5706C351.115 64.0468 333.821 63.3705 315.202 49.904C307.206 44.1198 302.466 38.3467 300.048 32.7435C297.631 27.1429 297.524 21.69 298.831 16.5287C301.038 7.81849 307.27 -0.0502673 313.223 -6.34749L313.217 -6.31736C313.066 -5.98484 312.919 -5.65068 312.777 -5.31491C308.671 -0.207536 305.04 5.61082 303.454 11.8738C302.122 17.1297 302.228 22.7024 304.699 28.4267C307.168 34.1484 311.989 39.9994 320.049 45.8293C338.827 59.4109 356.298 60.0922 369.701 60.615C370.946 60.6635 372.156 60.7107 373.328 60.7667C380.248 61.0973 385.79 61.7358 389.646 64.6788C393.481 67.6064 395.724 72.8819 395.837 82.6901L396.426 82.704C396.312 72.8467 394.061 67.3488 390.007 64.2544C385.973 61.1754 380.229 60.5433 373.337 60.2141C372.163 60.158 370.953 60.1106 369.709 60.062C356.311 59.5381 339.016 58.8619 320.398 45.3954C312.401 39.6112 307.661 33.8381 305.243 28.2349C302.826 22.6343 302.719 17.1814 304.027 12.0201C305.326 6.8944 308.018 2.06012 311.227 -2.33401C309.732 0.396816 308.527 3.25478 307.778 6.21189C306.447 11.4678 306.553 17.0405 309.023 22.7648C311.492 28.4865 316.314 34.3375 324.374 40.1674C343.151 53.749 360.622 54.4303 374.026 54.9531L374.027 54.9531L374.027 54.9531L374.032 54.9533L374.035 54.9534C375.277 55.0019 376.483 55.0489 377.653 55.1048C384.573 55.4354 390.114 56.0739 393.97 59.0169C397.806 61.9445 400.048 67.22 400.161 77.0282L400.75 77.0421C400.637 67.1848 398.386 61.6869 394.332 58.5925C390.298 55.5135 384.553 54.8814 377.662 54.5522C376.487 54.4961 375.277 54.4487 374.033 54.4001C360.635 53.8762 343.341 53.2 324.723 39.7335C316.726 33.9493 311.986 28.1762 309.568 22.573C307.151 16.9724 307.044 11.5195 308.351 6.3582C309.027 3.69017 310.081 1.1011 311.389 -1.38804C311.31 -1.10971 311.234 -0.830471 311.163 -0.550343C309.832 4.70553 309.938 10.2783 312.408 16.0026C314.878 21.7243 319.699 27.5753 327.759 33.4052C346.536 46.9868 364.007 47.6681 377.411 48.1908L377.413 48.1909C378.657 48.2394 379.866 48.2866 381.038 48.3426C387.958 48.6732 393.5 49.3117 397.356 52.2547C401.191 55.1823 403.434 60.4578 403.547 70.2659L404.136 70.2799C404.022 60.4225 401.771 54.9247 397.717 51.8302C393.683 48.7513 387.939 48.1192 381.047 47.7899C379.872 47.7338 378.662 47.6865 377.419 47.6379C364.021 47.114 346.726 46.4378 328.108 32.9713C320.111 27.1871 315.371 21.414 312.953 15.8107C310.536 10.2102 310.429 4.75723 311.737 -0.404034C312.049 -1.63723 312.442 -2.85355 312.904 -4.05095C312.526 -0.0611734 313.062 4.07727 314.884 8.29815C317.353 14.0198 322.174 19.8708 330.234 25.7007C349.012 39.2823 366.483 39.9636 379.887 40.4864C381.131 40.5349 382.341 40.5821 383.513 40.6381C390.434 40.9687 395.975 41.6072 399.831 44.5503C403.666 47.4778 405.909 52.7533 406.022 62.5615L406.611 62.5754C406.497 52.7181 404.246 47.2202 400.192 44.1258C396.158 41.0468 390.414 40.4147 383.522 40.0855C382.348 40.0294 381.138 39.982 379.894 39.9334C366.496 39.4096 349.201 38.7333 330.583 25.2668C322.586 19.4826 317.847 13.7095 315.428 8.10627C313.458 3.54022 313.023 -0.927705 313.638 -5.21945C313.889 -5.60671 314.144 -5.99103 314.405 -6.37233C314.5 -6.48578 314.596 -6.59888 314.691 -6.71159C314.993 -4.55483 315.595 -2.36592 316.549 -0.154374C319.019 5.56731 323.84 11.4183 331.9 17.2482C350.677 30.8298 368.148 31.5111 381.552 32.0339C382.797 32.0824 384.007 32.1296 385.179 32.1856C392.099 32.5162 397.641 33.1547 401.497 36.0977C405.332 39.0253 407.575 44.3008 407.688 54.109L408.277 54.1229C408.163 44.2656 405.912 38.7677 401.858 35.6733C397.824 32.5943 392.08 31.9622 385.188 31.633C384.013 31.5768 382.803 31.5295 381.56 31.4809C368.162 30.957 350.867 30.2808 332.249 16.8143C324.252 11.0301 319.512 5.25697 317.094 -0.346245C316.079 -2.69739 315.472 -5.02251 315.205 -7.31096C315.906 -8.12082 316.613 -8.91048 317.32 -9.67874C317.388 -9.51162 317.458 -9.34437 317.531 -9.17699C320 -3.45531 324.821 2.39571 332.881 8.22558C351.658 21.8072 369.13 22.4885 382.533 23.0112L382.536 23.0113L382.539 23.0114L382.544 23.0116L382.549 23.0118C383.789 23.0602 384.993 23.1072 386.16 23.163C393.08 23.4936 398.622 24.1321 402.478 27.0751C406.313 30.0027 408.556 35.2782 408.669 45.0864L409.258 45.1003C409.144 35.2429 406.893 29.7451 402.839 26.6506C398.805 23.5717 393.061 22.9396 386.169 22.6103C384.995 22.5542 383.784 22.5069 382.541 22.4583C369.143 21.9344 351.848 21.2582 333.23 7.79167C325.233 2.00747 320.493 -3.76565 318.075 -9.36887C317.963 -9.62873 317.856 -9.88828 317.754 -10.1475C318.804 -11.2761 319.85 -12.3569 320.87 -13.3859C323.641 -9.35581 327.684 -5.2851 333.298 -1.22464C352.075 12.357 369.546 13.0383 382.95 13.561C384.194 13.6096 385.404 13.6567 386.576 13.7127C393.497 14.0434 399.038 14.6819 402.894 17.6249C406.729 20.5524 408.972 25.828 409.085 35.6361L409.674 35.65C409.56 25.7927 407.309 20.2948 403.255 17.2004C399.221 14.1214 393.477 13.4894 386.585 13.1601C385.411 13.104 384.201 13.0567 382.957 13.0081C369.559 12.4842 352.264 11.8079 333.646 -1.65856C328.019 -5.72842 324.005 -9.79279 321.278 -13.7964L321.462 -13.9815L321.704 -14.2225L321.268 -14.6095C321.162 -14.5035 321.055 -14.3968 320.948 -14.2895C320.912 -14.3451 320.875 -14.4008 320.839 -14.4564C322.59 -16.4006 324.356 -18.2161 326.028 -19.8844L325.593 -20.2714C323.961 -18.6435 322.233 -16.8698 320.515 -14.9681C320.295 -15.3212 320.086 -15.6738 319.886 -16.0258C322.924 -19.9898 326.328 -23.5687 329.413 -26.6467L328.978 -27.0336C325.951 -24.0143 322.597 -20.4938 319.577 -16.5844C319.251 -17.1866 318.954 -17.7872 318.683 -18.3859C322.399 -24.5081 327.47 -29.9434 331.889 -34.3511L331.453 -34.7381C327.126 -30.4215 322.129 -25.0804 318.396 -19.0433C318.063 -19.8344 317.776 -20.6225 317.532 -21.4072C321.101 -29.7571 327.868 -37.1312 333.554 -42.8037L333.119 -43.1906C327.585 -37.6707 320.957 -30.4754 317.276 -22.2917C317.033 -23.1904 316.846 -24.0844 316.711 -24.9732C316.758 -25.1771 316.807 -25.3806 316.859 -25.5836C319.479 -35.9244 327.772 -45.0791 334.536 -51.8263L334.1 -52.2133C327.528 -45.657 319.411 -36.7372 316.521 -26.6049C316.287 -29.4822 316.582 -32.299 317.275 -35.0339C319.895 -45.3746 328.188 -54.5293 334.952 -61.2765L334.516 -61.6635ZM314.565 -7.74686C314.494 -7.60931 314.425 -7.47146 314.356 -7.33332C314.43 -7.43873 314.504 -7.5439 314.579 -7.64881L314.569 -7.75086L314.565 -7.74686ZM316.271 -9.92485C316.483 -10.1987 316.697 -10.4707 316.912 -10.7407C316.829 -10.9724 316.75 -11.2039 316.674 -11.435C316.291 -10.8284 315.922 -10.2149 315.567 -9.5946C315.736 -9.76488 315.905 -9.93365 316.073 -10.1009L316.271 -9.92485ZM320.538 -13.8775C319.927 -13.2614 319.304 -12.6257 318.676 -11.9715C319.261 -12.6676 319.852 -13.3497 320.446 -14.0171L320.506 -13.9258L320.538 -13.8775ZM320.118 -14.5269C319.907 -14.8621 319.705 -15.197 319.511 -15.5316C318.664 -14.4072 317.85 -13.2528 317.081 -12.0708C317.162 -11.8048 317.248 -11.5384 317.34 -11.2716C318.25 -12.3925 319.182 -13.4786 320.118 -14.5269ZM314.411 -8.72306L314.337 -8.58501C314.382 -8.75153 314.429 -8.91774 314.477 -9.08364C314.48 -9.0107 314.483 -8.93772 314.487 -8.8647L314.411 -8.72306ZM316.445 -12.1698C315.959 -11.4141 315.491 -10.6469 315.045 -9.86909C315.042 -10.2091 315.046 -10.5482 315.057 -10.8863C315.368 -11.7613 315.716 -12.6266 316.097 -13.4815C316.2 -13.0454 316.316 -12.6081 316.445 -12.1698ZM319.196 -16.0872C318.389 -15.0235 317.608 -13.9319 316.867 -12.8145C316.726 -13.331 316.605 -13.846 316.501 -14.3594C317.054 -15.5232 317.666 -16.6667 318.326 -17.7878C318.592 -17.2221 318.882 -16.6552 319.196 -16.0872ZM318.028 -18.4399C318.001 -18.5023 317.974 -18.5648 317.947 -18.6272C317.665 -19.2809 317.413 -19.9326 317.192 -20.5821C316.768 -19.5202 316.398 -18.4431 316.09 -17.3523C316.139 -16.6851 316.216 -16.0146 316.323 -15.341C316.849 -16.392 317.42 -17.4255 318.028 -18.4399ZM315.889 -14.4449C315.806 -14.8681 315.735 -15.2901 315.676 -15.7109C315.471 -14.7852 315.312 -13.8505 315.205 -12.9075C315.421 -13.4238 315.649 -13.9363 315.889 -14.4449ZM316.911 -21.4545C316.588 -20.689 316.292 -19.9151 316.026 -19.1334C316.027 -20.583 316.158 -22.0157 316.4 -23.4287C316.541 -22.7732 316.711 -22.1151 316.911 -21.4545ZM292.347 19.8258C295.006 9.33223 303.401 0.0868259 310.162 -6.65754L310.597 -6.27056C303.833 0.476598 295.54 9.63133 292.92 19.9721C291.613 25.1333 291.72 30.5863 294.137 36.1868C296.555 41.7901 301.295 47.5632 309.292 53.3474C327.91 66.8139 345.204 67.4901 358.602 68.014C359.846 68.0626 361.056 68.1099 362.231 68.166C369.122 68.4953 374.867 69.1274 378.901 72.2064C382.955 75.3008 385.206 80.7986 385.319 90.656L384.731 90.642C384.617 80.8339 382.375 75.5584 378.539 72.6308C374.684 69.6878 369.142 69.0493 362.222 68.7187C361.049 68.6627 359.84 68.6155 358.595 68.5669C345.191 68.0442 327.72 67.3629 308.943 53.7813C300.883 47.9514 296.061 42.1004 293.592 36.3787C291.122 30.6544 291.016 25.0816 292.347 19.8258ZM303.726 -4.08031C296.965 2.66406 288.57 11.9095 285.912 22.403C284.58 27.6589 284.686 33.2316 287.156 38.9559C289.626 44.6776 294.447 50.5287 302.507 56.3585C321.284 69.9401 338.755 70.6214 352.159 71.1442L352.159 71.1442C353.404 71.1927 354.614 71.2399 355.786 71.2959C362.706 71.6265 368.248 72.265 372.104 75.208C375.939 78.1356 378.182 83.4111 378.295 93.2193L378.884 93.2332C378.77 83.3759 376.519 77.878 372.465 74.7836C368.431 71.7046 362.687 71.0725 355.795 70.7433C354.621 70.6872 353.41 70.6398 352.167 70.5912C338.769 70.0674 321.474 69.3911 302.856 55.9246C294.859 50.1404 290.119 44.3673 287.701 38.7641C285.284 33.1635 285.177 27.7106 286.485 22.5493C289.105 12.2086 297.398 3.05383 304.162 -3.69333L303.726 -4.08031ZM279.127 24.3579C281.786 13.8644 290.181 4.61897 296.942 -2.1254L297.377 -1.73842C290.613 5.00874 282.32 14.1635 279.7 24.5042C278.393 29.6655 278.5 35.1184 280.917 40.719C283.335 46.3222 288.075 52.0953 296.071 57.8795C314.689 71.346 331.984 72.0223 345.382 72.5461C346.626 72.5948 347.836 72.6421 349.01 72.6982C355.902 73.0274 361.647 73.6595 365.681 76.7385C369.735 79.8329 371.986 85.3308 372.099 95.1881L371.51 95.1742C371.397 85.3661 369.155 80.0905 365.319 77.163C361.463 74.2199 355.922 73.5814 349.002 73.2508C347.829 73.1948 346.62 73.1476 345.375 73.0991C331.971 72.5764 314.5 71.895 295.723 58.3134C287.663 52.4836 282.841 46.6325 280.372 40.9109C277.902 35.1865 277.795 29.6138 279.127 24.3579ZM289.952 -0.557702C283.191 6.18667 274.796 15.4321 272.138 25.9256C270.806 31.1815 270.912 36.7542 273.383 42.4786C275.852 48.2002 280.673 54.0513 288.734 59.8811C307.511 73.4627 324.982 74.1441 338.386 74.6668C339.63 74.7153 340.84 74.7625 342.012 74.8185C348.933 75.1491 354.474 75.7876 358.33 78.7307C362.165 81.6582 364.408 86.9337 364.521 96.7419L365.11 96.7558C364.996 86.8985 362.745 81.4006 358.691 78.3062C354.657 75.2272 348.913 74.5951 342.021 74.2659C340.847 74.2098 339.637 74.1625 338.393 74.1138C324.995 73.59 307.7 72.9137 289.082 59.4472C281.085 53.663 276.346 47.8899 273.927 42.2867C271.511 36.6861 271.403 31.2332 272.711 26.0719C275.331 15.7312 283.624 6.57644 290.388 -0.17072L289.952 -0.557702ZM265.051 27.3041C267.71 16.8106 276.105 7.56518 282.866 0.820812L283.301 1.20779C276.538 7.95495 268.244 17.1097 265.625 27.4504C264.317 32.6117 264.424 38.0646 266.841 43.6652C269.259 49.2684 273.999 55.0415 281.996 60.8257C300.614 74.2922 317.909 74.9685 331.307 75.4923C332.55 75.541 333.76 75.5883 334.935 75.6444C341.827 75.9737 347.571 76.6057 351.605 79.6847C355.659 82.7791 357.91 88.277 358.024 98.1343L357.435 98.1204C357.322 88.3123 355.079 83.0367 351.243 80.1092C347.388 77.1662 341.846 76.5276 334.926 76.197C333.754 76.141 332.544 76.0938 331.299 76.0453C317.895 75.5226 300.424 74.8412 281.647 61.2597C273.587 55.4298 268.765 49.5788 266.296 43.8571C263.826 38.1327 263.72 32.56 265.051 27.3041ZM275.764 2.16757C269.003 8.91193 260.608 18.1573 257.95 28.6509C256.618 33.9067 256.724 39.4795 259.195 45.2038C261.664 50.9255 266.485 56.7765 274.545 62.6064C293.323 76.188 310.794 76.8693 324.198 77.3921C325.442 77.4406 326.652 77.4878 327.824 77.5438C334.744 77.8744 340.286 78.5129 344.142 81.4559C347.977 84.3835 350.22 89.659 350.333 99.4672L350.922 99.4811C350.808 89.6238 348.557 84.1259 344.503 81.0315C340.469 77.9525 334.725 77.3204 327.833 76.9911C326.659 76.935 325.449 76.8877 324.205 76.8391C310.807 76.3152 293.512 75.639 274.894 62.1725C266.897 56.3883 262.158 50.6152 259.739 45.0119C257.323 39.4114 257.215 33.9584 258.523 28.7972C261.143 18.4564 269.436 9.3017 276.2 2.55455L275.764 2.16757ZM250.891 30.084C253.549 19.5904 261.944 10.345 268.705 3.60068L269.141 3.98766C262.377 10.7348 254.084 19.8896 251.464 30.2303C250.156 35.3916 250.264 40.8445 252.68 46.4451C255.099 52.0483 259.838 57.8214 267.835 63.6056C286.453 77.0721 303.748 77.7483 317.146 78.2722C318.39 78.3208 319.6 78.3682 320.774 78.4243C327.666 78.7535 333.41 79.3856 337.444 82.4646C341.498 85.559 343.749 91.0569 343.863 100.914L343.274 100.9C343.161 91.0921 340.918 85.8166 337.083 82.889C333.227 79.946 327.686 79.3075 320.765 78.9769C319.593 78.9209 318.383 78.8737 317.139 78.8252C303.735 78.3024 286.264 77.6211 267.487 64.0395C259.426 58.2096 254.605 52.3586 252.136 46.6369C249.665 40.9126 249.559 35.3399 250.891 30.084ZM261.736 5.20689C254.975 11.9513 246.58 21.1967 243.921 31.6902C242.59 36.9461 242.696 42.5188 245.166 48.2431C247.636 53.9648 252.457 59.8158 260.517 65.6457C279.294 79.2273 296.765 79.9086 310.169 80.4314L310.169 80.4314C311.414 80.4799 312.624 80.5271 313.796 80.5831C320.716 80.9137 326.258 81.5522 330.114 84.4953C333.949 87.4228 336.192 92.6983 336.305 102.506L336.894 102.52C336.78 92.6631 334.529 87.1652 330.475 84.0708C326.441 80.9918 320.697 80.3597 313.805 80.0305C312.63 79.9744 311.42 79.927 310.177 79.8784C296.779 79.3546 279.484 78.6783 260.866 65.2118C252.869 59.4276 248.129 53.6545 245.711 48.0513C243.294 42.4507 243.187 36.9978 244.495 31.8365C247.115 21.4958 255.408 12.341 262.171 5.59387L261.736 5.20689ZM237.075 33.5295C239.734 23.036 248.129 13.7906 254.89 7.04624L255.325 7.43322C248.562 14.1804 240.268 23.3351 237.649 33.6759C236.341 38.8371 236.448 44.2901 238.865 49.8906C241.283 55.4938 246.023 61.267 254.02 67.0512C272.638 80.5177 289.933 81.1939 303.33 81.7178C304.574 81.7664 305.784 81.8137 306.959 81.8698C313.85 82.1991 319.595 82.8312 323.629 85.9101C327.683 89.0046 329.934 94.5024 330.048 104.36L329.459 104.346C329.346 94.5377 327.103 89.2622 323.267 86.3346C319.412 83.3916 313.87 82.7531 306.95 82.4225C305.778 82.3664 304.568 82.3193 303.323 82.2707L303.323 82.2707C289.919 81.748 272.448 81.0667 253.671 67.4851C245.611 61.6552 240.789 55.8042 238.32 50.0825C235.85 44.3582 235.744 38.7854 237.075 33.5295ZM248.191 9.15866C241.43 15.903 233.035 25.1484 230.377 35.642C229.045 40.8978 229.151 46.4706 231.622 52.1949C234.091 57.9166 238.912 63.7676 246.972 69.5975C265.749 83.1791 283.221 83.8604 296.624 84.3832L296.624 84.3831L296.624 84.3831C297.869 84.4317 299.079 84.4789 300.251 84.5349C307.171 84.8655 312.713 85.504 316.569 88.447C320.404 91.3746 322.647 96.6501 322.76 106.458L323.349 106.472C323.235 96.6148 320.984 91.117 316.93 88.0226C312.896 84.9436 307.152 84.3115 300.26 83.9822C299.086 83.9261 297.875 83.8788 296.632 83.8302C283.234 83.3063 265.939 82.6301 247.321 69.1636C239.324 63.3794 234.584 57.6063 232.166 52.003C229.749 46.4025 229.642 40.9495 230.95 35.7883C233.57 25.4475 241.863 16.2928 248.627 9.54564L248.191 9.15866Z" fill="url(#paint0_radial_30_175)" fill-opacity="0.58"/>
<Path d="M20.82 25V19.41L24.52 25H25.5V17.77H24.52V23.36L20.82 17.77H19.84V25H20.82ZM29.1338 25.12C30.3438 25.12 31.1638 24.53 31.4038 23.48H30.5238C30.3638 24.04 29.8838 24.34 29.1538 24.34C28.2238 24.34 27.6838 23.77 27.6138 22.74L31.3937 22.73V22.38C31.3937 20.93 30.4838 19.97 29.0938 19.97C27.6738 19.97 26.7038 21.03 26.7038 22.56C26.7038 24.08 27.6938 25.12 29.1338 25.12ZM29.0938 20.76C29.9238 20.76 30.4538 21.3 30.4538 22.11H27.6338C27.7538 21.25 28.2738 20.76 29.0938 20.76ZM33.3277 25H34.2577L35.1077 22.39C35.2877 21.8 35.3777 21.48 35.4277 21.24C35.4777 21.51 35.5777 21.89 35.7377 22.38L36.5877 25H37.4777L39.1477 20.11H38.1677L37.3477 22.65C37.2077 23.08 37.1177 23.42 37.0377 23.81C36.9577 23.46 36.7977 22.89 36.7177 22.65L35.9077 20.11H34.9477L34.1277 22.65C34.0177 22.97 33.8877 23.38 33.8077 23.81C33.7177 23.38 33.6177 23.01 33.5077 22.65L32.6977 20.11H31.7277L33.3277 25ZM43.1478 25L43.7878 23.2H46.8278L47.4778 25H48.5078L45.8578 17.77H44.7678L42.1278 25H43.1478ZM45.1878 19.33C45.2378 19.18 45.2878 19.01 45.3078 18.91C45.3278 19.02 45.3778 19.19 45.4278 19.33L46.5378 22.35H44.0878L45.1878 19.33ZM50.2689 25V17.64H49.3289V25H50.2689ZM52.5027 25L52.5727 24.11C52.8927 24.78 53.5427 25.12 54.3127 25.12C55.7327 25.12 56.6127 24.06 56.6127 22.58C56.6127 21.07 55.7727 19.97 54.3727 19.97C53.5727 19.97 52.9127 20.31 52.5927 20.95V17.64H51.6527V25H52.5027ZM52.6027 22.54C52.6027 21.54 53.1827 20.82 54.1427 20.82C55.1027 20.82 55.6727 21.54 55.6727 22.54C55.6727 23.55 55.1027 24.27 54.1427 24.27C53.1827 24.27 52.6027 23.56 52.6027 22.54ZM60.9116 20.11V22.69C60.9116 23.74 60.4416 24.29 59.5816 24.29C58.8616 24.29 58.4116 23.89 58.4116 22.84V20.11H57.4716V23.15C57.4716 24.35 58.1116 25.12 59.2516 25.12C59.9716 25.12 60.6216 24.77 60.9016 24.26L61.0016 25H61.8416V20.11H60.9116ZM64.1454 25V22.1C64.1454 21.32 64.6154 20.83 65.3254 20.83C65.9854 20.83 66.4054 21.25 66.4054 22.02V25H67.3354V22.1C67.3354 21.32 67.8054 20.82 68.5154 20.82C69.1754 20.82 69.6054 21.26 69.6054 22.03V25H70.5254V21.8C70.5254 20.67 69.8454 19.97 68.7254 19.97C67.9654 19.97 67.3754 20.35 67.1454 20.96C66.8954 20.35 66.3554 19.97 65.5954 19.97C64.9054 19.97 64.3854 20.29 64.1354 20.75L64.0454 20.11H63.2054V25H64.1454Z" fill="#FBFBFB"/>
<Path d="M20.092 99H23.81C25.669 99 26.8 98.051 26.8 96.491C26.8 95.373 26.267 94.619 25.227 94.281C26.163 93.891 26.631 93.163 26.631 92.084C26.631 90.537 25.513 89.601 23.68 89.601H20.092V99ZM23.602 90.732C24.707 90.732 25.331 91.265 25.331 92.201C25.331 93.176 24.733 93.748 23.68 93.748H21.366V90.732H23.602ZM23.784 94.853C24.863 94.853 25.487 95.399 25.487 96.335C25.487 97.31 24.876 97.869 23.784 97.869H21.366V94.853H23.784ZM28.7847 91.135C29.2267 91.135 29.5907 90.771 29.5907 90.329C29.5907 89.874 29.2267 89.523 28.7847 89.523C28.3427 89.523 27.9787 89.874 27.9787 90.329C27.9787 90.771 28.3427 91.135 28.7847 91.135ZM28.1867 99H29.4087V92.643H28.1867V99ZM32.4308 99V89.432H31.2088V99H32.4308ZM35.4777 99V89.432H34.2557V99H35.4777ZM37.8746 91.135C38.3166 91.135 38.6806 90.771 38.6806 90.329C38.6806 89.874 38.3166 89.523 37.8746 89.523C37.4326 89.523 37.0686 89.874 37.0686 90.329C37.0686 90.771 37.4326 91.135 37.8746 91.135ZM37.2766 99H38.4986V92.643H37.2766V99ZM43.0157 99.156C44.5887 99.156 45.6547 98.389 45.9667 97.024H44.8227C44.6147 97.752 43.9907 98.142 43.0417 98.142C41.8327 98.142 41.1307 97.401 41.0397 96.062L45.9537 96.049V95.594C45.9537 93.709 44.7707 92.461 42.9637 92.461C41.1177 92.461 39.8567 93.839 39.8567 95.828C39.8567 97.804 41.1437 99.156 43.0157 99.156ZM42.9637 93.488C44.0427 93.488 44.7317 94.19 44.7317 95.243H41.0657C41.2217 94.125 41.8977 93.488 42.9637 93.488ZM56.8143 99V97.817H52.3553V94.84H56.3723V93.709H52.3553V90.771H56.8143V89.601H51.0813V99H56.8143ZM59.0504 91.135C59.4924 91.135 59.8564 90.771 59.8564 90.329C59.8564 89.874 59.4924 89.523 59.0504 89.523C58.6084 89.523 58.2444 89.874 58.2444 90.329C58.2444 90.771 58.6084 91.135 59.0504 91.135ZM58.4524 99H59.6744V92.643H58.4524V99ZM62.6965 99V89.432H61.4745V99H62.6965ZM65.0933 91.135C65.5353 91.135 65.8993 90.771 65.8993 90.329C65.8993 89.874 65.5353 89.523 65.0933 89.523C64.6513 89.523 64.2873 89.874 64.2873 90.329C64.2873 90.771 64.6513 91.135 65.0933 91.135ZM64.4953 99H65.7173V92.643H64.4953V99ZM66.9714 97.154C66.9714 98.363 67.9204 99.156 69.4154 99.156C70.9234 99.156 71.9634 98.389 71.9634 97.18C71.9634 96.231 71.4304 95.737 70.3514 95.477L69.2334 95.204C68.6094 95.048 68.2974 94.762 68.2974 94.333C68.2974 93.748 68.7264 93.41 69.4934 93.41C70.2344 93.41 70.6634 93.813 70.6894 94.45H71.8594C71.8334 93.241 70.9234 92.461 69.5324 92.461C68.1284 92.461 67.1404 93.202 67.1404 94.372C67.1404 95.308 67.6734 95.867 68.8044 96.14L69.9224 96.4C70.5854 96.569 70.7934 96.829 70.7934 97.258C70.7934 97.843 70.2994 98.194 69.4414 98.194C68.6354 98.194 68.1414 97.804 68.1414 97.154H66.9714ZM74.5406 98.987V95.529C74.5406 94.437 75.1776 93.579 76.3606 93.579C77.2706 93.579 77.8816 94.099 77.8816 95.386V99H79.1036V95.113C79.1036 93.488 78.3236 92.461 76.6986 92.461C75.7106 92.461 74.9436 92.929 74.5406 93.618V89.432H73.3186V98.987H74.5406Z" fill="#FBFBFB"/>
<Path d="M22.971 50V44.11H29.127V50H31.559V36.111H29.127V41.849H22.971V36.111H20.539V50H22.971ZM37.0916 50.247C38.5546 50.247 39.8276 49.582 40.2266 48.613L40.3976 50H42.4306V44.3C42.4306 41.697 40.8726 40.329 38.3456 40.329C35.7996 40.329 34.1276 41.659 34.1276 43.692H36.1036C36.1036 42.704 36.8636 42.134 38.2316 42.134C39.4096 42.134 40.1696 42.647 40.1696 43.92V44.129L37.3576 44.338C35.1346 44.509 33.8806 45.592 33.8806 47.321C33.8806 49.088 35.0966 50.247 37.0916 50.247ZM37.8516 48.499C36.8066 48.499 36.2366 48.081 36.2366 47.226C36.2366 46.466 36.7876 45.991 38.2316 45.858L40.1886 45.706V46.2C40.1886 47.644 39.2766 48.499 37.8516 48.499ZM44.7077 54.351H47.0257V48.746C47.6147 49.696 48.8307 50.247 50.2367 50.247C53.0297 50.247 54.6257 48.119 54.6257 45.193C54.6257 42.248 52.8777 40.329 50.2367 40.329C48.8117 40.329 47.5767 40.956 47.0067 42.039L46.8547 40.614H44.7077V54.351ZM47.0447 45.307C47.0447 43.616 48.0897 42.438 49.6857 42.438C51.3197 42.438 52.2887 43.635 52.2887 45.307C52.2887 46.979 51.3197 48.157 49.6857 48.157C48.0897 48.157 47.0447 46.998 47.0447 45.307ZM56.4714 54.351H58.7894V48.746C59.3784 49.696 60.5944 50.247 62.0004 50.247C64.7934 50.247 66.3894 48.119 66.3894 45.193C66.3894 42.248 64.6414 40.329 62.0004 40.329C60.5754 40.329 59.3404 40.956 58.7704 42.039L58.6184 40.614H56.4714V54.351ZM58.8084 45.307C58.8084 43.616 59.8534 42.438 61.4494 42.438C63.0834 42.438 64.0524 43.635 64.0524 45.307C64.0524 46.979 63.0834 48.157 61.4494 48.157C59.8534 48.157 58.8084 46.998 58.8084 45.307ZM69.3941 38.733C70.1541 38.733 70.7811 38.106 70.7811 37.327C70.7811 36.548 70.1541 35.94 69.3941 35.94C68.5961 35.94 67.9691 36.548 67.9691 37.327C67.9691 38.106 68.5961 38.733 69.3941 38.733ZM68.2351 50H70.5531V40.614H68.2351V50ZM77.147 50.247C79.598 50.247 81.308 49.012 81.707 46.96H79.56C79.294 47.853 78.458 48.347 77.185 48.347C75.646 48.347 74.772 47.511 74.601 45.858L81.669 45.839V45.136C81.669 42.21 79.883 40.329 77.071 40.329C74.316 40.329 72.397 42.362 72.397 45.307C72.397 48.214 74.354 50.247 77.147 50.247ZM77.09 42.229C78.477 42.229 79.37 43.084 79.37 44.376H74.658C74.886 42.97 75.722 42.229 77.09 42.229ZM89.4141 40.576C89.0341 40.481 88.7111 40.443 88.3881 40.443C87.1341 40.443 86.2411 41.07 85.8421 42.001L85.7091 40.633H83.5241V50H85.8421V45.44C85.8421 43.616 86.8871 42.723 88.5591 42.723H89.4141V40.576ZM95.2302 38.353H99.2962V50H101.728V38.353H105.794V36.111H95.2302V38.353ZM109.629 50V44.87C109.629 43.464 110.484 42.438 111.947 42.438C113.125 42.438 113.904 43.198 113.904 44.775V50H116.222V44.224C116.222 41.792 115.006 40.329 112.688 40.329C111.339 40.329 110.237 40.918 109.648 41.83V35.864H107.311V50H109.629ZM121.293 50.247C122.756 50.247 124.029 49.582 124.428 48.613L124.599 50H126.632V44.3C126.632 41.697 125.074 40.329 122.547 40.329C120.001 40.329 118.329 41.659 118.329 43.692H120.305C120.305 42.704 121.065 42.134 122.433 42.134C123.611 42.134 124.371 42.647 124.371 43.92V44.129L121.559 44.338C119.336 44.509 118.082 45.592 118.082 47.321C118.082 49.088 119.298 50.247 121.293 50.247ZM122.053 48.499C121.008 48.499 120.438 48.081 120.438 47.226C120.438 46.466 120.989 45.991 122.433 45.858L124.39 45.706V46.2C124.39 47.644 123.478 48.499 122.053 48.499ZM131.227 50V44.946C131.227 43.426 132.101 42.438 133.526 42.438C134.723 42.438 135.502 43.198 135.502 44.775V50H137.82V44.224C137.82 41.792 136.604 40.329 134.248 40.329C132.975 40.329 131.835 40.88 131.246 41.83L131.056 40.614H128.909V50H131.227ZM29.165 76V73.758H22.971V70.072H28.519V67.925H22.971V64.353H29.165V62.111H20.539V76H29.165ZM33.7115 76H35.9915L39.9055 66.614H37.5115L35.8015 70.927C35.4025 71.953 35.0605 72.941 34.9275 73.53C34.8135 73.017 34.4905 72.048 34.0915 70.927L32.4575 66.614H29.9875L33.7115 76ZM44.9731 76.247C47.4241 76.247 49.1341 75.012 49.5331 72.96H47.3861C47.1201 73.853 46.2841 74.347 45.0111 74.347C43.4721 74.347 42.5981 73.511 42.4271 71.858L49.4951 71.839V71.136C49.4951 68.21 47.7091 66.329 44.8971 66.329C42.1421 66.329 40.2231 68.362 40.2231 71.307C40.2231 74.214 42.1801 76.247 44.9731 76.247ZM44.9161 68.229C46.3031 68.229 47.1961 69.084 47.1961 70.376H42.4841C42.7121 68.97 43.5481 68.229 44.9161 68.229ZM57.2403 66.576C56.8603 66.481 56.5373 66.443 56.2143 66.443C54.9603 66.443 54.0673 67.07 53.6683 68.001L53.5353 66.633H51.3503V76H53.6683V71.44C53.6683 69.616 54.7133 68.723 56.3853 68.723H57.2403V66.576Z" fill="#FBFBFB"/>
</G>
<Defs>
<RadialGradient id="paint0_radial_30_175" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(307.981 40.641) rotate(44.6554) scale(82.2368 83.1472)">
<Stop stop-color="white"/>
<Stop offset="1" stop-color="#1E1E1E" stop-opacity="0"/>
<Stop offset="1" stop-color="#0E0E35" stop-opacity="0"/>
<Stop offset="1" stop-color="white" stop-opacity="0"/>
</RadialGradient>
<ClipPath id="clip0_30_175">
<Rect width="334" height="118" rx="30" fill="white"/>
</ClipPath>
</Defs>
</Svg>
  );
}

  export default FrameHome;
