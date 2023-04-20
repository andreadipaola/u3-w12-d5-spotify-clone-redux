const CustomSearchPageMain = () => {
  return (
    <main>
      <header>
        <div class="wrapper">
          <div class="d-flex justify-content-start align-items-center py-3">
            <div class="icon-wrapper">
              <button>
                <svg
                  role="img"
                  height="16"
                  width="16"
                  aria-hidden="true"
                  class="Svg-sc-ytk21e-0 kcBZLg IYDlXmBmmUKHveMzIPCF"
                  viewBox="0 0 16 16"
                  data-encore-id="icon"
                >
                  <path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0z"></path>
                </svg>
              </button>

              <button>
                <svg
                  role="img"
                  height="16"
                  width="16"
                  aria-hidden="true"
                  class="Svg-sc-ytk21e-0 kcBZLg IYDlXmBmmUKHveMzIPCF"
                  viewBox="0 0 16 16"
                  data-encore-id="icon"
                >
                  <path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0z"></path>
                </svg>
              </button>
            </div>

            {/* <div class="form-container">
            <form id="formSearch" class="d-flex align-items-center" role="search">
              <svg role="img" height="24" width="24" aria-hidden="true" class="Svg-sc-ytk21e-0 uPxdw search-icon" viewBox="0 0 24 24" data-encore-id="icon">
                <path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 1 0 1.414-1.414l-4.344-4.344a9.157 9.157 0 0 0 2.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"></path>
              </svg>
              <input class="form-control" type="search" placeholder="Cosa vuoi ascoltare?" aria-label="Search"/>
            </form>   
          </div> */}

            <div class="ms-auto">
              <button class="btn btn-outline-light rounded-pill upgradeBtn me-3">Effettua l'upgrade</button>
              <button
                class="btn btn-outline-light rounded-pill userBtn"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasDark"
                aria-controls="offcanvasDark"
              >
                <div>
                  <svg
                    role="img"
                    height="16"
                    width="16"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    data-encore-id="icon"
                    class="Svg-sc-ytk21e-0 uPxdw"
                  >
                    <path d="M6.233.371a4.388 4.388 0 0 1 5.002 1.052c.421.459.713.992.904 1.554.143.421.263 1.173.22 1.894-.078 1.322-.638 2.408-1.399 3.316l-.127.152a.75.75 0 0 0 .201 1.13l2.209 1.275a4.75 4.75 0 0 1 2.375 4.114V16H.382v-1.143a4.75 4.75 0 0 1 2.375-4.113l2.209-1.275a.75.75 0 0 0 .201-1.13l-.126-.152c-.761-.908-1.322-1.994-1.4-3.316-.043-.721.077-1.473.22-1.894a4.346 4.346 0 0 1 .904-1.554c.411-.448.91-.807 1.468-1.052zM8 1.5a2.888 2.888 0 0 0-2.13.937 2.85 2.85 0 0 0-.588 1.022c-.077.226-.175.783-.143 1.323.054.921.44 1.712 1.051 2.442l.002.001.127.153a2.25 2.25 0 0 1-.603 3.39l-2.209 1.275A3.25 3.25 0 0 0 1.902 14.5h12.196a3.25 3.25 0 0 0-1.605-2.457l-2.209-1.275a2.25 2.25 0 0 1-.603-3.39l.127-.153.002-.001c.612-.73.997-1.52 1.052-2.442.032-.54-.067-1.097-.144-1.323a2.85 2.85 0 0 0-.588-1.022A2.888 2.888 0 0 0 8 1.5z"></path>
                  </svg>
                </div>
                <span>User</span>
                <div>
                  <svg
                    role="img"
                    height="16"
                    width="16"
                    aria-hidden="true"
                    class="Svg-sc-ytk21e-0 uPxdw eAXFT6yvz37fvS1lmt6k"
                    viewBox="0 0 16 16"
                    data-encore-id="icon"
                  >
                    <path d="m14 6-6 6-6-6h12z"></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div class="wrapper">
        <div class="main">
          {/* <!-- questo elemento è più corretto modificarlo in main.main --> */}

          {/* <!-- SEZIONI STATICHE -->
        <!-- "STATIC RESULTS" --> */}
          <section id="popularSong">
            <h2></h2>
            <div class="row g-3">
              <div class="col-5 col-left"></div>
              <div class="col-5 flex-grow-1 col-right"></div>
            </div>
          </section>

          <section id="staticResults" class="goodCards">
            <h2 class="mb-4">Sfoglia tutto</h2>

            <div class="row row-cols-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 g-4">
              {/* <a href="#">
                <div class="col">
                  <div class="card overflow-hidden" style={{ backgroundColor: "rgb(225, 51, 0)" }}>
                    <h3 class="card-title">Podcast</h3>
                    <img src="assets/img/search/image-2.jpg" class="card-img-top img-fluid" alt="" />
                  </div>
                </div>
              </a> */}

              {/* <a href="#">
                <div class="col">
                  <div class="card overflow-hidden" style="background-color: rgb(232, 17, 91)">
                    <h3 class="card-title">Nuove uscite</h3>
                    <img src="assets/img/search/image-26.jpg" class="card-img-top img-fluid" alt="" />
                  </div>
                </div>
              </a>

              <a href="#">
                <div class="col">
                  <div class="card overflow-hidden" style="background-color: rgb(30, 50, 100)">
                    <h3 class="card-title">Creata per te</h3>
                    <img src="assets/img/search/image-42.png" class="card-img-top img-fluid" alt="" />
                  </div>
                </div>
              </a>

              <a href="#">
                <div class="col">
                  <div class="card overflow-hidden" style="background-color: rgb(20, 138, 8)">
                    <h3 class="card-title">Pop</h3>
                    <img src="assets/img/search/image-47.jpg" class="card-img-top img-fluid" alt="" />
                  </div>
                </div>
              </a>

              <a href="#">
                <div class="col">
                  <div class="card overflow-hidden" style="background-color: rgba(141, 103, 171)">
                    <h3 class="card-title">Scopri</h3>
                    <img src="assets/img/search/image-1.jpeg" class="card-img-top img-fluid" alt="" />
                  </div>
                </div>
              </a>

              <a href="#">
                <div class="col">
                  <div class="card overflow-hidden" style="background-color: rgb(205, 245, 100)">
                    <h3 class="card-title">In auto</h3>
                    <img src="assets/img/search/image-11.jpg" class="card-img-top img-fluid" alt="" />
                  </div>
                </div>
              </a>

              <a href="#">
                <div class="col">
                  <div class="card overflow-hidden" style="background-color: rgb(216, 64, 0)">
                    <h3 class="card-title">Dance/Elettronica</h3>
                    <img src="assets/img/search/image-4.jpg" class="card-img-top img-fluid" alt="" />
                  </div>
                </div>
              </a>

              <a href="#">
                <div class="col">
                  <div class="card overflow-hidden" style="background-color: rgb(225, 17, 140)">
                    <h3 class="card-title">Latina</h3>
                    <img src="assets/img/search/image-5.jpg" class="card-img-top img-fluid" alt="" />
                  </div>
                </div>
              </a>

              <a href="#">
                <div class="col">
                  <div class="card overflow-hidden" style="background-color: rgb(233, 20, 41)">
                    <h3 class="card-title">Rock</h3>
                    <img src="assets/img/search/image-7.jpg" class="card-img-top img-fluid" alt="" />
                  </div>
                </div>
              </a>

              <a href="#">
                <div class="col">
                  <div class="card overflow-hidden" style="background-color: rgb(119, 119, 119)">
                    <h3 class="card-title">Allenamento</h3>
                    <img src="assets/img/search/image-8.jpg" class="card-img-top img-fluid" alt="" />
                  </div>
                </div>
              </a>

              <a href="#">
                <div class="col">
                  <div class="card overflow-hidden" style="background-color: rgb(186, 93, 7)">
                    <h3 class="card-title">Anni</h3>
                    <img src="assets/img/search/image-12.jpg" class="card-img-top img-fluid" alt="" />
                  </div>
                </div>
              </a>
              <a href="#">
                <div class="col">
                  <div class="card overflow-hidden" style="background-color: rgba(141, 103, 171)">
                    <h3 class="card-title"></h3>
                    <img src="assets/img/search/image-13.jpeg" class="card-img-top img-fluid" alt="" />
                  </div>
                </div>
              </a>

              <a href="#">
                <div class="col">
                  <div class="card overflow-hidden" style="background-color: rgba(141, 103, 171)">
                    <h3 class="card-title"></h3>
                    <img src="assets/img/search/image-14.jpg" class="card-img-top img-fluid" alt="" />
                  </div>
                </div>
              </a>

              <a href="#">
                <div class="col">
                  <div class="card overflow-hidden" style="background-color: rgba(141, 103, 171)">
                    <h3 class="card-title"></h3>
                    <img src="assets/img/search/image-15.jpg" class="card-img-top img-fluid" alt="" />
                  </div>
                </div>
              </a>

              <a href="#">
                <div class="col">
                  <div class="card overflow-hidden" style="background-color: rgb(220, 20, 140)">
                    <h3 class="card-title">Soul</h3>
                    <img src="assets/img/search/image-16.jpg" class="card-img-top img-fluid" alt="" />
                  </div>
                </div>
              </a>

              <a href="#">
                <div class="col">
                  <div class="card overflow-hidden" style="background-color: rgba(141, 103, 171)">
                    <h3 class="card-title"></h3>
                    <img src="assets/img/search/image-17.jpg" class="card-img-top img-fluid" alt="" />
                  </div>
                </div>
              </a>
              <a href="#">
                <div class="col">
                  <div class="card overflow-hidden" style="background-color: rgb(30, 50, 100)">
                    <h3 class="card-title">Dormire</h3>
                    <img src="assets/img/search/image-18.jpg" class="card-img-top img-fluid" alt="" />
                  </div>
                </div>
              </a>

              <a href="#">
                <div class="col">
                  <div class="card overflow-hidden" style="background-color: rgb(30, 50, 100)">
                    <h3 class="card-title">Punk</h3>
                    <img src="assets/img/search/image-33.jpg" class="card-img-top img-fluid" alt="" />
                  </div>
                </div>
              </a>

              <a href="#">
                <div class="col">
                  <div class="card overflow-hidden" style="background-color: rgb(80, 55, 80)">
                    <h3 class="card-title">Concentrazione</h3>
                    <img src="assets/img/search/image-23.jpg" class="card-img-top img-fluid" alt="" />
                  </div>
                </div>
              </a>

              <a href="#">
                <div class="col">
                  <div class="card overflow-hidden" style="background-color: rgb(83, 122, 161)">
                    <h3 class="card-title">Strumentale</h3>
                    <img src="assets/img/search/image-24.jpg" class="card-img-top img-fluid" alt="" />
                  </div>
                </div>
              </a>

              <a href="#">
                <div class="col">
                  <div class="card overflow-hidden" style="background-color: rgb(216, 64, 0)">
                    <h3 class="card-title">Afro</h3>
                    <img src="assets/img/search/image-28.jpg" class="card-img-top img-fluid" alt="" />
                  </div>
                </div>
              </a>

              <a href="#">
                <div class="col">
                  <div class="card overflow-hidden" style="background-color: rgb(125, 75, 50)">
                    <h3 class="card-title">Classica</h3>
                    <img src="assets/img/search/image-29.jpg" class="card-img-top img-fluid" alt="" />
                  </div>
                </div>
              </a>

              <a href="#">
                <div class="col">
                  <div class="card overflow-hidden" style="background-color: rgb(233, 20, 41)">
                    <h3 class="card-title">Metal</h3>
                    <img src="assets/img/search/image-31.jpg" class="card-img-top img-fluid" alt="" />
                  </div>
                </div>
              </a>

              <a href="#">
                <div class="col">
                  <div class="card overflow-hidden" style="background-color: rgb(233, 20, 41)">
                    <h3 class="card-title">Funk</h3>
                    <img src="assets/img/search/image-32.jpg" class="card-img-top img-fluid" alt="" />
                  </div>
                </div>
              </a>

              <a href="#">
                <div class="col">
                  <div class="card overflow-hidden" style="background-color: rgb(71, 125, 149)">
                    <h3 class="card-title">Ambient</h3>
                    <img src="assets/img/search/image-34.jpg" class="card-img-top img-fluid" alt="" />
                  </div>
                </div>
              </a> */}

              {/* <!-- <a href="#">
              <div class="col">
                <div class="card overflow-hidden" style="background-color: rgba(141, 103, 171)">
                  <h3 class="card-title"></h3>
                  <img src="assets/img/search/image-37.jpeg" class="card-img-top img-fluid" alt=""/>
                </div>
              </div>
            </a> --> */}

              {/* <!-- <div class="col">
              <div class="card p-3">
                <img src="assets/img/main/image-4.jpg" class="card-img-top img-fluid mb-3" alt=""/>
                <div class="card-body p-0">
                  <h3 class="card-title">Discover Weekly</h3>
                  <p class="card-text m-0">Il tuo mixtape settimanale di music...</p>
                </div>
              </div>
            </div>
--> */}
            </div>
          </section>

          {/* <!-- SEZIONE SEARCH RESULTS --> */}
          <section id="searchResult" class="nameSinger">
            <h2></h2>

            <div class="row row-cols-2 row-cols-lg-4 row-cols-xl-4 row-cols-xxl-5 g-3"></div>
          </section>
        </div>
      </div>
      <footer>
        <div class="px-5 pt-5">
          {/* <!-- footer first row --> */}
          <div id="footer-first-row" class="d-flex pb-4 mb-5 flex-wrap">
            <div class="d-flex flex-column mb-4">
              <p>Company</p>
              <a href="#">
                <span>About</span>
              </a>
              <a href="#">
                <span>Jobs</span>
              </a>
              <a href="#">
                <span>For the Record</span>
              </a>
            </div>

            <div class="d-flex flex-column mb-4">
              <p>Communities</p>
              <a href="#">
                <span>For Artists</span>
              </a>
              <a href="#">
                <span>Developers</span>
              </a>
              <a href="#">
                <span>Advertising</span>
              </a>
              <a href="#">
                <span>Investors</span>
              </a>
              <a href="#">
                <span>Vendors</span>
              </a>
            </div>

            <div class="d-flex flex-column mb-4 me-auto">
              <p>Useful links</p>
              <a href="#">
                <span>Support</span>
              </a>
              <a href="#">
                <span>Free Mobile App</span>
              </a>
              <a href="#">
                <span>Consumer rights</span>
              </a>
            </div>

            <div class="flex-nowrap">
              <a class="icon instagram-icon" href="#">
                <svg
                  role="img"
                  height="16"
                  width="16"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  data-encore-id="icon"
                  class="Svg-sc-ytk21e-0 iKzQvb"
                >
                  <path d="M8 1.44c2.136 0 2.389.009 3.233.047.78.036 1.203.166 1.485.276.348.128.663.332.921.598.266.258.47.573.599.921.11.282.24.706.275 1.485.039.844.047 1.097.047 3.233s-.008 2.389-.047 3.232c-.035.78-.166 1.204-.275 1.486a2.654 2.654 0 01-1.518 1.518c-.282.11-.706.24-1.486.275-.843.039-1.097.047-3.233.047s-2.39-.008-3.232-.047c-.78-.035-1.204-.165-1.486-.275a2.477 2.477 0 01-.921-.599 2.477 2.477 0 01-.599-.92c-.11-.282-.24-.706-.275-1.486-.038-.844-.047-1.096-.047-3.232s.009-2.39.047-3.233c.036-.78.166-1.203.275-1.485.129-.348.333-.663.599-.921a2.49 2.49 0 01.92-.599c.283-.11.707-.24 1.487-.275.843-.038 1.096-.047 3.232-.047L8 1.441zm.001-1.442c-2.172 0-2.445.01-3.298.048-.854.04-1.435.176-1.943.373a3.928 3.928 0 00-1.417.923c-.407.4-.722.883-.923 1.417-.198.508-.333 1.09-.372 1.942C.01 5.552 0 5.826 0 8c0 2.172.01 2.445.048 3.298.04.853.174 1.433.372 1.941.2.534.516 1.017.923 1.417.4.407.883.722 1.417.923.508.198 1.09.333 1.942.372.852.039 1.126.048 3.299.048 2.172 0 2.445-.01 3.298-.048.853-.04 1.433-.174 1.94-.372a4.087 4.087 0 002.34-2.34c.199-.508.334-1.09.373-1.942.039-.851.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.04-.853-.174-1.433-.372-1.94a3.924 3.924 0 00-.923-1.418A3.928 3.928 0 0013.24.42c-.508-.197-1.09-.333-1.942-.371-.851-.041-1.125-.05-3.298-.05l.001-.001z"></path>
                  <path d="M8 3.892a4.108 4.108 0 100 8.216 4.108 4.108 0 000-8.216zm0 6.775a2.668 2.668 0 110-5.335 2.668 2.668 0 010 5.335zm4.27-5.978a.96.96 0 100-1.92.96.96 0 000 1.92z"></path>
                </svg>
              </a>
              <a class="icon twitter-icon" href="#">
                <svg
                  role="img"
                  height="16"
                  width="16"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  data-encore-id="icon"
                  class="Svg-sc-ytk21e-0 iKzQvb"
                >
                  <path d="M13.54 3.889a2.968 2.968 0 001.333-1.683 5.937 5.937 0 01-1.929.738 2.992 2.992 0 00-.996-.706 2.98 2.98 0 00-1.218-.254 2.92 2.92 0 00-2.143.889 2.929 2.929 0 00-.889 2.15c0 .212.027.442.08.691a8.475 8.475 0 01-3.484-.932A8.536 8.536 0 011.532 2.54a2.993 2.993 0 00-.413 1.523c0 .519.12 1 .361 1.445.24.445.57.805.988 1.08a2.873 2.873 0 01-1.373-.374v.04c0 .725.23 1.365.69 1.92a2.97 2.97 0 001.739 1.048 2.937 2.937 0 01-1.365.056 2.94 2.94 0 001.063 1.5 2.945 2.945 0 001.77.603 5.944 5.944 0 01-3.77 1.302c-.243 0-.484-.016-.722-.048A8.414 8.414 0 005.15 14c.905 0 1.763-.12 2.572-.361.81-.24 1.526-.57 2.147-.988a9.044 9.044 0 001.683-1.46c.5-.556.911-1.155 1.234-1.798a9.532 9.532 0 00.738-1.988 8.417 8.417 0 00.246-2.429 6.177 6.177 0 001.508-1.563c-.56.249-1.14.407-1.738.476z"></path>
                </svg>
              </a>
              <a class="icon facebook-icon" href="#">
                <svg
                  role="img"
                  height="16"
                  width="16"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  data-encore-id="icon"
                  class="Svg-sc-ytk21e-0 uPxdw"
                >
                  <path d="M16 8a8 8 0 10-9.25 7.903v-5.59H4.719V8H6.75V6.237c0-2.005 1.194-3.112 3.022-3.112.875 0 1.79.156 1.79.156V5.25h-1.008c-.994 0-1.304.617-1.304 1.25V8h2.219l-.355 2.313H9.25v5.59A8.002 8.002 0 0016 8z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* <!-- footer second row --> */}
          <div id="footer-second-row" class="d-flex justify-content-between flex-wrap">
            <div class="mb-3">
              <a href="#">
                <span>Legal</span>
              </a>
              <a href="#">
                <span>Privacy Center</span>
              </a>
              <a href="#">
                <span>Privacy Policy</span>
              </a>
              <a href="#">
                <span>Cookie Settings</span>
              </a>
              <a href="#">
                <span>About Ads</span>
              </a>
            </div>
            <div>
              <span id="copyright" class="me-3">
                &copy; 2023 Spotify AB
              </span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default CustomSearchPageMain;
