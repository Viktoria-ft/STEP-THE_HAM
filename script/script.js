"use strict";

let tab = function () {
  let tabNav = document.querySelectorAll(".menu__services__item"),
    tabContent = document.querySelectorAll(".item__content"),
    tabName;

  tabNav.forEach((item) => {
    item.addEventListener("click", selectTabNav);
  });
  function selectTabNav() {
    tabNav.forEach((item) => {
      item.classList.remove("is-active");
    });
    this.classList.add("is-active");
    tabName = this.getAttribute("tab-name");
    selectTabContent(tabName);
  }
  function selectTabContent(tabName) {
    tabContent.forEach((item) => {
      item.classList.contains(tabName)
        ? item.classList.add("is-active")
        : item.classList.remove("is-active");
    });
  }
};

tab();
// ------------------------------------------------//
let showPicturesHover = function () {
  const imagesWrapper = document.querySelectorAll(".img__box");
  imagesWrapper.forEach((elem) => {
    const divHover = document.getElementById("img-hover");

    elem.addEventListener("mouseenter", function hideImages() {
      elem.appendChild(divHover);
      const liImageName = document.getElementById("img__name");
      liImageName.innerHTML = elem.firstElementChild.getAttribute("alt");
      liImageName.style.cssText = `font-weight: bold; font-size: 14.1771px; line-height: 25px; text-transform: uppercase; color: #18CFAB; display: block; padding-top: 30px; text-align: center`;

      const spanCategory = document.getElementById("category");

      let tabs = document.querySelectorAll(".work-tabs-item");
      tabs.forEach((element) => {
        let attr = element.getAttribute("data-filter");
        if (
          elem.firstElementChild.classList.contains(attr) &&
          attr !== "work-all"
        ) {
          spanCategory.innerHTML = element.innerHTML;
        }
      });

      spanCategory.style.cssText = `font-weight: 300; font-size: 12.1518px; line-height: 20px; color: #8A8A8A; display: block; text-align: center`;

      elem.firstElementChild.style.opacity = 0;
      divHover.style.opacity = 1;
    });

    divHover.addEventListener("mouseleave", function showImages() {
      elem.firstElementChild.style.opacity = 1;
      divHover.style.opacity = 0;
    });
  });
};

showPicturesHover();

let imageName = "work-all";
let imagesCategory = function () {
  let tabs = document.querySelectorAll(".work-tabs-item"),
    tabsContent;

  tabs.forEach((elem) => {
    elem.addEventListener("click", selectCategory);
  });

  function selectCategory() {
    tabs.forEach((elem) => {
      elem.classList.remove("active");
    });
    this.classList.add("active");
    imageName = this.getAttribute("data-filter");
    selectImages(imageName);
  }

  function selectImages(imageName) {
    tabsContent = document.querySelectorAll(".work__img");
    tabsContent.forEach((elem) => {
      if (elem.classList.contains(imageName)) {
        elem.classList.add("active");
      } else {
        elem.classList.remove("active");
      }
    });
  }
};

imagesCategory();

let loadMorePictures = function () {
  let flag = true;
  const buttonLoadMore = document.getElementById("load-more");
  const ulWithImages = document.getElementById("work__images__block");
  buttonLoadMore.addEventListener("click", function LoadPictures() {
    buttonLoadMore.style.padding = "30px 0 99px";

    setTimeout(() => {
      if (flag === true) {
        let divArr = [],
          imgArr = [];
        for (let i = 0; i < 12; i++) {
          divArr[i] = document.createElement("li");
          divArr[i].className = "img__box";
          imgArr[i] = document.createElement("img");
          imgArr[i].setAttribute("width", 285);
          imgArr[i].setAttribute("height", 211);
        }

        imgArr[0].setAttribute(
          "src",
          "img/img-content/our amazing work/Wordpress/wordpress2.jpg"
        );
        imgArr[0].setAttribute("alt", "Comments");
        imgArr[0].classList.add(
          "work__img",
          "work-wordpress",
          "work-all",
          "active"
        );

        imgArr[1].setAttribute(
          "src",
          "img/img-content/our amazing work/Web design/web-design6.jpg"
        );
        imgArr[1].setAttribute("alt", "Negotiations");
        imgArr[1].classList.add(
          "work__img",
          "work-web-design",
          "work-all",
          "active"
        );

        imgArr[2].setAttribute(
          "src",
          "img/img-content/our amazing work/Graphic design/graphic-design.jpg"
        );
        imgArr[2].setAttribute("alt", "Bright design");
        imgArr[2].classList.add(
          "work__img",
          "work-graphic-design",
          "work-all",
          "active"
        );

        imgArr[3].setAttribute(
          "src",
          "img/img-content/our amazing work/Wordpress/wordpress8.jpg"
        );
        imgArr[3].setAttribute("alt", "Logo");
        imgArr[3].classList.add(
          "work__img",
          "work-wordpress",
          "work-all",
          "active"
        );

        imgArr[4].setAttribute(
          "src",
          "img/img-content/our amazing work/Web design/web-design1.jpg"
        );
        imgArr[4].setAttribute("alt", "Icons");
        imgArr[4].classList.add(
          "work__img",
          "work-web-design",
          "work-all",
          "active"
        );

        imgArr[5].setAttribute(
          "src",
          "img/img-content/our amazing work/Landing pages/landing-page1.jpg"
        );
        imgArr[5].setAttribute("alt", "Variety");
        imgArr[5].classList.add(
          "work__img",
          "work-landing-pages",
          "work-all",
          "active"
        );

        imgArr[6].setAttribute(
          "src",
          "img/img-content/our amazing work/Landing pages/landing-page7.jpg"
        );
        imgArr[6].setAttribute("alt", "Phones");
        imgArr[6].classList.add(
          "work__img",
          "work-landing-pages",
          "work-all",
          "active"
        );

        imgArr[7].setAttribute(
          "src",
          "img/img-content/our amazing work/Wordpress/wordpress4.jpg"
        );
        imgArr[7].setAttribute("alt", "Tablets");
        imgArr[7].classList.add(
          "work__img",
          "work-wordpress",
          "work-all",
          "active"
        );

        imgArr[8].setAttribute(
          "src",
          "img/img-content/our amazing work/Web design/web-design7.jpg"
        );
        imgArr[8].setAttribute("alt", "Network");
        imgArr[8].classList.add(
          "work__img",
          "work-web-design",
          "work-all",
          "active"
        );

        imgArr[9].setAttribute(
          "src",
          "img/img-content/our amazing work/Graphic design/graphic-design9.jpg"
        );
        imgArr[9].setAttribute("alt", "Pictures");
        imgArr[9].classList.add(
          "work__img",
          "work-graphic-design",
          "work-all",
          "active"
        );

        imgArr[10].setAttribute(
          "src",
          "img/img-content/our amazing work/Wordpress/wordpress9.jpg"
        );
        imgArr[10].setAttribute("alt", "Logo W");
        imgArr[10].classList.add(
          "work__img",
          "work-wordpress",
          "work-all",
          "active"
        );

        imgArr[11].setAttribute(
          "src",
          "img/img-content/our amazing work/Web design/web-design4.jpg"
        );
        imgArr[11].setAttribute("alt", "Laptop");
        imgArr[11].classList.add(
          "work__img",
          "work-web-design",
          "work-all",
          "active"
        );

        for (let i = 0; i < 12; i++) {
          ulWithImages.appendChild(divArr[i]);
          divArr[i].appendChild(imgArr[i]);
        }

        selectImgs();
        showPicturesHover();

        buttonLoadMore.remove();
        ulWithImages.style.paddingBottom = "99px";
      }
      buttonLoadMore.style.padding = "70px 0 99px";
    });

    function selectImgs() {
      let tabsContent = document.querySelectorAll(".work__img");
      tabsContent.forEach((elem) => {
        if (elem.classList.contains(imageName)) {
          elem.classList.add("active");
        } else {
          elem.classList.remove("active");
        }
      });
    }
  });
};
loadMorePictures();

let pictureContent = function () {
  let tabs = document.querySelectorAll(".slider__circle"),
    tabsContent = document.querySelectorAll(".reviews__text"),
    tabsName = document.querySelectorAll(".reviews__name"),
    tabsJob = document.querySelectorAll(".reviews__job"),
    tabsPhoto = document.querySelectorAll(".big-photo__img"),
    tabsPicture = document.querySelectorAll(".slide__img"),
    leftArrow = document.getElementById("left"),
    rightArrow = document.getElementById("right"),
    wrapperContent = document.getElementById("reviews-slider"),
    wrapperName = document.getElementById("name-slider"),
    wrapperJob = document.getElementById("job-slider"),
    bigPhotoWrapper = document.getElementsByClassName("reviews__big-photo")[0],
    index;

  tabs.forEach((elem) => {
    if (elem.classList.contains("active__reviews")) {
      index = +elem.getAttribute("data-index");
    }
  });

  tabs.forEach((elem) => {
    elem.addEventListener("click", selectTab);
  });

  function selectTab() {
    tabs.forEach((elem) => {
      elem.classList.remove("active__reviews");
    });
    this.classList.add("active__reviews");
    index = +this.getAttribute("data-index");

    selectPicture(index);
  }

  leftArrow.addEventListener("click", function () {
    if (index !== 0) {
      index = +index - 1;
    } else {
      index = tabs.length - 1;
    }

    if (index === tabs.length - 1) {
      tabsPicture.forEach((elem) => {
        elem.remove();
      });
      tabsContent.forEach((elem) => {
        elem.remove();
      });
      tabsName.forEach((elem) => {
        elem.remove();
      });
      tabsJob.forEach((elem) => {
        elem.remove();
      });
      tabsPhoto.forEach((elem) => {
        elem.remove();
      });

      for (let i = 0; i < tabs.length; i++) {
        if (i === 0) {
          tabs[i].appendChild(tabsPicture[tabs.length - 1]);
          wrapperContent.appendChild(tabsContent[tabs.length - 1]);
          wrapperName.appendChild(tabsName[tabs.length - 1]);
          wrapperJob.appendChild(tabsJob[tabs.length - 1]);
          bigPhotoWrapper.appendChild(tabsPhoto[tabs.length - 1]);
        } else {
          tabs[i].appendChild(tabsPicture[i - 1]);
          wrapperContent.appendChild(tabsContent[i - 1]);
          wrapperName.appendChild(tabsName[i - 1]);
          wrapperJob.appendChild(tabsJob[i - 1]);
          bigPhotoWrapper.appendChild(tabsPhoto[i - 1]);
        }
      }

      tabsContent = document.querySelectorAll(".reviews__text");
      tabsName = document.querySelectorAll(".reviews__name");
      tabsJob = document.querySelectorAll(".reviews__job");
      tabsPhoto = document.querySelectorAll(".big-photo__img");
      tabsPicture = document.querySelectorAll(".slide__img");
    }
    selectPicture(index);
  });

  rightArrow.addEventListener("click", function () {
    index = (+index + 1) % tabs.length;

    if (index === 0) {
      tabsPicture.forEach((elem) => {
        elem.remove();
      });
      tabsContent.forEach((elem) => {
        elem.remove();
      });
      tabsName.forEach((elem) => {
        elem.remove();
      });
      tabsJob.forEach((elem) => {
        elem.remove();
      });
      tabsPhoto.forEach((elem) => {
        elem.remove();
      });

      for (let i = 0; i < tabs.length; i++) {
        tabs[i].appendChild(tabsPicture[(i + 1) % tabs.length]);
        wrapperContent.appendChild(tabsContent[(i + 1) % tabs.length]);
        wrapperName.appendChild(tabsName[(i + 1) % tabs.length]);
        wrapperJob.appendChild(tabsJob[(i + 1) % tabs.length]);
        bigPhotoWrapper.appendChild(tabsPhoto[(i + 1) % tabs.length]);
      }

      tabsContent = document.querySelectorAll(".reviews__text");
      tabsName = document.querySelectorAll(".reviews__name");
      tabsJob = document.querySelectorAll(".reviews__job");
      tabsPhoto = document.querySelectorAll(".big-photo__img");
      tabsPicture = document.querySelectorAll(".slide__img");
    }
    selectPicture(index);
  });

  function selectPicture(index) {
    tabs.forEach((elem) => {
      elem.classList.remove("active__reviews");
    });
    tabsContent.forEach((elem) => {
      elem.classList.remove("active__reviews");
    });
    tabsName.forEach((elem) => {
      elem.classList.remove("active__reviews");
    });
    tabsJob.forEach((elem) => {
      elem.classList.remove("active__reviews");
    });
    tabsPhoto.forEach((elem) => {
      elem.classList.remove("active__reviews");
    });

    tabs[index].classList.add("active__reviews");
    tabsContent[index].classList.add("active__reviews");
    tabsName[index].classList.add("active__reviews");
    tabsJob[index].classList.add("active__reviews");
    tabsPhoto[index].classList.add("active__reviews");
  }
};
pictureContent();
